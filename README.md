# UTN2025_131 :telescope:
Repositorio de la TUP UTN 2025, Comision 131


## [Clase Express V](https://youtu.be/vxIyhyGyxIY)
- Configuracion para trabajar con archivos y rutas en Express
- Setup para servir archivos estáticos `src/public` y vistas `src/views`
- Setup de EJS y creacion de plantillas del Dashboard para hacer operaciones CRUD (Create, Read, Update, Delete)
- Creadas rutas y controladores para las vistas
- Generación de tickets desde el cliente con la biblioteca [jsPDF](https://github.com/parallax/jsPDF)

---

## [Clase Express.js IV](https://youtu.be/fvjc8Fxe8KU)
- Modularizadas rutas con `Router`
- Desacoplados Middlewares
- Aplicado Patron MVC (Modelo, Vista, Controlador)

---

## [Clase Express.js III](https://youtu.be/90GLO0QwH7E)
- Creados endpoints `POST`, `PUT` y `DELETE`
- Creados middlewares `logger` y `validateId`
- Creadas vistas para realizar solicitudes a esos endpoints

---

## [Clase Express.js II](https://www.youtube.com/watch?v=dP2TzIGGTmk)
- Iniciando proyecto Express.js
- Trabajando con variables de entorno y `mysql2`
- Creando endpoints para `GET` y `GET by id`
- Haciendo solicitudes a esos endpoints desde el cliente

---

## [Node.js y Express.js](https://youtu.be/ctbN2bbQRIs)
#### Codigo de Express.js en `proyectoExpress/index.js`
```js
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
```

---

## [JavaScript VIII](https://www.youtube.com/watch?v=E-glRIex8ME)
```js
//////////////////////
// JavaScript VIII //
// JSON, asincronia, promesas, fetch, async/await y try/catch

///////////
// JSON //

/*
JSON o JavaScript Object Notation es un formato ligero de intercambio de datos que se convirtió en el estandar para la comunicación entre aplicacións en la web.
Utiliza la notacion de objetos de JavaScript pero es indendiente del lenguaje y ampliamente usado.

Es un formato de texto que representa datos estructurados basados en 2 estructuras fundamentales

1. Coleccion de pares nombre/valor (equivalente a un objeto en JavaScript)
2. Lista ordenada de valores (equivalente a un array en JavaScript)

Es un lenguaje super ligero, textual, legible, facil de parsear y generar y además, independiente del lenguaje

Reglas de sintaxis
- Los datos estan en pares nombre/valor
- Los datos estan separados por comas
- Las llaves {} representan objetos
- Los corchetes [] reprsentan arrays
- Las comillas dobles son obligatorias para nombres de propiedades y strings

Tipos de datos
1. Strings: "texto" (siempre con comillas dobles)
2. Numbers: 42, 3.14 (sin comillas)
3. Booleanos: true o false
4. Null: null (representa un valor nulo)
5. Objetos: {"clave": "valor"}
6. Arrays ["valor1", "valor2"]

///////////////////
// Ejemplo JSON //
{
    "nombre": "Juan Perez",
    "edad": 30,
    "esEstudiante": false,
    "direccion": {
        "calle": "Cochabamba 1614",
        "ciudad": "CABA"
    },
    "telefonos": ["555-1234", "555-5678"]
}


Diferencias importantes JSON vs Objetos en JavaScript

Comillas: JSON siempre con comillas dobles   /   Objeto pueden ser simples o dobles

Valores de texto: Siempre entre comillas    /   Pueden estar sin comillas

Funciones: No permitidas                    /   Permitidas

Fechas: No soportadas directamente          /   Soporte nativo

Comentarios: No permitidos                  /   Permitidos


Usos comunes de JSON

1. Comunicacion cliente-servidor: JSON es el formato estandar para APIs REST

2. Almacenamiento Local: Guardaremos datos en texto plano en el navegador

3. Configuraciones: Muchas herramientas usan JSON para configuraciones (package.json en Node.js)
*/

/////////////////////////////////
// Metodos JSON en JavaScript //


// 1. JSON.stringify() -> Convierte un objeto JS en una cadena JSON
const usuario = {
    nombre: "Johnny",
    edad: 25,
    habilidades: ["JavaScript", "HTML"]
};
console.log("Objeto:");
console.log(usuario);

// Transformamos este objeto JavaScript en una cadena JSON
const jsonString = JSON.stringify(usuario);
console.log(jsonString);


//  2. JSON.parse() -> Convierte una cadena JSON en un objeto JS
let jsonEstudiante = `{
    "nombre": "Juan Perez",
    "edad": 30,
    "esEstudiante": false,
    "direccion": {
        "calle": "Cochabamba 1614",
        "ciudad": "CABA"
    },
    "telefonos": [
        "555-1234",
        "555-5678"
    ]
}`;

console.log(jsonEstudiante);

let nuevoObjeto = JSON.parse(jsonEstudiante);
console.log(nuevoObjeto);
console.log(nuevoObjeto.nombre);

/* Conclusion

- JSON es el formato estandar para intercambiar datos
- Esta integrado en todos los navegadores y en Node.js
- Es sencillo, ligero y facil de leer
*/


///////////////////////////////
// Asincronia en JavaScript //
/*
La asincronia es la capacidad de un programa de ejecutar tareas que toman tiempo (acceder a una API o esperar a un temporizador) SIN BLOQUEAR la ejecucion del resto del codigo

En JavaScript esto es muy importante porque es un lenguaje single-threaded (de un solo hilo), por lo que solo puede ejecutarse una tarea a la vez. Para eso, para evitar que el hilo principal se bloquee, se introducen mecanismos asincronicos para "delegar" operaciones que tomaran tiempo y continuar ejecutando el resto del codigo mientras se completan esas tareas
*/

// Las Web APIs (navegador o Node.js)
// Tareas como setTimeout, eventos del DOM, fetch o AJAX no son parte del nucleo del lenguaje sino proporcionada por el entorno (navegador o Node.js). Estas APIs ejecutan tareas y registran callbacks para ser ejecutados despues.

// Herramientas de JavaScript para asincronia

// 1. Callbacks
function leerArchivo (nombre, callback) {
    // Pasan cosas
    setTimeout(() => {
        callback(`Contenido de ${nombre}`);
    }, 1000)
}

// 2. Promises
// Objeto que representa un valor que puede estar disponible ahora, en el futura, o nunca
// Estados: pending, fulfilled o rejected

// Una promesa es un objeto que representa el resultado FUTURO de una operacion asincrona
const promesa = new Promise((resolve, reject) =>  {
    setTimeout(() => {
        resolve("Datos listos!!");
    }, 1000);
});

promesa.then(data => console.log(data)); // Despues de un segundo nos devuelve "Datos listos!!"

/*
fetch("https://jsonplaceholder.typicode.com/users")
    .then(respuesta => respuesta.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
*/

/* fetch() vs promesas

- fetch es una funcion Web API
- Promesa es un objeto nativo de JavaScript

- fetch devuelve una promesa
- Promesa puede ser usada en fetch

- fetch siempre trabaja de forma sincrona
- Promesa controla valores futuros


RESUMEN
1. fetch -> USA PROMESAS como mecanismo de manejo asincronico

2.
fetch: Una funcion para hacer peticiones HTTP
Promise: Un objeto apra manejar resultados asincronicos


3. 
fetch devuelve una promesa. Si bien no es una promesa en si misma, funciona gracias a ellas

Promise: devuelve un valor, exito o error futuro. 
Las Promesas son una forma de manejar cosas que toman tiempo (como fetch)
*/



///////////////////////////////
// Profundizando en fetch() //
/*
Fetch nos permite realizar peticiones HTTP de forma asicronica usando promesas

Forma parte de las Web APIs proporcionadas por el navegador

Fue introducida cmo aprte del Fetch API para reemplazar al viejo y mas complejo XMLHTTPRequest

Caracteristicas tecnicas
- Devuelve un objeto Promise que se resuelve con un objeto Response
- Usa el estandar HTTP: metodos como GET, POST, PUT y DELETE
- Funciona bien con async/await
- Es mas limpia y moderna que XMLHttpRequest
- Soporta CORS, cabeceras, envio de JSON, etc


Sintaxis basica
    Parametros:
    - url: string que se refiere a la URL a la que queremos hacer la solicitud
    - options: objeto que especifica configuracion adicional como metodo (method), cabeceras (headers), cuerpo (body), etc

fetch(url, options)
    .then(response => {
        // respuesta cruda del servidor    
    })
    .catch(error => {
        // Error de red o fallo total
    })
*/

// Ejemplo completo con GET

fetch("https://jsonplaceholder.typicode.com/users")
    .then(respuesta => {
        if (!respuesta.ok) {
            throw new Error("Error HTTP: " + respuesta.status);
        }
        return respuesta.json(); // Transformamos el JSON a objeto JS
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error("Error al obtener los datos:", error)
    });

// TODO, incorporar ejemplo con opciones (POST) una vez veamos y expliquemos el Metodo HTTP

/* El objeto response (en el ejemplo de arriba es respuesta)
La promesa devuelta por fetch() se resuelve con un objeto Response que tiene

.ok             booleano (true si status esta entre 200 o 299)
.status         codigo HTTP (200 o 404)
.statusText     texto del estado ("OK" o "Not found")
.headers        cabeceras HTTP de la respuesta
.json           para leer el contenido de la respuesta


Casos de uso comunes con fetch
1. Consumir APIs REST (para obtener datos de usuarios, productos, etc)
2. Enviar formularios con POST
3. Cargar contenido dinamico en una SPA (Single Page Application)
*/


//////////////////
// async/await //
/*
async/await es "azucar sintactico" es decir, una manera mas sencilla de entender y leer para manejarse con promesas.
Nos permite escribir codigo asincrono con una sintaxis similar al codigo sincrono

La idea es hacer el manejo de la asincronia mas legible, estructurada y facil de depurar
*/


////////////
// async //

// La palabra clave async se usa para declarar una funcion asincrona, la cual siempre devuelve una promesa aunque el valor retornado no lo sea
async function saludar(){
    return "Holis";
}

// Aunque saludar devuelve un strin, en realidad, devuelve una Promise que se resuelve con este valor
saludar().then(console.log);


////////////
// await //

/// La palabra clave await pausa la ejecucion de la funcion async hasta que una Promesa sea resuelva (fulfilled) o rechazada (rejected)

async function obtenerDatos() {

    // await espera que fetch() devuelva una Promesa antes de continuar
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/albums");

    // El codigo despues de await no se ejecuta hasta que la Promesa es resuelta
    // Recordemos que await solo puede usarse dentro de funciones asnyc
    let datos = await respuesta.json();

    console.log(datos);
}

obtenerDatos();


/* Comparativa con Promesas vs async/await

Ejemplo con Promesas, encadenando con .then()

fetch("url")
    .then(res => res.json)
    .then(data => console.log(data))
    .catch(error => console.error(error))


Ejemplo con async/await

async function obtener() {
    // Intentamos ejecutar esto
    try {
        let res = await fetch("url");
        let data = await res.json();
        console.log(data)
    
    // En caso de haber un error
    } catch (error) {
     console.error(error)
    }
}


Ventajas de async/await
- Mas legible y secuencial
- Mejor manejo de erorres con try/catch
- Ideal para flujos largos y complejos de asincronia (nos evita un encadenamiento gigantesco de promesas con .then())


Que pasa internamente con await
    1. JavaScript evalua la expresion que devuelve una promesa
    2. Suspende la ejecucion de la funcion hasta que la promesa se resuelva o se rechace
    3. Si se resuelve, se continua con el valor
    4. Si se rechaza, lanza un error que puede ser atrapado por try...catch

Recordemos que await bloquea la ejecucion dentro de la funcion async pero no 
bloquea el hilo principal
*/


////////////////
// try/catch //
/*
try...catch es una estructura de control utilizada para capturar y manejar errores que ocurren durante la ejecucion de bloques de codigo. 

Esta tecnica forma parte del manejo de excepciones en JavaScript

Su objetivo es evitar que errores inesperados detengan la ejecucion del programa y en lugar de esto, permite manejar de forma controlada dichos errores


Sintaxis basica

try {
    // Bloque de codigo que puede lanzar errores

} catch (error) {
 // Codigo para manejar el error
}

// Opcinoalmente, tambien se puede añadir un bloque finally
try {
    // Codigo que puede fallar

} catch (error) {
    // Manejo del error

} finally {
    // Codigo que se ejecuta siempre con o sin error
}
*/

try {
    let resultado = 10 / 0;
    console.log(resultado);
    throw new Error("Error personalizado");

} catch (error) {
    console.log("Ocurrio un error: ", error.message);

} finally {
    console.log("Esto se ejecuta siempre");
}

/* Que errores puede capturar try...catch?

- Captura errores en tiempo de ejecucion (runtime) como:
    - acceso a variables no definidas
    - Llamadas a funciones inexistentes
    - Errores lanzados con throw
    - Problemas en funciones JSON.parse()

El objeto de error (llamado generalmente "error", "err" o "e") contiene informacion como:
    .name          tipo de error (TypeError, ReferenceError, etc)
    .message       Mensaje descriptivo


Consejos: No usar try...catch en exceso
- Puede ocultar errores reales si no se maneja correctamente
- Tiene costo de rendimiento, especialmente en bucles
- Es mejor usarlo en secciones donde hay riesgo real de error (peticiones HTTP)

*/
```


---


## [JavaScript VII](https://youtu.be/ItKIBIxHmnw)
```js
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
```


---


## [JavaScript VI](https://www.youtube.com/watch?v=_Wuud-ynAKk)
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Mi pagina</title>
    </head>

    <body>
        <h1>Bienvenidos</h1>
        <p>Esto es un parrafo</p>
    </body>
</html>
```
```js
///////////////////
// JavaScript VI //
// Manipulacion del DOM en JavaScript y eventos

/* El HTML de arriba seria representado en el DOM como una estructura en forma de arbol, donde document es el objeto que representa toda la pagina web
    - document
        -html
            -head
                -title

            -body
                - h1
                - p

Como funciona la manipulacion del DOM?
- JavaScript puede acceder y modificar cualquier elemento del DOM usando el objeto global document
- JavaScript puede
    - Modificar el contenido (texto, atributos, clase)
    - Añadir o eliminar elementos del DOM
    - Escuchar eventos del usuario (clics, teclados, etc)
*/

///////////////////////////////////////
// Seleccion de elementos en el DOM //

/* getElementById()
    - Este metodo selecciona un unico elemento por su ID, si no lo encuentra, devuelve null
    - Solo selecciona el primer elemento que coincida con el ID
*/

let titulo = document.getElementById("titulo");
console.log(titulo);
console.log(titulo.textContent);

/*   querySelector()
        - Selecciona el PRIMER elemento que coincida con un selector CSS (por clase, id, nombre de etiqueta)

    querySelectorAll()
        - Selecciona TODOS los elementos que coincidan con el selector CSS y devuelve NodeList (similar a un array)


Otro listado extra de selectores
    - getElementById() -> Seleccionar un elemento por su ID
    - getElementsByClassName() -> Selecciona todos los elementos que tengan una clase especifica
    - getElementsByTagName() -> Selecciona todos los elementos de un tipo de etiqueta dado
    - querySelector() -> Selecciona el PRIMER elemento que coincida con un selector CSS
    - querySelectorAll() -> Selecciona todos los elementos que coincidan con un selector CSS
*/

let primerParrafo = document.querySelector(".mensaje");
console.log(primerParrafo.textContent);

let parrafos = document.querySelectorAll(".mensaje");
console.log(parrafos);

parrafos.forEach(parrafo => console.log(parrafo.textContent));

//////////////////////////////////////
// Modificar contenido y atributos //
/*
    - textContent: Modificar el texto dentro de un elemento
    - innerHTML: Modificar el contenido HTML dentro de un elemento (con acceso a las etiquetas)
    - setAttribute(): Modificar los atributos de un elemento
    - style: Cambiar el estilo CSS en linea de un elemento
*/

let miParrafo = document.getElementById("miParrafo");
miParrafo.textContent = "Este es un nuevo texto"
miParrafo.innerHTML = "<strong>ESTE PARRAFO ESTA ZARPADO EN NEGRITA</strong>"

let boton = document.getElementById("boton");

// Cambiar el atributo 'id'
boton.setAttribute("id", "nuevoId");

// Cambiar el estilo
boton.style.backgroundColor = "pink";


/*  Crear y eliminar elementos
        - createElement(): Crear un nuevo elemento HTML
        - appendChild(): Añadir un elemento como hijo de otro
        - removeChild(): Eliminar un elemento hijo de su nodo padre
*/

// Creamos un nuevo parrafo y le asignamos un texto
let nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Soy un parrafo dinamico! Wiiiiiii";

// Insertarlo en el body
document.body.appendChild(nuevoParrafo);

// Eliminar elemento
document.body.removeChild(boton);


let contenedor = document.getElementById("contenedor");

contenedor.innerHTML = `<ul>
                            <li>Lista 1</li>
                            <li>Lista 2</li>
                            <li>Lista 3</li>
                        </ul>
                        `;


//////////////                        
// Eventos //

/*  Permiten a los desarrolldores detectar las interacciones del usuario en la pagina,  desde hacer click en un boton, mover el mouse, escribir en un campo de texto, etc. 

    Un evento es una señal que se envia cuando ocurre una interaccion o cambio en el documento. JavaScript permite escuchar (listen) estos eventos y ejecutar funciones especificas cuando ocurren.

        - click: Cuando el usuario hace click en un evento
        - mouseover: Cuando el usuario pasa el mouse sobre un evento
        - input: Cuando el usuario introduce
        - submit cuando enviamos un formulario
*/

////////////////////////
// Manejo de eventos //
// Para escuchar (listen) un evento y hacer algo a partir de ese evento, podemos usar elmetodo addEventListener() y adjuntar una funcion a un evento especifico en un elemento

// Escuchar un elemento click
let boton2 = document.getElementById("boton2");

// addEventListener() -> Añadir un evento de escucha
boton2.addEventListener("click", function() {
    console.log("Hiciste click!");
});


/* Tipos comunes de eventos
    
    - Eventos de mouse: click, dblclick, mouseover, mouseout, mousemove

    - Eventos de teclado: keydown, keyup, keypress -> deprecado

    - Eventos de formulario: submit, change, input, focus

    - Eventos de ventana: resize, scroll, load, unload
*/

/*
    //////////// 
    // event //

'event' lo pasamos como argumento. Es un objeto que contiene todos los datos del evento
usaremos la palabra event (o cualquier otra) para acceder a la informacion del evento

    - event.key: Representa el caracter o nombre de la tecla presionada
    - event.code: Representa el codigo fisico de la tecla (independientemente del idioma del teclado)

*/

let inputTexto = document.getElementById("inputTexto");

// Escuchar el evento de pulsacion de tecla
inputTexto.addEventListener("keydown", function(event) {
    
    if(event.key === "Escape") {
        alert("De que querés escapar.. cobarde!!");
    }
    
    console.log(`Tecla presionada: ${event.key}`);
    console.log(`Codigo fisico: ${event.code}`);
});


/////////////////////////////
// Propagacion de eventos //

/* Sucede cuando ocurre un evento y se propaga a traves del DOM en 2 fases

    - Fase de captura: de arriba para abajo

    - Fase de burbuja (bubbling): De abajo para arriba

    Podemos detener la propagacion de un evento usando el metodo event.stopPropagation()
*/

let padre = document.getElementById("padre");
let hijo = document.getElementById("hijo");

// Escuchar el click en el div padre
padre.addEventListener("click", function() {
    console.log("Se hizo click en el div padre");
});

// Escuchar el click en el boton
hijo.addEventListener("click", function(event) {
    event.stopPropagation(); // Detenemos la propagacion
    console.log("Se hizo click en el boton hijo");
});


// preventDefault() para evitar el comportamiento predeterminado de un elemento, ej evitar que un formulario se envie al hacer click en el boton submit

let formulario = document.getElementById("formulario");

// Evitamos que el formulario se envie con event.preventDefault()
// No es que querramos no enviar la info del formulario, queremos evitar el envio por defecto de HTML y manejarlo nosotros con JavaScript

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Formulario no enviado");
});
```

## JavaScript V
```js
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
// setTimeout(() => console.log("Hola despues de dos segundos"), 500)

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


