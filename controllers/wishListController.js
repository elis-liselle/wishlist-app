const date = require("../getDate.js");
const mongoose = require("mongoose");
const WishFromMongoDb = mongoose.model("Wish");

const Wish = require("../models/wish");

exports.getHomePage = (req, res) => {
  let today = date.getTodayDateLong();

  WishFromMongoDb.find((error, wishes) => {
    if (!error) {
      res.render("index.ejs", { date: today, myWish: wishes });
    } else {
      console.log(error);
    }
  });
};

exports.getAdminPage = (req, res) => {
  let today = date.getTodayDateLong();
  WishFromMongoDb.find((error, wishes) => {
    if (!error) {
      res.render("admin.ejs", { date: today, myWish: wishes });
    } else {
      console.log(error);
    }
  });
};

exports.postNewWish = (req, res) => {
  const userWish = req.body.newWish;

  let newWish = new WishFromMongoDb();
  newWish.wish = userWish;

  newWish.save((error, response) => {
    if (!error) {
      console.log(response);
      res.redirect("/admin");
    } else {
      console.log(error);
    }
  });
};

exports.deleteWish = (req, res) => {
  let wishToDelete = req.body.deleteWishButton;

  WishFromMongoDb.findByIdAndDelete(wishToDelete, (error) => {
    if (!error) {
      res.redirect("/admin");
    } else {
      console.log("Deleting failed");
    }
  });
};
