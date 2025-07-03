////////////////////////
// Logica para trabajar con archivos y rutas de proyecto en Express.js


// Importacion de modulos para trabajar con rutas

// Convierte una URL de archivo del sistema en una ruta valida del Sistema Operativo (/home/usuario/proyecto)
import { fileURLToPath } from "url";

// dirname extrae el directorio padre de una ruta
// join une rutas como si fuera path.join(...), esto nos sirve para construir rutas
import { dirname, join } from "path";


// import.meta.url contiene la URL del archivo actual (file://home/user/project/src/api/utils/index.js)
// fileURLToPath la convierte a ruta local del sistema de archivos (/home/user/project/src/api/utils/index.js)
const __filename = fileURLToPath(import.meta.url);


// dirname(__filename) da el directorio actual de este archivo (/home/user/project/src/api/utils)
// con ../../../ retrocedemos 3 niveles enla estructura del proyecto /utils -> /api -> /src -> tpIntegradorBack/
const __dirname = join(dirname(__filename), "../../../"); // Apuntamos a la raiz del proyecto


// Exportamos __dirname y join para que otros archivos puedan importar y usar estas herramientas
export {
    __dirname,
    join
}