// ---- IMPORTACIONES ---- //
import { useEffect, useState } from 'react';
import useProductos from '@/hooks/useProductos';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import Layout from '@/components/Layout/Layout';
import DetalleProducto from '@/components/Layout/DetalleProducto';
// ----------------------- //

// ---- PAGINA (BUSCAR) ---- //
export default function Buscar() {
    // ---- ESTADOS ---- //
    const [resultado, setResultado] = useState([]);
    // ----------------- //

    // ---- BUSQUEDA ---- //
    const router = useRouter();
    const {
        query: { q },
    } = router;
    // ------------------ //

    // ---- PRODUCTOS ---- //
    const { productos } = useProductos('creado');
    // ------------------- //

    // ---- EFECTOS ---- //
    useEffect(() => {
        const busqueda = q?.toLowerCase();
        const filtro = productos.filter((producto) => {
            return (
                producto.nombre.toLowerCase().includes(busqueda) ||
                producto.descripcion.toLowerCase().includes(busqueda)
            );
        });

        setResultado(filtro);
    }, [q, productos]);

    // ----------------- //

    return (
        <div>
            {/* Layout */}
            <Layout title="Busqueda">
                {/* Titulo */}
                <h1
                    css={css`
                        text-align: center;
                        margin-top: 5rem;
                    `}
                >
                    El Resultado de la Busqueda
                </h1>
                {/* Listado de productos */}
                <div className="listado-productos">
                    {/* Contenedor del Listado */}
                    <div className="contenedor">
                        {/* Lista de Productos */}
                        <ul className="bg-white">
                            {resultado.length === 0 ? (
                                <p
                                    css={css`
                                        text-align: center;
                                        font-size: 2rem;
                                        font-weight: bold;
                                    `}
                                >
                                    No hay resultados para su busqueda
                                </p>
                            ) : (
                                resultado.map((producto) => (
                                    <DetalleProducto
                                        key={producto?.id}
                                        producto={producto}
                                    />
                                ))
                            )}
                        </ul>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
// ------------------------- //
