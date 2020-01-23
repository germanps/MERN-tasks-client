import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Proyectos from './components/proyectos/Proyectos';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import ProyectoState from './context/proyectos/proyectoState';

function App() {
  return (
    <div className="App">
      <ProyectoState>
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/nueva-cuenta' component={NuevaCuenta} />
            <Route exact path='/proyectos' component={Proyectos} />
          </Switch>
        </Router>
      </ProyectoState>
    </div>
  );
}

export default App;
