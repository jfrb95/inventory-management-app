const express = require("express");
const app = express();
const path = require("node:path");

const productsRouter = require("./routes/productsRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/products", productsRouter);

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
