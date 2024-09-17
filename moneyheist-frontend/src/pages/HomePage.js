import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './HomePage.css';
import Navbar from '../components/Navbar'; // Import the Navbar component

const HomePage = () => {
    const [episodes, setEpisodes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        fetch('http://localhost:8000/api/episodes/')
            .then(response => response.json())
            .then(data => setEpisodes(data))
            .catch(error => console.error('Error fetching episodes:', error));
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredEpisodes = episodes.filter(episode =>
        episode.title.toLowerCase().includes(searchTerm) ||
        episode.description.toLowerCase().includes(searchTerm)
    );

    const handleEpisodeClick = (episodeId) => {
        navigate(`/episodes/${episodeId}`); // Navigate to episode detail page
    };

    return (
        <div className="homepage">
            <Navbar /> {/* Add Navbar */}
            <header className="hero">
                <img src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQbm_e3DQYMqYApzHilEi8qF94zu9K_GiyEvxjgvBkIQNQSa7-BkkHBIisOIdPFdIkc77oWrA-a6LV8egGCoszLt1hpQ2TJz8-IBiUVfp8qwimlu3D5Yk83WUteWY1dElPHDp3DQco9xxtM3EHutQeyAvttk.jpg?r=f03" alt="Money Heist Header" className="header-image" />
                <div className="hero-text">
                    <h1>Money Heist</h1>
                    <h4>Discover the world of Money Heist. Find your favorite episodes and more.</h4>
                    <p>Money Heist (originally titled La Casa de Papel) is a Spanish television series that has captivated audiences worldwide with its intense storytelling, complex characters, and gripping heist drama. Created by Álex Pina.</p>
                </div>
            </header>
            <section className="search-section">
                <input
                    type="text"
                    placeholder="Search for episodes..."
                    className="search-bar"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </section>
            <section className="episode-list-section">
                <div className="episode-cards">
                    {filteredEpisodes.map(episode => (
                        <div
                            key={episode.id}
                            className="episode-card"
                            onClick={() => handleEpisodeClick(episode.id)}
                        >
                            <img src={episode.image} alt={episode.title} className="episode-card-image" />
                            <div className="episode-card-info">
                                <h3>{episode.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;
