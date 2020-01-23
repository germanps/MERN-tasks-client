import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from './../../context/proyectos/proyectoContext';

const Listado = () => {

    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    //ComponentDidMount
    useEffect(() => {
        obtenerProyectos();
    }, []);

    if(proyectos === null || proyectos.length === 0) return null;//si no hay proyectos(primera carga del programa)

    return(
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto 
                    proyecto={proyecto}
                    key={proyecto.id}
                />
            ))}
        </ul>
    );
}

export default Listado;