import React, { useEffect, useState } from "react";
import   "./MainLayout.scss";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import Box from "../../Box";
import useWindowDimensions from "../../../hooks";

const MainLayout : React.FC = (props) => {
    const [open, setOpen] = useState (true);
    const { height, width } = useWindowDimensions();

    const toggleSidebar = () => {
        setOpen(!open)
    }

    useEffect (()=>{
      if (width < 900) {
        setOpen (false)
      } else {
        setOpen (true)

      }

    },[width])
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