import React,{useContext} from 'react'
import { Button, Form, Grid, Header, Icon, Label, Message, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import { Form as FinalForm, Field } from 'react-final-form'
import TestInput  from '../Common/Form/TestInput'
import { RootStoreContext } from '../../stores/rootStore'
import { IUserFormValues } from '../../models/users'
import { FORM_ERROR } from 'final-form'
import { combineValidators, isRequired } from 'revalidate'

const Login = () => {

    const validate = combineValidators({
      email: isRequired('Email'),
      password: isRequired('Password')
    })

    const rootStore = useContext(RootStoreContext)
    const { login } = rootStore.userStore
    const handleSubmitform = async (values : IUserFormValues) => {
       return login(values).catch((error) => ({[FORM_ERROR]: error}))
    }

    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>

          <Header as="h1" icon color="violet" textAlign="center">
            <Icon name="code branch" color="violet" />
            Login To NetChat
          </Header>

          <FinalForm

           onSubmit = {handleSubmitform}
           validate = {validate}
           render = {({handleSubmit, submitting, form, submitError}) => (

            <Form size="large" onSubmit = {handleSubmit}>
              <Segment stacked>

                <Field 
                  name = "email" 
                  placeholder = "Email Adress"
                  type = "text"
                  icon = "mail icon"
                  component = {TestInput}
                  
                  />

                <Field 
                  name = "password" 
                  placeholder = "Password"
                  type = "password"
                  icon = "lock icon"
                  component = {TestInput}
                  
                />
                
                <Button fluid color="violet" size="large" disabled = {submitting}> Submit </Button>

                   {submitError && (<Label color="red" basic content = {submitError.statusText}/>)}
                   <pre style = {{textAlign:'left'}}>{JSON.stringify(form.getState(), undefined, 2)}</pre>

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
