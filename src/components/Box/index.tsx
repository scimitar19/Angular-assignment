import React from "react";
import { BoxClasses } from "./types";
const Box : React.FC<BoxClasses> = (props) => {

    return (
       <div className={props.className} style={props.style}>
        {props.children}
       </div>
    )
}

export default Box;