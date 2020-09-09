const { DataTypes } = require("sequelize");
const sequelize = require("./start.js");

const Topic = sequelize.define("topic", {
  title: DataTypes.STRING,
  text: DataTypes.STRING(1234),
  order: DataTypes.INTEGER,
  linkAddress: DataTypes.STRING,
  linkLabel: DataTypes.STRING,
  main: DataTypes.BOOLEAN,
  list: DataTypes.INTEGER, // id of the "main" topic it's associated with (MAKE THIS INTO A SUBLIST???)
});

const save = async (topic) => {
  const result = await Topic.create({
    title: topic.title,
    text: topic.text,
    linkAddress: topic.linkAddress,
    linkLabel: topic.linkLabel,
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
  await storedTopic.save();
  await storedTopic.reload();
  console.log("topic updated: ", storedTopic.toJSON());
};

const remove = async (topic) => {
  const storedTopic = await Topic.findByPk(topic.id);
  await storedTopic.destroy();
  console.log("topic deleted: ", storedTopic.toJSON());
};

module.exports = {
  save,
  retrieve,
  update,
  remove,
};
