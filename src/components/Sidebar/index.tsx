import React from "react";
import  "./sidebar.scss";
import { Nav, Button } from "react-bootstrap";
import Logo from "./../../assets/images/logo/Logo.svg";
import HomeIcon from "./../../assets/images/icons/home.svg"
import CertificateIcon from "./../../assets/images/icons/certificate.svg"
import CourseIcon from "./../../assets/images/icons/course.svg"
import ProviderIcon from "./../../assets/images/icons/provider.svg"
import VerifiedIcon from "./../../assets/images/icons/Verified.svg"

interface Props {
    isOpen ?: boolean;
    toggle ?: ()=>void
}

const Sidebar : React.FC<Props> = (props) => {
    return (
        <div className={props?.isOpen ? `sidebar is-open ` :  'sidebar'}>
          <div className="sidebar-header">
            <img src = {Logo} />

            <Button
              variant="link"
              onClick={props?.toggle}
              style={{ color: "#fff" }}
              className="mt-4"
            >
              {/* <FontAwesomeIcon icon={faTimes} pull="right" size="xs" /> */}
              close
            </Button>
          </div>
  
          <Nav className="flex-column pt-2">
  
            <Nav.Item className="active">
              <Nav.Link href="/">
                <img src = {HomeIcon} />
                <span className  = "text">
                  Home
                </span>
              </Nav.Link>
            </Nav.Item>
  
            <Nav.Item>
              <Nav.Link href="/">
              <img src = {CourseIcon} />
                <span className  = "text">
                Courses
                </span>
              </Nav.Link>
            </Nav.Item>
  
            <Nav.Item>
              <Nav.Link href="/">
              <img src = {ProviderIcon} />
                <span className  = "text">
                Providers
                </span>
              </Nav.Link>
            </Nav.Item>
  
            <Nav.Item>
              <Nav.Link href="/">
              <img src = {CertificateIcon} />
                <span className  = "text">
                Credentials
                </span>
              </Nav.Link>
            </Nav.Item>
  
            <Nav.Item>
              <Nav.Link href="/">
              <img src = {VerifiedIcon} />
                <span className  = "text">
                Verify
                </span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      );
}

export default Sidebar;