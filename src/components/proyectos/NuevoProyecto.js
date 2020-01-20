import React, { useState } from 'react';

const NuevoProyecto = () => {

    //State
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });
    const {nombre} = proyecto;

    const _handleChange = e =>{
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }
    const _handleSubmit = e => {
        e.preventDefault();
        console.log(nombre);
    }

    return(
        <div className="new-project">
            <button
                type="button"
                className="btn btn-block btn-primary"
            >
                Nuevo Proyecto
            </button>
            <form 
                className="new-project-form"
                onSubmit={_handleSubmit}
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre proyecto"
                    name="nombre"
                    onChange={_handleChange}
                    value={nombre}
                />
                <input
                    type="submit"
                    className="btn btn-primary btn-block"
                    value="Agregar proyecto"
                />
            </form>
        </div>
    )
}

export default NuevoProyecto;