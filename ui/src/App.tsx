import React from 'react'
import './App.scss'
import Login  from './components/Login/index'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Responsiva from './components/Responsiva/index'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Responsiva} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;