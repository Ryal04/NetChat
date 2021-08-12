import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter , Route } from "react-router-dom";
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'

//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Route exact path ="/" component = {App}/>
    <Route exact path ="/register" component = {Register}/>
    <Route exact path ="/login" component = {Login}/>
    
  </BrowserRouter>,
  document.getElementById('root'),
)