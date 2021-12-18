import React from "react";
import Box from "../../components/Box";
import DynamicButton from "../../components/Button";
import Heading from "../../components/Heading";
import CustomTable from "../../components/Table";
import coursesData from "./ProviderData";
import AddOne from "./../../assets/images/icons/add-one.svg"
const conditionalRowStyles = [{}];

const ProviderView: React.FC = (props) => {

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
    name: "ID",
    selector: (row: { ID: any; }) => row.ID,
    sortable: true,
    conditionalCellStyles: [
      {
          when: (row: { ID: any; }) => row.ID ,
          style: {
              color: "#048F46",
          },
         
      },
     ],
  },
  {
    name: "Phone Number",
    selector: (row: { PhoneNumber: any; }) => row.PhoneNumber,
    sortable: true,
    conditionalCellStyles: [
      {
          when: (row: { PhoneNumber: any; }) => row.PhoneNumber ,
          style: {
            color: "#8E8E8E",
            
        },
      },
     ],
  },
  {
    name: "Email",
    selector: (row: { Email: any; }) => row.Email,
    sortable: true,
    conditionalCellStyles: [
      {
          when: (row: { Email: any; }) => row.Email ,
          style: {
              color: "#8E8E8E",
              
          },
      },
     ],
  },
  {
    name: "Number of Credentials Created",
    selector: (row: { Credentials: any; }) => row.Credentials,
    sortable: true,
    conditionalCellStyles: [
      {
          when: (row: { Credentials: any; }) => row.Credentials ,
          style: {
              fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "20px",
            color: "#1F3FA9",
            textDecoration : "underline"
              
          },
      },
     ],
  }
 
];
  return (
    <>
      <Box style = {{marginBottom : "20px"}}>
        <Box className= {`d-md-flex justify-content-between align-items-center`}>
          <Heading text="Providers" classes={"heading"} />
          <DynamicButton title = "Add Provider" icon = {<img src = {AddOne} className = "mr-2"/>}/>
        </Box>
        <CustomTable conditionalRowStyles ={conditionalRowStyles} columns = {columns} data = {coursesData}/>
        <Box style = {{height: "50px"}}>

        </Box>
      </Box>
    </>
  );
};

export default ProviderView;
