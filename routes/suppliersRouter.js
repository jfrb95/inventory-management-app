const { Router } = require("express");
const suppliersController = require("../controllers/suppliersController.js");
const suppliersRouter = Router();

suppliersRouter.get("/", suppliersController.suppliersPageGet);

suppliersRouter.post("/new", suppliersController.newSupplierPOST);

suppliersRouter.get("/:supplierId/products", suppliersController.productsBySupplierGET);

module.exports = suppliersRouter;