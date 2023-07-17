// ---- IMPORTACIONES ---- //
import styled from '@emotion/styled';
// ----------------------- //

// ---- STYLES COMPONENTS ---- //
export const Formulario = styled.form`
    max-width: 600px;
    width: 95%;
    margin: 5rem auto 0 auto;

    fieldset {
        margin: 2rem 0;
        border: 1px solid #e1e1e1;
        font-size: 2rem;
        padding: 2rem;
    }
`;

export const Campo = styled.div`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;

    label {
        flex: 0 0 150px;
        font-size: 1.8rem;
    }

    input,
    textarea {
        flex: 1;
        padding: 1rem;
    }
    textarea {
        height: 100px;
    }
`;

export const InputSubmit = styled.input`
    cursor: pointer;
    background-color: var(--naranja);
    width: 100%;
    padding: 1.5rem;
    text-align: center;
    color: #fff;
    font-size: 1.8rem;
    text-transform: uppercase;
    border: none;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
    margin-bottom: 2rem;
`;

export const Alerta = styled.p`
    display: flex;
    justify-content: flex-end;
    text-transform: uppercase;
    font-size: small;
    font-weight: bold;
    font-family: 'PT Sans', sans-serif;
    color: #e70606;
`;

export const Error = styled.p`
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
