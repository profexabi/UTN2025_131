// En node vamos a instalar un paquete, luego lo importamos y luego lo usamos
// Lo primero que tenemos que hacer es importar el modulo nativo de sistema de archivos (File System). Este ya viene instalado por defecto en Node.js

////////////////////
// IMPORTACIONES //

//////////////////
// File System //
const fs = require("fs"); // Importamos el modulo fs para poder usarlo


///////////
// Path //
const path = require("path"); // Importamos el modulo path para manejar y manipular rutas de archivos y directorios


///////////////////////
// Operative System //
const os = require("os"); // Importamos el modulo operative system para obtener info del sistema operativo donde estamos ejecutando Node.js

// Importamos (sintaxis de CommonJS con require) la funcion que exportamos de saludos.js
const saludar = require("./saludos.js"); // OJO cuando el autocompletado de VSCode no nos incorpore la extension .js

console.log(saludar("Kevin"));


// Ejemplo lectura de fichero
fs.readFile("texto.txt", "utf8", (err, data) => {

    if (err) {
        console.log("Ocurrio un error", err);
        return;
    }

    console.log("Contenido del archivo:", data);
});


// Ejemplo ruta
const rutaArchivo = "/home/xabi/proyectos/archivo.txt";
const nombreArchivo = path.basename(rutaArchivo); // path.basename nos permite obtener el nombre del archivo de una ruta completa

console.log("El nombre del archivo es:", nombreArchivo);


// Ejemplo para obtener info de nuestro sistema operativo
const memoriaLibre = os.freemem();
const tipoSistema = os.type();

console.log("Memoria libre:", memoriaLibre);
console.log("Tipo de sistema operativo", tipoSistema);