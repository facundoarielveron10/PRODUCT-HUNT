// ---- IMPORTACIONES ---- //
import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
// ----------------------- //

// ---- STYLES COMPONENTS ---- //
const Nav = styled.nav`
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding-left: 3rem;

    @media (min-width: 1080px) {
        padding-left: 2rem;
    }

    a {
        font-size: 1.8rem;
        color: var(--gris2);
        font-family: 'PT Sans', sans-serif;
    }
`;
// --------------------------- //

// ---- COMPONENTE (NAVEGACION) ---- //
export default function Navegacion() {
    return (
        <Nav>
            {/* Enlaces */}
            <Link href="/">Inicio</Link>
            <Link href="/populares">Populares</Link>
            <Link href="/nuevo-producto">Nuevo Producto</Link>
        </Nav>
    );
}
// --------------------------------- //
