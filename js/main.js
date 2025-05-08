/////////////////////
// JavaScript III //
// Scope y ambito, funciones, tipos de funciones, parametros y argumentos, funciones flecha

// TODO, explicar hoisting (elevacion)
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
setTimeout(function() {
    console.log("Hola mundo 3");
}, 1000);


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
const saludar = () => console.log("Hola!");
saludar();

// 3. Un solo parametro
const cuadrado = x => x * x; 
console.log(cuadrado(4));

// 4. Mas de un parametro
const sumar2 = (a, b) => a + b;
console.log(sumar2(2, 3));