const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/WishDB")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));
require("./models/wish");

const wishListPage = require("./routes/wishList");
const adminPage = require("./routes/admin");
const errorPage = require("./routes/error");

const app = express();

app.set("view engine", ejs);
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(wishListPage);
app.use(adminPage);
app.use(errorPage);


app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
