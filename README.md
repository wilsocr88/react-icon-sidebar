# React Icon Sidebar

![license](https://img.shields.io/npm/l/react-icon-sidebar)
![version](https://img.shields.io/npm/v/react-icon-sidebar)

A responsive, iconographic sidebar menu for React apps.

The menu supports three rendered modes, from smallest to largest: `mobile`, `compact`, and `full`.

The rendered mode normally follows the viewport, but it can also be controlled with props:

- `force` locks the menu to a single mode: `mobile`, `compact`, or `full`.
- `min` sets the minimum rendered mode.
- `max` sets the maximum rendered mode.
- `showToggle` forces the hamburger toggle to remain visible at every size.
- `align` controls which side of the viewport the menu and toggle render on (`left` by default, `right` optional).

**Full** (width 1360px+):

![Large desktop sidebar example](https://raw.githubusercontent.com/wilsocr88/react-icon-sidebar/master/full.png)

**Compact** (width 768px - 1359px)

![Medium-width sidebar example](https://raw.githubusercontent.com/wilsocr88/react-icon-sidebar/master/compact.png)

**Mobile** (width less than 768px)

![Mobile sidebar closed state](https://raw.githubusercontent.com/wilsocr88/react-icon-sidebar/master/mobile-closed.png)
![Mobile sidebar open state](https://raw.githubusercontent.com/wilsocr88/react-icon-sidebar/master/mobile-open.png)

## Usage

1. Install the package and its peer dependencies:

```bash
npm install react-icon-sidebar react react-icons
```

2. Import your icon components and `SideMenu`:

```javascript
import SideMenu from "react-icon-sidebar";
import { MdAddCircle, MdStar, MdPerson } from "react-icons/md";

const customIcon = (
    <span style={{ fontSize: "1.6rem", lineHeight: 1 }} aria-hidden="true">
        ✨
    </span>
);

const menuIconOpen = <span aria-hidden="true">☰</span>;
const menuIconClose = <span aria-hidden="true">✕</span>;
```

`react-icon-sidebar` no longer ships a standalone CSS build file. Component styles are applied by the component itself, so no CSS import is required.

3. Build a `menu` array.

**Note**: an object with `hr: true` renders a horizontal separator.
**Note**: an object with `isTitleItem: true` renders the contents of `text` as a non-clickable title
**Note**: `href` can be used anywhere `link` is expected.

```javascript
const menu = [
    {
        icon: MdAddCircle,
        text: "New",
        link: "/new",
    },
    {
        icon: MdStar,
        text: "Favorites",
        link: "/favorites",
    },
    {
        icon: customIcon,
        text: "Custom",
        link: "/custom",
    },
    {
        hr: true,
    },
    {
        isTitleItem: true,
        text: "Additional Links",
    },
    {
        icon: <MdPerson size="2em" />,
        text: "Agent",
        link: "/agent",
    },
    {
        groupTitle: "Show more",
        groupItems: [
            {
                icon: MdAddCircle,
                text: "Group link 1",
                link: "/group-link-1",
            },
            {
                icon: <MdStar size="2em" />,
                text: "Group link 2",
                href: "/group-link-2",
            },
            {
                hr: true,
            },
            {
                isTitleItem: true,
                text: "More links",
            },
        ]
    },
];
```

4. Pass the `menu` array to the component:

```jsx
<SideMenu menu={menu} />
```

You can also override the rendered mode or keep the toggle visible at all sizes:

```jsx
<SideMenu menu={menu} force="compact" />
<SideMenu menu={menu} min="compact" max="full" />
<SideMenu menu={menu} showToggle />
<SideMenu menu={menu} align="right" />
<SideMenu menu={menu} menuIcon={<span aria-hidden="true">☰</span>} />
<SideMenu
    menu={menu}
    menuIconOpen={menuIconOpen}
    menuIconClose={menuIconClose}
/>
<SideMenu
    menu={menu}
    colors={{
        background: "#18212f",
        text: "#f7fafc",
        hoverBackground: "rgba(255, 255, 255, 0.12)",
        groupHoverBackground: "rgba(255, 255, 255, 0.08)",
        activeText: "#7dd3fc",
        toggleHoverBackground: "rgba(255, 255, 255, 0.12)",
        toggleFocusOutline: "#7dd3fc",
        overlayBackground: "rgba(8, 15, 28, 0.45)",
    }}
/>
```

## Props

| Property | Type | Description |
| --- | --- | --- |
| menu | Array of objects | Array of menu item objects (see below). |
| force | `mobile` \| `compact` \| `full` \| "" | Forces the menu into one rendered mode. |
| min | `mobile` \| `compact` \| `full` \| "" | Prevents the menu from shrinking below the given mode. |
| max | `mobile` \| `compact` \| `full` \| "" | Prevents the menu from growing above the given mode. |
| showToggle | boolean | Keeps the hamburger button visible at all sizes. |
| align | `left` \| `right` | Sets which side of the viewport the menu and toggle button render on. |
| menuIcon | JSX element | Custom toggle icon used when `menuIconOpen` and `menuIconClose` are not both provided. |
| menuIconOpen | JSX element | Toggle icon shown while the menu is hidden. If provided alone, it is used in both states. |
| menuIconClose | JSX element | Toggle icon shown while the menu is visible. If provided alone, it is used in both states. |
| colors | object | Overrides the menu color palette. Supported keys: `background`, `text`, `hoverBackground`, `groupHoverBackground`, `activeText`, `toggleHoverBackground`, `toggleFocusOutline`, `overlayBackground`. |

### Menu Item Shape

Each object in the `menu` array must be one of the following:

1. Navigable menu item

| Property | Type | Description |
| --- | --- | --- |
| icon | React component \| JSX element | Icon shown beside the label. Can be a component (for example from [react-icons](https://react-icons.github.io/react-icons/)) or arbitrary JSX. Optional |
| text | string | Visible menu label. Must be non-empty. |
| link | string | Destination URL/path. Must be non-empty. |
| href | string | Alias for `link`. Either `link` or `href` must be provided. |

OR

2. Group item (expand/collapse)

| Property | Type | Description |
| --- | --- | --- |
| icon | React component | Icon component shown next to the group title. Optional |
| groupTitle | string | Visible group label. Must be non-empty. |
| groupItems | array | Non-empty list of menu items using the same shape as the top-level menu items. |
| expanded | boolean | Optional initial expanded state for the group. |

Group item entries can use `icon`, `text`, `link`, `href`, `hr`, and `isTitleItem` the same way top-level items do.

OR

3. Separator item

| Property | Type | Description |
| --- | --- | --- |
| hr | boolean | If `true`, renders a horizontal separator line. |

OR

4. Title item

| Property | Type | Description|
| isTitleItem | boolean | If `true` renders the value of the `text` property as a title. |
| text | string | Visible title text. Must be non-empty. |

## Runtime Validation

`SideMenu` includes development-time runtime validation for `menu`.

Validation rules for `menu`:

1. `menu` must be an array.
2. Every entry must be an object.
3. If `groupTitle` is present, it must be a non-empty string and `groupItems` must be a non-empty array.
4. Each `groupItems` entry must include non-empty `text` and either non-empty `link` or non-empty `href`.
5. If `hr !== true` and `groupTitle` is not present, the entry must include `icon`, non-empty `text`, and either non-empty `link` or non-empty `href`.

## Behavior

1. Mode selection: the menu renders as `mobile` at widths `<= 768px`, `compact` from `768px` to `1359px`, and `full` at `1360px+` unless `force`, `min`, or `max` override it.
2. Mobile: the menu starts hidden, opens with the toggle button, and closes when clicking the dimmer overlay behind the opened menu (i.e. "clicking out") or when clicking the toggle button again.
3. Compact and full: the menu stays visible by default.
4. `showToggle`: when enabled, the hamburger button stays visible at every size and can hide or show the menu.
5. `align`: defaults to `left`. Set `align="right"` to render both the sidebar and hamburger toggle on the right.
6. Toggle icons: by default the component renders `MdMenu`. Pass `menuIcon` to replace it with a single custom icon, or pass both `menuIconOpen` and `menuIconClose` to swap icons as the menu opens and closes. When both state-specific props are present, they take precedence over `menuIcon`.
7. Active item: when `window.location.pathname` matches a menu item's `link`, that item receives active styling and `aria-current="page"`.
8. Navigation: clicking a menu item uses client-side history navigation (`pushState`) so routes update without a full page reload.
9. Groups: when `groupItems` are present, the group title toggles expand/collapse and child menu items render underneath it when expanded.
10. Titles: when `isTitleItem` is set to `true`, the string `text` renders as a non-clickable title.

## Accessibility

1. The menu toggle uses a semantic `<button>` with `aria-label`, `aria-controls`, and `aria-expanded`.
2. Menu items render as semantic link-like controls (`role="link"`) that support keyboard activation and client-side route changes.
3. In mobile mode, the overlay sits above the menu so click-out behavior closes the drawer.

## Testing

Current tests cover:

1. Basic rendering.
2. Mobile toggle open/close behavior.
3. Active route rendering.
4. `force`, `min`, `max`, and `showToggle` behavior.
5. Custom toggle icon precedence and open/close state rendering.

Run tests:

```bash
npm test -- --runInBand
```

## Visual Test Run (Demo App)

To preview how the component renders in a live React app:

```bash
npm install
npm run demo
```

This starts a local Vite demo and opens it in your browser.

Demo helpers:

1. Use the route buttons to switch paths and verify active-item styling.
2. Resize below `768px` to verify mobile toggle and overlay behavior.
3. Try `force`, `min`, `max`, and `showToggle` in code to confirm the rendered mode stays within the requested bounds.

Optional demo commands:

```bash
npm run demo:build
npm run demo:preview
```

## Build Output

Running `npm run build` emits the library JavaScript module in `dist/`.

There is no separate CSS build artifact in `dist/`.

## CONTRIBUTING

See [CONTRIBUTING](https://github.com/wilsocr88/react-icon-sidebar/blob/master/CONTRIBUTING.md)
or see [issues](https://github.com/wilsocr88/react-icon-sidebar/issues) for a roadmap.
