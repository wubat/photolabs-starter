import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from "../components/PhotoFavButton";
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = ({ 
  handleCloseModal, 
  state, 
  photos, 
  toggleFavoritedPhotos, 
  favPhotoArray 
}) => {

  const similarPhotosArray = Array.from(Array(4)).map((_, index) => (
    <PhotoListItem
      key={index}
      data={photos[index]}
      toggleFavoritedPhotos={toggleFavoritedPhotos}
    />
  ))

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleCloseModal} >
        <img src={closeSymbol} alt="close symbol" />
      </button>

        <div className="photo-details-modal-main-img__container" >
        <div className='photo-details-modal__header'>

          <PhotoFavButton 
          toggleFavoritedPhotos={toggleFavoritedPhotos}
          photoId={state.selectedPhoto.id}
          favPhotoArray={favPhotoArray}
          />
          
          <img src={state.selectedPhoto.urls.full} className='photo-details-modal__image' />

          <div className='photo-details-modal__photographer-details' >
            <img src={state.selectedPhoto.user.profile} className='photo-details-modal__photographer-profile' />
            <p className='photo-details-modal__photographer-info' >{state.selectedPhoto.user.username}</p>
            <p className='photo-details-modal__photographer-location' >{state.selectedPhoto.location.city}, {state.selectedPhoto.location.country}</p>
          </div>
        </div>
        </div>
      
      <div className='photo-details-modal__top-bar' >  
        <div className='photo-details-modal__images' >
          

          {similarPhotosArray} 
          
        
        </div>
      </div>



    </div>
  )
};

export default PhotoDetailsModal;
