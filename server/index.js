const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const db = require("../database/index.js");

const app = express();

app.use(cookieParser());

// session authentication: no mount path, executed every time the app receives a request
// create a cookie if one doesn't exist or it's invalid
app.use(async (req, res, next) => {
  req.sessionRatings = {};
  try {
    const session = await db.Sessions.retrieve(req.cookies.session);
    req.sessionRatings = JSON.parse(session.ratings);
  } catch {
    try {
      const session = await db.Sessions.save();
      res.cookie("session", session.cookie, { maxAge: 600000000 });
    } catch (err) {
      console.log("Error:", err.message);
    }
  } finally {
    next();
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../client/dist")));

/* TOPIC API */

app.get("/topics", async (req, res) => {
  try {
    const topics = await db.Topics.retrieve();
    const topicsWithRatings = topics.map((topic) => {
      let topicObj = topic.toJSON();
      if (req.sessionRatings[topicObj.id] !== undefined) {
        topicObj.rating = req.sessionRatings[topicObj.id];
      }
      return topicObj;
    });
    res.send(topicsWithRatings);
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }
});

app.post("/topics", async (req, res) => {
  const topic = req.body;
  try {
    await db.Topics.save(topic);
    res.status(201).send();
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }
});

app.put("/topics", async (req, res) => {
  const topic = req.body;
  try {
    await db.Topics.update(topic);
    res.status(200).send();
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }
});

app.delete("/topics", async (req, res) => {
  const topic = req.body;
  try {
    await db.Topics.remove(topic);
    res.status(200).send();
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }
});

/* RANKING API */
app.put("/ratings", async (req, res) => {
  const cookie = req.cookies.session;
  const rating = req.body;
  try {
    await db.Sessions.update(cookie, rating);
    res.status(201).send();
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
