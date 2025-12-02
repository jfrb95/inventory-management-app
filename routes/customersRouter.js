const { Router } = require("express");
const customersController = require("../controllers/customersController.js");
const customersRouter = Router();

customersRouter.get("/", customersController.customersPageGet);

module.exports = customersRouter;