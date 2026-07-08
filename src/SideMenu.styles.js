export const sharedMenuStyle = {
    minHeight: "100%",
    margin: 0,
    padding: 0,
    position: "absolute",
    top: 0,
    right: 0,
    display: "inline-block",
    backgroundColor: "#f5f5f5",
    zIndex: 998,
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
        width: "12.5rem",
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
