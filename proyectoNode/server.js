////////////////////////////////////////////
// Ejemplo de servidor basico en Node.js //

// Importamos el modulo nativo HTTP -> Este modulo nos permite crear un servidor web sin necesidad de instalar nada adicional
const http = require("http");

// Creamos el servidor
const servidor = http.createServer((req, res) => {

    // Configuramos la respuesta
    res.statusCode = 200; // Codigo 200 significa que la peticion fue exitosa

    res.setHeader("Content-Type", "text/plain"); // Indicamos que responderemos con texto plano

    res.end("Hola mundo desde Node.js"); // Mensaje que enviamos al cliente
});


// Definimos el puerto y arancamos el servidor
const puerto = 3000;

servidor.listen(3000, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});

/* Explicacion del codigo

1. Importar el modulo HTTP: Para tener acceso a todas las funcionalidades que trae el modulo para poder crear un servidor

2. Crear un servidor: Utilizamos el metodo http.createServer para definir un servidor que escuche las solicitudes de los clientes y les responda

3. Respueta del servidor: El servidor respondera con el mensaje "Hola mundo desde Node.js"

4. Escuchar en un puerto: El servidor se ejecuta en el puerto 3000 y muestra un mensaje en la consola cuando esta listo
*/