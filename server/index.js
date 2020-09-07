const express = require("express");
const path = require("path");

const database = require("../database/index.js");

const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/topics", async (req, res) => {
  try {
    const topics = await database.retrieve();
    res.send(topics);
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
