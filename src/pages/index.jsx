// ---- IMPORTACIONES ---- //
import React from 'react';
import useProductos from '@/hooks/useProductos';
import { css } from '@emotion/react';
import Layout from '@/components/Layout/Layout';
import DetalleProducto from '@/components/Layout/DetalleProducto';
// ----------------------- //

// ---- PAGINA (INICIO) ---- //
export default function index() {
    // ---- HOOK ---- //
    const { productos } = useProductos('creado');
    // -------------- //

    return (
        <div>
            {/* Layout */}
            <Layout title="Inicio">
                {/* Titulo */}
                <h1
                    css={css`
                        text-align: center;
                        margin-top: 5rem;
                    `}
                >
                    Listado de Productos
                </h1>
                {/* Listado de productos */}
                <div className="listado-productos">
                    {/* Contenedor del Listado */}
                    <div className="contenedor">
                        {/* Lista de Productos */}
                        <ul className="bg-white">
                            {productos.map((producto) => (
                                <DetalleProducto
                                    key={producto?.id}
                                    producto={producto}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
// ------------------------- //
