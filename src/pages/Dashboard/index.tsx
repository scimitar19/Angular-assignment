import React from "react";
import Box from "../../components/Box";
import Heading from "../../components/Heading";
import Alert from "./Alert";
import Card from "./Card";
import DashboardCourses from "./Courses";
import Style from "./dashboard.module.scss";
import Provider from "./Porvider";
const Dashboard : React.FC = (props) => {

    return (
       <>
        <Box className = "">
            <Alert />
            <Heading  text = "Dashboard" classes = {'heading'}/>
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
                    <Heading  text = "Recently Added Courses" classes = {`appSubHeading`}/>
                    
                    <DashboardCourses/>

                    <Provider/>


                </Box>
                <Box className = "col-md-4">
                    <Box className={`boxWithShadow ${Style.sideBox}`}>
                        <Heading text="Number of credentials sent" classes = {`appSubHeading text-center`} />
                    </Box>
                </Box>
            </Box>
            
        </Box>
        
       </>
    )
}

export default Dashboard;