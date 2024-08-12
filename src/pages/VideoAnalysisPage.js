// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/VideoAnalysisPage.css';
// import sampleImage from '../assets/images/sample_video.png';

// function VideoAnalysisPage() {
//   const [uploadedVideo, setUploadedVideo] = useState(null);
//   const [videoURL, setVideoURL] = useState(''); // 비디오 URL 상태 추가
//   const navigate = useNavigate();

//   // 각 비디오 엘리먼트를 참조하기 위한 ref
//   const mainVideoRef = useRef(null);
//   const originalVideoRef = useRef(null);
//   const detectionVideoRefs = useRef([]);

//   // 가상의 감지된 차량 데이터
//   const detectedVehicles = [
//     {
//       id: 1,
//       type: '헬멧미착용',
//       licensePlate: '가1234',
//       time: '2024-08-10 22:04:45',
//       video: videoURL,
//     },
//     {
//       id: 2,
//       type: '위험운전',
//       licensePlate: '나5678',
//       time: '2024-08-10 22:05:30',
//       video: videoURL,
//     },
//     {
//       id: 3,
//       type: '과속운전',
//       licensePlate: '다9101',
//       time: '2024-08-10 22:06:15',
//       video: videoURL,
//     },
//   ];

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const newVideoURL = URL.createObjectURL(file);
//       setUploadedVideo(file.name);
//       setVideoURL(newVideoURL);
//     }
//   };

//   const syncVideos = (action) => {
//     if (action === 'play') {
//       if (originalVideoRef.current) originalVideoRef.current.play();
//       detectionVideoRefs.current.forEach(video => {
//         if (video) video.play();
//       });
//     } else if (action === 'pause') {
//       if (originalVideoRef.current) originalVideoRef.current.pause();
//       detectionVideoRefs.current.forEach(video => {
//         if (video) video.pause();
//       });
//     }
//   };

//   useEffect(() => {
//     const mainVideoElement = mainVideoRef.current;

//     const handlePlay = () => syncVideos('play');
//     const handlePause = () => syncVideos('pause');

//     if (mainVideoElement) {
//       mainVideoElement.addEventListener('play', handlePlay);
//       mainVideoElement.addEventListener('pause', handlePause);
//     }

//     return () => {
//       if (mainVideoElement) {
//         mainVideoElement.removeEventListener('play', handlePlay);
//         mainVideoElement.removeEventListener('pause', handlePause);
//       }
//     };
//   }, [videoURL]);

//   const handleGoBack = () => {
//     navigate(-1); // 이전 페이지로 이동
//   };

//   return (
//     <div className="analysis-page">
//       <div className="sidebar">
//         <h2>업로드영상 분석</h2>
//         <ul className="record-list">
//           <li>헬멧미착용<br />단속기록</li>
//           <li>위험운전<br />단속기록</li>
//           <li>속도위반<br />단속기록</li>
//         </ul>
//         <button className="cctv-button">실시간 CCTV 전환</button>
//         <button className="back-button" onClick={handleGoBack}>뒤로가기</button>
//       </div>

//       <div className="main-content">
//         <div className="video-analysis">
//           <div className="video-header">
//             <span>영상분석</span>
//             <span>{uploadedVideo ? uploadedVideo : "sample_video.mp4"}</span>
//             <input
//               type="file"
//               accept="video/*"
//               style={{ display: 'none' }}
//               id="file-upload"
//               onChange={handleFileChange}
//             />
//             <label htmlFor="file-upload" className="upload-button">
//               동영상 업로드 ⬆
//             </label>
//           </div>
//           <div className="video-container">
//             {videoURL ? (
//               <video ref={mainVideoRef} className="video-frame" controls>
//                 <source src={videoURL} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             ) : (
//               <img src={sampleImage} alt="Sample Video" className="video-frame" />
//             )}
//             <div className="video-controls">
//               <button onClick={() => mainVideoRef.current && mainVideoRef.current.play()}>◀</button>
//               <button onClick={() => mainVideoRef.current && mainVideoRef.current.pause()}>⏸</button>
//               <button onClick={() => mainVideoRef.current && mainVideoRef.current.play()}>▶</button>
//               <span>04:32 / 08:00</span>
//             </div>
//           </div>
//           <div className="detection-footer">
//             <div className="detection-summary">
//               <div className="detection-icon helmet"></div>
//               <p>헬멧미착용</p>
//               <p>04</p>
//             </div>
//             <div className="detection-summary">
//               <div className="detection-icon danger"></div>
//               <p>위험운전</p>
//               <p>01</p>
//             </div>
//             <div className="detection-summary">
//               <div className="detection-icon speed"></div>
//               <p>과속운전</p>
//               <p>02</p>
//             </div>
//           </div>
//         </div>

