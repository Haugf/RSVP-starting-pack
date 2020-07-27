import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './components/layouts/Navbar'
import Home from './components/pages/Home'


// State managemnt components
import AuthState from './context/authContext/AuthState'
import GuestState from './context/guestContext/GuestState'

// Pages
import Register from './components/pages/Register'
import Login from './components/pages/Login'

function App() {
  return (
    <AuthState>
      <GuestState>
        <Router>
        <div >
          <Navbar />
          <Switch>
            <Route exact path= '/' component={Home}></Route>
            <Route exact path= '/register' component={Register}></Route>
            <Route exact path= '/login' component={Login}></Route>
          </Switch>
        </div>
        </Router>
      </GuestState>
    </AuthState>
  );
}

export default App;
