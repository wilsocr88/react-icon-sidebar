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
	font: "inherit",
	cursor: "pointer",
	display: "inline-flex",
	position: "relative",
	top: "1rem",
	zIndex: e.toggle
}), ee = (e) => ({ backgroundColor: e.toggleHoverBackground }), d = (e) => ({
	outline: `0.125rem solid ${e.toggleFocusOutline}`,
	outlineOffset: "0.125rem"
}), te = { height: "2.5em" }, f = {
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
}, ne = {
	mobile: {
		width: "18.75rem",
		maxWidth: "100%",
		boxShadow: "1px 1px 5px 1px #999",
		paddingTop: "2rem",
		transition: "ease-out 300ms"
	},
	compact: { width: "4.5rem" },
	full: { width: "13.5rem" }
}, g = (e = s()) => ({
	position: "absolute",
	left: 0,
	top: 0,
	width: "100vw",
	height: "100vh",
	overflow: "hidden",
	zIndex: e.overlay,
	transition: "linear 300ms",
	cursor: "normal"
}), re = ({ onClick: t, isHidden: n, style: r }) => /* @__PURE__ */ e.createElement("div", {
	id: "menu-whitespace-target",
	hidden: n,
	onClick: t,
	style: r || g()
}), _ = {
	color: void 0,
	size: void 0,
	className: void 0,
	style: void 0,
	attr: void 0
}, v = e.createContext && /*#__PURE__*/ e.createContext(_), y = [
	"attr",
	"size",
	"title"
];
function b(e, t) {
	if (e == null) return {};
	var n = x(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function x(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function S() {
	return S = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, S.apply(this, arguments);
}
function C(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function w(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? C(Object(n), !0).forEach(function(t) {
			T(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function T(e, t, n) {
	return t = E(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function E(e) {
	var t = D(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function D(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function O(t) {
	return t && t.map((t, n) => /*#__PURE__*/ e.createElement(t.tag, w({ key: n }, t.attr), O(t.child)));
}
function k(t) {
	return (n) => /*#__PURE__*/ e.createElement(A, S({ attr: w({}, t.attr) }, n), O(t.child));
}
function A(t) {
	var n = (n) => {
		var { attr: r, size: i, title: a } = t, o = b(t, y), s = i || n.size || "1em", c;
		return n.className && (c = n.className), t.className && (c = (c ? c + " " : "") + t.className), /*#__PURE__*/ e.createElement("svg", S({
			stroke: "currentColor",
			fill: "currentColor",
			strokeWidth: "0"
		}, n.attr, r, o, {
			className: c,
			style: w(w({ color: t.color || n.color }, n.style), t.style),
			height: s,
			width: s,
			xmlns: "http://www.w3.org/2000/svg"
		}), a && /*#__PURE__*/ e.createElement("title", null, a), t.children);
	};
	return v === void 0 ? n(_) : /*#__PURE__*/ e.createElement(v.Consumer, null, (e) => n(e));
}
// node_modules/react-icons/md/index.mjs
function j(e) {
	return k({
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
function M(e) {
	return k({
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
function N(e) {
	return k({
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
}), ie = (e) => ({
	...z.separator,
	borderBottom: `1px solid ${e && e.separatorColor ? e.separatorColor : "rgba(30, 41, 59, 0.15)"}`
}), V = (e, t = s()) => ({
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
		groupList: { ...L },
		groupListItem: {
			...R,
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
			padding: "0.3rem 1rem",
			display: "flex",
			alignItems: "center",
			height: "fit-content",
			borderRadius: "0",
			width: "100%"
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
		groupList: { ...L },
		groupListItem: {
			...R,
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
}), H = (e) => ({
	position: "fixed",
	inset: 0,
	zIndex: e.groupOverlay,
	backgroundColor: "rgba(0,0,0,0)"
}), U = () => typeof window > "u" ? "" : window.location.pathname, W = (e, t) => t[e] || t.compact, G = (e, t) => e.some((e) => e && (e.link === t || e.href === t)), K = (e) => e.link || e.href || "#", ae = (e) => !e || e === "#" || typeof window > "u" || /^(mailto:|tel:|javascript:)/i.test(e) ? !1 : new URL(e, window.location.href).origin === window.location.origin, oe = (e) => {
	let t = new URL(e, window.location.href), n = t.pathname + t.search + t.hash;
	n !== window.location.pathname + window.location.search + window.location.hash && (window.history.pushState({}, "", n), window.dispatchEvent(new PopStateEvent("popstate")));
}, q = ({ baseStyle: e, isHovered: t, isActive: n, colorStyles: r, isGroupLink: i = !1, isTitle: a = !1 }) => ({
	...z.interactiveReset,
	...e,
	...i ? z.groupLink : null,
	...a ? z.title : null,
	...t && !a ? i ? r.groupItemHover : r.menuItemHover : null,
	...n && !a ? r.active : null
}), se = t(({ id: t, icon: n, text: o, link: c, groupItems: l = [], expanded: u = !1, isTitleItem: ee = !1, mode: d = "compact", align: te = "left", colors: f, zIndexLayers: p, onNavigate: m }) => {
	let h = i(() => p && typeof p == "object" ? p : s(), [p]), ne = i(() => V(f, h), [f, h]), g = i(() => H(h), [h]), _ = i(() => B(f), [f]), v = i(() => ie(f), [f]), y = W(d, ne), b = l.length > 0, [, x] = a(0), S = U(), C = b && G(l, S), [w, T] = a(null), [E, D] = a((u || C) && d !== "compact"), O = i(() => S === c || C ? "menu-item active" : "menu-item", [
		S,
		C,
		c
	]), k = d === "compact" ? {
		...y.groupList,
		...te === "right" ? {
			left: "auto",
			right: "1rem"
		} : {
			left: "1rem",
			right: "auto"
		},
		overflowX: "visible"
	} : y.groupList, A = (n, r) => {
		if (n.hr === !0) return /* @__PURE__ */ e.createElement("hr", {
			key: `group-separator-${t}-${r}`,
			style: v
		});
		if (n.isTitleItem) return /* @__PURE__ */ e.createElement("div", {
			key: `group-title-${t}-${r}`,
			id: `menu-item-${t}-${r}`,
			className: "menu-item menu-item-title",
			style: q({
				baseStyle: y.groupListItem,
				isHovered: !1,
				isActive: !1,
				colorStyles: _,
				isTitle: !0
			})
		}, /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-text",
			style: y.menuItemText
		}, n.text));
		let i = K(n);
		return N(r, i, "menu-item-group-link" + (i === S ? " active" : ""), y.groupListItem, n.icon, n.text, `group-link-${r}`, !0);
	}, N = (n, r, i, a, o, s, c, l = !1) => {
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
				ae(r) && (oe(r), typeof m == "function" && m(r));
			},
			onMouseEnter: () => T(c),
			onMouseLeave: () => T(null),
			style: q({
				baseStyle: a,
				isHovered: w === c,
				isActive: u,
				colorStyles: _,
				isGroupLink: l
			})
		}, o && typeof o == "function" ? /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-icon",
			style: y.menuItemIcon
		}, /* @__PURE__ */ e.createElement(o, { size: "2em" })) : o && typeof o == "object" ? /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-icon",
			style: y.menuItemIcon
		}, o) : null, /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-text",
			style: y.menuItemText
		}, s));
	};
	if (r(() => {
		if (typeof window > "u") return;
		let e = () => {
			x((e) => e + 1);
		};
		return window.addEventListener("popstate", e), () => {
			window.removeEventListener("popstate", e);
		};
	}, []), r(() => {
		C && d !== "compact" && D(!0);
	}, [C, d]), ee) return /* @__PURE__ */ e.createElement("div", {
		id: "menu-item-" + t,
		className: "menu-item menu-item-title",
		style: q({
			baseStyle: y.menuItem,
			isHovered: !1,
			isActive: !1,
			colorStyles: _,
			isTitle: !0
		})
	}, /* @__PURE__ */ e.createElement("div", {
		className: "menu-item-text",
		style: y.menuItemText
	}, o));
	if (b) {
		let r = `menu-item-group-${t}`;
		return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("button", {
			id: "menu-item-" + t,
			type: "button",
			className: d === "compact" ? O : "menu-item menu-item-group",
			"aria-haspopup": "true",
			"aria-controls": r,
			"aria-expanded": E,
			style: q({
				baseStyle: {
					...y.menuItem,
					cursor: "pointer"
				},
				isHovered: w === "group-toggle",
				isActive: d === "compact" && O.includes("active"),
				colorStyles: _
			}),
			onClick: () => D((e) => !e),
			onMouseEnter: () => T("group-toggle"),
			onMouseLeave: () => T(null)
		}, /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-icon",
			style: y.menuItemIcon
		}, n ? /* @__PURE__ */ e.createElement(n, { size: "2em" }) : null), /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-text",
			style: y.menuItemText
		}, o), E ? /* @__PURE__ */ e.createElement(j, { size: "1.5em" }) : /* @__PURE__ */ e.createElement(M, { size: "1.5em" })), E ? /* @__PURE__ */ e.createElement(e.Fragment, null, d === "compact" && /* @__PURE__ */ e.createElement(re, {
			onClick: () => D(!1),
			isHidden: !E,
			style: g
		}), /* @__PURE__ */ e.createElement("div", {
			id: r,
			className: "menu-item-group",
			style: k
		}, l.map(A))) : null);
	}
	return N(t, c, O, y.menuItem, n, o, "single-link");
}), J = [
	"mobile",
	"compact",
	"full"
], ce = ["left", "right"], Y = {
	mobile: 768,
	desktop: 1360
}, le = 100, X = (e) => J.includes(e), Z = (e) => J.indexOf(e), ue = (e) => ce.includes(e), Q = (e) => typeof e == "number" && Number.isFinite(e) && e > 0, de = (e) => {
	if (!e || typeof e != "object" || Array.isArray(e)) return Y;
	let t = Q(e.mobile) ? e.mobile : Y.mobile, n = Q(e.desktop) ? e.desktop : Y.desktop;
	return n <= t ? Y : {
		mobile: t,
		desktop: n
	};
}, $ = (e) => typeof window > "u" ? "compact" : window.innerWidth <= e.mobile ? "mobile" : window.innerWidth <= e.desktop ? "compact" : "full", fe = (e, t, n, r) => {
	if (X(t)) return t;
	let i = e;
	return X(n) && Z(i) < Z(n) && (i = n), X(r) && Z(i) > Z(r) && (i = r), i;
}, pe = (t, n) => t == null ? null : e.isValidElement(t) || typeof t == "string" || typeof t == "number" ? t : typeof t != "object" || Array.isArray(t) ? null : t[n] !== void 0 && t[n] !== null ? t[n] : t.default !== void 0 && t.default !== null ? t.default : null, me = ({ menu: t = [], force: o = "", min: _ = "", max: v = "", showToggle: y = !1, align: b = "left", brand: x = null, header: S = null, footer: C = null, menuIcon: w = null, menuIconOpen: T = null, menuIconClose: E = null, colors: D = {}, breakpoints: O = null, zIndex: k = null }) => {
	let A = i(() => de(O), [O]), [j, M] = a(() => $(A)), P = i(() => fe(j, o, _, v), [
		j,
		o,
		_,
		v
	]), [F, I] = a(() => P === "mobile"), [L, R] = a(!1), [z, B] = a(!1), V = y || P === "mobile", H = i(() => ue(b) ? b : "left", [b]), U = i(() => pe(S, P) || pe(x, P), [
		x,
		S,
		P
	]), W = i(() => pe(C, P), [C, P]), G = i(() => ({
		...c,
		...D && typeof D == "object" ? D : null
	}), [D]), K = i(() => s(k), [k]), ae = i(() => ie(G), [G]), oe = i(() => ({
		...p,
		borderBottom: `1px solid ${G.separatorColor}`
	}), [G]), q = i(() => ({
		...h,
		borderTop: `1px solid ${G.separatorColor}`
	}), [G]);
	r(() => {}, [
		b,
		O,
		D,
		t,
		k
	]);
	let J = n(() => {
		M($(A));
	}, [A]), ce = n(() => {
		I((e) => !e);
	}, []), Y = n(() => {
		I(!0);
	}, []), X = n(() => {
		P === "mobile" && I(!0);
	}, [P]), Z = i(() => F ? "menu hidden" : "menu", [F]), Q = i(() => ({
		...l(G, K),
		...ne[P],
		...P === "mobile" ? {
			position: "fixed",
			height: "100vh"
		} : null,
		...H === "right" ? {
			left: "auto",
			right: 0,
			transform: F ? "translateX(100%)" : "translateX(0)"
		} : {
			left: F ? "-19.375rem" : 0,
			right: "auto",
			transform: "translateX(0)"
		}
	}), [
		F,
		P,
		H,
		G,
		K
	]), me = i(() => ({
		backgroundColor: F ? "rgba(0,0,0,0)" : G.overlayBackground,
		...g(K)
	}), [
		F,
		G,
		K
	]), he = i(() => ({
		...u(K),
		...H === "right" ? {
			float: "right",
			marginLeft: 0,
			marginRight: "0.8rem"
		} : null,
		...L ? ee(G) : null,
		...z ? d(G) : null
	}), [
		z,
		L,
		H,
		G,
		K
	]);
	return r(() => {
		I(P === "mobile");
	}, [P]), r(() => {
		M($(A));
	}, [A]), r(() => {
		if (typeof window > "u") return;
		let e, t = () => {
			e && window.clearTimeout(e), e = window.setTimeout(J, le);
		};
		return window.addEventListener("resize", t), J(), () => {
			e && window.clearTimeout(e), window.removeEventListener("resize", t);
		};
	}, [J]), /* @__PURE__ */ e.createElement(e.Fragment, null, V ? /* @__PURE__ */ e.createElement("button", {
		type: "button",
		className: "menu-button",
		"aria-label": "Toggle menu",
		"aria-controls": "menu",
		"aria-expanded": !F,
		onClick: ce,
		onMouseEnter: () => R(!0),
		onMouseLeave: () => R(!1),
		onFocus: () => B(!0),
		onBlur: () => B(!1),
		style: he
	}, T && E ? F ? T : E : T || E || w || /* @__PURE__ */ e.createElement(N, { size: "2em" })) : null, /* @__PURE__ */ e.createElement("div", {
		className: Z,
		id: "menu",
		style: Q
	}, /* @__PURE__ */ e.createElement("div", { style: f }, V ? /* @__PURE__ */ e.createElement("div", { style: te }) : null, U ? /* @__PURE__ */ e.createElement("div", {
		id: "menu-header",
		style: oe
	}, U) : null, /* @__PURE__ */ e.createElement("div", {
		id: "menu-items",
		style: m
	}, t.map((t, n) => t.hr === !0 ? /* @__PURE__ */ e.createElement("hr", {
		key: `menu-separator-${n}`,
		style: ae
	}) : /* @__PURE__ */ e.createElement(se, {
		key: t.link || t.href || t.groupTitle || t.text || `menu-item-${n}`,
		id: n,
		icon: t.icon,
		text: t.text || t.groupTitle,
		link: t.link || t.href,
		groupItems: t.groupItems,
		expanded: t.expanded,
		isTitleItem: t.isTitleItem,
		mode: P,
		align: H,
		colors: G,
		zIndexLayers: K,
		onNavigate: X
	}))), W ? /* @__PURE__ */ e.createElement("div", {
		id: "menu-footer",
		style: q
	}, W) : null)), P === "mobile" ? /* @__PURE__ */ e.createElement(re, {
		onClick: Y,
		isHidden: F,
		style: me
	}) : null);
};
export { me as default };
