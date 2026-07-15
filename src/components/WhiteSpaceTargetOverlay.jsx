import React from "react";
import { overlayStyle } from "../SideMenu.styles";

export const WhiteSpaceTargetOverlay = ({ onClick, isHidden, style }) => {
    return (
        <div
            id="menu-whitespace-target"
            hidden={isHidden}
            onClick={onClick}
            style={style || overlayStyle}
        ></div>
    );
};
