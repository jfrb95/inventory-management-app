const db = require("../db/queries");

exports.suppliersPageGet = async function (req, res) {
  res.render("suppliers", { suppliers: await db.getAllSuppliers() });
};

exports.productsBySupplierGET = async function (req, res) {
  const { supplierId } = req.params;
  console.log('suppliersController supplierId:', supplierId);
  res.redirect(`/products?supplierId=${supplierId}`);
};

exports.newSupplierPOST = async function(req, res) {

  const supplierName = req.body.name;

  await db.addNewSupplier(supplierName);

  res.redirect("/suppliers");
};