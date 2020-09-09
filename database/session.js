const { DataTypes } = require("sequelize");
const sequelize = require("./start.js");
const crypto = require("crypto");

const Session = sequelize.define("session", {
  cookie: DataTypes.STRING,
  ratings: DataTypes.JSON,
});

const save = async () => {
  const cookie = crypto.randomBytes(32).toString("hex");
  const result = await Session.create({
    cookie,
  });
  console.log("new session inserted: ", result.toJSON());
  return result.toJSON();
};

save();

const retrieve = async () => {};

const update = async (topic) => {};

const remove = async (topic) => {};

module.exports = {
  save,
  retrieve,
  update,
  remove,
};
