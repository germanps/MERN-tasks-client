import React, {useContext} from 'react';
import Tarea from './Tarea';
import proyectoContext from './../../context/proyectos/proyectoContext';
import tareaContext from './../../context/tareas/tareaContext';

const ListadoTareas = () => {

    const proyectosContext = useContext(proyectoContext);
    const { proyectoActivo, eliminarProyecto } = proyectosContext;

    const tareasContext = useContext(tareaContext);
    const { tareasProyectoActivo } = tareasContext;
    console.log(tareasProyectoActivo);

    if(!proyectoActivo) return <h2>Selecciona un proyecto</h2>
    
    return(
        <div className="listado-tareas">
           <h2>Proyecto:  {proyectoActivo[0].nombre} </h2>
            <ul className="listado-tareas">
                {tareasProyectoActivo.length === 0 
                    ? <li className="tarea"><p>No hay tareas</p></li>
                    : tareasProyectoActivo.map((tarea, index) => (
                        <Tarea
                            tarea={tarea}
                            key={index}
                        />
                    ))
                }
            </ul>
            <button 
                className="btn btn-eliminar" 
                type="button"
                onClick={() => eliminarProyecto(proyectoActivo[0].id)}
            >
                Eliminar proyecto
            </button>
        </div>
    );
}

export default ListadoTareas;

