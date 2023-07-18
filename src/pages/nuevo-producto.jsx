// ---- IMPORTACIONES ---- //
import React, { useState, useContext } from 'react';
import { FirebaseContext } from '@/firebase';
import useValidacion from '@/hooks/useValidacion';
import validarCrearProducto from '@/validation/ValidarCrearProducto';
import { css } from '@emotion/react';
import Router, { useRouter } from 'next/router';
import { formatearError } from '@/helpers/utilities';
import Layout from '@/components/Layout/Layout';
import {
    Formulario,
    Campo,
    InputSubmit,
    Alerta,
    Error,
} from '@/components/UI/Formulario';
// ----------------------- //

// ---- ESTADOS INICIALES ---- //
const STATE_INICIAL = {
    nombre: '',
    empresa: '',
    url: '',
    descripcion: '',
};
// --------------------------- //

// ---- PAGINA (NUEVO PRODUCTO) ---- //
export default function NuevoProducto() {
    // ---- CONTEXTs ---- //
    const { usuario, firebase } = useContext(FirebaseContext);
    // ------------------ //

    // ---- ESTADOS ---- //
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState('');
    const [imagen, setImagen] = useState(null);
    // ----------------- //

    // ---- ROUTING ---- //
    const router = useRouter();
    // ----------------- //

    // ---- FUNCIONES ---- //
    const crearProducto = async () => {
        // VALIDAR USUARIO AUTENTICADO
        if (!usuario) {
            return router.push('/login');
        }

        // CREAR EL NUEVO PRODUCTO
        const producto = {
            nombre,
            empresa,
            url,
            imagenUrl: await handleUpload(),
            descripcion,
            votos: 0,
            comentarios: [],
            creado: Date.now(),
        };

        // INSERTARLO EN LA BASE DE DATOS
        await firebase.db.collection('productos').add(producto);
    };

    const handleFile = (e) => {
        if (e.target.files[0]) {
            setImagen(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        const subirTarea = await firebase.storage
            .ref(`productos/${imagen.lastModified}${imagen.name}`)
            .put(imagen);
        const downloadURL = await subirTarea.ref.getDownloadURL();
        return downloadURL;
    };
    // ------------------- //

    // ---- HOOKS ---- //
    const { valores, errores, handleSubmit, handleChange, handleBlur } =
        useValidacion(STATE_INICIAL, validarCrearProducto, crearProducto);
    // --------------- //

    // ---- DATOS ---- //
    const { nombre, empresa, url, descripcion } = valores;
    // --------------- //

    return (
        <div>
            {/* Layout */}
            <Layout title="Nuevo Producto">
                {/* Contenido de Nuevo Producto */}
                <>
                    {/* Titulo */}
                    <h1
                        css={css`
                            text-align: center;
                            margin-top: 5rem;
                        `}
                    >
                        Nuevo Producto
                    </h1>
                    {/* Formulario de Nuevo Producto */}
                    <Formulario onSubmit={handleSubmit}>
                        {/* Informacion General de los Productos */}
                        <fieldset>
                            {/* Legenda */}
                            <legend>Informacion General</legend>

                            {/* Alerta de Nombre */}
                            {errores.nombre && (
                                <Alerta>{errores?.nombre}</Alerta>
                            )}
                            {/* Nombre del Producto */}
                            <Campo>
                                <label htmlFor="nombre">Nombre</label>
                                <input
                                    id="nombre"
                                    type="text"
                                    placeholder="Nombre del Producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={handleChange}
                                    onBlur={submit ? handleBlur : null}
                                />
                            </Campo>
                            {/* Alerta de Empresa */}
                            {errores.empresa && (
                                <Alerta>{errores?.empresa}</Alerta>
                            )}
                            {/* Empresa del Producto */}
                            <Campo>
                                <label htmlFor="empresa">Empresa</label>
                                <input
                                    id="empresa"
                                    type="text"
                                    placeholder="Nombre de la Empresa o Compañia"
                                    name="empresa"
                                    value={empresa}
                                    onChange={handleChange}
                                    onBlur={submit ? handleBlur : null}
                                />
                            </Campo>
                            {/* Alerta de Imagen */}
                            {errores.imagen && (
                                <Alerta>{errores?.imagen}</Alerta>
                            )}
                            {/* Imagen del Producto */}
                            <Campo>
                                <label htmlFor="imagen">Imagen</label>
                                <input
                                    id="imagen"
                                    type="file"
                                    accept="image/*"
                                    name="imagen"
                                    onInput={(e) => handleFile(e)}
                                />
                            </Campo>
                            {/* Alerta de URL */}
                            {errores.url && <Alerta>{errores?.url}</Alerta>}
                            {/* URL del Producto */}
                            <Campo>
                                <label htmlFor="url">URL</label>
                                <input
                                    id="url"
                                    type="url"
                                    placeholder="URL del Producto"
                                    name="url"
                                    value={url}
                                    onChange={handleChange}
                                    onBlur={submit ? handleBlur : null}
                                />
                            </Campo>
                        </fieldset>
                        {/* Informacion Sobre el Producto */}
                        <fieldset>
                            {/* Leyenda */}
                            <legend>Sobre tu Producto</legend>
                            {/* Alerta de Descripcion */}
                            {errores.descripcion && (
                                <Alerta>{errores?.descripcion}</Alerta>
                            )}
                            {/* Descripcion del Producto */}
                            <Campo>
                                <label htmlFor="descripcion">Descripcion</label>
                                <textarea
                                    id="descripcion"
                                    placeholder="Descripcion del Producto"
                                    name="descripcion"
                                    value={descripcion}
                                    onChange={handleChange}
                                    onBlur={submit ? handleBlur : null}
                                />
                            </Campo>
                        </fieldset>
                        {/* Boton de Enviar */}
                        <InputSubmit
                            onClick={() => setSubmit(true)}
                            type="submit"
                            value="Crear Producto"
                        />
                        {/* Errores Generales */}
                        {error && (
                            <Error>{formatearError(error, 'registro')}</Error>
                        )}
                    </Formulario>
                </>
            </Layout>
        </div>
    );
}
// --------------------------------- //
