import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

import { LinkContainer } from 'react-router-bootstrap'

// react-bootstrap components
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import NavItem from "react-bootstrap/NavItem";

const CategoryMenu = () => {
    return (
        <div>
            <Nav className="nav-main-category justify-content-center">
                <Nav.Item>
                    <Nav.Link>Latest</Nav.Link>
                </Nav.Item>
                <NavDropdown title="Road" id="basic-nav-dropdown">

                    <NavDropdown.Item >All</NavDropdown.Item>

                    <NavDropdown.Item >Complete Bikes</NavDropdown.Item>
                    <NavDropdown title="Parts" id="sub-menu">
                        <NavDropdown.Item >All</NavDropdown.Item>
                        <NavDropdown.Item >Complete Bikes</NavDropdown.Item>
                        <NavDropdown.Item >Parts</NavDropdown.Item>
                    </NavDropdown>



                </NavDropdown>
                <NavDropdown title="MTB" id="basic-nav-dropdown2">
                    <NavDropdown.Item >All</NavDropdown.Item>
                    <NavDropdown.Item >Complete Bikes</NavDropdown.Item>
                    <NavDropdown.Item >Parts</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="BMX" id="basic-nav-dropdown">
                    <NavDropdown.Item >All</NavDropdown.Item>
                    <NavDropdown.Item >Complete Bikes</NavDropdown.Item>
                    <NavDropdown.Item >Parts</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="E-Bike" id="basic-nav-dropdown">
                    <NavDropdown.Item >All</NavDropdown.Item>
                    <NavDropdown.Item >Complete Bikes</NavDropdown.Item>
                    <NavDropdown.Item >Parts</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Clothing & Gear" id="basic-nav-dropdown">
                    <NavDropdown.Item >All</NavDropdown.Item>
                    <NavDropdown.Item >Clothing</NavDropdown.Item>
                    <NavDropdown.Item >Shoes</NavDropdown.Item>
                    <NavDropdown.Item >Protective Gear</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Accessories" id="basic-nav-dropdown">
                    <NavDropdown.Item >All</NavDropdown.Item>
                    <NavDropdown.Item >Tools</NavDropdown.Item>
                    <NavDropdown.Item >Lights</NavDropdown.Item>
                    <NavDropdown.Item >Bike Transport</NavDropdown.Item>
                </NavDropdown>

            </Nav>
        </div >
    )
}

export default CategoryMenu