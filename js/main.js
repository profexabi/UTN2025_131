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