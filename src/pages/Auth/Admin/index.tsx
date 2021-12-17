import React from "react";
import {  Form, Button, Card } from "react-bootstrap";
import Box from "../../../components/Box";
import Styles from './auth.module.scss';
import Logo from '../../../assets/images/home/siteLogo.svg';

const AdminSignUp : React.FC = () => {

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
                Admin Sign Up
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
                <Form.Group controlId="formBasicPhoneNumber">
                    <Form.Label  className={Styles.Label}>Enter Phone Number</Form.Label>
                    <Form.Control className={Styles.Control}  placeholder="Enter phone number" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label  className={Styles.Label}>Password</Form.Label>
                    <Form.Control className={Styles.Control} type="password" placeholder="****" />
                </Form.Group>
                <Form.Group>
                    <Form.Label  className={Styles.Label}>Country</Form.Label>
                    <Form.Select className={Styles.Select}>
                        <option value="" selected disabled>Select your country</option>
                        <option>Some country</option>
                    </Form.Select>
                </Form.Group>
                <Button  className={`${Styles.updateBtn} btn-block`}>
                    Get Started
                </Button>
            </Form>
          </Card>
       </Box>
    )
}

export default AdminSignUp
