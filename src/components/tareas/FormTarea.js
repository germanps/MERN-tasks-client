import React, { useContext, useState } from 'react';
import proyectoContext from './../../context/proyectos/proyectoContext';
import tareaContext from './../../context/tareas/tareaContext';

const FormTarea = () => {

    //extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyectoActivo } = proyectosContext;

    //extrae de tareas
    const tareasContext = useContext(tareaContext);
    const { agregarTarea } = tareasContext;

    //state del formulario
    const [tarea, guardarTarea] = useState({
        nombre: ''
    });

    //leer valores del formulario
    const _handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const { nombre } = tarea;

    //si no hay proyecto seleccionado no retornamos nada
    if(!proyectoActivo) return null;

    //agraegar nueva tarea
    const _handleSubmit = e => {
        e.preventDefault();
        //validar

        //pasar validacion

        //agregar nueva tarea al state de tareas
        tarea.proyectoId = proyectoActivo[0].id; //insertar id del proyecto al objeto tarea
        tarea.estado = false; //insertar estado principal a la tarea
        console.log(tarea);
        agregarTarea(tarea);

        //reiniciar form
    }

    return(
        <div className="formulario">
            <form
                onSubmit={_handleSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre de tarea"
                        name="nombre"
                        onChange={_handleChange}
                        value={nombre}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primary btn-submit btn-block"
                        value="Agregar tarea"
                    />
                </div>
            </form>
        </div>
    );
}

export default FormTarea;