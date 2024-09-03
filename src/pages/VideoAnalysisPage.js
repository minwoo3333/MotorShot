import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/VideoAnalysisPage.css";
import sampleImage from "../assets/images/sample_video.png";
import recordDBIcon from "../assets/images/db.png";
import bikeIcon from "../assets/images/motorcycle.png";
import uploadIcon from "../assets/images/Group 73.png";
import helmetIcon from "../assets/images/helmet.png";
import dangerIcon from "../assets/images/danger.png";

function VideoAnalysisPage() {
  const [videoURL, setVideoURL] = useState("");
  const [videoName, setVideoName] = useState("sample_video.mp4"); // 기본 동영상 이름 설정
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [logs, setLogs] = useState([]);
  const [isWebSocketConnected, setIsWebSocketConnected] = useState(false);
  const navigate = useNavigate();
  const originalVideoRef = useRef(null);
  const wsRef = useRef(null);
  const canvasRef = useRef(null);
  const socketRef = useRef(null);
  useEffect(() => {
    const connectWebSocket = () => {
      wsRef.current = new WebSocket("ws://localhost:8080/ws");

      wsRef.current.onopen = () => setIsWebSocketConnected(true);
      wsRef.current.onmessage = (event) => setLogs((prevLogs) => [...prevLogs, event.data]);
      wsRef.current.onclose = () => {
        setIsWebSocketConnected(false);
        setTimeout(connectWebSocket, 3000);
      };
      wsRef.current.onerror = (error) => console.error("WebSocket error:", error);
    };

    connectWebSocket();

    return () => {
      if (wsRef.current) wsRef.current.close();
    };
  }, []);

  useEffect(() => {
    // WebSocket 연결
    socketRef.current = new WebSocket('ws://localhost:8080/ws');

    // WebSocket 메시지 수신 처리
    socketRef.current.onmessage = (event) => {
      try{
        console.log('Received WebSocket message:', event.data);
        const data = JSON.parse(event.data);
  
        if (data.frame_data) {
          const canvas = canvasRef.current;
          const context = canvas.getContext('2d');
          const img = new Image();
          img.src = `data:image/jpeg;base64,${data.frame_data}`;
          
          img.onload = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
          };
        }
      }
      catch(e){
        console.log("Received non-JSON message or invalid JSON:", event.data);
      }
    };

    socketRef.current.onopen = () => {
      console.log('WebSocket connected');
    };

    socketRef.current.onclose = () => {
      console.log('WebSocket disconnected. Trying to reconnect...');
      setTimeout(() => {
        socketRef.current = new WebSocket('ws://localhost:8080/ws');
      }, 1000);
    };

    socketRef.current.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isWebSocketConnected && wsRef.current) {
        wsRef.current.send("ping");
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [isWebSocketConnected]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newVideoURL = URL.createObjectURL(file);
      setVideoURL(newVideoURL);
      setVideoName(file.name); // 업로드한 파일 이름을 videoName으로 설정
      setSelectedFile(file);
      setAnalysisResult(null);
      setLogs([]);
    }
  };

  const startAnalysis = async () => {
    if (!selectedFile) return;

    setIsAnalyzing(true);
    setLogs([]);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "http://localhost:8080/detect_helmet_video",
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        processAnalysisResult(result.results);
      } else {
        console.error("비디오 분석 중 오류 발생:", response.statusText);
      }
    } catch (error) {
      console.error("비디오 분석 요청 중 오류 발생:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const processAnalysisResult = (results) => {
    let totalHelmetCount = 0;
    let totalNoHelmetCount = 0;
    let frameCount = 0;

    results.forEach((frame, index) => {
      if (index % 10 === 0) {
        frameCount++;
        frame.detections.forEach((detection) => {
          if (detection.class === 1) {
            totalHelmetCount++;
          } else if (detection.class === 0) {
            totalNoHelmetCount++;
          }
        });
      }
    });

    const averageHelmetCount = Math.round(totalHelmetCount / frameCount);
    const averageNoHelmetCount = Math.round(totalNoHelmetCount / frameCount);

    setAnalysisResult({
      helmetCount: averageHelmetCount,
      dangerCount: averageNoHelmetCount,
    });
  };

  return (
    <div className="analysis-page">
      <div className="main-content">
        <div className="video-analysis">
          <div className="video-header">
            <div className="stats">
              {/* 헬멧미착용 */}
              <div className="detection-summary">
                <div className="detection-icon">
                  <svg className="progress-circle" viewBox="0 0 36 36">
                    <path
                      className="circle-bg"
                      d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle helmet"
                      strokeDasharray="75, 100" // 헬멧미착용 비율에 맞게 수정
                      d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <image
                      href={helmetIcon}
                      x="9" y="9" height="18px" width="18px" // 아이콘 크기 18px로 조정
                    />
                  </svg>
                </div>
                <div className="detection-text">
                  <p className="detection-label">헬멧미착용</p>
                  <p className="detection-count">{analysisResult ? analysisResult.helmetCount : "04"}</p>
                </div>
              </div>

              {/* 위험운전 */}
              <div className="detection-summary">
                <div className="detection-icon">
                  <svg className="progress-circle" viewBox="0 0 36 36">
                    <path
                      className="circle-bg"
                      d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle danger"
                      strokeDasharray="25, 100" // 위험운전 비율에 맞게 수정
                      d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <image
                      href={dangerIcon}
                      x="9" y="9" height="18px" width="18px" // 아이콘 크기 18px로 조정
                    />
                  </svg>
                </div>
                <div className="detection-text">
                  <p className="detection-label">위험운전</p>
                  <p className="detection-count">{analysisResult ? analysisResult.dangerCount : "01"}</p>
                </div>
              </div>
            </div>
            <span className="video-name-unique">{videoName}</span> {/* videoName을 표시 */}
            <div className="upload-container">
              <input
                type="file"
                accept="video/*"
                style={{ display: "none" }}
                id="file-upload"
                onChange={handleFileChange}
              />
              <label htmlFor="file-upload" className="upload-button">
                <img src={uploadIcon} alt="업로드 아이콘" />
              </label>
            </div>
          </div>

          <div className="video-container">
            {videoURL ? (
              <>
                <button className="analyze-button" onClick={startAnalysis} disabled={isAnalyzing}>
                  {isAnalyzing ? "분석 중..." : "분석 시작"}
                </button>
                <canvas
                  ref={canvasRef}
                  className="video-overlay"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 100,
                    pointerEvents: "none",
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </>
            ) : (
              <img src={sampleImage} alt="Sample Video" className="video-frame" />
            )}
          </div>
          <div className="video-footer">
            <img src={bikeIcon} alt="오토바이 아이콘" className="footer-icon" />
          </div>
        </div>
      </div>

      <div className="right-sidebar">
        <h3>원본영상</h3>
        <div className="original-video">
          {videoURL ? (
            <video ref={originalVideoRef} className="thumbnail" controls>
              <source src={videoURL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={sampleImage} alt="Original Video" className="thumbnail" />
          )}
        </div>
        <h3>분석 Log</h3>
        <div className="log-container">
          {logs.map((log, index) => (
            <p key={index} className="log-item">
              {`000${index + 1}`.slice(-4)} {log}
            </p>
          ))}
        </div>
        <div className="sidebar-footer" onClick={() => navigate("/record-db")}>
          <img src={recordDBIcon} alt="DB 아이콘" className="footer-icon" />
          <span className="footer-text">단속기록 DB</span>
        </div>
      </div>
    </div>
  );
}

export default VideoAnalysisPage;
