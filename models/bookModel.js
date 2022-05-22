const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BookSchema = new Schema({
  bookname: String,
  libraryname: String,
  category: String,
  quantity: Number,
});
const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