////////////////
// ITERACION //

/* for clasico
    - Ventajas: Maximo control, podemos usar break y continue
    - Desventajas: Mas verboso (sintaxis mas extendida)
*/




/* forEach
array.forEach((elemento, indice, arrayOriginal) => {
    console.log(elemento, indice);
});

    - Ventajas: Sintaxis limpia, no necesita contador
    - Desventajas: No se puede romper el bucle (con un break)
*/

// Imprimir elementos
const colores = ["rojo", "verde", "azul"];
colores.forEach(color => console.log(color));

// Modificar array externo
const numeros = [1, 2, 3];
const dobles = [];
numeros.forEach(num => dobles.push(num * 2));
console.log(dobles);

// Actualizar propiedades
const estudiantes = [
    {nombre: "Angelina", nota: 8},
    {nombre: "Brad", nota: 6},
    {nombre: "El tio", nota: 10}
];

estudiantes.forEach(estudiante => {
    estudiante.aprobado = estudiante.nota >= 7;
});

console.log(estudiantes);



/* map()
const nuevosValores = array.map(elemento => elemento * 2);
    - Proposito: Transformar cada elemento
    - Devuelve: Nuevo array con los resultados
*/

// Crear un array de cuadrados
const nums = [1, 2, 3, 4];
const cuadrados = nums.map(num => num * num);
console.log(cuadrados);


