import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Proyectos from './components/proyectos/Proyectos';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';

//Pasar los states al padre para que estén disponiblen en todos los hijos
import ProyectoState from './context/proyectos/proyectoState';
import TareaState from './context/tareas/tareaState';

function App() {
  return (
    <div className="App">
      <ProyectoState>
        <TareaState>
          <Router>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/nueva-cuenta' component={NuevaCuenta} />
              <Route exact path='/proyectos' component={Proyectos} />
            </Switch>
          </Router>
        </TareaState>
      </ProyectoState>
    </div>
  );
}

export default App;
