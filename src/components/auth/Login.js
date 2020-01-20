import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () => {

    //State
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });
    const {email, password} = usuario;


    //Métodos
    const _handleChange = e => {
        //setState
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
       
    }
    const _handleSubmit = e => {
        e.preventDefault();
        //validar formulario

        //pasar info al action
        

    }



    return(
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar sesión</h1>
                <form 
                    onSubmit={_handleSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={_handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={_handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primary btn-block"
                            value="Iniciar sesión"
                        />
                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Crear una cuenta
                </Link>
            </div>
        </div>
    );
}

export default Login;