// Convertir a strings
const edades = [25, 30, 18];
const edadesStr = edades.map(edad => `Tengo ${edad} años`);
console.log(edadesStr);

const empleados = [
    {id: 1, nombre: "Angelina", nota: 8},
    {id: 2, nombre: "Brad", nota: 6},
    {id: 3, nombre: "El tio", nota: 10}
];

const nombreEmpleados = empleados.map(emp => emp.nombre);
console.log(nombreEmpleados);


/* filter()
const filtarados = array.filter(elemento => elemento > 10);

    - Proposito: Seleccionar elementos que cumplan la condicion
    - Retorna: Nuevo array con elementos filtrados
*/

// Filtrar numeros pares
const numeros2 = [1, 2, 3, 4, 5, 6];
const pares = numeros2.filter(num => num % 2 === 0);
console.log(pares);


// Filtrar strings largos
const palabras = ["hola", "adios", "bienvenido", "ok"];
const palabrasLargas = palabras.filter(palabra => palabra.length > 4);
console.log(palabrasLargas)

//Filtrar por propiedad
const personas = [
    {nombre: "Angelina", edad: 25},
    {nombre: "Brad", edad: 17},
    {nombre: "El tio", edad: 30}
];

const mayores = personas.filter(persona => persona.edad >= 18);
console.log(mayores);

