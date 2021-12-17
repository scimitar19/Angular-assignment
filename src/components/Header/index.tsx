import React from "react";
import { Navbar, Button, Nav } from "react-bootstrap";
import Box from "../Box";
import Style from "./header.module.scss";
import ProfileImage from "./../../assets/images/profile.png"
import SearchIcon from "./../../assets/images/icons/search.svg"
interface Props {
  isOpen?: boolean;
  toggle?: () => void;
}
const Header: React.FC<Props> = (props) => {
  return (
    <Navbar
      bg="light"
      className={`navbar p-3 bg-white ${Style.MainLayoutNavbar}`}
      expand
    >
      <Button
        variant="outline-info"
        onClick={props?.toggle}
        className={`${Style.expandIcon}`}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20" stroke="#048F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 12H20" stroke="#048F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 18H20" stroke="#048F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

      </Button>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className = {`justify-content-between`}>
        <Box className = {`${Style.searchMainDiv}`} >
          <input type="text" placeholder="Search" className = {`${Style.searchFiled}`} />
          <img src={SearchIcon} alt="" className = {`${Style.searchImage}`} />
        </Box>

        <Box className = {`${Style.profileImageMainDiv}`}>
            <span className ={`${Style.profileImageText}`}>
              milenca v.
            </span>
            <img src={ProfileImage} alt="" className = {`${Style.profileImage}`}  onClick={props?.toggle}/>
        </Box>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
