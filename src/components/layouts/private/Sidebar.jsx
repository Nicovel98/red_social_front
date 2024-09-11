import avatar from '../../../assets/img/default_user.png';
import { Global } from '../../../helpers/Global';
import useAuth from "../../../hooks/useAuth";

export const Sidebar = () => {

    const { auth } = useAuth();
    console.log(auth);

    return (
        <aside className="layout__aside">

            <header className="aside__header">
                <h1 className="aside__title">Hola, {auth.name} </h1>
            </header>

            <div className="aside__container">

                <div className="aside__profile-info">

                    <div className="profile-info__general-info">
                        <div className="general-info__container-avatar">
                            {auth.image != "default_user.png" &&
                                <img src={Global.url + "user/avatar/" + auth.image}
                                    className='container-avatar__img' alt='foto de perfil' />}
                            {auth.image == "default_user.png" &&
                                <img src={Global.url + "user/avatar/" + auth.image}
                                    className='container-avatar__img' alt='foto de perfil' />}
                        </div>

                        <div className="general-info__container-names">
                            <a href="#" className="container-names__name"> {auth.name + " " + auth.last_name} </a>
                            <p className="container-names__nickname"> {"@" + auth.nickname} </p>
                        </div>
                    </div>

                    <div className="profile-info__stats">

                        <div className="stats__following">
                            <a href="#" className="following__link">
                                <span className="following__title">Siguiendo</span>
                                <span className="following__number"> No. Siguiendo </span>
                            </a>
                        </div>
                        <div className="stats__following">
                            <a href="#" className="following__link">
                                <span className="following__title">Seguidores</span>
                                <span className="following__number"> No. Seguidores </span>
                            </a>
                        </div>


                        <div className="stats__following">
                            <a href="#" className="following__link">
                                <span className="following__title">Publicaciones</span>
                                <span className="following__number">  No. publicaciones </span>
                            </a>
                        </div>


                    </div>
                </div>


                <div className="aside__container-form">

                    <form className="container-form__form-post">

                        <div className="form-post__inputs">
                            <label className="form-post__label">¿Qué quieres compartir hoy?</label>
                            <textarea name="post" className="form-post__textarea"></textarea>
                        </div>

                        <div className="form-post__inputs">
                            <label className="form-post__label">Sube tu foto</label>
                            <input type="file" name="image" className="form-post__image" />
                        </div>

                        <input type="submit" value="Enviar" className="form-post__btn-submit" disabled />

                    </form>

                </div>

            </div>

        </aside>

    )
}
