import { Navigate, Outlet } from "react-router-dom";
import { HeaderPrivate } from './HeaderPrivate';
import { Sidebar } from './Sidebar';
import useAuth from '../../../hooks/useAuth';

export const PrivateLayout = () => {

    const { auth, loading } = useAuth();

    if (loading) {
        return <h1>Cargando...</h1>
    } else {
        return (
            <>
                {/* Menú de Navegación Principal  */}
                <HeaderPrivate />
                {/* Contenido Principal */}
                <section className="layout__content">
                    {auth._id ?
                        <Outlet />
                        :
                        <Navigate to="/login" />
                    }
                </section>
                {/* Sidebar o Barra lateral */}
                <Sidebar />
            </>
        );
    }
}
