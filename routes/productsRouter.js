const { Router } = require("express");
const productsController = require("../controllers/productsController.js");
const productsRouter = Router();

productsRouter.get("/", productsController.productsPageGet);

module.exports = productsRouter;