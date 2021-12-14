import React from "react";
import  "./sidebar.scss";
import { Nav, Button } from "react-bootstrap";
import Logo from "./../../assets/images/logo/Logo.svg";
import HomeIcon from "./../../assets/images/icons/home.svg"
import CertificateIcon from "./../../assets/images/icons/certificate.svg"
import CourseIcon from "./../../assets/images/icons/course.svg"
import ProviderIcon from "./../../assets/images/icons/provider.svg"
import VerifiedIcon from "./../../assets/images/icons/Verified.svg"
import Box from "../Box";
import { Link } from "react-router-dom";

interface Props {
    isOpen ?: boolean;
    toggle ?: ()=>void
}

const Sidebar : React.FC<Props> = (props) => {
    return (
        <Box className={props?.isOpen ? `sidebar is-open ` :  'sidebar'}>
          <Box className="sidebar-header">
            <img src = {Logo} />
            {/* <Button
              variant="link"
              onClick={props?.toggle}
              style={{ color: "#fff" }}
              className="mt-4"
            >
              close
            </Button> */}
          </Box>
  
          <Nav className="flex-column pt-2" onClick={props?.toggle}>
  
            <Nav.Item className="active">
              <Nav.Link >
                <img src = {HomeIcon} />
                <Link to='/'>
                  <span className  = "text">
                    Home
                  </span>
                </Link>
              </Nav.Link>
            </Nav.Item>
  
            <Nav.Item>
              <Nav.Link >
              <img src = {CourseIcon} />
                <span className  = "text">
                Courses
                </span>
              </Nav.Link>
            </Nav.Item>
  
            <Nav.Item>
              <Nav.Link >
              <img src = {ProviderIcon} />
                <span className  = "text">
                Providers
                </span>
              </Nav.Link>
            </Nav.Item>
  
            <Nav.Item>
              <Nav.Link >
              <img src = {CertificateIcon} />
                <span className  = "text">
                Credentials
                </span>
              </Nav.Link>
            </Nav.Item>
  
            <Nav.Item>
              <Nav.Link >
              <img src = {VerifiedIcon} />
                <span className  = "text">
                Verify
                </span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Box>
      );
}

export default Sidebar;