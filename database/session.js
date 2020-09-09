const { DataTypes } = require("sequelize");
const sequelize = require("./start.js");
const crypto = require("crypto");

const Session = sequelize.define("session", {
  cookie: DataTypes.STRING,
  ratings: {
    type: DataTypes.JSON,
    defaultValue: {},
  },
});

const save = async () => {
  const cookie = crypto.randomBytes(32).toString("hex");
  const result = await Session.create({
    cookie,
  });
  console.log("new session inserted: ", result.toJSON());
  return result.toJSON();
};

const retrieve = async (cookie) => {
  const result = await Session.findOne({
    where: {
      cookie,
    },
  });
  if (result === null) {
    throw new Error("no session found with this cookie");
  } else {
    return result;
  }
};

const update = async (cookie, rating) => {
  const storedSession = await Session.findOne({
    where: {
      cookie,
    },
  });
  const ratingsObj = JSON.parse(storedSession.ratings);
  storedSession.ratings = JSON.stringify(Object.assign(ratingsObj, rating));
  await storedSession.save();
  await storedSession.reload();
  console.log("session updated: ", storedSession.toJSON());
};

const remove = async (cookie) => {
  const storedSession = await Session.findOne({
    where: {
      cookie,
    },
  });
  await storedSession.destroy();
  console.log("session deleted: ", storedSession.toJSON());
};

module.exports = {
  save,
  retrieve,
  update,
  remove,
};
