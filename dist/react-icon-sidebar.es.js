import e, { memo as t, useCallback as n, useEffect as r, useMemo as i, useState as a } from "react";
//#region src/SideMenu.styles.js
var o = {
	minHeight: "100%",
	margin: 0,
	padding: 0,
	position: "absolute",
	top: 0,
	right: 0,
	display: "inline-block",
	backgroundColor: "#f5f5f5",
	zIndex: 998
}, s = {
	marginLeft: "0.8rem",
	border: "none",
	backgroundColor: "transparent",
	color: "inherit",
	font: "inherit",
	cursor: "pointer",
	display: "inline-flex",
	position: "relative",
	top: "1rem",
	zIndex: 999
}, c = { backgroundColor: "rgba(0, 0, 0, 0.1)" }, l = {
	outline: "0.125rem solid #66f",
	outlineOffset: "0.125rem"
}, u = { height: "2.5em" }, d = {
	mobile: {
		width: "18.75rem",
		maxWidth: "100%",
		boxShadow: "1px 1px 5px 1px #999",
		paddingTop: "2rem",
		transition: "ease-out 300ms"
	},
	compact: { width: "4.5rem" },
	full: { width: "12.5rem" }
}, f = {
	position: "absolute",
	left: 0,
	top: 0,
	width: "100vw",
	height: "100vh",
	overflow: "hidden",
	zIndex: 997,
	transition: "linear 300ms",
	cursor: "normal"
}, p = ({ onClick: t, isHidden: n, style: r }) => /* @__PURE__ */ e.createElement("div", {
	id: "menu-whitespace-target",
	hidden: n,
	onClick: t,
	style: r || f
}), m = {
	color: void 0,
	size: void 0,
	className: void 0,
	style: void 0,
	attr: void 0
}, h = e.createContext && /*#__PURE__*/ e.createContext(m), g = [
	"attr",
	"size",
	"title"
];
function _(e, t) {
	if (e == null) return {};
	var n = v(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function v(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function y() {
	return y = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, y.apply(this, arguments);
}
function b(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function x(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? b(Object(n), !0).forEach(function(t) {
			S(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function S(e, t, n) {
	return t = C(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function C(e) {
	var t = w(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function w(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function T(t) {
	return t && t.map((t, n) => /*#__PURE__*/ e.createElement(t.tag, x({ key: n }, t.attr), T(t.child)));
}
function E(t) {
	return (n) => /*#__PURE__*/ e.createElement(D, y({ attr: x({}, t.attr) }, n), T(t.child));
}
function D(t) {
	var n = (n) => {
		var { attr: r, size: i, title: a } = t, o = _(t, g), s = i || n.size || "1em", c;
		return n.className && (c = n.className), t.className && (c = (c ? c + " " : "") + t.className), /*#__PURE__*/ e.createElement("svg", y({
			stroke: "currentColor",
			fill: "currentColor",
			strokeWidth: "0"
		}, n.attr, r, o, {
			className: c,
			style: x(x({ color: t.color || n.color }, n.style), t.style),
			height: s,
			width: s,
			xmlns: "http://www.w3.org/2000/svg"
		}), a && /*#__PURE__*/ e.createElement("title", null, a), t.children);
	};
	return h === void 0 ? n(m) : /*#__PURE__*/ e.createElement(h.Consumer, null, (e) => n(e));
}
//#endregion
//#region node_modules/react-icons/md/index.mjs
function O(e) {
	return E({
		tag: "svg",
		attr: { viewBox: "0 0 24 24" },
		child: [{
			tag: "path",
			attr: {
				fill: "none",
				d: "M0 0h24v24H0z"
			},
			child: []
		}, {
			tag: "path",
			attr: { d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" },
			child: []
		}]
	})(e);
}
function k(e) {
	return E({
		tag: "svg",
		attr: { viewBox: "0 0 24 24" },
		child: [{
			tag: "path",
			attr: {
				fill: "none",
				d: "M0 0h24v24H0z"
			},
			child: []
		}, {
			tag: "path",
			attr: { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" },
			child: []
		}]
	})(e);
}
function A(e) {
	return E({
		tag: "svg",
		attr: { viewBox: "0 0 24 24" },
		child: [{
			tag: "path",
			attr: {
				fill: "none",
				d: "M0 0h24v24H0z"
			},
			child: []
		}, {
			tag: "path",
			attr: { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" },
			child: []
		}]
	})(e);
}
//#endregion
//#region src/components/MenuItem.styles.js
var j = {
	padding: "8px 0 8px",
	outline: 0,
	display: "flex",
	alignItems: "center",
	color: "inherit",
	textDecoration: "none",
	position: "relative",
	top: "16px"
}, M = {
	alignItems: "center",
	justifyContent: "center",
	position: "relative",
	verticalAlign: "middle",
	stroke: "none"
}, N = {
	maxWidth: "100%",
	overflow: "hidden",
	textOverflow: "ellipsis",
	verticalAlign: "middle"
}, P = {
	display: "flex",
	flexDirection: "column",
	marginTop: "1em"
}, F = {
	color: "inherit",
	textDecoration: "none"
}, I = {
	interactiveReset: {
		color: "inherit",
		textDecoration: "none",
		border: 0,
		backgroundColor: "transparent",
		font: "inherit",
		textAlign: "left"
	},
	menuItemHover: { backgroundColor: "rgba(0, 0, 0, 0.1)" },
	groupItemHover: { backgroundColor: "rgba(0, 0, 0, 0.08)" },
	active: { color: "#66f" },
	groupLink: { borderRadius: "0.25rem" },
	title: { fontWeight: "bold" },
	separator: { marginTop: "2rem" }
}, L = {
	mobile: {
		menuItem: {
			...j,
			width: "100%",
			flexDirection: "row",
			justifyContent: "flex-start"
		},
		menuItemIcon: {
			...M,
			display: "inline-block",
			whiteSpace: "nowrap",
			marginLeft: "2rem"
		},
		menuItemText: {
			...N,
			fontSize: "1rem",
			display: "inline-block",
			whiteSpace: "nowrap",
			margin: "0 1rem 0 1rem"
		},
		groupList: {
			...P,
			width: "100%"
		},
		groupListItem: {
			...F,
			display: "block",
			padding: "0.35em 1rem",
			fontSize: "0.95rem"
		}
	},
	compact: {
		menuItem: {
			...j,
			width: "4.5rem",
			flexDirection: "column",
			justifyContent: "center",
			textAlign: "center"
		},
		menuItemIcon: {
			...M,
			display: "inline-flex"
		},
		menuItemText: {
			...N,
			fontSize: "0.75rem",
			textOverflow: "wrap"
		},
		groupList: {
			...P,
			position: "relative",
			left: "1rem",
			zIndex: 1e3,
			backgroundColor: "#f5f5f5",
			boxShadow: "0 2px 4px #999",
			borderRadius: "4px",
			maxWidth: "calc(100vw - 2rem)"
		},
		groupListItem: {
			...F,
			padding: "0.3rem 1rem",
			display: "block",
			height: "fit-content",
			borderRadius: "0"
		}
	},
	full: {
		menuItem: {
			...j,
			width: "100%",
			flexDirection: "row",
			justifyContent: "flex-start"
		},
		menuItemIcon: {
			...M,
			display: "inline-block",
			whiteSpace: "nowrap",
			marginLeft: "2rem"
		},
		menuItemText: {
			...N,
			fontSize: "1em",
			display: "inline-block",
			whiteSpace: "nowrap",
			margin: "0 1rem 0 1rem"
		},
		groupList: {
			...P,
			width: "100%"
		},
		groupListItem: {
			...F,
			display: "block",
			padding: "0.35rem 1rem",
			fontSize: "0.95rem"
		}
	}
}, R = {
	position: "fixed",
	inset: 0,
	zIndex: 999,
	backgroundColor: "rgba(0,0,0,0)"
}, z = () => typeof window > "u" ? "" : window.location.pathname, B = (e) => L[e] || L.compact, V = (e, t) => e.some((e) => e && (e.link === t || e.href === t)), H = (e) => e.link || e.href || "#", U = ({ baseStyle: e, isHovered: t, isActive: n, isGroupLink: r = !1, isTitle: i = !1 }) => ({
	...I.interactiveReset,
	...e,
	...r ? I.groupLink : null,
	...i ? I.title : null,
	...t && !i ? r ? I.groupItemHover : I.menuItemHover : null,
	...n && !i ? I.active : null
}), W = t(({ id: t, icon: n, text: o, link: s, groupItems: c = [], expanded: l = !1, isTitleItem: u = !1, mode: d = "compact", align: f = "left" }) => {
	let m = B(d), h = c.length > 0, g = z(), _ = h && V(c, g), [v, y] = a(null), [b, x] = a((l || _) && d !== "compact"), S = i(() => z() === s || _ ? "menu-item active" : "menu-item", [_, s]), C = d === "compact" ? {
		...m.groupList,
		...f === "right" ? {
			left: "auto",
			right: "1rem"
		} : {
			left: "1rem",
			right: "auto"
		},
		overflowX: "hidden"
	} : m.groupList, w = (n, r, i, a, o, s, c, l = !1) => {
		let u = i.includes("active");
		return /* @__PURE__ */ e.createElement("a", {
			key: `${r}-${n}`,
			id: "menu-item-" + t,
			className: i,
			href: r || "#",
			"aria-current": i.includes("active") ? "page" : void 0,
			onMouseEnter: () => y(c),
			onMouseLeave: () => y(null),
			style: U({
				baseStyle: a,
				isHovered: v === c,
				isActive: u,
				isGroupLink: l
			})
		}, o && typeof o == "function" ? /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-icon",
			style: m.menuItemIcon
		}, /* @__PURE__ */ e.createElement(o, { size: "2em" })) : o && typeof o == "object" ? /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-icon",
			style: m.menuItemIcon
		}, o) : null, /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-text",
			style: m.menuItemText
		}, s));
	};
	if (r(() => {
		_ && d !== "compact" && x(!0);
	}, [_]), u) return /* @__PURE__ */ e.createElement("div", {
		id: "menu-item-" + t,
		className: "menu-item menu-item-title",
		style: U({
			baseStyle: m.menuItem,
			isHovered: !1,
			isActive: !1,
			isTitle: !0
		})
	}, /* @__PURE__ */ e.createElement("div", {
		className: "menu-item-text",
		style: m.menuItemText
	}, o));
	if (h) {
		let r = `menu-item-group-${t}`;
		return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("button", {
			id: "menu-item-" + t,
			type: "button",
			className: d === "compact" ? S : "menu-item menu-item-group",
			"aria-haspopup": "true",
			"aria-controls": r,
			"aria-expanded": b,
			style: U({
				baseStyle: {
					...m.menuItem,
					cursor: "pointer"
				},
				isHovered: v === "group-toggle",
				isActive: d === "compact" && S.includes("active")
			}),
			onClick: () => x((e) => !e),
			onMouseEnter: () => y("group-toggle"),
			onMouseLeave: () => y(null)
		}, /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-icon",
			style: m.menuItemIcon
		}, n ? /* @__PURE__ */ e.createElement(n, { size: "2em" }) : null), /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-text",
			style: m.menuItemText
		}, o), b ? /* @__PURE__ */ e.createElement(O, { size: "1.5em" }) : /* @__PURE__ */ e.createElement(k, { size: "1.5em" })), b ? /* @__PURE__ */ e.createElement(e.Fragment, null, d === "compact" && /* @__PURE__ */ e.createElement(p, {
			onClick: () => x(!1),
			isHidden: !b,
			style: R
		}), /* @__PURE__ */ e.createElement("div", {
			id: r,
			className: "menu-item-group",
			style: C
		}, c.map((e, t) => {
			let n = H(e);
			return w(t, n, "menu-item-group-link" + (n === g ? " active" : ""), m.groupListItem, null, e.text, `group-link-${t}`, !0);
		}))) : null);
	}
	return w(t, s, S, m.menuItem, n, o, "single-link");
}), G = [
	"mobile",
	"compact",
	"full"
], K = ["left", "right"], q = 768, J = 1360, Y = 100, X = (e) => G.includes(e), Z = (e) => G.indexOf(e), Q = (e) => K.includes(e), $ = () => typeof window > "u" ? "compact" : window.innerWidth <= q ? "mobile" : window.innerWidth <= J ? "compact" : "full", ee = (e, t, n, r) => {
	if (X(t)) return t;
	let i = e;
	return X(n) && Z(i) < Z(n) && (i = n), X(r) && Z(i) > Z(r) && (i = r), i;
}, te = ({ menu: t = [], force: m = "", min: h = "", max: g = "", showToggle: _ = !1, align: v = "left", menuIcon: y = null, menuIconOpen: b = null, menuIconClose: x = null }) => {
	let [S, C] = a($), w = i(() => ee(S, m, h, g), [
		S,
		m,
		h,
		g
	]), [T, E] = a(() => w === "mobile"), [D, O] = a(!1), [k, j] = a(!1), M = _ || w === "mobile", N = i(() => Q(v) ? v : "left", [v]);
	r(() => {}, [v, t]);
	let P = n(() => {
		C($());
	}, []), F = n(() => {
		E((e) => !e);
	}, []), L = n(() => {
		E(!0);
	}, []), R = i(() => T ? "menu hidden" : "menu", [T]), z = i(() => ({
		...o,
		...d[w],
		...w === "mobile" ? {
			position: "fixed",
			height: "100vh"
		} : null,
		...N === "right" ? {
			left: "auto",
			right: 0,
			transform: T ? "translateX(100%)" : "translateX(0)"
		} : {
			left: T ? "-19.375rem" : 0,
			right: "auto",
			transform: "translateX(0)"
		}
	}), [
		T,
		w,
		N
	]), B = i(() => ({
		backgroundColor: T ? "rgba(0,0,0,0)" : "rgba(100,100,100,0.3)",
		...f
	}), [T]), V = i(() => ({
		...s,
		...N === "right" ? {
			float: "right",
			marginLeft: 0,
			marginRight: "0.8rem"
		} : null,
		...D ? c : null,
		...k ? l : null
	}), [
		k,
		D,
		N
	]);
	return r(() => {
		E(w === "mobile");
	}, [w]), r(() => {
		if (typeof window > "u") return;
		let e, t = () => {
			e && window.clearTimeout(e), e = window.setTimeout(P, Y);
		};
		return window.addEventListener("resize", t), P(), () => {
			e && window.clearTimeout(e), window.removeEventListener("resize", t);
		};
	}, [P]), /* @__PURE__ */ e.createElement(e.Fragment, null, M ? /* @__PURE__ */ e.createElement("button", {
		type: "button",
		className: "menu-button",
		"aria-label": "Toggle menu",
		"aria-controls": "menu",
		"aria-expanded": !T,
		onClick: F,
		onMouseEnter: () => O(!0),
		onMouseLeave: () => O(!1),
		onFocus: () => j(!0),
		onBlur: () => j(!1),
		style: V
	}, b && x ? T ? b : x : b || x || y || /* @__PURE__ */ e.createElement(A, { size: "2em" })) : null, /* @__PURE__ */ e.createElement("div", {
		className: R,
		id: "menu",
		style: z
	}, M ? /* @__PURE__ */ e.createElement("div", { style: u }) : null, t.map((t, n) => t.hr === !0 ? /* @__PURE__ */ e.createElement("hr", {
		key: `menu-separator-${n}`,
		style: I.separator
	}) : /* @__PURE__ */ e.createElement(W, {
		key: t.link || t.href || t.groupTitle || t.text || `menu-item-${n}`,
		id: n,
		icon: t.icon,
		text: t.text || t.groupTitle,
		link: t.link || t.href,
		groupItems: t.groupItems,
		expanded: t.expanded,
		isTitleItem: t.isTitleItem,
		mode: w,
		align: N
	})), /* @__PURE__ */ e.createElement("br", null)), w === "mobile" ? /* @__PURE__ */ e.createElement(p, {
		onClick: L,
		isHidden: T,
		style: B
	}) : null);
};
//#endregion
export { te as default };
