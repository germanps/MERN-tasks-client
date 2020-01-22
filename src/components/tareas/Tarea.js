import React from 'react';

const Tarea = ({tarea}) => {
    return(
        <li className="tarea sombra">
            <div>{tarea.nombre}</div>
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
                    className="btn bnt-primario"
                >Eliminar</button>
            </div>
        </li>
    )
}

export default Tarea;