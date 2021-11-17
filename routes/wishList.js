const express = require("express");
const wishListController = require("../controllers/wishListController");
const wishListRouter = express.Router();

wishListRouter.get("/", wishListController.getHomePage);

wishListRouter.post("/admin", wishListController.postNewWish);

wishListRouter.post("/admin", wishListController.deleteWish);

module.exports = wishListRouter;
