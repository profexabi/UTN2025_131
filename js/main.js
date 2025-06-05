/////////////////////
// JavaScript VII //
// High Order Functions, destructuring, spread operator, closures, funciones anidadas, web apis

///////////////////////////
// High order functions //

/* Una funcion de orden superior es una funcion que puede hacer al menos una de estas dos cosas

    1. Recibir una o mas funciones como argumentos
    2. Devolver una funcion como resultado

Las high order functions operan sobre otras funciones, tomandolas bien como parametros o retornandolas. 
Esto es porque JavaScript les concede prioridad a las funciones "ciudadanos de primera clase" o first-class citizens. Lo que significa que podemos asignar funciones a variables, pasarlas como argumentos o retornarlas desde otras funciones

Entre sus ventajas tenemos:

- Abstraccion: Permite escribir codigo mas abstracto y reutilizable
- Composicion: Facilitan combinar funcionalidades pequeñas en lógicas más complejas
*/

// Ejemplo 1: Aceptando una funcion como argumento
function funcionAltoNivel(callback) {
    console.log("Ejecutando la funcion de alto nivel");

    callback(); // Llamada a la funcion callback
}

function funcionCallback() {
    console.log("Ejecutando la funcion callback");
}

funcionAltoNivel(funcionCallback);


// Ejemplo 2: Funcion de alto nivel que devuelve una funcion
function crearSaludo(saludo) {
    // Devolvemos una nueva funcion
    return function(nombre) {
        console.log(`${saludo}, ${nombre}`);
    }
}

// Creamos una funcion saludo
let saludaHola = crearSaludo("Hola");
saludaHola("Juan");

// Creamos una funcion despedida
let saludaDespedida = crearSaludo("Chau");
saludaDespedida("Carla");


// Ejemplo 3: Una funcion de alto nivel que abstraiga logica y reutilizemos
function ejecutarOperacionArray(array, operacion) {
    return array.map(operacion);
}

// Funcion que duplica cada elemento en el array
function dobles(numero) {
    return numero * 2;
}

let numeros = [1, 2, 3, 4, 5];
let numerosDobles = ejecutarOperacionArray(numeros, dobles);
console.log(numerosDobles);


// Funciones de alto nivel comunes
// 1. forEach: recorre todos los elementos de un array y ejecuta una funcion sobre cada uno

numeros.forEach(function(num) {
    console.log(num * 2);
});

// 2. map: crea un nuevo array aplicando una funcion a cada elemento del array original
let alCuadrado = numeros.map(x => x ** 2);
console.log(alCuadrado);

// 3. filter: crea un nuevo array con los elementos que cumplen una condicion
let pares = numeros.filter(num => num % 2 === 0);
console.log(pares);

// 4. reduce: acumula los valores del array en un solo valor, segun una funcion reductora
let suma = numeros.reduce((acum, actual) => acum + actual, 0);
console.log(suma);

// 5. sort: ordena lso ellmentos de un array segun una funcion de comparacion
let letras = ["d", "a", "c", "b"];
letras.sort();
console.log(letras);

// 6. find: devuelve el primer elemento del array que cumple una condicion
let frutas = ["manzana", "banana", "cereza"];
let encontrada = frutas.find(fruta => fruta.startsWith("b"));
console.log(encontrada);

// Entre las ventajas tenemos la reduccion de codigo repetititivo, mejora la legibilidad y nos permite encadenar
let usuarios = [
    {nombre: "facundo", edad: 30},
    {nombre: "brayan", edad: 32},
    {nombre: "morena", edad: 17}
];

let mayoresEdad = usuarios
    .filter(user => user.edad >= 18)
    .map(user => user.nombre);

console.log(mayoresEdad);



////////////////////
// Destructuring //
/*
Destructuring o destructuracion es una sintaxis que permite extraer valores de arrays o propiedades de objetos y asignarlos a variables

Es una forma de descomponer estructuras de datos en variables individuales sin tener que acceder manualmente a cada elemento o propiedad

- Mejora la legibilidad del codigo
- Facilita el acceso rapido a datos de estructuras complejas
- Reduce la verbosidad (menos lineas para obtener lo mismo)
*/

// let numeros = [1, 2, 3, 4, 5];
let ejUno = numeros[0];
let ejDos = numeros[1];
console.log(ejUno, ejDos);

