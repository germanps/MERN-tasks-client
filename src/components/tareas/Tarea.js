import React from 'react';

const Tarea = ({tarea}) => {
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
                >Eliminar</button>
            </div>
        </li>
    )
}

export default Tarea;