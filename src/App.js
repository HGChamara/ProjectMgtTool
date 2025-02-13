import React from 'react';
import './App.css';
import DashBoard from './components/DashBoard';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import AddProject from './components/Project/AddProject';
import Header from './Layout/Header';
import {Provider} from "react-redux";
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
    <Header/>
      <Route exact path="/dashboard" component={DashBoard}/>
      <Route exact path="/addProject" component={AddProject}/>
    </div>
    </Router>
    </Provider>
  );
}

export default App;

