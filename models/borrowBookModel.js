const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BorrowBookSchema = new Schema({
  studentcard: Number,
  yourname: String,
  bookid: String,
  quantity: Number,
  borroweddate: Date,
  returndate: Date,
});
const BorrowBook = mongoose.model("BorrowBook", BorrowBookSchema);
module.exports = BorrowBook;
