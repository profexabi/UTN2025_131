import Products from "../models/product.models.js";

export const vistaListado = async (req, res) =>{

    try {

        const respuestaProductos = await Products.selectAllProducts();

        res.render("index", {
            title: "Listado de productos",
            products: respuestaProductos[0]
        });
        
    } catch (error) {

    }
}

export const vistaConsultarId = (req, res) => {
    res.render("consultar", {
        title: "Consultar productos por id"
    })
}

export const vistaCrear = (req, res) => {
    res.render("crear", {
        title: "Crear productos"
    })
}

export const vistaModificar = (req, res) => {
    res.render("modificar", {
        title: "Modificar productos"
    })
}

export const vistaEliminar = (req, res) => {
    res.render("eliminar", {
        title: "Eliminar productos"
    })
}