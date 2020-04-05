import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import ClientDetils from './components/ClientDetails';
import SignedIn from './components/SignedIn';
import Login from './components/Login';
import Signup from './components/Signup';
import AddClient from './components/AddClient';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Navbar />
        <Switch >
          <Route exact path="/" component={Dashboard} />
          <Route path="/client/:id" component={ClientDetils} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/create" component={AddClient} />

        </Switch>
      </div>
      </BrowserRouter>
     
    )
  }
  
}

export default App;
