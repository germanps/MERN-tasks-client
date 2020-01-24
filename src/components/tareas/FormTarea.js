import React, {useContext} from 'react';
import proyectoContext from './../../context/proyectos/proyectoContext';

const FormTarea = () => {

    //extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyectoActivo } = proyectosContext;

    //si no hay proyecto seleccionado no retornamos nada
    if(!proyectoActivo) return null;

    const _handleSubmit = e => {
        e.preventDefault();
    }

    return(
        <div className="formulario">
            <form
                onSubmit={_handleSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre de tarea"
                        name="nombre"
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primary btn-submit btn-block"
                        value="Agregar tarea"
                    />
                </div>
            </form>
        </div>
    );
}

export default FormTarea;