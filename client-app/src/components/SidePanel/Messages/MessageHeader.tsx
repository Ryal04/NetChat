import React from "react";
import { Header, Icon, Segment } from "semantic-ui-react";
import SearchInput from "./SearchInput";

export const MessageHeader = () => {
  return (
    <Segment clearing>
      <Header fluid="true" as="h2" floated="left" style={{ marginBottom: 0 }}>
        <span>
          channel
          <Icon name={"star outline"} color="black"></Icon>
          <Header.Subheader>2 User</Header.Subheader>
        </span>
      </Header>

      <SearchInput />
    </Segment>
  );
};

export default MessageHeader;
