const db = require("../db/queries");

exports.productsPageGET = async function(req, res) {

  console.log("req query", req.query);
  const { supplier } = req.query;

  let products;
  if (supplier) {
    products = await db.getProductsBySupplier(supplier);
  } else {
    products = await db.getAllProducts();
  }

  res.render("products", {
    products,
    selectedSupplier: supplier
  }); };

exports.productGET = async function(req, res) {
  const { productId } = req.params;
  res.render("product", { product: await db.getProductById(productId)});
};

exports.addProductPOST = async function(req, res) {
  console.log(req.body);
  res.redirect('back');
};

exports.productQuantityPOST = async function(req, res) {

  const productId = req.params.productId;
  const newQuantity = req.body["set-quantity"];

  await db.productQuantityPOST(productId, newQuantity);

  res.redirect(`/products/${productId}`);
};