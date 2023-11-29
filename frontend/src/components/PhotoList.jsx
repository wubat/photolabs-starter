import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = ({ toggleFavoritedPhotos, onPhotoSelect, photos, setFavoritedPhoto, isFavorited, favPhotoArray }) => {

  const photosArray = photos.map((photo) => (//maps each photocard with photodata in an array
    <PhotoListItem 
      key={photo.id} 
      data={photo} 
      toggleFavoritedPhotos={toggleFavoritedPhotos}
      onPhotoSelect={onPhotoSelect}
      setFavoritedPhoto={setFavoritedPhoto}
      isFavorited={isFavorited}
      favPhotoArray={favPhotoArray}
    />
  ))

  return (
    <ul className="photo-list">

      {photosArray}

    </ul>
  );
};

export default PhotoList;
