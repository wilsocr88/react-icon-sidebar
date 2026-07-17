export const defaultMenuColors = {
    background: "#f5f5f5",
    text: "inherit",
    hoverBackground: "rgba(0, 0, 0, 0.1)",
    groupHoverBackground: "rgba(0, 0, 0, 0.08)",
    activeText: "#66f",
    toggleHoverBackground: "rgba(0, 0, 0, 0.1)",
    toggleFocusOutline: "#66f",
    overlayBackground: "rgba(100,100,100,0.3)",
};

export const createSharedMenuStyle = colors => ({
    minHeight: "100%",
    margin: 0,
    padding: 0,
    position: "absolute",
    top: 0,
    right: 0,
    display: "inline-block",
    backgroundColor: colors.background,
    color: colors.text,
    zIndex: 998,
});

export const createMenuButtonStyle = () => ({
    marginLeft: "0.8rem",
    border: "none",
    backgroundColor: "transparent",
    color: "inherit",
    font: "inherit",
    cursor: "pointer",
    display: "inline-flex",
    position: "relative",
    top: "1rem",
    zIndex: 999,
});

export const createMenuButtonHoverStyle = colors => ({
    backgroundColor: colors.toggleHoverBackground,
});

export const createMenuButtonFocusStyle = colors => ({
    outline: `0.125rem solid ${colors.toggleFocusOutline}`,
    outlineOffset: "0.125rem",
});

export const topSpacerStyle = {
    height: "2.5em",
};

export const menuStyles = {
    mobile: {
        width: "18.75rem",
        maxWidth: "100%",
        boxShadow: "1px 1px 5px 1px #999",
        paddingTop: "2rem",
        transition: "ease-out 300ms",
    },
    compact: {
        width: "4.5rem",
    },
    full: {
        width: "13.5rem",
    },
};

export const overlayStyle = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    zIndex: 997,
    transition: "linear 300ms",
    cursor: "normal",
};
