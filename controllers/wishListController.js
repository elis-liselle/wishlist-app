const date = require("../getDate.js");
const Wish = require("../models/wish");

exports.getHomePage = (req, res, next) => {
  Wish.find({}, (error, wishes) => {
    if (error) next(error);
    req.data = wishes;
    next();
  });
};
//let wishList = [];

// exports.getHomePage = (req, res) => {
//   Wish.fetchWishes((wishes) => {
//     res.render("admin.ejs", { myWish: wishes });
//   });
// };

exports.postNewWish = (req, res) => {
  let userWish = req.body.wishInput;
  // let userWish = {
  //   wish: req.body.wishInput,
  // };

  let newWish = new Wish(userWish);
  newWish.saveWish();

  console.log(wishList);

  res.redirect("/");
};

exports.deleteWish = (req, res) => {
  let wishToDelete = req.body.oldWish;

  // let wishToDelete = {
  //   wish: req.body.oldWish,
  // };

  console.log("from delete " + wishToDelete.wishInput);

  Wish.deleteItem(wishToDelete);
  res.redirect("/");
};
