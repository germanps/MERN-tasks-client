import React, { useState, useContext } from 'react';
import ProyectoContext from "./../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
    //obtener state del formulario
    const proyectosContext = useContext(ProyectoContext);
    const { formulario, errorFormulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

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
        //validar proyecto
        if(nombre === ''){
            //llamar al error
            mostrarError();
            return;
        }
        //agregar al state
        agregarProyecto(proyecto);

        //reiniciar el form
        guardarProyecto({
            nombre: ''
        });
    }

    return(
        <div className="new-project">
            <button
                type="button"
                className="btn btn-block btn-primary"
                onClick={mostrarFormulario}
            >
                Crear Proyecto
            </button>
            {formulario ? 
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
                        className="btn btn-lightGreen btn-block"
                        value="Agregar proyecto"
                    />
                </form>
                : null
            }
            {errorFormulario ? <p className="mensaje error"> Nombre obligatorio</p> : null}
        </div>
    )
}

export default NuevoProyecto;