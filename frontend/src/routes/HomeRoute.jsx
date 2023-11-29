import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList'
import TopNavigation from '../components/TopNavigationBar';


const HomeRoute = ({ isFavPhotoExist, toggleFavoritedPhotos, onPhotoSelect , photos, topic, fetchPhotosByTopic, setFavoritedPhoto, isFavorited, favPhotoArray }) => {

  return (
    <div className="home-route">
      <TopNavigation 
        isFavPhotoExist={isFavPhotoExist}
        topic={topic}
        fetchPhotosByTopic={fetchPhotosByTopic}
        toggleFavoritedPhotos={toggleFavoritedPhotos}
        
      />

      <div className="photo-list">
        <PhotoList 
          toggleFavoritedPhotos={toggleFavoritedPhotos}
          onPhotoSelect={onPhotoSelect}
          photos={photos}
          setFavoritedPhoto={setFavoritedPhoto}
          isFavorited={isFavorited}
          favPhotoArray={favPhotoArray}
      />

        </div>
    </div>
  );
};

export default HomeRoute;
