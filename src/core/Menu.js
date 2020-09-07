import React, { Fragment, useEffect, useState } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
// react-bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import { NavItem } from "react-bootstrap"

import { LinkContainer } from 'react-router-bootstrap'

// react components
import CategoryMenu from './CategoryMenu'

import { isAuthenticated, signOut } from './api/auth'

const Menu = () => {

    const [userLoggedIn, setUserLoggedIn] = useState()
    const [testVal, setTestVal] = useState(1)
    const [redirect, setRedirect] = useState(false)



    // Check if a user is logged in. If the user is logged in, add to the userLoggedIn State
    const getAuthData = () => {
        const authData = isAuthenticated()
        console.log(`authData: ${JSON.stringify(authData.user.name)}`)
        if (authData) {
            console.log('In AuthData If...')
            setUserLoggedIn(authData)
        }
    }


    const testUpdate = async () => {
        setTestVal(4)
        console.log(`testVal after update: ${testVal}`)
    }

    useEffect(() => {
        /* console.log(`testVal before update call: ${testVal}`)
        testUpdate()
        console.log(`testVal after update call: ${testVal}`) */
        /* console.log('In Use Effect')
        getAuthData()
        console.log(`userLoggedIn  : ${JSON.stringify(userLoggedIn)}`) */
    }, [])

    // Logout User and Set Redirect
    const handleLogout = (token) => {
        console.log('In Handle Logout')
        console.log(`token typeof: ${typeof token}`)
        console.log(`token : ${JSON.stringify(token)}`)
        signOut(token, () => {
            setRedirect(true)
        })
    }

    const redirectUser = () => {
        if (redirect) {
            return (
                <Redirect to="/" />
            )
        }
    }

    // Function to determine which user menus to show: Login Menus vs Logged In User Menus (Dash Board, Logout)
    const showUserNavs = () => {
        const user = isAuthenticated()
        console.log(`user.token: ${user.token}`)
        if (user) {     // User is logged in            
            if (user.user.level == 0) {  // Normal user is logged in
                return (
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic"> User </Dropdown.Toggle>
                        <Dropdown.Menu >
                            <LinkContainer to="/user/dashboard">
                                <Dropdown.Item>DashBoard</Dropdown.Item>
                            </LinkContainer>
                            <Dropdown.Item onClick={() => handleLogout(user.token)}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                )
            } else {        // Admin User. For now this will treat Admin and Super-Admin the same
                return (
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic"> Admin </Dropdown.Toggle>
                        <Dropdown.Menu >
                            <LinkContainer to="/admin/dashboard">
                                <Dropdown.Item >Admin DashBoard</Dropdown.Item>
                            </LinkContainer>
                            <Dropdown.Item onClick={() => handleLogout(user.token)}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                )
            }

        } else {    // User not logged in
            return (
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic"> Login </Dropdown.Toggle>
                    <Dropdown.Menu >
                        <LinkContainer to="/login">
                            <Dropdown.Item>Login</Dropdown.Item>
                        </LinkContainer>
                        <Dropdown.Item>Forgot Password?</Dropdown.Item>
                        <Dropdown.Item>Sign Up</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            )
        }
    }



    return (
        <div className="menu">
            <header className="nav-header">
                <Container fluid >
                    <Row className="bg-success text-white p-2">
                        <Col>
                            <Nav className="mr-auto text-white">
                                <Nav.Item>
                                    <LinkContainer to="/">
                                        <Nav.Link className="font-weight-bolder text-white">Bike Classifieds</Nav.Link>
                                    </LinkContainer>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="text-white">About</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="text-white">Contact</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col>
                            <InputGroup>
                                <FormControl
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button variant="warning">Search</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                        <Col>
                            <Nav>
                                <Nav.Item className="ml-auto mr-2" >
                                    <Button variant="danger">Post Ad</Button>
                                </Nav.Item>
                                <Nav.Item>
                                    {showUserNavs()}
                                    {redirectUser()}
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>

                    <Row className="category-menu p-2">
                        <Col>
                            <CategoryMenu />
                        </Col>
                    </Row>

                </Container>

            </header>


        </div >
    )
}

export default withRouter(Menu) 