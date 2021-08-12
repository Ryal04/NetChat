import React from 'react'
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <Grid textAlign = "center" verticalAlign = "middle" className = "app">
            <Grid.Column style = {{maxWidth: 450}}>
                <Header as="h1" icon color = "violet" textAlign = "center">
                    <Icon name = "code branch" color ="violet"/>
                    Login To NetChat
                </Header>

                <Form size = "large">
                    <Segment stacked>
                        <Form.Input 
                        fluid 
                        name = "email" 
                        icon ="mail" 
                        iconPosition = "left"
                        placeholder = "Email Address"
                        type = "email"
                        />

                        <Form.Input 
                        fluid 
                        name = "password" 
                        icon ="lock" 
                        iconPosition = "left"
                        placeholder = "Password"
                        type = "password"
                        />
                       
                       <Button fluid color = "violet" size = "large">
                                Submit
                        </Button>
                    </Segment>
                </Form>

                <Message>
                    Don't have an account<Link to = "/register">Login</Link>
                </Message>

            </Grid.Column>

        </Grid>
    )
}

export default Login
