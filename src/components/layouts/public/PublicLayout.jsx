import { Outlet } from "react-router-dom"
import { HeaderPublic } from "./HeaderPublic"

export const PublicLayout = () => {
    return (
        <>
            {/* Menú de Navegación Principal  */}
            <HeaderPublic />
            {/* Contenido Principal */}
            <section className="layout__content">
                <Outlet />
            </section>
        </>
    )
}
