import React, { useCallback, useEffect, useMemo, useState } from "react";
import MenuItem from "./components/MenuItem.jsx";
import { WhiteSpaceTargetOverlay } from "./components/WhiteSpaceTargetOverlay.jsx";
import { MdMenu } from "react-icons/md";
import { sharedMenuStyle, menuStyles, overlayStyle } from "./SideMenu.styles";
import "./SideMenu.css";

const MENU_MODES = ["mobile", "compact", "full"];
const MOBILE_BREAKPOINT = 768;
const DESKTOP_BREAKPOINT = 1360;
const RESIZE_DEBOUNCE_MS = 100;

const isValidMode = mode => MENU_MODES.includes(mode);

const getModeIndex = mode => MENU_MODES.indexOf(mode);

const getViewportMode = () => {
    if (typeof window === "undefined") {
        return "compact";
    }

    if (window.innerWidth <= MOBILE_BREAKPOINT) {
        return "mobile";
    }

    if (window.innerWidth <= DESKTOP_BREAKPOINT) {
        return "compact";
    }

    return "full";
};

const resolveMenuMode = (viewportMode, force, min, max) => {
    if (isValidMode(force)) {
        return force;
    }

    let resolvedMode = viewportMode;

    if (isValidMode(min) && getModeIndex(resolvedMode) < getModeIndex(min)) {
        resolvedMode = min;
    }

    if (isValidMode(max) && getModeIndex(resolvedMode) > getModeIndex(max)) {
        resolvedMode = max;
    }

    return resolvedMode;
};

const validateMenu = menu => {
    if (!Array.isArray(menu)) {
        return 'SideMenu: "menu" must be an array.';
    }

    for (let i = 0; i < menu.length; i += 1) {
        const item = menu[i];

        if (!item || typeof item !== "object") {
            return `SideMenu: menu[${i}] must be an object.`;
        }

        if (item.hr === true) {
            continue;
        }

        if (item.groupTitle) {
            if (
                typeof item.groupTitle !== "string" ||
                item.groupTitle.trim() === ""
            ) {
                return `SideMenu: menu[${i}] has an invalid groupTitle. If present, groupTitle must be a non-empty string.`;
            }
            if (
                !Array.isArray(item.groupItems) ||
                item.groupItems.length === 0
            ) {
                return `SideMenu: menu[${i}] has an invalid groupItems. If groupTitle is present, groupItems must be a non-empty array.`;
            }
            for (let j = 0; j < item.groupItems.length; j += 1) {
                const groupItem = item.groupItems[j];
                if (!groupItem || typeof groupItem !== "object") {
                    return `SideMenu: menu[${i}].groupItems[${j}] must be an object.`;
                }
                if (
                    typeof groupItem.text !== "string" ||
                    groupItem.text.trim() === ""
                ) {
                    return `SideMenu: menu[${i}].groupItems[${j}] requires a non-empty text string.`;
                }
                if (
                    (typeof groupItem.link !== "string" ||
                        groupItem.link.trim() === "") &&
                    (typeof groupItem.href !== "string" ||
                        groupItem.href.trim() === "")
                ) {
                    return `SideMenu: menu[${i}].groupItems[${j}] requires a non-empty link string.`;
                }
            }
            continue;
        }

        if (typeof item.text !== "string" || item.text.trim() === "") {
            return `SideMenu: menu[${i}] requires a non-empty text string when hr is not true.`;
        }

        if (
            (typeof item.link !== "string" || item.link.trim() === "") &&
            (typeof item.href !== "string" || item.href.trim() === "")
        ) {
            return `SideMenu: menu[${i}] requires a non-empty link string when hr is not true.`;
        }
    }

    return null;
};

const SideMenu = ({
    menu = [],
    force = "",
    min = "",
    max = "",
    showToggle = false,
}) => {
    const [viewportMode, setViewportMode] = useState(getViewportMode);
    const renderedMode = useMemo(
        () => resolveMenuMode(viewportMode, force, min, max),
        [viewportMode, force, min, max],
    );
    const [isHidden, setIsHidden] = useState(() => renderedMode === "mobile");
    const shouldShowToggle = showToggle || renderedMode === "mobile";

    useEffect(() => {
        if (import.meta.env.PROD) {
            return;
        }

        const validationMessage = validateMenu(menu);

        if (validationMessage) {
            console.error(validationMessage);
        }
    }, [menu]);

    const resize = useCallback(() => {
        setViewportMode(getViewportMode());
    }, []);

    const toggleMenu = useCallback(() => {
        setIsHidden(prevIsHidden => !prevIsHidden);
    }, []);

    const hideMenu = useCallback(() => {
        setIsHidden(true);
    }, []);

    const className = useMemo(
        () => (isHidden ? "menu hidden" : "menu"),
        [isHidden],
    );

    const menuStyle = useMemo(
        () => ({
            ...sharedMenuStyle,
            ...menuStyles[renderedMode],
            left: isHidden ? "-19.375rem" : 0,
        }),
        [isHidden, renderedMode],
    );

    const whiteSpaceTargetStyle = useMemo(
        () => ({
            backgroundColor: isHidden
                ? "rgba(0,0,0,0)"
                : "rgba(100,100,100,0.3)",
            ...overlayStyle,
        }),
        [isHidden],
    );

    useEffect(() => {
        setIsHidden(renderedMode === "mobile");
    }, [renderedMode]);

    useEffect(() => {
        if (typeof window === "undefined") {
            return undefined;
        }

        let resizeTimeoutId;

        const handleResize = () => {
            if (resizeTimeoutId) {
                window.clearTimeout(resizeTimeoutId);
            }

            resizeTimeoutId = window.setTimeout(resize, RESIZE_DEBOUNCE_MS);
        };

        window.addEventListener("resize", handleResize);
        resize();

        return () => {
            if (resizeTimeoutId) {
                window.clearTimeout(resizeTimeoutId);
            }

            window.removeEventListener("resize", handleResize);
        };
    }, [resize]);

    return (
        <>
            {shouldShowToggle ? (
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
            ) : null}
            <div className={className} id="menu" style={menuStyle}>
                {shouldShowToggle ? <div style={{ height: "2.5em" }} /> : null}
                {menu.map((item, index) => {
                    if (item.hr !== true) {
                        return (
                            <MenuItem
                                key={
                                    item.link ||
                                    item.href ||
                                    item.groupTitle ||
                                    item.text ||
                                    `menu-item-${index}`
                                }
                                id={index}
                                icon={item.icon}
                                text={item.text || item.groupTitle}
                                link={item.link || item.href}
                                groupItems={item.groupItems}
                                expanded={item.expanded}
                                mode={renderedMode}
                            />
                        );
                    }

                    return <hr key={`menu-separator-${index}`} />;
                })}
                <br />
            </div>
            {renderedMode === "mobile" ? (
                <WhiteSpaceTargetOverlay
                    onClick={hideMenu}
                    isHidden={isHidden}
                    style={whiteSpaceTargetStyle}
                />
            ) : null}
        </>
    );
};

export default SideMenu;
