const db = require("../db/queries");

exports.productsPageGet = async function(req, res) {
  res.render("products", { guitars: await db.getProductsInCategory("guitar") });
};