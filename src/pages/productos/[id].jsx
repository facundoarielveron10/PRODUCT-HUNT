// ---- IMPORTACIONES ---- //
import React, { useEffect, useContext, useState } from 'react';
import { FirebaseContext } from '@/firebase';
import { useRouter } from 'next/router';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Layout from '@/components/Layout/Layout';
import Link from 'next/link';
import Error404 from '@/components/Layout/404';
import { Campo, InputSubmit } from '@/components/UI/Formulario';
import Boton from '@/components/UI/Boton';
// ----------------------- //

// ---- STYLED COMPONENTS ---- //
const ContenedorProducto = styled.div`
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 2rem;
    }
`;

const CreadorProducto = styled.p`
    padding: 0.5rem 2rem;
    background-color: #da552f;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    display: inline-block;
    text-align: center;
`;
// --------------------------- //

// ---- PAGINA (PRODUCTO) ---- //
export default function Producto() {
    // ---- CONTEXTs ---- //
    const { firebase, usuario } = useContext(FirebaseContext);
    // ------------------ //

    // ---- ESTADOS ---- //
    const [producto, setProducto] = useState({});
    const [error, setError] = useState(false);
    const [comentario, setComentario] = useState({});
    const [consultarDB, setConsultarDB] = useState(true);
    // ----------------- //

    // ---- ROUTER ---- //
    const router = useRouter();
    // ---------------- //

    // ---- DATOS ---- //
    const {
        query: { id },
    } = router;
    // --------------- //

    // ---- EFECTOS ---- //
    useEffect(() => {
        if (id && consultarDB) {
            const obtenerProducto = async () => {
                const productoQuery = await firebase.db
                    .collection('productos')
                    .doc(id);
                const producto = await productoQuery.get();
                if (producto.exists) {
                    setProducto(producto.data());
                    setConsultarDB(false);
                } else {
                    setError(true);
                    setConsultarDB(false);
                }
            };

            obtenerProducto();
        }
    }, [id]);
    // ----------------- //

    // ---- DATOS DEL PRODUCTO ---- //
    if (Object.keys(producto).length === 0) return 'Cargando...';
    const {
        comentarios,
        creado,
        creador,
        descripcion,
        empresa,
        imagenUrl,
        nombre,
        url,
        votos,
        haVotado,
    } = producto;
    // ---------------------------- //

    // ---- FUNCIONES ---- //
    const votarProducto = () => {
        // Validar que el usuario este logeado
        if (!usuario) {
            return router.push('/login');
        }

        // Obtener y sumar un nuevo voto
        const nuevoTotal = votos + 1;

        // Validar que el usuario no haya votado antes
        if (haVotado.includes(usuario.uid)) return;

        // Guardar el ID del usuario que ha votado
        const nuevoHaVotado = [...haVotado, usuario.uid];

        // Actualizar la Base de Datos
        firebase.db
            .collection('productos')
            .doc(id)
            .update({ votos: nuevoTotal, haVotado: nuevoHaVotado });

        // Actualizar el State
        setProducto({
            ...producto,
            votos: nuevoTotal,
        });

        // Consultar a la base de datos
        setConsultarDB(true);
    };

    const comentarioChange = (e) => {
        setComentario({
            ...comentario,
            [e.target.name]: e.target.value,
        });
    };

    const esCreador = (id) => {
        if (creador.id === id) {
            return true;
        }
    };

    const agregarComentario = (e) => {
        e.preventDefault();

        // Validar que el usuario este logeado
        if (!usuario) {
            return router.push('/login');
        }

        // Informacion extra al comentario
        comentario.usuarioId = usuario.uid;
        comentario.usuarioNombre = usuario.displayName;

        // Tomar copia de comentarios y agregarlos al arreglo
        const nuevoComentarios = [...comentarios, comentario];

        // Actualizar la Base de Datos
        firebase.db
            .collection('productos')
            .doc(id)
            .update({ comentarios: nuevoComentarios });

        // Actualizar el state
        setProducto({
            ...producto,
            comentarios: nuevoComentarios,
        });

        // Consultar a la base de datos
        setConsultarDB(true);
    };

    const puedeBorrar = () => {
        if (!usuario) return false;

        if (creador.id === usuario.uid) return true;
    };

    const eliminarProducto = async () => {
        if (!usuario) return router.push('/login');

        if (creador.id !== usuario.uid) return router.push('/');

        try {
            await firebase.db.collection('productos').doc(id).delete();
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    };
    // ------------------- //

    return (
        <Layout title={producto?.nombre ? producto?.nombre : 'No Encontrado'}>
            <>
                {/* Error de Producto no Encontrado */}
                {error && <Error404 titulo="Producto No Encontrado" />}
                {/* Contenedor del Producto */}
                <div className="contenedor">
                    {/* Titulo del Producto */}
                    <h1
                        css={css`
                            text-align: center;
                            margin-top: 4rem;
                        `}
                    >
                        {nombre}
                    </h1>
                    {/* Informacion General del Producto */}
                    <ContenedorProducto>
                        {/* Datos del Producto */}
                        <div>
                            {/* Empresa del Producto */}
                            <p
                                css={css`
                                    font-size: 2rem;
                                    font-weight: bold;
                                `}
                            >
                                {empresa}
                            </p>
                            {/* Fecha de Publicacion */}
                            <p
                                css={css`
                                    margin: 0;
                                `}
                            >
                                Publicado hace{' '}
                                {formatDistanceToNow(new Date(creado), {
                                    locale: es,
                                })}
                            </p>
                            {/* Imagen del Producto */}
                            <img src={imagenUrl} alt={nombre} />
                            {/* Descripcion del Producto */}
                            <p>{descripcion}</p>
                            {/* Agregar los Comentarios*/}
                            {usuario && (
                                <>
                                    {/* Titulo */}
                                    <h2>Agrega tu comentario</h2>
                                    {/* Formulario */}
                                    <form onSubmit={agregarComentario}>
                                        <Campo>
                                            <input
                                                type="text"
                                                name="mensaje"
                                                onChange={comentarioChange}
                                            />
                                        </Campo>
                                        <InputSubmit
                                            type="submit"
                                            value="Agregar Comentario"
                                        />
                                    </form>
                                </>
                            )}

                            {/* Todos los comentarios */}
                            <h2
                                css={css`
                                    margin: 2rem 0;
                                `}
                            >
                                Comentarios
                            </h2>
                            {comentarios.length === 0 ? (
                                'Aún no hay comentarios'
                            ) : (
                                <ul>
                                    {comentarios.map((comentario, i) => (
                                        <li
                                            key={`${comentario.usuarioId}-${i}`}
                                            css={css`
                                                border: 1px solid #e1e1e1;
                                                padding: 2rem;
                                            `}
                                        >
                                            <p>{comentario?.mensaje}</p>
                                            <p>
                                                Escrito por:{' '}
                                                <span
                                                    css={css`
                                                        font-weight: bold;
                                                    `}
                                                >
                                                    {' '}
                                                    {comentario?.usuarioNombre}
                                                </span>
                                            </p>
                                            {esCreador(
                                                comentario.usuarioId
                                            ) && (
                                                <CreadorProducto>
                                                    Es Creador
                                                </CreadorProducto>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <aside>
                            {/* URL del Producto */}
                            <Link
                                css={css`
                                    display: block;
                                    margin: 2rem auto;
                                `}
                                href={url}
                                target="_blank"
                            >
                                <Boton bgColor={true}>Visitar URL</Boton>
                            </Link>
                            {/* Usuario que publico el producto */}
                            <p>Publicado por: {creador?.nombre}</p>
                            {/* Votos del Producto */}
                            <div
                                css={css`
                                    margin-top: 5rem;
                                `}
                            >
                                {/* Boton de Votar */}
                                {usuario && (
                                    <div onClick={votarProducto}>
                                        <Boton>Votar</Boton>
                                    </div>
                                )}
                                {/* Cantidad de Votos */}
                                <p
                                    css={css`
                                        font-weight: bold;
                                        text-align: center;
                                    `}
                                >
                                    {votos} Votos
                                </p>
                            </div>
                        </aside>
                    </ContenedorProducto>

                    {/* Borrar el Producto */}
                    {puedeBorrar() && (
                        <div
                            css={css`
                                margin-top: 2rem;
                            `}
                            onClick={eliminarProducto}
                        >
                            <Boton>Eliminar Producto</Boton>
                        </div>
                    )}
                </div>
            </>
        </Layout>
    );
}
// --------------------------- //
