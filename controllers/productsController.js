const db = require("../db/queries");

exports.productsPageGET = async function(req, res) {

  const { supplierId } = req.query;

  let products;
  let supplierName;
  if (supplierId) {
    products = await db.getProductsBySupplier(supplierId);
    supplierName = await db.getSupplierName(supplierId);
  } else {
    products = await db.getAllProducts();
  }

  res.render("products", {
    products,
    selectedSupplier: supplierName
  }); 
};

exports.productGET = async function(req, res) {
  const { productId } = req.params;
  res.render("product", { product: await db.getProductById(productId)});
};

exports.newProductPOST = async function(req, res) {

  const [name, category, supplierId, price, stockQuantity] = Object.values(req.body);

  await db.addNewProduct(name, category, supplierId, price, stockQuantity);

  res.redirect('/products');
};

exports.productQuantityPOST = async function(req, res) {

  const productId = req.params.productId;
  const newQuantity = req.body["set-quantity"];

  await db.productQuantityPOST(productId, newQuantity);

  res.redirect(`/products/${productId}`);
};