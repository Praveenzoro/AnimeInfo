import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id.trim() !== '') {
      onSearch(id);
    }
  };

  return (
    <form className='search' onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="inp"
      />
      <button type="submit" className="btn">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
