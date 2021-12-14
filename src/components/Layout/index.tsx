import React from "react";
import Menu from "./../Navbar";
const Layout : React.FC = (props) => {

    return (
       <>
       <Menu/>

       {props.children}
       </>
    )
}

export default Layout;