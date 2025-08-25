import { Router } from "express";
import { createProductController } from "../controllers/createProductController";

const router = Router();

// Cuando alguien haga POST a "/products/create", se ejecuta el controlador
router.post("/create", createProductController);

export default router;