// Filtrar multiples condiciones
const ordenes = [
    { productoId: 101, nombre: "Laptop", cantidad: 1, completada: true },
    { productoId: 201, nombre: "Teclado", cantidad: 2, completada: false },
    { productoId: 301, nombre: "Mouse", cantidad: 3, completada: true }
];

const ordenesMultiplesCompletadas = ordenes.filter(orden => {
    return orden.cantidad > 1 && orden.completada
});

console.log(ordenesMultiplesCompletadas);


/* reduce()
const suma = array.reduce((acumulador, elemento) => acumulador + elemento, 0)

    - Proposito: Reducir el array a un unico valor
    - Retorna: Valor acumulado
*/

// Sumar elementos
const numeros3 = [10, 20, 30];
const suma = numeros3.reduce((acum, num) => acum + num, 0);
console.log(suma);

// Concatenar string
const palabras2 = ["Hola", "mundo", "JavaScript"];
const frase = palabras2.reduce((acumulador, palabra) => acumulador + " " + palabra);

console.log(frase);

// Sumar propiedades
let inventario2 = [
    { id: 101, nombre: "Laptop", precio: 100000, cantidad: 5 },
    { id: 103, nombre: "Mouse", precio: 10000, cantidad: 10 },
    { id: 201, nombre: "Teclado", precio: 3000, cantidad: 20 }
];

const totalInventario = inventario2.reduce((acumulador, producto) => acumulador + (producto.cantidad * producto.precio), 0);

console.log(totalInventario);


/* find() y findIndex()
const encontrado = array.find(elemento => elemento.id === 123);
const indice = array.findIndex(elemento => elemento.id === 123);

    - Proposito: Buscar primer elemento que cumpla condicion
    - Retorna: Elemento o indice
*/

// Buscar numero
const numeros4 = [5, 12, 8, 130, 44];
const encontrado = numeros4.find(num => num > 10);
console.log(encontrado);

// Buscar objeto por propiedad
const usuarios2 = [
    {id: 1, nombre: "Tiziano", activo: true },
    {id: 2, nombre: "Tiziano", activo: false },
    {id: 3, nombre: "Kevin", activo: true }
];

const usuarioActivo = usuarios2.find(user => user.activo);
console.log(usuarioActivo);

// Encontrar indice de numero
const indice = numeros4.findIndex(num => num > 100);
console.log(indice);


// Encontrar indice de objeto
const tareas = [
    {id: 1, descripcion: "Comprar mouse a 1000", completada: false },
    {id: 2, descripcion: "Estudiar para el parcial", completada: true },
    {id: 3, descripcion: "Salir a andar en bici", completada: false },
    {id: 2, descripcion: "Estudiar para el parcial", completada: true }
];

const indiceTarea = tareas.findIndex(tarea => tarea.completada);
console.log(indiceTarea);


/* for...of
for (const elemento of array) {
    console.log(elemento);
    if(elemento === "stop") {
        break
    }
}

    - Ventajas: Sintaxis limpia, permite break/continue
    - Desventajas: No provee indice automatico
*/

// Iterar con posibilidad de break
const simbolos = ['€', '$', '¥', '£'];
for(const simbolo of simbolos) {
    console.log(simbolo);
    if(simbolo === "¥") {
        break;
    }
}

// Iterar objetos
const empleados2 = [
    {id: 1, nombre: "Tiziano", salario: 2000 },
    {id: 2, nombre: "Matias", salario: 1500 },
    {id: 3, nombre: "Morena", salario: 3000 }
];

for(const empleado of empleados2) {
    if(empleado.salario > 2000) {
        console.log(`El empleado ${empleado.nombre} gana mas de 2 lucas`);
        break;
    }
}



