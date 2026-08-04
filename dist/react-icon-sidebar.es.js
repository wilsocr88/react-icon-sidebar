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
	display: "flex",
	flexDirection: "column",
	minHeight: "100%",
	height: "100%"
}, p = { flexShrink: 0 }, m = {
	display: "flex",
	flexDirection: "column",
	flex: "1 1 auto"
}, ee = {
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
}, te = ({ onClick: t, isHidden: n, style: r }) => /* @__PURE__ */ e.createElement("div", {
	id: "menu-whitespace-target",
	hidden: n,
	onClick: t,
	style: r || g
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
//#endregion
//#region node_modules/react-icons/md/index.mjs
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
function ne(e) {
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
//#endregion
//#region src/components/MenuItem.styles.js
var N = {
	padding: "8px 0 8px",
	outline: 0,
	display: "flex",
	alignItems: "center",
	color: "inherit",
	textDecoration: "none",
	position: "relative",
	top: "16px"
}, P = {
	alignItems: "center",
	justifyContent: "center",
	position: "relative",
	verticalAlign: "middle",
	stroke: "none"
}, F = {
	maxWidth: "100%",
	overflow: "hidden",
	textOverflow: "ellipsis",
	verticalAlign: "middle"
}, I = {
	display: "flex",
	flexDirection: "column",
	marginTop: "1em"
}, L = {
	color: "inherit",
	textDecoration: "none"
}, R = {
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
}, z = (e) => ({
	menuItemHover: { backgroundColor: e.hoverBackground },
	groupItemHover: { backgroundColor: e.groupHoverBackground },
	active: { color: e.activeText }
}), B = (e) => ({
	mobile: {
		menuItem: {
			...N,
			width: "100%",
			flexDirection: "row",
			justifyContent: "flex-start"
		},
		menuItemIcon: {
			...P,
			display: "inline-block",
			whiteSpace: "nowrap",
			marginLeft: "2rem"
		},
		menuItemText: {
			...F,
			fontSize: "1rem",
			display: "inline-block",
			whiteSpace: "nowrap",
			margin: "0 1rem 0 1rem"
		},
		groupList: { ...I },
		groupListItem: {
			...L,
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
			...N,
			width: "4.5rem",
			flexDirection: "column",
			justifyContent: "center",
			textAlign: "center"
		},
		menuItemIcon: {
			...P,
			display: "inline-flex"
		},
		menuItemText: {
			...F,
			fontSize: "0.75rem",
			textOverflow: "wrap",
			margin: "0 1rem 0 1rem"
		},
		groupList: {
			...I,
			position: "fixed",
			left: "1rem",
			zIndex: 1e3,
			backgroundColor: e.background,
			boxShadow: "0 2px 4px #999",
			borderRadius: "4px",
			width: "max-content",
			minWidth: "max-content"
		},
		groupListItem: {
			...L,
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
			...N,
			width: "100%",
			flexDirection: "row",
			justifyContent: "flex-start"
		},
		menuItemIcon: {
			...P,
			display: "inline-block",
			whiteSpace: "nowrap",
			marginLeft: "2rem"
		},
		menuItemText: {
			...F,
			fontSize: "1em",
			display: "inline-block",
			whiteSpace: "nowrap",
			margin: "0 1rem 0 1rem"
		},
		groupList: { ...I },
		groupListItem: {
			...L,
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
}), V = {
	position: "fixed",
	inset: 0,
	zIndex: 999,
	backgroundColor: "rgba(0,0,0,0)"
}, H = () => typeof window > "u" ? "" : window.location.pathname, U = (e, t) => t[e] || t.compact, W = (e, t) => e.some((e) => e && (e.link === t || e.href === t)), G = (e) => e.link || e.href || "#", K = (e) => !e || e === "#" || typeof window > "u" || /^(mailto:|tel:|javascript:)/i.test(e) ? !1 : new URL(e, window.location.href).origin === window.location.origin, re = (e) => {
	let t = new URL(e, window.location.href), n = t.pathname + t.search + t.hash;
	n !== window.location.pathname + window.location.search + window.location.hash && (window.history.pushState({}, "", n), window.dispatchEvent(new PopStateEvent("popstate")));
}, q = ({ baseStyle: e, isHovered: t, isActive: n, colorStyles: r, isGroupLink: i = !1, isTitle: a = !1 }) => ({
	...R.interactiveReset,
	...e,
	...i ? R.groupLink : null,
	...a ? R.title : null,
	...t && !a ? i ? r.groupItemHover : r.menuItemHover : null,
	...n && !a ? r.active : null
}), ie = t(({ id: t, icon: n, text: o, link: s, groupItems: c = [], expanded: l = !1, isTitleItem: u = !1, mode: d = "compact", align: f = "left", colors: p, onNavigate: m }) => {
	let ee = i(() => B(p), [p]), h = i(() => z(p), [p]), g = U(d, ee), _ = c.length > 0, [, v] = a(0), y = H(), b = _ && W(c, y), [x, S] = a(null), [C, w] = a((l || b) && d !== "compact"), T = i(() => y === s || b ? "menu-item active" : "menu-item", [
		y,
		b,
		s
	]), E = d === "compact" ? {
		...g.groupList,
		...f === "right" ? {
			left: "auto",
			right: "1rem"
		} : {
			left: "1rem",
			right: "auto"
		},
		overflowX: "visible"
	} : g.groupList, D = (n, r) => {
		if (n.hr === !0) return /* @__PURE__ */ e.createElement("hr", {
			key: `group-separator-${t}-${r}`,
			style: R.separator
		});
		if (n.isTitleItem) return /* @__PURE__ */ e.createElement("div", {
			key: `group-title-${t}-${r}`,
			id: `menu-item-${t}-${r}`,
			className: "menu-item menu-item-title",
			style: q({
				baseStyle: g.groupListItem,
				isHovered: !1,
				isActive: !1,
				colorStyles: h,
				isTitle: !0
			})
		}, /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-text",
			style: g.menuItemText
		}, n.text));
		let i = G(n);
		return O(r, i, "menu-item-group-link" + (i === y ? " active" : ""), g.groupListItem, n.icon, n.text, `group-link-${r}`, !0);
	}, O = (n, r, i, a, o, s, c, l = !1) => {
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
				K(r) && (re(r), typeof m == "function" && m(r));
			},
			onMouseEnter: () => S(c),
			onMouseLeave: () => S(null),
			style: q({
				baseStyle: a,
				isHovered: x === c,
				isActive: u,
				colorStyles: h,
				isGroupLink: l
			})
		}, o && typeof o == "function" ? /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-icon",
			style: g.menuItemIcon
		}, /* @__PURE__ */ e.createElement(o, { size: "2em" })) : o && typeof o == "object" ? /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-icon",
			style: g.menuItemIcon
		}, o) : null, /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-text",
			style: g.menuItemText
		}, s));
	};
	if (r(() => {
		if (typeof window > "u") return;
		let e = () => {
			v((e) => e + 1);
		};
		return window.addEventListener("popstate", e), () => {
			window.removeEventListener("popstate", e);
		};
	}, []), r(() => {
		b && d !== "compact" && w(!0);
	}, [b, d]), u) return /* @__PURE__ */ e.createElement("div", {
		id: "menu-item-" + t,
		className: "menu-item menu-item-title",
		style: q({
			baseStyle: g.menuItem,
			isHovered: !1,
			isActive: !1,
			colorStyles: h,
			isTitle: !0
		})
	}, /* @__PURE__ */ e.createElement("div", {
		className: "menu-item-text",
		style: g.menuItemText
	}, o));
	if (_) {
		let r = `menu-item-group-${t}`;
		return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("button", {
			id: "menu-item-" + t,
			type: "button",
			className: d === "compact" ? T : "menu-item menu-item-group",
			"aria-haspopup": "true",
			"aria-controls": r,
			"aria-expanded": C,
			style: q({
				baseStyle: {
					...g.menuItem,
					cursor: "pointer"
				},
				isHovered: x === "group-toggle",
				isActive: d === "compact" && T.includes("active"),
				colorStyles: h
			}),
			onClick: () => w((e) => !e),
			onMouseEnter: () => S("group-toggle"),
			onMouseLeave: () => S(null)
		}, /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-icon",
			style: g.menuItemIcon
		}, n ? /* @__PURE__ */ e.createElement(n, { size: "2em" }) : null), /* @__PURE__ */ e.createElement("div", {
			className: "menu-item-text",
			style: g.menuItemText
		}, o), C ? /* @__PURE__ */ e.createElement(j, { size: "1.5em" }) : /* @__PURE__ */ e.createElement(M, { size: "1.5em" })), C ? /* @__PURE__ */ e.createElement(e.Fragment, null, d === "compact" && /* @__PURE__ */ e.createElement(te, {
			onClick: () => w(!1),
			isHidden: !C,
			style: V
		}), /* @__PURE__ */ e.createElement("div", {
			id: r,
			className: "menu-item-group",
			style: E
		}, c.map(D))) : null);
	}
	return O(t, s, T, g.menuItem, n, o, "single-link");
}), J = [
	"mobile",
	"compact",
	"full"
], ae = ["left", "right"], Y = {
	mobile: 768,
	desktop: 1360
}, oe = 100, X = (e) => J.includes(e), Z = (e) => J.indexOf(e), se = (e) => ae.includes(e), ce = (e) => typeof e == "number" && Number.isFinite(e) && e > 0, le = (e) => {
	if (!e || typeof e != "object" || Array.isArray(e)) return Y;
	let t = ce(e.mobile) ? e.mobile : Y.mobile, n = ce(e.desktop) ? e.desktop : Y.desktop;
	return n <= t ? Y : {
		mobile: t,
		desktop: n
	};
}, Q = (e) => typeof window > "u" ? "compact" : window.innerWidth <= e.mobile ? "mobile" : window.innerWidth <= e.desktop ? "compact" : "full", ue = (e, t, n, r) => {
	if (X(t)) return t;
	let i = e;
	return X(n) && Z(i) < Z(n) && (i = n), X(r) && Z(i) > Z(r) && (i = r), i;
}, $ = (t, n) => t == null ? null : e.isValidElement(t) || typeof t == "string" || typeof t == "number" ? t : typeof t != "object" || Array.isArray(t) ? null : t[n] !== void 0 && t[n] !== null ? t[n] : t.default !== void 0 && t.default !== null ? t.default : null, de = ({ menu: t = [], force: _ = "", min: v = "", max: y = "", showToggle: b = !1, align: x = "left", brand: S = null, header: C = null, footer: w = null, menuIcon: T = null, menuIconOpen: E = null, menuIconClose: D = null, colors: O = {}, breakpoints: k = null }) => {
	let A = i(() => le(k), [k]), [j, M] = a(() => Q(A)), N = i(() => ue(j, _, v, y), [
		j,
		_,
		v,
		y
	]), [P, F] = a(() => N === "mobile"), [I, L] = a(!1), [z, B] = a(!1), V = b || N === "mobile", H = i(() => se(x) ? x : "left", [x]), U = i(() => $(C, N) || $(S, N), [
		S,
		C,
		N
	]), W = i(() => $(w, N), [w, N]), G = i(() => ({
		...o,
		...O && typeof O == "object" ? O : null
	}), [O]);
	r(() => {}, [
		x,
		k,
		O,
		t
	]);
	let K = n(() => {
		M(Q(A));
	}, [A]), re = n(() => {
		F((e) => !e);
	}, []), q = n(() => {
		F(!0);
	}, []), J = n(() => {
		N === "mobile" && F(!0);
	}, [N]), ae = i(() => P ? "menu hidden" : "menu", [P]), Y = i(() => ({
		...s(G),
		...h[N],
		...N === "mobile" ? {
			position: "fixed",
			height: "100vh"
		} : null,
		...H === "right" ? {
			left: "auto",
			right: 0,
			transform: P ? "translateX(100%)" : "translateX(0)"
		} : {
			left: P ? "-19.375rem" : 0,
			right: "auto",
			transform: "translateX(0)"
		}
	}), [
		P,
		N,
		H,
		G
	]), X = i(() => ({
		backgroundColor: P ? "rgba(0,0,0,0)" : G.overlayBackground,
		...g
	}), [P, G]), Z = i(() => ({
		...c(),
		...H === "right" ? {
			float: "right",
			marginLeft: 0,
			marginRight: "0.8rem"
		} : null,
		...I ? l(G) : null,
		...z ? u(G) : null
	}), [
		z,
		I,
		H,
		G
	]);
	return r(() => {
		F(N === "mobile");
	}, [N]), r(() => {
		M(Q(A));
	}, [A]), r(() => {
		if (typeof window > "u") return;
		let e, t = () => {
			e && window.clearTimeout(e), e = window.setTimeout(K, oe);
		};
		return window.addEventListener("resize", t), K(), () => {
			e && window.clearTimeout(e), window.removeEventListener("resize", t);
		};
	}, [K]), /* @__PURE__ */ e.createElement(e.Fragment, null, V ? /* @__PURE__ */ e.createElement("button", {
		type: "button",
		className: "menu-button",
		"aria-label": "Toggle menu",
		"aria-controls": "menu",
		"aria-expanded": !P,
		onClick: re,
		onMouseEnter: () => L(!0),
		onMouseLeave: () => L(!1),
		onFocus: () => B(!0),
		onBlur: () => B(!1),
		style: Z
	}, E && D ? P ? E : D : E || D || T || /* @__PURE__ */ e.createElement(ne, { size: "2em" })) : null, /* @__PURE__ */ e.createElement("div", {
		className: ae,
		id: "menu",
		style: Y
	}, /* @__PURE__ */ e.createElement("div", { style: f }, V ? /* @__PURE__ */ e.createElement("div", { style: d }) : null, U ? /* @__PURE__ */ e.createElement("div", {
		id: "menu-header",
		style: p
	}, U) : null, /* @__PURE__ */ e.createElement("div", {
		id: "menu-items",
		style: m
	}, t.map((t, n) => t.hr === !0 ? /* @__PURE__ */ e.createElement("hr", {
		key: `menu-separator-${n}`,
		style: R.separator
	}) : /* @__PURE__ */ e.createElement(ie, {
		key: t.link || t.href || t.groupTitle || t.text || `menu-item-${n}`,
		id: n,
		icon: t.icon,
		text: t.text || t.groupTitle,
		link: t.link || t.href,
		groupItems: t.groupItems,
		expanded: t.expanded,
		isTitleItem: t.isTitleItem,
		mode: N,
		align: H,
		colors: G,
		onNavigate: J
	}))), W ? /* @__PURE__ */ e.createElement("div", {
		id: "menu-footer",
		style: ee
	}, W) : null)), N === "mobile" ? /* @__PURE__ */ e.createElement(te, {
		onClick: q,
		isHidden: P,
		style: X
	}) : null);
};
//#endregion
export { de as default };
