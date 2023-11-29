import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";



const PhotoListItem = ({onPhotoSelect, data, toggleFavoritedPhotos, setFavoritedPhoto, isFavorited, favPhotoArray }) => {

  return(
    <div className="photo-list__item" onClick={()=> onPhotoSelect(data)}>
      <PhotoFavButton  
        toggleFavoritedPhotos={toggleFavoritedPhotos}
        photoId={data.id}
        setFavoritedPhoto={setFavoritedPhoto}
        isFavorited={isFavorited}
        favPhotoArray={favPhotoArray}
      />

      <img src={data.urls.regular} className="photo-list__image"/>

      <div className="photo-list__user-info">
        <img src={data.user.profile} className="photo-list__user-profile"/>

        <div className="photo-list__user-details">
          <p className="photo-list__user-name"> {data.user.username} </p>
          <p className="photo-list__user-location"> {data.location.city}, {data.location.country} </p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
