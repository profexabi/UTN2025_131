const url = "http://localhost:3000/api";
    let getId_lista = document.getElementById("getId-list");
    let getProduct_form = document.getElementById("getProduct-form");

    getProduct_form.addEventListener("submit", async(event) => {

        event.preventDefault(); // Evitamos el envio por defecto del formulario


        try {
            // Como obtenemos y almacenamos en JavaScript la informacion de un formulario?
            let formData = new FormData(event.target);
            console.log(formData);

            // Aca transformamos el objeto FormData en un objeto JS normal
            let data = Object.fromEntries(formData.entries());
            console.log(data); // idProd: "2"

            // Ahora si, almacenamos el valor numerico del formulario para pasarselo a la peticion fetch
            let idProd = data.idProd;
            console.log(idProd); // 2


            let response = await fetch(`${url}/products/${idProd}`);

            let datos = await response.json();
            console.log(datos);

            /////////////////////////////////////////
            // TODO, optimizar consulta!!!!!!!!!!!!!
            ////////////////////////////////

            let producto = datos.payload[0]; // El primer resultado es el que contiene el producto que nos devolvio la consulta
            console.log(producto);

            let htmlProductos = `
            <li class="li-listados productos-listados">
                <img src="${producto.image}" alt="${producto.nombre}" class="img-listados">
                <p>Id: ${producto.id} / Nombre: ${producto.name} / <strong>Precio: $${producto.price}</strong></p>
            </li>
            `;

            getId_lista.innerHTML = htmlProductos;

        } catch (error) {
            console.error("Error al obtener el producto: ", error);
        }

    })