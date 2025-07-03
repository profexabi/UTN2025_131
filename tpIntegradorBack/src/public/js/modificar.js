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
            <input class="listados_boton" id="updateProduct_button" type="button" value="Actualizar producto">
        </div>
    </li>
    `;

    getId_lista.innerHTML = htmlProductos;

    let updateProduct_button = document.getElementById("updateProduct_button")

    updateProduct_button.addEventListener("click", function(event) {
        formularioPutProducto(event, producto);
    })
}


function formularioPutProducto(event, producto) {

    event.stopPropagation();

    console.table(producto);

    let updateProduct = `
        <div id="updateProducts-container" class="crudForm-container">
            <h2>Actualizar producto</h2>
            <form id="updateProducts-form" autocomplete="off">

                <label form="idProd">Id</label>
                <input type="number" name="id" id="idProd" value=${producto.id} readonly>
            
                <label for="categoryProd">Categoria</label>
                <select name="category" id="categoryProd" required>
                    <option value="food">food</option>
                    <option value="drink">drink</option>
                </select>

                <label for="imagenProd">Imagen</label>
                <input type="text" name="image" id="imagenProd" value="${producto.image}" required>

                <label for="nombreProd">Nombre</label>
                <input type="text" name="name" id="nombreProd" value="${producto.name}" required>

                <label for="precioProd">Precio</label>
                <input type="number" name="price" id="precioProd" value="${producto.price}" required>

                <input type="submit" value="Actualizar producto">
            </form>
        </div>
    `;
    
    updateForm_container.innerHTML = updateProduct;
    
    let updateProducts_form = document.getElementById("updateProducts-form");

    updateProducts_form.addEventListener("submit", function (event) {
        actualizarProducto(event)
    });
}


async function actualizarProducto(event) {

    event.preventDefault(); // Evitamos el envio por defecto del formulario

    let formData = new FormData(event.target);

    let data = Object.fromEntries(formData.entries());

    if(!data.name || !data.image || !data.price) {
        alert("Todos los campos son obligatorios");
        return;
    }

    try {
        let response = await fetch(`${url}/products`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if(response.ok) {
            console.log(response);
            let result = await response.json();
            console.log(result.message);
            alert(result.message);

            // Vaciamos si existiera la lista y el formulario de actualizacion de producto
            getId_lista.innerHTML = "";
            updateForm_container.innerHTML = "";
        
        } else {
            let error = await response.json();
            console.log("Error:", error.message);
        }

    } catch (error) {
        console.log("Error al enviar los datos", error);
        alert("Error al procesar la solicitud");
    }
}