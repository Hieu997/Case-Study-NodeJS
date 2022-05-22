const borrowBookModel = require("../models/borrowBookModel");

exports.borrowBookStore = async (req, res, next) => {
  const borrowBookData = {
    studentcard: req.body.studentcard,
    yourname: req.body.yourname,
    bookid: req.body.bookid,
    quantity: req.body.quantity,
    borroweddate: req.body.borroweddate,
    returndate: req.body.returndate,
  };
  const BorrowBookStore = await borrowBookModel.create(borrowBookData);
  if (BorrowBookStore) {
    res.redirect("/borrowbook");
  }
};