/* Iteracion en objetos con 
    - for ... in
    - Object.keys()
    - Object.values()
    - Object.entries()
*/

// for ... in para iterar claves
const estudiante = {
    nombre: "Cosme",
    edad: 21,
    curso: "JavaScript"
};

for(const propiedad in estudiante) {
    console.log(`Propiedad: ${propiedad} . Valor: ${estudiante[propiedad]}`);
}

// Object.keys() para obtener claves
const claves = Object.keys(estudiante);
console.log(claves);
claves.forEach(clave => console.log(clave));

// Object.values() para obtener valores
const valores = Object.values(estudiante);
console.log(valores);
valores.forEach(valor => console.log(valor));

// Object.entries() para obtener pares clave-valor
for(const [clave, valor] of Object.entries(estudiante)) {
    console.log(`${clave}: ${valor}`)
}

/* Metodos de comprobacion con some() y every()

const algunoCumple = array.some(elemento => elemento > 0);
const todosCumplen = array.every(elemento => elemento > 0);

    - Proposito: Verificar si alguno(some) o todos (every) cumplen una condicion
    - Retorna: Booleano
*/

// Verificar si hay numeros pares
const numeros5 = [1, 3, 5, 7, 8];

const hayPares = numeros5.some(num => num % 2 === 0);
console.log(hayPares);

// Verificar si hay usuarios admin
const usuarios3 = [
    {id: 1, nombre: "Tiziano", rol: "user"  },
    {id: 2, nombre: "Matias", rol: "admin" },
    {id: 3, nombre: "Morena", rol: "user" }
];

const existeAdmin = usuarios3.some(user => user.rol === "admin");
console.log(`Hay algun admin? ${existeAdmin}`);

// Verificar si son todos positivos
const todosPositivos = numeros5.every(num => num > 0);
console.log(todosPositivos);

// Verificar si todos aprobaron
const estudiantesNoChantas = [
    {id: 1, nombre: "Angelina", nota: 8},
    {id: 2, nombre: "Brad", nota: 6},
    {id: 3, nombre: "El tio", nota: 10}
];

const todosAprobaron = estudiantesNoChantas.every(est => est.nota > 6);
console.log(todosAprobaron);

/* 
Comparacion de rendimiento
    - Bucles clasicos (for, while) son los mas rapidos para iteraciones simples
    - Metodos funcionales (map, filter) son mas lentos pero mas expresivos
    - for..of ofrece buen equilibrio entre rendimiento y legibilidad

Recomendaciones de uso
    - Transformar array: map()
    - Filtrar elementos: filter()
    - Reducir a un valor: reduce()
    - Buscar elemento: find() o findIndex()
    - Necesitamos romper bucles: for o for...of
    - No necesitamos romper bucles: forEach
    - Verificar condiciones: some() o every()
*/
```

## JavaScript IV
```js
////////////////////
// JavaScript IV //

// Introduccion a arrays y objetos. Metodos de strings y arrays
// Arrays y objetos son estructuras de datos fundamentales

/*
Uso principal:
    Array: Lista ordenada de elementos
    Objeto: Coleccion de pares clave-valor

Acceso a datos:
    Array: Por indice -> 0
    Objeto: Por clave

Metodos:
    Array: .push(), .pop(), .map(). .forEach()
    Objeto: Metodos personalizados

Iteracion:
    Array: bucles, .forEach(), .map()
    Objeto: for.. in, Object.keys(), Object.values()
*/


/////////////
// Arrays //
// Arrays para almacenar una lista ORDENADA de elementos
let frutas = ["pera", "banana", "mandarina"];

console.log(frutas[0]); // pera


/////////////
// Objetos//
// Objetos para almacenar datos con propiedades CLAVE-VALOR
let alumno = {
    nombre: 'Camilo',
    edad: 19,
    ciudad: "Lanus",

    agitar: function() {
        console.log("Aguante Lanus");
    }
}

// Notacion de punto
console.log(alumno.nombre); //

// Notacion de corchete
console.log(alumno["ciudad"]); //

alumno.agitar();

// Agregar una propiedad
alumno.pais = "Argentina";

console.log(alumno);

// Eliminar una propiedad
delete alumno.edad;
console.log(alumno);


// Ejemplo completo con un Objeto
let libro = {
    titulo: "El Eternauta",
    autor: "Héctor Germán Oesterheld",
    anio: 1957,

    detalles: function() {
        return `${this.titulo} es un libro escrito por ${this.autor} en el año ${this.anio}.`;
    }
};

console.log(libro.detalles());

libro.editorial = "Hora Cero Semanal";

console.log(libro);


////////////////////////////////////////////////
// Object wrappers - Envolvedores de objetos //

// JavaScript otorga metodos a tipos de datos primitivos
// Por eso se dice que en JavaScript son todo objetos (incluso los tipos de datos que no son objetos)

// Metodos de Strings en JavaScript
// https://drive.google.com/drive/u/1/folders/1QJtNkPRSPVN4S2WCuwoeNcxrZbZkPH0y
// https://www.w3schools.com/js/js_string_methods.asp


// Convertir a mayusculas o minusculas
let texto1 = "JavaScript esta re bueno";
console.log(texto1.toUpperCase()); // JAVASCRIPT ESTA RE BUENO
console.log(texto1.toLowerCase()); // javascript esta re bueno


// Reemplazamos valores
let texto2 = "JavaScript es dificil";
let nuevoTexto2 = texto2.replace("dificil", "facil");
console.log(nuevoTexto2);


// Extaer una parte del string sin alterar el string original
let texto3 = "Aprendiendo JavaScript";
let parte3 = texto3.slice(11, 22);
console.log(parte3);


// Dividir un string en un array de subcadenas
let texto4 = "Manzana, Naranja, Pomelo";
let frutas4 = texto4.split(", ");
console.log(frutas4);

let pruebaLoop = "Alejandro";
for(let i = 0; i < pruebaLoop.length; i++) {
    console.log(pruebaLoop[i]);
}


// Eliminamos los espacios en blanco, al principio y al final de un string (también teemos trimStart y trimEnd)
let texto5 = "    JavaScript     ";
console.log(texto5.trim());


// Reemplazar un caracter por otro (recuerden que hay replace() y replaceAll())
let texto6 = "Java    Script";
console.log(texto6.replaceAll(" ", "")); // Con replaceAll reemplazamos TODOS


// Devuelve el caracter en una posicion especifica
let texto7= "Hola";
console.log(texto7.charAt(0));


// Verificamos si un string contiene un valor especifico
let texto8 = "Aprendiendo JavaScript";
console.log(texto8.includes("Java"));


/*Ejercicio propuesto
Crear una funcion que reciba una cadena de texto y
    - La convierta a mayusculas
    - Reemplace una palabra dentro del string
    - Elimine los espacios en blanco sobrantes*/



