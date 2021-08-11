import React from "react";
import { Segment, Comment } from "semantic-ui-react";
import MessageForm from "./MessageForm";
import MessageHeader from "./MessageHeader";

export const Messages = () => {
  return (
    <React.Fragment>
      {/* Header*/}

      <MessageHeader />

      <Segment>
        <Comment.Group></Comment.Group>
      </Segment>

      <MessageForm />
    </React.Fragment>
  );
};

export default Messages;
