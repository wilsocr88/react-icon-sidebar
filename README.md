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

2. Import the component styles, your icon components, and `SideMenu`:

```javascript
import "react-icon-sidebar/dist/react-icon-sidebar.css";
import SideMenu from "react-icon-sidebar";
import { MdAddCircle, MdStar, MdPerson } from "react-icons/md";

const customIcon = (
    <span style={{ fontSize: "1.6rem", lineHeight: 1 }} aria-hidden="true">
        ✨
    </span>
);
```

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
                text: "Group link 1",
                link: "/group-link-1",
            },
            {
                text: "Group link 2",
                href: "/group-link-2",
            }
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
| groupItems | array | Non-empty list of group links (see below). |
| expanded | boolean | Optional initial expanded state for the group. |

Group item link shape:

| Property | Type | Description |
| --- | --- | --- |
| text | string | Visible child label. Must be non-empty. |
| link | string | Destination URL/path. |
| href | string | Alias for `link`. Either `link` or `href` must be provided. |

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
6. Active item: when `window.location.pathname` matches a menu item's `link`, that item receives active styling and `aria-current="page"`.
7. Groups: when `groupItems` are present, the group title toggles expand/collapse and child links render underneath it when expanded.
8. Titles: when `isTitleItem` is set to `true`, the string `text` renders as a non-clickable title.

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
or see [issues](https://github.com/wilsocr88/react-icon-sidebar/issues) for a roadmap.
