import React from "react";
import {  Form, Button, Card } from "react-bootstrap";
import Box from "../../../components/Box";
import Styles from './auth.module.scss';
import Logo from '../../../assets/images/home/siteLogo.svg';

import appelIcon from '../../../assets/icons/apple.svg';
import googleIcon from '../../../assets/icons/google.svg';
import linkedinIcon from '../../../assets/icons/linkedin.svg';
import facebookIcon from '../../../assets/icons/facebook.svg';




 const UserSignUp: React.FC =() => {

    return(
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
                User Sign up
            </Box>
            <Box className={Styles.signUpText}>
                Enter your details below
            </Box>
            </Box>
            <Form className={Styles.signUpForm}>
                <Form.Group controlId="fromBasicName">
                    <Form.Label  className={Styles.Label}>Name</Form.Label>
                    <Form.Control className={Styles.Control} placeholder="Name" />
                </Form.Group>
                <Form.Group controlId="fromBasicSurename">
                    <Form.Label  className={Styles.Label}>Surename</Form.Label>
                    <Form.Control className={Styles.Control} placeholder="Surename" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label  className={Styles.Label}>Email address</Form.Label>
                    <Form.Control className={Styles.Control} type="email" placeholder="Email address" />
                </Form.Group> 
                <Button  className={`${Styles.updateBtn} btn-block`}>
                    Get Started
                </Button>
                <Box className={Styles.socialMedia}>
                    <h6>Or</h6>
                </Box> 
                    <Button  className={`${Styles.appel} btn-icon btn-block`}>
                        <img src={appelIcon} alt="" /> Sign up with Apple                
                    </Button>
                    <Button  className={`${Styles.google} btn-icon btn-block`}>
                        <img src={googleIcon} alt="" /> Sign up with Google                
                    </Button>
                    
                    <Button  className={`${Styles.linkedin} btn-icon btn-block`}>
                        <img src={linkedinIcon} alt="" />Sign up with Linkedin                
                    </Button>
                    <Button  className={`${Styles.facebook} btn-block`}>
                        <img src={facebookIcon} alt="" />Sign up with Facebook                
                    </Button>
            </Form>
          </Card>
       </Box>
    )

}


export default UserSignUp