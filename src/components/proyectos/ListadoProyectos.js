import React from 'react';
import Proyecto from './Proyecto';

const Listado = () => {

    const proyectos = [
        {nombre: "DmgMori"},
        {nombre: "Pasiona producto"},
        {nombre: "Tunels"}
    ];

    return(
        <ul className="listado-proyectos">
            {proyectos.map((proyecto, index) => (
                <Proyecto proyecto={proyecto} />
            ))}
        </ul>
    );
}

export default Listado;