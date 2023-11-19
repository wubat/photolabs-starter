import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton( props) {

  const [isFavorited, setFavorited] = useState(false) // track individual fav state on each photocard
  const toggleFavorited = useCallback(() => {
    setFavorited(prev => !prev)
  }, [] )
  const handleClick = () => {
    toggleFavorited()
    props.toggleFavoritedPhotos(props.photoId)
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon
         selected={isFavorited}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;