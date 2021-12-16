import React from "react"
import { Button } from "react-bootstrap"
import Box from "../../components/Box"
import Style from './verify.module.scss'
import uploadIcon from '../../assets/icons/upload.svg'

const Verify: React.FC = ({children})=>{
    return(
      
      <Box className={`${Style.BoxContainer} raw`}>
          {children}
          <Box className={`${Style.BoxUpload}`}>
                <img src={uploadIcon} alt="" />
                <h3>Drag and Drop here</h3>
                <h3>Or</h3>
                <h3 className={Style.Green}>Browse files</h3>
          </Box>
          <Box className={`${Style.BoxInfo}`} >
            <small>Accepted file types: .png, .jpg, .jpg only</small>
            <small>
              Secured
            </small>
          </Box>
          <Button className={`${Style.updatedBtn}`} >Upload</Button>
      </Box>
    ) 
}

export default Verify