// Metodos de arrays en JavaScript
// https://drive.google.com/drive/u/1/folders/1QJtNkPRSPVN4S2WCuwoeNcxrZbZkPH0y
// https://www.w3schools.com/js/js_array_methods.asp

// Un array es una estructura ORDENADA de datos que almacena varios valores en una sola variable
// Pueden contener distintos tipos de datos: numeros, strings, booleanos, etc

let numeros = [1, 2, 3, 4, 5];


// Modificamos elementos de un array
numeros[2] = 10;
console.log(numeros);

let verduras = ["Rucula", "Lechuga", "Albahaca"];


// Añadimos uno o mas elementos al FINAL del array
verduras.push("Tomate");
console.log(verduras);


// Eliminar el ultimo valor de un array
let ultimaVerdura = verduras.pop();
console.log(ultimaVerdura);
console.log(verduras);


// Eliminar el PRIMER valor de un array
verduras.shift();
console.log(verduras);


// Añadimos uno o mas elementos al INICIO del array
verduras.unshift("Ajo");
console.log(verduras);


// EXTRA: Otras estructuras de datos

// Date 
// Estructura para manejar fechas y horas
const fecha = new Date("2023-12-25");
console.log(fecha.getFullYear());


// JSON (JavaScript Object Notation)
// Estructura para representar datos en texto. Se convierte a/desde objetos con JSON.stringify() y JSON.parse()
const persona = { nombre: "Ana", edad: 30 };

const json = JSON.stringify(persona); // {"nombre":"Ana","edad":30}
console.log(json);

const obj = JSON.parse(json);
console.log(obj); 


// Map
// Coleccion de pares clave-valor donde las claves puede ser de cualquier tipo
const mapa = new Map()
mapa.set("nombre", "Ana");
mapa.set(123, "ID");
mapa.set(true, "activo");

console.log(mapa.get("nombre")); // Ana
console.log(mapa.has(123)); //true


// Set
// Coleccion de valores unicos. NO permite valores duplicados
const conjunto = new Set([1, 2, 2, 3]);
conjunto.add(4);
console.log(conjunto);
console.log(conjunto.has(2));


// WeakMap
// Similar a map, pero solo acepta objetos como claves

// WeakSet
// Como Set, pero solo acepta objetos y no valores primitivos

// Typed Arrays (ArrayBuffer)
// Para trabajar con datos binarios en bruto


```

## JavaScript III
```js
/////////////////////
// JavaScript III //
// Scope y ambito, funciones, tipos de funciones, parametros y argumentos, funciones flecha



//////////////////////////////
// Parametros y Argumentos //

// Funciones con parametros: Se pueden definir variables en las funciones que acepten valores cuando se les llama
function sumame(a, b) {
    let resultado = a + b;
    console.log(`El resultado es : ${resultado}`);
}

sumame(5, 3);

// Las funciones pueden devolver un valor, utilizando la keyword/palabra clave "return"
function multiplicame(a, b) {
    return a * b;
}

console.log(multiplicame(4, 5));

// los parametros son los nombres de las variables que definimos en la declaracion de la funcion
// los argumentos son los valores que pasamos a la funcion cuando la llamamos

function saludame(nombre = "maestro") {
    console.log(`Como le va ${nombre}`);
}

saludame();

// Multiples parametros

function sumarTresNumeros(a, b, c) {
    let resultado = a + b + c + "";
    return typeof resultado;
}

let sumaTres = sumarTresNumeros();
console.log(sumaTres);


// Tipos de funciones


// 1. Funcion declarada / Named function o basic function
// Declaracion basica de JS usa la keyword function
// Se recomienda para funciones con nombre o cuando se necesite hoisting
saludar();

function saludar() {
    console.log("Hola mundo");
}


// 2. Funcion expresada / Function expression
// Funcion adentro de una variable
// Utiles para funcones anonimas, para controlar donde va a estar disponible la funcion o para usar como argumento para otra funcion
const saludar2 = function() {
    console.log("Hola mundo 2");
}

saludar2();



// 3. Funcion anonima / Anonymous function
// No tiene nombre y se usan como callbacks generalmente
/*
setTimeout(function() {
    console.log("Hola mundo 3");
}, 1000);
*/

// 4. Funcion de flecha / Arrow function
// Especialmente util para escribir funciones de una linea
const sumar = (a, b) => a + b;





// Tipos de funciones flecha
// 1. Funcion flecha con mas de una instruccion
const saludarPersona = nombre => {
    const saludo = `Hola ${nombre}!`;
    return saludo;
}

console.log(saludarPersona("Nahuel"));


// 2. Sin parametros
const saludar3 = () => console.log("Hola!");
saludar3();

// 3. Un solo parametro
const cuadrado = x => x * x; 
console.log(cuadrado(4));

// 4. Mas de un parametro
const sumar2 = (a, b) => a + b;
console.log(sumar2(2, 3));



/////////////////////
// Scope (Ambito) //

// Es el contexto en el cual las variables y las funciones son accesibles y pueden ser referenciadas

// Global Scope o Ambito global
// Las variables declaradas fuera de cualquier funcion o bloque {} tienen alcance global y son accesibles desde cualquier parte del codigo

var globalVar = "Soy global";

function mostrarGlobal() {
    console.log(globalVar);
}

mostrarGlobal(); // Soy global

console.log(globalVar); // Soy global




// Local Scope - Function scope o Ambito local o de funcion
// Las variables declaradas dentro de una funcion solo son accesibles dentro de esa funcion -> ambito local

function mostrarLocal() {
    var localVar = "Soy local";
    console.log(localVar);
}

mostrarLocal(); // Soy local
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined



// Block Scope o Ambito de bloque
// A partir de ES6 (JavaScript 2015), las variables let y const tienen alcance de bloque
// Esto significa que solo son accesibles dentro del bloque en que se declararon {} (if, for, etc)

if(true) {
    let bloqueBar = "Soy de bloque";
    console.log(bloqueBar);
}

// console.log(bloqueBar); // Uncaught ReferenceError: bloqueBar is not defined


console.log("//////////////////");

// Scope Chain o Cadena de Ambito
// Cuando intentamos acceder a una variable, JavaScript busca en la cadena de ambito.
// Comienza por el contexto (ambito) mas itnerno y va moviendose hacia los externos hasta encontrar la variable o llegar al ambito global

var globalVar2 = "Soy global 2 papa!";

function externa() {
    var externaVar = "Soy de externa papa!";

    function interna() {
        var internaVar = "Holu, yo soy de interna";

        console.log(globalVar2);
        console.log(externaVar);
        console.log(internaVar);
    }

    interna();
    // console.log(internaVar); // Uncaught ReferenceError: internaVar is not defined
}

externa();


