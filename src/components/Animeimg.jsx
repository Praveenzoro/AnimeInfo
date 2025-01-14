import React from "react";

const AnimeImages = ({ animg = [] }) => {
  return (
    <div className="images-container">
      {animg.length > 0 ? (
        animg.map((img, index) => (
          <img
            key={index}
            src={img.jpg.image_url}
            alt={`Anime Image ${index}`}
            className="anime-image"
          />
        ))
      ) : (
        <p>No images available</p>
      )}
    </div>
  );
};

export default AnimeImages;
