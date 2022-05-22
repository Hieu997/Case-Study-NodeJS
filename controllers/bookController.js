const bookModel = require("../models/bookModel");

exports.createBook = async (req, res, next) => {
  const createbookData = {
    bookname: req.body.bookname,
    libraryname: req.body.libraryname,
    category: req.body.category,
    quantity: req.body.quantity,
  };
  const createbookStore = await bookModel.create(createbookData);
  if (createbookStore) {
    res.redirect("/book/createbook");
  }
};

exports.deleteBook = async (req, res) => {
  const deletebook = await bookModel.findOne({ id: req.query.id });
  if (deletebook) {
    await deletebook.remove();
    res.json({ status: 200, message: "delete success" });
  }
};