// Consejo extra: Siempre intenten ver hasta donde llega el codigo con un console.log("test");



 // Function Scope (Ambito de funcion) vs Block Scope (Ambito de bloque)
 // Con function scope, las variables declaradas con var tienen ambito de funcion. 
 // Por tanto si se declaran adentro de una funcion, no son accesibles fuera de esa funcion, pero NO estan limitadas por bloques

 function scopeFunction() {
    if(true) {
        var funcionVar = "Soy de funcion!";
    }

    console.log(funcionVar);
 }

 scopeFunction();


 // Con block scope, las variables let y const estan limitadas por el BLOQUE {} en el que se declaran
function scopeBloque() {
    if(true) {
        let bloqueLet = "Soy de bloque!";
        const bloqueConst = "Yo soy de bloque tambien! Quien sos?";
    }

    // console.log(bloqueLet); // Uncaught ReferenceError: bloqueLet is not defined
    // console.log(bloqueConst); // Uncaught ReferenceError: bloqueConst is not defined
}

scopeBloque();


function ejemplo() {
    let ejemploLet = "BOOOOOOOOOOOOCAAAAAAAAAAAAA";
    console.log(ejemploLet);
}

ejemplo();
//console.log(ejemploLet);



///////////////////////////
// Hoisting (Elevacion) //
// Las declaraciones de variables y funcion en JavaScript se mueven hacia arriba de su contexto de ejecucion
// Solo las declaraciones son elevadas, no las inicializaciones

// variables con var: Se elevan y se inicializan con undefined

console.log(elevadaVar);
var elevadaVar = "Soy elevada!";
console.log(elevadaVar);

// variables con let y const: Se elevan pero NO se inicializan (de hecho nos tira un error al acceder antes de la declaracion)

//console.log(elevadaLet); // Uncaught ReferenceError: Cannot access 'elevadaLet' before initialization
let elevadaLet = "Soy una let elevada!";
console.log(elevadaLet);



// Diferencias entre var, let y const

// var: Tiene ambito de funcion (se declara dentro de la funcion actual y esta disponible en todo momento) y permite la redeclaracion y la reasignacion

// let: Tiene ambito de bloque (se declara dentro de un bloque {}) y sólo está disponible dentro de ese bloque. También permite la redeclaración pero no la reasignación

// const: Tiene ambito de bloque (se declara dentro de un bloque {}) y sólo está disponible dentro de ese bloque. Pero a difernecia de let, prohibe la reasignacion y la redeclaracion

let i = 0;

function muestraLet() {
    i = 1;
    let j = 2;

    if(true) {
        console.log(i);
        console.log(j);
    }
}

console.log(i);
muestraLet();


console.log("//////////////////");

function muestraLet2() {
    let x = 1;
    {
        let y = 2;
        console.log(y); // 2
    }

    console.log(x); // 1
    // console.log(y); // Error: y is not defined
}

muestraLet2();


// Recomendaciones
// Usaremos const para variables de solo lectura, como constantes u objetos inmutables
// Usaremos let para variables que puedan cambiar con el tiempo pero que no deban volver a declararse
// Evitar siempre usar ar debido a su ambito global o de funcion que puede dar lugar a bugs y problemas

const PI = 3.1416;

let contador = 0;
contador++;
console.log(contador);

// NO RECOMENDADO: var
var x = 10;
x = 20;


```

## JavaScript II
```js
////////////////////
// JavaScript II //
// Control de flujo, estructuras de control, condicionales y bucles


////////////////////
// Condicionales //

// Condicional if
// Se usa para ejecutar un bloque de codigo si una condicion es verdadera
/*
    if(condicion1) {
        // Codigo a ejecutar si la condicion1 es verdadera

    } else if (condicion2) {
     // Codigo a ejecutar si la condicion2 es verdadera

    } else {
        // Codigo si ninguna condicion es verdadera
    }
*/

let a = 0;

if(a > 0) {
    console.log("El numero es positivo");

} else if (a < 0) {
    console.log("El numero es negativo");

} else {
    console.log("El numero es cero");
}


let edad = -17;

if(edad >= 18) {
    console.log("Sos mayor de edad");

} else if (edad < 18 && edad > 0){
    console.log("Sos menor de edad");

} else {
    console.log("Edad invalida");
}


// Operadores logicos
/*
◦ AND (&&): Ambas condiciones deben ser verdaderas.
◦ OR (||): Al menos una condición debe ser verdadera.
◦ NOT (!): Niega el valor de una condición. Es el operador de negación lógica.
*/

let edad2 = 25;
let tieneLicencia = true;

if (edad2 >= 18 && tieneLicencia) {
    console.log("Puede manejar");
}

if(edad2 < 18 || !tieneLicencia) {
    console.log("No puede manejar");
}

let esActivo = true;

esActivo = !esActivo;

if(!esActivo) {
    console.log("La cuenta esta inactiva");
} else {
    console.log("La cuenta esta activa");
}


let estado = true;

function alternarEstado() {
    estado = !estado; // Invertimos el valor de estado
    console.log("Nuevo estado: ", estado);
}

alternarEstado();
alternarEstado();
alternarEstado();

console.log("//////////////////");


// Valores truthy y falsy
/* Truthy Falsy JavaScript

    En JavaScript, un valor verdadero es un valor que se considera verdadero cuando se encuentra en un contexto booleano, mientras que un valor falso se considera falso Todos los valores son verdaderos a menos que se definan como falsos, lo que incluye false, 0, 0n, «», null, undefined y NaN

    Por ejemplo, los números distintos de cero, las cadenas no vacías, true, los objetos vacíos {} y las matrices vacías [] se consideran verdaderos. Por el contrario, los valores falsos incluyen false, 0, -0, 0n, «», null, undefined y NaN.

    Cuando se trabaja con valores verdaderos y falsos, es importante evitar comparaciones directas y utilizar comparaciones de igualdad estricta (===) para evitar comportamientos inesperados Además, la conversión de valores a un booleano utilizando la función Boolean() puede ayudar a asegurar que un falso es generado sólo por los valores falsos mencionados anteriormente

    Comprender el concepto de valores verdaderos y falsos puede ayudarle a escribir código JavaScript más limpio y eficiente Por ejemplo, puede simplificar la lógica condicional confiando en el valor booleano inherente de las variables en lugar de compararlas explícitamente con verdadero o falso

    He aquí algunos ejemplos de valores verdaderos y falsos en JavaScript:

    * **true**: This is a direct Boolean value that is always truthy.
    * **1**: Any non-zero number, including negative numbers, is truthy.
    * **"hello"**: Any non-empty string is truthy.
    * **[]**: An empty array is truthy.
    * **{}**: An empty object is truthy.
    * 
    * **false**: This is a direct Boolean value that is always falsy.
    * **0**: Zero is falsy.
    * **null**: This value is falsy.
    * **undefined**: This value is falsy.
    * **NaN**: This value is falsy.
*/

