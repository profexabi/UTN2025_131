////////////////////
// Importaciones //
import express from "express";
import environments from "./src/api/config/environments.js";
import connection from "./src/api/database/db.js";
import cors from "cors"; // Requiere instalarlo previamente con npm i cors


const PORT = environments.port;
const app = express();



//////////////////
// Middlewares //
app.use(cors()); // Middleware CORS basico que permite todas las solicitudes



////////////
// Rutas //
app.get("/", (req, res) => {
    res.send("Hola mundo");
});

// Importante repasar los verbos HTTP
// CRUD -> Create (POST) - Read (GET) - Update (PUT) - DELETE (DELETE)

// 1. Primer endpoint GET -> Traer todos los productos
app.get("/products", async (req, res) => {

    // 1 optimizacion, manejo de errores con try/catch
    try {
        let sql = `SELECT * FROM products`;
    
        // Al usar [rows] la desestructuracion extrae directamente las filas (que es el primer elemento del resultado de la consulta), nos sirve porque hace el codigo mas legible y explicito
        const [rows] = await connection.query(sql); //
    
        // 2 optimizacion, responder con exito aunque este vacio
        // Aca devolvemos el texto plano JSON con toda la informacion de los productos
        res.status(200).json({
            payload: rows,
            message: rows.length === 0 ? "No se encontraron usuarios" : "Usuarios encontrados"
        });

    } catch (error) {
        console.error("Error obteniendo productos", error);
        res.status(500).json({
            error: "Error interno del servidor al obtener productos"
        })
    }
})


// 2. Segundo endpoint GET by id -> Traer producto por su id
// TODO, hacer middleware validateId
app.get("/products/:id", async(req, res) => {

    try {
        // let id = req.params.id
        let { id } = req.params;

        // Consulta no optima, porque permite la inyeccion SQL
        // let sql = `SELECT * FROM products where id = ${id}`;
        let sql = `SELECT * FROM products where id = ?`;

        let [rows] = await connection.query(sql, [id]);

        // Verificamos si se encontro el producto
        if(rows.length === 0) {
            return res.status(404).json({
                error: `No se encontro el producto con id: ${id}`
            })
        }

        res.status(200).json({
            payload: rows
        });

    } catch (error) {
        console.error(`Error obteniendo producto con id ${id}`, error.message);

        res.status(500).json({
            error: "Error interno al obtener un producto por id"
        })
    }
})


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})