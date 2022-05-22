const libraryModel = require("../models/libraryModel");

exports.libraryStore = async (req, res, next) => {
  const libraryData = {
    libraryname: req.body.libraryname,
    managername: req.body.managername,
  };
  const libraryStore = await libraryModel.create(libraryData);
  if (libraryStore) {
    res.redirect("/book");
  }
};
