import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ isFavPhotoExist, topic, fetchPhotosByTopic}) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList 
        topic={topic}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      <FavBadge 
        isFavPhotoExist={isFavPhotoExist}
      />

    </div>
  )
}

export default TopNavigation;