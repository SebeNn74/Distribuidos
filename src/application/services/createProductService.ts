import { createProductRepo } from "../../infrastructure/repositories/createProductRepo";
import { Product } from "../../domain/models/Product";

export const createProductService = (productData: Omit<Product, "id">): Product => {
  // Validación: el precio no puede ser menor o igual a 0
  if (productData.price <= 0) {
    throw new Error("El precio debe ser mayor que 0");
  }

  // Validación: el stock no puede ser negativo
  if (productData.stock < 0) {
    throw new Error("El stock no puede ser negativo");
  }

  // Si pasa las validaciones, lo enviamos al repositorio
  return createProductRepo(productData);
};
