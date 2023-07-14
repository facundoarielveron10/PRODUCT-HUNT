// ---- IMPORTACIONES ---- //
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Link from 'next/link';
import Buscar from '../UI/Buscar';
import Navegacion from './Navegacion';
import Boton from '../UI/Boton';
// ----------------------- //

// ---- STYLES COMPONENTS ---- //
const ContenedorHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 1080px) {
        flex-direction: row;
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
export default function Header() {
    // ---- DATOS ---- //
    const usuario = false;
    // --------------- //

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
                <div
                    css={css`
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;

                        @media (min-width: 768px) {
                            flex-direction: row;
                        }
                    `}
                >
                    {/* Logo y Barra de busqueda */}
                    <div
                        css={css`
                            display: flex;
                            align-items: center;
                        `}
                    >
                        {/* Logo */}
                        <Link href="/">
                            <Logo>P</Logo>
                        </Link>
                        {/* Barra de busqueda */}
                        <Buscar />
                    </div>

                    {/* Navegacion */}
                    <Navegacion />
                </div>
                {/* Menu de Administracion */}
                <div
                    css={css`
                        display: flex;
                        align-items: center;
                    `}
                >
                    {usuario ? (
                        <>
                            {/* Informacion */}
                            <p
                                css={css`
                                    margin-right: 2rem;
                                `}
                            >
                                Hola: Facundo
                            </p>
                            {/* Cerrar Sesion */}
                            <Boton bgColor={true}>Cerrar Sesion</Boton>
                        </>
                    ) : (
                        <>
                            {/* Iniciar Sesion */}
                            <Link href="/login">
                                <Boton bgColor={true}>Iniciar Sesion</Boton>
                            </Link>
                            {/* Crear una cuenta */}
                            <Link href="/crear-cuenta">
                                <Boton>Crear Cuenta</Boton>
                            </Link>
                        </>
                    )}
                </div>
            </ContenedorHeader>
        </header>
    );
}
// ----------------------------- //
