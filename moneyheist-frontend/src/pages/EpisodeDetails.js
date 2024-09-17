import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EpisodeDetails.css';

const EpisodeDetail = () => {
    const { id } = useParams();  // Get episode ID from URL
    const [episode, setEpisode] = useState(null);
    const [comments, setComments] = useState([]);  // Initialize comments as an empty array
    const [newComment, setNewComment] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch episode details
        fetch(`https://minhajminhaj.pythonanywhere.com/api/episodes/${id}/`)
            .then(response => response.json())
            .then(data => {
                setEpisode(data);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching episode details:', error));

        // Fetch episode comments
        fetch(`https://minhajminhaj.pythonanywhere.com/api/episodes/${id}/comments/`)
            .then(response => response.json())
            .then(data => {
                setComments(data);  // Ensure data is an array
            })
            .catch(error => console.error('Error fetching comments:', error));
    }, [id]);

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleCommentSubmit = (event) => {
        event.preventDefault();

        // Post new comment to backend
        fetch(`https://minhajminhaj.pythonanywhere.com/api/episodes/${id}/comments/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: newComment }),  // Ensure this matches your backend field
        })
        .then(response => response.json())
        .then(data => {
            // Add new comment to the list of comments
            setComments([...comments, data]);
            setNewComment('');  // Clear comment input
        })
        .catch(error => console.error('Error posting comment:', error));
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="episode-detail">
            <h1>{episode.title}</h1>
            <img src={episode.image} alt={episode.title} className="episode-image" />
            <p>{episode.description}</p>

            {/* Comment Section */}
            <div className="comments-section">
                <h2>Comments</h2>
                <ul className="comments-list">
                    {Array.isArray(comments) && comments.length > 0 ? (
                        comments.map(comment => (
                            <li key={comment.id} className="comment-item">
                                <p>{comment.content}</p>
                                <small>Posted on: {new Date(comment.created_at).toLocaleString()}</small>
                            </li>
                        ))
                    ) : (
                        <p>No comments yet. Be the first to comment!</p>
                    )}
                </ul>

                {/* Add New Comment */}
                <form onSubmit={handleCommentSubmit} className="comment-form">
                    <textarea
                        value={newComment}
                        onChange={handleCommentChange}
                        placeholder="Add a comment..."
                        required
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default EpisodeDetail;
