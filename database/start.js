const { Sequelize } = require("sequelize");
let sequelize = null;

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "mysql",
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
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
