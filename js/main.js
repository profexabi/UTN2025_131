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