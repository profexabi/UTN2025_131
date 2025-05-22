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