const pool = require("./pool");

exports.getAllProducts = async function() {
  const { rows } = await pool.query("SELECT * FROM products");
  return rows;
}

exports.getProductsInCategory = async function(category) {
  if (typeof category !== "string") {
    throw new Error("category must be a string");
  }

  const lowCategory = category.toLowerCase();

  const { rows } = await pool.query("SELECT * FROM products WHERE category=$1", [lowCategory]);
  return rows;
};

exports.getProductsBySupplier = async function(supplierId) {
  const { rows } = await pool.query("SELECT * FROM products WHERE supplier_id=$1", [supplierId]);
  return rows;
};

exports.getProductById = async function(id) {
  //left join with supplier so the page can get who the supplier is
  const { rows } = await pool.query(
    `
    SELECT * 
    FROM products 
    LEFT JOIN suppliers
    ON products.supplier_id = suppliers.supplier_id
    WHERE product_id=$1
    `, [id]);

  if (rows.length > 1) {
    throw new Error(`Found multiple products with id: ${id}`);
  }
  if (rows.length === 0) {
    throw new Error(`No product found with id: ${id}`);
  }

  return rows[0] || null;
};

exports.productQuantityPOST = async function(id, quantity) {
  await pool.query(`UPDATE products SET stock_quantity=$1 WHERE product_id=$2`, [quantity, id]);
};

exports.getAllSuppliers = async function(table) {
  const { rows } = await pool.query("SELECT * FROM suppliers");
  return rows;
};

exports.getAllCustomers = async function() {
  const { rows } = await pool.query("SELECT * FROM customers");
  return rows;
};

exports.addCustomer = async function(firstName, lastName, email, phone) {
  await pool.query(
    `
    INSERT INTO customers
    VALUES (DEFAULT, $1, $2, $3, $4)
    `, [firstName, lastName, email, phone]);
};

exports.editCustomer = async function (firstName, lastName, email, phone) {
  
  await pool.query(
    `
    UPDATE customers
    SET first_name=$2, last_name=$3, email=$4, phone=$5
    WHERE customer_id=$1
    `, [firstName, lastName, email, phone]);
};

exports.addNewProduct = async function(name, category, supplierId, price, stockQuantity) {
  await pool.query(
    `
    INSERT INTO products
    VALUES (DEFAULT, $1, $2, $3, $4, $5)
    `, [name, category, supplierId, price, stockQuantity]);
};