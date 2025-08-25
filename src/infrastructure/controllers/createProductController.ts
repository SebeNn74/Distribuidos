import { Request, Response } from "express";
import { createProductService } from "../../application/services/createProductService";

// El controller se conecta directamente con Express
export const createProductController = (req: Request, res: Response) => {
  // Extraemos el JSON que mandó el cliente desde req.body
  const { name, price, stock } = req.body;

  try {
    // Llamamos al servicio que valida y guarda el producto
    const newProduct = createProductService({ name, price, stock });

    // Respondemos con el producto creado en formato JSON
    res.status(201).json(newProduct);
  } catch (err: any) {
    // Si ocurre un error (ej: validación), lo enviamos como respuesta
    res.status(400).json({ error: err.message });
  }
};
