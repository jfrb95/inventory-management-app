const { Router } = require("express");
const productsController = require("../controllers/productsController.js");
const productsRouter = Router();

productsRouter.route("/")
  .get(productsController.productsPageGET)
;

productsRouter.get("/:productId", productsController.productGET);

productsRouter.post("/:productId/quantity", productsController.productQuantityPOST)
productsRouter.post("/new", productsController.newProductPOST);

module.exports = productsRouter;