import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {

  return (
    <div className="topic-list__item" onClick={() => props.fetchPhotosByTopic(props.id)} >
      <span className="topic-list__item span"> {props.data.title} </span>
    </div>
  );
};

export default TopicListItem;
