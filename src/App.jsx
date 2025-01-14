import React, { useState } from 'react';
import axios from 'axios';
import BackgroundImage from './components/BackgroundImage';
import SearchForm from './components/SearchForm';
import AnimeList from './components/AnimeList';
import Popup from './components/Popup';
import './index.css';

function App() {
  const [animeData, setAnimeData] = useState([]);
  const [animeImg, setAnimeImg] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [error, setError] = useState(null); 

  const handleSearch = async (id) => {
    try {
      setError(null);
      const animeResponse = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`);
      const imagesResponse = await axios.get(`https://api.jikan.moe/v4/anime/${id}/pictures`);

      setAnimeData([animeResponse.data.data]); 
      setAnimeImg(imagesResponse.data.data);
      setIsExpanded(true);
    } catch (error) {
      console.error('Error fetching anime data:', error);
      setAnimeData([]);
      setAnimeImg([]);
      setError('Failed to fetch data. Please try a different ID or check your connection.');
    }
  };

  return (
    <div className="App">
      <BackgroundImage />
      <div className="whole">
        <div className={`post ${isExpanded ? 'post-expanded' : 'post-collapsed'}`}>
          <SearchForm onSearch={handleSearch} />
          <AnimeList animeData={animeData} animeImg={animeImg} />
        </div>
      </div>

     
      {error && <Popup message={error} onClose={() => setError(null)} />}
    </div>
  );
}

export default App;
