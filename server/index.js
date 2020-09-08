const express = require("express");
const path = require("path");

const database = require("../database/index.js");

const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.get("/topics", async (req, res) => {
  try {
    const topics = await database.retrieve();
    res.send(topics);
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }
});

app.post("/topics", async (req, res) => {
  const topic = req.body;
  try {
    await database.save(topic);
    res.status(201).send();
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }
});

app.put("/topics", async (req, res) => {
  const topic = req.body;
  try {
    await database.update(topic);
    res.status(200).send();
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }
});

app.delete("/topics", async (req, res) => {
  const topic = req.body;
  try {
    await database.remove(topic);
    res.status(200).send();
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
