import { useState } from "react";
import { Global } from "../../helpers/Global";
import { useForm } from "../../hooks/useForm";
import useAuth from '../../hooks/useAuth';

export const Login = () => {

    // Usamos el hook personalizado useForm para cargar los datos del formulario
    const { form, changed, resetForm } = useForm({ email: "", password: "" });
    // Estado para validad si el usuario se identificó correctamente con un arreglo
    const [logged, setLogged] = useState(" not logged");
    // Estado para asignar los valores del token y usuario en el contexto de la aplicación
    const { setAuth } = useAuth();

    const loginUser = async (e) => {
        // Prevenir que se actualice la pantalla
        e.preventDefault();

        // Obtener los datos del formulario
        let userToLogin = form;

        // Petición a la API del Backend para iniciar sesión del usuario
        const request = await fetch(Global.url + "user/login", {
            method: "POST",
            body: JSON.stringify(userToLogin),
            headers: {
                "Content-Type": "application/json"
            }
        });

        // Obtener la información retornada por la request
        const data = await request.json();

        // Verificar si el estado de la respuesta del backend es "ok" seteamos la variable saved con "saved" y si no, le asignamos "error", esto es para mostrar por pantalla el resultado del login del usuario
        if (data.status == "success") {
            // Al iniciar sesión, almacenamos el token en el localStorage
            localStorage.setItem("token", data.token);
            // Al iniciar sesión, almacenamos el usuario en el localStorage
            localStorage.setItem("user", JSON.stringify(data.user));
            // Seteamos la variable de estado logged si se autenticó correctamente el usarios
            setLogged("logged");
            //Asignamos los datos del usuario en el Auth
            setAuth(data.user);
            // Limpiar el formulario
            resetForm();
            // Redirigir al usuario a la página principal
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } else {
            setLogged("error");
        }
        // Mostrar información en consola para debugging
        //console.log(data);
    }

    return (
        <>
            <header className="content__header content__header--public">
                <h1 className="content__title">Login</h1>
            </header>

            {/* Formulario de Login*/}
            <div className="content__posts">
                <div className="form-style">
                    {/* Mensajes para el usuario */}
                    {logged == "logged" ? (<strong className='alert alert-success'>¡Usuario autenticado!</strong>) : ''}
                    {logged == "error" ? (<strong className='alert alert-danger'>Error de Autenticación</strong>) : ''}

                    <form className="form-login" onSubmit={loginUser}>
                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={form.email}
                                onChange={changed}
                                autoComplete="email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                value={form.password}
                                onChange={changed}
                                autoComplete="current-password"
                            />
                        </div>

                        <input
                            type="submit"
                            value="Identifícate"
                            className="btn btn-success"
                        />
                    </form>
                </div>
            </div>
        </>
    )
}
