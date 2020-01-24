import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import {
    TAREAS_PROYECTO
} from './../../types';


const TareaState = props => {
    const initialState = {
        tareas: [
            {nombre: 'Modal para las fechas', estado: true, proyectoId: 1},
            {nombre: 'Grid sincfusion', estado: false, proyectoId: 2},
            {nombre: 'Schedule', estado: true, proyectoId: 3},
            {nombre: 'After sales component', estado: false, proyectoId: 4},
            {nombre: 'Modal para las fechas', estado: true, proyectoId: 2},
            {nombre: 'Grid sincfusion', estado: false, proyectoId: 3},
            {nombre: 'Schedule', estado: true, proyectoId: 3},
            {nombre: 'Modal para las fechas', estado: true, proyectoId: 4},
            {nombre: 'Grid sincfusion', estado: false, proyectoId: 3},
            {nombre: 'Schedule', estado: true, proyectoId: 1},
            {nombre: 'Modal para las fechas', estado: true, proyectoId: 2},
            {nombre: 'Grid sincfusion', estado: false, proyectoId: 1},
            {nombre: 'Schedule', estado: true, proyectoId: 4},
        ],
        tareasProyectoActivo: null
    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);


    //Obtener tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    return(
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyectoActivo: state.tareasProyectoActivo,
                obtenerTareas
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;