// ---- IMPORTACIONES ---- //
import React from 'react';
import { css } from '@emotion/react';
// ----------------------- //

// ---- COMPONENTE (ERROR 404) ---- //
export default function Error404() {
	return (
		<h1
			css={css`
				text-align: center;
				margin-top: 5rem;
			`}
		>
			Producto No Encontrado
		</h1>
	);
}
// -------------------------------- //
