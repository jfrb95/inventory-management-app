const db = require("../db/queries");

exports.suppliersPageGet = async function (req, res) {
  res.render("suppliers", { suppliers: await db.getAllSuppliers() });
};