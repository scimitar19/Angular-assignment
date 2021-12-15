import React from "react";
import Box from "../../../components/Box";
import Style from "./courses.module.scss";
const DashboardCourses: React.FC = (props) => {
  return (
    <>
      <Box className={``}>
        <Box className={`${Style.featureCardMain}`} id="style-1">
          <Box className={`${Style.featureCard}`}>
            <Box className={`${Style.text}`}>
              DeepLearning.AI TensorFlow Developer Professional Certificate
            </Box>
            <Box className={`${Style.heading}`}>Google</Box>
          </Box>

          <Box className={`${Style.featureCard}`}>
            <Box className={`${Style.text}`}>
              IBM Data Science Professional Certificate{" "}
            </Box>
            <Box className={`${Style.heading}  ${Style.colorBlue}`}>IBM</Box>
          </Box>

          <Box className={`${Style.featureCard}`}>
            <Box className={`${Style.text}`}>
              Facebook Social Media Marketing Professional Certificate{" "}
            </Box>
            <Box className={`${Style.heading} ${Style.colorBlue}`}>Facebook</Box>
          </Box>

          <Box className={`${Style.featureCard}`}>
            <Box className={`${Style.text}`}>
              DeepLearning.AI TensorFlow Developer Professional Certificate
            </Box>
            <Box className={`${Style.heading}`}>Google</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DashboardCourses;
