import React from "react";
import './App.css';
import Home from "./Pages/Home";
import Edit from "./Pages/Edit";
import {ToastContainer} from "react-toastify";
import {Route, Switch} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
          <>
              <ToastContainer/>
              <Switch>
                  <Route exact path={"/"} component={Home}/>
                  <Route exact path={"/edit"} component={Edit}/>
              </Switch>
          </>

  );
}

export default App;
