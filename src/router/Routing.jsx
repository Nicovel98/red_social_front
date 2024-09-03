import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicLayout } from "../components/layouts/public/PublicLayout";
import { Login } from "../components/layouts/public/Login";
import { Register } from "../components/layouts/public/Register";

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Cargar componentes de la ruta pública */}
                <Route path="/" element={<PublicLayout />}>
                    <Route index path="login" element={<Login />} />
                    <Route path="Register" element={<Register />} />
                </Route>
                {/* Cargar comoponentes de la ruta privada */}
                <Route>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}
