import React from 'react';
import Sidebar from './../layout/Sidebar';
import Header from './../layout/Header';
import FormTarea from './../tareas/FormTarea';
import ListadoTareas from '../tareas/ListadoTareas';

const Proyectos = () => {

    return(
        <div className="proyects-container">
            <Sidebar />
            <div className="main-container">
                <Header />
                <main>
                    <FormTarea />
                    <div className="tasks-container">
                        <ListadoTareas />
                    </div>     
                </main>
            </div>
        </div>
    );
}

export default Proyectos;