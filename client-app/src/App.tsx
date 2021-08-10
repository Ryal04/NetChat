import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import { Grid } from "semantic-ui-react";
import SidePanel from "./components/SidePanel/SidePanel/SidePanel";
import ColorPanel from "./components/SidePanel/ColorPanel/ColorPanel";
import Messages from "./components/SidePanel/Messages/Messages";
import MetaPanel from "./components/SidePanel/MetaPanel/MetaPanel";

class App extends Component {

  render() {
    return (
      <Grid> 
        <ColorPanel/>
        <SidePanel/>
        <Messages/>
        <MetaPanel/>
      </Grid>
    );
  }
}

export default App;
