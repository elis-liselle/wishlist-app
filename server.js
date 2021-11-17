const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/wishes")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const wishListPage = require("./routes/wishList");

const app = express();

app.set("view engine", ejs);
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

//app.use(wishListPage);
app.use("/admin", (req, res) => {
  res.sendFile(__dirname + "/admin.ejs");
});
app.get("/admin", wishListController.getHomePage, (req, res, next) => {
  console.log(req.data);
  res.send(req.data);
});

var wishes = new mongoose.Schema({
  id: Int,
  wish: String,
});
const Wish = mongoose.model("Wish", wishes);

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
