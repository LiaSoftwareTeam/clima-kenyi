import { Router } from "express";
import { agregarClima, algo, verClima } from "../controllers/clima.controller.js";

const router = Router();
router.get("/clima/ver", verClima);
router.get("/algo", algo)
router.post("/clima/agregar", agregarClima)
export default router;
