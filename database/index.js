const { Sequelize, DataTypes } = require("sequelize");
let sequelize = null;

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    protocol: "postgres",
  });
} else {
  sequelize = new Sequelize("test", "root", "", {
    host: "localhost",
    dialect: "mysql",
  });
}

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync();
    // console.log("The tables for all Models were synchronized!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

const Topic = sequelize.define("topic", {
  title: DataTypes.STRING,
  text: DataTypes.STRING,
  order: DataTypes.INTEGER,
  linkAddress: DataTypes.STRING,
  linkLabel: DataTypes.STRING,
  subtopic: DataTypes.INTEGER, // foreign key
  rating: DataTypes.INTEGER, // foreign key
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
