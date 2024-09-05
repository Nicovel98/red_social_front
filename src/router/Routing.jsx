import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicLayout } from "../components/layouts/public/PublicLayout";
import { Login } from "../components/user/Login";
import { Register } from "../components/user/Register";
import { PrivateLayout } from "../components/layouts/private/PrivateLayout";
import { Feed } from "../components/publication/Feed";
import { Error404 } from "../components/layouts/Error404";

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Cargar componentes de la ruta pública */}
                <Route path="/" element={<PublicLayout />}>
                    <Route index element={<Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="Register" element={<Register />} />
                </Route>
                {/* Cargar comoponentes de la ruta privada */}
                <Route>
                    {/* Cargar componentes de la ruta pública */}
                    <Route path="/rsocial" element={<PrivateLayout />}>
                        <Route index element={<Feed />} />
                        <Route path='feed' element={<Feed />} />
                    </Route>
                </Route>
                {/* Configurar la ruta para la página de error 404 */}
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}
