// ---- VALIDACIONES (CREAR CUENTA) ---- //
export default function validarCrearCuenta(valores) {
	// ERRORES DE LA CREACION DE LA CUENTA
	let errores = {};

	// VALIDAR EL NOMBRE DEL USUARIO
	if (!valores.nombre) {
		errores.nombre = 'El Nombre es obligatorio';
	}

	// VALIDAR EL EMAIL DEL USUARIO
	if (!valores.email) {
		errores.email = 'El Email es obligatorio';
	} else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)
	) {
		errores.email = 'El Email no es valido';
	}

	// VALIDAR PASSWORD DEL USUARIO
	if (!valores.password) {
		errores.password = 'El Password es obligatorio';
	} else if (valores.password.length < 6) {
		errores.password = 'El Password debe ser de al menos 6 caracteres';
	}

	return errores;
}
// ------------------------------------- //
