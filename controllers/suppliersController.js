const db = require("../db/queries");

exports.suppliersPageGet = async function (req, res) {
  res.render("suppliers", { suppliers: await db.getAllSuppliers() });
};

exports.productsBySupplierGET = async function (req, res) {
  const { supplierId } = req.params;
  res.redirect(`/products?supplier=${supplierId}`);
};