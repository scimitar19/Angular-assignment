import React from "react";
import Styles from './navbar.module.scss';
import Logo from '../../assets/images/home/siteLogo.svg';
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Box from "../Box";

const Menu : React.FC = () => {

    return (
        <>
        <Navbar>
          <Container>
          <Navbar.Brand  className="d-flex align-items-center">
              <img src={Logo} className="me-2" alt="" />
              <Box className={Styles.textColor}>
                 Verifiable Education
              </Box>
            </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link  className={Styles.navLink}>
              <Link to='/dashboard' className={Styles.link}>
                  Home
                </Link>
            </Nav.Link>
            <Nav.Link   className={Styles.navLink}>About Us</Nav.Link>
            <Nav.Link  className={`${Styles.navLink} me-2`}>
               <Link  to='/verify' className={Styles.link}> 
                  Verify 
                </Link>
            </Nav.Link>
            
              <Link to='/auth/Login'>
                <Button variant="light" className={`${Styles.btnBorder} ${Styles.navLink} me-2`}>
                  Sign in
                </Button>
              </Link>
              <Link to='auth/admin/singup' className={Styles.navLink}> 
              <Button variant='dark'>
                Start Free Trial
              </Button>
              </Link>
          </Nav>
          </Container>
        </Navbar>
      </>
    )
}

export default Menu;