import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Global } from "../helpers/Global";

// Crear un contexto de autenticación
const AuthContext = createContext();

// Definir el componente proveedor de contexto AuthProvider
export const AuthProvider = ({ children }) => {

    // Estado local para guardar la información del usuario y verificar si está autenticado
    const [auth, setAuth] = useState({});

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

        // Verificar si el estado de la respuesta del backend es "ok" seteamos la variable auth con los datos del usuario
        if (data.status == "success") {
            setAuth(data.user);
        }// else {
        // Si el token y el usuario son inválidos, eliminamos el estado de la autenticación
        // localStorage.removeItem("token");
        // localStorage.removeItem("user");
        //}
    }

    // Renderizar el proveedor de contexto con el contexto AuthContext.Provider
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
};

// Definir propTypes para el componente AuthProvider
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired // children debe ser un nodo React y es requerido
};

export default AuthContext;