import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from './../../context/proyectos/proyectoContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Listado = () => {

    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    //ComponentDidMount
    useEffect(() => {
        obtenerProyectos();
    }, []);

    if(proyectos === null || proyectos.length === 0) return <span>No hay proyectos creados</span>;//si no hay proyectos(primera carga del programa)

    return(
        <ul className="listado-proyectos">
           <TransitionGroup>
            {proyectos.map(proyecto => (
               <CSSTransition
                    key={proyecto.id}
                    timeout={500}
                    classNames="proyecto"
               >
                    <Proyecto 
                        proyecto={proyecto}
                    />
               </CSSTransition>
            ))}
           </TransitionGroup>
        </ul>
    );
}

export default Listado;