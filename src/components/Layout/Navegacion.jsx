// ---- IMPORTACIONES ---- //
import React, { useContext } from 'react';
import { FirebaseContext } from '@/firebase';
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
    // ---- CONTEXTs ---- //
    const { usuario } = useContext(FirebaseContext);
    // ------------------ //

    return (
        <Nav>
            {/* Enlaces */}
            <Link href="/">Inicio</Link>
            <Link href="/populares">Populares</Link>
            {usuario && <Link href="/nuevo-producto">Nuevo Producto</Link>}
        </Nav>
    );
}
// --------------------------------- //
