# React Icon Sidebar

A responsive, iconographic sidebar menu for React apps.

The menu supports three rendered modes, from smallest to largest: `mobile`, `compact`, and `full`.

The rendered mode normally follows the viewport, but it can also be controlled with props:

- `force` locks the menu to a single mode: `mobile`, `compact`, or `full`.
- `min` sets the minimum rendered mode.
- `max` sets the maximum rendered mode.
- `showToggle` forces the hamburger toggle to remain visible at every size.

**Full** (width 1360px+):

![Large desktop sidebar example](https://raw.githubusercontent.com/wilsocr88/react-icon-sidebar/master/React%20App%205-19-2020%209-44-00%20AM.png)

**Compact** (width 768px - 1359px)

![Medium-width sidebar example](https://raw.githubusercontent.com/wilsocr88/react-icon-sidebar/master/React%20App%205-19-2020%209-44-22%20AM.png)

**Mobile** (width less than 768px)

![Mobile sidebar closed state](https://raw.githubusercontent.com/wilsocr88/react-icon-sidebar/master/React%20App%205-19-2020%209-45-12%20AM.png)
![Mobile sidebar open state](https://raw.githubusercontent.com/wilsocr88/react-icon-sidebar/master/React%20App%205-19-2020%209-45-25%20AM.png)

## Usage

1. Install the package and its peer dependencies:

```bash
npm install react-icon-sidebar react react-icons
```

1. Import the component styles, your icon components, and `SideMenu`:

```javascript
import "react-icon-sidebar/dist/react-icon-sidebar.css";
import SideMenu from "react-icon-sidebar";
import { MdAddCircle, MdStar, MdPerson } from "react-icons/md";
```

1. Build a `menu` array.

Note: an object with `hr: true` renders a horizontal separator.

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
        hr: true,
    },
    {
        icon: MdPerson,
        text: "Agent",
        link: "/agent",
    },
];
```

1. Pass the `menu` array to the component:

```jsx
<SideMenu menu={menu} />
```

You can also override the rendered mode or keep the toggle visible at all sizes:

```jsx
<SideMenu menu={menu} force="compact" />
<SideMenu menu={menu} min="compact" max="full" />
<SideMenu menu={menu} showToggle />
```

## Props

| Property | Type | Description |
| --- | --- | --- |
| menu | Array of objects | Array of menu item objects (see below). |
| force | `mobile` \| `compact` \| `full` \| "" | Forces the menu into one rendered mode. |
| min | `mobile` \| `compact` \| `full` \| "" | Prevents the menu from shrinking below the given mode. |
| max | `mobile` \| `compact` \| `full` \| "" | Prevents the menu from growing above the given mode. |
| showToggle | boolean | Keeps the hamburger button visible at all sizes. |

### Menu Item Shape

Each object in the `menu` array must be one of the following:

1. Navigable menu item

| Property | Type | Description |
| --- | --- | --- |
| icon | React component | Icon component (for example from [react-icons](https://react-icons.github.io/react-icons/)). |
| text | string | Visible menu label. Must be non-empty. |
| link | string | Destination URL/path. Must be non-empty. |

OR

1. Separator item

| Property | Type | Description |
| --- | --- | --- |
| hr | boolean | If `true`, renders a horizontal separator line. |

## Runtime Validation

`SideMenu` includes development-time runtime validation for `menu`.

Validation rules for `menu`:

1. `menu` must be an array.
2. Every entry must be an object.
3. If `hr !== true`, the entry must include `icon`, `text`, and `link`.
4. `text` and `link` must be non-empty strings.

## Behavior

1. Mode selection: the menu renders as `mobile` at widths `<= 768px`, `compact` from `768px` to `1359px`, and `full` at `1360px+` unless `force`, `min`, or `max` override it.
2. Mobile: the menu starts hidden, opens with the toggle button, and closes when clicking the dimmer overlay behind the opened menu (i.e. "clicking out") or when clicking the toggle button again.
3. Compact and full: the menu stays visible by default.
4. `showToggle`: when enabled, the hamburger button stays visible at every size and can hide or show the menu.
5. Active item: when `window.location.pathname` matches a menu item's `link`, that item receives active styling and `aria-current="page"`.

## Accessibility

1. The menu toggle uses a semantic `<button>` with `aria-label`, `aria-controls`, and `aria-expanded`.
2. Menu items render as semantic `<a>` links.
3. In mobile mode, the overlay sits above the menu so click-out behavior closes the drawer.

## Testing

Current tests cover:

1. Basic rendering.
2. Mobile toggle open/close behavior.
3. Active route rendering.
4. `force`, `min`, `max`, and `showToggle` behavior.

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

## CONTRIBUTING

See [CONTRIBUTING](https://github.com/wilsocr88/react-icon-sidebar/blob/master/CONTRIBUTING.md)
