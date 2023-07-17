// ---- IMPORTACIONES ---- //
import React, { useEffect, useState } from 'react';
import firebase from '@/firebase';
// ----------------------- //

// ---- HOOK (AUTENTICACION) ---- //
function useAutenticacion() {
    // ---- ESTADOS ---- //
    const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);
    // ----------------- //

    // ---- EFECTOS ---- //
    useEffect(() => {
        const unsuscribe = firebase.auth.onAuthStateChanged((usuario) => {
            if (usuario) {
                setUsuarioAutenticado(usuario);
            } else {
                setUsuarioAutenticado(null);
            }
        });

        return () => unsuscribe();
    }, []);
    // ----------------- //

    return usuarioAutenticado;
}
// ------------------------------ //

// ---- EXPORTACIONES ---- //
export default useAutenticacion;
// ----------------------- //
