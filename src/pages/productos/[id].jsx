// ---- IMPORTACIONES ---- //
import React, { useEffect, useContext, useState } from 'react';
import { FirebaseContext } from '@/firebase';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Layout from '@/components/Layout/Layout';
import Error404 from '@/components/Layout/404';
// ----------------------- //

// ---- PAGINA (PRODUCTO) ---- //
export default function Producto() {
	// ---- CONTEXTs ---- //
	const { firebase } = useContext(FirebaseContext);
	// ------------------ //

	// ---- ESTADOS ---- //
	const [producto, setProducto] = useState({});
	const [error, setError] = useState(false);
	// ----------------- //

	// ---- ROUTER ---- //
	const router = useRouter();
	// ---------------- //

	// ---- DATOS ---- //
	const {
		query: { id },
	} = router;
	// --------------- //

	// ---- EFECTOS ---- //
	useEffect(() => {
		if (id) {
			const obtenerProducto = async () => {
				const productoQuery = await firebase.db
					.collection('productos')
					.doc(id);
				const producto = await productoQuery.get();
				if (producto.exists) {
					setProducto(producto.data());
				} else {
					setError(true);
				}
				setProducto(producto.data());
			};

			obtenerProducto();
		}
	}, [id]);
	// ----------------- //

	// ---- DATOS DEL PRODUCTO ---- //
	if (Object.keys(producto).length === 0) return 'Cargando...';
	const {
		comentarios,
		creado,
		descripcion,
		empresa,
		imagenUrl,
		nombre,
		url,
		votos,
	} = producto;
	// ---------------------------- //

	return (
		<Layout title={producto?.nombre ? producto?.nombre : 'No Encontrado'}>
			<>
				{/* Error de Producto no Encontrado */}
				{error && <Error404 />}
				{/* Contenedor del Producto */}
				<div className="contenedor">
					{/* Titulo del Producto */}
					<h1
						css={css`
							text-align: center;
							margin-top: 4rem;
						`}
					>
						{nombre}
					</h1>
					{/* Informacion General del Producto */}
					<div>
						<div></div>
						<aside></aside>
					</div>
				</div>
			</>
		</Layout>
	);
}
// --------------------------- //
