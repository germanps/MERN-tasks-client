import React from 'react';

const FormTarea = () => {

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