// ---- IMPORTACIONES ---- //
import React from 'react';
import styled from '@emotion/styled';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';
import Link from 'next/link';
// ----------------------- //

// ---- STYLED COMPONENTS ---- //
const Titulo = styled.span`
	color: #000000;
	font-size: 2rem;
	font-weight: bold;
	margin: 0;

	:hover {
		cursor: pointer;
	}
`;

const Descripcion = styled.p`
	font-size: 1.6rem;
	margin: 0;
	color: #888;
`;

const Imagen = styled.img`
	width: 200px;
`;

const Producto = styled.li`
	padding: 4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #e1e1e1;
`;

const InformacionProducto = styled.div`
	flex: 0 1 600px;
	display: grid;
	grid-template-columns: 1fr 3fr;
	column-gap: 2rem;
`;

const Comentarios = styled.div`
	margin-top: 2rem;
	display: flex;
	align-items: center;

	div {
		display: flex;
		align-items: center;
		border: 1px solid #e1e1e1;
		padding: 0.3rem 1rem;
		margin-right: 2rem;
	}

	img {
		width: 2rem;
		margin-right: 2rem;
	}

	p {
		font-size: 1.6rem;
		margin-right: 1rem;
		font-weight: 700;

		&:last-of-type {
			margin: 0;
		}
	}
`;

const Votos = styled.div`
	flex: 0 0 auto;
	text-align: center;
	border: 1px solid #e1e1e1;
	padding: 1rem 3rem;

	div {
		font-size: 2rem;
	}

	p {
		margin: 0;
		font-size: 2rem;
		font-weight: 700;
	}
`;
// --------------------------- //

// ---- COMPONENTE (DETALLES DE UN PRODUCTO) ---- //
export default function DetalleProducto({ producto }) {
	// ---- DATOS ---- //
	const { comentarios, creado, descripcion, id, imagenUrl, nombre, votos } =
		producto;
	// --------------- //

	return (
		<Producto>
			{/* Informacion General del Producto */}
			<InformacionProducto>
				{/* Imagen del Producto */}
				<div>
					<Imagen src={imagenUrl} alt={nombre} />
				</div>
				{/* Nombre y Descripcion del Producto */}
				<div>
					{/* Nombre del Producto */}
					<Link href="/productos/[id]" as={`/productos/${id}`}>
						<Titulo>{nombre}</Titulo>
					</Link>

					{/* Descripcion del Producto */}
					<Descripcion>{descripcion}</Descripcion>
					{/* Comentarios del Producto */}
					<Comentarios>
						<div>
							<img
								src="/static/img/comentario.png"
								alt="Comentarios"
							/>
							<p>{comentarios.length} Comentarios</p>
						</div>
					</Comentarios>
					{/* Fecha de Creacion */}
					<p>
						Publicado hace{' '}
						{formatDistanceToNow(new Date(creado), { locale: es })}
					</p>
				</div>
			</InformacionProducto>
			{/* Votos del Producto */}
			<Votos>
				<div>&#9650;</div>
				<p>{votos}</p>
			</Votos>
		</Producto>
	);
}
// ---------------------------------------------- //
