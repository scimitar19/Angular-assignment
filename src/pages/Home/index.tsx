import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from '../../assets/images/home/cover.svg';
import Box from "../../components/Box";
import Styles from "./home.module.scss";
const Home : React.FC = () => {

    return (
        <Box className={Styles.bgLight}>
                  <Box className={`${Styles.BannerContainer} w-50`}>
                            <Box className={Styles.BannerInnerContent} >
                            <Box className={Styles.BannerHeading}>
                            Make your students' achievements last forever
                            </Box>
                            <Box className={Styles.BannerText}>
                            Add blockchain verifiable certificates to your offer.                        
                            </Box>
                            </Box >
                    </Box>
                    <Box className="w-50">
                        <img src={Banner} className={Styles.BannerImg} alt=""/>
                    </Box>
        </Box>
    )
}

export default Home;