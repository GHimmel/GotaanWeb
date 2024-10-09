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
function hf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Sa = { exports: {} },
  $o = {},
  ka = { exports: {} },
  A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jr = Symbol.for("react.element"),
  gf = Symbol.for("react.portal"),
  yf = Symbol.for("react.fragment"),
  vf = Symbol.for("react.strict_mode"),
  wf = Symbol.for("react.profiler"),
  xf = Symbol.for("react.provider"),
  Sf = Symbol.for("react.context"),
  kf = Symbol.for("react.forward_ref"),
  Ef = Symbol.for("react.suspense"),
  Cf = Symbol.for("react.memo"),
  Nf = Symbol.for("react.lazy"),
  Hs = Symbol.iterator;
function jf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Hs && e[Hs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ea = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ca = Object.assign,
  Na = {};
function Pn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Na),
    (this.updater = n || Ea);
}
Pn.prototype.isReactComponent = {};
Pn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Pn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ja() {}
ja.prototype = Pn.prototype;
function $i(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Na),
    (this.updater = n || Ea);
}
var Hi = ($i.prototype = new ja());
Hi.constructor = $i;
Ca(Hi, Pn.prototype);
Hi.isPureReactComponent = !0;
var Vs = Array.isArray,
  _a = Object.prototype.hasOwnProperty,
  Vi = { current: null },
  Ra = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ta(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      _a.call(t, r) && !Ra.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: jr,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Vi.current,
  };
}
function _f(e, t) {
  return {
    $$typeof: jr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Wi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === jr;
}
function Rf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ws = /\/+/g;
function dl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Rf("" + e.key)
    : t.toString(36);
}
function Zr(e, t, n, r, o) {
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
          case jr:
          case gf:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + dl(i, 0) : r),
      Vs(o)
        ? ((n = ""),
          e != null && (n = e.replace(Ws, "$&/") + "/"),
          Zr(o, t, n, "", function (a) {
            return a;
          }))
        : o != null &&
          (Wi(o) &&
            (o = _f(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Ws, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Vs(e)))
    for (var s = 0; s < e.length; s++) {
      l = e[s];
      var u = r + dl(l, s);
      i += Zr(l, t, n, u, o);
    }
  else if (((u = jf(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(l = e.next()).done; )
      (l = l.value), (u = r + dl(l, s++)), (i += Zr(l, t, n, u, o));
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
function Mr(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Zr(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function Tf(e) {
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
  eo = { transition: null },
  Pf = {
    ReactCurrentDispatcher: me,
    ReactCurrentBatchConfig: eo,
    ReactCurrentOwner: Vi,
  };
function Pa() {
  throw Error("act(...) is not supported in production builds of React.");
}
A.Children = {
  map: Mr,
  forEach: function (e, t, n) {
    Mr(
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
      Mr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Mr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Wi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
A.Component = Pn;
A.Fragment = yf;
A.Profiler = wf;
A.PureComponent = $i;
A.StrictMode = vf;
A.Suspense = Ef;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pf;
A.act = Pa;
A.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ca({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = Vi.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      _a.call(t, u) &&
        !Ra.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: jr, type: e.type, key: o, ref: l, props: r, _owner: i };
};
A.createContext = function (e) {
  return (
    (e = {
      $$typeof: Sf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: xf, _context: e }),
    (e.Consumer = e)
  );
};
A.createElement = Ta;
A.createFactory = function (e) {
  var t = Ta.bind(null, e);
  return (t.type = e), t;
};
A.createRef = function () {
  return { current: null };
};
A.forwardRef = function (e) {
  return { $$typeof: kf, render: e };
};
A.isValidElement = Wi;
A.lazy = function (e) {
  return { $$typeof: Nf, _payload: { _status: -1, _result: e }, _init: Tf };
};
A.memo = function (e, t) {
  return { $$typeof: Cf, type: e, compare: t === void 0 ? null : t };
};
A.startTransition = function (e) {
  var t = eo.transition;
  eo.transition = {};
  try {
    e();
  } finally {
    eo.transition = t;
  }
};
A.unstable_act = Pa;
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
ka.exports = A;
var Ue = ka.exports;
const Qs = hf(Ue);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Of = Ue,
  zf = Symbol.for("react.element"),
  Lf = Symbol.for("react.fragment"),
  bf = Object.prototype.hasOwnProperty,
  Af = Of.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Mf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Oa(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) bf.call(t, r) && !Mf.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: zf,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Af.current,
  };
}
$o.Fragment = Lf;
$o.jsx = Oa;
$o.jsxs = Oa;
Sa.exports = $o;
var w = Sa.exports,
  za = { exports: {} },
  Re = {},
  La = { exports: {} },
  ba = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, P) {
    var z = _.length;
    _.push(P);
    e: for (; 0 < z; ) {
      var I = (z - 1) >>> 1,
        te = _[I];
      if (0 < o(te, P)) (_[I] = P), (_[z] = te), (z = I);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var P = _[0],
      z = _.pop();
    if (z !== P) {
      _[0] = z;
      e: for (var I = 0, te = _.length, br = te >>> 1; I < br; ) {
        var bt = 2 * (I + 1) - 1,
          cl = _[bt],
          At = bt + 1,
          Ar = _[At];
        if (0 > o(cl, z))
          At < te && 0 > o(Ar, cl)
            ? ((_[I] = Ar), (_[At] = z), (I = At))
            : ((_[I] = cl), (_[bt] = z), (I = bt));
        else if (At < te && 0 > o(Ar, z)) (_[I] = Ar), (_[At] = z), (I = At);
        else break e;
      }
    }
    return P;
  }
  function o(_, P) {
    var z = _.sortIndex - P.sortIndex;
    return z !== 0 ? z : _.id - P.id;
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
    m = null,
    h = 3,
    S = !1,
    g = !1,
    v = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(_) {
    for (var P = n(a); P !== null; ) {
      if (P.callback === null) r(a);
      else if (P.startTime <= _)
        r(a), (P.sortIndex = P.expirationTime), t(u, P);
      else break;
      P = n(a);
    }
  }
  function x(_) {
    if (((v = !1), p(_), !g))
      if (n(u) !== null) (g = !0), ut(C);
      else {
        var P = n(a);
        P !== null && en(x, P.startTime - _);
      }
  }
  function C(_, P) {
    (g = !1), v && ((v = !1), f(T), (T = -1)), (S = !0);
    var z = h;
    try {
      for (
        p(P), m = n(u);
        m !== null && (!(m.expirationTime > P) || (_ && !de()));

      ) {
        var I = m.callback;
        if (typeof I == "function") {
          (m.callback = null), (h = m.priorityLevel);
          var te = I(m.expirationTime <= P);
          (P = e.unstable_now()),
            typeof te == "function" ? (m.callback = te) : m === n(u) && r(u),
            p(P);
        } else r(u);
        m = n(u);
      }
      if (m !== null) var br = !0;
      else {
        var bt = n(a);
        bt !== null && en(x, bt.startTime - P), (br = !1);
      }
      return br;
    } finally {
      (m = null), (h = z), (S = !1);
    }
  }
  var N = !1,
    j = null,
    T = -1,
    U = 5,
    b = -1;
  function de() {
    return !(e.unstable_now() - b < U);
  }
  function F() {
    if (j !== null) {
      var _ = e.unstable_now();
      b = _;
      var P = !0;
      try {
        P = j(!0, _);
      } finally {
        P ? st() : ((N = !1), (j = null));
      }
    } else N = !1;
  }
  var st;
  if (typeof c == "function")
    st = function () {
      c(F);
    };
  else if (typeof MessageChannel < "u") {
    var Lt = new MessageChannel(),
      Lr = Lt.port2;
    (Lt.port1.onmessage = F),
      (st = function () {
        Lr.postMessage(null);
      });
  } else
    st = function () {
      k(F, 0);
    };
  function ut(_) {
    (j = _), N || ((N = !0), st());
  }
  function en(_, P) {
    T = k(function () {
      _(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || S || ((g = !0), ut(C));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (U = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (_) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = h;
      }
      var z = h;
      h = P;
      try {
        return _();
      } finally {
        h = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, P) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var z = h;
      h = _;
      try {
        return P();
      } finally {
        h = z;
      }
    }),
    (e.unstable_scheduleCallback = function (_, P, z) {
      var I = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? I + z : I))
          : (z = I),
        _)
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
        (te = z + te),
        (_ = {
          id: d++,
          callback: P,
          priorityLevel: _,
          startTime: z,
          expirationTime: te,
          sortIndex: -1,
        }),
        z > I
          ? ((_.sortIndex = z),
            t(a, _),
            n(u) === null &&
              _ === n(a) &&
              (v ? (f(T), (T = -1)) : (v = !0), en(x, z - I)))
          : ((_.sortIndex = te), t(u, _), g || S || ((g = !0), ut(C))),
        _
      );
    }),
    (e.unstable_shouldYield = de),
    (e.unstable_wrapCallback = function (_) {
      var P = h;
      return function () {
        var z = h;
        h = P;
        try {
          return _.apply(this, arguments);
        } finally {
          h = z;
        }
      };
    });
})(ba);
La.exports = ba;
var If = La.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ff = Ue,
  _e = If;
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
var Aa = new Set(),
  ur = {};
function Yt(e, t) {
  En(e, t), En(e + "Capture", t);
}
function En(e, t) {
  for (ur[e] = t, e = 0; e < t.length; e++) Aa.add(t[e]);
}
var nt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  $l = Object.prototype.hasOwnProperty,
  Df =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ks = {},
  Gs = {};
function Uf(e) {
  return $l.call(Gs, e)
    ? !0
    : $l.call(Ks, e)
    ? !1
    : Df.test(e)
    ? (Gs[e] = !0)
    : ((Ks[e] = !0), !1);
}
function Bf(e, t, n, r) {
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
function $f(e, t, n, r) {
  if (t === null || typeof t > "u" || Bf(e, t, n, r)) return !0;
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
var Qi = /[\-:]([a-z])/g;
function Ki(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Qi, Ki);
    ie[t] = new he(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Qi, Ki);
    ie[t] = new he(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Qi, Ki);
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
function Gi(e, t, n, r) {
  var o = ie.hasOwnProperty(t) ? ie[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    ($f(t, n, o, r) && (n = null),
    r || o === null
      ? Uf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var it = Ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ir = Symbol.for("react.element"),
  nn = Symbol.for("react.portal"),
  rn = Symbol.for("react.fragment"),
  Xi = Symbol.for("react.strict_mode"),
  Hl = Symbol.for("react.profiler"),
  Ma = Symbol.for("react.provider"),
  Ia = Symbol.for("react.context"),
  qi = Symbol.for("react.forward_ref"),
  Vl = Symbol.for("react.suspense"),
  Wl = Symbol.for("react.suspense_list"),
  Ji = Symbol.for("react.memo"),
  pt = Symbol.for("react.lazy"),
  Fa = Symbol.for("react.offscreen"),
  Xs = Symbol.iterator;
function Mn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Xs && e[Xs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var G = Object.assign,
  fl;
function Kn(e) {
  if (fl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      fl = (t && t[1]) || "";
    }
  return (
    `
` +
    fl +
    e
  );
}
var pl = !1;
function ml(e, t) {
  if (!e || pl) return "";
  pl = !0;
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
    (pl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Kn(e) : "";
}
function Hf(e) {
  switch (e.tag) {
    case 5:
      return Kn(e.type);
    case 16:
      return Kn("Lazy");
    case 13:
      return Kn("Suspense");
    case 19:
      return Kn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ml(e.type, !1)), e;
    case 11:
      return (e = ml(e.type.render, !1)), e;
    case 1:
      return (e = ml(e.type, !0)), e;
    default:
      return "";
  }
}
function Ql(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case rn:
      return "Fragment";
    case nn:
      return "Portal";
    case Hl:
      return "Profiler";
    case Xi:
      return "StrictMode";
    case Vl:
      return "Suspense";
    case Wl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ia:
        return (e.displayName || "Context") + ".Consumer";
      case Ma:
        return (e._context.displayName || "Context") + ".Provider";
      case qi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ji:
        return (
          (t = e.displayName || null), t !== null ? t : Ql(e.type) || "Memo"
        );
      case pt:
        (t = e._payload), (e = e._init);
        try {
          return Ql(e(t));
        } catch {}
    }
  return null;
}
function Vf(e) {
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
      return Ql(t);
    case 8:
      return t === Xi ? "StrictMode" : "Mode";
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
function Rt(e) {
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
function Da(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Wf(e) {
  var t = Da(e) ? "checked" : "value",
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
function Fr(e) {
  e._valueTracker || (e._valueTracker = Wf(e));
}
function Ua(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Da(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function mo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Kl(e, t) {
  var n = t.checked;
  return G({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function qs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Rt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ba(e, t) {
  (t = t.checked), t != null && Gi(e, "checked", t, !1);
}
function Gl(e, t) {
  Ba(e, t);
  var n = Rt(t.value),
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
    ? Xl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Xl(e, t.type, Rt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Js(e, t, n) {
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
function Xl(e, t, n) {
  (t !== "number" || mo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Gn = Array.isArray;
function gn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Rt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ql(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return G({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ys(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (Gn(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Rt(n) };
}
function $a(e, t) {
  var n = Rt(t.value),
    r = Rt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Zs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ha(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Jl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ha(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Dr,
  Va = (function (e) {
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
        Dr = Dr || document.createElement("div"),
          Dr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Dr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ar(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Jn = {
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
  Qf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Jn).forEach(function (e) {
  Qf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Jn[t] = Jn[e]);
  });
});
function Wa(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Jn.hasOwnProperty(e) && Jn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Qa(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Wa(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Kf = G(
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
function Yl(e, t) {
  if (t) {
    if (Kf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Zl(e, t) {
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
var ei = null;
function Yi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ti = null,
  yn = null,
  vn = null;
function eu(e) {
  if ((e = Tr(e))) {
    if (typeof ti != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = Ko(t)), ti(e.stateNode, e.type, t));
  }
}
function Ka(e) {
  yn ? (vn ? vn.push(e) : (vn = [e])) : (yn = e);
}
function Ga() {
  if (yn) {
    var e = yn,
      t = vn;
    if (((vn = yn = null), eu(e), t)) for (e = 0; e < t.length; e++) eu(t[e]);
  }
}
function Xa(e, t) {
  return e(t);
}
function qa() {}
var hl = !1;
function Ja(e, t, n) {
  if (hl) return e(t, n);
  hl = !0;
  try {
    return Xa(e, t, n);
  } finally {
    (hl = !1), (yn !== null || vn !== null) && (qa(), Ga());
  }
}
function cr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ko(n);
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
var ni = !1;
if (nt)
  try {
    var In = {};
    Object.defineProperty(In, "passive", {
      get: function () {
        ni = !0;
      },
    }),
      window.addEventListener("test", In, In),
      window.removeEventListener("test", In, In);
  } catch {
    ni = !1;
  }
function Gf(e, t, n, r, o, l, i, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (d) {
    this.onError(d);
  }
}
var Yn = !1,
  ho = null,
  go = !1,
  ri = null,
  Xf = {
    onError: function (e) {
      (Yn = !0), (ho = e);
    },
  };
function qf(e, t, n, r, o, l, i, s, u) {
  (Yn = !1), (ho = null), Gf.apply(Xf, arguments);
}
function Jf(e, t, n, r, o, l, i, s, u) {
  if ((qf.apply(this, arguments), Yn)) {
    if (Yn) {
      var a = ho;
      (Yn = !1), (ho = null);
    } else throw Error(E(198));
    go || ((go = !0), (ri = a));
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
function Ya(e) {
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
function tu(e) {
  if (Zt(e) !== e) throw Error(E(188));
}
function Yf(e) {
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
        if (l === n) return tu(o), e;
        if (l === r) return tu(o), t;
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
function Za(e) {
  return (e = Yf(e)), e !== null ? ec(e) : null;
}
function ec(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ec(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var tc = _e.unstable_scheduleCallback,
  nu = _e.unstable_cancelCallback,
  Zf = _e.unstable_shouldYield,
  ep = _e.unstable_requestPaint,
  q = _e.unstable_now,
  tp = _e.unstable_getCurrentPriorityLevel,
  Zi = _e.unstable_ImmediatePriority,
  nc = _e.unstable_UserBlockingPriority,
  yo = _e.unstable_NormalPriority,
  np = _e.unstable_LowPriority,
  rc = _e.unstable_IdlePriority,
  Ho = null,
  Ge = null;
function rp(e) {
  if (Ge && typeof Ge.onCommitFiberRoot == "function")
    try {
      Ge.onCommitFiberRoot(Ho, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Be = Math.clz32 ? Math.clz32 : ip,
  op = Math.log,
  lp = Math.LN2;
function ip(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((op(e) / lp) | 0)) | 0;
}
var Ur = 64,
  Br = 4194304;
function Xn(e) {
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
function vo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~o;
    s !== 0 ? (r = Xn(s)) : ((l &= i), l !== 0 && (r = Xn(l)));
  } else (i = n & ~o), i !== 0 ? (r = Xn(i)) : l !== 0 && (r = Xn(l));
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
function sp(e, t) {
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
function up(e, t) {
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
      ? (!(s & n) || s & r) && (o[i] = sp(s, t))
      : u <= t && (e.expiredLanes |= s),
      (l &= ~s);
  }
}
function oi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function oc() {
  var e = Ur;
  return (Ur <<= 1), !(Ur & 4194240) && (Ur = 64), e;
}
function gl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function _r(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Be(t)),
    (e[t] = n);
}
function ap(e, t) {
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
function es(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Be(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var D = 0;
function lc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ic,
  ts,
  sc,
  uc,
  ac,
  li = !1,
  $r = [],
  xt = null,
  St = null,
  kt = null,
  dr = new Map(),
  fr = new Map(),
  ht = [],
  cp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ru(e, t) {
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
      dr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      fr.delete(t.pointerId);
  }
}
function Fn(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = Tr(t)), t !== null && ts(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function dp(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (xt = Fn(xt, e, t, n, r, o)), !0;
    case "dragenter":
      return (St = Fn(St, e, t, n, r, o)), !0;
    case "mouseover":
      return (kt = Fn(kt, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return dr.set(l, Fn(dr.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), fr.set(l, Fn(fr.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function cc(e) {
  var t = Ft(e.target);
  if (t !== null) {
    var n = Zt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ya(n)), t !== null)) {
          (e.blockedOn = t),
            ac(e.priority, function () {
              sc(n);
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
function to(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ii(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ei = r), n.target.dispatchEvent(r), (ei = null);
    } else return (t = Tr(n)), t !== null && ts(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ou(e, t, n) {
  to(e) && n.delete(t);
}
function fp() {
  (li = !1),
    xt !== null && to(xt) && (xt = null),
    St !== null && to(St) && (St = null),
    kt !== null && to(kt) && (kt = null),
    dr.forEach(ou),
    fr.forEach(ou);
}
function Dn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    li ||
      ((li = !0),
      _e.unstable_scheduleCallback(_e.unstable_NormalPriority, fp)));
}
function pr(e) {
  function t(o) {
    return Dn(o, e);
  }
  if (0 < $r.length) {
    Dn($r[0], e);
    for (var n = 1; n < $r.length; n++) {
      var r = $r[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    xt !== null && Dn(xt, e),
      St !== null && Dn(St, e),
      kt !== null && Dn(kt, e),
      dr.forEach(t),
      fr.forEach(t),
      n = 0;
    n < ht.length;
    n++
  )
    (r = ht[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ht.length && ((n = ht[0]), n.blockedOn === null); )
    cc(n), n.blockedOn === null && ht.shift();
}
var wn = it.ReactCurrentBatchConfig,
  wo = !0;
function pp(e, t, n, r) {
  var o = D,
    l = wn.transition;
  wn.transition = null;
  try {
    (D = 1), ns(e, t, n, r);
  } finally {
    (D = o), (wn.transition = l);
  }
}
function mp(e, t, n, r) {
  var o = D,
    l = wn.transition;
  wn.transition = null;
  try {
    (D = 4), ns(e, t, n, r);
  } finally {
    (D = o), (wn.transition = l);
  }
}
function ns(e, t, n, r) {
  if (wo) {
    var o = ii(e, t, n, r);
    if (o === null) jl(e, t, r, xo, n), ru(e, r);
    else if (dp(o, e, t, n, r)) r.stopPropagation();
    else if ((ru(e, r), t & 4 && -1 < cp.indexOf(e))) {
      for (; o !== null; ) {
        var l = Tr(o);
        if (
          (l !== null && ic(l),
          (l = ii(e, t, n, r)),
          l === null && jl(e, t, r, xo, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else jl(e, t, r, null, n);
  }
}
var xo = null;
function ii(e, t, n, r) {
  if (((xo = null), (e = Yi(r)), (e = Ft(e)), e !== null))
    if (((t = Zt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ya(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (xo = e), null;
}
function dc(e) {
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
      switch (tp()) {
        case Zi:
          return 1;
        case nc:
          return 4;
        case yo:
        case np:
          return 16;
        case rc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var vt = null,
  rs = null,
  no = null;
function fc() {
  if (no) return no;
  var e,
    t = rs,
    n = t.length,
    r,
    o = "value" in vt ? vt.value : vt.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (no = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ro(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Hr() {
  return !0;
}
function lu() {
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
        ? Hr
        : lu),
      (this.isPropagationStopped = lu),
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
          (this.isDefaultPrevented = Hr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Hr));
      },
      persist: function () {},
      isPersistent: Hr,
    }),
    t
  );
}
var On = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  os = Te(On),
  Rr = G({}, On, { view: 0, detail: 0 }),
  hp = Te(Rr),
  yl,
  vl,
  Un,
  Vo = G({}, Rr, {
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
    getModifierState: ls,
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
        : (e !== Un &&
            (Un && e.type === "mousemove"
              ? ((yl = e.screenX - Un.screenX), (vl = e.screenY - Un.screenY))
              : (vl = yl = 0),
            (Un = e)),
          yl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : vl;
    },
  }),
  iu = Te(Vo),
  gp = G({}, Vo, { dataTransfer: 0 }),
  yp = Te(gp),
  vp = G({}, Rr, { relatedTarget: 0 }),
  wl = Te(vp),
  wp = G({}, On, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xp = Te(wp),
  Sp = G({}, On, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  kp = Te(Sp),
  Ep = G({}, On, { data: 0 }),
  su = Te(Ep),
  Cp = {
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
  Np = {
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
  jp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function _p(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = jp[e]) ? !!t[e] : !1;
}
function ls() {
  return _p;
}
var Rp = G({}, Rr, {
    key: function (e) {
      if (e.key) {
        var t = Cp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ro(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Np[e.keyCode] || "Unidentified"
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
    getModifierState: ls,
    charCode: function (e) {
      return e.type === "keypress" ? ro(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ro(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Tp = Te(Rp),
  Pp = G({}, Vo, {
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
  uu = Te(Pp),
  Op = G({}, Rr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ls,
  }),
  zp = Te(Op),
  Lp = G({}, On, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bp = Te(Lp),
  Ap = G({}, Vo, {
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
  Mp = Te(Ap),
  Ip = [9, 13, 27, 32],
  is = nt && "CompositionEvent" in window,
  Zn = null;
nt && "documentMode" in document && (Zn = document.documentMode);
var Fp = nt && "TextEvent" in window && !Zn,
  pc = nt && (!is || (Zn && 8 < Zn && 11 >= Zn)),
  au = " ",
  cu = !1;
function mc(e, t) {
  switch (e) {
    case "keyup":
      return Ip.indexOf(t.keyCode) !== -1;
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
function hc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var on = !1;
function Dp(e, t) {
  switch (e) {
    case "compositionend":
      return hc(t);
    case "keypress":
      return t.which !== 32 ? null : ((cu = !0), au);
    case "textInput":
      return (e = t.data), e === au && cu ? null : e;
    default:
      return null;
  }
}
function Up(e, t) {
  if (on)
    return e === "compositionend" || (!is && mc(e, t))
      ? ((e = fc()), (no = rs = vt = null), (on = !1), e)
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
      return pc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Bp = {
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
function du(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Bp[e.type] : t === "textarea";
}
function gc(e, t, n, r) {
  Ka(r),
    (t = So(t, "onChange")),
    0 < t.length &&
      ((n = new os("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var er = null,
  mr = null;
function $p(e) {
  _c(e, 0);
}
function Wo(e) {
  var t = un(e);
  if (Ua(t)) return e;
}
function Hp(e, t) {
  if (e === "change") return t;
}
var yc = !1;
if (nt) {
  var xl;
  if (nt) {
    var Sl = "oninput" in document;
    if (!Sl) {
      var fu = document.createElement("div");
      fu.setAttribute("oninput", "return;"),
        (Sl = typeof fu.oninput == "function");
    }
    xl = Sl;
  } else xl = !1;
  yc = xl && (!document.documentMode || 9 < document.documentMode);
}
function pu() {
  er && (er.detachEvent("onpropertychange", vc), (mr = er = null));
}
function vc(e) {
  if (e.propertyName === "value" && Wo(mr)) {
    var t = [];
    gc(t, mr, e, Yi(e)), Ja($p, t);
  }
}
function Vp(e, t, n) {
  e === "focusin"
    ? (pu(), (er = t), (mr = n), er.attachEvent("onpropertychange", vc))
    : e === "focusout" && pu();
}
function Wp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Wo(mr);
}
function Qp(e, t) {
  if (e === "click") return Wo(t);
}
function Kp(e, t) {
  if (e === "input" || e === "change") return Wo(t);
}
function Gp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var He = typeof Object.is == "function" ? Object.is : Gp;
function hr(e, t) {
  if (He(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!$l.call(t, o) || !He(e[o], t[o])) return !1;
  }
  return !0;
}
function mu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function hu(e, t) {
  var n = mu(e);
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
    n = mu(n);
  }
}
function wc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? wc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function xc() {
  for (var e = window, t = mo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = mo(e.document);
  }
  return t;
}
function ss(e) {
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
function Xp(e) {
  var t = xc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    wc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ss(n)) {
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
          (o = hu(n, l));
        var i = hu(n, r);
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
var qp = nt && "documentMode" in document && 11 >= document.documentMode,
  ln = null,
  si = null,
  tr = null,
  ui = !1;
function gu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ui ||
    ln == null ||
    ln !== mo(r) ||
    ((r = ln),
    "selectionStart" in r && ss(r)
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
    (tr && hr(tr, r)) ||
      ((tr = r),
      (r = So(si, "onSelect")),
      0 < r.length &&
        ((t = new os("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ln))));
}
function Vr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var sn = {
    animationend: Vr("Animation", "AnimationEnd"),
    animationiteration: Vr("Animation", "AnimationIteration"),
    animationstart: Vr("Animation", "AnimationStart"),
    transitionend: Vr("Transition", "TransitionEnd"),
  },
  kl = {},
  Sc = {};
nt &&
  ((Sc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete sn.animationend.animation,
    delete sn.animationiteration.animation,
    delete sn.animationstart.animation),
  "TransitionEvent" in window || delete sn.transitionend.transition);
function Qo(e) {
  if (kl[e]) return kl[e];
  if (!sn[e]) return e;
  var t = sn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Sc) return (kl[e] = t[n]);
  return e;
}
var kc = Qo("animationend"),
  Ec = Qo("animationiteration"),
  Cc = Qo("animationstart"),
  Nc = Qo("transitionend"),
  jc = new Map(),
  yu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Pt(e, t) {
  jc.set(e, t), Yt(t, [e]);
}
for (var El = 0; El < yu.length; El++) {
  var Cl = yu[El],
    Jp = Cl.toLowerCase(),
    Yp = Cl[0].toUpperCase() + Cl.slice(1);
  Pt(Jp, "on" + Yp);
}
Pt(kc, "onAnimationEnd");
Pt(Ec, "onAnimationIteration");
Pt(Cc, "onAnimationStart");
Pt("dblclick", "onDoubleClick");
Pt("focusin", "onFocus");
Pt("focusout", "onBlur");
Pt(Nc, "onTransitionEnd");
En("onMouseEnter", ["mouseout", "mouseover"]);
En("onMouseLeave", ["mouseout", "mouseover"]);
En("onPointerEnter", ["pointerout", "pointerover"]);
En("onPointerLeave", ["pointerout", "pointerover"]);
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
var qn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Zp = new Set("cancel close invalid load scroll toggle".split(" ").concat(qn));
function vu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Jf(r, t, void 0, e), (e.currentTarget = null);
}
function _c(e, t) {
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
          vu(o, s, a), (l = u);
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
          vu(o, s, a), (l = u);
        }
    }
  }
  if (go) throw ((e = ri), (go = !1), (ri = null), e);
}
function H(e, t) {
  var n = t[pi];
  n === void 0 && (n = t[pi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Rc(t, e, 2, !1), n.add(r));
}
function Nl(e, t, n) {
  var r = 0;
  t && (r |= 4), Rc(n, e, r, t);
}
var Wr = "_reactListening" + Math.random().toString(36).slice(2);
function gr(e) {
  if (!e[Wr]) {
    (e[Wr] = !0),
      Aa.forEach(function (n) {
        n !== "selectionchange" && (Zp.has(n) || Nl(n, !1, e), Nl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Wr] || ((t[Wr] = !0), Nl("selectionchange", !1, t));
  }
}
function Rc(e, t, n, r) {
  switch (dc(t)) {
    case 1:
      var o = pp;
      break;
    case 4:
      o = mp;
      break;
    default:
      o = ns;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !ni ||
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
function jl(e, t, n, r, o) {
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
  Ja(function () {
    var a = l,
      d = Yi(n),
      m = [];
    e: {
      var h = jc.get(e);
      if (h !== void 0) {
        var S = os,
          g = e;
        switch (e) {
          case "keypress":
            if (ro(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = Tp;
            break;
          case "focusin":
            (g = "focus"), (S = wl);
            break;
          case "focusout":
            (g = "blur"), (S = wl);
            break;
          case "beforeblur":
          case "afterblur":
            S = wl;
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
            S = iu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = yp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = zp;
            break;
          case kc:
          case Ec:
          case Cc:
            S = xp;
            break;
          case Nc:
            S = bp;
            break;
          case "scroll":
            S = hp;
            break;
          case "wheel":
            S = Mp;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = kp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = uu;
        }
        var v = (t & 4) !== 0,
          k = !v && e === "scroll",
          f = v ? (h !== null ? h + "Capture" : null) : h;
        v = [];
        for (var c = a, p; c !== null; ) {
          p = c;
          var x = p.stateNode;
          if (
            (p.tag === 5 &&
              x !== null &&
              ((p = x),
              f !== null && ((x = cr(c, f)), x != null && v.push(yr(c, x, p)))),
            k)
          )
            break;
          c = c.return;
        }
        0 < v.length &&
          ((h = new S(h, g, null, n, d)), m.push({ event: h, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          h &&
            n !== ei &&
            (g = n.relatedTarget || n.fromElement) &&
            (Ft(g) || g[rt]))
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
            ? ((g = n.relatedTarget || n.toElement),
              (S = a),
              (g = g ? Ft(g) : null),
              g !== null &&
                ((k = Zt(g)), g !== k || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((S = null), (g = a)),
          S !== g)
        ) {
          if (
            ((v = iu),
            (x = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = uu),
              (x = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (k = S == null ? h : un(S)),
            (p = g == null ? h : un(g)),
            (h = new v(x, c + "leave", S, n, d)),
            (h.target = k),
            (h.relatedTarget = p),
            (x = null),
            Ft(d) === a &&
              ((v = new v(f, c + "enter", g, n, d)),
              (v.target = p),
              (v.relatedTarget = k),
              (x = v)),
            (k = x),
            S && g)
          )
            t: {
              for (v = S, f = g, c = 0, p = v; p; p = tn(p)) c++;
              for (p = 0, x = f; x; x = tn(x)) p++;
              for (; 0 < c - p; ) (v = tn(v)), c--;
              for (; 0 < p - c; ) (f = tn(f)), p--;
              for (; c--; ) {
                if (v === f || (f !== null && v === f.alternate)) break t;
                (v = tn(v)), (f = tn(f));
              }
              v = null;
            }
          else v = null;
          S !== null && wu(m, h, S, v, !1),
            g !== null && k !== null && wu(m, k, g, v, !0);
        }
      }
      e: {
        if (
          ((h = a ? un(a) : window),
          (S = h.nodeName && h.nodeName.toLowerCase()),
          S === "select" || (S === "input" && h.type === "file"))
        )
          var C = Hp;
        else if (du(h))
          if (yc) C = Kp;
          else {
            C = Wp;
            var N = Vp;
          }
        else
          (S = h.nodeName) &&
            S.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (C = Qp);
        if (C && (C = C(e, a))) {
          gc(m, C, n, d);
          break e;
        }
        N && N(e, h, a),
          e === "focusout" &&
            (N = h._wrapperState) &&
            N.controlled &&
            h.type === "number" &&
            Xl(h, "number", h.value);
      }
      switch (((N = a ? un(a) : window), e)) {
        case "focusin":
          (du(N) || N.contentEditable === "true") &&
            ((ln = N), (si = a), (tr = null));
          break;
        case "focusout":
          tr = si = ln = null;
          break;
        case "mousedown":
          ui = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ui = !1), gu(m, n, d);
          break;
        case "selectionchange":
          if (qp) break;
        case "keydown":
        case "keyup":
          gu(m, n, d);
      }
      var j;
      if (is)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        on
          ? mc(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (pc &&
          n.locale !== "ko" &&
          (on || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && on && (j = fc())
            : ((vt = d),
              (rs = "value" in vt ? vt.value : vt.textContent),
              (on = !0))),
        (N = So(a, T)),
        0 < N.length &&
          ((T = new su(T, e, null, n, d)),
          m.push({ event: T, listeners: N }),
          j ? (T.data = j) : ((j = hc(n)), j !== null && (T.data = j)))),
        (j = Fp ? Dp(e, n) : Up(e, n)) &&
          ((a = So(a, "onBeforeInput")),
          0 < a.length &&
            ((d = new su("onBeforeInput", "beforeinput", null, n, d)),
            m.push({ event: d, listeners: a }),
            (d.data = j)));
    }
    _c(m, t);
  });
}
function yr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function So(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = cr(e, n)),
      l != null && r.unshift(yr(e, l, o)),
      (l = cr(e, t)),
      l != null && r.push(yr(e, l, o))),
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
function wu(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      o
        ? ((u = cr(n, l)), u != null && i.unshift(yr(n, u, s)))
        : o || ((u = cr(n, l)), u != null && i.push(yr(n, u, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var em = /\r\n?/g,
  tm = /\u0000|\uFFFD/g;
function xu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      em,
      `
`
    )
    .replace(tm, "");
}
function Qr(e, t, n) {
  if (((t = xu(t)), xu(e) !== t && n)) throw Error(E(425));
}
function ko() {}
var ai = null,
  ci = null;
function di(e, t) {
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
var fi = typeof setTimeout == "function" ? setTimeout : void 0,
  nm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Su = typeof Promise == "function" ? Promise : void 0,
  rm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Su < "u"
      ? function (e) {
          return Su.resolve(null).then(e).catch(om);
        }
      : fi;
function om(e) {
  setTimeout(function () {
    throw e;
  });
}
function _l(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), pr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  pr(t);
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
function ku(e) {
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
  vr = "__reactProps$" + zn,
  rt = "__reactContainer$" + zn,
  pi = "__reactEvents$" + zn,
  lm = "__reactListeners$" + zn,
  im = "__reactHandles$" + zn;
function Ft(e) {
  var t = e[Ke];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[rt] || n[Ke])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ku(e); e !== null; ) {
          if ((n = e[Ke])) return n;
          e = ku(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Tr(e) {
  return (
    (e = e[Ke] || e[rt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function un(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function Ko(e) {
  return e[vr] || null;
}
var mi = [],
  an = -1;
function Ot(e) {
  return { current: e };
}
function V(e) {
  0 > an || ((e.current = mi[an]), (mi[an] = null), an--);
}
function B(e, t) {
  an++, (mi[an] = e.current), (e.current = t);
}
var Tt = {},
  ce = Ot(Tt),
  ve = Ot(!1),
  Wt = Tt;
function Cn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Tt;
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
function we(e) {
  return (e = e.childContextTypes), e != null;
}
function Eo() {
  V(ve), V(ce);
}
function Eu(e, t, n) {
  if (ce.current !== Tt) throw Error(E(168));
  B(ce, t), B(ve, n);
}
function Tc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(E(108, Vf(e) || "Unknown", o));
  return G({}, n, r);
}
function Co(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Tt),
    (Wt = ce.current),
    B(ce, e),
    B(ve, ve.current),
    !0
  );
}
function Cu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = Tc(e, t, Wt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      V(ve),
      V(ce),
      B(ce, e))
    : V(ve),
    B(ve, n);
}
var Ye = null,
  Go = !1,
  Rl = !1;
function Pc(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
function sm(e) {
  (Go = !0), Pc(e);
}
function zt() {
  if (!Rl && Ye !== null) {
    Rl = !0;
    var e = 0,
      t = D;
    try {
      var n = Ye;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ye = null), (Go = !1);
    } catch (o) {
      throw (Ye !== null && (Ye = Ye.slice(e + 1)), tc(Zi, zt), o);
    } finally {
      (D = t), (Rl = !1);
    }
  }
  return null;
}
var cn = [],
  dn = 0,
  No = null,
  jo = 0,
  Pe = [],
  Oe = 0,
  Qt = null,
  Ze = 1,
  et = "";
function Mt(e, t) {
  (cn[dn++] = jo), (cn[dn++] = No), (No = e), (jo = t);
}
function Oc(e, t, n) {
  (Pe[Oe++] = Ze), (Pe[Oe++] = et), (Pe[Oe++] = Qt), (Qt = e);
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
function us(e) {
  e.return !== null && (Mt(e, 1), Oc(e, 1, 0));
}
function as(e) {
  for (; e === No; )
    (No = cn[--dn]), (cn[dn] = null), (jo = cn[--dn]), (cn[dn] = null);
  for (; e === Qt; )
    (Qt = Pe[--Oe]),
      (Pe[Oe] = null),
      (et = Pe[--Oe]),
      (Pe[Oe] = null),
      (Ze = Pe[--Oe]),
      (Pe[Oe] = null);
}
var Ne = null,
  Ce = null,
  W = !1,
  De = null;
function zc(e, t) {
  var n = ze(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Nu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ne = e), (Ce = Et(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ne = e), (Ce = null), !0) : !1
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
            (Ne = e),
            (Ce = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function hi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function gi(e) {
  if (W) {
    var t = Ce;
    if (t) {
      var n = t;
      if (!Nu(e, t)) {
        if (hi(e)) throw Error(E(418));
        t = Et(n.nextSibling);
        var r = Ne;
        t && Nu(e, t)
          ? zc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (Ne = e));
      }
    } else {
      if (hi(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (Ne = e);
    }
  }
}
function ju(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ne = e;
}
function Kr(e) {
  if (e !== Ne) return !1;
  if (!W) return ju(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !di(e.type, e.memoizedProps))),
    t && (t = Ce))
  ) {
    if (hi(e)) throw (Lc(), Error(E(418)));
    for (; t; ) zc(e, t), (t = Et(t.nextSibling));
  }
  if ((ju(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ce = Et(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ce = null;
    }
  } else Ce = Ne ? Et(e.stateNode.nextSibling) : null;
  return !0;
}
function Lc() {
  for (var e = Ce; e; ) e = Et(e.nextSibling);
}
function Nn() {
  (Ce = Ne = null), (W = !1);
}
function cs(e) {
  De === null ? (De = [e]) : De.push(e);
}
var um = it.ReactCurrentBatchConfig;
function Bn(e, t, n) {
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
function Gr(e, t) {
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
function _u(e) {
  var t = e._init;
  return t(e._payload);
}
function bc(e) {
  function t(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [c]), (f.flags |= 16)) : p.push(c);
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
    return (f = _t(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function l(f, c, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((f.flags |= 2), c) : p)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, c, p, x) {
    return c === null || c.tag !== 6
      ? ((c = Al(p, f.mode, x)), (c.return = f), c)
      : ((c = o(c, p)), (c.return = f), c);
  }
  function u(f, c, p, x) {
    var C = p.type;
    return C === rn
      ? d(f, c, p.props.children, x, p.key)
      : c !== null &&
        (c.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === pt &&
            _u(C) === c.type))
      ? ((x = o(c, p.props)), (x.ref = Bn(f, c, p)), (x.return = f), x)
      : ((x = co(p.type, p.key, p.props, null, f.mode, x)),
        (x.ref = Bn(f, c, p)),
        (x.return = f),
        x);
  }
  function a(f, c, p, x) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = Ml(p, f.mode, x)), (c.return = f), c)
      : ((c = o(c, p.children || [])), (c.return = f), c);
  }
  function d(f, c, p, x, C) {
    return c === null || c.tag !== 7
      ? ((c = Ht(p, f.mode, x, C)), (c.return = f), c)
      : ((c = o(c, p)), (c.return = f), c);
  }
  function m(f, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Al("" + c, f.mode, p)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Ir:
          return (
            (p = co(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = Bn(f, null, c)),
            (p.return = f),
            p
          );
        case nn:
          return (c = Ml(c, f.mode, p)), (c.return = f), c;
        case pt:
          var x = c._init;
          return m(f, x(c._payload), p);
      }
      if (Gn(c) || Mn(c))
        return (c = Ht(c, f.mode, p, null)), (c.return = f), c;
      Gr(f, c);
    }
    return null;
  }
  function h(f, c, p, x) {
    var C = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return C !== null ? null : s(f, c, "" + p, x);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ir:
          return p.key === C ? u(f, c, p, x) : null;
        case nn:
          return p.key === C ? a(f, c, p, x) : null;
        case pt:
          return (C = p._init), h(f, c, C(p._payload), x);
      }
      if (Gn(p) || Mn(p)) return C !== null ? null : d(f, c, p, x, null);
      Gr(f, p);
    }
    return null;
  }
  function S(f, c, p, x, C) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (f = f.get(p) || null), s(c, f, "" + x, C);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Ir:
          return (f = f.get(x.key === null ? p : x.key) || null), u(c, f, x, C);
        case nn:
          return (f = f.get(x.key === null ? p : x.key) || null), a(c, f, x, C);
        case pt:
          var N = x._init;
          return S(f, c, p, N(x._payload), C);
      }
      if (Gn(x) || Mn(x)) return (f = f.get(p) || null), d(c, f, x, C, null);
      Gr(c, x);
    }
    return null;
  }
  function g(f, c, p, x) {
    for (
      var C = null, N = null, j = c, T = (c = 0), U = null;
      j !== null && T < p.length;
      T++
    ) {
      j.index > T ? ((U = j), (j = null)) : (U = j.sibling);
      var b = h(f, j, p[T], x);
      if (b === null) {
        j === null && (j = U);
        break;
      }
      e && j && b.alternate === null && t(f, j),
        (c = l(b, c, T)),
        N === null ? (C = b) : (N.sibling = b),
        (N = b),
        (j = U);
    }
    if (T === p.length) return n(f, j), W && Mt(f, T), C;
    if (j === null) {
      for (; T < p.length; T++)
        (j = m(f, p[T], x)),
          j !== null &&
            ((c = l(j, c, T)), N === null ? (C = j) : (N.sibling = j), (N = j));
      return W && Mt(f, T), C;
    }
    for (j = r(f, j); T < p.length; T++)
      (U = S(j, f, T, p[T], x)),
        U !== null &&
          (e && U.alternate !== null && j.delete(U.key === null ? T : U.key),
          (c = l(U, c, T)),
          N === null ? (C = U) : (N.sibling = U),
          (N = U));
    return (
      e &&
        j.forEach(function (de) {
          return t(f, de);
        }),
      W && Mt(f, T),
      C
    );
  }
  function v(f, c, p, x) {
    var C = Mn(p);
    if (typeof C != "function") throw Error(E(150));
    if (((p = C.call(p)), p == null)) throw Error(E(151));
    for (
      var N = (C = null), j = c, T = (c = 0), U = null, b = p.next();
      j !== null && !b.done;
      T++, b = p.next()
    ) {
      j.index > T ? ((U = j), (j = null)) : (U = j.sibling);
      var de = h(f, j, b.value, x);
      if (de === null) {
        j === null && (j = U);
        break;
      }
      e && j && de.alternate === null && t(f, j),
        (c = l(de, c, T)),
        N === null ? (C = de) : (N.sibling = de),
        (N = de),
        (j = U);
    }
    if (b.done) return n(f, j), W && Mt(f, T), C;
    if (j === null) {
      for (; !b.done; T++, b = p.next())
        (b = m(f, b.value, x)),
          b !== null &&
            ((c = l(b, c, T)), N === null ? (C = b) : (N.sibling = b), (N = b));
      return W && Mt(f, T), C;
    }
    for (j = r(f, j); !b.done; T++, b = p.next())
      (b = S(j, f, T, b.value, x)),
        b !== null &&
          (e && b.alternate !== null && j.delete(b.key === null ? T : b.key),
          (c = l(b, c, T)),
          N === null ? (C = b) : (N.sibling = b),
          (N = b));
    return (
      e &&
        j.forEach(function (F) {
          return t(f, F);
        }),
      W && Mt(f, T),
      C
    );
  }
  function k(f, c, p, x) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === rn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case Ir:
          e: {
            for (var C = p.key, N = c; N !== null; ) {
              if (N.key === C) {
                if (((C = p.type), C === rn)) {
                  if (N.tag === 7) {
                    n(f, N.sibling),
                      (c = o(N, p.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  N.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === pt &&
                    _u(C) === N.type)
                ) {
                  n(f, N.sibling),
                    (c = o(N, p.props)),
                    (c.ref = Bn(f, N, p)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, N);
                break;
              } else t(f, N);
              N = N.sibling;
            }
            p.type === rn
              ? ((c = Ht(p.props.children, f.mode, x, p.key)),
                (c.return = f),
                (f = c))
              : ((x = co(p.type, p.key, p.props, null, f.mode, x)),
                (x.ref = Bn(f, c, p)),
                (x.return = f),
                (f = x));
          }
          return i(f);
        case nn:
          e: {
            for (N = p.key; c !== null; ) {
              if (c.key === N)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(f, c.sibling),
                    (c = o(c, p.children || [])),
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
            (c = Ml(p, f.mode, x)), (c.return = f), (f = c);
          }
          return i(f);
        case pt:
          return (N = p._init), k(f, c, N(p._payload), x);
      }
      if (Gn(p)) return g(f, c, p, x);
      if (Mn(p)) return v(f, c, p, x);
      Gr(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = o(c, p)), (c.return = f), (f = c))
          : (n(f, c), (c = Al(p, f.mode, x)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return k;
}
var jn = bc(!0),
  Ac = bc(!1),
  _o = Ot(null),
  Ro = null,
  fn = null,
  ds = null;
function fs() {
  ds = fn = Ro = null;
}
function ps(e) {
  var t = _o.current;
  V(_o), (e._currentValue = t);
}
function yi(e, t, n) {
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
function xn(e, t) {
  (Ro = e),
    (ds = fn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ye = !0), (e.firstContext = null));
}
function be(e) {
  var t = e._currentValue;
  if (ds !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), fn === null)) {
      if (Ro === null) throw Error(E(308));
      (fn = e), (Ro.dependencies = { lanes: 0, firstContext: e });
    } else fn = fn.next = e;
  return t;
}
var Dt = null;
function ms(e) {
  Dt === null ? (Dt = [e]) : Dt.push(e);
}
function Mc(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), ms(t)) : ((n.next = o.next), (o.next = n)),
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
function hs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ic(e, t) {
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
    o === null ? ((t.next = t), ms(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    ot(e, n)
  );
}
function oo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), es(e, n);
  }
}
function Ru(e, t) {
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
function To(e, t, n, r) {
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
    var m = o.baseState;
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
          var g = e,
            v = s;
          switch (((h = t), (S = n), v.tag)) {
            case 1:
              if (((g = v.payload), typeof g == "function")) {
                m = g.call(S, m, h);
                break e;
              }
              m = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = v.payload),
                (h = typeof g == "function" ? g.call(S, m, h) : g),
                h == null)
              )
                break e;
              m = G({}, m, h);
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
          d === null ? ((a = d = S), (u = m)) : (d = d.next = S),
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
      (d === null && (u = m),
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
    (Gt |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function Tu(e, t, n) {
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
var Pr = {},
  Xe = Ot(Pr),
  wr = Ot(Pr),
  xr = Ot(Pr);
function Ut(e) {
  if (e === Pr) throw Error(E(174));
  return e;
}
function gs(e, t) {
  switch ((B(xr, t), B(wr, e), B(Xe, Pr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Jl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Jl(t, e));
  }
  V(Xe), B(Xe, t);
}
function _n() {
  V(Xe), V(wr), V(xr);
}
function Fc(e) {
  Ut(xr.current);
  var t = Ut(Xe.current),
    n = Jl(t, e.type);
  t !== n && (B(wr, e), B(Xe, n));
}
function ys(e) {
  wr.current === e && (V(Xe), V(wr));
}
var Q = Ot(0);
function Po(e) {
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
var Tl = [];
function vs() {
  for (var e = 0; e < Tl.length; e++)
    Tl[e]._workInProgressVersionPrimary = null;
  Tl.length = 0;
}
var lo = it.ReactCurrentDispatcher,
  Pl = it.ReactCurrentBatchConfig,
  Kt = 0,
  K = null,
  Z = null,
  ne = null,
  Oo = !1,
  nr = !1,
  Sr = 0,
  am = 0;
function se() {
  throw Error(E(321));
}
function ws(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!He(e[n], t[n])) return !1;
  return !0;
}
function xs(e, t, n, r, o, l) {
  if (
    ((Kt = l),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (lo.current = e === null || e.memoizedState === null ? pm : mm),
    (e = n(r, o)),
    nr)
  ) {
    l = 0;
    do {
      if (((nr = !1), (Sr = 0), 25 <= l)) throw Error(E(301));
      (l += 1),
        (ne = Z = null),
        (t.updateQueue = null),
        (lo.current = hm),
        (e = n(r, o));
    } while (nr);
  }
  if (
    ((lo.current = zo),
    (t = Z !== null && Z.next !== null),
    (Kt = 0),
    (ne = Z = K = null),
    (Oo = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function Ss() {
  var e = Sr !== 0;
  return (Sr = 0), e;
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
function Ae() {
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
function kr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ol(e) {
  var t = Ae(),
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
        var m = {
          lane: d,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((s = u = m), (i = r)) : (u = u.next = m),
          (K.lanes |= d),
          (Gt |= d);
      }
      a = a.next;
    } while (a !== null && a !== l);
    u === null ? (i = r) : (u.next = s),
      He(r, t.memoizedState) || (ye = !0),
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
function zl(e) {
  var t = Ae(),
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
    He(l, t.memoizedState) || (ye = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Dc() {}
function Uc(e, t) {
  var n = K,
    r = Ae(),
    o = t(),
    l = !He(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (ye = !0)),
    (r = r.queue),
    ks(Hc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (ne !== null && ne.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Er(9, $c.bind(null, n, r, o, t), void 0, null),
      re === null)
    )
      throw Error(E(349));
    Kt & 30 || Bc(n, t, o);
  }
  return o;
}
function Bc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function $c(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Vc(t) && Wc(e);
}
function Hc(e, t, n) {
  return n(function () {
    Vc(t) && Wc(e);
  });
}
function Vc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !He(e, n);
  } catch {
    return !0;
  }
}
function Wc(e) {
  var t = ot(e, 1);
  t !== null && $e(t, e, 1, -1);
}
function Pu(e) {
  var t = Qe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: kr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = fm.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function Er(e, t, n, r) {
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
function Qc() {
  return Ae().memoizedState;
}
function io(e, t, n, r) {
  var o = Qe();
  (K.flags |= e),
    (o.memoizedState = Er(1 | t, n, void 0, r === void 0 ? null : r));
}
function Xo(e, t, n, r) {
  var o = Ae();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (Z !== null) {
    var i = Z.memoizedState;
    if (((l = i.destroy), r !== null && ws(r, i.deps))) {
      o.memoizedState = Er(t, n, l, r);
      return;
    }
  }
  (K.flags |= e), (o.memoizedState = Er(1 | t, n, l, r));
}
function Ou(e, t) {
  return io(8390656, 8, e, t);
}
function ks(e, t) {
  return Xo(2048, 8, e, t);
}
function Kc(e, t) {
  return Xo(4, 2, e, t);
}
function Gc(e, t) {
  return Xo(4, 4, e, t);
}
function Xc(e, t) {
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
function qc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Xo(4, 4, Xc.bind(null, t, e), n)
  );
}
function Es() {}
function Jc(e, t) {
  var n = Ae();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ws(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Yc(e, t) {
  var n = Ae();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ws(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Zc(e, t, n) {
  return Kt & 21
    ? (He(n, t) || ((n = oc()), (K.lanes |= n), (Gt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ye = !0)), (e.memoizedState = n));
}
function cm(e, t) {
  var n = D;
  (D = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Pl.transition;
  Pl.transition = {};
  try {
    e(!1), t();
  } finally {
    (D = n), (Pl.transition = r);
  }
}
function ed() {
  return Ae().memoizedState;
}
function dm(e, t, n) {
  var r = jt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    td(e))
  )
    nd(t, n);
  else if (((n = Mc(e, t, n, r)), n !== null)) {
    var o = pe();
    $e(n, e, r, o), rd(n, t, r);
  }
}
function fm(e, t, n) {
  var r = jt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (td(e)) nd(t, o);
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
            ? ((o.next = o), ms(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Mc(e, t, o, r)),
      n !== null && ((o = pe()), $e(n, e, r, o), rd(n, t, r));
  }
}
function td(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function nd(e, t) {
  nr = Oo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function rd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), es(e, n);
  }
}
var zo = {
    readContext: be,
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
  pm = {
    readContext: be,
    useCallback: function (e, t) {
      return (Qe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: be,
    useEffect: Ou,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        io(4194308, 4, Xc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return io(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return io(4, 2, e, t);
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
        (e = e.dispatch = dm.bind(null, K, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Qe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Pu,
    useDebugValue: Es,
    useDeferredValue: function (e) {
      return (Qe().memoizedState = e);
    },
    useTransition: function () {
      var e = Pu(!1),
        t = e[0];
      return (e = cm.bind(null, e[1])), (Qe().memoizedState = e), [t, e];
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
        Kt & 30 || Bc(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        Ou(Hc.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        Er(9, $c.bind(null, r, l, n, t), void 0, null),
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
          (n = Sr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = am++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  mm = {
    readContext: be,
    useCallback: Jc,
    useContext: be,
    useEffect: ks,
    useImperativeHandle: qc,
    useInsertionEffect: Kc,
    useLayoutEffect: Gc,
    useMemo: Yc,
    useReducer: Ol,
    useRef: Qc,
    useState: function () {
      return Ol(kr);
    },
    useDebugValue: Es,
    useDeferredValue: function (e) {
      var t = Ae();
      return Zc(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = Ol(kr)[0],
        t = Ae().memoizedState;
      return [e, t];
    },
    useMutableSource: Dc,
    useSyncExternalStore: Uc,
    useId: ed,
    unstable_isNewReconciler: !1,
  },
  hm = {
    readContext: be,
    useCallback: Jc,
    useContext: be,
    useEffect: ks,
    useImperativeHandle: qc,
    useInsertionEffect: Kc,
    useLayoutEffect: Gc,
    useMemo: Yc,
    useReducer: zl,
    useRef: Qc,
    useState: function () {
      return zl(kr);
    },
    useDebugValue: Es,
    useDeferredValue: function (e) {
      var t = Ae();
      return Z === null ? (t.memoizedState = e) : Zc(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = zl(kr)[0],
        t = Ae().memoizedState;
      return [e, t];
    },
    useMutableSource: Dc,
    useSyncExternalStore: Uc,
    useId: ed,
    unstable_isNewReconciler: !1,
  };
function Ie(e, t) {
  if (e && e.defaultProps) {
    (t = G({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function vi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : G({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var qo = {
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
      t !== null && ($e(t, e, o, r), oo(t, e, o));
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
      t !== null && ($e(t, e, o, r), oo(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = pe(),
      r = jt(e),
      o = tt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Ct(e, o, r)),
      t !== null && ($e(t, e, r, n), oo(t, e, r));
  },
};
function zu(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !hr(n, r) || !hr(o, l)
      : !0
  );
}
function od(e, t, n) {
  var r = !1,
    o = Tt,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = be(l))
      : ((o = we(t) ? Wt : ce.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? Cn(e, o) : Tt)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = qo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Lu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && qo.enqueueReplaceState(t, t.state, null);
}
function wi(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), hs(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = be(l))
    : ((l = we(t) ? Wt : ce.current), (o.context = Cn(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (vi(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && qo.enqueueReplaceState(o, o.state, null),
      To(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Rn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Hf(r)), (r = r.return);
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
function Ll(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var gm = typeof WeakMap == "function" ? WeakMap : Map;
function ld(e, t, n) {
  (n = tt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      bo || ((bo = !0), (Pi = r)), xi(e, t);
    }),
    n
  );
}
function id(e, t, n) {
  (n = tt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        xi(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        xi(e, t),
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
function bu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new gm();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Pm.bind(null, e, t, n)), t.then(e, e));
}
function Au(e) {
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
function Mu(e, t, n, r, o) {
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
var ym = it.ReactCurrentOwner,
  ye = !1;
function fe(e, t, n, r) {
  t.child = e === null ? Ac(t, null, n, r) : jn(t, e.child, n, r);
}
function Iu(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    xn(t, o),
    (r = xs(e, t, n, r, l, o)),
    (n = Ss()),
    e !== null && !ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        lt(e, t, o))
      : (W && n && us(t), (t.flags |= 1), fe(e, t, r, o), t.child)
  );
}
function Fu(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !Os(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), sd(e, t, l, r, o))
      : ((e = co(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : hr), n(i, r) && e.ref === t.ref)
    )
      return lt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = _t(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function sd(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (hr(l, r) && e.ref === t.ref)
      if (((ye = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (ye = !0);
      else return (t.lanes = e.lanes), lt(e, t, o);
  }
  return Si(e, t, n, r, o);
}
function ud(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        B(mn, Ee),
        (Ee |= n);
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
          B(mn, Ee),
          (Ee |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        B(mn, Ee),
        (Ee |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      B(mn, Ee),
      (Ee |= r);
  return fe(e, t, o, n), t.child;
}
function ad(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Si(e, t, n, r, o) {
  var l = we(n) ? Wt : ce.current;
  return (
    (l = Cn(t, l)),
    xn(t, o),
    (n = xs(e, t, n, r, l, o)),
    (r = Ss()),
    e !== null && !ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        lt(e, t, o))
      : (W && r && us(t), (t.flags |= 1), fe(e, t, n, o), t.child)
  );
}
function Du(e, t, n, r, o) {
  if (we(n)) {
    var l = !0;
    Co(t);
  } else l = !1;
  if ((xn(t, o), t.stateNode === null))
    so(e, t), od(t, n, r), wi(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var u = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = be(a))
      : ((a = we(n) ? Wt : ce.current), (a = Cn(t, a)));
    var d = n.getDerivedStateFromProps,
      m =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || u !== a) && Lu(t, i, r, a)),
      (mt = !1);
    var h = t.memoizedState;
    (i.state = h),
      To(t, r, i, o),
      (u = t.memoizedState),
      s !== r || h !== u || ve.current || mt
        ? (typeof d == "function" && (vi(t, n, d, r), (u = t.memoizedState)),
          (s = mt || zu(t, n, s, r, h, u, a))
            ? (m ||
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
      Ic(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : Ie(t.type, s)),
      (i.props = a),
      (m = t.pendingProps),
      (h = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = be(u))
        : ((u = we(n) ? Wt : ce.current), (u = Cn(t, u)));
    var S = n.getDerivedStateFromProps;
    (d =
      typeof S == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== m || h !== u) && Lu(t, i, r, u)),
      (mt = !1),
      (h = t.memoizedState),
      (i.state = h),
      To(t, r, i, o);
    var g = t.memoizedState;
    s !== m || h !== g || ve.current || mt
      ? (typeof S == "function" && (vi(t, n, S, r), (g = t.memoizedState)),
        (a = mt || zu(t, n, a, r, h, g, u) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, g, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, g, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (i.props = r),
        (i.state = g),
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
  return ki(e, t, n, r, l, o);
}
function ki(e, t, n, r, o, l) {
  ad(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Cu(t, n, !1), lt(e, t, l);
  (r = t.stateNode), (ym.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = jn(t, e.child, null, l)), (t.child = jn(t, null, s, l)))
      : fe(e, t, s, l),
    (t.memoizedState = r.state),
    o && Cu(t, n, !0),
    t.child
  );
}
function cd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Eu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Eu(e, t.context, !1),
    gs(e, t.containerInfo);
}
function Uu(e, t, n, r, o) {
  return Nn(), cs(o), (t.flags |= 256), fe(e, t, n, r), t.child;
}
var Ei = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ci(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function dd(e, t, n) {
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
      gi(t),
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
                : (l = Zo(i, r, 0, null)),
              (e = Ht(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = Ci(n)),
              (t.memoizedState = Ei),
              e)
            : Cs(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return vm(e, t, i, r, s, o, n);
  if (l) {
    (l = r.fallback), (i = t.mode), (o = e.child), (s = o.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = _t(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (l = _t(s, l)) : ((l = Ht(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Ci(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ei),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = _t(l, { mode: "visible", children: r.children })),
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
function Cs(e, t) {
  return (
    (t = Zo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Xr(e, t, n, r) {
  return (
    r !== null && cs(r),
    jn(t, e.child, null, n),
    (e = Cs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function vm(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ll(Error(E(422)))), Xr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (o = t.mode),
        (r = Zo({ mode: "visible", children: r.children }, o, 0, null)),
        (l = Ht(l, o, i, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && jn(t, e.child, null, i),
        (t.child.memoizedState = Ci(i)),
        (t.memoizedState = Ei),
        l);
  if (!(t.mode & 1)) return Xr(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (l = Error(E(419))), (r = Ll(l, r, void 0)), Xr(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), ye || s)) {
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
    return Ps(), (r = Ll(Error(E(421)))), Xr(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Om.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Ce = Et(o.nextSibling)),
      (Ne = t),
      (W = !0),
      (De = null),
      e !== null &&
        ((Pe[Oe++] = Ze),
        (Pe[Oe++] = et),
        (Pe[Oe++] = Qt),
        (Ze = e.id),
        (et = e.overflow),
        (Qt = t)),
      (t = Cs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Bu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), yi(e.return, t, n);
}
function bl(e, t, n, r, o) {
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
function fd(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((fe(e, t, r.children, n), (r = Q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Bu(e, n, t);
        else if (e.tag === 19) Bu(e, n, t);
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
            e !== null && Po(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          bl(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Po(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        bl(t, !0, n, null, l);
        break;
      case "together":
        bl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function so(e, t) {
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
      e = t.child, n = _t(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = _t(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function wm(e, t, n) {
  switch (t.tag) {
    case 3:
      cd(t), Nn();
      break;
    case 5:
      Fc(t);
      break;
    case 1:
      we(t.type) && Co(t);
      break;
    case 4:
      gs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      B(_o, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (B(Q, Q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? dd(e, t, n)
          : (B(Q, Q.current & 1),
            (e = lt(e, t, n)),
            e !== null ? e.sibling : null);
      B(Q, Q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return fd(e, t, n);
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
      return (t.lanes = 0), ud(e, t, n);
  }
  return lt(e, t, n);
}
var pd, Ni, md, hd;
pd = function (e, t) {
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
Ni = function () {};
md = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Ut(Xe.current);
    var l = null;
    switch (n) {
      case "input":
        (o = Kl(e, o)), (r = Kl(e, r)), (l = []);
        break;
      case "select":
        (o = G({}, o, { value: void 0 })),
          (r = G({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = ql(e, o)), (r = ql(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ko);
    }
    Yl(n, r);
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
            (ur.hasOwnProperty(a)
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
              (ur.hasOwnProperty(a)
                ? (u != null && a === "onScroll" && H("scroll", e),
                  l || s === u || (l = []))
                : (l = l || []).push(a, u));
    }
    n && (l = l || []).push("style", n);
    var a = l;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
hd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function $n(e, t) {
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
function xm(e, t, n) {
  var r = t.pendingProps;
  switch ((as(t), t.tag)) {
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
      return we(t.type) && Eo(), ue(t), null;
    case 3:
      return (
        (r = t.stateNode),
        _n(),
        V(ve),
        V(ce),
        vs(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Kr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), De !== null && (Li(De), (De = null)))),
        Ni(e, t),
        ue(t),
        null
      );
    case 5:
      ys(t);
      var o = Ut(xr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        md(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return ue(t), null;
        }
        if (((e = Ut(Xe.current)), Kr(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[Ke] = t), (r[vr] = l), (e = (t.mode & 1) !== 0), n)) {
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
              for (o = 0; o < qn.length; o++) H(qn[o], r);
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
              qs(r, l), H("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                H("invalid", r);
              break;
            case "textarea":
              Ys(r, l), H("invalid", r);
          }
          Yl(n, l), (o = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var s = l[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Qr(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Qr(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : ur.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  H("scroll", r);
            }
          switch (n) {
            case "input":
              Fr(r), Js(r, l, !0);
              break;
            case "textarea":
              Fr(r), Zs(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = ko);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ha(n)),
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
            (e[vr] = r),
            pd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Zl(n, r)), n)) {
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
                for (o = 0; o < qn.length; o++) H(qn[o], e);
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
                qs(e, r), (o = Kl(e, r)), H("invalid", e);
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
                Ys(e, r), (o = ql(e, r)), H("invalid", e);
                break;
              default:
                o = r;
            }
            Yl(n, o), (s = o);
            for (l in s)
              if (s.hasOwnProperty(l)) {
                var u = s[l];
                l === "style"
                  ? Qa(e, u)
                  : l === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Va(e, u))
                  : l === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && ar(e, u)
                    : typeof u == "number" && ar(e, "" + u)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (ur.hasOwnProperty(l)
                      ? u != null && l === "onScroll" && H("scroll", e)
                      : u != null && Gi(e, l, u, i));
              }
            switch (n) {
              case "input":
                Fr(e), Js(e, r, !1);
                break;
              case "textarea":
                Fr(e), Zs(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Rt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? gn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      gn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ko);
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
      if (e && t.stateNode != null) hd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (((n = Ut(xr.current)), Ut(Xe.current), Kr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ke] = t),
            (l = r.nodeValue !== n) && ((e = Ne), e !== null))
          )
            switch (e.tag) {
              case 3:
                Qr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Qr(r.nodeValue, n, (e.mode & 1) !== 0);
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
        if (W && Ce !== null && t.mode & 1 && !(t.flags & 128))
          Lc(), Nn(), (t.flags |= 98560), (l = !1);
        else if (((l = Kr(t)), r !== null && r.dehydrated !== null)) {
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
            Nn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ue(t), (l = !1);
        } else De !== null && (Li(De), (De = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Q.current & 1 ? ee === 0 && (ee = 3) : Ps())),
          t.updateQueue !== null && (t.flags |= 4),
          ue(t),
          null);
    case 4:
      return (
        _n(), Ni(e, t), e === null && gr(t.stateNode.containerInfo), ue(t), null
      );
    case 10:
      return ps(t.type._context), ue(t), null;
    case 17:
      return we(t.type) && Eo(), ue(t), null;
    case 19:
      if ((V(Q), (l = t.memoizedState), l === null)) return ue(t), null;
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) $n(l, !1);
        else {
          if (ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Po(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    $n(l, !1),
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
            q() > Tn &&
            ((t.flags |= 128), (r = !0), $n(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Po(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              $n(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !W)
            )
              return ue(t), null;
          } else
            2 * q() - l.renderingStartTime > Tn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), $n(l, !1), (t.lanes = 4194304));
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
          (l.renderingStartTime = q()),
          (t.sibling = null),
          (n = Q.current),
          B(Q, r ? (n & 1) | 2 : n & 1),
          t)
        : (ue(t), null);
    case 22:
    case 23:
      return (
        Ts(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ee & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
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
function Sm(e, t) {
  switch ((as(t), t.tag)) {
    case 1:
      return (
        we(t.type) && Eo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        _n(),
        V(ve),
        V(ce),
        vs(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ys(t), null;
    case 13:
      if ((V(Q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        Nn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return V(Q), null;
    case 4:
      return _n(), null;
    case 10:
      return ps(t.type._context), null;
    case 22:
    case 23:
      return Ts(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var qr = !1,
  ae = !1,
  km = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function pn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        X(e, t, r);
      }
    else n.current = null;
}
function ji(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var $u = !1;
function Em(e, t) {
  if (((ai = wo), (e = xc()), ss(e))) {
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
            m = e,
            h = null;
          t: for (;;) {
            for (
              var S;
              m !== n || (o !== 0 && m.nodeType !== 3) || (s = i + o),
                m !== l || (r !== 0 && m.nodeType !== 3) || (u = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (S = m.firstChild) !== null;

            )
              (h = m), (m = S);
            for (;;) {
              if (m === e) break t;
              if (
                (h === n && ++a === o && (s = i),
                h === l && ++d === r && (u = i),
                (S = m.nextSibling) !== null)
              )
                break;
              (m = h), (h = m.parentNode);
            }
            m = S;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ci = { focusedElem: e, selectionRange: n }, wo = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var v = g.memoizedProps,
                    k = g.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Ie(t.type, v),
                      k
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
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
          X(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (g = $u), ($u = !1), g;
}
function rr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && ji(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Jo(e, t) {
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
function _i(e) {
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
function gd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), gd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ke], delete t[vr], delete t[pi], delete t[lm], delete t[im])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function yd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Hu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || yd(e.return)) return null;
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
function Ri(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = ko));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ri(e, t, n), e = e.sibling; e !== null; ) Ri(e, t, n), (e = e.sibling);
}
function Ti(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ti(e, t, n), e = e.sibling; e !== null; ) Ti(e, t, n), (e = e.sibling);
}
var oe = null,
  Fe = !1;
function at(e, t, n) {
  for (n = n.child; n !== null; ) vd(e, t, n), (n = n.sibling);
}
function vd(e, t, n) {
  if (Ge && typeof Ge.onCommitFiberUnmount == "function")
    try {
      Ge.onCommitFiberUnmount(Ho, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ae || pn(n, t);
    case 6:
      var r = oe,
        o = Fe;
      (oe = null),
        at(e, t, n),
        (oe = r),
        (Fe = o),
        oe !== null &&
          (Fe
            ? ((e = oe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : oe.removeChild(n.stateNode));
      break;
    case 18:
      oe !== null &&
        (Fe
          ? ((e = oe),
            (n = n.stateNode),
            e.nodeType === 8
              ? _l(e.parentNode, n)
              : e.nodeType === 1 && _l(e, n),
            pr(e))
          : _l(oe, n.stateNode));
      break;
    case 4:
      (r = oe),
        (o = Fe),
        (oe = n.stateNode.containerInfo),
        (Fe = !0),
        at(e, t, n),
        (oe = r),
        (Fe = o);
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
            i !== void 0 && (l & 2 || l & 4) && ji(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      at(e, t, n);
      break;
    case 1:
      if (
        !ae &&
        (pn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          X(n, t, s);
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
function Vu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new km()),
      t.forEach(function (r) {
        var o = zm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Me(e, t) {
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
              (oe = s.stateNode), (Fe = !1);
              break e;
            case 3:
              (oe = s.stateNode.containerInfo), (Fe = !0);
              break e;
            case 4:
              (oe = s.stateNode.containerInfo), (Fe = !0);
              break e;
          }
          s = s.return;
        }
        if (oe === null) throw Error(E(160));
        vd(l, i, o), (oe = null), (Fe = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (a) {
        X(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) wd(t, e), (t = t.sibling);
}
function wd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Me(t, e), We(e), r & 4)) {
        try {
          rr(3, e, e.return), Jo(3, e);
        } catch (v) {
          X(e, e.return, v);
        }
        try {
          rr(5, e, e.return);
        } catch (v) {
          X(e, e.return, v);
        }
      }
      break;
    case 1:
      Me(t, e), We(e), r & 512 && n !== null && pn(n, n.return);
      break;
    case 5:
      if (
        (Me(t, e),
        We(e),
        r & 512 && n !== null && pn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ar(o, "");
        } catch (v) {
          X(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && l.type === "radio" && l.name != null && Ba(o, l),
              Zl(s, i);
            var a = Zl(s, l);
            for (i = 0; i < u.length; i += 2) {
              var d = u[i],
                m = u[i + 1];
              d === "style"
                ? Qa(o, m)
                : d === "dangerouslySetInnerHTML"
                ? Va(o, m)
                : d === "children"
                ? ar(o, m)
                : Gi(o, d, m, a);
            }
            switch (s) {
              case "input":
                Gl(o, l);
                break;
              case "textarea":
                $a(o, l);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var S = l.value;
                S != null
                  ? gn(o, !!l.multiple, S, !1)
                  : h !== !!l.multiple &&
                    (l.defaultValue != null
                      ? gn(o, !!l.multiple, l.defaultValue, !0)
                      : gn(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[vr] = l;
          } catch (v) {
            X(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Me(t, e), We(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (v) {
          X(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Me(t, e), We(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          pr(t.containerInfo);
        } catch (v) {
          X(e, e.return, v);
        }
      break;
    case 4:
      Me(t, e), We(e);
      break;
    case 13:
      Me(t, e),
        We(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (_s = q())),
        r & 4 && Vu(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ae = (a = ae) || d), Me(t, e), (ae = a)) : Me(t, e),
        We(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !d && e.mode & 1)
        )
          for (R = e, d = e.child; d !== null; ) {
            for (m = R = d; R !== null; ) {
              switch (((h = R), (S = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  rr(4, h, h.return);
                  break;
                case 1:
                  pn(h, h.return);
                  var g = h.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (v) {
                      X(r, n, v);
                    }
                  }
                  break;
                case 5:
                  pn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Qu(m);
                    continue;
                  }
              }
              S !== null ? ((S.return = h), (R = S)) : Qu(m);
            }
            d = d.sibling;
          }
        e: for (d = null, m = e; ; ) {
          if (m.tag === 5) {
            if (d === null) {
              d = m;
              try {
                (o = m.stateNode),
                  a
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((s = m.stateNode),
                      (u = m.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = Wa("display", i)));
              } catch (v) {
                X(e, e.return, v);
              }
            }
          } else if (m.tag === 6) {
            if (d === null)
              try {
                m.stateNode.nodeValue = a ? "" : m.memoizedProps;
              } catch (v) {
                X(e, e.return, v);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            d === m && (d = null), (m = m.return);
          }
          d === m && (d = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Me(t, e), We(e), r & 4 && Vu(e);
      break;
    case 21:
      break;
    default:
      Me(t, e), We(e);
  }
}
function We(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (yd(n)) {
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
          r.flags & 32 && (ar(o, ""), (r.flags &= -33));
          var l = Hu(e);
          Ti(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = Hu(e);
          Ri(e, s, i);
          break;
        default:
          throw Error(E(161));
      }
    } catch (u) {
      X(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Cm(e, t, n) {
  (R = e), xd(e);
}
function xd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var o = R,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || qr;
      if (!i) {
        var s = o.alternate,
          u = (s !== null && s.memoizedState !== null) || ae;
        s = qr;
        var a = ae;
        if (((qr = i), (ae = u) && !a))
          for (R = o; R !== null; )
            (i = R),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Ku(o)
                : u !== null
                ? ((u.return = i), (R = u))
                : Ku(o);
        for (; l !== null; ) (R = l), xd(l), (l = l.sibling);
        (R = o), (qr = s), (ae = a);
      }
      Wu(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (R = l)) : Wu(e);
  }
}
function Wu(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ae || Jo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ae)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ie(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && Tu(t, l, r);
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
                Tu(t, i, n);
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
                    var m = d.dehydrated;
                    m !== null && pr(m);
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
        ae || (t.flags & 512 && _i(t));
      } catch (h) {
        X(t, t.return, h);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function Qu(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function Ku(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Jo(4, t);
          } catch (u) {
            X(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              X(t, o, u);
            }
          }
          var l = t.return;
          try {
            _i(t);
          } catch (u) {
            X(t, l, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            _i(t);
          } catch (u) {
            X(t, i, u);
          }
      }
    } catch (u) {
      X(t, t.return, u);
    }
    if (t === e) {
      R = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (R = s);
      break;
    }
    R = t.return;
  }
}
var Nm = Math.ceil,
  Lo = it.ReactCurrentDispatcher,
  Ns = it.ReactCurrentOwner,
  Le = it.ReactCurrentBatchConfig,
  M = 0,
  re = null,
  J = null,
  le = 0,
  Ee = 0,
  mn = Ot(0),
  ee = 0,
  Cr = null,
  Gt = 0,
  Yo = 0,
  js = 0,
  or = null,
  ge = null,
  _s = 0,
  Tn = 1 / 0,
  Je = null,
  bo = !1,
  Pi = null,
  Nt = null,
  Jr = !1,
  wt = null,
  Ao = 0,
  lr = 0,
  Oi = null,
  uo = -1,
  ao = 0;
function pe() {
  return M & 6 ? q() : uo !== -1 ? uo : (uo = q());
}
function jt(e) {
  return e.mode & 1
    ? M & 2 && le !== 0
      ? le & -le
      : um.transition !== null
      ? (ao === 0 && (ao = oc()), ao)
      : ((e = D),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : dc(e.type))),
        e)
    : 1;
}
function $e(e, t, n, r) {
  if (50 < lr) throw ((lr = 0), (Oi = null), Error(E(185)));
  _r(e, n, r),
    (!(M & 2) || e !== re) &&
      (e === re && (!(M & 2) && (Yo |= n), ee === 4 && gt(e, le)),
      xe(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((Tn = q() + 500), Go && zt()));
}
function xe(e, t) {
  var n = e.callbackNode;
  up(e, t);
  var r = vo(e, e === re ? le : 0);
  if (r === 0)
    n !== null && nu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && nu(n), t === 1))
      e.tag === 0 ? sm(Gu.bind(null, e)) : Pc(Gu.bind(null, e)),
        rm(function () {
          !(M & 6) && zt();
        }),
        (n = null);
    else {
      switch (lc(r)) {
        case 1:
          n = Zi;
          break;
        case 4:
          n = nc;
          break;
        case 16:
          n = yo;
          break;
        case 536870912:
          n = rc;
          break;
        default:
          n = yo;
      }
      n = Rd(n, Sd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Sd(e, t) {
  if (((uo = -1), (ao = 0), M & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (Sn() && e.callbackNode !== n) return null;
  var r = vo(e, e === re ? le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Mo(e, r);
  else {
    t = r;
    var o = M;
    M |= 2;
    var l = Ed();
    (re !== e || le !== t) && ((Je = null), (Tn = q() + 500), $t(e, t));
    do
      try {
        Rm();
        break;
      } catch (s) {
        kd(e, s);
      }
    while (!0);
    fs(),
      (Lo.current = l),
      (M = o),
      J !== null ? (t = 0) : ((re = null), (le = 0), (t = ee));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = oi(e)), o !== 0 && ((r = o), (t = zi(e, o)))), t === 1)
    )
      throw ((n = Cr), $t(e, 0), gt(e, r), xe(e, q()), n);
    if (t === 6) gt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !jm(o) &&
          ((t = Mo(e, r)),
          t === 2 && ((l = oi(e)), l !== 0 && ((r = l), (t = zi(e, l)))),
          t === 1))
      )
        throw ((n = Cr), $t(e, 0), gt(e, r), xe(e, q()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          It(e, ge, Je);
          break;
        case 3:
          if (
            (gt(e, r), (r & 130023424) === r && ((t = _s + 500 - q()), 10 < t))
          ) {
            if (vo(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              pe(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = fi(It.bind(null, e, ge, Je), t);
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
            (r = q() - r),
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
                : 1960 * Nm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = fi(It.bind(null, e, ge, Je), r);
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
  return xe(e, q()), e.callbackNode === n ? Sd.bind(null, e) : null;
}
function zi(e, t) {
  var n = or;
  return (
    e.current.memoizedState.isDehydrated && ($t(e, t).flags |= 256),
    (e = Mo(e, t)),
    e !== 2 && ((t = ge), (ge = n), t !== null && Li(t)),
    e
  );
}
function Li(e) {
  ge === null ? (ge = e) : ge.push.apply(ge, e);
}
function jm(e) {
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
    t &= ~js,
      t &= ~Yo,
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
function Gu(e) {
  if (M & 6) throw Error(E(327));
  Sn();
  var t = vo(e, 0);
  if (!(t & 1)) return xe(e, q()), null;
  var n = Mo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = oi(e);
    r !== 0 && ((t = r), (n = zi(e, r)));
  }
  if (n === 1) throw ((n = Cr), $t(e, 0), gt(e, t), xe(e, q()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    It(e, ge, Je),
    xe(e, q()),
    null
  );
}
function Rs(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((Tn = q() + 500), Go && zt());
  }
}
function Xt(e) {
  wt !== null && wt.tag === 0 && !(M & 6) && Sn();
  var t = M;
  M |= 1;
  var n = Le.transition,
    r = D;
  try {
    if (((Le.transition = null), (D = 1), e)) return e();
  } finally {
    (D = r), (Le.transition = n), (M = t), !(M & 6) && zt();
  }
}
function Ts() {
  (Ee = mn.current), V(mn);
}
function $t(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), nm(n)), J !== null))
    for (n = J.return; n !== null; ) {
      var r = n;
      switch ((as(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Eo();
          break;
        case 3:
          _n(), V(ve), V(ce), vs();
          break;
        case 5:
          ys(r);
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
          ps(r.type._context);
          break;
        case 22:
        case 23:
          Ts();
      }
      n = n.return;
    }
  if (
    ((re = e),
    (J = e = _t(e.current, null)),
    (le = Ee = t),
    (ee = 0),
    (Cr = null),
    (js = Yo = Gt = 0),
    (ge = or = null),
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
function kd(e, t) {
  do {
    var n = J;
    try {
      if ((fs(), (lo.current = zo), Oo)) {
        for (var r = K.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Oo = !1;
      }
      if (
        ((Kt = 0),
        (ne = Z = K = null),
        (nr = !1),
        (Sr = 0),
        (Ns.current = null),
        n === null || n.return === null)
      ) {
        (ee = 1), (Cr = t), (J = null);
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
            m = d.tag;
          if (!(d.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var S = Au(i);
          if (S !== null) {
            (S.flags &= -257),
              Mu(S, i, s, l, t),
              S.mode & 1 && bu(l, a, t),
              (t = S),
              (u = a);
            var g = t.updateQueue;
            if (g === null) {
              var v = new Set();
              v.add(u), (t.updateQueue = v);
            } else g.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              bu(l, a, t), Ps();
              break e;
            }
            u = Error(E(426));
          }
        } else if (W && s.mode & 1) {
          var k = Au(i);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              Mu(k, i, s, l, t),
              cs(Rn(u, s));
            break e;
          }
        }
        (l = u = Rn(u, s)),
          ee !== 4 && (ee = 2),
          or === null ? (or = [l]) : or.push(l),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var f = ld(l, u, t);
              Ru(l, f);
              break e;
            case 1:
              s = u;
              var c = l.type,
                p = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (Nt === null || !Nt.has(p))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var x = id(l, s, t);
                Ru(l, x);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Nd(n);
    } catch (C) {
      (t = C), J === n && n !== null && (J = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ed() {
  var e = Lo.current;
  return (Lo.current = zo), e === null ? zo : e;
}
function Ps() {
  (ee === 0 || ee === 3 || ee === 2) && (ee = 4),
    re === null || (!(Gt & 268435455) && !(Yo & 268435455)) || gt(re, le);
}
function Mo(e, t) {
  var n = M;
  M |= 2;
  var r = Ed();
  (re !== e || le !== t) && ((Je = null), $t(e, t));
  do
    try {
      _m();
      break;
    } catch (o) {
      kd(e, o);
    }
  while (!0);
  if ((fs(), (M = n), (Lo.current = r), J !== null)) throw Error(E(261));
  return (re = null), (le = 0), ee;
}
function _m() {
  for (; J !== null; ) Cd(J);
}
function Rm() {
  for (; J !== null && !Zf(); ) Cd(J);
}
function Cd(e) {
  var t = _d(e.alternate, e, Ee);
  (e.memoizedProps = e.pendingProps),
    t === null ? Nd(e) : (J = t),
    (Ns.current = null);
}
function Nd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Sm(n, t)), n !== null)) {
        (n.flags &= 32767), (J = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ee = 6), (J = null);
        return;
      }
    } else if (((n = xm(n, t, Ee)), n !== null)) {
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
    o = Le.transition;
  try {
    (Le.transition = null), (D = 1), Tm(e, t, n, r);
  } finally {
    (Le.transition = o), (D = r);
  }
  return null;
}
function Tm(e, t, n, r) {
  do Sn();
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
    (ap(e, l),
    e === re && ((J = re = null), (le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Jr ||
      ((Jr = !0),
      Rd(yo, function () {
        return Sn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Le.transition), (Le.transition = null);
    var i = D;
    D = 1;
    var s = M;
    (M |= 4),
      (Ns.current = null),
      Em(e, n),
      wd(n, e),
      Xp(ci),
      (wo = !!ai),
      (ci = ai = null),
      (e.current = n),
      Cm(n),
      ep(),
      (M = s),
      (D = i),
      (Le.transition = l);
  } else e.current = n;
  if (
    (Jr && ((Jr = !1), (wt = e), (Ao = o)),
    (l = e.pendingLanes),
    l === 0 && (Nt = null),
    rp(n.stateNode),
    xe(e, q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (bo) throw ((bo = !1), (e = Pi), (Pi = null), e);
  return (
    Ao & 1 && e.tag !== 0 && Sn(),
    (l = e.pendingLanes),
    l & 1 ? (e === Oi ? lr++ : ((lr = 0), (Oi = e))) : (lr = 0),
    zt(),
    null
  );
}
function Sn() {
  if (wt !== null) {
    var e = lc(Ao),
      t = Le.transition,
      n = D;
    try {
      if (((Le.transition = null), (D = 16 > e ? 16 : e), wt === null))
        var r = !1;
      else {
        if (((e = wt), (wt = null), (Ao = 0), M & 6)) throw Error(E(331));
        var o = M;
        for (M |= 4, R = e.current; R !== null; ) {
          var l = R,
            i = l.child;
          if (R.flags & 16) {
            var s = l.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (R = a; R !== null; ) {
                  var d = R;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rr(8, d, l);
                  }
                  var m = d.child;
                  if (m !== null) (m.return = d), (R = m);
                  else
                    for (; R !== null; ) {
                      d = R;
                      var h = d.sibling,
                        S = d.return;
                      if ((gd(d), d === a)) {
                        R = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = S), (R = h);
                        break;
                      }
                      R = S;
                    }
                }
              }
              var g = l.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var k = v.sibling;
                    (v.sibling = null), (v = k);
                  } while (v !== null);
                }
              }
              R = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (R = i);
          else
            e: for (; R !== null; ) {
              if (((l = R), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    rr(9, l, l.return);
                }
              var f = l.sibling;
              if (f !== null) {
                (f.return = l.return), (R = f);
                break e;
              }
              R = l.return;
            }
        }
        var c = e.current;
        for (R = c; R !== null; ) {
          i = R;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) (p.return = i), (R = p);
          else
            e: for (i = c; R !== null; ) {
              if (((s = R), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jo(9, s);
                  }
                } catch (C) {
                  X(s, s.return, C);
                }
              if (s === i) {
                R = null;
                break e;
              }
              var x = s.sibling;
              if (x !== null) {
                (x.return = s.return), (R = x);
                break e;
              }
              R = s.return;
            }
        }
        if (
          ((M = o), zt(), Ge && typeof Ge.onPostCommitFiberRoot == "function")
        )
          try {
            Ge.onPostCommitFiberRoot(Ho, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (D = n), (Le.transition = t);
    }
  }
  return !1;
}
function Xu(e, t, n) {
  (t = Rn(n, t)),
    (t = ld(e, t, 1)),
    (e = Ct(e, t, 1)),
    (t = pe()),
    e !== null && (_r(e, 1, t), xe(e, t));
}
function X(e, t, n) {
  if (e.tag === 3) Xu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Xu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Nt === null || !Nt.has(r)))
        ) {
          (e = Rn(n, e)),
            (e = id(t, e, 1)),
            (t = Ct(t, e, 1)),
            (e = pe()),
            t !== null && (_r(t, 1, e), xe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Pm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = pe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    re === e &&
      (le & n) === n &&
      (ee === 4 || (ee === 3 && (le & 130023424) === le && 500 > q() - _s)
        ? $t(e, 0)
        : (js |= n)),
    xe(e, t);
}
function jd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Br), (Br <<= 1), !(Br & 130023424) && (Br = 4194304))
      : (t = 1));
  var n = pe();
  (e = ot(e, t)), e !== null && (_r(e, t, n), xe(e, n));
}
function Om(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), jd(e, n);
}
function zm(e, t) {
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
  r !== null && r.delete(t), jd(e, n);
}
var _d;
_d = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ve.current) ye = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ye = !1), wm(e, t, n);
      ye = !!(e.flags & 131072);
    }
  else (ye = !1), W && t.flags & 1048576 && Oc(t, jo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      so(e, t), (e = t.pendingProps);
      var o = Cn(t, ce.current);
      xn(t, n), (o = xs(null, t, r, e, o, n));
      var l = Ss();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            we(r) ? ((l = !0), Co(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            hs(t),
            (o.updater = qo),
            (t.stateNode = o),
            (o._reactInternals = t),
            wi(t, r, e, n),
            (t = ki(null, t, r, !0, l, n)))
          : ((t.tag = 0), W && l && us(t), fe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (so(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = bm(r)),
          (e = Ie(r, e)),
          o)
        ) {
          case 0:
            t = Si(null, t, r, e, n);
            break e;
          case 1:
            t = Du(null, t, r, e, n);
            break e;
          case 11:
            t = Iu(null, t, r, e, n);
            break e;
          case 14:
            t = Fu(null, t, r, Ie(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ie(r, o)),
        Si(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ie(r, o)),
        Du(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((cd(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Ic(e, t),
          To(t, r, null, n);
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
            (o = Rn(Error(E(423)), t)), (t = Uu(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Rn(Error(E(424)), t)), (t = Uu(e, t, r, n, o));
            break e;
          } else
            for (
              Ce = Et(t.stateNode.containerInfo.firstChild),
                Ne = t,
                W = !0,
                De = null,
                n = Ac(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Nn(), r === o)) {
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
        Fc(t),
        e === null && gi(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        di(r, o) ? (i = null) : l !== null && di(r, l) && (t.flags |= 32),
        ad(e, t),
        fe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && gi(t), null;
    case 13:
      return dd(e, t, n);
    case 4:
      return (
        gs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = jn(t, null, r, n)) : fe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ie(r, o)),
        Iu(e, t, r, o, n)
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
          B(_o, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (He(l.value, i)) {
            if (l.children === o.children && !ve.current) {
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
                      yi(l.return, n, t),
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
                  yi(i, n, t),
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
        xn(t, n),
        (o = be(o)),
        (r = r(o)),
        (t.flags |= 1),
        fe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Ie(r, t.pendingProps)),
        (o = Ie(r.type, o)),
        Fu(e, t, r, o, n)
      );
    case 15:
      return sd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ie(r, o)),
        so(e, t),
        (t.tag = 1),
        we(r) ? ((e = !0), Co(t)) : (e = !1),
        xn(t, n),
        od(t, r, o),
        wi(t, r, o, n),
        ki(null, t, r, !0, e, n)
      );
    case 19:
      return fd(e, t, n);
    case 22:
      return ud(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function Rd(e, t) {
  return tc(e, t);
}
function Lm(e, t, n, r) {
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
  return new Lm(e, t, n, r);
}
function Os(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function bm(e) {
  if (typeof e == "function") return Os(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === qi)) return 11;
    if (e === Ji) return 14;
  }
  return 2;
}
function _t(e, t) {
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
function co(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) Os(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case rn:
        return Ht(n.children, o, l, t);
      case Xi:
        (i = 8), (o |= 8);
        break;
      case Hl:
        return (
          (e = ze(12, n, t, o | 2)), (e.elementType = Hl), (e.lanes = l), e
        );
      case Vl:
        return (e = ze(13, n, t, o)), (e.elementType = Vl), (e.lanes = l), e;
      case Wl:
        return (e = ze(19, n, t, o)), (e.elementType = Wl), (e.lanes = l), e;
      case Fa:
        return Zo(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ma:
              i = 10;
              break e;
            case Ia:
              i = 9;
              break e;
            case qi:
              i = 11;
              break e;
            case Ji:
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
function Zo(e, t, n, r) {
  return (
    (e = ze(22, e, r, t)),
    (e.elementType = Fa),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Al(e, t, n) {
  return (e = ze(6, e, null, t)), (e.lanes = n), e;
}
function Ml(e, t, n) {
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
function Am(e, t, n, r, o) {
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
    (this.eventTimes = gl(0)),
    (this.expirationTimes = gl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = gl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function zs(e, t, n, r, o, l, i, s, u) {
  return (
    (e = new Am(e, t, n, s, u)),
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
    hs(l),
    e
  );
}
function Mm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: nn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Td(e) {
  if (!e) return Tt;
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
          if (we(t.type)) {
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
    if (we(n)) return Tc(e, n, t);
  }
  return t;
}
function Pd(e, t, n, r, o, l, i, s, u) {
  return (
    (e = zs(n, r, !0, e, o, l, i, s, u)),
    (e.context = Td(null)),
    (n = e.current),
    (r = pe()),
    (o = jt(n)),
    (l = tt(r, o)),
    (l.callback = t ?? null),
    Ct(n, l, o),
    (e.current.lanes = o),
    _r(e, o, r),
    xe(e, r),
    e
  );
}
function el(e, t, n, r) {
  var o = t.current,
    l = pe(),
    i = jt(o);
  return (
    (n = Td(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = tt(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ct(o, t, i)),
    e !== null && ($e(e, o, i, l), oo(e, o, i)),
    i
  );
}
function Io(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function qu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ls(e, t) {
  qu(e, t), (e = e.alternate) && qu(e, t);
}
function Im() {
  return null;
}
var Od =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function bs(e) {
  this._internalRoot = e;
}
tl.prototype.render = bs.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  el(e, t, null, null);
};
tl.prototype.unmount = bs.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Xt(function () {
      el(null, e, null, null);
    }),
      (t[rt] = null);
  }
};
function tl(e) {
  this._internalRoot = e;
}
tl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = uc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ht.length && t !== 0 && t < ht[n].priority; n++);
    ht.splice(n, 0, e), n === 0 && cc(e);
  }
};
function As(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function nl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ju() {}
function Fm(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var a = Io(i);
        l.call(a);
      };
    }
    var i = Pd(t, r, e, 0, null, !1, !1, "", Ju);
    return (
      (e._reactRootContainer = i),
      (e[rt] = i.current),
      gr(e.nodeType === 8 ? e.parentNode : e),
      Xt(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var a = Io(u);
      s.call(a);
    };
  }
  var u = zs(e, 0, !1, null, null, !1, !1, "", Ju);
  return (
    (e._reactRootContainer = u),
    (e[rt] = u.current),
    gr(e.nodeType === 8 ? e.parentNode : e),
    Xt(function () {
      el(t, u, n, r);
    }),
    u
  );
}
function rl(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var u = Io(i);
        s.call(u);
      };
    }
    el(t, i, e, o);
  } else i = Fm(n, t, e, o, r);
  return Io(i);
}
ic = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Xn(t.pendingLanes);
        n !== 0 &&
          (es(t, n | 1), xe(t, q()), !(M & 6) && ((Tn = q() + 500), zt()));
      }
      break;
    case 13:
      Xt(function () {
        var r = ot(e, 1);
        if (r !== null) {
          var o = pe();
          $e(r, e, 1, o);
        }
      }),
        Ls(e, 1);
  }
};
ts = function (e) {
  if (e.tag === 13) {
    var t = ot(e, 134217728);
    if (t !== null) {
      var n = pe();
      $e(t, e, 134217728, n);
    }
    Ls(e, 134217728);
  }
};
sc = function (e) {
  if (e.tag === 13) {
    var t = jt(e),
      n = ot(e, t);
    if (n !== null) {
      var r = pe();
      $e(n, e, t, r);
    }
    Ls(e, t);
  }
};
uc = function () {
  return D;
};
ac = function (e, t) {
  var n = D;
  try {
    return (D = e), t();
  } finally {
    D = n;
  }
};
ti = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Gl(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = Ko(r);
            if (!o) throw Error(E(90));
            Ua(r), Gl(r, o);
          }
        }
      }
      break;
    case "textarea":
      $a(e, n);
      break;
    case "select":
      (t = n.value), t != null && gn(e, !!n.multiple, t, !1);
  }
};
Xa = Rs;
qa = Xt;
var Dm = { usingClientEntryPoint: !1, Events: [Tr, un, Ko, Ka, Ga, Rs] },
  Hn = {
    findFiberByHostInstance: Ft,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Um = {
    bundleType: Hn.bundleType,
    version: Hn.version,
    rendererPackageName: Hn.rendererPackageName,
    rendererConfig: Hn.rendererConfig,
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
      return (e = Za(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Hn.findFiberByHostInstance || Im,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Yr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Yr.isDisabled && Yr.supportsFiber)
    try {
      (Ho = Yr.inject(Um)), (Ge = Yr);
    } catch {}
}
Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dm;
Re.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!As(t)) throw Error(E(200));
  return Mm(e, t, null, n);
};
Re.createRoot = function (e, t) {
  if (!As(e)) throw Error(E(299));
  var n = !1,
    r = "",
    o = Od;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = zs(e, 1, !1, null, null, n, !1, r, o)),
    (e[rt] = t.current),
    gr(e.nodeType === 8 ? e.parentNode : e),
    new bs(t)
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
  return (e = Za(t)), (e = e === null ? null : e.stateNode), e;
};
Re.flushSync = function (e) {
  return Xt(e);
};
Re.hydrate = function (e, t, n) {
  if (!nl(t)) throw Error(E(200));
  return rl(null, e, t, !0, n);
};
Re.hydrateRoot = function (e, t, n) {
  if (!As(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    i = Od;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Pd(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[rt] = t.current),
    gr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new tl(t);
};
Re.render = function (e, t, n) {
  if (!nl(t)) throw Error(E(200));
  return rl(null, e, t, !1, n);
};
Re.unmountComponentAtNode = function (e) {
  if (!nl(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (Xt(function () {
        rl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[rt] = null);
        });
      }),
      !0)
    : !1;
};
Re.unstable_batchedUpdates = Rs;
Re.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!nl(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return rl(e, t, n, !1, r);
};
Re.version = "18.3.1-next-f1338f8080-20240426";
function zd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zd);
    } catch (e) {
      console.error(e);
    }
}
zd(), (za.exports = Re);
var Bm = za.exports,
  Ld,
  Yu = Bm;
(Ld = Yu.createRoot), Yu.hydrateRoot;
const Zu = (e) => {
    let t;
    const n = new Set(),
      r = (a, d) => {
        const m = typeof a == "function" ? a(t) : a;
        if (!Object.is(m, t)) {
          const h = t;
          (t =
            d ?? (typeof m != "object" || m === null)
              ? m
              : Object.assign({}, t, m)),
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
  $m = (e) => (e ? Zu(e) : Zu),
  Hm = (e) => e;
function Vm(e, t = Hm) {
  const n = Qs.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState())
  );
  return Qs.useDebugValue(n), n;
}
const ea = (e) => {
    const t = $m(e),
      n = (r) => Vm(t, r);
    return Object.assign(n, t), n;
  },
  ol = (e) => (e ? ea(e) : ea);
var yt = ((e) => (
  (e.CHAT = "chat"), (e.NOTICIAS = "noticias"), (e.PRODUCTOS = "productos"), e
))(yt || {});
const Fo = ol((e) => ({
  nav: "chat",
  setNav: (t) => e({ nav: t }),
  removeNav: () => e({ nav: "chat" }),
}));
function bd(e) {
  return w.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    ...e,
    children: [
      w.jsx("circle", {
        cx: "4",
        cy: "12",
        r: "3",
        fill: "currentColor",
        children: w.jsx("animate", {
          id: "svgSpinners3DotsFade0",
          fill: "freeze",
          attributeName: "opacity",
          begin: "0;svgSpinners3DotsFade1.end-0.25s",
          dur: "0.75s",
          values: "1;0.2",
        }),
      }),
      w.jsx("circle", {
        cx: "12",
        cy: "12",
        r: "3",
        fill: "currentColor",
        opacity: "0.4",
        children: w.jsx("animate", {
          fill: "freeze",
          attributeName: "opacity",
          begin: "svgSpinners3DotsFade0.begin+0.15s",
          dur: "0.75s",
          values: "1;0.2",
        }),
      }),
      w.jsx("circle", {
        cx: "20",
        cy: "12",
        r: "3",
        fill: "currentColor",
        opacity: "0.3",
        children: w.jsx("animate", {
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
const ta = ({ text: e, role: t }) =>
  w.jsx("div", {
    className: ` ${
      t === "assistant" ? "items-start" : "items-end"
    }  w-full flex flex-col justify-start  `,
    children:
      e == null
        ? void 0
        : e.map((n) =>
            w.jsx("div", {
              className: `${
                t === "assistant"
                  ? "bg-neutral-200 text-black"
                  : "bg-neutral-900 text-white"
              }   my-1 px-4 py-2 rounded  max-w-[70%]  text-opacity-90`,
              children: n || w.jsx(bd, { className: "m-1" }),
            })
          ),
  });
function Wm(e) {
  return w.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    ...e,
    children: w.jsxs("g", {
      fill: "none",
      children: [
        w.jsx("path", {
          d: "m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z",
        }),
        w.jsx("path", {
          fill: "currentColor",
          d: "M20.235 5.686c.432-1.195-.726-2.353-1.921-1.92L3.709 9.048c-1.199.434-1.344 2.07-.241 2.709l4.662 2.699l4.163-4.163a1 1 0 0 1 1.414 1.414L9.544 15.87l2.7 4.662c.638 1.103 2.274.957 2.708-.241z",
        }),
      ],
    }),
  });
}
function Ad(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Qm } = Object.prototype,
  { getPrototypeOf: Ms } = Object,
  ll = ((e) => (t) => {
    const n = Qm.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ve = (e) => ((e = e.toLowerCase()), (t) => ll(t) === e),
  il = (e) => (t) => typeof t === e,
  { isArray: Ln } = Array,
  Nr = il("undefined");
function Km(e) {
  return (
    e !== null &&
    !Nr(e) &&
    e.constructor !== null &&
    !Nr(e.constructor) &&
    je(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Md = Ve("ArrayBuffer");
function Gm(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Md(e.buffer)),
    t
  );
}
const Xm = il("string"),
  je = il("function"),
  Id = il("number"),
  sl = (e) => e !== null && typeof e == "object",
  qm = (e) => e === !0 || e === !1,
  fo = (e) => {
    if (ll(e) !== "object") return !1;
    const t = Ms(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Jm = Ve("Date"),
  Ym = Ve("File"),
  Zm = Ve("Blob"),
  eh = Ve("FileList"),
  th = (e) => sl(e) && je(e.pipe),
  nh = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (je(e.append) &&
          ((t = ll(e)) === "formdata" ||
            (t === "object" &&
              je(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  rh = Ve("URLSearchParams"),
  [oh, lh, ih, sh] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Ve
  ),
  uh = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Or(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), Ln(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const l = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = l.length;
    let s;
    for (r = 0; r < i; r++) (s = l[r]), t.call(null, e[s], s, e);
  }
}
function Fd(e, t) {
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
  Dd = (e) => !Nr(e) && e !== Bt;
function bi() {
  const { caseless: e } = (Dd(this) && this) || {},
    t = {},
    n = (r, o) => {
      const l = (e && Fd(t, o)) || o;
      fo(t[l]) && fo(r)
        ? (t[l] = bi(t[l], r))
        : fo(r)
        ? (t[l] = bi({}, r))
        : Ln(r)
        ? (t[l] = r.slice())
        : (t[l] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Or(arguments[r], n);
  return t;
}
const ah = (e, t, n, { allOwnKeys: r } = {}) => (
    Or(
      t,
      (o, l) => {
        n && je(o) ? (e[l] = Ad(o, n)) : (e[l] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  ch = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  dh = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  fh = (e, t, n, r) => {
    let o, l, i;
    const s = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), l = o.length; l-- > 0; )
        (i = o[l]), (!r || r(i, e, t)) && !s[i] && ((t[i] = e[i]), (s[i] = !0));
      e = n !== !1 && Ms(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  ph = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  mh = (e) => {
    if (!e) return null;
    if (Ln(e)) return e;
    let t = e.length;
    if (!Id(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  hh = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Ms(Uint8Array)),
  gh = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const l = o.value;
      t.call(e, l[0], l[1]);
    }
  },
  yh = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  vh = Ve("HTMLFormElement"),
  wh = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  na = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  xh = Ve("RegExp"),
  Ud = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Or(n, (o, l) => {
      let i;
      (i = t(o, l, e)) !== !1 && (r[l] = i || o);
    }),
      Object.defineProperties(e, r);
  },
  Sh = (e) => {
    Ud(e, (t, n) => {
      if (je(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (je(r)) {
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
  kh = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((l) => {
          n[l] = !0;
        });
      };
    return Ln(e) ? r(e) : r(String(e).split(t)), n;
  },
  Eh = () => {},
  Ch = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Il = "abcdefghijklmnopqrstuvwxyz",
  ra = "0123456789",
  Bd = { DIGIT: ra, ALPHA: Il, ALPHA_DIGIT: Il + Il.toUpperCase() + ra },
  Nh = (e = 16, t = Bd.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function jh(e) {
  return !!(
    e &&
    je(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const _h = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (sl(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const l = Ln(r) ? [] : {};
            return (
              Or(r, (i, s) => {
                const u = n(i, o + 1);
                !Nr(u) && (l[s] = u);
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
  Rh = Ve("AsyncFunction"),
  Th = (e) => e && (sl(e) || je(e)) && je(e.then) && je(e.catch),
  $d = ((e, t) =>
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
    je(Bt.postMessage)
  ),
  Ph =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Bt)
      : (typeof process < "u" && process.nextTick) || $d,
  y = {
    isArray: Ln,
    isArrayBuffer: Md,
    isBuffer: Km,
    isFormData: nh,
    isArrayBufferView: Gm,
    isString: Xm,
    isNumber: Id,
    isBoolean: qm,
    isObject: sl,
    isPlainObject: fo,
    isReadableStream: oh,
    isRequest: lh,
    isResponse: ih,
    isHeaders: sh,
    isUndefined: Nr,
    isDate: Jm,
    isFile: Ym,
    isBlob: Zm,
    isRegExp: xh,
    isFunction: je,
    isStream: th,
    isURLSearchParams: rh,
    isTypedArray: hh,
    isFileList: eh,
    forEach: Or,
    merge: bi,
    extend: ah,
    trim: uh,
    stripBOM: ch,
    inherits: dh,
    toFlatObject: fh,
    kindOf: ll,
    kindOfTest: Ve,
    endsWith: ph,
    toArray: mh,
    forEachEntry: gh,
    matchAll: yh,
    isHTMLForm: vh,
    hasOwnProperty: na,
    hasOwnProp: na,
    reduceDescriptors: Ud,
    freezeMethods: Sh,
    toObjectSet: kh,
    toCamelCase: wh,
    noop: Eh,
    toFiniteNumber: Ch,
    findKey: Fd,
    global: Bt,
    isContextDefined: Dd,
    ALPHABET: Bd,
    generateString: Nh,
    isSpecCompliantForm: jh,
    toJSONObject: _h,
    isAsyncFn: Rh,
    isThenable: Th,
    setImmediate: $d,
    asap: Ph,
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
y.inherits(O, Error, {
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
      config: y.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Hd = O.prototype,
  Vd = {};
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
  Vd[e] = { value: e };
});
Object.defineProperties(O, Vd);
Object.defineProperty(Hd, "isAxiosError", { value: !0 });
O.from = (e, t, n, r, o, l) => {
  const i = Object.create(Hd);
  return (
    y.toFlatObject(
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
const Oh = null;
function Ai(e) {
  return y.isPlainObject(e) || y.isArray(e);
}
function Wd(e) {
  return y.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function oa(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, l) {
          return (o = Wd(o)), !n && l ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function zh(e) {
  return y.isArray(e) && !e.some(Ai);
}
const Lh = y.toFlatObject(y, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function ul(e, t, n) {
  if (!y.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = y.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, k) {
        return !y.isUndefined(k[v]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || d,
    l = n.dots,
    i = n.indexes,
    u = (n.Blob || (typeof Blob < "u" && Blob)) && y.isSpecCompliantForm(t);
  if (!y.isFunction(o)) throw new TypeError("visitor must be a function");
  function a(g) {
    if (g === null) return "";
    if (y.isDate(g)) return g.toISOString();
    if (!u && y.isBlob(g))
      throw new O("Blob is not supported. Use a Buffer instead.");
    return y.isArrayBuffer(g) || y.isTypedArray(g)
      ? u && typeof Blob == "function"
        ? new Blob([g])
        : Buffer.from(g)
      : g;
  }
  function d(g, v, k) {
    let f = g;
    if (g && !k && typeof g == "object") {
      if (y.endsWith(v, "{}"))
        (v = r ? v : v.slice(0, -2)), (g = JSON.stringify(g));
      else if (
        (y.isArray(g) && zh(g)) ||
        ((y.isFileList(g) || y.endsWith(v, "[]")) && (f = y.toArray(g)))
      )
        return (
          (v = Wd(v)),
          f.forEach(function (p, x) {
            !(y.isUndefined(p) || p === null) &&
              t.append(
                i === !0 ? oa([v], x, l) : i === null ? v : v + "[]",
                a(p)
              );
          }),
          !1
        );
    }
    return Ai(g) ? !0 : (t.append(oa(k, v, l), a(g)), !1);
  }
  const m = [],
    h = Object.assign(Lh, {
      defaultVisitor: d,
      convertValue: a,
      isVisitable: Ai,
    });
  function S(g, v) {
    if (!y.isUndefined(g)) {
      if (m.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      m.push(g),
        y.forEach(g, function (f, c) {
          (!(y.isUndefined(f) || f === null) &&
            o.call(t, f, y.isString(c) ? c.trim() : c, v, h)) === !0 &&
            S(f, v ? v.concat(c) : [c]);
        }),
        m.pop();
    }
  }
  if (!y.isObject(e)) throw new TypeError("data must be an object");
  return S(e), t;
}
function la(e) {
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
function Is(e, t) {
  (this._pairs = []), e && ul(e, this, t);
}
const Qd = Is.prototype;
Qd.append = function (t, n) {
  this._pairs.push([t, n]);
};
Qd.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, la);
      }
    : la;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function bh(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Kd(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || bh,
    o = n && n.serialize;
  let l;
  if (
    (o
      ? (l = o(t, n))
      : (l = y.isURLSearchParams(t) ? t.toString() : new Is(t, n).toString(r)),
    l)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + l);
  }
  return e;
}
class ia {
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
    y.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Gd = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Ah = typeof URLSearchParams < "u" ? URLSearchParams : Is,
  Mh = typeof FormData < "u" ? FormData : null,
  Ih = typeof Blob < "u" ? Blob : null,
  Fh = {
    isBrowser: !0,
    classes: { URLSearchParams: Ah, FormData: Mh, Blob: Ih },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Fs = typeof window < "u" && typeof document < "u",
  Mi = (typeof navigator == "object" && navigator) || void 0,
  Dh =
    Fs &&
    (!Mi || ["ReactNative", "NativeScript", "NS"].indexOf(Mi.product) < 0),
  Uh =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Bh = (Fs && window.location.href) || "http://localhost",
  $h = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Fs,
        hasStandardBrowserEnv: Dh,
        hasStandardBrowserWebWorkerEnv: Uh,
        navigator: Mi,
        origin: Bh,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Se = { ...$h, ...Fh };
function Hh(e, t) {
  return ul(
    e,
    new Se.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, l) {
          return Se.isNode && y.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : l.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Vh(e) {
  return y
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function Wh(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let l;
  for (r = 0; r < o; r++) (l = n[r]), (t[l] = e[l]);
  return t;
}
function Xd(e) {
  function t(n, r, o, l) {
    let i = n[l++];
    if (i === "__proto__") return !0;
    const s = Number.isFinite(+i),
      u = l >= n.length;
    return (
      (i = !i && y.isArray(o) ? o.length : i),
      u
        ? (y.hasOwnProp(o, i) ? (o[i] = [o[i], r]) : (o[i] = r), !s)
        : ((!o[i] || !y.isObject(o[i])) && (o[i] = []),
          t(n, r, o[i], l) && y.isArray(o[i]) && (o[i] = Wh(o[i])),
          !s)
    );
  }
  if (y.isFormData(e) && y.isFunction(e.entries)) {
    const n = {};
    return (
      y.forEachEntry(e, (r, o) => {
        t(Vh(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function Qh(e, t, n) {
  if (y.isString(e))
    try {
      return (t || JSON.parse)(e), y.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(e);
}
const zr = {
  transitional: Gd,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        l = y.isObject(t);
      if ((l && y.isHTMLForm(t) && (t = new FormData(t)), y.isFormData(t)))
        return o ? JSON.stringify(Xd(t)) : t;
      if (
        y.isArrayBuffer(t) ||
        y.isBuffer(t) ||
        y.isStream(t) ||
        y.isFile(t) ||
        y.isBlob(t) ||
        y.isReadableStream(t)
      )
        return t;
      if (y.isArrayBufferView(t)) return t.buffer;
      if (y.isURLSearchParams(t))
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
          return Hh(t, this.formSerializer).toString();
        if ((s = y.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return ul(
            s ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer
          );
        }
      }
      return l || o ? (n.setContentType("application/json", !1), Qh(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || zr.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (y.isResponse(t) || y.isReadableStream(t)) return t;
      if (t && y.isString(t) && ((r && !this.responseType) || o)) {
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
  env: { FormData: Se.classes.FormData, Blob: Se.classes.Blob },
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
y.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  zr.headers[e] = {};
});
const Kh = y.toObjectSet([
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
  Gh = (e) => {
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
              !(!n || (t[n] && Kh[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  sa = Symbol("internals");
function Vn(e) {
  return e && String(e).trim().toLowerCase();
}
function po(e) {
  return e === !1 || e == null ? e : y.isArray(e) ? e.map(po) : String(e);
}
function Xh(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const qh = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Fl(e, t, n, r, o) {
  if (y.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!y.isString(t))) {
    if (y.isString(r)) return t.indexOf(r) !== -1;
    if (y.isRegExp(r)) return r.test(t);
  }
}
function Jh(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Yh(e, t) {
  const n = y.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, l, i) {
        return this[r].call(this, t, o, l, i);
      },
      configurable: !0,
    });
  });
}
class ke {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function l(s, u, a) {
      const d = Vn(u);
      if (!d) throw new Error("header name must be a non-empty string");
      const m = y.findKey(o, d);
      (!m || o[m] === void 0 || a === !0 || (a === void 0 && o[m] !== !1)) &&
        (o[m || u] = po(s));
    }
    const i = (s, u) => y.forEach(s, (a, d) => l(a, d, u));
    if (y.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (y.isString(t) && (t = t.trim()) && !qh(t)) i(Gh(t), n);
    else if (y.isHeaders(t)) for (const [s, u] of t.entries()) l(u, s, r);
    else t != null && l(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Vn(t)), t)) {
      const r = y.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return Xh(o);
        if (y.isFunction(n)) return n.call(this, o, r);
        if (y.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Vn(t)), t)) {
      const r = y.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Fl(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function l(i) {
      if (((i = Vn(i)), i)) {
        const s = y.findKey(r, i);
        s && (!n || Fl(r, r[s], s, n)) && (delete r[s], (o = !0));
      }
    }
    return y.isArray(t) ? t.forEach(l) : l(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const l = n[r];
      (!t || Fl(this, this[l], l, t, !0)) && (delete this[l], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      y.forEach(this, (o, l) => {
        const i = y.findKey(r, l);
        if (i) {
          (n[i] = po(o)), delete n[l];
          return;
        }
        const s = t ? Jh(l) : String(l).trim();
        s !== l && delete n[l], (n[s] = po(o)), (r[s] = !0);
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
      y.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && y.isArray(r) ? r.join(", ") : r);
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
    const r = (this[sa] = this[sa] = { accessors: {} }).accessors,
      o = this.prototype;
    function l(i) {
      const s = Vn(i);
      r[s] || (Yh(o, i), (r[s] = !0));
    }
    return y.isArray(t) ? t.forEach(l) : l(t), this;
  }
}
ke.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
y.reduceDescriptors(ke.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
y.freezeMethods(ke);
function Dl(e, t) {
  const n = this || zr,
    r = t || n,
    o = ke.from(r.headers);
  let l = r.data;
  return (
    y.forEach(e, function (s) {
      l = s.call(n, l, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    l
  );
}
function qd(e) {
  return !!(e && e.__CANCEL__);
}
function bn(e, t, n) {
  O.call(this, e ?? "canceled", O.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
y.inherits(bn, O, { __CANCEL__: !0 });
function Jd(e, t, n) {
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
function Zh(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function e0(e, t) {
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
      let m = l,
        h = 0;
      for (; m !== o; ) (h += n[m++]), (m = m % e);
      if (((o = (o + 1) % e), o === l && (l = (l + 1) % e), a - i < t)) return;
      const S = d && a - d;
      return S ? Math.round((h * 1e3) / S) : void 0;
    }
  );
}
function t0(e, t) {
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
        m = d - n;
      m >= r
        ? i(a, d)
        : ((o = a),
          l ||
            (l = setTimeout(() => {
              (l = null), i(o);
            }, r - m)));
    },
    () => o && i(o),
  ];
}
const Do = (e, t, n = 3) => {
    let r = 0;
    const o = e0(50, 250);
    return t0((l) => {
      const i = l.loaded,
        s = l.lengthComputable ? l.total : void 0,
        u = i - r,
        a = o(u),
        d = i <= s;
      r = i;
      const m = {
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
      e(m);
    }, n);
  },
  ua = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  aa =
    (e) =>
    (...t) =>
      y.asap(() => e(...t)),
  n0 = Se.hasStandardBrowserEnv
    ? (function () {
        const t =
            Se.navigator && /(msie|trident)/i.test(Se.navigator.userAgent),
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
            const s = y.isString(i) ? o(i) : i;
            return s.protocol === r.protocol && s.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  r0 = Se.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, l) {
          const i = [e + "=" + encodeURIComponent(t)];
          y.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
            y.isString(r) && i.push("path=" + r),
            y.isString(o) && i.push("domain=" + o),
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
function o0(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function l0(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Yd(e, t) {
  return e && !o0(t) ? l0(e, t) : t;
}
const ca = (e) => (e instanceof ke ? { ...e } : e);
function qt(e, t) {
  t = t || {};
  const n = {};
  function r(a, d, m) {
    return y.isPlainObject(a) && y.isPlainObject(d)
      ? y.merge.call({ caseless: m }, a, d)
      : y.isPlainObject(d)
      ? y.merge({}, d)
      : y.isArray(d)
      ? d.slice()
      : d;
  }
  function o(a, d, m) {
    if (y.isUndefined(d)) {
      if (!y.isUndefined(a)) return r(void 0, a, m);
    } else return r(a, d, m);
  }
  function l(a, d) {
    if (!y.isUndefined(d)) return r(void 0, d);
  }
  function i(a, d) {
    if (y.isUndefined(d)) {
      if (!y.isUndefined(a)) return r(void 0, a);
    } else return r(void 0, d);
  }
  function s(a, d, m) {
    if (m in t) return r(a, d);
    if (m in e) return r(void 0, a);
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
    headers: (a, d) => o(ca(a), ca(d), !0),
  };
  return (
    y.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const m = u[d] || o,
        h = m(e[d], t[d], d);
      (y.isUndefined(h) && m !== s) || (n[d] = h);
    }),
    n
  );
}
const Zd = (e) => {
    const t = qt({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: o,
      xsrfCookieName: l,
      headers: i,
      auth: s,
    } = t;
    (t.headers = i = ke.from(i)),
      (t.url = Kd(Yd(t.baseURL, t.url), e.params, e.paramsSerializer)),
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
    if (y.isFormData(n)) {
      if (Se.hasStandardBrowserEnv || Se.hasStandardBrowserWebWorkerEnv)
        i.setContentType(void 0);
      else if ((u = i.getContentType()) !== !1) {
        const [a, ...d] = u
          ? u
              .split(";")
              .map((m) => m.trim())
              .filter(Boolean)
          : [];
        i.setContentType([a || "multipart/form-data", ...d].join("; "));
      }
    }
    if (
      Se.hasStandardBrowserEnv &&
      (r && y.isFunction(r) && (r = r(t)), r || (r !== !1 && n0(t.url)))
    ) {
      const a = o && l && r0.read(l);
      a && i.set(o, a);
    }
    return t;
  },
  i0 = typeof XMLHttpRequest < "u",
  s0 =
    i0 &&
    function (e) {
      return new Promise(function (n, r) {
        const o = Zd(e);
        let l = o.data;
        const i = ke.from(o.headers).normalize();
        let { responseType: s, onUploadProgress: u, onDownloadProgress: a } = o,
          d,
          m,
          h,
          S,
          g;
        function v() {
          S && S(),
            g && g(),
            o.cancelToken && o.cancelToken.unsubscribe(d),
            o.signal && o.signal.removeEventListener("abort", d);
        }
        let k = new XMLHttpRequest();
        k.open(o.method.toUpperCase(), o.url, !0), (k.timeout = o.timeout);
        function f() {
          if (!k) return;
          const p = ke.from(
              "getAllResponseHeaders" in k && k.getAllResponseHeaders()
            ),
            C = {
              data:
                !s || s === "text" || s === "json"
                  ? k.responseText
                  : k.response,
              status: k.status,
              statusText: k.statusText,
              headers: p,
              config: e,
              request: k,
            };
          Jd(
            function (j) {
              n(j), v();
            },
            function (j) {
              r(j), v();
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
            const C = o.transitional || Gd;
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
            y.forEach(i.toJSON(), function (x, C) {
              k.setRequestHeader(C, x);
            }),
          y.isUndefined(o.withCredentials) ||
            (k.withCredentials = !!o.withCredentials),
          s && s !== "json" && (k.responseType = o.responseType),
          a && (([h, g] = Do(a, !0)), k.addEventListener("progress", h)),
          u &&
            k.upload &&
            (([m, S] = Do(u)),
            k.upload.addEventListener("progress", m),
            k.upload.addEventListener("loadend", S)),
          (o.cancelToken || o.signal) &&
            ((d = (p) => {
              k &&
                (r(!p || p.type ? new bn(null, e, k) : p),
                k.abort(),
                (k = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(d),
            o.signal &&
              (o.signal.aborted ? d() : o.signal.addEventListener("abort", d)));
        const c = Zh(o.url);
        if (c && Se.protocols.indexOf(c) === -1) {
          r(new O("Unsupported protocol " + c + ":", O.ERR_BAD_REQUEST, e));
          return;
        }
        k.send(l || null);
      });
    },
  u0 = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        o;
      const l = function (a) {
        if (!o) {
          (o = !0), s();
          const d = a instanceof Error ? a : this.reason;
          r.abort(
            d instanceof O ? d : new bn(d instanceof Error ? d.message : d)
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
      return (u.unsubscribe = () => y.asap(s)), u;
    }
  },
  a0 = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      o;
    for (; r < n; ) (o = r + t), yield e.slice(r, o), (r = o);
  },
  c0 = async function* (e, t) {
    for await (const n of d0(e)) yield* a0(n, t);
  },
  d0 = async function* (e) {
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
  da = (e, t, n, r) => {
    const o = c0(e, t);
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
            let m = d.byteLength;
            if (n) {
              let h = (l += m);
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
  al =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  ef = al && typeof ReadableStream == "function",
  f0 =
    al &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  tf = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  p0 =
    ef &&
    tf(() => {
      let e = !1;
      const t = new Request(Se.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  fa = 64 * 1024,
  Ii = ef && tf(() => y.isReadableStream(new Response("").body)),
  Uo = { stream: Ii && ((e) => e.body) };
al &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Uo[t] &&
        (Uo[t] = y.isFunction(e[t])
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
const m0 = async (e) => {
    if (e == null) return 0;
    if (y.isBlob(e)) return e.size;
    if (y.isSpecCompliantForm(e))
      return (
        await new Request(Se.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (y.isArrayBufferView(e) || y.isArrayBuffer(e)) return e.byteLength;
    if ((y.isURLSearchParams(e) && (e = e + ""), y.isString(e)))
      return (await f0(e)).byteLength;
  },
  h0 = async (e, t) => {
    const n = y.toFiniteNumber(e.getContentLength());
    return n ?? m0(t);
  },
  g0 =
    al &&
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
        withCredentials: m = "same-origin",
        fetchOptions: h,
      } = Zd(e);
      a = a ? (a + "").toLowerCase() : "text";
      let S = u0([o, l && l.toAbortSignal()], i),
        g;
      const v =
        S &&
        S.unsubscribe &&
        (() => {
          S.unsubscribe();
        });
      let k;
      try {
        if (
          u &&
          p0 &&
          n !== "get" &&
          n !== "head" &&
          (k = await h0(d, r)) !== 0
        ) {
          let C = new Request(t, { method: "POST", body: r, duplex: "half" }),
            N;
          if (
            (y.isFormData(r) &&
              (N = C.headers.get("content-type")) &&
              d.setContentType(N),
            C.body)
          ) {
            const [j, T] = ua(k, Do(aa(u)));
            r = da(C.body, fa, j, T);
          }
        }
        y.isString(m) || (m = m ? "include" : "omit");
        const f = "credentials" in Request.prototype;
        g = new Request(t, {
          ...h,
          signal: S,
          method: n.toUpperCase(),
          headers: d.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: f ? m : void 0,
        });
        let c = await fetch(g);
        const p = Ii && (a === "stream" || a === "response");
        if (Ii && (s || (p && v))) {
          const C = {};
          ["status", "statusText", "headers"].forEach((U) => {
            C[U] = c[U];
          });
          const N = y.toFiniteNumber(c.headers.get("content-length")),
            [j, T] = (s && ua(N, Do(aa(s), !0))) || [];
          c = new Response(
            da(c.body, fa, j, () => {
              T && T(), v && v();
            }),
            C
          );
        }
        a = a || "text";
        let x = await Uo[y.findKey(Uo, a) || "text"](c, e);
        return (
          !p && v && v(),
          await new Promise((C, N) => {
            Jd(C, N, {
              data: x,
              headers: ke.from(c.headers),
              status: c.status,
              statusText: c.statusText,
              config: e,
              request: g,
            });
          })
        );
      } catch (f) {
        throw (
          (v && v(),
          f && f.name === "TypeError" && /fetch/i.test(f.message)
            ? Object.assign(new O("Network Error", O.ERR_NETWORK, e, g), {
                cause: f.cause || f,
              })
            : O.from(f, f && f.code, e, g))
        );
      }
    }),
  Fi = { http: Oh, xhr: s0, fetch: g0 };
y.forEach(Fi, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const pa = (e) => `- ${e}`,
  y0 = (e) => y.isFunction(e) || e === null || e === !1,
  nf = {
    getAdapter: (e) => {
      e = y.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let l = 0; l < t; l++) {
        n = e[l];
        let i;
        if (
          ((r = n),
          !y0(n) && ((r = Fi[(i = String(n)).toLowerCase()]), r === void 0))
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
              l.map(pa).join(`
`)
            : " " + pa(l[0])
          : "as no adapter specified";
        throw new O(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Fi,
  };
function Ul(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new bn(null, e);
}
function ma(e) {
  return (
    Ul(e),
    (e.headers = ke.from(e.headers)),
    (e.data = Dl.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    nf
      .getAdapter(e.adapter || zr.adapter)(e)
      .then(
        function (r) {
          return (
            Ul(e),
            (r.data = Dl.call(e, e.transformResponse, r)),
            (r.headers = ke.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            qd(r) ||
              (Ul(e),
              r &&
                r.response &&
                ((r.response.data = Dl.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = ke.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const rf = "1.7.7",
  Ds = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Ds[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const ha = {};
Ds.transitional = function (t, n, r) {
  function o(l, i) {
    return (
      "[Axios v" +
      rf +
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
        !ha[i] &&
        ((ha[i] = !0),
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
function v0(e, t, n) {
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
const Di = { assertOptions: v0, validators: Ds },
  ct = Di.validators;
class Vt {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new ia(), response: new ia() });
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
      (n = qt(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: l } = n;
    r !== void 0 &&
      Di.assertOptions(
        r,
        {
          silentJSONParsing: ct.transitional(ct.boolean),
          forcedJSONParsing: ct.transitional(ct.boolean),
          clarifyTimeoutError: ct.transitional(ct.boolean),
        },
        !1
      ),
      o != null &&
        (y.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Di.assertOptions(
              o,
              { encode: ct.function, serialize: ct.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = l && y.merge(l.common, l[n.method]);
    l &&
      y.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (g) => {
          delete l[g];
        }
      ),
      (n.headers = ke.concat(i, l));
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
        ((u = u && v.synchronous), s.unshift(v.fulfilled, v.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (v) {
      a.push(v.fulfilled, v.rejected);
    });
    let d,
      m = 0,
      h;
    if (!u) {
      const g = [ma.bind(this), void 0];
      for (
        g.unshift.apply(g, s),
          g.push.apply(g, a),
          h = g.length,
          d = Promise.resolve(n);
        m < h;

      )
        d = d.then(g[m++], g[m++]);
      return d;
    }
    h = s.length;
    let S = n;
    for (m = 0; m < h; ) {
      const g = s[m++],
        v = s[m++];
      try {
        S = g(S);
      } catch (k) {
        v.call(this, k);
        break;
      }
    }
    try {
      d = ma.call(this, S);
    } catch (g) {
      return Promise.reject(g);
    }
    for (m = 0, h = a.length; m < h; ) d = d.then(a[m++], a[m++]);
    return d;
  }
  getUri(t) {
    t = qt(this.defaults, t);
    const n = Yd(t.baseURL, t.url);
    return Kd(n, t.params, t.paramsSerializer);
  }
}
y.forEach(["delete", "get", "head", "options"], function (t) {
  Vt.prototype[t] = function (n, r) {
    return this.request(
      qt(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
y.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (l, i, s) {
      return this.request(
        qt(s || {}, {
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
class Us {
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
        r.reason || ((r.reason = new bn(l, i, s)), n(r.reason));
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
      token: new Us(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
function w0(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function x0(e) {
  return y.isObject(e) && e.isAxiosError === !0;
}
const Ui = {
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
Object.entries(Ui).forEach(([e, t]) => {
  Ui[t] = e;
});
function of(e) {
  const t = new Vt(e),
    n = Ad(Vt.prototype.request, t);
  return (
    y.extend(n, Vt.prototype, t, { allOwnKeys: !0 }),
    y.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return of(qt(e, o));
    }),
    n
  );
}
const Y = of(zr);
Y.Axios = Vt;
Y.CanceledError = bn;
Y.CancelToken = Us;
Y.isCancel = qd;
Y.VERSION = rf;
Y.toFormData = ul;
Y.AxiosError = O;
Y.Cancel = Y.CanceledError;
Y.all = function (t) {
  return Promise.all(t);
};
Y.spread = w0;
Y.isAxiosError = x0;
Y.mergeConfig = qt;
Y.AxiosHeaders = ke;
Y.formToJSON = (e) => Xd(y.isHTMLForm(e) ? new FormData(e) : e);
Y.getAdapter = nf.getAdapter;
Y.HttpStatusCode = Ui;
Y.default = Y;
var lf = ((e) => (
    (e.USER = "user"), (e.ASSISTANT = "assistant"), (e.SYSTEM = "system"), e
  ))(lf || {}),
  Jt = ((e) => (
    (e.TEXT = "message"),
    (e.IMAGE = "image"),
    (e.VIDEO = "video"),
    (e.MAP = "map"),
    (e.WEB = "web"),
    (e.PRODUCT = "product"),
    e
  ))(Jt || {}),
  Bs = ((e) => (
    (e.MAP = "map"),
    (e.WEB = "web"),
    (e.PRODUCT = "product"),
    (e.LINK = "link"),
    (e.BUTTON = "button"),
    (e.NULL = ""),
    e
  ))(Bs || {});
const ga = async (e) => {
    try {
      return (
        await Y.post(
          "http://localhost:8000/api/answer-chat/web",
          {
            role: lf.USER,
            type: Jt.TEXT,
            time: new Date().toISOString(),
            content: [{ type: Jt.TEXT, metadata: { text: e } }],
            action: { type: Bs.NULL, metadata: {} },
            id_project: "86151897-dded-48be-a983-b6aa3ec69dd2",
            id_chat: "888",
            id_user_web: "123",
          },
          { headers: { "Content-Type": "application/json" } }
        )
      ).data;
    } catch (t) {
      return console.error("Error:", t), [];
    }
  },
  hn = ol((e) => ({
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
                  content: [{ type: Jt.TEXT, metadata: { text: [t] } }],
                  action: { type: Bs.NULL, metadata: {} },
                  type: Jt.TEXT,
                  time: new Date().toISOString(),
                },
              ],
            }
      ),
    clearChat: () => e({ chat: [] }),
    changeLoad: () => e((t) => ({ load: !t.load })),
  }));
function S0(e) {
  return w.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    ...e,
    children: w.jsx("path", {
      fill: "currentColor",
      d: "M12 7a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7",
    }),
  });
}
const k0 = () => {
  const e = hn((d) => d.load),
    t = hn((d) => d.changeLoad),
    n = hn((d) => d.setChat),
    r = hn((d) => d.addMessageUser),
    o = Ue.useRef(null),
    l = Ue.useRef([]),
    [i, s] = Ue.useState(""),
    u = Ue.useCallback(() => {
      if (l.current.length == 0) {
        console.log("saliendo ... ");
        return;
      }
      o.current && clearTimeout(o.current),
        (o.current = setTimeout(async () => {
          const d = l.current;
          (l.current = []), t();
          const m = await ga(d.join(","));
          n(m), t();
        }, 2e3));
    }, [i, t, ga, n]),
    a = (d) => {
      s(d.target.value);
    };
  return w.jsxs("div", {
    className:
      "flex flex-row gap-2  w-full rounded-full py-2 px-2 border border-black ",
    children: [
      w.jsx("input", {
        value: i,
        onChange: (d) => {
          a(d);
        },
        onKeyDown: (d) => {
          d.key === "Enter" && !e ? (r(i), l.current.push(i), u(), s("")) : u();
        },
        className:
          "text-xl flex-1 px-2 border-none outline-none bg-transparent",
      }),
      w.jsx("button", {
        disabled: e,
        onClick: () => {
          r(i), l.current.push(i), u(), s("");
        },
        className: " bg-black rounded-full p-1.5",
        children: e
          ? w.jsx(S0, { className: "w-8 h-8  text-neutral-200 animate-pulse" })
          : w.jsx(Wm, { className: "w-8 h-8  text-neutral-200" }),
      }),
    ],
  });
};
var ir = ((e) => ((e.MAP = "map"), (e.WEB = "web"), (e.INIT = "init"), e))(
  ir || {}
);
const sr = ol((e) => ({
    type: "init",
    setDisplay: (t) => e({ type: t }),
    removeDisplay: () => e({ type: "init" }),
    metadata: {},
    setMetadata: (t) => e({ metadata: t }),
  })),
  E0 = ({ title: e, description: t, img: n, link: r, role: o, time: l }) => {
    const i = sr((a) => a.setDisplay),
      s = sr((a) => a.setMetadata),
      u = sr((a) => a.metadata);
    return (
      console.log("datos: ", e, t, n, r, o, l),
      w.jsx("div", {
        className: ` ${
          o === "assistant" ? "items-start" : "items-end"
        }  w-full flex flex-col justify-start  `,
        children: w.jsxs("div", {
          className: `${
            o === "assistant" ? " text-black" : "bg-neutral-900 text-white"
          }   my-1  rounded  max-w-[80%] flex items-start gap-1  text-opacity-90`,
          children: [
            w.jsxs("div", {
              onClick: () => {
                console.log("hola: metadata ", u),
                  s({ title: e, description: t, link: r, role: o, img: n }),
                  i(ir.WEB);
              },
              className: " flex  flex-col gap-2 w-1/3    ",
              children: [
                w.jsx("img", {
                  className: " aspect-auto   rounded bg-neutral-200 p-2",
                  src: "https://th.bing.com/th/id/R.6a2193a79bba1c2214b2d1ecdeca856b?rik=74%2fTKyxctg%2fCmA&riu=http%3a%2f%2fwww.blogerin.com%2fwp-content%2fuploads%2f2012%2f10%2fFotos-tiernas-de-perritos-wallpapers-2.jpg&ehk=2n7WA5Xz5SPLpcGw25Fh5QAQXVj7ywGhVORksb1OPE4%3d&risl=&pid=ImgRaw&r=0",
                }),
                w.jsx("img", {
                  className: "   aspect-auto   rounded bg-neutral-200 p-2",
                  src: "https://th.bing.com/th/id/OIP.FQR3B8ppNjvaw4XFHiZyBAHaEK?rs=1&pid=ImgDetMain",
                }),
              ],
            }),
            w.jsxs("div", {
              className: " w-2/3 flex flex-col  items-start",
              children: [
                w.jsx("div", {
                  className:
                    " bg-neutral-200 my-1 mx-1 px-4 py-2 rounded     text-black text-opacity-90  ",
                  children: "Puppis",
                }),
                w.jsx("div", {
                  className:
                    "  bg-neutral-200 my-1 mx-1 px-4 py-2 rounded text-black text-opacity-60  break-all ",
                  children:
                    "dasdasasdasdasdashjod hasdhjashdjk hasjd hasjkdhl asklh djksa hjd",
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  C0 = () => {
    const e = hn((r) => r.chat),
      t = hn((r) => r.load),
      n = Ue.useRef(null);
    return (
      Ue.useEffect(() => {
        var r;
        (r = n.current) == null || r.scrollIntoView({ behavior: "smooth" });
      }, [e, t]),
      w.jsxs(w.Fragment, {
        children: [
          w.jsxs("div", {
            className:
              "flex-1  overflow-y-auto flex flex-col gap-1 px-2   rounded-lg",
            children: [
              e.map((r) =>
                r.content.map((o, l) => {
                  if (o.type === Jt.TEXT)
                    return w.jsx(ta, {
                      time: r.time,
                      text: r.content[l].metadata.text,
                      role: r.role,
                    });
                  if (o.type === Jt.PRODUCT)
                    return w.jsx(E0, {
                      title: r.content[l].metadata.title,
                      link: r.content[l].metadata.link,
                      time: r.time,
                      description: r.content[l].metadata.description,
                      img: r.content[l].metadata.img,
                      role: r.role,
                    });
                })
              ),
              w.jsx("button", {
                onClick: () => {
                  console.log(e);
                },
                children: "click!",
              }),
              t && w.jsx(ta, { text: [""], role: "assistant" }),
              w.jsx("div", { ref: n }),
            ],
          }),
          w.jsx(k0, {}),
        ],
      })
    );
  },
  Bo = ol((e) => ({
    noticeSelect: { id: "", title: "", content: "" },
    setNotice: (t) => e({ noticeSelect: t }),
    removeNotice: () => e({ noticeSelect: { id: "", title: "", content: "" } }),
  })),
  N0 = () => {
    const e = Bo((t) => t.noticeSelect);
    return w.jsxs("div", {
      className:
        " overflow-y-auto  opacity-100 flex flex-col bg-neutral-200 p-1 rounded  duration-500",
      children: [
        w.jsx("div", {
          className: "  rounded aspect-auto",
          children: w.jsx("img", {
            className: "aspect-auto",
            src: "https://i.ytimg.com/vi/oD3r09IL7vc/maxresdefault.jpg",
          }),
        }),
        w.jsx("p", {
          className: " px-1 py-1  break-all tracking-wide",
          children: e.title,
        }),
        w.jsx("p", {
          className: " px-1 pb-4 text-black text-opacity-70 break-all  ",
          children: e.content,
        }),
      ],
    });
  };
function j0(e) {
  return w.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "0.7em",
    height: "1em",
    viewBox: "0 0 256 367",
    ...e,
    children: [
      w.jsx("path", {
        fill: "#34a853",
        d: "M70.585 271.865a371 371 0 0 1 28.911 42.642c7.374 13.982 10.448 23.463 15.837 40.31c3.305 9.308 6.292 12.086 12.714 12.086c6.998 0 10.173-4.726 12.626-12.035c5.094-15.91 9.091-28.052 15.397-39.525c12.374-22.15 27.75-41.833 42.858-60.75c4.09-5.354 30.534-36.545 42.439-61.156c0 0 14.632-27.035 14.632-64.792c0-35.318-14.43-59.813-14.43-59.813l-41.545 11.126l-25.23 66.451l-6.242 9.163l-1.248 1.66l-1.66 2.078l-2.914 3.319l-4.164 4.163l-22.467 18.304l-56.17 32.432z",
      }),
      w.jsx("path", {
        fill: "#fbbc04",
        d: "M12.612 188.892c13.709 31.313 40.145 58.839 58.031 82.995l95.001-112.534s-13.384 17.504-37.662 17.504c-27.043 0-48.89-21.595-48.89-48.825c0-18.673 11.234-31.501 11.234-31.501l-64.489 17.28z",
      }),
      w.jsx("path", {
        fill: "#4285f4",
        d: "M166.705 5.787c31.552 10.173 58.558 31.53 74.893 63.023l-75.925 90.478s11.234-13.06 11.234-31.617c0-27.864-23.463-48.68-48.81-48.68c-23.969 0-37.735 17.475-37.735 17.475v-57z",
      }),
      w.jsx("path", {
        fill: "#1a73e8",
        d: "M30.015 45.765C48.86 23.218 82.02 0 127.736 0c22.18 0 38.89 5.823 38.89 5.823L90.29 96.516H36.205z",
      }),
      w.jsx("path", {
        fill: "#ea4335",
        d: "M12.612 188.892S0 164.194 0 128.414c0-33.817 13.146-63.377 30.015-82.649l60.318 50.759z",
      }),
    ],
  });
}
function sf(e) {
  return w.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    ...e,
    children: w.jsx("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M22 3h7v7m-1.5-5.5L20 12m-3-7H8a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-9",
    }),
  });
}
const _0 = () =>
  w.jsxs(w.Fragment, {
    children: [
      w.jsx("iframe", {
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467.14999929614396!2d-58.46377299494688!3d-34.63182601057183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc94e26944b13%3A0xdb196c848b9b23ce!2sSportClub%20Flores%20Norte!5e0!3m2!1ses-419!2sar!4v1727271326282!5m2!1ses-419!2sar",
        loading: "lazy",
        className: " rounded-xl h-full ",
      }),
      w.jsxs("button", {
        className:
          "flex text-start flex-row gap-3 items-center border border-neutral-400 bg-neutral-300 p-2 rounded hover:bg-neutral-200 active:bg-white",
        children: [
          w.jsx(j0, { className: "w-10 h-10" }),
          w.jsxs("div", {
            className: " text-start text-sm flex-1",
            children: [
              w.jsx("p", { children: "Google Maps" }),
              w.jsx("p", { children: "maps.google.com" }),
            ],
          }),
          w.jsx(sf, { className: " self-start " }),
        ],
      }),
    ],
  });
function R0(e) {
  return w.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 14 14",
    ...e,
    children: w.jsxs("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      children: [
        w.jsx("path", {
          d: "M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13M.5 7h13",
        }),
        w.jsx("path", {
          d: "M9.5 7A11.22 11.22 0 0 1 7 13.5A11.22 11.22 0 0 1 4.5 7A11.22 11.22 0 0 1 7 .5A11.22 11.22 0 0 1 9.5 7",
        }),
      ],
    }),
  });
}
const T0 = ({ link: e }) => {
    const [t, n] = Ue.useState(!0),
      r = () => {
        n(!1);
      };
    return (
      console.log(e),
      w.jsxs(w.Fragment, {
        children: [
          w.jsxs("div", {
            className: " relative h-full ",
            children: [
              t &&
                w.jsx("div", {
                  className:
                    " absolute inset-0 rounded-xl  z-10 flex h-full items-center justify-center bg-gray-200 animate-pulse",
                  children: w.jsx(bd, {}),
                }),
              w.jsx("iframe", {
                src: e,
                loading: "lazy",
                className: " rounded-xl h-full w-full absolute inset-0 z-0",
                onLoad: r,
              }),
            ],
          }),
          w.jsxs("button", {
            onClick: () => {
              window.open("https://www.sportclub.com.ar/");
            },
            className:
              "flex text-start flex-row gap-3 items-center border border-neutral-400 bg-neutral-300 p-2 rounded hover:bg-neutral-200 active:bg-white",
            children: [
              w.jsx(R0, { className: "w-9 h-9 text-neutral-700 " }),
              w.jsxs("div", {
                className: " text-start text-sm flex-1",
                children: [
                  w.jsx("p", { children: "Web" }),
                  w.jsx("p", { children: "https://twohip.com" }),
                ],
              }),
              w.jsx(sf, { className: " self-start " }),
            ],
          }),
        ],
      })
    );
  },
  ya = () =>
    w.jsxs("div", {
      className:
        " overflow-y-auto  opacity-100 flex flex-col bg-white p-1 rounded-lg  duration-500",
      children: [
        w.jsx("p", {
          className: "px-2 py-1 break-all tracking-wide font-bold text-4xl",
          children: "👋 ¡Hola!",
        }),
        w.jsx("p", {
          className: "px-2 pb-4 text-black  break-all text-2xl",
          children: "¡Bienvenido! 🎉",
        }),
        w.jsx("p", {
          className: "px-2 pb-4 text-black text-opacity-70 break-all text-lg",
          children: "Estamos encantados de que te unas a esta experiencia. 😊",
        }),
        w.jsx("p", {
          className: "px-2 pb-4 text-black text-opacity-70 break-all text-lg",
          children:
            "Explora, disfruta y saca el máximo provecho de todas nuestras funciones. 🚀",
        }),
        w.jsx("p", {
          className: "px-2 pb-4 text-black text-opacity-70 break-all text-lg",
          children: "Aquí podrás comunicarte de manera divertida y efectiva.",
        }),
        w.jsx("p", {
          className: "px-2 pb-4 text-black text-opacity-70 break-all text-lg",
          children: "¡Comencemos a charlar! 💬",
        }),
      ],
    }),
  P0 = () => {
    const e = Fo((o) => o.nav),
      t = sr((o) => o.type),
      n = sr((o) => o.metadata),
      r = Bo((o) => o.noticeSelect);
    return w.jsxs(w.Fragment, {
      children: [
        e == yt.CHAT && t == ir.MAP && w.jsx(_0, {}),
        e == yt.CHAT && t == ir.WEB && w.jsx(T0, { link: n.link }),
        e == yt.CHAT && t == ir.INIT && w.jsx(ya, {}),
        e == yt.NOTICIAS && r.id == "" && w.jsx(ya, {}),
        e == yt.NOTICIAS && r.id != "" && w.jsx(N0, {}),
      ],
    });
  },
  $s = "-",
  O0 = (e) => {
    const t = L0(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (i) => {
        const s = i.split($s);
        return s[0] === "" && s.length !== 1 && s.shift(), uf(s, t) || z0(i);
      },
      getConflictingClassGroupIds: (i, s) => {
        const u = n[i] || [];
        return s && r[i] ? [...u, ...r[i]] : u;
      },
    };
  },
  uf = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? uf(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const l = e.join($s);
    return (i = t.validators.find(({ validator: s }) => s(l))) == null
      ? void 0
      : i.classGroupId;
  },
  va = /^\[(.+)\]$/,
  z0 = (e) => {
    if (va.test(e)) {
      const t = va.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  L0 = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      A0(Object.entries(e.classGroups), n).forEach(([l, i]) => {
        Bi(i, r, l, t);
      }),
      r
    );
  },
  Bi = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const l = o === "" ? t : wa(t, o);
        l.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (b0(o)) {
          Bi(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([l, i]) => {
        Bi(i, wa(t, l), n, r);
      });
    });
  },
  wa = (e, t) => {
    let n = e;
    return (
      t.split($s).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  b0 = (e) => e.isThemeGetter,
  A0 = (e, t) =>
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
  M0 = (e) => {
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
  af = "!",
  I0 = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      l = t.length,
      i = (s) => {
        const u = [];
        let a = 0,
          d = 0,
          m;
        for (let k = 0; k < s.length; k++) {
          let f = s[k];
          if (a === 0) {
            if (f === o && (r || s.slice(k, k + l) === t)) {
              u.push(s.slice(d, k)), (d = k + l);
              continue;
            }
            if (f === "/") {
              m = k;
              continue;
            }
          }
          f === "[" ? a++ : f === "]" && a--;
        }
        const h = u.length === 0 ? s : s.substring(d),
          S = h.startsWith(af),
          g = S ? h.substring(1) : h,
          v = m && m > d ? m - d : void 0;
        return {
          modifiers: u,
          hasImportantModifier: S,
          baseClassName: g,
          maybePostfixModifierPosition: v,
        };
      };
    return n ? (s) => n({ className: s, parseClassName: i }) : i;
  },
  F0 = (e) => {
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
  D0 = (e) => ({ cache: M0(e.cacheSize), parseClassName: I0(e), ...O0(e) }),
  U0 = /\s+/,
  B0 = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      l = [],
      i = e.trim().split(U0);
    let s = "";
    for (let u = i.length - 1; u >= 0; u -= 1) {
      const a = i[u],
        {
          modifiers: d,
          hasImportantModifier: m,
          baseClassName: h,
          maybePostfixModifierPosition: S,
        } = n(a);
      let g = !!S,
        v = r(g ? h.substring(0, S) : h);
      if (!v) {
        if (!g) {
          s = a + (s.length > 0 ? " " + s : s);
          continue;
        }
        if (((v = r(h)), !v)) {
          s = a + (s.length > 0 ? " " + s : s);
          continue;
        }
        g = !1;
      }
      const k = F0(d).join(":"),
        f = m ? k + af : k,
        c = f + v;
      if (l.includes(c)) continue;
      l.push(c);
      const p = o(v, g);
      for (let x = 0; x < p.length; ++x) {
        const C = p[x];
        l.push(f + C);
      }
      s = a + (s.length > 0 ? " " + s : s);
    }
    return s;
  };
function $0() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = cf(t)) && (r && (r += " "), (r += n));
  return r;
}
const cf = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = cf(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function H0(e, ...t) {
  let n,
    r,
    o,
    l = i;
  function i(u) {
    const a = t.reduce((d, m) => m(d), e());
    return (n = D0(a)), (r = n.cache.get), (o = n.cache.set), (l = s), s(u);
  }
  function s(u) {
    const a = r(u);
    if (a) return a;
    const d = B0(u, n);
    return o(u, d), d;
  }
  return function () {
    return l($0.apply(null, arguments));
  };
}
const $ = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  df = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  V0 = /^\d+\/\d+$/,
  W0 = new Set(["px", "full", "screen"]),
  Q0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  K0 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  G0 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  X0 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  q0 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  qe = (e) => kn(e) || W0.has(e) || V0.test(e),
  dt = (e) => An(e, "length", og),
  kn = (e) => !!e && !Number.isNaN(Number(e)),
  Bl = (e) => An(e, "number", kn),
  Wn = (e) => !!e && Number.isInteger(Number(e)),
  J0 = (e) => e.endsWith("%") && kn(e.slice(0, -1)),
  L = (e) => df.test(e),
  ft = (e) => Q0.test(e),
  Y0 = new Set(["length", "size", "percentage"]),
  Z0 = (e) => An(e, Y0, ff),
  eg = (e) => An(e, "position", ff),
  tg = new Set(["image", "url"]),
  ng = (e) => An(e, tg, ig),
  rg = (e) => An(e, "", lg),
  Qn = () => !0,
  An = (e, t, n) => {
    const r = df.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  og = (e) => K0.test(e) && !G0.test(e),
  ff = () => !1,
  lg = (e) => X0.test(e),
  ig = (e) => q0.test(e),
  sg = () => {
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
      m = $("invert"),
      h = $("gap"),
      S = $("gradientColorStops"),
      g = $("gradientColorStopPositions"),
      v = $("inset"),
      k = $("margin"),
      f = $("opacity"),
      c = $("padding"),
      p = $("saturate"),
      x = $("scale"),
      C = $("sepia"),
      N = $("skew"),
      j = $("space"),
      T = $("translate"),
      U = () => ["auto", "contain", "none"],
      b = () => ["auto", "hidden", "clip", "visible", "scroll"],
      de = () => ["auto", L, t],
      F = () => [L, t],
      st = () => ["", qe, dt],
      Lt = () => ["auto", kn, L],
      Lr = () => [
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
      _ = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      P = () => ["", "0", L],
      z = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      I = () => [kn, L];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Qn],
        spacing: [qe, dt],
        blur: ["none", "", ft, L],
        brightness: I(),
        borderColor: [e],
        borderRadius: ["none", "", "full", ft, L],
        borderSpacing: F(),
        borderWidth: st(),
        contrast: I(),
        grayscale: P(),
        hueRotate: I(),
        invert: P(),
        gap: F(),
        gradientColorStops: [e],
        gradientColorStopPositions: [J0, dt],
        inset: de(),
        margin: de(),
        opacity: I(),
        padding: F(),
        saturate: I(),
        scale: I(),
        sepia: P(),
        skew: I(),
        space: F(),
        translate: F(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", L] }],
        container: ["container"],
        columns: [{ columns: [ft] }],
        "break-after": [{ "break-after": z() }],
        "break-before": [{ "break-before": z() }],
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
        "object-position": [{ object: [...Lr(), L] }],
        overflow: [{ overflow: b() }],
        "overflow-x": [{ "overflow-x": b() }],
        "overflow-y": [{ "overflow-y": b() }],
        overscroll: [{ overscroll: U() }],
        "overscroll-x": [{ "overscroll-x": U() }],
        "overscroll-y": [{ "overscroll-y": U() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [v] }],
        "inset-x": [{ "inset-x": [v] }],
        "inset-y": [{ "inset-y": [v] }],
        start: [{ start: [v] }],
        end: [{ end: [v] }],
        top: [{ top: [v] }],
        right: [{ right: [v] }],
        bottom: [{ bottom: [v] }],
        left: [{ left: [v] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Wn, L] }],
        basis: [{ basis: de() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", L] }],
        grow: [{ grow: P() }],
        shrink: [{ shrink: P() }],
        order: [{ order: ["first", "last", "none", Wn, L] }],
        "grid-cols": [{ "grid-cols": [Qn] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Wn, L] }, L] }],
        "col-start": [{ "col-start": Lt() }],
        "col-end": [{ "col-end": Lt() }],
        "grid-rows": [{ "grid-rows": [Qn] }],
        "row-start-end": [{ row: ["auto", { span: [Wn, L] }, L] }],
        "row-start": [{ "row-start": Lt() }],
        "row-end": [{ "row-end": Lt() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", L] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", L] }],
        gap: [{ gap: [h] }],
        "gap-x": [{ "gap-x": [h] }],
        "gap-y": [{ "gap-y": [h] }],
        "justify-content": [{ justify: ["normal", ..._()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ..._(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [..._(), "baseline"] }],
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
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", L, t] }],
        "min-w": [{ "min-w": [L, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              L,
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
        h: [{ h: [L, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [L, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [L, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [L, t, "auto", "min", "max", "fit"] }],
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
              Bl,
            ],
          },
        ],
        "font-family": [{ font: [Qn] }],
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
              L,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", kn, Bl] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              qe,
              L,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", L] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", L] }],
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
          { decoration: ["auto", "from-font", qe, dt] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", qe, L] }],
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
              L,
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
        content: [{ content: ["none", L] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [f] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Lr(), eg] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Z0] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              ng,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [g] }],
        "gradient-via-pos": [{ via: [g] }],
        "gradient-to-pos": [{ to: [g] }],
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
        "outline-offset": [{ "outline-offset": [qe, L] }],
        "outline-w": [{ outline: [qe, dt] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: st() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [f] }],
        "ring-offset-w": [{ "ring-offset": [qe, dt] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", ft, rg] }],
        "shadow-color": [{ shadow: [Qn] }],
        opacity: [{ opacity: [f] }],
        "mix-blend": [
          { "mix-blend": [...en(), "plus-lighter", "plus-darker"] },
        ],
        "bg-blend": [{ "bg-blend": en() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [u] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", ft, L] }],
        grayscale: [{ grayscale: [a] }],
        "hue-rotate": [{ "hue-rotate": [d] }],
        invert: [{ invert: [m] }],
        saturate: [{ saturate: [p] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [u] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [a] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
        "backdrop-invert": [{ "backdrop-invert": [m] }],
        "backdrop-opacity": [{ "backdrop-opacity": [f] }],
        "backdrop-saturate": [{ "backdrop-saturate": [p] }],
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
              L,
            ],
          },
        ],
        duration: [{ duration: I() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", L] }],
        delay: [{ delay: I() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", L] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [x] }],
        "scale-x": [{ "scale-x": [x] }],
        "scale-y": [{ "scale-y": [x] }],
        rotate: [{ rotate: [Wn, L] }],
        "translate-x": [{ "translate-x": [T] }],
        "translate-y": [{ "translate-y": [T] }],
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
              L,
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
              L,
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
          { "will-change": ["auto", "scroll", "contents", "transform", L] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [qe, dt, Bl] }],
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
  pf = H0(sg),
  ug = ({ title: e, index: t, indexNow: n, onClick: r, className: o }) =>
    w.jsx("button", {
      type: "button",
      onClick: r,
      className: pf(
        o,
        `${
          t == n ? "bg-black text-white" : "bg-neutral-200 text-black"
        } px-2 py-1 rounded  text-opacity-70 hover:bg-black hover:text-white duration-500`
      ),
      children: e,
    });
function ag(e) {
  return w.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    ...e,
    children: w.jsx("path", {
      fill: "currentColor",
      d: "M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28",
    }),
  });
}
const cg = ({ phone: e, className: t }) =>
    w.jsxs("button", {
      type: "button",
      onClick: () => {
        window.open(`https://wa.me/${e}`, "_blank");
      },
      className: pf(
        t,
        " px-2 py-1 rounded flex flex-row items-center gap-2   bg-green-500 text-white hover:bg-green-600 duration-500"
      ),
      children: [w.jsx(ag, { className: "w-5 h-5" }), "Whats App"],
    }),
  dg = [
    { title: "Chat", index: yt.CHAT },
    { title: "Noticias", index: yt.NOTICIAS },
  ],
  fg = () => {
    const e = Fo((n) => n.nav),
      t = Fo((n) => n.setNav);
    return w.jsxs("div", {
      className: "flex flex-row gap-3 px-1",
      children: [
        dg.map((n) =>
          w.jsx(ug, {
            title: n.title,
            index: n.index,
            indexNow: e,
            onClick: () => {
              t(n.index);
            },
          })
        ),
        w.jsx(cg, { phone: "15454785" }),
      ],
    });
  };
function pg(e) {
  return w.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    ...e,
    children: w.jsx("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 20V4m0 0l6 6m-6-6l-6 6",
    }),
  });
}
const mg = () =>
    w.jsx("div", {
      className: "  ",
      children: w.jsx("button", {
        className:
          "py-1 px-1 mb-2  rounded-full hover:bg-neutral-100 hover:bg-opacity-40 active:bg-neutral-300 duration-300 ",
        children: w.jsx(pg, { className: "w-[30px] h-[30px] -rotate-90" }),
      }),
    }),
  hg = ({ item: e, idSelect: t, setNoticeSelect: n }) =>
    w.jsxs("button", {
      className: ` ${
        t === e.id ? " opacity-100  " : " opacity-50"
      } flex flex-col  bg-neutral-200 p-1 rounded   hover:opacity-100 duration-500`,
      onClick: () => {
        n(e);
      },
      children: [
        w.jsx("div", {
          className: " overflow-hidden rounded aspect-auto",
          children: w.jsx("img", {
            className: "aspect-auto",
            src: "https://i.ytimg.com/vi/oD3r09IL7vc/maxresdefault.jpg",
          }),
        }),
        w.jsx("p", {
          className: `line-clamp-2 
          px-1 py-1  break-all tracking-wide text-start`,
          children: e.title,
        }),
        w.jsx("p", {
          className:
            "line-clamp-3 px-1 text-start text-black text-opacity-70 break-all ",
          children: e.content,
        }),
      ],
    }),
  xa = [
    {
      id: "111",
      title: "11111111",
      content:
        "hoalsdalsdlas asmdlas asdas dasdasdasd asdasdas d asd as das d  asdasdasdasdas da sd asd asdas dasdas dasdasbjdbasdbasbdjbasjdbasjkd bas dlbasjdb abssb bbkb bj b lbbjblbj lbj bjbllkbkjbjkblbj bjbljklbj blj bj blkmdlasdl asdasl mdasm dasdlm hoalsdalsdlas asmdlas asdas dasdasdasd asdasdas d asd as das d  asdasdasdasdas da sd asd asdas dasdas dasdasbjdbasdbasbdjbasjdbasjkd bas dlbasjdb abssb bbkb bj b lbbjblbj lbj bjbllkbkjbjkblbj bjbljklbj blj bj blkmdlasdl asdasl mdasm dasdlmhoalsdalsdlas asmdlas asdas dasdasdasd asdasdas d asd as das d  asdasdasdasdas da sd asd asdas dasdas dasdasbjdbasdbasbdjbasjdbasjkd bas dlbasjdb abssb bbkb bj b lbbjblbj lbj bjbllkbkjbjkblbj bjbljklbj blj bj blkmdlasdl asdasl mdasm dasdlmhoalsdalsdlas asmdlas asdas dasdasdasd asdasdas d asd as das d  asdasdasdasdas da sd asd asdas dasdas dasdasbjdbasdbasbdjbasjdbasjkd bas dlbasjdb abssb bbkb bj b lbbjblbj lbj bjbllkbkjbjkblbj bjbljklbj blj bj blkmdlasdl asdasl mdasm dasdlmhoalsdalsdlas asmdlas asdas dasdasdasd asdasdas d asd as das d  asdasdasdasdas da sd asd asdas dasdas dasdasbjdbasdbasbdjbasjdbasjkd bas dlbasjdb abssb bbkb bj b lbbjblbj lbj bjbllkbkjbjkblbj bjbljklbj blj bj blkmdlasdl asdasl mdasm dasdlm",
    },
  ],
  gg = () => {
    const e = Bo((n) => n.noticeSelect),
      t = Bo((n) => n.setNotice);
    return w.jsx("div", {
      className:
        " grid grid-flow-row-dense gap-2 py-4 grid-cols-3 overflow-y-auto px-2   ",
      children:
        xa.length > 0 &&
        xa.map((n) =>
          w.jsx(hg, { item: n, idSelect: e.id, setNoticeSelect: t })
        ),
    });
  };
function yg() {
  const e = Fo((t) => t.nav);
  return w.jsxs("div", {
    className: " w-full relative  ",
    style: { height: "100dvh" },
    children: [
      w.jsx("div", {
        className: "absolute z-10 bg-red-500 ",
        children: w.jsx("img", {
          className: "w-[2000px] h-[800px]",
          src: "https://th.bing.com/th/id/OIP.h3vJG8xJA6haG_G-gGWcbwHaEK?rs=1&pid=ImgDetMain",
        }),
      }),
      w.jsxs("div", {
        className:
          " absolute z-30 px-4 w-full h-full bg-white flex items-center justify-center gap-12   ",
        children: [
          w.jsx("div", {
            className: "flex flex-col  w-[500px] h-[95%]  gap-4",
            children: w.jsx(P0, {}),
          }),
          w.jsxs("div", {
            className: "w-[600px] h-[95%]  p-1 rounded-lg flex flex-col gap-1 ",
            children: [
              w.jsx(mg, {}),
              w.jsx(fg, {}),
              e == "chat" && w.jsx(C0, {}),
              e == "noticias" && w.jsx(gg, {}),
            ],
          }),
        ],
      }),
    ],
  });
}
const mf = document.createElement("div");
mf.id = "gotaan";
document.body.appendChild(mf);
Ld(document.getElementById("gotaan")).render(
  w.jsx(Ue.StrictMode, { children: w.jsx(yg, {}) })
);
