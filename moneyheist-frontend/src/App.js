import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EpisodeDetails from './pages/EpisodeDetails';
import CastPage from './pages/CastPage';
import './App.css';  // Global CSS

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/episodes/:id" element={<EpisodeDetails />} />
                <Route path="/cast" element={<CastPage />} />
            </Routes>
        </Router>
    );
}

export default App;
