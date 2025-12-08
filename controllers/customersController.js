const db = require("../db/queries");

exports.customersPageGET = async function(req, res) {
  res.render("customers", { customers: await db.getAllCustomers() });
};

exports.editCustomerPOST = async function(req, res) {

  const customerId = req.params.customerId;
  const newData = Object.values(req.body);

  await db.editCustomer(customerId, ...newData);
  res.redirect('/customers');
};