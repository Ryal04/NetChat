import React from 'react'
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import { Form as FinalForm, Field } from 'react-final-form'

const Login = () => {
    const showResults = async (values: any) => {
        console.log(values)
    }
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>

          <Header as="h1" icon color="violet" textAlign="center">
            <Icon name="code branch" color="violet" />
            Login To NetChat
          </Header>

          <FinalForm
           onSubmit = {showResults}
           render = {({handleSubmit, submitting, values}) => (

            <Form size="large" onSubmit = {handleSubmit}>
              <Segment stacked>

                <Field name = "email" component = "input"/>

                <Form.Input
                  fluid
                  name="email"
                  icon="mail"
                  iconPosition="left"
                  placeholder="Email Address"
                  type="email"
                />

                <Form.Input
                  fluid
                  name="password"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"

                />

                <Button fluid color="violet" size="large" disabled = {submitting}> Submit </Button>
                <pre>{JSON.stringify(values, undefined, 2)}</pre>
              </Segment>
            </Form>

          )}> 
          </FinalForm>

          <Message>
            Don't have an account <Link to="/register">Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
}

export default Login
