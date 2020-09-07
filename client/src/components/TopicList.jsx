import React from "react";
import TopicItem from "./TopicItem.jsx";

const TopicList = ({ topics }) => {
  const listItems = topics.map((topic) => {
    return <TopicItem key={topic.id} topic={topic} />;
  });
  return <ul>{listItems}</ul>;
};

export default TopicList;
