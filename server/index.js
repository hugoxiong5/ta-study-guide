const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/topics", async (req, res) => {
  try {
    const topics = [
      {
        id: 1,
        order: 1,
        title: "Classes",
        text: "important shit about classes",
      },
      {
        id: 2,
        order: 2,
        title: "jQuery",
        text: "how to manipulate the DOM",
      },
    ];
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
