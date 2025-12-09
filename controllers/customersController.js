const { checkExact } = require("express-validator");
const db = require("../db/queries");
const e = require("express");

exports.customersPageGET = async function(req, res) {
  res.render("customers", { customers: await db.getAllCustomers() });
};

exports.createUserPOST = async function(req, res) {
  
  const [firstName, lastName, email, phone] = [...Object.values(req.body)];
  await db.addCustomer(firstName, lastName, email, phone);
  res.redirect("/customers");
};

exports.editCustomerPOST = async function(req, res) {

  const customerId = req.params.customerId;
  const [ firstName, lastName, email, phone ] = [...Object.values(req.body)];

  await db.editCustomer(customerId, firstName, lastName, email, phone);
  res.redirect("/customers");
};