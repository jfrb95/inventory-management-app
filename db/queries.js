const pool = require("./pool");

exports.getProductsInCategory = async function(category) {
  if (typeof category !== "string") {
    throw new Error("category must be a string");
  }

  const lowCategory = category.toLowerCase();

  const { rows } = await pool.query("SELECT * FROM products WHERE category=$1", [lowCategory]);
  return rows;
};

exports.getProductById = async function(id) {
  //make this left join with supplier so the page can get who the supplier is
  const { rows } = await pool.query("SELECT * FROM products WHERE product_id=$1", [id]);

  if (rows.length > 1) {
    throw new Error(`Found multiple products with id: ${id}`);
  }
  if (rows.length === 0) {
    throw new Error(`No product found with id: ${id}`);
  }

  return rows[0] || null;
};

exports.getAllSuppliers = async function(table) {
  const { rows } = await pool.query("SELECT * FROM suppliers");
  return rows;
};

exports.getAllCustomers = async function() {
  const { rows } = await pool.query("SELECT * FROM customers");
  return rows;
};