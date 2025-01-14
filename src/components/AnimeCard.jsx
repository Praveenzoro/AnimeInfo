import React from 'react';
import AnimeImages from './Animeimg';

function AnimeCard({ result,animemg}) {
  console.log(result);

  return (
    <div className="container1">
 
      <div className="first">
        <h1 className="title">{result.title}</h1>
        
    
        <img
          src={result.images.jpg.image_url}
          alt={result.title}
          className="anime-main-image"
        />
        
    
        <h2>
          <span className="label">Duration:</span> <span className="data">{result.duration}</span>
        </h2>
        <h2>
          <span className="label">Type:</span> <span className="data">{result.type}</span>
        </h2>
        <h2>
          <span className="label">Episodes:</span> <span className="data">{result.episodes}</span>
        </h2>
        <h2>
          <span className="label">Rating:</span> <span className="data">{result.rating}</span>
        </h2>
        <h2>
          <span className="label">Score:</span> <span className="data">{result.score}</span>
        </h2>
        <h2>
          <span className="label">Rank:</span> <span className="data">{result.rank}</span>
        </h2>
        <h2>
          <span className="label">Popularity:</span> <span className="data">{result.popularity}</span>
        </h2>
        <h2>
          <span className="label">Year:</span> <span className="data">{result.year}</span>
        </h2>
        <h2>
          <span className="label">Season:</span> <span className="data">{result.season}</span>
        </h2>
        <h2>
          <span className="label">Status:</span> <span className="data">{result.status}</span>
        </h2>
      </div>

     
      <div className="second">
        <div className="second1">
          <p className="syn">
            <span className="label">Synopsis:</span> {result.synopsis}
          </p>

          {result.trailer.url && (
            <h2 className="trailer">
              <span className="label">Trailer:</span>{' '}
              <a href={result.trailer.url} target="_blank" rel="noreferrer">
                Watch
              </a>
            </h2>
          )}

          <h2 className="airing">
            <span className="label">Aired from:</span>{' '}
            <span className="data">{result.aired.string}</span>{' '}
            <span className="label">to:</span>{' '}
            <span className="data">{result.aired.to}</span>
          </h2>
          <AnimeImages animg={animemg} />
          {console.log(animemg)}
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;
