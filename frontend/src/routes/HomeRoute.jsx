import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList'
import TopNavigation from '../components/TopNavigationBar';


const HomeRoute = ({ isFavPhotoExist, toggleFavoritedPhotos, onPhotoSelect , photos, topic, fetchPhotosByTopic }) => {

  return (
    <div className="home-route">
      <TopNavigation 
        isFavPhotoExist={isFavPhotoExist}
        topic={topic}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />

      <div className="photo-list">
        <PhotoList 
          toggleFavoritedPhotos={toggleFavoritedPhotos}
          onPhotoSelect={onPhotoSelect}
          photos={photos}
      />

        </div>
    </div>
  );
};

export default HomeRoute;
