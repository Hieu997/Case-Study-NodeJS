const express = require("express");
const route = express.Router();
const multer = require("multer");
const upload = multer();
const listbooks = require("../models/bookModel");
const listborrowbooks = require("../models/borrowBookModel");

const borrowBookController = require("../controllers/borrowBookController");
route.get("/", async (req, res) => {
  const books = await listbooks.find();
  res.render("borrowBook", { books: books });
});
route.get("/listborrowbook", async (req, res) => {
  const borrowbooks = await listborrowbooks.find();
  res.render("listborrowbook", { borrowbooks: borrowbooks });
});

route.post("/borrowbook", upload.none(), borrowBookController.borrowBookStore);
module.exports = route;
