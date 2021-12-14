import React, { useState } from "react";
import   "./MainLayout.scss";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import Header from "../../Header";
import Sidebar from "../../Sidebar";

const MainLayout : React.FC = (props) => {
    const [open, setOpen] = useState (true)
    const toggleSidebar = () => {
        setOpen(!open)
    }
    return (
       <div className = "app">
       <Sidebar  isOpen = {open} toggle = {toggleSidebar}/>
        <Container
        fluid
        className={classNames("content", { "is-open": open })}
      >
        <Header isOpen = {open}  toggle = {toggleSidebar} />
        ssss
      </Container>
       </div>
    )
}

export default MainLayout;