import React from 'react';

import './App.scss';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import HomeRoute from './routes/HomeRoute';
import useApplicationData  from './hooks/useApplicationData'

const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    fetchPhotosByTopic,
  } = useApplicationData()

  //checks if favPhotos Array is populated for header badge
  const isFavPhotoExist = (state.favPhotoIds.length > 0) ? true : false 
  
  return (
    <div >
      <HomeRoute 
        isFavPhotoExist={isFavPhotoExist}
        toggleFavoritedPhotos={updateToFavPhotoIds}
        onPhotoSelect={onPhotoSelect}
        photos={state.photoData}
        topic={state.topicData}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />

      {state.isModalOpen && 
        <PhotoDetailsModal 
          handleCloseModal={onClosePhotoDetailsModal}
          photos={state.photoData}
          toggleFavoritedPhotos={updateToFavPhotoIds}
          onPhotoSelect={onPhotoSelect}
          state={state}
        />
      }
      
    </div>
  );
};

export default App;
