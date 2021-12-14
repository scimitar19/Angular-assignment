import React from "react";
import  "./sidebar.scss";
import { Nav, Button } from "react-bootstrap";
import Logo from "./../../assets/images/logo/Logo.svg"
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
            <h3>react-bootstrap sidebar</h3>
          </div>
  
          <Nav className="flex-column pt-2">
            <p className="ml-3">Heading</p>
  
            <Nav.Item className="active">
              <Nav.Link href="/">
                {/* <FontAwesomeIcon icon={faHome} className="mr-2" /> */}
                Home
              </Nav.Link>
            </Nav.Item>
  
            <Nav.Item>
              <Nav.Link href="/">
                {/* <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> */}
                About
              </Nav.Link>
            </Nav.Item>
  
            <Nav.Item>
              <Nav.Link href="/">
                {/* <FontAwesomeIcon icon={faImage} className="mr-2" /> */}
                Portfolio
              </Nav.Link>
            </Nav.Item>
  
            <Nav.Item>
              <Nav.Link href="/">
                {/* <FontAwesomeIcon icon={faQuestion} className="mr-2" /> */}
                FAQ
              </Nav.Link>
            </Nav.Item>
  
            <Nav.Item>
              <Nav.Link href="/">
                {/* <FontAwesomeIcon icon={faPaperPlane} className="mr-2" /> */}
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      );
}

export default Sidebar;