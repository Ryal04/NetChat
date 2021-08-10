import React from "react";
import { Dropdown, Grid, GridRow, Header, Icon } from "semantic-ui-react";

export const UserPanel = () => {
  const dropdownOptions = () => [
    {
      key: 'user',
      text: (
        <span>
          Logged as: <strong>User</strong>
        </span>
      ),
      disabled: true,
    },
    {
      key: 'avatar',
      text: <span>Change Avatar</span>,
      disabled: true,
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
          <Dropdown trigger={<span>User</span>} options = {dropdownOptions()}>
          </Dropdown>
        </Header>
      </Grid.Column>
    </Grid>
  );
};

export default UserPanel;
