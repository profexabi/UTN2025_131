// Importamos express.Router
import { Router } from "express";
import { vistaConsultarId, vistaCrear, vistaEliminar, vistaListado, vistaModificar } from "../controllers/view.controllers.js";

const router = Router();


// Ruta de vista listado productos
router.get("/", vistaListado);


// Ruta de vista consultar producto por id
router.get("/consultar", vistaConsultarId);


// Ruta de vista crear producto
router.get("/crear", vistaCrear);


// Ruta de vista modificar producto
router.get("/modificar", vistaModificar);


// Ruta de vista eliminar producto
router.get("/eliminar", vistaEliminar);


// Exportamos las rutas de las vistas
export default router;