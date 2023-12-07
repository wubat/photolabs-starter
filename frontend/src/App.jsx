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
    setFavoritedPhoto
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
        setFavoritedPhoto={setFavoritedPhoto}
        isFavorited={state.isFavorited}
        favPhotoArray={state.favPhotoIds}
      />

      {state.isModalOpen && 
        <PhotoDetailsModal 
          handleCloseModal={onClosePhotoDetailsModal}
          photos={state.photoData}
          toggleFavoritedPhotos={updateToFavPhotoIds}
          onPhotoSelect={onPhotoSelect}
          state={state}
          setFavoritedPhoto={setFavoritedPhoto}
          favPhotoArray={state.favPhotoIds}
        />
      }
      
    </div>
  );
};

export default App;
