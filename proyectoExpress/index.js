///////////////////////////////////////////////
// Ejemplo de servidor basico en Express.js //

// (ya instalado) importamos express
const express = require("express");

// Creamos una aplicacion de Express
const app = express();

// Definimos la ruta principal
app.get("/", (req, res) => {
    res.send("Hola mundo desde Express.js");
});

// Ruta de contacto
app.get("/contacto", (req, res) => {
    res.send("Contactanos en cosme@fulanito.com")
})

// Escuchamos en el puerto 3100
const puerto = 3100;
app.listen(puerto, () => {
    console.log(`Servidor express corriendo en el puerto ${puerto}`);
});


/* Explicacion del codigo

1. Importar Express.js: Trajimos la libreria express al archivo index.js

2. Creamos una aplicacion: Llamamos ala funcion express() que devuelve una isntancia de la aplicacion

3. Definir una ruta: Usamos app.get para definir que hacer cuando alguien visite la raiz "/" de nuestro servidor Express.js. Y ahi responderemos con un simple "Hola mundo desde Express.js"

4. Escuchar en un puerto: Nuestro servidor Express esta escuchando en el puerto 3000 y listo para aceptar conexiones


Ventajas de Express vs http nativo de Node.js 

- Simplicidad: Escribir codigo para crear rutas y manejar peticiones es mucho mas simple y con menos codigo. El modulo http nativo de Node.js es más bajo nivel

- Simplicidad para trabajar con middlewares: Express facilita la creacion de middlewares que son funciones que se ejecutan entre una peticion y una respuesta, lo que nos permite hacer validaciones, autenticar usuarios, etc

- Simplicidad para manejar rutas: Express permite manejar rutas facilmente, permitiendo organizar mejor las distintas partes de nuestra aplicacion. En el caso del modulo nativo HTTP tendriamos que manejar manualmente las diferentes rutas.
*/