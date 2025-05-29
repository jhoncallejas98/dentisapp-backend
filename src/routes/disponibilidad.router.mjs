import express from "express";
import { createDiponibilidad } from "../controller/disponibilidad.controller.mjs";


const router = express.Router();

//define las rutas para la entidad disponibilidad
router.post("/api/disponibilidad",  createDiponibilidad );



export default router;

