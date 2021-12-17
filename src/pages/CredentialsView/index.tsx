import React from "react";
import Box from "../../components/Box";
import DynamicButton from "../../components/Button";
import Heading from "../../components/Heading";
import CustomTable from "../../components/Table";
import coursesData from "./coursesData.js";
import AddOne from "./../../assets/images/icons/add-one.svg"
const conditionalRowStyles = [{}];

const CredentialsView: React.FC = (props) => {

const columns = [
  {
    name: "Provider",
    selector: (row: { Provider: any; }) => row.Provider,
    sortable: true,
    conditionalCellStyles: [
      {
          when: (row: { Provider: any; }) => row.Provider ,
          style: {
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "20px",
            color: "#152536",
          },
      },
     ],
  },
  {
    name: "Credential ID",
    selector: (row: { CredentialID: any; }) => row.CredentialID,
    sortable: true,
   
  },
  
  {
    name: "Course ID",
    selector: (row: { courseId: any; }) => row.courseId,
    sortable: true,
    conditionalCellStyles: [
      {
          when: (row: { courseId: any; }) => row.courseId ,
          style: {
              color: "#048F46",
              
          },
      },
     ],
  },
  {
    name: "User Name",
    selector: (row: { UserName: any; }) => row.UserName,
    sortable: true,
    conditionalCellStyles: [
      {
          when: (row: { UserName: any; }) => row.UserName ,
          style: {
              color: "#8E8E8E",
              
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
            color: "#B54A0E",
          },
      },
     ],
  },
  {
    name: "Digital Signature",
    selector: (row: { DigitalSignature: any; }) => row.DigitalSignature,
    width : "170px",
    conditionalCellStyles: [
      {
          when: (row: { DigitalSignature: any; }) => row.DigitalSignature ,
          style: {
            padding : "0px"
          },
      },
     ],

  },
  {
    name: "Status",
    selector: (row: { status: any; }) => row.status,
    sortable: true,
    width : "100px",

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
        <Box className= {`d-flex justify-content-between align-items-center`}>
          <Heading text="Credentials" classes={"heading"} />
          <DynamicButton title = "Issue Credential" icon = {<img src = {AddOne} className = "mr-2"/>}/>
        </Box>
        <CustomTable conditionalRowStyles ={conditionalRowStyles} columns = {columns} data = {coursesData}/>
        <Box style = {{height: "50px"}}>

        </Box>
      </Box>
    </>
  );
};

export default CredentialsView;
