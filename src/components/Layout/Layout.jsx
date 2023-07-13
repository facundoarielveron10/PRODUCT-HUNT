// ---- IMPORTACIONES ---- //
import React from 'react';
// ----------------------- //

// ---- COMPONENTE (LAYOUT) ---- //
export default function Layout(props) {
	return (
		<>
			{/* Header */}
			<h1>Header</h1>
			{/* Contenido */}
			<main>{props.children}</main>
		</>
	);
}
// ----------------------------- //
