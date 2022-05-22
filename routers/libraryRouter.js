const express = require("express");
const route = express.Router();
const multer = require("multer");
const upload = multer();

const libraryController = require("../controllers/libraryController");
route.get("/register", (req, res) => {
  res.render("library");
});

route.post("/library", upload.none(), libraryController.libraryStore);
module.exports = route;
