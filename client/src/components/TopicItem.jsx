import React from "react";

const TopicItem = ({ topic }) => {
  return <li key={topic.id}>{topic.title}</li>;
};

export default TopicItem;