let valor1 = 0;
let valor2 = "Hola";

console.log(!valor1);
console.log(!valor2);



////////////////////////
// Operador ternario //
// Forma mas compacta de escribir una condicion if else

let edad3 = 20;
let mensaje = (edad3 >= 18) ? "Sos mayor de edad!" : "Sos menor de edad";
console.log(mensaje);


// EXTRA: Funciones flecha
// Funcion flecha con mas de una instruccion
const saludarPersona = nombre => {
    const saludo = `Hola ${nombre}!`;
    return saludo;
}

console.log(saludarPersona("Nahuel"));


// Sin parametros
const saludar = () => console.log("Hola!");
saludar();

// Un solo parametro
const cuadrado = x => x * x; 
console.log(cuadrado(4));

// Mas de un parametro
const sumar = (a, b) => a + b;
console.log(sumar(2, 3));



/////////////
// Bucles //

// Bucle for clasico
/* 
for (inicializacion; condicion; incremento) {
    // Codigo a ejecutar en cada iteracion
}*/

for (let i = 0; i < 5; i++) {
    // console.log("Iteracion " + i); // Operacion de concatenacion
    // console.log("mensaje " + variable + " , " + variable2 + " ?");

    // Sintaxis de template literals
    console.log(`Iteracion: ${i}`); // forma mas moderna de concatenar valores
}


// Bucles for anidados
for (let i = 0; i < 3; i++) {

    for (let x = 0; x < 3; x++) {
        console.log(`${i} - ${x}`);
    }

}

// EJERCICIO PROPUESTO: Generar una tabla de multiplicar del 1 al 3 con bucles for anidados


// Bucle while
// Ejecuta el bloque de codigo mientras la condicion sea verdadera
/**
 while(condicion) {
    // Codigo a ejecutar mientras la condicion sea verdadera
 }*/

let contador = 0;

while(contador < 5) {
    console.log(`Iteracion: ${contador}`);
    contador++; // Apliquen la logica para evitar los bucles infinitos
}


// Bucle do while
// Similar al while pero la condicion se evalua despues de ejecutar el bloque de codigo, lo que garantiza que se ejecuta al menos una vez
/*
do {
    // Codigo a ejecutar
} while(condicion);*/

let contador2 = 0;

do {
    console.log(`Iteracion: ${contador2}`);
    contador2++;

} while(contador2 < 5);


console.log("/////////////////");

////////////////////////////////
// Control de flujo avanzado //

// Usaremos unas keywords / palabras clave
// break se usa para salir inmediatamente de un bucle o una estructura de control

for (let i = 0; i < 10; i++) { 
    if(i === 5) {
        break; // Salimos del bucle cuando i es 5
    }

    console.log(`Iteracion: ${i}`);
}

console.log("/////////////////");

// continue saltar a la siguiente iteracion del bucle, omitiendo el codigo restante del bucle para esa iteracion
for (let i = 0; i < 10; i++) { 
    if(i === 2) {
        continue; // Salteamos la iteracion cuando i es igual a 2
    }

    console.log(`Iteracion: ${i}`);
}


// switch permite evaluar una expresion y ejecutar el bloque de codigo correspodniente al caso que coincide
/*
switch(expresion) {
    case valor1:
        // Codigo si la expresion es igual a valor1
        break;

    case valor2:
        // Codigo si la expresion es igual a valor2
        break;

    default:
        // Codigo que se ejecuta si ninguno de los casos coincide
}
*/

// 3 metodos para mostrar o solicitar info por pantalla
// alert("Hola soy un molesto mensaje");
// let laPosta = confirm("Entendes posta JavaScript?");
// console.log(laPosta);


//let diaSemana = parseInt(prompt("Escribi el dia de la semana:"));
let diaSemana = prompt("Escribi el dia de la semana:");

// Verificar que dia de la semana es
switch (diaSemana) {
    
    case 1: // Si no parseamos, el resultado es "1"
        console.log("Lunes");
        break;

    case 2:
        console.log("Martes");
        break;

    case 3:
        console.log("Miercoles");
        break;

    case "jueves":
    case 4:
        console.log("Jueves");
        break;

    case 5:
        console.log("Viernes");
        break;

    default:
        console.log("Fin de semana");
}

/* EJERCICIO SUGERIDO PARA PRACTICAR EN LA SEMANA//////////

    Sugerencia para repasar las 2 primeras unidades:


    Elaborar con prompt() una calculadora personalizada que pida tipo de calculo: sumar, restar, multiplicar, dividir 
    + - * /

    Guarde un primer valor con prompt en una variable y otro valor en otra variable

    Manejense con un switch para seleccionar de esas cuatro opciones y que les devuelva por consola el calculo correcto

    Usen condicionales para filtrar los datos que piden por prompt

    EXTRA: Por cada operacion que definan, usen un tipo de funcion diferente    */
```

---


## JavaScript I
```js
///////////////////
// JavaScript I //
// Conceptos elementales, sintacis básica, variables, tipos de datos y operadores

/*Comentario
de 
multiples 
lineas*/

// Variables
var nombre = "Esteban"; // Declaracion historica de variables
let edad = 25;
const pi = 3.1416


// Tipos de datos primitivos 
let numero = 42;
let tecto = "Hola";
let verdadero = true;
let vacio = null;
let indefinido;

console.log(numero); // 42
console.log(tecto); // "Hola"
console.log(verdadero); // true
console.log(vacio); // null
console.log(indefinido); // undefined



/////////////////
// Operadores //
// https://www.w3schools.com/js/js_operators.asp

// Operadores aritmeticos
// Se utilizan para realizar operaciones matematicas sobre valores numericos
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.33
console.log(a % b); // 1
console.log(a ** b); // 1000


// Operadores de asignacion
// Asignamos valores a las variables
let c = 10; // Le asignamos el valor 10
console.log(c); // 10

c += 5;
console.log(c); // 15

c -= 2;
console.log(c); // 13


// Operadores de comparacion
// Devuelven un resultado booleano (true o false)
let d = 5;
let e = "5";

console.log(d == e); // true
console.log(d === e); // false


console.log("//////////////////");

// Operadores logicos
// Combinamos expresiones booleanas
let f = true;
let g = false;

console.log(f && g); // false (ambos deben ser true)
console.log(f || g); // true (al menos uno es true)
console.log(!f); // false (invierte el valor de f)


// Operadores de tipo
// Permiten verificar el tipo de un valor
console.log(typeof 42); // number
console.log(typeof "Hola mundo"); // string


// Operadores de incremento / decremento
// Aumentamos o disminuimos el valor de una variable numerica
let h = 10;
h++;
console.log(h);

h--;
console.log(h);
```