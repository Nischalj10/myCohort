import React from "react";
import './App.css';
import Home from "./Pages/Home";
import {ToastContainer} from "react-toastify";
import {Switch, Route} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
      <>
          <ToastContainer/>
          <Switch>
              <Route exact path={"/"} component={Home}/>
          </Switch>
      </>
  );
}

export default App;
