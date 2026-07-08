import React from "react";
import { overlayStyle } from "../SideMenu.styles";

export const WhiteSpaceTargetOverlay = ({ onClick, isHidden }) => {
    return (
        <div
            id="menu-whitespace-target"
            hidden={isHidden}
            onClick={onClick}
            style={overlayStyle}
        ></div>
    );
};
