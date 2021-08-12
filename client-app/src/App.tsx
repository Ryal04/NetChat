import "./App.css";
import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import SidePanel from "./components/SidePanel/SidePanel/SidePanel";
import ColorPanel from "./components/SidePanel/ColorPanel/ColorPanel";
import Messages from "./components/SidePanel/Messages/Messages";
import MetaPanel from "./components/SidePanel/MetaPanel/MetaPanel";


class App extends Component {
  render() {
    return (
      <Grid columns="equal" className="app">
        <ColorPanel />
        <SidePanel />

        <Grid.Column style={{ marginLeft: 320 }}>
          <Messages />
        </Grid.Column>

        <Grid.Column width={4}>
          <MetaPanel />
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;
