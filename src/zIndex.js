export const DEFAULT_Z_INDEX = 998;

export const isValidZIndexValue = value =>
    typeof value === "number" && Number.isFinite(value);

// All layers derive from a single base so the stacking order is always
// preserved: backdrop overlay < menu < toggle/group click-out < group popup.
export const createZIndexLayers = zIndex => {
    const base = isValidZIndexValue(zIndex) ? zIndex : DEFAULT_Z_INDEX;

    return {
        overlay: base - 1,
        menu: base,
        toggle: base + 1,
        groupOverlay: base + 1,
        groupList: base + 2,
    };
};
