import React from "react";
import { ListGroup } from "react-bootstrap";
import TopicCard from "./TopicCard.jsx";

const TopicList = ({ topics, clickEditModal }) => {
  const listItems = topics.map((topic) => {
    return (
      <TopicCard key={topic.id} topic={topic} clickEditModal={clickEditModal} />
    );
  });
  return (
    <div>
      <h2>Topics</h2>
      <div>{listItems}</div>
    </div>
  );
};

export default TopicList;
