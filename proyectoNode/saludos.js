// Definimos una funcion saludar
function saludar(nombre) {
    return `Holis, ${nombre}!!`;
}

// Exportamos esta funcion para poder utilizarla en otro archivo
module.exports = saludar; // Usamos la sintaxis de CommonJS para poder exportar