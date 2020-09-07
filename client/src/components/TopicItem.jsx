import React from "react";
import {ListGroup} from "react-bootstrap";

const TopicCard = ({ topic }) => {
  return (
    <ListGroup.Item>{topic.title}</ListGroup.Item>
  )
};


export default TopicCard;
