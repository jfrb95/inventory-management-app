const db = require("../db/queries");

exports.customersPageGet = async function (req, res) {
  res.render("customers", { customers: await db.getAllCustomers() });
};