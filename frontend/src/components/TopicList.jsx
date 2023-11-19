import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";



const TopicList = ({topic, fetchPhotosByTopic}) => {
  const topicsArray = topic.map((singleTopic) => ( //map dataset to each topic section
    <TopicListItem 
      key={singleTopic.id} 
      id={singleTopic.id}
      data={singleTopic} 
      fetchPhotosByTopic={fetchPhotosByTopic}
    />
  ))

  return (
    <div className="top-nav-bar__topic-list">

      {topicsArray}
      
    </div>
  );
};

export default TopicList;
