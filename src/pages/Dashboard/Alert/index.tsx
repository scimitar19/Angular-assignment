import React from "react";
import Box from "../../../components/Box";
const Alert : React.FC = (props) => {

    return (
       <>
        <Box className = {`successAlert`}>
        Almost done. Please click the link that has been sent to your email account to verify your email to finish your registration process. Send Again.
        </Box>
       </>
    )
}

export default Alert;