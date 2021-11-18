const express = require("express");
const wishListController = require("../controllers/wishListController");
const adminRouter = express.Router();

adminRouter.get("/admin", wishListController.getAdminPage);

adminRouter.post("/addWish", wishListController.postNewWish);

adminRouter.post("/deleteWish", wishListController.deleteWish);

module.exports = adminRouter;