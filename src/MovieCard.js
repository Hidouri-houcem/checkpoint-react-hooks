import React, { useState } from 'react';
import './App.css'; 

const MovieCard = ({ movie }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`movie-card ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img className="movie-poster" src={movie.posterURL} alt={movie.title} />
            <div className="movie-details">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-description">{movie.description}</p>
                <p className="movie-rating">Note: {movie.rating}</p>
            </div>
        </div>
    );
};

export default MovieCard;
