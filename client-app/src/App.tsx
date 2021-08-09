import logo from "./logo.svg";
import "./App.css";
import React, {Component} from "react";
import { cars } from "./demo";
import CarItem from './CarItem'
import axios from "axios";


class App extends Component{
  state = {
    channels: []
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/channels').then((response) => {
      this.setState({
          channels: response.data
      })
    })
  }

  render() {
    return (
          <div className="App-header">
            <header className="App">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
            <ul>
              {this.state.channels.map((value: any) => (
                  <li>{value.name}</li>
              ))}
            </ul>
          </div>
        );
  }
};


export default App;
