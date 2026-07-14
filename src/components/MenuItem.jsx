import React, { memo, useEffect, useMemo, useState } from "react";
import { WhiteSpaceTargetOverlay } from "./WhiteSpaceTargetOverlay.jsx";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { styles } from "./MenuItem.styles";
import "./MenuItem.css";

const getCurrentPath = () => {
    if (typeof window === "undefined") {
        return "";
    }

    return window.location.pathname;
};

const getStylesForMode = mode => styles[mode] || styles.compact;

const hasMatchingLink = (items, currentPath) =>
    items.some(
        item =>
            item && (item.link === currentPath || item.href === currentPath),
    );

const getItemHref = item => item.link || item.href || "#";

const MenuItem = ({
    id,
    icon: Icon,
    text,
    link,
    groupItems = [],
    expanded = false,
    isTitleItem = false,
    mode = "compact",
}) => {
    const menuStyles = getStylesForMode(mode);
    const hasGroupItems = groupItems.length > 0;
    const currentPath = getCurrentPath();
    const hasActiveGroupItem =
        hasGroupItems && hasMatchingLink(groupItems, currentPath);
    const [isGroupExpanded, setIsGroupExpanded] = useState(
        (expanded || hasActiveGroupItem) && mode !== "compact",
    );
    const className = useMemo(
        () =>
            getCurrentPath() === link || hasActiveGroupItem
                ? "menu-item active"
                : "menu-item",
        [hasActiveGroupItem, link],
    );

    const renderItemAnchor = (index, link, className, style, Icon, text) => {
        return (
            <a
                key={`${link}-${index}`}
                id={"menu-item-" + id}
                className={className}
                href={link || "#"}
                aria-current={className.includes("active") ? "page" : undefined}
                style={style}
            >
                {Icon && typeof Icon === "function" ? (
                    <div
                        className="menu-item-icon"
                        style={menuStyles.menuItemIcon}
                    >
                        <Icon size="2em" />
                    </div>
                ) : Icon && typeof Icon === "object" ? (
                    <div
                        className="menu-item-icon"
                        style={menuStyles.menuItemIcon}
                    >
                        {Icon}
                    </div>
                ) : null}
                <div className="menu-item-text" style={menuStyles.menuItemText}>
                    {text}
                </div>
            </a>
        );
    };

    useEffect(() => {
        if (hasActiveGroupItem && mode !== "compact") {
            setIsGroupExpanded(true);
        }
    }, [hasActiveGroupItem]);

    if (isTitleItem) {
        return (
            <div
                id={"menu-item-" + id}
                className="menu-item menu-item-title"
                style={menuStyles.menuItem}
            >
                <div className="menu-item-text" style={menuStyles.menuItemText}>
                    {text}
                </div>
            </div>
        );
    }

    if (hasGroupItems) {
        const groupId = `menu-item-group-${id}`;

        return (
            <>
                <button
                    id={"menu-item-" + id}
                    type="button"
                    className={
                        (mode === "compact"
                            ? className
                            : "menu-item menu-item-group") + " pointer"
                    }
                    aria-haspopup="true"
                    aria-controls={groupId}
                    aria-expanded={isGroupExpanded}
                    style={menuStyles.menuItem}
                    onClick={() => setIsGroupExpanded(prev => !prev)}
                >
                    <div
                        className="menu-item-icon"
                        style={menuStyles.menuItemIcon}
                    >
                        {Icon ? <Icon size="2em" /> : null}
                    </div>
                    <div
                        className="menu-item-text"
                        style={menuStyles.menuItemText}
                    >
                        {text}
                    </div>
                    {isGroupExpanded ? (
                        <MdExpandLess size="1.5em" />
                    ) : (
                        <MdExpandMore size="1.5em" />
                    )}
                </button>
                {isGroupExpanded ? (
                    <>
                        {mode === "compact" && (
                            <WhiteSpaceTargetOverlay
                                onClick={() => setIsGroupExpanded(false)}
                                isHidden={!isGroupExpanded}
                            />
                        )}
                        <div
                            id={groupId}
                            className="menu-item-group"
                            style={menuStyles.groupList}
                        >
                            {groupItems.map((groupItem, index) => {
                                const groupItemHref = getItemHref(groupItem);

                                return renderItemAnchor(
                                    index,
                                    groupItemHref,
                                    "menu-item-group-link" +
                                        (groupItemHref === currentPath
                                            ? " active"
                                            : ""),
                                    menuStyles.groupListItem,
                                    null,
                                    groupItem.text,
                                );
                            })}
                        </div>
                    </>
                ) : null}
            </>
        );
    }

    return renderItemAnchor(
        id,
        link,
        className,
        menuStyles.menuItem,
        Icon,
        text,
    );
};

export default memo(MenuItem);
