import React from "react";
import { BoxClasses } from "./types";

const Box : React.FC<BoxClasses> = (props) => {

    return (
       <div className={props.className} style={props.style} onClick = {props.onClick}>
        {props.children}
       </div>
    )
}

export default Box;