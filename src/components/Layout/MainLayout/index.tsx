import React, { useState } from "react";
import   "./MainLayout.scss";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import Box from "../../Box";

const MainLayout : React.FC = (props) => {
    const [open, setOpen] = useState (true)
    const toggleSidebar = () => {
        setOpen(!open)
    }
    return (
       <Box className = "app">
       <Sidebar  isOpen = {open} toggle = {toggleSidebar}/>
        <Container
        fluid
        className={classNames("content", { "is-open": open })}
      >
        <Header isOpen = {open}  toggle = {toggleSidebar} />
          <Box className = "innerSection">
              {props?.children}
          </Box>
      </Container>
       </Box>
    )
}

export default MainLayout;