const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = 3000;
const DB_URL = "mongodb://admin:123456@127.0.0.1:27017/casestudy";
const db = mongoose.connection;
mongoose.connect(DB_URL, { useNewUrlParser: true }).then(() => {
  console.log("Connect " + PORT);
});
db.on("error", (err) => {
  console.log("Db connect err");
});

app.set("view engine", "ejs");
app.set("views", "./views");
const libraryRoute = require("./routers/libraryRouter");
app.use("/library", libraryRoute);

const bookRoute = require("./routers/bookRouter");
app.use("/book", bookRoute);

const borrowBookRoute = require("./routers/borrowBookRouter");
app.use("/borrowbook", borrowBookRoute);

app.listen(PORT, () => {
  console.log("Server running");
});
