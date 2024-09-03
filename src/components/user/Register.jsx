

export const Register = () => {
    return (
        <>
            <header className="content__header content__header--public">
                <h1 className="content__title">Registro</h1>
            </header>

            {/* Formulario de Registro*/}
            <div className="content__posts">
                <div className="form-style">

                    <form className="register-form">
                        <div className="form-group">
                            <label htmlFor="name">Nombres</label>
                            <input type="text" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Apellidos</label>
                            <input type="text" name="last_name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nick">Nick</label>
                            <input type="text" name="nick" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico</label>
                            <input type="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" name="password" required />
                        </div>

                        <input type="submit" value="Regístrate" className="btn btn-success" />
                    </form>

                </div>
            </div>
        </>
    )
}
