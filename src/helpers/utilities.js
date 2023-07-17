// ---- IMPORTACIONES ---- //

// ----------------------- //

// ---- UTILIDADES ---- //
const formatearError = (error, tipo) => {
    let errorFormateado = error.replace('Firebase: ', '');
    errorFormateado = errorFormateado.replace(
        ' (auth/email-already-in-use).',
        ''
    );
    errorFormateado = errorFormateado.replace(' (auth/user-not-found).', '');
    errorFormateado = errorFormateado.replace(' (auth/wrong-password).', '');
    if (tipo == 'registro') {
        errorFormateado = errorFormateado.replace(
            'The email address is already in use by another account.',
            'La direccion de correo electronico ya esta en uso por otra cuenta'
        );
        return errorFormateado;
    } else if (tipo == 'login') {
        errorFormateado = errorFormateado.replace(
            'There is no user record corresponding to this identifier. The user may have been deleted.',
            'No existe registro de usuario correspondiente a este email. Es posible que el usuario haya sido eliminado'
        );
        errorFormateado = errorFormateado.replace(
            'The password is invalid or the user does not have a password.',
            'La contraseña no es válida o el usuario no tiene contraseña'
        );
        return errorFormateado;
    }
};
// -------------------- //

// ---- EXPORTACIONES ---- //
export { formatearError };
// ----------------------- //
