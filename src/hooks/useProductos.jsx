// ---- IMPORTACIONES ---- //
import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '@/firebase';
// ----------------------- //

// ---- HOOK (PRODUCTOS) ---- //
const useProductos = (orden) => {
    // ---- ESTADOS ---- //
    const [productos, setProductos] = useState([]);
    // ----------------- //

    // ---- CONTEXTs ---- //
    const { firebase } = useContext(FirebaseContext);
    // ------------------ //

    // ---- EFECTOS ---- //
    useEffect(() => {
        const obtenerProductos = () => {
            firebase.db
                .collection('productos')
                .orderBy(orden, 'desc')
                .onSnapshot(manejarSnapshot);
        };

        obtenerProductos();
    }, []);
    // ----------------- //

    // ---- FUNCIONES ---- //
    const manejarSnapshot = (snapshot) => {
        const productos = snapshot.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data(),
            };
        });

        setProductos(productos);
    };
    // ------------------- //

    return {
        productos,
    };
};
// -------------------------- //

export default useProductos;
