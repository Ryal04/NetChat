import React from "react";
import { Input, Segment, Button } from "semantic-ui-react";

export const MessageForm = () => {
  return (
    <Segment>
      <Input
        fluid
        name="message"
        style={{ marginBottom: "0.7em" }}
        label={<Button icon={"add"} />}
        labelPosition="left"
        placeholder="write your message"
      ></Input>

      <Button.Group icon widths="2">
        <Button
          color="orange"
          content="Add Replay"
          labelPosition="left"
          icon="edit"
        />

        <Button
          color="teal"
          content="Upload Media"
          labelPosition="left"
          icon="cloud upload"
        />
      </Button.Group>
    </Segment>
  );
};

export default MessageForm;
