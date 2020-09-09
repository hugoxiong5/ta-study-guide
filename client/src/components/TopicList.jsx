import React from "react";
import { ListGroup } from "react-bootstrap";
import TopicCard from "./TopicCard.jsx";

const TopicList = ({ topics, setEditModalShow, updateRating }) => {
  const listItems = topics.map((topic) => {
    return (
      <TopicCard
        key={topic.id}
        topic={topic}
        setEditModalShow={setEditModalShow}
        updateRating={updateRating}
      />
    );
  });
  return (
    <div>
      <h3>Topics</h3>
      <div>{listItems}</div>
    </div>
  );
};

export default TopicList;
