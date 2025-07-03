////////////////////
// Importaciones //
import express from "express";
import environments from "./src/api/config/environments.js";
import cors from "cors"; // Requiere instalarlo previamente con npm i cors
import { loggerUrl } from "./src/api/middlewares/middlewares.js";
import { productRoutes, viewRoutes } from "./src/api/routes/index.js"; // Importamos las rutas de productos y vistas
import { join, __dirname } from "./src/api/utils/index.js";


const PORT = environments.port;
const app = express();


// Configuramos EJS como motor de plantillas
app.set("view engine", "ejs");

// Definimos la ruta donde estan almacenadas las plantillas .ejs, con join combinamos el directorio raiz del proyecto con src/views
app.set("views", join(__dirname, "src/views"));

// Configuramos Express para que sirva archivos estaticos desde la carpeta public/, archivos como style.css, logo.png seran accesibles via HTTP
app.use(express.static(join(__dirname, "src/public")));



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

app.use("/dashboard", viewRoutes); // Rutas vistas

app.use("/api/products", productRoutes); // Rutas productos



app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})