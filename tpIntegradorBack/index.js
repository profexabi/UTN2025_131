////////////////////
// Importaciones //
import express from "express";
import environments from "./src/api/config/environments.js";
import cors from "cors"; // Requiere instalarlo previamente con npm i cors
import { loggerUrl } from "./src/api/middlewares/middlewares.js";
import { productRoutes } from "./src/api/routes/index.js"; // Importamos las rutas de productos


const PORT = environments.port;
const app = express();



//////////////////
// Middlewares //

// Middlewares de aplicacion -> Aplicados a nivel de aplicacion para todas las solicitudes
app.use(express.json()); // Parseamos JSON en las solicitudes POST y PUT 
app.use(cors()); // Middleware CORS basico que permite todas las solicitudes
app.use(loggerUrl);



////////////
// Rutas //
app.get("/", (req, res) => {
    res.send("Hola mundo");
});

// Productos
app.use("/api/products", productRoutes);



app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})