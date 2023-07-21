// ---- IMPORTACIONES ---- //
import React, { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '@/firebase';
import { css } from '@emotion/react';
import Layout from '@/components/Layout/Layout';
import DetalleProducto from '@/components/Layout/DetalleProducto';
// ----------------------- //

// ---- PAGINA (INICIO) ---- //
export default function index() {
	// ---- ESTADOS ---- //
	const [productos, setProductos] = useState([]);
	// ----------------- //

	// ---- CONTEXTs ---- //
	const { firebase } = useContext(FirebaseContext);
	// ------------------ //

	// ---- EFECTOS ---- //
	useEffect(() => {
		const obtenerProductos = () => {
			firebase.db
				.collection('productos')
				.orderBy('creado', 'desc')
				.onSnapshot(manejarSnapshot);
		};

		obtenerProductos();
	}, []);
	// ----------------- //

	// ---- FUNCIONES ---- //
	const manejarSnapshot = snapshot => {
		const productos = snapshot.docs.map(doc => {
			return {
				id: doc.id,
				...doc.data(),
			};
		});

		setProductos(productos);
	};
	// ------------------- //

	return (
		<div>
			{/* Layout */}
			<Layout title="Inicio">
				{/* Titulo */}
				<h1
					css={css`
						text-align: center;
						margin-top: 5rem;
					`}
				>
					Listado de Productos
				</h1>
				{/* Listado de productos */}
				<div className="listado-productos">
					{/* Contenedor del Listado */}
					<div className="contenedor">
						{/* Lista de Productos */}
						<ul className="bg-white">
							{productos.map(producto => (
								<DetalleProducto
									key={producto?.id}
									producto={producto}
								/>
							))}
						</ul>
					</div>
				</div>
			</Layout>
		</div>
	);
}
// ------------------------- //
