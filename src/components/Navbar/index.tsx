import React from "react";
import Styles from './navbar.module.scss';

import { Navbar, Container, Nav, Button } from "react-bootstrap";
const Menu : React.FC = () => {

    return (
        <>
        <Navbar>
          <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Verify</Nav.Link>
            <Button variant="light" className={`${Styles.btnBorder} me-2`}>Sign in</Button> 
            <Button variant="dark">Start Free Trial</Button>
          </Nav>
          </Container>
        </Navbar>
      </>
    )
}

export default Menu;