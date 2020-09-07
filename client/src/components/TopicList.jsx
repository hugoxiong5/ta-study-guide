import React from "react";
import { ListGroup } from "react-bootstrap";
import TopicCard from "./TopicItem.jsx";

const TopicList = ({ topics }) => {
  const listItems = topics.map((topic) => {
    return <TopicCard key={topic.id} topic={topic} />;
  });
  return (
    <div>
      <h2>Topics</h2>
      <ListGroup>
        {listItems}
      </ListGroup>
    </div>
  );
};

export default TopicList;
