// ---- IMPORTACIONES ---- //
import { useState, useEffect } from 'react';
// ----------------------- //

// ---- HOOK (VALIDACION) ---- //
function useValidacion(stateInicial, validar, funcion) {
	// ---- ESTADOS ---- //
	const [valores, setValores] = useState(stateInicial);
	const [errores, setErrores] = useState({});
	const [submitForm, setSubmitForm] = useState(false);
	// ----------------- //

	// ---- EFECTOS ---- //
	useEffect(() => {
		// VALIDAR QUE NO HAYA ERRORES
		if (submitForm) {
			const noErrores = Object.keys(errores).length === 0;

			if (noErrores) {
				funcion(); // funcion = Puede ser Crear Producto, Crear Cuenta o Inisiar Sesion
			}

			setSubmitForm(false);
		}
	}, [errores]);
	// ----------------- //

	// ---- FUNCIONES ---- //
	const handleChange = e => {
		// GUARDAMOS EN EL STATE LOS DATOS INGRESADOS EN EL FORMULARIO
		setValores({
			...valores,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = e => {
		// VALIDAMOS LOS DATOS DEL FORMULARIO
		e.preventDefault();
		// GUARDAMOS LOS ERRORES EN UNA VARIABLE
		const erroresValidacion = validar(valores);
		// GUARDAMOS EN EL STATE LOS ERRORES
		setErrores(erroresValidacion);
		setSubmitForm(true);
	};

	const handleBlur = () => {
		// GUARDAMOS LOS ERRORES EN UNA VARIABLE
		const erroresValidacion = validar(valores);
		// GUARDAMOS EN EL STATE LOS ERRORES
		setErrores(erroresValidacion);
	};
	// ------------------- //

	return {
		valores,
		errores,
		handleSubmit,
		handleChange,
		handleBlur,
	};
}
// --------------------------- //

// ---- EXPORTACIONES ---- //
export default useValidacion;
// ----------------------- //
