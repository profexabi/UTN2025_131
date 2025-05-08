# UTN2025_131 :telescope:
Repositorio de la TUP UTN 2025, Comision 131

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