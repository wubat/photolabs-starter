import { useState, useReducer, useEffect, useCallback } from 'react'



function reducer(state, action) {
  switch (action.type) {
    case 'CLOSE_PHOTO_DETAILS_MODAL':
      return {...state, isModalOpen: false}

    case 'UPDATE_FAV_PHOTO_IDS': 
      const { photoId } = action.payload
      return{
        ...state, 
        favPhotoIds: state.favPhotoIds.includes(photoId)
        ? state.favPhotoIds.filter((id) => id !== photoId)
        : [...state.favPhotoIds, photoId],
      }

    case 'SELECT_PHOTO':
      return {...state, selectedPhoto: action.payload.photo, isModalOpen: true }

    case 'SET_PHOTO_DATA': 
      return {...state, photoData: action.payload}

    case 'SET_TOPICS':
      return {...state, topicData: action.payload}

    case 'SET_PHOTOS_BY_TOPIC':
      return{...state, photoData: action.payload}
////////////////////////////////////////////////////////

    case 'SET_FAVORITED_PHOTO':
      return{...state, isFavorited: state.isFavorited ? !state.isFavorited : state.isFavorited}

    default:
    throw new Error(`Unsupported action type: ${action.type}`);
  }
}

//////////////////////////////////////////////////////////////

function useApplicationData() {
  const initialState = {
    isModalOpen: false, 
    favPhotoIds: [],
    selectedPhoto: null,
    photoData: [],
    topicData: [],
    isfavorited: false
  }

  const[state, dispatch] = useReducer(reducer, initialState)

  const onClosePhotoDetailsModal  = () => {//closes modal
    dispatch({type: 'CLOSE_PHOTO_DETAILS_MODAL'})
  }

  const updateToFavPhotoIds  = (photoId) => {
    dispatch({type: 'UPDATE_FAV_PHOTO_IDS', payload: { photoId }})
  };

  const onPhotoSelect = (photo) => {//set data for selected photo for modal
    dispatch({type: 'SELECT_PHOTO', payload: { photo } })
  };
 
  const fetchPhotosByTopic = (topicId) => {// populates homeroute with photoset under topic category
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'SET_PHOTOS_BY_TOPIC', payload: data });
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  };
//////////////////////////////////////////
  const setFavoritedPhoto = (photoId) => {
    dispatch({type: 'SET_FAVORITED_PHOTO', payload: { photoId }})
  }
//////////////////////////////////////////////

  useEffect(() => {
    fetch('http://localhost:8001/api/photos') //get default photo set
    .then(res => res.json())
    .then((data) => dispatch({type: 'SET_PHOTO_DATA', payload: data}))
    .catch(error => {
      console.error('Error fetching photos:', error);
    })

    fetch('http://localhost:8001/api/topics') // gets array of topic categories
    .then(res => res.json())
    .then((data) => {
      dispatch({ type: 'SET_TOPICS', payload: data})
    })
    .catch((error) => {
      console.error('Error fetching topics:', error);
    });
  }, [])


  return {
    state, //state OBJ handling modalOpen, favPhotoIds, selectedPhoto, photoData, topicData
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    fetchPhotosByTopic,
    setFavoritedPhoto
  }
}

export default useApplicationData