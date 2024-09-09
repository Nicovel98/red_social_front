import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Crear un contexto de autenticación
const AuthContext = createContext();

// Definir el componente proveedor de contexto AuthProvider
export const AuthProvider = ({ children }) => {

    // Estado local para guardar la información del usuario y verificar si está autenticado
    const [share] = useState("Compartido con todos los componentes");

    // Renderizar el proveedor de contexto con el contexto AuthContext.Provider
    return (
        <AuthContext.Provider value={{ share }}>
            {children}
        </AuthContext.Provider>
    )
};

// Definir propTypes para el componente AuthProvider
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired // children debe ser un nodo React y es requerido
};

export default AuthContext;