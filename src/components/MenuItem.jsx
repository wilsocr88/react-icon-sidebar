import React, { memo, useEffect, useMemo, useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
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

const sharedGroupList = {
    display: "flex",
    flexDirection: "column",
    marginTop: "1em",
};

const sharedGroupListItem = {
    color: "inherit",
    textDecoration: "none",
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
        groupList: {
            ...sharedGroupList,
            width: "100%",
        },
        groupListItem: {
            ...sharedGroupListItem,
            display: "block",
            padding: "0.35em 1em",
            fontSize: "0.95em",
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
        groupList: {
            ...sharedGroupList,
            width: "100%",
            alignItems: "center",
        },
        groupListItem: {
            ...sharedGroupListItem,
            display: "block",
            padding: "0.2em 0",
            fontSize: "0.72em",
            textAlign: "center",
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
        groupList: {
            ...sharedGroupList,
            width: "100%",
        },
        groupListItem: {
            ...sharedGroupListItem,
            display: "block",
            padding: "0.35em 1em",
            fontSize: "0.95em",
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
    mode = "compact",
}) => {
    const menuStyles = getStylesForMode(mode);
    const hasGroupItems = groupItems.length > 0;
    const currentPath = getCurrentPath();
    const hasActiveGroupItem =
        hasGroupItems && hasMatchingLink(groupItems, currentPath);
    const [isGroupExpanded, setIsGroupExpanded] = useState(
        expanded || hasActiveGroupItem,
    );
    const className = useMemo(
        () =>
            getCurrentPath() === link || hasActiveGroupItem
                ? "menu-item active"
                : "menu-item",
        [hasActiveGroupItem, link],
    );

    useEffect(() => {
        if (hasActiveGroupItem) {
            setIsGroupExpanded(true);
        }
    }, [hasActiveGroupItem]);

    const renderItemAnchor = (index, link, className, style, Icon, text) => (
        <a
            key={`${link}-${index}`}
            id={"menu-item-" + id}
            className={className}
            href={link || "#"}
            aria-current={className.includes("active") ? "page" : undefined}
            style={style}
        >
            <div className="menu-item-icon" style={menuStyles.menuItemIcon}>
                {Icon ? <Icon size="2em" /> : null}
            </div>
            <div className="menu-item-text" style={menuStyles.menuItemText}>
                {text}
            </div>
        </a>
    );

    if (hasGroupItems) {
        const groupId = `menu-item-group-${id}`;

        return (
            <>
                <button
                    id={"menu-item-" + id}
                    type="button"
                    className={className}
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
                    <div
                        id={groupId}
                        className="menu-item-group"
                        style={menuStyles.groupList}
                    >
                        {groupItems.map((groupItem, index) => {
                            const groupItemHref = getItemHref(groupItem);
                            const isActive = groupItemHref === currentPath;

                            return renderItemAnchor(
                                index,
                                groupItemHref,
                                isActive
                                    ? "menu-item-group-link menu-item-group-link-active"
                                    : "menu-item-group-link",
                                menuStyles.groupListItem,
                                null,
                                groupItem.text,
                            );
                        })}
                    </div>
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
