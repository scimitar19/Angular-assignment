import React from "react";
import Box from "../Box";
import "./heading.scss";
interface Props {
    classes ?: string;
    text ?:string
}
const Heading : React.FC<Props> = ({classes,text}) => {

    return (
       <>
        <Box className = {`${classes}`}>
            {text}
        </Box>
       </>
    )
}

export default Heading;