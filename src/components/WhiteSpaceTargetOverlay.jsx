import React from "react";
import { createOverlayStyle } from "../SideMenu.styles";

export const WhiteSpaceTargetOverlay = ({ onClick, isHidden, style }) => {
    return (
        <div
            id="menu-whitespace-target"
            hidden={isHidden}
            onClick={onClick}
            style={style || createOverlayStyle()}
        ></div>
    );
};
