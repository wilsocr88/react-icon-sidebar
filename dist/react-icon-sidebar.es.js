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
	display: "flex",
	flexDirection: "column",
	minHeight: "100%",
	height: "100%"
}, f = { flexShrink: 0 }, p = {
	display: "flex",
	flexDirection: "column",
	flex: "1 1 auto"
}, m = {
	flexShrink: 0,
	marginTop: "auto",
	position: "absolute",
	bottom: 0,
	width: "100%"
}, h = {
	mobile: {
		width: "18.75rem",
		maxWidth: "100%",
		boxShadow: "1px 1px 5px 1px #999",
		paddingTop: "2rem",
		transition: "ease-out 300ms"
	},
	compact: { width: "4.5rem" },
	full: { width: "13.5rem" }
}, g = {
	position: "absolute",
	left: 0,
	top: 0,
	width: "100vw",
	height: "100vh",
	overflow: "hidden",
	zIndex: 997,
	transition: "linear 300ms",
	cursor: "normal"
}, _ = ({ onClick: t, isHidden: n, style: r }) => /* @__PURE__ */ e.createElement("div", {
	id: "menu-whitespace-target",
	hidden: n,
	onClick: t,
	style: r || g
}), v = {
	color: void 0,
	size: void 0,
	className: void 0,
	style: void 0,
	attr: void 0
}, y = e.createContext && /*#__PURE__*/ e.createContext(v), b = [
	"attr",
	"size",
	"title"
];
function x(e, t) {
	if (e == null) return {};
	var n = S(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function S(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function C() {
	return C = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, C.apply(this, arguments);
}
function w(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function T(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? w(Object(n), !0).forEach(function(t) {
			E(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function E(e, t, n) {
	return t = D(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function D(e) {
	var t = O(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function O(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function k(t) {
	return t && t.map((t, n) => /*#__PURE__*/ e.createElement(t.tag, T({ key: n }, t.attr), k(t.child)));
}
function A(t) {
	return (n) => /*#__PURE__*/ e.createElement(j, C({ attr: T({}, t.attr) }, n), k(t.child));
}
function j(t) {
	var n = (n) => {
		var { attr: r, size: i, title: a } = t, o = x(t, b), s = i || n.size || "1em", c;
		return n.className && (c = n.className), t.className && (c = (c ? c + " " : "") + t.className), /*#__PURE__*/ e.createElement("svg", C({
			stroke: "currentColor",
			fill: "currentColor",
			strokeWidth: "0"
		}, n.attr, r, o, {
			className: c,
			style: T(T({ color: t.color || n.color }, n.style), t.style),
			height: s,
			width: s,
			xmlns: "http://www.w3.org/2000/svg"
		}), a && /*#__PURE__*/ e.createElement("title", null, a), t.children);
	};
	return y === void 0 ? n(v) : /*#__PURE__*/ e.createElement(y.Consumer, null, (e) => n(e));
}
//#endregion
//#region node_modules/react-icons/md/index.mjs
function M(e) {
	return A({
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
function N(e) {
	return A({
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
function ee(e) {
	return A({
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
var P = {
	padding: "8px 0 8px",
	outline: 0,
	display: "flex",
	alignItems: "center",
	color: "inherit",
	textDecoration: "none",
	position: "relative",
	top: "16px"
}, F = {
	alignItems: "center",
	justifyContent: "center",
	position: "relative",
	verticalAlign: "middle",
	stroke: "none"
}, I = {
	maxWidth: "100%",
	overflow: "hidden",
	textOverflow: "ellipsis",
	verticalAlign: "middle"
}, L = {
	display: "flex",
	flexDirection: "column",
	marginTop: "1em"
}, R = {
	color: "inherit",
	textDecoration: "none"
}, z = {
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
}, B = {
	mobile: {
		menuItem: {
			...P,
			width: "100%",
			flexDirection: "row",
			justifyContent: "flex-start"
		},
		menuItemIcon: {
			...F,
			display: "inline-block",
			whiteSpace: "nowrap",
			marginLeft: "2rem"
		},
		menuItemText: {
			...I,
			fontSize: "1rem",
			display: "inline-block",
			whiteSpace: "nowrap",
			margin: "0 1rem 0 1rem"
		},
		groupList: {
			...L,
			width: "100%"
		},
		groupListItem: {
			...R,
			display: "block",
			padding: "0.35em 1rem",
			fontSize: "0.95rem"
		}
	},
	compact: {
		menuItem: {
			...P,
			width: "4.5rem",
			flexDirection: "column",
			justifyContent: "center",
			textAlign: "center"
		},
		menuItemIcon: {
			...F,
			display: "inline-flex"
		},
		menuItemText: {
			...I,
			fontSize: "0.75rem",
			textOverflow: "wrap",
			margin: "0 1rem 0 1rem"
		},
		groupList: {
			...L,
			position: "relative",
			left: "1rem",
			zIndex: 1e3,
			backgroundColor: "#f5f5f5",
			boxShadow: "0 2px 4px #999",
			borderRadius: "4px",
			width: "max-content",
			minWidth: "max-content",
			maxWidth: "none"
		},
		groupListItem: {
			...R,
			padding: "0.3rem 1rem",
			display: "inline-flex",
			alignItems: "center",
			height: "fit-content",
			borderRadius: "0",
			width: "max-content"
		}
	},
	full: {
		menuItem: {
			...P,
			width: "100%",
			flexDirection: "row",
			justifyContent: "flex-start"
		},
		menuItemIcon: {
			...F,
			display: "inline-block",
			whiteSpace: "nowrap",
			marginLeft: "2rem"
		},
		menuItemText: {
			...I,
			fontSize: "1em",
			display: "inline-block",
			whiteSpace: "nowrap",
			margin: "0 1rem 0 1rem"
		},
		groupList: {
			...L,
			width: "100%"
		},
		groupListItem: {
			...R,
			display: "block",
			padding: "0.35rem 1rem",
			fontSize: "0.95rem",
			maxWidth: "100%",
			overflow: "hidden",
			textOverflow: "ellipsis"
		}
	}
}, V = {
	position: "fixed",
	inset: 0,
	zIndex: 999,
	backgroundColor: "rgba(0,0,0,0)"
}, H = () => typeof window > "u" ? "" : window.location.pathname, U = (e) => B[e] || B.compact, W = (e, t) => e.some((e) => e && (e.link === t || e.href === t)), G = (e) => e.link || e.href || "#", K = ({ baseStyle: e, isHovered: t, isActive: n, isGroupLink: r = !1, isTitle: i = !1 }) => ({
	...z.interactiveReset,
	...e,
	...r ? {
		width: "max-content",
		display: "flex",
		alignItems: "center"
	} : null,
	...r ? z.groupLink : null,
	...i ? z.title : null,
	...t && !i ? r ? z.groupItemHover : z.menuItemHover : null,
	...n && !i ? z.active : null
}), te = t(({ id: t, icon: n, text: o, link: s, groupItems: c = [], expanded: l = !1, isTitleItem: u = !1, mode: d = "compact", align: f = "left" }) => {
	let p = U(d), m = c.length > 0, h = H(), g = m && W(c, h), [v, y] = a(null), [b, x] = a((l || g) && d !== "compact"), S = i(() => H() === s || g ? "menu-item active" : "menu-item", [g, s]), C = d === "compact" ? {
		...p.groupList,
		...f === "right" ? {
			left: "auto",
			right: "1rem"
		} : {
			left: "1rem",
			right: "auto"
		},
		overflowX: "visible"
	} : p.groupList, w = (n, r) => {
		if (n.hr === !0) return /* @__PURE__ */ e.createElement("hr", {
			key: `group-separator-${t}-${r}`,
			style: z.separator
		});
		if (n.isTitleItem) return /* @__PURE__ */ e.createElement("div", {
			key: `group-title-${t}-${r}`,
			id: `menu-item-${t}-${r}`,
			className: "menu-item menu-item-title",
			style: K({
				baseStyle: p.groupListItem,
				isHovered: !1,
				isActive: !1,
				isTitle: !0
			})
		}, /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-text",
			style: p.menuItemText
		}, n.text));
		let i = G(n);
		return T(r, i, "menu-item-group-link" + (i === h ? " active" : ""), p.groupListItem, n.icon, n.text, `group-link-${r}`, !0);
	}, T = (n, r, i, a, o, s, c, l = !1) => {
		let u = i.includes("active");
		return /* @__PURE__ */ e.createElement("a", {
			key: `${r}-${n}`,
			id: "menu-item-" + t,
			className: i,
			href: r || "#",
			"aria-current": i.includes("active") ? "page" : void 0,
			onMouseEnter: () => y(c),
			onMouseLeave: () => y(null),
			style: K({
				baseStyle: a,
				isHovered: v === c,
				isActive: u,
				isGroupLink: l
			})
		}, o && typeof o == "function" ? /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-icon",
			style: p.menuItemIcon
		}, /* @__PURE__ */ e.createElement(o, { size: "2em" })) : o && typeof o == "object" ? /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-icon",
			style: p.menuItemIcon
		}, o) : null, /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-text",
			style: p.menuItemText
		}, s));
	};
	if (r(() => {
		g && d !== "compact" && x(!0);
	}, [g]), u) return /* @__PURE__ */ e.createElement("div", {
		id: "menu-item-" + t,
		className: "menu-item menu-item-title",
		style: K({
			baseStyle: p.menuItem,
			isHovered: !1,
			isActive: !1,
			isTitle: !0
		})
	}, /* @__PURE__ */ e.createElement("div", {
		className: "menu-item-text",
		style: p.menuItemText
	}, o));
	if (m) {
		let r = `menu-item-group-${t}`;
		return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("button", {
			id: "menu-item-" + t,
			type: "button",
			className: d === "compact" ? S : "menu-item menu-item-group",
			"aria-haspopup": "true",
			"aria-controls": r,
			"aria-expanded": b,
			style: K({
				baseStyle: {
					...p.menuItem,
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
			style: p.menuItemIcon
		}, n ? /* @__PURE__ */ e.createElement(n, { size: "2em" }) : null), /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-text",
			style: p.menuItemText
		}, o), b ? /* @__PURE__ */ e.createElement(M, { size: "1.5em" }) : /* @__PURE__ */ e.createElement(N, { size: "1.5em" })), b ? /* @__PURE__ */ e.createElement(e.Fragment, null, d === "compact" && /* @__PURE__ */ e.createElement(_, {
			onClick: () => x(!1),
			isHidden: !b,
			style: V
		}), /* @__PURE__ */ e.createElement("div", {
			id: r,
			className: "menu-item-group",
			style: C
		}, c.map(w))) : null);
	}
	return T(t, s, S, p.menuItem, n, o, "single-link");
}), q = [
	"mobile",
	"compact",
	"full"
], J = ["left", "right"], Y = 768, ne = 1360, re = 100, X = (e) => q.includes(e), Z = (e) => q.indexOf(e), ie = (e) => J.includes(e), Q = () => typeof window > "u" ? "compact" : window.innerWidth <= Y ? "mobile" : window.innerWidth <= ne ? "compact" : "full", ae = (e, t, n, r) => {
	if (X(t)) return t;
	let i = e;
	return X(n) && Z(i) < Z(n) && (i = n), X(r) && Z(i) > Z(r) && (i = r), i;
}, $ = (t, n) => t == null ? null : e.isValidElement(t) || typeof t == "string" || typeof t == "number" ? t : typeof t != "object" || Array.isArray(t) ? null : t[n] !== void 0 && t[n] !== null ? t[n] : t.default !== void 0 && t.default !== null ? t.default : null, oe = ({ menu: t = [], force: v = "", min: y = "", max: b = "", showToggle: x = !1, align: S = "left", brand: C = null, header: w = null, footer: T = null, menuIcon: E = null, menuIconOpen: D = null, menuIconClose: O = null }) => {
	let [k, A] = a(Q), j = i(() => ae(k, v, y, b), [
		k,
		v,
		y,
		b
	]), [M, N] = a(() => j === "mobile"), [P, F] = a(!1), [I, L] = a(!1), R = x || j === "mobile", B = i(() => ie(S) ? S : "left", [S]), V = i(() => $(w, j) || $(C, j), [
		C,
		w,
		j
	]), H = i(() => $(T, j), [T, j]);
	r(() => {}, [S, t]);
	let U = n(() => {
		A(Q());
	}, []), W = n(() => {
		N((e) => !e);
	}, []), G = n(() => {
		N(!0);
	}, []), K = i(() => M ? "menu hidden" : "menu", [M]), q = i(() => ({
		...o,
		...h[j],
		...j === "mobile" ? {
			position: "fixed",
			height: "100vh"
		} : null,
		...B === "right" ? {
			left: "auto",
			right: 0,
			transform: M ? "translateX(100%)" : "translateX(0)"
		} : {
			left: M ? "-19.375rem" : 0,
			right: "auto",
			transform: "translateX(0)"
		}
	}), [
		M,
		j,
		B
	]), J = i(() => ({
		backgroundColor: M ? "rgba(0,0,0,0)" : "rgba(100,100,100,0.3)",
		...g
	}), [M]), Y = i(() => ({
		...s,
		...B === "right" ? {
			float: "right",
			marginLeft: 0,
			marginRight: "0.8rem"
		} : null,
		...P ? c : null,
		...I ? l : null
	}), [
		I,
		P,
		B
	]);
	return r(() => {
		N(j === "mobile");
	}, [j]), r(() => {
		if (typeof window > "u") return;
		let e, t = () => {
			e && window.clearTimeout(e), e = window.setTimeout(U, re);
		};
		return window.addEventListener("resize", t), U(), () => {
			e && window.clearTimeout(e), window.removeEventListener("resize", t);
		};
	}, [U]), /* @__PURE__ */ e.createElement(e.Fragment, null, R ? /* @__PURE__ */ e.createElement("button", {
		type: "button",
		className: "menu-button",
		"aria-label": "Toggle menu",
		"aria-controls": "menu",
		"aria-expanded": !M,
		onClick: W,
		onMouseEnter: () => F(!0),
		onMouseLeave: () => F(!1),
		onFocus: () => L(!0),
		onBlur: () => L(!1),
		style: Y
	}, D && O ? M ? D : O : D || O || E || /* @__PURE__ */ e.createElement(ee, { size: "2em" })) : null, /* @__PURE__ */ e.createElement("div", {
		className: K,
		id: "menu",
		style: q
	}, /* @__PURE__ */ e.createElement("div", { style: d }, R ? /* @__PURE__ */ e.createElement("div", { style: u }) : null, V ? /* @__PURE__ */ e.createElement("div", {
		id: "menu-header",
		style: f
	}, V) : null, /* @__PURE__ */ e.createElement("div", {
		id: "menu-items",
		style: p
	}, t.map((t, n) => t.hr === !0 ? /* @__PURE__ */ e.createElement("hr", {
		key: `menu-separator-${n}`,
		style: z.separator
	}) : /* @__PURE__ */ e.createElement(te, {
		key: t.link || t.href || t.groupTitle || t.text || `menu-item-${n}`,
		id: n,
		icon: t.icon,
		text: t.text || t.groupTitle,
		link: t.link || t.href,
		groupItems: t.groupItems,
		expanded: t.expanded,
		isTitleItem: t.isTitleItem,
		mode: j,
		align: B
	}))), H ? /* @__PURE__ */ e.createElement("div", {
		id: "menu-footer",
		style: m
	}, H) : null)), j === "mobile" ? /* @__PURE__ */ e.createElement(_, {
		onClick: G,
		isHidden: M,
		style: J
	}) : null);
};
//#endregion
export { oe as default };
