import React from "react";
import Styles from './navbar.module.scss';
import Logo from '../../assets/images/home/siteLogo.svg';
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Box from "../Box";

const Menu : React.FC = () => {

    return (
        <>
        <Navbar>
          <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
              <img src={Logo} className="me-2" alt="" />
              <Box className={Styles.textColor}>
                 Verifiable Education
              </Box>
            </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home" className={Styles.navLink}>Home</Nav.Link>
            <Nav.Link href="#features" className={Styles.navLink}>About Us</Nav.Link>
            <Nav.Link href="#pricing" className={`${Styles.textColor} me-2`}>Verify</Nav.Link>
            <Button variant="light" className={`${Styles.btnBorder} ${Styles.navLink} me-2`}>Sign in</Button> 
            <Button variant="dark">Start Free Trial</Button>
          </Nav>
          </Container>
        </Navbar>
      </>
    )
}

export default Menu;