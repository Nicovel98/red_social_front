
export const Login = () => {
    return (
        <>
            <header className="content__header content__header--public">
                <h1 className="content__title">Login</h1>
            </header>

            {/* Formulario de Login*/}
            <div className="content__posts">
                <div className="form-style">

                    <form className="form-login" >

                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico</label>
                            <input type="email" name="email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" name="password" required />
                        </div>

                        <input type="submit" value="Identifícate" className="btn btn-success" />

                    </form>
                </div>
            </div>
        </>
    )
}
