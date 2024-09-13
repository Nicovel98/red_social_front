import { Navigate, Outlet } from "react-router-dom";
import { HeaderPublic } from "./HeaderPublic";
import useAuth from '../../../hooks/useAuth';

export const PublicLayout = () => {
    const { auth } = useAuth();
    return (
        <>
            {/* Cabecera y Navegación Pública*/}
            <HeaderPublic />
            {/* Contenido Principal */}
            <section className='layout__content'>
                {!auth._id ?
                    <Outlet />
                    :
                    <Navigate to="/rsocial" />
                }
            </section>
        </>
    )
}