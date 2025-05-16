///////////////////
// JavaScript V //

// Objetos, clases y objetos globales. Almacenamiento persistente
// Iteracion en arrays, objetos y arrays de objetos

// Object literal - Objeto literal
// La manera mas comun de crear objetos en JavaScript
let auto = {
    marca: "Renault 12",
    modelo: 12,
    anio: 2021,

    getInfo: function() {
        // this hace referencia al objeto desde el cual se esta invocando el metodo
        return `Este auto es un ${this.marca} del año ${this.anio}`;
    }
}

console.log(auto.getInfo());


// Clases en JavaScript
// Las clases en JS son una forma de crear objetos y metodos. Proporcionan una estructura clara para organizar el codigo
// Fueron introducidas en ES6 y simplifican la creacion de objetos con las funciones constructoras anteriores

class Persona {
    #universidad = "UTN";

    constructor(nombre, edad, cuadro) {
        this.nombre = nombre;
        this.edad = edad;
        this.cuadro = cuadro;
    }

    saludar() {
        console.log(`Hola! Soy ${this.nombre} tengo ${this.edad} y soy hincha de ${this.cuadro}`);
    }
}

/*
let moreNombre = prompt("Introduzca nombre");
let moreEdad = parseInt(prompt("Introduzca edad"));
let moreCuadro = prompt("Introduzca cuadro");

let more = new Persona(moreNombre, moreEdad, moreCuadro);
more.saludar();
*/

let kevin = new Persona("Kevin", 23, "Boca Juniors");
console.log(kevin);
kevin.saludar();


// Herencia
// Creamos nuevas clases basadas en clases existentes
// La clase hija puede heredar propiedades y metodos de la clase utilizando la palabra clave extends
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        console.log(`${this.nombre} hace un sonido`);
    }
}

class Perro extends Animal {
    ladrar() {
        console.log(`${this.nombre} ladra`);
    }
}

let miPerro = new Perro("Firulais");
miPerro.hacerSonido();
miPerro.ladrar();



/////////////////////////////////////
// Objetos globales en JavaScript //

/** Objetos globales en JavaScript
 * Son objetos que están disponibles en todo entorno de ejecución sin necesidad de importarlos o declararlos explícitamente
 * 
 * Objetos globales en el navegador
 * window
 */

// alert(), prompt() y confirm() son metodos de window

// setTimeout() setInterval()
// Metodos para programar la ejecucion de codigo despues de un tiempo setTimeout o en intervalos regulares setInterval
setTimeout(() => console.log("Hola despues de dos segundos"), 500)

// location
// Proporcionar informacion sobre la URL actual de la pagina y permite redireccionar a otras URL
console.log(window.location.href);

// navigator
// Contiene informacion sobre el navegador, como la version, el agente de usuario y la geolocalizacion
console.log(navigator.userAgent);

// history
// Proporcionar acceso al historial de navegacion del navegador


//////////////
// console //
// Es un objeto global que proporciona metodos para acceder a la consola del navegador y se utiliza principalmente para depurar codigo y mostrar mensajes informativos, advertencias o errores

console.log("Mensaje informativo"); // Muestra mensajes informativos en consola

console.error("Nada de esto fue un error"); // Muestra errores por consola

console.warn("Advertencia"); // Muestra advertencias


let usuariosMuestra = [
    { nombre: "Nahuel", edad: 30 },
    { nombre: "Lautaro", edad: 25 }
];

console.table(usuariosMuestra) // Mostrar datos en forma de tabla, util para arrays y objetos 

// console.time() y console.timeEnd()
// Nos permite medir el tiempo de ejecucion de un bloque de codigo

console.time("tiempo ejecucion");

for(let i = 0; i < 1000; i++) {
    // Simulacion de tarea
}

console.timeEnd("tiempo ejecucion");



// Almacenamiento en JavaScript
// Otros objetos globales del navegador: localStorage y sessionStorage
// sessionStorage() localStorage() y Cookies
// Son mecanismos del navegador para almacenar datos del lado del cliente


// Permiten almacenar datos de manera persistente (localStorage) o temporal (sessionStorage)
/*   ///////////////////
    // localStorage //

    // Descripcion //

- Nos permite almacenar datos de manera persistente en el navegador.

- Los datos almacenados en localStorage NO tienen una fecha de expiracion, esto significa que estaran disponilbes incluso despues de cerrar el navegador o apagar la computadora.


    // Caracteristicas //
- Capacidad de almacenamiento de 5-10 MB

- Persistencia: Los datos permanecen almacenados hasta que son eliminados manualmente

- Datos almacenados como strings: Todos los datos almacenados en localStorage son de tipo string. Si se quiere almacenar otros tipos de datos, como objetos, deben ser convertidos a strings (generalmente JSON)


    // Metodos //
- Guardar datos: localStorage.setItem(clave, valor);
- Leer datos: localStorage.getItem(clave);
- Eliminar un dato: localStorage.removeItem(clave);
- Eliminar todos los datos: localStorage.clear();
*/

