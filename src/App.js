import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home"
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';


import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

import AddUser from "./components/user/AddUser";
import EditUser from "./components/user/EditUser";
import User from "./components/user/User";
import Person from "./components/person/Person";
import Persons from './components/pages/Persons';
import AddPerson from './components/person/AddPerson';
import EditPerson from './components/person/EditPerson';
import AddReport from './components/person/AddReport';
import Staff from './components/pages/Staff';


function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Staff} />
          
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
          
          <Route exact path="/persons" component={Persons} />
          <Route exact path="/persons/add" component={AddPerson} />
          <Route exact path="/persons/edit/:id" component={EditPerson} />
          <Route exact path="/persons/addreport/:id" component={AddReport} />

          <Route exact path="/persons/:id" component={Person}/>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;