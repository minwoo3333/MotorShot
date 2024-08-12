import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import VideoUploadPage from './pages/VideoUploadPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/upload" element={<VideoUploadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
