import React, {Component} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {AiOutlineShoppingCart} from "react-icons/ai";

class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className={"header"}>
                <Navbar.Brand href="/home" className={"font-weight-bold"}>AMTICA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Nav.Link href="/">Login/Sign Up</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1"> Cart <AiOutlineShoppingCart className={"primary_color"} style={{fontSize:28}}/></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
