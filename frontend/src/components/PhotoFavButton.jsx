import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton( { 
  toggleFavoritedPhotos, 
  photoId, 
  favPhotoArray
}) {

  const selected = favPhotoArray?.includes(photoId) 

  const handleClick = (event) => {
    event.stopPropagation()
    toggleFavoritedPhotos(photoId);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon
         selected={selected} 
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;