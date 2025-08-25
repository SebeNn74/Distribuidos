import express from "express";
import createProductRouter from "./infrastructure/routers/createProduct";

const app = express();
app.use(express.json());

// Montar la ruta
app.use("/products", createProductRouter);

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});
