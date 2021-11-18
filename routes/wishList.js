const express = require("express");
const wishListController = require("../controllers/wishListController");
const wishListRouter = express.Router();

wishListRouter.get("/", wishListController.getHomePage);

module.exports = wishListRouter;