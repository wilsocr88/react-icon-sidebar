import { createZIndexLayers } from "../zIndex";

const sharedMenuItem = {
    padding: "8px 0 8px",
    outline: 0,
    display: "flex",
    alignItems: "center",
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
    overflow: "hidden",
    textOverflow: "ellipsis",
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

export const interactionStyles = {
    interactiveReset: {
        color: "inherit",
        textDecoration: "none",
        border: 0,
        backgroundColor: "transparent",
        font: "inherit",
        textAlign: "left",
    },
    groupLink: {
        borderRadius: "0.25rem",
    },
    title: {
        fontWeight: "bold",
    },
    separator: {
        marginTop: "2rem",
        borderTopWidth: "0",
        borderBottom: "1px solid rgba(30, 41, 59, 0.15)",
        width: "100%",
    },
};

export const createInteractionStyles = colors => ({
    menuItemHover: {
        backgroundColor: colors.hoverBackground,
    },
    groupItemHover: {
        backgroundColor: colors.groupHoverBackground,
    },
    active: {
        color: colors.activeText,
    },
});

export const createSeparatorStyle = (colors, compact = false) => ({
    ...interactionStyles.separator,
    ...(compact ? { marginTop: "1rem" } : null),
    borderBottom: `1px solid ${
        colors && colors.separatorColor
            ? colors.separatorColor
            : "rgba(30, 41, 59, 0.15)"
    }`,
});

export const createStyles = (
    colors,
    zIndexLayers = createZIndexLayers(),
    compact = false,
) => {
    const menuItem = {
        ...sharedMenuItem,
        ...(compact ? { padding: "4px 0", top: "8px" } : null),
    };
    const menuItemIcon = {
        ...sharedMenuItemIcon,
        ...(compact ? { fontSize: "0.75em" } : null),
    };
    const menuItemText = {
        ...sharedMenuItemText,
        margin: compact ? "0 0.5rem" : "0 1rem 0 1rem",
    };
    const groupList = {
        ...sharedGroupList,
        ...(compact ? { marginTop: "0.5em" } : null),
    };

    return {
        mobile: {
            menuItem: {
                ...menuItem,
                width: "100%",
                flexDirection: "row",
                justifyContent: "flex-start",
            },
            menuItemIcon: {
                ...menuItemIcon,
                display: "inline-block",
                whiteSpace: "nowrap",
                marginLeft: compact ? "1rem" : "2rem",
            },
            menuItemText: {
                ...menuItemText,
                fontSize: "1rem",
                display: "inline-block",
                whiteSpace: "nowrap",
            },
            groupList: {
                ...groupList,
            },
            groupListItem: {
                ...sharedGroupListItem,
                display: "block",
                padding: compact ? "0.2em 0.5rem" : "0.35em 1rem",
                fontSize: "0.95rem",
                width: "100%",
                minWidth: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
            },
        },
        medium: {
            menuItem: {
                ...menuItem,
                width: "4.5rem",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
            },
            menuItemIcon: {
                ...menuItemIcon,
                display: "inline-flex",
            },
            menuItemText: {
                ...menuItemText,
                fontSize: "0.75rem",
                textOverflow: "wrap",
            },
            groupList: {
                ...groupList,
                left: "1rem",
                zIndex: zIndexLayers.groupList,
                backgroundColor: colors.background,
                boxShadow: "0 2px 4px #999",
                borderRadius: "4px",
                width: "max-content",
                minWidth: "max-content",
            },
            groupListItem: {
                ...sharedGroupListItem,
                padding: compact ? "0.2rem 0.5rem" : "0.3rem 1rem",
                display: "flex",
                alignItems: "center",
                height: "fit-content",
                borderRadius: "0",
                width: "100%",
            },
        },
        full: {
            menuItem: {
                ...menuItem,
                width: "100%",
                flexDirection: "row",
                justifyContent: "flex-start",
            },
            menuItemIcon: {
                ...menuItemIcon,
                display: "inline-block",
                whiteSpace: "nowrap",
                marginLeft: compact ? "1rem" : "2rem",
            },
            menuItemText: {
                ...menuItemText,
                fontSize: "1em",
                display: "inline-block",
                whiteSpace: "nowrap",
            },
            groupList: {
                ...groupList,
            },
            groupListItem: {
                ...sharedGroupListItem,
                display: "block",
                padding: compact ? "0.2rem 0.5rem" : "0.35rem 1rem",
                fontSize: "0.95rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "100%",
                minWidth: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
            },
        },
    };
};
