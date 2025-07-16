import { Router } from "express";
import controlador from "../container/contenedor.js";
import validarVuelo from "../middlewares/validarVuelo.js";

const router = Router();

router.get("/", controlador.getAll);
router.post("/", validarVuelo, controlador.createOrUpdate);

export default router;
