import React, { useReducer } from 'react';

import ProyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO } from './../../types';

const ProyectoState = props => {
    const initialState = {
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
   



    return(
        <ProyectoContext.Provider
            value={{
                formulario: state.formulario,
                mostrarFormulario
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState;