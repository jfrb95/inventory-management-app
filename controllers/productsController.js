const db = require("../db/queries");

exports.productsPageGet = function(req, res) {
  res.render("products");
};