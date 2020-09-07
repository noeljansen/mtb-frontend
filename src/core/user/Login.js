import React, { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom'

import MainLayout from '../MainLayout'
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap"

import { userLogin, setAuthJWT, isAuthenticated } from '../api/auth'

const Login = () => {

    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        redirectToRefferer: false,
    })
    var { email, password, loading, error, redirectToRefferer } = values

    useEffect(() => {

    }, [])

    const handleClick = (event) => {
        event.preventDefault()
        /* const body = { email, password }
        console.log(`body : ${body}`)
        console.log(`body stringy-fied : ${JSON.stringify(body)}`) */
        setValues({ ...values, loading: true, error: '' })
        userLogin(email, password)
            .then(data => {
                console.log(`data: ${JSON.stringify(data)}`)
                if (data.error) {
                    setValues({ ...values, error: data.error, loading: false })
                } else {
                    console.log('Successfull Login')
                    // Set a JWT with the users data for authorization etc. then redirect
                    setAuthJWT(data, () => {
                        setValues({ ...values, redirectToRefferer: true })
                    }
                    )
                }
            })
            .catch(err => {
                console.log(`HandleCLick Error: ${err}`)
            })

    }


    const handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setValues({ ...values, [name]: value })

    }

    const showError = () => {
        if (error) {
            return (
                <Alert variant="danger" onClose={() => setValues({ ...values, password: '', email: '', error: '' })} dismissible>
                    <p>
                        {error}
                    </p>
                </Alert>
            )
        }
    }

    const showLoading = () => {

        if (loading) {
            return (
                <h3>Loading...</h3>
            )
        }

    }

    const redirectUser = () => {
        const user = isAuthenticated()
        if (redirectToRefferer) {                   // Will redirect based on user's level
            if (user && user.level == 0) {
                console.log('Normal user logged in')
                return <Redirect to="/" />          // Needs to be updated user dashboard
            } else {
                console.log('Admin user logged in')
                return <Redirect to="/" />          // Needs to be updated admin dashboard 
            }
        }
        if (user) {
            console.log('User logged in. Redirecting home')
            console.log(`user: ${JSON.stringify(user)}`)
            return <Redirect to="/" />      // Default to home page if no referrer
        }
    }
    const loginForm = () => (
        <Form name="loginForm">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" value={email} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" val={password} onChange={handleInputChange} />
            </Form.Group>
            <Button variant="success" type="submit" onClick={handleClick}>
                Login
        </Button>
        </Form>
    )


    return (
        <div className='login'>
            <MainLayout>
                <Container>
                    <Row>
                        <Col>
                            <h2>Log in</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {showError()}
                            {showLoading()}
                            {loginForm()}
                            {redirectUser()}
                        </Col>
                    </Row>
                </Container>
            </MainLayout>
        </div>
    )
}

export default Login