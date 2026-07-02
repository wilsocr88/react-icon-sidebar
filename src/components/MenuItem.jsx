import React, { memo, useMemo } from "react";
import "./MenuItem.css";

const getCurrentPath = () => {
    if (typeof window === "undefined") {
        return "";
    }

    return window.location.pathname;
};

const MenuItem = ({ id, icon: Icon, text, link }) => {
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
        >
            <div className="menu-item-icon">
                {Icon ? <Icon size="2em" /> : null}
            </div>
            <div className="menu-item-text">{text}</div>
        </a>
    );
};

export default memo(MenuItem);
