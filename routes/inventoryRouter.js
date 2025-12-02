const { Router } = require("express");
const inventoryController = require("../controllers/inventoryController.js");
const inventoryRouter = Router();

inventoryRouter.get("/", inventoryController.inventoryPageGet);

module.exports = inventoryRouter;