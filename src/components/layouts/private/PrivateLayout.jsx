import { Outlet } from 'react-router-dom';
import { HeaderPrivate } from './HeaderPrivate';
import { Sidebar } from './Sidebar';
export const PrivateLayout = () => {
    return (
        <>
            {/* Menú de Navegación Principal  */}
            <HeaderPrivate />
            {/* Contenido Principal */}
            <section className="layout__content">
                <Outlet />
            </section>
            {/* Sidebar o Barra lateral */}
            <Sidebar />
        </>
    )
}
