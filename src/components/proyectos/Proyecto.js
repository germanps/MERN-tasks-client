import React, { useContext } from 'react';
import ProyectoContext from "./../../context/proyectos/proyectoContext";
import TareaContext from "./../../context/tareas/tareaContext";

const Proyecto = ({proyecto}) => {

    //obtener states
    const proyectosContext = useContext(ProyectoContext);
    const { proyectoActual } = proyectosContext;
    const tareasContext = useContext(TareaContext);
    const { obtenerTareas } = tareasContext;

    //agregar proyecto actual
    const seleccionarProyecto = id => {
        proyectoActual(id); //fijar el proyecto actual
        obtenerTareas(id); //fijar las tareas del proyecto jifado
    }
    
    return(
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => seleccionarProyecto(proyecto.id)}
            >
                {proyecto.nombre}
            </button>
        </li>
    );
}

export default Proyecto;