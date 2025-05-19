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


// TODO terminar de ver eventos