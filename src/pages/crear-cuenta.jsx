// ---- IMPORTACIONES ---- //
import React, { useState } from 'react';
import firebase from '@/firebase';
import useValidacion from '@/hooks/useValidacion';
import validarCrearCuenta from '@/validation/ValidarCrearCuenta';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Router from 'next/router';
import { formatearError } from '@/helpers/utilities';
import Layout from '@/components/Layout/Layout';
import { Formulario, Campo, InputSubmit } from '@/components/UI/Formulario';
// ----------------------- //

// ---- ESTADOS INICIALES ---- //
const STATE_INICIAL = {
    nombre: '',
    email: '',
    password: '',
};
// --------------------------- //

// ---- STYLES COMPONENTS ---- //
const Alerta = styled.p`
    display: flex;
    justify-content: flex-end;
    text-transform: uppercase;
    font-size: small;
    font-weight: bold;
    font-family: 'PT Sans', sans-serif;
    color: #e70606;
`;

const Error = styled.p`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    text-transform: uppercase;
    font-size: medium;
    font-weight: bold;
    font-family: 'PT Sans', sans-serif;
    color: #ffffff;
    background-color: #e70606;
`;
// --------------------------- //

// ---- PAGINA (CREAR CUENTA) ---- //
export default function CrearCuenta() {
    // ---- ESTADOS ---- //
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState('');
    // ----------------- //

    // ---- FUNCIONES ---- //
    const crearCuenta = async () => {
        try {
            await firebase.registrar(nombre, email, password);
            Router.push('/');
        } catch (error) {
            setError(error.message);
        }
    };
    // ------------------- //

    // ---- HOOKS ---- //
    const { valores, errores, handleSubmit, handleChange, handleBlur } =
        useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);
    // --------------- //

    // ---- DATOS ---- //
    const { nombre, email, password } = valores;
    // --------------- //

    return (
        <div>
            {/* Layout */}
            <Layout title="Crear Cuenta">
                {/* Contenido de Crear Cuenta */}
                <>
                    {/* Titulo */}
                    <h1
                        css={css`
                            text-align: center;
                            margin-top: 5rem;
                        `}
                    >
                        Crear Cuenta
                    </h1>
                    {/* Formulario de Crear Cuenta */}
                    <Formulario onSubmit={handleSubmit}>
                        {/* Alerta de Nombre */}
                        {errores.nombre && <Alerta>{errores?.nombre}</Alerta>}
                        {/* Nombre del Usuario */}
                        <Campo>
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                id="nombre"
                                type="text"
                                placeholder="Tu Nombre"
                                name="nombre"
                                value={nombre}
                                onChange={handleChange}
                                onBlur={submit ? handleBlur : null}
                            />
                        </Campo>
                        {errores.email && <Alerta>{errores?.email}</Alerta>}
                        {/* Email del Usuario */}
                        <Campo>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Tu Email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                onBlur={submit ? handleBlur : null}
                            />
                        </Campo>
                        {/* Contraseña del Usuario */}
                        {errores.password && (
                            <Alerta>{errores?.password}</Alerta>
                        )}
                        <Campo>
                            <label htmlFor="password">Contraseña</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Tu Contraseña"
                                name="password"
                                value={password}
                                onChange={handleChange}
                                onBlur={submit ? handleBlur : null}
                            />
                        </Campo>
                        {/* Boton de Enviar */}
                        <InputSubmit
                            onClick={() => setSubmit(true)}
                            type="submit"
                            value="Crear Cuenta"
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
// ------------------------------- //
