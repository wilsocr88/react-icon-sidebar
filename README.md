# React Icon Sidebar

![license](https://img.shields.io/npm/l/react-icon-sidebar)
![version](https://img.shields.io/npm/v/react-icon-sidebar)

A responsive, iconographic sidebar menu for React apps.

The menu supports three modes: `mobile`, `compact`, and `full`.

By default, mode follows viewport width. Use props to override that behavior:

- `force` locks the menu to one mode: `mobile`, `compact`, or `full`.
- `min` sets the smallest allowed mode.
- `max` sets the largest allowed mode.
- `breakpoints` sets custom pixel thresholds for `mobile`, `compact`, and `full`.
- `showToggle` keeps the hamburger toggle visible at all sizes.
- `align` sets the side where the menu and toggle render (`left` by default, `right` optional).

**Full** (width 1360px+):

![Large desktop sidebar example](https://raw.githubusercontent.com/wilsocr88/react-icon-sidebar/master/full.png)

**Compact** (width 768px-1359px)

![Medium-width sidebar example](https://raw.githubusercontent.com/wilsocr88/react-icon-sidebar/master/compact.png)

**Mobile** (width less than 768px)

![Mobile sidebar closed state](https://raw.githubusercontent.com/wilsocr88/react-icon-sidebar/master/mobile-closed.png)
![Mobile sidebar open state](https://raw.githubusercontent.com/wilsocr88/react-icon-sidebar/master/mobile-open.png)

## Usage

1. Install the package and peer dependencies:

```bash
npm install react-icon-sidebar react react-icons
```

2. Import `SideMenu` and any icon components:

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
const headerContent = <div style={{ padding: "1rem" }}>My Brand</div>;
const footerContent = <div style={{ padding: "1rem" }}>v1.0.0</div>;
```

`react-icon-sidebar` does not ship a standalone CSS file. Styles are applied by the component, so no CSS import is required.

3. Create a `menu` array.

Use these item rules:

- Set `hr: true` to render a horizontal separator.
- Set `isTitleItem: true` to render `text` as a non-clickable title.
- Use `href` anywhere you would use `link`.

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

You can also override mode, layout, icons, and colors:

```jsx
<SideMenu menu={menu} force="compact" />
<SideMenu menu={menu} min="compact" max="full" />
<SideMenu menu={menu} breakpoints={{ mobile: 640, desktop: 1200 }} />
<SideMenu menu={menu} showToggle />
<SideMenu menu={menu} align="right" />
<SideMenu menu={menu} header={headerContent} footer={footerContent} />
<SideMenu
    menu={menu}
    header={{
        compact: <div style={{ padding: "0.75rem" }}>M</div>,
        full: <div style={{ padding: "1rem" }}>My Brand</div>,
    }}
    footer={{
        compact: <div style={{ padding: "0.75rem" }}>v1</div>,
        full: <div style={{ padding: "1rem" }}>Version 1.0.0</div>,
    }}
/>
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
        separatorColor: "rgba(148, 163, 184, 0.45)",
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
| menu | Array of objects | Menu item definitions (see below). |
| force | `mobile` \| `compact` \| `full` \| "" | Locks the menu to one mode. |
| min | `mobile` \| `compact` \| `full` \| "" | Prevents the menu from shrinking below the selected mode. |
| max | `mobile` \| `compact` \| `full` \| "" | Prevents the menu from growing above the selected mode. |
| breakpoints | `{ mobile?: number, desktop?: number }` | Optional viewport thresholds in pixels. Defaults to `{ mobile: 768, desktop: 1360 }`. `desktop` must be greater than `mobile`. |
| showToggle | boolean | Keeps the hamburger toggle visible at all sizes. |
| align | `left` \| `right` | Sets which side of the viewport the menu and toggle render on. |
| brand | JSX element \| `{ mobile?: JSX element, compact?: JSX element, full?: JSX element, default?: JSX element }` | Alias for `header`. Used only when `header` is not provided for the active mode. |
| header | JSX element \| `{ mobile?: JSX element, compact?: JSX element, full?: JSX element, default?: JSX element }` | Optional content rendered at the top of the menu. Supports per-mode values. |
| footer | JSX element \| `{ mobile?: JSX element, compact?: JSX element, full?: JSX element, default?: JSX element }` | Optional content rendered at the bottom of the menu. Supports per-mode values and stays pinned to the bottom of the sidebar. |
| menuIcon | JSX element | Custom toggle icon used when both `menuIconOpen` and `menuIconClose` are not provided. |
| menuIconOpen | JSX element | Toggle icon shown while the menu is hidden. If provided alone, it is used in both states. |
| menuIconClose | JSX element | Toggle icon shown while the menu is visible. If provided alone, it is used in both states. |
| colors | object | Overrides the color palette. Supported keys: `background`, `text`, `hoverBackground`, `groupHoverBackground`, `separatorColor`, `activeText`, `toggleHoverBackground`, `toggleFocusOutline`, `overlayBackground`. |

### Menu item shape

Each object in the `menu` array must match one of these shapes:

1. Navigable item

| Property | Type | Description |
| --- | --- | --- |
| icon | React component \| JSX element | Icon shown beside the label. Can be a component (for example from [react-icons](https://react-icons.github.io/react-icons/)) or arbitrary JSX. Optional. |
| text | string | Visible menu label. Must be non-empty. |
| link | string | Destination URL/path. Must be non-empty. |
| href | string | Alias for `link`. Provide either `link` or `href`. |

Or:

2. Group item (expand or collapse)

| Property | Type | Description |
| --- | --- | --- |
| icon | React component | Icon component shown next to the group title. Optional |
| groupTitle | string | Visible group label. Must be non-empty. |
| groupItems | array | Non-empty list of menu items that use the same shape as top-level menu items. |
| expanded | boolean | Optional initial expanded state for the group. |

Entries in `groupItems` can use `icon`, `text`, `link`, `href`, `hr`, and `isTitleItem` the same way top-level items do.

Or:

3. Separator item

| Property | Type | Description |
| --- | --- | --- |
| hr | boolean | If `true`, renders a horizontal separator line. |

Or:

4. Title item

| Property | Type | Description |
| --- | --- | --- |
| isTitleItem | boolean | If `true`, renders the value of `text` as a title. |
| text | string | Visible title text. Must be non-empty. |

## Runtime validation

`SideMenu` includes development-time validation for `menu`.

Validation rules:

1. `menu` must be an array.
2. Every entry must be an object.
3. If `groupTitle` is present, it must be a non-empty string and `groupItems` must be a non-empty array.
4. Each `groupItems` entry must include non-empty `text` and either non-empty `link` or non-empty `href`.
5. If `hr !== true` and `groupTitle` is not present, the entry must include `icon`, non-empty `text`, and either non-empty `link` or non-empty `href`.

## Behavior

1. Mode selection: by default, the menu renders as `mobile` at widths `<= 768px`, `compact` from `769px` to `1360px`, and `full` above that unless `force`, `min`, or `max` override it.
2. Custom thresholds: pass `breakpoints={{ mobile, desktop }}` to change viewport cutoffs. `mobile` controls the upper bound of `mobile`, `desktop` controls the upper bound of `compact`, and widths above `desktop` render `full`.
3. Mobile: the menu starts hidden, opens with the toggle button, and closes when you click the overlay behind the open menu or click the toggle again.
4. Compact and full: the menu stays visible by default.
5. `showToggle`: when enabled, the toggle stays visible at every size and can hide or show the menu.
6. `align`: defaults to `left`. Set `align="right"` to render both the sidebar and hamburger toggle on the right.
7. Header/footer slots: pass `header` and `footer` JSX to render optional content above and below menu items. The footer is pinned to the bottom of the sidebar.
8. Mode-specific slots: `header`, `footer`, and `brand` can each be a single JSX node or an object keyed by mode (`mobile`, `compact`, `full`, or `default`).
9. `brand`: acts as a `header` alias and is used only when `header` has no value for the current mode.
10. Toggle icons: by default the component renders `MdMenu`. Pass `menuIcon` to replace it with a single custom icon, or pass both `menuIconOpen` and `menuIconClose` to swap icons as the menu opens and closes. When both state-specific props are present, they take precedence over `menuIcon`.
11. Active item: when `window.location.pathname` matches a menu item's `link`, that item receives active styling and `aria-current="page"`.
12. Groups: when `groupItems` are present, the group title toggles expand/collapse and child menu items render underneath it when expanded.
13. Titles: when `isTitleItem` is `true`, `text` renders as a non-clickable title.

## Accessibility

1. The menu toggle uses a semantic `<button>` with `aria-label`, `aria-controls`, and `aria-expanded`.
2. Menu items render as semantic link-like controls (`role="link"`) that support keyboard activation and client-side route changes.
3. In mobile mode, the overlay sits above the menu so click-out closes the drawer.

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

## Visual test run (demo app)

To preview the component in a live React app:

```bash
npm install
npm run demo
```

This command starts a local Vite demo and opens it in your browser.

Demo helpers:

1. Use the route buttons to switch paths and verify active-item styling.
2. Resize below `768px` to verify toggle and overlay behavior in mobile mode.
3. Try `force`, `min`, `max`, and `showToggle` in code to confirm the rendered mode stays within the requested bounds.

Optional demo commands:

```bash
npm run demo:build
npm run demo:preview
```

## Build output

Running `npm run build` emits the library as an ES module (`dist/react-icon-sidebar.es.js`).

Component styles are embedded in the JavaScript output, so there is no separate CSS file to import.

## Contributing

See [CONTRIBUTING](https://github.com/wilsocr88/react-icon-sidebar/blob/master/CONTRIBUTING.md)
or see [issues](https://github.com/wilsocr88/react-icon-sidebar/issues) for a roadmap.