// Con destructuring
let [uno, dos] = numeros;
console.log(uno, dos);

let alumno = { nombre: "Matias", edad: 20 };
let ejNombre = alumno.nombre;
let ejEdad = alumno.edad;

// Con destructuring asignando a nuevas variables
let {nombre: n, edad: e} = alumno;
console.log(n);

// Destructuring con valores por defecto
let { nombre, ciudad="Gotica" } = { nombre: "Carlos" };
console.log(ciudad);


// Destructuring en parametros de funcion
function saludar({nombre, edad}) {
    console.log(`Hola ${nombre}, tenes ${edad} años`);
}

saludar(alumno);

// Destructuring de arrays con valores omitidos
let [primero, ,tercero] = [10, 20, 30];
console.log(primero, tercero);


// Destructuring de un array con rest operator
let [a, ...resto] = [1, 2, 3, 4];
console.log(a);
console.log(resto);

// Destructuring de un objeto con rest operator
let { nombre: nomb, ...otros } = { nombre: "Facundo", edad: 25, pais: "Argentina" };
console.log(nomb);
console.log(otros)



//////////////////////
// Spread operator //

/* Es el operador de propagacion (...)
Una sintaxis introduccida en ES6 que permite descomponer elementos iterables (como arrays, strings y objetos) en elementos individuales

- Manipulacion de arrays, copiando, concatenando
- Combinacion de objetos
- Paso de argumentos a funciones
*/

// Los cambios en copia no afectan al original
let original = [1, 2, 3];
let copia = [...original];
console.log(copia);

// Concatenacion de arrays (mas eficiente que el metodo concat)
let array1 = [1, 2];
let array2 = [3, 4];
let combinado = [...array1, ...array2];
console.log(combinado);

// Convertir strings en arrays (igual que split)
let str = "Hola";
let caracteres = [...str];
console.log(caracteres);

// Copia de objetos
let obj1 = {a: 1, b: 2};
let obj2 = {...obj1};
console.log(obj2);

// Combinacion de objetos
let defaults = { theme: "dark", fontSize: 14 };
let userSettings = { fontSize: 16 };
let finalConfig = { ...defaults, ...userSettings };

// Propiedades posteriores sobreescriben las anteriores
console.log(finalConfig);

function sumaTres(a, b, c) {
    return a + b + c;
}

let nums = [1, 2, 3];

console.log(sumaTres(...nums)); // Equivale a poner sumaTres(1, 2, 3)

// Recoger argumentos restantes
function imprimirArgumentos(primero, ...resto) {
    console.log(primero);
    console.log(resto);
}

imprimirArgumentos("uno", "dos", "tres");


///////////////
// Closures //

/* Un closure es una funcion que recuerda el entorno (SCOPE) en el que fue creada, incluso despues de que ese entorno haya finalizado su ejecucion.

Cada vez que creamos una funcion dentro de otra funcion, se crea una closure. La funcion interna CAPTURA las variables de su entorno externo y mantiene una REFERENCIA a ellas, no una copia

Una closure ocurre cuando una funcion INTERNA accede a variables de su funcion externa, incluso despues de que la funcion externa terminara de ejecutarse

- Nos permiten recordar valores sin usar variables globales
- Crear funciones privadas
- Hacer un codigo mas limpio y modular
*/

function crearContador() {
    let contador = 0;

    return function() { // Funcion interna anonima
        contador++; // Esta funcion recuerda la variable contador
        return contador;
    }
}

let contar = crearContador();
// Cada vez que llamos a contar, estamos invocando la misma closure que mantiene su propio estado interno
console.log(contar()); // 1
console.log(contar()); // 2
console.log(contar()); // 3

// Clave recordar que las closures recuerdan variables aunque su funcion madre ya no se esté ejecutando


/////////////////////////
// Funciones anidadas //
/*
Una funcion anidada es simplemente una funcion definida dentro de otra funcion.
Es decir, una funcion interna que vive en el ambito lexico (scope) de una funcion externa

- Se declara dentro de otra funcion
- Tiene acceso a todas las variables y parametros de su funcion externa
- Puede ser utilizada para organizar emjor el codigo, modularizar logica o crear closures


- Que son las funciones anidadas? Son funciones declaradas dentro de otras funciones
- Acceden a variables de su funcion externa (scope lexico)
- Las funciones internas son privadas al bloque donde se definen
- Las usaremos para modularizar, por privacidad, closures, logica auxiliar interna
*/ 

