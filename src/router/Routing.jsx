import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicLayout } from "../components/layouts/public/PublicLayout";
import { Login } from "../components/user/Login";
import { Register } from "../components/user/Register";
import { PrivateLayout } from "../components/layouts/private/PrivateLayout";
import { Feed } from "../components/publication/Feed";
import { Error404 } from "../components/layouts/Error404";
import { AuthProvider } from "../context/AuthProvider";
import { Logout } from '../components/user/Logout';
import { People } from '../components/user/People';
import { Config } from '../components/user/Config';
import { Following } from '../components/follow/Following';
import { Followers } from '../components/follow/Followers';

export const Routing = () => {
    return (
        <BrowserRouter>
            {/* Añadir el contexto de autenticación */}
            <AuthProvider>
                {/* Definir las rutas */}
                <Routes>
                    {/* Cargar componentes de la ruta pública */}
                    <Route path="/" element={<PublicLayout />}>
                        <Route index element={<Login />} />
                        <Route path="login" element={<Login />} />
                        <Route path="Register" element={<Register />} />
                    </Route>
                    {/* Cargar comoponentes de la ruta privada */}
                    <Route path="/rsocial" element={<PrivateLayout />}>
                        <Route index element={<Feed />} />
                        <Route path='feed' element={<Feed />} />
                        <Route path='gente' element={<People />} />
                        <Route path='ajustes' element={<Config />} />
                        <Route path='logout' element={<Logout />} />
                        <Route path='siguiendo/:id' element={<Following />} />
                        <Route path='seguidores/:id' element={<Followers />} />
                    </Route>
                    {/* Configurar la ruta para la página de error 404 */}
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}
