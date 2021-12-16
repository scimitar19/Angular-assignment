import React from "react"
import { Button } from "react-bootstrap"
import Box from "../../components/Box"
import Style from './verify.module.scss'

const Verify: React.FC = ()=>{
    return(
      <Box className={`${Style.BoxContainer} raw`}>
          <Box className={`${Style.BoxUpload}`}>
                <h3>Drag and Drop here</h3>
                <h3>Or</h3>
                <h3 className={Style.Green}>Browse files</h3>
          </Box>
          <Button className={`${Style.updatedBtn}`} >Upload</Button>
      </Box>
    ) 
}

export default Verify