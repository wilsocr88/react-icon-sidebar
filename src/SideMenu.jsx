import React, { useCallback, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import MenuItem from "./components/MenuItem.jsx";
import { MdMenu } from "react-icons/md";
import "./SideMenu.css";

const MOBILE_BREAKPOINT = 768;

const getIsMobileViewport = () =>
    typeof window !== "undefined" && window.innerWidth <= MOBILE_BREAKPOINT;

const menuItemValidator = (props, propName, componentName) => {
    const menu = props[propName];

    if (!Array.isArray(menu)) {
        return new Error(`${componentName}: \"menu\" must be an array.`);
    }

    for (let i = 0; i < menu.length; i += 1) {
        const item = menu[i];

        if (!item || typeof item !== "object") {
            return new Error(`${componentName}: menu[${i}] must be an object.`);
        }

        if (item.hr === true) {
            continue;
        }

        if (!item.icon || typeof item.icon !== "function") {
            return new Error(
                `${componentName}: menu[${i}] requires an icon component when hr is not true.`,
            );
        }

        if (typeof item.text !== "string" || item.text.trim() === "") {
            return new Error(
                `${componentName}: menu[${i}] requires a non-empty text string when hr is not true.`,
            );
        }

        if (typeof item.link !== "string" || item.link.trim() === "") {
            return new Error(
                `${componentName}: menu[${i}] requires a non-empty link string when hr is not true.`,
            );
        }
    }

    return null;
};

const SideMenu = ({ menu = [] }) => {
    const [isMobileViewport, setIsMobileViewport] =
        useState(getIsMobileViewport);
    const [isHidden, setIsHidden] = useState(getIsMobileViewport);

    const resize = useCallback(() => {
        const isMobile = getIsMobileViewport();
        setIsMobileViewport(isMobile);
        setIsHidden(isMobile);
    }, []);

    const toggleMenu = useCallback(() => {
        if (isMobileViewport) {
            setIsHidden(prevIsHidden => !prevIsHidden);
        }
    }, [isMobileViewport]);

    const hideMenu = useCallback(() => {
        if (isMobileViewport) {
            setIsHidden(true);
        }
    }, [isMobileViewport]);

    const className = useMemo(
        () => (isHidden ? "menu hidden" : "menu"),
        [isHidden],
    );

    const whiteSpaceTargetStyle = useMemo(
        () => ({
            zIndex: isHidden ? 0 : 990,
            backgroundColor: isHidden
                ? "rgba(0,0,0,0)"
                : "rgba(100,100,100,0.3)",
        }),
        [isHidden],
    );

    useEffect(() => {
        if (typeof window === "undefined") {
            return undefined;
        }

        window.addEventListener("resize", resize);
        resize();

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, [resize]);

    return (
        <>
            <button
                type="button"
                className="menu-button"
                aria-label="Toggle menu"
                aria-controls="menu"
                aria-expanded={!isHidden}
                onClick={toggleMenu}
            >
                <MdMenu size="2em" />
            </button>
            <div className={className} id="menu">
                {menu.map((item, index) => {
                    if (item.hr !== true) {
                        return (
                            <MenuItem
                                key={
                                    item.link ||
                                    item.text ||
                                    `menu-item-${index}`
                                }
                                id={index}
                                icon={item.icon}
                                text={item.text}
                                link={item.link}
                            />
                        );
                    }

                    return <hr key={`menu-separator-${index}`} />;
                })}
                <br />
            </div>
            <div
                id="menu-whitespace-target"
                hidden={!isMobileViewport || isHidden}
                onClick={hideMenu}
                style={whiteSpaceTargetStyle}
            ></div>
        </>
    );
};

SideMenu.propTypes = {
    menu: menuItemValidator,
};

export default SideMenu;
