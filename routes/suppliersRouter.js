const { Router } = require("express");
const suppliersController = require("../controllers/suppliersController.js");
const suppliersRouter = Router();

suppliersRouter.get("/", suppliersController.suppliersPageGet);

suppliersRouter.get("/:supplierId/products", suppliersController.productsBySupplierGET);

module.exports = suppliersRouter;