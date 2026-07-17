import React, { memo, useEffect, useMemo, useState } from "react";
import { WhiteSpaceTargetOverlay } from "./WhiteSpaceTargetOverlay.jsx";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import {
    createInteractionStyles,
    createStyles,
    interactionStyles,
} from "./MenuItem.styles";

const compactGroupOverlayStyle = {
    position: "fixed",
    inset: 0,
    zIndex: 999,
    backgroundColor: "rgba(0,0,0,0)",
};

const getCurrentPath = () => {
    if (typeof window === "undefined") {
        return "";
    }

    return window.location.pathname;
};

const getStylesForMode = (mode, styles) => styles[mode] || styles.compact;

const hasMatchingLink = (items, currentPath) =>
    items.some(
        item =>
            item && (item.link === currentPath || item.href === currentPath),
    );

const getItemHref = item => item.link || item.href || "#";

const buildInteractiveStyle = ({
    baseStyle,
    isHovered,
    isActive,
    colorStyles,
    isGroupLink = false,
    isTitle = false,
}) => ({
    ...interactionStyles.interactiveReset,
    ...baseStyle,
    ...(isGroupLink
        ? {
              width: "max-content",
              display: "flex",
              alignItems: "center",
          }
        : null),
    ...(isGroupLink ? interactionStyles.groupLink : null),
    ...(isTitle ? interactionStyles.title : null),
    ...(isHovered && !isTitle
        ? isGroupLink
            ? colorStyles.groupItemHover
            : colorStyles.menuItemHover
        : null),
    ...(isActive && !isTitle ? colorStyles.active : null),
});

const MenuItem = ({
    id,
    icon: Icon,
    text,
    link,
    groupItems = [],
    expanded = false,
    isTitleItem = false,
    mode = "compact",
    align = "left",
    colors,
}) => {
    const resolvedStyles = useMemo(() => createStyles(colors), [colors]);
    const colorStyles = useMemo(
        () => createInteractionStyles(colors),
        [colors],
    );
    const menuStyles = getStylesForMode(mode, resolvedStyles);
    const hasGroupItems = groupItems.length > 0;
    const currentPath = getCurrentPath();
    const hasActiveGroupItem =
        hasGroupItems && hasMatchingLink(groupItems, currentPath);
    const [hoveredKey, setHoveredKey] = useState(null);
    const [isGroupExpanded, setIsGroupExpanded] = useState(
        (expanded || hasActiveGroupItem) && mode !== "compact",
    );
    const className = useMemo(
        () =>
            currentPath === link || hasActiveGroupItem
                ? "menu-item active"
                : "menu-item",
        [currentPath, hasActiveGroupItem, link],
    );
    const groupListStyle =
        mode === "compact"
            ? {
                  ...menuStyles.groupList,
                  ...(align === "right"
                      ? {
                            left: "auto",
                            right: "1rem",
                        }
                      : {
                            left: "1rem",
                            right: "auto",
                        }),
                  overflowX: "visible",
              }
            : menuStyles.groupList;

    const renderGroupItem = (groupItem, index) => {
        if (groupItem.hr === true) {
            return (
                <hr
                    key={`group-separator-${id}-${index}`}
                    style={interactionStyles.separator}
                />
            );
        }

        if (groupItem.isTitleItem) {
            return (
                <div
                    key={`group-title-${id}-${index}`}
                    id={`menu-item-${id}-${index}`}
                    className="menu-item menu-item-title"
                    style={buildInteractiveStyle({
                        baseStyle: menuStyles.groupListItem,
                        isHovered: false,
                        isActive: false,
                        colorStyles,
                        isTitle: true,
                    })}
                >
                    <div
                        className="menu-item-text"
                        style={menuStyles.menuItemText}
                    >
                        {groupItem.text}
                    </div>
                </div>
            );
        }

        const groupItemHref = getItemHref(groupItem);

        return renderItemAnchor(
            index,
            groupItemHref,
            "menu-item-group-link" +
                (groupItemHref === currentPath ? " active" : ""),
            menuStyles.groupListItem,
            groupItem.icon,
            groupItem.text,
            `group-link-${index}`,
            true,
        );
    };

    const renderItemAnchor = (
        index,
        itemLink,
        className,
        baseStyle,
        ItemIcon,
        itemText,
        hoverKey,
        isGroupLink = false,
    ) => {
        const isActive = className.includes("active");

        return (
            <a
                key={`${itemLink}-${index}`}
                id={"menu-item-" + id}
                className={className}
                href={itemLink || "#"}
                aria-current={className.includes("active") ? "page" : undefined}
                onMouseEnter={() => setHoveredKey(hoverKey)}
                onMouseLeave={() => setHoveredKey(null)}
                style={buildInteractiveStyle({
                    baseStyle,
                    isHovered: hoveredKey === hoverKey,
                    isActive,
                    colorStyles,
                    isGroupLink,
                })}
            >
                {ItemIcon && typeof ItemIcon === "function" ? (
                    <div
                        className="menu-item-icon"
                        style={menuStyles.menuItemIcon}
                    >
                        <ItemIcon size="2em" />
                    </div>
                ) : ItemIcon && typeof ItemIcon === "object" ? (
                    <div
                        className="menu-item-icon"
                        style={menuStyles.menuItemIcon}
                    >
                        {ItemIcon}
                    </div>
                ) : null}
                <div className="menu-item-text" style={menuStyles.menuItemText}>
                    {itemText}
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
                style={buildInteractiveStyle({
                    baseStyle: menuStyles.menuItem,
                    isHovered: false,
                    isActive: false,
                    colorStyles,
                    isTitle: true,
                })}
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
                        mode === "compact"
                            ? className
                            : "menu-item menu-item-group"
                    }
                    aria-haspopup="true"
                    aria-controls={groupId}
                    aria-expanded={isGroupExpanded}
                    style={buildInteractiveStyle({
                        baseStyle: {
                            ...menuStyles.menuItem,
                            cursor: "pointer",
                        },
                        isHovered: hoveredKey === "group-toggle",
                        isActive:
                            mode === "compact" && className.includes("active"),
                        colorStyles,
                    })}
                    onClick={() => setIsGroupExpanded(prev => !prev)}
                    onMouseEnter={() => setHoveredKey("group-toggle")}
                    onMouseLeave={() => setHoveredKey(null)}
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
                                style={compactGroupOverlayStyle}
                            />
                        )}
                        <div
                            id={groupId}
                            className="menu-item-group"
                            style={groupListStyle}
                        >
                            {groupItems.map(renderGroupItem)}
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
        "single-link",
    );
};

export default memo(MenuItem);
