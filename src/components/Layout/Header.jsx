// ---- IMPORTACIONES ---- //
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Link from 'next/link';
import Buscar from '../UI/Buscar';
import Navegacion from './Navegacion';
// ----------------------- //

// ---- STYLES COMPONENTS ---- //
const ContenedorHeader = styled.div`
	max-width: 1200px;
	width: 95%;
	margin: 0 auto;
	@media (min-width: 768px) {
		display: flex;
		justify-content: space-between;
	}
`;

const Logo = styled.p`
	color: var(--naranja);
	font-size: 4rem;
	line-height: 0;
	font-weight: 700;
	font-family: 'Roboto Slab', serif;
	margin-right: 2rem;
`;
// --------------------------- //

// ---- COMPONENTE (HEADER) ---- //
export default function Header(props) {
	return (
		<header
			css={css`
				border-bottom: 2px solid var(--gris3);
				padding: 1rem 0;
			`}
		>
			{/* Contenedor del Header */}
			<ContenedorHeader>
				{/* Contenido del Header */}
				<div>
					{/* Logo */}
					<Link href="/">
						<Logo>P</Logo>
					</Link>
					{/* Barra de busqueda */}
					<Buscar />
					{/* Navegacion */}
					<Navegacion />
				</div>
				{/* Menu de Administracion */}
				<div>
					{/* Informacion */}
					<p>Hola: Facundo</p>
					{/* Cerrar Sesion */}
					<button type="button">Cerrar Sesion</button>
					{/* Iniciar Sesion */}
					<Link href="/">Iniciar Sesion</Link>
					{/* Crear una cuenta */}
					<Link href="/">Crear Cuenta</Link>
				</div>
			</ContenedorHeader>
		</header>
	);
}
// ----------------------------- //
