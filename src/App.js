import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import VideoAnalysisPage from './pages/VideoAnalysisPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/analysis" element={<VideoAnalysisPage />} />
      </Routes>
    </Router>
  );
}

export default App;
