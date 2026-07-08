import e, { memo as t, useCallback as n, useEffect as r, useMemo as i, useState as a } from "react";
//#region src/components/MenuItem.jsx
var o = {
	padding: "8px 0 8px",
	outline: 0,
	display: "flex",
	alignItems: "center",
	cursor: "pointer",
	color: "inherit",
	textDecoration: "none",
	position: "relative",
	top: "16px"
}, s = {
	alignItems: "center",
	justifyContent: "center",
	position: "relative",
	verticalAlign: "middle",
	stroke: "none"
}, c = {
	maxWidth: "100%",
	maxHeight: "1.4rem",
	overflow: "hidden",
	textOverflow: "ellipsis",
	fontWeight: 400,
	lineHeight: "1.4rem",
	verticalAlign: "middle"
}, l = {
	mobile: {
		menuItem: {
			...o,
			width: "100%",
			flexDirection: "row",
			justifyContent: "flex-start"
		},
		menuItemIcon: {
			...s,
			display: "inline-block",
			whiteSpace: "nowrap",
			marginLeft: "2em"
		},
		menuItemText: {
			...c,
			fontSize: "1em",
			display: "inline-block",
			whiteSpace: "nowrap",
			margin: "0 1em 0 1em"
		}
	},
	compact: {
		menuItem: {
			...o,
			width: "4.5em",
			flexDirection: "column",
			justifyContent: "center"
		},
		menuItemIcon: {
			...s,
			display: "inline-flex"
		},
		menuItemText: {
			...c,
			fontSize: "0.75em",
			whiteSpace: "nowrap"
		}
	},
	full: {
		menuItem: {
			...o,
			width: "100%",
			flexDirection: "row",
			justifyContent: "flex-start"
		},
		menuItemIcon: {
			...s,
			display: "inline-block",
			whiteSpace: "nowrap",
			marginLeft: "2em"
		},
		menuItemText: {
			...c,
			fontSize: "1em",
			display: "inline-block",
			whiteSpace: "nowrap",
			margin: "0 1em 0 1em"
		}
	}
}, u = () => typeof window > "u" ? "" : window.location.pathname, d = (e) => l[e] || l.compact, f = t(({ id: t, icon: n, text: r, link: a, mode: o = "compact" }) => {
	let s = d(o), c = i(() => u() === a ? "menu-item active" : "menu-item", [a]);
	return /* @__PURE__ */ e.createElement("a", {
		id: "menu-item-" + t,
		className: c,
		href: a || "#",
		"aria-current": c.includes("active") ? "page" : void 0,
		style: s.menuItem
	}, /* @__PURE__ */ e.createElement("div", {
		className: "menu-item-icon",
		style: s.menuItemIcon
	}, n ? /* @__PURE__ */ e.createElement(n, { size: "2em" }) : null), /* @__PURE__ */ e.createElement("div", {
		className: "menu-item-text",
		style: s.menuItemText
	}, r));
}), p = {
	color: void 0,
	size: void 0,
	className: void 0,
	style: void 0,
	attr: void 0
}, m = e.createContext && /*#__PURE__*/ e.createContext(p), h = [
	"attr",
	"size",
	"title"
];
function g(e, t) {
	if (e == null) return {};
	var n = _(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function _(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function v() {
	return v = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, v.apply(this, arguments);
}
function y(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function b(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? y(Object(n), !0).forEach(function(t) {
			x(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function x(e, t, n) {
	return t = S(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function S(e) {
	var t = C(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function C(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function w(t) {
	return t && t.map((t, n) => /*#__PURE__*/ e.createElement(t.tag, b({ key: n }, t.attr), w(t.child)));
}
function T(t) {
	return (n) => /*#__PURE__*/ e.createElement(E, v({ attr: b({}, t.attr) }, n), w(t.child));
}
function E(t) {
	var n = (n) => {
		var { attr: r, size: i, title: a } = t, o = g(t, h), s = i || n.size || "1em", c;
		return n.className && (c = n.className), t.className && (c = (c ? c + " " : "") + t.className), /*#__PURE__*/ e.createElement("svg", v({
			stroke: "currentColor",
			fill: "currentColor",
			strokeWidth: "0"
		}, n.attr, r, o, {
			className: c,
			style: b(b({ color: t.color || n.color }, n.style), t.style),
			height: s,
			width: s,
			xmlns: "http://www.w3.org/2000/svg"
		}), a && /*#__PURE__*/ e.createElement("title", null, a), t.children);
	};
	return m === void 0 ? n(p) : /*#__PURE__*/ e.createElement(m.Consumer, null, (e) => n(e));
}
//#endregion
//#region node_modules/react-icons/md/index.mjs
function D(e) {
	return T({
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
//#region src/SideMenu.jsx
var O = [
	"mobile",
	"compact",
	"full"
], k = 768, A = 1360, j = 100, M = {
	minHeight: "100%",
	margin: 0,
	padding: 0,
	position: "absolute",
	top: 0,
	left: 0,
	right: 0,
	display: "inline-block",
	backgroundColor: "#f5f5f5",
	zIndex: 998
}, N = {
	mobile: {
		width: "18.75rem",
		maxWidth: "100%",
		boxShadow: "1px 1px 5px 1px #999",
		paddingTop: "2rem",
		transition: "ease-out 300ms"
	},
	compact: { width: "4.5rem" },
	full: { width: "12.5rem" }
}, P = {
	position: "absolute",
	left: 0,
	top: 0,
	width: "100vw",
	height: "100vh",
	overflow: "hidden",
	transition: "linear 300ms"
}, F = (e) => O.includes(e), I = (e) => O.indexOf(e), L = () => typeof window > "u" ? "compact" : window.innerWidth <= k ? "mobile" : window.innerWidth <= A ? "compact" : "full", R = (e, t, n, r) => {
	if (F(t)) return t;
	let i = e;
	return F(n) && I(i) < I(n) && (i = n), F(r) && I(i) > I(r) && (i = r), i;
}, z = ({ menu: t = [], force: o = "", min: s = "", max: c = "", showToggle: l = !1 }) => {
	let [u, d] = a(L), p = i(() => R(u, o, s, c), [
		u,
		o,
		s,
		c
	]), [m, h] = a(() => p === "mobile"), g = l || p === "mobile";
	r(() => {}, [t]);
	let _ = n(() => {
		d(L());
	}, []), v = n(() => {
		h((e) => !e);
	}, []), y = n(() => {
		h(!0);
	}, []), b = i(() => m ? "menu hidden" : "menu", [m]), x = i(() => ({
		...M,
		...N[p]
	}), [p]), S = i(() => ({
		zIndex: m ? 0 : 990,
		backgroundColor: m ? "rgba(0,0,0,0)" : "rgba(100,100,100,0.3)",
		...P
	}), [m]);
	return r(() => {
		h(p === "mobile");
	}, [p]), r(() => {
		if (typeof window > "u") return;
		let e, t = () => {
			e && window.clearTimeout(e), e = window.setTimeout(_, j);
		};
		return window.addEventListener("resize", t), _(), () => {
			e && window.clearTimeout(e), window.removeEventListener("resize", t);
		};
	}, [_]), /* @__PURE__ */ e.createElement(e.Fragment, null, g ? /* @__PURE__ */ e.createElement("button", {
		type: "button",
		className: "menu-button",
		"aria-label": "Toggle menu",
		"aria-controls": "menu",
		"aria-expanded": !m,
		onClick: v
	}, /* @__PURE__ */ e.createElement(D, { size: "2em" })) : null, /* @__PURE__ */ e.createElement("div", {
		className: b,
		id: "menu",
		style: x
	}, t.map((t, n) => t.hr === !0 ? /* @__PURE__ */ e.createElement("hr", { key: `menu-separator-${n}` }) : /* @__PURE__ */ e.createElement(f, {
		key: t.link || t.text || `menu-item-${n}`,
		id: n,
		icon: t.icon,
		text: t.text,
		link: t.link,
		mode: p
	})), /* @__PURE__ */ e.createElement("br", null)), p === "mobile" ? /* @__PURE__ */ e.createElement("div", {
		id: "menu-whitespace-target",
		hidden: m,
		onClick: y,
		style: S
	}) : null);
};
//#endregion
export { z as default };
