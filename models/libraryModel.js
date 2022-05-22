const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LibrarySchema = new Schema({ libraryname: String, managername: String });
const Library = mongoose.model("Library", LibrarySchema);
module.exports = Library;
