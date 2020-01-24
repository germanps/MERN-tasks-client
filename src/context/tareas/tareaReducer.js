import {
    TAREAS_PROYECTO
} from './../../types';


export default (state, action) => {
    switch (action.type) {
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasProyectoActivo: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
            }
        
        default:
            return state;
    }
}