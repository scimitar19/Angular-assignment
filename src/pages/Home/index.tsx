import React from "react";
import { Button, Container,Form} from "react-bootstrap";
import Banner from '../../assets/images/home/cover.svg';
import Box from "../../components/Box";
import Layout from "../../components/Layout";

import Styles from "./home.module.scss";
const Home : React.FC = () => {

    return (
        <Layout>
            <Box className={Styles.bgLight}>
                  <Container>
                  <Box className={`${Styles.BannerContainer} w-50`}>
                            <Box className={Styles.BannerInnerContent} >
                                <Box className={Styles.BannerHeading}>
                                    Make your students' achievements last forever
                                </Box>
                                <Box className={`${Styles.BannerText}`}>
                                    Add blockchain verifiable certificates to your offer.                        
                                </Box>
                                <Box className="d-flex mt-3">
                                <Form.Control type="email" placeholder="Email Address" className="w-50 me-4" />
                                <Button  className={`${Styles.updateBtn} w-20`}>Get Updates</Button>
                                </Box>
                            </Box >
                    </Box>
                  </Container>
                    <Box className="w-50">
                        <img src={Banner} className={Styles.BannerImg} alt=""/>
                    </Box>
        </Box>
        </Layout>
    )
}

export default Home;