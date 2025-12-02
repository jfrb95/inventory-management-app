const { Router } = require("express");
const ordersController = require("../controllers/ordersController.js");
const ordersRouter = Router();

ordersRouter.get("/", ordersController.ordersPageGet);

module.exports = ordersRouter;