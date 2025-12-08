const db = require("../db/queries");

exports.productsPageGET = async function(req, res) {
  res.render("products", { guitars: await db.getProductsInCategory("guitar") });
};

exports.productGET = async function(req, res) {
  const { productId } = req.params;
  res.render("product", { product: await db.getProductById(productId)});
}

exports.addProductPOST = async function(req, res) {
  console.log(req.body);
  res.redirect('back');
};