//         <div className="right-sidebar">
//           <div className="video-thumbnail">
//             <h3>원본영상</h3>
//             {videoURL ? (
//               <video ref={originalVideoRef} className="thumbnail" controls>
//                 <source src={videoURL} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             ) : (
//               <img src={sampleImage} alt="Original Video" className="thumbnail" />
//             )}
//           </div>
//           <div className="detection-summary">
//             <h3>단속차량</h3>
//             {detectedVehicles.map((vehicle, index) => (
//               <div key={vehicle.id} className="detection-item">
//                 {vehicle.video ? (
//                   <video
//                     ref={el => (detectionVideoRefs.current[index] = el)}
//                     className="thumbnail"
//                     controls
//                   >
//                     <source src={vehicle.video} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//                 ) : (
//                   <img src={sampleImage} alt="Detection Video" className="thumbnail" />
//                 )}
//                 <div className="detection-info">
//                   <p>{vehicle.type} {vehicle.licensePlate}</p>
//                   <p>{vehicle.time}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default VideoAnalysisPage;

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/VideoAnalysisPage.css';
import sampleImage from '../assets/images/sample_video.png';
import DetectionFooter from '../components/DetectionFooter'; // 새로운 컴포넌트 임포트

function VideoAnalysisPage() {
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [videoURL, setVideoURL] = useState(''); // 비디오 URL 상태 추가
  const navigate = useNavigate();

  // 각 비디오 엘리먼트를 참조하기 위한 ref
  const mainVideoRef = useRef(null);
  const originalVideoRef = useRef(null);
  const detectionVideoRefs = useRef([]);

  // 가상의 감지된 차량 데이터
  const detectedVehicles = [
    {
      id: 1,
      type: '헬멧미착용',
      licensePlate: '가1234',
      time: '2024-08-10 22:04:45',
      video: videoURL,
    },
    {
      id: 2,
      type: '위험운전',
      licensePlate: '나5678',
      time: '2024-08-10 22:05:30',
      video: videoURL,
    },
    {
      id: 3,
      type: '과속운전',
      licensePlate: '다9101',
      time: '2024-08-10 22:06:15',
      video: videoURL,
    },
  ];

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newVideoURL = URL.createObjectURL(file);
      setUploadedVideo(file.name);
      setVideoURL(newVideoURL);
    }
  };

  const syncVideos = (action) => {
    if (action === 'play') {
      if (originalVideoRef.current) originalVideoRef.current.play();
      detectionVideoRefs.current.forEach(video => {
        if (video) video.play();
      });
    } else if (action === 'pause') {
      if (originalVideoRef.current) originalVideoRef.current.pause();
      detectionVideoRefs.current.forEach(video => {
        if (video) video.pause();
      });
    }
  };

  useEffect(() => {
    const mainVideoElement = mainVideoRef.current;

    const handlePlay = () => syncVideos('play');
    const handlePause = () => syncVideos('pause');

    if (mainVideoElement) {
      mainVideoElement.addEventListener('play', handlePlay);
      mainVideoElement.addEventListener('pause', handlePause);
    }

    return () => {
      if (mainVideoElement) {
        mainVideoElement.removeEventListener('play', handlePlay);
        mainVideoElement.removeEventListener('pause', handlePause);
      }
    };
  }, [videoURL]);

  const handleGoBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <div className="analysis-page">
      <div className="sidebar">
        <h2>업로드영상 분석</h2>
        <ul className="record-list">
          <li>헬멧미착용<br />단속기록</li>
          <li>위험운전<br />단속기록</li>
          <li>속도위반<br />단속기록</li>
        </ul>
        <button className="cctv-button">실시간 CCTV 전환</button>
        <button className="back-button" onClick={handleGoBack}>뒤로가기</button>
      </div>

      <div className="main-content">
        <div className="video-analysis">
          <div className="video-header">
            <span>영상분석</span>
            <span>{uploadedVideo ? uploadedVideo : "sample_video.mp4"}</span>
            <input
              type="file"
              accept="video/*"
              style={{ display: 'none' }}
              id="file-upload"
              onChange={handleFileChange}
            />
            <label htmlFor="file-upload" className="upload-button">
              동영상 업로드 ⬆
            </label>
          </div>
          <div className="video-container">
            {videoURL ? (
              <video ref={mainVideoRef} className="video-frame" controls>
                <source src={videoURL} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={sampleImage} alt="Sample Video" className="video-frame" />
            )}
            <div className="video-controls">
              <button onClick={() => mainVideoRef.current && mainVideoRef.current.play()}>◀</button>
              <button onClick={() => mainVideoRef.current && mainVideoRef.current.pause()}>⏸</button>
              <button onClick={() => mainVideoRef.current && mainVideoRef.current.play()}>▶</button>
              <span>04:32 / 08:00</span>
            </div>
          </div>
          <DetectionFooter helmetCount={'04'} dangerCount={'01'} speedCount={2} /> {/* 새로운 컴포넌트 사용 */}
        </div>

        <div className="right-sidebar">
          <div className="video-thumbnail">
            <h3>원본영상</h3>
            {videoURL ? (
              <video ref={originalVideoRef} className="thumbnail" controls>
                <source src={videoURL} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={sampleImage} alt="Original Video" className="thumbnail" />
            )}
          </div>
          <div className="detection-summary">
            <h3>단속차량</h3>
            {detectedVehicles.map((vehicle, index) => (
              <div key={vehicle.id} className="detection-item">
                {vehicle.video ? (
                  <video
                    ref={el => (detectionVideoRefs.current[index] = el)}
                    className="thumbnail"
                    controls
                  >
                    <source src={vehicle.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={sampleImage} alt="Detection Video" className="thumbnail" />
                )}
                <div className="detection-info">
                  <p>{vehicle.type} {vehicle.licensePlate}</p>
                  <p>{vehicle.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoAnalysisPage;


