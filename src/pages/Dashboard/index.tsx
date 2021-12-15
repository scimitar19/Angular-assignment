import React from "react";
import Box from "../../components/Box";
import Heading from "../../components/Heading";
import Alert from "./Alert";
import Card from "./Card";
import DashboardCourses from "./Courses";
import Style from "./dashboard.module.scss";
const Dashboard : React.FC = (props) => {

    return (
       <>
        <Box className = "">
            <Alert />
            <Heading  text = "Dashboard"/>
            <Box className = "row">
                <Box className = "col-md-4">
                    <Card text = {'Add Provider'}/>
                </Box>
                <Box className = "col-md-4">
                    <Card text = {'Add Course'}/>
                </Box>
                <Box className = "col-md-4">
                    <Card text = {'Add Credential'}/>
                </Box>
            </Box>

            <Box className = "row">
                <Box className = "col-md-8">
                    <Heading  text = "Recently Added Courses" classes = {`${Style.midLevelHeading}`}/>
                    
                    <DashboardCourses/>
                </Box>
                <Box className = "col-md-4">
                
                </Box>
            </Box>
            
        </Box>
        <div className = "mb-5">Dasadasd</div>
        <div className = "mb-5">Dasadasd</div>
        <div className = "mb-5">Dasadasd</div>
        <div className = "mb-5">Dasadasd</div>
        <div className = "mb-5">Dasadasd</div>
        <div className = "mb-5">Dasadasd</div>
        <div className = "mb-5">Dasadasd</div>
        <div className = "mb-5">Dasadasd</div>
        <div className = "mb-5">Dasadasd</div>
        <div className = "mb-5">Dasadasd</div>
        <div className = "mb-5">Dasadasd</div>
        <div className = "mb-5">Dasadasd</div>
        <div className = "mb-5">Dasadasd</div>
        <div className = "mb-5">Dasadasd</div>
        <div className = "mb-5">Dasadasd</div>
        <div className = "mb-5">Dasadasd</div>
        <div className = "mb-5">Dasadasd</div>
        <div className = "mb-5">Dasadasd</div>
        <div className = "mb-5">Dasadasd</div>
        <div className = "mb-5">Dasadasd</div>
        <div className = "mb-5">Dasadasd</div>


       </>
    )
}

export default Dashboard;