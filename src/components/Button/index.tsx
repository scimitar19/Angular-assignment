
import Style from './Button.module.scss';
import React, { forwardRef, ReactNode } from "react";

export interface ButtonProps {
    id ?: string;
    onClick ?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    title?: string;
    classes?: string;
    icon?: ReactNode;
    buttonType ?: "button" | "submit" | "reset"; 
}

const DynamicButton = forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => {
    const { id, onClick, disabled, title, classes, icon } = props;
    return (
        <button
            ref={ref}
            id={id}
            className={`btn ${Style.dynamicBtn} ${classes}`}
            onClick={onClick}
            disabled={disabled}
        >
            {icon ? icon : ''} <span className = {icon ? `${Style.marginLeft}` : ``}>{title}</span>
        </button>
    )
})
export default DynamicButton;