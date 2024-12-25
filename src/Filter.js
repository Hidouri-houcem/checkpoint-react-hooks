import React from 'react';

const Filter = ({ filter, setFilter }) => {
    const handleTitleChange = (e) => {
        setFilter({ ...filter, title: e.target.value });
    };

    const handleRatingChange = (e) => {
        const value = e.target.value.replace(',', '.'); 
        setFilter({ ...filter, rating: value }); 
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <input
                type="text"
                placeholder="Rechercher par titre"
                value={filter.title}
                onChange={handleTitleChange}
                style={{ marginRight: '10px' }}
            />
            <input
                type="text"
                placeholder="Note minimum (ex: 8,5 ou 8.5)"
                value={filter.rating}
                onChange={handleRatingChange}
            />
        </div>
    );
};

export default Filter;
