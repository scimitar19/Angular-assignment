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
import { useLocation } from 'react-router-dom';
import { StaticRoutesEnum } from "../../utils/Enums/Routes";

interface Props {
    isOpen ?: boolean;
    toggle ?: ()=>void
}

const Sidebar : React.FC<Props> = (props) => {
  const location = useLocation();
  console.log(location.pathname)
    return (
        <Box className={props?.isOpen ? `sidebar is-open ` :  'sidebar'}>
          <Box className="sidebar-header">
            <img src = {Logo} onClick={props?.toggle}/>
            {/* <Button
              variant="link"
              onClick={props?.toggle}
              style={{ color: "#fff" }}
              className="mt-4"
            >
              close
            </Button> */}
          </Box>
  
          <Nav className="flex-column pt-2" >
  
            <Nav.Item className = {location.pathname === StaticRoutesEnum.DAHBOARD ? 'active' : ''}>
              <Link to={ StaticRoutesEnum.DAHBOARD} className ="nav-link">
                <img src = {HomeIcon} />
                  <span className  = "text">
                    Home
                  </span>
              </Link>
            </Nav.Item>
  
            <Nav.Item className = {location.pathname === StaticRoutesEnum.COURSES ? 'active' : ''}>
              <Link to = {StaticRoutesEnum.COURSES} className ="nav-link">
              <img src = {CourseIcon} />
                <span className  = "text">
                Courses
                </span>
              </Link>
            </Nav.Item>
  
            <Nav.Item className = {location.pathname === StaticRoutesEnum.PROVIDER ? 'active' : ''}>
              <Link to = {StaticRoutesEnum.PROVIDER} className ="nav-link">
              <img src = {ProviderIcon} />
                <span className  = "text">
                Providers
                </span>
              </Link>
            </Nav.Item>
  
            <Nav.Item>
              <Link  to =""className ="nav-link">
              <img src = {CertificateIcon} />
                <span className  = "text">
                Credentials
                </span>
              </Link>
            </Nav.Item>
  
            <Nav.Item className = {location.pathname === StaticRoutesEnum.VERIFY ? 'active' : ''}>
              <Link to = {StaticRoutesEnum.VERIFY} className ="nav-link">
              <img src = {VerifiedIcon} />
                <span className  = "text">
                Verify
                </span>
              </Link>
            </Nav.Item>
          </Nav>
        </Box>
      );
}

export default Sidebar;