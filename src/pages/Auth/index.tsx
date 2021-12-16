import React from "react";
import {  Form, Button, Card } from "react-bootstrap";
import Box from "../../components/Box";
import Styles from './auth.module.scss';
import Logo from '../../assets/images/home/siteLogo.svg';
import { Link } from 'react-router-dom'

const Auth : React.FC = () => {

    return (
       <Box className={Styles.bgLight}>
           <Box className="d-flex align-items-center justify-content-center mt-5">
                <img src={Logo} className="me-2" alt="" />
                <Box className={Styles.textColor}>
                    Verifiable Education
                </Box>
            </Box>

          <Card className={Styles.Box}>
            <Box className="text-center">
            <Box className={Styles.signInHeading}>
                Sign in
            </Box>
            <Box className={Styles.signInText}>
             Enter your email and password below
            </Box>
            </Box>
            <Form className={Styles.signInForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={Styles.Label}>Email</Form.Label>
                    <Form.Control className={Styles.Control} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group   controlId="formBasicPassword">
                    <Form.Label  className={Styles.Label}>Password</Form.Label>
                    <Form.Control className={Styles.Control} type="password" placeholder="Password" />
                </Form.Group>
                <Box className="text-end" style={{marginBottom: '26px'}}>
                    <a href="/#" rel="noopener noreferrer" className={Styles.forgotBtn}>Forgot password?</a>
                </Box>
                <Button  className={`${Styles.updateBtn} btn-block`}>
                    Login
                </Button>
                <Box className="text-center" style={{marginTop: '45px'}}>
                    Don't have an account? <Link to="/auth/user/signup" className={Styles.signUp}>Sign Up</Link>  
                </Box>
            </Form>

          </Card>
       </Box>
    )
}

export default Auth;