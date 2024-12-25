import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovieForm from './AddMovieForm';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    { title: 'Blacklight', description: 'Travis Block, un agent du FBI, doit faire taire un autre agent qui souhaite révéler à la presse les méthodes du Bureau.', posterURL: './images/BLACKLIGHT (2022).jpg', rating: 9.0 },
    { title: 'Forever Rich', description: "Une star montante du rap perd tout contrôle lorsqu'une vidéo humiliante devient virale et le force à se battre pour sauver sa réputation au cours d'une nuit sans fin.", posterURL: './images/Forever Rich.jpg', rating: 8.5 },
    { title: 'Undercover : Une histoire vraie', description: "Rick Wershe est un père célibataire qui lutte pour élever deux adolescents au plus fort de l'épidémie de crack des années 1980 à Detroit.", posterURL: './images/Cocaine - La vera storia di White Boy Rick (2018) di Yann Demange.jpg', rating: 6.5 },
    { title: 'Braquage', description: "Une jeune détective demande l'aide d'un policier déchu, lui donnant ainsi la possibilité de retrouver sa vie d'avant en échange de la résolution d'une affaire de braquage de banque.", posterURL: './images/Braquage.jpg', rating: 8 },
    { title: 'Le Détournement', description: "Pour renverser leur gouvernement soutenu par l'armée, quatre hommes détournent un avion et prennent les passagers en otage au nom du changement social.", posterURL: './images/Le Détournement.jpg', rating: 8.5 },
    { title: 'The Menendez Brothers', description: "Plus de trente ans après leur crime sensationnel qui a captivé la nation, les frères Lyle et Erik Menendez, qui purgent une peine de prison à perpétuité pour le meurtre de leurs parents, plaident leur cause.", posterURL: './images/The Menendez Brothers.jpg', rating: 9.5 },
    
  ]);

  const [filter, setFilter] = useState({ title: '', rating: '' });
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [showAddMovieForm, setShowAddMovieForm] = useState(false);

  const handleSearch = () => {
    const filtered = movies.filter((movie) => {
      const titleMatch = movie.title.toLowerCase().includes(filter.title.toLowerCase());
      const parsedRating = filter.rating ? parseFloat(filter.rating.replace(',', '.')) : null;
      const ratingMatch = parsedRating !== null ? movie.rating >= parsedRating : true;
      return titleMatch && ratingMatch;
    });
    setFilteredMovies(filtered);
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  return (
    <div>

      <nav className="navbar">
        <div className="navbar-left">
          <h1 className="logo">NETFLIX</h1>
        </div>
        <div className="navbar-right">
          <input
            type="text"
            placeholder="Rechercher par titre"
            value={filter.title}
            onChange={(e) => setFilter({ ...filter, title: e.target.value })}
            className="search-input"
          />
          <input
            type="text"
            placeholder="Note minimum"
            value={filter.rating}
            onChange={(e) => setFilter({ ...filter, rating: e.target.value })}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            Rechercher
          </button>
        </div>
      </nav>





      <MovieList movies={filteredMovies} />


      <button
  onClick={() => setShowAddMovieForm(!showAddMovieForm)}
  className="add-movie-button"
>
  {showAddMovieForm ? 'Annuler' : 'Ajouter un film'}
</button>
      {showAddMovieForm && <AddMovieForm addMovie={addMovie} />}

    </div>
  );
};

export default App;
