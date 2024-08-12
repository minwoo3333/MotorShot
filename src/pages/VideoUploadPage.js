import React, { useState } from 'react';
import '../styles/VideoUploadPage.css';  // CSS 파일을 임포트합니다.

const VideoUploadPage = () => {
    const [videoSrc, setVideoSrc] = useState(null);

    const handleVideoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const videoURL = URL.createObjectURL(file);
            setVideoSrc(videoURL);
        }
    };

    return (
        <div className="page-container">
            <div className="sidebar">
                <div className="menu-item">
                    <img src="/path/to/upload-icon.svg" alt="Upload Video" className="icon" />
                    <span>업로드 영상 분석</span>
                </div>
                <div className="menu-item">
                    <span>헬멧 미착용 탐지</span>
                </div>
                <div className="menu-item">
                    <span>위험 판단</span>
                </div>
                <div className="menu-item">
                    <span>속도 위반 탐지</span>
                </div>
                <div className="menu-item">
                    <span>실시간 CCTV 탐지</span>
                </div>
            </div>
            <div className="main-content">
                <div className="video-container">
                    {videoSrc ? (
                        <video controls className="video">
                            <source src={videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <div className="upload-prompt">
                            <label htmlFor="video-upload" className="upload-label">
                                비디오를 업로드하세요
                            </label>
                            <input
                                type="file"
                                id="video-upload"
                                accept="video/*"
                                onChange={handleVideoUpload}
                                style={{ display: 'none' }}
                            />
                        </div>
                    )}
                </div>
                <div className="status-bar">
                    <div className="status-item">
                        <img src="/path/to/helmet-icon.svg" alt="Helmet Violation" className="status-icon" />
                        <span>헬멧미착용</span>
                        <span className="status-number">04</span>
                    </div>
                    <div className="status-item">
                        <img src="/path/to/warning-icon.svg" alt="Warning" className="status-icon" />
                        <span>위험판단</span>
                        <span className="status-number">01</span>
                    </div>
                    <div className="status-item">
                        <img src="/path/to/speeding-icon.svg" alt="Speeding" className="status-icon" />
                        <span>속도위반</span>
                        <span className="status-number">02</span>
                    </div>
                </div>
            </div>
            <div className="thumbnail-container">
                <div className="thumbnail-item">
                    <img src="/path/to/thumbnail1.png" alt="Thumbnail 1" className="thumbnail-image" />
                    <span>헬멧미착용</span>
                </div>
                <div className="thumbnail-item">
                    <img src="/path/to/thumbnail2.png" alt="Thumbnail 2" className="thumbnail-image" />
                    <span>위험판단</span>
                </div>
                <div className="thumbnail-item">
                    <img src="/path/to/thumbnail3.png" alt="Thumbnail 3" className="thumbnail-image" />
                    <span>속도위반</span>
                </div>
            </div>
        </div>
    );
};

export default VideoUploadPage;

