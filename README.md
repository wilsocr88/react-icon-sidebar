# React Side Menu

A responsive, iconographic sidebar menu for React apps.

**Large** (width 1360px+):

![](https://raw.githubusercontent.com/wilsocr88/react-side-menu/master/React%20App%205-19-2020%209-44-00%20AM.png)

**Medium** (width 768px - 1359px)

![](https://raw.githubusercontent.com/wilsocr88/react-side-menu/master/React%20App%205-19-2020%209-44-22%20AM.png)

**Mobile** (width less than 768px)

![](https://raw.githubusercontent.com/wilsocr88/react-side-menu/master/React%20App%205-19-2020%209-45-12%20AM.png)
![](https://raw.githubusercontent.com/wilsocr88/react-side-menu/master/React%20App%205-19-2020%209-45-25%20AM.png)

## Usage

1. Install the package and its peer dependencies:

```bash
npm install react-icon-sidebar react react-icons
```

2. Import the component styles, your icon components, and `SideMenu`:

```javascript
import "react-side-menu/dist/react-side-menu.css";
import SideMenu from "react-side-menu";
import { MdAddCircle, MdStar, MdPerson } from "react-icons/md";
```

3. Build a `menu` array.

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

4. Pass the `menu` array to the component:

```jsx
<SideMenu menu={menu} />
```

## Props

| Property | Type | Description |
|---|---|---|
| menu | Array<object> | Array of menu item objects (see below). |

### Menu Item Shape

Each object in the `menu` array must be one of the following:

1. Navigable menu item

| Property | Type | Description |
|---|---|---|
| icon | React component | Icon component (for example from [react-icons](https://react-icons.github.io/react-icons/)). |
| text | string | Visible menu label. Must be non-empty. |
| link | string | Destination URL/path. Must be non-empty. |

OR

2. Separator item

| Property | Type | Description |
|---|---|---|
| hr | boolean | If `true`, renders a horizontal separator line. |

## Runtime Validation

`SideMenu` includes development-time runtime validation for `menu`.

Validation rules for `menu`:

1. `menu` must be an array.
2. Every entry must be an object.
3. If `hr !== true`, the entry must include `icon`, `text`, and `link`.
4. `text` and `link` must be non-empty strings.

## Behavior

1. Breakpoint: mobile behavior applies at widths `<= 768px`.
2. Mobile: menu starts hidden, can be opened with the toggle button, and closes when clicking the overlay.
3. Desktop/tablet: menu stays visible and the overlay is hidden.
4. Active item: when `window.location.pathname` matches a menu item's `link`, that item receives active styling and `aria-current="page"`.

## Accessibility

1. The menu toggle uses a semantic `<button>` with `aria-label`, `aria-controls`, and `aria-expanded`.
2. Menu items render as semantic `<a>` links.

## Testing

Current tests cover:

1. Basic rendering.
2. Mobile toggle open/close behavior.
3. Active route rendering.

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

Optional demo commands:

```bash
npm run demo:build
npm run demo:preview
```

## CONTRIBUTING

See [CONTRIBUTING](https://github.com/wilsocr88/react-side-menu/blob/master/CONTRIBUTING.md)
