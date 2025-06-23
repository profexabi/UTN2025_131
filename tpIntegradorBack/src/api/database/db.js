// Importamos el modulo mysql2 en modo promesa para usar asnyc/await en la conexion a la BBDD MySQL
import mysql from "mysql2/promise"; 

// Traemos los datos de conexion de nuestro archivo de variables de entorno
import environments from "../config/environments.js";
const { database } = environments;


const connection = mysql.createPool({
    host: database.host,
    database: database.name,
    user: database.user,
    password: database.password
});

export default connection;