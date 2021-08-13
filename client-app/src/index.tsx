import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route, Switch, Router } from "react-router-dom";
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import NotFound from "./components/NotFound";
import {createBrowserHistory} from 'history'
import 'react-toastify/dist/ReactToastify.min.css' 
import { ToastContainer } from "react-toastify";

export const history = createBrowserHistory()

ReactDOM.render(
  <React.Fragment>
        <ToastContainer position="bottom-right" />
    <Router history={history}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact component={NotFound} />
        </Switch>
      </Router>
  </React.Fragment>
      ,document.getElementById('root'),
);