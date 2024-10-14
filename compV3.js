var Nf = Object.defineProperty;
var jf = (e, t, n) =>
  t in e
    ? Nf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Gs = (e, t, n) => jf(e, typeof t != "symbol" ? t + "" : t, n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const i of l.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
function Pf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ra = { exports: {} },
  Wo = {},
  Ta = { exports: {} },
  A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _r = Symbol.for("react.element"),
  _f = Symbol.for("react.portal"),
  Rf = Symbol.for("react.fragment"),
  Tf = Symbol.for("react.strict_mode"),
  Of = Symbol.for("react.profiler"),
  Lf = Symbol.for("react.provider"),
  zf = Symbol.for("react.context"),
  bf = Symbol.for("react.forward_ref"),
  Af = Symbol.for("react.suspense"),
  Mf = Symbol.for("react.memo"),
  If = Symbol.for("react.lazy"),
  qs = Symbol.iterator;
function Ff(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (qs && e[qs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Oa = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  La = Object.assign,
  za = {};
function On(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = za),
    (this.updater = n || Oa);
}
On.prototype.isReactComponent = {};
On.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
On.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ba() {}
ba.prototype = On.prototype;
function Ki(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = za),
    (this.updater = n || Oa);
}
var Gi = (Ki.prototype = new ba());
Gi.constructor = Ki;
La(Gi, On.prototype);
Gi.isPureReactComponent = !0;
var Xs = Array.isArray,
  Aa = Object.prototype.hasOwnProperty,
  qi = { current: null },
  Ma = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ia(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Aa.call(t, r) && !Ma.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: _r,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: qi.current,
  };
}
function Df(e, t) {
  return {
    $$typeof: _r,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Xi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === _r;
}
function Uf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Js = /\/+/g;
function ml(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Uf("" + e.key)
    : t.toString(36);
}
function to(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (l) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case _r:
          case _f:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + ml(i, 0) : r),
      Xs(o)
        ? ((n = ""),
          e != null && (n = e.replace(Js, "$&/") + "/"),
          to(o, t, n, "", function (a) {
            return a;
          }))
        : o != null &&
          (Xi(o) &&
            (o = Df(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Js, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Xs(e)))
    for (var s = 0; s < e.length; s++) {
      l = e[s];
      var u = r + ml(l, s);
      i += to(l, t, n, u, o);
    }
  else if (((u = Ff(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(l = e.next()).done; )
      (l = l.value), (u = r + ml(l, s++)), (i += to(l, t, n, u, o));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function Fr(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    to(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function Bf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var me = { current: null },
  no = { transition: null },
  $f = {
    ReactCurrentDispatcher: me,
    ReactCurrentBatchConfig: no,
    ReactCurrentOwner: qi,
  };
function Fa() {
  throw Error("act(...) is not supported in production builds of React.");
}
A.Children = {
  map: Fr,
  forEach: function (e, t, n) {
    Fr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Fr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Fr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Xi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
A.Component = On;
A.Fragment = Rf;
A.Profiler = Of;
A.PureComponent = Ki;
A.StrictMode = Tf;
A.Suspense = Af;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $f;
A.act = Fa;
A.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = La({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = qi.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      Aa.call(t, u) &&
        !Ma.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: _r, type: e.type, key: o, ref: l, props: r, _owner: i };
};
A.createContext = function (e) {
  return (
    (e = {
      $$typeof: zf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Lf, _context: e }),
    (e.Consumer = e)
  );
};
A.createElement = Ia;
A.createFactory = function (e) {
  var t = Ia.bind(null, e);
  return (t.type = e), t;
};
A.createRef = function () {
  return { current: null };
};
A.forwardRef = function (e) {
  return { $$typeof: bf, render: e };
};
A.isValidElement = Xi;
A.lazy = function (e) {
  return { $$typeof: If, _payload: { _status: -1, _result: e }, _init: Bf };
};
A.memo = function (e, t) {
  return { $$typeof: Mf, type: e, compare: t === void 0 ? null : t };
};
A.startTransition = function (e) {
  var t = no.transition;
  no.transition = {};
  try {
    e();
  } finally {
    no.transition = t;
  }
};
A.unstable_act = Fa;
A.useCallback = function (e, t) {
  return me.current.useCallback(e, t);
};
A.useContext = function (e) {
  return me.current.useContext(e);
};
A.useDebugValue = function () {};
A.useDeferredValue = function (e) {
  return me.current.useDeferredValue(e);
};
A.useEffect = function (e, t) {
  return me.current.useEffect(e, t);
};
A.useId = function () {
  return me.current.useId();
};
A.useImperativeHandle = function (e, t, n) {
  return me.current.useImperativeHandle(e, t, n);
};
A.useInsertionEffect = function (e, t) {
  return me.current.useInsertionEffect(e, t);
};
A.useLayoutEffect = function (e, t) {
  return me.current.useLayoutEffect(e, t);
};
A.useMemo = function (e, t) {
  return me.current.useMemo(e, t);
};
A.useReducer = function (e, t, n) {
  return me.current.useReducer(e, t, n);
};
A.useRef = function (e) {
  return me.current.useRef(e);
};
A.useState = function (e) {
  return me.current.useState(e);
};
A.useSyncExternalStore = function (e, t, n) {
  return me.current.useSyncExternalStore(e, t, n);
};
A.useTransition = function () {
  return me.current.useTransition();
};
A.version = "18.3.1";
Ta.exports = A;
var ye = Ta.exports;
const Ys = Pf(ye);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hf = ye,
  Vf = Symbol.for("react.element"),
  Wf = Symbol.for("react.fragment"),
  Qf = Object.prototype.hasOwnProperty,
  Kf = Hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Gf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Da(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Qf.call(t, r) && !Gf.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Vf,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Kf.current,
  };
}
Wo.Fragment = Wf;
Wo.jsx = Da;
Wo.jsxs = Da;
Ra.exports = Wo;
var g = Ra.exports,
  Ua = { exports: {} },
  Re = {},
  Ba = { exports: {} },
  $a = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, T) {
    var L = P.length;
    P.push(T);
    e: for (; 0 < L; ) {
      var I = (L - 1) >>> 1,
        te = P[I];
      if (0 < o(te, T)) (P[I] = T), (P[L] = te), (L = I);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var T = P[0],
      L = P.pop();
    if (L !== T) {
      P[0] = L;
      e: for (var I = 0, te = P.length, Mr = te >>> 1; I < Mr; ) {
        var bt = 2 * (I + 1) - 1,
          pl = P[bt],
          At = bt + 1,
          Ir = P[At];
        if (0 > o(pl, L))
          At < te && 0 > o(Ir, pl)
            ? ((P[I] = Ir), (P[At] = L), (I = At))
            : ((P[I] = pl), (P[bt] = L), (I = bt));
        else if (At < te && 0 > o(Ir, L)) (P[I] = Ir), (P[At] = L), (I = At);
        else break e;
      }
    }
    return T;
  }
  function o(P, T) {
    var L = P.sortIndex - T.sortIndex;
    return L !== 0 ? L : P.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function () {
      return i.now() - s;
    };
  }
  var u = [],
    a = [],
    d = 1,
    p = null,
    h = 3,
    S = !1,
    y = !1,
    w = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(P) {
    for (var T = n(a); T !== null; ) {
      if (T.callback === null) r(a);
      else if (T.startTime <= P)
        r(a), (T.sortIndex = T.expirationTime), t(u, T);
      else break;
      T = n(a);
    }
  }
  function x(P) {
    if (((w = !1), m(P), !y))
      if (n(u) !== null) (y = !0), ut(C);
      else {
        var T = n(a);
        T !== null && en(x, T.startTime - P);
      }
  }
  function C(P, T) {
    (y = !1), w && ((w = !1), f(R), (R = -1)), (S = !0);
    var L = h;
    try {
      for (
        m(T), p = n(u);
        p !== null && (!(p.expirationTime > T) || (P && !de()));

      ) {
        var I = p.callback;
        if (typeof I == "function") {
          (p.callback = null), (h = p.priorityLevel);
          var te = I(p.expirationTime <= T);
          (T = e.unstable_now()),
            typeof te == "function" ? (p.callback = te) : p === n(u) && r(u),
            m(T);
        } else r(u);
        p = n(u);
      }
      if (p !== null) var Mr = !0;
      else {
        var bt = n(a);
        bt !== null && en(x, bt.startTime - T), (Mr = !1);
      }
      return Mr;
    } finally {
      (p = null), (h = L), (S = !1);
    }
  }
  var N = !1,
    j = null,
    R = -1,
    U = 5,
    b = -1;
  function de() {
    return !(e.unstable_now() - b < U);
  }
  function F() {
    if (j !== null) {
      var P = e.unstable_now();
      b = P;
      var T = !0;
      try {
        T = j(!0, P);
      } finally {
        T ? st() : ((N = !1), (j = null));
      }
    } else N = !1;
  }
  var st;
  if (typeof c == "function")
    st = function () {
      c(F);
    };
  else if (typeof MessageChannel < "u") {
    var zt = new MessageChannel(),
      Ar = zt.port2;
    (zt.port1.onmessage = F),
      (st = function () {
        Ar.postMessage(null);
      });
  } else
    st = function () {
      k(F, 0);
    };
  function ut(P) {
    (j = P), N || ((N = !0), st());
  }
  function en(P, T) {
    R = k(function () {
      P(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || S || ((y = !0), ut(C));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (U = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (P) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = h;
      }
      var L = h;
      h = T;
      try {
        return P();
      } finally {
        h = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, T) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var L = h;
      h = P;
      try {
        return T();
      } finally {
        h = L;
      }
    }),
    (e.unstable_scheduleCallback = function (P, T, L) {
      var I = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? I + L : I))
          : (L = I),
        P)
      ) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return (
        (te = L + te),
        (P = {
          id: d++,
          callback: T,
          priorityLevel: P,
          startTime: L,
          expirationTime: te,
          sortIndex: -1,
        }),
        L > I
          ? ((P.sortIndex = L),
            t(a, P),
            n(u) === null &&
              P === n(a) &&
              (w ? (f(R), (R = -1)) : (w = !0), en(x, L - I)))
          : ((P.sortIndex = te), t(u, P), y || S || ((y = !0), ut(C))),
        P
      );
    }),
    (e.unstable_shouldYield = de),
    (e.unstable_wrapCallback = function (P) {
      var T = h;
      return function () {
        var L = h;
        h = T;
        try {
          return P.apply(this, arguments);
        } finally {
          h = L;
        }
      };
    });
})($a);
Ba.exports = $a;
var qf = Ba.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xf = ye,
  _e = qf;
function E(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ha = new Set(),
  cr = {};
function Yt(e, t) {
  Cn(e, t), Cn(e + "Capture", t);
}
function Cn(e, t) {
  for (cr[e] = t, e = 0; e < t.length; e++) Ha.add(t[e]);
}
var nt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Kl = Object.prototype.hasOwnProperty,
  Jf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Zs = {},
  eu = {};
function Yf(e) {
  return Kl.call(eu, e)
    ? !0
    : Kl.call(Zs, e)
    ? !1
    : Jf.test(e)
    ? (eu[e] = !0)
    : ((Zs[e] = !0), !1);
}
function Zf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ep(e, t, n, r) {
  if (t === null || typeof t > "u" || Zf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function he(e, t, n, r, o, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i);
}
var ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new he(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ie[t] = new he(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ie[e] = new he(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ie[e] = new he(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new he(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ie[e] = new he(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ie[e] = new he(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ie[e] = new he(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ie[e] = new he(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ji = /[\-:]([a-z])/g;
function Yi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ji, Yi);
    ie[t] = new he(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ji, Yi);
    ie[t] = new he(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ji, Yi);
  ie[t] = new he(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ie[e] = new he(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ie.xlinkHref = new he(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ie[e] = new he(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Zi(e, t, n, r) {
  var o = ie.hasOwnProperty(t) ? ie[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ep(t, n, o, r) && (n = null),
    r || o === null
      ? Yf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var it = Xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Dr = Symbol.for("react.element"),
  rn = Symbol.for("react.portal"),
  on = Symbol.for("react.fragment"),
  es = Symbol.for("react.strict_mode"),
  Gl = Symbol.for("react.profiler"),
  Va = Symbol.for("react.provider"),
  Wa = Symbol.for("react.context"),
  ts = Symbol.for("react.forward_ref"),
  ql = Symbol.for("react.suspense"),
  Xl = Symbol.for("react.suspense_list"),
  ns = Symbol.for("react.memo"),
  pt = Symbol.for("react.lazy"),
  Qa = Symbol.for("react.offscreen"),
  tu = Symbol.iterator;
function Fn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (tu && e[tu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var G = Object.assign,
  hl;
function qn(e) {
  if (hl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      hl = (t && t[1]) || "";
    }
  return (
    `
` +
    hl +
    e
  );
}
var gl = !1;
function yl(e, t) {
  if (!e || gl) return "";
  gl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var o = a.stack.split(`
`),
          l = r.stack.split(`
`),
          i = o.length - 1,
          s = l.length - 1;
        1 <= i && 0 <= s && o[i] !== l[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (o[i] !== l[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || o[i] !== l[s])) {
                var u =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    (gl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? qn(e) : "";
}
function tp(e) {
  switch (e.tag) {
    case 5:
      return qn(e.type);
    case 16:
      return qn("Lazy");
    case 13:
      return qn("Suspense");
    case 19:
      return qn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = yl(e.type, !1)), e;
    case 11:
      return (e = yl(e.type.render, !1)), e;
    case 1:
      return (e = yl(e.type, !0)), e;
    default:
      return "";
  }
}
function Jl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case on:
      return "Fragment";
    case rn:
      return "Portal";
    case Gl:
      return "Profiler";
    case es:
      return "StrictMode";
    case ql:
      return "Suspense";
    case Xl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Wa:
        return (e.displayName || "Context") + ".Consumer";
      case Va:
        return (e._context.displayName || "Context") + ".Provider";
      case ts:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ns:
        return (
          (t = e.displayName || null), t !== null ? t : Jl(e.type) || "Memo"
        );
      case pt:
        (t = e._payload), (e = e._init);
        try {
          return Jl(e(t));
        } catch {}
    }
  return null;
}
function np(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Jl(t);
    case 8:
      return t === es ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function _t(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ka(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function rp(e) {
  var t = Ka(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = "" + i), l.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ur(e) {
  e._valueTracker || (e._valueTracker = rp(e));
}
function Ga(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ka(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function go(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Yl(e, t) {
  var n = t.checked;
  return G({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function nu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = _t(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function qa(e, t) {
  (t = t.checked), t != null && Zi(e, "checked", t, !1);
}
function Zl(e, t) {
  qa(e, t);
  var n = _t(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ei(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ei(e, t.type, _t(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ru(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ei(e, t, n) {
  (t !== "number" || go(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Xn = Array.isArray;
function yn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + _t(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ti(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return G({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ou(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (Xn(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: _t(n) };
}
function Xa(e, t) {
  var n = _t(t.value),
    r = _t(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function lu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ja(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ni(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ja(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Br,
  Ya = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Br = Br || document.createElement("div"),
          Br.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Br.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function dr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Zn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  op = ["Webkit", "ms", "Moz", "O"];
Object.keys(Zn).forEach(function (e) {
  op.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Zn[t] = Zn[e]);
  });
});
function Za(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Zn.hasOwnProperty(e) && Zn[e])
    ? ("" + t).trim()
    : t + "px";
}
function ec(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Za(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var lp = G(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ri(e, t) {
  if (t) {
    if (lp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function oi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var li = null;
function rs(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ii = null,
  vn = null,
  wn = null;
function iu(e) {
  if ((e = Or(e))) {
    if (typeof ii != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = Xo(t)), ii(e.stateNode, e.type, t));
  }
}
function tc(e) {
  vn ? (wn ? wn.push(e) : (wn = [e])) : (vn = e);
}
function nc() {
  if (vn) {
    var e = vn,
      t = wn;
    if (((wn = vn = null), iu(e), t)) for (e = 0; e < t.length; e++) iu(t[e]);
  }
}
function rc(e, t) {
  return e(t);
}
function oc() {}
var vl = !1;
function lc(e, t, n) {
  if (vl) return e(t, n);
  vl = !0;
  try {
    return rc(e, t, n);
  } finally {
    (vl = !1), (vn !== null || wn !== null) && (oc(), nc());
  }
}
function fr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Xo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var si = !1;
if (nt)
  try {
    var Dn = {};
    Object.defineProperty(Dn, "passive", {
      get: function () {
        si = !0;
      },
    }),
      window.addEventListener("test", Dn, Dn),
      window.removeEventListener("test", Dn, Dn);
  } catch {
    si = !1;
  }
function ip(e, t, n, r, o, l, i, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (d) {
    this.onError(d);
  }
}
var er = !1,
  yo = null,
  vo = !1,
  ui = null,
  sp = {
    onError: function (e) {
      (er = !0), (yo = e);
    },
  };
function up(e, t, n, r, o, l, i, s, u) {
  (er = !1), (yo = null), ip.apply(sp, arguments);
}
function ap(e, t, n, r, o, l, i, s, u) {
  if ((up.apply(this, arguments), er)) {
    if (er) {
      var a = yo;
      (er = !1), (yo = null);
    } else throw Error(E(198));
    vo || ((vo = !0), (ui = a));
  }
}
function Zt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ic(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function su(e) {
  if (Zt(e) !== e) throw Error(E(188));
}
function cp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Zt(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return su(o), e;
        if (l === r) return su(o), t;
        l = l.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var i = !1, s = o.child; s; ) {
        if (s === n) {
          (i = !0), (n = o), (r = l);
          break;
        }
        if (s === r) {
          (i = !0), (r = o), (n = l);
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = l.child; s; ) {
          if (s === n) {
            (i = !0), (n = l), (r = o);
            break;
          }
          if (s === r) {
            (i = !0), (r = l), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function sc(e) {
  return (e = cp(e)), e !== null ? uc(e) : null;
}
function uc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = uc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ac = _e.unstable_scheduleCallback,
  uu = _e.unstable_cancelCallback,
  dp = _e.unstable_shouldYield,
  fp = _e.unstable_requestPaint,
  X = _e.unstable_now,
  pp = _e.unstable_getCurrentPriorityLevel,
  os = _e.unstable_ImmediatePriority,
  cc = _e.unstable_UserBlockingPriority,
  wo = _e.unstable_NormalPriority,
  mp = _e.unstable_LowPriority,
  dc = _e.unstable_IdlePriority,
  Qo = null,
  Ge = null;
function hp(e) {
  if (Ge && typeof Ge.onCommitFiberRoot == "function")
    try {
      Ge.onCommitFiberRoot(Qo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Be = Math.clz32 ? Math.clz32 : vp,
  gp = Math.log,
  yp = Math.LN2;
function vp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((gp(e) / yp) | 0)) | 0;
}
var $r = 64,
  Hr = 4194304;
function Jn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function xo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~o;
    s !== 0 ? (r = Jn(s)) : ((l &= i), l !== 0 && (r = Jn(l)));
  } else (i = n & ~o), i !== 0 ? (r = Jn(i)) : l !== 0 && (r = Jn(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Be(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function wp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function xp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - Be(l),
      s = 1 << i,
      u = o[i];
    u === -1
      ? (!(s & n) || s & r) && (o[i] = wp(s, t))
      : u <= t && (e.expiredLanes |= s),
      (l &= ~s);
  }
}
function ai(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function fc() {
  var e = $r;
  return ($r <<= 1), !($r & 4194240) && ($r = 64), e;
}
function wl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Rr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Be(t)),
    (e[t] = n);
}
function Sp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Be(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function ls(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Be(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var D = 0;
function pc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var mc,
  is,
  hc,
  gc,
  yc,
  ci = !1,
  Vr = [],
  xt = null,
  St = null,
  kt = null,
  pr = new Map(),
  mr = new Map(),
  ht = [],
  kp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function au(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      xt = null;
      break;
    case "dragenter":
    case "dragleave":
      St = null;
      break;
    case "mouseover":
    case "mouseout":
      kt = null;
      break;
    case "pointerover":
    case "pointerout":
      pr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      mr.delete(t.pointerId);
  }
}
function Un(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = Or(t)), t !== null && is(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Ep(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (xt = Un(xt, e, t, n, r, o)), !0;
    case "dragenter":
      return (St = Un(St, e, t, n, r, o)), !0;
    case "mouseover":
      return (kt = Un(kt, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return pr.set(l, Un(pr.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), mr.set(l, Un(mr.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function vc(e) {
  var t = Ft(e.target);
  if (t !== null) {
    var n = Zt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ic(n)), t !== null)) {
          (e.blockedOn = t),
            yc(e.priority, function () {
              hc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ro(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = di(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (li = r), n.target.dispatchEvent(r), (li = null);
    } else return (t = Or(n)), t !== null && is(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function cu(e, t, n) {
  ro(e) && n.delete(t);
}
function Cp() {
  (ci = !1),
    xt !== null && ro(xt) && (xt = null),
    St !== null && ro(St) && (St = null),
    kt !== null && ro(kt) && (kt = null),
    pr.forEach(cu),
    mr.forEach(cu);
}
function Bn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ci ||
      ((ci = !0),
      _e.unstable_scheduleCallback(_e.unstable_NormalPriority, Cp)));
}
function hr(e) {
  function t(o) {
    return Bn(o, e);
  }
  if (0 < Vr.length) {
    Bn(Vr[0], e);
    for (var n = 1; n < Vr.length; n++) {
      var r = Vr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    xt !== null && Bn(xt, e),
      St !== null && Bn(St, e),
      kt !== null && Bn(kt, e),
      pr.forEach(t),
      mr.forEach(t),
      n = 0;
    n < ht.length;
    n++
  )
    (r = ht[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ht.length && ((n = ht[0]), n.blockedOn === null); )
    vc(n), n.blockedOn === null && ht.shift();
}
var xn = it.ReactCurrentBatchConfig,
  So = !0;
function Np(e, t, n, r) {
  var o = D,
    l = xn.transition;
  xn.transition = null;
  try {
    (D = 1), ss(e, t, n, r);
  } finally {
    (D = o), (xn.transition = l);
  }
}
function jp(e, t, n, r) {
  var o = D,
    l = xn.transition;
  xn.transition = null;
  try {
    (D = 4), ss(e, t, n, r);
  } finally {
    (D = o), (xn.transition = l);
  }
}
function ss(e, t, n, r) {
  if (So) {
    var o = di(e, t, n, r);
    if (o === null) Rl(e, t, r, ko, n), au(e, r);
    else if (Ep(o, e, t, n, r)) r.stopPropagation();
    else if ((au(e, r), t & 4 && -1 < kp.indexOf(e))) {
      for (; o !== null; ) {
        var l = Or(o);
        if (
          (l !== null && mc(l),
          (l = di(e, t, n, r)),
          l === null && Rl(e, t, r, ko, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else Rl(e, t, r, null, n);
  }
}
var ko = null;
function di(e, t, n, r) {
  if (((ko = null), (e = rs(r)), (e = Ft(e)), e !== null))
    if (((t = Zt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ic(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ko = e), null;
}
function wc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (pp()) {
        case os:
          return 1;
        case cc:
          return 4;
        case wo:
        case mp:
          return 16;
        case dc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var vt = null,
  us = null,
  oo = null;
function xc() {
  if (oo) return oo;
  var e,
    t = us,
    n = t.length,
    r,
    o = "value" in vt ? vt.value : vt.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (oo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function lo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Wr() {
  return !0;
}
function du() {
  return !1;
}
function Te(e) {
  function t(n, r, o, l, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(l) : l[s]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Wr
        : du),
      (this.isPropagationStopped = du),
      this
    );
  }
  return (
    G(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Wr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Wr));
      },
      persist: function () {},
      isPersistent: Wr,
    }),
    t
  );
}
var Ln = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  as = Te(Ln),
  Tr = G({}, Ln, { view: 0, detail: 0 }),
  Pp = Te(Tr),
  xl,
  Sl,
  $n,
  Ko = G({}, Tr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: cs,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== $n &&
            ($n && e.type === "mousemove"
              ? ((xl = e.screenX - $n.screenX), (Sl = e.screenY - $n.screenY))
              : (Sl = xl = 0),
            ($n = e)),
          xl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Sl;
    },
  }),
  fu = Te(Ko),
  _p = G({}, Ko, { dataTransfer: 0 }),
  Rp = Te(_p),
  Tp = G({}, Tr, { relatedTarget: 0 }),
  kl = Te(Tp),
  Op = G({}, Ln, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Lp = Te(Op),
  zp = G({}, Ln, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  bp = Te(zp),
  Ap = G({}, Ln, { data: 0 }),
  pu = Te(Ap),
  Mp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Ip = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Fp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Dp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Fp[e]) ? !!t[e] : !1;
}
function cs() {
  return Dp;
}
var Up = G({}, Tr, {
    key: function (e) {
      if (e.key) {
        var t = Mp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = lo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Ip[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: cs,
    charCode: function (e) {
      return e.type === "keypress" ? lo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? lo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Bp = Te(Up),
  $p = G({}, Ko, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  mu = Te($p),
  Hp = G({}, Tr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: cs,
  }),
  Vp = Te(Hp),
  Wp = G({}, Ln, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Qp = Te(Wp),
  Kp = G({}, Ko, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Gp = Te(Kp),
  qp = [9, 13, 27, 32],
  ds = nt && "CompositionEvent" in window,
  tr = null;
nt && "documentMode" in document && (tr = document.documentMode);
var Xp = nt && "TextEvent" in window && !tr,
  Sc = nt && (!ds || (tr && 8 < tr && 11 >= tr)),
  hu = " ",
  gu = !1;
function kc(e, t) {
  switch (e) {
    case "keyup":
      return qp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ec(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ln = !1;
function Jp(e, t) {
  switch (e) {
    case "compositionend":
      return Ec(t);
    case "keypress":
      return t.which !== 32 ? null : ((gu = !0), hu);
    case "textInput":
      return (e = t.data), e === hu && gu ? null : e;
    default:
      return null;
  }
}
function Yp(e, t) {
  if (ln)
    return e === "compositionend" || (!ds && kc(e, t))
      ? ((e = xc()), (oo = us = vt = null), (ln = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Sc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Zp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function yu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Zp[e.type] : t === "textarea";
}
function Cc(e, t, n, r) {
  tc(r),
    (t = Eo(t, "onChange")),
    0 < t.length &&
      ((n = new as("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var nr = null,
  gr = null;
function em(e) {
  Ac(e, 0);
}
function Go(e) {
  var t = an(e);
  if (Ga(t)) return e;
}
function tm(e, t) {
  if (e === "change") return t;
}
var Nc = !1;
if (nt) {
  var El;
  if (nt) {
    var Cl = "oninput" in document;
    if (!Cl) {
      var vu = document.createElement("div");
      vu.setAttribute("oninput", "return;"),
        (Cl = typeof vu.oninput == "function");
    }
    El = Cl;
  } else El = !1;
  Nc = El && (!document.documentMode || 9 < document.documentMode);
}
function wu() {
  nr && (nr.detachEvent("onpropertychange", jc), (gr = nr = null));
}
function jc(e) {
  if (e.propertyName === "value" && Go(gr)) {
    var t = [];
    Cc(t, gr, e, rs(e)), lc(em, t);
  }
}
function nm(e, t, n) {
  e === "focusin"
    ? (wu(), (nr = t), (gr = n), nr.attachEvent("onpropertychange", jc))
    : e === "focusout" && wu();
}
function rm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Go(gr);
}
function om(e, t) {
  if (e === "click") return Go(t);
}
function lm(e, t) {
  if (e === "input" || e === "change") return Go(t);
}
function im(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var He = typeof Object.is == "function" ? Object.is : im;
function yr(e, t) {
  if (He(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Kl.call(t, o) || !He(e[o], t[o])) return !1;
  }
  return !0;
}
function xu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Su(e, t) {
  var n = xu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = xu(n);
  }
}
function Pc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Pc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function _c() {
  for (var e = window, t = go(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = go(e.document);
  }
  return t;
}
function fs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function sm(e) {
  var t = _c(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Pc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && fs(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          l = Math.min(r.start, o);
        (r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = Su(n, l));
        var i = Su(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var um = nt && "documentMode" in document && 11 >= document.documentMode,
  sn = null,
  fi = null,
  rr = null,
  pi = !1;
function ku(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  pi ||
    sn == null ||
    sn !== go(r) ||
    ((r = sn),
    "selectionStart" in r && fs(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (rr && yr(rr, r)) ||
      ((rr = r),
      (r = Eo(fi, "onSelect")),
      0 < r.length &&
        ((t = new as("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = sn))));
}
function Qr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var un = {
    animationend: Qr("Animation", "AnimationEnd"),
    animationiteration: Qr("Animation", "AnimationIteration"),
    animationstart: Qr("Animation", "AnimationStart"),
    transitionend: Qr("Transition", "TransitionEnd"),
  },
  Nl = {},
  Rc = {};
nt &&
  ((Rc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete un.animationend.animation,
    delete un.animationiteration.animation,
    delete un.animationstart.animation),
  "TransitionEvent" in window || delete un.transitionend.transition);
function qo(e) {
  if (Nl[e]) return Nl[e];
  if (!un[e]) return e;
  var t = un[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Rc) return (Nl[e] = t[n]);
  return e;
}
var Tc = qo("animationend"),
  Oc = qo("animationiteration"),
  Lc = qo("animationstart"),
  zc = qo("transitionend"),
  bc = new Map(),
  Eu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Tt(e, t) {
  bc.set(e, t), Yt(t, [e]);
}
for (var jl = 0; jl < Eu.length; jl++) {
  var Pl = Eu[jl],
    am = Pl.toLowerCase(),
    cm = Pl[0].toUpperCase() + Pl.slice(1);
  Tt(am, "on" + cm);
}
Tt(Tc, "onAnimationEnd");
Tt(Oc, "onAnimationIteration");
Tt(Lc, "onAnimationStart");
Tt("dblclick", "onDoubleClick");
Tt("focusin", "onFocus");
Tt("focusout", "onBlur");
Tt(zc, "onTransitionEnd");
Cn("onMouseEnter", ["mouseout", "mouseover"]);
Cn("onMouseLeave", ["mouseout", "mouseover"]);
Cn("onPointerEnter", ["pointerout", "pointerover"]);
Cn("onPointerLeave", ["pointerout", "pointerover"]);
Yt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Yt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Yt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Yt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Yt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Yt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Yn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  dm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yn));
function Cu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), ap(r, t, void 0, e), (e.currentTarget = null);
}
function Ac(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            u = s.instance,
            a = s.currentTarget;
          if (((s = s.listener), u !== l && o.isPropagationStopped())) break e;
          Cu(o, s, a), (l = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (u = s.instance),
            (a = s.currentTarget),
            (s = s.listener),
            u !== l && o.isPropagationStopped())
          )
            break e;
          Cu(o, s, a), (l = u);
        }
    }
  }
  if (vo) throw ((e = ui), (vo = !1), (ui = null), e);
}
function H(e, t) {
  var n = t[vi];
  n === void 0 && (n = t[vi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Mc(t, e, 2, !1), n.add(r));
}
function _l(e, t, n) {
  var r = 0;
  t && (r |= 4), Mc(n, e, r, t);
}
var Kr = "_reactListening" + Math.random().toString(36).slice(2);
function vr(e) {
  if (!e[Kr]) {
    (e[Kr] = !0),
      Ha.forEach(function (n) {
        n !== "selectionchange" && (dm.has(n) || _l(n, !1, e), _l(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Kr] || ((t[Kr] = !0), _l("selectionchange", !1, t));
  }
}
function Mc(e, t, n, r) {
  switch (wc(t)) {
    case 1:
      var o = Np;
      break;
    case 4:
      o = jp;
      break;
    default:
      o = ss;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !si ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Rl(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = Ft(s)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = l = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  lc(function () {
    var a = l,
      d = rs(n),
      p = [];
    e: {
      var h = bc.get(e);
      if (h !== void 0) {
        var S = as,
          y = e;
        switch (e) {
          case "keypress":
            if (lo(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = Bp;
            break;
          case "focusin":
            (y = "focus"), (S = kl);
            break;
          case "focusout":
            (y = "blur"), (S = kl);
            break;
          case "beforeblur":
          case "afterblur":
            S = kl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = fu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = Rp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Vp;
            break;
          case Tc:
          case Oc:
          case Lc:
            S = Lp;
            break;
          case zc:
            S = Qp;
            break;
          case "scroll":
            S = Pp;
            break;
          case "wheel":
            S = Gp;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = bp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = mu;
        }
        var w = (t & 4) !== 0,
          k = !w && e === "scroll",
          f = w ? (h !== null ? h + "Capture" : null) : h;
        w = [];
        for (var c = a, m; c !== null; ) {
          m = c;
          var x = m.stateNode;
          if (
            (m.tag === 5 &&
              x !== null &&
              ((m = x),
              f !== null && ((x = fr(c, f)), x != null && w.push(wr(c, x, m)))),
            k)
          )
            break;
          c = c.return;
        }
        0 < w.length &&
          ((h = new S(h, y, null, n, d)), p.push({ event: h, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          h &&
            n !== li &&
            (y = n.relatedTarget || n.fromElement) &&
            (Ft(y) || y[rt]))
        )
          break e;
        if (
          (S || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          S
            ? ((y = n.relatedTarget || n.toElement),
              (S = a),
              (y = y ? Ft(y) : null),
              y !== null &&
                ((k = Zt(y)), y !== k || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((S = null), (y = a)),
          S !== y)
        ) {
          if (
            ((w = fu),
            (x = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = mu),
              (x = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (k = S == null ? h : an(S)),
            (m = y == null ? h : an(y)),
            (h = new w(x, c + "leave", S, n, d)),
            (h.target = k),
            (h.relatedTarget = m),
            (x = null),
            Ft(d) === a &&
              ((w = new w(f, c + "enter", y, n, d)),
              (w.target = m),
              (w.relatedTarget = k),
              (x = w)),
            (k = x),
            S && y)
          )
            t: {
              for (w = S, f = y, c = 0, m = w; m; m = tn(m)) c++;
              for (m = 0, x = f; x; x = tn(x)) m++;
              for (; 0 < c - m; ) (w = tn(w)), c--;
              for (; 0 < m - c; ) (f = tn(f)), m--;
              for (; c--; ) {
                if (w === f || (f !== null && w === f.alternate)) break t;
                (w = tn(w)), (f = tn(f));
              }
              w = null;
            }
          else w = null;
          S !== null && Nu(p, h, S, w, !1),
            y !== null && k !== null && Nu(p, k, y, w, !0);
        }
      }
      e: {
        if (
          ((h = a ? an(a) : window),
          (S = h.nodeName && h.nodeName.toLowerCase()),
          S === "select" || (S === "input" && h.type === "file"))
        )
          var C = tm;
        else if (yu(h))
          if (Nc) C = lm;
          else {
            C = rm;
            var N = nm;
          }
        else
          (S = h.nodeName) &&
            S.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (C = om);
        if (C && (C = C(e, a))) {
          Cc(p, C, n, d);
          break e;
        }
        N && N(e, h, a),
          e === "focusout" &&
            (N = h._wrapperState) &&
            N.controlled &&
            h.type === "number" &&
            ei(h, "number", h.value);
      }
      switch (((N = a ? an(a) : window), e)) {
        case "focusin":
          (yu(N) || N.contentEditable === "true") &&
            ((sn = N), (fi = a), (rr = null));
          break;
        case "focusout":
          rr = fi = sn = null;
          break;
        case "mousedown":
          pi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (pi = !1), ku(p, n, d);
          break;
        case "selectionchange":
          if (um) break;
        case "keydown":
        case "keyup":
          ku(p, n, d);
      }
      var j;
      if (ds)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        ln
          ? kc(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (Sc &&
          n.locale !== "ko" &&
          (ln || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && ln && (j = xc())
            : ((vt = d),
              (us = "value" in vt ? vt.value : vt.textContent),
              (ln = !0))),
        (N = Eo(a, R)),
        0 < N.length &&
          ((R = new pu(R, e, null, n, d)),
          p.push({ event: R, listeners: N }),
          j ? (R.data = j) : ((j = Ec(n)), j !== null && (R.data = j)))),
        (j = Xp ? Jp(e, n) : Yp(e, n)) &&
          ((a = Eo(a, "onBeforeInput")),
          0 < a.length &&
            ((d = new pu("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: a }),
            (d.data = j)));
    }
    Ac(p, t);
  });
}
function wr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Eo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = fr(e, n)),
      l != null && r.unshift(wr(e, l, o)),
      (l = fr(e, t)),
      l != null && r.push(wr(e, l, o))),
      (e = e.return);
  }
  return r;
}
function tn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Nu(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      o
        ? ((u = fr(n, l)), u != null && i.unshift(wr(n, u, s)))
        : o || ((u = fr(n, l)), u != null && i.push(wr(n, u, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var fm = /\r\n?/g,
  pm = /\u0000|\uFFFD/g;
function ju(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      fm,
      `
`
    )
    .replace(pm, "");
}
function Gr(e, t, n) {
  if (((t = ju(t)), ju(e) !== t && n)) throw Error(E(425));
}
function Co() {}
var mi = null,
  hi = null;
function gi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var yi = typeof setTimeout == "function" ? setTimeout : void 0,
  mm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Pu = typeof Promise == "function" ? Promise : void 0,
  hm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Pu < "u"
      ? function (e) {
          return Pu.resolve(null).then(e).catch(gm);
        }
      : yi;
function gm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Tl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), hr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  hr(t);
}
function Et(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function _u(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var zn = Math.random().toString(36).slice(2),
  Ke = "__reactFiber$" + zn,
  xr = "__reactProps$" + zn,
  rt = "__reactContainer$" + zn,
  vi = "__reactEvents$" + zn,
  ym = "__reactListeners$" + zn,
  vm = "__reactHandles$" + zn;
function Ft(e) {
  var t = e[Ke];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[rt] || n[Ke])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = _u(e); e !== null; ) {
          if ((n = e[Ke])) return n;
          e = _u(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Or(e) {
  return (
    (e = e[Ke] || e[rt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function an(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function Xo(e) {
  return e[xr] || null;
}
var wi = [],
  cn = -1;
function Ot(e) {
  return { current: e };
}
function V(e) {
  0 > cn || ((e.current = wi[cn]), (wi[cn] = null), cn--);
}
function B(e, t) {
  cn++, (wi[cn] = e.current), (e.current = t);
}
var Rt = {},
  ce = Ot(Rt),
  we = Ot(!1),
  Wt = Rt;
function Nn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Rt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function xe(e) {
  return (e = e.childContextTypes), e != null;
}
function No() {
  V(we), V(ce);
}
function Ru(e, t, n) {
  if (ce.current !== Rt) throw Error(E(168));
  B(ce, t), B(we, n);
}
function Ic(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(E(108, np(e) || "Unknown", o));
  return G({}, n, r);
}
function jo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Rt),
    (Wt = ce.current),
    B(ce, e),
    B(we, we.current),
    !0
  );
}
function Tu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = Ic(e, t, Wt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      V(we),
      V(ce),
      B(ce, e))
    : V(we),
    B(we, n);
}
var Ye = null,
  Jo = !1,
  Ol = !1;
function Fc(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
function wm(e) {
  (Jo = !0), Fc(e);
}
function Lt() {
  if (!Ol && Ye !== null) {
    Ol = !0;
    var e = 0,
      t = D;
    try {
      var n = Ye;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ye = null), (Jo = !1);
    } catch (o) {
      throw (Ye !== null && (Ye = Ye.slice(e + 1)), ac(os, Lt), o);
    } finally {
      (D = t), (Ol = !1);
    }
  }
  return null;
}
var dn = [],
  fn = 0,
  Po = null,
  _o = 0,
  Oe = [],
  Le = 0,
  Qt = null,
  Ze = 1,
  et = "";
function Mt(e, t) {
  (dn[fn++] = _o), (dn[fn++] = Po), (Po = e), (_o = t);
}
function Dc(e, t, n) {
  (Oe[Le++] = Ze), (Oe[Le++] = et), (Oe[Le++] = Qt), (Qt = e);
  var r = Ze;
  e = et;
  var o = 32 - Be(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - Be(t) + o;
  if (30 < l) {
    var i = o - (o % 5);
    (l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (Ze = (1 << (32 - Be(t) + o)) | (n << o) | r),
      (et = l + e);
  } else (Ze = (1 << l) | (n << o) | r), (et = e);
}
function ps(e) {
  e.return !== null && (Mt(e, 1), Dc(e, 1, 0));
}
function ms(e) {
  for (; e === Po; )
    (Po = dn[--fn]), (dn[fn] = null), (_o = dn[--fn]), (dn[fn] = null);
  for (; e === Qt; )
    (Qt = Oe[--Le]),
      (Oe[Le] = null),
      (et = Oe[--Le]),
      (Oe[Le] = null),
      (Ze = Oe[--Le]),
      (Oe[Le] = null);
}
var je = null,
  Ne = null,
  W = !1,
  Ue = null;
function Uc(e, t) {
  var n = ze(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ou(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (je = e), (Ne = Et(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (je = e), (Ne = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Qt !== null ? { id: Ze, overflow: et } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ze(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (je = e),
            (Ne = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function xi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Si(e) {
  if (W) {
    var t = Ne;
    if (t) {
      var n = t;
      if (!Ou(e, t)) {
        if (xi(e)) throw Error(E(418));
        t = Et(n.nextSibling);
        var r = je;
        t && Ou(e, t)
          ? Uc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (je = e));
      }
    } else {
      if (xi(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (je = e);
    }
  }
}
function Lu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  je = e;
}
function qr(e) {
  if (e !== je) return !1;
  if (!W) return Lu(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !gi(e.type, e.memoizedProps))),
    t && (t = Ne))
  ) {
    if (xi(e)) throw (Bc(), Error(E(418)));
    for (; t; ) Uc(e, t), (t = Et(t.nextSibling));
  }
  if ((Lu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ne = Et(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ne = null;
    }
  } else Ne = je ? Et(e.stateNode.nextSibling) : null;
  return !0;
}
function Bc() {
  for (var e = Ne; e; ) e = Et(e.nextSibling);
}
function jn() {
  (Ne = je = null), (W = !1);
}
function hs(e) {
  Ue === null ? (Ue = [e]) : Ue.push(e);
}
var xm = it.ReactCurrentBatchConfig;
function Hn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var o = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var s = o.refs;
            i === null ? delete s[l] : (s[l] = i);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Xr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function zu(e) {
  var t = e._init;
  return t(e._payload);
}
function $c(e) {
  function t(f, c) {
    if (e) {
      var m = f.deletions;
      m === null ? ((f.deletions = [c]), (f.flags |= 16)) : m.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function o(f, c) {
    return (f = Pt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function l(f, c, m) {
    return (
      (f.index = m),
      e
        ? ((m = f.alternate),
          m !== null
            ? ((m = m.index), m < c ? ((f.flags |= 2), c) : m)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, c, m, x) {
    return c === null || c.tag !== 6
      ? ((c = Fl(m, f.mode, x)), (c.return = f), c)
      : ((c = o(c, m)), (c.return = f), c);
  }
  function u(f, c, m, x) {
    var C = m.type;
    return C === on
      ? d(f, c, m.props.children, x, m.key)
      : c !== null &&
        (c.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === pt &&
            zu(C) === c.type))
      ? ((x = o(c, m.props)), (x.ref = Hn(f, c, m)), (x.return = f), x)
      : ((x = po(m.type, m.key, m.props, null, f.mode, x)),
        (x.ref = Hn(f, c, m)),
        (x.return = f),
        x);
  }
  function a(f, c, m, x) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== m.containerInfo ||
      c.stateNode.implementation !== m.implementation
      ? ((c = Dl(m, f.mode, x)), (c.return = f), c)
      : ((c = o(c, m.children || [])), (c.return = f), c);
  }
  function d(f, c, m, x, C) {
    return c === null || c.tag !== 7
      ? ((c = Ht(m, f.mode, x, C)), (c.return = f), c)
      : ((c = o(c, m)), (c.return = f), c);
  }
  function p(f, c, m) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Fl("" + c, f.mode, m)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Dr:
          return (
            (m = po(c.type, c.key, c.props, null, f.mode, m)),
            (m.ref = Hn(f, null, c)),
            (m.return = f),
            m
          );
        case rn:
          return (c = Dl(c, f.mode, m)), (c.return = f), c;
        case pt:
          var x = c._init;
          return p(f, x(c._payload), m);
      }
      if (Xn(c) || Fn(c))
        return (c = Ht(c, f.mode, m, null)), (c.return = f), c;
      Xr(f, c);
    }
    return null;
  }
  function h(f, c, m, x) {
    var C = c !== null ? c.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return C !== null ? null : s(f, c, "" + m, x);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Dr:
          return m.key === C ? u(f, c, m, x) : null;
        case rn:
          return m.key === C ? a(f, c, m, x) : null;
        case pt:
          return (C = m._init), h(f, c, C(m._payload), x);
      }
      if (Xn(m) || Fn(m)) return C !== null ? null : d(f, c, m, x, null);
      Xr(f, m);
    }
    return null;
  }
  function S(f, c, m, x, C) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (f = f.get(m) || null), s(c, f, "" + x, C);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Dr:
          return (f = f.get(x.key === null ? m : x.key) || null), u(c, f, x, C);
        case rn:
          return (f = f.get(x.key === null ? m : x.key) || null), a(c, f, x, C);
        case pt:
          var N = x._init;
          return S(f, c, m, N(x._payload), C);
      }
      if (Xn(x) || Fn(x)) return (f = f.get(m) || null), d(c, f, x, C, null);
      Xr(c, x);
    }
    return null;
  }
  function y(f, c, m, x) {
    for (
      var C = null, N = null, j = c, R = (c = 0), U = null;
      j !== null && R < m.length;
      R++
    ) {
      j.index > R ? ((U = j), (j = null)) : (U = j.sibling);
      var b = h(f, j, m[R], x);
      if (b === null) {
        j === null && (j = U);
        break;
      }
      e && j && b.alternate === null && t(f, j),
        (c = l(b, c, R)),
        N === null ? (C = b) : (N.sibling = b),
        (N = b),
        (j = U);
    }
    if (R === m.length) return n(f, j), W && Mt(f, R), C;
    if (j === null) {
      for (; R < m.length; R++)
        (j = p(f, m[R], x)),
          j !== null &&
            ((c = l(j, c, R)), N === null ? (C = j) : (N.sibling = j), (N = j));
      return W && Mt(f, R), C;
    }
    for (j = r(f, j); R < m.length; R++)
      (U = S(j, f, R, m[R], x)),
        U !== null &&
          (e && U.alternate !== null && j.delete(U.key === null ? R : U.key),
          (c = l(U, c, R)),
          N === null ? (C = U) : (N.sibling = U),
          (N = U));
    return (
      e &&
        j.forEach(function (de) {
          return t(f, de);
        }),
      W && Mt(f, R),
      C
    );
  }
  function w(f, c, m, x) {
    var C = Fn(m);
    if (typeof C != "function") throw Error(E(150));
    if (((m = C.call(m)), m == null)) throw Error(E(151));
    for (
      var N = (C = null), j = c, R = (c = 0), U = null, b = m.next();
      j !== null && !b.done;
      R++, b = m.next()
    ) {
      j.index > R ? ((U = j), (j = null)) : (U = j.sibling);
      var de = h(f, j, b.value, x);
      if (de === null) {
        j === null && (j = U);
        break;
      }
      e && j && de.alternate === null && t(f, j),
        (c = l(de, c, R)),
        N === null ? (C = de) : (N.sibling = de),
        (N = de),
        (j = U);
    }
    if (b.done) return n(f, j), W && Mt(f, R), C;
    if (j === null) {
      for (; !b.done; R++, b = m.next())
        (b = p(f, b.value, x)),
          b !== null &&
            ((c = l(b, c, R)), N === null ? (C = b) : (N.sibling = b), (N = b));
      return W && Mt(f, R), C;
    }
    for (j = r(f, j); !b.done; R++, b = m.next())
      (b = S(j, f, R, b.value, x)),
        b !== null &&
          (e && b.alternate !== null && j.delete(b.key === null ? R : b.key),
          (c = l(b, c, R)),
          N === null ? (C = b) : (N.sibling = b),
          (N = b));
    return (
      e &&
        j.forEach(function (F) {
          return t(f, F);
        }),
      W && Mt(f, R),
      C
    );
  }
  function k(f, c, m, x) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === on &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Dr:
          e: {
            for (var C = m.key, N = c; N !== null; ) {
              if (N.key === C) {
                if (((C = m.type), C === on)) {
                  if (N.tag === 7) {
                    n(f, N.sibling),
                      (c = o(N, m.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  N.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === pt &&
                    zu(C) === N.type)
                ) {
                  n(f, N.sibling),
                    (c = o(N, m.props)),
                    (c.ref = Hn(f, N, m)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, N);
                break;
              } else t(f, N);
              N = N.sibling;
            }
            m.type === on
              ? ((c = Ht(m.props.children, f.mode, x, m.key)),
                (c.return = f),
                (f = c))
              : ((x = po(m.type, m.key, m.props, null, f.mode, x)),
                (x.ref = Hn(f, c, m)),
                (x.return = f),
                (f = x));
          }
          return i(f);
        case rn:
          e: {
            for (N = m.key; c !== null; ) {
              if (c.key === N)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === m.containerInfo &&
                  c.stateNode.implementation === m.implementation
                ) {
                  n(f, c.sibling),
                    (c = o(c, m.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = Dl(m, f.mode, x)), (c.return = f), (f = c);
          }
          return i(f);
        case pt:
          return (N = m._init), k(f, c, N(m._payload), x);
      }
      if (Xn(m)) return y(f, c, m, x);
      if (Fn(m)) return w(f, c, m, x);
      Xr(f, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = o(c, m)), (c.return = f), (f = c))
          : (n(f, c), (c = Fl(m, f.mode, x)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return k;
}
var Pn = $c(!0),
  Hc = $c(!1),
  Ro = Ot(null),
  To = null,
  pn = null,
  gs = null;
function ys() {
  gs = pn = To = null;
}
function vs(e) {
  var t = Ro.current;
  V(Ro), (e._currentValue = t);
}
function ki(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Sn(e, t) {
  (To = e),
    (gs = pn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ve = !0), (e.firstContext = null));
}
function Ae(e) {
  var t = e._currentValue;
  if (gs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), pn === null)) {
      if (To === null) throw Error(E(308));
      (pn = e), (To.dependencies = { lanes: 0, firstContext: e });
    } else pn = pn.next = e;
  return t;
}
var Dt = null;
function ws(e) {
  Dt === null ? (Dt = [e]) : Dt.push(e);
}
function Vc(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), ws(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    ot(e, r)
  );
}
function ot(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var mt = !1;
function xs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Wc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function tt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ct(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      ot(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), ws(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    ot(e, n)
  );
}
function io(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ls(e, n);
  }
}
function bu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (o = l = i) : (l = l.next = i), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Oo(e, t, n, r) {
  var o = e.updateQueue;
  mt = !1;
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var u = s,
      a = u.next;
    (u.next = null), i === null ? (l = a) : (i.next = a), (i = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== i &&
        (s === null ? (d.firstBaseUpdate = a) : (s.next = a),
        (d.lastBaseUpdate = u)));
  }
  if (l !== null) {
    var p = o.baseState;
    (i = 0), (d = a = u = null), (s = l);
    do {
      var h = s.lane,
        S = s.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: S,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var y = e,
            w = s;
          switch (((h = t), (S = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == "function")) {
                p = y.call(S, p, h);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (h = typeof y == "function" ? y.call(S, p, h) : y),
                h == null)
              )
                break e;
              p = G({}, p, h);
              break e;
            case 2:
              mt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [s]) : h.push(s));
      } else
        (S = {
          eventTime: S,
          lane: h,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((a = d = S), (u = p)) : (d = d.next = S),
          (i |= h);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (h = s),
          (s = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (u = p),
      (o.baseState = u),
      (o.firstBaseUpdate = a),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (Gt |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function Au(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(E(191, o));
        o.call(r);
      }
    }
}
var Lr = {},
  qe = Ot(Lr),
  Sr = Ot(Lr),
  kr = Ot(Lr);
function Ut(e) {
  if (e === Lr) throw Error(E(174));
  return e;
}
function Ss(e, t) {
  switch ((B(kr, t), B(Sr, e), B(qe, Lr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ni(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ni(t, e));
  }
  V(qe), B(qe, t);
}
function _n() {
  V(qe), V(Sr), V(kr);
}
function Qc(e) {
  Ut(kr.current);
  var t = Ut(qe.current),
    n = ni(t, e.type);
  t !== n && (B(Sr, e), B(qe, n));
}
function ks(e) {
  Sr.current === e && (V(qe), V(Sr));
}
var Q = Ot(0);
function Lo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ll = [];
function Es() {
  for (var e = 0; e < Ll.length; e++)
    Ll[e]._workInProgressVersionPrimary = null;
  Ll.length = 0;
}
var so = it.ReactCurrentDispatcher,
  zl = it.ReactCurrentBatchConfig,
  Kt = 0,
  K = null,
  Z = null,
  ne = null,
  zo = !1,
  or = !1,
  Er = 0,
  Sm = 0;
function se() {
  throw Error(E(321));
}
function Cs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!He(e[n], t[n])) return !1;
  return !0;
}
function Ns(e, t, n, r, o, l) {
  if (
    ((Kt = l),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (so.current = e === null || e.memoizedState === null ? Nm : jm),
    (e = n(r, o)),
    or)
  ) {
    l = 0;
    do {
      if (((or = !1), (Er = 0), 25 <= l)) throw Error(E(301));
      (l += 1),
        (ne = Z = null),
        (t.updateQueue = null),
        (so.current = Pm),
        (e = n(r, o));
    } while (or);
  }
  if (
    ((so.current = bo),
    (t = Z !== null && Z.next !== null),
    (Kt = 0),
    (ne = Z = K = null),
    (zo = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function js() {
  var e = Er !== 0;
  return (Er = 0), e;
}
function Qe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ne === null ? (K.memoizedState = ne = e) : (ne = ne.next = e), ne;
}
function Me() {
  if (Z === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var t = ne === null ? K.memoizedState : ne.next;
  if (t !== null) (ne = t), (Z = e);
  else {
    if (e === null) throw Error(E(310));
    (Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      ne === null ? (K.memoizedState = ne = e) : (ne = ne.next = e);
  }
  return ne;
}
function Cr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function bl(e) {
  var t = Me(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = Z,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = l.next), (l.next = i);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (r = r.baseState);
    var s = (i = null),
      u = null,
      a = l;
    do {
      var d = a.lane;
      if ((Kt & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var p = {
          lane: d,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((s = u = p), (i = r)) : (u = u.next = p),
          (K.lanes |= d),
          (Gt |= d);
      }
      a = a.next;
    } while (a !== null && a !== l);
    u === null ? (i = r) : (u.next = s),
      He(r, t.memoizedState) || (ve = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (K.lanes |= l), (Gt |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Al(e) {
  var t = Me(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== o);
    He(l, t.memoizedState) || (ve = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Kc() {}
function Gc(e, t) {
  var n = K,
    r = Me(),
    o = t(),
    l = !He(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (ve = !0)),
    (r = r.queue),
    Ps(Jc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (ne !== null && ne.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Nr(9, Xc.bind(null, n, r, o, t), void 0, null),
      re === null)
    )
      throw Error(E(349));
    Kt & 30 || qc(n, t, o);
  }
  return o;
}
function qc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Xc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Yc(t) && Zc(e);
}
function Jc(e, t, n) {
  return n(function () {
    Yc(t) && Zc(e);
  });
}
function Yc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !He(e, n);
  } catch {
    return !0;
  }
}
function Zc(e) {
  var t = ot(e, 1);
  t !== null && $e(t, e, 1, -1);
}
function Mu(e) {
  var t = Qe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Cr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Cm.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function Nr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ed() {
  return Me().memoizedState;
}
function uo(e, t, n, r) {
  var o = Qe();
  (K.flags |= e),
    (o.memoizedState = Nr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Yo(e, t, n, r) {
  var o = Me();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (Z !== null) {
    var i = Z.memoizedState;
    if (((l = i.destroy), r !== null && Cs(r, i.deps))) {
      o.memoizedState = Nr(t, n, l, r);
      return;
    }
  }
  (K.flags |= e), (o.memoizedState = Nr(1 | t, n, l, r));
}
function Iu(e, t) {
  return uo(8390656, 8, e, t);
}
function Ps(e, t) {
  return Yo(2048, 8, e, t);
}
function td(e, t) {
  return Yo(4, 2, e, t);
}
function nd(e, t) {
  return Yo(4, 4, e, t);
}
function rd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function od(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Yo(4, 4, rd.bind(null, t, e), n)
  );
}
function _s() {}
function ld(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cs(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function id(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function sd(e, t, n) {
  return Kt & 21
    ? (He(n, t) || ((n = fc()), (K.lanes |= n), (Gt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ve = !0)), (e.memoizedState = n));
}
function km(e, t) {
  var n = D;
  (D = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = zl.transition;
  zl.transition = {};
  try {
    e(!1), t();
  } finally {
    (D = n), (zl.transition = r);
  }
}
function ud() {
  return Me().memoizedState;
}
function Em(e, t, n) {
  var r = jt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ad(e))
  )
    cd(t, n);
  else if (((n = Vc(e, t, n, r)), n !== null)) {
    var o = pe();
    $e(n, e, r, o), dd(n, t, r);
  }
}
function Cm(e, t, n) {
  var r = jt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ad(e)) cd(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = l(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), He(s, i))) {
          var u = t.interleaved;
          u === null
            ? ((o.next = o), ws(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Vc(e, t, o, r)),
      n !== null && ((o = pe()), $e(n, e, r, o), dd(n, t, r));
  }
}
function ad(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function cd(e, t) {
  or = zo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function dd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ls(e, n);
  }
}
var bo = {
    readContext: Ae,
    useCallback: se,
    useContext: se,
    useEffect: se,
    useImperativeHandle: se,
    useInsertionEffect: se,
    useLayoutEffect: se,
    useMemo: se,
    useReducer: se,
    useRef: se,
    useState: se,
    useDebugValue: se,
    useDeferredValue: se,
    useTransition: se,
    useMutableSource: se,
    useSyncExternalStore: se,
    useId: se,
    unstable_isNewReconciler: !1,
  },
  Nm = {
    readContext: Ae,
    useCallback: function (e, t) {
      return (Qe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ae,
    useEffect: Iu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        uo(4194308, 4, rd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return uo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return uo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Qe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Qe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Em.bind(null, K, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Qe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Mu,
    useDebugValue: _s,
    useDeferredValue: function (e) {
      return (Qe().memoizedState = e);
    },
    useTransition: function () {
      var e = Mu(!1),
        t = e[0];
      return (e = km.bind(null, e[1])), (Qe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = K,
        o = Qe();
      if (W) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), re === null)) throw Error(E(349));
        Kt & 30 || qc(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        Iu(Jc.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        Nr(9, Xc.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Qe(),
        t = re.identifierPrefix;
      if (W) {
        var n = et,
          r = Ze;
        (n = (r & ~(1 << (32 - Be(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Er++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Sm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  jm = {
    readContext: Ae,
    useCallback: ld,
    useContext: Ae,
    useEffect: Ps,
    useImperativeHandle: od,
    useInsertionEffect: td,
    useLayoutEffect: nd,
    useMemo: id,
    useReducer: bl,
    useRef: ed,
    useState: function () {
      return bl(Cr);
    },
    useDebugValue: _s,
    useDeferredValue: function (e) {
      var t = Me();
      return sd(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = bl(Cr)[0],
        t = Me().memoizedState;
      return [e, t];
    },
    useMutableSource: Kc,
    useSyncExternalStore: Gc,
    useId: ud,
    unstable_isNewReconciler: !1,
  },
  Pm = {
    readContext: Ae,
    useCallback: ld,
    useContext: Ae,
    useEffect: Ps,
    useImperativeHandle: od,
    useInsertionEffect: td,
    useLayoutEffect: nd,
    useMemo: id,
    useReducer: Al,
    useRef: ed,
    useState: function () {
      return Al(Cr);
    },
    useDebugValue: _s,
    useDeferredValue: function (e) {
      var t = Me();
      return Z === null ? (t.memoizedState = e) : sd(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = Al(Cr)[0],
        t = Me().memoizedState;
      return [e, t];
    },
    useMutableSource: Kc,
    useSyncExternalStore: Gc,
    useId: ud,
    unstable_isNewReconciler: !1,
  };
function Fe(e, t) {
  if (e && e.defaultProps) {
    (t = G({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ei(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : G({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Zo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Zt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = pe(),
      o = jt(e),
      l = tt(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = Ct(e, l, o)),
      t !== null && ($e(t, e, o, r), io(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = pe(),
      o = jt(e),
      l = tt(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = Ct(e, l, o)),
      t !== null && ($e(t, e, o, r), io(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = pe(),
      r = jt(e),
      o = tt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Ct(e, o, r)),
      t !== null && ($e(t, e, r, n), io(t, e, r));
  },
};
function Fu(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !yr(n, r) || !yr(o, l)
      : !0
  );
}
function fd(e, t, n) {
  var r = !1,
    o = Rt,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Ae(l))
      : ((o = xe(t) ? Wt : ce.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? Nn(e, o) : Rt)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Zo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Du(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Zo.enqueueReplaceState(t, t.state, null);
}
function Ci(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), xs(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = Ae(l))
    : ((l = xe(t) ? Wt : ce.current), (o.context = Nn(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Ei(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Zo.enqueueReplaceState(o, o.state, null),
      Oo(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Rn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += tp(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ml(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ni(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var _m = typeof WeakMap == "function" ? WeakMap : Map;
function pd(e, t, n) {
  (n = tt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Mo || ((Mo = !0), (Ai = r)), Ni(e, t);
    }),
    n
  );
}
function md(e, t, n) {
  (n = tt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Ni(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        Ni(e, t),
          typeof r != "function" &&
            (Nt === null ? (Nt = new Set([this])) : Nt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Uu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new _m();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = $m.bind(null, e, t, n)), t.then(e, e));
}
function Bu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function $u(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = tt(-1, 1)), (t.tag = 2), Ct(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Rm = it.ReactCurrentOwner,
  ve = !1;
function fe(e, t, n, r) {
  t.child = e === null ? Hc(t, null, n, r) : Pn(t, e.child, n, r);
}
function Hu(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    Sn(t, o),
    (r = Ns(e, t, n, r, l, o)),
    (n = js()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        lt(e, t, o))
      : (W && n && ps(t), (t.flags |= 1), fe(e, t, r, o), t.child)
  );
}
function Vu(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !Ms(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), hd(e, t, l, r, o))
      : ((e = po(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : yr), n(i, r) && e.ref === t.ref)
    )
      return lt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Pt(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function hd(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (yr(l, r) && e.ref === t.ref)
      if (((ve = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (ve = !0);
      else return (t.lanes = e.lanes), lt(e, t, o);
  }
  return ji(e, t, n, r, o);
}
function gd(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        B(hn, Ce),
        (Ce |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          B(hn, Ce),
          (Ce |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        B(hn, Ce),
        (Ce |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      B(hn, Ce),
      (Ce |= r);
  return fe(e, t, o, n), t.child;
}
function yd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ji(e, t, n, r, o) {
  var l = xe(n) ? Wt : ce.current;
  return (
    (l = Nn(t, l)),
    Sn(t, o),
    (n = Ns(e, t, n, r, l, o)),
    (r = js()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        lt(e, t, o))
      : (W && r && ps(t), (t.flags |= 1), fe(e, t, n, o), t.child)
  );
}
function Wu(e, t, n, r, o) {
  if (xe(n)) {
    var l = !0;
    jo(t);
  } else l = !1;
  if ((Sn(t, o), t.stateNode === null))
    ao(e, t), fd(t, n, r), Ci(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var u = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Ae(a))
      : ((a = xe(n) ? Wt : ce.current), (a = Nn(t, a)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || u !== a) && Du(t, i, r, a)),
      (mt = !1);
    var h = t.memoizedState;
    (i.state = h),
      Oo(t, r, i, o),
      (u = t.memoizedState),
      s !== r || h !== u || we.current || mt
        ? (typeof d == "function" && (Ei(t, n, d, r), (u = t.memoizedState)),
          (s = mt || Fu(t, n, s, r, h, u, a))
            ? (p ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = a),
          (r = s))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Wc(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : Fe(t.type, s)),
      (i.props = a),
      (p = t.pendingProps),
      (h = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Ae(u))
        : ((u = xe(n) ? Wt : ce.current), (u = Nn(t, u)));
    var S = n.getDerivedStateFromProps;
    (d =
      typeof S == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== p || h !== u) && Du(t, i, r, u)),
      (mt = !1),
      (h = t.memoizedState),
      (i.state = h),
      Oo(t, r, i, o);
    var y = t.memoizedState;
    s !== p || h !== y || we.current || mt
      ? (typeof S == "function" && (Ei(t, n, S, r), (y = t.memoizedState)),
        (a = mt || Fu(t, n, a, r, h, y, u) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, y, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, y, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (i.props = r),
        (i.state = y),
        (i.context = u),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Pi(e, t, n, r, l, o);
}
function Pi(e, t, n, r, o, l) {
  yd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Tu(t, n, !1), lt(e, t, l);
  (r = t.stateNode), (Rm.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Pn(t, e.child, null, l)), (t.child = Pn(t, null, s, l)))
      : fe(e, t, s, l),
    (t.memoizedState = r.state),
    o && Tu(t, n, !0),
    t.child
  );
}
function vd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ru(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ru(e, t.context, !1),
    Ss(e, t.containerInfo);
}
function Qu(e, t, n, r, o) {
  return jn(), hs(o), (t.flags |= 256), fe(e, t, n, r), t.child;
}
var _i = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ri(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function wd(e, t, n) {
  var r = t.pendingProps,
    o = Q.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    B(Q, o & 1),
    e === null)
  )
    return (
      Si(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = i))
                : (l = nl(i, r, 0, null)),
              (e = Ht(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = Ri(n)),
              (t.memoizedState = _i),
              e)
            : Rs(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return Tm(e, t, i, r, s, o, n);
  if (l) {
    (l = r.fallback), (i = t.mode), (o = e.child), (s = o.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Pt(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (l = Pt(s, l)) : ((l = Ht(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Ri(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = _i),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = Pt(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Rs(e, t) {
  return (
    (t = nl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Jr(e, t, n, r) {
  return (
    r !== null && hs(r),
    Pn(t, e.child, null, n),
    (e = Rs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Tm(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ml(Error(E(422)))), Jr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (o = t.mode),
        (r = nl({ mode: "visible", children: r.children }, o, 0, null)),
        (l = Ht(l, o, i, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && Pn(t, e.child, null, i),
        (t.child.memoizedState = Ri(i)),
        (t.memoizedState = _i),
        l);
  if (!(t.mode & 1)) return Jr(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (l = Error(E(419))), (r = Ml(l, r, void 0)), Jr(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), ve || s)) {
    if (((r = re), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), ot(e, o), $e(r, e, o, -1));
    }
    return As(), (r = Ml(Error(E(421)))), Jr(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Hm.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Ne = Et(o.nextSibling)),
      (je = t),
      (W = !0),
      (Ue = null),
      e !== null &&
        ((Oe[Le++] = Ze),
        (Oe[Le++] = et),
        (Oe[Le++] = Qt),
        (Ze = e.id),
        (et = e.overflow),
        (Qt = t)),
      (t = Rs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ku(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ki(e.return, t, n);
}
function Il(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o));
}
function xd(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((fe(e, t, r.children, n), (r = Q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ku(e, n, t);
        else if (e.tag === 19) Ku(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((B(Q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Lo(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Il(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Lo(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Il(t, !0, n, null, l);
        break;
      case "together":
        Il(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ao(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function lt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Gt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Pt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Pt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Om(e, t, n) {
  switch (t.tag) {
    case 3:
      vd(t), jn();
      break;
    case 5:
      Qc(t);
      break;
    case 1:
      xe(t.type) && jo(t);
      break;
    case 4:
      Ss(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      B(Ro, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (B(Q, Q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? wd(e, t, n)
          : (B(Q, Q.current & 1),
            (e = lt(e, t, n)),
            e !== null ? e.sibling : null);
      B(Q, Q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return xd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        B(Q, Q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), gd(e, t, n);
  }
  return lt(e, t, n);
}
var Sd, Ti, kd, Ed;
Sd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ti = function () {};
kd = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Ut(qe.current);
    var l = null;
    switch (n) {
      case "input":
        (o = Yl(e, o)), (r = Yl(e, r)), (l = []);
        break;
      case "select":
        (o = G({}, o, { value: void 0 })),
          (r = G({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = ti(e, o)), (r = ti(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Co);
    }
    ri(n, r);
    var i;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === "style") {
          var s = o[a];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (cr.hasOwnProperty(a)
              ? l || (l = [])
              : (l = l || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((s = o != null ? o[a] : void 0),
        r.hasOwnProperty(a) && u !== s && (u != null || s != null))
      )
        if (a === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                s[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (l || (l = []), l.push(a, n)), (n = u);
        else
          a === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (l = l || []).push(a, u))
            : a === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (l = l || []).push(a, "" + u)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (cr.hasOwnProperty(a)
                ? (u != null && a === "onScroll" && H("scroll", e),
                  l || s === u || (l = []))
                : (l = l || []).push(a, u));
    }
    n && (l = l || []).push("style", n);
    var a = l;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Ed = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Vn(e, t) {
  if (!W)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Lm(e, t, n) {
  var r = t.pendingProps;
  switch ((ms(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ue(t), null;
    case 1:
      return xe(t.type) && No(), ue(t), null;
    case 3:
      return (
        (r = t.stateNode),
        _n(),
        V(we),
        V(ce),
        Es(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (qr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ue !== null && (Fi(Ue), (Ue = null)))),
        Ti(e, t),
        ue(t),
        null
      );
    case 5:
      ks(t);
      var o = Ut(kr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        kd(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return ue(t), null;
        }
        if (((e = Ut(qe.current)), qr(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[Ke] = t), (r[xr] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              H("cancel", r), H("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              H("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Yn.length; o++) H(Yn[o], r);
              break;
            case "source":
              H("error", r);
              break;
            case "img":
            case "image":
            case "link":
              H("error", r), H("load", r);
              break;
            case "details":
              H("toggle", r);
              break;
            case "input":
              nu(r, l), H("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                H("invalid", r);
              break;
            case "textarea":
              ou(r, l), H("invalid", r);
          }
          ri(n, l), (o = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var s = l[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Gr(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Gr(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : cr.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  H("scroll", r);
            }
          switch (n) {
            case "input":
              Ur(r), ru(r, l, !0);
              break;
            case "textarea":
              Ur(r), lu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Co);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ja(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ke] = t),
            (e[xr] = r),
            Sd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = oi(n, r)), n)) {
              case "dialog":
                H("cancel", e), H("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                H("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Yn.length; o++) H(Yn[o], e);
                o = r;
                break;
              case "source":
                H("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                H("error", e), H("load", e), (o = r);
                break;
              case "details":
                H("toggle", e), (o = r);
                break;
              case "input":
                nu(e, r), (o = Yl(e, r)), H("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = G({}, r, { value: void 0 })),
                  H("invalid", e);
                break;
              case "textarea":
                ou(e, r), (o = ti(e, r)), H("invalid", e);
                break;
              default:
                o = r;
            }
            ri(n, o), (s = o);
            for (l in s)
              if (s.hasOwnProperty(l)) {
                var u = s[l];
                l === "style"
                  ? ec(e, u)
                  : l === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Ya(e, u))
                  : l === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && dr(e, u)
                    : typeof u == "number" && dr(e, "" + u)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (cr.hasOwnProperty(l)
                      ? u != null && l === "onScroll" && H("scroll", e)
                      : u != null && Zi(e, l, u, i));
              }
            switch (n) {
              case "input":
                Ur(e), ru(e, r, !1);
                break;
              case "textarea":
                Ur(e), lu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + _t(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? yn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      yn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Co);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ue(t), null;
    case 6:
      if (e && t.stateNode != null) Ed(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (((n = Ut(kr.current)), Ut(qe.current), qr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ke] = t),
            (l = r.nodeValue !== n) && ((e = je), e !== null))
          )
            switch (e.tag) {
              case 3:
                Gr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Gr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ke] = t),
            (t.stateNode = r);
      }
      return ue(t), null;
    case 13:
      if (
        (V(Q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && Ne !== null && t.mode & 1 && !(t.flags & 128))
          Bc(), jn(), (t.flags |= 98560), (l = !1);
        else if (((l = qr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(E(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(E(317));
            l[Ke] = t;
          } else
            jn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ue(t), (l = !1);
        } else Ue !== null && (Fi(Ue), (Ue = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Q.current & 1 ? ee === 0 && (ee = 3) : As())),
          t.updateQueue !== null && (t.flags |= 4),
          ue(t),
          null);
    case 4:
      return (
        _n(), Ti(e, t), e === null && vr(t.stateNode.containerInfo), ue(t), null
      );
    case 10:
      return vs(t.type._context), ue(t), null;
    case 17:
      return xe(t.type) && No(), ue(t), null;
    case 19:
      if ((V(Q), (l = t.memoizedState), l === null)) return ue(t), null;
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) Vn(l, !1);
        else {
          if (ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Lo(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Vn(l, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return B(Q, (Q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            X() > Tn &&
            ((t.flags |= 128), (r = !0), Vn(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Lo(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Vn(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !W)
            )
              return ue(t), null;
          } else
            2 * X() - l.renderingStartTime > Tn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Vn(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = l.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (l.last = i));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = X()),
          (t.sibling = null),
          (n = Q.current),
          B(Q, r ? (n & 1) | 2 : n & 1),
          t)
        : (ue(t), null);
    case 22:
    case 23:
      return (
        bs(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ce & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ue(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function zm(e, t) {
  switch ((ms(t), t.tag)) {
    case 1:
      return (
        xe(t.type) && No(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        _n(),
        V(we),
        V(ce),
        Es(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ks(t), null;
    case 13:
      if ((V(Q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        jn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return V(Q), null;
    case 4:
      return _n(), null;
    case 10:
      return vs(t.type._context), null;
    case 22:
    case 23:
      return bs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Yr = !1,
  ae = !1,
  bm = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function mn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        q(e, t, r);
      }
    else n.current = null;
}
function Oi(e, t, n) {
  try {
    n();
  } catch (r) {
    q(e, t, r);
  }
}
var Gu = !1;
function Am(e, t) {
  if (((mi = So), (e = _c()), fs(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            s = -1,
            u = -1,
            a = 0,
            d = 0,
            p = e,
            h = null;
          t: for (;;) {
            for (
              var S;
              p !== n || (o !== 0 && p.nodeType !== 3) || (s = i + o),
                p !== l || (r !== 0 && p.nodeType !== 3) || (u = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (S = p.firstChild) !== null;

            )
              (h = p), (p = S);
            for (;;) {
              if (p === e) break t;
              if (
                (h === n && ++a === o && (s = i),
                h === l && ++d === r && (u = i),
                (S = p.nextSibling) !== null)
              )
                break;
              (p = h), (h = p.parentNode);
            }
            p = S;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (hi = { focusedElem: e, selectionRange: n }, So = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    k = y.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Fe(t.type, w),
                      k
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (x) {
          q(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (y = Gu), (Gu = !1), y;
}
function lr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && Oi(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function el(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Li(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Cd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Cd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ke], delete t[xr], delete t[vi], delete t[ym], delete t[vm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Nd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function qu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Nd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function zi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Co));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (zi(e, t, n), e = e.sibling; e !== null; ) zi(e, t, n), (e = e.sibling);
}
function bi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bi(e, t, n), e = e.sibling; e !== null; ) bi(e, t, n), (e = e.sibling);
}
var oe = null,
  De = !1;
function at(e, t, n) {
  for (n = n.child; n !== null; ) jd(e, t, n), (n = n.sibling);
}
function jd(e, t, n) {
  if (Ge && typeof Ge.onCommitFiberUnmount == "function")
    try {
      Ge.onCommitFiberUnmount(Qo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ae || mn(n, t);
    case 6:
      var r = oe,
        o = De;
      (oe = null),
        at(e, t, n),
        (oe = r),
        (De = o),
        oe !== null &&
          (De
            ? ((e = oe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : oe.removeChild(n.stateNode));
      break;
    case 18:
      oe !== null &&
        (De
          ? ((e = oe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Tl(e.parentNode, n)
              : e.nodeType === 1 && Tl(e, n),
            hr(e))
          : Tl(oe, n.stateNode));
      break;
    case 4:
      (r = oe),
        (o = De),
        (oe = n.stateNode.containerInfo),
        (De = !0),
        at(e, t, n),
        (oe = r),
        (De = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ae &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            i = l.destroy;
          (l = l.tag),
            i !== void 0 && (l & 2 || l & 4) && Oi(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      at(e, t, n);
      break;
    case 1:
      if (
        !ae &&
        (mn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          q(n, t, s);
        }
      at(e, t, n);
      break;
    case 21:
      at(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ae = (r = ae) || n.memoizedState !== null), at(e, t, n), (ae = r))
        : at(e, t, n);
      break;
    default:
      at(e, t, n);
  }
}
function Xu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new bm()),
      t.forEach(function (r) {
        var o = Vm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Ie(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (oe = s.stateNode), (De = !1);
              break e;
            case 3:
              (oe = s.stateNode.containerInfo), (De = !0);
              break e;
            case 4:
              (oe = s.stateNode.containerInfo), (De = !0);
              break e;
          }
          s = s.return;
        }
        if (oe === null) throw Error(E(160));
        jd(l, i, o), (oe = null), (De = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (a) {
        q(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Pd(t, e), (t = t.sibling);
}
function Pd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ie(t, e), We(e), r & 4)) {
        try {
          lr(3, e, e.return), el(3, e);
        } catch (w) {
          q(e, e.return, w);
        }
        try {
          lr(5, e, e.return);
        } catch (w) {
          q(e, e.return, w);
        }
      }
      break;
    case 1:
      Ie(t, e), We(e), r & 512 && n !== null && mn(n, n.return);
      break;
    case 5:
      if (
        (Ie(t, e),
        We(e),
        r & 512 && n !== null && mn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          dr(o, "");
        } catch (w) {
          q(e, e.return, w);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && l.type === "radio" && l.name != null && qa(o, l),
              oi(s, i);
            var a = oi(s, l);
            for (i = 0; i < u.length; i += 2) {
              var d = u[i],
                p = u[i + 1];
              d === "style"
                ? ec(o, p)
                : d === "dangerouslySetInnerHTML"
                ? Ya(o, p)
                : d === "children"
                ? dr(o, p)
                : Zi(o, d, p, a);
            }
            switch (s) {
              case "input":
                Zl(o, l);
                break;
              case "textarea":
                Xa(o, l);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var S = l.value;
                S != null
                  ? yn(o, !!l.multiple, S, !1)
                  : h !== !!l.multiple &&
                    (l.defaultValue != null
                      ? yn(o, !!l.multiple, l.defaultValue, !0)
                      : yn(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[xr] = l;
          } catch (w) {
            q(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Ie(t, e), We(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (w) {
          q(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Ie(t, e), We(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          hr(t.containerInfo);
        } catch (w) {
          q(e, e.return, w);
        }
      break;
    case 4:
      Ie(t, e), We(e);
      break;
    case 13:
      Ie(t, e),
        We(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ls = X())),
        r & 4 && Xu(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ae = (a = ae) || d), Ie(t, e), (ae = a)) : Ie(t, e),
        We(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !d && e.mode & 1)
        )
          for (_ = e, d = e.child; d !== null; ) {
            for (p = _ = d; _ !== null; ) {
              switch (((h = _), (S = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  lr(4, h, h.return);
                  break;
                case 1:
                  mn(h, h.return);
                  var y = h.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      q(r, n, w);
                    }
                  }
                  break;
                case 5:
                  mn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Yu(p);
                    continue;
                  }
              }
              S !== null ? ((S.return = h), (_ = S)) : Yu(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                (o = p.stateNode),
                  a
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((s = p.stateNode),
                      (u = p.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = Za("display", i)));
              } catch (w) {
                q(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = a ? "" : p.memoizedProps;
              } catch (w) {
                q(e, e.return, w);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            d === p && (d = null), (p = p.return);
          }
          d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Ie(t, e), We(e), r & 4 && Xu(e);
      break;
    case 21:
      break;
    default:
      Ie(t, e), We(e);
  }
}
function We(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Nd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (dr(o, ""), (r.flags &= -33));
          var l = qu(e);
          bi(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = qu(e);
          zi(e, s, i);
          break;
        default:
          throw Error(E(161));
      }
    } catch (u) {
      q(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Mm(e, t, n) {
  (_ = e), _d(e);
}
function _d(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var o = _,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Yr;
      if (!i) {
        var s = o.alternate,
          u = (s !== null && s.memoizedState !== null) || ae;
        s = Yr;
        var a = ae;
        if (((Yr = i), (ae = u) && !a))
          for (_ = o; _ !== null; )
            (i = _),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Zu(o)
                : u !== null
                ? ((u.return = i), (_ = u))
                : Zu(o);
        for (; l !== null; ) (_ = l), _d(l), (l = l.sibling);
        (_ = o), (Yr = s), (ae = a);
      }
      Ju(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (_ = l)) : Ju(e);
  }
}
function Ju(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ae || el(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ae)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Fe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && Au(t, l, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Au(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var d = a.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && hr(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
        ae || (t.flags & 512 && Li(t));
      } catch (h) {
        q(t, t.return, h);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Yu(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Zu(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            el(4, t);
          } catch (u) {
            q(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              q(t, o, u);
            }
          }
          var l = t.return;
          try {
            Li(t);
          } catch (u) {
            q(t, l, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Li(t);
          } catch (u) {
            q(t, i, u);
          }
      }
    } catch (u) {
      q(t, t.return, u);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (_ = s);
      break;
    }
    _ = t.return;
  }
}
var Im = Math.ceil,
  Ao = it.ReactCurrentDispatcher,
  Ts = it.ReactCurrentOwner,
  be = it.ReactCurrentBatchConfig,
  M = 0,
  re = null,
  J = null,
  le = 0,
  Ce = 0,
  hn = Ot(0),
  ee = 0,
  jr = null,
  Gt = 0,
  tl = 0,
  Os = 0,
  ir = null,
  ge = null,
  Ls = 0,
  Tn = 1 / 0,
  Je = null,
  Mo = !1,
  Ai = null,
  Nt = null,
  Zr = !1,
  wt = null,
  Io = 0,
  sr = 0,
  Mi = null,
  co = -1,
  fo = 0;
function pe() {
  return M & 6 ? X() : co !== -1 ? co : (co = X());
}
function jt(e) {
  return e.mode & 1
    ? M & 2 && le !== 0
      ? le & -le
      : xm.transition !== null
      ? (fo === 0 && (fo = fc()), fo)
      : ((e = D),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : wc(e.type))),
        e)
    : 1;
}
function $e(e, t, n, r) {
  if (50 < sr) throw ((sr = 0), (Mi = null), Error(E(185)));
  Rr(e, n, r),
    (!(M & 2) || e !== re) &&
      (e === re && (!(M & 2) && (tl |= n), ee === 4 && gt(e, le)),
      Se(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((Tn = X() + 500), Jo && Lt()));
}
function Se(e, t) {
  var n = e.callbackNode;
  xp(e, t);
  var r = xo(e, e === re ? le : 0);
  if (r === 0)
    n !== null && uu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && uu(n), t === 1))
      e.tag === 0 ? wm(ea.bind(null, e)) : Fc(ea.bind(null, e)),
        hm(function () {
          !(M & 6) && Lt();
        }),
        (n = null);
    else {
      switch (pc(r)) {
        case 1:
          n = os;
          break;
        case 4:
          n = cc;
          break;
        case 16:
          n = wo;
          break;
        case 536870912:
          n = dc;
          break;
        default:
          n = wo;
      }
      n = Md(n, Rd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Rd(e, t) {
  if (((co = -1), (fo = 0), M & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (kn() && e.callbackNode !== n) return null;
  var r = xo(e, e === re ? le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Fo(e, r);
  else {
    t = r;
    var o = M;
    M |= 2;
    var l = Od();
    (re !== e || le !== t) && ((Je = null), (Tn = X() + 500), $t(e, t));
    do
      try {
        Um();
        break;
      } catch (s) {
        Td(e, s);
      }
    while (!0);
    ys(),
      (Ao.current = l),
      (M = o),
      J !== null ? (t = 0) : ((re = null), (le = 0), (t = ee));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = ai(e)), o !== 0 && ((r = o), (t = Ii(e, o)))), t === 1)
    )
      throw ((n = jr), $t(e, 0), gt(e, r), Se(e, X()), n);
    if (t === 6) gt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Fm(o) &&
          ((t = Fo(e, r)),
          t === 2 && ((l = ai(e)), l !== 0 && ((r = l), (t = Ii(e, l)))),
          t === 1))
      )
        throw ((n = jr), $t(e, 0), gt(e, r), Se(e, X()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          It(e, ge, Je);
          break;
        case 3:
          if (
            (gt(e, r), (r & 130023424) === r && ((t = Ls + 500 - X()), 10 < t))
          ) {
            if (xo(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              pe(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = yi(It.bind(null, e, ge, Je), t);
            break;
          }
          It(e, ge, Je);
          break;
        case 4:
          if ((gt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Be(r);
            (l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l);
          }
          if (
            ((r = o),
            (r = X() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Im(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = yi(It.bind(null, e, ge, Je), r);
            break;
          }
          It(e, ge, Je);
          break;
        case 5:
          It(e, ge, Je);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Se(e, X()), e.callbackNode === n ? Rd.bind(null, e) : null;
}
function Ii(e, t) {
  var n = ir;
  return (
    e.current.memoizedState.isDehydrated && ($t(e, t).flags |= 256),
    (e = Fo(e, t)),
    e !== 2 && ((t = ge), (ge = n), t !== null && Fi(t)),
    e
  );
}
function Fi(e) {
  ge === null ? (ge = e) : ge.push.apply(ge, e);
}
function Fm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!He(l(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function gt(e, t) {
  for (
    t &= ~Os,
      t &= ~tl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Be(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ea(e) {
  if (M & 6) throw Error(E(327));
  kn();
  var t = xo(e, 0);
  if (!(t & 1)) return Se(e, X()), null;
  var n = Fo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ai(e);
    r !== 0 && ((t = r), (n = Ii(e, r)));
  }
  if (n === 1) throw ((n = jr), $t(e, 0), gt(e, t), Se(e, X()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    It(e, ge, Je),
    Se(e, X()),
    null
  );
}
function zs(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((Tn = X() + 500), Jo && Lt());
  }
}
function qt(e) {
  wt !== null && wt.tag === 0 && !(M & 6) && kn();
  var t = M;
  M |= 1;
  var n = be.transition,
    r = D;
  try {
    if (((be.transition = null), (D = 1), e)) return e();
  } finally {
    (D = r), (be.transition = n), (M = t), !(M & 6) && Lt();
  }
}
function bs() {
  (Ce = hn.current), V(hn);
}
function $t(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), mm(n)), J !== null))
    for (n = J.return; n !== null; ) {
      var r = n;
      switch ((ms(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && No();
          break;
        case 3:
          _n(), V(we), V(ce), Es();
          break;
        case 5:
          ks(r);
          break;
        case 4:
          _n();
          break;
        case 13:
          V(Q);
          break;
        case 19:
          V(Q);
          break;
        case 10:
          vs(r.type._context);
          break;
        case 22:
        case 23:
          bs();
      }
      n = n.return;
    }
  if (
    ((re = e),
    (J = e = Pt(e.current, null)),
    (le = Ce = t),
    (ee = 0),
    (jr = null),
    (Os = tl = Gt = 0),
    (ge = ir = null),
    Dt !== null)
  ) {
    for (t = 0; t < Dt.length; t++)
      if (((n = Dt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          (l.next = o), (r.next = i);
        }
        n.pending = r;
      }
    Dt = null;
  }
  return e;
}
function Td(e, t) {
  do {
    var n = J;
    try {
      if ((ys(), (so.current = bo), zo)) {
        for (var r = K.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        zo = !1;
      }
      if (
        ((Kt = 0),
        (ne = Z = K = null),
        (or = !1),
        (Er = 0),
        (Ts.current = null),
        n === null || n.return === null)
      ) {
        (ee = 1), (jr = t), (J = null);
        break;
      }
      e: {
        var l = e,
          i = n.return,
          s = n,
          u = t;
        if (
          ((t = le),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var a = u,
            d = s,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var S = Bu(i);
          if (S !== null) {
            (S.flags &= -257),
              $u(S, i, s, l, t),
              S.mode & 1 && Uu(l, a, t),
              (t = S),
              (u = a);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(u), (t.updateQueue = w);
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Uu(l, a, t), As();
              break e;
            }
            u = Error(E(426));
          }
        } else if (W && s.mode & 1) {
          var k = Bu(i);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              $u(k, i, s, l, t),
              hs(Rn(u, s));
            break e;
          }
        }
        (l = u = Rn(u, s)),
          ee !== 4 && (ee = 2),
          ir === null ? (ir = [l]) : ir.push(l),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var f = pd(l, u, t);
              bu(l, f);
              break e;
            case 1:
              s = u;
              var c = l.type,
                m = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Nt === null || !Nt.has(m))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var x = md(l, s, t);
                bu(l, x);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      zd(n);
    } catch (C) {
      (t = C), J === n && n !== null && (J = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Od() {
  var e = Ao.current;
  return (Ao.current = bo), e === null ? bo : e;
}
function As() {
  (ee === 0 || ee === 3 || ee === 2) && (ee = 4),
    re === null || (!(Gt & 268435455) && !(tl & 268435455)) || gt(re, le);
}
function Fo(e, t) {
  var n = M;
  M |= 2;
  var r = Od();
  (re !== e || le !== t) && ((Je = null), $t(e, t));
  do
    try {
      Dm();
      break;
    } catch (o) {
      Td(e, o);
    }
  while (!0);
  if ((ys(), (M = n), (Ao.current = r), J !== null)) throw Error(E(261));
  return (re = null), (le = 0), ee;
}
function Dm() {
  for (; J !== null; ) Ld(J);
}
function Um() {
  for (; J !== null && !dp(); ) Ld(J);
}
function Ld(e) {
  var t = Ad(e.alternate, e, Ce);
  (e.memoizedProps = e.pendingProps),
    t === null ? zd(e) : (J = t),
    (Ts.current = null);
}
function zd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = zm(n, t)), n !== null)) {
        (n.flags &= 32767), (J = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ee = 6), (J = null);
        return;
      }
    } else if (((n = Lm(n, t, Ce)), n !== null)) {
      J = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      J = t;
      return;
    }
    J = t = e;
  } while (t !== null);
  ee === 0 && (ee = 5);
}
function It(e, t, n) {
  var r = D,
    o = be.transition;
  try {
    (be.transition = null), (D = 1), Bm(e, t, n, r);
  } finally {
    (be.transition = o), (D = r);
  }
  return null;
}
function Bm(e, t, n, r) {
  do kn();
  while (wt !== null);
  if (M & 6) throw Error(E(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (Sp(e, l),
    e === re && ((J = re = null), (le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Zr ||
      ((Zr = !0),
      Md(wo, function () {
        return kn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = be.transition), (be.transition = null);
    var i = D;
    D = 1;
    var s = M;
    (M |= 4),
      (Ts.current = null),
      Am(e, n),
      Pd(n, e),
      sm(hi),
      (So = !!mi),
      (hi = mi = null),
      (e.current = n),
      Mm(n),
      fp(),
      (M = s),
      (D = i),
      (be.transition = l);
  } else e.current = n;
  if (
    (Zr && ((Zr = !1), (wt = e), (Io = o)),
    (l = e.pendingLanes),
    l === 0 && (Nt = null),
    hp(n.stateNode),
    Se(e, X()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Mo) throw ((Mo = !1), (e = Ai), (Ai = null), e);
  return (
    Io & 1 && e.tag !== 0 && kn(),
    (l = e.pendingLanes),
    l & 1 ? (e === Mi ? sr++ : ((sr = 0), (Mi = e))) : (sr = 0),
    Lt(),
    null
  );
}
function kn() {
  if (wt !== null) {
    var e = pc(Io),
      t = be.transition,
      n = D;
    try {
      if (((be.transition = null), (D = 16 > e ? 16 : e), wt === null))
        var r = !1;
      else {
        if (((e = wt), (wt = null), (Io = 0), M & 6)) throw Error(E(331));
        var o = M;
        for (M |= 4, _ = e.current; _ !== null; ) {
          var l = _,
            i = l.child;
          if (_.flags & 16) {
            var s = l.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (_ = a; _ !== null; ) {
                  var d = _;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      lr(8, d, l);
                  }
                  var p = d.child;
                  if (p !== null) (p.return = d), (_ = p);
                  else
                    for (; _ !== null; ) {
                      d = _;
                      var h = d.sibling,
                        S = d.return;
                      if ((Cd(d), d === a)) {
                        _ = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = S), (_ = h);
                        break;
                      }
                      _ = S;
                    }
                }
              }
              var y = l.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var k = w.sibling;
                    (w.sibling = null), (w = k);
                  } while (w !== null);
                }
              }
              _ = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (_ = i);
          else
            e: for (; _ !== null; ) {
              if (((l = _), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    lr(9, l, l.return);
                }
              var f = l.sibling;
              if (f !== null) {
                (f.return = l.return), (_ = f);
                break e;
              }
              _ = l.return;
            }
        }
        var c = e.current;
        for (_ = c; _ !== null; ) {
          i = _;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (_ = m);
          else
            e: for (i = c; _ !== null; ) {
              if (((s = _), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      el(9, s);
                  }
                } catch (C) {
                  q(s, s.return, C);
                }
              if (s === i) {
                _ = null;
                break e;
              }
              var x = s.sibling;
              if (x !== null) {
                (x.return = s.return), (_ = x);
                break e;
              }
              _ = s.return;
            }
        }
        if (
          ((M = o), Lt(), Ge && typeof Ge.onPostCommitFiberRoot == "function")
        )
          try {
            Ge.onPostCommitFiberRoot(Qo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (D = n), (be.transition = t);
    }
  }
  return !1;
}
function ta(e, t, n) {
  (t = Rn(n, t)),
    (t = pd(e, t, 1)),
    (e = Ct(e, t, 1)),
    (t = pe()),
    e !== null && (Rr(e, 1, t), Se(e, t));
}
function q(e, t, n) {
  if (e.tag === 3) ta(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ta(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Nt === null || !Nt.has(r)))
        ) {
          (e = Rn(n, e)),
            (e = md(t, e, 1)),
            (t = Ct(t, e, 1)),
            (e = pe()),
            t !== null && (Rr(t, 1, e), Se(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function $m(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = pe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    re === e &&
      (le & n) === n &&
      (ee === 4 || (ee === 3 && (le & 130023424) === le && 500 > X() - Ls)
        ? $t(e, 0)
        : (Os |= n)),
    Se(e, t);
}
function bd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Hr), (Hr <<= 1), !(Hr & 130023424) && (Hr = 4194304))
      : (t = 1));
  var n = pe();
  (e = ot(e, t)), e !== null && (Rr(e, t, n), Se(e, n));
}
function Hm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), bd(e, n);
}
function Vm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(t), bd(e, n);
}
var Ad;
Ad = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || we.current) ve = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ve = !1), Om(e, t, n);
      ve = !!(e.flags & 131072);
    }
  else (ve = !1), W && t.flags & 1048576 && Dc(t, _o, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ao(e, t), (e = t.pendingProps);
      var o = Nn(t, ce.current);
      Sn(t, n), (o = Ns(null, t, r, e, o, n));
      var l = js();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            xe(r) ? ((l = !0), jo(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            xs(t),
            (o.updater = Zo),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ci(t, r, e, n),
            (t = Pi(null, t, r, !0, l, n)))
          : ((t.tag = 0), W && l && ps(t), fe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ao(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Qm(r)),
          (e = Fe(r, e)),
          o)
        ) {
          case 0:
            t = ji(null, t, r, e, n);
            break e;
          case 1:
            t = Wu(null, t, r, e, n);
            break e;
          case 11:
            t = Hu(null, t, r, e, n);
            break e;
          case 14:
            t = Vu(null, t, r, Fe(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Fe(r, o)),
        ji(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Fe(r, o)),
        Wu(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((vd(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Wc(e, t),
          Oo(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = Rn(Error(E(423)), t)), (t = Qu(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Rn(Error(E(424)), t)), (t = Qu(e, t, r, n, o));
            break e;
          } else
            for (
              Ne = Et(t.stateNode.containerInfo.firstChild),
                je = t,
                W = !0,
                Ue = null,
                n = Hc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((jn(), r === o)) {
            t = lt(e, t, n);
            break e;
          }
          fe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Qc(t),
        e === null && Si(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        gi(r, o) ? (i = null) : l !== null && gi(r, l) && (t.flags |= 32),
        yd(e, t),
        fe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Si(t), null;
    case 13:
      return wd(e, t, n);
    case 4:
      return (
        Ss(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Pn(t, null, r, n)) : fe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Fe(r, o)),
        Hu(e, t, r, o, n)
      );
    case 7:
      return fe(e, t, t.pendingProps, n), t.child;
    case 8:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value),
          B(Ro, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (He(l.value, i)) {
            if (l.children === o.children && !we.current) {
              t = lt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var s = l.dependencies;
              if (s !== null) {
                i = l.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (l.tag === 1) {
                      (u = tt(-1, n & -n)), (u.tag = 2);
                      var a = l.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var d = a.pending;
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (a.pending = u);
                      }
                    }
                    (l.lanes |= n),
                      (u = l.alternate),
                      u !== null && (u.lanes |= n),
                      ki(l.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(E(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  ki(i, n, t),
                  (i = l.sibling);
              } else i = l.child;
              if (i !== null) i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((l = i.sibling), l !== null)) {
                    (l.return = i.return), (i = l);
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        fe(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Sn(t, n),
        (o = Ae(o)),
        (r = r(o)),
        (t.flags |= 1),
        fe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Fe(r, t.pendingProps)),
        (o = Fe(r.type, o)),
        Vu(e, t, r, o, n)
      );
    case 15:
      return hd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Fe(r, o)),
        ao(e, t),
        (t.tag = 1),
        xe(r) ? ((e = !0), jo(t)) : (e = !1),
        Sn(t, n),
        fd(t, r, o),
        Ci(t, r, o, n),
        Pi(null, t, r, !0, e, n)
      );
    case 19:
      return xd(e, t, n);
    case 22:
      return gd(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function Md(e, t) {
  return ac(e, t);
}
function Wm(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ze(e, t, n, r) {
  return new Wm(e, t, n, r);
}
function Ms(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Qm(e) {
  if (typeof e == "function") return Ms(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ts)) return 11;
    if (e === ns) return 14;
  }
  return 2;
}
function Pt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ze(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function po(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) Ms(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case on:
        return Ht(n.children, o, l, t);
      case es:
        (i = 8), (o |= 8);
        break;
      case Gl:
        return (
          (e = ze(12, n, t, o | 2)), (e.elementType = Gl), (e.lanes = l), e
        );
      case ql:
        return (e = ze(13, n, t, o)), (e.elementType = ql), (e.lanes = l), e;
      case Xl:
        return (e = ze(19, n, t, o)), (e.elementType = Xl), (e.lanes = l), e;
      case Qa:
        return nl(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Va:
              i = 10;
              break e;
            case Wa:
              i = 9;
              break e;
            case ts:
              i = 11;
              break e;
            case ns:
              i = 14;
              break e;
            case pt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ze(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Ht(e, t, n, r) {
  return (e = ze(7, e, r, t)), (e.lanes = n), e;
}
function nl(e, t, n, r) {
  return (
    (e = ze(22, e, r, t)),
    (e.elementType = Qa),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Fl(e, t, n) {
  return (e = ze(6, e, null, t)), (e.lanes = n), e;
}
function Dl(e, t, n) {
  return (
    (t = ze(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Km(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = wl(0)),
    (this.expirationTimes = wl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = wl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Is(e, t, n, r, o, l, i, s, u) {
  return (
    (e = new Km(e, t, n, s, u)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = ze(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    xs(l),
    e
  );
}
function Gm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: rn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Id(e) {
  if (!e) return Rt;
  e = e._reactInternals;
  e: {
    if (Zt(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (xe(n)) return Ic(e, n, t);
  }
  return t;
}
function Fd(e, t, n, r, o, l, i, s, u) {
  return (
    (e = Is(n, r, !0, e, o, l, i, s, u)),
    (e.context = Id(null)),
    (n = e.current),
    (r = pe()),
    (o = jt(n)),
    (l = tt(r, o)),
    (l.callback = t ?? null),
    Ct(n, l, o),
    (e.current.lanes = o),
    Rr(e, o, r),
    Se(e, r),
    e
  );
}
function rl(e, t, n, r) {
  var o = t.current,
    l = pe(),
    i = jt(o);
  return (
    (n = Id(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = tt(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ct(o, t, i)),
    e !== null && ($e(e, o, i, l), io(e, o, i)),
    i
  );
}
function Do(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function na(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Fs(e, t) {
  na(e, t), (e = e.alternate) && na(e, t);
}
function qm() {
  return null;
}
var Dd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ds(e) {
  this._internalRoot = e;
}
ol.prototype.render = Ds.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  rl(e, t, null, null);
};
ol.prototype.unmount = Ds.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    qt(function () {
      rl(null, e, null, null);
    }),
      (t[rt] = null);
  }
};
function ol(e) {
  this._internalRoot = e;
}
ol.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = gc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ht.length && t !== 0 && t < ht[n].priority; n++);
    ht.splice(n, 0, e), n === 0 && vc(e);
  }
};
function Us(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ll(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ra() {}
function Xm(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var a = Do(i);
        l.call(a);
      };
    }
    var i = Fd(t, r, e, 0, null, !1, !1, "", ra);
    return (
      (e._reactRootContainer = i),
      (e[rt] = i.current),
      vr(e.nodeType === 8 ? e.parentNode : e),
      qt(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var a = Do(u);
      s.call(a);
    };
  }
  var u = Is(e, 0, !1, null, null, !1, !1, "", ra);
  return (
    (e._reactRootContainer = u),
    (e[rt] = u.current),
    vr(e.nodeType === 8 ? e.parentNode : e),
    qt(function () {
      rl(t, u, n, r);
    }),
    u
  );
}
function il(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var u = Do(i);
        s.call(u);
      };
    }
    rl(t, i, e, o);
  } else i = Xm(n, t, e, o, r);
  return Do(i);
}
mc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Jn(t.pendingLanes);
        n !== 0 &&
          (ls(t, n | 1), Se(t, X()), !(M & 6) && ((Tn = X() + 500), Lt()));
      }
      break;
    case 13:
      qt(function () {
        var r = ot(e, 1);
        if (r !== null) {
          var o = pe();
          $e(r, e, 1, o);
        }
      }),
        Fs(e, 1);
  }
};
is = function (e) {
  if (e.tag === 13) {
    var t = ot(e, 134217728);
    if (t !== null) {
      var n = pe();
      $e(t, e, 134217728, n);
    }
    Fs(e, 134217728);
  }
};
hc = function (e) {
  if (e.tag === 13) {
    var t = jt(e),
      n = ot(e, t);
    if (n !== null) {
      var r = pe();
      $e(n, e, t, r);
    }
    Fs(e, t);
  }
};
gc = function () {
  return D;
};
yc = function (e, t) {
  var n = D;
  try {
    return (D = e), t();
  } finally {
    D = n;
  }
};
ii = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Zl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Xo(r);
            if (!o) throw Error(E(90));
            Ga(r), Zl(r, o);
          }
        }
      }
      break;
    case "textarea":
      Xa(e, n);
      break;
    case "select":
      (t = n.value), t != null && yn(e, !!n.multiple, t, !1);
  }
};
rc = zs;
oc = qt;
var Jm = { usingClientEntryPoint: !1, Events: [Or, an, Xo, tc, nc, zs] },
  Wn = {
    findFiberByHostInstance: Ft,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Ym = {
    bundleType: Wn.bundleType,
    version: Wn.version,
    rendererPackageName: Wn.rendererPackageName,
    rendererConfig: Wn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: it.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = sc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Wn.findFiberByHostInstance || qm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var eo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!eo.isDisabled && eo.supportsFiber)
    try {
      (Qo = eo.inject(Ym)), (Ge = eo);
    } catch {}
}
Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jm;
Re.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Us(t)) throw Error(E(200));
  return Gm(e, t, null, n);
};
Re.createRoot = function (e, t) {
  if (!Us(e)) throw Error(E(299));
  var n = !1,
    r = "",
    o = Dd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Is(e, 1, !1, null, null, n, !1, r, o)),
    (e[rt] = t.current),
    vr(e.nodeType === 8 ? e.parentNode : e),
    new Ds(t)
  );
};
Re.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = sc(t)), (e = e === null ? null : e.stateNode), e;
};
Re.flushSync = function (e) {
  return qt(e);
};
Re.hydrate = function (e, t, n) {
  if (!ll(t)) throw Error(E(200));
  return il(null, e, t, !0, n);
};
Re.hydrateRoot = function (e, t, n) {
  if (!Us(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    i = Dd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Fd(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[rt] = t.current),
    vr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ol(t);
};
Re.render = function (e, t, n) {
  if (!ll(t)) throw Error(E(200));
  return il(null, e, t, !1, n);
};
Re.unmountComponentAtNode = function (e) {
  if (!ll(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (qt(function () {
        il(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[rt] = null);
        });
      }),
      !0)
    : !1;
};
Re.unstable_batchedUpdates = zs;
Re.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ll(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return il(e, t, n, !1, r);
};
Re.version = "18.3.1-next-f1338f8080-20240426";
function Ud() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ud);
    } catch (e) {
      console.error(e);
    }
}
Ud(), (Ua.exports = Re);
var Zm = Ua.exports,
  Bd,
  oa = Zm;
(Bd = oa.createRoot), oa.hydrateRoot;
const la = (e) => {
    let t;
    const n = new Set(),
      r = (a, d) => {
        const p = typeof a == "function" ? a(t) : a;
        if (!Object.is(p, t)) {
          const h = t;
          (t =
            d ?? (typeof p != "object" || p === null)
              ? p
              : Object.assign({}, t, p)),
            n.forEach((S) => S(t, h));
        }
      },
      o = () => t,
      s = {
        setState: r,
        getState: o,
        getInitialState: () => u,
        subscribe: (a) => (n.add(a), () => n.delete(a)),
      },
      u = (t = e(r, o, s));
    return s;
  },
  eh = (e) => (e ? la(e) : la),
  th = (e) => e;
function nh(e, t = th) {
  const n = Ys.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState())
  );
  return Ys.useDebugValue(n), n;
}
const ia = (e) => {
    const t = eh(e),
      n = (r) => nh(t, r);
    return Object.assign(n, t), n;
  },
  bn = (e) => (e ? ia(e) : ia);
var yt = ((e) => (
  (e.CHAT = "chat"), (e.NOTICIAS = "noticias"), (e.PRODUCTOS = "productos"), e
))(yt || {});
const Uo = bn((e) => ({
  nav: "chat",
  setNav: (t) => e({ nav: t }),
  removeNav: () => e({ nav: "chat" }),
}));
function $d(e) {
  return g.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    ...e,
    children: [
      g.jsx("circle", {
        cx: "4",
        cy: "12",
        r: "3",
        fill: "currentColor",
        children: g.jsx("animate", {
          id: "svgSpinners3DotsFade0",
          fill: "freeze",
          attributeName: "opacity",
          begin: "0;svgSpinners3DotsFade1.end-0.25s",
          dur: "0.75s",
          values: "1;0.2",
        }),
      }),
      g.jsx("circle", {
        cx: "12",
        cy: "12",
        r: "3",
        fill: "currentColor",
        opacity: "0.4",
        children: g.jsx("animate", {
          fill: "freeze",
          attributeName: "opacity",
          begin: "svgSpinners3DotsFade0.begin+0.15s",
          dur: "0.75s",
          values: "1;0.2",
        }),
      }),
      g.jsx("circle", {
        cx: "20",
        cy: "12",
        r: "3",
        fill: "currentColor",
        opacity: "0.3",
        children: g.jsx("animate", {
          id: "svgSpinners3DotsFade1",
          fill: "freeze",
          attributeName: "opacity",
          begin: "svgSpinners3DotsFade0.begin+0.3s",
          dur: "0.75s",
          values: "1;0.2",
        }),
      }),
    ],
  });
}
const sa = ({ text: e, role: t }) =>
  g.jsx("div", {
    className: ` ${
      t === "assistant" ? "items-start" : "items-end"
    }  w-full flex flex-col justify-start  `,
    children:
      e == null
        ? void 0
        : e.map((n) =>
            g.jsx("div", {
              className: `${
                t === "assistant"
                  ? "bg-neutral-200 text-black"
                  : "bg-neutral-900 text-white"
              }   my-1 px-4 py-2 rounded  max-w-[70%]  text-opacity-90`,
              children: n || g.jsx($d, { className: "m-1" }),
            })
          ),
  });
function rh(e) {
  return g.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    ...e,
    children: g.jsxs("g", {
      fill: "none",
      children: [
        g.jsx("path", {
          d: "m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z",
        }),
        g.jsx("path", {
          fill: "currentColor",
          d: "M20.235 5.686c.432-1.195-.726-2.353-1.921-1.92L3.709 9.048c-1.199.434-1.344 2.07-.241 2.709l4.662 2.699l4.163-4.163a1 1 0 0 1 1.414 1.414L9.544 15.87l2.7 4.662c.638 1.103 2.274.957 2.708-.241z",
        }),
      ],
    }),
  });
}
function Hd(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: oh } = Object.prototype,
  { getPrototypeOf: Bs } = Object,
  sl = ((e) => (t) => {
    const n = oh.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ve = (e) => ((e = e.toLowerCase()), (t) => sl(t) === e),
  ul = (e) => (t) => typeof t === e,
  { isArray: An } = Array,
  Pr = ul("undefined");
function lh(e) {
  return (
    e !== null &&
    !Pr(e) &&
    e.constructor !== null &&
    !Pr(e.constructor) &&
    Pe(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Vd = Ve("ArrayBuffer");
function ih(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Vd(e.buffer)),
    t
  );
}
const sh = ul("string"),
  Pe = ul("function"),
  Wd = ul("number"),
  al = (e) => e !== null && typeof e == "object",
  uh = (e) => e === !0 || e === !1,
  mo = (e) => {
    if (sl(e) !== "object") return !1;
    const t = Bs(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  ah = Ve("Date"),
  ch = Ve("File"),
  dh = Ve("Blob"),
  fh = Ve("FileList"),
  ph = (e) => al(e) && Pe(e.pipe),
  mh = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Pe(e.append) &&
          ((t = sl(e)) === "formdata" ||
            (t === "object" &&
              Pe(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  hh = Ve("URLSearchParams"),
  [gh, yh, vh, wh] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Ve
  ),
  xh = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function zr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), An(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const l = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = l.length;
    let s;
    for (r = 0; r < i; r++) (s = l[r]), t.call(null, e[s], s, e);
  }
}
function Qd(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const Bt =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Kd = (e) => !Pr(e) && e !== Bt;
function Di() {
  const { caseless: e } = (Kd(this) && this) || {},
    t = {},
    n = (r, o) => {
      const l = (e && Qd(t, o)) || o;
      mo(t[l]) && mo(r)
        ? (t[l] = Di(t[l], r))
        : mo(r)
        ? (t[l] = Di({}, r))
        : An(r)
        ? (t[l] = r.slice())
        : (t[l] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && zr(arguments[r], n);
  return t;
}
const Sh = (e, t, n, { allOwnKeys: r } = {}) => (
    zr(
      t,
      (o, l) => {
        n && Pe(o) ? (e[l] = Hd(o, n)) : (e[l] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  kh = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Eh = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Ch = (e, t, n, r) => {
    let o, l, i;
    const s = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), l = o.length; l-- > 0; )
        (i = o[l]), (!r || r(i, e, t)) && !s[i] && ((t[i] = e[i]), (s[i] = !0));
      e = n !== !1 && Bs(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Nh = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  jh = (e) => {
    if (!e) return null;
    if (An(e)) return e;
    let t = e.length;
    if (!Wd(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Ph = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Bs(Uint8Array)),
  _h = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const l = o.value;
      t.call(e, l[0], l[1]);
    }
  },
  Rh = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Th = Ve("HTMLFormElement"),
  Oh = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  ua = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Lh = Ve("RegExp"),
  Gd = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    zr(n, (o, l) => {
      let i;
      (i = t(o, l, e)) !== !1 && (r[l] = i || o);
    }),
      Object.defineProperties(e, r);
  },
  zh = (e) => {
    Gd(e, (t, n) => {
      if (Pe(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Pe(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  bh = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((l) => {
          n[l] = !0;
        });
      };
    return An(e) ? r(e) : r(String(e).split(t)), n;
  },
  Ah = () => {},
  Mh = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Ul = "abcdefghijklmnopqrstuvwxyz",
  aa = "0123456789",
  qd = { DIGIT: aa, ALPHA: Ul, ALPHA_DIGIT: Ul + Ul.toUpperCase() + aa },
  Ih = (e = 16, t = qd.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function Fh(e) {
  return !!(
    e &&
    Pe(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Dh = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (al(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const l = An(r) ? [] : {};
            return (
              zr(r, (i, s) => {
                const u = n(i, o + 1);
                !Pr(u) && (l[s] = u);
              }),
              (t[o] = void 0),
              l
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Uh = Ve("AsyncFunction"),
  Bh = (e) => e && (al(e) || Pe(e)) && Pe(e.then) && Pe(e.catch),
  Xd = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          Bt.addEventListener(
            "message",
            ({ source: o, data: l }) => {
              o === Bt && l === n && r.length && r.shift()();
            },
            !1
          ),
          (o) => {
            r.push(o), Bt.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    Pe(Bt.postMessage)
  ),
  $h =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Bt)
      : (typeof process < "u" && process.nextTick) || Xd,
  v = {
    isArray: An,
    isArrayBuffer: Vd,
    isBuffer: lh,
    isFormData: mh,
    isArrayBufferView: ih,
    isString: sh,
    isNumber: Wd,
    isBoolean: uh,
    isObject: al,
    isPlainObject: mo,
    isReadableStream: gh,
    isRequest: yh,
    isResponse: vh,
    isHeaders: wh,
    isUndefined: Pr,
    isDate: ah,
    isFile: ch,
    isBlob: dh,
    isRegExp: Lh,
    isFunction: Pe,
    isStream: ph,
    isURLSearchParams: hh,
    isTypedArray: Ph,
    isFileList: fh,
    forEach: zr,
    merge: Di,
    extend: Sh,
    trim: xh,
    stripBOM: kh,
    inherits: Eh,
    toFlatObject: Ch,
    kindOf: sl,
    kindOfTest: Ve,
    endsWith: Nh,
    toArray: jh,
    forEachEntry: _h,
    matchAll: Rh,
    isHTMLForm: Th,
    hasOwnProperty: ua,
    hasOwnProp: ua,
    reduceDescriptors: Gd,
    freezeMethods: zh,
    toObjectSet: bh,
    toCamelCase: Oh,
    noop: Ah,
    toFiniteNumber: Mh,
    findKey: Qd,
    global: Bt,
    isContextDefined: Kd,
    ALPHABET: qd,
    generateString: Ih,
    isSpecCompliantForm: Fh,
    toJSONObject: Dh,
    isAsyncFn: Uh,
    isThenable: Bh,
    setImmediate: Xd,
    asap: $h,
  };
function O(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && ((this.response = o), (this.status = o.status ? o.status : null));
}
v.inherits(O, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: v.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Jd = O.prototype,
  Yd = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Yd[e] = { value: e };
});
Object.defineProperties(O, Yd);
Object.defineProperty(Jd, "isAxiosError", { value: !0 });
O.from = (e, t, n, r, o, l) => {
  const i = Object.create(Jd);
  return (
    v.toFlatObject(
      e,
      i,
      function (u) {
        return u !== Error.prototype;
      },
      (s) => s !== "isAxiosError"
    ),
    O.call(i, e.message, t, n, r, o),
    (i.cause = e),
    (i.name = e.name),
    l && Object.assign(i, l),
    i
  );
};
const Hh = null;
function Ui(e) {
  return v.isPlainObject(e) || v.isArray(e);
}
function Zd(e) {
  return v.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ca(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, l) {
          return (o = Zd(o)), !n && l ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function Vh(e) {
  return v.isArray(e) && !e.some(Ui);
}
const Wh = v.toFlatObject(v, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function cl(e, t, n) {
  if (!v.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = v.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (w, k) {
        return !v.isUndefined(k[w]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || d,
    l = n.dots,
    i = n.indexes,
    u = (n.Blob || (typeof Blob < "u" && Blob)) && v.isSpecCompliantForm(t);
  if (!v.isFunction(o)) throw new TypeError("visitor must be a function");
  function a(y) {
    if (y === null) return "";
    if (v.isDate(y)) return y.toISOString();
    if (!u && v.isBlob(y))
      throw new O("Blob is not supported. Use a Buffer instead.");
    return v.isArrayBuffer(y) || v.isTypedArray(y)
      ? u && typeof Blob == "function"
        ? new Blob([y])
        : Buffer.from(y)
      : y;
  }
  function d(y, w, k) {
    let f = y;
    if (y && !k && typeof y == "object") {
      if (v.endsWith(w, "{}"))
        (w = r ? w : w.slice(0, -2)), (y = JSON.stringify(y));
      else if (
        (v.isArray(y) && Vh(y)) ||
        ((v.isFileList(y) || v.endsWith(w, "[]")) && (f = v.toArray(y)))
      )
        return (
          (w = Zd(w)),
          f.forEach(function (m, x) {
            !(v.isUndefined(m) || m === null) &&
              t.append(
                i === !0 ? ca([w], x, l) : i === null ? w : w + "[]",
                a(m)
              );
          }),
          !1
        );
    }
    return Ui(y) ? !0 : (t.append(ca(k, w, l), a(y)), !1);
  }
  const p = [],
    h = Object.assign(Wh, {
      defaultVisitor: d,
      convertValue: a,
      isVisitable: Ui,
    });
  function S(y, w) {
    if (!v.isUndefined(y)) {
      if (p.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      p.push(y),
        v.forEach(y, function (f, c) {
          (!(v.isUndefined(f) || f === null) &&
            o.call(t, f, v.isString(c) ? c.trim() : c, w, h)) === !0 &&
            S(f, w ? w.concat(c) : [c]);
        }),
        p.pop();
    }
  }
  if (!v.isObject(e)) throw new TypeError("data must be an object");
  return S(e), t;
}
function da(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function $s(e, t) {
  (this._pairs = []), e && cl(e, this, t);
}
const ef = $s.prototype;
ef.append = function (t, n) {
  this._pairs.push([t, n]);
};
ef.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, da);
      }
    : da;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function Qh(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function tf(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Qh,
    o = n && n.serialize;
  let l;
  if (
    (o
      ? (l = o(t, n))
      : (l = v.isURLSearchParams(t) ? t.toString() : new $s(t, n).toString(r)),
    l)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + l);
  }
  return e;
}
class fa {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    v.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const nf = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Kh = typeof URLSearchParams < "u" ? URLSearchParams : $s,
  Gh = typeof FormData < "u" ? FormData : null,
  qh = typeof Blob < "u" ? Blob : null,
  Xh = {
    isBrowser: !0,
    classes: { URLSearchParams: Kh, FormData: Gh, Blob: qh },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Hs = typeof window < "u" && typeof document < "u",
  Bi = (typeof navigator == "object" && navigator) || void 0,
  Jh =
    Hs &&
    (!Bi || ["ReactNative", "NativeScript", "NS"].indexOf(Bi.product) < 0),
  Yh =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Zh = (Hs && window.location.href) || "http://localhost",
  e0 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Hs,
        hasStandardBrowserEnv: Jh,
        hasStandardBrowserWebWorkerEnv: Yh,
        navigator: Bi,
        origin: Zh,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ke = { ...e0, ...Xh };
function t0(e, t) {
  return cl(
    e,
    new ke.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, l) {
          return ke.isNode && v.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : l.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function n0(e) {
  return v
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function r0(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let l;
  for (r = 0; r < o; r++) (l = n[r]), (t[l] = e[l]);
  return t;
}
function rf(e) {
  function t(n, r, o, l) {
    let i = n[l++];
    if (i === "__proto__") return !0;
    const s = Number.isFinite(+i),
      u = l >= n.length;
    return (
      (i = !i && v.isArray(o) ? o.length : i),
      u
        ? (v.hasOwnProp(o, i) ? (o[i] = [o[i], r]) : (o[i] = r), !s)
        : ((!o[i] || !v.isObject(o[i])) && (o[i] = []),
          t(n, r, o[i], l) && v.isArray(o[i]) && (o[i] = r0(o[i])),
          !s)
    );
  }
  if (v.isFormData(e) && v.isFunction(e.entries)) {
    const n = {};
    return (
      v.forEachEntry(e, (r, o) => {
        t(n0(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function o0(e, t, n) {
  if (v.isString(e))
    try {
      return (t || JSON.parse)(e), v.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(e);
}
const br = {
  transitional: nf,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        l = v.isObject(t);
      if ((l && v.isHTMLForm(t) && (t = new FormData(t)), v.isFormData(t)))
        return o ? JSON.stringify(rf(t)) : t;
      if (
        v.isArrayBuffer(t) ||
        v.isBuffer(t) ||
        v.isStream(t) ||
        v.isFile(t) ||
        v.isBlob(t) ||
        v.isReadableStream(t)
      )
        return t;
      if (v.isArrayBufferView(t)) return t.buffer;
      if (v.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let s;
      if (l) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return t0(t, this.formSerializer).toString();
        if ((s = v.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return cl(
            s ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer
          );
        }
      }
      return l || o ? (n.setContentType("application/json", !1), o0(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || br.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (v.isResponse(t) || v.isReadableStream(t)) return t;
      if (t && v.isString(t) && ((r && !this.responseType) || o)) {
        const i = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (s) {
          if (i)
            throw s.name === "SyntaxError"
              ? O.from(s, O.ERR_BAD_RESPONSE, this, null, this.response)
              : s;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ke.classes.FormData, Blob: ke.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
v.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  br.headers[e] = {};
});
const l0 = v.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  i0 = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (o = i.indexOf(":")),
              (n = i.substring(0, o).trim().toLowerCase()),
              (r = i.substring(o + 1).trim()),
              !(!n || (t[n] && l0[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  pa = Symbol("internals");
function Qn(e) {
  return e && String(e).trim().toLowerCase();
}
function ho(e) {
  return e === !1 || e == null ? e : v.isArray(e) ? e.map(ho) : String(e);
}
function s0(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const u0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Bl(e, t, n, r, o) {
  if (v.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!v.isString(t))) {
    if (v.isString(r)) return t.indexOf(r) !== -1;
    if (v.isRegExp(r)) return r.test(t);
  }
}
function a0(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function c0(e, t) {
  const n = v.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, l, i) {
        return this[r].call(this, t, o, l, i);
      },
      configurable: !0,
    });
  });
}
class Ee {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function l(s, u, a) {
      const d = Qn(u);
      if (!d) throw new Error("header name must be a non-empty string");
      const p = v.findKey(o, d);
      (!p || o[p] === void 0 || a === !0 || (a === void 0 && o[p] !== !1)) &&
        (o[p || u] = ho(s));
    }
    const i = (s, u) => v.forEach(s, (a, d) => l(a, d, u));
    if (v.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (v.isString(t) && (t = t.trim()) && !u0(t)) i(i0(t), n);
    else if (v.isHeaders(t)) for (const [s, u] of t.entries()) l(u, s, r);
    else t != null && l(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Qn(t)), t)) {
      const r = v.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return s0(o);
        if (v.isFunction(n)) return n.call(this, o, r);
        if (v.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Qn(t)), t)) {
      const r = v.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Bl(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function l(i) {
      if (((i = Qn(i)), i)) {
        const s = v.findKey(r, i);
        s && (!n || Bl(r, r[s], s, n)) && (delete r[s], (o = !0));
      }
    }
    return v.isArray(t) ? t.forEach(l) : l(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const l = n[r];
      (!t || Bl(this, this[l], l, t, !0)) && (delete this[l], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      v.forEach(this, (o, l) => {
        const i = v.findKey(r, l);
        if (i) {
          (n[i] = ho(o)), delete n[l];
          return;
        }
        const s = t ? a0(l) : String(l).trim();
        s !== l && delete n[l], (n[s] = ho(o)), (r[s] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      v.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && v.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[pa] = this[pa] = { accessors: {} }).accessors,
      o = this.prototype;
    function l(i) {
      const s = Qn(i);
      r[s] || (c0(o, i), (r[s] = !0));
    }
    return v.isArray(t) ? t.forEach(l) : l(t), this;
  }
}
Ee.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
v.reduceDescriptors(Ee.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
v.freezeMethods(Ee);
function $l(e, t) {
  const n = this || br,
    r = t || n,
    o = Ee.from(r.headers);
  let l = r.data;
  return (
    v.forEach(e, function (s) {
      l = s.call(n, l, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    l
  );
}
function of(e) {
  return !!(e && e.__CANCEL__);
}
function Mn(e, t, n) {
  O.call(this, e ?? "canceled", O.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
v.inherits(Mn, O, { __CANCEL__: !0 });
function lf(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new O(
          "Request failed with status code " + n.status,
          [O.ERR_BAD_REQUEST, O.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function d0(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function f0(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    l = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const a = Date.now(),
        d = r[l];
      i || (i = a), (n[o] = u), (r[o] = a);
      let p = l,
        h = 0;
      for (; p !== o; ) (h += n[p++]), (p = p % e);
      if (((o = (o + 1) % e), o === l && (l = (l + 1) % e), a - i < t)) return;
      const S = d && a - d;
      return S ? Math.round((h * 1e3) / S) : void 0;
    }
  );
}
function p0(e, t) {
  let n = 0,
    r = 1e3 / t,
    o,
    l;
  const i = (a, d = Date.now()) => {
    (n = d), (o = null), l && (clearTimeout(l), (l = null)), e.apply(null, a);
  };
  return [
    (...a) => {
      const d = Date.now(),
        p = d - n;
      p >= r
        ? i(a, d)
        : ((o = a),
          l ||
            (l = setTimeout(() => {
              (l = null), i(o);
            }, r - p)));
    },
    () => o && i(o),
  ];
}
const Bo = (e, t, n = 3) => {
    let r = 0;
    const o = f0(50, 250);
    return p0((l) => {
      const i = l.loaded,
        s = l.lengthComputable ? l.total : void 0,
        u = i - r,
        a = o(u),
        d = i <= s;
      r = i;
      const p = {
        loaded: i,
        total: s,
        progress: s ? i / s : void 0,
        bytes: u,
        rate: a || void 0,
        estimated: a && s && d ? (s - i) / a : void 0,
        event: l,
        lengthComputable: s != null,
        [t ? "download" : "upload"]: !0,
      };
      e(p);
    }, n);
  },
  ma = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  ha =
    (e) =>
    (...t) =>
      v.asap(() => e(...t)),
  m0 = ke.hasStandardBrowserEnv
    ? (function () {
        const t =
            ke.navigator && /(msie|trident)/i.test(ke.navigator.userAgent),
          n = document.createElement("a");
        let r;
        function o(l) {
          let i = l;
          return (
            t && (n.setAttribute("href", i), (i = n.href)),
            n.setAttribute("href", i),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = o(window.location.href)),
          function (i) {
            const s = v.isString(i) ? o(i) : i;
            return s.protocol === r.protocol && s.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  h0 = ke.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, l) {
          const i = [e + "=" + encodeURIComponent(t)];
          v.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
            v.isString(r) && i.push("path=" + r),
            v.isString(o) && i.push("domain=" + o),
            l === !0 && i.push("secure"),
            (document.cookie = i.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function g0(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function y0(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function sf(e, t) {
  return e && !g0(t) ? y0(e, t) : t;
}
const ga = (e) => (e instanceof Ee ? { ...e } : e);
function Xt(e, t) {
  t = t || {};
  const n = {};
  function r(a, d, p) {
    return v.isPlainObject(a) && v.isPlainObject(d)
      ? v.merge.call({ caseless: p }, a, d)
      : v.isPlainObject(d)
      ? v.merge({}, d)
      : v.isArray(d)
      ? d.slice()
      : d;
  }
  function o(a, d, p) {
    if (v.isUndefined(d)) {
      if (!v.isUndefined(a)) return r(void 0, a, p);
    } else return r(a, d, p);
  }
  function l(a, d) {
    if (!v.isUndefined(d)) return r(void 0, d);
  }
  function i(a, d) {
    if (v.isUndefined(d)) {
      if (!v.isUndefined(a)) return r(void 0, a);
    } else return r(void 0, d);
  }
  function s(a, d, p) {
    if (p in t) return r(a, d);
    if (p in e) return r(void 0, a);
  }
  const u = {
    url: l,
    method: l,
    data: l,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: s,
    headers: (a, d) => o(ga(a), ga(d), !0),
  };
  return (
    v.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const p = u[d] || o,
        h = p(e[d], t[d], d);
      (v.isUndefined(h) && p !== s) || (n[d] = h);
    }),
    n
  );
}
const uf = (e) => {
    const t = Xt({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: o,
      xsrfCookieName: l,
      headers: i,
      auth: s,
    } = t;
    (t.headers = i = Ee.from(i)),
      (t.url = tf(sf(t.baseURL, t.url), e.params, e.paramsSerializer)),
      s &&
        i.set(
          "Authorization",
          "Basic " +
            btoa(
              (s.username || "") +
                ":" +
                (s.password ? unescape(encodeURIComponent(s.password)) : "")
            )
        );
    let u;
    if (v.isFormData(n)) {
      if (ke.hasStandardBrowserEnv || ke.hasStandardBrowserWebWorkerEnv)
        i.setContentType(void 0);
      else if ((u = i.getContentType()) !== !1) {
        const [a, ...d] = u
          ? u
              .split(";")
              .map((p) => p.trim())
              .filter(Boolean)
          : [];
        i.setContentType([a || "multipart/form-data", ...d].join("; "));
      }
    }
    if (
      ke.hasStandardBrowserEnv &&
      (r && v.isFunction(r) && (r = r(t)), r || (r !== !1 && m0(t.url)))
    ) {
      const a = o && l && h0.read(l);
      a && i.set(o, a);
    }
    return t;
  },
  v0 = typeof XMLHttpRequest < "u",
  w0 =
    v0 &&
    function (e) {
      return new Promise(function (n, r) {
        const o = uf(e);
        let l = o.data;
        const i = Ee.from(o.headers).normalize();
        let { responseType: s, onUploadProgress: u, onDownloadProgress: a } = o,
          d,
          p,
          h,
          S,
          y;
        function w() {
          S && S(),
            y && y(),
            o.cancelToken && o.cancelToken.unsubscribe(d),
            o.signal && o.signal.removeEventListener("abort", d);
        }
        let k = new XMLHttpRequest();
        k.open(o.method.toUpperCase(), o.url, !0), (k.timeout = o.timeout);
        function f() {
          if (!k) return;
          const m = Ee.from(
              "getAllResponseHeaders" in k && k.getAllResponseHeaders()
            ),
            C = {
              data:
                !s || s === "text" || s === "json"
                  ? k.responseText
                  : k.response,
              status: k.status,
              statusText: k.statusText,
              headers: m,
              config: e,
              request: k,
            };
          lf(
            function (j) {
              n(j), w();
            },
            function (j) {
              r(j), w();
            },
            C
          ),
            (k = null);
        }
        "onloadend" in k
          ? (k.onloadend = f)
          : (k.onreadystatechange = function () {
              !k ||
                k.readyState !== 4 ||
                (k.status === 0 &&
                  !(k.responseURL && k.responseURL.indexOf("file:") === 0)) ||
                setTimeout(f);
            }),
          (k.onabort = function () {
            k &&
              (r(new O("Request aborted", O.ECONNABORTED, e, k)), (k = null));
          }),
          (k.onerror = function () {
            r(new O("Network Error", O.ERR_NETWORK, e, k)), (k = null);
          }),
          (k.ontimeout = function () {
            let x = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const C = o.transitional || nf;
            o.timeoutErrorMessage && (x = o.timeoutErrorMessage),
              r(
                new O(
                  x,
                  C.clarifyTimeoutError ? O.ETIMEDOUT : O.ECONNABORTED,
                  e,
                  k
                )
              ),
              (k = null);
          }),
          l === void 0 && i.setContentType(null),
          "setRequestHeader" in k &&
            v.forEach(i.toJSON(), function (x, C) {
              k.setRequestHeader(C, x);
            }),
          v.isUndefined(o.withCredentials) ||
            (k.withCredentials = !!o.withCredentials),
          s && s !== "json" && (k.responseType = o.responseType),
          a && (([h, y] = Bo(a, !0)), k.addEventListener("progress", h)),
          u &&
            k.upload &&
            (([p, S] = Bo(u)),
            k.upload.addEventListener("progress", p),
            k.upload.addEventListener("loadend", S)),
          (o.cancelToken || o.signal) &&
            ((d = (m) => {
              k &&
                (r(!m || m.type ? new Mn(null, e, k) : m),
                k.abort(),
                (k = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(d),
            o.signal &&
              (o.signal.aborted ? d() : o.signal.addEventListener("abort", d)));
        const c = d0(o.url);
        if (c && ke.protocols.indexOf(c) === -1) {
          r(new O("Unsupported protocol " + c + ":", O.ERR_BAD_REQUEST, e));
          return;
        }
        k.send(l || null);
      });
    },
  x0 = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        o;
      const l = function (a) {
        if (!o) {
          (o = !0), s();
          const d = a instanceof Error ? a : this.reason;
          r.abort(
            d instanceof O ? d : new Mn(d instanceof Error ? d.message : d)
          );
        }
      };
      let i =
        t &&
        setTimeout(() => {
          (i = null), l(new O(`timeout ${t} of ms exceeded`, O.ETIMEDOUT));
        }, t);
      const s = () => {
        e &&
          (i && clearTimeout(i),
          (i = null),
          e.forEach((a) => {
            a.unsubscribe
              ? a.unsubscribe(l)
              : a.removeEventListener("abort", l);
          }),
          (e = null));
      };
      e.forEach((a) => a.addEventListener("abort", l));
      const { signal: u } = r;
      return (u.unsubscribe = () => v.asap(s)), u;
    }
  },
  S0 = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      o;
    for (; r < n; ) (o = r + t), yield e.slice(r, o), (r = o);
  },
  k0 = async function* (e, t) {
    for await (const n of E0(e)) yield* S0(n, t);
  },
  E0 = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  ya = (e, t, n, r) => {
    const o = k0(e, t);
    let l = 0,
      i,
      s = (u) => {
        i || ((i = !0), r && r(u));
      };
    return new ReadableStream(
      {
        async pull(u) {
          try {
            const { done: a, value: d } = await o.next();
            if (a) {
              s(), u.close();
              return;
            }
            let p = d.byteLength;
            if (n) {
              let h = (l += p);
              n(h);
            }
            u.enqueue(new Uint8Array(d));
          } catch (a) {
            throw (s(a), a);
          }
        },
        cancel(u) {
          return s(u), o.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  dl =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  af = dl && typeof ReadableStream == "function",
  C0 =
    dl &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  cf = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  N0 =
    af &&
    cf(() => {
      let e = !1;
      const t = new Request(ke.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  va = 64 * 1024,
  $i = af && cf(() => v.isReadableStream(new Response("").body)),
  $o = { stream: $i && ((e) => e.body) };
dl &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !$o[t] &&
        ($o[t] = v.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new O(
                `Response type '${t}' is not supported`,
                O.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const j0 = async (e) => {
    if (e == null) return 0;
    if (v.isBlob(e)) return e.size;
    if (v.isSpecCompliantForm(e))
      return (
        await new Request(ke.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (v.isArrayBufferView(e) || v.isArrayBuffer(e)) return e.byteLength;
    if ((v.isURLSearchParams(e) && (e = e + ""), v.isString(e)))
      return (await C0(e)).byteLength;
  },
  P0 = async (e, t) => {
    const n = v.toFiniteNumber(e.getContentLength());
    return n ?? j0(t);
  },
  _0 =
    dl &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: o,
        cancelToken: l,
        timeout: i,
        onDownloadProgress: s,
        onUploadProgress: u,
        responseType: a,
        headers: d,
        withCredentials: p = "same-origin",
        fetchOptions: h,
      } = uf(e);
      a = a ? (a + "").toLowerCase() : "text";
      let S = x0([o, l && l.toAbortSignal()], i),
        y;
      const w =
        S &&
        S.unsubscribe &&
        (() => {
          S.unsubscribe();
        });
      let k;
      try {
        if (
          u &&
          N0 &&
          n !== "get" &&
          n !== "head" &&
          (k = await P0(d, r)) !== 0
        ) {
          let C = new Request(t, { method: "POST", body: r, duplex: "half" }),
            N;
          if (
            (v.isFormData(r) &&
              (N = C.headers.get("content-type")) &&
              d.setContentType(N),
            C.body)
          ) {
            const [j, R] = ma(k, Bo(ha(u)));
            r = ya(C.body, va, j, R);
          }
        }
        v.isString(p) || (p = p ? "include" : "omit");
        const f = "credentials" in Request.prototype;
        y = new Request(t, {
          ...h,
          signal: S,
          method: n.toUpperCase(),
          headers: d.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: f ? p : void 0,
        });
        let c = await fetch(y);
        const m = $i && (a === "stream" || a === "response");
        if ($i && (s || (m && w))) {
          const C = {};
          ["status", "statusText", "headers"].forEach((U) => {
            C[U] = c[U];
          });
          const N = v.toFiniteNumber(c.headers.get("content-length")),
            [j, R] = (s && ma(N, Bo(ha(s), !0))) || [];
          c = new Response(
            ya(c.body, va, j, () => {
              R && R(), w && w();
            }),
            C
          );
        }
        a = a || "text";
        let x = await $o[v.findKey($o, a) || "text"](c, e);
        return (
          !m && w && w(),
          await new Promise((C, N) => {
            lf(C, N, {
              data: x,
              headers: Ee.from(c.headers),
              status: c.status,
              statusText: c.statusText,
              config: e,
              request: y,
            });
          })
        );
      } catch (f) {
        throw (
          (w && w(),
          f && f.name === "TypeError" && /fetch/i.test(f.message)
            ? Object.assign(new O("Network Error", O.ERR_NETWORK, e, y), {
                cause: f.cause || f,
              })
            : O.from(f, f && f.code, e, y))
        );
      }
    }),
  Hi = { http: Hh, xhr: w0, fetch: _0 };
v.forEach(Hi, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const wa = (e) => `- ${e}`,
  R0 = (e) => v.isFunction(e) || e === null || e === !1,
  df = {
    getAdapter: (e) => {
      e = v.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let l = 0; l < t; l++) {
        n = e[l];
        let i;
        if (
          ((r = n),
          !R0(n) && ((r = Hi[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new O(`Unknown adapter '${i}'`);
        if (r) break;
        o[i || "#" + l] = r;
      }
      if (!r) {
        const l = Object.entries(o).map(
          ([s, u]) =>
            `adapter ${s} ` +
            (u === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let i = t
          ? l.length > 1
            ? `since :
` +
              l.map(wa).join(`
`)
            : " " + wa(l[0])
          : "as no adapter specified";
        throw new O(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Hi,
  };
function Hl(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Mn(null, e);
}
function xa(e) {
  return (
    Hl(e),
    (e.headers = Ee.from(e.headers)),
    (e.data = $l.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    df
      .getAdapter(e.adapter || br.adapter)(e)
      .then(
        function (r) {
          return (
            Hl(e),
            (r.data = $l.call(e, e.transformResponse, r)),
            (r.headers = Ee.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            of(r) ||
              (Hl(e),
              r &&
                r.response &&
                ((r.response.data = $l.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = Ee.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const ff = "1.7.7",
  Vs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Vs[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Sa = {};
Vs.transitional = function (t, n, r) {
  function o(l, i) {
    return (
      "[Axios v" +
      ff +
      "] Transitional option '" +
      l +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (l, i, s) => {
    if (t === !1)
      throw new O(
        o(i, " has been removed" + (n ? " in " + n : "")),
        O.ERR_DEPRECATED
      );
    return (
      n &&
        !Sa[i] &&
        ((Sa[i] = !0),
        console.warn(
          o(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(l, i, s) : !0
    );
  };
};
function T0(e, t, n) {
  if (typeof e != "object")
    throw new O("options must be an object", O.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const l = r[o],
      i = t[l];
    if (i) {
      const s = e[l],
        u = s === void 0 || i(s, l, e);
      if (u !== !0)
        throw new O("option " + l + " must be " + u, O.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new O("Unknown option " + l, O.ERR_BAD_OPTION);
  }
}
const Vi = { assertOptions: T0, validators: Vs },
  ct = Vi.validators;
class Vt {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new fa(), response: new fa() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const l = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? l &&
              !String(r.stack).endsWith(l.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + l)
            : (r.stack = l);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Xt(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: l } = n;
    r !== void 0 &&
      Vi.assertOptions(
        r,
        {
          silentJSONParsing: ct.transitional(ct.boolean),
          forcedJSONParsing: ct.transitional(ct.boolean),
          clarifyTimeoutError: ct.transitional(ct.boolean),
        },
        !1
      ),
      o != null &&
        (v.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Vi.assertOptions(
              o,
              { encode: ct.function, serialize: ct.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = l && v.merge(l.common, l[n.method]);
    l &&
      v.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (y) => {
          delete l[y];
        }
      ),
      (n.headers = Ee.concat(i, l));
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function (w) {
      (typeof w.runWhen == "function" && w.runWhen(n) === !1) ||
        ((u = u && w.synchronous), s.unshift(w.fulfilled, w.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (w) {
      a.push(w.fulfilled, w.rejected);
    });
    let d,
      p = 0,
      h;
    if (!u) {
      const y = [xa.bind(this), void 0];
      for (
        y.unshift.apply(y, s),
          y.push.apply(y, a),
          h = y.length,
          d = Promise.resolve(n);
        p < h;

      )
        d = d.then(y[p++], y[p++]);
      return d;
    }
    h = s.length;
    let S = n;
    for (p = 0; p < h; ) {
      const y = s[p++],
        w = s[p++];
      try {
        S = y(S);
      } catch (k) {
        w.call(this, k);
        break;
      }
    }
    try {
      d = xa.call(this, S);
    } catch (y) {
      return Promise.reject(y);
    }
    for (p = 0, h = a.length; p < h; ) d = d.then(a[p++], a[p++]);
    return d;
  }
  getUri(t) {
    t = Xt(this.defaults, t);
    const n = sf(t.baseURL, t.url);
    return tf(n, t.params, t.paramsSerializer);
  }
}
v.forEach(["delete", "get", "head", "options"], function (t) {
  Vt.prototype[t] = function (n, r) {
    return this.request(
      Xt(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
v.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (l, i, s) {
      return this.request(
        Xt(s || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: l,
          data: i,
        })
      );
    };
  }
  (Vt.prototype[t] = n()), (Vt.prototype[t + "Form"] = n(!0));
});
class Ws {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (l) {
      n = l;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let l = r._listeners.length;
      for (; l-- > 0; ) r._listeners[l](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let l;
        const i = new Promise((s) => {
          r.subscribe(s), (l = s);
        }).then(o);
        return (
          (i.cancel = function () {
            r.unsubscribe(l);
          }),
          i
        );
      }),
      t(function (l, i, s) {
        r.reason || ((r.reason = new Mn(l, i, s)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new Ws(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
function O0(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function L0(e) {
  return v.isObject(e) && e.isAxiosError === !0;
}
const Wi = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Wi).forEach(([e, t]) => {
  Wi[t] = e;
});
function pf(e) {
  const t = new Vt(e),
    n = Hd(Vt.prototype.request, t);
  return (
    v.extend(n, Vt.prototype, t, { allOwnKeys: !0 }),
    v.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return pf(Xt(e, o));
    }),
    n
  );
}
const Y = pf(br);
Y.Axios = Vt;
Y.CanceledError = Mn;
Y.CancelToken = Ws;
Y.isCancel = of;
Y.VERSION = ff;
Y.toFormData = cl;
Y.AxiosError = O;
Y.Cancel = Y.CanceledError;
Y.all = function (t) {
  return Promise.all(t);
};
Y.spread = O0;
Y.isAxiosError = L0;
Y.mergeConfig = Xt;
Y.AxiosHeaders = Ee;
Y.formToJSON = (e) => rf(v.isHTMLForm(e) ? new FormData(e) : e);
Y.getAdapter = df.getAdapter;
Y.HttpStatusCode = Wi;
Y.default = Y;
var mf = ((e) => (
    (e.USER = "user"), (e.ASSISTANT = "assistant"), (e.SYSTEM = "system"), e
  ))(mf || {}),
  Jt = ((e) => (
    (e.TEXT = "message"),
    (e.IMAGE = "image"),
    (e.VIDEO = "video"),
    (e.MAP = "map"),
    (e.WEB = "web"),
    (e.PRODUCT = "product"),
    e
  ))(Jt || {}),
  Qs = ((e) => (
    (e.MAP = "map"),
    (e.WEB = "web"),
    (e.PRODUCT = "product"),
    (e.LINK = "link"),
    (e.BUTTON = "button"),
    (e.NULL = ""),
    e
  ))(Qs || {});
function z0() {
  return "https://api.tuapp.com";
}
const ka = async (e, t) => {
    try {
      return (
        await Y.post(
          `${z0()}/api/answer-chat/web`,
          {
            role: mf.USER,
            type: Jt.TEXT,
            time: new Date().toISOString(),
            content: [{ type: Jt.TEXT, metadata: { text: e } }],
            action: { type: Qs.NULL, metadata: {} },
            id_project: t,
            id_chat: "888",
            id_user_web: "123",
          },
          { headers: { "Content-Type": "application/json" } }
        )
      ).data;
    } catch (n) {
      return console.error("Error:", n), [];
    }
  },
  gn = bn((e) => ({
    load: !1,
    chat: [],
    setChat: (t) => e((n) => ({ chat: [...n.chat, ...t] })),
    addMessageUser: (t) =>
      e((n) =>
        n.chat.length > 0 && n.chat[n.chat.length - 1].role === "user"
          ? (n.chat[n.chat.length - 1].content[0].metadata.text.push(t),
            { ...n, chat: [...n.chat] })
          : {
              chat: [
                ...n.chat,
                {
                  role: "user",
                  content: [
                    {
                      type: Jt.TEXT,
                      metadata: { text: [t] },
                      id_unit: "id_uniq",
                    },
                  ],
                  action: { type: Qs.NULL, metadata: {} },
                  type: Jt.TEXT,
                  time: new Date().toISOString(),
                },
              ],
            }
      ),
    clearChat: () => e({ chat: [] }),
    changeLoad: () => e((t) => ({ load: !t.load })),
  }));
function b0(e) {
  return g.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    ...e,
    children: g.jsx("path", {
      fill: "currentColor",
      d: "M12 7a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7",
    }),
  });
}
const hf = bn((e) => ({
    theme: "",
    idProject: "",
    position: { x: "", y: "", type: "" },
    addParam: (t, n) => e((r) => ({ ...r, [t]: n })),
    removeParam: (t) =>
      e((n) => {
        const { [t]: r, ...o } = n;
        return o;
      }),
    clearParams: () =>
      e({ theme: "", idProject: "", position: { x: "", y: "", type: "" } }),
  })),
  A0 = () => {
    const e = gn((p) => p.load),
      t = gn((p) => p.changeLoad),
      n = gn((p) => p.setChat),
      r = gn((p) => p.addMessageUser),
      o = hf((p) => p.idProject),
      l = ye.useRef(null),
      i = ye.useRef([]),
      [s, u] = ye.useState(""),
      a = ye.useCallback(() => {
        if (o) {
          if (i.current.length == 0) {
            console.log("saliendo ... ");
            return;
          }
          l.current && clearTimeout(l.current),
            (l.current = setTimeout(async () => {
              const p = i.current;
              (i.current = []), t();
              const h = await ka(p.join(","), o);
              n(h), t();
            }, 2e3));
        }
      }, [s, t, ka, n]),
      d = (p) => {
        u(p.target.value);
      };
    return g.jsxs("div", {
      className:
        "flex flex-row gap-2  w-full rounded-full py-2 px-2 border border-black ",
      children: [
        g.jsx("input", {
          value: s,
          onChange: (p) => {
            d(p);
          },
          onKeyDown: (p) => {
            p.key === "Enter" && !e
              ? (r(s), i.current.push(s), a(), u(""))
              : a();
          },
          className:
            "text-xl flex-1 px-2 border-none outline-none bg-transparent",
        }),
        g.jsx("button", {
          disabled: e,
          onClick: () => {
            r(s), i.current.push(s), a(), u("");
          },
          className: " bg-black rounded-full p-1.5",
          children: e
            ? g.jsx(b0, {
                className: "w-8 h-8  text-neutral-200 animate-pulse",
              })
            : g.jsx(rh, { className: "w-8 h-8  text-neutral-200" }),
        }),
      ],
    });
  };
var ur = ((e) => ((e.MAP = "map"), (e.WEB = "web"), (e.INIT = "init"), e))(
  ur || {}
);
const ar = bn((e) => ({
    type: "init",
    setDisplay: (t) => e({ type: t }),
    removeDisplay: () => e({ type: "init" }),
    metadata: {},
    setMetadata: (t) => e({ metadata: t }),
  })),
  Ho = bn((e) => ({
    featuredProduct: [],
    addProduct: (t) =>
      e((n) => {
        let o = n.featuredProduct.some((l) => l.id === t.id)
          ? n.featuredProduct.filter((l) => l.id !== t.id)
          : [...n.featuredProduct, t];
        return o.length > 2 && (o = o.slice(-2)), { featuredProduct: o };
      }),
    deleteOneProduct: (t) =>
      e((n) => ({
        featuredProduct:
          n.featuredProduct.filter((l) => l.id === t).length > 0
            ? n.featuredProduct.filter((l) => l.id !== t)
            : [...n.featuredProduct],
      })),
    cleanProduct: () => e({ featuredProduct: [] }),
  }));
function M0(e) {
  return g.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 25,
    height: 25,
    viewBox: "0 0 512 512",
    ...e,
    children: g.jsx("path", {
      fill: "currentColor",
      d: "M80 480a16 16 0 0 1-16-16V68.13a24 24 0 0 1 11.9-20.72C88 40.38 112.38 32 160 32c37.21 0 78.83 14.71 115.55 27.68C305.12 70.13 333.05 80 352 80a183.8 183.8 0 0 0 71-14.5a18 18 0 0 1 25 16.58v219.36a20 20 0 0 1-12 18.31c-8.71 3.81-40.51 16.25-84 16.25c-24.14 0-54.38-7.14-86.39-14.71C229.63 312.79 192.43 304 160 304c-36.87 0-55.74 5.58-64 9.11V464a16 16 0 0 1-16 16",
    }),
  });
}
function I0(e) {
  return g.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 25,
    height: 25,
    viewBox: "0 0 24 24",
    ...e,
    children: g.jsx("path", {
      fill: "currentColor",
      d: "M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73zM1 21h4V9H1z",
    }),
  });
}
function F0({ id: e, title: t, image: n, description: r }) {
  const o = Ho((i) => i.addProduct),
    l = Ho((i) => i.featuredProduct);
  return g.jsxs("div", {
    className: "flex flex-col gap-2",
    children: [
      g.jsx("button", {
        className: `${
          l.some((i) => i.id === e) ? "text-neutral-800" : "text-neutral-300"
        } px-1 rounded  hover:text-neutral-800 duration-200 transition-all`,
        onClick: () => {
          o({ id: e, title: t, image: n, description: r });
        },
        children: g.jsx(M0, {}),
      }),
      g.jsx("button", {
        className: `${
          l.some((i) => i.id === "dsdsd")
            ? "text-neutral-800"
            : "text-neutral-300"
        } px-1 rounded  hover:text-neutral-800 duration-200 transition-all`,
        onClick: () => {
          console.log("like");
        },
        children: g.jsx(I0, {}),
      }),
    ],
  });
}
const D0 = ({
    title: e,
    description: t,
    img: n,
    link: r,
    role: o,
    time: l,
    id: i,
  }) => {
    const s = ar((d) => d.setDisplay),
      u = ar((d) => d.setMetadata),
      a = ar((d) => d.metadata);
    return (
      console.log("datos: ", i, e, t, n, r, o, l),
      g.jsx("div", {
        className: ` ${
          o === "assistant" ? "items-start" : "items-end"
        }  w-full flex flex-col justify-start  `,
        children: g.jsxs("div", {
          className: `${
            o === "assistant" ? " text-black" : "bg-neutral-900 text-white"
          }   my-1  rounded  max-w-[80%] flex items-start gap-1  text-opacity-90`,
          children: [
            g.jsx("div", {
              onClick: () => {
                console.log("hola: metadata ", a),
                  u({ title: e, description: t, link: r, role: o, img: n }),
                  s(ur.WEB);
              },
              className:
                " flex  flex-col gap-2 w-1/3  cursor-pointer  relative group   ",
              children:
                n.length > 0 &&
                n.map((d) =>
                  g.jsxs(g.Fragment, {
                    children: [
                      g.jsx("img", {
                        className: " aspect-auto   rounded bg-neutral-200 ",
                        src: d.src,
                      }),
                      g.jsx("div", {
                        className:
                          "absolute rounded inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50",
                      }),
                    ],
                  })
                ),
            }),
            g.jsxs("div", {
              className: "  w-full flex flex-col   items-start",
              children: [
                g.jsx("div", {
                  className:
                    " bg-neutral-200 my-1 mx-1 px-4 py-2 rounded     text-black text-opacity-90 text-start  ",
                  children: e,
                }),
                g.jsx("div", {
                  className:
                    "  text-start bg-neutral-200 my-1 mx-1 px-4 py-2 rounded text-black text-opacity-60  break-words ",
                  children: t,
                }),
              ],
            }),
            g.jsx(F0, {
              id: i,
              title: e,
              image: n[0].src || "",
              description: t,
            }),
          ],
        }),
      })
    );
  },
  U0 = () => {
    const e = gn((r) => r.chat),
      t = gn((r) => r.load),
      n = ye.useRef(null);
    return (
      ye.useEffect(() => {
        var r;
        (r = n.current) == null || r.scrollIntoView({ behavior: "smooth" });
      }, [e, t]),
      g.jsxs(g.Fragment, {
        children: [
          g.jsxs("div", {
            className:
              "flex-1  overflow-y-auto flex flex-col gap-1 px-2   rounded-lg",
            children: [
              e.map((r) => {
                const o = r.content.map((l, i) => {
                  if (l.type === Jt.TEXT)
                    return g.jsx(sa, {
                      time: r.time,
                      text: r.content[i].metadata.text,
                      role: r.role,
                    });
                  if (l.type === Jt.PRODUCT)
                    return g.jsx(D0, {
                      id: r.content[i].id_unit,
                      title: r.content[i].metadata.title,
                      link: r.content[i].metadata.link,
                      time: r.time,
                      description: r.content[i].metadata.summary,
                      img: r.content[i].metadata.img,
                      role: r.role,
                    });
                });
                return (
                  r.action.type &&
                    o.push(g.jsx("button", { children: "Ver mas produtos" })),
                  o
                );
              }),
              t && g.jsx(sa, { text: [""], role: "assistant" }),
              g.jsx("div", { ref: n }),
            ],
          }),
          g.jsx(A0, {}),
        ],
      })
    );
  },
  Vo = bn((e) => ({
    noticeSelect: { id: "", title: "", content: "" },
    setNotice: (t) => e({ noticeSelect: t }),
    removeNotice: () => e({ noticeSelect: { id: "", title: "", content: "" } }),
  })),
  B0 = () => {
    const e = Vo((t) => t.noticeSelect);
    return g.jsxs("div", {
      className:
        " overflow-y-auto  opacity-100 flex flex-col bg-neutral-200 p-1 rounded  duration-500",
      children: [
        g.jsx("div", {
          className: "  rounded aspect-auto",
          children: g.jsx("img", {
            className: "aspect-auto",
            src: "https://i.ytimg.com/vi/oD3r09IL7vc/maxresdefault.jpg",
          }),
        }),
        g.jsx("p", {
          className: " px-1 py-1  break-all tracking-wide",
          children: e.title,
        }),
        g.jsx("p", {
          className: " px-1 pb-4 text-black text-opacity-70 break-all  ",
          children: e.content,
        }),
      ],
    });
  };
function $0(e) {
  return g.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "0.7em",
    height: "1em",
    viewBox: "0 0 256 367",
    ...e,
    children: [
      g.jsx("path", {
        fill: "#34a853",
        d: "M70.585 271.865a371 371 0 0 1 28.911 42.642c7.374 13.982 10.448 23.463 15.837 40.31c3.305 9.308 6.292 12.086 12.714 12.086c6.998 0 10.173-4.726 12.626-12.035c5.094-15.91 9.091-28.052 15.397-39.525c12.374-22.15 27.75-41.833 42.858-60.75c4.09-5.354 30.534-36.545 42.439-61.156c0 0 14.632-27.035 14.632-64.792c0-35.318-14.43-59.813-14.43-59.813l-41.545 11.126l-25.23 66.451l-6.242 9.163l-1.248 1.66l-1.66 2.078l-2.914 3.319l-4.164 4.163l-22.467 18.304l-56.17 32.432z",
      }),
      g.jsx("path", {
        fill: "#fbbc04",
        d: "M12.612 188.892c13.709 31.313 40.145 58.839 58.031 82.995l95.001-112.534s-13.384 17.504-37.662 17.504c-27.043 0-48.89-21.595-48.89-48.825c0-18.673 11.234-31.501 11.234-31.501l-64.489 17.28z",
      }),
      g.jsx("path", {
        fill: "#4285f4",
        d: "M166.705 5.787c31.552 10.173 58.558 31.53 74.893 63.023l-75.925 90.478s11.234-13.06 11.234-31.617c0-27.864-23.463-48.68-48.81-48.68c-23.969 0-37.735 17.475-37.735 17.475v-57z",
      }),
      g.jsx("path", {
        fill: "#1a73e8",
        d: "M30.015 45.765C48.86 23.218 82.02 0 127.736 0c22.18 0 38.89 5.823 38.89 5.823L90.29 96.516H36.205z",
      }),
      g.jsx("path", {
        fill: "#ea4335",
        d: "M12.612 188.892S0 164.194 0 128.414c0-33.817 13.146-63.377 30.015-82.649l60.318 50.759z",
      }),
    ],
  });
}
function gf(e) {
  return g.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    ...e,
    children: g.jsx("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M22 3h7v7m-1.5-5.5L20 12m-3-7H8a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-9",
    }),
  });
}
const H0 = () =>
    g.jsxs(g.Fragment, {
      children: [
        g.jsx("iframe", {
          src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467.14999929614396!2d-58.46377299494688!3d-34.63182601057183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc94e26944b13%3A0xdb196c848b9b23ce!2sSportClub%20Flores%20Norte!5e0!3m2!1ses-419!2sar!4v1727271326282!5m2!1ses-419!2sar",
          loading: "lazy",
          className: " rounded-xl h-full ",
        }),
        g.jsxs("button", {
          className:
            "flex text-start flex-row gap-3 items-center border border-neutral-400 bg-neutral-300 p-2 rounded hover:bg-neutral-200 active:bg-white",
          children: [
            g.jsx($0, { className: "w-10 h-10" }),
            g.jsxs("div", {
              className: " text-start text-sm flex-1",
              children: [
                g.jsx("p", { children: "Google Maps" }),
                g.jsx("p", { children: "maps.google.com" }),
              ],
            }),
            g.jsx(gf, { className: " self-start " }),
          ],
        }),
      ],
    }),
  V0 = ({ metadata: e }) => {
    const [t, n] = ye.useState(!0),
      r = () => {
        n(!1);
      };
    return (
      console.log(e),
      g.jsxs(g.Fragment, {
        children: [
          g.jsxs("div", {
            className: " relative flex-1 ",
            children: [
              t &&
                g.jsx("div", {
                  className:
                    " absolute inset-0 rounded-xl  z-10 flex h-full items-center justify-center bg-gray-200 animate-pulse",
                  children: g.jsx($d, {}),
                }),
              g.jsx("iframe", {
                src: e.link,
                loading: "lazy",
                className: " rounded-xl h-full w-full absolute inset-0 z-0",
                onLoad: r,
              }),
            ],
          }),
          g.jsxs("button", {
            onClick: () => {
              window.open(e.link);
            },
            className:
              "flex  text-start flex-row gap-3 items-center border border-neutral-400 bg-neutral-300 p-2 rounded hover:bg-neutral-200 active:bg-white truncate ",
            children: [
              g.jsxs("div", {
                className: "  text-start text-sm  truncate w-full",
                children: [
                  g.jsx("p", { children: "Web" }),
                  g.jsx("p", {
                    className: " truncate w-full ",
                    children: e.link,
                  }),
                ],
              }),
              g.jsx(gf, { className: " self-start " }),
            ],
          }),
        ],
      })
    );
  },
  Ea = () =>
    g.jsxs("div", {
      className:
        " overflow-y-auto  opacity-100 flex flex-col bg-white p-1 rounded-lg  duration-500",
      children: [
        g.jsx("p", {
          className: "px-2 py-1 break-all tracking-wide font-bold text-4xl",
          children: "👋 ¡Hola!",
        }),
        g.jsx("p", {
          className: "px-2 pb-4 text-black  break-all text-2xl",
          children: "¡Bienvenido! 🎉",
        }),
        g.jsx("p", {
          className: "px-2 pb-4 text-black text-opacity-70 break-all text-lg",
          children: "Estamos encantados de que te unas a esta experiencia. 😊",
        }),
        g.jsx("p", {
          className: "px-2 pb-4 text-black text-opacity-70 break-all text-lg",
          children:
            "Explora, disfruta y saca el máximo provecho de todas nuestras funciones. 🚀",
        }),
        g.jsx("p", {
          className: "px-2 pb-4 text-black text-opacity-70 break-all text-lg",
          children: "Aquí podrás comunicarte de manera divertida y efectiva.",
        }),
        g.jsx("p", {
          className: "px-2 pb-4 text-black text-opacity-70 break-all text-lg",
          children: "¡Comencemos a charlar! 💬",
        }),
      ],
    });
function W0() {
  const e = Ho((n) => n.featuredProduct),
    t = Ho((n) => n.deleteOneProduct);
  return g.jsx("div", {
    className: `${
      e.length == 0 ? "h-[0px]" : "h-[150px]"
    } flex flex-col gap-3 duration-500 transition-all overflow-hidden `,
    children:
      e.length > 0 &&
      e.map((n) =>
        g.jsxs("div", {
          className: "flex flex-row gap-2  rounded items-start ",
          children: [
            g.jsx("div", {
              className: "w-14 rounded overflow-hidden",
              children: g.jsx("img", { src: n.image }),
            }),
            g.jsxs("div", {
              className: " flex flex-col gap-2",
              children: [
                g.jsx("div", {
                  className: "rounded px-2",
                  children: g.jsx("p", { children: n.title }),
                }),
                g.jsx("div", {
                  children: g.jsx("button", {
                    onClick: () => {
                      t(n.id);
                    },
                    className:
                      " bg-neutral-200 px-2 rounded text-black text-opacity-50 hover:text-red-500 duration-200 transition-all",
                    children: "clean",
                  }),
                }),
              ],
            }),
          ],
        })
      ),
  });
}
const Q0 = () => {
    const e = Uo((o) => o.nav),
      t = ar((o) => o.type),
      n = ar((o) => o.metadata),
      r = Vo((o) => o.noticeSelect);
    return g.jsxs(g.Fragment, {
      children: [
        g.jsx(W0, {}),
        e == yt.CHAT && t == ur.MAP && g.jsx(H0, {}),
        e == yt.CHAT && t == ur.WEB && g.jsx(V0, { metadata: n }),
        e == yt.CHAT && t == ur.INIT && g.jsx(Ea, {}),
        e == yt.NOTICIAS && r.id == "" && g.jsx(Ea, {}),
        e == yt.NOTICIAS && r.id != "" && g.jsx(B0, {}),
      ],
    });
  },
  Ks = "-",
  K0 = (e) => {
    const t = q0(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (i) => {
        const s = i.split(Ks);
        return s[0] === "" && s.length !== 1 && s.shift(), yf(s, t) || G0(i);
      },
      getConflictingClassGroupIds: (i, s) => {
        const u = n[i] || [];
        return s && r[i] ? [...u, ...r[i]] : u;
      },
    };
  },
  yf = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? yf(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const l = e.join(Ks);
    return (i = t.validators.find(({ validator: s }) => s(l))) == null
      ? void 0
      : i.classGroupId;
  },
  Ca = /^\[(.+)\]$/,
  G0 = (e) => {
    if (Ca.test(e)) {
      const t = Ca.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  q0 = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      J0(Object.entries(e.classGroups), n).forEach(([l, i]) => {
        Qi(i, r, l, t);
      }),
      r
    );
  },
  Qi = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const l = o === "" ? t : Na(t, o);
        l.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (X0(o)) {
          Qi(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([l, i]) => {
        Qi(i, Na(t, l), n, r);
      });
    });
  },
  Na = (e, t) => {
    let n = e;
    return (
      t.split(Ks).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  X0 = (e) => e.isThemeGetter,
  J0 = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((l) =>
            typeof l == "string"
              ? t + l
              : typeof l == "object"
              ? Object.fromEntries(
                  Object.entries(l).map(([i, s]) => [t + i, s])
                )
              : l
          );
          return [n, o];
        })
      : e,
  Y0 = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (l, i) => {
      n.set(l, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(l) {
        let i = n.get(l);
        if (i !== void 0) return i;
        if ((i = r.get(l)) !== void 0) return o(l, i), i;
      },
      set(l, i) {
        n.has(l) ? n.set(l, i) : o(l, i);
      },
    };
  },
  vf = "!",
  Z0 = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      l = t.length,
      i = (s) => {
        const u = [];
        let a = 0,
          d = 0,
          p;
        for (let k = 0; k < s.length; k++) {
          let f = s[k];
          if (a === 0) {
            if (f === o && (r || s.slice(k, k + l) === t)) {
              u.push(s.slice(d, k)), (d = k + l);
              continue;
            }
            if (f === "/") {
              p = k;
              continue;
            }
          }
          f === "[" ? a++ : f === "]" && a--;
        }
        const h = u.length === 0 ? s : s.substring(d),
          S = h.startsWith(vf),
          y = S ? h.substring(1) : h,
          w = p && p > d ? p - d : void 0;
        return {
          modifiers: u,
          hasImportantModifier: S,
          baseClassName: y,
          maybePostfixModifierPosition: w,
        };
      };
    return n ? (s) => n({ className: s, parseClassName: i }) : i;
  },
  e1 = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  t1 = (e) => ({ cache: Y0(e.cacheSize), parseClassName: Z0(e), ...K0(e) }),
  n1 = /\s+/,
  r1 = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      l = [],
      i = e.trim().split(n1);
    let s = "";
    for (let u = i.length - 1; u >= 0; u -= 1) {
      const a = i[u],
        {
          modifiers: d,
          hasImportantModifier: p,
          baseClassName: h,
          maybePostfixModifierPosition: S,
        } = n(a);
      let y = !!S,
        w = r(y ? h.substring(0, S) : h);
      if (!w) {
        if (!y) {
          s = a + (s.length > 0 ? " " + s : s);
          continue;
        }
        if (((w = r(h)), !w)) {
          s = a + (s.length > 0 ? " " + s : s);
          continue;
        }
        y = !1;
      }
      const k = e1(d).join(":"),
        f = p ? k + vf : k,
        c = f + w;
      if (l.includes(c)) continue;
      l.push(c);
      const m = o(w, y);
      for (let x = 0; x < m.length; ++x) {
        const C = m[x];
        l.push(f + C);
      }
      s = a + (s.length > 0 ? " " + s : s);
    }
    return s;
  };
function o1() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = wf(t)) && (r && (r += " "), (r += n));
  return r;
}
const wf = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = wf(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function l1(e, ...t) {
  let n,
    r,
    o,
    l = i;
  function i(u) {
    const a = t.reduce((d, p) => p(d), e());
    return (n = t1(a)), (r = n.cache.get), (o = n.cache.set), (l = s), s(u);
  }
  function s(u) {
    const a = r(u);
    if (a) return a;
    const d = r1(u, n);
    return o(u, d), d;
  }
  return function () {
    return l(o1.apply(null, arguments));
  };
}
const $ = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  xf = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  i1 = /^\d+\/\d+$/,
  s1 = new Set(["px", "full", "screen"]),
  u1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  a1 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  c1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  d1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  f1 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Xe = (e) => En(e) || s1.has(e) || i1.test(e),
  dt = (e) => In(e, "length", x1),
  En = (e) => !!e && !Number.isNaN(Number(e)),
  Vl = (e) => In(e, "number", En),
  Kn = (e) => !!e && Number.isInteger(Number(e)),
  p1 = (e) => e.endsWith("%") && En(e.slice(0, -1)),
  z = (e) => xf.test(e),
  ft = (e) => u1.test(e),
  m1 = new Set(["length", "size", "percentage"]),
  h1 = (e) => In(e, m1, Sf),
  g1 = (e) => In(e, "position", Sf),
  y1 = new Set(["image", "url"]),
  v1 = (e) => In(e, y1, k1),
  w1 = (e) => In(e, "", S1),
  Gn = () => !0,
  In = (e, t, n) => {
    const r = xf.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  x1 = (e) => a1.test(e) && !c1.test(e),
  Sf = () => !1,
  S1 = (e) => d1.test(e),
  k1 = (e) => f1.test(e),
  E1 = () => {
    const e = $("colors"),
      t = $("spacing"),
      n = $("blur"),
      r = $("brightness"),
      o = $("borderColor"),
      l = $("borderRadius"),
      i = $("borderSpacing"),
      s = $("borderWidth"),
      u = $("contrast"),
      a = $("grayscale"),
      d = $("hueRotate"),
      p = $("invert"),
      h = $("gap"),
      S = $("gradientColorStops"),
      y = $("gradientColorStopPositions"),
      w = $("inset"),
      k = $("margin"),
      f = $("opacity"),
      c = $("padding"),
      m = $("saturate"),
      x = $("scale"),
      C = $("sepia"),
      N = $("skew"),
      j = $("space"),
      R = $("translate"),
      U = () => ["auto", "contain", "none"],
      b = () => ["auto", "hidden", "clip", "visible", "scroll"],
      de = () => ["auto", z, t],
      F = () => [z, t],
      st = () => ["", Xe, dt],
      zt = () => ["auto", En, z],
      Ar = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      ut = () => ["solid", "dashed", "dotted", "double", "none"],
      en = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      P = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      T = () => ["", "0", z],
      L = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      I = () => [En, z];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Gn],
        spacing: [Xe, dt],
        blur: ["none", "", ft, z],
        brightness: I(),
        borderColor: [e],
        borderRadius: ["none", "", "full", ft, z],
        borderSpacing: F(),
        borderWidth: st(),
        contrast: I(),
        grayscale: T(),
        hueRotate: I(),
        invert: T(),
        gap: F(),
        gradientColorStops: [e],
        gradientColorStopPositions: [p1, dt],
        inset: de(),
        margin: de(),
        opacity: I(),
        padding: F(),
        saturate: I(),
        scale: I(),
        sepia: T(),
        skew: I(),
        space: F(),
        translate: F(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", z] }],
        container: ["container"],
        columns: [{ columns: [ft] }],
        "break-after": [{ "break-after": L() }],
        "break-before": [{ "break-before": L() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...Ar(), z] }],
        overflow: [{ overflow: b() }],
        "overflow-x": [{ "overflow-x": b() }],
        "overflow-y": [{ "overflow-y": b() }],
        overscroll: [{ overscroll: U() }],
        "overscroll-x": [{ "overscroll-x": U() }],
        "overscroll-y": [{ "overscroll-y": U() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [w] }],
        "inset-x": [{ "inset-x": [w] }],
        "inset-y": [{ "inset-y": [w] }],
        start: [{ start: [w] }],
        end: [{ end: [w] }],
        top: [{ top: [w] }],
        right: [{ right: [w] }],
        bottom: [{ bottom: [w] }],
        left: [{ left: [w] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Kn, z] }],
        basis: [{ basis: de() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", z] }],
        grow: [{ grow: T() }],
        shrink: [{ shrink: T() }],
        order: [{ order: ["first", "last", "none", Kn, z] }],
        "grid-cols": [{ "grid-cols": [Gn] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Kn, z] }, z] }],
        "col-start": [{ "col-start": zt() }],
        "col-end": [{ "col-end": zt() }],
        "grid-rows": [{ "grid-rows": [Gn] }],
        "row-start-end": [{ row: ["auto", { span: [Kn, z] }, z] }],
        "row-start": [{ "row-start": zt() }],
        "row-end": [{ "row-end": zt() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", z] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", z] }],
        gap: [{ gap: [h] }],
        "gap-x": [{ "gap-x": [h] }],
        "gap-y": [{ "gap-y": [h] }],
        "justify-content": [{ justify: ["normal", ...P()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...P(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...P(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [c] }],
        px: [{ px: [c] }],
        py: [{ py: [c] }],
        ps: [{ ps: [c] }],
        pe: [{ pe: [c] }],
        pt: [{ pt: [c] }],
        pr: [{ pr: [c] }],
        pb: [{ pb: [c] }],
        pl: [{ pl: [c] }],
        m: [{ m: [k] }],
        mx: [{ mx: [k] }],
        my: [{ my: [k] }],
        ms: [{ ms: [k] }],
        me: [{ me: [k] }],
        mt: [{ mt: [k] }],
        mr: [{ mr: [k] }],
        mb: [{ mb: [k] }],
        ml: [{ ml: [k] }],
        "space-x": [{ "space-x": [j] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [j] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", z, t] }],
        "min-w": [{ "min-w": [z, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              z,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [ft] },
              ft,
            ],
          },
        ],
        h: [{ h: [z, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [z, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [z, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [z, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", ft, dt] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Vl,
            ],
          },
        ],
        "font-family": [{ font: [Gn] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              z,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", En, Vl] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Xe,
              z,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", z] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", z] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [f] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [f] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...ut(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Xe, dt] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Xe, z] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: F() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              z,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", z] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [f] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Ar(), g1] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", h1] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              v1,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [y] }],
        "gradient-via-pos": [{ via: [y] }],
        "gradient-to-pos": [{ to: [y] }],
        "gradient-from": [{ from: [S] }],
        "gradient-via": [{ via: [S] }],
        "gradient-to": [{ to: [S] }],
        rounded: [{ rounded: [l] }],
        "rounded-s": [{ "rounded-s": [l] }],
        "rounded-e": [{ "rounded-e": [l] }],
        "rounded-t": [{ "rounded-t": [l] }],
        "rounded-r": [{ "rounded-r": [l] }],
        "rounded-b": [{ "rounded-b": [l] }],
        "rounded-l": [{ "rounded-l": [l] }],
        "rounded-ss": [{ "rounded-ss": [l] }],
        "rounded-se": [{ "rounded-se": [l] }],
        "rounded-ee": [{ "rounded-ee": [l] }],
        "rounded-es": [{ "rounded-es": [l] }],
        "rounded-tl": [{ "rounded-tl": [l] }],
        "rounded-tr": [{ "rounded-tr": [l] }],
        "rounded-br": [{ "rounded-br": [l] }],
        "rounded-bl": [{ "rounded-bl": [l] }],
        "border-w": [{ border: [s] }],
        "border-w-x": [{ "border-x": [s] }],
        "border-w-y": [{ "border-y": [s] }],
        "border-w-s": [{ "border-s": [s] }],
        "border-w-e": [{ "border-e": [s] }],
        "border-w-t": [{ "border-t": [s] }],
        "border-w-r": [{ "border-r": [s] }],
        "border-w-b": [{ "border-b": [s] }],
        "border-w-l": [{ "border-l": [s] }],
        "border-opacity": [{ "border-opacity": [f] }],
        "border-style": [{ border: [...ut(), "hidden"] }],
        "divide-x": [{ "divide-x": [s] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [s] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [f] }],
        "divide-style": [{ divide: ut() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...ut()] }],
        "outline-offset": [{ "outline-offset": [Xe, z] }],
        "outline-w": [{ outline: [Xe, dt] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: st() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [f] }],
        "ring-offset-w": [{ "ring-offset": [Xe, dt] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", ft, w1] }],
        "shadow-color": [{ shadow: [Gn] }],
        opacity: [{ opacity: [f] }],
        "mix-blend": [
          { "mix-blend": [...en(), "plus-lighter", "plus-darker"] },
        ],
        "bg-blend": [{ "bg-blend": en() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [u] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", ft, z] }],
        grayscale: [{ grayscale: [a] }],
        "hue-rotate": [{ "hue-rotate": [d] }],
        invert: [{ invert: [p] }],
        saturate: [{ saturate: [m] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [u] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [a] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
        "backdrop-invert": [{ "backdrop-invert": [p] }],
        "backdrop-opacity": [{ "backdrop-opacity": [f] }],
        "backdrop-saturate": [{ "backdrop-saturate": [m] }],
        "backdrop-sepia": [{ "backdrop-sepia": [C] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [i] }],
        "border-spacing-x": [{ "border-spacing-x": [i] }],
        "border-spacing-y": [{ "border-spacing-y": [i] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              z,
            ],
          },
        ],
        duration: [{ duration: I() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", z] }],
        delay: [{ delay: I() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", z] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [x] }],
        "scale-x": [{ "scale-x": [x] }],
        "scale-y": [{ "scale-y": [x] }],
        rotate: [{ rotate: [Kn, z] }],
        "translate-x": [{ "translate-x": [R] }],
        "translate-y": [{ "translate-y": [R] }],
        "skew-x": [{ "skew-x": [N] }],
        "skew-y": [{ "skew-y": [N] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              z,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              z,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": F() }],
        "scroll-mx": [{ "scroll-mx": F() }],
        "scroll-my": [{ "scroll-my": F() }],
        "scroll-ms": [{ "scroll-ms": F() }],
        "scroll-me": [{ "scroll-me": F() }],
        "scroll-mt": [{ "scroll-mt": F() }],
        "scroll-mr": [{ "scroll-mr": F() }],
        "scroll-mb": [{ "scroll-mb": F() }],
        "scroll-ml": [{ "scroll-ml": F() }],
        "scroll-p": [{ "scroll-p": F() }],
        "scroll-px": [{ "scroll-px": F() }],
        "scroll-py": [{ "scroll-py": F() }],
        "scroll-ps": [{ "scroll-ps": F() }],
        "scroll-pe": [{ "scroll-pe": F() }],
        "scroll-pt": [{ "scroll-pt": F() }],
        "scroll-pr": [{ "scroll-pr": F() }],
        "scroll-pb": [{ "scroll-pb": F() }],
        "scroll-pl": [{ "scroll-pl": F() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", z] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Xe, dt, Vl] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  kf = l1(E1),
  C1 = ({ title: e, index: t, indexNow: n, onClick: r, className: o }) =>
    g.jsx("button", {
      type: "button",
      onClick: r,
      className: kf(
        o,
        `${
          t == n ? "bg-black text-white" : "bg-neutral-200 text-black"
        } px-2 py-1 rounded  text-opacity-70 hover:bg-black hover:text-white duration-500`
      ),
      children: e,
    });
function N1(e) {
  return g.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    ...e,
    children: g.jsx("path", {
      fill: "currentColor",
      d: "M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28",
    }),
  });
}
const j1 = ({ phone: e, className: t }) =>
    g.jsxs("button", {
      type: "button",
      onClick: () => {
        window.open(`https://wa.me/${e}`, "_blank");
      },
      className: kf(
        t,
        " px-2 py-1 rounded flex flex-row items-center gap-2   bg-green-500 text-white hover:bg-green-600 duration-500"
      ),
      children: [g.jsx(N1, { className: "w-5 h-5" }), "Whats App"],
    }),
  P1 = [
    { title: "Chat", index: yt.CHAT },
    { title: "Noticias", index: yt.NOTICIAS },
  ],
  _1 = () => {
    const e = Uo((n) => n.nav),
      t = Uo((n) => n.setNav);
    return g.jsxs("div", {
      className: "flex flex-row gap-3 px-1",
      children: [
        P1.map((n) =>
          g.jsx(C1, {
            title: n.title,
            index: n.index,
            indexNow: e,
            onClick: () => {
              t(n.index);
            },
          })
        ),
        g.jsx(j1, { phone: "15454785" }),
      ],
    });
  };
function R1(e) {
  return g.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    ...e,
    children: g.jsx("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 20V4m0 0l6 6m-6-6l-6 6",
    }),
  });
}
const T1 = () =>
    g.jsx("div", {
      className: "  ",
      children: g.jsx("button", {
        className:
          "py-1 px-1 mb-2  rounded-full hover:bg-neutral-100 hover:bg-opacity-40 active:bg-neutral-300 duration-300 ",
        children: g.jsx(R1, { className: "w-[30px] h-[30px] -rotate-90" }),
      }),
    }),
  O1 = ({ item: e, idSelect: t, setNoticeSelect: n }) =>
    g.jsxs("button", {
      className: ` ${
        t === e.id ? " opacity-100  " : " opacity-50"
      } flex flex-col  bg-neutral-200 p-1 rounded   hover:opacity-100 duration-500`,
      onClick: () => {
        n(e);
      },
      children: [
        g.jsx("div", {
          className: " overflow-hidden rounded aspect-auto",
          children: g.jsx("img", {
            className: "aspect-auto",
            src: "https://i.ytimg.com/vi/oD3r09IL7vc/maxresdefault.jpg",
          }),
        }),
        g.jsx("p", {
          className: `line-clamp-2 
          px-1 py-1  break-all tracking-wide text-start`,
          children: e.title,
        }),
        g.jsx("p", {
          className:
            "line-clamp-3 px-1 text-start text-black text-opacity-70 break-all ",
          children: e.content,
        }),
      ],
    }),
  ja = [
    {
      id: "111",
      title: "11111111",
      content:
        "hoalsdalsdlas asmdlas asdas dasdasdasd asdasdas d asd as das d  asdasdasdasdas da sd asd asdas dasdas dasdasbjdbasdbasbdjbasjdbasjkd bas dlbasjdb abssb bbkb bj b lbbjblbj lbj bjbllkbkjbjkblbj bjbljklbj blj bj blkmdlasdl asdasl mdasm dasdlm hoalsdalsdlas asmdlas asdas dasdasdasd asdasdas d asd as das d  asdasdasdasdas da sd asd asdas dasdas dasdasbjdbasdbasbdjbasjdbasjkd bas dlbasjdb abssb bbkb bj b lbbjblbj lbj bjbllkbkjbjkblbj bjbljklbj blj bj blkmdlasdl asdasl mdasm dasdlmhoalsdalsdlas asmdlas asdas dasdasdasd asdasdas d asd as das d  asdasdasdasdas da sd asd asdas dasdas dasdasbjdbasdbasbdjbasjdbasjkd bas dlbasjdb abssb bbkb bj b lbbjblbj lbj bjbllkbkjbjkblbj bjbljklbj blj bj blkmdlasdl asdasl mdasm dasdlmhoalsdalsdlas asmdlas asdas dasdasdasd asdasdas d asd as das d  asdasdasdasdas da sd asd asdas dasdas dasdasbjdbasdbasbdjbasjdbasjkd bas dlbasjdb abssb bbkb bj b lbbjblbj lbj bjbllkbkjbjkblbj bjbljklbj blj bj blkmdlasdl asdasl mdasm dasdlmhoalsdalsdlas asmdlas asdas dasdasdasd asdasdas d asd as das d  asdasdasdasdas da sd asd asdas dasdas dasdasbjdbasdbasbdjbasjdbasjkd bas dlbasjdb abssb bbkb bj b lbbjblbj lbj bjbllkbkjbjkblbj bjbljklbj blj bj blkmdlasdl asdasl mdasm dasdlm",
    },
  ],
  L1 = () => {
    const e = Vo((n) => n.noticeSelect),
      t = Vo((n) => n.setNotice);
    return g.jsx("div", {
      className:
        " grid grid-flow-row-dense gap-2 py-4 grid-cols-3 overflow-y-auto px-2   ",
      children:
        ja.length > 0 &&
        ja.map((n) =>
          g.jsx(O1, { item: n, idSelect: e.id, setNoticeSelect: t })
        ),
    });
  },
  Wl = "unmounted",
  Pa = "exited",
  nn = "entering",
  Ql = "entered",
  _a = "exiting",
  z1 = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };
class Ef extends ye.Component {
  constructor(t) {
    super(t), (this.state = { status: t.show ? nn : Wl });
  }
  componentDidMount() {
    const { show: t } = this.props;
    t && this.performEnter();
  }
  componentDidUpdate(t) {
    let n = null;
    if (t.show !== this.props.show) {
      const { status: r } = this.state;
      this.props.show
        ? r !== nn && r !== Ql && (n = nn)
        : (r === nn || r === Ql) && (n = _a);
    }
    this.updateStatus(n);
  }
  updateStatus(t) {
    t !== null
      ? t === nn
        ? this.performEnter()
        : this.performExit()
      : this.state.status === Pa && this.setState({ status: Wl });
  }
  performEnter() {
    this.setState({ status: nn }, () => {
      setTimeout(() => {
        this.setState({ status: Ql });
      }, 0);
    });
  }
  performExit() {
    const { duration: t = 300 } = this.props;
    this.setState({ status: _a }, () => {
      setTimeout(() => {
        this.setState({ status: Pa });
      }, t);
    });
  }
  render() {
    const { status: t } = this.state;
    if (t === Wl) return null;
    const {
      children: n,
      duration: r = 300,
      className: o,
      style: l,
    } = this.props;
    return g.jsx("div", {
      className: o,
      style: {
        ...l,
        transition: `opacity ${r}ms ease-in-out`,
        opacity: 0.1,
        ...z1[t],
      },
      children: n,
    });
  }
}
Gs(Ef, "defaultProps", { show: !1, duration: 300 });
const b1 = () => {
  const e = document.getElementsByTagName("script");
  let t = "";
  for (let n = 0; n < e.length; n++) {
    const r = e[n].src;
    if (
      (console.log("Script :: ", r),
      r &&
        r.startsWith("https://cdn.jsdelivr.net/gh/GHimmel/GotaanWeb@main.com"))
    ) {
      t = r;
      break;
    }
  }
  if (t) {
    const n = new URL(t);
    return Object.fromEntries(n.searchParams.entries());
  } else console.log('No se encontró la URL que comienza con "www.german.com"');
};
function A1() {
  const e = Uo((o) => o.nav),
    t = hf((o) => o.addParam),
    [n, r] = ye.useState(!1);
  return (
    ye.useEffect(() => {
      const o = b1();
      console.log("data", o),
        typeof o == "object" &&
          Object.keys(o).length > 0 &&
          (t("idProject", o.idProject), t("theme", o.theme));
    }, []),
    g.jsxs(g.Fragment, {
      children: [
        g.jsx("button", {
          className:
            " fixed z-[100] bottom-3 right-3  bg-black w-12 h-12 rounded-full hover:scale-110 active:scale-100 duration-150 transition-all ",
          onClick: () => {
            r(!n);
          },
        }),
        g.jsxs(Ef, {
          show: n,
          duration: 200,
          className:
            " bg-white  fixed top-0  z-[99] px-4  w-full  flex items-center justify-center gap-12   duration-700 transition-all  ",
          style: { height: "100dvh" },
          children: [
            g.jsx("div", {
              className: "flex flex-col  w-[500px]  h-[95%]  gap-4",
              children: g.jsx(Q0, {}),
            }),
            g.jsxs("div", {
              className:
                "w-[600px] h-[95%]  p-1 rounded-lg flex flex-col gap-1 ",
              children: [
                g.jsx(T1, {}),
                g.jsx(_1, {}),
                e == "chat" && g.jsx(U0, {}),
                e == "noticias" && g.jsx(L1, {}),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
const fl = document.createElement("link");
fl.rel = "stylesheet";
fl.type = "text/css";
fl.href = "https://cdn.jsdelivr.net/gh/GHimmel/GotaanWeb@main/estilosV3.css";
document.head.appendChild(fl);
const Cf = document.createElement("div");
Cf.id = "gotaan";
document.body.appendChild(Cf);
Bd(document.getElementById("gotaan")).render(
  g.jsx(ye.StrictMode, { children: g.jsx(A1, {}) })
);
