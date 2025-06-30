//////////////////////
// Modelo Producto //

import connection from "../database/db.js"; // Importamos la conexion a la BBDD


//////////////////////////////////////
// Seleccionar todos los productos //
const selectAllProducts = async() => {
    let sql = `SELECT * FROM products`;
    
    // Al usar [rows] la desestructuracion extrae directamente las filas (que es el primer elemento del resultado de la consulta), nos sirve porque hace el codigo mas legible y explicito
    return await connection.query(sql);
}



/////////////////////////////////////
// Seleccionar producto por su id //
const selectProductFromId = async (id) => {
    // Consulta no optima, porque permite la inyeccion SQL
    // let sql = `SELECT * FROM products where id = ${id}`;
    let sql = `SELECT * FROM products where id = ?`;

    return await connection.query(sql, [id]);
}



///////////////////////////
// Crear nuevo producto //
const insertNewProduct = async (category, image, name, price) => {
    let sql = `INSERT INTO products (category, image, name, price) VALUES (?, ?, ?, ?)`;

    return await connection.query(sql, [category, image, name, price]);
}



//////////////////////////
// Actualizar producto //
const updateProduct = async (name, image, price, category, id) => {
    let sql = `
            UPDATE products
            SET name = ?, image = ?, price = ?, category = ?
            WHERE id = ?
        `;

    return await connection.query(sql, [name, image, price, category, id]);
}



////////////////////////
// Eliminar producto //
const deleteProduct = async (id) => {
    let sql = "DELETE FROM products WHERE id = ?";

    return await connection.query(sql, [id]);
}


export default {
    selectAllProducts,
    selectProductFromId,
    insertNewProduct,
    updateProduct,
    deleteProduct
}