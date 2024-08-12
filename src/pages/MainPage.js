import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MainPage.css';

import motorcycleIcon from '../assets/images/image.png';
import helmetIcon from '../assets/images/image copy.png';
import dangerIcon from '../assets/images/image copy 2.png';
import speedIcon from '../assets/images/image copy 3.png';

function MainPage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // 1초마다 현재 시간 업데이트

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 타이머 클리어
  }, []);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year} - ${month} - ${day}`;
  };

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours} : ${minutes} : ${seconds}`;
  };

  return (
    <div className="main-page">
      <div className="icon-container">
        <img src={motorcycleIcon} alt="Motorcycle Icon" className="motorcycle-icon" />
      </div>
      <div className="status-container">
        <h2>단속현황</h2>
        <p>{formatDate(currentTime)}</p>
        <p>{formatTime(currentTime)}</p>
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
      <Link to="/analysis">
        <button className="start-button">시작하기 →</button>
      </Link>
    </div>
  );
}

export default MainPage;
