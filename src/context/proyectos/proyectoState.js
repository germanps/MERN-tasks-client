import React, { useReducer } from 'react';

import ProyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { 
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS 
} from './../../types';




const ProyectoState = props => {
    const proyectos = [
        { id: 1, nombre: "DmgMori" },
        { id: 2, nombre: "Pasiona producto" },
        { id: 3, nombre: "Tunels" },
        { id: 4, nombre: "AMV" }
    ]
    const initialState = {
        proyectos: [],
        formulario :  false
    }

    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    //Funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }
   

    //Obtener proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }



    return(
        <ProyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState;