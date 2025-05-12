# UTN2025_131 :telescope:
Repositorio de la TUP UTN 2025, Comision 131

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