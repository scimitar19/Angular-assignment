import React from "react";
import Box from "../../../components/Box";
import Style from "./card.module.scss";
import RightArrow from "./../../../assets/images/icons/rightArrow.svg"
interface Props {
    onClick ?: () => void;
    classes ?: string;
    text ?:string;
}
const Card : React.FC<Props> = ({onClick, classes, text}) => {

    return (
       <>
        <Box className = {`${classes} ${Style.card} d-flex justify-content-between`} onClick = {onClick}>
            <span className = {`${Style.text}`}>
                {text}
            </span>
            <img src={RightArrow} alt="" className = {`${Style.arrowImage}`}/>
        </Box>
       </>
    )
}

export default Card;