// ---- IMPORTACIONES ---- //
import React, { useState } from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
// ----------------------- //

// ---- STYLES COMPONENTS ---- //
const InputText = styled.input`
    border: 1px solid var(--gris3);
    padding: 1rem;
    min-width: 300px;
`;

const InputSubmit = styled.button`
    cursor: pointer;
    height: 3rem;
    width: 3rem;
    display: block;
    background-size: 3.5rem;
    background-image: url('/static/img/buscar.png');
    background-repeat: no-repeat;
    position: absolute;
    right: 1rem;
    top: 2px;
    background-color: #ffffff;
    border: none;
    text-indent: -99999px;
`;
// --------------------------- //

// ---- COMPONENTE (BUSCAR) ---- //
export default function Buscar() {
    // ---- ESTADOS ---- //
    const [busqueda, setBusqueda] = useState('');
    // ----------------- //

    // ---- FUNCIONES ---- //
    const buscarProducto = (e) => {
        e.preventDefault();

        // Validar que el usuario busque algo
        if (busqueda.trim() === '') return;

        // Redireccionar a la pagina de buscar
        Router.push({
            pathname: '/buscar',
            query: {
                q: busqueda,
            },
        });
    };
    // ------------------- //

    return (
        <form
            css={css`
                position: relative;
            `}
            onSubmit={buscarProducto}
        >
            <InputText
                type="text"
                placeholder="Buscar Productos"
                onChange={(e) => setBusqueda(e.target.value)}
            />

            <InputSubmit type="submit">Buscar</InputSubmit>
        </form>
    );
}
// ----------------------------- //
