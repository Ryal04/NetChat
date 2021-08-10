import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import { Header, List } from "semantic-ui-react";

class App extends Component {
  state = {
    channels: [],
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/channels").then((response) => {
      this.setState({
        channels: response.data,
      });
    });
  }

  render() {
    return (
      <div className="App-header">
        <Header as="h2" icon>
          <Header.Subheader> NetChat. </Header.Subheader>
        </Header>

        <List>
          {this.state.channels.map((value: any) => (
            <List.Item key={value.id}> {value.name} </List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
