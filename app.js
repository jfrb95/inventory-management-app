require("dotenv").config();
const express = require("express");
const app = express();
const path = require("node:path");
const expressLayouts = require("express-ejs-layouts");

const productsRouter = require("./routes/productsRouter");
const customersRouter = require("./routes/customersRouter");
const ordersRouter = require("./routes/ordersRouter");
const suppliersRouter = require("./routes/suppliersRouter");

app.use(expressLayouts);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/products", productsRouter);
app.use("/customers", customersRouter);
app.use("/orders", ordersRouter);
app.use("/suppliers", suppliersRouter);

app.locals.links = [
  { href: "/", text: "Home" },
  { href: "/products", text: "Products" },
  { href: "/customers", text: "Customers" },
  { href: "/suppliers", text: "Suppliers" },
]

app.get("/", function(req, res) {
  res.render("index");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Inventory management app listening on port ${PORT}!`);
});
