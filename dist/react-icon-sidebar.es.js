import e, { memo as t, useCallback as n, useEffect as r, useMemo as i, useState as a } from "react";
//#region src/components/MenuItem.jsx
var o = () => typeof window > "u" ? "" : window.location.pathname, s = t(({ id: t, icon: n, text: r, link: a }) => {
	let s = i(() => o() === a ? "menu-item active" : "menu-item", [a]);
	return /* @__PURE__ */ e.createElement("a", {
		id: "menu-item-" + t,
		className: s,
		href: a || "#",
		"aria-current": s.includes("active") ? "page" : void 0
	}, /* @__PURE__ */ e.createElement("div", { className: "menu-item-icon" }, n ? /* @__PURE__ */ e.createElement(n, { size: "2em" }) : null), /* @__PURE__ */ e.createElement("div", { className: "menu-item-text" }, r));
}), c = {
	color: void 0,
	size: void 0,
	className: void 0,
	style: void 0,
	attr: void 0
}, l = e.createContext && /*#__PURE__*/ e.createContext(c), u = [
	"attr",
	"size",
	"title"
];
function d(e, t) {
	if (e == null) return {};
	var n = f(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function f(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function p() {
	return p = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, p.apply(this, arguments);
}
function m(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function h(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? m(Object(n), !0).forEach(function(t) {
			g(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function g(e, t, n) {
	return t = _(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function _(e) {
	var t = v(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function v(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function y(t) {
	return t && t.map((t, n) => /*#__PURE__*/ e.createElement(t.tag, h({ key: n }, t.attr), y(t.child)));
}
function b(t) {
	return (n) => /*#__PURE__*/ e.createElement(x, p({ attr: h({}, t.attr) }, n), y(t.child));
}
function x(t) {
	var n = (n) => {
		var { attr: r, size: i, title: a } = t, o = d(t, u), s = i || n.size || "1em", c;
		return n.className && (c = n.className), t.className && (c = (c ? c + " " : "") + t.className), /*#__PURE__*/ e.createElement("svg", p({
			stroke: "currentColor",
			fill: "currentColor",
			strokeWidth: "0"
		}, n.attr, r, o, {
			className: c,
			style: h(h({ color: t.color || n.color }, n.style), t.style),
			height: s,
			width: s,
			xmlns: "http://www.w3.org/2000/svg"
		}), a && /*#__PURE__*/ e.createElement("title", null, a), t.children);
	};
	return l === void 0 ? n(c) : /*#__PURE__*/ e.createElement(l.Consumer, null, (e) => n(e));
}
//#endregion
//#region node_modules/react-icons/md/index.mjs
function S(e) {
	return b({
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
var C = 768, w = () => typeof window < "u" && window.innerWidth <= C, T = (e) => {
	if (!Array.isArray(e)) return "SideMenu: \"menu\" must be an array.";
	for (let t = 0; t < e.length; t += 1) {
		let n = e[t];
		if (!n || typeof n != "object") return `SideMenu: menu[${t}] must be an object.`;
		if (n.hr !== !0) {
			if (!n.icon || typeof n.icon != "function") return `SideMenu: menu[${t}] requires an icon component when hr is not true.`;
			if (typeof n.text != "string" || n.text.trim() === "") return `SideMenu: menu[${t}] requires a non-empty text string when hr is not true.`;
			if (typeof n.link != "string" || n.link.trim() === "") return `SideMenu: menu[${t}] requires a non-empty link string when hr is not true.`;
		}
	}
	return null;
}, E = ({ menu: t = [] }) => {
	let [o, c] = a(w), [l, u] = a(w);
	r(() => {
		if (process.env.NODE_ENV === "production") return;
		let e = T(t);
		e && console.error(e);
	}, [t]);
	let d = n(() => {
		let e = w();
		c(e), u(e);
	}, []), f = n(() => {
		o && u((e) => !e);
	}, [o]), p = n(() => {
		o && u(!0);
	}, [o]), m = i(() => l ? "menu hidden" : "menu", [l]), h = i(() => ({
		zIndex: l ? 0 : 990,
		backgroundColor: l ? "rgba(0,0,0,0)" : "rgba(100,100,100,0.3)"
	}), [l]);
	return r(() => {
		if (!(typeof window > "u")) return window.addEventListener("resize", d), d(), () => {
			window.removeEventListener("resize", d);
		};
	}, [d]), /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("button", {
		type: "button",
		className: "menu-button",
		"aria-label": "Toggle menu",
		"aria-controls": "menu",
		"aria-expanded": !l,
		onClick: f
	}, /* @__PURE__ */ e.createElement(S, { size: "2em" })), /* @__PURE__ */ e.createElement("div", {
		className: m,
		id: "menu"
	}, t.map((t, n) => t.hr === !0 ? /* @__PURE__ */ e.createElement("hr", { key: `menu-separator-${n}` }) : /* @__PURE__ */ e.createElement(s, {
		key: t.link || t.text || `menu-item-${n}`,
		id: n,
		icon: t.icon,
		text: t.text,
		link: t.link
	})), /* @__PURE__ */ e.createElement("br", null)), /* @__PURE__ */ e.createElement("div", {
		id: "menu-whitespace-target",
		hidden: !o || l,
		onClick: p,
		style: h
	}));
};
//#endregion
export { E as default };
