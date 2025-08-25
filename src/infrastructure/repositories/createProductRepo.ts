import { Product } from "../../domain/models/Product";

let products: Product[] = [];
let currentId = 1;

export const createProductRepo = (productData: Omit<Product, "id">): Product => {
  const newProduct: Product = {
    id: currentId++,
    name: productData.name,
    price: productData.price,
    stock: productData.stock
  };
  products.push(newProduct);
  return newProduct;
};
