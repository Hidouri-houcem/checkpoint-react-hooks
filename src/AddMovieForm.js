import React, { useState } from 'react';

const AddMovieForm = ({ addMovie }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [posterURL, setPosterURL] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && description && posterURL && rating) {
            addMovie({ title, description, posterURL, rating: parseFloat(rating) });
            setTitle('');
            setDescription('');
            setPosterURL('');
            setRating('');
        } else {
            alert("Tous les champs doivent être remplis !");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-movie-form">
            <div>
                <label>Titre</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>URL de l'affiche</label>
                <input
                    type="url"
                    value={posterURL}
                    onChange={(e) => setPosterURL(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Note</label>
                <input
                    type="number"
                    step="0.1"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Ajouter le film</button>
        </form>
    );
};

export default AddMovieForm;
