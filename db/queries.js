const pool = require("./pool");

exports.getProductsInCategory = async function(category) {
  if (typeof category !== "string") {
    throw new Error("category must be a string");
  }

  const lowCategory = category.toLowerCase();

  const { rows } = await pool.query("SELECT * FROM products WHERE category=$1", [lowCategory]);
  return rows;
};