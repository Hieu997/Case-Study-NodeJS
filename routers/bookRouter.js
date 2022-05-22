const express = require("express");
const route = express.Router();
const multer = require("multer");
const upload = multer();
const bookController = require("../controllers/bookController");
const libraryModel = require("../models/libraryModel");
const bookModel = require("../models/bookModel");

route.get("/", async (req, res, next) => {
  const listbook = await bookModel.find();
  res.render("book", { listbook: listbook });
});

route.get("/createbook", async (req, res) => {
  const libraris = await libraryModel.find();
  res.render("createbook", { libraris: libraris });
});

route.post("/createbook", upload.none(), bookController.createBook);
route.post("/delete", upload.none(), bookController.deleteBook);
module.exports = route;
