import e, { memo as t, useCallback as n, useEffect as r, useMemo as i, useState as a } from "react";
var o = (e) => typeof e == "number" && Number.isFinite(e), s = (e) => {
	let t = o(e) ? e : 998;
	return {
		overlay: t - 1,
		menu: t,
		toggle: t + 1,
		groupOverlay: t + 1,
		groupList: t + 2
	};
}, c = {
	background: "#f5f5f5",
	text: "inherit",
	hoverBackground: "rgba(0, 0, 0, 0.1)",
	groupHoverBackground: "rgba(0, 0, 0, 0.08)",
	separatorColor: "rgba(30, 41, 59, 0.15)",
	activeText: "#66f",
	toggleHoverBackground: "rgba(0, 0, 0, 0.1)",
	toggleFocusOutline: "#66f",
	overlayBackground: "rgba(100,100,100,0.3)"
}, l = (e, t = s()) => ({
	minHeight: "100%",
	margin: 0,
	padding: 0,
	position: "absolute",
	top: 0,
	right: 0,
	display: "inline-block",
	backgroundColor: e.background,
	color: e.text,
	zIndex: t.menu
}), u = (e = s()) => ({
	marginLeft: "0.8rem",
	border: "none",
	backgroundColor: "transparent",
	color: "inherit",
	fontFamily: "inherit",
	fontSize: "inherit",
	fontStyle: "inherit",
	fontWeight: "inherit",
	fontVariant: "inherit",
	fontStretch: "inherit",
	lineHeight: "inherit",
	cursor: "pointer",
	display: "inline-flex",
	position: "relative",
	top: "1rem",
	zIndex: e.toggle
}), ee = (e) => ({ backgroundColor: e.toggleHoverBackground }), d = (e) => ({
	outline: `0.125rem solid ${e.toggleFocusOutline}`,
	outlineOffset: "0.125rem"
}), f = { height: "2.5em" }, te = {
	display: "flex",
	flexDirection: "column",
	minHeight: "100%",
	height: "100%"
}, p = { flexShrink: 0 }, m = {
	display: "flex",
	flexDirection: "column",
	flex: "1 1 auto"
}, h = {
	flexShrink: 0,
	marginTop: "auto",
	position: "absolute",
	bottom: 0,
	width: "100%"
}, g = {
	mobile: {
		width: "18.75rem",
		maxWidth: "100%",
		boxShadow: "1px 1px 5px 1px #999",
		paddingTop: "2rem",
		transition: "ease-out 300ms"
	},
	medium: { width: "4.5rem" },
	full: { width: "13.5rem" }
}, _ = (e = s()) => ({
	position: "absolute",
	left: 0,
	top: 0,
	width: "100vw",
	height: "100vh",
	overflow: "hidden",
	zIndex: e.overlay,
	transition: "linear 300ms",
	cursor: "normal"
}), ne = ({ onClick: t, isHidden: n, style: r }) => /* @__PURE__ */ e.createElement("div", {
	id: "menu-whitespace-target",
	hidden: n,
	onClick: t,
	style: r || _()
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
// node_modules/react-icons/md/index.mjs
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
function re(e) {
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
// src/components/MenuItem.styles.js
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
	groupLink: { borderRadius: "0.25rem" },
	title: { fontWeight: "bold" },
	separator: {
		marginTop: "2rem",
		borderTopWidth: "0",
		borderBottom: "1px solid rgba(30, 41, 59, 0.15)",
		width: "100%"
	}
}, B = (e) => ({
	menuItemHover: { backgroundColor: e.hoverBackground },
	groupItemHover: { backgroundColor: e.groupHoverBackground },
	active: { color: e.activeText }
}), ie = (e, t = !1) => ({
	...z.separator,
	...t ? { marginTop: "1rem" } : null,
	borderBottom: `1px solid ${e && e.separatorColor ? e.separatorColor : "rgba(30, 41, 59, 0.15)"}`
}), V = (e, t = s(), n = !1) => {
	let r = {
		...P,
		...n ? {
			padding: "4px 0",
			top: "8px"
		} : null
	}, i = {
		...F,
		...n ? { fontSize: "0.75em" } : null
	}, a = {
		...I,
		margin: n ? "0 0.5rem" : "0 1rem 0 1rem"
	}, o = {
		...L,
		...n ? { marginTop: "0.5em" } : null
	};
	return {
		mobile: {
			menuItem: {
				...r,
				width: "100%",
				flexDirection: "row",
				justifyContent: "flex-start"
			},
			menuItemIcon: {
				...i,
				display: "inline-block",
				whiteSpace: "nowrap",
				marginLeft: n ? "1rem" : "2rem"
			},
			menuItemText: {
				...a,
				fontSize: "1rem",
				display: "inline-block",
				whiteSpace: "nowrap"
			},
			groupList: { ...o },
			groupListItem: {
				...R,
				display: "block",
				padding: n ? "0.2em 0.5rem" : "0.35em 1rem",
				fontSize: "0.95rem",
				width: "100%",
				minWidth: "100%",
				overflow: "hidden",
				textOverflow: "ellipsis"
			}
		},
		medium: {
			menuItem: {
				...r,
				width: "4.5rem",
				flexDirection: "column",
				justifyContent: "center",
				textAlign: "center"
			},
			menuItemIcon: {
				...i,
				display: "inline-flex"
			},
			menuItemText: {
				...a,
				fontSize: "0.75rem",
				textOverflow: "wrap"
			},
			groupList: {
				...o,
				left: "1rem",
				zIndex: t.groupList,
				backgroundColor: e.background,
				boxShadow: "0 2px 4px #999",
				borderRadius: "4px",
				width: "max-content",
				minWidth: "max-content"
			},
			groupListItem: {
				...R,
				padding: n ? "0.2rem 0.5rem" : "0.3rem 1rem",
				display: "flex",
				alignItems: "center",
				height: "fit-content",
				borderRadius: "0",
				width: "100%"
			}
		},
		full: {
			menuItem: {
				...r,
				width: "100%",
				flexDirection: "row",
				justifyContent: "flex-start"
			},
			menuItemIcon: {
				...i,
				display: "inline-block",
				whiteSpace: "nowrap",
				marginLeft: n ? "1rem" : "2rem"
			},
			menuItemText: {
				...a,
				fontSize: "1em",
				display: "inline-block",
				whiteSpace: "nowrap"
			},
			groupList: { ...o },
			groupListItem: {
				...R,
				display: "block",
				padding: n ? "0.2rem 0.5rem" : "0.35rem 1rem",
				fontSize: "0.95rem",
				overflow: "hidden",
				textOverflow: "ellipsis",
				width: "100%",
				minWidth: "100%",
				overflow: "hidden",
				textOverflow: "ellipsis"
			}
		}
	};
}, H = (e) => ({
	position: "fixed",
	inset: 0,
	zIndex: e.groupOverlay,
	backgroundColor: "rgba(0,0,0,0)"
}), U = () => typeof window > "u" ? "" : window.location.pathname, W = (e, t) => t[e] || t.medium, G = (e, t) => e.some((e) => e && (e.link === t || e.href === t)), K = (e) => e.link || e.href || "#", q = (e) => !e || e === "#" || typeof window > "u" || /^(mailto:|tel:|javascript:)/i.test(e) ? !1 : new URL(e, window.location.href).origin === window.location.origin, ae = (e) => {
	let t = new URL(e, window.location.href), n = t.pathname + t.search + t.hash;
	n !== window.location.pathname + window.location.search + window.location.hash && (window.history.pushState({}, "", n), window.dispatchEvent(new PopStateEvent("popstate")));
}, J = ({ baseStyle: e, isHovered: t, isActive: n, colorStyles: r, isGroupLink: i = !1, isTitle: a = !1 }) => ({
	...z.interactiveReset,
	...e,
	...i ? z.groupLink : null,
	...a ? z.title : null,
	...t && !a ? i ? r.groupItemHover : r.menuItemHover : null,
	...n && !a ? r.active : null
}), oe = t(({ id: t, icon: n, text: o, link: c, groupItems: l = [], expanded: u = !1, isTitleItem: ee = !1, mode: d = "medium", compact: f = !1, align: te = "left", colors: p, zIndexLayers: m, onNavigate: h }) => {
	let g = i(() => m && typeof m == "object" ? m : s(), [m]), _ = i(() => V(p, g, f), [
		p,
		g,
		f
	]), v = i(() => H(g), [g]), y = i(() => B(p), [p]), b = i(() => ie(p, f), [p, f]), x = W(d, _), S = l.length > 0, [, C] = a(0), w = U(), T = S && G(l, w), [E, D] = a(null), [O, k] = a((u || T) && d !== "medium"), A = i(() => w === c || T ? "menu-item active" : "menu-item", [
		w,
		T,
		c
	]), j = d === "medium" ? {
		...x.groupList,
		...te === "right" ? {
			left: "auto",
			right: "1rem"
		} : {
			left: "1rem",
			right: "auto"
		},
		overflowX: "visible"
	} : x.groupList, re = (n, r) => {
		if (n.hr === !0) return /* @__PURE__ */ e.createElement("hr", {
			key: `group-separator-${t}-${r}`,
			style: b
		});
		if (n.isTitleItem) return /* @__PURE__ */ e.createElement("div", {
			key: `group-title-${t}-${r}`,
			id: `menu-item-${t}-${r}`,
			className: "menu-item menu-item-title",
			style: J({
				baseStyle: x.groupListItem,
				isHovered: !1,
				isActive: !1,
				colorStyles: y,
				isTitle: !0
			})
		}, /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-text",
			style: x.menuItemText
		}, n.text));
		let i = K(n);
		return P(r, i, "menu-item-group-link" + (i === w ? " active" : ""), x.groupListItem, n.icon, n.text, `group-link-${r}`, !0);
	}, P = (n, r, i, a, o, s, c, l = !1) => {
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
				q(r) && (ae(r), typeof h == "function" && h(r));
			},
			onMouseEnter: () => D(c),
			onMouseLeave: () => D(null),
			style: J({
				baseStyle: a,
				isHovered: E === c,
				isActive: u,
				colorStyles: y,
				isGroupLink: l
			})
		}, o && typeof o == "function" ? /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-icon",
			style: x.menuItemIcon
		}, /* @__PURE__ */ e.createElement(o, { size: "2em" })) : o && typeof o == "object" ? /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-icon",
			style: x.menuItemIcon
		}, o) : null, /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-text",
			style: x.menuItemText
		}, s));
	};
	if (r(() => {
		if (typeof window > "u") return;
		let e = () => {
			C((e) => e + 1);
		};
		return window.addEventListener("popstate", e), () => {
			window.removeEventListener("popstate", e);
		};
	}, []), r(() => {
		T && d !== "medium" && k(!0);
	}, [T, d]), ee) return /* @__PURE__ */ e.createElement("div", {
		id: "menu-item-" + t,
		className: "menu-item menu-item-title",
		style: J({
			baseStyle: x.menuItem,
			isHovered: !1,
			isActive: !1,
			colorStyles: y,
			isTitle: !0
		})
	}, /* @__PURE__ */ e.createElement("div", {
		className: "menu-item-text",
		style: x.menuItemText
	}, o));
	if (S) {
		let r = `menu-item-group-${t}`;
		return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("button", {
			id: "menu-item-" + t,
			type: "button",
			className: d === "medium" ? A : "menu-item menu-item-group",
			"aria-haspopup": "true",
			"aria-controls": r,
			"aria-expanded": O,
			style: J({
				baseStyle: {
					...x.menuItem,
					cursor: "pointer"
				},
				isHovered: E === "group-toggle",
				isActive: d === "medium" && A.includes("active"),
				colorStyles: y
			}),
			onClick: () => k((e) => !e),
			onMouseEnter: () => D("group-toggle"),
			onMouseLeave: () => D(null)
		}, /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-icon",
			style: x.menuItemIcon
		}, n ? /* @__PURE__ */ e.createElement(n, { size: "2em" }) : null), /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-text",
			style: x.menuItemText
		}, o), O ? /* @__PURE__ */ e.createElement(M, { size: f ? "1em" : "1.5em" }) : /* @__PURE__ */ e.createElement(N, { size: f ? "1em" : "1.5em" })), O ? /* @__PURE__ */ e.createElement(e.Fragment, null, d === "medium" && /* @__PURE__ */ e.createElement(ne, {
			onClick: () => k(!1),
			isHidden: !O,
			style: v
		}), /* @__PURE__ */ e.createElement("div", {
			id: r,
			className: "menu-item-group",
			style: j
		}, l.map(re))) : null);
	}
	return P(t, c, A, x.menuItem, n, o, "single-link");
}), se = [
	"mobile",
	"medium",
	"full"
], Y = ["left", "right"], X = {
	mobile: 768,
	desktop: 1360
}, ce = 100, Z = (e) => se.includes(e), Q = (e) => se.indexOf(e), le = (e) => Y.includes(e), ue = (e) => typeof e == "number" && Number.isFinite(e) && e > 0, de = (e) => {
	if (!e || typeof e != "object" || Array.isArray(e)) return X;
	let t = ue(e.mobile) ? e.mobile : X.mobile, n = ue(e.desktop) ? e.desktop : X.desktop;
	return n <= t ? X : {
		mobile: t,
		desktop: n
	};
}, fe = (e) => typeof window > "u" ? "medium" : window.innerWidth <= e.mobile ? "mobile" : window.innerWidth <= e.desktop ? "medium" : "full", pe = (e, t, n, r) => {
	if (Z(t)) return t;
	let i = e;
	return Z(n) && Q(i) < Q(n) && (i = n), Z(r) && Q(i) > Q(r) && (i = r), i;
}, $ = (t, n) => t == null ? null : e.isValidElement(t) || typeof t == "string" || typeof t == "number" ? t : typeof t != "object" || Array.isArray(t) ? null : t[n] !== void 0 && t[n] !== null ? t[n] : t.default !== void 0 && t.default !== null ? t.default : null, me = ({ menu: t = [], force: o = "", min: v = "", max: y = "", compact: b = !1, showToggle: x = !1, align: S = "left", brand: C = null, header: w = null, footer: T = null, menuIcon: E = null, menuIconOpen: D = null, menuIconClose: O = null, colors: k = {}, breakpoints: A = null, zIndex: j = null }) => {
	let M = i(() => de(A), [A]), [N, P] = a(() => fe(M)), F = i(() => pe(N, o, v, y), [
		N,
		o,
		v,
		y
	]), [I, L] = a(() => F === "mobile"), [R, z] = a(!1), [B, V] = a(!1), H = x || F === "mobile", U = i(() => le(S) ? S : "left", [S]), W = i(() => $(w, F) || $(C, F), [
		C,
		w,
		F
	]), G = i(() => $(T, F), [T, F]), K = i(() => ({
		...c,
		...k && typeof k == "object" ? k : null
	}), [k]), q = i(() => s(j), [j]), ae = i(() => ie(K, b), [K, b]), J = i(() => ({
		...p,
		borderBottom: `1px solid ${K.separatorColor}`
	}), [K]), se = i(() => ({
		...h,
		borderTop: `1px solid ${K.separatorColor}`
	}), [K]);
	r(() => {}, [
		S,
		A,
		k,
		t,
		j
	]);
	let Y = n(() => {
		P(fe(M));
	}, [M]), X = n(() => {
		L((e) => !e);
	}, []), Z = n(() => {
		L(!0);
	}, []), Q = n(() => {
		F === "mobile" && L(!0);
	}, [F]), ue = i(() => I ? "menu hidden" : "menu", [I]), me = i(() => ({
		...l(K, q),
		...g[F],
		...F === "mobile" ? {
			position: "fixed",
			height: "100vh",
			...b ? { paddingTop: "1rem" } : null
		} : null,
		...U === "right" ? {
			left: "auto",
			right: 0,
			transform: I ? "translateX(100%)" : "translateX(0)"
		} : {
			left: I ? "-19.375rem" : 0,
			right: "auto",
			transform: "translateX(0)"
		}
	}), [
		b,
		I,
		F,
		U,
		K,
		q
	]), he = i(() => ({
		backgroundColor: I ? "rgba(0,0,0,0)" : K.overlayBackground,
		..._(q)
	}), [
		I,
		K,
		q
	]), ge = i(() => ({
		...u(q),
		...b ? {
			fontSize: "0.75em",
			top: "0.5rem",
			marginLeft: "0.5rem"
		} : null,
		...U === "right" ? {
			float: "right",
			marginLeft: 0,
			marginRight: b ? "0.5rem" : "0.8rem"
		} : null,
		...R ? ee(K) : null,
		...B ? d(K) : null
	}), [
		b,
		B,
		R,
		U,
		K,
		q
	]);
	return r(() => {
		L(F === "mobile");
	}, [F]), r(() => {
		P(fe(M));
	}, [M]), r(() => {
		if (typeof window > "u") return;
		let e, t = () => {
			e && window.clearTimeout(e), e = window.setTimeout(Y, ce);
		};
		return window.addEventListener("resize", t), Y(), () => {
			e && window.clearTimeout(e), window.removeEventListener("resize", t);
		};
	}, [Y]), /* @__PURE__ */ e.createElement(e.Fragment, null, H ? /* @__PURE__ */ e.createElement("button", {
		type: "button",
		className: "menu-button",
		"aria-label": "Toggle menu",
		"aria-controls": "menu",
		"aria-expanded": !I,
		onClick: X,
		onMouseEnter: () => z(!0),
		onMouseLeave: () => z(!1),
		onFocus: () => V(!0),
		onBlur: () => V(!1),
		style: ge
	}, D && O ? I ? D : O : D || O || E || /* @__PURE__ */ e.createElement(re, { size: "2em" })) : null, /* @__PURE__ */ e.createElement("div", {
		className: ue,
		id: "menu",
		style: me
	}, /* @__PURE__ */ e.createElement("div", { style: te }, H ? /* @__PURE__ */ e.createElement("div", { style: b ? { height: "2em" } : f }) : null, W ? /* @__PURE__ */ e.createElement("div", {
		id: "menu-header",
		style: J
	}, W) : null, /* @__PURE__ */ e.createElement("div", {
		id: "menu-items",
		style: m
	}, t.map((t, n) => t.hr === !0 ? /* @__PURE__ */ e.createElement("hr", {
		key: `menu-separator-${n}`,
		style: ae
	}) : /* @__PURE__ */ e.createElement(oe, {
		key: t.link || t.href || t.groupTitle || t.text || `menu-item-${n}`,
		id: n,
		icon: t.icon,
		text: t.text || t.groupTitle,
		link: t.link || t.href,
		groupItems: t.groupItems,
		expanded: t.expanded,
		isTitleItem: t.isTitleItem,
		mode: F,
		compact: b,
		align: U,
		colors: K,
		zIndexLayers: q,
		onNavigate: Q
	}))), G ? /* @__PURE__ */ e.createElement("div", {
		id: "menu-footer",
		style: se
	}, G) : null)), F === "mobile" ? /* @__PURE__ */ e.createElement(ne, {
		onClick: Z,
		isHidden: I,
		style: he
	}) : null);
};
export { me as default };
