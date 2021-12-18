import React from "react";
import Box from "../../components/Box";
import DynamicButton from "../../components/Button";
import Heading from "../../components/Heading";
import CustomTable from "../../components/Table";
import coursesData from "./coursesData";
import AddOne from "./../../assets/images/icons/add-one.svg"
const conditionalRowStyles = [{}];

const CoursesView: React.FC = (props) => {

const columns = [
  {
    name: "Course name",
    selector: (row: { courseName: any; }) => row.courseName,
    sortable: true,
    conditionalCellStyles: [
      {
          when: (row: { title: any; }) => row.title ,
          style: {
              backgroundColor: 'rgba(63, 195, 128, 0.9)',
              color: 'white',
              '&:hover': {
                  cursor: 'pointer',
              },
          },
      },
     ],
  },
  
  {
    name: "Course ID",
    selector: (row: { courseId: any; }) => row.courseId,
    sortable: true
  },
  {
    name: "Provider",
    selector: (row: { provider: any; }) => row.provider,
    sortable: true,
    conditionalCellStyles: [
      {
          when: (row: { provider: any; }) => row.provider ,
          style: {
              color: "#048F46",
              
          },
      },
     ],
  },
  {
    name: "Signer",
    selector: (row: { singer: any; }) => row.singer,
    sortable: true,
    conditionalCellStyles: [
      {
          when: (row: { singer: any; }) => row.singer ,
          style: {
              color: "#8E8E8E",
              
          },
      },
     ],
  },
  {
    name: "Description",
    selector: (row: { describe: any; }) => row.describe,
    sortable: true,
    conditionalCellStyles: [
      {
          when: (row: { describe: any; }) => row.describe ,
          style: {
              color: "#B54A0E",
              
          },
      },
     ],
  },
  {
    name: "Status",
    selector: (row: { status: any; }) => row.status,
    sortable: true,
    conditionalCellStyles: [
      {
          when: (row: { status: any; }) => row.status == "Active" ,
          classNames: ['tableActiveStatus'],
          
      },
     ],
  }
];
  return (
    <>
      <Box style = {{marginBottom : "20px"}}>
        <Box className= {`d-md-flex justify-content-between align-items-center`}>
          <Heading text="Courses" classes={"heading"} />
          <DynamicButton title = "Add Course" icon = {<img src = {AddOne} className = "mr-2"/>}/>
        </Box>
        <CustomTable conditionalRowStyles ={conditionalRowStyles} columns = {columns} data = {coursesData}/>
        <Box style = {{height: "50px"}}>

        </Box>
      </Box>
    </>
  );
};

export default CoursesView;
