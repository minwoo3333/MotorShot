import React from 'react';
import '../styles/VideoAnalysisPage.css';

function DetectionFooter({ helmetCount, dangerCount, speedCount }) {
  return (
    <div className="detection-footer">
      <div className="detection-summary">
        <div className="detection-icon helmet"></div>
        <p>헬멧미착용</p>
        <p>{helmetCount}</p>
      </div>
      <div className="detection-summary">
        <div className="detection-icon danger"></div>
        <p>위험운전</p>
        <p>{dangerCount}</p>
      </div>
      <div className="detection-summary">
        <div className="detection-icon speed"></div>
        <p>과속운전</p>
        <p>{speedCount}</p>
      </div>
    </div>
  );
}

export default DetectionFooter;
