import e, { memo as t, useCallback as n, useEffect as r, useMemo as i, useState as a } from "react";
//#region \0rolldown/runtime.js
var o = Object.create, s = Object.defineProperty, c = Object.getOwnPropertyDescriptor, l = Object.getOwnPropertyNames, u = Object.getPrototypeOf, d = Object.prototype.hasOwnProperty, f = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), p = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = l(t), a = 0, o = i.length, u; a < o; a++) u = i[a], !d.call(e, u) && u !== n && s(e, u, {
		get: ((e) => t[e]).bind(null, u),
		enumerable: !(r = c(t, u)) || r.enumerable
	});
	return e;
}, m = (e, t, n) => (n = e == null ? {} : o(u(e)), p(t || !e || !e.__esModule ? s(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), h = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), g = /* @__PURE__ */ f(((e) => {
	var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
	function b(e) {
		if (typeof e == "object" && e) {
			var t = e.$$typeof;
			switch (t) {
				case n: switch (e = e.type, e) {
					case l:
					case u:
					case i:
					case o:
					case a:
					case f: return e;
					default: switch (e &&= e.$$typeof, e) {
						case c:
						case d:
						case h:
						case m:
						case s: return e;
						default: return t;
					}
				}
				case r: return t;
			}
		}
	}
	function x(e) {
		return b(e) === u;
	}
	e.AsyncMode = l, e.ConcurrentMode = u, e.ContextConsumer = c, e.ContextProvider = s, e.Element = n, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = m, e.Portal = r, e.Profiler = o, e.StrictMode = a, e.Suspense = f, e.isAsyncMode = function(e) {
		return x(e) || b(e) === l;
	}, e.isConcurrentMode = x, e.isContextConsumer = function(e) {
		return b(e) === c;
	}, e.isContextProvider = function(e) {
		return b(e) === s;
	}, e.isElement = function(e) {
		return typeof e == "object" && !!e && e.$$typeof === n;
	}, e.isForwardRef = function(e) {
		return b(e) === d;
	}, e.isFragment = function(e) {
		return b(e) === i;
	}, e.isLazy = function(e) {
		return b(e) === h;
	}, e.isMemo = function(e) {
		return b(e) === m;
	}, e.isPortal = function(e) {
		return b(e) === r;
	}, e.isProfiler = function(e) {
		return b(e) === o;
	}, e.isStrictMode = function(e) {
		return b(e) === a;
	}, e.isSuspense = function(e) {
		return b(e) === f;
	}, e.isValidElementType = function(e) {
		return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
	}, e.typeOf = b;
})), _ = /* @__PURE__ */ f(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
		function b(e) {
			return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
		}
		function x(e) {
			if (typeof e == "object" && e) {
				var t = e.$$typeof;
				switch (t) {
					case n:
						var p = e.type;
						switch (p) {
							case l:
							case u:
							case i:
							case o:
							case a:
							case f: return p;
							default:
								var g = p && p.$$typeof;
								switch (g) {
									case c:
									case d:
									case h:
									case m:
									case s: return g;
									default: return t;
								}
						}
					case r: return t;
				}
			}
		}
		var S = l, C = u, w = c, T = s, E = n, D = d, O = i, k = h, A = m, j = r, M = o, N = a, P = f, F = !1;
		function I(e) {
			return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), L(e) || x(e) === l;
		}
		function L(e) {
			return x(e) === u;
		}
		function R(e) {
			return x(e) === c;
		}
		function z(e) {
			return x(e) === s;
		}
		function B(e) {
			return typeof e == "object" && !!e && e.$$typeof === n;
		}
		function V(e) {
			return x(e) === d;
		}
		function H(e) {
			return x(e) === i;
		}
		function U(e) {
			return x(e) === h;
		}
		function W(e) {
			return x(e) === m;
		}
		function G(e) {
			return x(e) === r;
		}
		function K(e) {
			return x(e) === o;
		}
		function q(e) {
			return x(e) === a;
		}
		function J(e) {
			return x(e) === f;
		}
		e.AsyncMode = S, e.ConcurrentMode = C, e.ContextConsumer = w, e.ContextProvider = T, e.Element = E, e.ForwardRef = D, e.Fragment = O, e.Lazy = k, e.Memo = A, e.Portal = j, e.Profiler = M, e.StrictMode = N, e.Suspense = P, e.isAsyncMode = I, e.isConcurrentMode = L, e.isContextConsumer = R, e.isContextProvider = z, e.isElement = B, e.isForwardRef = V, e.isFragment = H, e.isLazy = U, e.isMemo = W, e.isPortal = G, e.isProfiler = K, e.isStrictMode = q, e.isSuspense = J, e.isValidElementType = b, e.typeOf = x;
	})();
})), v = /* @__PURE__ */ f(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = g() : t.exports = _();
})), y = /* @__PURE__ */ f(((e, t) => {
	var n = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
	function a(e) {
		if (e == null) throw TypeError("Object.assign cannot be called with null or undefined");
		return Object(e);
	}
	function o() {
		try {
			if (!Object.assign) return !1;
			var e = /* @__PURE__ */ new String("abc");
			if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5") return !1;
			for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
			if (Object.getOwnPropertyNames(t).map(function(e) {
				return t[e];
			}).join("") !== "0123456789") return !1;
			var r = {};
			return "abcdefghijklmnopqrst".split("").forEach(function(e) {
				r[e] = e;
			}), Object.keys(Object.assign({}, r)).join("") === "abcdefghijklmnopqrst";
		} catch {
			return !1;
		}
	}
	t.exports = o() ? Object.assign : function(e, t) {
		for (var o, s = a(e), c, l = 1; l < arguments.length; l++) {
			for (var u in o = Object(arguments[l]), o) r.call(o, u) && (s[u] = o[u]);
			if (n) {
				c = n(o);
				for (var d = 0; d < c.length; d++) i.call(o, c[d]) && (s[c[d]] = o[c[d]]);
			}
		}
		return s;
	};
})), b = /* @__PURE__ */ f(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), x = /* @__PURE__ */ f(((e, t) => {
	t.exports = Function.call.bind(Object.prototype.hasOwnProperty);
})), S = /* @__PURE__ */ f(((e, t) => {
	var n = function() {};
	if (process.env.NODE_ENV !== "production") {
		var r = b(), i = {}, a = x();
		n = function(e) {
			var t = "Warning: " + e;
			typeof console < "u" && console.error(t);
			try {
				throw Error(t);
			} catch {}
		};
	}
	function o(e, t, o, s, c) {
		if (process.env.NODE_ENV !== "production") {
			for (var l in e) if (a(e, l)) {
				var u;
				try {
					if (typeof e[l] != "function") {
						var d = Error((s || "React class") + ": " + o + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
						throw d.name = "Invariant Violation", d;
					}
					u = e[l](t, l, s, o, null, r);
				} catch (e) {
					u = e;
				}
				if (u && !(u instanceof Error) && n((s || "React class") + ": type specification of " + o + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), u instanceof Error && !(u.message in i)) {
					i[u.message] = !0;
					var f = c ? c() : "";
					n("Failed " + o + " type: " + u.message + (f ?? ""));
				}
			}
		}
	}
	o.resetWarningCache = function() {
		process.env.NODE_ENV !== "production" && (i = {});
	}, t.exports = o;
})), C = /* @__PURE__ */ f(((e, t) => {
	var n = v(), r = y(), i = b(), a = x(), o = S(), s = function() {};
	process.env.NODE_ENV !== "production" && (s = function(e) {
		var t = "Warning: " + e;
		typeof console < "u" && console.error(t);
		try {
			throw Error(t);
		} catch {}
	});
	function c() {
		return null;
	}
	t.exports = function(e, t) {
		var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
		function d(e) {
			var t = e && (l && e[l] || e[u]);
			if (typeof t == "function") return t;
		}
		var f = "<<anonymous>>", p = {
			array: _("array"),
			bigint: _("bigint"),
			bool: _("boolean"),
			func: _("function"),
			number: _("number"),
			object: _("object"),
			string: _("string"),
			symbol: _("symbol"),
			any: v(),
			arrayOf: y,
			element: b(),
			elementType: x(),
			instanceOf: S,
			node: E(),
			objectOf: w,
			oneOf: C,
			oneOfType: T,
			shape: O,
			exact: k
		};
		function m(e, t) {
			return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
		}
		function h(e, t) {
			this.message = e, this.data = t && typeof t == "object" ? t : {}, this.stack = "";
		}
		h.prototype = Error.prototype;
		function g(e) {
			if (process.env.NODE_ENV !== "production") var n = {}, r = 0;
			function a(a, o, c, l, u, d, p) {
				if (l ||= f, d ||= c, p !== i) {
					if (t) {
						var m = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
						throw m.name = "Invariant Violation", m;
					} else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
						var g = l + ":" + c;
						!n[g] && r < 3 && (s("You are manually calling a React.PropTypes validation function for the `" + d + "` prop on `" + l + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), n[g] = !0, r++);
					}
				}
				return o[c] == null ? a ? o[c] === null ? new h("The " + u + " `" + d + "` is marked as required " + ("in `" + l + "`, but its value is `null`.")) : new h("The " + u + " `" + d + "` is marked as required in " + ("`" + l + "`, but its value is `undefined`.")) : null : e(o, c, l, u, d);
			}
			var o = a.bind(null, !1);
			return o.isRequired = a.bind(null, !0), o;
		}
		function _(e) {
			function t(t, n, r, i, a, o) {
				var s = t[n];
				if (M(s) !== e) {
					var c = N(s);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected ") + ("`" + e + "`."), { expectedType: e });
				}
				return null;
			}
			return g(t);
		}
		function v() {
			return g(c);
		}
		function y(e) {
			function t(t, n, r, a, o) {
				if (typeof e != "function") return new h("Property `" + o + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
				var s = t[n];
				if (!Array.isArray(s)) {
					var c = M(s);
					return new h("Invalid " + a + " `" + o + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected an array."));
				}
				for (var l = 0; l < s.length; l++) {
					var u = e(s, l, r, a, o + "[" + l + "]", i);
					if (u instanceof Error) return u;
				}
				return null;
			}
			return g(t);
		}
		function b() {
			function t(t, n, r, i, a) {
				var o = t[n];
				if (!e(o)) {
					var s = M(o);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected a single ReactElement."));
				}
				return null;
			}
			return g(t);
		}
		function x() {
			function e(e, t, r, i, a) {
				var o = e[t];
				if (!n.isValidElementType(o)) {
					var s = M(o);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected a single ReactElement type."));
				}
				return null;
			}
			return g(e);
		}
		function S(e) {
			function t(t, n, r, i, a) {
				if (!(t[n] instanceof e)) {
					var o = e.name || f, s = F(t[n]);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected ") + ("instance of `" + o + "`."));
				}
				return null;
			}
			return g(t);
		}
		function C(e) {
			if (!Array.isArray(e)) return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).") : s("Invalid argument supplied to oneOf, expected an array.")), c;
			function t(t, n, r, i, a) {
				for (var o = t[n], s = 0; s < e.length; s++) if (m(o, e[s])) return null;
				var c = JSON.stringify(e, function(e, t) {
					return N(t) === "symbol" ? String(t) : t;
				});
				return new h("Invalid " + i + " `" + a + "` of value `" + String(o) + "` " + ("supplied to `" + r + "`, expected one of " + c + "."));
			}
			return g(t);
		}
		function w(e) {
			function t(t, n, r, o, s) {
				if (typeof e != "function") return new h("Property `" + s + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
				var c = t[n], l = M(c);
				if (l !== "object") return new h("Invalid " + o + " `" + s + "` of type " + ("`" + l + "` supplied to `" + r + "`, expected an object."));
				for (var u in c) if (a(c, u)) {
					var d = e(c, u, r, o, s + "." + u, i);
					if (d instanceof Error) return d;
				}
				return null;
			}
			return g(t);
		}
		function T(e) {
			if (!Array.isArray(e)) return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), c;
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				if (typeof n != "function") return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + P(n) + " at index " + t + "."), c;
			}
			function r(t, n, r, o, s) {
				for (var c = [], l = 0; l < e.length; l++) {
					var u = e[l], d = u(t, n, r, o, s, i);
					if (d == null) return null;
					d.data && a(d.data, "expectedType") && c.push(d.data.expectedType);
				}
				var f = c.length > 0 ? ", expected one of type [" + c.join(", ") + "]" : "";
				return new h("Invalid " + o + " `" + s + "` supplied to " + ("`" + r + "`" + f + "."));
			}
			return g(r);
		}
		function E() {
			function e(e, t, n, r, i) {
				return A(e[t]) ? null : new h("Invalid " + r + " `" + i + "` supplied to " + ("`" + n + "`, expected a ReactNode."));
			}
			return g(e);
		}
		function D(e, t, n, r, i) {
			return new h((e || "React class") + ": " + t + " type `" + n + "." + r + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + i + "`.");
		}
		function O(e) {
			function t(t, n, r, a, o) {
				var s = t[n], c = M(s);
				if (c !== "object") return new h("Invalid " + a + " `" + o + "` of type `" + c + "` " + ("supplied to `" + r + "`, expected `object`."));
				for (var l in e) {
					var u = e[l];
					if (typeof u != "function") return D(r, a, o, l, N(u));
					var d = u(s, l, r, a, o + "." + l, i);
					if (d) return d;
				}
				return null;
			}
			return g(t);
		}
		function k(e) {
			function t(t, n, o, s, c) {
				var l = t[n], u = M(l);
				if (u !== "object") return new h("Invalid " + s + " `" + c + "` of type `" + u + "` " + ("supplied to `" + o + "`, expected `object`."));
				for (var d in r({}, t[n], e)) {
					var f = e[d];
					if (a(e, d) && typeof f != "function") return D(o, s, c, d, N(f));
					if (!f) return new h("Invalid " + s + " `" + c + "` key `" + d + "` supplied to `" + o + "`.\nBad object: " + JSON.stringify(t[n], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
					var p = f(l, d, o, s, c + "." + d, i);
					if (p) return p;
				}
				return null;
			}
			return g(t);
		}
		function A(t) {
			switch (typeof t) {
				case "number":
				case "string":
				case "undefined": return !0;
				case "boolean": return !t;
				case "object":
					if (Array.isArray(t)) return t.every(A);
					if (t === null || e(t)) return !0;
					var n = d(t);
					if (n) {
						var r = n.call(t), i;
						if (n !== t.entries) {
							for (; !(i = r.next()).done;) if (!A(i.value)) return !1;
						} else for (; !(i = r.next()).done;) {
							var a = i.value;
							if (a && !A(a[1])) return !1;
						}
					} else return !1;
					return !0;
				default: return !1;
			}
		}
		function j(e, t) {
			return e === "symbol" ? !0 : t ? t["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && t instanceof Symbol : !1;
		}
		function M(e) {
			var t = typeof e;
			return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : j(t, e) ? "symbol" : t;
		}
		function N(e) {
			if (e == null) return "" + e;
			var t = M(e);
			if (t === "object") {
				if (e instanceof Date) return "date";
				if (e instanceof RegExp) return "regexp";
			}
			return t;
		}
		function P(e) {
			var t = N(e);
			switch (t) {
				case "array":
				case "object": return "an " + t;
				case "boolean":
				case "date":
				case "regexp": return "a " + t;
				default: return t;
			}
		}
		function F(e) {
			return !e.constructor || !e.constructor.name ? f : e.constructor.name;
		}
		return p.checkPropTypes = o, p.resetWarningCache = o.resetWarningCache, p.PropTypes = p, p;
	};
})), w = /* @__PURE__ */ f(((e, t) => {
	var n = b();
	function r() {}
	function i() {}
	i.resetWarningCache = r, t.exports = function() {
		function e(e, t, r, i, a, o) {
			if (o !== n) {
				var s = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				throw s.name = "Invariant Violation", s;
			}
		}
		e.isRequired = e;
		function t() {
			return e;
		}
		var a = {
			array: e,
			bigint: e,
			bool: e,
			func: e,
			number: e,
			object: e,
			string: e,
			symbol: e,
			any: e,
			arrayOf: t,
			element: e,
			elementType: e,
			instanceOf: t,
			node: e,
			objectOf: t,
			oneOf: t,
			oneOfType: t,
			shape: t,
			exact: t,
			checkPropTypes: i,
			resetWarningCache: r
		};
		return a.PropTypes = a, a;
	};
})), T = /* @__PURE__ */ m((/* @__PURE__ */ f(((e, t) => {
	if (process.env.NODE_ENV !== "production") {
		var n = v();
		t.exports = C()(n.isElement, !0);
	} else t.exports = w()();
})))()), E = /* @__PURE__ */ f(((e) => {
	var t = h("react"), n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function s(e, t, r) {
		var s, c = {}, l = null, u = null;
		for (s in r !== void 0 && (l = "" + r), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (u = t.ref), t) i.call(t, s) && !o.hasOwnProperty(s) && (c[s] = t[s]);
		if (e && e.defaultProps) for (s in t = e.defaultProps, t) c[s] === void 0 && (c[s] = t[s]);
		return {
			$$typeof: n,
			type: e,
			key: l,
			ref: u,
			props: c,
			_owner: a.current
		};
	}
	e.Fragment = r, e.jsx = s, e.jsxs = s;
})), D = /* @__PURE__ */ f(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		var t = h("react"), n = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), g = Symbol.iterator, _ = "@@iterator";
		function v(e) {
			if (typeof e != "object" || !e) return null;
			var t = g && e[g] || e[_];
			return typeof t == "function" ? t : null;
		}
		var y = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
		function b(e) {
			x("error", e, [...arguments].slice(1));
		}
		function x(e, t, n) {
			var r = y.ReactDebugCurrentFrame.getStackAddendum();
			r !== "" && (t += "%s", n = n.concat([r]));
			var i = n.map(function(e) {
				return String(e);
			});
			i.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, i);
		}
		var S = Symbol.for("react.module.reference");
		function C(e) {
			return !!(typeof e == "string" || typeof e == "function" || e === i || e === o || e === a || e === u || e === d || e === m || typeof e == "object" && e && (e.$$typeof === p || e.$$typeof === f || e.$$typeof === s || e.$$typeof === c || e.$$typeof === l || e.$$typeof === S || e.getModuleId !== void 0));
		}
		function w(e, t, n) {
			var r = e.displayName;
			if (r) return r;
			var i = t.displayName || t.name || "";
			return i === "" ? n : n + "(" + i + ")";
		}
		function T(e) {
			return e.displayName || "Context";
		}
		function E(e) {
			if (e == null) return null;
			if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function") return e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case i: return "Fragment";
				case r: return "Portal";
				case o: return "Profiler";
				case a: return "StrictMode";
				case u: return "Suspense";
				case d: return "SuspenseList";
			}
			if (typeof e == "object") switch (e.$$typeof) {
				case c: return T(e) + ".Consumer";
				case s: return T(e._context) + ".Provider";
				case l: return w(e, e.render, "ForwardRef");
				case f:
					var t = e.displayName || null;
					return t === null ? E(e.type) || "Memo" : t;
				case p:
					var n = e, m = n._payload, h = n._init;
					try {
						return E(h(m));
					} catch {
						return null;
					}
			}
			return null;
		}
		var D = Object.assign, O = 0, k, A, j, M, N, P, F;
		function I() {}
		I.__reactDisabledLog = !0;
		function L() {
			if (O === 0) {
				k = console.log, A = console.info, j = console.warn, M = console.error, N = console.group, P = console.groupCollapsed, F = console.groupEnd;
				var e = {
					configurable: !0,
					enumerable: !0,
					value: I,
					writable: !0
				};
				Object.defineProperties(console, {
					info: e,
					log: e,
					warn: e,
					error: e,
					group: e,
					groupCollapsed: e,
					groupEnd: e
				});
			}
			O++;
		}
		function R() {
			if (O--, O === 0) {
				var e = {
					configurable: !0,
					enumerable: !0,
					writable: !0
				};
				Object.defineProperties(console, {
					log: D({}, e, { value: k }),
					info: D({}, e, { value: A }),
					warn: D({}, e, { value: j }),
					error: D({}, e, { value: M }),
					group: D({}, e, { value: N }),
					groupCollapsed: D({}, e, { value: P }),
					groupEnd: D({}, e, { value: F })
				});
			}
			O < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
		}
		var z = y.ReactCurrentDispatcher, B;
		function V(e, t, n) {
			if (B === void 0) try {
				throw Error();
			} catch (e) {
				var r = e.stack.trim().match(/\n( *(at )?)/);
				B = r && r[1] || "";
			}
			return "\n" + B + e;
		}
		var H = !1, U = new (typeof WeakMap == "function" ? WeakMap : Map)();
		function W(e, t) {
			if (!e || H) return "";
			var n = U.get(e);
			if (n !== void 0) return n;
			var r;
			H = !0;
			var i = Error.prepareStackTrace;
			Error.prepareStackTrace = void 0;
			var a = z.current;
			z.current = null, L();
			try {
				if (t) {
					var o = function() {
						throw Error();
					};
					if (Object.defineProperty(o.prototype, "props", { set: function() {
						throw Error();
					} }), typeof Reflect == "object" && Reflect.construct) {
						try {
							Reflect.construct(o, []);
						} catch (e) {
							r = e;
						}
						Reflect.construct(e, [], o);
					} else {
						try {
							o.call();
						} catch (e) {
							r = e;
						}
						e.call(o.prototype);
					}
				} else {
					try {
						throw Error();
					} catch (e) {
						r = e;
					}
					e();
				}
			} catch (t) {
				if (t && r && typeof t.stack == "string") {
					for (var s = t.stack.split("\n"), c = r.stack.split("\n"), l = s.length - 1, u = c.length - 1; l >= 1 && u >= 0 && s[l] !== c[u];) u--;
					for (; l >= 1 && u >= 0; l--, u--) if (s[l] !== c[u]) {
						if (l !== 1 || u !== 1) do
							if (l--, u--, u < 0 || s[l] !== c[u]) {
								var d = "\n" + s[l].replace(" at new ", " at ");
								return e.displayName && d.includes("<anonymous>") && (d = d.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, d), d;
							}
						while (l >= 1 && u >= 0);
						break;
					}
				}
			} finally {
				H = !1, z.current = a, R(), Error.prepareStackTrace = i;
			}
			var f = e ? e.displayName || e.name : "", p = f ? V(f) : "";
			return typeof e == "function" && U.set(e, p), p;
		}
		function G(e, t, n) {
			return W(e, !1);
		}
		function K(e) {
			var t = e.prototype;
			return !!(t && t.isReactComponent);
		}
		function q(e, t, n) {
			if (e == null) return "";
			if (typeof e == "function") return W(e, K(e));
			if (typeof e == "string") return V(e);
			switch (e) {
				case u: return V("Suspense");
				case d: return V("SuspenseList");
			}
			if (typeof e == "object") switch (e.$$typeof) {
				case l: return G(e.render);
				case f: return q(e.type, t, n);
				case p:
					var r = e, i = r._payload, a = r._init;
					try {
						return q(a(i), t, n);
					} catch {}
			}
			return "";
		}
		var J = Object.prototype.hasOwnProperty, Y = {}, X = y.ReactDebugCurrentFrame;
		function Z(e) {
			if (e) {
				var t = e._owner, n = q(e.type, e._source, t ? t.type : null);
				X.setExtraStackFrame(n);
			} else X.setExtraStackFrame(null);
		}
		function ee(e, t, n, r, i) {
			var a = Function.call.bind(J);
			for (var o in e) if (a(e, o)) {
				var s = void 0;
				try {
					if (typeof e[o] != "function") {
						var c = Error((r || "React class") + ": " + n + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
						throw c.name = "Invariant Violation", c;
					}
					s = e[o](t, o, r, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
				} catch (e) {
					s = e;
				}
				s && !(s instanceof Error) && (Z(i), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", r || "React class", n, o, typeof s), Z(null)), s instanceof Error && !(s.message in Y) && (Y[s.message] = !0, Z(i), b("Failed %s type: %s", n, s.message), Z(null));
			}
		}
		var te = Array.isArray;
		function ne(e) {
			return te(e);
		}
		function re(e) {
			return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
		}
		function ie(e) {
			try {
				return ae(e), !1;
			} catch {
				return !0;
			}
		}
		function ae(e) {
			return "" + e;
		}
		function oe(e) {
			if (ie(e)) return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", re(e)), ae(e);
		}
		var Q = y.ReactCurrentOwner, se = {
			key: !0,
			ref: !0,
			__self: !0,
			__source: !0
		}, ce, le, ue = {};
		function de(e) {
			if (J.call(e, "ref")) {
				var t = Object.getOwnPropertyDescriptor(e, "ref").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.ref !== void 0;
		}
		function fe(e) {
			if (J.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function pe(e, t) {
			if (typeof e.ref == "string" && Q.current && t && Q.current.stateNode !== t) {
				var n = E(Q.current.type);
				ue[n] || (b("Component \"%s\" contains the string ref \"%s\". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref", E(Q.current.type), e.ref), ue[n] = !0);
			}
		}
		function me(e, t) {
			var n = function() {
				ce || (ce = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
			};
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function he(e, t) {
			var n = function() {
				le || (le = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
			};
			n.isReactWarning = !0, Object.defineProperty(e, "ref", {
				get: n,
				configurable: !0
			});
		}
		var ge = function(e, t, r, i, a, o, s) {
			var c = {
				$$typeof: n,
				type: e,
				key: t,
				ref: r,
				props: s,
				_owner: o
			};
			return c._store = {}, Object.defineProperty(c._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: !1
			}), Object.defineProperty(c, "_self", {
				configurable: !1,
				enumerable: !1,
				writable: !1,
				value: i
			}), Object.defineProperty(c, "_source", {
				configurable: !1,
				enumerable: !1,
				writable: !1,
				value: a
			}), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
		};
		function _e(e, t, n, r, i) {
			var a, o = {}, s = null, c = null;
			for (a in n !== void 0 && (oe(n), s = "" + n), fe(t) && (oe(t.key), s = "" + t.key), de(t) && (c = t.ref, pe(t, i)), t) J.call(t, a) && !se.hasOwnProperty(a) && (o[a] = t[a]);
			if (e && e.defaultProps) {
				var l = e.defaultProps;
				for (a in l) o[a] === void 0 && (o[a] = l[a]);
			}
			if (s || c) {
				var u = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
				s && me(o, u), c && he(o, u);
			}
			return ge(e, s, c, i, r, Q.current, o);
		}
		var ve = y.ReactCurrentOwner, ye = y.ReactDebugCurrentFrame;
		function $(e) {
			if (e) {
				var t = e._owner, n = q(e.type, e._source, t ? t.type : null);
				ye.setExtraStackFrame(n);
			} else ye.setExtraStackFrame(null);
		}
		var be = !1;
		function xe(e) {
			return typeof e == "object" && !!e && e.$$typeof === n;
		}
		function Se() {
			if (ve.current) {
				var e = E(ve.current.type);
				if (e) return "\n\nCheck the render method of `" + e + "`.";
			}
			return "";
		}
		function Ce(e) {
			if (e !== void 0) {
				var t = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
				return "\n\nCheck your code at " + t + ":" + n + ".";
			}
			return "";
		}
		var we = {};
		function Te(e) {
			var t = Se();
			if (!t) {
				var n = typeof e == "string" ? e : e.displayName || e.name;
				n && (t = "\n\nCheck the top-level render call using <" + n + ">.");
			}
			return t;
		}
		function Ee(e, t) {
			if (!(!e._store || e._store.validated || e.key != null)) {
				e._store.validated = !0;
				var n = Te(t);
				if (!we[n]) {
					we[n] = !0;
					var r = "";
					e && e._owner && e._owner !== ve.current && (r = " It was passed a child from " + E(e._owner.type) + "."), $(e), b("Each child in a list should have a unique \"key\" prop.%s%s See https://reactjs.org/link/warning-keys for more information.", n, r), $(null);
				}
			}
		}
		function De(e, t) {
			if (typeof e == "object") {
				if (ne(e)) for (var n = 0; n < e.length; n++) {
					var r = e[n];
					xe(r) && Ee(r, t);
				}
				else if (xe(e)) e._store && (e._store.validated = !0);
				else if (e) {
					var i = v(e);
					if (typeof i == "function" && i !== e.entries) for (var a = i.call(e), o; !(o = a.next()).done;) xe(o.value) && Ee(o.value, t);
				}
			}
		}
		function Oe(e) {
			var t = e.type;
			if (!(t == null || typeof t == "string")) {
				var n;
				if (typeof t == "function") n = t.propTypes;
				else if (typeof t == "object" && (t.$$typeof === l || t.$$typeof === f)) n = t.propTypes;
				else return;
				if (n) {
					var r = E(t);
					ee(n, e.props, "prop", r, e);
				} else t.PropTypes !== void 0 && !be && (be = !0, b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E(t) || "Unknown"));
				typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
			}
		}
		function ke(e) {
			for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
				var r = t[n];
				if (r !== "children" && r !== "key") {
					$(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", r), $(null);
					break;
				}
			}
			e.ref !== null && ($(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
		}
		var Ae = {};
		function je(e, t, r, a, o, s) {
			var c = C(e);
			if (!c) {
				var l = "";
				(e === void 0 || typeof e == "object" && e && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
				var u = Ce(o);
				u ? l += u : l += Se();
				var d;
				e === null ? d = "null" : ne(e) ? d = "array" : e !== void 0 && e.$$typeof === n ? (d = "<" + (E(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, l);
			}
			var f = _e(e, t, r, o, s);
			if (f == null) return f;
			if (c) {
				var p = t.children;
				if (p !== void 0) if (a) if (ne(p)) {
					for (var m = 0; m < p.length; m++) De(p[m], e);
					Object.freeze && Object.freeze(p);
				} else b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
				else De(p, e);
			}
			if (J.call(t, "key")) {
				var h = E(e), g = Object.keys(t).filter(function(e) {
					return e !== "key";
				}), _ = g.length > 0 ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}";
				Ae[h + _] || (b("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", _, h, g.length > 0 ? "{" + g.join(": ..., ") + ": ...}" : "{}", h), Ae[h + _] = !0);
			}
			return e === i ? ke(f) : Oe(f), f;
		}
		function Me(e, t, n) {
			return je(e, t, n, !0);
		}
		function Ne(e, t, n) {
			return je(e, t, n, !1);
		}
		var Pe = Ne, Fe = Me;
		e.Fragment = i, e.jsx = Pe, e.jsxs = Fe;
	})();
})), O = (/* @__PURE__ */ f(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = E() : t.exports = D();
})))(), k = () => typeof window > "u" ? "" : window.location.pathname, A = ({ id: e, icon: t, text: n, link: r }) => {
	let a = i(() => k() === r ? "menu-item active" : "menu-item", [r]);
	return /* @__PURE__ */ (0, O.jsxs)("a", {
		id: "menu-item-" + e,
		className: a,
		href: r || "#",
		"aria-current": a.includes("active") ? "page" : void 0,
		children: [/* @__PURE__ */ (0, O.jsx)("div", {
			className: "menu-item-icon",
			children: t ? /* @__PURE__ */ (0, O.jsx)(t, { size: "2em" }) : null
		}), /* @__PURE__ */ (0, O.jsx)("div", {
			className: "menu-item-text",
			children: n
		})]
	});
};
A.propTypes = {
	id: T.default.number.isRequired,
	icon: T.default.elementType,
	text: T.default.string,
	link: T.default.string
};
var j = t(A), M = {
	color: void 0,
	size: void 0,
	className: void 0,
	style: void 0,
	attr: void 0
}, N = e.createContext && /*#__PURE__*/ e.createContext(M), P = [
	"attr",
	"size",
	"title"
];
function F(e, t) {
	if (e == null) return {};
	var n = I(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function I(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function L() {
	return L = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, L.apply(this, arguments);
}
function R(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function z(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? R(Object(n), !0).forEach(function(t) {
			B(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : R(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function B(e, t, n) {
	return t = V(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function V(e) {
	var t = H(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function H(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function U(t) {
	return t && t.map((t, n) => /*#__PURE__*/ e.createElement(t.tag, z({ key: n }, t.attr), U(t.child)));
}
function W(t) {
	return (n) => /*#__PURE__*/ e.createElement(G, L({ attr: z({}, t.attr) }, n), U(t.child));
}
function G(t) {
	var n = (n) => {
		var { attr: r, size: i, title: a } = t, o = F(t, P), s = i || n.size || "1em", c;
		return n.className && (c = n.className), t.className && (c = (c ? c + " " : "") + t.className), /*#__PURE__*/ e.createElement("svg", L({
			stroke: "currentColor",
			fill: "currentColor",
			strokeWidth: "0"
		}, n.attr, r, o, {
			className: c,
			style: z(z({ color: t.color || n.color }, n.style), t.style),
			height: s,
			width: s,
			xmlns: "http://www.w3.org/2000/svg"
		}), a && /*#__PURE__*/ e.createElement("title", null, a), t.children);
	};
	return N === void 0 ? n(M) : /*#__PURE__*/ e.createElement(N.Consumer, null, (e) => n(e));
}
//#endregion
//#region node_modules/react-icons/md/index.mjs
function K(e) {
	return W({
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
var q = 768, J = () => typeof window < "u" && window.innerWidth <= q, Y = (e, t, n) => {
	let r = e[t];
	if (!Array.isArray(r)) return /* @__PURE__ */ Error(`${n}: \"menu\" must be an array.`);
	for (let e = 0; e < r.length; e += 1) {
		let t = r[e];
		if (!t || typeof t != "object") return /* @__PURE__ */ Error(`${n}: menu[${e}] must be an object.`);
		if (t.hr !== !0) {
			if (!t.icon || typeof t.icon != "function") return /* @__PURE__ */ Error(`${n}: menu[${e}] requires an icon component when hr is not true.`);
			if (typeof t.text != "string" || t.text.trim() === "") return /* @__PURE__ */ Error(`${n}: menu[${e}] requires a non-empty text string when hr is not true.`);
			if (typeof t.link != "string" || t.link.trim() === "") return /* @__PURE__ */ Error(`${n}: menu[${e}] requires a non-empty link string when hr is not true.`);
		}
	}
	return null;
}, X = ({ menu: e = [] }) => {
	let [t, o] = a(J), [s, c] = a(J), l = n(() => {
		let e = J();
		o(e), c(e);
	}, []), u = n(() => {
		t && c((e) => !e);
	}, [t]), d = n(() => {
		t && c(!0);
	}, [t]), f = i(() => s ? "menu hidden" : "menu", [s]), p = i(() => ({
		zIndex: s ? 0 : 990,
		backgroundColor: s ? "rgba(0,0,0,0)" : "rgba(100,100,100,0.3)"
	}), [s]);
	return r(() => {
		if (!(typeof window > "u")) return window.addEventListener("resize", l), l(), () => {
			window.removeEventListener("resize", l);
		};
	}, [l]), /* @__PURE__ */ (0, O.jsxs)(O.Fragment, { children: [
		/* @__PURE__ */ (0, O.jsx)("button", {
			type: "button",
			className: "menu-button",
			"aria-label": "Toggle menu",
			"aria-controls": "menu",
			"aria-expanded": !s,
			onClick: u,
			children: /* @__PURE__ */ (0, O.jsx)(K, { size: "2em" })
		}),
		/* @__PURE__ */ (0, O.jsxs)("div", {
			className: f,
			id: "menu",
			children: [e.map((e, t) => e.hr === !0 ? /* @__PURE__ */ (0, O.jsx)("hr", {}, `menu-separator-${t}`) : /* @__PURE__ */ (0, O.jsx)(j, {
				id: t,
				icon: e.icon,
				text: e.text,
				link: e.link
			}, e.link || e.text || `menu-item-${t}`)), /* @__PURE__ */ (0, O.jsx)("br", {})]
		}),
		/* @__PURE__ */ (0, O.jsx)("div", {
			id: "menu-whitespace-target",
			hidden: !t || s,
			onClick: d,
			style: p
		})
	] });
};
X.propTypes = { menu: Y };
//#endregion
//#region src/index.js
var Z = X;
//#endregion
export { Z as default };
