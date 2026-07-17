import e, { memo as t, useCallback as n, useEffect as r, useMemo as i, useState as a } from "react";
//#region src/SideMenu.styles.js
var o = {
	background: "#f5f5f5",
	text: "inherit",
	hoverBackground: "rgba(0, 0, 0, 0.1)",
	groupHoverBackground: "rgba(0, 0, 0, 0.08)",
	activeText: "#66f",
	toggleHoverBackground: "rgba(0, 0, 0, 0.1)",
	toggleFocusOutline: "#66f",
	overlayBackground: "rgba(100,100,100,0.3)"
}, s = (e) => ({
	minHeight: "100%",
	margin: 0,
	padding: 0,
	position: "absolute",
	top: 0,
	right: 0,
	display: "inline-block",
	backgroundColor: e.background,
	color: e.text,
	zIndex: 998
}), c = () => ({
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
}), l = (e) => ({ backgroundColor: e.toggleHoverBackground }), u = (e) => ({
	outline: `0.125rem solid ${e.toggleFocusOutline}`,
	outlineOffset: "0.125rem"
}), d = { height: "2.5em" }, f = {
	mobile: {
		width: "18.75rem",
		maxWidth: "100%",
		boxShadow: "1px 1px 5px 1px #999",
		paddingTop: "2rem",
		transition: "ease-out 300ms"
	},
	compact: { width: "4.5rem" },
	full: { width: "13.5rem" }
}, p = {
	position: "absolute",
	left: 0,
	top: 0,
	width: "100vw",
	height: "100vh",
	overflow: "hidden",
	zIndex: 997,
	transition: "linear 300ms",
	cursor: "normal"
}, m = ({ onClick: t, isHidden: n, style: r }) => /* @__PURE__ */ e.createElement("div", {
	id: "menu-whitespace-target",
	hidden: n,
	onClick: t,
	style: r || p
}), h = {
	color: void 0,
	size: void 0,
	className: void 0,
	style: void 0,
	attr: void 0
}, g = e.createContext && /*#__PURE__*/ e.createContext(h), _ = [
	"attr",
	"size",
	"title"
];
function v(e, t) {
	if (e == null) return {};
	var n = y(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function y(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function b() {
	return b = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, b.apply(this, arguments);
}
function x(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function S(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? x(Object(n), !0).forEach(function(t) {
			C(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function C(e, t, n) {
	return t = w(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function w(e) {
	var t = T(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function T(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function E(t) {
	return t && t.map((t, n) => /*#__PURE__*/ e.createElement(t.tag, S({ key: n }, t.attr), E(t.child)));
}
function D(t) {
	return (n) => /*#__PURE__*/ e.createElement(O, b({ attr: S({}, t.attr) }, n), E(t.child));
}
function O(t) {
	var n = (n) => {
		var { attr: r, size: i, title: a } = t, o = v(t, _), s = i || n.size || "1em", c;
		return n.className && (c = n.className), t.className && (c = (c ? c + " " : "") + t.className), /*#__PURE__*/ e.createElement("svg", b({
			stroke: "currentColor",
			fill: "currentColor",
			strokeWidth: "0"
		}, n.attr, r, o, {
			className: c,
			style: S(S({ color: t.color || n.color }, n.style), t.style),
			height: s,
			width: s,
			xmlns: "http://www.w3.org/2000/svg"
		}), a && /*#__PURE__*/ e.createElement("title", null, a), t.children);
	};
	return g === void 0 ? n(h) : /*#__PURE__*/ e.createElement(g.Consumer, null, (e) => n(e));
}
//#endregion
//#region node_modules/react-icons/md/index.mjs
function k(e) {
	return D({
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
function A(e) {
	return D({
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
function j(e) {
	return D({
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
var M = {
	padding: "8px 0 8px",
	outline: 0,
	display: "flex",
	alignItems: "center",
	color: "inherit",
	textDecoration: "none",
	position: "relative",
	top: "16px"
}, N = {
	alignItems: "center",
	justifyContent: "center",
	position: "relative",
	verticalAlign: "middle",
	stroke: "none"
}, P = {
	maxWidth: "100%",
	overflow: "hidden",
	textOverflow: "ellipsis",
	verticalAlign: "middle"
}, F = {
	display: "flex",
	flexDirection: "column",
	marginTop: "1em"
}, I = {
	color: "inherit",
	textDecoration: "none"
}, L = {
	interactiveReset: {
		color: "inherit",
		textDecoration: "none",
		border: 0,
		backgroundColor: "transparent",
		font: "inherit",
		textAlign: "left"
	},
	groupLink: { borderRadius: "0.25rem" },
	title: { fontWeight: "bold" },
	separator: { marginTop: "2rem" }
}, R = (e) => ({
	menuItemHover: { backgroundColor: e.hoverBackground },
	groupItemHover: { backgroundColor: e.groupHoverBackground },
	active: { color: e.activeText }
}), z = (e) => ({
	mobile: {
		menuItem: {
			...M,
			width: "100%",
			flexDirection: "row",
			justifyContent: "flex-start"
		},
		menuItemIcon: {
			...N,
			display: "inline-block",
			whiteSpace: "nowrap",
			marginLeft: "2rem"
		},
		menuItemText: {
			...P,
			fontSize: "1rem",
			display: "inline-block",
			whiteSpace: "nowrap",
			margin: "0 1rem 0 1rem"
		},
		groupList: { ...F },
		groupListItem: {
			...I,
			display: "block",
			padding: "0.35em 1rem",
			fontSize: "0.95rem",
			width: "100%",
			minWidth: "100%",
			overflow: "hidden",
			textOverflow: "ellipsis"
		}
	},
	compact: {
		menuItem: {
			...M,
			width: "4.5rem",
			flexDirection: "column",
			justifyContent: "center",
			textAlign: "center"
		},
		menuItemIcon: {
			...N,
			display: "inline-flex"
		},
		menuItemText: {
			...P,
			fontSize: "0.75rem",
			textOverflow: "wrap",
			margin: "0 1rem 0 1rem"
		},
		groupList: {
			...F,
			position: "relative",
			left: "1rem",
			zIndex: 1e3,
			backgroundColor: e.background,
			boxShadow: "0 2px 4px #999",
			borderRadius: "4px",
			width: "max-content",
			minWidth: "max-content"
		},
		groupListItem: {
			...I,
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
			...M,
			width: "100%",
			flexDirection: "row",
			justifyContent: "flex-start"
		},
		menuItemIcon: {
			...N,
			display: "inline-block",
			whiteSpace: "nowrap",
			marginLeft: "2rem"
		},
		menuItemText: {
			...P,
			fontSize: "1em",
			display: "inline-block",
			whiteSpace: "nowrap",
			margin: "0 1rem 0 1rem"
		},
		groupList: { ...F },
		groupListItem: {
			...I,
			display: "block",
			padding: "0.35rem 1rem",
			fontSize: "0.95rem",
			overflow: "hidden",
			textOverflow: "ellipsis",
			width: "100%",
			minWidth: "100%",
			overflow: "hidden",
			textOverflow: "ellipsis"
		}
	}
}), B = {
	position: "fixed",
	inset: 0,
	zIndex: 999,
	backgroundColor: "rgba(0,0,0,0)"
}, V = () => typeof window > "u" ? "" : window.location.pathname, H = (e, t) => t[e] || t.compact, U = (e, t) => e.some((e) => e && (e.link === t || e.href === t)), W = (e) => e.link || e.href || "#", G = (e) => !e || e === "#" || typeof window > "u" || /^(mailto:|tel:|javascript:)/i.test(e) ? !1 : new URL(e, window.location.href).origin === window.location.origin, K = (e) => {
	let t = new URL(e, window.location.href), n = t.pathname + t.search + t.hash;
	n !== window.location.pathname + window.location.search + window.location.hash && (window.history.pushState({}, "", n), window.dispatchEvent(new PopStateEvent("popstate")));
}, q = ({ baseStyle: e, isHovered: t, isActive: n, colorStyles: r, isGroupLink: i = !1, isTitle: a = !1 }) => ({
	...L.interactiveReset,
	...e,
	...i ? {
		width: "max-content",
		display: "flex",
		alignItems: "center"
	} : null,
	...i ? L.groupLink : null,
	...a ? L.title : null,
	...t && !a ? i ? r.groupItemHover : r.menuItemHover : null,
	...n && !a ? r.active : null
}), ee = t(({ id: t, icon: n, text: o, link: s, groupItems: c = [], expanded: l = !1, isTitleItem: u = !1, mode: d = "compact", align: f = "left", colors: p, onNavigate: h }) => {
	let g = i(() => z(p), [p]), _ = i(() => R(p), [p]), v = H(d, g), y = c.length > 0, [, b] = a(0), x = V(), S = y && U(c, x), [C, w] = a(null), [T, E] = a((l || S) && d !== "compact"), D = i(() => x === s || S ? "menu-item active" : "menu-item", [
		x,
		S,
		s
	]), O = d === "compact" ? {
		...v.groupList,
		...f === "right" ? {
			left: "auto",
			right: "1rem"
		} : {
			left: "1rem",
			right: "auto"
		},
		overflowX: "visible"
	} : v.groupList, j = (n, r) => {
		if (n.hr === !0) return /* @__PURE__ */ e.createElement("hr", {
			key: `group-separator-${t}-${r}`,
			style: L.separator
		});
		if (n.isTitleItem) return /* @__PURE__ */ e.createElement("div", {
			key: `group-title-${t}-${r}`,
			id: `menu-item-${t}-${r}`,
			className: "menu-item menu-item-title",
			style: q({
				baseStyle: v.groupListItem,
				isHovered: !1,
				isActive: !1,
				colorStyles: _,
				isTitle: !0
			})
		}, /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-text",
			style: v.menuItemText
		}, n.text));
		let i = W(n);
		return M(r, i, "menu-item-group-link" + (i === x ? " active" : ""), v.groupListItem, n.icon, n.text, `group-link-${r}`, !0);
	}, M = (n, r, i, a, o, s, c, l = !1) => {
		let u = i.includes("active");
		return /* @__PURE__ */ e.createElement("button", {
			key: `${r}-${n}`,
			id: "menu-item-" + t,
			type: "button",
			role: "link",
			className: i,
			"data-link": r || "",
			"aria-current": i.includes("active") ? "page" : void 0,
			onClick: () => {
				G(r) && (K(r), typeof h == "function" && h(r));
			},
			onMouseEnter: () => w(c),
			onMouseLeave: () => w(null),
			style: q({
				baseStyle: a,
				isHovered: C === c,
				isActive: u,
				colorStyles: _,
				isGroupLink: l
			})
		}, o && typeof o == "function" ? /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-icon",
			style: v.menuItemIcon
		}, /* @__PURE__ */ e.createElement(o, { size: "2em" })) : o && typeof o == "object" ? /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-icon",
			style: v.menuItemIcon
		}, o) : null, /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-text",
			style: v.menuItemText
		}, s));
	};
	if (r(() => {
		if (typeof window > "u") return;
		let e = () => {
			b((e) => e + 1);
		};
		return window.addEventListener("popstate", e), () => {
			window.removeEventListener("popstate", e);
		};
	}, []), r(() => {
		S && d !== "compact" && E(!0);
	}, [S, d]), u) return /* @__PURE__ */ e.createElement("div", {
		id: "menu-item-" + t,
		className: "menu-item menu-item-title",
		style: q({
			baseStyle: v.menuItem,
			isHovered: !1,
			isActive: !1,
			colorStyles: _,
			isTitle: !0
		})
	}, /* @__PURE__ */ e.createElement("div", {
		className: "menu-item-text",
		style: v.menuItemText
	}, o));
	if (y) {
		let r = `menu-item-group-${t}`;
		return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("button", {
			id: "menu-item-" + t,
			type: "button",
			className: d === "compact" ? D : "menu-item menu-item-group",
			"aria-haspopup": "true",
			"aria-controls": r,
			"aria-expanded": T,
			style: q({
				baseStyle: {
					...v.menuItem,
					cursor: "pointer"
				},
				isHovered: C === "group-toggle",
				isActive: d === "compact" && D.includes("active"),
				colorStyles: _
			}),
			onClick: () => E((e) => !e),
			onMouseEnter: () => w("group-toggle"),
			onMouseLeave: () => w(null)
		}, /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-icon",
			style: v.menuItemIcon
		}, n ? /* @__PURE__ */ e.createElement(n, { size: "2em" }) : null), /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-text",
			style: v.menuItemText
		}, o), T ? /* @__PURE__ */ e.createElement(k, { size: "1.5em" }) : /* @__PURE__ */ e.createElement(A, { size: "1.5em" })), T ? /* @__PURE__ */ e.createElement(e.Fragment, null, d === "compact" && /* @__PURE__ */ e.createElement(m, {
			onClick: () => E(!1),
			isHidden: !T,
			style: B
		}), /* @__PURE__ */ e.createElement("div", {
			id: r,
			className: "menu-item-group",
			style: O
		}, c.map(j))) : null);
	}
	return M(t, s, D, v.menuItem, n, o, "single-link");
}), J = [
	"mobile",
	"compact",
	"full"
], te = ["left", "right"], Y = {
	mobile: 768,
	desktop: 1360
}, ne = 100, X = (e) => J.includes(e), Z = (e) => J.indexOf(e), re = (e) => te.includes(e), Q = (e) => typeof e == "number" && Number.isFinite(e) && e > 0, ie = (e) => {
	if (!e || typeof e != "object" || Array.isArray(e)) return Y;
	let t = Q(e.mobile) ? e.mobile : Y.mobile, n = Q(e.desktop) ? e.desktop : Y.desktop;
	return n <= t ? Y : {
		mobile: t,
		desktop: n
	};
}, $ = (e) => typeof window > "u" ? "compact" : window.innerWidth <= e.mobile ? "mobile" : window.innerWidth <= e.desktop ? "compact" : "full", ae = (e, t, n, r) => {
	if (X(t)) return t;
	let i = e;
	return X(n) && Z(i) < Z(n) && (i = n), X(r) && Z(i) > Z(r) && (i = r), i;
}, oe = ({ menu: t = [], force: h = "", min: g = "", max: _ = "", showToggle: v = !1, align: y = "left", menuIcon: b = null, menuIconOpen: x = null, menuIconClose: S = null, colors: C = {}, breakpoints: w = null }) => {
	let T = i(() => ie(w), [w]), [E, D] = a(() => $(T)), O = i(() => ae(E, h, g, _), [
		E,
		h,
		g,
		_
	]), [k, A] = a(() => O === "mobile"), [M, N] = a(!1), [P, F] = a(!1), I = v || O === "mobile", R = i(() => re(y) ? y : "left", [y]), z = i(() => ({
		...o,
		...C && typeof C == "object" ? C : null
	}), [C]);
	r(() => {}, [
		y,
		w,
		C,
		t
	]);
	let B = n(() => {
		D($(T));
	}, [T]), V = n(() => {
		A((e) => !e);
	}, []), H = n(() => {
		A(!0);
	}, []), U = n(() => {
		O === "mobile" && A(!0);
	}, [O]), W = i(() => k ? "menu hidden" : "menu", [k]), G = i(() => ({
		...s(z),
		...f[O],
		...O === "mobile" ? {
			position: "fixed",
			height: "100vh"
		} : null,
		...R === "right" ? {
			left: "auto",
			right: 0,
			transform: k ? "translateX(100%)" : "translateX(0)"
		} : {
			left: k ? "-19.375rem" : 0,
			right: "auto",
			transform: "translateX(0)"
		}
	}), [
		k,
		O,
		R,
		z
	]), K = i(() => ({
		backgroundColor: k ? "rgba(0,0,0,0)" : z.overlayBackground,
		...p
	}), [k, z]), q = i(() => ({
		...c(),
		...R === "right" ? {
			float: "right",
			marginLeft: 0,
			marginRight: "0.8rem"
		} : null,
		...M ? l(z) : null,
		...P ? u(z) : null
	}), [
		P,
		M,
		R,
		z
	]);
	return r(() => {
		A(O === "mobile");
	}, [O]), r(() => {
		D($(T));
	}, [T]), r(() => {
		if (typeof window > "u") return;
		let e, t = () => {
			e && window.clearTimeout(e), e = window.setTimeout(B, ne);
		};
		return window.addEventListener("resize", t), B(), () => {
			e && window.clearTimeout(e), window.removeEventListener("resize", t);
		};
	}, [B]), /* @__PURE__ */ e.createElement(e.Fragment, null, I ? /* @__PURE__ */ e.createElement("button", {
		type: "button",
		className: "menu-button",
		"aria-label": "Toggle menu",
		"aria-controls": "menu",
		"aria-expanded": !k,
		onClick: V,
		onMouseEnter: () => N(!0),
		onMouseLeave: () => N(!1),
		onFocus: () => F(!0),
		onBlur: () => F(!1),
		style: q
	}, x && S ? k ? x : S : x || S || b || /* @__PURE__ */ e.createElement(j, { size: "2em" })) : null, /* @__PURE__ */ e.createElement("div", {
		className: W,
		id: "menu",
		style: G
	}, I ? /* @__PURE__ */ e.createElement("div", { style: d }) : null, t.map((t, n) => t.hr === !0 ? /* @__PURE__ */ e.createElement("hr", {
		key: `menu-separator-${n}`,
		style: L.separator
	}) : /* @__PURE__ */ e.createElement(ee, {
		key: t.link || t.href || t.groupTitle || t.text || `menu-item-${n}`,
		id: n,
		icon: t.icon,
		text: t.text || t.groupTitle,
		link: t.link || t.href,
		groupItems: t.groupItems,
		expanded: t.expanded,
		isTitleItem: t.isTitleItem,
		mode: O,
		align: R,
		colors: z,
		onNavigate: U
	})), /* @__PURE__ */ e.createElement("br", null)), O === "mobile" ? /* @__PURE__ */ e.createElement(m, {
		onClick: H,
		isHidden: k,
		style: K
	}) : null);
};
//#endregion
export { oe as default };
