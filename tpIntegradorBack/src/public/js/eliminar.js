const url = "http://localhost:3000/api";
let getId_lista = document.getElementById("getId-list");
let getProduct_form = document.getElementById("getProduct-form");
let updateForm_container = document.getElementById("updateForm-container");

getProduct_form.addEventListener("submit", async(event) => {

    event.preventDefault(); // Evitamos el envio por defecto del formulario


    try {
        // Optimizacion 1: Mostramos un estado de carga
        getId_lista.innerHTML = "<p>Cargando producto...</p>";

        // Como obtenemos y almacenamos en JavaScript la informacion de un formulario?
        let formData = new FormData(event.target);
        console.log(formData);

        // Aca transformamos el objeto FormData en un objeto JS normal
        let data = Object.fromEntries(formData.entries());
        console.log(data); // idProd: "2"

        // Ahora si, almacenamos el valor numerico del formulario para pasarselo a la peticion fetch
        let idProd = data.idProd.trim(); // Optimizacion 2: Sacamos posibles espacios
        console.log(idProd); // 2


        // Optimizacion 3: Validacion basica
        if(!idProd) {
            throw new Error("Por favor ingresa un id de producto valido")
        }

        let response = await fetch(`${url}/products/${idProd}`);

        // Optimizacion 4: Manejamos el error en una posible respuesta no exitosa
        if(!response.ok) {
            throw new Error("Por favor, ingresa un id de producto valido")
        }

        let datos = await response.json();
        console.log(datos);


        // Optimizacion 5: Verificamos si  hay productos en la respuesta
        if(!datos.payload || datos.payload.length === 0) {
            throw new Error("No se encontro el producto solicitado");
        }


        let producto = datos.payload[0]; // El primer resultado es el que contiene el producto que nos devolvio la consulta
        

        mostrarProducto(producto);

    } catch (error) {
        console.error("Error al obtener el producto: ", error);
        getId_lista.innerHTML = `<p>${error.message}</p>`
    }

})


function mostrarProducto(producto) {
    console.log(producto);

    let htmlProductos = `
    <li class="li-listados productos-listados">
        <div class="li-listados_datos">
            <p>Id: ${producto.id} / Nombre: ${producto.name} / <strong>Precio: $${producto.price}</strong></p>
            <img src="${producto.image}" alt="${producto.nombre}" class="img-listados">
        </div>
        <div class="li-listados_boton">
            <input class="listados_boton" id="deleteProduct_button" type="button" value="Eliminar producto">
        </div>
    </li>
    `;

    getId_lista.innerHTML = htmlProductos;

    let deleteProduct_button = document.getElementById("deleteProduct_button");

    let idProd = producto.id;

    deleteProduct_button.addEventListener("click", function(event) {
        event.stopPropagation();

        let confirmacion = confirm("Querés eliminar este producto?");

        if(!confirmacion) {
            alert("Eliminacion cancelada");
        } else {
            eliminarProducto(idProd);
        }
    })
}


async function eliminarProducto(id) {
    try {
        let response = await fetch(`${url}/products/${id}`, {
            method: "DELETE"
        });

        let result = await response.json();

        if(response.ok) {
            alert(result.message);
            getId_lista.innerHTML = "";

        } else {
            console.error("Error", result.message);
            alert("No se pudo eliminar el producto");
        }

    } catch (error) {
        console.error("Error en la solicitud DELETE", error);
        alert("Ocurrio un error al eliminar un producto")
    }
}