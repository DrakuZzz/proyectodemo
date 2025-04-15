import { Router } from "express";
import {getAllProductos} from "../controllers/productoscontroller.js";

const router = Router();
router.get('/all', getAllProductos);

export default router;
