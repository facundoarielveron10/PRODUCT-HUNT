// ---- IMPORTACIONES ---- //
import React from 'react';
import Link from 'next/link';
import Buscar from '../UI/Buscar';
import Navegacion from './Navegacion';
// ----------------------- //

// ---- STYLES COMPONENTS ---- //

// --------------------------- //

// ---- COMPONENTE (HEADER) ---- //
export default function Header(props) {
    return (
        <header>
            {/* Contenedor del Header */}
            <div>
                {/* Contenido del Header */}
                <div>
                    {/* Logo */}
                    <p>P</p>
                    {/* Barra de busqueda */}
                    <Buscar />
                    {/* Navegacion */}
                    <Navegacion />
                </div>
                {/* Menu de Administracion */}
                <div>
                    {/* Informacion */}
                    <p>Hola: Facundo</p>
                    {/* Cerrar Sesion */}
                    <button type="button">Cerrar Sesion</button>
                    {/* Iniciar Sesion */}
                    <Link href="/">Iniciar Sesion</Link>
                    {/* Crear una cuenta */}
                    <Link href="/">Crear Cuenta</Link>
                </div>
            </div>
        </header>
    );
}
// ----------------------------- //
