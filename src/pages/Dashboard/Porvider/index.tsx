import React from "react";
import Box from "../../../components/Box";
import Heading from "../../../components/Heading";
import Style from "./provider.module.scss";
const Provider: React.FC = (props) => {
  return (
    <>
      <Box className={`boxWithShadow ${Style.mainBox}`}>
        <Heading
          text="Latest Providers"
          classes={`appSubHeading  ${Style.heading}`}
        />
        <Box className={`${Style.rowOne}`}>
          <Box className={`${Style.one}`}>LinkedIn</Box>
          <Box className={`${Style.two}`}>
            <a className={`${Style.text}`}>
              Certificate in DeepLearning.AI TensorFlow
            </a>
          </Box>
        </Box>
        <Box className={`${Style.rowOne} ${Style.backgroundWhite}`}>
          <Box className={`${Style.one}`}>IBM</Box>
          <Box className={`${Style.two}`}>
            <a className={`${Style.text}`}>Certificate in IBM Cybersecurity </a>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Provider;
