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

export const createStyles = colors => ({
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
            marginLeft: "2rem",
        },
        menuItemText: {
            ...sharedMenuItemText,
            fontSize: "1rem",
            display: "inline-block",
            whiteSpace: "nowrap",
            margin: "0 1rem 0 1rem",
        },
        groupList: {
            ...sharedGroupList,
        },
        groupListItem: {
            ...sharedGroupListItem,
            display: "block",
            padding: "0.35em 1rem",
            fontSize: "0.95rem",
            width: "100%",
            minWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
    },
    compact: {
        menuItem: {
            ...sharedMenuItem,
            width: "4.5rem",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
        },
        menuItemIcon: {
            ...sharedMenuItemIcon,
            display: "inline-flex",
        },
        menuItemText: {
            ...sharedMenuItemText,
            fontSize: "0.75rem",
            textOverflow: "wrap",
            margin: "0 1rem 0 1rem",
        },
        groupList: {
            ...sharedGroupList,
            position: "relative",
            left: "1rem",
            zIndex: 1000,
            backgroundColor: colors.background,
            boxShadow: "0 2px 4px #999",
            borderRadius: "4px",
            width: "max-content",
            minWidth: "max-content",
        },
        groupListItem: {
            ...sharedGroupListItem,
            padding: "0.3rem 1rem",
            display: "inline-flex",
            alignItems: "center",
            height: "fit-content",
            borderRadius: "0",
            width: "max-content",
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
            marginLeft: "2rem",
        },
        menuItemText: {
            ...sharedMenuItemText,
            fontSize: "1em",
            display: "inline-block",
            whiteSpace: "nowrap",
            margin: "0 1rem 0 1rem",
        },
        groupList: {
            ...sharedGroupList,
        },
        groupListItem: {
            ...sharedGroupListItem,
            display: "block",
            padding: "0.35rem 1rem",
            fontSize: "0.95rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
            minWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
    },
});
