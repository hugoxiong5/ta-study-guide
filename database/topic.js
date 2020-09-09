const { DataTypes } = require("sequelize");
const sequelize = require("./start.js");

const Topic = sequelize.define("topic", {
  title: DataTypes.STRING,
  text: DataTypes.STRING(1234),
  order: DataTypes.INTEGER,
  linkAddress: DataTypes.STRING,
  linkLabel: DataTypes.STRING,
  checklist: DataTypes.TEXT,
});

const save = async (topic) => {
  const result = await Topic.create({
    title: topic.title,
    text: topic.text,
    linkAddress: topic.linkAddress,
    linkLabel: topic.linkLabel,
    checklist: JSON.stringify(topic.checklist),
  });
  console.log("new topic inserted: ", result.toJSON());
};

const retrieve = async () => {
  const results = await Topic.findAll();
  return results;
};

const update = async (topic) => {
  const storedTopic = await Topic.findByPk(topic.id);
  storedTopic.title = topic.title;
  storedTopic.text = topic.text;
  storedTopic.linkAddress = topic.linkAddress;
  storedTopic.linkLabel = topic.linkLabel;
  storedTopic.checklist = JSON.stringify(topic.checklist);
  await storedTopic.save();
  await storedTopic.reload();
  console.log("topic updated: ", storedTopic.toJSON());
};

const remove = async (topic) => {
  const storedTopic = await Topic.findByPk(topic.id);
  await storedTopic.destroy();
  console.log("topic deleted: ", storedTopic.toJSON());
};

// fix the missing checklist for Topics
const fixData = async () => {
  const topics = await retrieve();
  topics.forEach((topic) => {
    topic.checklist = JSON.stringify([]);
    topic.save();
    console.log(topic);
  });
};

fixData();

module.exports = {
  save,
  retrieve,
  update,
  remove,
};
