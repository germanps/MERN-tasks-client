import React from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {
    const tareas = [
        {nombre: 'Modal para las fechas', estado: true},
        {nombre: 'Grid sincfusion', estado: false},
        {nombre: 'Schedule', estado: true},
        {nombre: 'After sales component', estado: false}
    ]
    return(
        <div className="listado-tareas">
            <h2>Proyecto: DmgMori</h2>
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
        </div>
    );
}

export default ListadoTareas;

