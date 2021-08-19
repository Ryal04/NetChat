import React, { useContext } from "react";
import { Dropdown, Grid, GridRow, Header, Icon, Message, } from "semantic-ui-react";
import { RootStoreContext } from "../../../stores/rootStore";
import {Link} from "react-router-dom"

export const UserPanel = () => {
  const rootstore = useContext(RootStoreContext)
  const {user,logout,IsLoggedIn} = rootstore.userStore
  const dropdownOptions = () => [
    {
      key: 'user',
      text: (
        <span>
          Logged as: <strong>{user?.email}</strong>
        </span>
      ),
      disabled: true,
    },
    {
      key: 'avatar',
      text: <span>Change Avatar</span>,
      disabled: true,
    },
    {
      key: 'singout',
      text: <span onClick = {logout}>Log Out</span>,
    },
  ];

  return (
    <Grid styles={{ background: "#4c3c4c", margin: 0 }}>
      <Grid.Column>
        <GridRow style={{ padding: "1.2em", margin: 0 }}>
          <Header inverted floated="left" as="h2">
            <Icon name="code"></Icon>
            <Header.Content>NetChat</Header.Content>
          </Header>
        </GridRow>
        <Header style={{ padding: "0.25em" }} as="h4" inverted>
          {IsLoggedIn && user ? (
            <Dropdown trigger={<span>{user?.userName}</span>} options = {dropdownOptions()}>
            </Dropdown>
          ):(
            <Message>
              Don't han an account? <Link to = "/register">Register</Link>
            </Message>
          )}
          
        </Header>
      </Grid.Column>
    </Grid>
  );
};

export default UserPanel;