// localStorage()
// Guarda datos que persisten incluso al cerrar el navegador y apagar la compu
// Almacenar configuraciones de usuario, temas, carrito de compras, etc
// Guardar datos en localStorage
localStorage.setItem("nombre", "Matias");
localStorage.setItem("tema", "oscuro");

// Obtener datos del localStorage
console.log(localStorage.getItem("nombre"));

// Eliminamos un dato especifico
localStorage.removeItem("tema");

// Limpiamos todo el localStorage
localStorage.clear();

localStorage.setItem("carrito", JSON.stringify([
    { id: 1, nombre: "Empanada", cantidad:2 }
]));


// sessionStorage()
// Igual que localStorage pero la informacion dura lo que este abierta la pestaña (cambia la persistencia)
/*
    // Metodos //
- Guardar datos: sessionStorage.setItem(clave, valor);
- Leer datos: sessionStorage.getItem(clave);
- Eliminar un dato: sessionStorage.removeItem(clave);
- Eliminar todos los datos: sessionStorage.clear();
*/

/*   //////////////
    // Cookies //

    Autenticacion (sesion), preferencias del usuario, seguimiento de actividad

    // Descripcion //

- Las cookies son pequeños fragmentos de informacion que se almacenan en el navegador y se envian con cada peticion HTTP al servidor.

- Mas antiguas que localStorage y sessionStorage y fueron ampliamente usadas, mantener la session del usuario, guardar preferencias etc


    // Caracteristicas //
- Capacidad de almacenamiento de 4KB por cookie.

- Persistencia: Pueden tener una fecha de expiracion especifica. Si no se establece una fecha de expiracion, la cookie sera eliminada al cerrar la sesion del navegador.

- Envío al servidor: A diferencia de localStorage y sessionStorage, las cookies se envian automaticamente al servidor con cada solicitud HTTP, lo que puede ser util pero tambien puede generar sobrecarga en la red

- Almacenamiento por origen (dominio y protocolo): Los datos se almacenan por dominio, lo que significa que SOLO son accesibles dentro del mismo dominio
*/

// Crear una cookie
document.cookie = "usuario=Alejandro; path=/"; // Se elimina al cerrar el navegador

document.cookie = "pais=Argentina; expires=Fri, 31 Dec 2025 23:59:59; path=/;"; // La cookie se elimina el 31 de diciembre

// Eliminamos cookies poniendo una fecha de expiracion en el pasado
document.cookie = "usuario=; expires=Thu, 01 Jan 1970 00:00:00; path=/";



// Almacenamiento de datos en JavaScript
// Variables simples:   Valores unicos como numeros o cadenas
// Objetos:             Representamos datos complejos con propiedades
// Arrays:              Almacenar una lista de elementos, idealmente del mismo tipo
// Arrays de objetos:   Util para manejar listas de elmentos complejos que contienen multiples propiedades

/* Casos de uso
    -  Objeto simple: Si solo tenemos una entidad como configuracion de usuario o un unico elemento que contiene datos con varias propiedades

    - Array simple: Para una lista ordenada de elmentos individuales

    - Array de objetos: Para listas de entidades complejas, cada una con sus propiedades
*/



// Ejemplo practico
// usuario es un objeto que representa a un usuario especifico, con datos personales y carrito de compras
let usuario = { 
    id: 1,
    nombre: "Johnny Melavo",
    email: "johnny@melavo.com",
    
    // carrito dentro de usuario es un array de objetos, donde cada objeto representa un producto en carrito
    carrito: [
        { productoId: 101, nombre: "Laptop", precio: 100000, cantidad: 1 },
        { productoId: 201, nombre: "Teclado", precio: 10000, cantidad: 2 }
    ]
}

// inventario es un array de objetos que representa todos los productos disponibles en la tienda
let inventario = [
    { id: 101, nombre: "Laptop", precio: 100000, stock: 15 },
    { id: 201, nombre: "Teclado", precio: 10000, stock: 20 }
];

// La idea del array de objetos es almacenar de forma numerada, multiples objetos donde cada objeto tiene la misma estructura
let listaChantapufis = [
    { nombre: "Brad Pitt", edad: 17, ocupacion: "Actor" },
    { nombre: "Angelina", edad: 60, ocupacion: "Super estrella hollywoodiense" },
    { nombre: "El tio del cuento del tio", edad: 100, ocupacion: "Sospechosa" }
];

// iteracion de array de objetos con for clasico
for(let i = 0; i < listaChantapufis.length; i++) {
    console.log(listaChantapufis[i].ocupacion);
}

// forEach() 
listaChantapufis.forEach(chantapufi => {
    console.log(`Nombre: ${chantapufi.nombre}, ocupacion: ${chantapufi.ocupacion}`);
});

// filter() para selecionar subconjunto
let chantapufisAdultos = listaChantapufis.filter(chanta => chanta.edad > 18);
console.log(chantapufisAdultos)


// TODO: map() modificar el array sin cambiar el original
// TODO: reduce()