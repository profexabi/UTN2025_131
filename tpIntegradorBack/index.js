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

/////////////////////////////
// Middlewares de aplicacion -> Aplicados a nivel de aplicacion para todas las solicitudes

app.use(express.json()); // Parseamos JSON en las solicitudes POST y PUT 
app.use(cors()); // Middleware CORS basico que permite todas las solicitudes

// Middleware Logger para analizar y registrar las solicitudes
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
});


////////////////////////
// Middleware de ruta -> Aplicados a rutas especificas y ejecutadas solo cuando una solicitud coincide con la ruta definida
const validateId = (req, res, next) => {
    const id = req.params.id; // o tambine, mas optimo const { id } = req.params;

    if(!id || isNaN(id)) {
        return res.status(400).json({
            error: "El ID debe ser un numero"
        });
    }

    // Convertimos el parametro id (originalmente un string porque viene de la url) en un enttero decimal
    req.id = parseInt(id, 10); 

    next();
}




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
app.get("/products/:id", validateId, async(req, res) => {

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


// 3. Tercer endpoint POST -> Crear nuevos productos
app.post("/products", async (req, res) => {
    try {
        let { category, image, name, price } = req.body;

        if(!category || !image || !name || !price) {
            return res.status(400).json({
                message: "Datos invalidos, asegurate de enviar category, image, name y price"
            });
        }

        // Hacemos uso de placeholders ? para prevenir ataques de SQL Injection
        let sql = `INSERT INTO products (category, image, name, price) VALUES (?, ?, ?, ?)`;

        let [rows] = await connection.query(sql, [category, image, name, price]);


        res.status(201).json({
            message: "Producto creado con exito",
            productId: rows.insertId
        }); // Con productId devolvemos info util del insert para deolver el ID del producto creado


    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Error interno del servidor",
            error: error.message
        })
    }
});



// 4. Cuarto endpoint -> Update 
app.put("/products", async (req, res) => {
    try {
        let { id, category, image, name, price } = req.body;

        if(!id || !category || !image || !name || !price) {
            return res.status(400).json({
                message: "Faltan campos requeridos"
            });
        }

        let sql = `
            UPDATE products
            SET name = ?, image = ?, price = ?, category = ?
            WHERE id = ?
        `;

        let [result] = await connection.query(sql, [name, image, price, category, id]);

        // Testearmos que se actualizara
        if(result.affectedRows === 0) {
            return res.status(400).json({
                message: "No se actualizo el producto"
            })
        }

        res.status(200).json({
            message: "Producto actualizado correctamente"
        });

    } catch (error) {
        console.error("Error al actualizar el producto", error);

        res.status(500).json({
            message: "Error interno del servidor",
            error: error.message
        })
    }
})


// 4. Cuarto endpoint -> Delete 
app.delete("/products/:id", async (req, res) => {
    try {
        let { id } = req.params;

        if(!id) {
            return res.status(400).json({
                message: "Se requiere un id para eliminar un producto"
            })
        }

        let sql = "DELETE FROM products WHERE id = ?";

        let [result] = await connection.query(sql, [id]);

        // Testearmos que se eliminara
        if(result.affectedRows === 0) {
            return res.status(400).json({
                message: `No se encontro un producto con id ${id}`
            });
        }

        return res.status(200).json({
            message: `Producto con id ${id} eliminado correctamente`
        });

    } catch (error) {
        console.error("Error en DELETE /products/:id", error);

        res.status(500).json({
            message: `Error al eliminar producto con id ${id}`, error,
            error: error.message
        })
    }
})





app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})