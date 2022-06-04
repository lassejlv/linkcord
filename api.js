require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const Link = require("./model");
const { generate } = require("yourid");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/url-shortener",
  {
    useNewUrlParser: true,
  },
  () => {
    console.log("Connected to MongoDB");
  }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(403).send({
    error: "You dont provided any route or data",
    status: 403,
  });
});

app.post("/api/create", (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send({
      error: "You must provide an link",
      status: 400,
    });
  }

  const newLink = new Link({
    original: url,
    short: generate({ length: 9 }),
  });

  newLink.save().then((link) => {
    res.status(201).send({
      original: link.original,
      short: process.env.HOST + "/" + link.short,
    });
  });
});

app.get("/api/check", (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send({
      error: "You must provide an link",
      status: 400,
    });
  }

  Link.findOne({ short: url }).then((link) => {
    if (link) {
      res.status(200).send({
        original: link.original,
        short: process.env.HOST + "/" + link.short,
        clicks: link.clicks,
        createdAt: link.createdAt,
      });
    } else {
      res.status(404).send({
        error: "Link not found",
        status: 404,
      });
    }
  });
});

app.get("/:short", (req, res) => {
  const { short } = req.params;
  Link.findOne({ short }).then((link) => {
    if (!link) {
      return res.status(404).send({
        error: "Link not found",
        status: 404,
      });
    }
    link.clicks++;
    link.save();
    res.redirect(link.original);
  });
});

app.listen(PORT, () => console.info("Server is up and running!"));
