import React from 'react';
import './MainPage.css';

// 이미지를 경로에 맞게 import 합니다.
import motorcycleIcon from '../assets/images/image.png';
import helmetIcon from '../assets/images/image copy.png';
import dangerIcon from '../assets/images/image copy 2.png';
import speedIcon from '../assets/images/image copy 3.png';

function MainPage() {
  return (
    <div className="main-page">
      <header className="header">
        <h1>Main</h1>
      </header>
      <div className="content">
        <div className="icon-container">
          <img src={motorcycleIcon} alt="Motorcycle Icon" className="motorcycle-icon" />
        </div>
        <div className="status-container">
          <h2>단속현황</h2>
          <p>2024 - 08 - 10</p>
          <p>17 : 50 : 10</p>
          <div className="status-details">
            <div className="status-item">
              <img src={helmetIcon} alt="Helmet Not Worn" />
              <p>04</p>
              <p>헬멧미착용</p>
            </div>
            <div className="status-item">
              <img src={dangerIcon} alt="Dangerous Driving" />
              <p>01</p>
              <p>위험운전</p>
            </div>
            <div className="status-item">
              <img src={speedIcon} alt="Speeding" />
              <p>02</p>
              <p>속도위반</p>
            </div>
          </div>
        </div>
        <button className="start-button">시작하기 →</button>
      </div>
    </div>
  );
}

export default MainPage;
