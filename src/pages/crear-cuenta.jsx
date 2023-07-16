// ---- IMPORTACIONES ---- //
import React from 'react';
import useValidacion from '@/hooks/useValidacion';
import validarCrearCuenta from '@/validation/ValidarCrearCuenta';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Layout from '@/components/Layout/Layout';
import { Formulario, Campo, InputSubmit } from '@/components/UI/Formulario';
// ----------------------- //

// ---- ESTADOS ---- //
const STATE_INICIAL = {
	nombre: '',
	email: '',
	password: '',
};
// ----------------- //

// ---- STYLES COMPONENTS ---- //
const Alerta = styled.p`
	display: flex;
	justify-content: flex-end;
	text-transform: uppercase;
	font-size: small;
	font-weight: bold;
	font-family: 'PT Sans', sans-serif;
	color: #e70606;
`;
// --------------------------- //

// ---- PAGINA (CREAR CUENTA) ---- //
export default function CrearCuenta() {
	// ---- FUNCIONES ---- //
	const crearCuenta = () => {
		console.log('Crear Cuenta');
	};
	// ------------------- //

	// ---- HOOKS ---- //
	const { valores, errores, handleSubmit, handleChange, handleBlur } =
		useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);
	// --------------- //

	// ---- DATOS ---- //
	const { nombre, email, password } = valores;
	// --------------- //

	return (
		<div>
			{/* Layout */}
			<Layout title="Crear Cuenta">
				{/* Contenido de Crear Cuenta */}
				<>
					{/* Titulo */}
					<h1
						css={css`
							text-align: center;
							margin-top: 5rem;
						`}
					>
						Crear Cuenta
					</h1>
					{/* Formulario de Crear Cuenta */}
					<Formulario onSubmit={handleSubmit}>
						{/* Alerta de Nombre */}
						{errores.nombre && <Alerta>{errores?.nombre}</Alerta>}
						{/* Nombre del Usuario */}
						<Campo>
							<label htmlFor="nombre">Nombre</label>
							<input
								id="nombre"
								type="text"
								placeholder="Tu Nombre"
								name="nombre"
								value={nombre}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</Campo>
						{errores.email && <Alerta>{errores?.email}</Alerta>}
						{/* Email del Usuario */}
						<Campo>
							<label htmlFor="email">Email</label>
							<input
								id="email"
								type="email"
								placeholder="Tu Email"
								name="email"
								value={email}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</Campo>
						{/* Contraseña del Usuario */}
						{errores.password && (
							<Alerta>{errores?.password}</Alerta>
						)}
						<Campo>
							<label htmlFor="password">Contraseña</label>
							<input
								id="password"
								type="password"
								placeholder="Tu Contraseña"
								name="password"
								value={password}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</Campo>
						{/* Boton de Enviar */}
						<InputSubmit type="submit" value="Crear Cuenta" />
					</Formulario>
				</>
			</Layout>
		</div>
	);
}
// ------------------------------- //
