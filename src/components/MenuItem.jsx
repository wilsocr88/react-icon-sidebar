import React, { memo, useMemo } from "react";
import "./MenuItem.css";

const sharedMenuItem = {
    padding: "8px 0 8px",
    outline: 0,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    color: "inherit",
    textDecoration: "none",
    position: "relative",
    top: "16px",
};

const sharedMenuItemIcon = {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    verticalAlign: "middle",
    stroke: "none",
};

const sharedMenuItemText = {
    maxWidth: "100%",
    maxHeight: "1.4rem",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontWeight: 400,
    lineHeight: "1.4rem",
    verticalAlign: "middle",
};

const styles = {
    mobile: {
        menuItem: {
            ...sharedMenuItem,
            width: "100%",
            flexDirection: "row",
            justifyContent: "flex-start",
        },
        menuItemIcon: {
            ...sharedMenuItemIcon,
            display: "inline-block",
            whiteSpace: "nowrap",
            marginLeft: "2em",
        },
        menuItemText: {
            ...sharedMenuItemText,
            fontSize: "1em",
            display: "inline-block",
            whiteSpace: "nowrap",
            margin: "0 1em 0 1em",
        },
    },
    compact: {
        menuItem: {
            ...sharedMenuItem,
            width: "4.5em",
            flexDirection: "column",
            justifyContent: "center",
        },
        menuItemIcon: {
            ...sharedMenuItemIcon,
            display: "inline-flex",
        },
        menuItemText: {
            ...sharedMenuItemText,
            fontSize: "0.75em",
            whiteSpace: "nowrap",
        },
    },
    full: {
        menuItem: {
            ...sharedMenuItem,
            width: "100%",
            flexDirection: "row",
            justifyContent: "flex-start",
        },
        menuItemIcon: {
            ...sharedMenuItemIcon,
            display: "inline-block",
            whiteSpace: "nowrap",
            marginLeft: "2em",
        },
        menuItemText: {
            ...sharedMenuItemText,
            fontSize: "1em",
            display: "inline-block",
            whiteSpace: "nowrap",
            margin: "0 1em 0 1em",
        },
    },
};

const getCurrentPath = () => {
    if (typeof window === "undefined") {
        return "";
    }

    return window.location.pathname;
};

const getStylesForMode = mode => styles[mode] || styles.compact;

const MenuItem = ({ id, icon: Icon, text, link, mode = "compact" }) => {
    const menuStyles = getStylesForMode(mode);
    const className = useMemo(
        () => (getCurrentPath() === link ? "menu-item active" : "menu-item"),
        [link],
    );

    return (
        <a
            id={"menu-item-" + id}
            className={className}
            href={link || "#"}
            aria-current={className.includes("active") ? "page" : undefined}
            style={menuStyles.menuItem}
        >
            <div className="menu-item-icon" style={menuStyles.menuItemIcon}>
                {Icon ? <Icon size="2em" /> : null}
            </div>
            <div className="menu-item-text" style={menuStyles.menuItemText}>
                {text}
            </div>
        </a>
    );
};

export default memo(MenuItem);