function saludar(nombre) {
    function construirMensaje() {
        return `Hola ${nombre}`;
    }

    return construirMensaje();
}

console.log(saludar("Esteban"));

// Ejemplo para entender el scope lexico o (alcance, entorno) lexico. Esto quiere decir que pueden acceder a las variables de la funcion externa, pero no al reves
function externa() {
    let mensaje = "Hola desde afuera";

    function interna() {
        console.log(mensaje); // Accede a la variable de externa gracias al scope lexico
    }

    interna();
}

externa();


// Ejemplo comun de funcion anidada
// En lugar de escribir una gran funcion, definimos sub-funciones internas para modularizar la logica

function procesarTexto(texto) {

    function limpiar(t) {
        return t.trim().toLowerCase();
    }

    function contarPalabras(t) {
        return t.split(/\s+/).length;
    }

    let limpio = limpiar(texto);
    return contarPalabras(limpio);

}

console.log(procesarTexto("Gano el calamar che!!! estan re zarpados los de saavedra "));


function cuenta() {
    let cuenta = 0;

    return function() {
        cuenta++;
        return cuenta;
    };
}

let incrementar = cuenta();
console.log(incrementar()); // 1
console.log(incrementar()); // 2
console.log(incrementar()); // 3
// Ojo porque demasiadas funciones anidadas pueden dificultar la legibilidad si no estan bien organizadas



////////////////
// Callbacks //
/*
Las callbacks son funciones que se pasan como argumento a otra funcion y se ejecutan despues de que algo haya ocurrido

Es como decirle a la funcion "cuando termines de ejecutar este codigo, llama a esta otra funcion"

Se usan para:
- Ejecutar codigo despues de una tarea
- Manejar tareas asincronicas (como leer arhcivos o pedir datos a un servidor)
- Hace que el codigo sea más flexible y reutilizable
*/

function holis(nombre) {
    console.log(`Holis! ${nombre}`);
}

function procesarUsuario(nombre, callback) {
    console.log("Estamos haciendo cosas");
    // Hacemos mas cositas

    callback(nombre); // Finalmente cuando termina de procesar el codigo de procesarUsuario, llama a holis(nombre)
}

procesarUsuario("Matias", holis);


// Ejemplo con setTimeout
console.log("Inicio");

// setTimeout recibe una funcion callback que se ejecutara despues de 2000 milisegundos (2 seg)
setTimeout(() => {
    console.log("Esto se va a mostrar despues de 2 segundos");
}, 2000);

console.log("Fin");

// Un callback es una funcion que se pasa a otra funcion para que sea llamada mas tarde
// callback = funcion que se ejecuta despues de otra funcion, como una continuacion


////////////////////
// Callback hell // -> El bolonqui de los callbacks

