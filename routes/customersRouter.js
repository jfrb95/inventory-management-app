const { Router } = require("express");
const customersController = require("../controllers/customersController.js");
const customersRouter = Router();

customersRouter.get("/", customersController.customersPageGET);

customersRouter.post("/new", customersController.createUserPOST);
customersRouter.post("/:customerId/edit", customersController.editCustomerPOST);

module.exports = customersRouter;