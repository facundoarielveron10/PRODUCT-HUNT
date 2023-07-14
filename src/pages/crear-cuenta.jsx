// ---- IMPORTACIONES ---- //
import React from 'react';
import { css } from '@emotion/react';
import Layout from '@/components/Layout/Layout';
import { Formulario, Campo, InputSubmit } from '@/components/UI/Formulario';
// ----------------------- //

// ---- PAGINA (CREAR CUENTA) ---- //
export default function CrearCuenta() {
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
                    <Formulario>
                        {/* Nombre del Usuario */}
                        <Campo>
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                id="nombre"
                                type="text"
                                placeholder="Tu Nombre"
                                name="nombre"
                            />
                        </Campo>
                        {/* Email del Usuario */}
                        <Campo>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="text"
                                placeholder="Tu Email"
                                name="email"
                            />
                        </Campo>
                        {/* Contraseña del Usuario */}
                        <Campo>
                            <label htmlFor="password">Contraseña</label>
                            <input
                                id="password"
                                type="text"
                                placeholder="Tu Contraseña"
                                name="password"
                            />
                        </Campo>
                        {/* Boton de Enviar */}
                        <InputSubmit type="submit" value="Crear Cuenta" />
                    </Formulario>
                </>
            </Layout>
        </div>
    );
}
// ------------------------------- //
