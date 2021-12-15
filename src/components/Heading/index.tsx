import React from "react";
import Box from "../Box";
import Style from "./heading.module.scss";
interface Props {
    classes ?: string;
    text ?:string
}
const Heading : React.FC<Props> = ({classes,text}) => {

    return (
       <>
        <Box className = {`${classes}  ${Style.heading} `}>
            {text}
        </Box>
       </>
    )
}

export default Heading;