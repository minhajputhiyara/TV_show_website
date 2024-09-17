import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './CastePage.css';

const CastPage = () => {
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const fetchCast = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/cast/');
                setCast(response.data);
            } catch (error) {
                console.error('Error fetching cast:', error);
            }
        };

        fetchCast();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="cast-page">
                <h1>Cast Members</h1>
                <ul className="cast-list">
                    {cast.length > 0 ? (
                        cast.map((castMember) => (
                            <li key={castMember.id}>
                                <img src={castMember.profile_pic} alt={castMember.name} className="cast-img" />
                                <h2>{castMember.name}</h2>
                                <p>{castMember.bio}</p>
                            </li>
                        ))
                    ) : (
                        <p>No cast members found.</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default CastPage;
