require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const products_controller = require("./controllers/products_controller");

const port = 3000;
const app = express();

app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.post("/api/product", products_controller.create);
app.get("/api/products", products_controller.getAll);
app.get("/api/product/:id", products_controller.getOne);
app.put("/api/product/:id", products_controller.update);
app.delete("/api/product/:id", products_controller.delete);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
