// ---- IMPORTACIONES ---- //
import App from 'next/app';
import firebase, { FirebaseContext } from '@/firebase';
import useAutenticacion from '@/hooks/useAutenticacion';
// ----------------------- //

// ---- APLICACION PRINCIPAL ---- //
export default function MyApp({ Component, pageProps }) {
    // ---- AUTENTICACION ---- //
    const usuario = useAutenticacion();
    // ----------------------- //

    return (
        <FirebaseContext.Provider
            value={{
                firebase,
                usuario,
            }}
        >
            <Component {...pageProps} />
        </FirebaseContext.Provider>
    );
}
// ------------------------------ //