// Ejemplo practico de callback hell que funca, pero es horrible
setTimeout(() => {
    console.log("Paso 1");
    setTimeout(() => {
        console.log("Paso 2");
        setTimeout(() => {
            console.log("Paso 3");
            setTimeout(() => {
                console.log("Paso 4");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);



// Ejemplo sintactico de callback hell
/*
haceralgo(function(res1) {
    hacerAlgoMas(res1, function(res2) {
        continuar(res2, function(res3) {
            terminar(res3, function(res4) {
                console.log("Tuki! termino");
            })
        })
    })
})
*/


// Como solucionar el callback hell?
// Ejemplo sintactico con Promises
/*
hacerAlgo()
    .then(res1 => hacerAlgoMas(res1))
    .then(res2 => continuar(res2))
    .then(res3 => terminar(res3))
    .then(() => console.log("listo"))
    .catch(error => console.error(error));
*/

// Ejemplo sintactico con async/await
/*
async function ejecutarTareas() {
    try {
        let res1 = await hacerAlgo();
        let res2 = await hacerAlgoMas(res1);
        let res3 = await continuar(res2);
        
        await terminar(res3);

        console.log("Listo!");


    } catch (error) {
        console.error(error);
    }
}
*/


///////////////
// Web APIs //
/* API (Aplication Programming Interface) o Interfaz de Programacion de Aplicaciones

Una API es un conjunto de funciones y herramientas que podemos usar para interactuar con algo, como el navegador, el servidor o una libreria

Una web api, en el contexto del navegador, es una funcion o conjunto de funciones que nos da el navegador para que las usemos con JavaScript

JavaScript en si, es solo un lenguaje de programacion muy basico. Pero cuando se ejecuta en un navegador, puede acceder a funcionalidades especiales que le proporciona el navegador, como:

- Manipular el DOM (con document -> document.getElementById)
- Ejecutar una funcion despues de un tiempo (setTimeout)
- Hacer peticiones HTTP (fetch)
- Mostrar informacion en la consola (console.log)
- Trabajar con audio, video, GPS, etc
- Guardar datos en el navagador (localStorage)

---

Por que decimos que fetch es una API?
    - fetch() no es parte del lenguaje JavaScript puro
    - Es una funcion que le da el navegador a JavaScript para que pueda hacer peticiones a servidores web
    - Por eso decimos que es una Web API que el navegador expone
    
setTimeout tambien esuna API?
    - Si, setTimeout() no es parte del nucleo de JavaScript
    - Cuando usamos setTimoeut estamos usando una API del entorno de ejecucion del navegador (no de javascript puro)

Una API es un conjunto de funciones para interactuar con algo

Las Web API son funciones que el navegador le da a JavaScript

---

Tipos de Web APIs comunes

1. APIs del DOM (Document Object Model)
Nos permiten acceder y modificar el HTML y CSS de la pagina
Uso: manipulacion de elemntos, eventos, clases, estilos, etc

    - document.querySelector()
    - document.createElement()
    - element.addEventListener()
    - classList.add() / style


2. APIs de Red
Nos permiten comunicar con servidores o cargar recursos
Uso: Peticiones HTTP, chats, notificaciones en tiempo real
    - fetch()
    - XMLHttpRequest() -> manera antigua de hacer peticiones HTTP
    - WebSocket -> Comunicacion en tiempo real
    - EventSource -> Server-Sent Events


3. APIs de Almacenamiento
Guardan informacion en el navegador
Uso: Guardar preferencias de usuario, datos de sesion, apps sin conexion

    - localStorage()
    - sessionStorage()
    - IndexedDB
    - Cookies (mediante document.cookie)

4. APIs Timers
Permiten ejecutar funciones luego de un cierto tiempo
Uso: Retrasos, animaciones, polling
    
    - setTimeout()
    - setInterval()
    - clearTimeout(), clearInterval()
    
5. APIs de dispositivos y multimedia
Interaccion con hardware o medios
Uso: Aplicaciones moviles, camara, permisos, grabaciones, notificaciones

    - navigator.geolocation -> GPS
    - MediaDevices.getUserMedia() -> Microfono y camara
    - Notification -> Notificaciones del sistema
    - Battery API, Clipboard API


6. APIs de interfaz grafica
Controlan animaciones, graficos y visualizacion
Uso: Juegos, visualizaciones, graficos dinamicos

    - Canvas API
    - WebGL
    - Fullscreen API
    - Screen Orientation API


7. APIs de Workers y ejecucion
Permiten ejecutar codigo en segundo plano
Uso: Procesos paralelos sin bloquear la interfaz

    - Web Workers
    - Service Workers
    - Shared Workers
*/


////////////////////////////
// Introduccion promesas //

// 1. Primero hacemos una peticion HTTP para obtener los recursos de esa url
fetch("https://jsonplaceholder.typicode.com/users") 

    // 2. Una vez que obtuvimos esos datos, la respuesta en JSON la transformamos en objetos JS
    .then(response => response.json())

    // 3. Una vez procesados estos datos, los mostramos en formato tabla por consola
    .then(data => console.table(data))

    // 4. En caso de haber un error, no los mostrara en formato error por consola
    .catch(error => console.error(error))


/////////////////////////////////
// Introduccion a async/await //
async function obtenerDatos() {

    try {
        // Hacemos una peticion HTTP para obtener los recursos de esa url
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    
        // Transformarmos la respuesta en texto plano JSON a objectos en JavaScript
        let data = await res.json();
    
        console.table(data);

    // En caso de haber un error, no los mostrara en formato error por consola
    } catch (error) {
        console.error(error);
    }

}

obtenerDatos();