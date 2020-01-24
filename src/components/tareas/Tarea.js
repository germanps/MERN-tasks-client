import React, { useContext } from 'react';
import ProyectoContext from "./../../context/proyectos/proyectoContext";
import tareaContext from './../../context/tareas/tareaContext';

const Tarea = ({tarea}) => {

    //obtener states
    const proyectosContext = useContext(ProyectoContext);
    const { proyectoActivo } = proyectosContext;

    const tareasContext = useContext(tareaContext);
    const { eliminarTarea, obtenerTareas } = tareasContext;

    //eliminar la tarea seleccionada
    const tareaEliminar = id => {
        eliminarTarea(id);
        obtenerTareas(proyectoActivo[0].id)
    }

    return(
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {tarea.estado
                    ?   <button
                            type="button"
                            className="btn completo"
                        >Completo</button>
                    :   <button
                            type="button"
                            className="btn incompleto"
                        >Incompleto</button>
                }
            </div>
            <div className="acciones">
                <button 
                    type="button"
                    className="btn btn-primary"
                >Editar</button>
                <button 
                    type="button"
                    className="btn btn-secundary"
                    onClick={() => tareaEliminar(tarea.id)}
                >Eliminar</button>
            </div>
        </li>
    )
}

export default Tarea;