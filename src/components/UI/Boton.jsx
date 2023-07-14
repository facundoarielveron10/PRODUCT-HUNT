// ---- IMPORTACIONES ---- //
import styled from '@emotion/styled';
// ----------------------- //

// ---- STYLES COMPONENTS ---- //
const Boton = ({ bgColor, children }) => {
    const Button = styled.button`
        cursor: pointer;
        font-weight: 700;
        text-transform: uppercase;
        border: 1px solid #d1d1d1;
        padding: 0.8rem 2rem;
        margin-right: 1rem;
        background-color: ${bgColor ? '#da552f' : '#ffffff'};
        color: ${bgColor ? '#ffffff' : '#000000'};
    `;

    return <Button>{children}</Button>;
};

// --------------------------- //

// ---- EXPORTACIONES ---- //
export default Boton;
// ----------------------------- //
