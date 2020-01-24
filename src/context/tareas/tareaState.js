import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA
} from './../../types';


const TareaState = props => {
    const initialState = {
        tareas: [
            {id: 1, nombre: 'Grid syncfusion', estado: false, proyectoId: 2},
            {id: 2, nombre: 'Schedule', estado: true, proyectoId: 3},
            {id: 3, nombre: 'After sales component', estado: false, proyectoId: 4},
            {id: 4, nombre: 'Modal para las fechas', estado: true, proyectoId: 2},
            {id: 5, nombre: 'Grid syncfusion', estado: false, proyectoId: 3},
            {id: 6, nombre: 'Schedule', estado: true, proyectoId: 3},
            {id: 7, nombre: 'Modal para las fechas', estado: true, proyectoId: 4},
            {id: 8, nombre: 'Grid syncfusion', estado: false, proyectoId: 3},
            {id: 9, nombre: 'Schedule', estado: true, proyectoId: 1},
            {id: 10, nombre: 'Modal para las fechas', estado: true, proyectoId: 2},
            {id: 11, nombre: 'Grid syncfusion', estado: false, proyectoId: 1},
            {id: 12, nombre: 'Schedule', estado: true, proyectoId: 4},
            {id: 13, nombre: 'Modal para las fechas', estado: true, proyectoId: 1}
        ],
        tareasProyectoActivo: null,
        errorTarea: false
    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);


    //Obtener tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        });
    }

    //Agragar tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    //Validar tarea mostrando un error
    const validarTarea = () => {
        //no toma payload ya que se actualiza mediante boleano
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //Eliminar tarea por id
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    return(
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyectoActivo: state.tareasProyectoActivo,
                errorTarea: state.errorTarea,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;