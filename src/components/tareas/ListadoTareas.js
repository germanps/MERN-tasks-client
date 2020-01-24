import React, {useContext} from 'react';
import Tarea from './Tarea';
import proyectoContext from './../../context/proyectos/proyectoContext';

const ListadoTareas = () => {

    const proyectosContext = useContext(proyectoContext);
    const { proyectoActivo, eliminarProyecto } = proyectosContext;

    if(!proyectoActivo) return <h2>Selecciona un proyecto</h2>

    const tareas = [
        {nombre: 'Modal para las fechas', estado: true},
        {nombre: 'Grid sincfusion', estado: false},
        {nombre: 'Schedule', estado: true},
        {nombre: 'After sales component', estado: false}
    ];
    
    return(
        <div className="listado-tareas">
           <h2>Proyecto:  {proyectoActivo[0].nombre} </h2>
            <ul className="listado-tareas">
                {tareas.length === 0 
                    ? <li className="tarea"><p>No hay tareas</p></li>
                    : tareas.map((tarea, index) => (
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

