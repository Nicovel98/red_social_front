import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Global } from "../helpers/Global";

// Crear un contexto de autenticación
const AuthContext = createContext();

// Definir el componente proveedor de contexto AuthProvider
export const AuthProvider = ({ children }) => {

    // Estado local para guardar la información del usuario y verificar si está autenticado
    const [auth, setAuth] = useState({});

    // Estado para guardar los contadores
    const [counters, setCounters] = useState({});

    // Estado para configurar la carga de los elementos del perfil y se actualizará al final cuando todo la carga esté lista
    const [loading, setLoading] = useState(true);


    // La primera vez que ejecutamos el AuthProvider comprobamos el token
    useEffect(() => {
        authUser();
    }, []);

    const authUser = async () => {
        // Obtener el token de localStorage
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");

        // Comprobar si existeel token o el usuario
        if (!token || !user) {
            setLoading(false);
            // Si el token y el usuario son inválidos, no seteamos el estado de la autenticación
            return false;
        }

        // Transformamos los datos
        const userObj = JSON.parse(user);
        const userId = userObj.id;

        // Petición a la API del Backend para verificar si el usuario existe
        const request = await fetch(Global.url + "user/profile/" + userId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        });

        // Obtener la información retornada por la request
        const data = await request.json();

        // Petición Ajax al backend para los contadores
        const requestCounters = await fetch(Global.url + "user/counters/" + userId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const dataCounters = await requestCounters.json();

        // Verificar si el estado de la respuesta del backend es "ok" seteamos la variable auth con los datos del usuario
        setAuth(data.user);
        //if (data.status == "success") {
        //setAuth(data.user);
        //} else {
        // Si el token y el usuario son inválidos, eliminamos el estado de la autenticación
        // localStorage.removeItem("token");
        // localStorage.removeItem("user");
        //}

        // Setear el estado de Counters
        setCounters(dataCounters);

        // Setear el estado de loading
        setLoading(false);
    }

    // Renderizar el proveedor de contexto con el contexto AuthContext.Provider
    return (
        <AuthContext.Provider value={{
            auth, setAuth, counters, setCounters, loading
        }}>
            {children}  {/* Renderiza los componentes hijos envueltos por el proveedor */}
        </AuthContext.Provider>
    )
};

// Definir propTypes para el componente AuthProvider
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired // children debe ser un nodo React y es requerido
};

export default AuthContext;