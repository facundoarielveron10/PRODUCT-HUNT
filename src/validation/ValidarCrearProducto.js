// ---- VALIDACIONES (CREAR PRODUCTO) ---- //
export default function validarCrearProducto(valores) {
    // ERRORES DE LA CREACION DE UN PRODUCTO
    let errores = {};

    // VALIDAR EL NOMBRE DEL PRODUCTO
    if (!valores.nombre) {
        errores.nombre = 'El Nombre es obligatorio';
    }

    // VALIDAR LA EMPRESA DEL PRODUCTO
    if (!valores.empresa) {
        errores.empresa = 'La Empresa es obligatorio';
    }

    // VALIDAR URL DEL PRODUCTO
    if (!valores.url) {
        errores.url = 'La URL es obligatoria';
    } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
        errores.url = 'La URL no es valida o esta mal formateada';
    }

    // VALIDAR LA DESCRIPCION DEL PRODUCTO
    if (!valores.descripcion) {
        errores.descripcion = 'La Descripcion es obligatoria';
    }

    return errores;
}
// ------------------------------------- //
