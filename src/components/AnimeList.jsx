import React from 'react';
import AnimeCard from './AnimeCard';

const AnimeList = ({ animeData, animeImg }) => {

  console.log(`${animeImg} imageedata`)
  return (
    <div className="infos">
    
    
      {animeData.length > 0 ? (
        animeData.map((result, index) => (
          <AnimeCard key={index} result={result}  animemg={animeImg} />
        ))
      ) : (
        <h1>Enter Random Id</h1>
      )}
             
    </div>
    
  );
};

export default AnimeList;
