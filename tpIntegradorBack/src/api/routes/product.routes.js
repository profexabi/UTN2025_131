import { Router } from "express"; // Importamos el middleware express.Router
import { validateId } from "../middlewares/middlewares.js";
import { createProduct, getAllProducts, getProductById, modifyProduct, removeProduct } from "../controllers/product.controllers.js";

const router = Router();


// Importante repasar los verbos HTTP
// CRUD -> Create (POST) - Read (GET) - Update (PUT) - DELETE (DELETE)


// 1. GET -> Traer todos los productos
router.get("/", getAllProducts);


// 2. GET by id -> Traer producto por su id
// TODO, hacer middleware validateId
router.get("/:id", validateId, getProductById);


// 3. POST -> Crear nuevos productos
router.post("/", createProduct);


// 4. Cuarto endpoint -> Update 
router.put("/", modifyProduct);


// 4. Cuarto endpoint -> Delete 
router.delete("/:id", removeProduct);


export default router; // Exportamos las rutas