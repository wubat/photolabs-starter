import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton( { 
  toggleFavoritedPhotos, 
  photoId, 
  favPhotoArray,
  selectedPhoto
  // isFavorited
}) {

  // const [isFavorited, setFavorited] = useState(false) 
  
  const selected = favPhotoArray?.includes(photoId) || selectedPhoto


  const handleClick = (event) => {
    event.stopPropagation(); 
    // setFavorited(prev => !prev)
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