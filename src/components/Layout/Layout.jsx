// ---- IMPORTACIONES ---- //
import React from 'react';
import Head from 'next/head';
import Header from './Header';
// ----------------------- //

// ---- COMPONENTE (LAYOUT) ---- //
export default function Layout({ children, title }) {
	return (
		<>
			{/* Informacion de la Pagina */}
			<Head>
				<title>{`${title} | Product Hunt`}</title>
			</Head>
			{/* Header */}
			<Header />
			{/* Contenido */}
			<main>{children}</main>
		</>
	);
}
// ----------------------------- //
