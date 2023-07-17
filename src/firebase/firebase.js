// ---- IMPORTACIONES ---- //
import app from 'firebase/compat/app';
import firebaseConfig from './config';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// ----------------------- //

// ---- FIREBASE ---- //
class Firebase {
    // CONSTRUCTOR
    constructor() {
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig);
        }
        this.auth = app.auth();
        this.db = app.firestore();
    }

    // REGISTRO DE UN USUARIO
    async registrar(nombre, email, password) {
        const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(
            email,
            password
        );

        return await nuevoUsuario.user.updateProfile({
            displayName: nombre,
        });
    }

    // INICIAR SESION
    async login(email, password) {
        return await this.auth.signInWithEmailAndPassword(email, password);
    }

    // CERRAR SESION
    async cerrarSesion() {
        await this.auth.signOut();
    }
}

const firebase = new Firebase();
// ------------------ //

// ---- EXPORTACIONES ---- //
export default firebase;
// ----------------------- //
