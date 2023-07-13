// ---- IMPORTACIONES ---- //
import React from 'react';
import Link from 'next/link';
// ----------------------- //

// ---- STYLES COMPONENTS ---- //

// --------------------------- //

// ---- COMPONENTE (NAVEGACION) ---- //
export default function Navegacion() {
    return (
        <nav>
            {/* Enlaces */}
            <Link href="/">Inicio</Link>
            <Link href="/">Populares</Link>
            <Link href="/">Nuevo Producto</Link>
        </nav>
    );
}
// --------------------------------- //
