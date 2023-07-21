// ---- IMPORTACIONES ---- //
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
// ----------------------- //

// ---- STYLES COMPONENTS ---- //
const InputText = styled.input`
    border: 1px solid var(--gris3);
    padding: 1rem;
    min-width: 300px;
`;

const InputSubmit = styled.button`
    cursor: pointer;
    height: 3rem;
    width: 3rem;
    display: block;
    background-size: 3.5rem;
    background-image: url('/static/img/buscar.png');
    background-repeat: no-repeat;
    position: absolute;
    right: 1rem;
    top: 2px;
    background-color: #ffffff;
    border: none;
    text-indent: -99999px;
`;
// --------------------------- //

// ---- COMPONENTE (BUSCAR) ---- //
export default function Buscar() {
    return (
        <form
            css={css`
                position: relative;
            `}
        >
            <InputText type="text" placeholder="Buscar Productos" />

            <InputSubmit type="submit">Buscar</InputSubmit>
        </form>
    );
}
// ----------------------------- //
