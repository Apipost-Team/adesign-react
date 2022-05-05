var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import * as React from "react";
import React__default, { useState, useEffect, PureComponent, useRef, useCallback, forwardRef, useContext, createContext, memo, isValidElement, cloneElement, useLayoutEffect, useMemo, useImperativeHandle, Component } from "react";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var classnames = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString === Object.prototype.toString) {
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          } else {
            classes.push(arg.toString());
          }
        }
      }
      return classes.join(" ");
    }
    if (module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames);
var cn = classnames.exports;
var index$i = "";
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$d = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty$d.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = React__default, g = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if (typeof Symbol === "function" && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  reactJsxRuntime_production_min.Fragment = h("react.fragment");
}
var m$1 = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, k) {
  var b, d = {}, e = null, l = null;
  k !== void 0 && (e = "" + k);
  a.key !== void 0 && (e = "" + a.key);
  a.ref !== void 0 && (l = a.ref);
  for (b in a)
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      d[b] === void 0 && (d[b] = a[b]);
  return { $$typeof: g, type: c, key: e, ref: l, props: d, _owner: m$1.current };
}
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
const Fragment = jsxRuntime.exports.Fragment;
const Button = React__default.forwardRef((props, ref) => {
  const _a = props, {
    children = "default",
    onClick,
    disabled = false,
    style = {},
    size: size2 = "middle",
    type = "default",
    shape = "square",
    className,
    afterFix,
    preFix
  } = _a, restProps = __objRest(_a, [
    "children",
    "onClick",
    "disabled",
    "style",
    "size",
    "type",
    "shape",
    "className",
    "afterFix",
    "preFix"
  ]);
  const tempClassName = {
    "apipost-btn": true,
    [`apipost-btn-${type}`]: true,
    [`apipost-btn-${size2}`]: true,
    [`apipost-btn-${shape}`]: shape !== void 0,
    "apipost-btn-disabled": disabled
  };
  const btnclassName = cn(className, tempClassName);
  const handleClick = (e) => {
    if (onClick && !disabled) {
      onClick(e);
    }
  };
  return /* @__PURE__ */ jsxs("div", __spreadProps(__spreadValues({}, restProps), {
    ref,
    className: btnclassName,
    onClick: handleClick,
    style,
    children: [preFix !== void 0 && /* @__PURE__ */ jsxs(Fragment, {
      children: [preFix, "\xA0"]
    }), children, afterFix !== void 0 && /* @__PURE__ */ jsxs(Fragment, {
      children: [afterFix, "\xA0"]
    })]
  }));
});
var Iconminus = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMy43NjQ3NyA4LjA3MDQxQzMuNzY0NzcgNy44NDk1IDMuOTQzODYgNy42NzA0MSA0LjE2NDc3IDcuNjcwNDFIMTEuODM1NEMxMi4wNTYzIDcuNjcwNDEgMTIuMjM1NCA3Ljg0OTUgMTIuMjM1NCA4LjA3MDQxQzEyLjIzNTQgOC4yOTEzMiAxMi4wNTYzIDguNDcwNDEgMTEuODM1NCA4LjQ3MDQxSDQuMTY0NzdDMy45NDM4NiA4LjQ3MDQxIDMuNzY0NzcgOC4yOTEzMiAzLjc2NDc3IDguMDcwNDFaIiAvPgo8L3N2Zz4K";
var Iconcheck = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNjA2MSA0Ljk3OTdMNi42NjY3MyA5LjkxOTA0TDMuNzI3MzkgNi45Nzk3QzMuNTMyMTMgNi43ODQ0NCAzLjIxNTU1IDYuNzg0NDQgMy4wMjAyOSA2Ljk3OTdDMi44MjUwMiA3LjE3NDk2IDIuODI1MDIgNy40OTE1NCAzLjAyMDI5IDcuNjg2ODFMNi4zMTMxOCAxMC45Nzk3QzYuMzM3NTkgMTEuMDA0MSA2LjM2Mzg5IDExLjAyNTUgNi4zOTE2MiAxMS4wNDM4QzYuNTg1NjkgMTEuMTcxOSA2Ljg0OTQzIDExLjE1MDYgNy4wMjAyOSAxMC45Nzk3TDcuMDIxMTIgMTAuOTc4OUwxMi4zMTMyIDUuNjg2ODFDMTIuNTA4NCA1LjQ5MTU0IDEyLjUwODQgNS4xNzQ5NiAxMi4zMTMyIDQuOTc5N0MxMi4xMTc5IDQuNzg0NDQgMTEuODAxMyA0Ljc4NDQ0IDExLjYwNjEgNC45Nzk3WiIgLz4KPC9zdmc+Cg==";
var index$h = "";
var CheckStatus$1 = /* @__PURE__ */ ((CheckStatus2) => {
  CheckStatus2["UNCHECK"] = "uncheck";
  CheckStatus2["CHECKED"] = "checked";
  CheckStatus2["HALFCHECK"] = "halfcheck";
  return CheckStatus2;
})(CheckStatus$1 || {});
const CheckBox = (props) => {
  const _a = props, {
    style,
    className,
    checked = CheckStatus$1.UNCHECK,
    defaultChecked,
    readOnly,
    onChange,
    disabled = false
  } = _a, restProps = __objRest(_a, [
    "style",
    "className",
    "checked",
    "defaultChecked",
    "readOnly",
    "onChange",
    "disabled"
  ]);
  const [_checked, setChecked] = useState(defaultChecked);
  const mergeChecked = "checked" in props ? checked : _checked;
  const handleOnChange = () => {
    if (disabled || readOnly) {
      return;
    }
    if (mergeChecked === CheckStatus$1.CHECKED) {
      setChecked(CheckStatus$1.UNCHECK);
      onChange == null ? void 0 : onChange(CheckStatus$1.UNCHECK);
    } else {
      setChecked(CheckStatus$1.CHECKED);
      onChange == null ? void 0 : onChange(CheckStatus$1.CHECKED);
    }
  };
  return /* @__PURE__ */ jsxs("div", __spreadProps(__spreadValues({}, restProps), {
    style,
    className: cn(className, {
      "apipost-checkbox": true,
      readOnly: disabled !== true && readOnly,
      checked: mergeChecked === CheckStatus$1.CHECKED,
      halfcheck: mergeChecked === CheckStatus$1.HALFCHECK,
      disable: disabled
    }),
    onClick: handleOnChange,
    children: [mergeChecked === CheckStatus$1.CHECKED && /* @__PURE__ */ jsx(Iconcheck, {
      className: "apipost-checkbox-svg"
    }), mergeChecked === CheckStatus$1.HALFCHECK && /* @__PURE__ */ jsx(Iconminus, {
      className: "apipost-checkbox-svg"
    })]
  }));
};
var TabCloseSvg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNyAxNyIgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIG9wYWNpdHk9IjAuNSI+CjxyZWN0IHg9IjQuNjY2OTkiIHk9IjMuODE4MzYiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxLjgiIHJ4PSIwLjkiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDQuNjY2OTkgMy44MTgzNikiIC8+CjxyZWN0IHg9IjMuODE4NDgiIHk9IjEyLjMwMzciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxLjgiIHJ4PSIwLjkiIHRyYW5zZm9ybT0icm90YXRlKC00NSAzLjgxODQ4IDEyLjMwMzcpIiAvPgo8L2c+Cjwvc3ZnPgo=";
var index$g = "";
const Drawer = (props) => {
  const {
    visible,
    style,
    className,
    children,
    title,
    headerStyle,
    footer,
    footerStyle,
    okText = "\u786E\u8BA4",
    cancelText = "\u53D6\u6D88",
    placement = "right",
    width: width2 = 300,
    height: height2 = 300,
    mask = true,
    maskClosable = true,
    closable = true,
    onOk,
    onCancel
  } = props;
  const [drawerStyle, setDrawerStyle] = useState({});
  useState("right");
  useEffect(() => {
    if (visible) {
      setDrawerStyle({
        transform: "translate(0, 0)"
      });
    }
    if (!visible) {
      if (placement === "left") {
        setDrawerStyle({
          transform: "translate(-100%, 0)"
        });
      }
      if (placement === "right") {
        setDrawerStyle({
          transform: "translate(100%, 0)"
        });
      }
      if (placement === "top") {
        setDrawerStyle({
          transform: "translate(0, -100%)"
        });
      }
      if (placement === "bottom") {
        setDrawerStyle({
          transform: "translate(0,100%)"
        });
      }
    }
  }, [visible]);
  return /* @__PURE__ */ jsx(Fragment, {
    children: visible && /* @__PURE__ */ jsxs(Fragment, {
      children: [!!mask && /* @__PURE__ */ jsx("div", {
        className: "apipost-drawer-mask",
        onClick: () => {
          maskClosable ? onCancel && onCancel() : null;
        }
      }), /* @__PURE__ */ jsxs("div", {
        className: cn({
          "apipost-drawer": true,
          [`apipost-drawer-${placement}`]: true
        }, className),
        style: __spreadValues(__spreadValues({
          position: "absolute",
          top: placement === "left" || placement === "right" ? 0 : void 0,
          left: placement === "top" || placement === "bottom" ? 0 : void 0,
          bottom: placement === "bottom" ? 0 : void 0,
          height: placement === "top" || placement === "bottom" ? height2 : "100%",
          width: placement === "top" || placement === "bottom" ? "100%" : width2
        }, drawerStyle), style),
        children: [title !== null && /* @__PURE__ */ jsx("div", {
          className: cn({
            "apipost-drawer-header": true
          }),
          style: headerStyle,
          children: title
        }), closable && /* @__PURE__ */ jsx("div", {
          onClick: onCancel,
          className: "apipost-drawer-close",
          children: /* @__PURE__ */ jsx(TabCloseSvg, {})
        }), /* @__PURE__ */ jsx("div", {
          className: "apipost-drawer-content",
          children
        }), footer !== null && /* @__PURE__ */ jsx("div", {
          className: cn({
            "apipost-drawer-footer": true
          }),
          style: footerStyle,
          children: !footer ? /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx(Button, {
              onClick: onOk,
              type: "primary",
              children: okText
            }), /* @__PURE__ */ jsx(Button, {
              onClick: onCancel,
              children: cancelText
            })]
          }) : footer
        })]
      })]
    })
  });
};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  var f2, g2, h, k;
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l = performance;
    exports.unstable_now = function() {
      return l.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  if (typeof window === "undefined" || typeof MessageChannel !== "function") {
    var t = null, u = null, w = function() {
      if (t !== null)
        try {
          var a = exports.unstable_now();
          t(true, a);
          t = null;
        } catch (b) {
          throw setTimeout(w, 0), b;
        }
    };
    f2 = function(a) {
      t !== null ? setTimeout(f2, 0, a) : (t = a, setTimeout(w, 0));
    };
    g2 = function(a, b) {
      u = setTimeout(a, b);
    };
    h = function() {
      clearTimeout(u);
    };
    exports.unstable_shouldYield = function() {
      return false;
    };
    k = exports.unstable_forceFrameRate = function() {
    };
  } else {
    var x = window.setTimeout, y2 = window.clearTimeout;
    if (typeof console !== "undefined") {
      var z = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      typeof z !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var A = false, B2 = null, C = -1, D2 = 5, E = 0;
    exports.unstable_shouldYield = function() {
      return exports.unstable_now() >= E;
    };
    k = function() {
    };
    exports.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D2 = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    var F2 = new MessageChannel(), G2 = F2.port2;
    F2.port1.onmessage = function() {
      if (B2 !== null) {
        var a = exports.unstable_now();
        E = a + D2;
        try {
          B2(true, a) ? G2.postMessage(null) : (A = false, B2 = null);
        } catch (b) {
          throw G2.postMessage(null), b;
        }
      } else
        A = false;
    };
    f2 = function(a) {
      B2 = a;
      A || (A = true, G2.postMessage(null));
    };
    g2 = function(a, b) {
      C = x(function() {
        a(exports.unstable_now());
      }, b);
    };
    h = function() {
      y2(C);
      C = -1;
    };
  }
  function H2(a, b) {
    var c = a.length;
    a.push(b);
    a:
      for (; ; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (e !== void 0 && 0 < I2(e, b))
          a[d] = b, a[c] = e, c = d;
        else
          break a;
      }
  }
  function J(a) {
    a = a[0];
    return a === void 0 ? null : a;
  }
  function K(a) {
    var b = a[0];
    if (b !== void 0) {
      var c = a.pop();
      if (c !== b) {
        a[0] = c;
        a:
          for (var d = 0, e = a.length; d < e; ) {
            var m2 = 2 * (d + 1) - 1, n2 = a[m2], v = m2 + 1, r2 = a[v];
            if (n2 !== void 0 && 0 > I2(n2, c))
              r2 !== void 0 && 0 > I2(r2, n2) ? (a[d] = r2, a[v] = c, d = v) : (a[d] = n2, a[m2] = c, d = m2);
            else if (r2 !== void 0 && 0 > I2(r2, c))
              a[d] = r2, a[v] = c, d = v;
            else
              break a;
          }
      }
      return b;
    }
    return null;
  }
  function I2(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return c !== 0 ? c : a.id - b.id;
  }
  var L = [], M2 = [], N2 = 1, O2 = null, P2 = 3, Q = false, R2 = false, S2 = false;
  function T2(a) {
    for (var b = J(M2); b !== null; ) {
      if (b.callback === null)
        K(M2);
      else if (b.startTime <= a)
        K(M2), b.sortIndex = b.expirationTime, H2(L, b);
      else
        break;
      b = J(M2);
    }
  }
  function U2(a) {
    S2 = false;
    T2(a);
    if (!R2)
      if (J(L) !== null)
        R2 = true, f2(V2);
      else {
        var b = J(M2);
        b !== null && g2(U2, b.startTime - a);
      }
  }
  function V2(a, b) {
    R2 = false;
    S2 && (S2 = false, h());
    Q = true;
    var c = P2;
    try {
      T2(b);
      for (O2 = J(L); O2 !== null && (!(O2.expirationTime > b) || a && !exports.unstable_shouldYield()); ) {
        var d = O2.callback;
        if (typeof d === "function") {
          O2.callback = null;
          P2 = O2.priorityLevel;
          var e = d(O2.expirationTime <= b);
          b = exports.unstable_now();
          typeof e === "function" ? O2.callback = e : O2 === J(L) && K(L);
          T2(b);
        } else
          K(L);
        O2 = J(L);
      }
      if (O2 !== null)
        var m2 = true;
      else {
        var n2 = J(M2);
        n2 !== null && g2(U2, n2.startTime - b);
        m2 = false;
      }
      return m2;
    } finally {
      O2 = null, P2 = c, Q = false;
    }
  }
  var W2 = k;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    R2 || Q || (R2 = true, f2(V2));
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return P2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return J(L);
  };
  exports.unstable_next = function(a) {
    switch (P2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = P2;
    }
    var c = P2;
    P2 = b;
    try {
      return a();
    } finally {
      P2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = W2;
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = P2;
    P2 = a;
    try {
      return b();
    } finally {
      P2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    typeof c === "object" && c !== null ? (c = c.delay, c = typeof c === "number" && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = { id: N2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
    c > d ? (a.sortIndex = c, H2(M2, a), J(L) === null && a === J(M2) && (S2 ? h() : S2 = true, g2(U2, c - d))) : (a.sortIndex = e, H2(L, a), R2 || Q || (R2 = true, f2(V2)));
    return a;
  };
  exports.unstable_wrapCallback = function(a) {
    var b = P2;
    return function() {
      var c = P2;
      P2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        P2 = c;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = React__default, m = objectAssign, r = scheduler.exports;
function y(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!aa)
  throw Error(y(227));
var ba = /* @__PURE__ */ new Set(), ca = {};
function da(a, b) {
  ea(a, b);
  ea(a + "Capture", b);
}
function ea(a, b) {
  ca[a] = b;
  for (a = 0; a < b.length; a++)
    ba.add(b[a]);
}
var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined"), ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ia = Object.prototype.hasOwnProperty, ja = {}, ka = {};
function la(a) {
  if (ia.call(ka, a))
    return true;
  if (ia.call(ja, a))
    return false;
  if (ha.test(a))
    return ka[a] = true;
  ja[a] = true;
  return false;
}
function ma(a, b, c, d) {
  if (c !== null && c.type === 0)
    return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (c !== null)
        return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return a !== "data-" && a !== "aria-";
    default:
      return false;
  }
}
function na(a, b, c, d) {
  if (b === null || typeof b === "undefined" || ma(a, b, c, d))
    return true;
  if (d)
    return false;
  if (c !== null)
    switch (c.type) {
      case 3:
        return !b;
      case 4:
        return b === false;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
  return false;
}
function B(a, b, c, d, e, f2, g2) {
  this.acceptsBooleans = b === 2 || b === 3 || b === 4;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var D = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  D[a] = new B(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  D[b] = new B(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  D[a] = new B(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  D[a] = new B(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  D[a] = new B(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  D[a] = new B(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  D[a] = new B(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  D[a] = new B(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  D[a] = new B(a, 5, false, a.toLowerCase(), null, false, false);
});
var oa = /[\-:]([a-z])/g;
function pa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, false, false);
});
D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, true, true);
});
function qa(a, b, c, d) {
  var e = D.hasOwnProperty(b) ? D[b] : null;
  var f2 = e !== null ? e.type === 0 : d ? false : !(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N" ? false : true;
  f2 || (na(b, c, e, d) && (c = null), d || e === null ? la(b) && (c === null ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = c === null ? e.type === 3 ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, c === null ? a.removeAttribute(b) : (e = e.type, c = e === 3 || e === 4 && c === true ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
}
var ra = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, sa = 60103, ta = 60106, ua = 60107, wa = 60108, xa = 60114, ya = 60109, za = 60110, Aa = 60112, Ba = 60113, Ca = 60120, Da = 60115, Ea = 60116, Fa = 60121, Ga = 60128, Ha = 60129, Ia = 60130, Ja = 60131;
if (typeof Symbol === "function" && Symbol.for) {
  var E = Symbol.for;
  sa = E("react.element");
  ta = E("react.portal");
  ua = E("react.fragment");
  wa = E("react.strict_mode");
  xa = E("react.profiler");
  ya = E("react.provider");
  za = E("react.context");
  Aa = E("react.forward_ref");
  Ba = E("react.suspense");
  Ca = E("react.suspense_list");
  Da = E("react.memo");
  Ea = E("react.lazy");
  Fa = E("react.block");
  E("react.scope");
  Ga = E("react.opaque.id");
  Ha = E("react.debug_trace_mode");
  Ia = E("react.offscreen");
  Ja = E("react.legacy_hidden");
}
var Ka = typeof Symbol === "function" && Symbol.iterator;
function La(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = Ka && a[Ka] || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
var Ma;
function Na(a) {
  if (Ma === void 0)
    try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      Ma = b && b[1] || "";
    }
  return "\n" + Ma + a;
}
var Oa = false;
function Pa(a, b) {
  if (!a || Oa)
    return "";
  Oa = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b)
      if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (k) {
          var d = k;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (k) {
          d = k;
        }
        a.call(b.prototype);
      }
    else {
      try {
        throw Error();
      } catch (k) {
        d = k;
      }
      a();
    }
  } catch (k) {
    if (k && d && typeof k.stack === "string") {
      for (var e = k.stack.split("\n"), f2 = d.stack.split("\n"), g2 = e.length - 1, h = f2.length - 1; 1 <= g2 && 0 <= h && e[g2] !== f2[h]; )
        h--;
      for (; 1 <= g2 && 0 <= h; g2--, h--)
        if (e[g2] !== f2[h]) {
          if (g2 !== 1 || h !== 1) {
            do
              if (g2--, h--, 0 > h || e[g2] !== f2[h])
                return "\n" + e[g2].replace(" at new ", " at ");
            while (1 <= g2 && 0 <= h);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Na(a) : "";
}
function Qa(a) {
  switch (a.tag) {
    case 5:
      return Na(a.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Pa(a.type, false), a;
    case 11:
      return a = Pa(a.type.render, false), a;
    case 22:
      return a = Pa(a.type._render, false), a;
    case 1:
      return a = Pa(a.type, true), a;
    default:
      return "";
  }
}
function Ra(a) {
  if (a == null)
    return null;
  if (typeof a === "function")
    return a.displayName || a.name || null;
  if (typeof a === "string")
    return a;
  switch (a) {
    case ua:
      return "Fragment";
    case ta:
      return "Portal";
    case xa:
      return "Profiler";
    case wa:
      return "StrictMode";
    case Ba:
      return "Suspense";
    case Ca:
      return "SuspenseList";
  }
  if (typeof a === "object")
    switch (a.$$typeof) {
      case za:
        return (a.displayName || "Context") + ".Consumer";
      case ya:
        return (a._context.displayName || "Context") + ".Provider";
      case Aa:
        var b = a.render;
        b = b.displayName || b.name || "";
        return a.displayName || (b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef");
      case Da:
        return Ra(a.type);
      case Fa:
        return Ra(a._render);
      case Ea:
        b = a._payload;
        a = a._init;
        try {
          return Ra(a(b));
        } catch (c) {
        }
    }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && a.toLowerCase() === "input" && (b === "checkbox" || b === "radio");
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && typeof c !== "undefined" && typeof c.get === "function" && typeof c.set === "function") {
    var e = c.get, f2 = c.set;
    Object.defineProperty(a, b, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b = a._valueTracker;
  if (!b)
    return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || (typeof document !== "undefined" ? document : void 0);
  if (typeof a === "undefined")
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return m({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c != null ? c : a._wrapperState.initialChecked });
}
function Za(a, b) {
  var c = b.defaultValue == null ? "" : b.defaultValue, d = b.checked != null ? b.checked : b.defaultChecked;
  c = Sa(b.value != null ? b.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: b.type === "checkbox" || b.type === "radio" ? b.checked != null : b.value != null };
}
function $a(a, b) {
  b = b.checked;
  b != null && qa(a, "checked", b, false);
}
function ab(a, b) {
  $a(a, b);
  var c = Sa(b.value), d = b.type;
  if (c != null)
    if (d === "number") {
      if (c === 0 && a.value === "" || a.value != c)
        a.value = "" + c;
    } else
      a.value !== "" + c && (a.value = "" + c);
  else if (d === "submit" || d === "reset") {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? bb(a, b.type, c) : b.hasOwnProperty("defaultValue") && bb(a, b.type, Sa(b.defaultValue));
  b.checked == null && b.defaultChecked != null && (a.defaultChecked = !!b.defaultChecked);
}
function cb(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!(d !== "submit" && d !== "reset" || b.value !== void 0 && b.value !== null))
      return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  c !== "" && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  c !== "" && (a.name = c);
}
function bb(a, b, c) {
  if (b !== "number" || Xa(a.ownerDocument) !== a)
    c == null ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
function db(a) {
  var b = "";
  aa.Children.forEach(a, function(a2) {
    a2 != null && (b += a2);
  });
  return b;
}
function eb(a, b) {
  a = m({ children: void 0 }, b);
  if (b = db(b.children))
    a.children = b;
  return a;
}
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++)
      b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++)
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      b !== null || a[e].disabled || (b = a[e]);
    }
    b !== null && (b.selected = true);
  }
}
function gb(a, b) {
  if (b.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return m({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b) {
  var c = b.value;
  if (c == null) {
    c = b.children;
    b = b.defaultValue;
    if (c != null) {
      if (b != null)
        throw Error(y(92));
      if (Array.isArray(c)) {
        if (!(1 >= c.length))
          throw Error(y(93));
        c = c[0];
      }
      b = c;
    }
    b == null && (b = "");
    c = b;
  }
  a._wrapperState = { initialValue: Sa(c) };
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  c != null && (c = "" + c, c !== a.value && (a.value = c), b.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c));
  d != null && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && b !== "" && b !== null && (a.value = b);
}
var kb = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
function lb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mb(a, b) {
  return a == null || a === "http://www.w3.org/1999/xhtml" ? lb(b) : a === "http://www.w3.org/2000/svg" && b === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a;
}
var nb, ob = function(a) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e);
    });
  } : a;
}(function(a, b) {
  if (a.namespaceURI !== kb.svg || "innerHTML" in a)
    a.innerHTML = b;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = nb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b.firstChild; )
      a.appendChild(b.firstChild);
  }
});
function pb(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && c.nodeType === 3) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var qb = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, rb = ["Webkit", "ms", "Moz", "O"];
Object.keys(qb).forEach(function(a) {
  rb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    qb[b] = qb[a];
  });
});
function sb(a, b, c) {
  return b == null || typeof b === "boolean" || b === "" ? "" : c || typeof b !== "number" || b === 0 || qb.hasOwnProperty(a) && qb[a] ? ("" + b).trim() : b + "px";
}
function tb(a, b) {
  a = a.style;
  for (var c in b)
    if (b.hasOwnProperty(c)) {
      var d = c.indexOf("--") === 0, e = sb(c, b[c], d);
      c === "float" && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
}
var ub = m({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function vb(a, b) {
  if (b) {
    if (ub[a] && (b.children != null || b.dangerouslySetInnerHTML != null))
      throw Error(y(137, a));
    if (b.dangerouslySetInnerHTML != null) {
      if (b.children != null)
        throw Error(y(60));
      if (!(typeof b.dangerouslySetInnerHTML === "object" && "__html" in b.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (b.style != null && typeof b.style !== "object")
      throw Error(y(62));
  }
}
function wb(a, b) {
  if (a.indexOf("-") === -1)
    return typeof b.is === "string";
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return a.nodeType === 3 ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if (typeof yb !== "function")
      throw Error(y(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b)
      for (a = 0; a < b.length; a++)
        Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb(a, b, c, d, e) {
  return a(b, c, d, e);
}
function Ib() {
}
var Jb = Gb, Kb = false, Lb = false;
function Mb() {
  if (zb !== null || Ab !== null)
    Ib(), Fb();
}
function Nb(a, b, c) {
  if (Lb)
    return a(b, c);
  Lb = true;
  try {
    return Jb(a, b, c);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a, b) {
  var c = a.stateNode;
  if (c === null)
    return null;
  var d = Db(c);
  if (d === null)
    return null;
  c = d[b];
  a:
    switch (b) {
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
        (d = !d.disabled) || (a = a.type, d = !(a === "button" || a === "input" || a === "select" || a === "textarea"));
        a = !d;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c && typeof c !== "function")
    throw Error(y(231, b, typeof c));
  return c;
}
var Pb = false;
if (fa)
  try {
    var Qb = {};
    Object.defineProperty(Qb, "passive", { get: function() {
      Pb = true;
    } });
    window.addEventListener("test", Qb, Qb);
    window.removeEventListener("test", Qb, Qb);
  } catch (a) {
    Pb = false;
  }
function Rb(a, b, c, d, e, f2, g2, h, k) {
  var l = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l);
  } catch (n2) {
    this.onError(n2);
  }
}
var Sb = false, Tb = null, Ub = false, Vb = null, Wb = { onError: function(a) {
  Sb = true;
  Tb = a;
} };
function Xb(a, b, c, d, e, f2, g2, h, k) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a, b, c, d, e, f2, g2, h, k) {
  Xb.apply(this, arguments);
  if (Sb) {
    if (Sb) {
      var l = Tb;
      Sb = false;
      Tb = null;
    } else
      throw Error(y(198));
    Ub || (Ub = true, Vb = l);
  }
}
function Zb(a) {
  var b = a, c = a;
  if (a.alternate)
    for (; b.return; )
      b = b.return;
  else {
    a = b;
    do
      b = a, (b.flags & 1026) !== 0 && (c = b.return), a = b.return;
    while (a);
  }
  return b.tag === 3 ? c : null;
}
function $b(a) {
  if (a.tag === 13) {
    var b = a.memoizedState;
    b === null && (a = a.alternate, a !== null && (b = a.memoizedState));
    if (b !== null)
      return b.dehydrated;
  }
  return null;
}
function ac(a) {
  if (Zb(a) !== a)
    throw Error(y(188));
}
function bc(a) {
  var b = a.alternate;
  if (!b) {
    b = Zb(a);
    if (b === null)
      throw Error(y(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (e === null)
      break;
    var f2 = e.alternate;
    if (f2 === null) {
      d = e.return;
      if (d !== null) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f2.child) {
      for (f2 = e.child; f2; ) {
        if (f2 === c)
          return ac(e), a;
        if (f2 === d)
          return ac(e), b;
        f2 = f2.sibling;
      }
      throw Error(y(188));
    }
    if (c.return !== d.return)
      c = e, d = f2;
    else {
      for (var g2 = false, h = e.child; h; ) {
        if (h === c) {
          g2 = true;
          c = e;
          d = f2;
          break;
        }
        if (h === d) {
          g2 = true;
          d = e;
          c = f2;
          break;
        }
        h = h.sibling;
      }
      if (!g2) {
        for (h = f2.child; h; ) {
          if (h === c) {
            g2 = true;
            c = f2;
            d = e;
            break;
          }
          if (h === d) {
            g2 = true;
            d = f2;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g2)
          throw Error(y(189));
      }
    }
    if (c.alternate !== d)
      throw Error(y(190));
  }
  if (c.tag !== 3)
    throw Error(y(188));
  return c.stateNode.current === c ? a : b;
}
function cc(a) {
  a = bc(a);
  if (!a)
    return null;
  for (var b = a; ; ) {
    if (b.tag === 5 || b.tag === 6)
      return b;
    if (b.child)
      b.child.return = b, b = b.child;
    else {
      if (b === a)
        break;
      for (; !b.sibling; ) {
        if (!b.return || b.return === a)
          return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return null;
}
function dc(a, b) {
  for (var c = a.alternate; b !== null; ) {
    if (b === a || b === c)
      return true;
    b = b.return;
  }
  return false;
}
var ec, fc, gc, hc, ic = false, jc = [], kc = null, lc = null, mc = null, nc = /* @__PURE__ */ new Map(), oc = /* @__PURE__ */ new Map(), pc = [], qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a, b, c, d, e) {
  return { blockedOn: a, domEventName: b, eventSystemFlags: c | 16, nativeEvent: e, targetContainers: [d] };
}
function sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      kc = null;
      break;
    case "dragenter":
    case "dragleave":
      lc = null;
      break;
    case "mouseover":
    case "mouseout":
      mc = null;
      break;
    case "pointerover":
    case "pointerout":
      nc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oc.delete(b.pointerId);
  }
}
function tc(a, b, c, d, e, f2) {
  if (a === null || a.nativeEvent !== f2)
    return a = rc(b, c, d, e, f2), b !== null && (b = Cb(b), b !== null && fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  e !== null && b.indexOf(e) === -1 && b.push(e);
  return a;
}
function uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return kc = tc(kc, a, b, c, d, e), true;
    case "dragenter":
      return lc = tc(lc, a, b, c, d, e), true;
    case "mouseover":
      return mc = tc(mc, a, b, c, d, e), true;
    case "pointerover":
      var f2 = e.pointerId;
      nc.set(f2, tc(nc.get(f2) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f2 = e.pointerId, oc.set(f2, tc(oc.get(f2) || null, a, b, c, d, e)), true;
  }
  return false;
}
function vc(a) {
  var b = wc(a.target);
  if (b !== null) {
    var c = Zb(b);
    if (c !== null) {
      if (b = c.tag, b === 13) {
        if (b = $b(c), b !== null) {
          a.blockedOn = b;
          hc(a.lanePriority, function() {
            r.unstable_runWithPriority(a.priority, function() {
              gc(c);
            });
          });
          return;
        }
      } else if (b === 3 && c.stateNode.hydrate) {
        a.blockedOn = c.tag === 3 ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function xc(a) {
  if (a.blockedOn !== null)
    return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (c !== null)
      return b = Cb(c), b !== null && fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function zc(a, b, c) {
  xc(a) && c.delete(b);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a = jc[0];
    if (a.blockedOn !== null) {
      a = Cb(a.blockedOn);
      a !== null && ec(a);
      break;
    }
    for (var b = a.targetContainers; 0 < b.length; ) {
      var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
      if (c !== null) {
        a.blockedOn = c;
        break;
      }
      b.shift();
    }
    a.blockedOn === null && jc.shift();
  }
  kc !== null && xc(kc) && (kc = null);
  lc !== null && xc(lc) && (lc = null);
  mc !== null && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a, b) {
  a.blockedOn === b && (a.blockedOn = null, ic || (ic = true, r.unstable_scheduleCallback(r.unstable_NormalPriority, Ac)));
}
function Cc(a) {
  function b(b2) {
    return Bc(b2, a);
  }
  if (0 < jc.length) {
    Bc(jc[0], a);
    for (var c = 1; c < jc.length; c++) {
      var d = jc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  kc !== null && Bc(kc, a);
  lc !== null && Bc(lc, a);
  mc !== null && Bc(mc, a);
  nc.forEach(b);
  oc.forEach(b);
  for (c = 0; c < pc.length; c++)
    d = pc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < pc.length && (c = pc[0], c.blockedOn === null); )
    vc(c), c.blockedOn === null && pc.shift();
}
function Dc(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var Ec = { animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd") }, Fc = {}, Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a) {
  if (Fc[a])
    return Fc[a];
  if (!Ec[a])
    return a;
  var b = Ec[a], c;
  for (c in b)
    if (b.hasOwnProperty(c) && c in Gc)
      return Fc[a] = b[c];
  return a;
}
var Ic = Hc("animationend"), Jc = Hc("animationiteration"), Kc = Hc("animationstart"), Lc = Hc("transitionend"), Mc = /* @__PURE__ */ new Map(), Nc = /* @__PURE__ */ new Map(), Oc = [
  "abort",
  "abort",
  Ic,
  "animationEnd",
  Jc,
  "animationIteration",
  Kc,
  "animationStart",
  "canplay",
  "canPlay",
  "canplaythrough",
  "canPlayThrough",
  "durationchange",
  "durationChange",
  "emptied",
  "emptied",
  "encrypted",
  "encrypted",
  "ended",
  "ended",
  "error",
  "error",
  "gotpointercapture",
  "gotPointerCapture",
  "load",
  "load",
  "loadeddata",
  "loadedData",
  "loadedmetadata",
  "loadedMetadata",
  "loadstart",
  "loadStart",
  "lostpointercapture",
  "lostPointerCapture",
  "playing",
  "playing",
  "progress",
  "progress",
  "seeking",
  "seeking",
  "stalled",
  "stalled",
  "suspend",
  "suspend",
  "timeupdate",
  "timeUpdate",
  Lc,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Pc(a, b) {
  for (var c = 0; c < a.length; c += 2) {
    var d = a[c], e = a[c + 1];
    e = "on" + (e[0].toUpperCase() + e.slice(1));
    Nc.set(d, b);
    Mc.set(d, e);
    da(e, [d]);
  }
}
var Qc = r.unstable_now;
Qc();
var F = 8;
function Rc(a) {
  if ((1 & a) !== 0)
    return F = 15, 1;
  if ((2 & a) !== 0)
    return F = 14, 2;
  if ((4 & a) !== 0)
    return F = 13, 4;
  var b = 24 & a;
  if (b !== 0)
    return F = 12, b;
  if ((a & 32) !== 0)
    return F = 11, 32;
  b = 192 & a;
  if (b !== 0)
    return F = 10, b;
  if ((a & 256) !== 0)
    return F = 9, 256;
  b = 3584 & a;
  if (b !== 0)
    return F = 8, b;
  if ((a & 4096) !== 0)
    return F = 7, 4096;
  b = 4186112 & a;
  if (b !== 0)
    return F = 6, b;
  b = 62914560 & a;
  if (b !== 0)
    return F = 5, b;
  if (a & 67108864)
    return F = 4, 67108864;
  if ((a & 134217728) !== 0)
    return F = 3, 134217728;
  b = 805306368 & a;
  if (b !== 0)
    return F = 2, b;
  if ((1073741824 & a) !== 0)
    return F = 1, 1073741824;
  F = 8;
  return a;
}
function Sc(a) {
  switch (a) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Tc(a) {
  switch (a) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(y(358, a));
  }
}
function Uc(a, b) {
  var c = a.pendingLanes;
  if (c === 0)
    return F = 0;
  var d = 0, e = 0, f2 = a.expiredLanes, g2 = a.suspendedLanes, h = a.pingedLanes;
  if (f2 !== 0)
    d = f2, e = F = 15;
  else if (f2 = c & 134217727, f2 !== 0) {
    var k = f2 & ~g2;
    k !== 0 ? (d = Rc(k), e = F) : (h &= f2, h !== 0 && (d = Rc(h), e = F));
  } else
    f2 = c & ~g2, f2 !== 0 ? (d = Rc(f2), e = F) : h !== 0 && (d = Rc(h), e = F);
  if (d === 0)
    return 0;
  d = 31 - Vc(d);
  d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;
  if (b !== 0 && b !== d && (b & g2) === 0) {
    Rc(b);
    if (e <= F)
      return b;
    F = e;
  }
  b = a.entangledLanes;
  if (b !== 0)
    for (a = a.entanglements, b &= d; 0 < b; )
      c = 31 - Vc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function Wc(a) {
  a = a.pendingLanes & -1073741825;
  return a !== 0 ? a : a & 1073741824 ? 1073741824 : 0;
}
function Xc(a, b) {
  switch (a) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a = Yc(24 & ~b), a === 0 ? Xc(10, b) : a;
    case 10:
      return a = Yc(192 & ~b), a === 0 ? Xc(8, b) : a;
    case 8:
      return a = Yc(3584 & ~b), a === 0 && (a = Yc(4186112 & ~b), a === 0 && (a = 512)), a;
    case 2:
      return b = Yc(805306368 & ~b), b === 0 && (b = 268435456), b;
  }
  throw Error(y(358, a));
}
function Yc(a) {
  return a & -a;
}
function Zc(a) {
  for (var b = [], c = 0; 31 > c; c++)
    b.push(a);
  return b;
}
function $c(a, b, c) {
  a.pendingLanes |= b;
  var d = b - 1;
  a.suspendedLanes &= d;
  a.pingedLanes &= d;
  a = a.eventTimes;
  b = 31 - Vc(b);
  a[b] = c;
}
var Vc = Math.clz32 ? Math.clz32 : ad, bd = Math.log, cd = Math.LN2;
function ad(a) {
  return a === 0 ? 32 : 31 - (bd(a) / cd | 0) | 0;
}
var dd = r.unstable_UserBlockingPriority, ed = r.unstable_runWithPriority, fd = true;
function gd(a, b, c, d) {
  Kb || Ib();
  var e = hd, f2 = Kb;
  Kb = true;
  try {
    Hb(e, a, b, c, d);
  } finally {
    (Kb = f2) || Mb();
  }
}
function id(a, b, c, d) {
  ed(dd, hd.bind(null, a, b, c, d));
}
function hd(a, b, c, d) {
  if (fd) {
    var e;
    if ((e = (b & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a))
      a = rc(null, a, b, c, d), jc.push(a);
    else {
      var f2 = yc(a, b, c, d);
      if (f2 === null)
        e && sc(a, d);
      else {
        if (e) {
          if (-1 < qc.indexOf(a)) {
            a = rc(f2, a, b, c, d);
            jc.push(a);
            return;
          }
          if (uc(f2, a, b, c, d))
            return;
          sc(a, d);
        }
        jd(a, b, d, null, c);
      }
    }
  }
}
function yc(a, b, c, d) {
  var e = xb(d);
  e = wc(e);
  if (e !== null) {
    var f2 = Zb(e);
    if (f2 === null)
      e = null;
    else {
      var g2 = f2.tag;
      if (g2 === 13) {
        e = $b(f2);
        if (e !== null)
          return e;
        e = null;
      } else if (g2 === 3) {
        if (f2.stateNode.hydrate)
          return f2.tag === 3 ? f2.stateNode.containerInfo : null;
        e = null;
      } else
        f2 !== e && (e = null);
    }
  }
  jd(a, b, d, e, c);
  return null;
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++)
    ;
  var g2 = c - a;
  for (d = 1; d <= g2 && b[c - d] === e[f2 - d]; d++)
    ;
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, a === 0 && b === 13 && (a = 13)) : a = b;
  a === 10 && (a = 13);
  return 32 <= a || a === 13 ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e, f2, g2) {
    this._reactName = b2;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c in a)
      a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
    this.isDefaultPrevented = (f2.defaultPrevented != null ? f2.defaultPrevented : f2.returnValue === false) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  m(b.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : typeof a2.returnValue !== "unknown" && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : typeof a2.cancelBubble !== "unknown" && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = m({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = m({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return a.relatedTarget === void 0 ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && a.type === "mousemove" ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = m({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = m({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = m({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = m({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = m({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
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
  MozPrintableKey: "Unidentified"
}, Nd = {
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
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = m({}, ud, { key: function(a) {
  if (a.key) {
    var b = Md[a.key] || a.key;
    if (b !== "Unidentified")
      return b;
  }
  return a.type === "keypress" ? (a = od(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return a.type === "keypress" ? od(a) : 0;
}, keyCode: function(a) {
  return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
}, which: function(a) {
  return a.type === "keypress" ? od(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = m({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = m({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = m({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = m({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = fa && "CompositionEvent" in window, be = null;
fa && "documentMode" in document && (be = document.documentMode);
var ce = fa && "TextEvent" in window && !be, de = fa && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return $d.indexOf(b.keyCode) !== -1;
    case "keydown":
      return b.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return typeof a === "object" && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (b.which !== 32)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie)
    return a === "compositionend" || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length)
          return b.char;
        if (b.which)
          return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && b.locale !== "ko" ? null : b.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b === "input" ? !!le[a.type] : b === "textarea" ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b))
    return a;
}
function ve(a, b) {
  if (a === "change")
    return b;
}
var we = false;
if (fa) {
  var xe;
  if (fa) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = typeof ze.oninput === "function";
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if (a.propertyName === "value" && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    a = re;
    if (Kb)
      a(b);
    else {
      Kb = true;
      try {
        Gb(a, b);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a, b, c) {
  a === "focusin" ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : a === "focusout" && Ae();
}
function De(a) {
  if (a === "selectionchange" || a === "keyup" || a === "keydown")
    return te(qe);
}
function Ee(a, b) {
  if (a === "click")
    return te(b);
}
function Fe(a, b) {
  if (a === "input" || a === "change")
    return te(b);
}
function Ge(a, b) {
  return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = typeof Object.is === "function" ? Object.is : Ge, Ie = Object.prototype.hasOwnProperty;
function Je(a, b) {
  if (He(a, b))
    return true;
  if (typeof a !== "object" || a === null || typeof b !== "object" || b === null)
    return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++)
    if (!Ie.call(b, c[d]) || !He(a[c[d]], b[c[d]]))
      return false;
  return true;
}
function Ke(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Le(a, b) {
  var c = Ke(a);
  a = 0;
  for (var d; c; ) {
    if (c.nodeType === 3) {
      d = a + c.textContent.length;
      if (a <= b && d >= b)
        return { node: c, offset: b - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Ke(c);
  }
}
function Me(a, b) {
  return a && b ? a === b ? true : a && a.nodeType === 3 ? false : b && b.nodeType === 3 ? Me(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Ne() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = typeof b.contentWindow.location.href === "string";
    } catch (d) {
      c = false;
    }
    if (c)
      a = b.contentWindow;
    else
      break;
    b = Xa(a.document);
  }
  return b;
}
function Oe(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && (b === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || b === "textarea" || a.contentEditable === "true");
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
  Te || Qe == null || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Oe(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Je(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Pc(Oc, 2);
for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)
  Nc.set(Ve[We], 0);
ea("onMouseEnter", ["mouseout", "mouseover"]);
ea("onMouseLeave", ["mouseout", "mouseover"]);
ea("onPointerEnter", ["pointerout", "pointerover"]);
ea("onPointerLeave", ["pointerout", "pointerover"]);
da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Yb(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = (b & 4) !== 0;
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f2 = void 0;
      if (b)
        for (var g2 = d.length - 1; 0 <= g2; g2--) {
          var h = d[g2], k = h.instance, l = h.currentTarget;
          h = h.listener;
          if (k !== f2 && e.isPropagationStopped())
            break a;
          Ze(e, h, l);
          f2 = k;
        }
      else
        for (g2 = 0; g2 < d.length; g2++) {
          h = d[g2];
          k = h.instance;
          l = h.currentTarget;
          h = h.listener;
          if (k !== f2 && e.isPropagationStopped())
            break a;
          Ze(e, h, l);
          f2 = k;
        }
    }
  }
  if (Ub)
    throw a = Vb, Ub = false, Vb = null, a;
}
function G(a, b) {
  var c = $e(b), d = a + "__bubble";
  c.has(d) || (af(b, a, 2, false), c.add(d));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a) {
  a[bf] || (a[bf] = true, ba.forEach(function(b) {
    Ye.has(b) || df(b, false, a, null);
    df(b, true, a, null);
  }));
}
function df(a, b, c, d) {
  var e = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f2 = c;
  a === "selectionchange" && c.nodeType !== 9 && (f2 = c.ownerDocument);
  if (d !== null && !b && Ye.has(a)) {
    if (a !== "scroll")
      return;
    e |= 2;
    f2 = d;
  }
  var g2 = $e(f2), h = a + "__" + (b ? "capture" : "bubble");
  g2.has(h) || (b && (e |= 4), af(f2, a, e, b), g2.add(h));
}
function af(a, b, c, d) {
  var e = Nc.get(b);
  switch (e === void 0 ? 2 : e) {
    case 0:
      e = gd;
      break;
    case 1:
      e = id;
      break;
    default:
      e = hd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Pb || b !== "touchstart" && b !== "touchmove" && b !== "wheel" || (e = true);
  d ? e !== void 0 ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : e !== void 0 ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
}
function jd(a, b, c, d, e) {
  var f2 = d;
  if ((b & 1) === 0 && (b & 2) === 0 && d !== null)
    a:
      for (; ; ) {
        if (d === null)
          return;
        var g2 = d.tag;
        if (g2 === 3 || g2 === 4) {
          var h = d.stateNode.containerInfo;
          if (h === e || h.nodeType === 8 && h.parentNode === e)
            break;
          if (g2 === 4)
            for (g2 = d.return; g2 !== null; ) {
              var k = g2.tag;
              if (k === 3 || k === 4) {
                if (k = g2.stateNode.containerInfo, k === e || k.nodeType === 8 && k.parentNode === e)
                  return;
              }
              g2 = g2.return;
            }
          for (; h !== null; ) {
            g2 = wc(h);
            if (g2 === null)
              return;
            k = g2.tag;
            if (k === 5 || k === 6) {
              d = f2 = g2;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
  Nb(function() {
    var d2 = f2, e2 = xb(c), g3 = [];
    a: {
      var h2 = Mc.get(a);
      if (h2 !== void 0) {
        var k2 = td, x = a;
        switch (a) {
          case "keypress":
            if (od(c) === 0)
              break a;
          case "keydown":
          case "keyup":
            k2 = Rd;
            break;
          case "focusin":
            x = "focus";
            k2 = Fd;
            break;
          case "focusout":
            x = "blur";
            k2 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k2 = Fd;
            break;
          case "click":
            if (c.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k2 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k2 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k2 = Vd;
            break;
          case Ic:
          case Jc:
          case Kc:
            k2 = Hd;
            break;
          case Lc:
            k2 = Xd;
            break;
          case "scroll":
            k2 = vd;
            break;
          case "wheel":
            k2 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k2 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k2 = Td;
        }
        var w = (b & 4) !== 0, z = !w && a === "scroll", u = w ? h2 !== null ? h2 + "Capture" : null : h2;
        w = [];
        for (var t = d2, q2; t !== null; ) {
          q2 = t;
          var v = q2.stateNode;
          q2.tag === 5 && v !== null && (q2 = v, u !== null && (v = Ob(t, u), v != null && w.push(ef(t, v, q2))));
          if (z)
            break;
          t = t.return;
        }
        0 < w.length && (h2 = new k2(h2, x, null, c, e2), g3.push({ event: h2, listeners: w }));
      }
    }
    if ((b & 7) === 0) {
      a: {
        h2 = a === "mouseover" || a === "pointerover";
        k2 = a === "mouseout" || a === "pointerout";
        if (h2 && (b & 16) === 0 && (x = c.relatedTarget || c.fromElement) && (wc(x) || x[ff]))
          break a;
        if (k2 || h2) {
          h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
          if (k2) {
            if (x = c.relatedTarget || c.toElement, k2 = d2, x = x ? wc(x) : null, x !== null && (z = Zb(x), x !== z || x.tag !== 5 && x.tag !== 6))
              x = null;
          } else
            k2 = null, x = d2;
          if (k2 !== x) {
            w = Bd;
            v = "onMouseLeave";
            u = "onMouseEnter";
            t = "mouse";
            if (a === "pointerout" || a === "pointerover")
              w = Td, v = "onPointerLeave", u = "onPointerEnter", t = "pointer";
            z = k2 == null ? h2 : ue(k2);
            q2 = x == null ? h2 : ue(x);
            h2 = new w(v, t + "leave", k2, c, e2);
            h2.target = z;
            h2.relatedTarget = q2;
            v = null;
            wc(e2) === d2 && (w = new w(u, t + "enter", x, c, e2), w.target = q2, w.relatedTarget = z, v = w);
            z = v;
            if (k2 && x)
              b: {
                w = k2;
                u = x;
                t = 0;
                for (q2 = w; q2; q2 = gf(q2))
                  t++;
                q2 = 0;
                for (v = u; v; v = gf(v))
                  q2++;
                for (; 0 < t - q2; )
                  w = gf(w), t--;
                for (; 0 < q2 - t; )
                  u = gf(u), q2--;
                for (; t--; ) {
                  if (w === u || u !== null && w === u.alternate)
                    break b;
                  w = gf(w);
                  u = gf(u);
                }
                w = null;
              }
            else
              w = null;
            k2 !== null && hf(g3, h2, k2, w, false);
            x !== null && z !== null && hf(g3, z, x, w, true);
          }
        }
      }
      a: {
        h2 = d2 ? ue(d2) : window;
        k2 = h2.nodeName && h2.nodeName.toLowerCase();
        if (k2 === "select" || k2 === "input" && h2.type === "file")
          var J = ve;
        else if (me(h2))
          if (we)
            J = Fe;
          else {
            J = De;
            var K = Ce;
          }
        else
          (k2 = h2.nodeName) && k2.toLowerCase() === "input" && (h2.type === "checkbox" || h2.type === "radio") && (J = Ee);
        if (J && (J = J(a, d2))) {
          ne(g3, J, c, e2);
          break a;
        }
        K && K(a, h2, d2);
        a === "focusout" && (K = h2._wrapperState) && K.controlled && h2.type === "number" && bb(h2, "number", h2.value);
      }
      K = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(K) || K.contentEditable === "true")
            Qe = K, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g3, c, e2);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g3, c, e2);
      }
      var Q;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var L = "onCompositionStart";
              break b;
            case "compositionend":
              L = "onCompositionEnd";
              break b;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break b;
          }
          L = void 0;
        }
      else
        ie ? ge(a, c) && (L = "onCompositionEnd") : a === "keydown" && c.keyCode === 229 && (L = "onCompositionStart");
      L && (de && c.locale !== "ko" && (ie || L !== "onCompositionStart" ? L === "onCompositionEnd" && ie && (Q = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K = oe(d2, L), 0 < K.length && (L = new Ld(L, a, null, c, e2), g3.push({ event: L, listeners: K }), Q ? L.data = Q : (Q = he(c), Q !== null && (L.data = Q))));
      if (Q = ce ? je(a, c) : ke(a, c))
        d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g3.push({ event: e2, listeners: d2 }), e2.data = Q);
    }
    se(g3, b);
  });
}
function ef(a, b, c) {
  return { instance: a, listener: b, currentTarget: c };
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; a !== null; ) {
    var e = a, f2 = e.stateNode;
    e.tag === 5 && f2 !== null && (e = f2, f2 = Ob(a, c), f2 != null && d.unshift(ef(a, f2, e)), f2 = Ob(a, b), f2 != null && d.push(ef(a, f2, e)));
    a = a.return;
  }
  return d;
}
function gf(a) {
  if (a === null)
    return null;
  do
    a = a.return;
  while (a && a.tag !== 5);
  return a ? a : null;
}
function hf(a, b, c, d, e) {
  for (var f2 = b._reactName, g2 = []; c !== null && c !== d; ) {
    var h = c, k = h.alternate, l = h.stateNode;
    if (k !== null && k === d)
      break;
    h.tag === 5 && l !== null && (h = l, e ? (k = Ob(c, f2), k != null && g2.unshift(ef(c, k, h))) : e || (k = Ob(c, f2), k != null && g2.push(ef(c, k, h))));
    c = c.return;
  }
  g2.length !== 0 && a.push({ event: b, listeners: g2 });
}
function jf() {
}
var kf = null, lf = null;
function mf(a, b) {
  switch (a) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b.autoFocus;
  }
  return false;
}
function nf(a, b) {
  return a === "textarea" || a === "option" || a === "noscript" || typeof b.children === "string" || typeof b.children === "number" || typeof b.dangerouslySetInnerHTML === "object" && b.dangerouslySetInnerHTML !== null && b.dangerouslySetInnerHTML.__html != null;
}
var of = typeof setTimeout === "function" ? setTimeout : void 0, pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
function qf(a) {
  a.nodeType === 1 ? a.textContent = "" : a.nodeType === 9 && (a = a.body, a != null && (a.textContent = ""));
}
function rf(a) {
  for (; a != null; a = a.nextSibling) {
    var b = a.nodeType;
    if (b === 1 || b === 3)
      break;
  }
  return a;
}
function sf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (a.nodeType === 8) {
      var c = a.data;
      if (c === "$" || c === "$!" || c === "$?") {
        if (b === 0)
          return a;
        b--;
      } else
        c === "/$" && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var tf = 0;
function uf(a) {
  return { $$typeof: Ga, toString: a, valueOf: a };
}
var vf = Math.random().toString(36).slice(2), wf = "__reactFiber$" + vf, xf = "__reactProps$" + vf, ff = "__reactContainer$" + vf, yf = "__reactEvents$" + vf;
function wc(a) {
  var b = a[wf];
  if (b)
    return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[ff] || c[wf]) {
      c = b.alternate;
      if (b.child !== null || c !== null && c.child !== null)
        for (a = sf(a); a !== null; ) {
          if (c = a[wf])
            return c;
          a = sf(a);
        }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[wf] || a[ff];
  return !a || a.tag !== 5 && a.tag !== 6 && a.tag !== 13 && a.tag !== 3 ? null : a;
}
function ue(a) {
  if (a.tag === 5 || a.tag === 6)
    return a.stateNode;
  throw Error(y(33));
}
function Db(a) {
  return a[xf] || null;
}
function $e(a) {
  var b = a[yf];
  b === void 0 && (b = a[yf] = /* @__PURE__ */ new Set());
  return b;
}
var zf = [], Af = -1;
function Bf(a) {
  return { current: a };
}
function H(a) {
  0 > Af || (a.current = zf[Af], zf[Af] = null, Af--);
}
function I(a, b) {
  Af++;
  zf[Af] = a.current;
  a.current = b;
}
var Cf = {}, M = Bf(Cf), N = Bf(false), Df = Cf;
function Ef(a, b) {
  var c = a.type.contextTypes;
  if (!c)
    return Cf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f2;
  for (f2 in c)
    e[f2] = b[f2];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Ff(a) {
  a = a.childContextTypes;
  return a !== null && a !== void 0;
}
function Gf() {
  H(N);
  H(M);
}
function Hf(a, b, c) {
  if (M.current !== Cf)
    throw Error(y(168));
  I(M, b);
  I(N, c);
}
function If(a, b, c) {
  var d = a.stateNode;
  a = b.childContextTypes;
  if (typeof d.getChildContext !== "function")
    return c;
  d = d.getChildContext();
  for (var e in d)
    if (!(e in a))
      throw Error(y(108, Ra(b) || "Unknown", e));
  return m({}, c, d);
}
function Jf(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M.current;
  I(M, a);
  I(N, N.current);
  return true;
}
function Kf(a, b, c) {
  var d = a.stateNode;
  if (!d)
    throw Error(y(169));
  c ? (a = If(a, b, Df), d.__reactInternalMemoizedMergedChildContext = a, H(N), H(M), I(M, a)) : H(N);
  I(N, c);
}
var Lf = null, Mf = null, Nf = r.unstable_runWithPriority, Of = r.unstable_scheduleCallback, Pf = r.unstable_cancelCallback, Qf = r.unstable_shouldYield, Rf = r.unstable_requestPaint, Sf = r.unstable_now, Tf = r.unstable_getCurrentPriorityLevel, Uf = r.unstable_ImmediatePriority, Vf = r.unstable_UserBlockingPriority, Wf = r.unstable_NormalPriority, Xf = r.unstable_LowPriority, Yf = r.unstable_IdlePriority, Zf = {}, $f = Rf !== void 0 ? Rf : function() {
}, ag = null, bg = null, cg = false, dg = Sf(), O = 1e4 > dg ? Sf : function() {
  return Sf() - dg;
};
function eg() {
  switch (Tf()) {
    case Uf:
      return 99;
    case Vf:
      return 98;
    case Wf:
      return 97;
    case Xf:
      return 96;
    case Yf:
      return 95;
    default:
      throw Error(y(332));
  }
}
function fg(a) {
  switch (a) {
    case 99:
      return Uf;
    case 98:
      return Vf;
    case 97:
      return Wf;
    case 96:
      return Xf;
    case 95:
      return Yf;
    default:
      throw Error(y(332));
  }
}
function gg(a, b) {
  a = fg(a);
  return Nf(a, b);
}
function hg(a, b, c) {
  a = fg(a);
  return Of(a, b, c);
}
function ig() {
  if (bg !== null) {
    var a = bg;
    bg = null;
    Pf(a);
  }
  jg();
}
function jg() {
  if (!cg && ag !== null) {
    cg = true;
    var a = 0;
    try {
      var b = ag;
      gg(99, function() {
        for (; a < b.length; a++) {
          var c = b[a];
          do
            c = c(true);
          while (c !== null);
        }
      });
      ag = null;
    } catch (c) {
      throw ag !== null && (ag = ag.slice(a + 1)), Of(Uf, ig), c;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a, b) {
  if (a && a.defaultProps) {
    b = m({}, b);
    a = a.defaultProps;
    for (var c in a)
      b[c] === void 0 && (b[c] = a[c]);
    return b;
  }
  return b;
}
var mg = Bf(null), ng = null, og = null, pg = null;
function qg() {
  pg = og = ng = null;
}
function rg(a) {
  var b = mg.current;
  H(mg);
  a.type._context._currentValue = b;
}
function sg(a, b) {
  for (; a !== null; ) {
    var c = a.alternate;
    if ((a.childLanes & b) === b)
      if (c === null || (c.childLanes & b) === b)
        break;
      else
        c.childLanes |= b;
    else
      a.childLanes |= b, c !== null && (c.childLanes |= b);
    a = a.return;
  }
}
function tg(a, b) {
  ng = a;
  pg = og = null;
  a = a.dependencies;
  a !== null && a.firstContext !== null && ((a.lanes & b) !== 0 && (ug = true), a.firstContext = null);
}
function vg(a, b) {
  if (pg !== a && b !== false && b !== 0) {
    if (typeof b !== "number" || b === 1073741823)
      pg = a, b = 1073741823;
    b = { context: a, observedBits: b, next: null };
    if (og === null) {
      if (ng === null)
        throw Error(y(308));
      og = b;
      ng.dependencies = { lanes: 0, firstContext: b, responders: null };
    } else
      og = og.next = b;
  }
  return a._currentValue;
}
var wg = false;
function xg(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
}
function yg(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function zg(a, b) {
  return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
}
function Ag(a, b) {
  a = a.updateQueue;
  if (a !== null) {
    a = a.shared;
    var c = a.pending;
    c === null ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  }
}
function Bg(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (d !== null && (d = d.updateQueue, c === d)) {
    var e = null, f2 = null;
    c = c.firstBaseUpdate;
    if (c !== null) {
      do {
        var g2 = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        f2 === null ? e = f2 = g2 : f2 = f2.next = g2;
        c = c.next;
      } while (c !== null);
      f2 === null ? e = f2 = b : f2 = f2.next = b;
    } else
      e = f2 = b;
    c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  a === null ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function Cg(a, b, c, d) {
  var e = a.updateQueue;
  wg = false;
  var f2 = e.firstBaseUpdate, g2 = e.lastBaseUpdate, h = e.shared.pending;
  if (h !== null) {
    e.shared.pending = null;
    var k = h, l = k.next;
    k.next = null;
    g2 === null ? f2 = l : g2.next = l;
    g2 = k;
    var n2 = a.alternate;
    if (n2 !== null) {
      n2 = n2.updateQueue;
      var A = n2.lastBaseUpdate;
      A !== g2 && (A === null ? n2.firstBaseUpdate = l : A.next = l, n2.lastBaseUpdate = k);
    }
  }
  if (f2 !== null) {
    A = e.baseState;
    g2 = 0;
    n2 = l = k = null;
    do {
      h = f2.lane;
      var p2 = f2.eventTime;
      if ((d & h) === h) {
        n2 !== null && (n2 = n2.next = {
          eventTime: p2,
          lane: 0,
          tag: f2.tag,
          payload: f2.payload,
          callback: f2.callback,
          next: null
        });
        a: {
          var C = a, x = f2;
          h = b;
          p2 = c;
          switch (x.tag) {
            case 1:
              C = x.payload;
              if (typeof C === "function") {
                A = C.call(p2, A, h);
                break a;
              }
              A = C;
              break a;
            case 3:
              C.flags = C.flags & -4097 | 64;
            case 0:
              C = x.payload;
              h = typeof C === "function" ? C.call(p2, A, h) : C;
              if (h === null || h === void 0)
                break a;
              A = m({}, A, h);
              break a;
            case 2:
              wg = true;
          }
        }
        f2.callback !== null && (a.flags |= 32, h = e.effects, h === null ? e.effects = [f2] : h.push(f2));
      } else
        p2 = { eventTime: p2, lane: h, tag: f2.tag, payload: f2.payload, callback: f2.callback, next: null }, n2 === null ? (l = n2 = p2, k = A) : n2 = n2.next = p2, g2 |= h;
      f2 = f2.next;
      if (f2 === null)
        if (h = e.shared.pending, h === null)
          break;
        else
          f2 = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
    } while (1);
    n2 === null && (k = A);
    e.baseState = k;
    e.firstBaseUpdate = l;
    e.lastBaseUpdate = n2;
    Dg |= g2;
    a.lanes = g2;
    a.memoizedState = A;
  }
}
function Eg(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (a !== null)
    for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (e !== null) {
        d.callback = null;
        d = c;
        if (typeof e !== "function")
          throw Error(y(191, e));
        e.call(d);
      }
    }
}
var Fg = new aa.Component().refs;
function Gg(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = c === null || c === void 0 ? b : m({}, b, c);
  a.memoizedState = c;
  a.lanes === 0 && (a.updateQueue.baseState = c);
}
var Kg = { isMounted: function(a) {
  return (a = a._reactInternals) ? Zb(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = Hg(), e = Ig(a), f2 = zg(d, e);
  f2.payload = b;
  c !== void 0 && c !== null && (f2.callback = c);
  Ag(a, f2);
  Jg(a, e, d);
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = Hg(), e = Ig(a), f2 = zg(d, e);
  f2.tag = 1;
  f2.payload = b;
  c !== void 0 && c !== null && (f2.callback = c);
  Ag(a, f2);
  Jg(a, e, d);
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = Hg(), d = Ig(a), e = zg(c, d);
  e.tag = 2;
  b !== void 0 && b !== null && (e.callback = b);
  Ag(a, e);
  Jg(a, d, c);
} };
function Lg(a, b, c, d, e, f2, g2) {
  a = a.stateNode;
  return typeof a.shouldComponentUpdate === "function" ? a.shouldComponentUpdate(d, f2, g2) : b.prototype && b.prototype.isPureReactComponent ? !Je(c, d) || !Je(e, f2) : true;
}
function Mg(a, b, c) {
  var d = false, e = Cf;
  var f2 = b.contextType;
  typeof f2 === "object" && f2 !== null ? f2 = vg(f2) : (e = Ff(b) ? Df : M.current, d = b.contextTypes, f2 = (d = d !== null && d !== void 0) ? Ef(a, e) : Cf);
  b = new b(c, f2);
  a.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
  b.updater = Kg;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b;
}
function Ng(a, b, c, d) {
  a = b.state;
  typeof b.componentWillReceiveProps === "function" && b.componentWillReceiveProps(c, d);
  typeof b.UNSAFE_componentWillReceiveProps === "function" && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && Kg.enqueueReplaceState(b, b.state, null);
}
function Og(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = Fg;
  xg(a);
  var f2 = b.contextType;
  typeof f2 === "object" && f2 !== null ? e.context = vg(f2) : (f2 = Ff(b) ? Df : M.current, e.context = Ef(a, f2));
  Cg(a, c, e, d);
  e.state = a.memoizedState;
  f2 = b.getDerivedStateFromProps;
  typeof f2 === "function" && (Gg(a, b, f2, c), e.state = a.memoizedState);
  typeof b.getDerivedStateFromProps === "function" || typeof e.getSnapshotBeforeUpdate === "function" || typeof e.UNSAFE_componentWillMount !== "function" && typeof e.componentWillMount !== "function" || (b = e.state, typeof e.componentWillMount === "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount === "function" && e.UNSAFE_componentWillMount(), b !== e.state && Kg.enqueueReplaceState(e, e.state, null), Cg(a, c, e, d), e.state = a.memoizedState);
  typeof e.componentDidMount === "function" && (a.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a, b, c) {
  a = c.ref;
  if (a !== null && typeof a !== "function" && typeof a !== "object") {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (c.tag !== 1)
          throw Error(y(309));
        var d = c.stateNode;
      }
      if (!d)
        throw Error(y(147, a));
      var e = "" + a;
      if (b !== null && b.ref !== null && typeof b.ref === "function" && b.ref._stringRef === e)
        return b.ref;
      b = function(a2) {
        var b2 = d.refs;
        b2 === Fg && (b2 = d.refs = {});
        a2 === null ? delete b2[e] : b2[e] = a2;
      };
      b._stringRef = e;
      return b;
    }
    if (typeof a !== "string")
      throw Error(y(284));
    if (!c._owner)
      throw Error(y(290, a));
  }
  return a;
}
function Rg(a, b) {
  if (a.type !== "textarea")
    throw Error(y(31, Object.prototype.toString.call(b) === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
}
function Sg(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.lastEffect;
      d2 !== null ? (d2.nextEffect = c2, b2.lastEffect = c2) : b2.firstEffect = b2.lastEffect = c2;
      c2.nextEffect = null;
      c2.flags = 8;
    }
  }
  function c(c2, d2) {
    if (!a)
      return null;
    for (; d2 !== null; )
      b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = /* @__PURE__ */ new Map(); b2 !== null; )
      b2.key !== null ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = Tg(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b2, c2, d2) {
    b2.index = d2;
    if (!a)
      return c2;
    d2 = b2.alternate;
    if (d2 !== null)
      return d2 = d2.index, d2 < c2 ? (b2.flags = 2, c2) : d2;
    b2.flags = 2;
    return c2;
  }
  function g2(b2) {
    a && b2.alternate === null && (b2.flags = 2);
    return b2;
  }
  function h(a2, b2, c2, d2) {
    if (b2 === null || b2.tag !== 6)
      return b2 = Ug(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k(a2, b2, c2, d2) {
    if (b2 !== null && b2.elementType === c2.type)
      return d2 = e(b2, c2.props), d2.ref = Qg(a2, b2, c2), d2.return = a2, d2;
    d2 = Vg(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = Qg(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l(a2, b2, c2, d2) {
    if (b2 === null || b2.tag !== 4 || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
      return b2 = Wg(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function n2(a2, b2, c2, d2, f3) {
    if (b2 === null || b2.tag !== 7)
      return b2 = Xg(c2, a2.mode, d2, f3), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function A(a2, b2, c2) {
    if (typeof b2 === "string" || typeof b2 === "number")
      return b2 = Ug("" + b2, a2.mode, c2), b2.return = a2, b2;
    if (typeof b2 === "object" && b2 !== null) {
      switch (b2.$$typeof) {
        case sa:
          return c2 = Vg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Qg(a2, null, b2), c2.return = a2, c2;
        case ta:
          return b2 = Wg(b2, a2.mode, c2), b2.return = a2, b2;
      }
      if (Pg(b2) || La(b2))
        return b2 = Xg(b2, a2.mode, c2, null), b2.return = a2, b2;
      Rg(a2, b2);
    }
    return null;
  }
  function p2(a2, b2, c2, d2) {
    var e2 = b2 !== null ? b2.key : null;
    if (typeof c2 === "string" || typeof c2 === "number")
      return e2 !== null ? null : h(a2, b2, "" + c2, d2);
    if (typeof c2 === "object" && c2 !== null) {
      switch (c2.$$typeof) {
        case sa:
          return c2.key === e2 ? c2.type === ua ? n2(a2, b2, c2.props.children, d2, e2) : k(a2, b2, c2, d2) : null;
        case ta:
          return c2.key === e2 ? l(a2, b2, c2, d2) : null;
      }
      if (Pg(c2) || La(c2))
        return e2 !== null ? null : n2(a2, b2, c2, d2, null);
      Rg(a2, c2);
    }
    return null;
  }
  function C(a2, b2, c2, d2, e2) {
    if (typeof d2 === "string" || typeof d2 === "number")
      return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
    if (typeof d2 === "object" && d2 !== null) {
      switch (d2.$$typeof) {
        case sa:
          return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, d2.type === ua ? n2(b2, a2, d2.props.children, e2, d2.key) : k(b2, a2, d2, e2);
        case ta:
          return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, l(b2, a2, d2, e2);
      }
      if (Pg(d2) || La(d2))
        return a2 = a2.get(c2) || null, n2(b2, a2, d2, e2, null);
      Rg(b2, d2);
    }
    return null;
  }
  function x(e2, g3, h2, k2) {
    for (var l2 = null, t = null, u = g3, z = g3 = 0, q2 = null; u !== null && z < h2.length; z++) {
      u.index > z ? (q2 = u, u = null) : q2 = u.sibling;
      var n3 = p2(e2, u, h2[z], k2);
      if (n3 === null) {
        u === null && (u = q2);
        break;
      }
      a && u && n3.alternate === null && b(e2, u);
      g3 = f2(n3, g3, z);
      t === null ? l2 = n3 : t.sibling = n3;
      t = n3;
      u = q2;
    }
    if (z === h2.length)
      return c(e2, u), l2;
    if (u === null) {
      for (; z < h2.length; z++)
        u = A(e2, h2[z], k2), u !== null && (g3 = f2(u, g3, z), t === null ? l2 = u : t.sibling = u, t = u);
      return l2;
    }
    for (u = d(e2, u); z < h2.length; z++)
      q2 = C(u, e2, z, h2[z], k2), q2 !== null && (a && q2.alternate !== null && u.delete(q2.key === null ? z : q2.key), g3 = f2(q2, g3, z), t === null ? l2 = q2 : t.sibling = q2, t = q2);
    a && u.forEach(function(a2) {
      return b(e2, a2);
    });
    return l2;
  }
  function w(e2, g3, h2, k2) {
    var l2 = La(h2);
    if (typeof l2 !== "function")
      throw Error(y(150));
    h2 = l2.call(h2);
    if (h2 == null)
      throw Error(y(151));
    for (var t = l2 = null, u = g3, z = g3 = 0, q2 = null, n3 = h2.next(); u !== null && !n3.done; z++, n3 = h2.next()) {
      u.index > z ? (q2 = u, u = null) : q2 = u.sibling;
      var w2 = p2(e2, u, n3.value, k2);
      if (w2 === null) {
        u === null && (u = q2);
        break;
      }
      a && u && w2.alternate === null && b(e2, u);
      g3 = f2(w2, g3, z);
      t === null ? l2 = w2 : t.sibling = w2;
      t = w2;
      u = q2;
    }
    if (n3.done)
      return c(e2, u), l2;
    if (u === null) {
      for (; !n3.done; z++, n3 = h2.next())
        n3 = A(e2, n3.value, k2), n3 !== null && (g3 = f2(n3, g3, z), t === null ? l2 = n3 : t.sibling = n3, t = n3);
      return l2;
    }
    for (u = d(e2, u); !n3.done; z++, n3 = h2.next())
      n3 = C(u, e2, z, n3.value, k2), n3 !== null && (a && n3.alternate !== null && u.delete(n3.key === null ? z : n3.key), g3 = f2(n3, g3, z), t === null ? l2 = n3 : t.sibling = n3, t = n3);
    a && u.forEach(function(a2) {
      return b(e2, a2);
    });
    return l2;
  }
  return function(a2, d2, f3, h2) {
    var k2 = typeof f3 === "object" && f3 !== null && f3.type === ua && f3.key === null;
    k2 && (f3 = f3.props.children);
    var l2 = typeof f3 === "object" && f3 !== null;
    if (l2)
      switch (f3.$$typeof) {
        case sa:
          a: {
            l2 = f3.key;
            for (k2 = d2; k2 !== null; ) {
              if (k2.key === l2) {
                switch (k2.tag) {
                  case 7:
                    if (f3.type === ua) {
                      c(a2, k2.sibling);
                      d2 = e(k2, f3.props.children);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                    break;
                  default:
                    if (k2.elementType === f3.type) {
                      c(a2, k2.sibling);
                      d2 = e(k2, f3.props);
                      d2.ref = Qg(a2, k2, f3);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                }
                c(a2, k2);
                break;
              } else
                b(a2, k2);
              k2 = k2.sibling;
            }
            f3.type === ua ? (d2 = Xg(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = Vg(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = Qg(a2, d2, f3), h2.return = a2, a2 = h2);
          }
          return g2(a2);
        case ta:
          a: {
            for (k2 = f3.key; d2 !== null; ) {
              if (d2.key === k2)
                if (d2.tag === 4 && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f3.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
              else
                b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = Wg(f3, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g2(a2);
      }
    if (typeof f3 === "string" || typeof f3 === "number")
      return f3 = "" + f3, d2 !== null && d2.tag === 6 ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Ug(f3, a2.mode, h2), d2.return = a2, a2 = d2), g2(a2);
    if (Pg(f3))
      return x(a2, d2, f3, h2);
    if (La(f3))
      return w(a2, d2, f3, h2);
    l2 && Rg(a2, f3);
    if (typeof f3 === "undefined" && !k2)
      switch (a2.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y(152, Ra(a2.type) || "Component"));
      }
    return c(a2, d2);
  };
}
var Yg = Sg(true), Zg = Sg(false), $g = {}, ah = Bf($g), bh = Bf($g), ch = Bf($g);
function dh(a) {
  if (a === $g)
    throw Error(y(174));
  return a;
}
function eh(a, b) {
  I(ch, b);
  I(bh, a);
  I(ah, $g);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : mb(null, "");
      break;
    default:
      a = a === 8 ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = mb(b, a);
  }
  H(ah);
  I(ah, b);
}
function fh() {
  H(ah);
  H(bh);
  H(ch);
}
function gh(a) {
  dh(ch.current);
  var b = dh(ah.current);
  var c = mb(b, a.type);
  b !== c && (I(bh, a), I(ah, c));
}
function hh(a) {
  bh.current === a && (H(ah), H(bh));
}
var P = Bf(0);
function ih(a) {
  for (var b = a; b !== null; ) {
    if (b.tag === 13) {
      var c = b.memoizedState;
      if (c !== null && (c = c.dehydrated, c === null || c.data === "$?" || c.data === "$!"))
        return b;
    } else if (b.tag === 19 && b.memoizedProps.revealOrder !== void 0) {
      if ((b.flags & 64) !== 0)
        return b;
    } else if (b.child !== null) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a)
      break;
    for (; b.sibling === null; ) {
      if (b.return === null || b.return === a)
        return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var jh = null, kh = null, lh = false;
function mh(a, b) {
  var c = nh(5, null, null, 0);
  c.elementType = "DELETED";
  c.type = "DELETED";
  c.stateNode = b;
  c.return = a;
  c.flags = 8;
  a.lastEffect !== null ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
}
function oh(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = b.nodeType !== 1 || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return b !== null ? (a.stateNode = b, true) : false;
    case 6:
      return b = a.pendingProps === "" || b.nodeType !== 3 ? null : b, b !== null ? (a.stateNode = b, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a) {
  if (lh) {
    var b = kh;
    if (b) {
      var c = b;
      if (!oh(a, b)) {
        b = rf(c.nextSibling);
        if (!b || !oh(a, b)) {
          a.flags = a.flags & -1025 | 2;
          lh = false;
          jh = a;
          return;
        }
        mh(jh, c);
      }
      jh = a;
      kh = rf(b.firstChild);
    } else
      a.flags = a.flags & -1025 | 2, lh = false, jh = a;
  }
}
function qh(a) {
  for (a = a.return; a !== null && a.tag !== 5 && a.tag !== 3 && a.tag !== 13; )
    a = a.return;
  jh = a;
}
function rh(a) {
  if (a !== jh)
    return false;
  if (!lh)
    return qh(a), lh = true, false;
  var b = a.type;
  if (a.tag !== 5 || b !== "head" && b !== "body" && !nf(b, a.memoizedProps))
    for (b = kh; b; )
      mh(a, b), b = rf(b.nextSibling);
  qh(a);
  if (a.tag === 13) {
    a = a.memoizedState;
    a = a !== null ? a.dehydrated : null;
    if (!a)
      throw Error(y(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (a.nodeType === 8) {
          var c = a.data;
          if (c === "/$") {
            if (b === 0) {
              kh = rf(a.nextSibling);
              break a;
            }
            b--;
          } else
            c !== "$" && c !== "$!" && c !== "$?" || b++;
        }
        a = a.nextSibling;
      }
      kh = null;
    }
  } else
    kh = jh ? rf(a.stateNode.nextSibling) : null;
  return true;
}
function sh() {
  kh = jh = null;
  lh = false;
}
var th = [];
function uh() {
  for (var a = 0; a < th.length; a++)
    th[a]._workInProgressVersionPrimary = null;
  th.length = 0;
}
var vh = ra.ReactCurrentDispatcher, wh = ra.ReactCurrentBatchConfig, xh = 0, R = null, S = null, T = null, yh = false, zh = false;
function Ah() {
  throw Error(y(321));
}
function Bh(a, b) {
  if (b === null)
    return false;
  for (var c = 0; c < b.length && c < a.length; c++)
    if (!He(a[c], b[c]))
      return false;
  return true;
}
function Ch(a, b, c, d, e, f2) {
  xh = f2;
  R = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  vh.current = a === null || a.memoizedState === null ? Dh : Eh;
  a = c(d, e);
  if (zh) {
    f2 = 0;
    do {
      zh = false;
      if (!(25 > f2))
        throw Error(y(301));
      f2 += 1;
      T = S = null;
      b.updateQueue = null;
      vh.current = Fh;
      a = c(d, e);
    } while (zh);
  }
  vh.current = Gh;
  b = S !== null && S.next !== null;
  xh = 0;
  T = S = R = null;
  yh = false;
  if (b)
    throw Error(y(300));
  return a;
}
function Hh() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  T === null ? R.memoizedState = T = a : T = T.next = a;
  return T;
}
function Ih() {
  if (S === null) {
    var a = R.alternate;
    a = a !== null ? a.memoizedState : null;
  } else
    a = S.next;
  var b = T === null ? R.memoizedState : T.next;
  if (b !== null)
    T = b, S = a;
  else {
    if (a === null)
      throw Error(y(310));
    S = a;
    a = { memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null };
    T === null ? R.memoizedState = T = a : T = T.next = a;
  }
  return T;
}
function Jh(a, b) {
  return typeof b === "function" ? b(a) : b;
}
function Kh(a) {
  var b = Ih(), c = b.queue;
  if (c === null)
    throw Error(y(311));
  c.lastRenderedReducer = a;
  var d = S, e = d.baseQueue, f2 = c.pending;
  if (f2 !== null) {
    if (e !== null) {
      var g2 = e.next;
      e.next = f2.next;
      f2.next = g2;
    }
    d.baseQueue = e = f2;
    c.pending = null;
  }
  if (e !== null) {
    e = e.next;
    d = d.baseState;
    var h = g2 = f2 = null, k = e;
    do {
      var l = k.lane;
      if ((xh & l) === l)
        h !== null && (h = h.next = { lane: 0, action: k.action, eagerReducer: k.eagerReducer, eagerState: k.eagerState, next: null }), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);
      else {
        var n2 = {
          lane: l,
          action: k.action,
          eagerReducer: k.eagerReducer,
          eagerState: k.eagerState,
          next: null
        };
        h === null ? (g2 = h = n2, f2 = d) : h = h.next = n2;
        R.lanes |= l;
        Dg |= l;
      }
      k = k.next;
    } while (k !== null && k !== e);
    h === null ? f2 = d : h.next = g2;
    He(d, b.memoizedState) || (ug = true);
    b.memoizedState = d;
    b.baseState = f2;
    b.baseQueue = h;
    c.lastRenderedState = d;
  }
  return [b.memoizedState, c.dispatch];
}
function Lh(a) {
  var b = Ih(), c = b.queue;
  if (c === null)
    throw Error(y(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f2 = b.memoizedState;
  if (e !== null) {
    c.pending = null;
    var g2 = e = e.next;
    do
      f2 = a(f2, g2.action), g2 = g2.next;
    while (g2 !== e);
    He(f2, b.memoizedState) || (ug = true);
    b.memoizedState = f2;
    b.baseQueue === null && (b.baseState = f2);
    c.lastRenderedState = f2;
  }
  return [f2, d];
}
function Mh(a, b, c) {
  var d = b._getVersion;
  d = d(b._source);
  var e = b._workInProgressVersionPrimary;
  if (e !== null)
    a = e === d;
  else if (a = a.mutableReadLanes, a = (xh & a) === a)
    b._workInProgressVersionPrimary = d, th.push(b);
  if (a)
    return c(b._source);
  th.push(b);
  throw Error(y(350));
}
function Nh(a, b, c, d) {
  var e = U;
  if (e === null)
    throw Error(y(349));
  var f2 = b._getVersion, g2 = f2(b._source), h = vh.current, k = h.useState(function() {
    return Mh(e, b, c);
  }), l = k[1], n2 = k[0];
  k = T;
  var A = a.memoizedState, p2 = A.refs, C = p2.getSnapshot, x = A.source;
  A = A.subscribe;
  var w = R;
  a.memoizedState = { refs: p2, source: b, subscribe: d };
  h.useEffect(function() {
    p2.getSnapshot = c;
    p2.setSnapshot = l;
    var a2 = f2(b._source);
    if (!He(g2, a2)) {
      a2 = c(b._source);
      He(n2, a2) || (l(a2), a2 = Ig(w), e.mutableReadLanes |= a2 & e.pendingLanes);
      a2 = e.mutableReadLanes;
      e.entangledLanes |= a2;
      for (var d2 = e.entanglements, h2 = a2; 0 < h2; ) {
        var k2 = 31 - Vc(h2), v = 1 << k2;
        d2[k2] |= a2;
        h2 &= ~v;
      }
    }
  }, [c, b, d]);
  h.useEffect(function() {
    return d(b._source, function() {
      var a2 = p2.getSnapshot, c2 = p2.setSnapshot;
      try {
        c2(a2(b._source));
        var d2 = Ig(w);
        e.mutableReadLanes |= d2 & e.pendingLanes;
      } catch (q2) {
        c2(function() {
          throw q2;
        });
      }
    });
  }, [b, d]);
  He(C, c) && He(x, b) && He(A, d) || (a = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n2 }, a.dispatch = l = Oh.bind(null, R, a), k.queue = a, k.baseQueue = null, n2 = Mh(e, b, c), k.memoizedState = k.baseState = n2);
  return n2;
}
function Ph(a, b, c) {
  var d = Ih();
  return Nh(d, a, b, c);
}
function Qh(a) {
  var b = Hh();
  typeof a === "function" && (a = a());
  b.memoizedState = b.baseState = a;
  a = b.queue = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a };
  a = a.dispatch = Oh.bind(null, R, a);
  return [b.memoizedState, a];
}
function Rh(a, b, c, d) {
  a = { tag: a, create: b, destroy: c, deps: d, next: null };
  b = R.updateQueue;
  b === null ? (b = { lastEffect: null }, R.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, c === null ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function Sh(a) {
  var b = Hh();
  a = { current: a };
  return b.memoizedState = a;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a, b, c, d) {
  var e = Hh();
  R.flags |= a;
  e.memoizedState = Rh(1 | b, c, void 0, d === void 0 ? null : d);
}
function Vh(a, b, c, d) {
  var e = Ih();
  d = d === void 0 ? null : d;
  var f2 = void 0;
  if (S !== null) {
    var g2 = S.memoizedState;
    f2 = g2.destroy;
    if (d !== null && Bh(d, g2.deps)) {
      Rh(b, c, f2, d);
      return;
    }
  }
  R.flags |= a;
  e.memoizedState = Rh(1 | b, c, f2, d);
}
function Wh(a, b) {
  return Uh(516, 4, a, b);
}
function Xh(a, b) {
  return Vh(516, 4, a, b);
}
function Yh(a, b) {
  return Vh(4, 2, a, b);
}
function Zh(a, b) {
  if (typeof b === "function")
    return a = a(), b(a), function() {
      b(null);
    };
  if (b !== null && b !== void 0)
    return a = a(), b.current = a, function() {
      b.current = null;
    };
}
function $h(a, b, c) {
  c = c !== null && c !== void 0 ? c.concat([a]) : null;
  return Vh(4, 2, Zh.bind(null, b, a), c);
}
function ai() {
}
function bi(a, b) {
  var c = Ih();
  b = b === void 0 ? null : b;
  var d = c.memoizedState;
  if (d !== null && b !== null && Bh(b, d[1]))
    return d[0];
  c.memoizedState = [a, b];
  return a;
}
function ci(a, b) {
  var c = Ih();
  b = b === void 0 ? null : b;
  var d = c.memoizedState;
  if (d !== null && b !== null && Bh(b, d[1]))
    return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function di(a, b) {
  var c = eg();
  gg(98 > c ? 98 : c, function() {
    a(true);
  });
  gg(97 < c ? 97 : c, function() {
    var c2 = wh.transition;
    wh.transition = 1;
    try {
      a(false), b();
    } finally {
      wh.transition = c2;
    }
  });
}
function Oh(a, b, c) {
  var d = Hg(), e = Ig(a), f2 = { lane: e, action: c, eagerReducer: null, eagerState: null, next: null }, g2 = b.pending;
  g2 === null ? f2.next = f2 : (f2.next = g2.next, g2.next = f2);
  b.pending = f2;
  g2 = a.alternate;
  if (a === R || g2 !== null && g2 === R)
    zh = yh = true;
  else {
    if (a.lanes === 0 && (g2 === null || g2.lanes === 0) && (g2 = b.lastRenderedReducer, g2 !== null))
      try {
        var h = b.lastRenderedState, k = g2(h, c);
        f2.eagerReducer = g2;
        f2.eagerState = k;
        if (He(k, h))
          return;
      } catch (l) {
      } finally {
      }
    Jg(a, e, d);
  }
}
var Gh = { readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false }, Dh = { readContext: vg, useCallback: function(a, b) {
  Hh().memoizedState = [a, b === void 0 ? null : b];
  return a;
}, useContext: vg, useEffect: Wh, useImperativeHandle: function(a, b, c) {
  c = c !== null && c !== void 0 ? c.concat([a]) : null;
  return Uh(4, 2, Zh.bind(null, b, a), c);
}, useLayoutEffect: function(a, b) {
  return Uh(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = Hh();
  b = b === void 0 ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = Hh();
  b = c !== void 0 ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = d.queue = { pending: null, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
  a = a.dispatch = Oh.bind(null, R, a);
  return [d.memoizedState, a];
}, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Qh(a), c = b[0], d = b[1];
  Wh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Qh(false), b = a[0];
  a = di.bind(null, a[1]);
  Sh(a);
  return [a, b];
}, useMutableSource: function(a, b, c) {
  var d = Hh();
  d.memoizedState = { refs: { getSnapshot: b, setSnapshot: null }, source: a, subscribe: c };
  return Nh(d, a, b, c);
}, useOpaqueIdentifier: function() {
  if (lh) {
    var a = false, b = uf(function() {
      a || (a = true, c("r:" + (tf++).toString(36)));
      throw Error(y(355));
    }), c = Qh(b)[1];
    (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
      c("r:" + (tf++).toString(36));
    }, void 0, null));
    return b;
  }
  b = "r:" + (tf++).toString(36);
  Qh(b);
  return b;
}, unstable_isNewReconciler: false }, Eh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
  return Kh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Kh(Jh), c = b[0], d = b[1];
  Xh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Kh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Kh(Jh)[0];
}, unstable_isNewReconciler: false }, Fh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
  return Lh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Lh(Jh), c = b[0], d = b[1];
  Xh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Lh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Lh(Jh)[0];
}, unstable_isNewReconciler: false }, ei = ra.ReactCurrentOwner, ug = false;
function fi(a, b, c, d) {
  b.child = a === null ? Zg(b, null, c, d) : Yg(b, a.child, c, d);
}
function gi(a, b, c, d, e) {
  c = c.render;
  var f2 = b.ref;
  tg(b, e);
  d = Ch(a, b, c, d, f2, e);
  if (a !== null && !ug)
    return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
  b.flags |= 1;
  fi(a, b, d, e);
  return b.child;
}
function ii(a, b, c, d, e, f2) {
  if (a === null) {
    var g2 = c.type;
    if (typeof g2 === "function" && !ji(g2) && g2.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0)
      return b.tag = 15, b.type = g2, ki(a, b, g2, d, e, f2);
    a = Vg(c.type, null, d, b, b.mode, f2);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  g2 = a.child;
  if ((e & f2) === 0 && (e = g2.memoizedProps, c = c.compare, c = c !== null ? c : Je, c(e, d) && a.ref === b.ref))
    return hi(a, b, f2);
  b.flags |= 1;
  a = Tg(g2, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function ki(a, b, c, d, e, f2) {
  if (a !== null && Je(a.memoizedProps, d) && a.ref === b.ref)
    if (ug = false, (f2 & e) !== 0)
      (a.flags & 16384) !== 0 && (ug = true);
    else
      return b.lanes = a.lanes, hi(a, b, f2);
  return li(a, b, c, d, f2);
}
function mi(a, b, c) {
  var d = b.pendingProps, e = d.children, f2 = a !== null ? a.memoizedState : null;
  if (d.mode === "hidden" || d.mode === "unstable-defer-without-hiding")
    if ((b.mode & 4) === 0)
      b.memoizedState = { baseLanes: 0 }, ni(b, c);
    else if ((c & 1073741824) !== 0)
      b.memoizedState = { baseLanes: 0 }, ni(b, f2 !== null ? f2.baseLanes : c);
    else
      return a = f2 !== null ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a }, ni(b, a), null;
  else
    f2 !== null ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, ni(b, d);
  fi(a, b, e, c);
  return b.child;
}
function oi(a, b) {
  var c = b.ref;
  if (a === null && c !== null || a !== null && a.ref !== c)
    b.flags |= 128;
}
function li(a, b, c, d, e) {
  var f2 = Ff(c) ? Df : M.current;
  f2 = Ef(b, f2);
  tg(b, e);
  c = Ch(a, b, c, d, f2, e);
  if (a !== null && !ug)
    return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
  b.flags |= 1;
  fi(a, b, c, e);
  return b.child;
}
function pi(a, b, c, d, e) {
  if (Ff(c)) {
    var f2 = true;
    Jf(b);
  } else
    f2 = false;
  tg(b, e);
  if (b.stateNode === null)
    a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), Mg(b, c, d), Og(b, c, d, e), d = true;
  else if (a === null) {
    var g2 = b.stateNode, h = b.memoizedProps;
    g2.props = h;
    var k = g2.context, l = c.contextType;
    typeof l === "object" && l !== null ? l = vg(l) : (l = Ff(c) ? Df : M.current, l = Ef(b, l));
    var n2 = c.getDerivedStateFromProps, A = typeof n2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function";
    A || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h !== d || k !== l) && Ng(b, g2, d, l);
    wg = false;
    var p2 = b.memoizedState;
    g2.state = p2;
    Cg(b, d, g2, e);
    k = b.memoizedState;
    h !== d || p2 !== k || N.current || wg ? (typeof n2 === "function" && (Gg(b, c, n2, d), k = b.memoizedState), (h = wg || Lg(b, c, h, d, p2, k, l)) ? (A || typeof g2.UNSAFE_componentWillMount !== "function" && typeof g2.componentWillMount !== "function" || (typeof g2.componentWillMount === "function" && g2.componentWillMount(), typeof g2.UNSAFE_componentWillMount === "function" && g2.UNSAFE_componentWillMount()), typeof g2.componentDidMount === "function" && (b.flags |= 4)) : (typeof g2.componentDidMount === "function" && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g2.props = d, g2.state = k, g2.context = l, d = h) : (typeof g2.componentDidMount === "function" && (b.flags |= 4), d = false);
  } else {
    g2 = b.stateNode;
    yg(a, b);
    h = b.memoizedProps;
    l = b.type === b.elementType ? h : lg(b.type, h);
    g2.props = l;
    A = b.pendingProps;
    p2 = g2.context;
    k = c.contextType;
    typeof k === "object" && k !== null ? k = vg(k) : (k = Ff(c) ? Df : M.current, k = Ef(b, k));
    var C = c.getDerivedStateFromProps;
    (n2 = typeof C === "function" || typeof g2.getSnapshotBeforeUpdate === "function") || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h !== A || p2 !== k) && Ng(b, g2, d, k);
    wg = false;
    p2 = b.memoizedState;
    g2.state = p2;
    Cg(b, d, g2, e);
    var x = b.memoizedState;
    h !== A || p2 !== x || N.current || wg ? (typeof C === "function" && (Gg(b, c, C, d), x = b.memoizedState), (l = wg || Lg(b, c, l, d, p2, x, k)) ? (n2 || typeof g2.UNSAFE_componentWillUpdate !== "function" && typeof g2.componentWillUpdate !== "function" || (typeof g2.componentWillUpdate === "function" && g2.componentWillUpdate(d, x, k), typeof g2.UNSAFE_componentWillUpdate === "function" && g2.UNSAFE_componentWillUpdate(d, x, k)), typeof g2.componentDidUpdate === "function" && (b.flags |= 4), typeof g2.getSnapshotBeforeUpdate === "function" && (b.flags |= 256)) : (typeof g2.componentDidUpdate !== "function" || h === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x), g2.props = d, g2.state = x, g2.context = k, d = l) : (typeof g2.componentDidUpdate !== "function" || h === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 256), d = false);
  }
  return qi(a, b, c, d, f2, e);
}
function qi(a, b, c, d, e, f2) {
  oi(a, b);
  var g2 = (b.flags & 64) !== 0;
  if (!d && !g2)
    return e && Kf(b, c, false), hi(a, b, f2);
  d = b.stateNode;
  ei.current = b;
  var h = g2 && typeof c.getDerivedStateFromError !== "function" ? null : d.render();
  b.flags |= 1;
  a !== null && g2 ? (b.child = Yg(b, a.child, null, f2), b.child = Yg(b, null, h, f2)) : fi(a, b, h, f2);
  b.memoizedState = d.state;
  e && Kf(b, c, true);
  return b.child;
}
function ri(a) {
  var b = a.stateNode;
  b.pendingContext ? Hf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Hf(a, b.context, false);
  eh(a, b.containerInfo);
}
var si = { dehydrated: null, retryLane: 0 };
function ti(a, b, c) {
  var d = b.pendingProps, e = P.current, f2 = false, g2;
  (g2 = (b.flags & 64) !== 0) || (g2 = a !== null && a.memoizedState === null ? false : (e & 2) !== 0);
  g2 ? (f2 = true, b.flags &= -65) : a !== null && a.memoizedState === null || d.fallback === void 0 || d.unstable_avoidThisFallback === true || (e |= 1);
  I(P, e & 1);
  if (a === null) {
    d.fallback !== void 0 && ph(b);
    a = d.children;
    e = d.fallback;
    if (f2)
      return a = ui(b, a, e, c), b.child.memoizedState = { baseLanes: c }, b.memoizedState = si, a;
    if (typeof d.unstable_expectedLoadTime === "number")
      return a = ui(b, a, e, c), b.child.memoizedState = { baseLanes: c }, b.memoizedState = si, b.lanes = 33554432, a;
    c = vi({ mode: "visible", children: a }, b.mode, c, null);
    c.return = b;
    return b.child = c;
  }
  if (a.memoizedState !== null) {
    if (f2)
      return d = wi(a, b, d.children, d.fallback, c), f2 = b.child, e = a.child.memoizedState, f2.memoizedState = e === null ? { baseLanes: c } : { baseLanes: e.baseLanes | c }, f2.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
    c = xi(a, b, d.children, c);
    b.memoizedState = null;
    return c;
  }
  if (f2)
    return d = wi(a, b, d.children, d.fallback, c), f2 = b.child, e = a.child.memoizedState, f2.memoizedState = e === null ? { baseLanes: c } : { baseLanes: e.baseLanes | c }, f2.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
  c = xi(a, b, d.children, c);
  b.memoizedState = null;
  return c;
}
function ui(a, b, c, d) {
  var e = a.mode, f2 = a.child;
  b = { mode: "hidden", children: b };
  (e & 2) === 0 && f2 !== null ? (f2.childLanes = 0, f2.pendingProps = b) : f2 = vi(b, e, 0, null);
  c = Xg(c, e, d, null);
  f2.return = a;
  c.return = a;
  f2.sibling = c;
  a.child = f2;
  return c;
}
function xi(a, b, c, d) {
  var e = a.child;
  a = e.sibling;
  c = Tg(e, { mode: "visible", children: c });
  (b.mode & 2) === 0 && (c.lanes = d);
  c.return = b;
  c.sibling = null;
  a !== null && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
  return b.child = c;
}
function wi(a, b, c, d, e) {
  var f2 = b.mode, g2 = a.child;
  a = g2.sibling;
  var h = { mode: "hidden", children: c };
  (f2 & 2) === 0 && b.child !== g2 ? (c = b.child, c.childLanes = 0, c.pendingProps = h, g2 = c.lastEffect, g2 !== null ? (b.firstEffect = c.firstEffect, b.lastEffect = g2, g2.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Tg(g2, h);
  a !== null ? d = Tg(a, d) : (d = Xg(d, f2, e, null), d.flags |= 2);
  d.return = b;
  c.return = b;
  c.sibling = d;
  b.child = c;
  return d;
}
function yi(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  c !== null && (c.lanes |= b);
  sg(a.return, b);
}
function zi(a, b, c, d, e, f2) {
  var g2 = a.memoizedState;
  g2 === null ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e, lastEffect: f2 } : (g2.isBackwards = b, g2.rendering = null, g2.renderingStartTime = 0, g2.last = d, g2.tail = c, g2.tailMode = e, g2.lastEffect = f2);
}
function Ai(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
  fi(a, b, d.children, c);
  d = P.current;
  if ((d & 2) !== 0)
    d = d & 1 | 2, b.flags |= 64;
  else {
    if (a !== null && (a.flags & 64) !== 0)
      a:
        for (a = b.child; a !== null; ) {
          if (a.tag === 13)
            a.memoizedState !== null && yi(a, c);
          else if (a.tag === 19)
            yi(a, c);
          else if (a.child !== null) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b)
            break a;
          for (; a.sibling === null; ) {
            if (a.return === null || a.return === b)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  I(P, d);
  if ((b.mode & 2) === 0)
    b.memoizedState = null;
  else
    switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; c !== null; )
          a = c.alternate, a !== null && ih(a) === null && (e = c), c = c.sibling;
        c = e;
        c === null ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        zi(b, false, e, c, f2, b.lastEffect);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; e !== null; ) {
          a = e.alternate;
          if (a !== null && ih(a) === null) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        zi(b, true, c, null, f2, b.lastEffect);
        break;
      case "together":
        zi(b, false, null, null, void 0, b.lastEffect);
        break;
      default:
        b.memoizedState = null;
    }
  return b.child;
}
function hi(a, b, c) {
  a !== null && (b.dependencies = a.dependencies);
  Dg |= b.lanes;
  if ((c & b.childLanes) !== 0) {
    if (a !== null && b.child !== a.child)
      throw Error(y(153));
    if (b.child !== null) {
      a = b.child;
      c = Tg(a, a.pendingProps);
      b.child = c;
      for (c.return = b; a.sibling !== null; )
        a = a.sibling, c = c.sibling = Tg(a, a.pendingProps), c.return = b;
      c.sibling = null;
    }
    return b.child;
  }
  return null;
}
var Bi, Ci, Di, Ei;
Bi = function(a, b) {
  for (var c = b.child; c !== null; ) {
    if (c.tag === 5 || c.tag === 6)
      a.appendChild(c.stateNode);
    else if (c.tag !== 4 && c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === b)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Ci = function() {
};
Di = function(a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    dh(ah.current);
    var f2 = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f2 = [];
        break;
      case "option":
        e = eb(a, e);
        d = eb(a, d);
        f2 = [];
        break;
      case "select":
        e = m({}, e, { value: void 0 });
        d = m({}, d, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f2 = [];
        break;
      default:
        typeof e.onClick !== "function" && typeof d.onClick === "function" && (a.onclick = jf);
    }
    vb(c, d);
    var g2;
    c = null;
    for (l in e)
      if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && e[l] != null)
        if (l === "style") {
          var h = e[l];
          for (g2 in h)
            h.hasOwnProperty(g2) && (c || (c = {}), c[g2] = "");
        } else
          l !== "dangerouslySetInnerHTML" && l !== "children" && l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (ca.hasOwnProperty(l) ? f2 || (f2 = []) : (f2 = f2 || []).push(l, null));
    for (l in d) {
      var k = d[l];
      h = e != null ? e[l] : void 0;
      if (d.hasOwnProperty(l) && k !== h && (k != null || h != null))
        if (l === "style")
          if (h) {
            for (g2 in h)
              !h.hasOwnProperty(g2) || k && k.hasOwnProperty(g2) || (c || (c = {}), c[g2] = "");
            for (g2 in k)
              k.hasOwnProperty(g2) && h[g2] !== k[g2] && (c || (c = {}), c[g2] = k[g2]);
          } else
            c || (f2 || (f2 = []), f2.push(l, c)), c = k;
        else
          l === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, k != null && h !== k && (f2 = f2 || []).push(l, k)) : l === "children" ? typeof k !== "string" && typeof k !== "number" || (f2 = f2 || []).push(l, "" + k) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && (ca.hasOwnProperty(l) ? (k != null && l === "onScroll" && G("scroll", a), f2 || h === k || (f2 = [])) : typeof k === "object" && k !== null && k.$$typeof === Ga ? k.toString() : (f2 = f2 || []).push(l, k));
    }
    c && (f2 = f2 || []).push("style", c);
    var l = f2;
    if (b.updateQueue = l)
      b.flags |= 4;
  }
};
Ei = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Fi(a, b) {
  if (!lh)
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; b !== null; )
          b.alternate !== null && (c = b), b = b.sibling;
        c === null ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; c !== null; )
          c.alternate !== null && (d = c), c = c.sibling;
        d === null ? b || a.tail === null ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function Gi(a, b, c) {
  var d = b.pendingProps;
  switch (b.tag) {
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
      return null;
    case 1:
      return Ff(b.type) && Gf(), null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      d = b.stateNode;
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (a === null || a.child === null)
        rh(b) ? b.flags |= 4 : d.hydrate || (b.flags |= 256);
      Ci(b);
      return null;
    case 5:
      hh(b);
      var e = dh(ch.current);
      c = b.type;
      if (a !== null && b.stateNode != null)
        Di(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);
      else {
        if (!d) {
          if (b.stateNode === null)
            throw Error(y(166));
          return null;
        }
        a = dh(ah.current);
        if (rh(b)) {
          d = b.stateNode;
          c = b.type;
          var f2 = b.memoizedProps;
          d[wf] = b;
          d[xf] = f2;
          switch (c) {
            case "dialog":
              G("cancel", d);
              G("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", d);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Xe.length; a++)
                G(Xe[a], d);
              break;
            case "source":
              G("error", d);
              break;
            case "img":
            case "image":
            case "link":
              G("error", d);
              G("load", d);
              break;
            case "details":
              G("toggle", d);
              break;
            case "input":
              Za(d, f2);
              G("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f2.multiple };
              G("invalid", d);
              break;
            case "textarea":
              hb(d, f2), G("invalid", d);
          }
          vb(c, f2);
          a = null;
          for (var g2 in f2)
            f2.hasOwnProperty(g2) && (e = f2[g2], g2 === "children" ? typeof e === "string" ? d.textContent !== e && (a = ["children", e]) : typeof e === "number" && d.textContent !== "" + e && (a = ["children", "" + e]) : ca.hasOwnProperty(g2) && e != null && g2 === "onScroll" && G("scroll", d));
          switch (c) {
            case "input":
              Va(d);
              cb(d, f2, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f2.onClick === "function" && (d.onclick = jf);
          }
          d = a;
          b.updateQueue = d;
          d !== null && (b.flags |= 4);
        } else {
          g2 = e.nodeType === 9 ? e : e.ownerDocument;
          a === kb.html && (a = lb(c));
          a === kb.html ? c === "script" ? (a = g2.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : typeof d.is === "string" ? a = g2.createElement(c, { is: d.is }) : (a = g2.createElement(c), c === "select" && (g2 = a, d.multiple ? g2.multiple = true : d.size && (g2.size = d.size))) : a = g2.createElementNS(a, c);
          a[wf] = b;
          a[xf] = d;
          Bi(a, b, false, false);
          b.stateNode = a;
          g2 = wb(c, d);
          switch (c) {
            case "dialog":
              G("cancel", a);
              G("close", a);
              e = d;
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", a);
              e = d;
              break;
            case "video":
            case "audio":
              for (e = 0; e < Xe.length; e++)
                G(Xe[e], a);
              e = d;
              break;
            case "source":
              G("error", a);
              e = d;
              break;
            case "img":
            case "image":
            case "link":
              G("error", a);
              G("load", a);
              e = d;
              break;
            case "details":
              G("toggle", a);
              e = d;
              break;
            case "input":
              Za(a, d);
              e = Ya(a, d);
              G("invalid", a);
              break;
            case "option":
              e = eb(a, d);
              break;
            case "select":
              a._wrapperState = { wasMultiple: !!d.multiple };
              e = m({}, d, { value: void 0 });
              G("invalid", a);
              break;
            case "textarea":
              hb(a, d);
              e = gb(a, d);
              G("invalid", a);
              break;
            default:
              e = d;
          }
          vb(c, e);
          var h = e;
          for (f2 in h)
            if (h.hasOwnProperty(f2)) {
              var k = h[f2];
              f2 === "style" ? tb(a, k) : f2 === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && ob(a, k)) : f2 === "children" ? typeof k === "string" ? (c !== "textarea" || k !== "") && pb(a, k) : typeof k === "number" && pb(a, "" + k) : f2 !== "suppressContentEditableWarning" && f2 !== "suppressHydrationWarning" && f2 !== "autoFocus" && (ca.hasOwnProperty(f2) ? k != null && f2 === "onScroll" && G("scroll", a) : k != null && qa(a, f2, k, g2));
            }
          switch (c) {
            case "input":
              Va(a);
              cb(a, d, false);
              break;
            case "textarea":
              Va(a);
              jb(a);
              break;
            case "option":
              d.value != null && a.setAttribute("value", "" + Sa(d.value));
              break;
            case "select":
              a.multiple = !!d.multiple;
              f2 = d.value;
              f2 != null ? fb(a, !!d.multiple, f2, false) : d.defaultValue != null && fb(a, !!d.multiple, d.defaultValue, true);
              break;
            default:
              typeof e.onClick === "function" && (a.onclick = jf);
          }
          mf(c, d) && (b.flags |= 4);
        }
        b.ref !== null && (b.flags |= 128);
      }
      return null;
    case 6:
      if (a && b.stateNode != null)
        Ei(a, b, a.memoizedProps, d);
      else {
        if (typeof d !== "string" && b.stateNode === null)
          throw Error(y(166));
        c = dh(ch.current);
        dh(ah.current);
        rh(b) ? (d = b.stateNode, c = b.memoizedProps, d[wf] = b, d.nodeValue !== c && (b.flags |= 4)) : (d = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(d), d[wf] = b, b.stateNode = d);
      }
      return null;
    case 13:
      H(P);
      d = b.memoizedState;
      if ((b.flags & 64) !== 0)
        return b.lanes = c, b;
      d = d !== null;
      c = false;
      a === null ? b.memoizedProps.fallback !== void 0 && rh(b) : c = a.memoizedState !== null;
      if (d && !c && (b.mode & 2) !== 0)
        if (a === null && b.memoizedProps.unstable_avoidThisFallback !== true || (P.current & 1) !== 0)
          V === 0 && (V = 3);
        else {
          if (V === 0 || V === 3)
            V = 4;
          U === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U, W);
        }
      if (d || c)
        b.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b), a === null && cf(b.stateNode.containerInfo), null;
    case 10:
      return rg(b), null;
    case 17:
      return Ff(b.type) && Gf(), null;
    case 19:
      H(P);
      d = b.memoizedState;
      if (d === null)
        return null;
      f2 = (b.flags & 64) !== 0;
      g2 = d.rendering;
      if (g2 === null)
        if (f2)
          Fi(d, false);
        else {
          if (V !== 0 || a !== null && (a.flags & 64) !== 0)
            for (a = b.child; a !== null; ) {
              g2 = ih(a);
              if (g2 !== null) {
                b.flags |= 64;
                Fi(d, false);
                f2 = g2.updateQueue;
                f2 !== null && (b.updateQueue = f2, b.flags |= 4);
                d.lastEffect === null && (b.firstEffect = null);
                b.lastEffect = d.lastEffect;
                d = c;
                for (c = b.child; c !== null; )
                  f2 = c, a = d, f2.flags &= 2, f2.nextEffect = null, f2.firstEffect = null, f2.lastEffect = null, g2 = f2.alternate, g2 === null ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a = g2.dependencies, f2.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                I(P, P.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
          d.tail !== null && O() > Ji && (b.flags |= 64, f2 = true, Fi(d, false), b.lanes = 33554432);
        }
      else {
        if (!f2)
          if (a = ih(g2), a !== null) {
            if (b.flags |= 64, f2 = true, c = a.updateQueue, c !== null && (b.updateQueue = c, b.flags |= 4), Fi(d, true), d.tail === null && d.tailMode === "hidden" && !g2.alternate && !lh)
              return b = b.lastEffect = d.lastEffect, b !== null && (b.nextEffect = null), null;
          } else
            2 * O() - d.renderingStartTime > Ji && c !== 1073741824 && (b.flags |= 64, f2 = true, Fi(d, false), b.lanes = 33554432);
        d.isBackwards ? (g2.sibling = b.child, b.child = g2) : (c = d.last, c !== null ? c.sibling = g2 : b.child = g2, d.last = g2);
      }
      return d.tail !== null ? (c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = O(), c.sibling = null, b = P.current, I(P, f2 ? b & 1 | 2 : b & 1), c) : null;
    case 23:
    case 24:
      return Ki(), a !== null && a.memoizedState !== null !== (b.memoizedState !== null) && d.mode !== "unstable-defer-without-hiding" && (b.flags |= 4), null;
  }
  throw Error(y(156, b.tag));
}
function Li(a) {
  switch (a.tag) {
    case 1:
      Ff(a.type) && Gf();
      var b = a.flags;
      return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      b = a.flags;
      if ((b & 64) !== 0)
        throw Error(y(285));
      a.flags = b & -4097 | 64;
      return a;
    case 5:
      return hh(a), null;
    case 13:
      return H(P), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
    case 19:
      return H(P), null;
    case 4:
      return fh(), null;
    case 10:
      return rg(a), null;
    case 23:
    case 24:
      return Ki(), null;
    default:
      return null;
  }
}
function Mi(a, b) {
  try {
    var c = "", d = b;
    do
      c += Qa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f2) {
    e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b, stack: e };
}
function Ni(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Oi = typeof WeakMap === "function" ? WeakMap : Map;
function Pi(a, b, c) {
  c = zg(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b.value;
  c.callback = function() {
    Qi || (Qi = true, Ri = d);
    Ni(a, b);
  };
  return c;
}
function Si(a, b, c) {
  c = zg(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if (typeof d === "function") {
    var e = b.value;
    c.payload = function() {
      Ni(a, b);
      return d(e);
    };
  }
  var f2 = a.stateNode;
  f2 !== null && typeof f2.componentDidCatch === "function" && (c.callback = function() {
    typeof d !== "function" && (Ti === null ? Ti = /* @__PURE__ */ new Set([this]) : Ti.add(this), Ni(a, b));
    var c2 = b.stack;
    this.componentDidCatch(b.value, { componentStack: c2 !== null ? c2 : "" });
  });
  return c;
}
var Ui = typeof WeakSet === "function" ? WeakSet : Set;
function Vi(a) {
  var b = a.ref;
  if (b !== null)
    if (typeof b === "function")
      try {
        b(null);
      } catch (c) {
        Wi(a, c);
      }
    else
      b.current = null;
}
function Xi(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b.flags & 256 && a !== null) {
        var c = a.memoizedProps, d = a.memoizedState;
        a = b.stateNode;
        b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : lg(b.type, c), d);
        a.__reactInternalSnapshotBeforeUpdate = b;
      }
      return;
    case 3:
      b.flags & 256 && qf(b.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y(163));
}
function Yi(a, b, c) {
  switch (c.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b = c.updateQueue;
      b = b !== null ? b.lastEffect : null;
      if (b !== null) {
        a = b = b.next;
        do {
          if ((a.tag & 3) === 3) {
            var d = a.create;
            a.destroy = d();
          }
          a = a.next;
        } while (a !== b);
      }
      b = c.updateQueue;
      b = b !== null ? b.lastEffect : null;
      if (b !== null) {
        a = b = b.next;
        do {
          var e = a;
          d = e.next;
          e = e.tag;
          (e & 4) !== 0 && (e & 1) !== 0 && (Zi(c, a), $i(c, a));
          a = d;
        } while (a !== b);
      }
      return;
    case 1:
      a = c.stateNode;
      c.flags & 4 && (b === null ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : lg(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
      b = c.updateQueue;
      b !== null && Eg(c, b, a);
      return;
    case 3:
      b = c.updateQueue;
      if (b !== null) {
        a = null;
        if (c.child !== null)
          switch (c.child.tag) {
            case 5:
              a = c.child.stateNode;
              break;
            case 1:
              a = c.child.stateNode;
          }
        Eg(c, b, a);
      }
      return;
    case 5:
      a = c.stateNode;
      b === null && c.flags & 4 && mf(c.type, c.memoizedProps) && a.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      c.memoizedState === null && (c = c.alternate, c !== null && (c = c.memoizedState, c !== null && (c = c.dehydrated, c !== null && Cc(c))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y(163));
}
function aj(a, b) {
  for (var c = a; ; ) {
    if (c.tag === 5) {
      var d = c.stateNode;
      if (b)
        d = d.style, typeof d.setProperty === "function" ? d.setProperty("display", "none", "important") : d.display = "none";
      else {
        d = c.stateNode;
        var e = c.memoizedProps.style;
        e = e !== void 0 && e !== null && e.hasOwnProperty("display") ? e.display : null;
        d.style.display = sb("display", e);
      }
    } else if (c.tag === 6)
      c.stateNode.nodeValue = b ? "" : c.memoizedProps;
    else if ((c.tag !== 23 && c.tag !== 24 || c.memoizedState === null || c === a) && c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === a)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === a)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
}
function bj(a, b) {
  if (Mf && typeof Mf.onCommitFiberUnmount === "function")
    try {
      Mf.onCommitFiberUnmount(Lf, b);
    } catch (f2) {
    }
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a = b.updateQueue;
      if (a !== null && (a = a.lastEffect, a !== null)) {
        var c = a = a.next;
        do {
          var d = c, e = d.destroy;
          d = d.tag;
          if (e !== void 0)
            if ((d & 4) !== 0)
              Zi(b, c);
            else {
              d = b;
              try {
                e();
              } catch (f2) {
                Wi(d, f2);
              }
            }
          c = c.next;
        } while (c !== a);
      }
      break;
    case 1:
      Vi(b);
      a = b.stateNode;
      if (typeof a.componentWillUnmount === "function")
        try {
          a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
        } catch (f2) {
          Wi(b, f2);
        }
      break;
    case 5:
      Vi(b);
      break;
    case 4:
      cj(a, b);
  }
}
function dj(a) {
  a.alternate = null;
  a.child = null;
  a.dependencies = null;
  a.firstEffect = null;
  a.lastEffect = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.return = null;
  a.updateQueue = null;
}
function ej(a) {
  return a.tag === 5 || a.tag === 3 || a.tag === 4;
}
function fj(a) {
  a: {
    for (var b = a.return; b !== null; ) {
      if (ej(b))
        break a;
      b = b.return;
    }
    throw Error(y(160));
  }
  var c = b;
  b = c.stateNode;
  switch (c.tag) {
    case 5:
      var d = false;
      break;
    case 3:
      b = b.containerInfo;
      d = true;
      break;
    case 4:
      b = b.containerInfo;
      d = true;
      break;
    default:
      throw Error(y(161));
  }
  c.flags & 16 && (pb(b, ""), c.flags &= -17);
  a:
    b:
      for (c = a; ; ) {
        for (; c.sibling === null; ) {
          if (c.return === null || ej(c.return)) {
            c = null;
            break a;
          }
          c = c.return;
        }
        c.sibling.return = c.return;
        for (c = c.sibling; c.tag !== 5 && c.tag !== 6 && c.tag !== 18; ) {
          if (c.flags & 2)
            continue b;
          if (c.child === null || c.tag === 4)
            continue b;
          else
            c.child.return = c, c = c.child;
        }
        if (!(c.flags & 2)) {
          c = c.stateNode;
          break a;
        }
      }
  d ? gj(a, c, b) : hj(a, c, b);
}
function gj(a, b, c) {
  var d = a.tag, e = d === 5 || d === 6;
  if (e)
    a = e ? a.stateNode : a.stateNode.instance, b ? c.nodeType === 8 ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (c.nodeType === 8 ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, c !== null && c !== void 0 || b.onclick !== null || (b.onclick = jf));
  else if (d !== 4 && (a = a.child, a !== null))
    for (gj(a, b, c), a = a.sibling; a !== null; )
      gj(a, b, c), a = a.sibling;
}
function hj(a, b, c) {
  var d = a.tag, e = d === 5 || d === 6;
  if (e)
    a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (d !== 4 && (a = a.child, a !== null))
    for (hj(a, b, c), a = a.sibling; a !== null; )
      hj(a, b, c), a = a.sibling;
}
function cj(a, b) {
  for (var c = b, d = false, e, f2; ; ) {
    if (!d) {
      d = c.return;
      a:
        for (; ; ) {
          if (d === null)
            throw Error(y(160));
          e = d.stateNode;
          switch (d.tag) {
            case 5:
              f2 = false;
              break a;
            case 3:
              e = e.containerInfo;
              f2 = true;
              break a;
            case 4:
              e = e.containerInfo;
              f2 = true;
              break a;
          }
          d = d.return;
        }
      d = true;
    }
    if (c.tag === 5 || c.tag === 6) {
      a:
        for (var g2 = a, h = c, k = h; ; )
          if (bj(g2, k), k.child !== null && k.tag !== 4)
            k.child.return = k, k = k.child;
          else {
            if (k === h)
              break a;
            for (; k.sibling === null; ) {
              if (k.return === null || k.return === h)
                break a;
              k = k.return;
            }
            k.sibling.return = k.return;
            k = k.sibling;
          }
      f2 ? (g2 = e, h = c.stateNode, g2.nodeType === 8 ? g2.parentNode.removeChild(h) : g2.removeChild(h)) : e.removeChild(c.stateNode);
    } else if (c.tag === 4) {
      if (c.child !== null) {
        e = c.stateNode.containerInfo;
        f2 = true;
        c.child.return = c;
        c = c.child;
        continue;
      }
    } else if (bj(a, c), c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === b)
        return;
      c = c.return;
      c.tag === 4 && (d = false);
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
}
function ij(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c = b.updateQueue;
      c = c !== null ? c.lastEffect : null;
      if (c !== null) {
        var d = c = c.next;
        do
          (d.tag & 3) === 3 && (a = d.destroy, d.destroy = void 0, a !== void 0 && a()), d = d.next;
        while (d !== c);
      }
      return;
    case 1:
      return;
    case 5:
      c = b.stateNode;
      if (c != null) {
        d = b.memoizedProps;
        var e = a !== null ? a.memoizedProps : d;
        a = b.type;
        var f2 = b.updateQueue;
        b.updateQueue = null;
        if (f2 !== null) {
          c[xf] = d;
          a === "input" && d.type === "radio" && d.name != null && $a(c, d);
          wb(a, e);
          b = wb(a, d);
          for (e = 0; e < f2.length; e += 2) {
            var g2 = f2[e], h = f2[e + 1];
            g2 === "style" ? tb(c, h) : g2 === "dangerouslySetInnerHTML" ? ob(c, h) : g2 === "children" ? pb(c, h) : qa(c, g2, h, b);
          }
          switch (a) {
            case "input":
              ab(c, d);
              break;
            case "textarea":
              ib(c, d);
              break;
            case "select":
              a = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, f2 = d.value, f2 != null ? fb(c, !!d.multiple, f2, false) : a !== !!d.multiple && (d.defaultValue != null ? fb(c, !!d.multiple, d.defaultValue, true) : fb(c, !!d.multiple, d.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (b.stateNode === null)
        throw Error(y(162));
      b.stateNode.nodeValue = b.memoizedProps;
      return;
    case 3:
      c = b.stateNode;
      c.hydrate && (c.hydrate = false, Cc(c.containerInfo));
      return;
    case 12:
      return;
    case 13:
      b.memoizedState !== null && (jj = O(), aj(b.child, true));
      kj(b);
      return;
    case 19:
      kj(b);
      return;
    case 17:
      return;
    case 23:
    case 24:
      aj(b, b.memoizedState !== null);
      return;
  }
  throw Error(y(163));
}
function kj(a) {
  var b = a.updateQueue;
  if (b !== null) {
    a.updateQueue = null;
    var c = a.stateNode;
    c === null && (c = a.stateNode = new Ui());
    b.forEach(function(b2) {
      var d = lj.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function mj(a, b) {
  return a !== null && (a = a.memoizedState, a === null || a.dehydrated !== null) ? (b = b.memoizedState, b !== null && b.dehydrated === null) : false;
}
var nj = Math.ceil, oj = ra.ReactCurrentDispatcher, pj = ra.ReactCurrentOwner, X = 0, U = null, Y = null, W = 0, qj = 0, rj = Bf(0), V = 0, sj = null, tj = 0, Dg = 0, Hi = 0, uj = 0, vj = null, jj = 0, Ji = Infinity;
function wj() {
  Ji = O() + 500;
}
var Z = null, Qi = false, Ri = null, Ti = null, xj = false, yj = null, zj = 90, Aj = [], Bj = [], Cj = null, Dj = 0, Ej = null, Fj = -1, Gj = 0, Hj = 0, Ij = null, Jj = false;
function Hg() {
  return (X & 48) !== 0 ? O() : Fj !== -1 ? Fj : Fj = O();
}
function Ig(a) {
  a = a.mode;
  if ((a & 2) === 0)
    return 1;
  if ((a & 4) === 0)
    return eg() === 99 ? 1 : 2;
  Gj === 0 && (Gj = tj);
  if (kg.transition !== 0) {
    Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
    a = Gj;
    var b = 4186112 & ~Hj;
    b &= -b;
    b === 0 && (a = 4186112 & ~a, b = a & -a, b === 0 && (b = 8192));
    return b;
  }
  a = eg();
  (X & 4) !== 0 && a === 98 ? a = Xc(12, Gj) : (a = Sc(a), a = Xc(a, Gj));
  return a;
}
function Jg(a, b, c) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y(185));
  a = Kj(a, b);
  if (a === null)
    return null;
  $c(a, b, c);
  a === U && (Hi |= b, V === 4 && Ii(a, W));
  var d = eg();
  b === 1 ? (X & 8) !== 0 && (X & 48) === 0 ? Lj(a) : (Mj(a, c), X === 0 && (wj(), ig())) : ((X & 4) === 0 || d !== 98 && d !== 99 || (Cj === null ? Cj = /* @__PURE__ */ new Set([a]) : Cj.add(a)), Mj(a, c));
  vj = a;
}
function Kj(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  c !== null && (c.lanes |= b);
  c = a;
  for (a = a.return; a !== null; )
    a.childLanes |= b, c = a.alternate, c !== null && (c.childLanes |= b), c = a, a = a.return;
  return c.tag === 3 ? c.stateNode : null;
}
function Mj(a, b) {
  for (var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f2 = a.expirationTimes, g2 = a.pendingLanes; 0 < g2; ) {
    var h = 31 - Vc(g2), k = 1 << h, l = f2[h];
    if (l === -1) {
      if ((k & d) === 0 || (k & e) !== 0) {
        l = b;
        Rc(k);
        var n2 = F;
        f2[h] = 10 <= n2 ? l + 250 : 6 <= n2 ? l + 5e3 : -1;
      }
    } else
      l <= b && (a.expiredLanes |= k);
    g2 &= ~k;
  }
  d = Uc(a, a === U ? W : 0);
  b = F;
  if (d === 0)
    c !== null && (c !== Zf && Pf(c), a.callbackNode = null, a.callbackPriority = 0);
  else {
    if (c !== null) {
      if (a.callbackPriority === b)
        return;
      c !== Zf && Pf(c);
    }
    b === 15 ? (c = Lj.bind(null, a), ag === null ? (ag = [c], bg = Of(Uf, jg)) : ag.push(c), c = Zf) : b === 14 ? c = hg(99, Lj.bind(null, a)) : (c = Tc(b), c = hg(c, Nj.bind(null, a)));
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Nj(a) {
  Fj = -1;
  Hj = Gj = 0;
  if ((X & 48) !== 0)
    throw Error(y(327));
  var b = a.callbackNode;
  if (Oj() && a.callbackNode !== b)
    return null;
  var c = Uc(a, a === U ? W : 0);
  if (c === 0)
    return null;
  var d = c;
  var e = X;
  X |= 16;
  var f2 = Pj();
  if (U !== a || W !== d)
    wj(), Qj(a, d);
  do
    try {
      Rj();
      break;
    } catch (h) {
      Sj(a, h);
    }
  while (1);
  qg();
  oj.current = f2;
  X = e;
  Y !== null ? d = 0 : (U = null, W = 0, d = V);
  if ((tj & Hi) !== 0)
    Qj(a, 0);
  else if (d !== 0) {
    d === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), c = Wc(a), c !== 0 && (d = Tj(a, c)));
    if (d === 1)
      throw b = sj, Qj(a, 0), Ii(a, c), Mj(a, O()), b;
    a.finishedWork = a.current.alternate;
    a.finishedLanes = c;
    switch (d) {
      case 0:
      case 1:
        throw Error(y(345));
      case 2:
        Uj(a);
        break;
      case 3:
        Ii(a, c);
        if ((c & 62914560) === c && (d = jj + 500 - O(), 10 < d)) {
          if (Uc(a, 0) !== 0)
            break;
          e = a.suspendedLanes;
          if ((e & c) !== c) {
            Hg();
            a.pingedLanes |= a.suspendedLanes & e;
            break;
          }
          a.timeoutHandle = of(Uj.bind(null, a), d);
          break;
        }
        Uj(a);
        break;
      case 4:
        Ii(a, c);
        if ((c & 4186112) === c)
          break;
        d = a.eventTimes;
        for (e = -1; 0 < c; ) {
          var g2 = 31 - Vc(c);
          f2 = 1 << g2;
          g2 = d[g2];
          g2 > e && (e = g2);
          c &= ~f2;
        }
        c = e;
        c = O() - c;
        c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * nj(c / 1960)) - c;
        if (10 < c) {
          a.timeoutHandle = of(Uj.bind(null, a), c);
          break;
        }
        Uj(a);
        break;
      case 5:
        Uj(a);
        break;
      default:
        throw Error(y(329));
    }
  }
  Mj(a, O());
  return a.callbackNode === b ? Nj.bind(null, a) : null;
}
function Ii(a, b) {
  b &= ~uj;
  b &= ~Hi;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - Vc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Lj(a) {
  if ((X & 48) !== 0)
    throw Error(y(327));
  Oj();
  if (a === U && (a.expiredLanes & W) !== 0) {
    var b = W;
    var c = Tj(a, b);
    (tj & Hi) !== 0 && (b = Uc(a, b), c = Tj(a, b));
  } else
    b = Uc(a, 0), c = Tj(a, b);
  a.tag !== 0 && c === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), b = Wc(a), b !== 0 && (c = Tj(a, b)));
  if (c === 1)
    throw c = sj, Qj(a, 0), Ii(a, b), Mj(a, O()), c;
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Uj(a);
  Mj(a, O());
  return null;
}
function Vj() {
  if (Cj !== null) {
    var a = Cj;
    Cj = null;
    a.forEach(function(a2) {
      a2.expiredLanes |= 24 & a2.pendingLanes;
      Mj(a2, O());
    });
  }
  ig();
}
function Wj(a, b) {
  var c = X;
  X |= 1;
  try {
    return a(b);
  } finally {
    X = c, X === 0 && (wj(), ig());
  }
}
function Xj(a, b) {
  var c = X;
  X &= -2;
  X |= 8;
  try {
    return a(b);
  } finally {
    X = c, X === 0 && (wj(), ig());
  }
}
function ni(a, b) {
  I(rj, qj);
  qj |= b;
  tj |= b;
}
function Ki() {
  qj = rj.current;
  H(rj);
}
function Qj(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  c !== -1 && (a.timeoutHandle = -1, pf(c));
  if (Y !== null)
    for (c = Y.return; c !== null; ) {
      var d = c;
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          d !== null && d !== void 0 && Gf();
          break;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          break;
        case 5:
          hh(d);
          break;
        case 4:
          fh();
          break;
        case 13:
          H(P);
          break;
        case 19:
          H(P);
          break;
        case 10:
          rg(d);
          break;
        case 23:
        case 24:
          Ki();
      }
      c = c.return;
    }
  U = a;
  Y = Tg(a.current, null);
  W = qj = tj = b;
  V = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a, b) {
  do {
    var c = Y;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d = R.memoizedState; d !== null; ) {
          var e = d.queue;
          e !== null && (e.pending = null);
          d = d.next;
        }
        yh = false;
      }
      xh = 0;
      T = S = R = null;
      zh = false;
      pj.current = null;
      if (c === null || c.return === null) {
        V = 1;
        sj = b;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g2 = c.return, h = c, k = b;
        b = W;
        h.flags |= 2048;
        h.firstEffect = h.lastEffect = null;
        if (k !== null && typeof k === "object" && typeof k.then === "function") {
          var l = k;
          if ((h.mode & 2) === 0) {
            var n2 = h.alternate;
            n2 ? (h.updateQueue = n2.updateQueue, h.memoizedState = n2.memoizedState, h.lanes = n2.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var A = (P.current & 1) !== 0, p2 = g2;
          do {
            var C;
            if (C = p2.tag === 13) {
              var x = p2.memoizedState;
              if (x !== null)
                C = x.dehydrated !== null ? true : false;
              else {
                var w = p2.memoizedProps;
                C = w.fallback === void 0 ? false : w.unstable_avoidThisFallback !== true ? true : A ? false : true;
              }
            }
            if (C) {
              var z = p2.updateQueue;
              if (z === null) {
                var u = /* @__PURE__ */ new Set();
                u.add(l);
                p2.updateQueue = u;
              } else
                z.add(l);
              if ((p2.mode & 2) === 0) {
                p2.flags |= 64;
                h.flags |= 16384;
                h.flags &= -2981;
                if (h.tag === 1)
                  if (h.alternate === null)
                    h.tag = 17;
                  else {
                    var t = zg(-1, 1);
                    t.tag = 2;
                    Ag(h, t);
                  }
                h.lanes |= 1;
                break a;
              }
              k = void 0;
              h = b;
              var q2 = f2.pingCache;
              q2 === null ? (q2 = f2.pingCache = new Oi(), k = /* @__PURE__ */ new Set(), q2.set(l, k)) : (k = q2.get(l), k === void 0 && (k = /* @__PURE__ */ new Set(), q2.set(l, k)));
              if (!k.has(h)) {
                k.add(h);
                var v = Yj.bind(null, f2, l, h);
                l.then(v, v);
              }
              p2.flags |= 4096;
              p2.lanes = b;
              break a;
            }
            p2 = p2.return;
          } while (p2 !== null);
          k = Error((Ra(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
        }
        V !== 5 && (V = 2);
        k = Mi(k, h);
        p2 = g2;
        do {
          switch (p2.tag) {
            case 3:
              f2 = k;
              p2.flags |= 4096;
              b &= -b;
              p2.lanes |= b;
              var J = Pi(p2, f2, b);
              Bg(p2, J);
              break a;
            case 1:
              f2 = k;
              var K = p2.type, Q = p2.stateNode;
              if ((p2.flags & 64) === 0 && (typeof K.getDerivedStateFromError === "function" || Q !== null && typeof Q.componentDidCatch === "function" && (Ti === null || !Ti.has(Q)))) {
                p2.flags |= 4096;
                b &= -b;
                p2.lanes |= b;
                var L = Si(p2, f2, b);
                Bg(p2, L);
                break a;
              }
          }
          p2 = p2.return;
        } while (p2 !== null);
      }
      Zj(c);
    } catch (va) {
      b = va;
      Y === c && c !== null && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Pj() {
  var a = oj.current;
  oj.current = Gh;
  return a === null ? Gh : a;
}
function Tj(a, b) {
  var c = X;
  X |= 16;
  var d = Pj();
  U === a && W === b || Qj(a, b);
  do
    try {
      ak();
      break;
    } catch (e) {
      Sj(a, e);
    }
  while (1);
  qg();
  X = c;
  oj.current = d;
  if (Y !== null)
    throw Error(y(261));
  U = null;
  W = 0;
  return V;
}
function ak() {
  for (; Y !== null; )
    bk(Y);
}
function Rj() {
  for (; Y !== null && !Qf(); )
    bk(Y);
}
function bk(a) {
  var b = ck(a.alternate, a, qj);
  a.memoizedProps = a.pendingProps;
  b === null ? Zj(a) : Y = b;
  pj.current = null;
}
function Zj(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if ((b.flags & 2048) === 0) {
      c = Gi(c, b, qj);
      if (c !== null) {
        Y = c;
        return;
      }
      c = b;
      if (c.tag !== 24 && c.tag !== 23 || c.memoizedState === null || (qj & 1073741824) !== 0 || (c.mode & 4) === 0) {
        for (var d = 0, e = c.child; e !== null; )
          d |= e.lanes | e.childLanes, e = e.sibling;
        c.childLanes = d;
      }
      a !== null && (a.flags & 2048) === 0 && (a.firstEffect === null && (a.firstEffect = b.firstEffect), b.lastEffect !== null && (a.lastEffect !== null && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (a.lastEffect !== null ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
    } else {
      c = Li(b);
      if (c !== null) {
        c.flags &= 2047;
        Y = c;
        return;
      }
      a !== null && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
    }
    b = b.sibling;
    if (b !== null) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (b !== null);
  V === 0 && (V = 5);
}
function Uj(a) {
  var b = eg();
  gg(99, dk.bind(null, a, b));
  return null;
}
function dk(a, b) {
  do
    Oj();
  while (yj !== null);
  if ((X & 48) !== 0)
    throw Error(y(327));
  var c = a.finishedWork;
  if (c === null)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current)
    throw Error(y(177));
  a.callbackNode = null;
  var d = c.lanes | c.childLanes, e = d, f2 = a.pendingLanes & ~e;
  a.pendingLanes = e;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= e;
  a.mutableReadLanes &= e;
  a.entangledLanes &= e;
  e = a.entanglements;
  for (var g2 = a.eventTimes, h = a.expirationTimes; 0 < f2; ) {
    var k = 31 - Vc(f2), l = 1 << k;
    e[k] = 0;
    g2[k] = -1;
    h[k] = -1;
    f2 &= ~l;
  }
  Cj !== null && (d & 24) === 0 && Cj.has(a) && Cj.delete(a);
  a === U && (Y = U = null, W = 0);
  1 < c.flags ? c.lastEffect !== null ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;
  if (d !== null) {
    e = X;
    X |= 32;
    pj.current = null;
    kf = fd;
    g2 = Ne();
    if (Oe(g2)) {
      if ("selectionStart" in g2)
        h = { start: g2.selectionStart, end: g2.selectionEnd };
      else
        a:
          if (h = (h = g2.ownerDocument) && h.defaultView || window, (l = h.getSelection && h.getSelection()) && l.rangeCount !== 0) {
            h = l.anchorNode;
            f2 = l.anchorOffset;
            k = l.focusNode;
            l = l.focusOffset;
            try {
              h.nodeType, k.nodeType;
            } catch (va) {
              h = null;
              break a;
            }
            var n2 = 0, A = -1, p2 = -1, C = 0, x = 0, w = g2, z = null;
            b:
              for (; ; ) {
                for (var u; ; ) {
                  w !== h || f2 !== 0 && w.nodeType !== 3 || (A = n2 + f2);
                  w !== k || l !== 0 && w.nodeType !== 3 || (p2 = n2 + l);
                  w.nodeType === 3 && (n2 += w.nodeValue.length);
                  if ((u = w.firstChild) === null)
                    break;
                  z = w;
                  w = u;
                }
                for (; ; ) {
                  if (w === g2)
                    break b;
                  z === h && ++C === f2 && (A = n2);
                  z === k && ++x === l && (p2 = n2);
                  if ((u = w.nextSibling) !== null)
                    break;
                  w = z;
                  z = w.parentNode;
                }
                w = u;
              }
            h = A === -1 || p2 === -1 ? null : { start: A, end: p2 };
          } else
            h = null;
      h = h || { start: 0, end: 0 };
    } else
      h = null;
    lf = { focusedElem: g2, selectionRange: h };
    fd = false;
    Ij = null;
    Jj = false;
    Z = d;
    do
      try {
        ek();
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Ij = null;
    Z = d;
    do
      try {
        for (g2 = a; Z !== null; ) {
          var t = Z.flags;
          t & 16 && pb(Z.stateNode, "");
          if (t & 128) {
            var q2 = Z.alternate;
            if (q2 !== null) {
              var v = q2.ref;
              v !== null && (typeof v === "function" ? v(null) : v.current = null);
            }
          }
          switch (t & 1038) {
            case 2:
              fj(Z);
              Z.flags &= -3;
              break;
            case 6:
              fj(Z);
              Z.flags &= -3;
              ij(Z.alternate, Z);
              break;
            case 1024:
              Z.flags &= -1025;
              break;
            case 1028:
              Z.flags &= -1025;
              ij(Z.alternate, Z);
              break;
            case 4:
              ij(Z.alternate, Z);
              break;
            case 8:
              h = Z;
              cj(g2, h);
              var J = h.alternate;
              dj(h);
              J !== null && dj(J);
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    v = lf;
    q2 = Ne();
    t = v.focusedElem;
    g2 = v.selectionRange;
    if (q2 !== t && t && t.ownerDocument && Me(t.ownerDocument.documentElement, t)) {
      g2 !== null && Oe(t) && (q2 = g2.start, v = g2.end, v === void 0 && (v = q2), "selectionStart" in t ? (t.selectionStart = q2, t.selectionEnd = Math.min(v, t.value.length)) : (v = (q2 = t.ownerDocument || document) && q2.defaultView || window, v.getSelection && (v = v.getSelection(), h = t.textContent.length, J = Math.min(g2.start, h), g2 = g2.end === void 0 ? J : Math.min(g2.end, h), !v.extend && J > g2 && (h = g2, g2 = J, J = h), h = Le(t, J), f2 = Le(t, g2), h && f2 && (v.rangeCount !== 1 || v.anchorNode !== h.node || v.anchorOffset !== h.offset || v.focusNode !== f2.node || v.focusOffset !== f2.offset) && (q2 = q2.createRange(), q2.setStart(h.node, h.offset), v.removeAllRanges(), J > g2 ? (v.addRange(q2), v.extend(f2.node, f2.offset)) : (q2.setEnd(f2.node, f2.offset), v.addRange(q2))))));
      q2 = [];
      for (v = t; v = v.parentNode; )
        v.nodeType === 1 && q2.push({ element: v, left: v.scrollLeft, top: v.scrollTop });
      typeof t.focus === "function" && t.focus();
      for (t = 0; t < q2.length; t++)
        v = q2[t], v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
    }
    fd = !!kf;
    lf = kf = null;
    a.current = c;
    Z = d;
    do
      try {
        for (t = a; Z !== null; ) {
          var K = Z.flags;
          K & 36 && Yi(t, Z.alternate, Z);
          if (K & 128) {
            q2 = void 0;
            var Q = Z.ref;
            if (Q !== null) {
              var L = Z.stateNode;
              switch (Z.tag) {
                case 5:
                  q2 = L;
                  break;
                default:
                  q2 = L;
              }
              typeof Q === "function" ? Q(q2) : Q.current = q2;
            }
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Z = null;
    $f();
    X = e;
  } else
    a.current = c;
  if (xj)
    xj = false, yj = a, zj = b;
  else
    for (Z = d; Z !== null; )
      b = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K = Z, K.sibling = null, K.stateNode = null), Z = b;
  d = a.pendingLanes;
  d === 0 && (Ti = null);
  d === 1 ? a === Ej ? Dj++ : (Dj = 0, Ej = a) : Dj = 0;
  c = c.stateNode;
  if (Mf && typeof Mf.onCommitFiberRoot === "function")
    try {
      Mf.onCommitFiberRoot(Lf, c, void 0, (c.current.flags & 64) === 64);
    } catch (va) {
    }
  Mj(a, O());
  if (Qi)
    throw Qi = false, a = Ri, Ri = null, a;
  if ((X & 8) !== 0)
    return null;
  ig();
  return null;
}
function ek() {
  for (; Z !== null; ) {
    var a = Z.alternate;
    Jj || Ij === null || ((Z.flags & 8) !== 0 ? dc(Z, Ij) && (Jj = true) : Z.tag === 13 && mj(a, Z) && dc(Z, Ij) && (Jj = true));
    var b = Z.flags;
    (b & 256) !== 0 && Xi(a, Z);
    (b & 512) === 0 || xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
    Z = Z.nextEffect;
  }
}
function Oj() {
  if (zj !== 90) {
    var a = 97 < zj ? 97 : zj;
    zj = 90;
    return gg(a, fk);
  }
  return false;
}
function $i(a, b) {
  Aj.push(b, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a, b) {
  Bj.push(b, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function fk() {
  if (yj === null)
    return false;
  var a = yj;
  yj = null;
  if ((X & 48) !== 0)
    throw Error(y(331));
  var b = X;
  X |= 32;
  var c = Bj;
  Bj = [];
  for (var d = 0; d < c.length; d += 2) {
    var e = c[d], f2 = c[d + 1], g2 = e.destroy;
    e.destroy = void 0;
    if (typeof g2 === "function")
      try {
        g2();
      } catch (k) {
        if (f2 === null)
          throw Error(y(330));
        Wi(f2, k);
      }
  }
  c = Aj;
  Aj = [];
  for (d = 0; d < c.length; d += 2) {
    e = c[d];
    f2 = c[d + 1];
    try {
      var h = e.create;
      e.destroy = h();
    } catch (k) {
      if (f2 === null)
        throw Error(y(330));
      Wi(f2, k);
    }
  }
  for (h = a.current.firstEffect; h !== null; )
    a = h.nextEffect, h.nextEffect = null, h.flags & 8 && (h.sibling = null, h.stateNode = null), h = a;
  X = b;
  ig();
  return true;
}
function gk(a, b, c) {
  b = Mi(c, b);
  b = Pi(a, b, 1);
  Ag(a, b);
  b = Hg();
  a = Kj(a, 1);
  a !== null && ($c(a, 1, b), Mj(a, b));
}
function Wi(a, b) {
  if (a.tag === 3)
    gk(a, a, b);
  else
    for (var c = a.return; c !== null; ) {
      if (c.tag === 3) {
        gk(c, a, b);
        break;
      } else if (c.tag === 1) {
        var d = c.stateNode;
        if (typeof c.type.getDerivedStateFromError === "function" || typeof d.componentDidCatch === "function" && (Ti === null || !Ti.has(d))) {
          a = Mi(b, a);
          var e = Si(c, a, 1);
          Ag(c, e);
          e = Hg();
          c = Kj(c, 1);
          if (c !== null)
            $c(c, 1, e), Mj(c, e);
          else if (typeof d.componentDidCatch === "function" && (Ti === null || !Ti.has(d)))
            try {
              d.componentDidCatch(b, a);
            } catch (f2) {
            }
          break;
        }
      }
      c = c.return;
    }
}
function Yj(a, b, c) {
  var d = a.pingCache;
  d !== null && d.delete(b);
  b = Hg();
  a.pingedLanes |= a.suspendedLanes & c;
  U === a && (W & c) === c && (V === 4 || V === 3 && (W & 62914560) === W && 500 > O() - jj ? Qj(a, 0) : uj |= c);
  Mj(a, b);
}
function lj(a, b) {
  var c = a.stateNode;
  c !== null && c.delete(b);
  b = 0;
  b === 0 && (b = a.mode, (b & 2) === 0 ? b = 1 : (b & 4) === 0 ? b = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b = Yc(62914560 & ~Gj), b === 0 && (b = 4194304)));
  c = Hg();
  a = Kj(a, b);
  a !== null && ($c(a, b, c), Mj(a, c));
}
var ck;
ck = function(a, b, c) {
  var d = b.lanes;
  if (a !== null)
    if (a.memoizedProps !== b.pendingProps || N.current)
      ug = true;
    else if ((c & d) !== 0)
      ug = (a.flags & 16384) !== 0 ? true : false;
    else {
      ug = false;
      switch (b.tag) {
        case 3:
          ri(b);
          sh();
          break;
        case 5:
          gh(b);
          break;
        case 1:
          Ff(b.type) && Jf(b);
          break;
        case 4:
          eh(b, b.stateNode.containerInfo);
          break;
        case 10:
          d = b.memoizedProps.value;
          var e = b.type._context;
          I(mg, e._currentValue);
          e._currentValue = d;
          break;
        case 13:
          if (b.memoizedState !== null) {
            if ((c & b.child.childLanes) !== 0)
              return ti(a, b, c);
            I(P, P.current & 1);
            b = hi(a, b, c);
            return b !== null ? b.sibling : null;
          }
          I(P, P.current & 1);
          break;
        case 19:
          d = (c & b.childLanes) !== 0;
          if ((a.flags & 64) !== 0) {
            if (d)
              return Ai(a, b, c);
            b.flags |= 64;
          }
          e = b.memoizedState;
          e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null);
          I(P, P.current);
          if (d)
            break;
          else
            return null;
        case 23:
        case 24:
          return b.lanes = 0, mi(a, b, c);
      }
      return hi(a, b, c);
    }
  else
    ug = false;
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      d = b.type;
      a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
      a = b.pendingProps;
      e = Ef(b, M.current);
      tg(b, c);
      e = Ch(null, b, d, a, e, c);
      b.flags |= 1;
      if (typeof e === "object" && e !== null && typeof e.render === "function" && e.$$typeof === void 0) {
        b.tag = 1;
        b.memoizedState = null;
        b.updateQueue = null;
        if (Ff(d)) {
          var f2 = true;
          Jf(b);
        } else
          f2 = false;
        b.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null;
        xg(b);
        var g2 = d.getDerivedStateFromProps;
        typeof g2 === "function" && Gg(b, d, g2, a);
        e.updater = Kg;
        b.stateNode = e;
        e._reactInternals = b;
        Og(b, d, a, c);
        b = qi(null, b, d, true, f2, c);
      } else
        b.tag = 0, fi(null, b, e, c), b = b.child;
      return b;
    case 16:
      e = b.elementType;
      a: {
        a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
        a = b.pendingProps;
        f2 = e._init;
        e = f2(e._payload);
        b.type = e;
        f2 = b.tag = hk(e);
        a = lg(e, a);
        switch (f2) {
          case 0:
            b = li(null, b, e, a, c);
            break a;
          case 1:
            b = pi(null, b, e, a, c);
            break a;
          case 11:
            b = gi(null, b, e, a, c);
            break a;
          case 14:
            b = ii(null, b, e, lg(e.type, a), d, c);
            break a;
        }
        throw Error(y(306, e, ""));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), li(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), pi(a, b, d, e, c);
    case 3:
      ri(b);
      d = b.updateQueue;
      if (a === null || d === null)
        throw Error(y(282));
      d = b.pendingProps;
      e = b.memoizedState;
      e = e !== null ? e.element : null;
      yg(a, b);
      Cg(b, d, null, c);
      d = b.memoizedState.element;
      if (d === e)
        sh(), b = hi(a, b, c);
      else {
        e = b.stateNode;
        if (f2 = e.hydrate)
          kh = rf(b.stateNode.containerInfo.firstChild), jh = b, f2 = lh = true;
        if (f2) {
          a = e.mutableSourceEagerHydrationData;
          if (a != null)
            for (e = 0; e < a.length; e += 2)
              f2 = a[e], f2._workInProgressVersionPrimary = a[e + 1], th.push(f2);
          c = Zg(b, null, d, c);
          for (b.child = c; c; )
            c.flags = c.flags & -3 | 1024, c = c.sibling;
        } else
          fi(a, b, d, c), sh();
        b = b.child;
      }
      return b;
    case 5:
      return gh(b), a === null && ph(b), d = b.type, e = b.pendingProps, f2 = a !== null ? a.memoizedProps : null, g2 = e.children, nf(d, e) ? g2 = null : f2 !== null && nf(d, f2) && (b.flags |= 16), oi(a, b), fi(a, b, g2, c), b.child;
    case 6:
      return a === null && ph(b), null;
    case 13:
      return ti(a, b, c);
    case 4:
      return eh(b, b.stateNode.containerInfo), d = b.pendingProps, a === null ? b.child = Yg(b, null, d, c) : fi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), gi(a, b, d, e, c);
    case 7:
      return fi(a, b, b.pendingProps, c), b.child;
    case 8:
      return fi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return fi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        g2 = b.memoizedProps;
        f2 = e.value;
        var h = b.type._context;
        I(mg, h._currentValue);
        h._currentValue = f2;
        if (g2 !== null)
          if (h = g2.value, f2 = He(h, f2) ? 0 : (typeof d._calculateChangedBits === "function" ? d._calculateChangedBits(h, f2) : 1073741823) | 0, f2 === 0) {
            if (g2.children === e.children && !N.current) {
              b = hi(a, b, c);
              break a;
            }
          } else
            for (h = b.child, h !== null && (h.return = b); h !== null; ) {
              var k = h.dependencies;
              if (k !== null) {
                g2 = h.child;
                for (var l = k.firstContext; l !== null; ) {
                  if (l.context === d && (l.observedBits & f2) !== 0) {
                    h.tag === 1 && (l = zg(-1, c & -c), l.tag = 2, Ag(h, l));
                    h.lanes |= c;
                    l = h.alternate;
                    l !== null && (l.lanes |= c);
                    sg(h.return, c);
                    k.lanes |= c;
                    break;
                  }
                  l = l.next;
                }
              } else
                g2 = h.tag === 10 ? h.type === b.type ? null : h.child : h.child;
              if (g2 !== null)
                g2.return = h;
              else
                for (g2 = h; g2 !== null; ) {
                  if (g2 === b) {
                    g2 = null;
                    break;
                  }
                  h = g2.sibling;
                  if (h !== null) {
                    h.return = g2.return;
                    g2 = h;
                    break;
                  }
                  g2 = g2.return;
                }
              h = g2;
            }
        fi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, f2 = b.pendingProps, d = f2.children, tg(b, c), e = vg(e, f2.unstable_observedBits), d = d(e), b.flags |= 1, fi(a, b, d, c), b.child;
    case 14:
      return e = b.type, f2 = lg(e, b.pendingProps), f2 = lg(e.type, f2), ii(a, b, e, f2, d, c);
    case 15:
      return ki(a, b, b.type, b.pendingProps, d, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, Ff(d) ? (a = true, Jf(b)) : a = false, tg(b, c), Mg(b, d, e), Og(b, d, e, c), qi(null, b, d, true, a, c);
    case 19:
      return Ai(a, b, c);
    case 23:
      return mi(a, b, c);
    case 24:
      return mi(a, b, c);
  }
  throw Error(y(156, b.tag));
};
function ik(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a, b, c, d) {
  return new ik(a, b, c, d);
}
function ji(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function hk(a) {
  if (typeof a === "function")
    return ji(a) ? 1 : 0;
  if (a !== void 0 && a !== null) {
    a = a.$$typeof;
    if (a === Aa)
      return 11;
    if (a === Da)
      return 14;
  }
  return 2;
}
function Tg(a, b) {
  var c = a.alternate;
  c === null ? (c = nh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = b === null ? null : { lanes: b.lanes, firstContext: b.firstContext };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function Vg(a, b, c, d, e, f2) {
  var g2 = 2;
  d = a;
  if (typeof a === "function")
    ji(a) && (g2 = 1);
  else if (typeof a === "string")
    g2 = 5;
  else
    a:
      switch (a) {
        case ua:
          return Xg(c.children, e, f2, b);
        case Ha:
          g2 = 8;
          e |= 16;
          break;
        case wa:
          g2 = 8;
          e |= 1;
          break;
        case xa:
          return a = nh(12, c, b, e | 8), a.elementType = xa, a.type = xa, a.lanes = f2, a;
        case Ba:
          return a = nh(13, c, b, e), a.type = Ba, a.elementType = Ba, a.lanes = f2, a;
        case Ca:
          return a = nh(19, c, b, e), a.elementType = Ca, a.lanes = f2, a;
        case Ia:
          return vi(c, e, f2, b);
        case Ja:
          return a = nh(24, c, b, e), a.elementType = Ja, a.lanes = f2, a;
        default:
          if (typeof a === "object" && a !== null)
            switch (a.$$typeof) {
              case ya:
                g2 = 10;
                break a;
              case za:
                g2 = 9;
                break a;
              case Aa:
                g2 = 11;
                break a;
              case Da:
                g2 = 14;
                break a;
              case Ea:
                g2 = 16;
                d = null;
                break a;
              case Fa:
                g2 = 22;
                break a;
            }
          throw Error(y(130, a == null ? a : typeof a, ""));
      }
  b = nh(g2, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f2;
  return b;
}
function Xg(a, b, c, d) {
  a = nh(7, a, d, b);
  a.lanes = c;
  return a;
}
function vi(a, b, c, d) {
  a = nh(23, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  return a;
}
function Ug(a, b, c) {
  a = nh(6, a, null, b);
  a.lanes = c;
  return a;
}
function Wg(a, b, c) {
  b = nh(4, a.children !== null ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b;
}
function jk(a, b, c) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = Zc(0);
  this.expirationTimes = Zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Zc(0);
  this.mutableSourceEagerHydrationData = null;
}
function kk(a, b, c) {
  var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ta, key: d == null ? null : "" + d, children: a, containerInfo: b, implementation: c };
}
function lk(a, b, c, d) {
  var e = b.current, f2 = Hg(), g2 = Ig(e);
  a:
    if (c) {
      c = c._reactInternals;
      b: {
        if (Zb(c) !== c || c.tag !== 1)
          throw Error(y(170));
        var h = c;
        do {
          switch (h.tag) {
            case 3:
              h = h.stateNode.context;
              break b;
            case 1:
              if (Ff(h.type)) {
                h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h = h.return;
        } while (h !== null);
        throw Error(y(171));
      }
      if (c.tag === 1) {
        var k = c.type;
        if (Ff(k)) {
          c = If(c, k, h);
          break a;
        }
      }
      c = h;
    } else
      c = Cf;
  b.context === null ? b.context = c : b.pendingContext = c;
  b = zg(f2, g2);
  b.payload = { element: a };
  d = d === void 0 ? null : d;
  d !== null && (b.callback = d);
  Ag(e, b);
  Jg(e, g2, f2);
  return g2;
}
function mk(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function nk(a, b) {
  a = a.memoizedState;
  if (a !== null && a.dehydrated !== null) {
    var c = a.retryLane;
    a.retryLane = c !== 0 && c < b ? c : b;
  }
}
function ok(a, b) {
  nk(a, b);
  (a = a.alternate) && nk(a, b);
}
function pk() {
  return null;
}
function qk(a, b, c) {
  var d = c != null && c.hydrationOptions != null && c.hydrationOptions.mutableSources || null;
  c = new jk(a, b, c != null && c.hydrate === true);
  b = nh(3, null, null, b === 2 ? 7 : b === 1 ? 3 : 0);
  c.current = b;
  b.stateNode = c;
  xg(b);
  a[ff] = c.current;
  cf(a.nodeType === 8 ? a.parentNode : a);
  if (d)
    for (a = 0; a < d.length; a++) {
      b = d[a];
      var e = b._getVersion;
      e = e(b._source);
      c.mutableSourceEagerHydrationData == null ? c.mutableSourceEagerHydrationData = [b, e] : c.mutableSourceEagerHydrationData.push(b, e);
    }
  this._internalRoot = c;
}
qk.prototype.render = function(a) {
  lk(a, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a = this._internalRoot, b = a.containerInfo;
  lk(null, a, null, function() {
    b[ff] = null;
  });
};
function rk(a) {
  return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11 && (a.nodeType !== 8 || a.nodeValue !== " react-mount-point-unstable "));
}
function sk(a, b) {
  b || (b = a ? a.nodeType === 9 ? a.documentElement : a.firstChild : null, b = !(!b || b.nodeType !== 1 || !b.hasAttribute("data-reactroot")));
  if (!b)
    for (var c; c = a.lastChild; )
      a.removeChild(c);
  return new qk(a, 0, b ? { hydrate: true } : void 0);
}
function tk(a, b, c, d, e) {
  var f2 = c._reactRootContainer;
  if (f2) {
    var g2 = f2._internalRoot;
    if (typeof e === "function") {
      var h = e;
      e = function() {
        var a2 = mk(g2);
        h.call(a2);
      };
    }
    lk(b, g2, a, e);
  } else {
    f2 = c._reactRootContainer = sk(c, d);
    g2 = f2._internalRoot;
    if (typeof e === "function") {
      var k = e;
      e = function() {
        var a2 = mk(g2);
        k.call(a2);
      };
    }
    Xj(function() {
      lk(b, g2, a, e);
    });
  }
  return mk(g2);
}
ec = function(a) {
  if (a.tag === 13) {
    var b = Hg();
    Jg(a, 4, b);
    ok(a, 4);
  }
};
fc = function(a) {
  if (a.tag === 13) {
    var b = Hg();
    Jg(a, 67108864, b);
    ok(a, 67108864);
  }
};
gc = function(a) {
  if (a.tag === 13) {
    var b = Hg(), c = Ig(a);
    Jg(a, c, b);
    ok(a, c);
  }
};
hc = function(a, b) {
  return b();
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      ab(a, c);
      b = c.name;
      if (c.type === "radio" && b != null) {
        for (c = a; c.parentNode; )
          c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e)
              throw Error(y(90));
            Wa(d);
            ab(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, b != null && fb(a, !!c.multiple, b, false);
  }
};
Gb = Wj;
Hb = function(a, b, c, d, e) {
  var f2 = X;
  X |= 4;
  try {
    return gg(98, a.bind(null, b, c, d, e));
  } finally {
    X = f2, X === 0 && (wj(), ig());
  }
};
Ib = function() {
  (X & 49) === 0 && (Vj(), Oj());
};
Jb = function(a, b) {
  var c = X;
  X |= 2;
  try {
    return a(b);
  } finally {
    X = c, X === 0 && (wj(), ig());
  }
};
function uk(a, b) {
  var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rk(b))
    throw Error(y(200));
  return kk(a, b, null, c);
}
var vk = { Events: [Cb, ue, Db, Eb, Fb, Oj, { current: false }] }, wk = { findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" };
var xk = { bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = cc(a);
  return a === null ? null : a.stateNode;
}, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  var yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
reactDom_production_min.createPortal = uk;
reactDom_production_min.findDOMNode = function(a) {
  if (a == null)
    return null;
  if (a.nodeType === 1)
    return a;
  var b = a._reactInternals;
  if (b === void 0) {
    if (typeof a.render === "function")
      throw Error(y(188));
    throw Error(y(268, Object.keys(a)));
  }
  a = cc(b);
  a = a === null ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a, b) {
  var c = X;
  if ((c & 48) !== 0)
    return a(b);
  X |= 1;
  try {
    if (a)
      return gg(99, a.bind(null, b));
  } finally {
    X = c, ig();
  }
};
reactDom_production_min.hydrate = function(a, b, c) {
  if (!rk(b))
    throw Error(y(200));
  return tk(null, a, b, true, c);
};
reactDom_production_min.render = function(a, b, c) {
  if (!rk(b))
    throw Error(y(200));
  return tk(null, a, b, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!rk(a))
    throw Error(y(40));
  return a._reactRootContainer ? (Xj(function() {
    tk(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[ff] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Wj;
reactDom_production_min.unstable_createPortal = function(a, b) {
  return uk(a, b, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!rk(c))
    throw Error(y(200));
  if (a == null || a._reactInternals === void 0)
    throw Error(y(38));
  return tk(a, b, c, false, d);
};
reactDom_production_min.version = "17.0.2";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var ReactDOM = reactDom.exports;
const addEvent = function() {
  return function(element, event, handler, options) {
    element && element.addEventListener(event, handler, options || false);
  };
}();
const removeEvent = function() {
  return function(element, event, handler, options) {
    element && element.removeEventListener(event, handler, options || false);
  };
}();
const isScrollElement = (element) => {
  return element.scrollHeight > element.offsetHeight || element.scrollWidth > element.offsetWidth;
};
const getScrollElements = (container, top = document.documentElement) => {
  const scrollElements = [];
  let element = container;
  while (element && element !== top) {
    if (isScrollElement(element)) {
      scrollElements.push(element);
    }
    element = element.parentElement;
  }
  return scrollElements;
};
class Trigger extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.triggerRef = null;
    this.popupRef = null;
    this.childrenComponent = null;
    this.scrollElements = null;
    this.onContainersScroll = () => {
      var _a;
      if (this.scrollElements) {
        return;
      }
      const childrenDom = ReactDOM.findDOMNode(this);
      this.scrollElements = getScrollElements(childrenDom, (_a = this.popupRef) == null ? void 0 : _a.parentNode);
      this.scrollElements.forEach((item) => {
        addEvent(item, "scroll", this.updatePopupPosition);
      });
    };
    this.onClickOutside = (event) => {
      if (this.props.trigger !== "click" && this.props.trigger !== "contextmenu" || this.state.popupVisible === false) {
        return;
      }
      const eleTrigger = ReactDOM.findDOMNode(this.triggerRef);
      const elePopup = ReactDOM.findDOMNode(this.popupRef);
      const isInsideClick = [eleTrigger, elePopup].some((ref) => ref == null ? void 0 : ref.contains(event.target)) || false;
      if (isInsideClick !== true) {
        this.setPopupVisible(false);
      }
    };
    this.onMouseMovingOutside = (event) => {
      if (this.props.trigger !== "hover" || this.state.popupVisible === false) {
        return;
      }
      const eleTrigger = ReactDOM.findDOMNode(this.triggerRef);
      const elePopup = ReactDOM.findDOMNode(this.popupRef);
      const isInsideClick = [eleTrigger, elePopup].some((ref) => ref == null ? void 0 : ref.contains(event.target)) || false;
      if (isInsideClick !== true) {
        this.setPopupVisible(false);
      }
    };
    this.getTriggerOffset = () => {
      var _a;
      const triggerOffset = (_a = this.triggerRef) == null ? void 0 : _a.getBoundingClientRect();
      const popupStyle = {
        left: triggerOffset.left,
        top: triggerOffset.top + triggerOffset.height
      };
      return popupStyle;
    };
    this.setPopupVisible = (val) => {
      if (this.props.disabled === true) {
        return;
      }
      const {
        onVisibleChange = (val2) => void 0
      } = this.props;
      this.setState({
        popupVisible: val
      }, () => {
        if (typeof onVisibleChange === "function") {
          onVisibleChange(val);
          this.updatePopupPosition();
        }
      });
    };
    this.updatePopupPosition = () => {
      var _a, _b;
      if (this.state.popupVisible !== true) {
        return;
      }
      const {
        placement = "bottom-start",
        autoAdjustWidth = false,
        offset = [0, 0]
      } = this.props;
      const triggerOffset = (_a = this.triggerRef) == null ? void 0 : _a.getBoundingClientRect();
      const popupOffset = (_b = this.popupRef) == null ? void 0 : _b.getBoundingClientRect();
      const popupStyle = {};
      if (autoAdjustWidth === true) {
        popupOffset.width = triggerOffset.width;
        popupStyle.width = triggerOffset.width;
      }
      if (["bottom", "bottom-start", "bottom-end"].includes(placement)) {
        popupStyle.top = triggerOffset.top + triggerOffset.height + offset[1];
      }
      if (["top", "top-start", "top-end"].includes(placement)) {
        popupStyle.top = triggerOffset.top - popupOffset.height - offset[1];
      }
      if (["bottom", "top"].includes(placement)) {
        const midLeft = triggerOffset.left + triggerOffset.width / 2;
        popupStyle.left = midLeft - popupOffset.width / 2;
      }
      if (["top-start", "bottom-start"].includes(placement)) {
        popupStyle.left = triggerOffset.left;
      }
      if (["top-end", "bottom-end"].includes(placement)) {
        popupStyle.left = triggerOffset.left + triggerOffset.width - popupOffset.width;
      }
      if (["left-start", "left", "left-end"].includes(placement)) {
        popupStyle.left = triggerOffset.left - popupOffset.width - offset[0];
      }
      if (["right-start", "right", "right-end"].includes(placement)) {
        popupStyle.left = triggerOffset.left + triggerOffset.width + offset[0];
      }
      if (["left-start", "right-start"].includes(placement)) {
        popupStyle.top = triggerOffset.top;
      }
      if (["left", "right"].includes(placement)) {
        const midTop = triggerOffset.top + triggerOffset.height / 2;
        popupStyle.top = midTop - popupOffset.height / 2;
      }
      if (["left-end", "right-end"].includes(placement)) {
        popupStyle.top = triggerOffset.top + triggerOffset.height - popupOffset.height;
      }
      this.setState({
        popupStyle
      });
    };
    this.state = {
      popupVisible: this.props.popupVisible === true,
      popupStyle: {}
    };
  }
  componentDidMount() {
    this.updatePopupPosition();
    if (this.props.outsideClose === true) {
      document.body.addEventListener("mousedown", this.onClickOutside, false);
    }
    if (this.props.trigger === "hover") {
      document.body.addEventListener("mousemove", this.onMouseMovingOutside, false);
    }
  }
  componentDidUpdate() {
    this.onContainersScroll();
  }
  componentWillUnmount() {
    var _a;
    if (this.props.outsideClose === true) {
      document.body.removeEventListener("mousedown", this.onClickOutside, false);
    }
    if (this.props.trigger === "hover") {
      document.body.removeEventListener("mousemove", this.onMouseMovingOutside, false);
    }
    (_a = this.scrollElements) == null ? void 0 : _a.forEach((item) => {
      removeEvent(item, "scroll", this.updatePopupPosition);
    });
  }
  render() {
    var _a, _b, _c, _d;
    const {
      popup,
      children,
      className,
      trigger = "click"
    } = this.props;
    const mergeProps = {};
    if (trigger === "click") {
      mergeProps.onClick = () => {
        this.setPopupVisible(!this.state.popupVisible);
      };
    }
    if (trigger === "hover") {
      mergeProps.onMouseOver = () => {
        this.setPopupVisible(true);
      };
    }
    if (trigger === "contextmenu") {
      mergeProps.onContextMenu = (e) => {
        this.setPopupVisible(true);
        e.preventDefault();
        e.stopPropagation();
      };
    }
    const childrenComponent = React__default.cloneElement(children, __spreadProps(__spreadValues({}, mergeProps), {
      className: cn((_a = children == null ? void 0 : children.props) == null ? void 0 : _a.className, {
        "popup-open": this.state.popupVisible === true
      }),
      ref: (val) => {
        this.triggerRef = val;
      }
    }));
    const portal = React__default.cloneElement(popup, {
      ref: (val) => {
        this.popupRef = val;
      },
      className: cn((_b = popup == null ? void 0 : popup.props) == null ? void 0 : _b.className, className),
      style: __spreadValues(__spreadValues(__spreadValues({}, this.props.style), (_c = popup == null ? void 0 : popup.props) == null ? void 0 : _c.style), (_d = this == null ? void 0 : this.state) == null ? void 0 : _d.popupStyle)
    });
    this.childrenComponent = childrenComponent;
    return /* @__PURE__ */ jsxs(React__default.Fragment, {
      children: [childrenComponent, this.state.popupVisible && ReactDOM.createPortal(portal, document.body)]
    });
  }
}
var index$f = "";
const PERFIX$4 = "apipost-dropdown";
const DropDown = React__default.forwardRef((props, ref) => {
  const {
    style,
    className,
    trigger = "click",
    placement = "bottom-start",
    outsideClose = true,
    onVisibleChange = () => void 0,
    content,
    children
  } = props;
  const getPopup = () => {
    if (content.type === void 0 || content.type.toString() === React__default.Fragment.toString()) {
      return /* @__PURE__ */ jsx("div", {
        children: content
      });
    }
    return content;
  };
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx(Trigger, {
      ref,
      style,
      placement,
      outsideClose,
      popup: getPopup(),
      trigger,
      className: cn(PERFIX$4, className),
      onVisibleChange,
      children
    })
  });
});
var Union = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuNzE2ODUgMS4zNTM2NUM3LjkxMjEyIDEuMTU4MzkgNy45MTIxMiAwLjg0MTgwNSA3LjcxNjg1IDAuNjQ2NTQyQzcuNTIxNTkgMC40NTEyOCA3LjIwNTAxIDAuNDUxMjggNy4wMDk3NSAwLjY0NjU0Mkw0LjM2MzIxIDMuMjkzMDhMMS40MjM3NyAwLjM1MzY0OUMxLjIyODUxIDAuMTU4Mzg3IDAuOTExOTI2IDAuMTU4Mzg3IDAuNzE2NjYzIDAuMzUzNjQ5QzAuNTIxNDAxIDAuNTQ4OTEyIDAuNTIxNDAxIDAuODY1NDk0IDAuNzE2NjYzIDEuMDYwNzZMMy42NTYxIDQuMDAwMTlMMC42NDU3ODcgNy4wMTA1QzAuNDUwNTI1IDcuMjA1NzYgMC40NTA1MjUgNy41MjIzNSAwLjY0NTc4NyA3LjcxNzYxQzAuODQxMDQ5IDcuOTEyODcgMS4xNTc2MyA3LjkxMjg3IDEuMzUyODkgNy43MTc2MUw0LjM2MzIxIDQuNzA3M0w3LjA4MDYyIDcuNDI0NzJDNy4yNzU4OSA3LjYxOTk4IDcuNTkyNDcgNy42MTk5OCA3Ljc4NzczIDcuNDI0NzJDNy45ODI5OSA3LjIyOTQ1IDcuOTgyOTkgNi45MTI4NyA3Ljc4NzczIDYuNzE3NjFMNS4wNzAzMSA0LjAwMDE5TDcuNzE2ODUgMS4zNTM2NVoiIC8+Cjwvc3ZnPgo=";
var Textarea$1 = "";
const Textarea = (props) => {
  const {
    style,
    className,
    value,
    autoSize = false,
    defaultValue,
    maxLength,
    allowClear,
    readonly,
    placeholder,
    width: width2,
    height: height2 = 80,
    lineHeight = 20,
    autoFocus = false,
    onChange,
    onPressEnter,
    onBlur = () => {
    }
  } = props;
  const textareaRef = useRef();
  const [textareaValue, setTextareaValue] = useState(defaultValue || value);
  useEffect(() => {
    setTextareaValue(value);
  }, [value]);
  const [textareaStyle, setTextareaStyle] = useState({
    height: height2 || 26,
    lineHeight: `${lineHeight}px`
  });
  useEffect(() => {
    let teamStyle;
    teamStyle = {
      minHeight: 40,
      maxHeight: 100
    };
    if (autoSize) {
      if (typeof autoSize === "object") {
        const {
          minRows,
          maxRows
        } = autoSize;
        if (minRows) {
          teamStyle.minHeight += (minRows - 1) * 22;
        }
        if (maxRows) {
          teamStyle.maxHeight += (maxRows - 1) * 22;
        }
      } else if (typeof autoSize === "boolean") {
        if (autoSize) {
          teamStyle.maxHeight = 99999;
        }
      }
    } else {
      teamStyle = {};
    }
    setTextareaStyle(__spreadValues(__spreadValues({}, teamStyle), textareaStyle));
  }, []);
  const textareaWrapperStyle = {
    width: width2,
    height: height2
  };
  const onKeyDownchange = (e) => {
    if (e.keyCode === 13 && onPressEnter) {
      onPressEnter(e);
    }
  };
  const textareaClassNames = cn({
    "apipost-textarea": true
  }, className);
  const AutoHeight = (e) => {
    const StylelineHeight = +e.target.style.lineHeight.replace("px", "");
    let lines = Math.round(textareaRef.current.scrollHeight / StylelineHeight);
    if (e.target.value === "") {
      lines = 1;
    }
    setTextareaStyle(__spreadProps(__spreadValues({}, textareaStyle), {
      scrollTop: 0,
      height: StylelineHeight * lines < height2 ? height2 : StylelineHeight * lines,
      zIndex: 101,
      position: "absolute"
    }));
  };
  const handleBlur = (e) => {
    onBlur(e);
    setTextareaStyle(__spreadProps(__spreadValues({}, textareaStyle), {
      zIndex: "99",
      height: height2
    }));
  };
  const TextareaElement = /* @__PURE__ */ jsx("textarea", {
    ref: textareaRef,
    spellCheck: "false",
    className: textareaClassNames,
    maxLength,
    placeholder,
    readOnly: readonly,
    style: __spreadValues(__spreadValues({}, textareaStyle), style),
    autoFocus,
    onFocus: (e) => {
      AutoHeight(e);
    },
    onBlur: handleBlur,
    onKeyDown: (e) => onKeyDownchange(e),
    value: textareaValue,
    onChange: (e) => {
      setTextareaValue(e.target.value);
      AutoHeight(e);
      if (onChange) {
        onChange(e.target.value, e);
      }
    },
    onInput: AutoHeight,
    children: textareaValue
  });
  return /* @__PURE__ */ jsxs("div", {
    className: "apipost-textarea-wrapper",
    style: textareaWrapperStyle,
    children: [TextareaElement, /* @__PURE__ */ jsx("span", {
      className: "apiinput-clear-icon",
      onClick: () => {
        setTextareaValue("");
      },
      children: allowClear ? /* @__PURE__ */ jsx(Union, {}) : ""
    })]
  });
};
var index$e = "";
var Iconcancel = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNy45OTk5OCAxMy40MDAxQzEwLjk4MjMgMTMuNDAwMSAxMy40IDEwLjk4MjQgMTMuNCA4LjAwMDFDMTMuNCA1LjAxNzc2IDEwLjk4MjMgMi42MDAxIDcuOTk5OTggMi42MDAxQzUuMDE3NjQgMi42MDAxIDIuNTk5OTggNS4wMTc3NiAyLjU5OTk4IDguMDAwMUMyLjU5OTk4IDEwLjk4MjQgNS4wMTc2NCAxMy40MDAxIDcuOTk5OTggMTMuNDAwMVpNNy45OTk5OCAxNC40MDAxQzExLjUzNDYgMTQuNDAwMSAxNC40IDExLjUzNDcgMTQuNCA4LjAwMDFDMTQuNCA0LjQ2NTQ4IDExLjUzNDYgMS42MDAxIDcuOTk5OTggMS42MDAxQzQuNDY1MzUgMS42MDAxIDEuNTk5OTggNC40NjU0OCAxLjU5OTk4IDguMDAwMUMxLjU5OTk4IDExLjUzNDcgNC40NjUzNSAxNC40MDAxIDcuOTk5OTggMTQuNDAwMVpNNS44MTYzNyA1LjY3NDk2QzYuMDExNjMgNS40Nzk3IDYuMzI4MjEgNS40Nzk3IDYuNTIzNDggNS42NzQ5Nkw4LjQzMjY4IDcuNTg0MTdMMTAuMjAwNCA1LjgxNjRDMTAuMzk1NyA1LjYyMTE0IDEwLjcxMjMgNS42MjExNCAxMC45MDc2IDUuODE2NEMxMS4xMDI4IDYuMDExNjYgMTEuMTAyOCA2LjMyODI0IDEwLjkwNzYgNi41MjM1MUw5LjEzOTc5IDguMjkxMjdMMTAuOTA3NSAxMC4wNTlDMTEuMTAyOCAxMC4yNTQzIDExLjEwMjggMTAuNTcwOSAxMC45MDc1IDEwLjc2NjFDMTAuNzEyMyAxMC45NjE0IDEwLjM5NTcgMTAuOTYxNCAxMC4yMDA0IDEwLjc2NjFMOC40MzI2OCA4Ljk5ODM4TDYuNTIzNDkgMTAuOTA3NkM2LjMyODIzIDExLjEwMjggNi4wMTE2NSAxMS4xMDI4IDUuODE2MzkgMTAuOTA3NkM1LjYyMTEyIDEwLjcxMjMgNS42MjExMiAxMC4zOTU3IDUuODE2MzkgMTAuMjAwNUw3LjcyNTU3IDguMjkxMjhMNS44MTYzNyA2LjM4MjA3QzUuNjIxMTEgNi4xODY4MSA1LjYyMTExIDUuODcwMjMgNS44MTYzNyA1LjY3NDk2WiIgLz4KPC9zdmc+Cg==";
const Input = (props) => {
  const {
    value,
    onChange,
    className,
    style,
    placeholder,
    beforeFix = null,
    afterFix = null,
    disabled = false,
    error,
    onClear,
    onBlur = () => void 0,
    onFocus = () => void 0,
    onKeyDown = () => void 0,
    readonly = false,
    allowClear
  } = props;
  const isComposition = useRef(false);
  const [inputValue, setInputValue] = useState(value || "");
  useEffect(() => {
    setInputValue(value);
  }, [value]);
  const [compositionValue, setCompositionValue] = useState("");
  const handleChange = (e) => {
    const newValue = e.currentTarget.value;
    if (!isComposition.current) {
      if (onChange) {
        onChange(newValue, e);
        return;
      }
      setInputValue(newValue);
    } else {
      setCompositionValue(newValue);
    }
  };
  const handleComposition = (e) => {
    if (e.type === "compositionend") {
      isComposition.current = false;
      setCompositionValue(void 0);
      if (onChange) {
        onChange(e.currentTarget.value, e);
        return;
      }
      setInputValue(e.currentTarget.value);
    } else {
      isComposition.current = true;
    }
  };
  const _a = style || {}, {
    width: width2,
    height: height2,
    border,
    borderRadius
  } = _a, restStyles = __objRest(_a, [
    "width",
    "height",
    "border",
    "borderRadius"
  ]);
  const inputEl = useRef(null);
  const [focus, setFocus] = useState(false);
  const wrapperClassnames = cn("apipost-input-inner-wrapper", {
    "apipost-input-inner-wrapper-focus": focus,
    "apipost-input-inner-wrapper-error": error,
    "apipost-input-inner-wrapper-disabled": disabled
  });
  const handleFocus = (e) => {
    setFocus(true);
    onFocus(e);
  };
  const handleBlur = (e) => {
    setFocus(false);
    onBlur(e);
  };
  const handleClear = () => {
    onChange && onChange("", inputEl.current);
    setInputValue("");
    onClear && onClear();
  };
  const inputProps = {
    value: compositionValue || inputValue || ""
  };
  return /* @__PURE__ */ jsxs("span", {
    ref: inputEl,
    className: cn(className, wrapperClassnames),
    style: {
      width: width2,
      height: height2,
      border,
      borderRadius
    },
    children: [beforeFix !== void 0 && beforeFix, /* @__PURE__ */ jsx("input", __spreadValues({
      className: "apipost-input",
      spellCheck: "false",
      placeholder,
      style: __spreadValues({}, restStyles),
      onChange: handleChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      readOnly: readonly,
      disabled,
      autoComplete: "new-password",
      onCompositionStart: handleComposition,
      onCompositionUpdate: handleComposition,
      onCompositionEnd: handleComposition,
      onKeyDown
    }, inputProps)), afterFix !== void 0 && afterFix, allowClear && /* @__PURE__ */ jsx("span", {
      onClick: handleClear,
      className: "apipost-input-inner-clear",
      children: /* @__PURE__ */ jsx(Iconcancel, {})
    })]
  });
};
const InputComponent = Input;
InputComponent.Textarea = Textarea;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$9 = freeGlobal || freeSelf || Function("return this")();
var _root = root$9;
var root$8 = _root;
var Symbol$7 = root$8.Symbol;
var _Symbol = Symbol$7;
var Symbol$6 = _Symbol;
var objectProto$f = Object.prototype;
var hasOwnProperty$c = objectProto$f.hasOwnProperty;
var nativeObjectToString$1 = objectProto$f.toString;
var symToStringTag$1 = Symbol$6 ? Symbol$6.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$c.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$e = Object.prototype;
var nativeObjectToString = objectProto$e.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$5 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$5 ? Symbol$5.toStringTag : void 0;
function baseGetTag$7(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$7;
function isObjectLike$9(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$9;
var baseGetTag$6 = _baseGetTag, isObjectLike$8 = isObjectLike_1;
var numberTag$4 = "[object Number]";
function isNumber(value) {
  return typeof value == "number" || isObjectLike$8(value) && baseGetTag$6(value) == numberTag$4;
}
var isNumber_1 = isNumber;
var InputUpSvg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMiAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik01LjA1MDggMy4xOTIzQzUuNDM3ODYgMi41MzcyOCA2LjM4NTU5IDIuNTM3MjggNi43NzI2NSAzLjE5MjNMOS42MDg0MyA3Ljk5MTMzQzEwLjAwMjMgOC42NTc5NCA5LjUyMTgxIDkuNTAwMDYgOC43NDc1MSA5LjUwMDA2TDUuOTExNzIgOS41MDAwNkwzLjA3NTkzIDkuNTAwMDZDMi4zMDE2MyA5LjUwMDA2IDEuODIxMSA4LjY1Nzk0IDIuMjE1MDEgNy45OTEzM0w1LjA1MDggMy4xOTIzWiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K";
var InputDownSvg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMiAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik02Ljk0OTIgOS44MDc3QzYuNTYyMTQgMTAuNDYyNyA1LjYxNDQxIDEwLjQ2MjcgNS4yMjczNSA5LjgwNzdMMi4zOTE1NiA1LjAwODY3QzEuOTk3NjYgNC4zNDIwNiAyLjQ3ODE5IDMuNDk5OTQgMy4yNTI0OSAzLjQ5OTk0SDYuMDg4MjhIOC45MjQwN0M5LjY5ODM3IDMuNDk5OTQgMTAuMTc4OSA0LjM0MjA2IDkuNzg0OTkgNS4wMDg2N0w2Ljk0OTIgOS44MDc3WiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K";
var ArrowUp = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iNSIgZmlsbD0iI0YyRjJGMiIvPgo8bGluZSB4MT0iNi41IiB5MT0iOS43MjIyMiIgeDI9IjEzLjUiIHkyPSI5LjcyMjIyIiBzdHJva2U9IiMyQjJCMkIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8bGluZSB4MT0iMTAuMjc3OCIgeTE9IjYuNSIgeDI9IjEwLjI3NzgiIHkyPSIxMy41IiBzdHJva2U9IiMyQjJCMkIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K";
var ArrowDown = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iNSIgZmlsbD0iI0YyRjJGMiIvPgo8bGluZSB4MT0iNi41IiB5MT0iOS43MjIyMiIgeDI9IjEzLjUiIHkyPSI5LjcyMjIyIiBzdHJva2U9IiMyQjJCMkIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K";
var index$d = "";
const ruleType = (data) => {
  const d = Object.prototype.toString.call(data);
  return d.substr(8, d.length - 9);
};
const ADD = "add";
const SUBTRACT = "subtract";
const InputNumber = (props) => {
  const {
    value = "0",
    min = -Infinity,
    max = Infinity,
    onChange,
    disabled,
    modetype = "input",
    type = "row"
  } = props;
  const [values, setValues] = useState(value || "0");
  const handleChangeValue = (types = ADD) => {
    let val;
    val = values;
    switch (types) {
      case SUBTRACT:
        if (!min && min !== 0 || values > min) {
          val--;
        }
        break;
      default:
        if (!max && max !== 0 || values < max) {
          val++;
        }
        break;
    }
    if (onChange) {
      onChange(val);
      return;
    }
    if (val === 0 || val === "0") {
      val = "0";
    }
    setValues(val);
  };
  useEffect(() => {
    onChange && onChange(values);
  }, [values]);
  useEffect(() => {
    if (ruleType(+value) !== "Number") {
      throw new Error("\u8BE5\u6570\u636E\u7C7B\u578B\u4E0D\u5BF9");
    }
    setValues(value);
  }, [value]);
  useCallback((value2) => {
    let finalValue = value2;
    if (finalValue === "" || finalValue === 0) {
      return "0";
    }
    finalValue = isNumber_1(finalValue) ? Number(finalValue) : values;
    if (finalValue < min) {
      finalValue = min;
    }
    if (finalValue > max) {
      finalValue = max;
    }
    return finalValue;
  }, [min, max]);
  const handleInputChange = (e) => {
    const val = e;
    console.log(val, !val);
    if (val === "" || val === 0 || val === "0" || val == "00") {
      setValues("0");
      return;
    }
    if (!/(^[0-9]\d*$)/.test(val)) {
      return;
    }
    if (val > max) {
      setValues(max);
    }
    if (val > max || val < min) {
      return;
    }
    if (val !== 0 || val !== "0") {
      setValues(parseInt(val, 10));
    }
  };
  const renderType = (tp) => {
    if (tp === "row") {
      return /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsx("div", {
          onClick: () => handleChangeValue(SUBTRACT),
          className: "apipost-input-number-step",
          children: /* @__PURE__ */ jsx(ArrowDown, {})
        }), /* @__PURE__ */ jsx("div", {
          style: {
            flex: 1,
            height: "100%"
          },
          children: modetype === "input" ? /* @__PURE__ */ jsx(InputComponent, {
            value: values,
            disabled,
            onChange: handleInputChange
          }) : /* @__PURE__ */ jsx("div", {
            children: values
          })
        }), /* @__PURE__ */ jsx("div", {
          onClick: () => handleChangeValue(ADD),
          className: "apipost-input-number-step",
          children: /* @__PURE__ */ jsx(ArrowUp, {})
        })]
      });
    }
    if (tp === "column") {
      return /* @__PURE__ */ jsxs("div", {
        style: {
          width: "100%",
          height: "100%",
          position: "relative"
        },
        children: [/* @__PURE__ */ jsx(InputUpSvg, {
          onClick: () => handleChangeValue(ADD),
          className: "cur_pointer column_before"
        }), /* @__PURE__ */ jsx(InputComponent, {
          value: values,
          disabled,
          onChange: handleInputChange
        }), /* @__PURE__ */ jsx(InputDownSvg, {
          onClick: () => handleChangeValue(SUBTRACT),
          className: "cur_pointer column_after"
        })]
      });
    }
  };
  return /* @__PURE__ */ jsx("div", {
    className: "apipost-input-number",
    children: renderType(type)
  });
};
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}
var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function validate(uuid) {
  return typeof uuid === "string" && REGEX.test(uuid);
}
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).substr(1));
}
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return stringify(rnds);
}
var SuceesIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDhDMTYgMTIuNDE4MyAxMi40MTgzIDE2IDggMTZDMy41ODE3MiAxNiAwIDEyLjQxODMgMCA4QzAgMy41ODE3MiAzLjU4MTcyIDAgOCAwQzEyLjQxODMgMCAxNiAzLjU4MTcyIDE2IDhaIiBmaWxsPSIjM0NDMDcxIi8+CjxsaW5lIHgxPSI2LjgzMzI1IiB5MT0iMTAuMjA5NiIgeDI9IjExLjM3NjEiIHkyPSI1LjY2NjY3IiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPGxpbmUgeDE9IjQuMDQwMzYiIHkxPSI3LjQxNjY3IiB4Mj0iNi44MzMyNSIgeTI9IjEwLjIwOTYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K";
var ErrorIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDhDMTYgMTIuNDE4MyAxMi40MTgzIDE2IDggMTZDMy41ODE3MiAxNiAwIDEyLjQxODMgMCA4QzAgMy41ODE3MiAzLjU4MTcyIDAgOCAwQzEyLjQxODMgMCAxNiAzLjU4MTcyIDE2IDhaIiBmaWxsPSIjRkY0QzRDIi8+CjxyZWN0IHdpZHRoPSI5LjYzMDM0IiBoZWlnaHQ9IjEuMTIiIHJ4PSIwLjU2IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcwNzEwMiAtMC43MDcxMTEgMC43MDcxMDIgMC43MDcxMTEgNC4zMDU0MiAxMC44MDk3KSIgZmlsbD0id2hpdGUiLz4KPHJlY3Qgd2lkdGg9IjkuNjMwMzQiIGhlaWdodD0iMS4xMTUzNCIgcng9IjAuNTU3NjY4IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcwNzEwMiAwLjcwNzExMSAtMC43MDcxMDIgMC43MDcxMTEgNC43ODg1NyA0KSIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==";
var WarningIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDE2QzEyLjQxODMgMTYgMTYgMTIuNDE4MyAxNiA4QzE2IDMuNTgxNzIgMTIuNDE4MyAwIDggMEMzLjU4MTcyIDAgMCAzLjU4MTcyIDAgOEMwIDEyLjQxODMgMy41ODE3MiAxNiA4IDE2Wk03LjIzOCAxMi43M0M3LjQwNiAxMi44OTggNy42MDIgMTIuOTY4IDcuODQgMTIuOTY4QzguMDc4IDEyLjk2OCA4LjI3NCAxMi44OTggOC40NDIgMTIuNzNDOC42MSAxMi41OSA4LjY5NCAxMi4zOTQgOC42OTQgMTIuMTQyQzguNjk0IDExLjkwNCA4LjYxIDExLjcwOCA4LjQ0MiAxMS41NEM4LjI3NCAxMS4zODYgOC4wNzggMTEuMzAyIDcuODQgMTEuMzAyQzcuNjAyIDExLjMwMiA3LjQwNiAxMS4zODYgNy4yMzggMTEuNTRDNy4wNyAxMS43MDggNyAxMS45MDQgNyAxMi4xNDJDNyAxMi4zOTQgNy4wNyAxMi41OSA3LjIzOCAxMi43M1pNNy4yOCAzVjEwLjIzOEg4LjRWM0g3LjI4WiIgZmlsbD0iI0RGQkIwMCIvPgo8L3N2Zz4K";
var PromptIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDE2QzEyLjQxODMgMTYgMTYgMTIuNDE4MyAxNiA4QzE2IDMuNTgxNzIgMTIuNDE4MyAwIDggMEMzLjU4MTcyIDAgMCAzLjU4MTcyIDAgOEMwIDEyLjQxODMgMy41ODE3MiAxNiA4IDE2Wk03LjIzOCAzLjIzOEM3LjQwNiAzLjA3IDcuNjAyIDMgNy44NCAzQzguMDc4IDMgOC4yNzQgMy4wNyA4LjQ0MiAzLjIzOEM4LjYxIDMuMzc4IDguNjk0IDMuNTc0IDguNjk0IDMuODI2QzguNjk0IDQuMDY0IDguNjEgNC4yNiA4LjQ0MiA0LjQyOEM4LjI3NCA0LjU4MiA4LjA3OCA0LjY2NiA3Ljg0IDQuNjY2QzcuNjAyIDQuNjY2IDcuNDA2IDQuNTgyIDcuMjM4IDQuNDI4QzcuMDcgNC4yNiA3IDQuMDY0IDcgMy44MjZDNyAzLjU3NCA3LjA3IDMuMzc4IDcuMjM4IDMuMjM4Wk03LjI4IDEyLjk2OFY1LjczSDguNFYxMi45NjhINy4yOFoiIGZpbGw9IiM1RDg4RjEiLz4KPC9zdmc+Cg==";
const apiMessage = (props) => {
  const {
    noticeKey,
    type,
    text: text2,
    remove,
    showClose
  } = props;
  const iconType = {
    success: /* @__PURE__ */ jsx(SuceesIcon, {}),
    warning: /* @__PURE__ */ jsx(WarningIcon, {}),
    info: /* @__PURE__ */ jsx(PromptIcon, {}),
    error: /* @__PURE__ */ jsx(ErrorIcon, {})
  };
  const closeOnclick = () => {
    if (remove) {
      remove({
        key: noticeKey
      });
    }
  };
  const classNames = cn({
    "apipost-message-content": true,
    [`apipost-message-${type}`]: true
  });
  return /* @__PURE__ */ jsxs("div", {
    className: classNames,
    children: [/* @__PURE__ */ jsx("span", {
      className: "apipost-message-icon",
      children: iconType[type]
    }), /* @__PURE__ */ jsx("span", {
      className: "apipost-message-text",
      children: text2
    }), showClose ? /* @__PURE__ */ jsx("span", {
      className: "apipost-message-close",
      onClick: closeOnclick,
      children: "x"
    }) : ""]
  });
};
var index$c = "";
let add$2;
const MessageContainer = () => {
  const [notices, setNotices] = useState([]);
  const maxCount = 1;
  const defalutTimeout = 3 * 1e3;
  const remove = (notice) => {
    const {
      key
    } = notice;
    setNotices((preNotices) => preNotices.filter(({
      key: itemKey
    }) => key !== itemKey));
  };
  add$2 = (notice) => {
    setNotices((preNotices) => [...preNotices, notice]);
    setTimeout(() => {
      remove(notice);
    }, notice.timeout ? notice.timeout * 1e3 : defalutTimeout);
  };
  useEffect(() => {
    if (notices.length > maxCount) {
      const [firstNotice] = notices;
      remove(firstNotice);
    }
  }, [notices]);
  return /* @__PURE__ */ jsx(Fragment, {
    children: notices.map(({
      text: text2,
      key,
      type
    }) => /* @__PURE__ */ jsx("div", {
      className: "apipost-message",
      children: /* @__PURE__ */ jsx(apiMessage, {
        noticeKey: key,
        type,
        text: text2,
        remove
      }, key)
    }, key))
  });
};
let el = document.querySelector(".apipost-message-group");
if (!el) {
  el = document.createElement("div");
  el.className = "apipost-message-group";
  el.id = "apipost-message-group";
  document.body.append(el);
}
ReactDOM.render(/* @__PURE__ */ jsx(MessageContainer, {}), el);
const message = (type, text2, timeout) => {
  if (text2 && text2.length > 0) {
    add$2({
      key: v4(),
      type,
      text: text2,
      timeout
    });
  }
};
var index$b = "";
const PERFIX$3 = "apipost-confirm";
let add$1 = (props) => {
};
const ConfirmContainer = () => {
  const [visible, setVisible] = useState(false);
  const [props, setProps] = useState({});
  const {
    title,
    content,
    cancelText,
    diyText,
    okText,
    onOk,
    onCancel,
    large = false
  } = props;
  useEffect(() => {
    add$1 = (param) => {
      setProps(param);
      setVisible(true);
    };
  }, []);
  const handleCancel = () => {
    setVisible(false);
    onCancel && onCancel();
  };
  const handleOnOK = () => {
    setVisible(false);
    onOk && onOk();
  };
  const diyClick = () => {
    setVisible(false);
    (props == null ? void 0 : props.onDiy) && (props == null ? void 0 : props.onDiy());
  };
  return visible ? ReactDOM.createPortal(/* @__PURE__ */ jsx("div", {
    className: `${PERFIX$3}-mask`,
    children: /* @__PURE__ */ jsxs("div", {
      className: cn({
        [`${PERFIX$3}-container`]: true,
        large
      }),
      children: [/* @__PURE__ */ jsx("div", {
        className: "svg-close",
        onClick: handleCancel,
        children: /* @__PURE__ */ jsx(TabCloseSvg, {})
      }), /* @__PURE__ */ jsx("div", {
        className: `${PERFIX$3}-container-title`,
        children: title
      }), /* @__PURE__ */ jsx("div", {
        className: `${PERFIX$3}-container-content`,
        children: content
      }), /* @__PURE__ */ jsxs("div", {
        className: `${PERFIX$3}-container-footer`,
        children: [/* @__PURE__ */ jsx(Button, {
          onClick: handleCancel,
          children: cancelText || "\u53D6\u6D88"
        }), props.diyText ? /* @__PURE__ */ jsx(Button, {
          onClick: diyClick,
          children: diyText
        }) : null, /* @__PURE__ */ jsx(Button, {
          type: "primary",
          onClick: handleOnOK,
          children: okText || "\u786E\u5B9A"
        })]
      })]
    })
  }), document.querySelector("body")) : null;
};
const div = document.createElement("div");
document.body.appendChild(div);
ReactDOM.render(/* @__PURE__ */ jsx(ConfirmContainer, {}), div);
const ModalConfirm = (props) => {
  add$1(props);
};
const PERFIXNAME = "apipost-modal";
function Modal(props, ref) {
  const {
    style,
    className,
    children,
    mask = true,
    maskClosable,
    title,
    headerClassName,
    bodyClassName = void 0,
    footer,
    footerClassName = "",
    visible,
    okText = "\u786E\u8BA4",
    cancelText = "\u53D6\u6D88",
    escToExit = true,
    onOk,
    onCancel = () => void 0
  } = props;
  const [zIndex, setZIndex] = useState(1024);
  useEffect(() => {
    if (document.getElementsByClassName(`${PERFIXNAME}-mask`).length > 1) {
      setZIndex(zIndex + 1);
    } else {
      setZIndex(1024);
    }
  }, []);
  const [uuid] = useState(v4());
  const modalRef = useRef();
  const onEscExit = (e, uuid2) => {
    setTimeout(() => {
      var _a;
      if (e.keyCode === 27 && onCancel && escToExit && ((_a = modalRef == null ? void 0 : modalRef.current) == null ? void 0 : _a.getAttribute("data-uuid")) === uuid2) {
        onCancel();
      }
    }, 10);
  };
  useEffect(() => {
    document.addEventListener("keyup", (e) => onEscExit(e, uuid), false);
    return () => {
      document.addEventListener("keyup", (e) => onEscExit(e, uuid), false);
    };
  }, []);
  return /* @__PURE__ */ jsx(Fragment, {
    children: visible && ReactDOM.createPortal(/* @__PURE__ */ jsxs("div", {
      ref: modalRef,
      "data-uuid": uuid,
      children: [mask && /* @__PURE__ */ jsx("div", {
        className: `${PERFIXNAME}-mask`,
        onClick: () => {
          maskClosable && onCancel();
        },
        style: {
          zIndex
        }
      }), /* @__PURE__ */ jsx("div", {
        className: cn({
          [`${PERFIXNAME}-wrapper`]: true
        }, className),
        style: __spreadProps(__spreadValues({}, style), {
          zIndex: zIndex + 1
        }),
        children: /* @__PURE__ */ jsxs("div", {
          className: cn({
            [`${PERFIXNAME}-container`]: true
          }),
          children: [title !== null && /* @__PURE__ */ jsx("div", {
            className: cn({
              [`${PERFIXNAME}-header`]: true
            }, headerClassName),
            children: title
          }), /* @__PURE__ */ jsx("div", {
            onClick: onCancel,
            className: `${PERFIXNAME}-close`,
            children: /* @__PURE__ */ jsx(TabCloseSvg, {})
          }), /* @__PURE__ */ jsx("div", {
            className: cn({
              [`${PERFIXNAME}-body`]: true
            }, bodyClassName),
            children
          }), footer !== null && /* @__PURE__ */ jsx("div", {
            className: `${PERFIXNAME}-footer ${footerClassName}`,
            children: !footer ? /* @__PURE__ */ jsxs("div", {
              children: [/* @__PURE__ */ jsx(Button, {
                onClick: onCancel,
                children: cancelText
              }), /* @__PURE__ */ jsx(Button, {
                onClick: onOk,
                type: "primary",
                children: okText
              })]
            }) : footer
          })]
        })
      })]
    }), document.querySelector("body"))
  });
}
const ExportedModalComponent = forwardRef(Modal);
ExportedModalComponent.displayName = "Modal";
ExportedModalComponent.confirm = ModalConfirm;
const RadioContext = React__default.createContext({});
var index$a = "";
const InternalRadio = (props) => {
  const _a = props, {
    className,
    value,
    children,
    style,
    onMouseLeave,
    onChange = () => {
    }
  } = _a, restProps = __objRest(_a, [
    "className",
    "value",
    "children",
    "style",
    "onMouseLeave",
    "onChange"
  ]);
  const [radioCheckbox, setRadioCheckBox] = useState(false);
  const Context2 = useContext(RadioContext);
  const prefixCls2 = "apipost-radio";
  const radioProps = __spreadValues({}, restProps);
  const wrapperClassString = cn(`${prefixCls2}-wrapper`, {
    [`${prefixCls2}-wrapper-checked`]: radioProps.checked || radioCheckbox,
    [`${prefixCls2}-wrapper-disabled`]: radioProps.disabled || Context2.disabled
  }, className);
  if (Context2) {
    radioProps.checked = Context2.value === value;
    radioProps.disabled = Context2.disabled;
    radioProps.onClick = Context2.onChange;
  }
  const innerClass = cn(`${prefixCls2}-inner`, {
    [`${prefixCls2}-inner-checked`]: radioProps.checked || radioCheckbox
  });
  const handleOnChange = (e) => {
    if (Context2 == null ? void 0 : Context2.onChange) {
      Context2.onChange(value);
    } else {
      setRadioCheckBox(e.target.checked);
      onChange && onChange(e.target.checked);
    }
  };
  return /* @__PURE__ */ jsxs("label", {
    className: wrapperClassString,
    style,
    children: [/* @__PURE__ */ jsxs("span", {
      className: "apipost-Radio",
      onClick: onChange,
      children: [/* @__PURE__ */ jsx("input", __spreadValues({
        type: "radio",
        value,
        onChange: () => {
        },
        checked: radioCheckbox,
        onClick: handleOnChange
      }, restProps)), /* @__PURE__ */ jsx("span", {
        className: innerClass
      })]
    }), children !== void 0 ? /* @__PURE__ */ jsx("span", {
      className: "apipost-radio-children",
      children
    }) : null]
  });
};
const Radio = InternalRadio;
Radio.displayName = "Radio";
Radio.defaultProps = {
  checked: false
};
var MapShim = function() {
  if (typeof Map !== "undefined") {
    return Map;
  }
  function getIndex(arr, key) {
    var result = -1;
    arr.some(function(entry, index2) {
      if (entry[0] === key) {
        result = index2;
        return true;
      }
      return false;
    });
    return result;
  }
  return function() {
    function class_1() {
      this.__entries__ = [];
    }
    Object.defineProperty(class_1.prototype, "size", {
      get: function() {
        return this.__entries__.length;
      },
      enumerable: true,
      configurable: true
    });
    class_1.prototype.get = function(key) {
      var index2 = getIndex(this.__entries__, key);
      var entry = this.__entries__[index2];
      return entry && entry[1];
    };
    class_1.prototype.set = function(key, value) {
      var index2 = getIndex(this.__entries__, key);
      if (~index2) {
        this.__entries__[index2][1] = value;
      } else {
        this.__entries__.push([key, value]);
      }
    };
    class_1.prototype.delete = function(key) {
      var entries = this.__entries__;
      var index2 = getIndex(entries, key);
      if (~index2) {
        entries.splice(index2, 1);
      }
    };
    class_1.prototype.has = function(key) {
      return !!~getIndex(this.__entries__, key);
    };
    class_1.prototype.clear = function() {
      this.__entries__.splice(0);
    };
    class_1.prototype.forEach = function(callback, ctx) {
      if (ctx === void 0) {
        ctx = null;
      }
      for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
        var entry = _a[_i];
        callback.call(ctx, entry[1], entry[0]);
      }
    };
    return class_1;
  }();
}();
var isBrowser$1 = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
var global$1 = function() {
  if (typeof global !== "undefined" && global.Math === Math) {
    return global;
  }
  if (typeof self !== "undefined" && self.Math === Math) {
    return self;
  }
  if (typeof window !== "undefined" && window.Math === Math) {
    return window;
  }
  return Function("return this")();
}();
var requestAnimationFrame$1 = function() {
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame.bind(global$1);
  }
  return function(callback) {
    return setTimeout(function() {
      return callback(Date.now());
    }, 1e3 / 60);
  };
}();
var trailingTimeout = 2;
function throttle$1(callback, delay) {
  var leadingCall = false, trailingCall = false, lastCallTime = 0;
  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }
    if (trailingCall) {
      proxy();
    }
  }
  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  function proxy() {
    var timeStamp = Date.now();
    if (leadingCall) {
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      }
      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }
    lastCallTime = timeStamp;
  }
  return proxy;
}
var REFRESH_DELAY = 20;
var transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
var mutationObserverSupported = typeof MutationObserver !== "undefined";
var ResizeObserverController = function() {
  function ResizeObserverController2() {
    this.connected_ = false;
    this.mutationEventsAdded_ = false;
    this.mutationsObserver_ = null;
    this.observers_ = [];
    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle$1(this.refresh.bind(this), REFRESH_DELAY);
  }
  ResizeObserverController2.prototype.addObserver = function(observer) {
    if (!~this.observers_.indexOf(observer)) {
      this.observers_.push(observer);
    }
    if (!this.connected_) {
      this.connect_();
    }
  };
  ResizeObserverController2.prototype.removeObserver = function(observer) {
    var observers2 = this.observers_;
    var index2 = observers2.indexOf(observer);
    if (~index2) {
      observers2.splice(index2, 1);
    }
    if (!observers2.length && this.connected_) {
      this.disconnect_();
    }
  };
  ResizeObserverController2.prototype.refresh = function() {
    var changesDetected = this.updateObservers_();
    if (changesDetected) {
      this.refresh();
    }
  };
  ResizeObserverController2.prototype.updateObservers_ = function() {
    var activeObservers = this.observers_.filter(function(observer) {
      return observer.gatherActive(), observer.hasActive();
    });
    activeObservers.forEach(function(observer) {
      return observer.broadcastActive();
    });
    return activeObservers.length > 0;
  };
  ResizeObserverController2.prototype.connect_ = function() {
    if (!isBrowser$1 || this.connected_) {
      return;
    }
    document.addEventListener("transitionend", this.onTransitionEnd_);
    window.addEventListener("resize", this.refresh);
    if (mutationObserverSupported) {
      this.mutationsObserver_ = new MutationObserver(this.refresh);
      this.mutationsObserver_.observe(document, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      });
    } else {
      document.addEventListener("DOMSubtreeModified", this.refresh);
      this.mutationEventsAdded_ = true;
    }
    this.connected_ = true;
  };
  ResizeObserverController2.prototype.disconnect_ = function() {
    if (!isBrowser$1 || !this.connected_) {
      return;
    }
    document.removeEventListener("transitionend", this.onTransitionEnd_);
    window.removeEventListener("resize", this.refresh);
    if (this.mutationsObserver_) {
      this.mutationsObserver_.disconnect();
    }
    if (this.mutationEventsAdded_) {
      document.removeEventListener("DOMSubtreeModified", this.refresh);
    }
    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
  };
  ResizeObserverController2.prototype.onTransitionEnd_ = function(_a) {
    var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
    var isReflowProperty = transitionKeys.some(function(key) {
      return !!~propertyName.indexOf(key);
    });
    if (isReflowProperty) {
      this.refresh();
    }
  };
  ResizeObserverController2.getInstance = function() {
    if (!this.instance_) {
      this.instance_ = new ResizeObserverController2();
    }
    return this.instance_;
  };
  ResizeObserverController2.instance_ = null;
  return ResizeObserverController2;
}();
var defineConfigurable = function(target, props) {
  for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
    var key = _a[_i];
    Object.defineProperty(target, key, {
      value: props[key],
      enumerable: false,
      writable: false,
      configurable: true
    });
  }
  return target;
};
var getWindowOf = function(target) {
  var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
  return ownerGlobal || global$1;
};
var emptyRect = createRectInit(0, 0, 0, 0);
function toFloat(value) {
  return parseFloat(value) || 0;
}
function getBordersSize(styles) {
  var positions = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }
  return positions.reduce(function(size2, position) {
    var value = styles["border-" + position + "-width"];
    return size2 + toFloat(value);
  }, 0);
}
function getPaddings(styles) {
  var positions = ["top", "right", "bottom", "left"];
  var paddings = {};
  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var value = styles["padding-" + position];
    paddings[position] = toFloat(value);
  }
  return paddings;
}
function getSVGContentRect(target) {
  var bbox = target.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
function getHTMLElementContentRect(target) {
  var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }
  var styles = getWindowOf(target).getComputedStyle(target);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom;
  var width2 = toFloat(styles.width), height2 = toFloat(styles.height);
  if (styles.boxSizing === "border-box") {
    if (Math.round(width2 + horizPad) !== clientWidth) {
      width2 -= getBordersSize(styles, "left", "right") + horizPad;
    }
    if (Math.round(height2 + vertPad) !== clientHeight) {
      height2 -= getBordersSize(styles, "top", "bottom") + vertPad;
    }
  }
  if (!isDocumentElement(target)) {
    var vertScrollbar = Math.round(width2 + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height2 + vertPad) - clientHeight;
    if (Math.abs(vertScrollbar) !== 1) {
      width2 -= vertScrollbar;
    }
    if (Math.abs(horizScrollbar) !== 1) {
      height2 -= horizScrollbar;
    }
  }
  return createRectInit(paddings.left, paddings.top, width2, height2);
}
var isSVGGraphicsElement = function() {
  if (typeof SVGGraphicsElement !== "undefined") {
    return function(target) {
      return target instanceof getWindowOf(target).SVGGraphicsElement;
    };
  }
  return function(target) {
    return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === "function";
  };
}();
function isDocumentElement(target) {
  return target === getWindowOf(target).document.documentElement;
}
function getContentRect(target) {
  if (!isBrowser$1) {
    return emptyRect;
  }
  if (isSVGGraphicsElement(target)) {
    return getSVGContentRect(target);
  }
  return getHTMLElementContentRect(target);
}
function createReadOnlyRect(_a) {
  var x = _a.x, y2 = _a.y, width2 = _a.width, height2 = _a.height;
  var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype);
  defineConfigurable(rect, {
    x,
    y: y2,
    width: width2,
    height: height2,
    top: y2,
    right: x + width2,
    bottom: height2 + y2,
    left: x
  });
  return rect;
}
function createRectInit(x, y2, width2, height2) {
  return { x, y: y2, width: width2, height: height2 };
}
var ResizeObservation = function() {
  function ResizeObservation2(target) {
    this.broadcastWidth = 0;
    this.broadcastHeight = 0;
    this.contentRect_ = createRectInit(0, 0, 0, 0);
    this.target = target;
  }
  ResizeObservation2.prototype.isActive = function() {
    var rect = getContentRect(this.target);
    this.contentRect_ = rect;
    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
  };
  ResizeObservation2.prototype.broadcastRect = function() {
    var rect = this.contentRect_;
    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;
    return rect;
  };
  return ResizeObservation2;
}();
var ResizeObserverEntry = function() {
  function ResizeObserverEntry2(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);
    defineConfigurable(this, { target, contentRect });
  }
  return ResizeObserverEntry2;
}();
var ResizeObserverSPI = function() {
  function ResizeObserverSPI2(callback, controller, callbackCtx) {
    this.activeObservations_ = [];
    this.observations_ = new MapShim();
    if (typeof callback !== "function") {
      throw new TypeError("The callback provided as parameter 1 is not a function.");
    }
    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
  }
  ResizeObserverSPI2.prototype.observe = function(target) {
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    if (typeof Element === "undefined" || !(Element instanceof Object)) {
      return;
    }
    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    if (observations.has(target)) {
      return;
    }
    observations.set(target, new ResizeObservation(target));
    this.controller_.addObserver(this);
    this.controller_.refresh();
  };
  ResizeObserverSPI2.prototype.unobserve = function(target) {
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    if (typeof Element === "undefined" || !(Element instanceof Object)) {
      return;
    }
    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    if (!observations.has(target)) {
      return;
    }
    observations.delete(target);
    if (!observations.size) {
      this.controller_.removeObserver(this);
    }
  };
  ResizeObserverSPI2.prototype.disconnect = function() {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
  };
  ResizeObserverSPI2.prototype.gatherActive = function() {
    var _this = this;
    this.clearActive();
    this.observations_.forEach(function(observation) {
      if (observation.isActive()) {
        _this.activeObservations_.push(observation);
      }
    });
  };
  ResizeObserverSPI2.prototype.broadcastActive = function() {
    if (!this.hasActive()) {
      return;
    }
    var ctx = this.callbackCtx_;
    var entries = this.activeObservations_.map(function(observation) {
      return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });
    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
  };
  ResizeObserverSPI2.prototype.clearActive = function() {
    this.activeObservations_.splice(0);
  };
  ResizeObserverSPI2.prototype.hasActive = function() {
    return this.activeObservations_.length > 0;
  };
  return ResizeObserverSPI2;
}();
var observers = typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : new MapShim();
var ResizeObserver = function() {
  function ResizeObserver2(callback) {
    if (!(this instanceof ResizeObserver2)) {
      throw new TypeError("Cannot call a class as a function.");
    }
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);
    observers.set(this, observer);
  }
  return ResizeObserver2;
}();
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(method) {
  ResizeObserver.prototype[method] = function() {
    var _a;
    return (_a = observers.get(this))[method].apply(_a, arguments);
  };
});
var index$9 = function() {
  if (typeof global$1.ResizeObserver !== "undefined") {
    return global$1.ResizeObserver;
  }
  return ResizeObserver;
}();
var isArray$a = Array.isArray;
var isArray_1 = isArray$a;
var baseGetTag$5 = _baseGetTag, isObjectLike$7 = isObjectLike_1;
var symbolTag$3 = "[object Symbol]";
function isSymbol$4(value) {
  return typeof value == "symbol" || isObjectLike$7(value) && baseGetTag$5(value) == symbolTag$3;
}
var isSymbol_1 = isSymbol$4;
var isArray$9 = isArray_1, isSymbol$3 = isSymbol_1;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey$3(value, object) {
  if (isArray$9(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$3(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var _isKey = isKey$3;
function isObject$b(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$b;
var baseGetTag$4 = _baseGetTag, isObject$a = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$2(value) {
  if (!isObject$a(value)) {
    return false;
  }
  var tag = baseGetTag$4(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$2;
var root$7 = _root;
var coreJsData$1 = root$7["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$2;
var isFunction$1 = isFunction_1, isMasked = _isMasked, isObject$9 = isObject_1, toSource$1 = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$d = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$b = objectProto$d.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString$1.call(hasOwnProperty$b).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$1(value) {
  if (!isObject$9(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$7(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$7;
var getNative$6 = _getNative;
var nativeCreate$4 = getNative$6(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$c = Object.prototype;
var hasOwnProperty$a = objectProto$c.hasOwnProperty;
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$a.call(data, key) ? data[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$b = Object.prototype;
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$9.call(data, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
function eq$3(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$3;
var eq$2 = eq_1;
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$2(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(key) {
  var data = this.__data__, index2 = assocIndexOf$3(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index2, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
  var data = this.__data__, index2 = assocIndexOf$2(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index2][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$4(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype["delete"] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;
var _ListCache = ListCache$4;
var getNative$5 = _getNative, root$6 = _root;
var Map$4 = getNative$5(root$6, "Map");
var _Map = Map$4;
var Hash = _Hash, ListCache$3 = _ListCache, Map$3 = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$3 || ListCache$3)(),
    "string": new Hash()
  };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key), size2 = data.size;
  data.set(key, value);
  this.size += data.size == size2 ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$3(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache$3.prototype.clear = mapCacheClear;
MapCache$3.prototype["delete"] = mapCacheDelete;
MapCache$3.prototype.get = mapCacheGet;
MapCache$3.prototype.has = mapCacheHas;
MapCache$3.prototype.set = mapCacheSet;
var _MapCache = MapCache$3;
var MapCache$2 = _MapCache;
var FUNC_ERROR_TEXT$2 = "Expected a function";
function memoize$2(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$2.Cache || MapCache$2)();
  return memoized;
}
memoize$2.Cache = MapCache$2;
var memoize_1 = memoize$2;
var memoize$1 = memoize_1;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped$1(func) {
  var result = memoize$1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped$1;
var memoizeCapped = _memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath$1 = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var _stringToPath = stringToPath$1;
function arrayMap$2(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array[index2], index2, array);
  }
  return result;
}
var _arrayMap = arrayMap$2;
var Symbol$4 = _Symbol, arrayMap$1 = _arrayMap, isArray$8 = isArray_1, isSymbol$2 = isSymbol_1;
var INFINITY$2 = 1 / 0;
var symbolProto$2 = Symbol$4 ? Symbol$4.prototype : void 0, symbolToString = symbolProto$2 ? symbolProto$2.toString : void 0;
function baseToString$1(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$8(value)) {
    return arrayMap$1(value, baseToString$1) + "";
  }
  if (isSymbol$2(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$2 ? "-0" : result;
}
var _baseToString = baseToString$1;
var baseToString = _baseToString;
function toString$1(value) {
  return value == null ? "" : baseToString(value);
}
var toString_1 = toString$1;
var isArray$7 = isArray_1, isKey$2 = _isKey, stringToPath = _stringToPath, toString = toString_1;
function castPath$6(value, object) {
  if (isArray$7(value)) {
    return value;
  }
  return isKey$2(value, object) ? [value] : stringToPath(toString(value));
}
var _castPath = castPath$6;
var isSymbol$1 = isSymbol_1;
var INFINITY$1 = 1 / 0;
function toKey$6(value) {
  if (typeof value == "string" || isSymbol$1(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
var _toKey = toKey$6;
var castPath$5 = _castPath, toKey$5 = _toKey;
function baseGet$4(object, path) {
  path = castPath$5(path, object);
  var index2 = 0, length = path.length;
  while (object != null && index2 < length) {
    object = object[toKey$5(path[index2++])];
  }
  return index2 && index2 == length ? object : void 0;
}
var _baseGet = baseGet$4;
var getNative$4 = _getNative;
var defineProperty$2 = function() {
  try {
    var func = getNative$4(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty$k = defineProperty$2;
var defineProperty$1 = _defineProperty$k;
function baseAssignValue$2(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$2;
var baseAssignValue$1 = _baseAssignValue, eq$1 = eq_1;
var objectProto$a = Object.prototype;
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
function assignValue$3(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$8.call(object, key) && eq$1(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue$1(object, key, value);
  }
}
var _assignValue = assignValue$3;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$3(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$3;
var assignValue$2 = _assignValue, castPath$4 = _castPath, isIndex$2 = _isIndex, isObject$8 = isObject_1, toKey$4 = _toKey;
function baseSet$1(object, path, value, customizer) {
  if (!isObject$8(object)) {
    return object;
  }
  path = castPath$4(path, object);
  var index2 = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index2 < length) {
    var key = toKey$4(path[index2]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index2 != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject$8(objValue) ? objValue : isIndex$2(path[index2 + 1]) ? [] : {};
      }
    }
    assignValue$2(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
var _baseSet = baseSet$1;
var baseGet$3 = _baseGet, baseSet = _baseSet, castPath$3 = _castPath;
function basePickBy$1(object, paths, predicate) {
  var index2 = -1, length = paths.length, result = {};
  while (++index2 < length) {
    var path = paths[index2], value = baseGet$3(object, path);
    if (predicate(value, path)) {
      baseSet(result, castPath$3(path, object), value);
    }
  }
  return result;
}
var _basePickBy = basePickBy$1;
function baseHasIn$1(object, key) {
  return object != null && key in Object(object);
}
var _baseHasIn = baseHasIn$1;
var baseGetTag$3 = _baseGetTag, isObjectLike$6 = isObjectLike_1;
var argsTag$3 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$6(value) && baseGetTag$3(value) == argsTag$3;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$5 = isObjectLike_1;
var objectProto$9 = Object.prototype;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$9.propertyIsEnumerable;
var isArguments$3 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$5(value) && hasOwnProperty$7.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments_1 = isArguments$3;
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength$3(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var isLength_1 = isLength$3;
var castPath$2 = _castPath, isArguments$2 = isArguments_1, isArray$6 = isArray_1, isIndex$1 = _isIndex, isLength$2 = isLength_1, toKey$3 = _toKey;
function hasPath$1(object, path, hasFunc) {
  path = castPath$2(path, object);
  var index2 = -1, length = path.length, result = false;
  while (++index2 < length) {
    var key = toKey$3(path[index2]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index2 != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength$2(length) && isIndex$1(key, length) && (isArray$6(object) || isArguments$2(object));
}
var _hasPath = hasPath$1;
var baseHasIn = _baseHasIn, hasPath = _hasPath;
function hasIn$2(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}
var hasIn_1 = hasIn$2;
var basePickBy = _basePickBy, hasIn$1 = hasIn_1;
function basePick$1(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn$1(object, path);
  });
}
var _basePick = basePick$1;
function arrayPush$3(array, values) {
  var index2 = -1, length = values.length, offset = array.length;
  while (++index2 < length) {
    array[offset + index2] = values[index2];
  }
  return array;
}
var _arrayPush = arrayPush$3;
var Symbol$3 = _Symbol, isArguments$1 = isArguments_1, isArray$5 = isArray_1;
var spreadableSymbol = Symbol$3 ? Symbol$3.isConcatSpreadable : void 0;
function isFlattenable$1(value) {
  return isArray$5(value) || isArguments$1(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var _isFlattenable = isFlattenable$1;
var arrayPush$2 = _arrayPush, isFlattenable = _isFlattenable;
function baseFlatten$1(array, depth, predicate, isStrict, result) {
  var index2 = -1, length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index2 < length) {
    var value = array[index2];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten$1(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush$2(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
var _baseFlatten = baseFlatten$1;
var baseFlatten = _baseFlatten;
function flatten$1(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}
var flatten_1 = flatten$1;
function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var _apply = apply$1;
var apply = _apply;
var nativeMax$2 = Math.max;
function overRest$1(func, start, transform) {
  start = nativeMax$2(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index2 = -1, length = nativeMax$2(args.length - start, 0), array = Array(length);
    while (++index2 < length) {
      array[index2] = args[start + index2];
    }
    index2 = -1;
    var otherArgs = Array(start + 1);
    while (++index2 < start) {
      otherArgs[index2] = args[index2];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
var _overRest = overRest$1;
function constant$1(value) {
  return function() {
    return value;
  };
}
var constant_1 = constant$1;
function identity$3(value) {
  return value;
}
var identity_1 = identity$3;
var constant = constant_1, defineProperty = _defineProperty$k, identity$2 = identity_1;
var baseSetToString$1 = !defineProperty ? identity$2 : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var _baseSetToString = baseSetToString$1;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut$1(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var _shortOut = shortOut$1;
var baseSetToString = _baseSetToString, shortOut = _shortOut;
var setToString$1 = shortOut(baseSetToString);
var _setToString = setToString$1;
var flatten = flatten_1, overRest = _overRest, setToString = _setToString;
function flatRest$2(func) {
  return setToString(overRest(func, void 0, flatten), func + "");
}
var _flatRest = flatRest$2;
var basePick = _basePick, flatRest$1 = _flatRest;
var pick = flatRest$1(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});
var pick_1 = pick;
var ListCache$2 = _ListCache;
function stackClear$1() {
  this.__data__ = new ListCache$2();
  this.size = 0;
}
var _stackClear = stackClear$1;
function stackDelete$1(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var _stackDelete = stackDelete$1;
function stackGet$1(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$1;
function stackHas$1(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$1;
var ListCache$1 = _ListCache, Map$2 = _Map, MapCache$1 = _MapCache;
var LARGE_ARRAY_SIZE = 200;
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$1(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var _stackSet = stackSet$1;
var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
function Stack$3(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack$3.prototype.clear = stackClear;
Stack$3.prototype["delete"] = stackDelete;
Stack$3.prototype.get = stackGet;
Stack$3.prototype.has = stackHas;
Stack$3.prototype.set = stackSet;
var _Stack = Stack$3;
function arrayEach$1(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (iteratee(array[index2], index2, array) === false) {
      break;
    }
  }
  return array;
}
var _arrayEach = arrayEach$1;
var assignValue$1 = _assignValue, baseAssignValue = _baseAssignValue;
function copyObject$5(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index2 = -1, length = props.length;
  while (++index2 < length) {
    var key = props[index2];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue$1(object, key, newValue);
    }
  }
  return object;
}
var _copyObject = copyObject$5;
function baseTimes$1(n2, iteratee) {
  var index2 = -1, result = Array(n2);
  while (++index2 < n2) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var _baseTimes = baseTimes$1;
var isBuffer$3 = { exports: {} };
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
(function(module, exports) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer2;
})(isBuffer$3, isBuffer$3.exports);
var baseGetTag$2 = _baseGetTag, isLength$1 = isLength_1, isObjectLike$4 = isObjectLike_1;
var argsTag$2 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", errorTag$2 = "[object Error]", funcTag$1 = "[object Function]", mapTag$5 = "[object Map]", numberTag$3 = "[object Number]", objectTag$4 = "[object Object]", regexpTag$3 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$3 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] = typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$5] = typedArrayTags[numberTag$3] = typedArrayTags[objectTag$4] = typedArrayTags[regexpTag$3] = typedArrayTags[setTag$5] = typedArrayTags[stringTag$3] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike$4(value) && isLength$1(value.length) && !!typedArrayTags[baseGetTag$2(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$3(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$3;
var _nodeUtil = { exports: {} };
(function(module, exports) {
  var freeGlobal2 = _freeGlobal;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var baseIsTypedArray = _baseIsTypedArray, baseUnary$2 = _baseUnary, nodeUtil$2 = _nodeUtil.exports;
var nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray;
var isTypedArray$2 = nodeIsTypedArray ? baseUnary$2(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$2;
var baseTimes = _baseTimes, isArguments = isArguments_1, isArray$4 = isArray_1, isBuffer$2 = isBuffer$3.exports, isIndex = _isIndex, isTypedArray$1 = isTypedArray_1;
var objectProto$8 = Object.prototype;
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
function arrayLikeKeys$2(value, inherited) {
  var isArr = isArray$4(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer$2(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$6.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$2;
var objectProto$7 = Object.prototype;
function isPrototype$3(value) {
  var Ctor = value && value.constructor, proto2 = typeof Ctor == "function" && Ctor.prototype || objectProto$7;
  return value === proto2;
}
var _isPrototype = isPrototype$3;
function overArg$2(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$2;
var overArg$1 = _overArg;
var nativeKeys$1 = overArg$1(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype$2 = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function baseKeys$1(object) {
  if (!isPrototype$2(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$5.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$1;
var isFunction = isFunction_1, isLength = isLength_1;
function isArrayLike$2(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
var isArrayLike_1 = isArrayLike$2;
var arrayLikeKeys$1 = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike$1 = isArrayLike_1;
function keys$4(object) {
  return isArrayLike$1(object) ? arrayLikeKeys$1(object) : baseKeys(object);
}
var keys_1 = keys$4;
var copyObject$4 = _copyObject, keys$3 = keys_1;
function baseAssign$1(object, source) {
  return object && copyObject$4(source, keys$3(source), object);
}
var _baseAssign = baseAssign$1;
function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$1;
var isObject$7 = isObject_1, isPrototype$1 = _isPrototype, nativeKeysIn = _nativeKeysIn;
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function baseKeysIn$1(object) {
  if (!isObject$7(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype$1(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$4.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike = isArrayLike_1;
function keysIn$3(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var keysIn_1 = keysIn$3;
var copyObject$3 = _copyObject, keysIn$2 = keysIn_1;
function baseAssignIn$1(object, source) {
  return object && copyObject$3(source, keysIn$2(source), object);
}
var _baseAssignIn = baseAssignIn$1;
var _cloneBuffer = { exports: {} };
(function(module, exports) {
  var root2 = _root;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
  function cloneBuffer2(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  module.exports = cloneBuffer2;
})(_cloneBuffer, _cloneBuffer.exports);
function copyArray$1(source, array) {
  var index2 = -1, length = source.length;
  array || (array = Array(length));
  while (++index2 < length) {
    array[index2] = source[index2];
  }
  return array;
}
var _copyArray = copyArray$1;
function arrayFilter$1(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index2 < length) {
    var value = array[index2];
    if (predicate(value, index2, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter$1;
function stubArray$2() {
  return [];
}
var stubArray_1 = stubArray$2;
var arrayFilter = _arrayFilter, stubArray$1 = stubArray_1;
var objectProto$4 = Object.prototype;
var propertyIsEnumerable = objectProto$4.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols$3 = !nativeGetSymbols$1 ? stubArray$1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var _getSymbols = getSymbols$3;
var copyObject$2 = _copyObject, getSymbols$2 = _getSymbols;
function copySymbols$1(source, object) {
  return copyObject$2(source, getSymbols$2(source), object);
}
var _copySymbols = copySymbols$1;
var overArg = _overArg;
var getPrototype$3 = overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$3;
var arrayPush$1 = _arrayPush, getPrototype$2 = _getPrototype, getSymbols$1 = _getSymbols, stubArray = stubArray_1;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush$1(result, getSymbols$1(object));
    object = getPrototype$2(object);
  }
  return result;
};
var _getSymbolsIn = getSymbolsIn$2;
var copyObject$1 = _copyObject, getSymbolsIn$1 = _getSymbolsIn;
function copySymbolsIn$1(source, object) {
  return copyObject$1(source, getSymbolsIn$1(source), object);
}
var _copySymbolsIn = copySymbolsIn$1;
var arrayPush = _arrayPush, isArray$3 = isArray_1;
function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$3(object) ? result : arrayPush(result, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys$2;
var baseGetAllKeys$1 = _baseGetAllKeys, getSymbols = _getSymbols, keys$2 = keys_1;
function getAllKeys$2(object) {
  return baseGetAllKeys$1(object, keys$2, getSymbols);
}
var _getAllKeys = getAllKeys$2;
var baseGetAllKeys = _baseGetAllKeys, getSymbolsIn = _getSymbolsIn, keysIn$1 = keysIn_1;
function getAllKeysIn$2(object) {
  return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
}
var _getAllKeysIn = getAllKeysIn$2;
var getNative$3 = _getNative, root$5 = _root;
var DataView$1 = getNative$3(root$5, "DataView");
var _DataView = DataView$1;
var getNative$2 = _getNative, root$4 = _root;
var Promise$2 = getNative$2(root$4, "Promise");
var _Promise = Promise$2;
var getNative$1 = _getNative, root$3 = _root;
var Set$2 = getNative$1(root$3, "Set");
var _Set = Set$2;
var getNative = _getNative, root$2 = _root;
var WeakMap$2 = getNative(root$2, "WeakMap");
var _WeakMap = WeakMap$2;
var DataView = _DataView, Map$1 = _Map, Promise$1 = _Promise, Set$1 = _Set, WeakMap$1 = _WeakMap, baseGetTag$1 = _baseGetTag, toSource = _toSource;
var mapTag$4 = "[object Map]", objectTag$3 = "[object Object]", promiseTag = "[object Promise]", setTag$4 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$3 = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$1);
var getTag$4 = baseGetTag$1;
if (DataView && getTag$4(new DataView(new ArrayBuffer(1))) != dataViewTag$3 || Map$1 && getTag$4(new Map$1()) != mapTag$4 || Promise$1 && getTag$4(Promise$1.resolve()) != promiseTag || Set$1 && getTag$4(new Set$1()) != setTag$4 || WeakMap$1 && getTag$4(new WeakMap$1()) != weakMapTag$1) {
  getTag$4 = function(value) {
    var result = baseGetTag$1(value), Ctor = result == objectTag$3 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$3;
        case mapCtorString:
          return mapTag$4;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$4;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var _getTag = getTag$4;
var objectProto$3 = Object.prototype;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
function initCloneArray$1(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty$3.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var _initCloneArray = initCloneArray$1;
var root$1 = _root;
var Uint8Array$3 = root$1.Uint8Array;
var _Uint8Array = Uint8Array$3;
var Uint8Array$2 = _Uint8Array;
function cloneArrayBuffer$3(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$2(result).set(new Uint8Array$2(arrayBuffer));
  return result;
}
var _cloneArrayBuffer = cloneArrayBuffer$3;
var cloneArrayBuffer$2 = _cloneArrayBuffer;
function cloneDataView$1(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$2(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var _cloneDataView = cloneDataView$1;
var reFlags = /\w*$/;
function cloneRegExp$1(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var _cloneRegExp = cloneRegExp$1;
var Symbol$2 = _Symbol;
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function cloneSymbol$1(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}
var _cloneSymbol = cloneSymbol$1;
var cloneArrayBuffer$1 = _cloneArrayBuffer;
function cloneTypedArray$1(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$1(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray$1;
var cloneArrayBuffer = _cloneArrayBuffer, cloneDataView = _cloneDataView, cloneRegExp = _cloneRegExp, cloneSymbol = _cloneSymbol, cloneTypedArray = _cloneTypedArray;
var boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", mapTag$3 = "[object Map]", numberTag$2 = "[object Number]", regexpTag$2 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$2 = "[object String]", symbolTag$2 = "[object Symbol]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag$1(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$2:
      return cloneArrayBuffer(object);
    case boolTag$2:
    case dateTag$2:
      return new Ctor(+object);
    case dataViewTag$2:
      return cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$3:
      return new Ctor();
    case numberTag$2:
    case stringTag$2:
      return new Ctor(object);
    case regexpTag$2:
      return cloneRegExp(object);
    case setTag$3:
      return new Ctor();
    case symbolTag$2:
      return cloneSymbol(object);
  }
}
var _initCloneByTag = initCloneByTag$1;
var isObject$6 = isObject_1;
var objectCreate = Object.create;
var baseCreate$1 = function() {
  function object() {
  }
  return function(proto2) {
    if (!isObject$6(proto2)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto2);
    }
    object.prototype = proto2;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var _baseCreate = baseCreate$1;
var baseCreate = _baseCreate, getPrototype$1 = _getPrototype, isPrototype = _isPrototype;
function initCloneObject$1(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype$1(object)) : {};
}
var _initCloneObject = initCloneObject$1;
var getTag$3 = _getTag, isObjectLike$3 = isObjectLike_1;
var mapTag$2 = "[object Map]";
function baseIsMap$1(value) {
  return isObjectLike$3(value) && getTag$3(value) == mapTag$2;
}
var _baseIsMap = baseIsMap$1;
var baseIsMap = _baseIsMap, baseUnary$1 = _baseUnary, nodeUtil$1 = _nodeUtil.exports;
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap;
var isMap_1 = isMap$1;
var getTag$2 = _getTag, isObjectLike$2 = isObjectLike_1;
var setTag$2 = "[object Set]";
function baseIsSet$1(value) {
  return isObjectLike$2(value) && getTag$2(value) == setTag$2;
}
var _baseIsSet = baseIsSet$1;
var baseIsSet = _baseIsSet, baseUnary = _baseUnary, nodeUtil = _nodeUtil.exports;
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet_1 = isSet$1;
var Stack$2 = _Stack, arrayEach = _arrayEach, assignValue = _assignValue, baseAssign = _baseAssign, baseAssignIn = _baseAssignIn, cloneBuffer = _cloneBuffer.exports, copyArray = _copyArray, copySymbols = _copySymbols, copySymbolsIn = _copySymbolsIn, getAllKeys$1 = _getAllKeys, getAllKeysIn$1 = _getAllKeysIn, getTag$1 = _getTag, initCloneArray = _initCloneArray, initCloneByTag = _initCloneByTag, initCloneObject = _initCloneObject, isArray$2 = isArray_1, isBuffer$1 = isBuffer$3.exports, isMap = isMap_1, isObject$5 = isObject_1, isSet = isSet_1, keys$1 = keys_1, keysIn = keysIn_1;
var CLONE_DEEP_FLAG$2 = 1, CLONE_FLAT_FLAG$1 = 2, CLONE_SYMBOLS_FLAG$2 = 4;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag$1 = "[object Map]", numberTag$1 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$1 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] = cloneableTags[boolTag$1] = cloneableTags[dateTag$1] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$1] = cloneableTags[numberTag$1] = cloneableTags[objectTag$2] = cloneableTags[regexpTag$1] = cloneableTags[setTag$1] = cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag$1] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone$2(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$2, isFlat = bitmask & CLONE_FLAT_FLAG$1, isFull = bitmask & CLONE_SYMBOLS_FLAG$2;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject$5(value)) {
    return value;
  }
  var isArr = isArray$2(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag$1(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer$1(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$2 || tag == argsTag$1 || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack$2());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone$2(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone$2(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn$1 : getAllKeys$1 : isFlat ? keysIn : keys$1;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone$2(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var _baseClone = baseClone$2;
function last$1(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
var last_1 = last$1;
function baseSlice$1(array, start, end) {
  var index2 = -1, length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index2 < length) {
    result[index2] = array[index2 + start];
  }
  return result;
}
var _baseSlice = baseSlice$1;
var baseGet$2 = _baseGet, baseSlice = _baseSlice;
function parent$1(object, path) {
  return path.length < 2 ? object : baseGet$2(object, baseSlice(path, 0, -1));
}
var _parent = parent$1;
var castPath$1 = _castPath, last = last_1, parent = _parent, toKey$2 = _toKey;
function baseUnset$1(object, path) {
  path = castPath$1(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey$2(last(path))];
}
var _baseUnset = baseUnset$1;
var baseGetTag = _baseGetTag, getPrototype = _getPrototype, isObjectLike$1 = isObjectLike_1;
var objectTag$1 = "[object Object]";
var funcProto = Function.prototype, objectProto$2 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject$2(value) {
  if (!isObjectLike$1(value) || baseGetTag(value) != objectTag$1) {
    return false;
  }
  var proto2 = getPrototype(value);
  if (proto2 === null) {
    return true;
  }
  var Ctor = hasOwnProperty$2.call(proto2, "constructor") && proto2.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var isPlainObject_1 = isPlainObject$2;
var isPlainObject$1 = isPlainObject_1;
function customOmitClone$1(value) {
  return isPlainObject$1(value) ? void 0 : value;
}
var _customOmitClone = customOmitClone$1;
var arrayMap = _arrayMap, baseClone$1 = _baseClone, baseUnset = _baseUnset, castPath = _castPath, copyObject = _copyObject, customOmitClone = _customOmitClone, flatRest = _flatRest, getAllKeysIn = _getAllKeysIn;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone$1(result, CLONE_DEEP_FLAG$1 | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG$1, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});
var omit_1 = omit;
var baseClone = _baseClone;
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var cloneDeep_1 = cloneDeep;
const SplitBar$1 = (props) => {
  const {
    onScaling = (scaleData) => void 0,
    barLocation
  } = props;
  const handleMouseDown = (ev) => {
    const {
      pageX,
      pageY
    } = ev;
    onScaling({
      enable: true,
      startX: pageX,
      startY: pageY
    });
  };
  const handleMouseUp = (ev) => {
    onScaling({
      enable: false,
      startX: 0,
      startY: 0
    });
  };
  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  const splitStyles = () => {
    const splitStyle = {};
    if (barLocation === "start") {
      splitStyle.top = "0px";
      splitStyle.left = "0px";
    } else {
      splitStyle.bottom = "0px";
      splitStyle.right = "0px";
    }
    return splitStyle;
  };
  return /* @__PURE__ */ jsx("div", {
    style: __spreadValues({}, splitStyles()),
    className: "split-item",
    onMouseDown: handleMouseDown,
    children: /* @__PURE__ */ jsx("div", {
      className: "split-bar"
    })
  });
};
const ScaleItem = (props) => {
  const {
    index: index2 = -1,
    barLocation = "end",
    children,
    layouts = {},
    onLayoutChange = (layout2, index22) => void 0,
    minWidth = 0,
    maxWidth,
    minHeight = 0,
    maxHeight,
    enableScale = true,
    direction = "horizontal",
    className,
    onScaling = (val) => void 0,
    panelOffset = {}
  } = props;
  const refItem = useRef(null);
  const layout = layouts[index2];
  const [scaleData, setScaleData] = useState({
    enable: false,
    startX: 0,
    startY: 0,
    defaultLayout: null
  });
  let itemStyle = __spreadValues({}, layout);
  if ((layout == null ? void 0 : layout.flex) === 1) {
    itemStyle = omit_1(layout, ["width", "height"]);
  } else {
    itemStyle = omit_1(layout, ["flex"]);
  }
  const handleScaling = (scaleData2) => {
    setScaleData(__spreadProps(__spreadValues({}, scaleData2), {
      defaultLayout: cloneDeep_1(layout)
    }));
    onScaling(scaleData2.enable);
  };
  const getLayoutsWidths = (layouts2) => {
    let layoutsWidth = 0;
    Object.entries(layouts2).forEach(([key, item]) => {
      var _a;
      if (Number(key) <= index2 && typeof (item == null ? void 0 : item.width) === "number") {
        layoutsWidth += item.width;
      } else if (item.flex !== 1) {
        layoutsWidth += typeof (item == null ? void 0 : item.width) === "number" ? item.width : 0;
      } else if (typeof ((_a = item == null ? void 0 : item.nodeProps) == null ? void 0 : _a.minWidth) === "number") {
        layoutsWidth += item.nodeProps.minWidth;
      }
    });
    return layoutsWidth;
  };
  const getLayoutsHeights = (layouts2) => {
    let layoutsHeight = 0;
    Object.entries(layouts2).forEach(([key, item]) => {
      var _a;
      if (Number(key) <= index2 && typeof (item == null ? void 0 : item.height) === "number") {
        layoutsHeight += item.height;
      } else if (item.flex !== 1) {
        layoutsHeight += typeof (item == null ? void 0 : item.height) === "number" ? item.height : 0;
      } else if (typeof ((_a = item == null ? void 0 : item.nodeProps) == null ? void 0 : _a.minHeight) === "number") {
        layoutsHeight += item.nodeProps.minHeight;
      }
    });
    return layoutsHeight;
  };
  const handleMouseMove = (ev) => {
    if (scaleData.enable === true) {
      const {
        pageX,
        pageY
      } = ev;
      const newLayout = __spreadValues({}, layout);
      const {
        width: preWidth = 0,
        height: preHeight = 0
      } = scaleData.defaultLayout || {};
      if (direction === "horizontal") {
        const scaledX = pageX - scaleData.startX;
        const parentWidth = (panelOffset == null ? void 0 : panelOffset.width) || 0;
        newLayout.width = preWidth + (barLocation === "start" ? -scaledX : scaledX);
        if (minWidth !== void 0 && newLayout.width <= minWidth) {
          newLayout.width = minWidth;
        }
        if (maxWidth !== void 0 && newLayout.width >= maxWidth) {
          newLayout.width = maxWidth;
        }
        const layoutsWidth = getLayoutsWidths(__spreadProps(__spreadValues({}, layouts), {
          [index2]: scaleData.defaultLayout
        }));
        if (scaledX > parentWidth - layoutsWidth) {
          newLayout.width = preWidth + parentWidth - layoutsWidth;
        }
      } else if (direction === "vertical") {
        const scaledY = pageY - scaleData.startY;
        const parentHeight = (panelOffset == null ? void 0 : panelOffset.height) || 0;
        newLayout.height = preHeight + (barLocation === "start" ? -scaledY : scaledY);
        if (minHeight !== void 0 && newLayout.height <= minHeight) {
          newLayout.height = minHeight;
        }
        if (maxHeight !== void 0 && newLayout.height >= maxHeight) {
          newLayout.height = maxHeight;
        }
        const layoutsHeight = getLayoutsHeights(__spreadProps(__spreadValues({}, layouts), {
          [index2]: scaleData.defaultLayout
        }));
        if (scaledY > parentHeight - layoutsHeight) {
          newLayout.height = preHeight + parentHeight - layoutsHeight;
        }
      }
      onLayoutChange(newLayout, index2);
    }
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [scaleData.enable, layout]);
  return /* @__PURE__ */ jsxs("div", {
    ref: refItem,
    style: itemStyle,
    className: cn({
      "scale-item": true
    }, className),
    children: [/* @__PURE__ */ jsx("div", {
      className: "scale-item-content",
      children
    }), enableScale && /* @__PURE__ */ jsx(SplitBar$1, {
      onScaling: handleScaling,
      barLocation
    })]
  });
};
var index$8 = "";
const ScalePanel = (props) => {
  const {
    children,
    style,
    className = void 0,
    direction = "horizontal",
    defaultLayouts = {},
    layouts,
    onLayoutsChange = (layout) => void 0
  } = props;
  const [_layouts, setLayouts] = useState(defaultLayouts);
  const [scaling, setScaling] = useState(false);
  const panelRef = useRef(null);
  const [panelOffset, setPanelOffset] = useState({
    width: 0,
    height: 0
  });
  const resizeObserver = new index$9((entries) => {
    for (const entry of entries) {
      const {
        width: width2,
        height: height2
      } = entry.contentRect;
      setPanelOffset({
        width: width2,
        height: height2
      });
    }
  });
  useEffect(() => {
    resizeObserver.observe(panelRef.current);
  }, []);
  useEffect(() => {
    const newLayouts = layouts !== void 0 ? layouts : __spreadValues({}, _layouts);
    children == null ? void 0 : children.forEach((item, index2) => {
      newLayouts[index2] = __spreadValues({
        nodeProps: pick_1(item.props, ["minWidth", "maxWidth", "minHeight", "maxHeight"])
      }, newLayouts[index2]);
    });
    setLayouts(newLayouts);
  }, [layouts]);
  const handleLayoutChange = (newlayout, index2) => {
    setLayouts(__spreadProps(__spreadValues({}, _layouts), {
      [index2]: newlayout
    }));
    onLayoutsChange(_layouts, panelOffset);
  };
  return /* @__PURE__ */ jsx("div", {
    ref: panelRef,
    className: cn(className, {
      "apipost-scale": true,
      [direction]: true,
      scaling
    }),
    style,
    children: Array.isArray(children) ? children.map((d, index2) => /* @__PURE__ */ jsx(ScaleItem, __spreadValues({
      panelOffset,
      layouts: _layouts,
      onLayoutChange: handleLayoutChange,
      onScaling: setScaling,
      direction,
      index: index2
    }, d.props), index2)) : children
  });
};
var Scale = {
  ScalePanel,
  ScaleItem
};
var SvgArrowDown = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIzIiB2aWV3Qm94PSIwIDAgNiAzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMSAwLjVMMi42NzYzMiAyLjE0OTI5QzIuODczMTkgMi4zNDI5NyAzLjE4OTc5IDIuMzQwMzggMy4zODM0NSAyLjE0MzQ5TDUgMC41IiAgIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K";
const Context = React__default.createContext(null);
const Option = (props) => {
  const {
    style,
    className,
    disabled = false,
    value,
    children
  } = props;
  const {
    selectedValue,
    selectDisabled = false,
    onOptionClick
  } = useContext(Context);
  const handleOptionClick = () => {
    if (disabled || selectDisabled) {
      return;
    }
    onOptionClick(children, value);
  };
  return /* @__PURE__ */ jsx("div", {
    style,
    onClick: handleOptionClick,
    className: cn(className, {
      "select-option": true,
      "select-option-disabled": disabled === true,
      selected: selectedValue === value,
      disabled: disabled === true
    }),
    children
  });
};
var index$7 = "";
const PERFIX$2 = "apipost-select";
const {
  Provider: Provider$2
} = Context;
const Select = React__default.forwardRef((props, ref) => {
  const _a = props, {
    defaultValue,
    value,
    placeholder = "\u8BF7\u9009\u62E9",
    onChange,
    onVisibleChange = () => void 0,
    labelInValue = false,
    style,
    className,
    popupStyle,
    popupClassName,
    formatRender,
    dropdownRender,
    children,
    disabled = false
  } = _a, restProps = __objRest(_a, [
    "defaultValue",
    "value",
    "placeholder",
    "onChange",
    "onVisibleChange",
    "labelInValue",
    "style",
    "className",
    "popupStyle",
    "popupClassName",
    "formatRender",
    "dropdownRender",
    "children",
    "disabled"
  ]);
  const triggerRef = useRef(null);
  const [selectValue, setSelectValue] = useState(defaultValue);
  const mergedValue = value !== void 0 ? value : selectValue;
  const childrenList = Array.isArray(children) ? children.reduce((a, b) => a.concat(b), []) : [children];
  const getPopup = () => {
    const popup = typeof dropdownRender === "function" ? dropdownRender(childrenList) : childrenList;
    return /* @__PURE__ */ jsx("div", __spreadProps(__spreadValues({}, restProps), {
      children: popup
    }));
  };
  const onOptionClick = (text2, value2) => {
    var _a2;
    if (labelInValue === true) {
      setSelectValue(value2);
      onChange == null ? void 0 : onChange({
        text: text2,
        value: mergedValue
      });
    } else {
      setSelectValue(value2);
      onChange == null ? void 0 : onChange(mergedValue);
    }
    (_a2 = triggerRef == null ? void 0 : triggerRef.current) == null ? void 0 : _a2.setPopupVisible(false);
  };
  let selectedText = placeholder;
  childrenList.forEach((item) => {
    var _a2;
    if (item.props.value === mergedValue) {
      selectedText = (_a2 = item == null ? void 0 : item.props) == null ? void 0 : _a2.children;
    }
  });
  return /* @__PURE__ */ jsx(Provider$2, {
    value: {
      selectedValue: mergedValue,
      selectDisabled: disabled,
      onOptionClick
    },
    children: /* @__PURE__ */ jsx(Trigger, {
      ref: triggerRef,
      autoAdjustWidth: true,
      disabled,
      style: popupStyle,
      placement: "bottom-start",
      outsideClose: true,
      popup: getPopup(),
      trigger: "click",
      className: cn(`${PERFIX$2}-popup`, popupClassName),
      onVisibleChange,
      children: /* @__PURE__ */ jsx("div", {
        ref,
        style,
        className: cn(PERFIX$2, className, {
          disabled: disabled === true,
          unselect: mergedValue === void 0
        }),
        children: /* @__PURE__ */ jsxs("div", {
          className: `${PERFIX$2}-view`,
          children: [/* @__PURE__ */ jsx("div", {
            className: `${PERFIX$2}-view-text`,
            children: formatRender !== void 0 ? formatRender(mergedValue, childrenList, selectedText) : selectedText
          }), /* @__PURE__ */ jsx("div", {
            className: `${PERFIX$2}-view-suffix`,
            children: /* @__PURE__ */ jsx(SvgArrowDown, {})
          })]
        })
      })
    })
  });
});
const SelectComponent = Select;
SelectComponent.Option = Option;
var root = _root;
var now$1 = function() {
  return root.Date.now();
};
var now_1 = now$1;
var reWhitespace = /\s/;
function trimmedEndIndex$1(string) {
  var index2 = string.length;
  while (index2-- && reWhitespace.test(string.charAt(index2))) {
  }
  return index2;
}
var _trimmedEndIndex = trimmedEndIndex$1;
var trimmedEndIndex = _trimmedEndIndex;
var reTrimStart = /^\s+/;
function baseTrim$1(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var _baseTrim = baseTrim$1;
var baseTrim = _baseTrim, isObject$4 = isObject_1, isSymbol = isSymbol_1;
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber$2(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$4(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$4(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_1 = toNumber$2;
var isObject$3 = isObject_1, now = now_1, toNumber$1 = toNumber_1;
var FUNC_ERROR_TEXT$1 = "Expected a function";
var nativeMax$1 = Math.max, nativeMin = Math.min;
function debounce$1(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber$1(wait) || 0;
  if (isObject$3(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax$1(toNumber$1(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel2() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel2;
  debounced.flush = flush;
  return debounced;
}
var debounce_1 = debounce$1;
var LoadingSvg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzkzNTBfMTAxMjAwKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC40MTc0NyAzLjM1Mzg1QzYuMTI3NTIgMS44NTQxNyA4LjI0Mzg3IDAuODk1MjY5IDEwLjQ5ODkgMC41OTgzODlDMTIuNzUzOSAwLjMwMTUwOSAxNS4wNDYzIDAuNjc5OTg5IDE3LjA4NjMgMS42ODU5N0MxOS4xMjYyIDIuNjkxOTUgMjAuODIyIDQuMjgwMjQgMjEuOTU5MiA2LjI1TDE5LjM2MTIgNy43NUMxOC41MjA2IDYuMjk0MDkgMTcuMjY3MiA1LjEyMDE0IDE1Ljc1OTQgNC4zNzY1OUMxNC4yNTE2IDMuNjMzMDQgMTIuNTU3MiAzLjM1MzI5IDEwLjg5MDUgMy41NzI3MkM5LjIyMzcyIDMuNzkyMTYgNy42NTk0NiA0LjUwMDkxIDYuMzk1NTEgNS42MDkzN0M1LjEzMTU2IDYuNzE3ODIgNC4yMjQ2OSA4LjE3NjE4IDMuNzg5NTggOS44MDAwNEMzLjM1NDQ3IDExLjQyMzkgMy40MTA2NiAxMy4xNDAzIDMuOTUxMDQgMTQuNzMyMkM0LjQ5MTQzIDE2LjMyNDIgNS40OTE3NCAxNy43MjAxIDYuODI1NDggMTguNzQzNUM4LjE1OTIyIDE5Ljc2NjkgOS43NjY0OCAyMC4zNzE5IDExLjQ0NCAyMC40ODE4QzEzLjEyMTYgMjAuNTkxOCAxNC43OTQgMjAuMjAxOCAxNi4yNDk5IDE5LjM2MTJMMTcuNzQ5OSAyMS45NTkzQzE1Ljc4MDIgMjMuMDk2NSAxMy41MTc0IDIzLjYyNDEgMTEuMjQ3OCAyMy40NzU0QzguOTc4MiAyMy4zMjY2IDYuODAzNjYgMjIuNTA4MiA0Ljk5OTE5IDIxLjEyMzZDMy4xOTQ3MiAxOS43Mzg5IDEuODQxMzYgMTcuODUwMyAxLjExMDI1IDE1LjY5NjZDMC4zNzkxNDMgMTMuNTQyOCAwLjMwMzEyMiAxMS4yMjA2IDAuODkxODAyIDkuMDIzNTlDMS40ODA0OCA2LjgyNjYgMi43MDc0MiA0Ljg1MzUyIDQuNDE3NDcgMy4zNTM4NVoiIGZpbGw9IiMyODdlZmYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF85MzUwXzEwMTIwMCI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K";
var index$6 = "";
const prefixCls = "apipost-spin";
function Spin(props, ref) {
  const {
    style,
    className,
    children,
    loading: propLoading,
    size: size2 = 24,
    icon,
    element,
    tip,
    delay
  } = props;
  const [loading, setLoading] = useState(delay ? false : propLoading);
  const debouncedSetLoading = useCallback(debounce_1(setLoading, delay), [delay]);
  const _currentLoading = delay ? loading : propLoading;
  useEffect(() => {
    delay && debouncedSetLoading(propLoading);
    return () => {
      debouncedSetLoading && debouncedSetLoading.cancel();
    };
  }, [propLoading]);
  const loadingIcon = /* @__PURE__ */ jsx("span", {
    className: `${prefixCls}-icon`,
    style: {
      width: size2,
      height: size2
    },
    children: icon ? React__default.cloneElement(icon, {
      className: cn(`${prefixCls}-icon-loading`),
      style: {
        fontSize: size2
      }
    }) : element || /* @__PURE__ */ jsx("div", {
      className: "apipost-icon apipost-icon-loading",
      style: {
        width: size2,
        height: size2
      },
      children: /* @__PURE__ */ jsx(LoadingSvg, {
        style: {
          width: size2,
          height: size2
        }
      })
    })
  });
  return /* @__PURE__ */ jsx("div", {
    ref,
    className: cn(prefixCls, {
      [`${prefixCls}-loading`]: _currentLoading,
      [`${prefixCls}-with-tip`]: tip && !children
    }, className),
    style,
    children: children ? /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsx("div", {
        className: `${prefixCls}-children`,
        children
      }), _currentLoading && /* @__PURE__ */ jsx("div", {
        className: `${prefixCls}-loading-layer`,
        style: {
          fontSize: size2
        },
        children: /* @__PURE__ */ jsxs("span", {
          className: `${prefixCls}-loading-layer-inner`,
          children: [loadingIcon, tip ? /* @__PURE__ */ jsx("div", {
            className: `${prefixCls}-tip`,
            children: tip
          }) : null]
        })
      })]
    }) : /* @__PURE__ */ jsxs(Fragment, {
      children: [loadingIcon, tip && /* @__PURE__ */ jsx("div", {
        className: `${prefixCls}-tip`,
        children: tip
      })]
    })
  });
}
const SpinComponent = React__default.forwardRef(Spin);
SpinComponent.displayName = "Spin";
var index$5 = "";
const PERFIX$1 = "apipost-switch";
const Switch = (props) => {
  const {
    defaultChecked = false,
    style,
    className,
    disabled = false,
    onChange = () => void 0,
    size: size2 = "default"
  } = props;
  const [checked, setChecked] = useState(defaultChecked);
  const mergedChecked = "checked" in props ? props.checked : checked;
  const handleClick = (event) => {
    if (disabled === true) {
      return;
    }
    if (!("checked" in props)) {
      setChecked(!mergedChecked);
    }
    onChange && onChange(!mergedChecked, event);
  };
  return /* @__PURE__ */ jsx("button", {
    className: cn(className, {
      [PERFIX$1]: true,
      checked: mergedChecked === true,
      [size2]: size2 !== void 0,
      disabled: disabled === true
    }),
    style,
    onClick: handleClick,
    children: /* @__PURE__ */ jsx("span", {
      className: "cycle"
    })
  });
};
var index$4 = "";
const TableColumn = (props) => {
  const {
    bodyCellStyle,
    className,
    align,
    render,
    rowData,
    dataIndex,
    rowIndex
  } = props;
  const content = rowData[dataIndex];
  return /* @__PURE__ */ jsx("td", {
    style: __spreadProps(__spreadValues({}, bodyCellStyle), {
      textAlign: align
    }),
    className: cn(className, "apipost-table-td"),
    children: /* @__PURE__ */ jsx("div", {
      className: "apipost-table-cell",
      children: typeof render === "function" ? render(content, rowData, rowIndex) : content
    })
  });
};
const TableRow$1 = (props) => {
  const {
    onSelectChange,
    rowSelection,
    rowData,
    columns,
    rowKey,
    rowIndex
  } = props;
  const handleSelectRows = (status) => {
    if (typeof onSelectChange === "function") {
      onSelectChange(status, rowKey);
    }
  };
  const renderSelection = (selection, rowKey2) => {
    var _a;
    const checkStatus = ((_a = selection == null ? void 0 : selection.selectedRowKeys) == null ? void 0 : _a.includes(rowKey2)) ? CheckStatus$1.CHECKED : CheckStatus$1.UNCHECK;
    if ((selection == null ? void 0 : selection.type) === "checkbox") {
      return /* @__PURE__ */ jsx("td", {
        className: "td-selection",
        children: /* @__PURE__ */ jsx(CheckBox, {
          checked: checkStatus,
          onChange: handleSelectRows
        })
      });
    }
    return null;
  };
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("tr", {
      className: "apipost-table-tr",
      children: [rowSelection !== void 0 && renderSelection(rowSelection, rowKey), columns == null ? void 0 : columns.map((colItem, colIndex) => /* @__PURE__ */ jsx(TableColumn, __spreadProps(__spreadValues({}, colItem), {
        rowIndex,
        rowData
      }), colIndex))]
    })
  });
};
const TableContext = createContext(null);
const SplitBar = (props) => {
  const {
    layout = {},
    tableHeight = 0,
    onLayoutChange = () => void 0
  } = props;
  const [refSplit, setRefSplit] = useState(null);
  const [scaling, setScaling] = useState(false);
  const [scaleData, setScaleData] = useState({
    enable: false,
    startX: 0
  });
  const [maskLayout, setMaskLayout] = useState({});
  useEffect(() => {
    setMaskLayout(layout);
  }, [layout]);
  const handleMouseDown = (ev) => {
    if (refSplit.contains(ev.target)) {
      const {
        pageX
      } = ev;
      const defaultLayout = cloneDeep_1(layout);
      setScaling(true);
      setScaleData({
        enable: true,
        startX: pageX,
        defaultLayout
      });
    }
  };
  const handleMouseMove = (ev) => {
    if (scaleData.enable) {
      const {
        pageX
      } = ev;
      const newLayout = cloneDeep_1(layout);
      const scaledX = pageX - scaleData.startX;
      newLayout.width = ((layout == null ? void 0 : layout.width) || 0) + scaledX;
      setMaskLayout(newLayout);
    }
  };
  const handleMouseUp = (ev) => {
    setScaleData({
      enable: false,
      startX: 0
    });
    if (scaling) {
      setScaling(false);
    }
    if (scaleData.enable) {
      const {
        pageX
      } = ev;
      const newLayout = cloneDeep_1(layout);
      const scaledX = pageX - scaleData.startX;
      newLayout.width = ((layout == null ? void 0 : layout.width) || 0) + scaledX;
      onLayoutChange(newLayout);
    }
  };
  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [scaleData]);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [scaling && /* @__PURE__ */ jsx("div", {
      style: {
        width: `${(maskLayout == null ? void 0 : maskLayout.width) - 2}px`,
        height: `${tableHeight - 1}px`
      },
      className: "td-mask"
    }), /* @__PURE__ */ jsx("div", {
      ref: setRefSplit,
      onMouseDown: handleMouseDown,
      style: {
        left: `${maskLayout.width - 2}px`,
        height: `${tableHeight - 1}px`
      },
      className: cn({
        "td-scale": true,
        scaling
      })
    })]
  });
};
const Column$1 = (props) => {
  var _a;
  const {
    colItem,
    colIndex
  } = props;
  const {
    refTable,
    layouts,
    handleLayoutChange = () => void 0
  } = useContext(TableContext);
  const tableHeight = ((_a = refTable == null ? void 0 : refTable.current) == null ? void 0 : _a.offsetHeight) || 0;
  const defaultLayout = layouts == null ? void 0 : layouts[colIndex];
  const [layout, setLayout] = useState({
    width: colItem.width !== void 0 ? colItem.width : 0
  });
  useEffect(() => {
    if (defaultLayout !== void 0) {
      setLayout(defaultLayout);
    }
  }, [defaultLayout]);
  const onLayoutChange = (newLayout) => {
    if (newLayout.width < 30) {
      newLayout.width = 30;
    }
    setLayout(newLayout);
    handleLayoutChange(newLayout, colIndex);
  };
  return /* @__PURE__ */ jsxs("td", {
    className: "apipost-table-td",
    style: {
      width: (layout == null ? void 0 : layout.width) > 0 ? `${layout == null ? void 0 : layout.width}px` : "auto"
    },
    children: [/* @__PURE__ */ jsx("span", {
      className: "apipost-table-cell",
      children: colItem.title || ""
    }), colItem.enableResize && /* @__PURE__ */ jsx(SplitBar, {
      layout,
      tableHeight,
      onLayoutChange
    })]
  });
};
const TableRow = (props) => {
  const {
    rowSelection,
    columns
  } = props;
  const renderSelection = (selection) => {
    if (selection === void 0) {
      return null;
    }
    const {
      columnTitle,
      columnWidth = 40
    } = selection;
    const colstyle = {
      width: `${columnWidth}px`
    };
    if (selection.columnTitle !== void 0) {
      return /* @__PURE__ */ jsx("td", {
        style: colstyle,
        className: "td-selection",
        children: selection.columnTitle
      });
    }
    if ((selection == null ? void 0 : selection.type) === "checkbox") {
      return /* @__PURE__ */ jsx("td", {
        style: colstyle,
        className: "td-selection",
        children: /* @__PURE__ */ jsx(CheckBox, {})
      });
    }
    return null;
  };
  return /* @__PURE__ */ jsx("thead", {
    children: /* @__PURE__ */ jsxs("tr", {
      className: "apipost-table-th",
      children: [renderSelection(rowSelection), columns == null ? void 0 : columns.map((colItem, colIndex) => /* @__PURE__ */ jsx(Column$1, {
        className: "api-post-table-td-border",
        colItem,
        colIndex
      }))]
    })
  });
};
const {
  Provider: Provider$1
} = TableContext;
const Table$1 = (props) => {
  const {
    data,
    style,
    className,
    columns,
    showHeader = true,
    noDataElement,
    layouts,
    showBorder = false,
    rowKey,
    onLayoutsChange = () => void 0,
    renderRow = () => void 0
  } = props;
  const refTable = useRef();
  const handleLayoutChange = (_ayout, index2) => {
    const newLayout = layouts !== void 0 ? cloneDeep_1(layouts) : {};
    newLayout[index2] = _ayout;
    onLayoutsChange(newLayout);
  };
  if (data === void 0) {
    return null;
  }
  const renderRowItem = (rowData, index2) => {
    return /* @__PURE__ */ jsx(TableRow$1, {
      rowKey: rowData == null ? void 0 : rowData[rowKey],
      rowIndex: index2,
      rowData,
      columns
    }, `${index2}`);
  };
  return /* @__PURE__ */ jsx(Provider$1, {
    value: {
      refTable,
      layouts,
      handleLayoutChange
    },
    children: /* @__PURE__ */ jsx("div", {
      style,
      className: cn(className, "apipost-table-container"),
      children: /* @__PURE__ */ jsxs("table", {
        ref: refTable,
        className: cn({
          "apipost-table": true,
          "apipost-table-border": showBorder === true
        }),
        children: [showHeader === true && /* @__PURE__ */ jsx(TableRow, {
          columns
        }), data.length === 0 ? noDataElement : "renderRow" in props && typeof renderRow === "function" ? /* @__PURE__ */ jsx(Fragment, {
          children: renderRow(data, renderRowItem)
        }) : /* @__PURE__ */ jsx("tbody", {
          children: data.map((rowData, index2) => /* @__PURE__ */ jsx(Fragment, {
            children: renderRowItem(rowData, index2)
          }))
        })]
      })
    })
  });
};
const TabsContext = React__default.createContext(null);
var ButtonAdd = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMiAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgNi43OTk5OUMxIDYuMzAyOTQgMS40MDI5NCA1Ljg5OTk5IDEuOSA1Ljg5OTk5SDEwLjFDMTAuNTk3MSA1Ljg5OTk5IDExIDYuMzAyOTQgMTEgNi43OTk5OUMxMSA3LjI5NzA1IDEwLjU5NzEgNy42OTk5OSAxMC4xIDcuNjk5OTlIMS45QzEuNDAyOTQgNy42OTk5OSAxIDcuMjk3MDUgMSA2Ljc5OTk5WiIgZmlsbD0iIzJCMkIyQiIvPgo8cGF0aCBkPSJNNi4zMDAwMiAxMS41QzUuODAyOTcgMTEuNSA1LjQwMDAyIDExLjA5NzEgNS40MDAwMiAxMC42TDUuNDAwMDIgMi40QzUuNDAwMDIgMS45MDI5NCA1LjgwMjk3IDEuNSA2LjMwMDAyIDEuNUM2Ljc5NzA4IDEuNSA3LjIwMDAyIDEuOTAyOTQgNy4yMDAwMiAyLjRMNy4yMDAwMiAxMC42QzcuMjAwMDIgMTEuMDk3MSA2Ljc5NzA4IDExLjUgNi4zMDAwMiAxMS41WiIgZmlsbD0iIzJCMkIyQiIvPgo8L3N2Zz4K";
var ArrowLeft = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMiAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNjkyMyA3LjQ0OTJDMi4wMzcyOCA3LjA2MjE0IDIuMDM3MjggNi4xMTQ0MSAyLjY5MjMgNS43MjczNUw3LjQ5MTMzIDIuODkxNTdDOC4xNTc5NCAyLjQ5NzY2IDkuMDAwMDYgMi45NzgxOSA5LjAwMDA2IDMuNzUyNDlMOS4wMDAwNiA2LjU4ODI4TDkuMDAwMDYgOS40MjQwN0M5LjAwMDA2IDEwLjE5ODQgOC4xNTc5NCAxMC42Nzg5IDcuNDkxMzMgMTAuMjg1TDIuNjkyMyA3LjQ0OTJaIiBmaWxsPSIjMkIyQjJCIi8+Cjwvc3ZnPgo=";
var ArrowRight = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMiAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMzA3NyA1LjU1MDhDOS45NjI3MiA1LjkzNzg2IDkuOTYyNzIgNi44ODU1OSA5LjMwNzcgNy4yNzI2NUw0LjUwODY3IDEwLjEwODRDMy44NDIwNiAxMC41MDIzIDIuOTk5OTQgMTAuMDIxOCAyLjk5OTk0IDkuMjQ3NTFMMi45OTk5NCA2LjQxMTcyTDIuOTk5OTQgMy41NzU5M0MyLjk5OTk0IDIuODAxNjMgMy44NDIwNiAyLjMyMTEgNC41MDg2NyAyLjcxNTAxTDkuMzA3NyA1LjU1MDhaIiBmaWxsPSIjMkIyQjJCIi8+Cjwvc3ZnPgo=";
var index$3 = "";
const Tabs$1 = (props, rootRef) => {
  var _b, _c;
  const _a = props, {
    style,
    className,
    defaultActiveId,
    activeId,
    showAdd = false,
    showScrollBtns = false,
    children,
    type = "default",
    onChange,
    onAddTab = () => void 0,
    onRemoveTab,
    renderHeader
  } = _a, restProps = __objRest(_a, [
    "style",
    "className",
    "defaultActiveId",
    "activeId",
    "showAdd",
    "showScrollBtns",
    "children",
    "type",
    "onChange",
    "onAddTab",
    "onRemoveTab",
    "renderHeader"
  ]);
  const [activeTabId, setActiveTabId] = useState(defaultActiveId);
  const [translateX, setTranslateX] = useState(0);
  const {
    Provider: Provider2
  } = TabsContext;
  const refTabPanList = useRef(null);
  const refTranslateData = useRef(null);
  const tabsList = Array.isArray(children) ? children.reduce((a, b) => a.concat(b), []) : [children];
  const mergedActiveId = "activeId" in props ? activeId : activeTabId;
  const getTabIndex = (elements, activeId2) => {
    let index2 = -1;
    for (let i = 0; i < elements.length; i++) {
      const item = elements[i];
      if (item.id === activeId2) {
        index2 = i;
      }
    }
    return index2;
  };
  useEffect(() => {
    if (tabsList === 0) {
      setTranslateX(0);
    }
    if (refTabPanList.current === null) {
      return;
    }
    getTabIndex(tabsList, mergedActiveId);
  }, [mergedActiveId, tabsList.length]);
  useEffect(() => {
    refTranslateData.current = {
      translateX
    };
  }, [translateX]);
  const handleSwitchTab = (id2, tabPan) => {
    setActiveTabId(id2);
    if (typeof onChange === "function") {
      onChange(id2, tabPan);
    }
  };
  const handleRemoveTab = (tabId, tabPan) => {
    if (typeof onRemoveTab === "function") {
      onRemoveTab(tabId, tabPan);
    }
  };
  const handleMoveLeft = () => {
    const tabsPanel = refTabPanList.current;
    if (tabsPanel === null) {
      return;
    }
    let movedWidth = translateX + tabsPanel.offsetWidth;
    if (movedWidth > 0) {
      movedWidth = 0;
    }
    refTranslateData.current.translateX = movedWidth;
    setTranslateX(movedWidth);
  };
  const handleMoveRight = () => {
    const tabsPanel = refTabPanList.current;
    if (tabsPanel === null) {
      return;
    }
    if (tabsPanel.scrollWidth <= tabsPanel.offsetWidth) {
      return;
    }
    let movedWidth = translateX - tabsPanel.offsetWidth;
    if (movedWidth < tabsPanel.offsetWidth - tabsPanel.scrollWidth) {
      movedWidth = tabsPanel.offsetWidth - tabsPanel.scrollWidth;
    }
    refTranslateData.current.translateX = movedWidth;
    setTranslateX(movedWidth);
  };
  const activedContent = (_c = (_b = tabsList.find((item) => {
    var _a2;
    return ((_a2 = item == null ? void 0 : item.props) == null ? void 0 : _a2.id) === mergedActiveId;
  })) == null ? void 0 : _b.props) == null ? void 0 : _c.children;
  const headerTabItems = /* @__PURE__ */ jsx("div", {
    className: cn({
      "tabs-content": true,
      [`tabs-content_${type}`]: true
    }),
    ref: refTabPanList,
    children: /* @__PURE__ */ jsx("div", {
      style: {
        transform: `translate3d(${translateX}px,0,0)`
      },
      children: tabsList
    })
  });
  const scrollButtons = /* @__PURE__ */ jsxs("div", {
    className: "scroll-buttons",
    children: [/* @__PURE__ */ jsx("div", {
      className: "scroll-btn ",
      onClick: handleMoveLeft,
      children: /* @__PURE__ */ jsx(ArrowLeft, {})
    }), /* @__PURE__ */ jsx("div", {
      className: "scroll-btn ",
      onClick: handleMoveRight,
      children: /* @__PURE__ */ jsx(ArrowRight, {})
    })]
  });
  const addButton = /* @__PURE__ */ jsx("div", {
    className: "add-button",
    onClick: onAddTab,
    children: /* @__PURE__ */ jsx(ButtonAdd, {})
  });
  return /* @__PURE__ */ jsx("div", __spreadProps(__spreadValues({
    style,
    ref: rootRef
  }, restProps), {
    className: cn("apipost-tabs", className),
    children: /* @__PURE__ */ jsxs(Provider2, {
      value: {
        activeId: mergedActiveId,
        handleSwitchTab,
        handleRemoveTab
      },
      children: [/* @__PURE__ */ jsx("div", {
        className: "apipost-tabs-header",
        children: typeof renderHeader !== "function" ? /* @__PURE__ */ jsxs(Fragment, {
          children: [headerTabItems, showAdd && addButton, showScrollBtns && scrollButtons]
        }) : /* @__PURE__ */ jsx(Fragment, {
          children: renderHeader(tabsList, {
            headerTabItems,
            addButton,
            scrollButtons
          })
        })
      }), /* @__PURE__ */ jsx("div", {
        className: cn({
          "apipost-tabs-content": true
        }),
        children: activedContent
      })]
    })
  }));
};
var Tabs$2 = React__default.forwardRef(Tabs$1);
var TabRemove = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMiAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjM5Mjc4IDguOTA0ODVDMi4wNjA3NCA5LjIzNjg5IDIuMDYwNzQgOS43NzUyNCAyLjM5Mjc4IDEwLjEwNzNDMi43MjQ4MiAxMC40MzkzIDMuMjYzMTYgMTAuNDM5MyAzLjU5NTIgMTAuMTA3M0w2LjAwMDAxIDcuNzAyNDdMOC40MDQ4MSAxMC4xMDczQzguNzM2ODUgMTAuNDM5MyA5LjI3NTE5IDEwLjQzOTMgOS42MDcyMyAxMC4xMDczQzkuOTM5MjcgOS43NzUyNCA5LjkzOTI3IDkuMjM2OSA5LjYwNzIzIDguOTA0ODZMNy4yMDI0MyA2LjUwMDA1TDkuNjA3MzEgNC4wOTUxN0M5LjkzOTM1IDMuNzYzMTMgOS45MzkzNSAzLjIyNDc5IDkuNjA3MzEgMi44OTI3NUM5LjI3NTI3IDIuNTYwNzEgOC43MzY5MyAyLjU2MDcxIDguNDA0ODkgMi44OTI3NUw2LjAwMDAxIDUuMjk3NjNMMy41OTUxMyAyLjg5Mjc1QzMuMjYzMDkgMi41NjA3MSAyLjcyNDc1IDIuNTYwNzEgMi4zOTI3MSAyLjg5Mjc1QzIuMDYwNjcgMy4yMjQ3OSAyLjA2MDY3IDMuNzYzMTMgMi4zOTI3MSA0LjA5NTE3TDQuNzk3NTggNi41MDAwNUwyLjM5Mjc4IDguOTA0ODVaIiBmaWxsPSIjMkIyQjJCIi8+Cjwvc3ZnPgo=";
const TabPan = (props) => {
  const _a = props, {
    id: id2,
    style,
    className,
    children,
    title,
    disabled = false,
    removable
  } = _a, restProps = __objRest(_a, [
    "id",
    "style",
    "className",
    "children",
    "title",
    "disabled",
    "removable"
  ]);
  const {
    activeId,
    handleSwitchTab,
    handleRemoveTab
  } = useContext(TabsContext);
  const handleChange = () => {
    if (!disabled) {
      handleSwitchTab(id2, props);
    }
  };
  const handleRemove = (ev) => {
    handleRemoveTab(id2, props);
    ev.stopPropagation();
  };
  const tempClassName = cn(className, {
    "tabs-item": true,
    active: activeId === id2,
    disable: disabled,
    removable: removable === true
  });
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("div", __spreadProps(__spreadValues({
      style
    }, restProps), {
      onClick: handleChange,
      className: tempClassName,
      children: [title, removable && /* @__PURE__ */ jsx(TabRemove, {
        className: "item-close",
        onClick: handleRemove
      })]
    }))
  });
};
var Tabs = {
  Tabs: Tabs$2,
  TabPan
};
var index$2 = "";
const PERFIX = "apipost-tooltip-popup";
const Tooltip = React__default.forwardRef((props, ref) => {
  const {
    style,
    className,
    trigger = "hover",
    placement = "top",
    content,
    children,
    offset = [6, 6],
    showArrow = true,
    bgColor = "#1d2129"
  } = props;
  const getPopupArrawColor = () => {
    return {
      borderLeftColor: ["left", "left-start", "left-end"].includes(placement) ? bgColor : void 0,
      borderTopColor: ["top", "top-start", "top-end"].includes(placement) ? bgColor : void 0,
      borderRightColor: ["right", "right-start", "right-end"].includes(placement) ? bgColor : void 0,
      borderBottomColor: ["bottom", "bottom-start", "bottom-end"].includes(placement) ? bgColor : void 0
    };
  };
  const getPopup = () => {
    if (typeof content === "string" || content.type === void 0 || content.type.toString() === React__default.Fragment.toString()) {
      return /* @__PURE__ */ jsxs("div", {
        children: [content, showArrow === true && /* @__PURE__ */ jsx("span", {
          style: __spreadValues({}, getPopupArrawColor()),
          className: cn("tooltip-arrow", {
            [placement]: true
          })
        })]
      });
    }
    return content;
  };
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx(Trigger, {
      ref,
      style: __spreadProps(__spreadValues({}, style), {
        backgroundColor: bgColor
      }),
      offset,
      placement,
      popup: getPopup(),
      trigger,
      className: cn(PERFIX, className),
      children
    })
  });
});
var lodash = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(module, exports) {
  (function() {
    var undefined$1;
    var VERSION = "4.17.21";
    var LARGE_ARRAY_SIZE2 = 200;
    var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT2 = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
    var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
    var MAX_MEMOIZE_SIZE2 = 500;
    var PLACEHOLDER = "__lodash_placeholder__";
    var CLONE_DEEP_FLAG2 = 1, CLONE_FLAT_FLAG2 = 2, CLONE_SYMBOLS_FLAG2 = 4;
    var COMPARE_PARTIAL_FLAG2 = 1, COMPARE_UNORDERED_FLAG2 = 2;
    var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
    var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
    var HOT_COUNT2 = 800, HOT_SPAN2 = 16;
    var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
    var INFINITY2 = 1 / 0, MAX_SAFE_INTEGER2 = 9007199254740991, MAX_INTEGER2 = 17976931348623157e292, NAN2 = 0 / 0;
    var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
    var wrapFlags = [
      ["ary", WRAP_ARY_FLAG],
      ["bind", WRAP_BIND_FLAG],
      ["bindKey", WRAP_BIND_KEY_FLAG],
      ["curry", WRAP_CURRY_FLAG],
      ["curryRight", WRAP_CURRY_RIGHT_FLAG],
      ["flip", WRAP_FLIP_FLAG],
      ["partial", WRAP_PARTIAL_FLAG],
      ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
      ["rearg", WRAP_REARG_FLAG]
    ];
    var argsTag2 = "[object Arguments]", arrayTag2 = "[object Array]", asyncTag2 = "[object AsyncFunction]", boolTag2 = "[object Boolean]", dateTag2 = "[object Date]", domExcTag = "[object DOMException]", errorTag2 = "[object Error]", funcTag2 = "[object Function]", genTag2 = "[object GeneratorFunction]", mapTag2 = "[object Map]", numberTag2 = "[object Number]", nullTag2 = "[object Null]", objectTag2 = "[object Object]", promiseTag2 = "[object Promise]", proxyTag2 = "[object Proxy]", regexpTag2 = "[object RegExp]", setTag2 = "[object Set]", stringTag2 = "[object String]", symbolTag2 = "[object Symbol]", undefinedTag2 = "[object Undefined]", weakMapTag2 = "[object WeakMap]", weakSetTag = "[object WeakSet]";
    var arrayBufferTag2 = "[object ArrayBuffer]", dataViewTag2 = "[object DataView]", float32Tag2 = "[object Float32Array]", float64Tag2 = "[object Float64Array]", int8Tag2 = "[object Int8Array]", int16Tag2 = "[object Int16Array]", int32Tag2 = "[object Int32Array]", uint8Tag2 = "[object Uint8Array]", uint8ClampedTag2 = "[object Uint8ClampedArray]", uint16Tag2 = "[object Uint16Array]", uint32Tag2 = "[object Uint32Array]";
    var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
    var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
    var reIsDeepProp2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp2 = /^\w*$/, rePropName2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reRegExpChar2 = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar2.source);
    var reTrimStart2 = /^\s+/;
    var reWhitespace2 = /\s/;
    var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
    var reEscapeChar2 = /\\(\\)?/g;
    var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    var reFlags2 = /\w*$/;
    var reIsBadHex2 = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary2 = /^0b[01]+$/i;
    var reIsHostCtor2 = /^\[object .+?Constructor\]$/;
    var reIsOctal2 = /^0o[0-7]+$/i;
    var reIsUint2 = /^(?:0|[1-9]\d*)$/;
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var reNoMatch = /($^)/;
    var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
    var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
    var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reApos = RegExp(rsApos, "g");
    var reComboMark = RegExp(rsCombo, "g");
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    var reUnicodeWord = RegExp([
      rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
      rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
      rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
      rsUpper + "+" + rsOptContrUpper,
      rsOrdUpper,
      rsOrdLower,
      rsDigits,
      rsEmoji
    ].join("|"), "g");
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    var contextProps = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ];
    var templateCounter = -1;
    var typedArrayTags2 = {};
    typedArrayTags2[float32Tag2] = typedArrayTags2[float64Tag2] = typedArrayTags2[int8Tag2] = typedArrayTags2[int16Tag2] = typedArrayTags2[int32Tag2] = typedArrayTags2[uint8Tag2] = typedArrayTags2[uint8ClampedTag2] = typedArrayTags2[uint16Tag2] = typedArrayTags2[uint32Tag2] = true;
    typedArrayTags2[argsTag2] = typedArrayTags2[arrayTag2] = typedArrayTags2[arrayBufferTag2] = typedArrayTags2[boolTag2] = typedArrayTags2[dataViewTag2] = typedArrayTags2[dateTag2] = typedArrayTags2[errorTag2] = typedArrayTags2[funcTag2] = typedArrayTags2[mapTag2] = typedArrayTags2[numberTag2] = typedArrayTags2[objectTag2] = typedArrayTags2[regexpTag2] = typedArrayTags2[setTag2] = typedArrayTags2[stringTag2] = typedArrayTags2[weakMapTag2] = false;
    var cloneableTags2 = {};
    cloneableTags2[argsTag2] = cloneableTags2[arrayTag2] = cloneableTags2[arrayBufferTag2] = cloneableTags2[dataViewTag2] = cloneableTags2[boolTag2] = cloneableTags2[dateTag2] = cloneableTags2[float32Tag2] = cloneableTags2[float64Tag2] = cloneableTags2[int8Tag2] = cloneableTags2[int16Tag2] = cloneableTags2[int32Tag2] = cloneableTags2[mapTag2] = cloneableTags2[numberTag2] = cloneableTags2[objectTag2] = cloneableTags2[regexpTag2] = cloneableTags2[setTag2] = cloneableTags2[stringTag2] = cloneableTags2[symbolTag2] = cloneableTags2[uint8Tag2] = cloneableTags2[uint8ClampedTag2] = cloneableTags2[uint16Tag2] = cloneableTags2[uint32Tag2] = true;
    cloneableTags2[errorTag2] = cloneableTags2[funcTag2] = cloneableTags2[weakMapTag2] = false;
    var deburredLetters = {
      "\xC0": "A",
      "\xC1": "A",
      "\xC2": "A",
      "\xC3": "A",
      "\xC4": "A",
      "\xC5": "A",
      "\xE0": "a",
      "\xE1": "a",
      "\xE2": "a",
      "\xE3": "a",
      "\xE4": "a",
      "\xE5": "a",
      "\xC7": "C",
      "\xE7": "c",
      "\xD0": "D",
      "\xF0": "d",
      "\xC8": "E",
      "\xC9": "E",
      "\xCA": "E",
      "\xCB": "E",
      "\xE8": "e",
      "\xE9": "e",
      "\xEA": "e",
      "\xEB": "e",
      "\xCC": "I",
      "\xCD": "I",
      "\xCE": "I",
      "\xCF": "I",
      "\xEC": "i",
      "\xED": "i",
      "\xEE": "i",
      "\xEF": "i",
      "\xD1": "N",
      "\xF1": "n",
      "\xD2": "O",
      "\xD3": "O",
      "\xD4": "O",
      "\xD5": "O",
      "\xD6": "O",
      "\xD8": "O",
      "\xF2": "o",
      "\xF3": "o",
      "\xF4": "o",
      "\xF5": "o",
      "\xF6": "o",
      "\xF8": "o",
      "\xD9": "U",
      "\xDA": "U",
      "\xDB": "U",
      "\xDC": "U",
      "\xF9": "u",
      "\xFA": "u",
      "\xFB": "u",
      "\xFC": "u",
      "\xDD": "Y",
      "\xFD": "y",
      "\xFF": "y",
      "\xC6": "Ae",
      "\xE6": "ae",
      "\xDE": "Th",
      "\xFE": "th",
      "\xDF": "ss",
      "\u0100": "A",
      "\u0102": "A",
      "\u0104": "A",
      "\u0101": "a",
      "\u0103": "a",
      "\u0105": "a",
      "\u0106": "C",
      "\u0108": "C",
      "\u010A": "C",
      "\u010C": "C",
      "\u0107": "c",
      "\u0109": "c",
      "\u010B": "c",
      "\u010D": "c",
      "\u010E": "D",
      "\u0110": "D",
      "\u010F": "d",
      "\u0111": "d",
      "\u0112": "E",
      "\u0114": "E",
      "\u0116": "E",
      "\u0118": "E",
      "\u011A": "E",
      "\u0113": "e",
      "\u0115": "e",
      "\u0117": "e",
      "\u0119": "e",
      "\u011B": "e",
      "\u011C": "G",
      "\u011E": "G",
      "\u0120": "G",
      "\u0122": "G",
      "\u011D": "g",
      "\u011F": "g",
      "\u0121": "g",
      "\u0123": "g",
      "\u0124": "H",
      "\u0126": "H",
      "\u0125": "h",
      "\u0127": "h",
      "\u0128": "I",
      "\u012A": "I",
      "\u012C": "I",
      "\u012E": "I",
      "\u0130": "I",
      "\u0129": "i",
      "\u012B": "i",
      "\u012D": "i",
      "\u012F": "i",
      "\u0131": "i",
      "\u0134": "J",
      "\u0135": "j",
      "\u0136": "K",
      "\u0137": "k",
      "\u0138": "k",
      "\u0139": "L",
      "\u013B": "L",
      "\u013D": "L",
      "\u013F": "L",
      "\u0141": "L",
      "\u013A": "l",
      "\u013C": "l",
      "\u013E": "l",
      "\u0140": "l",
      "\u0142": "l",
      "\u0143": "N",
      "\u0145": "N",
      "\u0147": "N",
      "\u014A": "N",
      "\u0144": "n",
      "\u0146": "n",
      "\u0148": "n",
      "\u014B": "n",
      "\u014C": "O",
      "\u014E": "O",
      "\u0150": "O",
      "\u014D": "o",
      "\u014F": "o",
      "\u0151": "o",
      "\u0154": "R",
      "\u0156": "R",
      "\u0158": "R",
      "\u0155": "r",
      "\u0157": "r",
      "\u0159": "r",
      "\u015A": "S",
      "\u015C": "S",
      "\u015E": "S",
      "\u0160": "S",
      "\u015B": "s",
      "\u015D": "s",
      "\u015F": "s",
      "\u0161": "s",
      "\u0162": "T",
      "\u0164": "T",
      "\u0166": "T",
      "\u0163": "t",
      "\u0165": "t",
      "\u0167": "t",
      "\u0168": "U",
      "\u016A": "U",
      "\u016C": "U",
      "\u016E": "U",
      "\u0170": "U",
      "\u0172": "U",
      "\u0169": "u",
      "\u016B": "u",
      "\u016D": "u",
      "\u016F": "u",
      "\u0171": "u",
      "\u0173": "u",
      "\u0174": "W",
      "\u0175": "w",
      "\u0176": "Y",
      "\u0177": "y",
      "\u0178": "Y",
      "\u0179": "Z",
      "\u017B": "Z",
      "\u017D": "Z",
      "\u017A": "z",
      "\u017C": "z",
      "\u017E": "z",
      "\u0132": "IJ",
      "\u0133": "ij",
      "\u0152": "Oe",
      "\u0153": "oe",
      "\u0149": "'n",
      "\u017F": "s"
    };
    var htmlEscapes = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    var htmlUnescapes = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    };
    var stringEscapes = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    };
    var freeParseFloat = parseFloat, freeParseInt2 = parseInt;
    var freeGlobal2 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
    var freeSelf2 = typeof self == "object" && self && self.Object === Object && self;
    var root2 = freeGlobal2 || freeSelf2 || Function("return this")();
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal2.process;
    var nodeUtil2 = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsArrayBuffer = nodeUtil2 && nodeUtil2.isArrayBuffer, nodeIsDate = nodeUtil2 && nodeUtil2.isDate, nodeIsMap2 = nodeUtil2 && nodeUtil2.isMap, nodeIsRegExp = nodeUtil2 && nodeUtil2.isRegExp, nodeIsSet2 = nodeUtil2 && nodeUtil2.isSet, nodeIsTypedArray2 = nodeUtil2 && nodeUtil2.isTypedArray;
    function apply2(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function arrayAggregator(array, setter, iteratee, accumulator) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        var value = array[index2];
        setter(accumulator, value, iteratee(value), array);
      }
      return accumulator;
    }
    function arrayEach2(array, iteratee) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        if (iteratee(array[index2], index2, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayEachRight(array, iteratee) {
      var length = array == null ? 0 : array.length;
      while (length--) {
        if (iteratee(array[length], length, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayEvery(array, predicate) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        if (!predicate(array[index2], index2, array)) {
          return false;
        }
      }
      return true;
    }
    function arrayFilter2(array, predicate) {
      var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index2 < length) {
        var value = array[index2];
        if (predicate(value, index2, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayIncludes(array, value) {
      var length = array == null ? 0 : array.length;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    function arrayIncludesWith(array, value, comparator) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        if (comparator(value, array[index2])) {
          return true;
        }
      }
      return false;
    }
    function arrayMap2(array, iteratee) {
      var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index2 < length) {
        result[index2] = iteratee(array[index2], index2, array);
      }
      return result;
    }
    function arrayPush2(array, values) {
      var index2 = -1, length = values.length, offset = array.length;
      while (++index2 < length) {
        array[offset + index2] = values[index2];
      }
      return array;
    }
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index2 = -1, length = array == null ? 0 : array.length;
      if (initAccum && length) {
        accumulator = array[++index2];
      }
      while (++index2 < length) {
        accumulator = iteratee(accumulator, array[index2], index2, array);
      }
      return accumulator;
    }
    function arrayReduceRight(array, iteratee, accumulator, initAccum) {
      var length = array == null ? 0 : array.length;
      if (initAccum && length) {
        accumulator = array[--length];
      }
      while (length--) {
        accumulator = iteratee(accumulator, array[length], length, array);
      }
      return accumulator;
    }
    function arraySome2(array, predicate) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        if (predicate(array[index2], index2, array)) {
          return true;
        }
      }
      return false;
    }
    var asciiSize = baseProperty2("length");
    function asciiToArray(string) {
      return string.split("");
    }
    function asciiWords(string) {
      return string.match(reAsciiWord) || [];
    }
    function baseFindKey(collection, predicate, eachFunc) {
      var result;
      eachFunc(collection, function(value, key, collection2) {
        if (predicate(value, key, collection2)) {
          result = key;
          return false;
        }
      });
      return result;
    }
    function baseFindIndex2(array, predicate, fromIndex, fromRight) {
      var length = array.length, index2 = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index2-- : ++index2 < length) {
        if (predicate(array[index2], index2, array)) {
          return index2;
        }
      }
      return -1;
    }
    function baseIndexOf(array, value, fromIndex) {
      return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex2(array, baseIsNaN, fromIndex);
    }
    function baseIndexOfWith(array, value, fromIndex, comparator) {
      var index2 = fromIndex - 1, length = array.length;
      while (++index2 < length) {
        if (comparator(array[index2], value)) {
          return index2;
        }
      }
      return -1;
    }
    function baseIsNaN(value) {
      return value !== value;
    }
    function baseMean(array, iteratee) {
      var length = array == null ? 0 : array.length;
      return length ? baseSum(array, iteratee) / length : NAN2;
    }
    function baseProperty2(key) {
      return function(object) {
        return object == null ? undefined$1 : object[key];
      };
    }
    function basePropertyOf(object) {
      return function(key) {
        return object == null ? undefined$1 : object[key];
      };
    }
    function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
      eachFunc(collection, function(value, index2, collection2) {
        accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index2, collection2);
      });
      return accumulator;
    }
    function baseSortBy(array, comparer) {
      var length = array.length;
      array.sort(comparer);
      while (length--) {
        array[length] = array[length].value;
      }
      return array;
    }
    function baseSum(array, iteratee) {
      var result, index2 = -1, length = array.length;
      while (++index2 < length) {
        var current = iteratee(array[index2]);
        if (current !== undefined$1) {
          result = result === undefined$1 ? current : result + current;
        }
      }
      return result;
    }
    function baseTimes2(n2, iteratee) {
      var index2 = -1, result = Array(n2);
      while (++index2 < n2) {
        result[index2] = iteratee(index2);
      }
      return result;
    }
    function baseToPairs(object, props) {
      return arrayMap2(props, function(key) {
        return [key, object[key]];
      });
    }
    function baseTrim2(string) {
      return string ? string.slice(0, trimmedEndIndex2(string) + 1).replace(reTrimStart2, "") : string;
    }
    function baseUnary2(func) {
      return function(value) {
        return func(value);
      };
    }
    function baseValues(object, props) {
      return arrayMap2(props, function(key) {
        return object[key];
      });
    }
    function cacheHas2(cache, key) {
      return cache.has(key);
    }
    function charsStartIndex(strSymbols, chrSymbols) {
      var index2 = -1, length = strSymbols.length;
      while (++index2 < length && baseIndexOf(chrSymbols, strSymbols[index2], 0) > -1) {
      }
      return index2;
    }
    function charsEndIndex(strSymbols, chrSymbols) {
      var index2 = strSymbols.length;
      while (index2-- && baseIndexOf(chrSymbols, strSymbols[index2], 0) > -1) {
      }
      return index2;
    }
    function countHolders(array, placeholder) {
      var length = array.length, result = 0;
      while (length--) {
        if (array[length] === placeholder) {
          ++result;
        }
      }
      return result;
    }
    var deburrLetter = basePropertyOf(deburredLetters);
    var escapeHtmlChar = basePropertyOf(htmlEscapes);
    function escapeStringChar(chr) {
      return "\\" + stringEscapes[chr];
    }
    function getValue2(object, key) {
      return object == null ? undefined$1 : object[key];
    }
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    function hasUnicodeWord(string) {
      return reHasUnicodeWord.test(string);
    }
    function iteratorToArray(iterator) {
      var data, result = [];
      while (!(data = iterator.next()).done) {
        result.push(data.value);
      }
      return result;
    }
    function mapToArray2(map) {
      var index2 = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index2] = [key, value];
      });
      return result;
    }
    function overArg2(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function replaceHolders(array, placeholder) {
      var index2 = -1, length = array.length, resIndex = 0, result = [];
      while (++index2 < length) {
        var value = array[index2];
        if (value === placeholder || value === PLACEHOLDER) {
          array[index2] = PLACEHOLDER;
          result[resIndex++] = index2;
        }
      }
      return result;
    }
    function setToArray2(set) {
      var index2 = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index2] = value;
      });
      return result;
    }
    function setToPairs(set) {
      var index2 = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index2] = [value, value];
      });
      return result;
    }
    function strictIndexOf(array, value, fromIndex) {
      var index2 = fromIndex - 1, length = array.length;
      while (++index2 < length) {
        if (array[index2] === value) {
          return index2;
        }
      }
      return -1;
    }
    function strictLastIndexOf(array, value, fromIndex) {
      var index2 = fromIndex + 1;
      while (index2--) {
        if (array[index2] === value) {
          return index2;
        }
      }
      return index2;
    }
    function stringSize(string) {
      return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
    }
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    function trimmedEndIndex2(string) {
      var index2 = string.length;
      while (index2-- && reWhitespace2.test(string.charAt(index2))) {
      }
      return index2;
    }
    var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
    function unicodeSize(string) {
      var result = reUnicode.lastIndex = 0;
      while (reUnicode.test(string)) {
        ++result;
      }
      return result;
    }
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    function unicodeWords(string) {
      return string.match(reUnicodeWord) || [];
    }
    var runInContext = function runInContext2(context) {
      context = context == null ? root2 : _2.defaults(root2.Object(), context, _2.pick(root2, contextProps));
      var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
      var arrayProto2 = Array2.prototype, funcProto2 = Function2.prototype, objectProto2 = Object2.prototype;
      var coreJsData2 = context["__core-js_shared__"];
      var funcToString2 = funcProto2.toString;
      var hasOwnProperty2 = objectProto2.hasOwnProperty;
      var idCounter = 0;
      var maskSrcKey2 = function() {
        var uid = /[^.]+$/.exec(coreJsData2 && coreJsData2.keys && coreJsData2.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      var nativeObjectToString2 = objectProto2.toString;
      var objectCtorString2 = funcToString2.call(Object2);
      var oldDash = root2._;
      var reIsNative2 = RegExp2("^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      var Buffer2 = moduleExports ? context.Buffer : undefined$1, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined$1, getPrototype2 = overArg2(Object2.getPrototypeOf, Object2), objectCreate2 = Object2.create, propertyIsEnumerable2 = objectProto2.propertyIsEnumerable, splice2 = arrayProto2.splice, spreadableSymbol2 = Symbol2 ? Symbol2.isConcatSpreadable : undefined$1, symIterator = Symbol2 ? Symbol2.iterator : undefined$1, symToStringTag2 = Symbol2 ? Symbol2.toStringTag : undefined$1;
      var defineProperty2 = function() {
        try {
          var func = getNative2(Object2, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      var ctxClearTimeout = context.clearTimeout !== root2.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root2.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root2.setTimeout && context.setTimeout;
      var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols2 = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined$1, nativeIsFinite = context.isFinite, nativeJoin = arrayProto2.join, nativeKeys2 = overArg2(Object2.keys, Object2), nativeMax2 = Math2.max, nativeMin2 = Math2.min, nativeNow2 = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto2.reverse;
      var DataView2 = getNative2(context, "DataView"), Map2 = getNative2(context, "Map"), Promise2 = getNative2(context, "Promise"), Set2 = getNative2(context, "Set"), WeakMap2 = getNative2(context, "WeakMap"), nativeCreate2 = getNative2(Object2, "create");
      var metaMap = WeakMap2 && new WeakMap2();
      var realNames = {};
      var dataViewCtorString2 = toSource2(DataView2), mapCtorString2 = toSource2(Map2), promiseCtorString2 = toSource2(Promise2), setCtorString2 = toSource2(Set2), weakMapCtorString2 = toSource2(WeakMap2);
      var symbolProto2 = Symbol2 ? Symbol2.prototype : undefined$1, symbolValueOf2 = symbolProto2 ? symbolProto2.valueOf : undefined$1, symbolToString2 = symbolProto2 ? symbolProto2.toString : undefined$1;
      function lodash2(value) {
        if (isObjectLike2(value) && !isArray2(value) && !(value instanceof LazyWrapper)) {
          if (value instanceof LodashWrapper) {
            return value;
          }
          if (hasOwnProperty2.call(value, "__wrapped__")) {
            return wrapperClone(value);
          }
        }
        return new LodashWrapper(value);
      }
      var baseCreate2 = function() {
        function object() {
        }
        return function(proto2) {
          if (!isObject2(proto2)) {
            return {};
          }
          if (objectCreate2) {
            return objectCreate2(proto2);
          }
          object.prototype = proto2;
          var result2 = new object();
          object.prototype = undefined$1;
          return result2;
        };
      }();
      function baseLodash() {
      }
      function LodashWrapper(value, chainAll) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__chain__ = !!chainAll;
        this.__index__ = 0;
        this.__values__ = undefined$1;
      }
      lodash2.templateSettings = {
        "escape": reEscape,
        "evaluate": reEvaluate,
        "interpolate": reInterpolate,
        "variable": "",
        "imports": {
          "_": lodash2
        }
      };
      lodash2.prototype = baseLodash.prototype;
      lodash2.prototype.constructor = lodash2;
      LodashWrapper.prototype = baseCreate2(baseLodash.prototype);
      LodashWrapper.prototype.constructor = LodashWrapper;
      function LazyWrapper(value) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = MAX_ARRAY_LENGTH;
        this.__views__ = [];
      }
      function lazyClone() {
        var result2 = new LazyWrapper(this.__wrapped__);
        result2.__actions__ = copyArray2(this.__actions__);
        result2.__dir__ = this.__dir__;
        result2.__filtered__ = this.__filtered__;
        result2.__iteratees__ = copyArray2(this.__iteratees__);
        result2.__takeCount__ = this.__takeCount__;
        result2.__views__ = copyArray2(this.__views__);
        return result2;
      }
      function lazyReverse() {
        if (this.__filtered__) {
          var result2 = new LazyWrapper(this);
          result2.__dir__ = -1;
          result2.__filtered__ = true;
        } else {
          result2 = this.clone();
          result2.__dir__ *= -1;
        }
        return result2;
      }
      function lazyValue() {
        var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray2(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index2 = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin2(length, this.__takeCount__);
        if (!isArr || !isRight && arrLength == length && takeCount == length) {
          return baseWrapperValue(array, this.__actions__);
        }
        var result2 = [];
        outer:
          while (length-- && resIndex < takeCount) {
            index2 += dir;
            var iterIndex = -1, value = array[index2];
            while (++iterIndex < iterLength) {
              var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
              if (type == LAZY_MAP_FLAG) {
                value = computed;
              } else if (!computed) {
                if (type == LAZY_FILTER_FLAG) {
                  continue outer;
                } else {
                  break outer;
                }
              }
            }
            result2[resIndex++] = value;
          }
        return result2;
      }
      LazyWrapper.prototype = baseCreate2(baseLodash.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;
      function Hash2(entries) {
        var index2 = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear2() {
        this.__data__ = nativeCreate2 ? nativeCreate2(null) : {};
        this.size = 0;
      }
      function hashDelete2(key) {
        var result2 = this.has(key) && delete this.__data__[key];
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function hashGet2(key) {
        var data = this.__data__;
        if (nativeCreate2) {
          var result2 = data[key];
          return result2 === HASH_UNDEFINED2 ? undefined$1 : result2;
        }
        return hasOwnProperty2.call(data, key) ? data[key] : undefined$1;
      }
      function hashHas2(key) {
        var data = this.__data__;
        return nativeCreate2 ? data[key] !== undefined$1 : hasOwnProperty2.call(data, key);
      }
      function hashSet2(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate2 && value === undefined$1 ? HASH_UNDEFINED2 : value;
        return this;
      }
      Hash2.prototype.clear = hashClear2;
      Hash2.prototype["delete"] = hashDelete2;
      Hash2.prototype.get = hashGet2;
      Hash2.prototype.has = hashHas2;
      Hash2.prototype.set = hashSet2;
      function ListCache2(entries) {
        var index2 = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear2() {
        this.__data__ = [];
        this.size = 0;
      }
      function listCacheDelete2(key) {
        var data = this.__data__, index2 = assocIndexOf2(data, key);
        if (index2 < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index2 == lastIndex) {
          data.pop();
        } else {
          splice2.call(data, index2, 1);
        }
        --this.size;
        return true;
      }
      function listCacheGet2(key) {
        var data = this.__data__, index2 = assocIndexOf2(data, key);
        return index2 < 0 ? undefined$1 : data[index2][1];
      }
      function listCacheHas2(key) {
        return assocIndexOf2(this.__data__, key) > -1;
      }
      function listCacheSet2(key, value) {
        var data = this.__data__, index2 = assocIndexOf2(data, key);
        if (index2 < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index2][1] = value;
        }
        return this;
      }
      ListCache2.prototype.clear = listCacheClear2;
      ListCache2.prototype["delete"] = listCacheDelete2;
      ListCache2.prototype.get = listCacheGet2;
      ListCache2.prototype.has = listCacheHas2;
      ListCache2.prototype.set = listCacheSet2;
      function MapCache2(entries) {
        var index2 = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear2() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash2(),
          "map": new (Map2 || ListCache2)(),
          "string": new Hash2()
        };
      }
      function mapCacheDelete2(key) {
        var result2 = getMapData2(this, key)["delete"](key);
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function mapCacheGet2(key) {
        return getMapData2(this, key).get(key);
      }
      function mapCacheHas2(key) {
        return getMapData2(this, key).has(key);
      }
      function mapCacheSet2(key, value) {
        var data = getMapData2(this, key), size3 = data.size;
        data.set(key, value);
        this.size += data.size == size3 ? 0 : 1;
        return this;
      }
      MapCache2.prototype.clear = mapCacheClear2;
      MapCache2.prototype["delete"] = mapCacheDelete2;
      MapCache2.prototype.get = mapCacheGet2;
      MapCache2.prototype.has = mapCacheHas2;
      MapCache2.prototype.set = mapCacheSet2;
      function SetCache2(values2) {
        var index2 = -1, length = values2 == null ? 0 : values2.length;
        this.__data__ = new MapCache2();
        while (++index2 < length) {
          this.add(values2[index2]);
        }
      }
      function setCacheAdd2(value) {
        this.__data__.set(value, HASH_UNDEFINED2);
        return this;
      }
      function setCacheHas2(value) {
        return this.__data__.has(value);
      }
      SetCache2.prototype.add = SetCache2.prototype.push = setCacheAdd2;
      SetCache2.prototype.has = setCacheHas2;
      function Stack2(entries) {
        var data = this.__data__ = new ListCache2(entries);
        this.size = data.size;
      }
      function stackClear2() {
        this.__data__ = new ListCache2();
        this.size = 0;
      }
      function stackDelete2(key) {
        var data = this.__data__, result2 = data["delete"](key);
        this.size = data.size;
        return result2;
      }
      function stackGet2(key) {
        return this.__data__.get(key);
      }
      function stackHas2(key) {
        return this.__data__.has(key);
      }
      function stackSet2(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache2) {
          var pairs = data.__data__;
          if (!Map2 || pairs.length < LARGE_ARRAY_SIZE2 - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache2(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      Stack2.prototype.clear = stackClear2;
      Stack2.prototype["delete"] = stackDelete2;
      Stack2.prototype.get = stackGet2;
      Stack2.prototype.has = stackHas2;
      Stack2.prototype.set = stackSet2;
      function arrayLikeKeys2(value, inherited) {
        var isArr = isArray2(value), isArg = !isArr && isArguments2(value), isBuff = !isArr && !isArg && isBuffer2(value), isType = !isArr && !isArg && !isBuff && isTypedArray2(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes2(value.length, String2) : [], length = result2.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex2(key, length)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function arraySample(array) {
        var length = array.length;
        return length ? array[baseRandom(0, length - 1)] : undefined$1;
      }
      function arraySampleSize(array, n2) {
        return shuffleSelf(copyArray2(array), baseClamp(n2, 0, array.length));
      }
      function arrayShuffle(array) {
        return shuffleSelf(copyArray2(array));
      }
      function assignMergeValue(object, key, value) {
        if (value !== undefined$1 && !eq2(object[key], value) || value === undefined$1 && !(key in object)) {
          baseAssignValue2(object, key, value);
        }
      }
      function assignValue2(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty2.call(object, key) && eq2(objValue, value)) || value === undefined$1 && !(key in object)) {
          baseAssignValue2(object, key, value);
        }
      }
      function assocIndexOf2(array, key) {
        var length = array.length;
        while (length--) {
          if (eq2(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      function baseAggregator(collection, setter, iteratee2, accumulator) {
        baseEach(collection, function(value, key, collection2) {
          setter(accumulator, value, iteratee2(value), collection2);
        });
        return accumulator;
      }
      function baseAssign2(object, source) {
        return object && copyObject2(source, keys2(source), object);
      }
      function baseAssignIn2(object, source) {
        return object && copyObject2(source, keysIn2(source), object);
      }
      function baseAssignValue2(object, key, value) {
        if (key == "__proto__" && defineProperty2) {
          defineProperty2(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      function baseAt(object, paths) {
        var index2 = -1, length = paths.length, result2 = Array2(length), skip = object == null;
        while (++index2 < length) {
          result2[index2] = skip ? undefined$1 : get4(object, paths[index2]);
        }
        return result2;
      }
      function baseClamp(number, lower, upper) {
        if (number === number) {
          if (upper !== undefined$1) {
            number = number <= upper ? number : upper;
          }
          if (lower !== undefined$1) {
            number = number >= lower ? number : lower;
          }
        }
        return number;
      }
      function baseClone2(value, bitmask, customizer, key, object, stack) {
        var result2, isDeep = bitmask & CLONE_DEEP_FLAG2, isFlat = bitmask & CLONE_FLAT_FLAG2, isFull = bitmask & CLONE_SYMBOLS_FLAG2;
        if (customizer) {
          result2 = object ? customizer(value, key, object, stack) : customizer(value);
        }
        if (result2 !== undefined$1) {
          return result2;
        }
        if (!isObject2(value)) {
          return value;
        }
        var isArr = isArray2(value);
        if (isArr) {
          result2 = initCloneArray2(value);
          if (!isDeep) {
            return copyArray2(value, result2);
          }
        } else {
          var tag = getTag2(value), isFunc = tag == funcTag2 || tag == genTag2;
          if (isBuffer2(value)) {
            return cloneBuffer2(value, isDeep);
          }
          if (tag == objectTag2 || tag == argsTag2 || isFunc && !object) {
            result2 = isFlat || isFunc ? {} : initCloneObject2(value);
            if (!isDeep) {
              return isFlat ? copySymbolsIn2(value, baseAssignIn2(result2, value)) : copySymbols2(value, baseAssign2(result2, value));
            }
          } else {
            if (!cloneableTags2[tag]) {
              return object ? value : {};
            }
            result2 = initCloneByTag2(value, tag, isDeep);
          }
        }
        stack || (stack = new Stack2());
        var stacked = stack.get(value);
        if (stacked) {
          return stacked;
        }
        stack.set(value, result2);
        if (isSet2(value)) {
          value.forEach(function(subValue) {
            result2.add(baseClone2(subValue, bitmask, customizer, subValue, value, stack));
          });
        } else if (isMap2(value)) {
          value.forEach(function(subValue, key2) {
            result2.set(key2, baseClone2(subValue, bitmask, customizer, key2, value, stack));
          });
        }
        var keysFunc = isFull ? isFlat ? getAllKeysIn2 : getAllKeys2 : isFlat ? keysIn2 : keys2;
        var props = isArr ? undefined$1 : keysFunc(value);
        arrayEach2(props || value, function(subValue, key2) {
          if (props) {
            key2 = subValue;
            subValue = value[key2];
          }
          assignValue2(result2, key2, baseClone2(subValue, bitmask, customizer, key2, value, stack));
        });
        return result2;
      }
      function baseConforms(source) {
        var props = keys2(source);
        return function(object) {
          return baseConformsTo(object, source, props);
        };
      }
      function baseConformsTo(object, source, props) {
        var length = props.length;
        if (object == null) {
          return !length;
        }
        object = Object2(object);
        while (length--) {
          var key = props[length], predicate = source[key], value = object[key];
          if (value === undefined$1 && !(key in object) || !predicate(value)) {
            return false;
          }
        }
        return true;
      }
      function baseDelay(func, wait, args) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        return setTimeout2(function() {
          func.apply(undefined$1, args);
        }, wait);
      }
      function baseDifference(array, values2, iteratee2, comparator) {
        var index2 = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
        if (!length) {
          return result2;
        }
        if (iteratee2) {
          values2 = arrayMap2(values2, baseUnary2(iteratee2));
        }
        if (comparator) {
          includes2 = arrayIncludesWith;
          isCommon = false;
        } else if (values2.length >= LARGE_ARRAY_SIZE2) {
          includes2 = cacheHas2;
          isCommon = false;
          values2 = new SetCache2(values2);
        }
        outer:
          while (++index2 < length) {
            var value = array[index2], computed = iteratee2 == null ? value : iteratee2(value);
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed === computed) {
              var valuesIndex = valuesLength;
              while (valuesIndex--) {
                if (values2[valuesIndex] === computed) {
                  continue outer;
                }
              }
              result2.push(value);
            } else if (!includes2(values2, computed, comparator)) {
              result2.push(value);
            }
          }
        return result2;
      }
      var baseEach = createBaseEach(baseForOwn);
      var baseEachRight = createBaseEach(baseForOwnRight, true);
      function baseEvery(collection, predicate) {
        var result2 = true;
        baseEach(collection, function(value, index2, collection2) {
          result2 = !!predicate(value, index2, collection2);
          return result2;
        });
        return result2;
      }
      function baseExtremum(array, iteratee2, comparator) {
        var index2 = -1, length = array.length;
        while (++index2 < length) {
          var value = array[index2], current = iteratee2(value);
          if (current != null && (computed === undefined$1 ? current === current && !isSymbol2(current) : comparator(current, computed))) {
            var computed = current, result2 = value;
          }
        }
        return result2;
      }
      function baseFill(array, value, start, end) {
        var length = array.length;
        start = toInteger2(start);
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end === undefined$1 || end > length ? length : toInteger2(end);
        if (end < 0) {
          end += length;
        }
        end = start > end ? 0 : toLength(end);
        while (start < end) {
          array[start++] = value;
        }
        return array;
      }
      function baseFilter(collection, predicate) {
        var result2 = [];
        baseEach(collection, function(value, index2, collection2) {
          if (predicate(value, index2, collection2)) {
            result2.push(value);
          }
        });
        return result2;
      }
      function baseFlatten2(array, depth, predicate, isStrict, result2) {
        var index2 = -1, length = array.length;
        predicate || (predicate = isFlattenable2);
        result2 || (result2 = []);
        while (++index2 < length) {
          var value = array[index2];
          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              baseFlatten2(value, depth - 1, predicate, isStrict, result2);
            } else {
              arrayPush2(result2, value);
            }
          } else if (!isStrict) {
            result2[result2.length] = value;
          }
        }
        return result2;
      }
      var baseFor = createBaseFor();
      var baseForRight = createBaseFor(true);
      function baseForOwn(object, iteratee2) {
        return object && baseFor(object, iteratee2, keys2);
      }
      function baseForOwnRight(object, iteratee2) {
        return object && baseForRight(object, iteratee2, keys2);
      }
      function baseFunctions(object, props) {
        return arrayFilter2(props, function(key) {
          return isFunction2(object[key]);
        });
      }
      function baseGet2(object, path) {
        path = castPath2(path, object);
        var index2 = 0, length = path.length;
        while (object != null && index2 < length) {
          object = object[toKey2(path[index2++])];
        }
        return index2 && index2 == length ? object : undefined$1;
      }
      function baseGetAllKeys2(object, keysFunc, symbolsFunc) {
        var result2 = keysFunc(object);
        return isArray2(object) ? result2 : arrayPush2(result2, symbolsFunc(object));
      }
      function baseGetTag2(value) {
        if (value == null) {
          return value === undefined$1 ? undefinedTag2 : nullTag2;
        }
        return symToStringTag2 && symToStringTag2 in Object2(value) ? getRawTag2(value) : objectToString2(value);
      }
      function baseGt(value, other) {
        return value > other;
      }
      function baseHas(object, key) {
        return object != null && hasOwnProperty2.call(object, key);
      }
      function baseHasIn2(object, key) {
        return object != null && key in Object2(object);
      }
      function baseInRange(number, start, end) {
        return number >= nativeMin2(start, end) && number < nativeMax2(start, end);
      }
      function baseIntersection(arrays, iteratee2, comparator) {
        var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
        while (othIndex--) {
          var array = arrays[othIndex];
          if (othIndex && iteratee2) {
            array = arrayMap2(array, baseUnary2(iteratee2));
          }
          maxLength = nativeMin2(array.length, maxLength);
          caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache2(othIndex && array) : undefined$1;
        }
        array = arrays[0];
        var index2 = -1, seen = caches[0];
        outer:
          while (++index2 < length && result2.length < maxLength) {
            var value = array[index2], computed = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (!(seen ? cacheHas2(seen, computed) : includes2(result2, computed, comparator))) {
              othIndex = othLength;
              while (--othIndex) {
                var cache = caches[othIndex];
                if (!(cache ? cacheHas2(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                  continue outer;
                }
              }
              if (seen) {
                seen.push(computed);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseInverter(object, setter, iteratee2, accumulator) {
        baseForOwn(object, function(value, key, object2) {
          setter(accumulator, iteratee2(value), key, object2);
        });
        return accumulator;
      }
      function baseInvoke(object, path, args) {
        path = castPath2(path, object);
        object = parent2(object, path);
        var func = object == null ? object : object[toKey2(last2(path))];
        return func == null ? undefined$1 : apply2(func, object, args);
      }
      function baseIsArguments2(value) {
        return isObjectLike2(value) && baseGetTag2(value) == argsTag2;
      }
      function baseIsArrayBuffer(value) {
        return isObjectLike2(value) && baseGetTag2(value) == arrayBufferTag2;
      }
      function baseIsDate(value) {
        return isObjectLike2(value) && baseGetTag2(value) == dateTag2;
      }
      function baseIsEqual2(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike2(value) && !isObjectLike2(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep2(value, other, bitmask, customizer, baseIsEqual2, stack);
      }
      function baseIsEqualDeep2(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray2(object), othIsArr = isArray2(other), objTag = objIsArr ? arrayTag2 : getTag2(object), othTag = othIsArr ? arrayTag2 : getTag2(other);
        objTag = objTag == argsTag2 ? objectTag2 : objTag;
        othTag = othTag == argsTag2 ? objectTag2 : othTag;
        var objIsObj = objTag == objectTag2, othIsObj = othTag == objectTag2, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer2(object)) {
          if (!isBuffer2(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack2());
          return objIsArr || isTypedArray2(object) ? equalArrays2(object, other, bitmask, customizer, equalFunc, stack) : equalByTag2(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG2)) {
          var objIsWrapped = objIsObj && hasOwnProperty2.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty2.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack2());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack2());
        return equalObjects2(object, other, bitmask, customizer, equalFunc, stack);
      }
      function baseIsMap2(value) {
        return isObjectLike2(value) && getTag2(value) == mapTag2;
      }
      function baseIsMatch2(object, source, matchData, customizer) {
        var index2 = matchData.length, length = index2, noCustomizer = !customizer;
        if (object == null) {
          return !length;
        }
        object = Object2(object);
        while (index2--) {
          var data = matchData[index2];
          if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
          }
        }
        while (++index2 < length) {
          data = matchData[index2];
          var key = data[0], objValue = object[key], srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === undefined$1 && !(key in object)) {
              return false;
            }
          } else {
            var stack = new Stack2();
            if (customizer) {
              var result2 = customizer(objValue, srcValue, key, object, source, stack);
            }
            if (!(result2 === undefined$1 ? baseIsEqual2(srcValue, objValue, COMPARE_PARTIAL_FLAG2 | COMPARE_UNORDERED_FLAG2, customizer, stack) : result2)) {
              return false;
            }
          }
        }
        return true;
      }
      function baseIsNative2(value) {
        if (!isObject2(value) || isMasked2(value)) {
          return false;
        }
        var pattern = isFunction2(value) ? reIsNative2 : reIsHostCtor2;
        return pattern.test(toSource2(value));
      }
      function baseIsRegExp(value) {
        return isObjectLike2(value) && baseGetTag2(value) == regexpTag2;
      }
      function baseIsSet2(value) {
        return isObjectLike2(value) && getTag2(value) == setTag2;
      }
      function baseIsTypedArray2(value) {
        return isObjectLike2(value) && isLength2(value.length) && !!typedArrayTags2[baseGetTag2(value)];
      }
      function baseIteratee2(value) {
        if (typeof value == "function") {
          return value;
        }
        if (value == null) {
          return identity2;
        }
        if (typeof value == "object") {
          return isArray2(value) ? baseMatchesProperty2(value[0], value[1]) : baseMatches2(value);
        }
        return property2(value);
      }
      function baseKeys2(object) {
        if (!isPrototype2(object)) {
          return nativeKeys2(object);
        }
        var result2 = [];
        for (var key in Object2(object)) {
          if (hasOwnProperty2.call(object, key) && key != "constructor") {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseKeysIn2(object) {
        if (!isObject2(object)) {
          return nativeKeysIn2(object);
        }
        var isProto = isPrototype2(object), result2 = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty2.call(object, key)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseLt(value, other) {
        return value < other;
      }
      function baseMap(collection, iteratee2) {
        var index2 = -1, result2 = isArrayLike2(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value, key, collection2) {
          result2[++index2] = iteratee2(value, key, collection2);
        });
        return result2;
      }
      function baseMatches2(source) {
        var matchData = getMatchData2(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable2(matchData[0][0], matchData[0][1]);
        }
        return function(object) {
          return object === source || baseIsMatch2(object, source, matchData);
        };
      }
      function baseMatchesProperty2(path, srcValue) {
        if (isKey2(path) && isStrictComparable2(srcValue)) {
          return matchesStrictComparable2(toKey2(path), srcValue);
        }
        return function(object) {
          var objValue = get4(object, path);
          return objValue === undefined$1 && objValue === srcValue ? hasIn2(object, path) : baseIsEqual2(srcValue, objValue, COMPARE_PARTIAL_FLAG2 | COMPARE_UNORDERED_FLAG2);
        };
      }
      function baseMerge(object, source, srcIndex, customizer, stack) {
        if (object === source) {
          return;
        }
        baseFor(source, function(srcValue, key) {
          stack || (stack = new Stack2());
          if (isObject2(srcValue)) {
            baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
          } else {
            var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined$1;
            if (newValue === undefined$1) {
              newValue = srcValue;
            }
            assignMergeValue(object, key, newValue);
          }
        }, keysIn2);
      }
      function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
        var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
        if (stacked) {
          assignMergeValue(object, key, stacked);
          return;
        }
        var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined$1;
        var isCommon = newValue === undefined$1;
        if (isCommon) {
          var isArr = isArray2(srcValue), isBuff = !isArr && isBuffer2(srcValue), isTyped = !isArr && !isBuff && isTypedArray2(srcValue);
          newValue = srcValue;
          if (isArr || isBuff || isTyped) {
            if (isArray2(objValue)) {
              newValue = objValue;
            } else if (isArrayLikeObject(objValue)) {
              newValue = copyArray2(objValue);
            } else if (isBuff) {
              isCommon = false;
              newValue = cloneBuffer2(srcValue, true);
            } else if (isTyped) {
              isCommon = false;
              newValue = cloneTypedArray2(srcValue, true);
            } else {
              newValue = [];
            }
          } else if (isPlainObject2(srcValue) || isArguments2(srcValue)) {
            newValue = objValue;
            if (isArguments2(objValue)) {
              newValue = toPlainObject(objValue);
            } else if (!isObject2(objValue) || isFunction2(objValue)) {
              newValue = initCloneObject2(srcValue);
            }
          } else {
            isCommon = false;
          }
        }
        if (isCommon) {
          stack.set(srcValue, newValue);
          mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
          stack["delete"](srcValue);
        }
        assignMergeValue(object, key, newValue);
      }
      function baseNth(array, n2) {
        var length = array.length;
        if (!length) {
          return;
        }
        n2 += n2 < 0 ? length : 0;
        return isIndex2(n2, length) ? array[n2] : undefined$1;
      }
      function baseOrderBy(collection, iteratees, orders) {
        if (iteratees.length) {
          iteratees = arrayMap2(iteratees, function(iteratee2) {
            if (isArray2(iteratee2)) {
              return function(value) {
                return baseGet2(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
              };
            }
            return iteratee2;
          });
        } else {
          iteratees = [identity2];
        }
        var index2 = -1;
        iteratees = arrayMap2(iteratees, baseUnary2(getIteratee()));
        var result2 = baseMap(collection, function(value, key, collection2) {
          var criteria = arrayMap2(iteratees, function(iteratee2) {
            return iteratee2(value);
          });
          return { "criteria": criteria, "index": ++index2, "value": value };
        });
        return baseSortBy(result2, function(object, other) {
          return compareMultiple(object, other, orders);
        });
      }
      function basePick2(object, paths) {
        return basePickBy2(object, paths, function(value, path) {
          return hasIn2(object, path);
        });
      }
      function basePickBy2(object, paths, predicate) {
        var index2 = -1, length = paths.length, result2 = {};
        while (++index2 < length) {
          var path = paths[index2], value = baseGet2(object, path);
          if (predicate(value, path)) {
            baseSet2(result2, castPath2(path, object), value);
          }
        }
        return result2;
      }
      function basePropertyDeep2(path) {
        return function(object) {
          return baseGet2(object, path);
        };
      }
      function basePullAll(array, values2, iteratee2, comparator) {
        var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index2 = -1, length = values2.length, seen = array;
        if (array === values2) {
          values2 = copyArray2(values2);
        }
        if (iteratee2) {
          seen = arrayMap2(array, baseUnary2(iteratee2));
        }
        while (++index2 < length) {
          var fromIndex = 0, value = values2[index2], computed = iteratee2 ? iteratee2(value) : value;
          while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
            if (seen !== array) {
              splice2.call(seen, fromIndex, 1);
            }
            splice2.call(array, fromIndex, 1);
          }
        }
        return array;
      }
      function basePullAt(array, indexes) {
        var length = array ? indexes.length : 0, lastIndex = length - 1;
        while (length--) {
          var index2 = indexes[length];
          if (length == lastIndex || index2 !== previous) {
            var previous = index2;
            if (isIndex2(index2)) {
              splice2.call(array, index2, 1);
            } else {
              baseUnset2(array, index2);
            }
          }
        }
        return array;
      }
      function baseRandom(lower, upper) {
        return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
      }
      function baseRange(start, end, step, fromRight) {
        var index2 = -1, length = nativeMax2(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
        while (length--) {
          result2[fromRight ? length : ++index2] = start;
          start += step;
        }
        return result2;
      }
      function baseRepeat(string, n2) {
        var result2 = "";
        if (!string || n2 < 1 || n2 > MAX_SAFE_INTEGER2) {
          return result2;
        }
        do {
          if (n2 % 2) {
            result2 += string;
          }
          n2 = nativeFloor(n2 / 2);
          if (n2) {
            string += string;
          }
        } while (n2);
        return result2;
      }
      function baseRest(func, start) {
        return setToString2(overRest2(func, start, identity2), func + "");
      }
      function baseSample(collection) {
        return arraySample(values(collection));
      }
      function baseSampleSize(collection, n2) {
        var array = values(collection);
        return shuffleSelf(array, baseClamp(n2, 0, array.length));
      }
      function baseSet2(object, path, value, customizer) {
        if (!isObject2(object)) {
          return object;
        }
        path = castPath2(path, object);
        var index2 = -1, length = path.length, lastIndex = length - 1, nested = object;
        while (nested != null && ++index2 < length) {
          var key = toKey2(path[index2]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object;
          }
          if (index2 != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
            if (newValue === undefined$1) {
              newValue = isObject2(objValue) ? objValue : isIndex2(path[index2 + 1]) ? [] : {};
            }
          }
          assignValue2(nested, key, newValue);
          nested = nested[key];
        }
        return object;
      }
      var baseSetData = !metaMap ? identity2 : function(func, data) {
        metaMap.set(func, data);
        return func;
      };
      var baseSetToString2 = !defineProperty2 ? identity2 : function(func, string) {
        return defineProperty2(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant2(string),
          "writable": true
        });
      };
      function baseShuffle(collection) {
        return shuffleSelf(values(collection));
      }
      function baseSlice2(array, start, end) {
        var index2 = -1, length = array.length;
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end > length ? length : end;
        if (end < 0) {
          end += length;
        }
        length = start > end ? 0 : end - start >>> 0;
        start >>>= 0;
        var result2 = Array2(length);
        while (++index2 < length) {
          result2[index2] = array[index2 + start];
        }
        return result2;
      }
      function baseSome(collection, predicate) {
        var result2;
        baseEach(collection, function(value, index2, collection2) {
          result2 = predicate(value, index2, collection2);
          return !result2;
        });
        return !!result2;
      }
      function baseSortedIndex(array, value, retHighest) {
        var low = 0, high = array == null ? low : array.length;
        if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
          while (low < high) {
            var mid = low + high >>> 1, computed = array[mid];
            if (computed !== null && !isSymbol2(computed) && (retHighest ? computed <= value : computed < value)) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return high;
        }
        return baseSortedIndexBy(array, value, identity2, retHighest);
      }
      function baseSortedIndexBy(array, value, iteratee2, retHighest) {
        var low = 0, high = array == null ? 0 : array.length;
        if (high === 0) {
          return 0;
        }
        value = iteratee2(value);
        var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol2(value), valIsUndefined = value === undefined$1;
        while (low < high) {
          var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined$1, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol2(computed);
          if (valIsNaN) {
            var setLow = retHighest || othIsReflexive;
          } else if (valIsUndefined) {
            setLow = othIsReflexive && (retHighest || othIsDefined);
          } else if (valIsNull) {
            setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
          } else if (valIsSymbol) {
            setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
          } else if (othIsNull || othIsSymbol) {
            setLow = false;
          } else {
            setLow = retHighest ? computed <= value : computed < value;
          }
          if (setLow) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return nativeMin2(high, MAX_ARRAY_INDEX);
      }
      function baseSortedUniq(array, iteratee2) {
        var index2 = -1, length = array.length, resIndex = 0, result2 = [];
        while (++index2 < length) {
          var value = array[index2], computed = iteratee2 ? iteratee2(value) : value;
          if (!index2 || !eq2(computed, seen)) {
            var seen = computed;
            result2[resIndex++] = value === 0 ? 0 : value;
          }
        }
        return result2;
      }
      function baseToNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol2(value)) {
          return NAN2;
        }
        return +value;
      }
      function baseToString2(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray2(value)) {
          return arrayMap2(value, baseToString2) + "";
        }
        if (isSymbol2(value)) {
          return symbolToString2 ? symbolToString2.call(value) : "";
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY2 ? "-0" : result2;
      }
      function baseUniq(array, iteratee2, comparator) {
        var index2 = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
        if (comparator) {
          isCommon = false;
          includes2 = arrayIncludesWith;
        } else if (length >= LARGE_ARRAY_SIZE2) {
          var set2 = iteratee2 ? null : createSet(array);
          if (set2) {
            return setToArray2(set2);
          }
          isCommon = false;
          includes2 = cacheHas2;
          seen = new SetCache2();
        } else {
          seen = iteratee2 ? [] : result2;
        }
        outer:
          while (++index2 < length) {
            var value = array[index2], computed = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed === computed) {
              var seenIndex = seen.length;
              while (seenIndex--) {
                if (seen[seenIndex] === computed) {
                  continue outer;
                }
              }
              if (iteratee2) {
                seen.push(computed);
              }
              result2.push(value);
            } else if (!includes2(seen, computed, comparator)) {
              if (seen !== result2) {
                seen.push(computed);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseUnset2(object, path) {
        path = castPath2(path, object);
        object = parent2(object, path);
        return object == null || delete object[toKey2(last2(path))];
      }
      function baseUpdate(object, path, updater, customizer) {
        return baseSet2(object, path, updater(baseGet2(object, path)), customizer);
      }
      function baseWhile(array, predicate, isDrop, fromRight) {
        var length = array.length, index2 = fromRight ? length : -1;
        while ((fromRight ? index2-- : ++index2 < length) && predicate(array[index2], index2, array)) {
        }
        return isDrop ? baseSlice2(array, fromRight ? 0 : index2, fromRight ? index2 + 1 : length) : baseSlice2(array, fromRight ? index2 + 1 : 0, fromRight ? length : index2);
      }
      function baseWrapperValue(value, actions) {
        var result2 = value;
        if (result2 instanceof LazyWrapper) {
          result2 = result2.value();
        }
        return arrayReduce(actions, function(result3, action) {
          return action.func.apply(action.thisArg, arrayPush2([result3], action.args));
        }, result2);
      }
      function baseXor(arrays, iteratee2, comparator) {
        var length = arrays.length;
        if (length < 2) {
          return length ? baseUniq(arrays[0]) : [];
        }
        var index2 = -1, result2 = Array2(length);
        while (++index2 < length) {
          var array = arrays[index2], othIndex = -1;
          while (++othIndex < length) {
            if (othIndex != index2) {
              result2[index2] = baseDifference(result2[index2] || array, arrays[othIndex], iteratee2, comparator);
            }
          }
        }
        return baseUniq(baseFlatten2(result2, 1), iteratee2, comparator);
      }
      function baseZipObject(props, values2, assignFunc) {
        var index2 = -1, length = props.length, valsLength = values2.length, result2 = {};
        while (++index2 < length) {
          var value = index2 < valsLength ? values2[index2] : undefined$1;
          assignFunc(result2, props[index2], value);
        }
        return result2;
      }
      function castArrayLikeObject(value) {
        return isArrayLikeObject(value) ? value : [];
      }
      function castFunction(value) {
        return typeof value == "function" ? value : identity2;
      }
      function castPath2(value, object) {
        if (isArray2(value)) {
          return value;
        }
        return isKey2(value, object) ? [value] : stringToPath2(toString2(value));
      }
      var castRest = baseRest;
      function castSlice(array, start, end) {
        var length = array.length;
        end = end === undefined$1 ? length : end;
        return !start && end >= length ? array : baseSlice2(array, start, end);
      }
      var clearTimeout2 = ctxClearTimeout || function(id2) {
        return root2.clearTimeout(id2);
      };
      function cloneBuffer2(buffer, isDeep) {
        if (isDeep) {
          return buffer.slice();
        }
        var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
        buffer.copy(result2);
        return result2;
      }
      function cloneArrayBuffer2(arrayBuffer) {
        var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
        return result2;
      }
      function cloneDataView2(dataView, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer2(dataView.buffer) : dataView.buffer;
        return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
      }
      function cloneRegExp2(regexp) {
        var result2 = new regexp.constructor(regexp.source, reFlags2.exec(regexp));
        result2.lastIndex = regexp.lastIndex;
        return result2;
      }
      function cloneSymbol2(symbol) {
        return symbolValueOf2 ? Object2(symbolValueOf2.call(symbol)) : {};
      }
      function cloneTypedArray2(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer2(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      function compareAscending(value, other) {
        if (value !== other) {
          var valIsDefined = value !== undefined$1, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol2(value);
          var othIsDefined = other !== undefined$1, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol2(other);
          if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
            return 1;
          }
          if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
            return -1;
          }
        }
        return 0;
      }
      function compareMultiple(object, other, orders) {
        var index2 = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
        while (++index2 < length) {
          var result2 = compareAscending(objCriteria[index2], othCriteria[index2]);
          if (result2) {
            if (index2 >= ordersLength) {
              return result2;
            }
            var order = orders[index2];
            return result2 * (order == "desc" ? -1 : 1);
          }
        }
        return object.index - other.index;
      }
      function composeArgs(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax2(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
        while (++leftIndex < leftLength) {
          result2[leftIndex] = partials[leftIndex];
        }
        while (++argsIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[holders[argsIndex]] = args[argsIndex];
          }
        }
        while (rangeLength--) {
          result2[leftIndex++] = args[argsIndex++];
        }
        return result2;
      }
      function composeArgsRight(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax2(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
        while (++argsIndex < rangeLength) {
          result2[argsIndex] = args[argsIndex];
        }
        var offset = argsIndex;
        while (++rightIndex < rightLength) {
          result2[offset + rightIndex] = partials[rightIndex];
        }
        while (++holdersIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[offset + holders[holdersIndex]] = args[argsIndex++];
          }
        }
        return result2;
      }
      function copyArray2(source, array) {
        var index2 = -1, length = source.length;
        array || (array = Array2(length));
        while (++index2 < length) {
          array[index2] = source[index2];
        }
        return array;
      }
      function copyObject2(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index2 = -1, length = props.length;
        while (++index2 < length) {
          var key = props[index2];
          var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined$1;
          if (newValue === undefined$1) {
            newValue = source[key];
          }
          if (isNew) {
            baseAssignValue2(object, key, newValue);
          } else {
            assignValue2(object, key, newValue);
          }
        }
        return object;
      }
      function copySymbols2(source, object) {
        return copyObject2(source, getSymbols2(source), object);
      }
      function copySymbolsIn2(source, object) {
        return copyObject2(source, getSymbolsIn2(source), object);
      }
      function createAggregator(setter, initializer) {
        return function(collection, iteratee2) {
          var func = isArray2(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
          return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
        };
      }
      function createAssigner(assigner) {
        return baseRest(function(object, sources) {
          var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined$1, guard = length > 2 ? sources[2] : undefined$1;
          customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined$1;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined$1 : customizer;
            length = 1;
          }
          object = Object2(object);
          while (++index2 < length) {
            var source = sources[index2];
            if (source) {
              assigner(object, source, index2, customizer);
            }
          }
          return object;
        });
      }
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee2) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike2(collection)) {
            return eachFunc(collection, iteratee2);
          }
          var length = collection.length, index2 = fromRight ? length : -1, iterable = Object2(collection);
          while (fromRight ? index2-- : ++index2 < length) {
            if (iteratee2(iterable[index2], index2, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      function createBaseFor(fromRight) {
        return function(object, iteratee2, keysFunc) {
          var index2 = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index2];
            if (iteratee2(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      function createBind(func, bitmask, thisArg) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var fn = this && this !== root2 && this instanceof wrapper ? Ctor : func;
          return fn.apply(isBind ? thisArg : this, arguments);
        }
        return wrapper;
      }
      function createCaseFirst(methodName) {
        return function(string) {
          string = toString2(string);
          var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined$1;
          var chr = strSymbols ? strSymbols[0] : string.charAt(0);
          var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
          return chr[methodName]() + trailing;
        };
      }
      function createCompounder(callback) {
        return function(string) {
          return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
        };
      }
      function createCtor(Ctor) {
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return new Ctor();
            case 1:
              return new Ctor(args[0]);
            case 2:
              return new Ctor(args[0], args[1]);
            case 3:
              return new Ctor(args[0], args[1], args[2]);
            case 4:
              return new Ctor(args[0], args[1], args[2], args[3]);
            case 5:
              return new Ctor(args[0], args[1], args[2], args[3], args[4]);
            case 6:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
            case 7:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
          }
          var thisBinding = baseCreate2(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
          return isObject2(result2) ? result2 : thisBinding;
        };
      }
      function createCurry(func, bitmask, arity) {
        var Ctor = createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index2 = length, placeholder = getHolder(wrapper);
          while (index2--) {
            args[index2] = arguments[index2];
          }
          var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
          length -= holders.length;
          if (length < arity) {
            return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined$1, args, holders, undefined$1, undefined$1, arity - length);
          }
          var fn = this && this !== root2 && this instanceof wrapper ? Ctor : func;
          return apply2(fn, this, args);
        }
        return wrapper;
      }
      function createFind(findIndexFunc) {
        return function(collection, predicate, fromIndex) {
          var iterable = Object2(collection);
          if (!isArrayLike2(collection)) {
            var iteratee2 = getIteratee(predicate, 3);
            collection = keys2(collection);
            predicate = function(key) {
              return iteratee2(iterable[key], key, iterable);
            };
          }
          var index2 = findIndexFunc(collection, predicate, fromIndex);
          return index2 > -1 ? iterable[iteratee2 ? collection[index2] : index2] : undefined$1;
        };
      }
      function createFlow(fromRight) {
        return flatRest2(function(funcs) {
          var length = funcs.length, index2 = length, prereq = LodashWrapper.prototype.thru;
          if (fromRight) {
            funcs.reverse();
          }
          while (index2--) {
            var func = funcs[index2];
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT2);
            }
            if (prereq && !wrapper && getFuncName(func) == "wrapper") {
              var wrapper = new LodashWrapper([], true);
            }
          }
          index2 = wrapper ? index2 : length;
          while (++index2 < length) {
            func = funcs[index2];
            var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined$1;
            if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
              wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
            } else {
              wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
            }
          }
          return function() {
            var args = arguments, value = args[0];
            if (wrapper && args.length == 1 && isArray2(value)) {
              return wrapper.plant(value).value();
            }
            var index3 = 0, result2 = length ? funcs[index3].apply(this, args) : value;
            while (++index3 < length) {
              result2 = funcs[index3].call(this, result2);
            }
            return result2;
          };
        });
      }
      function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
        var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined$1 : createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index2 = length;
          while (index2--) {
            args[index2] = arguments[index2];
          }
          if (isCurried) {
            var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
          }
          if (partials) {
            args = composeArgs(args, partials, holders, isCurried);
          }
          if (partialsRight) {
            args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
          }
          length -= holdersCount;
          if (isCurried && length < arity) {
            var newHolders = replaceHolders(args, placeholder);
            return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary2, arity - length);
          }
          var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
          length = args.length;
          if (argPos) {
            args = reorder(args, argPos);
          } else if (isFlip && length > 1) {
            args.reverse();
          }
          if (isAry && ary2 < length) {
            args.length = ary2;
          }
          if (this && this !== root2 && this instanceof wrapper) {
            fn = Ctor || createCtor(fn);
          }
          return fn.apply(thisBinding, args);
        }
        return wrapper;
      }
      function createInverter(setter, toIteratee) {
        return function(object, iteratee2) {
          return baseInverter(object, setter, toIteratee(iteratee2), {});
        };
      }
      function createMathOperation(operator, defaultValue) {
        return function(value, other) {
          var result2;
          if (value === undefined$1 && other === undefined$1) {
            return defaultValue;
          }
          if (value !== undefined$1) {
            result2 = value;
          }
          if (other !== undefined$1) {
            if (result2 === undefined$1) {
              return other;
            }
            if (typeof value == "string" || typeof other == "string") {
              value = baseToString2(value);
              other = baseToString2(other);
            } else {
              value = baseToNumber(value);
              other = baseToNumber(other);
            }
            result2 = operator(value, other);
          }
          return result2;
        };
      }
      function createOver(arrayFunc) {
        return flatRest2(function(iteratees) {
          iteratees = arrayMap2(iteratees, baseUnary2(getIteratee()));
          return baseRest(function(args) {
            var thisArg = this;
            return arrayFunc(iteratees, function(iteratee2) {
              return apply2(iteratee2, thisArg, args);
            });
          });
        });
      }
      function createPadding(length, chars) {
        chars = chars === undefined$1 ? " " : baseToString2(chars);
        var charsLength = chars.length;
        if (charsLength < 2) {
          return charsLength ? baseRepeat(chars, length) : chars;
        }
        var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
        return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
      }
      function createPartial(func, bitmask, thisArg, partials) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root2 && this instanceof wrapper ? Ctor : func;
          while (++leftIndex < leftLength) {
            args[leftIndex] = partials[leftIndex];
          }
          while (argsLength--) {
            args[leftIndex++] = arguments[++argsIndex];
          }
          return apply2(fn, isBind ? thisArg : this, args);
        }
        return wrapper;
      }
      function createRange(fromRight) {
        return function(start, end, step) {
          if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
            end = step = undefined$1;
          }
          start = toFinite2(start);
          if (end === undefined$1) {
            end = start;
            start = 0;
          } else {
            end = toFinite2(end);
          }
          step = step === undefined$1 ? start < end ? 1 : -1 : toFinite2(step);
          return baseRange(start, end, step, fromRight);
        };
      }
      function createRelationalOperation(operator) {
        return function(value, other) {
          if (!(typeof value == "string" && typeof other == "string")) {
            value = toNumber2(value);
            other = toNumber2(other);
          }
          return operator(value, other);
        };
      }
      function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
        var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined$1, newHoldersRight = isCurry ? undefined$1 : holders, newPartials = isCurry ? partials : undefined$1, newPartialsRight = isCurry ? undefined$1 : partials;
        bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
        bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
        if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
          bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
        }
        var newData = [
          func,
          bitmask,
          thisArg,
          newPartials,
          newHolders,
          newPartialsRight,
          newHoldersRight,
          argPos,
          ary2,
          arity
        ];
        var result2 = wrapFunc.apply(undefined$1, newData);
        if (isLaziable(func)) {
          setData(result2, newData);
        }
        result2.placeholder = placeholder;
        return setWrapToString(result2, func, bitmask);
      }
      function createRound(methodName) {
        var func = Math2[methodName];
        return function(number, precision) {
          number = toNumber2(number);
          precision = precision == null ? 0 : nativeMin2(toInteger2(precision), 292);
          if (precision && nativeIsFinite(number)) {
            var pair = (toString2(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
            pair = (toString2(value) + "e").split("e");
            return +(pair[0] + "e" + (+pair[1] - precision));
          }
          return func(number);
        };
      }
      var createSet = !(Set2 && 1 / setToArray2(new Set2([, -0]))[1] == INFINITY2) ? noop2 : function(values2) {
        return new Set2(values2);
      };
      function createToPairs(keysFunc) {
        return function(object) {
          var tag = getTag2(object);
          if (tag == mapTag2) {
            return mapToArray2(object);
          }
          if (tag == setTag2) {
            return setToPairs(object);
          }
          return baseToPairs(object, keysFunc(object));
        };
      }
      function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
        var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
        if (!isBindKey && typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        var length = partials ? partials.length : 0;
        if (!length) {
          bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
          partials = holders = undefined$1;
        }
        ary2 = ary2 === undefined$1 ? ary2 : nativeMax2(toInteger2(ary2), 0);
        arity = arity === undefined$1 ? arity : toInteger2(arity);
        length -= holders ? holders.length : 0;
        if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
          var partialsRight = partials, holdersRight = holders;
          partials = holders = undefined$1;
        }
        var data = isBindKey ? undefined$1 : getData(func);
        var newData = [
          func,
          bitmask,
          thisArg,
          partials,
          holders,
          partialsRight,
          holdersRight,
          argPos,
          ary2,
          arity
        ];
        if (data) {
          mergeData(newData, data);
        }
        func = newData[0];
        bitmask = newData[1];
        thisArg = newData[2];
        partials = newData[3];
        holders = newData[4];
        arity = newData[9] = newData[9] === undefined$1 ? isBindKey ? 0 : func.length : nativeMax2(newData[9] - length, 0);
        if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
          bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
        }
        if (!bitmask || bitmask == WRAP_BIND_FLAG) {
          var result2 = createBind(func, bitmask, thisArg);
        } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
          result2 = createCurry(func, bitmask, arity);
        } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
          result2 = createPartial(func, bitmask, thisArg, partials);
        } else {
          result2 = createHybrid.apply(undefined$1, newData);
        }
        var setter = data ? baseSetData : setData;
        return setWrapToString(setter(result2, newData), func, bitmask);
      }
      function customDefaultsAssignIn(objValue, srcValue, key, object) {
        if (objValue === undefined$1 || eq2(objValue, objectProto2[key]) && !hasOwnProperty2.call(object, key)) {
          return srcValue;
        }
        return objValue;
      }
      function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
        if (isObject2(objValue) && isObject2(srcValue)) {
          stack.set(srcValue, objValue);
          baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
          stack["delete"](srcValue);
        }
        return objValue;
      }
      function customOmitClone2(value) {
        return isPlainObject2(value) ? undefined$1 : value;
      }
      function equalArrays2(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG2, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array;
        }
        var index2 = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG2 ? new SetCache2() : undefined$1;
        stack.set(array, other);
        stack.set(other, array);
        while (++index2 < arrLength) {
          var arrValue = array[index2], othValue = other[index2];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
          }
          if (compared !== undefined$1) {
            if (compared) {
              continue;
            }
            result2 = false;
            break;
          }
          if (seen) {
            if (!arraySome2(other, function(othValue2, othIndex) {
              if (!cacheHas2(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result2 = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result2 = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result2;
      }
      function equalByTag2(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag2:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag2:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag2:
          case dateTag2:
          case numberTag2:
            return eq2(+object, +other);
          case errorTag2:
            return object.name == other.name && object.message == other.message;
          case regexpTag2:
          case stringTag2:
            return object == other + "";
          case mapTag2:
            var convert = mapToArray2;
          case setTag2:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG2;
            convert || (convert = setToArray2);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG2;
            stack.set(object, other);
            var result2 = equalArrays2(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result2;
          case symbolTag2:
            if (symbolValueOf2) {
              return symbolValueOf2.call(object) == symbolValueOf2.call(other);
            }
        }
        return false;
      }
      function equalObjects2(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG2, objProps = getAllKeys2(object), objLength = objProps.length, othProps = getAllKeys2(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index2 = objLength;
        while (index2--) {
          var key = objProps[index2];
          if (!(isPartial ? key in other : hasOwnProperty2.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result2 = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index2 < objLength) {
          key = objProps[index2];
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === undefined$1 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result2 = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result2 && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result2 = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result2;
      }
      function flatRest2(func) {
        return setToString2(overRest2(func, undefined$1, flatten2), func + "");
      }
      function getAllKeys2(object) {
        return baseGetAllKeys2(object, keys2, getSymbols2);
      }
      function getAllKeysIn2(object) {
        return baseGetAllKeys2(object, keysIn2, getSymbolsIn2);
      }
      var getData = !metaMap ? noop2 : function(func) {
        return metaMap.get(func);
      };
      function getFuncName(func) {
        var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty2.call(realNames, result2) ? array.length : 0;
        while (length--) {
          var data = array[length], otherFunc = data.func;
          if (otherFunc == null || otherFunc == func) {
            return data.name;
          }
        }
        return result2;
      }
      function getHolder(func) {
        var object = hasOwnProperty2.call(lodash2, "placeholder") ? lodash2 : func;
        return object.placeholder;
      }
      function getIteratee() {
        var result2 = lodash2.iteratee || iteratee;
        result2 = result2 === iteratee ? baseIteratee2 : result2;
        return arguments.length ? result2(arguments[0], arguments[1]) : result2;
      }
      function getMapData2(map2, key) {
        var data = map2.__data__;
        return isKeyable2(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      function getMatchData2(object) {
        var result2 = keys2(object), length = result2.length;
        while (length--) {
          var key = result2[length], value = object[key];
          result2[length] = [key, value, isStrictComparable2(value)];
        }
        return result2;
      }
      function getNative2(object, key) {
        var value = getValue2(object, key);
        return baseIsNative2(value) ? value : undefined$1;
      }
      function getRawTag2(value) {
        var isOwn = hasOwnProperty2.call(value, symToStringTag2), tag = value[symToStringTag2];
        try {
          value[symToStringTag2] = undefined$1;
          var unmasked = true;
        } catch (e) {
        }
        var result2 = nativeObjectToString2.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag2] = tag;
          } else {
            delete value[symToStringTag2];
          }
        }
        return result2;
      }
      var getSymbols2 = !nativeGetSymbols2 ? stubArray2 : function(object) {
        if (object == null) {
          return [];
        }
        object = Object2(object);
        return arrayFilter2(nativeGetSymbols2(object), function(symbol) {
          return propertyIsEnumerable2.call(object, symbol);
        });
      };
      var getSymbolsIn2 = !nativeGetSymbols2 ? stubArray2 : function(object) {
        var result2 = [];
        while (object) {
          arrayPush2(result2, getSymbols2(object));
          object = getPrototype2(object);
        }
        return result2;
      };
      var getTag2 = baseGetTag2;
      if (DataView2 && getTag2(new DataView2(new ArrayBuffer(1))) != dataViewTag2 || Map2 && getTag2(new Map2()) != mapTag2 || Promise2 && getTag2(Promise2.resolve()) != promiseTag2 || Set2 && getTag2(new Set2()) != setTag2 || WeakMap2 && getTag2(new WeakMap2()) != weakMapTag2) {
        getTag2 = function(value) {
          var result2 = baseGetTag2(value), Ctor = result2 == objectTag2 ? value.constructor : undefined$1, ctorString = Ctor ? toSource2(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString2:
                return dataViewTag2;
              case mapCtorString2:
                return mapTag2;
              case promiseCtorString2:
                return promiseTag2;
              case setCtorString2:
                return setTag2;
              case weakMapCtorString2:
                return weakMapTag2;
            }
          }
          return result2;
        };
      }
      function getView(start, end, transforms) {
        var index2 = -1, length = transforms.length;
        while (++index2 < length) {
          var data = transforms[index2], size3 = data.size;
          switch (data.type) {
            case "drop":
              start += size3;
              break;
            case "dropRight":
              end -= size3;
              break;
            case "take":
              end = nativeMin2(end, start + size3);
              break;
            case "takeRight":
              start = nativeMax2(start, end - size3);
              break;
          }
        }
        return { "start": start, "end": end };
      }
      function getWrapDetails(source) {
        var match = source.match(reWrapDetails);
        return match ? match[1].split(reSplitDetails) : [];
      }
      function hasPath2(object, path, hasFunc) {
        path = castPath2(path, object);
        var index2 = -1, length = path.length, result2 = false;
        while (++index2 < length) {
          var key = toKey2(path[index2]);
          if (!(result2 = object != null && hasFunc(object, key))) {
            break;
          }
          object = object[key];
        }
        if (result2 || ++index2 != length) {
          return result2;
        }
        length = object == null ? 0 : object.length;
        return !!length && isLength2(length) && isIndex2(key, length) && (isArray2(object) || isArguments2(object));
      }
      function initCloneArray2(array) {
        var length = array.length, result2 = new array.constructor(length);
        if (length && typeof array[0] == "string" && hasOwnProperty2.call(array, "index")) {
          result2.index = array.index;
          result2.input = array.input;
        }
        return result2;
      }
      function initCloneObject2(object) {
        return typeof object.constructor == "function" && !isPrototype2(object) ? baseCreate2(getPrototype2(object)) : {};
      }
      function initCloneByTag2(object, tag, isDeep) {
        var Ctor = object.constructor;
        switch (tag) {
          case arrayBufferTag2:
            return cloneArrayBuffer2(object);
          case boolTag2:
          case dateTag2:
            return new Ctor(+object);
          case dataViewTag2:
            return cloneDataView2(object, isDeep);
          case float32Tag2:
          case float64Tag2:
          case int8Tag2:
          case int16Tag2:
          case int32Tag2:
          case uint8Tag2:
          case uint8ClampedTag2:
          case uint16Tag2:
          case uint32Tag2:
            return cloneTypedArray2(object, isDeep);
          case mapTag2:
            return new Ctor();
          case numberTag2:
          case stringTag2:
            return new Ctor(object);
          case regexpTag2:
            return cloneRegExp2(object);
          case setTag2:
            return new Ctor();
          case symbolTag2:
            return cloneSymbol2(object);
        }
      }
      function insertWrapDetails(source, details) {
        var length = details.length;
        if (!length) {
          return source;
        }
        var lastIndex = length - 1;
        details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
        details = details.join(length > 2 ? ", " : " ");
        return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
      }
      function isFlattenable2(value) {
        return isArray2(value) || isArguments2(value) || !!(spreadableSymbol2 && value && value[spreadableSymbol2]);
      }
      function isIndex2(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER2 : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint2.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      function isIterateeCall(value, index2, object) {
        if (!isObject2(object)) {
          return false;
        }
        var type = typeof index2;
        if (type == "number" ? isArrayLike2(object) && isIndex2(index2, object.length) : type == "string" && index2 in object) {
          return eq2(object[index2], value);
        }
        return false;
      }
      function isKey2(value, object) {
        if (isArray2(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol2(value)) {
          return true;
        }
        return reIsPlainProp2.test(value) || !reIsDeepProp2.test(value) || object != null && value in Object2(object);
      }
      function isKeyable2(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      function isLaziable(func) {
        var funcName = getFuncName(func), other = lodash2[funcName];
        if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
          return false;
        }
        if (func === other) {
          return true;
        }
        var data = getData(other);
        return !!data && func === data[0];
      }
      function isMasked2(func) {
        return !!maskSrcKey2 && maskSrcKey2 in func;
      }
      var isMaskable = coreJsData2 ? isFunction2 : stubFalse2;
      function isPrototype2(value) {
        var Ctor = value && value.constructor, proto2 = typeof Ctor == "function" && Ctor.prototype || objectProto2;
        return value === proto2;
      }
      function isStrictComparable2(value) {
        return value === value && !isObject2(value);
      }
      function matchesStrictComparable2(key, srcValue) {
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === srcValue && (srcValue !== undefined$1 || key in Object2(object));
        };
      }
      function memoizeCapped2(func) {
        var result2 = memoize2(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE2) {
            cache.clear();
          }
          return key;
        });
        var cache = result2.cache;
        return result2;
      }
      function mergeData(data, source) {
        var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
        var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
        if (!(isCommon || isCombo)) {
          return data;
        }
        if (srcBitmask & WRAP_BIND_FLAG) {
          data[2] = source[2];
          newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
        }
        var value = source[3];
        if (value) {
          var partials = data[3];
          data[3] = partials ? composeArgs(partials, value, source[4]) : value;
          data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
        }
        value = source[5];
        if (value) {
          partials = data[5];
          data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
          data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
        }
        value = source[7];
        if (value) {
          data[7] = value;
        }
        if (srcBitmask & WRAP_ARY_FLAG) {
          data[8] = data[8] == null ? source[8] : nativeMin2(data[8], source[8]);
        }
        if (data[9] == null) {
          data[9] = source[9];
        }
        data[0] = source[0];
        data[1] = newBitmask;
        return data;
      }
      function nativeKeysIn2(object) {
        var result2 = [];
        if (object != null) {
          for (var key in Object2(object)) {
            result2.push(key);
          }
        }
        return result2;
      }
      function objectToString2(value) {
        return nativeObjectToString2.call(value);
      }
      function overRest2(func, start, transform2) {
        start = nativeMax2(start === undefined$1 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index2 = -1, length = nativeMax2(args.length - start, 0), array = Array2(length);
          while (++index2 < length) {
            array[index2] = args[start + index2];
          }
          index2 = -1;
          var otherArgs = Array2(start + 1);
          while (++index2 < start) {
            otherArgs[index2] = args[index2];
          }
          otherArgs[start] = transform2(array);
          return apply2(func, this, otherArgs);
        };
      }
      function parent2(object, path) {
        return path.length < 2 ? object : baseGet2(object, baseSlice2(path, 0, -1));
      }
      function reorder(array, indexes) {
        var arrLength = array.length, length = nativeMin2(indexes.length, arrLength), oldArray = copyArray2(array);
        while (length--) {
          var index2 = indexes[length];
          array[length] = isIndex2(index2, arrLength) ? oldArray[index2] : undefined$1;
        }
        return array;
      }
      function safeGet(object, key) {
        if (key === "constructor" && typeof object[key] === "function") {
          return;
        }
        if (key == "__proto__") {
          return;
        }
        return object[key];
      }
      var setData = shortOut2(baseSetData);
      var setTimeout2 = ctxSetTimeout || function(func, wait) {
        return root2.setTimeout(func, wait);
      };
      var setToString2 = shortOut2(baseSetToString2);
      function setWrapToString(wrapper, reference, bitmask) {
        var source = reference + "";
        return setToString2(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
      }
      function shortOut2(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow2(), remaining = HOT_SPAN2 - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT2) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(undefined$1, arguments);
        };
      }
      function shuffleSelf(array, size3) {
        var index2 = -1, length = array.length, lastIndex = length - 1;
        size3 = size3 === undefined$1 ? length : size3;
        while (++index2 < size3) {
          var rand = baseRandom(index2, lastIndex), value = array[rand];
          array[rand] = array[index2];
          array[index2] = value;
        }
        array.length = size3;
        return array;
      }
      var stringToPath2 = memoizeCapped2(function(string) {
        var result2 = [];
        if (string.charCodeAt(0) === 46) {
          result2.push("");
        }
        string.replace(rePropName2, function(match, number, quote, subString) {
          result2.push(quote ? subString.replace(reEscapeChar2, "$1") : number || match);
        });
        return result2;
      });
      function toKey2(value) {
        if (typeof value == "string" || isSymbol2(value)) {
          return value;
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY2 ? "-0" : result2;
      }
      function toSource2(func) {
        if (func != null) {
          try {
            return funcToString2.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      function updateWrapDetails(details, bitmask) {
        arrayEach2(wrapFlags, function(pair) {
          var value = "_." + pair[0];
          if (bitmask & pair[1] && !arrayIncludes(details, value)) {
            details.push(value);
          }
        });
        return details.sort();
      }
      function wrapperClone(wrapper) {
        if (wrapper instanceof LazyWrapper) {
          return wrapper.clone();
        }
        var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
        result2.__actions__ = copyArray2(wrapper.__actions__);
        result2.__index__ = wrapper.__index__;
        result2.__values__ = wrapper.__values__;
        return result2;
      }
      function chunk(array, size3, guard) {
        if (guard ? isIterateeCall(array, size3, guard) : size3 === undefined$1) {
          size3 = 1;
        } else {
          size3 = nativeMax2(toInteger2(size3), 0);
        }
        var length = array == null ? 0 : array.length;
        if (!length || size3 < 1) {
          return [];
        }
        var index2 = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size3));
        while (index2 < length) {
          result2[resIndex++] = baseSlice2(array, index2, index2 += size3);
        }
        return result2;
      }
      function compact(array) {
        var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
        while (++index2 < length) {
          var value = array[index2];
          if (value) {
            result2[resIndex++] = value;
          }
        }
        return result2;
      }
      function concat() {
        var length = arguments.length;
        if (!length) {
          return [];
        }
        var args = Array2(length - 1), array = arguments[0], index2 = length;
        while (index2--) {
          args[index2 - 1] = arguments[index2];
        }
        return arrayPush2(isArray2(array) ? copyArray2(array) : [array], baseFlatten2(args, 1));
      }
      var difference = baseRest(function(array, values2) {
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten2(values2, 1, isArrayLikeObject, true)) : [];
      });
      var differenceBy = baseRest(function(array, values2) {
        var iteratee2 = last2(values2);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten2(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
      });
      var differenceWith = baseRest(function(array, values2) {
        var comparator = last2(values2);
        if (isArrayLikeObject(comparator)) {
          comparator = undefined$1;
        }
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten2(values2, 1, isArrayLikeObject, true), undefined$1, comparator) : [];
      });
      function drop(array, n2, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n2 = guard || n2 === undefined$1 ? 1 : toInteger2(n2);
        return baseSlice2(array, n2 < 0 ? 0 : n2, length);
      }
      function dropRight(array, n2, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n2 = guard || n2 === undefined$1 ? 1 : toInteger2(n2);
        n2 = length - n2;
        return baseSlice2(array, 0, n2 < 0 ? 0 : n2);
      }
      function dropRightWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
      }
      function dropWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
      }
      function fill(array, value, start, end) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
          start = 0;
          end = length;
        }
        return baseFill(array, value, start, end);
      }
      function findIndex2(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index2 = fromIndex == null ? 0 : toInteger2(fromIndex);
        if (index2 < 0) {
          index2 = nativeMax2(length + index2, 0);
        }
        return baseFindIndex2(array, getIteratee(predicate, 3), index2);
      }
      function findLastIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index2 = length - 1;
        if (fromIndex !== undefined$1) {
          index2 = toInteger2(fromIndex);
          index2 = fromIndex < 0 ? nativeMax2(length + index2, 0) : nativeMin2(index2, length - 1);
        }
        return baseFindIndex2(array, getIteratee(predicate, 3), index2, true);
      }
      function flatten2(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten2(array, 1) : [];
      }
      function flattenDeep(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten2(array, INFINITY2) : [];
      }
      function flattenDepth(array, depth) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        depth = depth === undefined$1 ? 1 : toInteger2(depth);
        return baseFlatten2(array, depth);
      }
      function fromPairs(pairs) {
        var index2 = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
        while (++index2 < length) {
          var pair = pairs[index2];
          result2[pair[0]] = pair[1];
        }
        return result2;
      }
      function head(array) {
        return array && array.length ? array[0] : undefined$1;
      }
      function indexOf(array, value, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index2 = fromIndex == null ? 0 : toInteger2(fromIndex);
        if (index2 < 0) {
          index2 = nativeMax2(length + index2, 0);
        }
        return baseIndexOf(array, value, index2);
      }
      function initial(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseSlice2(array, 0, -1) : [];
      }
      var intersection2 = baseRest(function(arrays) {
        var mapped = arrayMap2(arrays, castArrayLikeObject);
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
      });
      var intersectionBy = baseRest(function(arrays) {
        var iteratee2 = last2(arrays), mapped = arrayMap2(arrays, castArrayLikeObject);
        if (iteratee2 === last2(mapped)) {
          iteratee2 = undefined$1;
        } else {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
      });
      var intersectionWith = baseRest(function(arrays) {
        var comparator = last2(arrays), mapped = arrayMap2(arrays, castArrayLikeObject);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        if (comparator) {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined$1, comparator) : [];
      });
      function join(array, separator) {
        return array == null ? "" : nativeJoin.call(array, separator);
      }
      function last2(array) {
        var length = array == null ? 0 : array.length;
        return length ? array[length - 1] : undefined$1;
      }
      function lastIndexOf(array, value, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index2 = length;
        if (fromIndex !== undefined$1) {
          index2 = toInteger2(fromIndex);
          index2 = index2 < 0 ? nativeMax2(length + index2, 0) : nativeMin2(index2, length - 1);
        }
        return value === value ? strictLastIndexOf(array, value, index2) : baseFindIndex2(array, baseIsNaN, index2, true);
      }
      function nth(array, n2) {
        return array && array.length ? baseNth(array, toInteger2(n2)) : undefined$1;
      }
      var pull = baseRest(pullAll);
      function pullAll(array, values2) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
      }
      function pullAllBy(array, values2, iteratee2) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
      }
      function pullAllWith(array, values2, comparator) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined$1, comparator) : array;
      }
      var pullAt = flatRest2(function(array, indexes) {
        var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
        basePullAt(array, arrayMap2(indexes, function(index2) {
          return isIndex2(index2, length) ? +index2 : index2;
        }).sort(compareAscending));
        return result2;
      });
      function remove(array, predicate) {
        var result2 = [];
        if (!(array && array.length)) {
          return result2;
        }
        var index2 = -1, indexes = [], length = array.length;
        predicate = getIteratee(predicate, 3);
        while (++index2 < length) {
          var value = array[index2];
          if (predicate(value, index2, array)) {
            result2.push(value);
            indexes.push(index2);
          }
        }
        basePullAt(array, indexes);
        return result2;
      }
      function reverse(array) {
        return array == null ? array : nativeReverse.call(array);
      }
      function slice(array, start, end) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
          start = 0;
          end = length;
        } else {
          start = start == null ? 0 : toInteger2(start);
          end = end === undefined$1 ? length : toInteger2(end);
        }
        return baseSlice2(array, start, end);
      }
      function sortedIndex(array, value) {
        return baseSortedIndex(array, value);
      }
      function sortedIndexBy(array, value, iteratee2) {
        return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
      }
      function sortedIndexOf(array, value) {
        var length = array == null ? 0 : array.length;
        if (length) {
          var index2 = baseSortedIndex(array, value);
          if (index2 < length && eq2(array[index2], value)) {
            return index2;
          }
        }
        return -1;
      }
      function sortedLastIndex(array, value) {
        return baseSortedIndex(array, value, true);
      }
      function sortedLastIndexBy(array, value, iteratee2) {
        return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
      }
      function sortedLastIndexOf(array, value) {
        var length = array == null ? 0 : array.length;
        if (length) {
          var index2 = baseSortedIndex(array, value, true) - 1;
          if (eq2(array[index2], value)) {
            return index2;
          }
        }
        return -1;
      }
      function sortedUniq(array) {
        return array && array.length ? baseSortedUniq(array) : [];
      }
      function sortedUniqBy(array, iteratee2) {
        return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
      }
      function tail(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseSlice2(array, 1, length) : [];
      }
      function take(array, n2, guard) {
        if (!(array && array.length)) {
          return [];
        }
        n2 = guard || n2 === undefined$1 ? 1 : toInteger2(n2);
        return baseSlice2(array, 0, n2 < 0 ? 0 : n2);
      }
      function takeRight(array, n2, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n2 = guard || n2 === undefined$1 ? 1 : toInteger2(n2);
        n2 = length - n2;
        return baseSlice2(array, n2 < 0 ? 0 : n2, length);
      }
      function takeRightWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
      }
      function takeWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
      }
      var union2 = baseRest(function(arrays) {
        return baseUniq(baseFlatten2(arrays, 1, isArrayLikeObject, true));
      });
      var unionBy = baseRest(function(arrays) {
        var iteratee2 = last2(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return baseUniq(baseFlatten2(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
      });
      var unionWith = baseRest(function(arrays) {
        var comparator = last2(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return baseUniq(baseFlatten2(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
      });
      function uniq(array) {
        return array && array.length ? baseUniq(array) : [];
      }
      function uniqBy(array, iteratee2) {
        return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
      }
      function uniqWith(array, comparator) {
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return array && array.length ? baseUniq(array, undefined$1, comparator) : [];
      }
      function unzip(array) {
        if (!(array && array.length)) {
          return [];
        }
        var length = 0;
        array = arrayFilter2(array, function(group) {
          if (isArrayLikeObject(group)) {
            length = nativeMax2(group.length, length);
            return true;
          }
        });
        return baseTimes2(length, function(index2) {
          return arrayMap2(array, baseProperty2(index2));
        });
      }
      function unzipWith(array, iteratee2) {
        if (!(array && array.length)) {
          return [];
        }
        var result2 = unzip(array);
        if (iteratee2 == null) {
          return result2;
        }
        return arrayMap2(result2, function(group) {
          return apply2(iteratee2, undefined$1, group);
        });
      }
      var without2 = baseRest(function(array, values2) {
        return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
      });
      var xor2 = baseRest(function(arrays) {
        return baseXor(arrayFilter2(arrays, isArrayLikeObject));
      });
      var xorBy = baseRest(function(arrays) {
        var iteratee2 = last2(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return baseXor(arrayFilter2(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
      });
      var xorWith = baseRest(function(arrays) {
        var comparator = last2(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return baseXor(arrayFilter2(arrays, isArrayLikeObject), undefined$1, comparator);
      });
      var zip = baseRest(unzip);
      function zipObject(props, values2) {
        return baseZipObject(props || [], values2 || [], assignValue2);
      }
      function zipObjectDeep(props, values2) {
        return baseZipObject(props || [], values2 || [], baseSet2);
      }
      var zipWith = baseRest(function(arrays) {
        var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined$1;
        iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined$1;
        return unzipWith(arrays, iteratee2);
      });
      function chain(value) {
        var result2 = lodash2(value);
        result2.__chain__ = true;
        return result2;
      }
      function tap(value, interceptor) {
        interceptor(value);
        return value;
      }
      function thru(value, interceptor) {
        return interceptor(value);
      }
      var wrapperAt = flatRest2(function(paths) {
        var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
          return baseAt(object, paths);
        };
        if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex2(start)) {
          return this.thru(interceptor);
        }
        value = value.slice(start, +start + (length ? 1 : 0));
        value.__actions__.push({
          "func": thru,
          "args": [interceptor],
          "thisArg": undefined$1
        });
        return new LodashWrapper(value, this.__chain__).thru(function(array) {
          if (length && !array.length) {
            array.push(undefined$1);
          }
          return array;
        });
      });
      function wrapperChain() {
        return chain(this);
      }
      function wrapperCommit() {
        return new LodashWrapper(this.value(), this.__chain__);
      }
      function wrapperNext() {
        if (this.__values__ === undefined$1) {
          this.__values__ = toArray(this.value());
        }
        var done = this.__index__ >= this.__values__.length, value = done ? undefined$1 : this.__values__[this.__index__++];
        return { "done": done, "value": value };
      }
      function wrapperToIterator() {
        return this;
      }
      function wrapperPlant(value) {
        var result2, parent3 = this;
        while (parent3 instanceof baseLodash) {
          var clone2 = wrapperClone(parent3);
          clone2.__index__ = 0;
          clone2.__values__ = undefined$1;
          if (result2) {
            previous.__wrapped__ = clone2;
          } else {
            result2 = clone2;
          }
          var previous = clone2;
          parent3 = parent3.__wrapped__;
        }
        previous.__wrapped__ = value;
        return result2;
      }
      function wrapperReverse() {
        var value = this.__wrapped__;
        if (value instanceof LazyWrapper) {
          var wrapped = value;
          if (this.__actions__.length) {
            wrapped = new LazyWrapper(this);
          }
          wrapped = wrapped.reverse();
          wrapped.__actions__.push({
            "func": thru,
            "args": [reverse],
            "thisArg": undefined$1
          });
          return new LodashWrapper(wrapped, this.__chain__);
        }
        return this.thru(reverse);
      }
      function wrapperValue() {
        return baseWrapperValue(this.__wrapped__, this.__actions__);
      }
      var countBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty2.call(result2, key)) {
          ++result2[key];
        } else {
          baseAssignValue2(result2, key, 1);
        }
      });
      function every(collection, predicate, guard) {
        var func = isArray2(collection) ? arrayEvery : baseEvery;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined$1;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      function filter(collection, predicate) {
        var func = isArray2(collection) ? arrayFilter2 : baseFilter;
        return func(collection, getIteratee(predicate, 3));
      }
      var find = createFind(findIndex2);
      var findLast = createFind(findLastIndex);
      function flatMap(collection, iteratee2) {
        return baseFlatten2(map(collection, iteratee2), 1);
      }
      function flatMapDeep(collection, iteratee2) {
        return baseFlatten2(map(collection, iteratee2), INFINITY2);
      }
      function flatMapDepth(collection, iteratee2, depth) {
        depth = depth === undefined$1 ? 1 : toInteger2(depth);
        return baseFlatten2(map(collection, iteratee2), depth);
      }
      function forEach(collection, iteratee2) {
        var func = isArray2(collection) ? arrayEach2 : baseEach;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function forEachRight(collection, iteratee2) {
        var func = isArray2(collection) ? arrayEachRight : baseEachRight;
        return func(collection, getIteratee(iteratee2, 3));
      }
      var groupBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty2.call(result2, key)) {
          result2[key].push(value);
        } else {
          baseAssignValue2(result2, key, [value]);
        }
      });
      function includes(collection, value, fromIndex, guard) {
        collection = isArrayLike2(collection) ? collection : values(collection);
        fromIndex = fromIndex && !guard ? toInteger2(fromIndex) : 0;
        var length = collection.length;
        if (fromIndex < 0) {
          fromIndex = nativeMax2(length + fromIndex, 0);
        }
        return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
      }
      var invokeMap = baseRest(function(collection, path, args) {
        var index2 = -1, isFunc = typeof path == "function", result2 = isArrayLike2(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value) {
          result2[++index2] = isFunc ? apply2(path, value, args) : baseInvoke(value, path, args);
        });
        return result2;
      });
      var keyBy = createAggregator(function(result2, value, key) {
        baseAssignValue2(result2, key, value);
      });
      function map(collection, iteratee2) {
        var func = isArray2(collection) ? arrayMap2 : baseMap;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function orderBy(collection, iteratees, orders, guard) {
        if (collection == null) {
          return [];
        }
        if (!isArray2(iteratees)) {
          iteratees = iteratees == null ? [] : [iteratees];
        }
        orders = guard ? undefined$1 : orders;
        if (!isArray2(orders)) {
          orders = orders == null ? [] : [orders];
        }
        return baseOrderBy(collection, iteratees, orders);
      }
      var partition = createAggregator(function(result2, value, key) {
        result2[key ? 0 : 1].push(value);
      }, function() {
        return [[], []];
      });
      function reduce2(collection, iteratee2, accumulator) {
        var func = isArray2(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
      }
      function reduceRight(collection, iteratee2, accumulator) {
        var func = isArray2(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
      }
      function reject(collection, predicate) {
        var func = isArray2(collection) ? arrayFilter2 : baseFilter;
        return func(collection, negate(getIteratee(predicate, 3)));
      }
      function sample(collection) {
        var func = isArray2(collection) ? arraySample : baseSample;
        return func(collection);
      }
      function sampleSize(collection, n2, guard) {
        if (guard ? isIterateeCall(collection, n2, guard) : n2 === undefined$1) {
          n2 = 1;
        } else {
          n2 = toInteger2(n2);
        }
        var func = isArray2(collection) ? arraySampleSize : baseSampleSize;
        return func(collection, n2);
      }
      function shuffle(collection) {
        var func = isArray2(collection) ? arrayShuffle : baseShuffle;
        return func(collection);
      }
      function size2(collection) {
        if (collection == null) {
          return 0;
        }
        if (isArrayLike2(collection)) {
          return isString(collection) ? stringSize(collection) : collection.length;
        }
        var tag = getTag2(collection);
        if (tag == mapTag2 || tag == setTag2) {
          return collection.size;
        }
        return baseKeys2(collection).length;
      }
      function some(collection, predicate, guard) {
        var func = isArray2(collection) ? arraySome2 : baseSome;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined$1;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      var sortBy = baseRest(function(collection, iteratees) {
        if (collection == null) {
          return [];
        }
        var length = iteratees.length;
        if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
          iteratees = [];
        } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
          iteratees = [iteratees[0]];
        }
        return baseOrderBy(collection, baseFlatten2(iteratees, 1), []);
      });
      var now2 = ctxNow || function() {
        return root2.Date.now();
      };
      function after(n2, func) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        n2 = toInteger2(n2);
        return function() {
          if (--n2 < 1) {
            return func.apply(this, arguments);
          }
        };
      }
      function ary(func, n2, guard) {
        n2 = guard ? undefined$1 : n2;
        n2 = func && n2 == null ? func.length : n2;
        return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n2);
      }
      function before(n2, func) {
        var result2;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        n2 = toInteger2(n2);
        return function() {
          if (--n2 > 0) {
            result2 = func.apply(this, arguments);
          }
          if (n2 <= 1) {
            func = undefined$1;
          }
          return result2;
        };
      }
      var bind = baseRest(function(func, thisArg, partials) {
        var bitmask = WRAP_BIND_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bind));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(func, bitmask, thisArg, partials, holders);
      });
      var bindKey = baseRest(function(object, key, partials) {
        var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bindKey));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(key, bitmask, object, partials, holders);
      });
      function curry(func, arity, guard) {
        arity = guard ? undefined$1 : arity;
        var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
        result2.placeholder = curry.placeholder;
        return result2;
      }
      function curryRight(func, arity, guard) {
        arity = guard ? undefined$1 : arity;
        var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
        result2.placeholder = curryRight.placeholder;
        return result2;
      }
      function debounce2(func, wait, options) {
        var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        wait = toNumber2(wait) || 0;
        if (isObject2(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax2(toNumber2(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = undefined$1;
          lastInvokeTime = time;
          result2 = func.apply(thisArg, args);
          return result2;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout2(timerExpired, wait);
          return leading ? invokeFunc(time) : result2;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin2(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === undefined$1 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now2();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout2(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = undefined$1;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = undefined$1;
          return result2;
        }
        function cancel2() {
          if (timerId !== undefined$1) {
            clearTimeout2(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = undefined$1;
        }
        function flush() {
          return timerId === undefined$1 ? result2 : trailingEdge(now2());
        }
        function debounced() {
          var time = now2(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === undefined$1) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout2(timerId);
              timerId = setTimeout2(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === undefined$1) {
            timerId = setTimeout2(timerExpired, wait);
          }
          return result2;
        }
        debounced.cancel = cancel2;
        debounced.flush = flush;
        return debounced;
      }
      var defer = baseRest(function(func, args) {
        return baseDelay(func, 1, args);
      });
      var delay = baseRest(function(func, wait, args) {
        return baseDelay(func, toNumber2(wait) || 0, args);
      });
      function flip(func) {
        return createWrap(func, WRAP_FLIP_FLAG);
      }
      function memoize2(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result2 = func.apply(this, args);
          memoized.cache = cache.set(key, result2) || cache;
          return result2;
        };
        memoized.cache = new (memoize2.Cache || MapCache2)();
        return memoized;
      }
      memoize2.Cache = MapCache2;
      function negate(predicate) {
        if (typeof predicate != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return !predicate.call(this);
            case 1:
              return !predicate.call(this, args[0]);
            case 2:
              return !predicate.call(this, args[0], args[1]);
            case 3:
              return !predicate.call(this, args[0], args[1], args[2]);
          }
          return !predicate.apply(this, args);
        };
      }
      function once(func) {
        return before(2, func);
      }
      var overArgs = castRest(function(func, transforms) {
        transforms = transforms.length == 1 && isArray2(transforms[0]) ? arrayMap2(transforms[0], baseUnary2(getIteratee())) : arrayMap2(baseFlatten2(transforms, 1), baseUnary2(getIteratee()));
        var funcsLength = transforms.length;
        return baseRest(function(args) {
          var index2 = -1, length = nativeMin2(args.length, funcsLength);
          while (++index2 < length) {
            args[index2] = transforms[index2].call(this, args[index2]);
          }
          return apply2(func, this, args);
        });
      });
      var partial = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partial));
        return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
      });
      var partialRight = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partialRight));
        return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
      });
      var rearg = flatRest2(function(func, indexes) {
        return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
      });
      function rest(func, start) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        start = start === undefined$1 ? start : toInteger2(start);
        return baseRest(func, start);
      }
      function spread(func, start) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        start = start == null ? 0 : nativeMax2(toInteger2(start), 0);
        return baseRest(function(args) {
          var array = args[start], otherArgs = castSlice(args, 0, start);
          if (array) {
            arrayPush2(otherArgs, array);
          }
          return apply2(func, this, otherArgs);
        });
      }
      function throttle2(func, wait, options) {
        var leading = true, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        if (isObject2(options)) {
          leading = "leading" in options ? !!options.leading : leading;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        return debounce2(func, wait, {
          "leading": leading,
          "maxWait": wait,
          "trailing": trailing
        });
      }
      function unary(func) {
        return ary(func, 1);
      }
      function wrap(value, wrapper) {
        return partial(castFunction(wrapper), value);
      }
      function castArray() {
        if (!arguments.length) {
          return [];
        }
        var value = arguments[0];
        return isArray2(value) ? value : [value];
      }
      function clone(value) {
        return baseClone2(value, CLONE_SYMBOLS_FLAG2);
      }
      function cloneWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseClone2(value, CLONE_SYMBOLS_FLAG2, customizer);
      }
      function cloneDeep2(value) {
        return baseClone2(value, CLONE_DEEP_FLAG2 | CLONE_SYMBOLS_FLAG2);
      }
      function cloneDeepWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseClone2(value, CLONE_DEEP_FLAG2 | CLONE_SYMBOLS_FLAG2, customizer);
      }
      function conformsTo(object, source) {
        return source == null || baseConformsTo(object, source, keys2(source));
      }
      function eq2(value, other) {
        return value === other || value !== value && other !== other;
      }
      var gt = createRelationalOperation(baseGt);
      var gte = createRelationalOperation(function(value, other) {
        return value >= other;
      });
      var isArguments2 = baseIsArguments2(function() {
        return arguments;
      }()) ? baseIsArguments2 : function(value) {
        return isObjectLike2(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable2.call(value, "callee");
      };
      var isArray2 = Array2.isArray;
      var isArrayBuffer = nodeIsArrayBuffer ? baseUnary2(nodeIsArrayBuffer) : baseIsArrayBuffer;
      function isArrayLike2(value) {
        return value != null && isLength2(value.length) && !isFunction2(value);
      }
      function isArrayLikeObject(value) {
        return isObjectLike2(value) && isArrayLike2(value);
      }
      function isBoolean(value) {
        return value === true || value === false || isObjectLike2(value) && baseGetTag2(value) == boolTag2;
      }
      var isBuffer2 = nativeIsBuffer || stubFalse2;
      var isDate = nodeIsDate ? baseUnary2(nodeIsDate) : baseIsDate;
      function isElement(value) {
        return isObjectLike2(value) && value.nodeType === 1 && !isPlainObject2(value);
      }
      function isEmpty(value) {
        if (value == null) {
          return true;
        }
        if (isArrayLike2(value) && (isArray2(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer2(value) || isTypedArray2(value) || isArguments2(value))) {
          return !value.length;
        }
        var tag = getTag2(value);
        if (tag == mapTag2 || tag == setTag2) {
          return !value.size;
        }
        if (isPrototype2(value)) {
          return !baseKeys2(value).length;
        }
        for (var key in value) {
          if (hasOwnProperty2.call(value, key)) {
            return false;
          }
        }
        return true;
      }
      function isEqual(value, other) {
        return baseIsEqual2(value, other);
      }
      function isEqualWith(value, other, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        var result2 = customizer ? customizer(value, other) : undefined$1;
        return result2 === undefined$1 ? baseIsEqual2(value, other, undefined$1, customizer) : !!result2;
      }
      function isError(value) {
        if (!isObjectLike2(value)) {
          return false;
        }
        var tag = baseGetTag2(value);
        return tag == errorTag2 || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject2(value);
      }
      function isFinite(value) {
        return typeof value == "number" && nativeIsFinite(value);
      }
      function isFunction2(value) {
        if (!isObject2(value)) {
          return false;
        }
        var tag = baseGetTag2(value);
        return tag == funcTag2 || tag == genTag2 || tag == asyncTag2 || tag == proxyTag2;
      }
      function isInteger(value) {
        return typeof value == "number" && value == toInteger2(value);
      }
      function isLength2(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
      }
      function isObject2(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      function isObjectLike2(value) {
        return value != null && typeof value == "object";
      }
      var isMap2 = nodeIsMap2 ? baseUnary2(nodeIsMap2) : baseIsMap2;
      function isMatch(object, source) {
        return object === source || baseIsMatch2(object, source, getMatchData2(source));
      }
      function isMatchWith(object, source, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseIsMatch2(object, source, getMatchData2(source), customizer);
      }
      function isNaN2(value) {
        return isNumber2(value) && value != +value;
      }
      function isNative(value) {
        if (isMaskable(value)) {
          throw new Error2(CORE_ERROR_TEXT);
        }
        return baseIsNative2(value);
      }
      function isNull(value) {
        return value === null;
      }
      function isNil(value) {
        return value == null;
      }
      function isNumber2(value) {
        return typeof value == "number" || isObjectLike2(value) && baseGetTag2(value) == numberTag2;
      }
      function isPlainObject2(value) {
        if (!isObjectLike2(value) || baseGetTag2(value) != objectTag2) {
          return false;
        }
        var proto2 = getPrototype2(value);
        if (proto2 === null) {
          return true;
        }
        var Ctor = hasOwnProperty2.call(proto2, "constructor") && proto2.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString2.call(Ctor) == objectCtorString2;
      }
      var isRegExp = nodeIsRegExp ? baseUnary2(nodeIsRegExp) : baseIsRegExp;
      function isSafeInteger(value) {
        return isInteger(value) && value >= -MAX_SAFE_INTEGER2 && value <= MAX_SAFE_INTEGER2;
      }
      var isSet2 = nodeIsSet2 ? baseUnary2(nodeIsSet2) : baseIsSet2;
      function isString(value) {
        return typeof value == "string" || !isArray2(value) && isObjectLike2(value) && baseGetTag2(value) == stringTag2;
      }
      function isSymbol2(value) {
        return typeof value == "symbol" || isObjectLike2(value) && baseGetTag2(value) == symbolTag2;
      }
      var isTypedArray2 = nodeIsTypedArray2 ? baseUnary2(nodeIsTypedArray2) : baseIsTypedArray2;
      function isUndefined(value) {
        return value === undefined$1;
      }
      function isWeakMap(value) {
        return isObjectLike2(value) && getTag2(value) == weakMapTag2;
      }
      function isWeakSet(value) {
        return isObjectLike2(value) && baseGetTag2(value) == weakSetTag;
      }
      var lt = createRelationalOperation(baseLt);
      var lte = createRelationalOperation(function(value, other) {
        return value <= other;
      });
      function toArray(value) {
        if (!value) {
          return [];
        }
        if (isArrayLike2(value)) {
          return isString(value) ? stringToArray(value) : copyArray2(value);
        }
        if (symIterator && value[symIterator]) {
          return iteratorToArray(value[symIterator]());
        }
        var tag = getTag2(value), func = tag == mapTag2 ? mapToArray2 : tag == setTag2 ? setToArray2 : values;
        return func(value);
      }
      function toFinite2(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber2(value);
        if (value === INFINITY2 || value === -INFINITY2) {
          var sign = value < 0 ? -1 : 1;
          return sign * MAX_INTEGER2;
        }
        return value === value ? value : 0;
      }
      function toInteger2(value) {
        var result2 = toFinite2(value), remainder = result2 % 1;
        return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
      }
      function toLength(value) {
        return value ? baseClamp(toInteger2(value), 0, MAX_ARRAY_LENGTH) : 0;
      }
      function toNumber2(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol2(value)) {
          return NAN2;
        }
        if (isObject2(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject2(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim2(value);
        var isBinary = reIsBinary2.test(value);
        return isBinary || reIsOctal2.test(value) ? freeParseInt2(value.slice(2), isBinary ? 2 : 8) : reIsBadHex2.test(value) ? NAN2 : +value;
      }
      function toPlainObject(value) {
        return copyObject2(value, keysIn2(value));
      }
      function toSafeInteger(value) {
        return value ? baseClamp(toInteger2(value), -MAX_SAFE_INTEGER2, MAX_SAFE_INTEGER2) : value === 0 ? value : 0;
      }
      function toString2(value) {
        return value == null ? "" : baseToString2(value);
      }
      var assign = createAssigner(function(object, source) {
        if (isPrototype2(source) || isArrayLike2(source)) {
          copyObject2(source, keys2(source), object);
          return;
        }
        for (var key in source) {
          if (hasOwnProperty2.call(source, key)) {
            assignValue2(object, key, source[key]);
          }
        }
      });
      var assignIn = createAssigner(function(object, source) {
        copyObject2(source, keysIn2(source), object);
      });
      var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
        copyObject2(source, keysIn2(source), object, customizer);
      });
      var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
        copyObject2(source, keys2(source), object, customizer);
      });
      var at = flatRest2(baseAt);
      function create(prototype, properties) {
        var result2 = baseCreate2(prototype);
        return properties == null ? result2 : baseAssign2(result2, properties);
      }
      var defaults = baseRest(function(object, sources) {
        object = Object2(object);
        var index2 = -1;
        var length = sources.length;
        var guard = length > 2 ? sources[2] : undefined$1;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          length = 1;
        }
        while (++index2 < length) {
          var source = sources[index2];
          var props = keysIn2(source);
          var propsIndex = -1;
          var propsLength = props.length;
          while (++propsIndex < propsLength) {
            var key = props[propsIndex];
            var value = object[key];
            if (value === undefined$1 || eq2(value, objectProto2[key]) && !hasOwnProperty2.call(object, key)) {
              object[key] = source[key];
            }
          }
        }
        return object;
      });
      var defaultsDeep = baseRest(function(args) {
        args.push(undefined$1, customDefaultsMerge);
        return apply2(mergeWith, undefined$1, args);
      });
      function findKey(object, predicate) {
        return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
      }
      function findLastKey(object, predicate) {
        return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
      }
      function forIn(object, iteratee2) {
        return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn2);
      }
      function forInRight(object, iteratee2) {
        return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn2);
      }
      function forOwn(object, iteratee2) {
        return object && baseForOwn(object, getIteratee(iteratee2, 3));
      }
      function forOwnRight(object, iteratee2) {
        return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
      }
      function functions(object) {
        return object == null ? [] : baseFunctions(object, keys2(object));
      }
      function functionsIn(object) {
        return object == null ? [] : baseFunctions(object, keysIn2(object));
      }
      function get4(object, path, defaultValue) {
        var result2 = object == null ? undefined$1 : baseGet2(object, path);
        return result2 === undefined$1 ? defaultValue : result2;
      }
      function has(object, path) {
        return object != null && hasPath2(object, path, baseHas);
      }
      function hasIn2(object, path) {
        return object != null && hasPath2(object, path, baseHasIn2);
      }
      var invert = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString2.call(value);
        }
        result2[value] = key;
      }, constant2(identity2));
      var invertBy = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString2.call(value);
        }
        if (hasOwnProperty2.call(result2, value)) {
          result2[value].push(key);
        } else {
          result2[value] = [key];
        }
      }, getIteratee);
      var invoke = baseRest(baseInvoke);
      function keys2(object) {
        return isArrayLike2(object) ? arrayLikeKeys2(object) : baseKeys2(object);
      }
      function keysIn2(object) {
        return isArrayLike2(object) ? arrayLikeKeys2(object, true) : baseKeysIn2(object);
      }
      function mapKeys(object, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue2(result2, iteratee2(value, key, object2), value);
        });
        return result2;
      }
      function mapValues(object, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue2(result2, key, iteratee2(value, key, object2));
        });
        return result2;
      }
      var merge = createAssigner(function(object, source, srcIndex) {
        baseMerge(object, source, srcIndex);
      });
      var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
        baseMerge(object, source, srcIndex, customizer);
      });
      var omit2 = flatRest2(function(object, paths) {
        var result2 = {};
        if (object == null) {
          return result2;
        }
        var isDeep = false;
        paths = arrayMap2(paths, function(path) {
          path = castPath2(path, object);
          isDeep || (isDeep = path.length > 1);
          return path;
        });
        copyObject2(object, getAllKeysIn2(object), result2);
        if (isDeep) {
          result2 = baseClone2(result2, CLONE_DEEP_FLAG2 | CLONE_FLAT_FLAG2 | CLONE_SYMBOLS_FLAG2, customOmitClone2);
        }
        var length = paths.length;
        while (length--) {
          baseUnset2(result2, paths[length]);
        }
        return result2;
      });
      function omitBy(object, predicate) {
        return pickBy(object, negate(getIteratee(predicate)));
      }
      var pick2 = flatRest2(function(object, paths) {
        return object == null ? {} : basePick2(object, paths);
      });
      function pickBy(object, predicate) {
        if (object == null) {
          return {};
        }
        var props = arrayMap2(getAllKeysIn2(object), function(prop) {
          return [prop];
        });
        predicate = getIteratee(predicate);
        return basePickBy2(object, props, function(value, path) {
          return predicate(value, path[0]);
        });
      }
      function result(object, path, defaultValue) {
        path = castPath2(path, object);
        var index2 = -1, length = path.length;
        if (!length) {
          length = 1;
          object = undefined$1;
        }
        while (++index2 < length) {
          var value = object == null ? undefined$1 : object[toKey2(path[index2])];
          if (value === undefined$1) {
            index2 = length;
            value = defaultValue;
          }
          object = isFunction2(value) ? value.call(object) : value;
        }
        return object;
      }
      function set(object, path, value) {
        return object == null ? object : baseSet2(object, path, value);
      }
      function setWith(object, path, value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return object == null ? object : baseSet2(object, path, value, customizer);
      }
      var toPairs = createToPairs(keys2);
      var toPairsIn = createToPairs(keysIn2);
      function transform(object, iteratee2, accumulator) {
        var isArr = isArray2(object), isArrLike = isArr || isBuffer2(object) || isTypedArray2(object);
        iteratee2 = getIteratee(iteratee2, 4);
        if (accumulator == null) {
          var Ctor = object && object.constructor;
          if (isArrLike) {
            accumulator = isArr ? new Ctor() : [];
          } else if (isObject2(object)) {
            accumulator = isFunction2(Ctor) ? baseCreate2(getPrototype2(object)) : {};
          } else {
            accumulator = {};
          }
        }
        (isArrLike ? arrayEach2 : baseForOwn)(object, function(value, index2, object2) {
          return iteratee2(accumulator, value, index2, object2);
        });
        return accumulator;
      }
      function unset(object, path) {
        return object == null ? true : baseUnset2(object, path);
      }
      function update(object, path, updater) {
        return object == null ? object : baseUpdate(object, path, castFunction(updater));
      }
      function updateWith(object, path, updater, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
      }
      function values(object) {
        return object == null ? [] : baseValues(object, keys2(object));
      }
      function valuesIn(object) {
        return object == null ? [] : baseValues(object, keysIn2(object));
      }
      function clamp(number, lower, upper) {
        if (upper === undefined$1) {
          upper = lower;
          lower = undefined$1;
        }
        if (upper !== undefined$1) {
          upper = toNumber2(upper);
          upper = upper === upper ? upper : 0;
        }
        if (lower !== undefined$1) {
          lower = toNumber2(lower);
          lower = lower === lower ? lower : 0;
        }
        return baseClamp(toNumber2(number), lower, upper);
      }
      function inRange(number, start, end) {
        start = toFinite2(start);
        if (end === undefined$1) {
          end = start;
          start = 0;
        } else {
          end = toFinite2(end);
        }
        number = toNumber2(number);
        return baseInRange(number, start, end);
      }
      function random(lower, upper, floating) {
        if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
          upper = floating = undefined$1;
        }
        if (floating === undefined$1) {
          if (typeof upper == "boolean") {
            floating = upper;
            upper = undefined$1;
          } else if (typeof lower == "boolean") {
            floating = lower;
            lower = undefined$1;
          }
        }
        if (lower === undefined$1 && upper === undefined$1) {
          lower = 0;
          upper = 1;
        } else {
          lower = toFinite2(lower);
          if (upper === undefined$1) {
            upper = lower;
            lower = 0;
          } else {
            upper = toFinite2(upper);
          }
        }
        if (lower > upper) {
          var temp = lower;
          lower = upper;
          upper = temp;
        }
        if (floating || lower % 1 || upper % 1) {
          var rand = nativeRandom();
          return nativeMin2(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
        }
        return baseRandom(lower, upper);
      }
      var camelCase = createCompounder(function(result2, word, index2) {
        word = word.toLowerCase();
        return result2 + (index2 ? capitalize(word) : word);
      });
      function capitalize(string) {
        return upperFirst(toString2(string).toLowerCase());
      }
      function deburr(string) {
        string = toString2(string);
        return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
      }
      function endsWith(string, target, position) {
        string = toString2(string);
        target = baseToString2(target);
        var length = string.length;
        position = position === undefined$1 ? length : baseClamp(toInteger2(position), 0, length);
        var end = position;
        position -= target.length;
        return position >= 0 && string.slice(position, end) == target;
      }
      function escape(string) {
        string = toString2(string);
        return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
      }
      function escapeRegExp(string) {
        string = toString2(string);
        return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar2, "\\$&") : string;
      }
      var kebabCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? "-" : "") + word.toLowerCase();
      });
      var lowerCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? " " : "") + word.toLowerCase();
      });
      var lowerFirst = createCaseFirst("toLowerCase");
      function pad(string, length, chars) {
        string = toString2(string);
        length = toInteger2(length);
        var strLength = length ? stringSize(string) : 0;
        if (!length || strLength >= length) {
          return string;
        }
        var mid = (length - strLength) / 2;
        return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
      }
      function padEnd(string, length, chars) {
        string = toString2(string);
        length = toInteger2(length);
        var strLength = length ? stringSize(string) : 0;
        return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
      }
      function padStart(string, length, chars) {
        string = toString2(string);
        length = toInteger2(length);
        var strLength = length ? stringSize(string) : 0;
        return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
      }
      function parseInt2(string, radix, guard) {
        if (guard || radix == null) {
          radix = 0;
        } else if (radix) {
          radix = +radix;
        }
        return nativeParseInt(toString2(string).replace(reTrimStart2, ""), radix || 0);
      }
      function repeat(string, n2, guard) {
        if (guard ? isIterateeCall(string, n2, guard) : n2 === undefined$1) {
          n2 = 1;
        } else {
          n2 = toInteger2(n2);
        }
        return baseRepeat(toString2(string), n2);
      }
      function replace() {
        var args = arguments, string = toString2(args[0]);
        return args.length < 3 ? string : string.replace(args[1], args[2]);
      }
      var snakeCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? "_" : "") + word.toLowerCase();
      });
      function split(string, separator, limit) {
        if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
          separator = limit = undefined$1;
        }
        limit = limit === undefined$1 ? MAX_ARRAY_LENGTH : limit >>> 0;
        if (!limit) {
          return [];
        }
        string = toString2(string);
        if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
          separator = baseToString2(separator);
          if (!separator && hasUnicode(string)) {
            return castSlice(stringToArray(string), 0, limit);
          }
        }
        return string.split(separator, limit);
      }
      var startCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? " " : "") + upperFirst(word);
      });
      function startsWith(string, target, position) {
        string = toString2(string);
        position = position == null ? 0 : baseClamp(toInteger2(position), 0, string.length);
        target = baseToString2(target);
        return string.slice(position, position + target.length) == target;
      }
      function template(string, options, guard) {
        var settings = lodash2.templateSettings;
        if (guard && isIterateeCall(string, options, guard)) {
          options = undefined$1;
        }
        string = toString2(string);
        options = assignInWith({}, options, settings, customDefaultsAssignIn);
        var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys2(imports), importsValues = baseValues(imports, importsKeys);
        var isEscaping, isEvaluating, index2 = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
        var reDelimiters = RegExp2((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");
        var sourceURL = "//# sourceURL=" + (hasOwnProperty2.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
        string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
          interpolateValue || (interpolateValue = esTemplateValue);
          source += string.slice(index2, offset).replace(reUnescapedString, escapeStringChar);
          if (escapeValue) {
            isEscaping = true;
            source += "' +\n__e(" + escapeValue + ") +\n'";
          }
          if (evaluateValue) {
            isEvaluating = true;
            source += "';\n" + evaluateValue + ";\n__p += '";
          }
          if (interpolateValue) {
            source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
          }
          index2 = offset + match.length;
          return match;
        });
        source += "';\n";
        var variable = hasOwnProperty2.call(options, "variable") && options.variable;
        if (!variable) {
          source = "with (obj) {\n" + source + "\n}\n";
        } else if (reForbiddenIdentifierChars.test(variable)) {
          throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
        }
        source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
        source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
        var result2 = attempt(function() {
          return Function2(importsKeys, sourceURL + "return " + source).apply(undefined$1, importsValues);
        });
        result2.source = source;
        if (isError(result2)) {
          throw result2;
        }
        return result2;
      }
      function toLower(value) {
        return toString2(value).toLowerCase();
      }
      function toUpper(value) {
        return toString2(value).toUpperCase();
      }
      function trim(string, chars, guard) {
        string = toString2(string);
        if (string && (guard || chars === undefined$1)) {
          return baseTrim2(string);
        }
        if (!string || !(chars = baseToString2(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
        return castSlice(strSymbols, start, end).join("");
      }
      function trimEnd(string, chars, guard) {
        string = toString2(string);
        if (string && (guard || chars === undefined$1)) {
          return string.slice(0, trimmedEndIndex2(string) + 1);
        }
        if (!string || !(chars = baseToString2(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
        return castSlice(strSymbols, 0, end).join("");
      }
      function trimStart(string, chars, guard) {
        string = toString2(string);
        if (string && (guard || chars === undefined$1)) {
          return string.replace(reTrimStart2, "");
        }
        if (!string || !(chars = baseToString2(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
        return castSlice(strSymbols, start).join("");
      }
      function truncate(string, options) {
        var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
        if (isObject2(options)) {
          var separator = "separator" in options ? options.separator : separator;
          length = "length" in options ? toInteger2(options.length) : length;
          omission = "omission" in options ? baseToString2(options.omission) : omission;
        }
        string = toString2(string);
        var strLength = string.length;
        if (hasUnicode(string)) {
          var strSymbols = stringToArray(string);
          strLength = strSymbols.length;
        }
        if (length >= strLength) {
          return string;
        }
        var end = length - stringSize(omission);
        if (end < 1) {
          return omission;
        }
        var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
        if (separator === undefined$1) {
          return result2 + omission;
        }
        if (strSymbols) {
          end += result2.length - end;
        }
        if (isRegExp(separator)) {
          if (string.slice(end).search(separator)) {
            var match, substring = result2;
            if (!separator.global) {
              separator = RegExp2(separator.source, toString2(reFlags2.exec(separator)) + "g");
            }
            separator.lastIndex = 0;
            while (match = separator.exec(substring)) {
              var newEnd = match.index;
            }
            result2 = result2.slice(0, newEnd === undefined$1 ? end : newEnd);
          }
        } else if (string.indexOf(baseToString2(separator), end) != end) {
          var index2 = result2.lastIndexOf(separator);
          if (index2 > -1) {
            result2 = result2.slice(0, index2);
          }
        }
        return result2 + omission;
      }
      function unescape(string) {
        string = toString2(string);
        return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
      }
      var upperCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? " " : "") + word.toUpperCase();
      });
      var upperFirst = createCaseFirst("toUpperCase");
      function words(string, pattern, guard) {
        string = toString2(string);
        pattern = guard ? undefined$1 : pattern;
        if (pattern === undefined$1) {
          return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
        }
        return string.match(pattern) || [];
      }
      var attempt = baseRest(function(func, args) {
        try {
          return apply2(func, undefined$1, args);
        } catch (e) {
          return isError(e) ? e : new Error2(e);
        }
      });
      var bindAll = flatRest2(function(object, methodNames) {
        arrayEach2(methodNames, function(key) {
          key = toKey2(key);
          baseAssignValue2(object, key, bind(object[key], object));
        });
        return object;
      });
      function cond(pairs) {
        var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
        pairs = !length ? [] : arrayMap2(pairs, function(pair) {
          if (typeof pair[1] != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT2);
          }
          return [toIteratee(pair[0]), pair[1]];
        });
        return baseRest(function(args) {
          var index2 = -1;
          while (++index2 < length) {
            var pair = pairs[index2];
            if (apply2(pair[0], this, args)) {
              return apply2(pair[1], this, args);
            }
          }
        });
      }
      function conforms(source) {
        return baseConforms(baseClone2(source, CLONE_DEEP_FLAG2));
      }
      function constant2(value) {
        return function() {
          return value;
        };
      }
      function defaultTo(value, defaultValue) {
        return value == null || value !== value ? defaultValue : value;
      }
      var flow = createFlow();
      var flowRight = createFlow(true);
      function identity2(value) {
        return value;
      }
      function iteratee(func) {
        return baseIteratee2(typeof func == "function" ? func : baseClone2(func, CLONE_DEEP_FLAG2));
      }
      function matches(source) {
        return baseMatches2(baseClone2(source, CLONE_DEEP_FLAG2));
      }
      function matchesProperty(path, srcValue) {
        return baseMatchesProperty2(path, baseClone2(srcValue, CLONE_DEEP_FLAG2));
      }
      var method = baseRest(function(path, args) {
        return function(object) {
          return baseInvoke(object, path, args);
        };
      });
      var methodOf = baseRest(function(object, args) {
        return function(path) {
          return baseInvoke(object, path, args);
        };
      });
      function mixin(object, source, options) {
        var props = keys2(source), methodNames = baseFunctions(source, props);
        if (options == null && !(isObject2(source) && (methodNames.length || !props.length))) {
          options = source;
          source = object;
          object = this;
          methodNames = baseFunctions(source, keys2(source));
        }
        var chain2 = !(isObject2(options) && "chain" in options) || !!options.chain, isFunc = isFunction2(object);
        arrayEach2(methodNames, function(methodName) {
          var func = source[methodName];
          object[methodName] = func;
          if (isFunc) {
            object.prototype[methodName] = function() {
              var chainAll = this.__chain__;
              if (chain2 || chainAll) {
                var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray2(this.__actions__);
                actions.push({ "func": func, "args": arguments, "thisArg": object });
                result2.__chain__ = chainAll;
                return result2;
              }
              return func.apply(object, arrayPush2([this.value()], arguments));
            };
          }
        });
        return object;
      }
      function noConflict() {
        if (root2._ === this) {
          root2._ = oldDash;
        }
        return this;
      }
      function noop2() {
      }
      function nthArg(n2) {
        n2 = toInteger2(n2);
        return baseRest(function(args) {
          return baseNth(args, n2);
        });
      }
      var over = createOver(arrayMap2);
      var overEvery = createOver(arrayEvery);
      var overSome = createOver(arraySome2);
      function property2(path) {
        return isKey2(path) ? baseProperty2(toKey2(path)) : basePropertyDeep2(path);
      }
      function propertyOf(object) {
        return function(path) {
          return object == null ? undefined$1 : baseGet2(object, path);
        };
      }
      var range = createRange();
      var rangeRight = createRange(true);
      function stubArray2() {
        return [];
      }
      function stubFalse2() {
        return false;
      }
      function stubObject() {
        return {};
      }
      function stubString() {
        return "";
      }
      function stubTrue() {
        return true;
      }
      function times(n2, iteratee2) {
        n2 = toInteger2(n2);
        if (n2 < 1 || n2 > MAX_SAFE_INTEGER2) {
          return [];
        }
        var index2 = MAX_ARRAY_LENGTH, length = nativeMin2(n2, MAX_ARRAY_LENGTH);
        iteratee2 = getIteratee(iteratee2);
        n2 -= MAX_ARRAY_LENGTH;
        var result2 = baseTimes2(length, iteratee2);
        while (++index2 < n2) {
          iteratee2(index2);
        }
        return result2;
      }
      function toPath(value) {
        if (isArray2(value)) {
          return arrayMap2(value, toKey2);
        }
        return isSymbol2(value) ? [value] : copyArray2(stringToPath2(toString2(value)));
      }
      function uniqueId(prefix) {
        var id2 = ++idCounter;
        return toString2(prefix) + id2;
      }
      var add2 = createMathOperation(function(augend, addend) {
        return augend + addend;
      }, 0);
      var ceil = createRound("ceil");
      var divide = createMathOperation(function(dividend, divisor) {
        return dividend / divisor;
      }, 1);
      var floor = createRound("floor");
      function max(array) {
        return array && array.length ? baseExtremum(array, identity2, baseGt) : undefined$1;
      }
      function maxBy(array, iteratee2) {
        return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined$1;
      }
      function mean(array) {
        return baseMean(array, identity2);
      }
      function meanBy(array, iteratee2) {
        return baseMean(array, getIteratee(iteratee2, 2));
      }
      function min(array) {
        return array && array.length ? baseExtremum(array, identity2, baseLt) : undefined$1;
      }
      function minBy(array, iteratee2) {
        return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined$1;
      }
      var multiply = createMathOperation(function(multiplier, multiplicand) {
        return multiplier * multiplicand;
      }, 1);
      var round = createRound("round");
      var subtract2 = createMathOperation(function(minuend, subtrahend) {
        return minuend - subtrahend;
      }, 0);
      function sum(array) {
        return array && array.length ? baseSum(array, identity2) : 0;
      }
      function sumBy(array, iteratee2) {
        return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
      }
      lodash2.after = after;
      lodash2.ary = ary;
      lodash2.assign = assign;
      lodash2.assignIn = assignIn;
      lodash2.assignInWith = assignInWith;
      lodash2.assignWith = assignWith;
      lodash2.at = at;
      lodash2.before = before;
      lodash2.bind = bind;
      lodash2.bindAll = bindAll;
      lodash2.bindKey = bindKey;
      lodash2.castArray = castArray;
      lodash2.chain = chain;
      lodash2.chunk = chunk;
      lodash2.compact = compact;
      lodash2.concat = concat;
      lodash2.cond = cond;
      lodash2.conforms = conforms;
      lodash2.constant = constant2;
      lodash2.countBy = countBy;
      lodash2.create = create;
      lodash2.curry = curry;
      lodash2.curryRight = curryRight;
      lodash2.debounce = debounce2;
      lodash2.defaults = defaults;
      lodash2.defaultsDeep = defaultsDeep;
      lodash2.defer = defer;
      lodash2.delay = delay;
      lodash2.difference = difference;
      lodash2.differenceBy = differenceBy;
      lodash2.differenceWith = differenceWith;
      lodash2.drop = drop;
      lodash2.dropRight = dropRight;
      lodash2.dropRightWhile = dropRightWhile;
      lodash2.dropWhile = dropWhile;
      lodash2.fill = fill;
      lodash2.filter = filter;
      lodash2.flatMap = flatMap;
      lodash2.flatMapDeep = flatMapDeep;
      lodash2.flatMapDepth = flatMapDepth;
      lodash2.flatten = flatten2;
      lodash2.flattenDeep = flattenDeep;
      lodash2.flattenDepth = flattenDepth;
      lodash2.flip = flip;
      lodash2.flow = flow;
      lodash2.flowRight = flowRight;
      lodash2.fromPairs = fromPairs;
      lodash2.functions = functions;
      lodash2.functionsIn = functionsIn;
      lodash2.groupBy = groupBy;
      lodash2.initial = initial;
      lodash2.intersection = intersection2;
      lodash2.intersectionBy = intersectionBy;
      lodash2.intersectionWith = intersectionWith;
      lodash2.invert = invert;
      lodash2.invertBy = invertBy;
      lodash2.invokeMap = invokeMap;
      lodash2.iteratee = iteratee;
      lodash2.keyBy = keyBy;
      lodash2.keys = keys2;
      lodash2.keysIn = keysIn2;
      lodash2.map = map;
      lodash2.mapKeys = mapKeys;
      lodash2.mapValues = mapValues;
      lodash2.matches = matches;
      lodash2.matchesProperty = matchesProperty;
      lodash2.memoize = memoize2;
      lodash2.merge = merge;
      lodash2.mergeWith = mergeWith;
      lodash2.method = method;
      lodash2.methodOf = methodOf;
      lodash2.mixin = mixin;
      lodash2.negate = negate;
      lodash2.nthArg = nthArg;
      lodash2.omit = omit2;
      lodash2.omitBy = omitBy;
      lodash2.once = once;
      lodash2.orderBy = orderBy;
      lodash2.over = over;
      lodash2.overArgs = overArgs;
      lodash2.overEvery = overEvery;
      lodash2.overSome = overSome;
      lodash2.partial = partial;
      lodash2.partialRight = partialRight;
      lodash2.partition = partition;
      lodash2.pick = pick2;
      lodash2.pickBy = pickBy;
      lodash2.property = property2;
      lodash2.propertyOf = propertyOf;
      lodash2.pull = pull;
      lodash2.pullAll = pullAll;
      lodash2.pullAllBy = pullAllBy;
      lodash2.pullAllWith = pullAllWith;
      lodash2.pullAt = pullAt;
      lodash2.range = range;
      lodash2.rangeRight = rangeRight;
      lodash2.rearg = rearg;
      lodash2.reject = reject;
      lodash2.remove = remove;
      lodash2.rest = rest;
      lodash2.reverse = reverse;
      lodash2.sampleSize = sampleSize;
      lodash2.set = set;
      lodash2.setWith = setWith;
      lodash2.shuffle = shuffle;
      lodash2.slice = slice;
      lodash2.sortBy = sortBy;
      lodash2.sortedUniq = sortedUniq;
      lodash2.sortedUniqBy = sortedUniqBy;
      lodash2.split = split;
      lodash2.spread = spread;
      lodash2.tail = tail;
      lodash2.take = take;
      lodash2.takeRight = takeRight;
      lodash2.takeRightWhile = takeRightWhile;
      lodash2.takeWhile = takeWhile;
      lodash2.tap = tap;
      lodash2.throttle = throttle2;
      lodash2.thru = thru;
      lodash2.toArray = toArray;
      lodash2.toPairs = toPairs;
      lodash2.toPairsIn = toPairsIn;
      lodash2.toPath = toPath;
      lodash2.toPlainObject = toPlainObject;
      lodash2.transform = transform;
      lodash2.unary = unary;
      lodash2.union = union2;
      lodash2.unionBy = unionBy;
      lodash2.unionWith = unionWith;
      lodash2.uniq = uniq;
      lodash2.uniqBy = uniqBy;
      lodash2.uniqWith = uniqWith;
      lodash2.unset = unset;
      lodash2.unzip = unzip;
      lodash2.unzipWith = unzipWith;
      lodash2.update = update;
      lodash2.updateWith = updateWith;
      lodash2.values = values;
      lodash2.valuesIn = valuesIn;
      lodash2.without = without2;
      lodash2.words = words;
      lodash2.wrap = wrap;
      lodash2.xor = xor2;
      lodash2.xorBy = xorBy;
      lodash2.xorWith = xorWith;
      lodash2.zip = zip;
      lodash2.zipObject = zipObject;
      lodash2.zipObjectDeep = zipObjectDeep;
      lodash2.zipWith = zipWith;
      lodash2.entries = toPairs;
      lodash2.entriesIn = toPairsIn;
      lodash2.extend = assignIn;
      lodash2.extendWith = assignInWith;
      mixin(lodash2, lodash2);
      lodash2.add = add2;
      lodash2.attempt = attempt;
      lodash2.camelCase = camelCase;
      lodash2.capitalize = capitalize;
      lodash2.ceil = ceil;
      lodash2.clamp = clamp;
      lodash2.clone = clone;
      lodash2.cloneDeep = cloneDeep2;
      lodash2.cloneDeepWith = cloneDeepWith;
      lodash2.cloneWith = cloneWith;
      lodash2.conformsTo = conformsTo;
      lodash2.deburr = deburr;
      lodash2.defaultTo = defaultTo;
      lodash2.divide = divide;
      lodash2.endsWith = endsWith;
      lodash2.eq = eq2;
      lodash2.escape = escape;
      lodash2.escapeRegExp = escapeRegExp;
      lodash2.every = every;
      lodash2.find = find;
      lodash2.findIndex = findIndex2;
      lodash2.findKey = findKey;
      lodash2.findLast = findLast;
      lodash2.findLastIndex = findLastIndex;
      lodash2.findLastKey = findLastKey;
      lodash2.floor = floor;
      lodash2.forEach = forEach;
      lodash2.forEachRight = forEachRight;
      lodash2.forIn = forIn;
      lodash2.forInRight = forInRight;
      lodash2.forOwn = forOwn;
      lodash2.forOwnRight = forOwnRight;
      lodash2.get = get4;
      lodash2.gt = gt;
      lodash2.gte = gte;
      lodash2.has = has;
      lodash2.hasIn = hasIn2;
      lodash2.head = head;
      lodash2.identity = identity2;
      lodash2.includes = includes;
      lodash2.indexOf = indexOf;
      lodash2.inRange = inRange;
      lodash2.invoke = invoke;
      lodash2.isArguments = isArguments2;
      lodash2.isArray = isArray2;
      lodash2.isArrayBuffer = isArrayBuffer;
      lodash2.isArrayLike = isArrayLike2;
      lodash2.isArrayLikeObject = isArrayLikeObject;
      lodash2.isBoolean = isBoolean;
      lodash2.isBuffer = isBuffer2;
      lodash2.isDate = isDate;
      lodash2.isElement = isElement;
      lodash2.isEmpty = isEmpty;
      lodash2.isEqual = isEqual;
      lodash2.isEqualWith = isEqualWith;
      lodash2.isError = isError;
      lodash2.isFinite = isFinite;
      lodash2.isFunction = isFunction2;
      lodash2.isInteger = isInteger;
      lodash2.isLength = isLength2;
      lodash2.isMap = isMap2;
      lodash2.isMatch = isMatch;
      lodash2.isMatchWith = isMatchWith;
      lodash2.isNaN = isNaN2;
      lodash2.isNative = isNative;
      lodash2.isNil = isNil;
      lodash2.isNull = isNull;
      lodash2.isNumber = isNumber2;
      lodash2.isObject = isObject2;
      lodash2.isObjectLike = isObjectLike2;
      lodash2.isPlainObject = isPlainObject2;
      lodash2.isRegExp = isRegExp;
      lodash2.isSafeInteger = isSafeInteger;
      lodash2.isSet = isSet2;
      lodash2.isString = isString;
      lodash2.isSymbol = isSymbol2;
      lodash2.isTypedArray = isTypedArray2;
      lodash2.isUndefined = isUndefined;
      lodash2.isWeakMap = isWeakMap;
      lodash2.isWeakSet = isWeakSet;
      lodash2.join = join;
      lodash2.kebabCase = kebabCase;
      lodash2.last = last2;
      lodash2.lastIndexOf = lastIndexOf;
      lodash2.lowerCase = lowerCase;
      lodash2.lowerFirst = lowerFirst;
      lodash2.lt = lt;
      lodash2.lte = lte;
      lodash2.max = max;
      lodash2.maxBy = maxBy;
      lodash2.mean = mean;
      lodash2.meanBy = meanBy;
      lodash2.min = min;
      lodash2.minBy = minBy;
      lodash2.stubArray = stubArray2;
      lodash2.stubFalse = stubFalse2;
      lodash2.stubObject = stubObject;
      lodash2.stubString = stubString;
      lodash2.stubTrue = stubTrue;
      lodash2.multiply = multiply;
      lodash2.nth = nth;
      lodash2.noConflict = noConflict;
      lodash2.noop = noop2;
      lodash2.now = now2;
      lodash2.pad = pad;
      lodash2.padEnd = padEnd;
      lodash2.padStart = padStart;
      lodash2.parseInt = parseInt2;
      lodash2.random = random;
      lodash2.reduce = reduce2;
      lodash2.reduceRight = reduceRight;
      lodash2.repeat = repeat;
      lodash2.replace = replace;
      lodash2.result = result;
      lodash2.round = round;
      lodash2.runInContext = runInContext2;
      lodash2.sample = sample;
      lodash2.size = size2;
      lodash2.snakeCase = snakeCase;
      lodash2.some = some;
      lodash2.sortedIndex = sortedIndex;
      lodash2.sortedIndexBy = sortedIndexBy;
      lodash2.sortedIndexOf = sortedIndexOf;
      lodash2.sortedLastIndex = sortedLastIndex;
      lodash2.sortedLastIndexBy = sortedLastIndexBy;
      lodash2.sortedLastIndexOf = sortedLastIndexOf;
      lodash2.startCase = startCase;
      lodash2.startsWith = startsWith;
      lodash2.subtract = subtract2;
      lodash2.sum = sum;
      lodash2.sumBy = sumBy;
      lodash2.template = template;
      lodash2.times = times;
      lodash2.toFinite = toFinite2;
      lodash2.toInteger = toInteger2;
      lodash2.toLength = toLength;
      lodash2.toLower = toLower;
      lodash2.toNumber = toNumber2;
      lodash2.toSafeInteger = toSafeInteger;
      lodash2.toString = toString2;
      lodash2.toUpper = toUpper;
      lodash2.trim = trim;
      lodash2.trimEnd = trimEnd;
      lodash2.trimStart = trimStart;
      lodash2.truncate = truncate;
      lodash2.unescape = unescape;
      lodash2.uniqueId = uniqueId;
      lodash2.upperCase = upperCase;
      lodash2.upperFirst = upperFirst;
      lodash2.each = forEach;
      lodash2.eachRight = forEachRight;
      lodash2.first = head;
      mixin(lodash2, function() {
        var source = {};
        baseForOwn(lodash2, function(func, methodName) {
          if (!hasOwnProperty2.call(lodash2.prototype, methodName)) {
            source[methodName] = func;
          }
        });
        return source;
      }(), { "chain": false });
      lodash2.VERSION = VERSION;
      arrayEach2(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
        lodash2[methodName].placeholder = lodash2;
      });
      arrayEach2(["drop", "take"], function(methodName, index2) {
        LazyWrapper.prototype[methodName] = function(n2) {
          n2 = n2 === undefined$1 ? 1 : nativeMax2(toInteger2(n2), 0);
          var result2 = this.__filtered__ && !index2 ? new LazyWrapper(this) : this.clone();
          if (result2.__filtered__) {
            result2.__takeCount__ = nativeMin2(n2, result2.__takeCount__);
          } else {
            result2.__views__.push({
              "size": nativeMin2(n2, MAX_ARRAY_LENGTH),
              "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
            });
          }
          return result2;
        };
        LazyWrapper.prototype[methodName + "Right"] = function(n2) {
          return this.reverse()[methodName](n2).reverse();
        };
      });
      arrayEach2(["filter", "map", "takeWhile"], function(methodName, index2) {
        var type = index2 + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
        LazyWrapper.prototype[methodName] = function(iteratee2) {
          var result2 = this.clone();
          result2.__iteratees__.push({
            "iteratee": getIteratee(iteratee2, 3),
            "type": type
          });
          result2.__filtered__ = result2.__filtered__ || isFilter;
          return result2;
        };
      });
      arrayEach2(["head", "last"], function(methodName, index2) {
        var takeName = "take" + (index2 ? "Right" : "");
        LazyWrapper.prototype[methodName] = function() {
          return this[takeName](1).value()[0];
        };
      });
      arrayEach2(["initial", "tail"], function(methodName, index2) {
        var dropName = "drop" + (index2 ? "" : "Right");
        LazyWrapper.prototype[methodName] = function() {
          return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
        };
      });
      LazyWrapper.prototype.compact = function() {
        return this.filter(identity2);
      };
      LazyWrapper.prototype.find = function(predicate) {
        return this.filter(predicate).head();
      };
      LazyWrapper.prototype.findLast = function(predicate) {
        return this.reverse().find(predicate);
      };
      LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
        if (typeof path == "function") {
          return new LazyWrapper(this);
        }
        return this.map(function(value) {
          return baseInvoke(value, path, args);
        });
      });
      LazyWrapper.prototype.reject = function(predicate) {
        return this.filter(negate(getIteratee(predicate)));
      };
      LazyWrapper.prototype.slice = function(start, end) {
        start = toInteger2(start);
        var result2 = this;
        if (result2.__filtered__ && (start > 0 || end < 0)) {
          return new LazyWrapper(result2);
        }
        if (start < 0) {
          result2 = result2.takeRight(-start);
        } else if (start) {
          result2 = result2.drop(start);
        }
        if (end !== undefined$1) {
          end = toInteger2(end);
          result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
        }
        return result2;
      };
      LazyWrapper.prototype.takeRightWhile = function(predicate) {
        return this.reverse().takeWhile(predicate).reverse();
      };
      LazyWrapper.prototype.toArray = function() {
        return this.take(MAX_ARRAY_LENGTH);
      };
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash2[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
        if (!lodashFunc) {
          return;
        }
        lodash2.prototype[methodName] = function() {
          var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray2(value);
          var interceptor = function(value2) {
            var result3 = lodashFunc.apply(lodash2, arrayPush2([value2], args));
            return isTaker && chainAll ? result3[0] : result3;
          };
          if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
            isLazy = useLazy = false;
          }
          var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
          if (!retUnwrapped && useLazy) {
            value = onlyLazy ? value : new LazyWrapper(this);
            var result2 = func.apply(value, args);
            result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined$1 });
            return new LodashWrapper(result2, chainAll);
          }
          if (isUnwrapped && onlyLazy) {
            return func.apply(this, args);
          }
          result2 = this.thru(interceptor);
          return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
        };
      });
      arrayEach2(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
        var func = arrayProto2[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
        lodash2.prototype[methodName] = function() {
          var args = arguments;
          if (retUnwrapped && !this.__chain__) {
            var value = this.value();
            return func.apply(isArray2(value) ? value : [], args);
          }
          return this[chainName](function(value2) {
            return func.apply(isArray2(value2) ? value2 : [], args);
          });
        };
      });
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var lodashFunc = lodash2[methodName];
        if (lodashFunc) {
          var key = lodashFunc.name + "";
          if (!hasOwnProperty2.call(realNames, key)) {
            realNames[key] = [];
          }
          realNames[key].push({ "name": methodName, "func": lodashFunc });
        }
      });
      realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
        "name": "wrapper",
        "func": undefined$1
      }];
      LazyWrapper.prototype.clone = lazyClone;
      LazyWrapper.prototype.reverse = lazyReverse;
      LazyWrapper.prototype.value = lazyValue;
      lodash2.prototype.at = wrapperAt;
      lodash2.prototype.chain = wrapperChain;
      lodash2.prototype.commit = wrapperCommit;
      lodash2.prototype.next = wrapperNext;
      lodash2.prototype.plant = wrapperPlant;
      lodash2.prototype.reverse = wrapperReverse;
      lodash2.prototype.toJSON = lodash2.prototype.valueOf = lodash2.prototype.value = wrapperValue;
      lodash2.prototype.first = lodash2.prototype.head;
      if (symIterator) {
        lodash2.prototype[symIterator] = wrapperToIterator;
      }
      return lodash2;
    };
    var _2 = runInContext();
    if (freeModule) {
      (freeModule.exports = _2)._ = _2;
      freeExports._ = _2;
    } else {
      root2._ = _2;
    }
  }).call(commonjsGlobal);
})(lodash, lodash.exports);
var _$1 = lodash.exports;
const fillFieldNames = (fieldNames) => {
  const { title = "title", _title, key = "key", children = "children" } = fieldNames || {};
  return {
    title,
    _title: _title || [title],
    key,
    children
  };
};
const getPosition = (level, index2) => `${level}-${index2}`;
const getKey = (key, pos) => {
  if (key !== null && key !== void 0) {
    return key;
  }
  return pos;
};
const getNodeLevel = (node) => node === null ? 0 : getNodeLevel(node.parent) + 1;
const flattenTreeData = (treeNodeList, expandedKeys = [], fieldNames, nodeSort) => {
  const {
    _title: fieldTitles,
    key: fieldKey,
    children: fieldChildren
  } = fillFieldNames(fieldNames);
  if (nodeSort !== void 0) {
    treeNodeList.sort(nodeSort);
  }
  const expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys);
  const flattenList = [];
  const dig = (list, parent2 = null) => list.map((treeNode, index2) => {
    var _a;
    const pos = getPosition(parent2 ? parent2.pos : "0", index2);
    const mergedKey = getKey(treeNode[fieldKey], pos);
    let mergedTitle;
    for (let i = 0; i < fieldTitles.length; i += 1) {
      const fieldTitle = fieldTitles[i];
      if (treeNode[fieldTitle] !== void 0) {
        mergedTitle = treeNode[fieldTitle];
        break;
      }
    }
    const flattenNode = __spreadProps(__spreadValues({}, omit_1(treeNode, [...fieldTitles, fieldKey, fieldChildren])), {
      title: mergedTitle,
      key: mergedKey,
      parent: parent2,
      pos,
      children: [],
      data: treeNode,
      isEnd: [...parent2 ? parent2.isEnd : [], index2 === list.length - 1],
      isLeaf: treeNode.children === void 0 || ((_a = treeNode.children) == null ? void 0 : _a.length) === 0,
      level: getNodeLevel(parent2),
      show: [...parent2 ? parent2.show : [], true]
    });
    if (!flattenNode.isLeaf) {
      flattenNode.isExpand = expandedKeys === true || expandedKeys.includes(mergedKey);
    }
    flattenList.push(flattenNode);
    if (expandedKeys === true || expandedKeySet.has(treeNode[fieldNames.key])) {
      const childList = treeNode[fieldChildren] || [];
      if (nodeSort !== void 0) {
        childList.sort(nodeSort);
      }
      flattenNode.children = dig(childList, flattenNode);
    }
    if (nodeSort !== void 0) {
      flattenNode.children.sort(nodeSort);
    }
    return flattenNode;
  });
  dig(treeNodeList);
  return flattenList;
};
const arrayToTreeObject = (data, param = { key: "target_id", parent: "parent_id" }) => {
  const treeData = {};
  const rootData = [];
  if (!isArray_1(data)) {
    return;
  }
  data.forEach((item) => {
    treeData[item[param.key]] = __spreadProps(__spreadValues({}, item), {
      key: item[param.key],
      parent: item[param.parent]
    });
  });
  for (let i = 0; i < data.length; i++) {
    const itemKey = data[i][param.key];
    const item = treeData[itemKey];
    const parent2 = treeData[item.parent];
    if (parent2 === void 0) {
      rootData.push(item);
    } else {
      if (parent2.children === void 0) {
        parent2.children = [];
      }
      parent2.children.push(item);
    }
  }
  return rootData;
};
var DndContext = createContext({
  dragDropManager: void 0
});
var HandlerRole;
(function(HandlerRole2) {
  HandlerRole2["SOURCE"] = "SOURCE";
  HandlerRole2["TARGET"] = "TARGET";
})(HandlerRole || (HandlerRole = {}));
function invariant(condition, format) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  if (!condition) {
    var error;
    if (format === void 0) {
      error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    } else {
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function() {
        return args[argIndex++];
      }));
      error.name = "Invariant Violation";
    }
    error.framesToPop = 1;
    throw error;
  }
}
var INIT_COORDS = "dnd-core/INIT_COORDS";
var BEGIN_DRAG = "dnd-core/BEGIN_DRAG";
var PUBLISH_DRAG_SOURCE = "dnd-core/PUBLISH_DRAG_SOURCE";
var HOVER = "dnd-core/HOVER";
var DROP = "dnd-core/DROP";
var END_DRAG = "dnd-core/END_DRAG";
function setClientOffset(clientOffset, sourceClientOffset) {
  return {
    type: INIT_COORDS,
    payload: {
      sourceClientOffset: sourceClientOffset || null,
      clientOffset: clientOffset || null
    }
  };
}
function _typeof$4(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$4 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$4 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$4(obj);
}
function get$2(obj, path, defaultValue) {
  return path.split(".").reduce(function(a, c) {
    return a && a[c] ? a[c] : defaultValue || null;
  }, obj);
}
function without$1(items2, item) {
  return items2.filter(function(i) {
    return i !== item;
  });
}
function isObject$2(input) {
  return _typeof$4(input) === "object";
}
function xor(itemsA, itemsB) {
  var map = /* @__PURE__ */ new Map();
  var insertItem = function insertItem2(item) {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1);
  };
  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  var result = [];
  map.forEach(function(count, key) {
    if (count === 1) {
      result.push(key);
    }
  });
  return result;
}
function intersection(itemsA, itemsB) {
  return itemsA.filter(function(t) {
    return itemsB.indexOf(t) > -1;
  });
}
var ResetCoordinatesAction = {
  type: INIT_COORDS,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function createBeginDrag(manager) {
  return function beginDrag() {
    var sourceIds = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      publishSource: true
    };
    var _options$publishSourc = options.publishSource, publishSource = _options$publishSourc === void 0 ? true : _options$publishSourc, clientOffset = options.clientOffset, getSourceClientOffset2 = options.getSourceClientOffset;
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    manager.dispatch(setClientOffset(clientOffset));
    verifyInvariants$1(sourceIds, monitor, registry);
    var sourceId = getDraggableSource(sourceIds, monitor);
    if (sourceId === null) {
      manager.dispatch(ResetCoordinatesAction);
      return;
    }
    var sourceClientOffset = null;
    if (clientOffset) {
      if (!getSourceClientOffset2) {
        throw new Error("getSourceClientOffset must be defined");
      }
      verifyGetSourceClientOffsetIsFunction(getSourceClientOffset2);
      sourceClientOffset = getSourceClientOffset2(sourceId);
    }
    manager.dispatch(setClientOffset(clientOffset, sourceClientOffset));
    var source = registry.getSource(sourceId);
    var item = source.beginDrag(monitor, sourceId);
    if (item == null) {
      return void 0;
    }
    verifyItemIsObject(item);
    registry.pinSource(sourceId);
    var itemType = registry.getSourceType(sourceId);
    return {
      type: BEGIN_DRAG,
      payload: {
        itemType,
        item,
        sourceId,
        clientOffset: clientOffset || null,
        sourceClientOffset: sourceClientOffset || null,
        isSourcePublic: !!publishSource
      }
    };
  };
}
function verifyInvariants$1(sourceIds, monitor, registry) {
  invariant(!monitor.isDragging(), "Cannot call beginDrag while dragging.");
  sourceIds.forEach(function(sourceId) {
    invariant(registry.getSource(sourceId), "Expected sourceIds to be registered.");
  });
}
function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset2) {
  invariant(typeof getSourceClientOffset2 === "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function verifyItemIsObject(item) {
  invariant(isObject$2(item), "Item must be an object.");
}
function getDraggableSource(sourceIds, monitor) {
  var sourceId = null;
  for (var i = sourceIds.length - 1; i >= 0; i--) {
    if (monitor.canDragSource(sourceIds[i])) {
      sourceId = sourceIds[i];
      break;
    }
  }
  return sourceId;
}
function createPublishDragSource(manager) {
  return function publishDragSource() {
    var monitor = manager.getMonitor();
    if (monitor.isDragging()) {
      return {
        type: PUBLISH_DRAG_SOURCE
      };
    }
  };
}
function matchesType(targetType, draggedItemType) {
  if (draggedItemType === null) {
    return targetType === null;
  }
  return Array.isArray(targetType) ? targetType.some(function(t) {
    return t === draggedItemType;
  }) : targetType === draggedItemType;
}
function createHover(manager) {
  return function hover(targetIdsArg) {
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, clientOffset = _ref.clientOffset;
    verifyTargetIdsIsArray(targetIdsArg);
    var targetIds = targetIdsArg.slice(0);
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    checkInvariants(targetIds, monitor, registry);
    var draggedItemType = monitor.getItemType();
    removeNonMatchingTargetIds(targetIds, registry, draggedItemType);
    hoverAllTargets(targetIds, monitor, registry);
    return {
      type: HOVER,
      payload: {
        targetIds,
        clientOffset: clientOffset || null
      }
    };
  };
}
function verifyTargetIdsIsArray(targetIdsArg) {
  invariant(Array.isArray(targetIdsArg), "Expected targetIds to be an array.");
}
function checkInvariants(targetIds, monitor, registry) {
  invariant(monitor.isDragging(), "Cannot call hover while not dragging.");
  invariant(!monitor.didDrop(), "Cannot call hover after drop.");
  for (var i = 0; i < targetIds.length; i++) {
    var targetId = targetIds[i];
    invariant(targetIds.lastIndexOf(targetId) === i, "Expected targetIds to be unique in the passed array.");
    var target = registry.getTarget(targetId);
    invariant(target, "Expected targetIds to be registered.");
  }
}
function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
  for (var i = targetIds.length - 1; i >= 0; i--) {
    var targetId = targetIds[i];
    var targetType = registry.getTargetType(targetId);
    if (!matchesType(targetType, draggedItemType)) {
      targetIds.splice(i, 1);
    }
  }
}
function hoverAllTargets(targetIds, monitor, registry) {
  targetIds.forEach(function(targetId) {
    var target = registry.getTarget(targetId);
    target.hover(monitor, targetId);
  });
}
function ownKeys$c(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$c(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$c(Object(source), true).forEach(function(key) {
        _defineProperty$j(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$c(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty$j(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function createDrop(manager) {
  return function drop() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    verifyInvariants(monitor);
    var targetIds = getDroppableTargets(monitor);
    targetIds.forEach(function(targetId, index2) {
      var dropResult = determineDropResult(targetId, index2, registry, monitor);
      var action = {
        type: DROP,
        payload: {
          dropResult: _objectSpread$c(_objectSpread$c({}, options), dropResult)
        }
      };
      manager.dispatch(action);
    });
  };
}
function verifyInvariants(monitor) {
  invariant(monitor.isDragging(), "Cannot call drop while not dragging.");
  invariant(!monitor.didDrop(), "Cannot call drop twice during one drag operation.");
}
function determineDropResult(targetId, index2, registry, monitor) {
  var target = registry.getTarget(targetId);
  var dropResult = target ? target.drop(monitor, targetId) : void 0;
  verifyDropResultType(dropResult);
  if (typeof dropResult === "undefined") {
    dropResult = index2 === 0 ? {} : monitor.getDropResult();
  }
  return dropResult;
}
function verifyDropResultType(dropResult) {
  invariant(typeof dropResult === "undefined" || isObject$2(dropResult), "Drop result must either be an object or undefined.");
}
function getDroppableTargets(monitor) {
  var targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
  targetIds.reverse();
  return targetIds;
}
function createEndDrag(manager) {
  return function endDrag() {
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    verifyIsDragging(monitor);
    var sourceId = monitor.getSourceId();
    if (sourceId != null) {
      var source = registry.getSource(sourceId, true);
      source.endDrag(monitor, sourceId);
      registry.unpinSource();
    }
    return {
      type: END_DRAG
    };
  };
}
function verifyIsDragging(monitor) {
  invariant(monitor.isDragging(), "Cannot call endDrag while not dragging.");
}
function createDragDropActions(manager) {
  return {
    beginDrag: createBeginDrag(manager),
    publishDragSource: createPublishDragSource(manager),
    hover: createHover(manager),
    drop: createDrop(manager),
    endDrag: createEndDrag(manager)
  };
}
function _classCallCheck$e(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$e(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$e(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$e(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$e(Constructor, staticProps);
  return Constructor;
}
function _defineProperty$i(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DragDropManagerImpl = /* @__PURE__ */ function() {
  function DragDropManagerImpl2(store, monitor) {
    var _this = this;
    _classCallCheck$e(this, DragDropManagerImpl2);
    _defineProperty$i(this, "store", void 0);
    _defineProperty$i(this, "monitor", void 0);
    _defineProperty$i(this, "backend", void 0);
    _defineProperty$i(this, "isSetUp", false);
    _defineProperty$i(this, "handleRefCountChange", function() {
      var shouldSetUp = _this.store.getState().refCount > 0;
      if (_this.backend) {
        if (shouldSetUp && !_this.isSetUp) {
          _this.backend.setup();
          _this.isSetUp = true;
        } else if (!shouldSetUp && _this.isSetUp) {
          _this.backend.teardown();
          _this.isSetUp = false;
        }
      }
    });
    this.store = store;
    this.monitor = monitor;
    store.subscribe(this.handleRefCountChange);
  }
  _createClass$e(DragDropManagerImpl2, [{
    key: "receiveBackend",
    value: function receiveBackend(backend) {
      this.backend = backend;
    }
  }, {
    key: "getMonitor",
    value: function getMonitor() {
      return this.monitor;
    }
  }, {
    key: "getBackend",
    value: function getBackend() {
      return this.backend;
    }
  }, {
    key: "getRegistry",
    value: function getRegistry() {
      return this.monitor.registry;
    }
  }, {
    key: "getActions",
    value: function getActions() {
      var manager = this;
      var dispatch = this.store.dispatch;
      function bindActionCreator(actionCreator) {
        return function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var action = actionCreator.apply(manager, args);
          if (typeof action !== "undefined") {
            dispatch(action);
          }
        };
      }
      var actions = createDragDropActions(this);
      return Object.keys(actions).reduce(function(boundActions, key) {
        var action = actions[key];
        boundActions[key] = bindActionCreator(action);
        return boundActions;
      }, {});
    }
  }, {
    key: "dispatch",
    value: function dispatch(action) {
      this.store.dispatch(action);
    }
  }]);
  return DragDropManagerImpl2;
}();
function _defineProperty$h(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or use the non-minified dev environment for full errors. ";
}
var $$observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var randomString = function randomString2() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  var proto2 = obj;
  while (Object.getPrototypeOf(proto2) !== null) {
    proto2 = Object.getPrototypeOf(proto2);
  }
  return Object.getPrototypeOf(obj) === proto2;
}
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(formatProdErrorMessage(0));
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(formatProdErrorMessage(1));
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  if (typeof reducer !== "function") {
    throw new Error(formatProdErrorMessage(2));
  }
  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(3));
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(formatProdErrorMessage(4));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(5));
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(formatProdErrorMessage(6));
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index2 = nextListeners.indexOf(listener);
      nextListeners.splice(index2, 1);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error(formatProdErrorMessage(7));
    }
    if (typeof action.type === "undefined") {
      throw new Error(formatProdErrorMessage(8));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(9));
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(formatProdErrorMessage(10));
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  function observable() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      subscribe: function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(formatProdErrorMessage(11));
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
var strictEquality = function strictEquality2(a, b) {
  return a === b;
};
function areCoordsEqual(offsetA, offsetB) {
  if (!offsetA && !offsetB) {
    return true;
  } else if (!offsetA || !offsetB) {
    return false;
  } else {
    return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
  }
}
function areArraysEqual(a, b) {
  var isEqual = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : strictEquality;
  if (a.length !== b.length) {
    return false;
  }
  for (var i = 0; i < a.length; ++i) {
    if (!isEqual(a[i], b[i])) {
      return false;
    }
  }
  return true;
}
function ownKeys$b(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$b(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$b(Object(source), true).forEach(function(key) {
        _defineProperty$g(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$b(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty$g(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var initialState$1 = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function reduce$5() {
  var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState$1;
  var action = arguments.length > 1 ? arguments[1] : void 0;
  var payload = action.payload;
  switch (action.type) {
    case INIT_COORDS:
    case BEGIN_DRAG:
      return {
        initialSourceClientOffset: payload.sourceClientOffset,
        initialClientOffset: payload.clientOffset,
        clientOffset: payload.clientOffset
      };
    case HOVER:
      if (areCoordsEqual(state.clientOffset, payload.clientOffset)) {
        return state;
      }
      return _objectSpread$b(_objectSpread$b({}, state), {}, {
        clientOffset: payload.clientOffset
      });
    case END_DRAG:
    case DROP:
      return initialState$1;
    default:
      return state;
  }
}
var ADD_SOURCE = "dnd-core/ADD_SOURCE";
var ADD_TARGET = "dnd-core/ADD_TARGET";
var REMOVE_SOURCE = "dnd-core/REMOVE_SOURCE";
var REMOVE_TARGET = "dnd-core/REMOVE_TARGET";
function addSource(sourceId) {
  return {
    type: ADD_SOURCE,
    payload: {
      sourceId
    }
  };
}
function addTarget(targetId) {
  return {
    type: ADD_TARGET,
    payload: {
      targetId
    }
  };
}
function removeSource(sourceId) {
  return {
    type: REMOVE_SOURCE,
    payload: {
      sourceId
    }
  };
}
function removeTarget(targetId) {
  return {
    type: REMOVE_TARGET,
    payload: {
      targetId
    }
  };
}
function ownKeys$a(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$a(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$a(Object(source), true).forEach(function(key) {
        _defineProperty$f(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$a(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty$f(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var initialState = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: false,
  isSourcePublic: null
};
function reduce$4() {
  var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : void 0;
  var payload = action.payload;
  switch (action.type) {
    case BEGIN_DRAG:
      return _objectSpread$a(_objectSpread$a({}, state), {}, {
        itemType: payload.itemType,
        item: payload.item,
        sourceId: payload.sourceId,
        isSourcePublic: payload.isSourcePublic,
        dropResult: null,
        didDrop: false
      });
    case PUBLISH_DRAG_SOURCE:
      return _objectSpread$a(_objectSpread$a({}, state), {}, {
        isSourcePublic: true
      });
    case HOVER:
      return _objectSpread$a(_objectSpread$a({}, state), {}, {
        targetIds: payload.targetIds
      });
    case REMOVE_TARGET:
      if (state.targetIds.indexOf(payload.targetId) === -1) {
        return state;
      }
      return _objectSpread$a(_objectSpread$a({}, state), {}, {
        targetIds: without$1(state.targetIds, payload.targetId)
      });
    case DROP:
      return _objectSpread$a(_objectSpread$a({}, state), {}, {
        dropResult: payload.dropResult,
        didDrop: true,
        targetIds: []
      });
    case END_DRAG:
      return _objectSpread$a(_objectSpread$a({}, state), {}, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: false,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return state;
  }
}
function reduce$3() {
  var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : void 0;
  switch (action.type) {
    case ADD_SOURCE:
    case ADD_TARGET:
      return state + 1;
    case REMOVE_SOURCE:
    case REMOVE_TARGET:
      return state - 1;
    default:
      return state;
  }
}
var NONE = [];
var ALL = [];
NONE.__IS_NONE__ = true;
ALL.__IS_ALL__ = true;
function areDirty(dirtyIds, handlerIds) {
  if (dirtyIds === NONE) {
    return false;
  }
  if (dirtyIds === ALL || typeof handlerIds === "undefined") {
    return true;
  }
  var commonIds = intersection(handlerIds, dirtyIds);
  return commonIds.length > 0;
}
function reduce$2() {
  var action = arguments.length > 1 ? arguments[1] : void 0;
  switch (action.type) {
    case HOVER:
      break;
    case ADD_SOURCE:
    case ADD_TARGET:
    case REMOVE_TARGET:
    case REMOVE_SOURCE:
      return NONE;
    case BEGIN_DRAG:
    case PUBLISH_DRAG_SOURCE:
    case END_DRAG:
    case DROP:
    default:
      return ALL;
  }
  var _action$payload = action.payload, _action$payload$targe = _action$payload.targetIds, targetIds = _action$payload$targe === void 0 ? [] : _action$payload$targe, _action$payload$prevT = _action$payload.prevTargetIds, prevTargetIds = _action$payload$prevT === void 0 ? [] : _action$payload$prevT;
  var result = xor(targetIds, prevTargetIds);
  var didChange = result.length > 0 || !areArraysEqual(targetIds, prevTargetIds);
  if (!didChange) {
    return NONE;
  }
  var prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
  var innermostTargetId = targetIds[targetIds.length - 1];
  if (prevInnermostTargetId !== innermostTargetId) {
    if (prevInnermostTargetId) {
      result.push(prevInnermostTargetId);
    }
    if (innermostTargetId) {
      result.push(innermostTargetId);
    }
  }
  return result;
}
function reduce$1() {
  var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return state + 1;
}
function ownKeys$9(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$9(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$9(Object(source), true).forEach(function(key) {
        _defineProperty$e(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$9(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty$e(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function reduce() {
  var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : void 0;
  return {
    dirtyHandlerIds: reduce$2(state.dirtyHandlerIds, {
      type: action.type,
      payload: _objectSpread$9(_objectSpread$9({}, action.payload), {}, {
        prevTargetIds: get$2(state, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: reduce$5(state.dragOffset, action),
    refCount: reduce$3(state.refCount, action),
    dragOperation: reduce$4(state.dragOperation, action),
    stateId: reduce$1(state.stateId)
  };
}
function add(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  };
}
function subtract(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
function getSourceClientOffset(state) {
  var clientOffset = state.clientOffset, initialClientOffset = state.initialClientOffset, initialSourceClientOffset = state.initialSourceClientOffset;
  if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
    return null;
  }
  return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
function getDifferenceFromInitialOffset(state) {
  var clientOffset = state.clientOffset, initialClientOffset = state.initialClientOffset;
  if (!clientOffset || !initialClientOffset) {
    return null;
  }
  return subtract(clientOffset, initialClientOffset);
}
function _classCallCheck$d(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$d(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$d(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$d(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$d(Constructor, staticProps);
  return Constructor;
}
function _defineProperty$d(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DragDropMonitorImpl = /* @__PURE__ */ function() {
  function DragDropMonitorImpl2(store, registry) {
    _classCallCheck$d(this, DragDropMonitorImpl2);
    _defineProperty$d(this, "store", void 0);
    _defineProperty$d(this, "registry", void 0);
    this.store = store;
    this.registry = registry;
  }
  _createClass$d(DragDropMonitorImpl2, [{
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener) {
      var _this = this;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        handlerIds: void 0
      };
      var handlerIds = options.handlerIds;
      invariant(typeof listener === "function", "listener must be a function.");
      invariant(typeof handlerIds === "undefined" || Array.isArray(handlerIds), "handlerIds, when specified, must be an array of strings.");
      var prevStateId = this.store.getState().stateId;
      var handleChange = function handleChange2() {
        var state = _this.store.getState();
        var currentStateId = state.stateId;
        try {
          var canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !areDirty(state.dirtyHandlerIds, handlerIds);
          if (!canSkipListener) {
            listener();
          }
        } finally {
          prevStateId = currentStateId;
        }
      };
      return this.store.subscribe(handleChange);
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function subscribeToOffsetChange(listener) {
      var _this2 = this;
      invariant(typeof listener === "function", "listener must be a function.");
      var previousState = this.store.getState().dragOffset;
      var handleChange = function handleChange2() {
        var nextState = _this2.store.getState().dragOffset;
        if (nextState === previousState) {
          return;
        }
        previousState = nextState;
        listener();
      };
      return this.store.subscribe(handleChange);
    }
  }, {
    key: "canDragSource",
    value: function canDragSource(sourceId) {
      if (!sourceId) {
        return false;
      }
      var source = this.registry.getSource(sourceId);
      invariant(source, "Expected to find a valid source. sourceId=".concat(sourceId));
      if (this.isDragging()) {
        return false;
      }
      return source.canDrag(this, sourceId);
    }
  }, {
    key: "canDropOnTarget",
    value: function canDropOnTarget(targetId) {
      if (!targetId) {
        return false;
      }
      var target = this.registry.getTarget(targetId);
      invariant(target, "Expected to find a valid target. targetId=".concat(targetId));
      if (!this.isDragging() || this.didDrop()) {
        return false;
      }
      var targetType = this.registry.getTargetType(targetId);
      var draggedItemType = this.getItemType();
      return matchesType(targetType, draggedItemType) && target.canDrop(this, targetId);
    }
  }, {
    key: "isDragging",
    value: function isDragging() {
      return Boolean(this.getItemType());
    }
  }, {
    key: "isDraggingSource",
    value: function isDraggingSource(sourceId) {
      if (!sourceId) {
        return false;
      }
      var source = this.registry.getSource(sourceId, true);
      invariant(source, "Expected to find a valid source. sourceId=".concat(sourceId));
      if (!this.isDragging() || !this.isSourcePublic()) {
        return false;
      }
      var sourceType = this.registry.getSourceType(sourceId);
      var draggedItemType = this.getItemType();
      if (sourceType !== draggedItemType) {
        return false;
      }
      return source.isDragging(this, sourceId);
    }
  }, {
    key: "isOverTarget",
    value: function isOverTarget(targetId) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        shallow: false
      };
      if (!targetId) {
        return false;
      }
      var shallow = options.shallow;
      if (!this.isDragging()) {
        return false;
      }
      var targetType = this.registry.getTargetType(targetId);
      var draggedItemType = this.getItemType();
      if (draggedItemType && !matchesType(targetType, draggedItemType)) {
        return false;
      }
      var targetIds = this.getTargetIds();
      if (!targetIds.length) {
        return false;
      }
      var index2 = targetIds.indexOf(targetId);
      if (shallow) {
        return index2 === targetIds.length - 1;
      } else {
        return index2 > -1;
      }
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.store.getState().dragOperation.itemType;
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.store.getState().dragOperation.item;
    }
  }, {
    key: "getSourceId",
    value: function getSourceId() {
      return this.store.getState().dragOperation.sourceId;
    }
  }, {
    key: "getTargetIds",
    value: function getTargetIds() {
      return this.store.getState().dragOperation.targetIds;
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.store.getState().dragOperation.dropResult;
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.store.getState().dragOperation.didDrop;
    }
  }, {
    key: "isSourcePublic",
    value: function isSourcePublic() {
      return Boolean(this.store.getState().dragOperation.isSourcePublic);
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.store.getState().dragOffset.initialClientOffset;
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.store.getState().dragOffset.initialSourceClientOffset;
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.store.getState().dragOffset.clientOffset;
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset$1() {
      return getSourceClientOffset(this.store.getState().dragOffset);
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset$1() {
      return getDifferenceFromInitialOffset(this.store.getState().dragOffset);
    }
  }]);
  return DragDropMonitorImpl2;
}();
var nextUniqueId = 0;
function getNextUniqueId() {
  return nextUniqueId++;
}
function _typeof$3(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$3 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$3 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$3(obj);
}
function validateSourceContract(source) {
  invariant(typeof source.canDrag === "function", "Expected canDrag to be a function.");
  invariant(typeof source.beginDrag === "function", "Expected beginDrag to be a function.");
  invariant(typeof source.endDrag === "function", "Expected endDrag to be a function.");
}
function validateTargetContract(target) {
  invariant(typeof target.canDrop === "function", "Expected canDrop to be a function.");
  invariant(typeof target.hover === "function", "Expected hover to be a function.");
  invariant(typeof target.drop === "function", "Expected beginDrag to be a function.");
}
function validateType(type, allowArray) {
  if (allowArray && Array.isArray(type)) {
    type.forEach(function(t) {
      return validateType(t, false);
    });
    return;
  }
  invariant(typeof type === "string" || _typeof$3(type) === "symbol", allowArray ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
const scope = typeof global !== "undefined" ? global : self;
const BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
function makeRequestCallFromTimer(callback) {
  return function requestCall() {
    const timeoutHandle = setTimeout(handleTimer, 0);
    const intervalHandle = setInterval(handleTimer, 50);
    function handleTimer() {
      clearTimeout(timeoutHandle);
      clearInterval(intervalHandle);
      callback();
    }
  };
}
function makeRequestCallFromMutationObserver(callback) {
  let toggle = 1;
  const observer = new BrowserMutationObserver(callback);
  const node = document.createTextNode("");
  observer.observe(node, {
    characterData: true
  });
  return function requestCall() {
    toggle = -toggle;
    node.data = toggle;
  };
}
const makeRequestCall = typeof BrowserMutationObserver === "function" ? makeRequestCallFromMutationObserver : makeRequestCallFromTimer;
class AsapQueue {
  enqueueTask(task) {
    const { queue: q2, requestFlush } = this;
    if (!q2.length) {
      requestFlush();
      this.flushing = true;
    }
    q2[q2.length] = task;
  }
  constructor() {
    this.queue = [];
    this.pendingErrors = [];
    this.flushing = false;
    this.index = 0;
    this.capacity = 1024;
    this.flush = () => {
      const { queue: q2 } = this;
      while (this.index < q2.length) {
        const currentIndex = this.index;
        this.index++;
        q2[currentIndex].call();
        if (this.index > this.capacity) {
          for (let scan = 0, newLength = q2.length - this.index; scan < newLength; scan++) {
            q2[scan] = q2[scan + this.index];
          }
          q2.length -= this.index;
          this.index = 0;
        }
      }
      q2.length = 0;
      this.index = 0;
      this.flushing = false;
    };
    this.registerPendingError = (err) => {
      this.pendingErrors.push(err);
      this.requestErrorThrow();
    };
    this.requestFlush = makeRequestCall(this.flush);
    this.requestErrorThrow = makeRequestCallFromTimer(() => {
      if (this.pendingErrors.length) {
        throw this.pendingErrors.shift();
      }
    });
  }
}
class RawTask {
  call() {
    try {
      this.task && this.task();
    } catch (error) {
      this.onError(error);
    } finally {
      this.task = null;
      this.release(this);
    }
  }
  constructor(onError, release) {
    this.onError = onError;
    this.release = release;
    this.task = null;
  }
}
class TaskFactory {
  create(task) {
    const tasks = this.freeTasks;
    const t1 = tasks.length ? tasks.pop() : new RawTask(this.onError, (t) => tasks[tasks.length] = t);
    t1.task = task;
    return t1;
  }
  constructor(onError) {
    this.onError = onError;
    this.freeTasks = [];
  }
}
const asapQueue = new AsapQueue();
const taskFactory = new TaskFactory(asapQueue.registerPendingError);
function asap(task) {
  asapQueue.enqueueTask(taskFactory.create(task));
}
function _classCallCheck$c(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$c(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$c(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$c(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$c(Constructor, staticProps);
  return Constructor;
}
function _defineProperty$c(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray$6(arr, i) {
  return _arrayWithHoles$6(arr) || _iterableToArrayLimit$6(arr, i) || _unsupportedIterableToArray$7(arr, i) || _nonIterableRest$6();
}
function _nonIterableRest$6() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$7(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$7(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$7(o, minLen);
}
function _arrayLikeToArray$7(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$6(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$6(arr) {
  if (Array.isArray(arr))
    return arr;
}
function getNextHandlerId(role) {
  var id2 = getNextUniqueId().toString();
  switch (role) {
    case HandlerRole.SOURCE:
      return "S".concat(id2);
    case HandlerRole.TARGET:
      return "T".concat(id2);
    default:
      throw new Error("Unknown Handler Role: ".concat(role));
  }
}
function parseRoleFromHandlerId(handlerId) {
  switch (handlerId[0]) {
    case "S":
      return HandlerRole.SOURCE;
    case "T":
      return HandlerRole.TARGET;
    default:
      invariant(false, "Cannot parse handler ID: ".concat(handlerId));
  }
}
function mapContainsValue(map, searchValue) {
  var entries = map.entries();
  var isDone = false;
  do {
    var _entries$next = entries.next(), done = _entries$next.done, _entries$next$value = _slicedToArray$6(_entries$next.value, 2), value = _entries$next$value[1];
    if (value === searchValue) {
      return true;
    }
    isDone = !!done;
  } while (!isDone);
  return false;
}
var HandlerRegistryImpl = /* @__PURE__ */ function() {
  function HandlerRegistryImpl2(store) {
    _classCallCheck$c(this, HandlerRegistryImpl2);
    _defineProperty$c(this, "types", /* @__PURE__ */ new Map());
    _defineProperty$c(this, "dragSources", /* @__PURE__ */ new Map());
    _defineProperty$c(this, "dropTargets", /* @__PURE__ */ new Map());
    _defineProperty$c(this, "pinnedSourceId", null);
    _defineProperty$c(this, "pinnedSource", null);
    _defineProperty$c(this, "store", void 0);
    this.store = store;
  }
  _createClass$c(HandlerRegistryImpl2, [{
    key: "addSource",
    value: function addSource$1(type, source) {
      validateType(type);
      validateSourceContract(source);
      var sourceId = this.addHandler(HandlerRole.SOURCE, type, source);
      this.store.dispatch(addSource(sourceId));
      return sourceId;
    }
  }, {
    key: "addTarget",
    value: function addTarget$1(type, target) {
      validateType(type, true);
      validateTargetContract(target);
      var targetId = this.addHandler(HandlerRole.TARGET, type, target);
      this.store.dispatch(addTarget(targetId));
      return targetId;
    }
  }, {
    key: "containsHandler",
    value: function containsHandler(handler) {
      return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
    }
  }, {
    key: "getSource",
    value: function getSource(sourceId) {
      var includePinned = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      invariant(this.isSourceId(sourceId), "Expected a valid source ID.");
      var isPinned = includePinned && sourceId === this.pinnedSourceId;
      var source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
      return source;
    }
  }, {
    key: "getTarget",
    value: function getTarget(targetId) {
      invariant(this.isTargetId(targetId), "Expected a valid target ID.");
      return this.dropTargets.get(targetId);
    }
  }, {
    key: "getSourceType",
    value: function getSourceType(sourceId) {
      invariant(this.isSourceId(sourceId), "Expected a valid source ID.");
      return this.types.get(sourceId);
    }
  }, {
    key: "getTargetType",
    value: function getTargetType(targetId) {
      invariant(this.isTargetId(targetId), "Expected a valid target ID.");
      return this.types.get(targetId);
    }
  }, {
    key: "isSourceId",
    value: function isSourceId(handlerId) {
      var role = parseRoleFromHandlerId(handlerId);
      return role === HandlerRole.SOURCE;
    }
  }, {
    key: "isTargetId",
    value: function isTargetId(handlerId) {
      var role = parseRoleFromHandlerId(handlerId);
      return role === HandlerRole.TARGET;
    }
  }, {
    key: "removeSource",
    value: function removeSource$1(sourceId) {
      var _this = this;
      invariant(this.getSource(sourceId), "Expected an existing source.");
      this.store.dispatch(removeSource(sourceId));
      asap(function() {
        _this.dragSources.delete(sourceId);
        _this.types.delete(sourceId);
      });
    }
  }, {
    key: "removeTarget",
    value: function removeTarget$1(targetId) {
      invariant(this.getTarget(targetId), "Expected an existing target.");
      this.store.dispatch(removeTarget(targetId));
      this.dropTargets.delete(targetId);
      this.types.delete(targetId);
    }
  }, {
    key: "pinSource",
    value: function pinSource(sourceId) {
      var source = this.getSource(sourceId);
      invariant(source, "Expected an existing source.");
      this.pinnedSourceId = sourceId;
      this.pinnedSource = source;
    }
  }, {
    key: "unpinSource",
    value: function unpinSource() {
      invariant(this.pinnedSource, "No source is pinned at the time.");
      this.pinnedSourceId = null;
      this.pinnedSource = null;
    }
  }, {
    key: "addHandler",
    value: function addHandler(role, type, handler) {
      var id2 = getNextHandlerId(role);
      this.types.set(id2, type);
      if (role === HandlerRole.SOURCE) {
        this.dragSources.set(id2, handler);
      } else if (role === HandlerRole.TARGET) {
        this.dropTargets.set(id2, handler);
      }
      return id2;
    }
  }]);
  return HandlerRegistryImpl2;
}();
function createDragDropManager(backendFactory) {
  var globalContext = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
  var backendOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var debugMode = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  var store = makeStoreInstance(debugMode);
  var monitor = new DragDropMonitorImpl(store, new HandlerRegistryImpl(store));
  var manager = new DragDropManagerImpl(store, monitor);
  var backend = backendFactory(manager, globalContext, backendOptions);
  manager.receiveBackend(backend);
  return manager;
}
function makeStoreInstance(debugMode) {
  var reduxDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return createStore(reduce, debugMode && reduxDevTools && reduxDevTools({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
var _excluded = ["children"];
function _slicedToArray$5(arr, i) {
  return _arrayWithHoles$5(arr) || _iterableToArrayLimit$5(arr, i) || _unsupportedIterableToArray$6(arr, i) || _nonIterableRest$5();
}
function _nonIterableRest$5() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$6(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$6(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$6(o, minLen);
}
function _arrayLikeToArray$6(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$5(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$5(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _objectWithoutProperties$1(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var refCount = 0;
var INSTANCE_SYM = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
var DndProvider = memo(function DndProvider2(_ref) {
  var children = _ref.children, props = _objectWithoutProperties$1(_ref, _excluded);
  var _getDndContextValue = getDndContextValue(props), _getDndContextValue2 = _slicedToArray$5(_getDndContextValue, 2), manager = _getDndContextValue2[0], isGlobalInstance = _getDndContextValue2[1];
  useEffect(function() {
    if (isGlobalInstance) {
      var context = getGlobalContext();
      ++refCount;
      return function() {
        if (--refCount === 0) {
          context[INSTANCE_SYM] = null;
        }
      };
    }
  }, []);
  return jsx(DndContext.Provider, Object.assign({
    value: manager
  }, {
    children
  }), void 0);
});
function getDndContextValue(props) {
  if ("manager" in props) {
    var _manager = {
      dragDropManager: props.manager
    };
    return [_manager, false];
  }
  var manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
  var isGlobalInstance = !props.context;
  return [manager, isGlobalInstance];
}
function createSingletonDndContext(backend) {
  var context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getGlobalContext();
  var options = arguments.length > 2 ? arguments[2] : void 0;
  var debugMode = arguments.length > 3 ? arguments[3] : void 0;
  var ctx = context;
  if (!ctx[INSTANCE_SYM]) {
    ctx[INSTANCE_SYM] = {
      dragDropManager: createDragDropManager(backend, context, options, debugMode)
    };
  }
  return ctx[INSTANCE_SYM];
}
function getGlobalContext() {
  return typeof global !== "undefined" ? global : window;
}
function _classCallCheck$b(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$b(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$b(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$b(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$b(Constructor, staticProps);
  return Constructor;
}
function _defineProperty$b(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var isCallingCanDrag = false;
var isCallingIsDragging = false;
var DragSourceMonitorImpl = /* @__PURE__ */ function() {
  function DragSourceMonitorImpl2(manager) {
    _classCallCheck$b(this, DragSourceMonitorImpl2);
    _defineProperty$b(this, "internalMonitor", void 0);
    _defineProperty$b(this, "sourceId", null);
    this.internalMonitor = manager.getMonitor();
  }
  _createClass$b(DragSourceMonitorImpl2, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(sourceId) {
      this.sourceId = sourceId;
    }
  }, {
    key: "getHandlerId",
    value: function getHandlerId() {
      return this.sourceId;
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      invariant(!isCallingCanDrag, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        isCallingCanDrag = true;
        return this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        isCallingCanDrag = false;
      }
    }
  }, {
    key: "isDragging",
    value: function isDragging() {
      if (!this.sourceId) {
        return false;
      }
      invariant(!isCallingIsDragging, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        isCallingIsDragging = true;
        return this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        isCallingIsDragging = false;
      }
    }
  }, {
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener, options) {
      return this.internalMonitor.subscribeToStateChange(listener, options);
    }
  }, {
    key: "isDraggingSource",
    value: function isDraggingSource(sourceId) {
      return this.internalMonitor.isDraggingSource(sourceId);
    }
  }, {
    key: "isOverTarget",
    value: function isOverTarget(targetId, options) {
      return this.internalMonitor.isOverTarget(targetId, options);
    }
  }, {
    key: "getTargetIds",
    value: function getTargetIds() {
      return this.internalMonitor.getTargetIds();
    }
  }, {
    key: "isSourcePublic",
    value: function isSourcePublic() {
      return this.internalMonitor.isSourcePublic();
    }
  }, {
    key: "getSourceId",
    value: function getSourceId() {
      return this.internalMonitor.getSourceId();
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function subscribeToOffsetChange(listener) {
      return this.internalMonitor.subscribeToOffsetChange(listener);
    }
  }, {
    key: "canDragSource",
    value: function canDragSource(sourceId) {
      return this.internalMonitor.canDragSource(sourceId);
    }
  }, {
    key: "canDropOnTarget",
    value: function canDropOnTarget(targetId) {
      return this.internalMonitor.canDropOnTarget(targetId);
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset2() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset2() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]);
  return DragSourceMonitorImpl2;
}();
function _classCallCheck$a(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$a(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$a(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$a(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$a(Constructor, staticProps);
  return Constructor;
}
function _defineProperty$a(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var isCallingCanDrop = false;
var DropTargetMonitorImpl = /* @__PURE__ */ function() {
  function DropTargetMonitorImpl2(manager) {
    _classCallCheck$a(this, DropTargetMonitorImpl2);
    _defineProperty$a(this, "internalMonitor", void 0);
    _defineProperty$a(this, "targetId", null);
    this.internalMonitor = manager.getMonitor();
  }
  _createClass$a(DropTargetMonitorImpl2, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(targetId) {
      this.targetId = targetId;
    }
  }, {
    key: "getHandlerId",
    value: function getHandlerId() {
      return this.targetId;
    }
  }, {
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener, options) {
      return this.internalMonitor.subscribeToStateChange(listener, options);
    }
  }, {
    key: "canDrop",
    value: function canDrop() {
      if (!this.targetId) {
        return false;
      }
      invariant(!isCallingCanDrop, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
      try {
        isCallingCanDrop = true;
        return this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        isCallingCanDrop = false;
      }
    }
  }, {
    key: "isOver",
    value: function isOver(options) {
      if (!this.targetId) {
        return false;
      }
      return this.internalMonitor.isOverTarget(this.targetId, options);
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset2() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset2() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]);
  return DropTargetMonitorImpl2;
}();
function throwIfCompositeComponentElement(element) {
  if (typeof element.type === "string") {
    return;
  }
  var displayName = element.type.displayName || element.type.name || "the component";
  throw new Error("Only native element nodes can now be passed to React DnD connectors." + "You can either wrap ".concat(displayName, " into a <div>, or turn it into a ") + "drag source or a drop target itself.");
}
function wrapHookToRecognizeElement(hook) {
  return function() {
    var elementOrNode = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!isValidElement(elementOrNode)) {
      var node = elementOrNode;
      hook(node, options);
      return node;
    }
    var element = elementOrNode;
    throwIfCompositeComponentElement(element);
    var ref = options ? function(node2) {
      return hook(node2, options);
    } : hook;
    return cloneWithRef(element, ref);
  };
}
function wrapConnectorHooks(hooks) {
  var wrappedHooks = {};
  Object.keys(hooks).forEach(function(key) {
    var hook = hooks[key];
    if (key.endsWith("Ref")) {
      wrappedHooks[key] = hooks[key];
    } else {
      var wrappedHook = wrapHookToRecognizeElement(hook);
      wrappedHooks[key] = function() {
        return wrappedHook;
      };
    }
  });
  return wrappedHooks;
}
function setRef(ref, node) {
  if (typeof ref === "function") {
    ref(node);
  } else {
    ref.current = node;
  }
}
function cloneWithRef(element, newRef) {
  var previousRef = element.ref;
  invariant(typeof previousRef !== "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs");
  if (!previousRef) {
    return cloneElement(element, {
      ref: newRef
    });
  } else {
    return cloneElement(element, {
      ref: function ref(node) {
        setRef(previousRef, node);
        setRef(newRef, node);
      }
    });
  }
}
function _typeof$2(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$2 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$2 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$2(obj);
}
function isRef(obj) {
  return obj !== null && _typeof$2(obj) === "object" && Object.prototype.hasOwnProperty.call(obj, "current");
}
function shallowEqual(objA, objB, compare, compareContext) {
  var compareResult = compare ? compare.call(compareContext, objA, objB) : void 0;
  if (compareResult !== void 0) {
    return !!compareResult;
  }
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    var valueA = objA[key];
    var valueB = objB[key];
    compareResult = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
    if (compareResult === false || compareResult === void 0 && valueA !== valueB) {
      return false;
    }
  }
  return true;
}
function _classCallCheck$9(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$9(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$9(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$9(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$9(Constructor, staticProps);
  return Constructor;
}
function _defineProperty$9(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var SourceConnector = /* @__PURE__ */ function() {
  function SourceConnector2(backend) {
    var _this = this;
    _classCallCheck$9(this, SourceConnector2);
    _defineProperty$9(this, "hooks", wrapConnectorHooks({
      dragSource: function dragSource(node, options) {
        _this.clearDragSource();
        _this.dragSourceOptions = options || null;
        if (isRef(node)) {
          _this.dragSourceRef = node;
        } else {
          _this.dragSourceNode = node;
        }
        _this.reconnectDragSource();
      },
      dragPreview: function dragPreview(node, options) {
        _this.clearDragPreview();
        _this.dragPreviewOptions = options || null;
        if (isRef(node)) {
          _this.dragPreviewRef = node;
        } else {
          _this.dragPreviewNode = node;
        }
        _this.reconnectDragPreview();
      }
    }));
    _defineProperty$9(this, "handlerId", null);
    _defineProperty$9(this, "dragSourceRef", null);
    _defineProperty$9(this, "dragSourceNode", void 0);
    _defineProperty$9(this, "dragSourceOptionsInternal", null);
    _defineProperty$9(this, "dragSourceUnsubscribe", void 0);
    _defineProperty$9(this, "dragPreviewRef", null);
    _defineProperty$9(this, "dragPreviewNode", void 0);
    _defineProperty$9(this, "dragPreviewOptionsInternal", null);
    _defineProperty$9(this, "dragPreviewUnsubscribe", void 0);
    _defineProperty$9(this, "lastConnectedHandlerId", null);
    _defineProperty$9(this, "lastConnectedDragSource", null);
    _defineProperty$9(this, "lastConnectedDragSourceOptions", null);
    _defineProperty$9(this, "lastConnectedDragPreview", null);
    _defineProperty$9(this, "lastConnectedDragPreviewOptions", null);
    _defineProperty$9(this, "backend", void 0);
    this.backend = backend;
  }
  _createClass$9(SourceConnector2, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(newHandlerId) {
      if (this.handlerId === newHandlerId) {
        return;
      }
      this.handlerId = newHandlerId;
      this.reconnect();
    }
  }, {
    key: "connectTarget",
    get: function get4() {
      return this.dragSource;
    }
  }, {
    key: "dragSourceOptions",
    get: function get4() {
      return this.dragSourceOptionsInternal;
    },
    set: function set(options) {
      this.dragSourceOptionsInternal = options;
    }
  }, {
    key: "dragPreviewOptions",
    get: function get4() {
      return this.dragPreviewOptionsInternal;
    },
    set: function set(options) {
      this.dragPreviewOptionsInternal = options;
    }
  }, {
    key: "reconnect",
    value: function reconnect() {
      this.reconnectDragSource();
      this.reconnectDragPreview();
    }
  }, {
    key: "reconnectDragSource",
    value: function reconnectDragSource() {
      var dragSource = this.dragSource;
      var didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
      if (didChange) {
        this.disconnectDragSource();
      }
      if (!this.handlerId) {
        return;
      }
      if (!dragSource) {
        this.lastConnectedDragSource = dragSource;
        return;
      }
      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDragSource = dragSource;
        this.lastConnectedDragSourceOptions = this.dragSourceOptions;
        this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
      }
    }
  }, {
    key: "reconnectDragPreview",
    value: function reconnectDragPreview() {
      var dragPreview = this.dragPreview;
      var didChange = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
      if (didChange) {
        this.disconnectDragPreview();
      }
      if (!this.handlerId) {
        return;
      }
      if (!dragPreview) {
        this.lastConnectedDragPreview = dragPreview;
        return;
      }
      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDragPreview = dragPreview;
        this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
        this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
      }
    }
  }, {
    key: "didHandlerIdChange",
    value: function didHandlerIdChange() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didConnectedDragSourceChange",
    value: function didConnectedDragSourceChange() {
      return this.lastConnectedDragSource !== this.dragSource;
    }
  }, {
    key: "didConnectedDragPreviewChange",
    value: function didConnectedDragPreviewChange() {
      return this.lastConnectedDragPreview !== this.dragPreview;
    }
  }, {
    key: "didDragSourceOptionsChange",
    value: function didDragSourceOptionsChange() {
      return !shallowEqual(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
  }, {
    key: "didDragPreviewOptionsChange",
    value: function didDragPreviewOptionsChange() {
      return !shallowEqual(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
    }
  }, {
    key: "disconnectDragSource",
    value: function disconnectDragSource() {
      if (this.dragSourceUnsubscribe) {
        this.dragSourceUnsubscribe();
        this.dragSourceUnsubscribe = void 0;
      }
    }
  }, {
    key: "disconnectDragPreview",
    value: function disconnectDragPreview() {
      if (this.dragPreviewUnsubscribe) {
        this.dragPreviewUnsubscribe();
        this.dragPreviewUnsubscribe = void 0;
        this.dragPreviewNode = null;
        this.dragPreviewRef = null;
      }
    }
  }, {
    key: "dragSource",
    get: function get4() {
      return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
    }
  }, {
    key: "dragPreview",
    get: function get4() {
      return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
    }
  }, {
    key: "clearDragSource",
    value: function clearDragSource() {
      this.dragSourceNode = null;
      this.dragSourceRef = null;
    }
  }, {
    key: "clearDragPreview",
    value: function clearDragPreview() {
      this.dragPreviewNode = null;
      this.dragPreviewRef = null;
    }
  }]);
  return SourceConnector2;
}();
function _classCallCheck$8(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$8(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$8(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$8(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$8(Constructor, staticProps);
  return Constructor;
}
function _defineProperty$8(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var TargetConnector = /* @__PURE__ */ function() {
  function TargetConnector2(backend) {
    var _this = this;
    _classCallCheck$8(this, TargetConnector2);
    _defineProperty$8(this, "hooks", wrapConnectorHooks({
      dropTarget: function dropTarget(node, options) {
        _this.clearDropTarget();
        _this.dropTargetOptions = options;
        if (isRef(node)) {
          _this.dropTargetRef = node;
        } else {
          _this.dropTargetNode = node;
        }
        _this.reconnect();
      }
    }));
    _defineProperty$8(this, "handlerId", null);
    _defineProperty$8(this, "dropTargetRef", null);
    _defineProperty$8(this, "dropTargetNode", void 0);
    _defineProperty$8(this, "dropTargetOptionsInternal", null);
    _defineProperty$8(this, "unsubscribeDropTarget", void 0);
    _defineProperty$8(this, "lastConnectedHandlerId", null);
    _defineProperty$8(this, "lastConnectedDropTarget", null);
    _defineProperty$8(this, "lastConnectedDropTargetOptions", null);
    _defineProperty$8(this, "backend", void 0);
    this.backend = backend;
  }
  _createClass$8(TargetConnector2, [{
    key: "connectTarget",
    get: function get4() {
      return this.dropTarget;
    }
  }, {
    key: "reconnect",
    value: function reconnect() {
      var didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
      if (didChange) {
        this.disconnectDropTarget();
      }
      var dropTarget = this.dropTarget;
      if (!this.handlerId) {
        return;
      }
      if (!dropTarget) {
        this.lastConnectedDropTarget = dropTarget;
        return;
      }
      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDropTarget = dropTarget;
        this.lastConnectedDropTargetOptions = this.dropTargetOptions;
        this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
      }
    }
  }, {
    key: "receiveHandlerId",
    value: function receiveHandlerId(newHandlerId) {
      if (newHandlerId === this.handlerId) {
        return;
      }
      this.handlerId = newHandlerId;
      this.reconnect();
    }
  }, {
    key: "dropTargetOptions",
    get: function get4() {
      return this.dropTargetOptionsInternal;
    },
    set: function set(options) {
      this.dropTargetOptionsInternal = options;
    }
  }, {
    key: "didHandlerIdChange",
    value: function didHandlerIdChange() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didDropTargetChange",
    value: function didDropTargetChange() {
      return this.lastConnectedDropTarget !== this.dropTarget;
    }
  }, {
    key: "didOptionsChange",
    value: function didOptionsChange() {
      return !shallowEqual(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
    }
  }, {
    key: "disconnectDropTarget",
    value: function disconnectDropTarget() {
      if (this.unsubscribeDropTarget) {
        this.unsubscribeDropTarget();
        this.unsubscribeDropTarget = void 0;
      }
    }
  }, {
    key: "dropTarget",
    get: function get4() {
      return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
    }
  }, {
    key: "clearDropTarget",
    value: function clearDropTarget() {
      this.dropTargetRef = null;
      this.dropTargetNode = null;
    }
  }]);
  return TargetConnector2;
}();
function registerTarget(type, target, manager) {
  var registry = manager.getRegistry();
  var targetId = registry.addTarget(type, target);
  return [targetId, function() {
    return registry.removeTarget(targetId);
  }];
}
function registerSource(type, source, manager) {
  var registry = manager.getRegistry();
  var sourceId = registry.addSource(type, source);
  return [sourceId, function() {
    return registry.removeSource(sourceId);
  }];
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
function _typeof$1(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$1 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$1(obj);
}
function _classCallCheck$7(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$7(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$7(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$7(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$7(Constructor, staticProps);
  return Constructor;
}
function _defineProperty$7(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DragSourceImpl = /* @__PURE__ */ function() {
  function DragSourceImpl2(spec, monitor, connector) {
    _classCallCheck$7(this, DragSourceImpl2);
    _defineProperty$7(this, "spec", void 0);
    _defineProperty$7(this, "monitor", void 0);
    _defineProperty$7(this, "connector", void 0);
    this.spec = spec;
    this.monitor = monitor;
    this.connector = connector;
  }
  _createClass$7(DragSourceImpl2, [{
    key: "beginDrag",
    value: function beginDrag() {
      var _result;
      var spec = this.spec;
      var monitor = this.monitor;
      var result = null;
      if (_typeof$1(spec.item) === "object") {
        result = spec.item;
      } else if (typeof spec.item === "function") {
        result = spec.item(monitor);
      } else {
        result = {};
      }
      return (_result = result) !== null && _result !== void 0 ? _result : null;
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      var spec = this.spec;
      var monitor = this.monitor;
      if (typeof spec.canDrag === "boolean") {
        return spec.canDrag;
      } else if (typeof spec.canDrag === "function") {
        return spec.canDrag(monitor);
      } else {
        return true;
      }
    }
  }, {
    key: "isDragging",
    value: function isDragging(globalMonitor, target) {
      var spec = this.spec;
      var monitor = this.monitor;
      var isDragging2 = spec.isDragging;
      return isDragging2 ? isDragging2(monitor) : target === globalMonitor.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function endDrag() {
      var spec = this.spec;
      var monitor = this.monitor;
      var connector = this.connector;
      var end = spec.end;
      if (end) {
        end(monitor.getItem(), monitor);
      }
      connector.reconnect();
    }
  }]);
  return DragSourceImpl2;
}();
function useDragSource(spec, monitor, connector) {
  var handler = useMemo(function() {
    return new DragSourceImpl(spec, monitor, connector);
  }, [monitor, connector]);
  useEffect(function() {
    handler.spec = spec;
  }, [spec]);
  return handler;
}
function useDragDropManager() {
  var _useContext = useContext(DndContext), dragDropManager = _useContext.dragDropManager;
  invariant(dragDropManager != null, "Expected drag drop context");
  return dragDropManager;
}
function useDragType(spec) {
  return useMemo(function() {
    var result = spec.type;
    invariant(result != null, "spec.type must be defined");
    return result;
  }, [spec]);
}
function _slicedToArray$4(arr, i) {
  return _arrayWithHoles$4(arr) || _iterableToArrayLimit$4(arr, i) || _unsupportedIterableToArray$5(arr, i) || _nonIterableRest$4();
}
function _nonIterableRest$4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$5(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$5(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$5(o, minLen);
}
function _arrayLikeToArray$5(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$4(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$4(arr) {
  if (Array.isArray(arr))
    return arr;
}
function useRegisteredDragSource(spec, monitor, connector) {
  var manager = useDragDropManager();
  var handler = useDragSource(spec, monitor, connector);
  var itemType = useDragType(spec);
  useIsomorphicLayoutEffect(function registerDragSource() {
    if (itemType != null) {
      var _registerSource = registerSource(itemType, handler, manager), _registerSource2 = _slicedToArray$4(_registerSource, 2), handlerId = _registerSource2[0], unregister = _registerSource2[1];
      monitor.receiveHandlerId(handlerId);
      connector.receiveHandlerId(handlerId);
      return unregister;
    }
  }, [manager, monitor, connector, handler, itemType]);
}
function _toConsumableArray$1(arr) {
  return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$4(arr) || _nonIterableSpread$1();
}
function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$4(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$4(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$4(o, minLen);
}
function _iterableToArray$1(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$4(arr);
}
function _arrayLikeToArray$4(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function useOptionalFactory(arg, deps) {
  var memoDeps = _toConsumableArray$1(deps || []);
  if (deps == null && typeof arg !== "function") {
    memoDeps.push(arg);
  }
  return useMemo(function() {
    return typeof arg === "function" ? arg() : arg;
  }, memoDeps);
}
function useDragSourceMonitor() {
  var manager = useDragDropManager();
  return useMemo(function() {
    return new DragSourceMonitorImpl(manager);
  }, [manager]);
}
function useDragSourceConnector(dragSourceOptions, dragPreviewOptions) {
  var manager = useDragDropManager();
  var connector = useMemo(function() {
    return new SourceConnector(manager.getBackend());
  }, [manager]);
  useIsomorphicLayoutEffect(function() {
    connector.dragSourceOptions = dragSourceOptions || null;
    connector.reconnect();
    return function() {
      return connector.disconnectDragSource();
    };
  }, [connector, dragSourceOptions]);
  useIsomorphicLayoutEffect(function() {
    connector.dragPreviewOptions = dragPreviewOptions || null;
    connector.reconnect();
    return function() {
      return connector.disconnectDragPreview();
    };
  }, [connector, dragPreviewOptions]);
  return connector;
}
var fastDeepEqual = function equal(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor)
      return false;
    var length, i, keys2;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!equal(a[i], b[i]))
          return false;
      return true;
    }
    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();
    keys2 = Object.keys(a);
    length = keys2.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys2[i]))
        return false;
    for (i = length; i-- !== 0; ) {
      var key = keys2[i];
      if (!equal(a[key], b[key]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
};
function _slicedToArray$3(arr, i) {
  return _arrayWithHoles$3(arr) || _iterableToArrayLimit$3(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest$3();
}
function _nonIterableRest$3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$3(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$3(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$3(o, minLen);
}
function _arrayLikeToArray$3(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$3(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$3(arr) {
  if (Array.isArray(arr))
    return arr;
}
function useCollector(monitor, collect, onUpdate) {
  var _useState = useState(function() {
    return collect(monitor);
  }), _useState2 = _slicedToArray$3(_useState, 2), collected = _useState2[0], setCollected = _useState2[1];
  var updateCollected = useCallback(function() {
    var nextValue = collect(monitor);
    if (!fastDeepEqual(collected, nextValue)) {
      setCollected(nextValue);
      if (onUpdate) {
        onUpdate();
      }
    }
  }, [collected, monitor, onUpdate]);
  useIsomorphicLayoutEffect(updateCollected);
  return [collected, updateCollected];
}
function _slicedToArray$2(arr, i) {
  return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$2();
}
function _nonIterableRest$2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$2(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$2(o, minLen);
}
function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$2(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function useMonitorOutput(monitor, collect, onCollect) {
  var _useCollector = useCollector(monitor, collect, onCollect), _useCollector2 = _slicedToArray$2(_useCollector, 2), collected = _useCollector2[0], updateCollected = _useCollector2[1];
  useIsomorphicLayoutEffect(function subscribeToMonitorStateChange() {
    var handlerId = monitor.getHandlerId();
    if (handlerId == null) {
      return;
    }
    return monitor.subscribeToStateChange(updateCollected, {
      handlerIds: [handlerId]
    });
  }, [monitor, updateCollected]);
  return collected;
}
function useCollectedProps(collector, monitor, connector) {
  return useMonitorOutput(monitor, collector || function() {
    return {};
  }, function() {
    return connector.reconnect();
  });
}
function useConnectDragSource(connector) {
  return useMemo(function() {
    return connector.hooks.dragSource();
  }, [connector]);
}
function useConnectDragPreview(connector) {
  return useMemo(function() {
    return connector.hooks.dragPreview();
  }, [connector]);
}
function useDrag$1(specArg, deps) {
  var spec = useOptionalFactory(specArg, deps);
  invariant(!spec.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  var monitor = useDragSourceMonitor();
  var connector = useDragSourceConnector(spec.options, spec.previewOptions);
  useRegisteredDragSource(spec, monitor, connector);
  return [useCollectedProps(spec.collect, monitor, connector), useConnectDragSource(connector), useConnectDragPreview(connector)];
}
function useAccept(spec) {
  var accept = spec.accept;
  return useMemo(function() {
    invariant(spec.accept != null, "accept must be defined");
    return Array.isArray(accept) ? accept : [accept];
  }, [accept]);
}
function _classCallCheck$6(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$6(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$6(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$6(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$6(Constructor, staticProps);
  return Constructor;
}
function _defineProperty$6(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DropTargetImpl = /* @__PURE__ */ function() {
  function DropTargetImpl2(spec, monitor) {
    _classCallCheck$6(this, DropTargetImpl2);
    _defineProperty$6(this, "spec", void 0);
    _defineProperty$6(this, "monitor", void 0);
    this.spec = spec;
    this.monitor = monitor;
  }
  _createClass$6(DropTargetImpl2, [{
    key: "canDrop",
    value: function canDrop() {
      var spec = this.spec;
      var monitor = this.monitor;
      return spec.canDrop ? spec.canDrop(monitor.getItem(), monitor) : true;
    }
  }, {
    key: "hover",
    value: function hover() {
      var spec = this.spec;
      var monitor = this.monitor;
      if (spec.hover) {
        spec.hover(monitor.getItem(), monitor);
      }
    }
  }, {
    key: "drop",
    value: function drop() {
      var spec = this.spec;
      var monitor = this.monitor;
      if (spec.drop) {
        return spec.drop(monitor.getItem(), monitor);
      }
    }
  }]);
  return DropTargetImpl2;
}();
function useDropTarget(spec, monitor) {
  var dropTarget = useMemo(function() {
    return new DropTargetImpl(spec, monitor);
  }, [monitor]);
  useEffect(function() {
    dropTarget.spec = spec;
  }, [spec]);
  return dropTarget;
}
function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$1(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$1(o, minLen);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$1(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr))
    return arr;
}
function useRegisteredDropTarget(spec, monitor, connector) {
  var manager = useDragDropManager();
  var dropTarget = useDropTarget(spec, monitor);
  var accept = useAccept(spec);
  useIsomorphicLayoutEffect(function registerDropTarget() {
    var _registerTarget = registerTarget(accept, dropTarget, manager), _registerTarget2 = _slicedToArray$1(_registerTarget, 2), handlerId = _registerTarget2[0], unregister = _registerTarget2[1];
    monitor.receiveHandlerId(handlerId);
    connector.receiveHandlerId(handlerId);
    return unregister;
  }, [manager, monitor, dropTarget, connector, accept.map(function(a) {
    return a.toString();
  }).join("|")]);
}
function useDropTargetMonitor() {
  var manager = useDragDropManager();
  return useMemo(function() {
    return new DropTargetMonitorImpl(manager);
  }, [manager]);
}
function useDropTargetConnector(options) {
  var manager = useDragDropManager();
  var connector = useMemo(function() {
    return new TargetConnector(manager.getBackend());
  }, [manager]);
  useIsomorphicLayoutEffect(function() {
    connector.dropTargetOptions = options || null;
    connector.reconnect();
    return function() {
      return connector.disconnectDropTarget();
    };
  }, [options]);
  return connector;
}
function useConnectDropTarget(connector) {
  return useMemo(function() {
    return connector.hooks.dropTarget();
  }, [connector]);
}
function useDrop(specArg, deps) {
  var spec = useOptionalFactory(specArg, deps);
  var monitor = useDropTargetMonitor();
  var connector = useDropTargetConnector(spec.options);
  useRegisteredDropTarget(spec, monitor, connector);
  return [useCollectedProps(spec.collect, monitor, connector), useConnectDropTarget(connector)];
}
function memoize(fn) {
  var result = null;
  var memoized = function memoized2() {
    if (result == null) {
      result = fn();
    }
    return result;
  };
  return memoized;
}
function without(items2, item) {
  return items2.filter(function(i) {
    return i !== item;
  });
}
function union(itemsA, itemsB) {
  var set = /* @__PURE__ */ new Set();
  var insertItem = function insertItem2(item) {
    return set.add(item);
  };
  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  var result = [];
  set.forEach(function(key) {
    return result.push(key);
  });
  return result;
}
function _classCallCheck$5(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$5(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$5(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$5(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$5(Constructor, staticProps);
  return Constructor;
}
function _defineProperty$5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var EnterLeaveCounter = /* @__PURE__ */ function() {
  function EnterLeaveCounter2(isNodeInDocument) {
    _classCallCheck$5(this, EnterLeaveCounter2);
    _defineProperty$5(this, "entered", []);
    _defineProperty$5(this, "isNodeInDocument", void 0);
    this.isNodeInDocument = isNodeInDocument;
  }
  _createClass$5(EnterLeaveCounter2, [{
    key: "enter",
    value: function enter(enteringNode) {
      var _this = this;
      var previousLength = this.entered.length;
      var isNodeEntered = function isNodeEntered2(node) {
        return _this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode));
      };
      this.entered = union(this.entered.filter(isNodeEntered), [enteringNode]);
      return previousLength === 0 && this.entered.length > 0;
    }
  }, {
    key: "leave",
    value: function leave(leavingNode) {
      var previousLength = this.entered.length;
      this.entered = without(this.entered.filter(this.isNodeInDocument), leavingNode);
      return previousLength > 0 && this.entered.length === 0;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.entered = [];
    }
  }]);
  return EnterLeaveCounter2;
}();
var isFirefox = memoize(function() {
  return /firefox/i.test(navigator.userAgent);
});
var isSafari = memoize(function() {
  return Boolean(window.safari);
});
function _classCallCheck$4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$4(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$4(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$4(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$4(Constructor, staticProps);
  return Constructor;
}
function _defineProperty$4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var MonotonicInterpolant = /* @__PURE__ */ function() {
  function MonotonicInterpolant2(xs, ys) {
    _classCallCheck$4(this, MonotonicInterpolant2);
    _defineProperty$4(this, "xs", void 0);
    _defineProperty$4(this, "ys", void 0);
    _defineProperty$4(this, "c1s", void 0);
    _defineProperty$4(this, "c2s", void 0);
    _defineProperty$4(this, "c3s", void 0);
    var length = xs.length;
    var indexes = [];
    for (var i = 0; i < length; i++) {
      indexes.push(i);
    }
    indexes.sort(function(a, b) {
      return xs[a] < xs[b] ? -1 : 1;
    });
    var dxs = [];
    var ms = [];
    var dx;
    var dy;
    for (var _i = 0; _i < length - 1; _i++) {
      dx = xs[_i + 1] - xs[_i];
      dy = ys[_i + 1] - ys[_i];
      dxs.push(dx);
      ms.push(dy / dx);
    }
    var c1s = [ms[0]];
    for (var _i2 = 0; _i2 < dxs.length - 1; _i2++) {
      var m2 = ms[_i2];
      var mNext = ms[_i2 + 1];
      if (m2 * mNext <= 0) {
        c1s.push(0);
      } else {
        dx = dxs[_i2];
        var dxNext = dxs[_i2 + 1];
        var common = dx + dxNext;
        c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
      }
    }
    c1s.push(ms[ms.length - 1]);
    var c2s = [];
    var c3s = [];
    var m3;
    for (var _i3 = 0; _i3 < c1s.length - 1; _i3++) {
      m3 = ms[_i3];
      var c1 = c1s[_i3];
      var invDx = 1 / dxs[_i3];
      var _common = c1 + c1s[_i3 + 1] - m3 - m3;
      c2s.push((m3 - c1 - _common) * invDx);
      c3s.push(_common * invDx * invDx);
    }
    this.xs = xs;
    this.ys = ys;
    this.c1s = c1s;
    this.c2s = c2s;
    this.c3s = c3s;
  }
  _createClass$4(MonotonicInterpolant2, [{
    key: "interpolate",
    value: function interpolate(x) {
      var xs = this.xs, ys = this.ys, c1s = this.c1s, c2s = this.c2s, c3s = this.c3s;
      var i = xs.length - 1;
      if (x === xs[i]) {
        return ys[i];
      }
      var low = 0;
      var high = c3s.length - 1;
      var mid;
      while (low <= high) {
        mid = Math.floor(0.5 * (low + high));
        var xHere = xs[mid];
        if (xHere < x) {
          low = mid + 1;
        } else if (xHere > x) {
          high = mid - 1;
        } else {
          return ys[mid];
        }
      }
      i = Math.max(0, high);
      var diff = x - xs[i];
      var diffSq = diff * diff;
      return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
    }
  }]);
  return MonotonicInterpolant2;
}();
var ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
  var el2 = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
  if (!el2) {
    return null;
  }
  var _el$getBoundingClient = el2.getBoundingClientRect(), top = _el$getBoundingClient.top, left = _el$getBoundingClient.left;
  return {
    x: left,
    y: top
  };
}
function getEventClientOffset(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function isImageNode(node) {
  var _document$documentEle;
  return node.nodeName === "IMG" && (isFirefox() || !((_document$documentEle = document.documentElement) !== null && _document$documentEle !== void 0 && _document$documentEle.contains(node)));
}
function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
  var dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
  var dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;
  if (isSafari() && isImage) {
    dragPreviewHeight /= window.devicePixelRatio;
    dragPreviewWidth /= window.devicePixelRatio;
  }
  return {
    dragPreviewWidth,
    dragPreviewHeight
  };
}
function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
  var isImage = isImageNode(dragPreview);
  var dragPreviewNode = isImage ? sourceNode : dragPreview;
  var dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
  var offsetFromDragPreview = {
    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
  };
  var sourceWidth = sourceNode.offsetWidth, sourceHeight = sourceNode.offsetHeight;
  var anchorX = anchorPoint.anchorX, anchorY = anchorPoint.anchorY;
  var _getDragPreviewSize = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight), dragPreviewWidth = _getDragPreviewSize.dragPreviewWidth, dragPreviewHeight = _getDragPreviewSize.dragPreviewHeight;
  var calculateYOffset = function calculateYOffset2() {
    var interpolantY = new MonotonicInterpolant([0, 0.5, 1], [
      offsetFromDragPreview.y,
      offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
      offsetFromDragPreview.y + dragPreviewHeight - sourceHeight
    ]);
    var y2 = interpolantY.interpolate(anchorY);
    if (isSafari() && isImage) {
      y2 += (window.devicePixelRatio - 1) * dragPreviewHeight;
    }
    return y2;
  };
  var calculateXOffset = function calculateXOffset2() {
    var interpolantX = new MonotonicInterpolant([0, 0.5, 1], [
      offsetFromDragPreview.x,
      offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
      offsetFromDragPreview.x + dragPreviewWidth - sourceWidth
    ]);
    return interpolantX.interpolate(anchorX);
  };
  var offsetX = offsetPoint.offsetX, offsetY = offsetPoint.offsetY;
  var isManualOffsetX = offsetX === 0 || offsetX;
  var isManualOffsetY = offsetY === 0 || offsetY;
  return {
    x: isManualOffsetX ? offsetX : calculateXOffset(),
    y: isManualOffsetY ? offsetY : calculateYOffset()
  };
}
var FILE = "__NATIVE_FILE__";
var URL = "__NATIVE_URL__";
var TEXT = "__NATIVE_TEXT__";
var HTML = "__NATIVE_HTML__";
var NativeTypes = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILE,
  URL,
  TEXT,
  HTML
}, Symbol.toStringTag, { value: "Module" }));
function getDataFromDataTransfer(dataTransfer5, typesToTry, defaultValue) {
  var result = typesToTry.reduce(function(resultSoFar, typeToTry) {
    return resultSoFar || dataTransfer5.getData(typeToTry);
  }, "");
  return result != null ? result : defaultValue;
}
var _nativeTypesConfig;
function _defineProperty$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var nativeTypesConfig = (_nativeTypesConfig = {}, _defineProperty$3(_nativeTypesConfig, FILE, {
  exposeProperties: {
    files: function files(dataTransfer5) {
      return Array.prototype.slice.call(dataTransfer5.files);
    },
    items: function items(dataTransfer5) {
      return dataTransfer5.items;
    },
    dataTransfer: function dataTransfer(_dataTransfer) {
      return _dataTransfer;
    }
  },
  matchesTypes: ["Files"]
}), _defineProperty$3(_nativeTypesConfig, HTML, {
  exposeProperties: {
    html: function html(dataTransfer5, matchesTypes) {
      return getDataFromDataTransfer(dataTransfer5, matchesTypes, "");
    },
    dataTransfer: function dataTransfer2(_dataTransfer2) {
      return _dataTransfer2;
    }
  },
  matchesTypes: ["Html", "text/html"]
}), _defineProperty$3(_nativeTypesConfig, URL, {
  exposeProperties: {
    urls: function urls(dataTransfer5, matchesTypes) {
      return getDataFromDataTransfer(dataTransfer5, matchesTypes, "").split("\n");
    },
    dataTransfer: function dataTransfer3(_dataTransfer3) {
      return _dataTransfer3;
    }
  },
  matchesTypes: ["Url", "text/uri-list"]
}), _defineProperty$3(_nativeTypesConfig, TEXT, {
  exposeProperties: {
    text: function text(dataTransfer5, matchesTypes) {
      return getDataFromDataTransfer(dataTransfer5, matchesTypes, "");
    },
    dataTransfer: function dataTransfer4(_dataTransfer4) {
      return _dataTransfer4;
    }
  },
  matchesTypes: ["Text", "text/plain"]
}), _nativeTypesConfig);
function _classCallCheck$3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$3(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$3(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$3(Constructor, staticProps);
  return Constructor;
}
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var NativeDragSource = /* @__PURE__ */ function() {
  function NativeDragSource2(config) {
    _classCallCheck$3(this, NativeDragSource2);
    _defineProperty$2(this, "item", void 0);
    _defineProperty$2(this, "config", void 0);
    this.config = config;
    this.item = {};
    this.initializeExposedProperties();
  }
  _createClass$3(NativeDragSource2, [{
    key: "initializeExposedProperties",
    value: function initializeExposedProperties() {
      var _this = this;
      Object.keys(this.config.exposeProperties).forEach(function(property2) {
        Object.defineProperty(_this.item, property2, {
          configurable: true,
          enumerable: true,
          get: function get4() {
            console.warn(`Browser doesn't allow reading "`.concat(property2, '" until the drop event.'));
            return null;
          }
        });
      });
    }
  }, {
    key: "loadDataTransfer",
    value: function loadDataTransfer(dataTransfer5) {
      var _this2 = this;
      if (dataTransfer5) {
        var newProperties = {};
        Object.keys(this.config.exposeProperties).forEach(function(property2) {
          newProperties[property2] = {
            value: _this2.config.exposeProperties[property2](dataTransfer5, _this2.config.matchesTypes),
            configurable: true,
            enumerable: true
          };
        });
        Object.defineProperties(this.item, newProperties);
      }
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      return true;
    }
  }, {
    key: "beginDrag",
    value: function beginDrag() {
      return this.item;
    }
  }, {
    key: "isDragging",
    value: function isDragging(monitor, handle) {
      return handle === monitor.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function endDrag() {
    }
  }]);
  return NativeDragSource2;
}();
function createNativeDragSource(type, dataTransfer5) {
  var result = new NativeDragSource(nativeTypesConfig[type]);
  result.loadDataTransfer(dataTransfer5);
  return result;
}
function matchNativeItemType(dataTransfer5) {
  if (!dataTransfer5) {
    return null;
  }
  var dataTransferTypes = Array.prototype.slice.call(dataTransfer5.types || []);
  return Object.keys(nativeTypesConfig).filter(function(nativeItemType) {
    var matchesTypes = nativeTypesConfig[nativeItemType].matchesTypes;
    return matchesTypes.some(function(t) {
      return dataTransferTypes.indexOf(t) > -1;
    });
  })[0] || null;
}
function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$2(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$2(Constructor, staticProps);
  return Constructor;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var OptionsReader = /* @__PURE__ */ function() {
  function OptionsReader2(globalContext, options) {
    _classCallCheck$2(this, OptionsReader2);
    _defineProperty$1(this, "ownerDocument", null);
    _defineProperty$1(this, "globalContext", void 0);
    _defineProperty$1(this, "optionsArgs", void 0);
    this.globalContext = globalContext;
    this.optionsArgs = options;
  }
  _createClass$2(OptionsReader2, [{
    key: "window",
    get: function get4() {
      if (this.globalContext) {
        return this.globalContext;
      } else if (typeof window !== "undefined") {
        return window;
      }
      return void 0;
    }
  }, {
    key: "document",
    get: function get4() {
      var _this$globalContext;
      if ((_this$globalContext = this.globalContext) !== null && _this$globalContext !== void 0 && _this$globalContext.document) {
        return this.globalContext.document;
      } else if (this.window) {
        return this.window.document;
      } else {
        return void 0;
      }
    }
  }, {
    key: "rootElement",
    get: function get4() {
      var _this$optionsArgs;
      return ((_this$optionsArgs = this.optionsArgs) === null || _this$optionsArgs === void 0 ? void 0 : _this$optionsArgs.rootElement) || this.window;
    }
  }]);
  return OptionsReader2;
}();
function ownKeys$8(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$8(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$8(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$8(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$1(Constructor, staticProps);
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var HTML5BackendImpl = /* @__PURE__ */ function() {
  function HTML5BackendImpl2(manager, globalContext, options) {
    var _this = this;
    _classCallCheck$1(this, HTML5BackendImpl2);
    _defineProperty(this, "options", void 0);
    _defineProperty(this, "actions", void 0);
    _defineProperty(this, "monitor", void 0);
    _defineProperty(this, "registry", void 0);
    _defineProperty(this, "enterLeaveCounter", void 0);
    _defineProperty(this, "sourcePreviewNodes", /* @__PURE__ */ new Map());
    _defineProperty(this, "sourcePreviewNodeOptions", /* @__PURE__ */ new Map());
    _defineProperty(this, "sourceNodes", /* @__PURE__ */ new Map());
    _defineProperty(this, "sourceNodeOptions", /* @__PURE__ */ new Map());
    _defineProperty(this, "dragStartSourceIds", null);
    _defineProperty(this, "dropTargetIds", []);
    _defineProperty(this, "dragEnterTargetIds", []);
    _defineProperty(this, "currentNativeSource", null);
    _defineProperty(this, "currentNativeHandle", null);
    _defineProperty(this, "currentDragSourceNode", null);
    _defineProperty(this, "altKeyPressed", false);
    _defineProperty(this, "mouseMoveTimeoutTimer", null);
    _defineProperty(this, "asyncEndDragFrameId", null);
    _defineProperty(this, "dragOverTargetIds", null);
    _defineProperty(this, "lastClientOffset", null);
    _defineProperty(this, "hoverRafId", null);
    _defineProperty(this, "getSourceClientOffset", function(sourceId) {
      var source = _this.sourceNodes.get(sourceId);
      return source && getNodeClientOffset(source) || null;
    });
    _defineProperty(this, "endDragNativeItem", function() {
      if (!_this.isDraggingNativeItem()) {
        return;
      }
      _this.actions.endDrag();
      if (_this.currentNativeHandle) {
        _this.registry.removeSource(_this.currentNativeHandle);
      }
      _this.currentNativeHandle = null;
      _this.currentNativeSource = null;
    });
    _defineProperty(this, "isNodeInDocument", function(node) {
      return Boolean(node && _this.document && _this.document.body && _this.document.body.contains(node));
    });
    _defineProperty(this, "endDragIfSourceWasRemovedFromDOM", function() {
      var node = _this.currentDragSourceNode;
      if (node == null || _this.isNodeInDocument(node)) {
        return;
      }
      if (_this.clearCurrentDragSourceNode() && _this.monitor.isDragging()) {
        _this.actions.endDrag();
      }
    });
    _defineProperty(this, "handleTopDragStartCapture", function() {
      _this.clearCurrentDragSourceNode();
      _this.dragStartSourceIds = [];
    });
    _defineProperty(this, "handleTopDragStart", function(e) {
      if (e.defaultPrevented) {
        return;
      }
      var dragStartSourceIds = _this.dragStartSourceIds;
      _this.dragStartSourceIds = null;
      var clientOffset = getEventClientOffset(e);
      if (_this.monitor.isDragging()) {
        _this.actions.endDrag();
      }
      _this.actions.beginDrag(dragStartSourceIds || [], {
        publishSource: false,
        getSourceClientOffset: _this.getSourceClientOffset,
        clientOffset
      });
      var dataTransfer5 = e.dataTransfer;
      var nativeType = matchNativeItemType(dataTransfer5);
      if (_this.monitor.isDragging()) {
        if (dataTransfer5 && typeof dataTransfer5.setDragImage === "function") {
          var sourceId = _this.monitor.getSourceId();
          var sourceNode = _this.sourceNodes.get(sourceId);
          var dragPreview = _this.sourcePreviewNodes.get(sourceId) || sourceNode;
          if (dragPreview) {
            var _this$getCurrentSourc = _this.getCurrentSourcePreviewNodeOptions(), anchorX = _this$getCurrentSourc.anchorX, anchorY = _this$getCurrentSourc.anchorY, offsetX = _this$getCurrentSourc.offsetX, offsetY = _this$getCurrentSourc.offsetY;
            var anchorPoint = {
              anchorX,
              anchorY
            };
            var offsetPoint = {
              offsetX,
              offsetY
            };
            var dragPreviewOffset = getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);
            dataTransfer5.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
          }
        }
        try {
          dataTransfer5 === null || dataTransfer5 === void 0 ? void 0 : dataTransfer5.setData("application/json", {});
        } catch (err) {
        }
        _this.setCurrentDragSourceNode(e.target);
        var _this$getCurrentSourc2 = _this.getCurrentSourcePreviewNodeOptions(), captureDraggingState = _this$getCurrentSourc2.captureDraggingState;
        if (!captureDraggingState) {
          setTimeout(function() {
            return _this.actions.publishDragSource();
          }, 0);
        } else {
          _this.actions.publishDragSource();
        }
      } else if (nativeType) {
        _this.beginDragNativeItem(nativeType);
      } else if (dataTransfer5 && !dataTransfer5.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute("draggable"))) {
        return;
      } else {
        e.preventDefault();
      }
    });
    _defineProperty(this, "handleTopDragEndCapture", function() {
      if (_this.clearCurrentDragSourceNode() && _this.monitor.isDragging()) {
        _this.actions.endDrag();
      }
    });
    _defineProperty(this, "handleTopDragEnterCapture", function(e) {
      _this.dragEnterTargetIds = [];
      var isFirstEnter = _this.enterLeaveCounter.enter(e.target);
      if (!isFirstEnter || _this.monitor.isDragging()) {
        return;
      }
      var dataTransfer5 = e.dataTransfer;
      var nativeType = matchNativeItemType(dataTransfer5);
      if (nativeType) {
        _this.beginDragNativeItem(nativeType, dataTransfer5);
      }
    });
    _defineProperty(this, "handleTopDragEnter", function(e) {
      var dragEnterTargetIds = _this.dragEnterTargetIds;
      _this.dragEnterTargetIds = [];
      if (!_this.monitor.isDragging()) {
        return;
      }
      _this.altKeyPressed = e.altKey;
      if (dragEnterTargetIds.length > 0) {
        _this.actions.hover(dragEnterTargetIds, {
          clientOffset: getEventClientOffset(e)
        });
      }
      var canDrop = dragEnterTargetIds.some(function(targetId) {
        return _this.monitor.canDropOnTarget(targetId);
      });
      if (canDrop) {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = _this.getCurrentDropEffect();
        }
      }
    });
    _defineProperty(this, "handleTopDragOverCapture", function() {
      _this.dragOverTargetIds = [];
    });
    _defineProperty(this, "handleTopDragOver", function(e) {
      var dragOverTargetIds = _this.dragOverTargetIds;
      _this.dragOverTargetIds = [];
      if (!_this.monitor.isDragging()) {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = "none";
        }
        return;
      }
      _this.altKeyPressed = e.altKey;
      _this.lastClientOffset = getEventClientOffset(e);
      if (_this.hoverRafId === null && typeof requestAnimationFrame !== "undefined") {
        _this.hoverRafId = requestAnimationFrame(function() {
          if (_this.monitor.isDragging()) {
            _this.actions.hover(dragOverTargetIds || [], {
              clientOffset: _this.lastClientOffset
            });
          }
          _this.hoverRafId = null;
        });
      }
      var canDrop = (dragOverTargetIds || []).some(function(targetId) {
        return _this.monitor.canDropOnTarget(targetId);
      });
      if (canDrop) {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = _this.getCurrentDropEffect();
        }
      } else if (_this.isDraggingNativeItem()) {
        e.preventDefault();
      } else {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = "none";
        }
      }
    });
    _defineProperty(this, "handleTopDragLeaveCapture", function(e) {
      if (_this.isDraggingNativeItem()) {
        e.preventDefault();
      }
      var isLastLeave = _this.enterLeaveCounter.leave(e.target);
      if (!isLastLeave) {
        return;
      }
      if (_this.isDraggingNativeItem()) {
        setTimeout(function() {
          return _this.endDragNativeItem();
        }, 0);
      }
    });
    _defineProperty(this, "handleTopDropCapture", function(e) {
      _this.dropTargetIds = [];
      if (_this.isDraggingNativeItem()) {
        var _this$currentNativeSo;
        e.preventDefault();
        (_this$currentNativeSo = _this.currentNativeSource) === null || _this$currentNativeSo === void 0 ? void 0 : _this$currentNativeSo.loadDataTransfer(e.dataTransfer);
      } else if (matchNativeItemType(e.dataTransfer)) {
        e.preventDefault();
      }
      _this.enterLeaveCounter.reset();
    });
    _defineProperty(this, "handleTopDrop", function(e) {
      var dropTargetIds = _this.dropTargetIds;
      _this.dropTargetIds = [];
      _this.actions.hover(dropTargetIds, {
        clientOffset: getEventClientOffset(e)
      });
      _this.actions.drop({
        dropEffect: _this.getCurrentDropEffect()
      });
      if (_this.isDraggingNativeItem()) {
        _this.endDragNativeItem();
      } else if (_this.monitor.isDragging()) {
        _this.actions.endDrag();
      }
    });
    _defineProperty(this, "handleSelectStart", function(e) {
      var target = e.target;
      if (typeof target.dragDrop !== "function") {
        return;
      }
      if (target.tagName === "INPUT" || target.tagName === "SELECT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
        return;
      }
      e.preventDefault();
      target.dragDrop();
    });
    this.options = new OptionsReader(globalContext, options);
    this.actions = manager.getActions();
    this.monitor = manager.getMonitor();
    this.registry = manager.getRegistry();
    this.enterLeaveCounter = new EnterLeaveCounter(this.isNodeInDocument);
  }
  _createClass$1(HTML5BackendImpl2, [{
    key: "profile",
    value: function profile() {
      var _this$dragStartSource, _this$dragOverTargetI;
      return {
        sourcePreviewNodes: this.sourcePreviewNodes.size,
        sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
        sourceNodeOptions: this.sourceNodeOptions.size,
        sourceNodes: this.sourceNodes.size,
        dragStartSourceIds: ((_this$dragStartSource = this.dragStartSourceIds) === null || _this$dragStartSource === void 0 ? void 0 : _this$dragStartSource.length) || 0,
        dropTargetIds: this.dropTargetIds.length,
        dragEnterTargetIds: this.dragEnterTargetIds.length,
        dragOverTargetIds: ((_this$dragOverTargetI = this.dragOverTargetIds) === null || _this$dragOverTargetI === void 0 ? void 0 : _this$dragOverTargetI.length) || 0
      };
    }
  }, {
    key: "window",
    get: function get4() {
      return this.options.window;
    }
  }, {
    key: "document",
    get: function get4() {
      return this.options.document;
    }
  }, {
    key: "rootElement",
    get: function get4() {
      return this.options.rootElement;
    }
  }, {
    key: "setup",
    value: function setup() {
      var root2 = this.rootElement;
      if (root2 === void 0) {
        return;
      }
      if (root2.__isReactDndBackendSetUp) {
        throw new Error("Cannot have two HTML5 backends at the same time.");
      }
      root2.__isReactDndBackendSetUp = true;
      this.addEventListeners(root2);
    }
  }, {
    key: "teardown",
    value: function teardown() {
      var root2 = this.rootElement;
      if (root2 === void 0) {
        return;
      }
      root2.__isReactDndBackendSetUp = false;
      this.removeEventListeners(this.rootElement);
      this.clearCurrentDragSourceNode();
      if (this.asyncEndDragFrameId) {
        var _this$window;
        (_this$window = this.window) === null || _this$window === void 0 ? void 0 : _this$window.cancelAnimationFrame(this.asyncEndDragFrameId);
      }
    }
  }, {
    key: "connectDragPreview",
    value: function connectDragPreview(sourceId, node, options) {
      var _this2 = this;
      this.sourcePreviewNodeOptions.set(sourceId, options);
      this.sourcePreviewNodes.set(sourceId, node);
      return function() {
        _this2.sourcePreviewNodes.delete(sourceId);
        _this2.sourcePreviewNodeOptions.delete(sourceId);
      };
    }
  }, {
    key: "connectDragSource",
    value: function connectDragSource(sourceId, node, options) {
      var _this3 = this;
      this.sourceNodes.set(sourceId, node);
      this.sourceNodeOptions.set(sourceId, options);
      var handleDragStart = function handleDragStart2(e) {
        return _this3.handleDragStart(e, sourceId);
      };
      var handleSelectStart = function handleSelectStart2(e) {
        return _this3.handleSelectStart(e);
      };
      node.setAttribute("draggable", "true");
      node.addEventListener("dragstart", handleDragStart);
      node.addEventListener("selectstart", handleSelectStart);
      return function() {
        _this3.sourceNodes.delete(sourceId);
        _this3.sourceNodeOptions.delete(sourceId);
        node.removeEventListener("dragstart", handleDragStart);
        node.removeEventListener("selectstart", handleSelectStart);
        node.setAttribute("draggable", "false");
      };
    }
  }, {
    key: "connectDropTarget",
    value: function connectDropTarget(targetId, node) {
      var _this4 = this;
      var handleDragEnter = function handleDragEnter2(e) {
        return _this4.handleDragEnter(e, targetId);
      };
      var handleDragOver = function handleDragOver2(e) {
        return _this4.handleDragOver(e, targetId);
      };
      var handleDrop = function handleDrop2(e) {
        return _this4.handleDrop(e, targetId);
      };
      node.addEventListener("dragenter", handleDragEnter);
      node.addEventListener("dragover", handleDragOver);
      node.addEventListener("drop", handleDrop);
      return function() {
        node.removeEventListener("dragenter", handleDragEnter);
        node.removeEventListener("dragover", handleDragOver);
        node.removeEventListener("drop", handleDrop);
      };
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners(target) {
      if (!target.addEventListener) {
        return;
      }
      target.addEventListener("dragstart", this.handleTopDragStart);
      target.addEventListener("dragstart", this.handleTopDragStartCapture, true);
      target.addEventListener("dragend", this.handleTopDragEndCapture, true);
      target.addEventListener("dragenter", this.handleTopDragEnter);
      target.addEventListener("dragenter", this.handleTopDragEnterCapture, true);
      target.addEventListener("dragleave", this.handleTopDragLeaveCapture, true);
      target.addEventListener("dragover", this.handleTopDragOver);
      target.addEventListener("dragover", this.handleTopDragOverCapture, true);
      target.addEventListener("drop", this.handleTopDrop);
      target.addEventListener("drop", this.handleTopDropCapture, true);
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners(target) {
      if (!target.removeEventListener) {
        return;
      }
      target.removeEventListener("dragstart", this.handleTopDragStart);
      target.removeEventListener("dragstart", this.handleTopDragStartCapture, true);
      target.removeEventListener("dragend", this.handleTopDragEndCapture, true);
      target.removeEventListener("dragenter", this.handleTopDragEnter);
      target.removeEventListener("dragenter", this.handleTopDragEnterCapture, true);
      target.removeEventListener("dragleave", this.handleTopDragLeaveCapture, true);
      target.removeEventListener("dragover", this.handleTopDragOver);
      target.removeEventListener("dragover", this.handleTopDragOverCapture, true);
      target.removeEventListener("drop", this.handleTopDrop);
      target.removeEventListener("drop", this.handleTopDropCapture, true);
    }
  }, {
    key: "getCurrentSourceNodeOptions",
    value: function getCurrentSourceNodeOptions() {
      var sourceId = this.monitor.getSourceId();
      var sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
      return _objectSpread$8({
        dropEffect: this.altKeyPressed ? "copy" : "move"
      }, sourceNodeOptions || {});
    }
  }, {
    key: "getCurrentDropEffect",
    value: function getCurrentDropEffect() {
      if (this.isDraggingNativeItem()) {
        return "copy";
      }
      return this.getCurrentSourceNodeOptions().dropEffect;
    }
  }, {
    key: "getCurrentSourcePreviewNodeOptions",
    value: function getCurrentSourcePreviewNodeOptions() {
      var sourceId = this.monitor.getSourceId();
      var sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
      return _objectSpread$8({
        anchorX: 0.5,
        anchorY: 0.5,
        captureDraggingState: false
      }, sourcePreviewNodeOptions || {});
    }
  }, {
    key: "isDraggingNativeItem",
    value: function isDraggingNativeItem() {
      var itemType = this.monitor.getItemType();
      return Object.keys(NativeTypes).some(function(key) {
        return NativeTypes[key] === itemType;
      });
    }
  }, {
    key: "beginDragNativeItem",
    value: function beginDragNativeItem(type, dataTransfer5) {
      this.clearCurrentDragSourceNode();
      this.currentNativeSource = createNativeDragSource(type, dataTransfer5);
      this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
      this.actions.beginDrag([this.currentNativeHandle]);
    }
  }, {
    key: "setCurrentDragSourceNode",
    value: function setCurrentDragSourceNode(node) {
      var _this5 = this;
      this.clearCurrentDragSourceNode();
      this.currentDragSourceNode = node;
      var MOUSE_MOVE_TIMEOUT = 1e3;
      this.mouseMoveTimeoutTimer = setTimeout(function() {
        var _this5$rootElement;
        return (_this5$rootElement = _this5.rootElement) === null || _this5$rootElement === void 0 ? void 0 : _this5$rootElement.addEventListener("mousemove", _this5.endDragIfSourceWasRemovedFromDOM, true);
      }, MOUSE_MOVE_TIMEOUT);
    }
  }, {
    key: "clearCurrentDragSourceNode",
    value: function clearCurrentDragSourceNode() {
      if (this.currentDragSourceNode) {
        this.currentDragSourceNode = null;
        if (this.rootElement) {
          var _this$window2;
          (_this$window2 = this.window) === null || _this$window2 === void 0 ? void 0 : _this$window2.clearTimeout(this.mouseMoveTimeoutTimer || void 0);
          this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, true);
        }
        this.mouseMoveTimeoutTimer = null;
        return true;
      }
      return false;
    }
  }, {
    key: "handleDragStart",
    value: function handleDragStart(e, sourceId) {
      if (e.defaultPrevented) {
        return;
      }
      if (!this.dragStartSourceIds) {
        this.dragStartSourceIds = [];
      }
      this.dragStartSourceIds.unshift(sourceId);
    }
  }, {
    key: "handleDragEnter",
    value: function handleDragEnter(e, targetId) {
      this.dragEnterTargetIds.unshift(targetId);
    }
  }, {
    key: "handleDragOver",
    value: function handleDragOver(e, targetId) {
      if (this.dragOverTargetIds === null) {
        this.dragOverTargetIds = [];
      }
      this.dragOverTargetIds.unshift(targetId);
    }
  }, {
    key: "handleDrop",
    value: function handleDrop(e, targetId) {
      this.dropTargetIds.unshift(targetId);
    }
  }]);
  return HTML5BackendImpl2;
}();
var HTML5Backend = function createBackend(manager, context, options) {
  return new HTML5BackendImpl(manager, context, options);
};
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _possibleConstructorReturn(self2, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function componentWillMount() {
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== void 0) {
    this.setState(state);
  }
}
function componentWillReceiveProps(nextProps) {
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== void 0 ? state : null;
  }
  this.setState(updater.bind(this));
}
function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;
function polyfill(Component2) {
  var prototype = Component2.prototype;
  if (!prototype || !prototype.isReactComponent) {
    throw new Error("Can only polyfill class components");
  }
  if (typeof Component2.getDerivedStateFromProps !== "function" && typeof prototype.getSnapshotBeforeUpdate !== "function") {
    return Component2;
  }
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === "function") {
    foundWillMountName = "componentWillMount";
  } else if (typeof prototype.UNSAFE_componentWillMount === "function") {
    foundWillMountName = "UNSAFE_componentWillMount";
  }
  if (typeof prototype.componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "componentWillReceiveProps";
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
  }
  if (typeof prototype.componentWillUpdate === "function") {
    foundWillUpdateName = "componentWillUpdate";
  } else if (typeof prototype.UNSAFE_componentWillUpdate === "function") {
    foundWillUpdateName = "UNSAFE_componentWillUpdate";
  }
  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
    var componentName = Component2.displayName || Component2.name;
    var newApiName = typeof Component2.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + componentName + " uses " + newApiName + " but also contains the following legacy lifecycles:" + (foundWillMountName !== null ? "\n  " + foundWillMountName : "") + (foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "") + (foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks");
  }
  if (typeof Component2.getDerivedStateFromProps === "function") {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }
  if (typeof prototype.getSnapshotBeforeUpdate === "function") {
    if (typeof prototype.componentDidUpdate !== "function") {
      throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
    }
    prototype.componentWillUpdate = componentWillUpdate;
    var componentDidUpdate = prototype.componentDidUpdate;
    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }
  return Component2;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function toVal(mix) {
  var k, y2, str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y2 = toVal(mix[k])) {
            str && (str += " ");
            str += y2;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }
  return str;
}
function clsx() {
  var i = 0, tmp, x, str = "";
  while (i < arguments.length) {
    if (tmp = arguments[i++]) {
      if (x = toVal(tmp)) {
        str && (str += " ");
        str += x;
      }
    }
  }
  return str;
}
function calculateSizeAndPositionDataAndUpdateScrollOffset(_ref) {
  var cellCount = _ref.cellCount, cellSize = _ref.cellSize, computeMetadataCallback = _ref.computeMetadataCallback, computeMetadataCallbackProps = _ref.computeMetadataCallbackProps, nextCellsCount = _ref.nextCellsCount, nextCellSize = _ref.nextCellSize, nextScrollToIndex = _ref.nextScrollToIndex, scrollToIndex = _ref.scrollToIndex, updateScrollOffsetForScrollToIndex = _ref.updateScrollOffsetForScrollToIndex;
  if (cellCount !== nextCellsCount || (typeof cellSize === "number" || typeof nextCellSize === "number") && cellSize !== nextCellSize) {
    computeMetadataCallback(computeMetadataCallbackProps);
    if (scrollToIndex >= 0 && scrollToIndex === nextScrollToIndex) {
      updateScrollOffsetForScrollToIndex();
    }
  }
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
var CellSizeAndPositionManager = /* @__PURE__ */ function() {
  function CellSizeAndPositionManager2(_ref) {
    var cellCount = _ref.cellCount, cellSizeGetter = _ref.cellSizeGetter, estimatedCellSize = _ref.estimatedCellSize;
    _classCallCheck(this, CellSizeAndPositionManager2);
    _defineProperty$h(this, "_cellSizeAndPositionData", {});
    _defineProperty$h(this, "_lastMeasuredIndex", -1);
    _defineProperty$h(this, "_lastBatchedIndex", -1);
    _defineProperty$h(this, "_cellCount", void 0);
    _defineProperty$h(this, "_cellSizeGetter", void 0);
    _defineProperty$h(this, "_estimatedCellSize", void 0);
    this._cellSizeGetter = cellSizeGetter;
    this._cellCount = cellCount;
    this._estimatedCellSize = estimatedCellSize;
  }
  _createClass(CellSizeAndPositionManager2, [{
    key: "areOffsetsAdjusted",
    value: function areOffsetsAdjusted() {
      return false;
    }
  }, {
    key: "configure",
    value: function configure(_ref2) {
      var cellCount = _ref2.cellCount, estimatedCellSize = _ref2.estimatedCellSize, cellSizeGetter = _ref2.cellSizeGetter;
      this._cellCount = cellCount;
      this._estimatedCellSize = estimatedCellSize;
      this._cellSizeGetter = cellSizeGetter;
    }
  }, {
    key: "getCellCount",
    value: function getCellCount() {
      return this._cellCount;
    }
  }, {
    key: "getEstimatedCellSize",
    value: function getEstimatedCellSize() {
      return this._estimatedCellSize;
    }
  }, {
    key: "getLastMeasuredIndex",
    value: function getLastMeasuredIndex() {
      return this._lastMeasuredIndex;
    }
  }, {
    key: "getOffsetAdjustment",
    value: function getOffsetAdjustment() {
      return 0;
    }
  }, {
    key: "getSizeAndPositionOfCell",
    value: function getSizeAndPositionOfCell(index2) {
      if (index2 < 0 || index2 >= this._cellCount) {
        throw Error("Requested index ".concat(index2, " is outside of range 0..").concat(this._cellCount));
      }
      if (index2 > this._lastMeasuredIndex) {
        var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
        var offset = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;
        for (var i = this._lastMeasuredIndex + 1; i <= index2; i++) {
          var size2 = this._cellSizeGetter({
            index: i
          });
          if (size2 === void 0 || isNaN(size2)) {
            throw Error("Invalid size returned for cell ".concat(i, " of value ").concat(size2));
          } else if (size2 === null) {
            this._cellSizeAndPositionData[i] = {
              offset,
              size: 0
            };
            this._lastBatchedIndex = index2;
          } else {
            this._cellSizeAndPositionData[i] = {
              offset,
              size: size2
            };
            offset += size2;
            this._lastMeasuredIndex = index2;
          }
        }
      }
      return this._cellSizeAndPositionData[index2];
    }
  }, {
    key: "getSizeAndPositionOfLastMeasuredCell",
    value: function getSizeAndPositionOfLastMeasuredCell() {
      return this._lastMeasuredIndex >= 0 ? this._cellSizeAndPositionData[this._lastMeasuredIndex] : {
        offset: 0,
        size: 0
      };
    }
  }, {
    key: "getTotalSize",
    value: function getTotalSize() {
      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
      var totalSizeOfMeasuredCells = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;
      var numUnmeasuredCells = this._cellCount - this._lastMeasuredIndex - 1;
      var totalSizeOfUnmeasuredCells = numUnmeasuredCells * this._estimatedCellSize;
      return totalSizeOfMeasuredCells + totalSizeOfUnmeasuredCells;
    }
  }, {
    key: "getUpdatedOffsetForIndex",
    value: function getUpdatedOffsetForIndex2(_ref3) {
      var _ref3$align = _ref3.align, align = _ref3$align === void 0 ? "auto" : _ref3$align, containerSize = _ref3.containerSize, currentOffset = _ref3.currentOffset, targetIndex = _ref3.targetIndex;
      if (containerSize <= 0) {
        return 0;
      }
      var datum = this.getSizeAndPositionOfCell(targetIndex);
      var maxOffset = datum.offset;
      var minOffset = maxOffset - containerSize + datum.size;
      var idealOffset;
      switch (align) {
        case "start":
          idealOffset = maxOffset;
          break;
        case "end":
          idealOffset = minOffset;
          break;
        case "center":
          idealOffset = maxOffset - (containerSize - datum.size) / 2;
          break;
        default:
          idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
          break;
      }
      var totalSize = this.getTotalSize();
      return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
    }
  }, {
    key: "getVisibleCellRange",
    value: function getVisibleCellRange(params) {
      var containerSize = params.containerSize, offset = params.offset;
      var totalSize = this.getTotalSize();
      if (totalSize === 0) {
        return {};
      }
      var maxOffset = offset + containerSize;
      var start = this._findNearestCell(offset);
      var datum = this.getSizeAndPositionOfCell(start);
      offset = datum.offset + datum.size;
      var stop = start;
      while (offset < maxOffset && stop < this._cellCount - 1) {
        stop++;
        offset += this.getSizeAndPositionOfCell(stop).size;
      }
      return {
        start,
        stop
      };
    }
  }, {
    key: "resetCell",
    value: function resetCell(index2) {
      this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, index2 - 1);
    }
  }, {
    key: "_binarySearch",
    value: function _binarySearch(high, low, offset) {
      while (low <= high) {
        var middle = low + Math.floor((high - low) / 2);
        var currentOffset = this.getSizeAndPositionOfCell(middle).offset;
        if (currentOffset === offset) {
          return middle;
        } else if (currentOffset < offset) {
          low = middle + 1;
        } else if (currentOffset > offset) {
          high = middle - 1;
        }
      }
      if (low > 0) {
        return low - 1;
      } else {
        return 0;
      }
    }
  }, {
    key: "_exponentialSearch",
    value: function _exponentialSearch(index2, offset) {
      var interval = 1;
      while (index2 < this._cellCount && this.getSizeAndPositionOfCell(index2).offset < offset) {
        index2 += interval;
        interval *= 2;
      }
      return this._binarySearch(Math.min(index2, this._cellCount - 1), Math.floor(index2 / 2), offset);
    }
  }, {
    key: "_findNearestCell",
    value: function _findNearestCell(offset) {
      if (isNaN(offset)) {
        throw Error("Invalid offset ".concat(offset, " specified"));
      }
      offset = Math.max(0, offset);
      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
      var lastMeasuredIndex = Math.max(0, this._lastMeasuredIndex);
      if (lastMeasuredCellSizeAndPosition.offset >= offset) {
        return this._binarySearch(lastMeasuredIndex, 0, offset);
      } else {
        return this._exponentialSearch(lastMeasuredIndex, offset);
      }
    }
  }]);
  return CellSizeAndPositionManager2;
}();
var DEFAULT_MAX_ELEMENT_SIZE = 15e5;
var CHROME_MAX_ELEMENT_SIZE = 16777100;
var isBrowser = function isBrowser2() {
  return typeof window !== "undefined";
};
var isChrome = function isChrome2() {
  return !!window.chrome;
};
var getMaxElementSize = function getMaxElementSize2() {
  if (isBrowser()) {
    if (isChrome()) {
      return CHROME_MAX_ELEMENT_SIZE;
    }
  }
  return DEFAULT_MAX_ELEMENT_SIZE;
};
var ScalingCellSizeAndPositionManager = /* @__PURE__ */ function() {
  function ScalingCellSizeAndPositionManager2(_ref) {
    var _ref$maxScrollSize = _ref.maxScrollSize, maxScrollSize = _ref$maxScrollSize === void 0 ? getMaxElementSize() : _ref$maxScrollSize, params = _objectWithoutProperties(_ref, ["maxScrollSize"]);
    _classCallCheck(this, ScalingCellSizeAndPositionManager2);
    _defineProperty$h(this, "_cellSizeAndPositionManager", void 0);
    _defineProperty$h(this, "_maxScrollSize", void 0);
    this._cellSizeAndPositionManager = new CellSizeAndPositionManager(params);
    this._maxScrollSize = maxScrollSize;
  }
  _createClass(ScalingCellSizeAndPositionManager2, [{
    key: "areOffsetsAdjusted",
    value: function areOffsetsAdjusted() {
      return this._cellSizeAndPositionManager.getTotalSize() > this._maxScrollSize;
    }
  }, {
    key: "configure",
    value: function configure(params) {
      this._cellSizeAndPositionManager.configure(params);
    }
  }, {
    key: "getCellCount",
    value: function getCellCount() {
      return this._cellSizeAndPositionManager.getCellCount();
    }
  }, {
    key: "getEstimatedCellSize",
    value: function getEstimatedCellSize() {
      return this._cellSizeAndPositionManager.getEstimatedCellSize();
    }
  }, {
    key: "getLastMeasuredIndex",
    value: function getLastMeasuredIndex() {
      return this._cellSizeAndPositionManager.getLastMeasuredIndex();
    }
  }, {
    key: "getOffsetAdjustment",
    value: function getOffsetAdjustment(_ref2) {
      var containerSize = _ref2.containerSize, offset = _ref2.offset;
      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();
      var offsetPercentage = this._getOffsetPercentage({
        containerSize,
        offset,
        totalSize: safeTotalSize
      });
      return Math.round(offsetPercentage * (safeTotalSize - totalSize));
    }
  }, {
    key: "getSizeAndPositionOfCell",
    value: function getSizeAndPositionOfCell(index2) {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(index2);
    }
  }, {
    key: "getSizeAndPositionOfLastMeasuredCell",
    value: function getSizeAndPositionOfLastMeasuredCell() {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
    }
  }, {
    key: "getTotalSize",
    value: function getTotalSize() {
      return Math.min(this._maxScrollSize, this._cellSizeAndPositionManager.getTotalSize());
    }
  }, {
    key: "getUpdatedOffsetForIndex",
    value: function getUpdatedOffsetForIndex2(_ref3) {
      var _ref3$align = _ref3.align, align = _ref3$align === void 0 ? "auto" : _ref3$align, containerSize = _ref3.containerSize, currentOffset = _ref3.currentOffset, targetIndex = _ref3.targetIndex;
      currentOffset = this._safeOffsetToOffset({
        containerSize,
        offset: currentOffset
      });
      var offset = this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
        align,
        containerSize,
        currentOffset,
        targetIndex
      });
      return this._offsetToSafeOffset({
        containerSize,
        offset
      });
    }
  }, {
    key: "getVisibleCellRange",
    value: function getVisibleCellRange(_ref4) {
      var containerSize = _ref4.containerSize, offset = _ref4.offset;
      offset = this._safeOffsetToOffset({
        containerSize,
        offset
      });
      return this._cellSizeAndPositionManager.getVisibleCellRange({
        containerSize,
        offset
      });
    }
  }, {
    key: "resetCell",
    value: function resetCell(index2) {
      this._cellSizeAndPositionManager.resetCell(index2);
    }
  }, {
    key: "_getOffsetPercentage",
    value: function _getOffsetPercentage(_ref5) {
      var containerSize = _ref5.containerSize, offset = _ref5.offset, totalSize = _ref5.totalSize;
      return totalSize <= containerSize ? 0 : offset / (totalSize - containerSize);
    }
  }, {
    key: "_offsetToSafeOffset",
    value: function _offsetToSafeOffset(_ref6) {
      var containerSize = _ref6.containerSize, offset = _ref6.offset;
      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();
      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize,
          offset,
          totalSize
        });
        return Math.round(offsetPercentage * (safeTotalSize - containerSize));
      }
    }
  }, {
    key: "_safeOffsetToOffset",
    value: function _safeOffsetToOffset(_ref7) {
      var containerSize = _ref7.containerSize, offset = _ref7.offset;
      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();
      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize,
          offset,
          totalSize: safeTotalSize
        });
        return Math.round(offsetPercentage * (totalSize - containerSize));
      }
    }
  }]);
  return ScalingCellSizeAndPositionManager2;
}();
function createCallbackMemoizer() {
  var requireAllKeys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  var cachedIndices = {};
  return function(_ref) {
    var callback = _ref.callback, indices = _ref.indices;
    var keys2 = Object.keys(indices);
    var allInitialized = !requireAllKeys || keys2.every(function(key) {
      var value = indices[key];
      return Array.isArray(value) ? value.length > 0 : value >= 0;
    });
    var indexChanged = keys2.length !== Object.keys(cachedIndices).length || keys2.some(function(key) {
      var cachedValue = cachedIndices[key];
      var value = indices[key];
      return Array.isArray(value) ? cachedValue.join(",") !== value.join(",") : cachedValue !== value;
    });
    cachedIndices = indices;
    if (allInitialized && indexChanged) {
      callback(indices);
    }
  };
}
var SCROLL_DIRECTION_BACKWARD = -1;
var SCROLL_DIRECTION_FORWARD$1 = 1;
function defaultOverscanIndicesGetter$1(_ref) {
  var cellCount = _ref.cellCount, overscanCellsCount = _ref.overscanCellsCount, scrollDirection = _ref.scrollDirection, startIndex = _ref.startIndex, stopIndex = _ref.stopIndex;
  if (scrollDirection === SCROLL_DIRECTION_FORWARD$1) {
    return {
      overscanStartIndex: Math.max(0, startIndex),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
    };
  } else {
    return {
      overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex)
    };
  }
}
function updateScrollIndexHelper(_ref) {
  var cellSize = _ref.cellSize, cellSizeAndPositionManager = _ref.cellSizeAndPositionManager, previousCellsCount = _ref.previousCellsCount, previousCellSize = _ref.previousCellSize, previousScrollToAlignment = _ref.previousScrollToAlignment, previousScrollToIndex = _ref.previousScrollToIndex, previousSize = _ref.previousSize, scrollOffset = _ref.scrollOffset, scrollToAlignment = _ref.scrollToAlignment, scrollToIndex = _ref.scrollToIndex, size2 = _ref.size, sizeJustIncreasedFromZero = _ref.sizeJustIncreasedFromZero, updateScrollIndexCallback = _ref.updateScrollIndexCallback;
  var cellCount = cellSizeAndPositionManager.getCellCount();
  var hasScrollToIndex = scrollToIndex >= 0 && scrollToIndex < cellCount;
  var sizeHasChanged = size2 !== previousSize || sizeJustIncreasedFromZero || !previousCellSize || typeof cellSize === "number" && cellSize !== previousCellSize;
  if (hasScrollToIndex && (sizeHasChanged || scrollToAlignment !== previousScrollToAlignment || scrollToIndex !== previousScrollToIndex)) {
    updateScrollIndexCallback(scrollToIndex);
  } else if (!hasScrollToIndex && cellCount > 0 && (size2 < previousSize || cellCount < previousCellsCount)) {
    if (scrollOffset > cellSizeAndPositionManager.getTotalSize() - size2) {
      updateScrollIndexCallback(cellCount - 1);
    }
  }
}
function defaultCellRangeRenderer(_ref) {
  var cellCache = _ref.cellCache, cellRenderer = _ref.cellRenderer, columnSizeAndPositionManager = _ref.columnSizeAndPositionManager, columnStartIndex = _ref.columnStartIndex, columnStopIndex = _ref.columnStopIndex, deferredMeasurementCache = _ref.deferredMeasurementCache, horizontalOffsetAdjustment = _ref.horizontalOffsetAdjustment, isScrolling = _ref.isScrolling, isScrollingOptOut = _ref.isScrollingOptOut, parent2 = _ref.parent, rowSizeAndPositionManager = _ref.rowSizeAndPositionManager, rowStartIndex = _ref.rowStartIndex, rowStopIndex = _ref.rowStopIndex, styleCache = _ref.styleCache, verticalOffsetAdjustment = _ref.verticalOffsetAdjustment, visibleColumnIndices = _ref.visibleColumnIndices, visibleRowIndices = _ref.visibleRowIndices;
  var renderedCells = [];
  var areOffsetsAdjusted = columnSizeAndPositionManager.areOffsetsAdjusted() || rowSizeAndPositionManager.areOffsetsAdjusted();
  var canCacheStyle = !isScrolling && !areOffsetsAdjusted;
  for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
    var rowDatum = rowSizeAndPositionManager.getSizeAndPositionOfCell(rowIndex);
    for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
      var columnDatum = columnSizeAndPositionManager.getSizeAndPositionOfCell(columnIndex);
      var isVisible = columnIndex >= visibleColumnIndices.start && columnIndex <= visibleColumnIndices.stop && rowIndex >= visibleRowIndices.start && rowIndex <= visibleRowIndices.stop;
      var key = "".concat(rowIndex, "-").concat(columnIndex);
      var style = void 0;
      if (canCacheStyle && styleCache[key]) {
        style = styleCache[key];
      } else {
        if (deferredMeasurementCache && !deferredMeasurementCache.has(rowIndex, columnIndex)) {
          style = {
            height: "auto",
            left: 0,
            position: "absolute",
            top: 0,
            width: "auto"
          };
        } else {
          style = {
            height: rowDatum.size,
            left: columnDatum.offset + horizontalOffsetAdjustment,
            position: "absolute",
            top: rowDatum.offset + verticalOffsetAdjustment,
            width: columnDatum.size
          };
          styleCache[key] = style;
        }
      }
      var cellRendererParams = {
        columnIndex,
        isScrolling,
        isVisible,
        key,
        parent: parent2,
        rowIndex,
        style
      };
      var renderedCell = void 0;
      if ((isScrollingOptOut || isScrolling) && !horizontalOffsetAdjustment && !verticalOffsetAdjustment) {
        if (!cellCache[key]) {
          cellCache[key] = cellRenderer(cellRendererParams);
        }
        renderedCell = cellCache[key];
      } else {
        renderedCell = cellRenderer(cellRendererParams);
      }
      if (renderedCell == null || renderedCell === false) {
        continue;
      }
      renderedCells.push(renderedCell);
    }
  }
  return renderedCells;
}
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var size;
function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (canUseDOM) {
      var scrollDiv = document.createElement("div");
      scrollDiv.style.position = "absolute";
      scrollDiv.style.top = "-9999px";
      scrollDiv.style.width = "50px";
      scrollDiv.style.height = "50px";
      scrollDiv.style.overflow = "scroll";
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }
  return size;
}
var win;
if (typeof window !== "undefined") {
  win = window;
} else if (typeof self !== "undefined") {
  win = self;
} else {
  win = {};
}
var request = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.oRequestAnimationFrame || win.msRequestAnimationFrame || function(callback) {
  return win.setTimeout(callback, 1e3 / 60);
};
var cancel = win.cancelAnimationFrame || win.webkitCancelAnimationFrame || win.mozCancelAnimationFrame || win.oCancelAnimationFrame || win.msCancelAnimationFrame || function(id2) {
  win.clearTimeout(id2);
};
var raf = request;
var caf = cancel;
var cancelAnimationTimeout = function cancelAnimationTimeout2(frame) {
  return caf(frame.id);
};
var requestAnimationTimeout = function requestAnimationTimeout2(callback, delay) {
  var start;
  Promise.resolve().then(function() {
    start = Date.now();
  });
  var timeout = function timeout2() {
    if (Date.now() - start >= delay) {
      callback.call();
    } else {
      frame.id = raf(timeout2);
    }
  };
  var frame = {
    id: raf(timeout)
  };
  return frame;
};
var _class$6, _temp$6;
function ownKeys$7(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$7(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$7(source, true).forEach(function(key) {
        _defineProperty$h(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$7(source).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var DEFAULT_SCROLLING_RESET_TIME_INTERVAL$1 = 150;
var SCROLL_POSITION_CHANGE_REASONS$1 = {
  OBSERVED: "observed",
  REQUESTED: "requested"
};
var renderNull = function renderNull2() {
  return null;
};
var Grid = (_temp$6 = _class$6 = /* @__PURE__ */ function(_React$PureComponent) {
  _inherits(Grid2, _React$PureComponent);
  function Grid2(props) {
    var _this;
    _classCallCheck(this, Grid2);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Grid2).call(this, props));
    _defineProperty$h(_assertThisInitialized(_this), "_onGridRenderedMemoizer", createCallbackMemoizer());
    _defineProperty$h(_assertThisInitialized(_this), "_onScrollMemoizer", createCallbackMemoizer(false));
    _defineProperty$h(_assertThisInitialized(_this), "_deferredInvalidateColumnIndex", null);
    _defineProperty$h(_assertThisInitialized(_this), "_deferredInvalidateRowIndex", null);
    _defineProperty$h(_assertThisInitialized(_this), "_recomputeScrollLeftFlag", false);
    _defineProperty$h(_assertThisInitialized(_this), "_recomputeScrollTopFlag", false);
    _defineProperty$h(_assertThisInitialized(_this), "_horizontalScrollBarSize", 0);
    _defineProperty$h(_assertThisInitialized(_this), "_verticalScrollBarSize", 0);
    _defineProperty$h(_assertThisInitialized(_this), "_scrollbarPresenceChanged", false);
    _defineProperty$h(_assertThisInitialized(_this), "_scrollingContainer", void 0);
    _defineProperty$h(_assertThisInitialized(_this), "_childrenToDisplay", void 0);
    _defineProperty$h(_assertThisInitialized(_this), "_columnStartIndex", void 0);
    _defineProperty$h(_assertThisInitialized(_this), "_columnStopIndex", void 0);
    _defineProperty$h(_assertThisInitialized(_this), "_rowStartIndex", void 0);
    _defineProperty$h(_assertThisInitialized(_this), "_rowStopIndex", void 0);
    _defineProperty$h(_assertThisInitialized(_this), "_renderedColumnStartIndex", 0);
    _defineProperty$h(_assertThisInitialized(_this), "_renderedColumnStopIndex", 0);
    _defineProperty$h(_assertThisInitialized(_this), "_renderedRowStartIndex", 0);
    _defineProperty$h(_assertThisInitialized(_this), "_renderedRowStopIndex", 0);
    _defineProperty$h(_assertThisInitialized(_this), "_initialScrollTop", void 0);
    _defineProperty$h(_assertThisInitialized(_this), "_initialScrollLeft", void 0);
    _defineProperty$h(_assertThisInitialized(_this), "_disablePointerEventsTimeoutId", void 0);
    _defineProperty$h(_assertThisInitialized(_this), "_styleCache", {});
    _defineProperty$h(_assertThisInitialized(_this), "_cellCache", {});
    _defineProperty$h(_assertThisInitialized(_this), "_debounceScrollEndedCallback", function() {
      _this._disablePointerEventsTimeoutId = null;
      _this.setState({
        isScrolling: false,
        needToResetStyleCache: false
      });
    });
    _defineProperty$h(_assertThisInitialized(_this), "_invokeOnGridRenderedHelper", function() {
      var onSectionRendered3 = _this.props.onSectionRendered;
      _this._onGridRenderedMemoizer({
        callback: onSectionRendered3,
        indices: {
          columnOverscanStartIndex: _this._columnStartIndex,
          columnOverscanStopIndex: _this._columnStopIndex,
          columnStartIndex: _this._renderedColumnStartIndex,
          columnStopIndex: _this._renderedColumnStopIndex,
          rowOverscanStartIndex: _this._rowStartIndex,
          rowOverscanStopIndex: _this._rowStopIndex,
          rowStartIndex: _this._renderedRowStartIndex,
          rowStopIndex: _this._renderedRowStopIndex
        }
      });
    });
    _defineProperty$h(_assertThisInitialized(_this), "_setScrollingContainerRef", function(ref) {
      _this._scrollingContainer = ref;
    });
    _defineProperty$h(_assertThisInitialized(_this), "_onScroll", function(event) {
      if (event.target === _this._scrollingContainer) {
        _this.handleScrollEvent(event.target);
      }
    });
    var columnSizeAndPositionManager = new ScalingCellSizeAndPositionManager({
      cellCount: props.columnCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return Grid2._wrapSizeGetter(props.columnWidth)(params);
      },
      estimatedCellSize: Grid2._getEstimatedColumnSize(props)
    });
    var rowSizeAndPositionManager = new ScalingCellSizeAndPositionManager({
      cellCount: props.rowCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return Grid2._wrapSizeGetter(props.rowHeight)(params);
      },
      estimatedCellSize: Grid2._getEstimatedRowSize(props)
    });
    _this.state = {
      instanceProps: {
        columnSizeAndPositionManager,
        rowSizeAndPositionManager,
        prevColumnWidth: props.columnWidth,
        prevRowHeight: props.rowHeight,
        prevColumnCount: props.columnCount,
        prevRowCount: props.rowCount,
        prevIsScrolling: props.isScrolling === true,
        prevScrollToColumn: props.scrollToColumn,
        prevScrollToRow: props.scrollToRow,
        scrollbarSize: 0,
        scrollbarSizeMeasured: false
      },
      isScrolling: false,
      scrollDirectionHorizontal: SCROLL_DIRECTION_FORWARD$1,
      scrollDirectionVertical: SCROLL_DIRECTION_FORWARD$1,
      scrollLeft: 0,
      scrollTop: 0,
      scrollPositionChangeReason: null,
      needToResetStyleCache: false
    };
    if (props.scrollToRow > 0) {
      _this._initialScrollTop = _this._getCalculatedScrollTop(props, _this.state);
    }
    if (props.scrollToColumn > 0) {
      _this._initialScrollLeft = _this._getCalculatedScrollLeft(props, _this.state);
    }
    return _this;
  }
  _createClass(Grid2, [{
    key: "getOffsetForCell",
    value: function getOffsetForCell() {
      var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$alignment = _ref.alignment, alignment = _ref$alignment === void 0 ? this.props.scrollToAlignment : _ref$alignment, _ref$columnIndex = _ref.columnIndex, columnIndex = _ref$columnIndex === void 0 ? this.props.scrollToColumn : _ref$columnIndex, _ref$rowIndex = _ref.rowIndex, rowIndex = _ref$rowIndex === void 0 ? this.props.scrollToRow : _ref$rowIndex;
      var offsetProps = _objectSpread$7({}, this.props, {
        scrollToAlignment: alignment,
        scrollToColumn: columnIndex,
        scrollToRow: rowIndex
      });
      return {
        scrollLeft: this._getCalculatedScrollLeft(offsetProps),
        scrollTop: this._getCalculatedScrollTop(offsetProps)
      };
    }
  }, {
    key: "getTotalRowsHeight",
    value: function getTotalRowsHeight() {
      return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize();
    }
  }, {
    key: "getTotalColumnsWidth",
    value: function getTotalColumnsWidth() {
      return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize();
    }
  }, {
    key: "handleScrollEvent",
    value: function handleScrollEvent(_ref2) {
      var _ref2$scrollLeft = _ref2.scrollLeft, scrollLeftParam = _ref2$scrollLeft === void 0 ? 0 : _ref2$scrollLeft, _ref2$scrollTop = _ref2.scrollTop, scrollTopParam = _ref2$scrollTop === void 0 ? 0 : _ref2$scrollTop;
      if (scrollTopParam < 0) {
        return;
      }
      this._debounceScrollEnded();
      var _this$props = this.props, autoHeight = _this$props.autoHeight, autoWidth = _this$props.autoWidth, height2 = _this$props.height, width2 = _this$props.width;
      var instanceProps = this.state.instanceProps;
      var scrollbarSize2 = instanceProps.scrollbarSize;
      var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
      var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
      var scrollLeft = Math.min(Math.max(0, totalColumnsWidth - width2 + scrollbarSize2), scrollLeftParam);
      var scrollTop = Math.min(Math.max(0, totalRowsHeight - height2 + scrollbarSize2), scrollTopParam);
      if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
        var scrollDirectionHorizontal = scrollLeft !== this.state.scrollLeft ? scrollLeft > this.state.scrollLeft ? SCROLL_DIRECTION_FORWARD$1 : SCROLL_DIRECTION_BACKWARD : this.state.scrollDirectionHorizontal;
        var scrollDirectionVertical = scrollTop !== this.state.scrollTop ? scrollTop > this.state.scrollTop ? SCROLL_DIRECTION_FORWARD$1 : SCROLL_DIRECTION_BACKWARD : this.state.scrollDirectionVertical;
        var newState = {
          isScrolling: true,
          scrollDirectionHorizontal,
          scrollDirectionVertical,
          scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS$1.OBSERVED
        };
        if (!autoHeight) {
          newState.scrollTop = scrollTop;
        }
        if (!autoWidth) {
          newState.scrollLeft = scrollLeft;
        }
        newState.needToResetStyleCache = false;
        this.setState(newState);
      }
      this._invokeOnScrollMemoizer({
        scrollLeft,
        scrollTop,
        totalColumnsWidth,
        totalRowsHeight
      });
    }
  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender(_ref3) {
      var columnIndex = _ref3.columnIndex, rowIndex = _ref3.rowIndex;
      this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === "number" ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
      this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === "number" ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
    }
  }, {
    key: "measureAllCells",
    value: function measureAllCells() {
      var _this$props2 = this.props, columnCount = _this$props2.columnCount, rowCount = _this$props2.rowCount;
      var instanceProps = this.state.instanceProps;
      instanceProps.columnSizeAndPositionManager.getSizeAndPositionOfCell(columnCount - 1);
      instanceProps.rowSizeAndPositionManager.getSizeAndPositionOfCell(rowCount - 1);
    }
  }, {
    key: "recomputeGridSize",
    value: function recomputeGridSize() {
      var _ref4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref4$columnIndex = _ref4.columnIndex, columnIndex = _ref4$columnIndex === void 0 ? 0 : _ref4$columnIndex, _ref4$rowIndex = _ref4.rowIndex, rowIndex = _ref4$rowIndex === void 0 ? 0 : _ref4$rowIndex;
      var _this$props3 = this.props, scrollToColumn = _this$props3.scrollToColumn, scrollToRow = _this$props3.scrollToRow;
      var instanceProps = this.state.instanceProps;
      instanceProps.columnSizeAndPositionManager.resetCell(columnIndex);
      instanceProps.rowSizeAndPositionManager.resetCell(rowIndex);
      this._recomputeScrollLeftFlag = scrollToColumn >= 0 && (this.state.scrollDirectionHorizontal === SCROLL_DIRECTION_FORWARD$1 ? columnIndex <= scrollToColumn : columnIndex >= scrollToColumn);
      this._recomputeScrollTopFlag = scrollToRow >= 0 && (this.state.scrollDirectionVertical === SCROLL_DIRECTION_FORWARD$1 ? rowIndex <= scrollToRow : rowIndex >= scrollToRow);
      this._styleCache = {};
      this._cellCache = {};
      this.forceUpdate();
    }
  }, {
    key: "scrollToCell",
    value: function scrollToCell(_ref5) {
      var columnIndex = _ref5.columnIndex, rowIndex = _ref5.rowIndex;
      var columnCount = this.props.columnCount;
      var props = this.props;
      if (columnCount > 1 && columnIndex !== void 0) {
        this._updateScrollLeftForScrollToColumn(_objectSpread$7({}, props, {
          scrollToColumn: columnIndex
        }));
      }
      if (rowIndex !== void 0) {
        this._updateScrollTopForScrollToRow(_objectSpread$7({}, props, {
          scrollToRow: rowIndex
        }));
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props4 = this.props, getScrollbarSize = _this$props4.getScrollbarSize, height2 = _this$props4.height, scrollLeft = _this$props4.scrollLeft, scrollToColumn = _this$props4.scrollToColumn, scrollTop = _this$props4.scrollTop, scrollToRow = _this$props4.scrollToRow, width2 = _this$props4.width;
      var instanceProps = this.state.instanceProps;
      this._initialScrollTop = 0;
      this._initialScrollLeft = 0;
      this._handleInvalidatedGridSize();
      if (!instanceProps.scrollbarSizeMeasured) {
        this.setState(function(prevState) {
          var stateUpdate2 = _objectSpread$7({}, prevState, {
            needToResetStyleCache: false
          });
          stateUpdate2.instanceProps.scrollbarSize = getScrollbarSize();
          stateUpdate2.instanceProps.scrollbarSizeMeasured = true;
          return stateUpdate2;
        });
      }
      if (typeof scrollLeft === "number" && scrollLeft >= 0 || typeof scrollTop === "number" && scrollTop >= 0) {
        var stateUpdate = Grid2._getScrollToPositionStateUpdate({
          prevState: this.state,
          scrollLeft,
          scrollTop
        });
        if (stateUpdate) {
          stateUpdate.needToResetStyleCache = false;
          this.setState(stateUpdate);
        }
      }
      if (this._scrollingContainer) {
        if (this._scrollingContainer.scrollLeft !== this.state.scrollLeft) {
          this._scrollingContainer.scrollLeft = this.state.scrollLeft;
        }
        if (this._scrollingContainer.scrollTop !== this.state.scrollTop) {
          this._scrollingContainer.scrollTop = this.state.scrollTop;
        }
      }
      var sizeIsBiggerThanZero = height2 > 0 && width2 > 0;
      if (scrollToColumn >= 0 && sizeIsBiggerThanZero) {
        this._updateScrollLeftForScrollToColumn();
      }
      if (scrollToRow >= 0 && sizeIsBiggerThanZero) {
        this._updateScrollTopForScrollToRow();
      }
      this._invokeOnGridRenderedHelper();
      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft || 0,
        scrollTop: scrollTop || 0,
        totalColumnsWidth: instanceProps.columnSizeAndPositionManager.getTotalSize(),
        totalRowsHeight: instanceProps.rowSizeAndPositionManager.getTotalSize()
      });
      this._maybeCallOnScrollbarPresenceChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;
      var _this$props5 = this.props, autoHeight = _this$props5.autoHeight, autoWidth = _this$props5.autoWidth, columnCount = _this$props5.columnCount, height2 = _this$props5.height, rowCount = _this$props5.rowCount, scrollToAlignment = _this$props5.scrollToAlignment, scrollToColumn = _this$props5.scrollToColumn, scrollToRow = _this$props5.scrollToRow, width2 = _this$props5.width;
      var _this$state = this.state, scrollLeft = _this$state.scrollLeft, scrollPositionChangeReason = _this$state.scrollPositionChangeReason, scrollTop = _this$state.scrollTop, instanceProps = _this$state.instanceProps;
      this._handleInvalidatedGridSize();
      var columnOrRowCountJustIncreasedFromZero = columnCount > 0 && prevProps.columnCount === 0 || rowCount > 0 && prevProps.rowCount === 0;
      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS$1.REQUESTED) {
        if (!autoWidth && scrollLeft >= 0 && (scrollLeft !== this._scrollingContainer.scrollLeft || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollLeft = scrollLeft;
        }
        if (!autoHeight && scrollTop >= 0 && (scrollTop !== this._scrollingContainer.scrollTop || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollTop = scrollTop;
        }
      }
      var sizeJustIncreasedFromZero = (prevProps.width === 0 || prevProps.height === 0) && height2 > 0 && width2 > 0;
      if (this._recomputeScrollLeftFlag) {
        this._recomputeScrollLeftFlag = false;
        this._updateScrollLeftForScrollToColumn(this.props);
      } else {
        updateScrollIndexHelper({
          cellSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
          previousCellsCount: prevProps.columnCount,
          previousCellSize: prevProps.columnWidth,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToColumn,
          previousSize: prevProps.width,
          scrollOffset: scrollLeft,
          scrollToAlignment,
          scrollToIndex: scrollToColumn,
          size: width2,
          sizeJustIncreasedFromZero,
          updateScrollIndexCallback: function updateScrollIndexCallback() {
            return _this2._updateScrollLeftForScrollToColumn(_this2.props);
          }
        });
      }
      if (this._recomputeScrollTopFlag) {
        this._recomputeScrollTopFlag = false;
        this._updateScrollTopForScrollToRow(this.props);
      } else {
        updateScrollIndexHelper({
          cellSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
          previousCellsCount: prevProps.rowCount,
          previousCellSize: prevProps.rowHeight,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToRow,
          previousSize: prevProps.height,
          scrollOffset: scrollTop,
          scrollToAlignment,
          scrollToIndex: scrollToRow,
          size: height2,
          sizeJustIncreasedFromZero,
          updateScrollIndexCallback: function updateScrollIndexCallback() {
            return _this2._updateScrollTopForScrollToRow(_this2.props);
          }
        });
      }
      this._invokeOnGridRenderedHelper();
      if (scrollLeft !== prevState.scrollLeft || scrollTop !== prevState.scrollTop) {
        var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
        var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
        this._invokeOnScrollMemoizer({
          scrollLeft,
          scrollTop,
          totalColumnsWidth,
          totalRowsHeight
        });
      }
      this._maybeCallOnScrollbarPresenceChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._disablePointerEventsTimeoutId) {
        cancelAnimationTimeout(this._disablePointerEventsTimeoutId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props, autoContainerWidth = _this$props6.autoContainerWidth, autoHeight = _this$props6.autoHeight, autoWidth = _this$props6.autoWidth, className = _this$props6.className, containerProps = _this$props6.containerProps, containerRole = _this$props6.containerRole, containerStyle = _this$props6.containerStyle, height2 = _this$props6.height, id2 = _this$props6.id, noContentRenderer2 = _this$props6.noContentRenderer, role = _this$props6.role, style = _this$props6.style, tabIndex = _this$props6.tabIndex, width2 = _this$props6.width;
      var _this$state2 = this.state, instanceProps = _this$state2.instanceProps, needToResetStyleCache = _this$state2.needToResetStyleCache;
      var isScrolling = this._isScrolling();
      var gridStyle = {
        boxSizing: "border-box",
        direction: "ltr",
        height: autoHeight ? "auto" : height2,
        position: "relative",
        width: autoWidth ? "auto" : width2,
        WebkitOverflowScrolling: "touch",
        willChange: "transform"
      };
      if (needToResetStyleCache) {
        this._styleCache = {};
      }
      if (!this.state.isScrolling) {
        this._resetStyleCache();
      }
      this._calculateChildrenToRender(this.props, this.state);
      var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
      var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
      var verticalScrollBarSize = totalRowsHeight > height2 ? instanceProps.scrollbarSize : 0;
      var horizontalScrollBarSize = totalColumnsWidth > width2 ? instanceProps.scrollbarSize : 0;
      if (horizontalScrollBarSize !== this._horizontalScrollBarSize || verticalScrollBarSize !== this._verticalScrollBarSize) {
        this._horizontalScrollBarSize = horizontalScrollBarSize;
        this._verticalScrollBarSize = verticalScrollBarSize;
        this._scrollbarPresenceChanged = true;
      }
      gridStyle.overflowX = totalColumnsWidth + verticalScrollBarSize <= width2 ? "hidden" : "auto";
      gridStyle.overflowY = totalRowsHeight + horizontalScrollBarSize <= height2 ? "hidden" : "auto";
      var childrenToDisplay = this._childrenToDisplay;
      var showNoContentRenderer = childrenToDisplay.length === 0 && height2 > 0 && width2 > 0;
      return React.createElement("div", _extends({
        ref: this._setScrollingContainerRef
      }, containerProps, {
        "aria-label": this.props["aria-label"],
        "aria-readonly": this.props["aria-readonly"],
        className: clsx("ReactVirtualized__Grid", className),
        id: id2,
        onScroll: this._onScroll,
        role,
        style: _objectSpread$7({}, gridStyle, {}, style),
        tabIndex
      }), childrenToDisplay.length > 0 && React.createElement("div", {
        className: "ReactVirtualized__Grid__innerScrollContainer",
        role: containerRole,
        style: _objectSpread$7({
          width: autoContainerWidth ? "auto" : totalColumnsWidth,
          height: totalRowsHeight,
          maxWidth: totalColumnsWidth,
          maxHeight: totalRowsHeight,
          overflow: "hidden",
          pointerEvents: isScrolling ? "none" : "",
          position: "relative"
        }, containerStyle)
      }, childrenToDisplay), showNoContentRenderer && noContentRenderer2());
    }
  }, {
    key: "_calculateChildrenToRender",
    value: function _calculateChildrenToRender() {
      var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.state;
      var cellRenderer = props.cellRenderer, cellRangeRenderer = props.cellRangeRenderer, columnCount = props.columnCount, deferredMeasurementCache = props.deferredMeasurementCache, height2 = props.height, overscanColumnCount = props.overscanColumnCount, overscanIndicesGetter = props.overscanIndicesGetter, overscanRowCount = props.overscanRowCount, rowCount = props.rowCount, width2 = props.width, isScrollingOptOut = props.isScrollingOptOut;
      var scrollDirectionHorizontal = state.scrollDirectionHorizontal, scrollDirectionVertical = state.scrollDirectionVertical, instanceProps = state.instanceProps;
      var scrollTop = this._initialScrollTop > 0 ? this._initialScrollTop : state.scrollTop;
      var scrollLeft = this._initialScrollLeft > 0 ? this._initialScrollLeft : state.scrollLeft;
      var isScrolling = this._isScrolling(props, state);
      this._childrenToDisplay = [];
      if (height2 > 0 && width2 > 0) {
        var visibleColumnIndices = instanceProps.columnSizeAndPositionManager.getVisibleCellRange({
          containerSize: width2,
          offset: scrollLeft
        });
        var visibleRowIndices = instanceProps.rowSizeAndPositionManager.getVisibleCellRange({
          containerSize: height2,
          offset: scrollTop
        });
        var horizontalOffsetAdjustment = instanceProps.columnSizeAndPositionManager.getOffsetAdjustment({
          containerSize: width2,
          offset: scrollLeft
        });
        var verticalOffsetAdjustment = instanceProps.rowSizeAndPositionManager.getOffsetAdjustment({
          containerSize: height2,
          offset: scrollTop
        });
        this._renderedColumnStartIndex = visibleColumnIndices.start;
        this._renderedColumnStopIndex = visibleColumnIndices.stop;
        this._renderedRowStartIndex = visibleRowIndices.start;
        this._renderedRowStopIndex = visibleRowIndices.stop;
        var overscanColumnIndices = overscanIndicesGetter({
          direction: "horizontal",
          cellCount: columnCount,
          overscanCellsCount: overscanColumnCount,
          scrollDirection: scrollDirectionHorizontal,
          startIndex: typeof visibleColumnIndices.start === "number" ? visibleColumnIndices.start : 0,
          stopIndex: typeof visibleColumnIndices.stop === "number" ? visibleColumnIndices.stop : -1
        });
        var overscanRowIndices = overscanIndicesGetter({
          direction: "vertical",
          cellCount: rowCount,
          overscanCellsCount: overscanRowCount,
          scrollDirection: scrollDirectionVertical,
          startIndex: typeof visibleRowIndices.start === "number" ? visibleRowIndices.start : 0,
          stopIndex: typeof visibleRowIndices.stop === "number" ? visibleRowIndices.stop : -1
        });
        var columnStartIndex = overscanColumnIndices.overscanStartIndex;
        var columnStopIndex = overscanColumnIndices.overscanStopIndex;
        var rowStartIndex = overscanRowIndices.overscanStartIndex;
        var rowStopIndex = overscanRowIndices.overscanStopIndex;
        if (deferredMeasurementCache) {
          if (!deferredMeasurementCache.hasFixedHeight()) {
            for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
              if (!deferredMeasurementCache.has(rowIndex, 0)) {
                columnStartIndex = 0;
                columnStopIndex = columnCount - 1;
                break;
              }
            }
          }
          if (!deferredMeasurementCache.hasFixedWidth()) {
            for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
              if (!deferredMeasurementCache.has(0, columnIndex)) {
                rowStartIndex = 0;
                rowStopIndex = rowCount - 1;
                break;
              }
            }
          }
        }
        this._childrenToDisplay = cellRangeRenderer({
          cellCache: this._cellCache,
          cellRenderer,
          columnSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
          columnStartIndex,
          columnStopIndex,
          deferredMeasurementCache,
          horizontalOffsetAdjustment,
          isScrolling,
          isScrollingOptOut,
          parent: this,
          rowSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
          rowStartIndex,
          rowStopIndex,
          scrollLeft,
          scrollTop,
          styleCache: this._styleCache,
          verticalOffsetAdjustment,
          visibleColumnIndices,
          visibleRowIndices
        });
        this._columnStartIndex = columnStartIndex;
        this._columnStopIndex = columnStopIndex;
        this._rowStartIndex = rowStartIndex;
        this._rowStopIndex = rowStopIndex;
      }
    }
  }, {
    key: "_debounceScrollEnded",
    value: function _debounceScrollEnded() {
      var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;
      if (this._disablePointerEventsTimeoutId) {
        cancelAnimationTimeout(this._disablePointerEventsTimeoutId);
      }
      this._disablePointerEventsTimeoutId = requestAnimationTimeout(this._debounceScrollEndedCallback, scrollingResetTimeInterval);
    }
  }, {
    key: "_handleInvalidatedGridSize",
    value: function _handleInvalidatedGridSize() {
      if (typeof this._deferredInvalidateColumnIndex === "number" && typeof this._deferredInvalidateRowIndex === "number") {
        var columnIndex = this._deferredInvalidateColumnIndex;
        var rowIndex = this._deferredInvalidateRowIndex;
        this._deferredInvalidateColumnIndex = null;
        this._deferredInvalidateRowIndex = null;
        this.recomputeGridSize({
          columnIndex,
          rowIndex
        });
      }
    }
  }, {
    key: "_invokeOnScrollMemoizer",
    value: function _invokeOnScrollMemoizer(_ref6) {
      var _this3 = this;
      var scrollLeft = _ref6.scrollLeft, scrollTop = _ref6.scrollTop, totalColumnsWidth = _ref6.totalColumnsWidth, totalRowsHeight = _ref6.totalRowsHeight;
      this._onScrollMemoizer({
        callback: function callback(_ref7) {
          var scrollLeft2 = _ref7.scrollLeft, scrollTop2 = _ref7.scrollTop;
          var _this3$props = _this3.props, height2 = _this3$props.height, onScroll6 = _this3$props.onScroll, width2 = _this3$props.width;
          onScroll6({
            clientHeight: height2,
            clientWidth: width2,
            scrollHeight: totalRowsHeight,
            scrollLeft: scrollLeft2,
            scrollTop: scrollTop2,
            scrollWidth: totalColumnsWidth
          });
        },
        indices: {
          scrollLeft,
          scrollTop
        }
      });
    }
  }, {
    key: "_isScrolling",
    value: function _isScrolling() {
      var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.state;
      return Object.hasOwnProperty.call(props, "isScrolling") ? Boolean(props.isScrolling) : Boolean(state.isScrolling);
    }
  }, {
    key: "_maybeCallOnScrollbarPresenceChange",
    value: function _maybeCallOnScrollbarPresenceChange() {
      if (this._scrollbarPresenceChanged) {
        var onScrollbarPresenceChange2 = this.props.onScrollbarPresenceChange;
        this._scrollbarPresenceChanged = false;
        onScrollbarPresenceChange2({
          horizontal: this._horizontalScrollBarSize > 0,
          size: this.state.instanceProps.scrollbarSize,
          vertical: this._verticalScrollBarSize > 0
        });
      }
    }
  }, {
    key: "scrollToPosition",
    value: function scrollToPosition(_ref8) {
      var scrollLeft = _ref8.scrollLeft, scrollTop = _ref8.scrollTop;
      var stateUpdate = Grid2._getScrollToPositionStateUpdate({
        prevState: this.state,
        scrollLeft,
        scrollTop
      });
      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }
  }, {
    key: "_getCalculatedScrollLeft",
    value: function _getCalculatedScrollLeft() {
      var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.state;
      return Grid2._getCalculatedScrollLeft(props, state);
    }
  }, {
    key: "_updateScrollLeftForScrollToColumn",
    value: function _updateScrollLeftForScrollToColumn() {
      var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.state;
      var stateUpdate = Grid2._getScrollLeftForScrollToColumnStateUpdate(props, state);
      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }
  }, {
    key: "_getCalculatedScrollTop",
    value: function _getCalculatedScrollTop() {
      var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.state;
      return Grid2._getCalculatedScrollTop(props, state);
    }
  }, {
    key: "_resetStyleCache",
    value: function _resetStyleCache() {
      var styleCache = this._styleCache;
      var cellCache = this._cellCache;
      var isScrollingOptOut = this.props.isScrollingOptOut;
      this._cellCache = {};
      this._styleCache = {};
      for (var rowIndex = this._rowStartIndex; rowIndex <= this._rowStopIndex; rowIndex++) {
        for (var columnIndex = this._columnStartIndex; columnIndex <= this._columnStopIndex; columnIndex++) {
          var key = "".concat(rowIndex, "-").concat(columnIndex);
          this._styleCache[key] = styleCache[key];
          if (isScrollingOptOut) {
            this._cellCache[key] = cellCache[key];
          }
        }
      }
    }
  }, {
    key: "_updateScrollTopForScrollToRow",
    value: function _updateScrollTopForScrollToRow() {
      var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.state;
      var stateUpdate = Grid2._getScrollTopForScrollToRowStateUpdate(props, state);
      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var newState = {};
      if (nextProps.columnCount === 0 && prevState.scrollLeft !== 0 || nextProps.rowCount === 0 && prevState.scrollTop !== 0) {
        newState.scrollLeft = 0;
        newState.scrollTop = 0;
      } else if (nextProps.scrollLeft !== prevState.scrollLeft && nextProps.scrollToColumn < 0 || nextProps.scrollTop !== prevState.scrollTop && nextProps.scrollToRow < 0) {
        Object.assign(newState, Grid2._getScrollToPositionStateUpdate({
          prevState,
          scrollLeft: nextProps.scrollLeft,
          scrollTop: nextProps.scrollTop
        }));
      }
      var instanceProps = prevState.instanceProps;
      newState.needToResetStyleCache = false;
      if (nextProps.columnWidth !== instanceProps.prevColumnWidth || nextProps.rowHeight !== instanceProps.prevRowHeight) {
        newState.needToResetStyleCache = true;
      }
      instanceProps.columnSizeAndPositionManager.configure({
        cellCount: nextProps.columnCount,
        estimatedCellSize: Grid2._getEstimatedColumnSize(nextProps),
        cellSizeGetter: Grid2._wrapSizeGetter(nextProps.columnWidth)
      });
      instanceProps.rowSizeAndPositionManager.configure({
        cellCount: nextProps.rowCount,
        estimatedCellSize: Grid2._getEstimatedRowSize(nextProps),
        cellSizeGetter: Grid2._wrapSizeGetter(nextProps.rowHeight)
      });
      if (instanceProps.prevColumnCount === 0 || instanceProps.prevRowCount === 0) {
        instanceProps.prevColumnCount = 0;
        instanceProps.prevRowCount = 0;
      }
      if (nextProps.autoHeight && nextProps.isScrolling === false && instanceProps.prevIsScrolling === true) {
        Object.assign(newState, {
          isScrolling: false
        });
      }
      var maybeStateA;
      var maybeStateB;
      calculateSizeAndPositionDataAndUpdateScrollOffset({
        cellCount: instanceProps.prevColumnCount,
        cellSize: typeof instanceProps.prevColumnWidth === "number" ? instanceProps.prevColumnWidth : null,
        computeMetadataCallback: function computeMetadataCallback() {
          return instanceProps.columnSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.columnCount,
        nextCellSize: typeof nextProps.columnWidth === "number" ? nextProps.columnWidth : null,
        nextScrollToIndex: nextProps.scrollToColumn,
        scrollToIndex: instanceProps.prevScrollToColumn,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          maybeStateA = Grid2._getScrollLeftForScrollToColumnStateUpdate(nextProps, prevState);
        }
      });
      calculateSizeAndPositionDataAndUpdateScrollOffset({
        cellCount: instanceProps.prevRowCount,
        cellSize: typeof instanceProps.prevRowHeight === "number" ? instanceProps.prevRowHeight : null,
        computeMetadataCallback: function computeMetadataCallback() {
          return instanceProps.rowSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.rowCount,
        nextCellSize: typeof nextProps.rowHeight === "number" ? nextProps.rowHeight : null,
        nextScrollToIndex: nextProps.scrollToRow,
        scrollToIndex: instanceProps.prevScrollToRow,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          maybeStateB = Grid2._getScrollTopForScrollToRowStateUpdate(nextProps, prevState);
        }
      });
      instanceProps.prevColumnCount = nextProps.columnCount;
      instanceProps.prevColumnWidth = nextProps.columnWidth;
      instanceProps.prevIsScrolling = nextProps.isScrolling === true;
      instanceProps.prevRowCount = nextProps.rowCount;
      instanceProps.prevRowHeight = nextProps.rowHeight;
      instanceProps.prevScrollToColumn = nextProps.scrollToColumn;
      instanceProps.prevScrollToRow = nextProps.scrollToRow;
      instanceProps.scrollbarSize = nextProps.getScrollbarSize();
      if (instanceProps.scrollbarSize === void 0) {
        instanceProps.scrollbarSizeMeasured = false;
        instanceProps.scrollbarSize = 0;
      } else {
        instanceProps.scrollbarSizeMeasured = true;
      }
      newState.instanceProps = instanceProps;
      return _objectSpread$7({}, newState, {}, maybeStateA, {}, maybeStateB);
    }
  }, {
    key: "_getEstimatedColumnSize",
    value: function _getEstimatedColumnSize(props) {
      return typeof props.columnWidth === "number" ? props.columnWidth : props.estimatedColumnSize;
    }
  }, {
    key: "_getEstimatedRowSize",
    value: function _getEstimatedRowSize(props) {
      return typeof props.rowHeight === "number" ? props.rowHeight : props.estimatedRowSize;
    }
  }, {
    key: "_getScrollToPositionStateUpdate",
    value: function _getScrollToPositionStateUpdate(_ref9) {
      var prevState = _ref9.prevState, scrollLeft = _ref9.scrollLeft, scrollTop = _ref9.scrollTop;
      var newState = {
        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS$1.REQUESTED
      };
      if (typeof scrollLeft === "number" && scrollLeft >= 0) {
        newState.scrollDirectionHorizontal = scrollLeft > prevState.scrollLeft ? SCROLL_DIRECTION_FORWARD$1 : SCROLL_DIRECTION_BACKWARD;
        newState.scrollLeft = scrollLeft;
      }
      if (typeof scrollTop === "number" && scrollTop >= 0) {
        newState.scrollDirectionVertical = scrollTop > prevState.scrollTop ? SCROLL_DIRECTION_FORWARD$1 : SCROLL_DIRECTION_BACKWARD;
        newState.scrollTop = scrollTop;
      }
      if (typeof scrollLeft === "number" && scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft || typeof scrollTop === "number" && scrollTop >= 0 && scrollTop !== prevState.scrollTop) {
        return newState;
      }
      return {};
    }
  }, {
    key: "_wrapSizeGetter",
    value: function _wrapSizeGetter(value) {
      return typeof value === "function" ? value : function() {
        return value;
      };
    }
  }, {
    key: "_getCalculatedScrollLeft",
    value: function _getCalculatedScrollLeft(nextProps, prevState) {
      var columnCount = nextProps.columnCount, height2 = nextProps.height, scrollToAlignment = nextProps.scrollToAlignment, scrollToColumn = nextProps.scrollToColumn, width2 = nextProps.width;
      var scrollLeft = prevState.scrollLeft, instanceProps = prevState.instanceProps;
      if (columnCount > 0) {
        var finalColumn = columnCount - 1;
        var targetIndex = scrollToColumn < 0 ? finalColumn : Math.min(finalColumn, scrollToColumn);
        var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
        var scrollBarSize = instanceProps.scrollbarSizeMeasured && totalRowsHeight > height2 ? instanceProps.scrollbarSize : 0;
        return instanceProps.columnSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: width2 - scrollBarSize,
          currentOffset: scrollLeft,
          targetIndex
        });
      }
      return 0;
    }
  }, {
    key: "_getScrollLeftForScrollToColumnStateUpdate",
    value: function _getScrollLeftForScrollToColumnStateUpdate(nextProps, prevState) {
      var scrollLeft = prevState.scrollLeft;
      var calculatedScrollLeft = Grid2._getCalculatedScrollLeft(nextProps, prevState);
      if (typeof calculatedScrollLeft === "number" && calculatedScrollLeft >= 0 && scrollLeft !== calculatedScrollLeft) {
        return Grid2._getScrollToPositionStateUpdate({
          prevState,
          scrollLeft: calculatedScrollLeft,
          scrollTop: -1
        });
      }
      return {};
    }
  }, {
    key: "_getCalculatedScrollTop",
    value: function _getCalculatedScrollTop(nextProps, prevState) {
      var height2 = nextProps.height, rowCount = nextProps.rowCount, scrollToAlignment = nextProps.scrollToAlignment, scrollToRow = nextProps.scrollToRow, width2 = nextProps.width;
      var scrollTop = prevState.scrollTop, instanceProps = prevState.instanceProps;
      if (rowCount > 0) {
        var finalRow = rowCount - 1;
        var targetIndex = scrollToRow < 0 ? finalRow : Math.min(finalRow, scrollToRow);
        var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
        var scrollBarSize = instanceProps.scrollbarSizeMeasured && totalColumnsWidth > width2 ? instanceProps.scrollbarSize : 0;
        return instanceProps.rowSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: height2 - scrollBarSize,
          currentOffset: scrollTop,
          targetIndex
        });
      }
      return 0;
    }
  }, {
    key: "_getScrollTopForScrollToRowStateUpdate",
    value: function _getScrollTopForScrollToRowStateUpdate(nextProps, prevState) {
      var scrollTop = prevState.scrollTop;
      var calculatedScrollTop = Grid2._getCalculatedScrollTop(nextProps, prevState);
      if (typeof calculatedScrollTop === "number" && calculatedScrollTop >= 0 && scrollTop !== calculatedScrollTop) {
        return Grid2._getScrollToPositionStateUpdate({
          prevState,
          scrollLeft: -1,
          scrollTop: calculatedScrollTop
        });
      }
      return {};
    }
  }]);
  return Grid2;
}(React.PureComponent), _defineProperty$h(_class$6, "propTypes", null), _temp$6);
_defineProperty$h(Grid, "defaultProps", {
  "aria-label": "grid",
  "aria-readonly": true,
  autoContainerWidth: false,
  autoHeight: false,
  autoWidth: false,
  cellRangeRenderer: defaultCellRangeRenderer,
  containerRole: "rowgroup",
  containerStyle: {},
  estimatedColumnSize: 100,
  estimatedRowSize: 30,
  getScrollbarSize: scrollbarSize,
  noContentRenderer: renderNull,
  onScroll: function onScroll() {
  },
  onScrollbarPresenceChange: function onScrollbarPresenceChange() {
  },
  onSectionRendered: function onSectionRendered() {
  },
  overscanColumnCount: 0,
  overscanIndicesGetter: defaultOverscanIndicesGetter$1,
  overscanRowCount: 10,
  role: "grid",
  scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL$1,
  scrollToAlignment: "auto",
  scrollToColumn: -1,
  scrollToRow: -1,
  style: {},
  tabIndex: 0,
  isScrollingOptOut: false
});
polyfill(Grid);
var SCROLL_DIRECTION_FORWARD = 1;
function defaultOverscanIndicesGetter(_ref) {
  var cellCount = _ref.cellCount, overscanCellsCount = _ref.overscanCellsCount, scrollDirection = _ref.scrollDirection, startIndex = _ref.startIndex, stopIndex = _ref.stopIndex;
  overscanCellsCount = Math.max(1, overscanCellsCount);
  if (scrollDirection === SCROLL_DIRECTION_FORWARD) {
    return {
      overscanStartIndex: Math.max(0, startIndex - 1),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
    };
  } else {
    return {
      overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + 1)
    };
  }
}
var _class$5, _temp$5;
function ownKeys$6(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$6(source, true).forEach(function(key) {
        _defineProperty$h(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$6(source).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var ArrowKeyStepper = (_temp$5 = _class$5 = /* @__PURE__ */ function(_React$PureComponent) {
  _inherits(ArrowKeyStepper2, _React$PureComponent);
  function ArrowKeyStepper2() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck(this, ArrowKeyStepper2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ArrowKeyStepper2)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _defineProperty$h(_assertThisInitialized(_this), "state", {
      scrollToColumn: 0,
      scrollToRow: 0,
      instanceProps: {
        prevScrollToColumn: 0,
        prevScrollToRow: 0
      }
    });
    _defineProperty$h(_assertThisInitialized(_this), "_columnStartIndex", 0);
    _defineProperty$h(_assertThisInitialized(_this), "_columnStopIndex", 0);
    _defineProperty$h(_assertThisInitialized(_this), "_rowStartIndex", 0);
    _defineProperty$h(_assertThisInitialized(_this), "_rowStopIndex", 0);
    _defineProperty$h(_assertThisInitialized(_this), "_onKeyDown", function(event) {
      var _this$props = _this.props, columnCount = _this$props.columnCount, disabled = _this$props.disabled, mode = _this$props.mode, rowCount = _this$props.rowCount;
      if (disabled) {
        return;
      }
      var _this$_getScrollState = _this._getScrollState(), scrollToColumnPrevious = _this$_getScrollState.scrollToColumn, scrollToRowPrevious = _this$_getScrollState.scrollToRow;
      var _this$_getScrollState2 = _this._getScrollState(), scrollToColumn = _this$_getScrollState2.scrollToColumn, scrollToRow = _this$_getScrollState2.scrollToRow;
      switch (event.key) {
        case "ArrowDown":
          scrollToRow = mode === "cells" ? Math.min(scrollToRow + 1, rowCount - 1) : Math.min(_this._rowStopIndex + 1, rowCount - 1);
          break;
        case "ArrowLeft":
          scrollToColumn = mode === "cells" ? Math.max(scrollToColumn - 1, 0) : Math.max(_this._columnStartIndex - 1, 0);
          break;
        case "ArrowRight":
          scrollToColumn = mode === "cells" ? Math.min(scrollToColumn + 1, columnCount - 1) : Math.min(_this._columnStopIndex + 1, columnCount - 1);
          break;
        case "ArrowUp":
          scrollToRow = mode === "cells" ? Math.max(scrollToRow - 1, 0) : Math.max(_this._rowStartIndex - 1, 0);
          break;
      }
      if (scrollToColumn !== scrollToColumnPrevious || scrollToRow !== scrollToRowPrevious) {
        event.preventDefault();
        _this._updateScrollState({
          scrollToColumn,
          scrollToRow
        });
      }
    });
    _defineProperty$h(_assertThisInitialized(_this), "_onSectionRendered", function(_ref) {
      var columnStartIndex = _ref.columnStartIndex, columnStopIndex = _ref.columnStopIndex, rowStartIndex = _ref.rowStartIndex, rowStopIndex = _ref.rowStopIndex;
      _this._columnStartIndex = columnStartIndex;
      _this._columnStopIndex = columnStopIndex;
      _this._rowStartIndex = rowStartIndex;
      _this._rowStopIndex = rowStopIndex;
    });
    return _this;
  }
  _createClass(ArrowKeyStepper2, [{
    key: "setScrollIndexes",
    value: function setScrollIndexes(_ref2) {
      var scrollToColumn = _ref2.scrollToColumn, scrollToRow = _ref2.scrollToRow;
      this.setState({
        scrollToRow,
        scrollToColumn
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props, className = _this$props2.className, children = _this$props2.children;
      var _this$_getScrollState3 = this._getScrollState(), scrollToColumn = _this$_getScrollState3.scrollToColumn, scrollToRow = _this$_getScrollState3.scrollToRow;
      return React.createElement("div", {
        className,
        onKeyDown: this._onKeyDown
      }, children({
        onSectionRendered: this._onSectionRendered,
        scrollToColumn,
        scrollToRow
      }));
    }
  }, {
    key: "_getScrollState",
    value: function _getScrollState() {
      return this.props.isControlled ? this.props : this.state;
    }
  }, {
    key: "_updateScrollState",
    value: function _updateScrollState(_ref3) {
      var scrollToColumn = _ref3.scrollToColumn, scrollToRow = _ref3.scrollToRow;
      var _this$props3 = this.props, isControlled = _this$props3.isControlled, onScrollToChange = _this$props3.onScrollToChange;
      if (typeof onScrollToChange === "function") {
        onScrollToChange({
          scrollToColumn,
          scrollToRow
        });
      }
      if (!isControlled) {
        this.setState({
          scrollToColumn,
          scrollToRow
        });
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.isControlled) {
        return {};
      }
      if (nextProps.scrollToColumn !== prevState.instanceProps.prevScrollToColumn || nextProps.scrollToRow !== prevState.instanceProps.prevScrollToRow) {
        return _objectSpread$6({}, prevState, {
          scrollToColumn: nextProps.scrollToColumn,
          scrollToRow: nextProps.scrollToRow,
          instanceProps: {
            prevScrollToColumn: nextProps.scrollToColumn,
            prevScrollToRow: nextProps.scrollToRow
          }
        });
      }
      return {};
    }
  }]);
  return ArrowKeyStepper2;
}(React.PureComponent), _defineProperty$h(_class$5, "propTypes", null), _temp$5);
_defineProperty$h(ArrowKeyStepper, "defaultProps", {
  disabled: false,
  isControlled: false,
  mode: "edges",
  scrollToColumn: 0,
  scrollToRow: 0
});
polyfill(ArrowKeyStepper);
function createDetectElementResize(nonce, hostWindow) {
  var _window;
  if (typeof hostWindow !== "undefined") {
    _window = hostWindow;
  } else if (typeof window !== "undefined") {
    _window = window;
  } else if (typeof self !== "undefined") {
    _window = self;
  } else {
    _window = global;
  }
  var attachEvent = typeof _window.document !== "undefined" && _window.document.attachEvent;
  if (!attachEvent) {
    var requestFrame = function() {
      var raf2 = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function(fn) {
        return _window.setTimeout(fn, 20);
      };
      return function(fn) {
        return raf2(fn);
      };
    }();
    var cancelFrame = function() {
      var cancel2 = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
      return function(id2) {
        return cancel2(id2);
      };
    }();
    var resetTriggers = function resetTriggers2(element) {
      var triggers = element.__resizeTriggers__, expand = triggers.firstElementChild, contract = triggers.lastElementChild, expandChild = expand.firstElementChild;
      contract.scrollLeft = contract.scrollWidth;
      contract.scrollTop = contract.scrollHeight;
      expandChild.style.width = expand.offsetWidth + 1 + "px";
      expandChild.style.height = expand.offsetHeight + 1 + "px";
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
    };
    var checkTriggers = function checkTriggers2(element) {
      return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
    };
    var scrollListener = function scrollListener2(e) {
      if (e.target.className && typeof e.target.className.indexOf === "function" && e.target.className.indexOf("contract-trigger") < 0 && e.target.className.indexOf("expand-trigger") < 0) {
        return;
      }
      var element = this;
      resetTriggers(this);
      if (this.__resizeRAF__) {
        cancelFrame(this.__resizeRAF__);
      }
      this.__resizeRAF__ = requestFrame(function() {
        if (checkTriggers(element)) {
          element.__resizeLast__.width = element.offsetWidth;
          element.__resizeLast__.height = element.offsetHeight;
          element.__resizeListeners__.forEach(function(fn) {
            fn.call(element, e);
          });
        }
      });
    };
    var animation = false, keyframeprefix = "", animationstartevent = "animationstart", domPrefixes = "Webkit Moz O ms".split(" "), startEvents = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "), pfx = "";
    {
      var elm = _window.document.createElement("fakeelement");
      if (elm.style.animationName !== void 0) {
        animation = true;
      }
      if (animation === false) {
        for (var i = 0; i < domPrefixes.length; i++) {
          if (elm.style[domPrefixes[i] + "AnimationName"] !== void 0) {
            pfx = domPrefixes[i];
            keyframeprefix = "-" + pfx.toLowerCase() + "-";
            animationstartevent = startEvents[i];
            animation = true;
            break;
          }
        }
      }
    }
    var animationName = "resizeanim";
    var animationKeyframes = "@" + keyframeprefix + "keyframes " + animationName + " { from { opacity: 0; } to { opacity: 0; } } ";
    var animationStyle = keyframeprefix + "animation: 1ms " + animationName + "; ";
  }
  var createStyles = function createStyles2(doc) {
    if (!doc.getElementById("detectElementResize")) {
      var css = (animationKeyframes ? animationKeyframes : "") + ".resize-triggers { " + (animationStyle ? animationStyle : "") + 'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }', head = doc.head || doc.getElementsByTagName("head")[0], style = doc.createElement("style");
      style.id = "detectElementResize";
      style.type = "text/css";
      if (nonce != null) {
        style.setAttribute("nonce", nonce);
      }
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(doc.createTextNode(css));
      }
      head.appendChild(style);
    }
  };
  var addResizeListener = function addResizeListener2(element, fn) {
    if (attachEvent) {
      element.attachEvent("onresize", fn);
    } else {
      if (!element.__resizeTriggers__) {
        var doc = element.ownerDocument;
        var elementStyle = _window.getComputedStyle(element);
        if (elementStyle && elementStyle.position == "static") {
          element.style.position = "relative";
        }
        createStyles(doc);
        element.__resizeLast__ = {};
        element.__resizeListeners__ = [];
        (element.__resizeTriggers__ = doc.createElement("div")).className = "resize-triggers";
        var resizeTriggersHtml = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';
        if (window.trustedTypes) {
          var staticPolicy = trustedTypes.createPolicy("react-virtualized-auto-sizer", {
            createHTML: function createHTML() {
              return resizeTriggersHtml;
            }
          });
          element.__resizeTriggers__.innerHTML = staticPolicy.createHTML("");
        } else {
          element.__resizeTriggers__.innerHTML = resizeTriggersHtml;
        }
        element.appendChild(element.__resizeTriggers__);
        resetTriggers(element);
        element.addEventListener("scroll", scrollListener, true);
        if (animationstartevent) {
          element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
            if (e.animationName == animationName) {
              resetTriggers(element);
            }
          };
          element.__resizeTriggers__.addEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
        }
      }
      element.__resizeListeners__.push(fn);
    }
  };
  var removeResizeListener = function removeResizeListener2(element, fn) {
    if (attachEvent) {
      element.detachEvent("onresize", fn);
    } else {
      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
      if (!element.__resizeListeners__.length) {
        element.removeEventListener("scroll", scrollListener, true);
        if (element.__resizeTriggers__.__animationListener__) {
          element.__resizeTriggers__.removeEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
          element.__resizeTriggers__.__animationListener__ = null;
        }
        try {
          element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
        } catch (e) {
        }
      }
    }
  };
  return {
    addResizeListener,
    removeResizeListener
  };
}
var _class$4, _temp$4;
function ownKeys$5(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$5(source, true).forEach(function(key) {
        _defineProperty$h(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$5(source).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var AutoSizer = (_temp$4 = _class$4 = /* @__PURE__ */ function(_React$Component) {
  _inherits(AutoSizer2, _React$Component);
  function AutoSizer2() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck(this, AutoSizer2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AutoSizer2)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _defineProperty$h(_assertThisInitialized(_this), "state", {
      height: _this.props.defaultHeight || 0,
      width: _this.props.defaultWidth || 0
    });
    _defineProperty$h(_assertThisInitialized(_this), "_parentNode", void 0);
    _defineProperty$h(_assertThisInitialized(_this), "_autoSizer", void 0);
    _defineProperty$h(_assertThisInitialized(_this), "_window", void 0);
    _defineProperty$h(_assertThisInitialized(_this), "_detectElementResize", void 0);
    _defineProperty$h(_assertThisInitialized(_this), "_onResize", function() {
      var _this$props = _this.props, disableHeight = _this$props.disableHeight, disableWidth = _this$props.disableWidth, onResize3 = _this$props.onResize;
      if (_this._parentNode) {
        var height2 = _this._parentNode.offsetHeight || 0;
        var width2 = _this._parentNode.offsetWidth || 0;
        var win2 = _this._window || window;
        var style = win2.getComputedStyle(_this._parentNode) || {};
        var paddingLeft = parseInt(style.paddingLeft, 10) || 0;
        var paddingRight = parseInt(style.paddingRight, 10) || 0;
        var paddingTop = parseInt(style.paddingTop, 10) || 0;
        var paddingBottom = parseInt(style.paddingBottom, 10) || 0;
        var newHeight = height2 - paddingTop - paddingBottom;
        var newWidth = width2 - paddingLeft - paddingRight;
        if (!disableHeight && _this.state.height !== newHeight || !disableWidth && _this.state.width !== newWidth) {
          _this.setState({
            height: height2 - paddingTop - paddingBottom,
            width: width2 - paddingLeft - paddingRight
          });
          onResize3({
            height: height2,
            width: width2
          });
        }
      }
    });
    _defineProperty$h(_assertThisInitialized(_this), "_setRef", function(autoSizer) {
      _this._autoSizer = autoSizer;
    });
    return _this;
  }
  _createClass(AutoSizer2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var nonce = this.props.nonce;
      if (this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement) {
        this._parentNode = this._autoSizer.parentNode;
        this._window = this._autoSizer.parentNode.ownerDocument.defaultView;
        this._detectElementResize = createDetectElementResize(nonce, this._window);
        this._detectElementResize.addResizeListener(this._parentNode, this._onResize);
        this._onResize();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._detectElementResize && this._parentNode) {
        this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props, children = _this$props2.children, className = _this$props2.className, disableHeight = _this$props2.disableHeight, disableWidth = _this$props2.disableWidth, style = _this$props2.style;
      var _this$state = this.state, height2 = _this$state.height, width2 = _this$state.width;
      var outerStyle = {
        overflow: "visible"
      };
      var childParams = {};
      if (!disableHeight) {
        outerStyle.height = 0;
        childParams.height = height2;
      }
      if (!disableWidth) {
        outerStyle.width = 0;
        childParams.width = width2;
      }
      return React.createElement("div", {
        className,
        ref: this._setRef,
        style: _objectSpread$5({}, outerStyle, {}, style)
      }, children(childParams));
    }
  }]);
  return AutoSizer2;
}(React.Component), _defineProperty$h(_class$4, "propTypes", null), _temp$4);
_defineProperty$h(AutoSizer, "defaultProps", {
  onResize: function onResize() {
  },
  disableHeight: false,
  disableWidth: false,
  style: {}
});
var _class$3, _temp$3;
var CellMeasurer = (_temp$3 = _class$3 = /* @__PURE__ */ function(_React$PureComponent) {
  _inherits(CellMeasurer2, _React$PureComponent);
  function CellMeasurer2() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck(this, CellMeasurer2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CellMeasurer2)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _defineProperty$h(_assertThisInitialized(_this), "_child", void 0);
    _defineProperty$h(_assertThisInitialized(_this), "_measure", function() {
      var _this$props = _this.props, cache = _this$props.cache, _this$props$columnInd = _this$props.columnIndex, columnIndex = _this$props$columnInd === void 0 ? 0 : _this$props$columnInd, parent2 = _this$props.parent, _this$props$rowIndex = _this$props.rowIndex, rowIndex = _this$props$rowIndex === void 0 ? _this.props.index || 0 : _this$props$rowIndex;
      var _this$_getCellMeasure = _this._getCellMeasurements(), height2 = _this$_getCellMeasure.height, width2 = _this$_getCellMeasure.width;
      if (height2 !== cache.getHeight(rowIndex, columnIndex) || width2 !== cache.getWidth(rowIndex, columnIndex)) {
        cache.set(rowIndex, columnIndex, width2, height2);
        if (parent2 && typeof parent2.recomputeGridSize === "function") {
          parent2.recomputeGridSize({
            columnIndex,
            rowIndex
          });
        }
      }
    });
    _defineProperty$h(_assertThisInitialized(_this), "_registerChild", function(element) {
      if (element && !(element instanceof Element)) {
        console.warn("CellMeasurer registerChild expects to be passed Element or null");
      }
      _this._child = element;
      if (element) {
        _this._maybeMeasureCell();
      }
    });
    return _this;
  }
  _createClass(CellMeasurer2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._maybeMeasureCell();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._maybeMeasureCell();
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return typeof children === "function" ? children({
        measure: this._measure,
        registerChild: this._registerChild
      }) : children;
    }
  }, {
    key: "_getCellMeasurements",
    value: function _getCellMeasurements() {
      var cache = this.props.cache;
      var node = this._child || reactDom.exports.findDOMNode(this);
      if (node && node.ownerDocument && node.ownerDocument.defaultView && node instanceof node.ownerDocument.defaultView.HTMLElement) {
        var styleWidth = node.style.width;
        var styleHeight = node.style.height;
        if (!cache.hasFixedWidth()) {
          node.style.width = "auto";
        }
        if (!cache.hasFixedHeight()) {
          node.style.height = "auto";
        }
        var height2 = Math.ceil(node.offsetHeight);
        var width2 = Math.ceil(node.offsetWidth);
        if (styleWidth) {
          node.style.width = styleWidth;
        }
        if (styleHeight) {
          node.style.height = styleHeight;
        }
        return {
          height: height2,
          width: width2
        };
      } else {
        return {
          height: 0,
          width: 0
        };
      }
    }
  }, {
    key: "_maybeMeasureCell",
    value: function _maybeMeasureCell() {
      var _this$props2 = this.props, cache = _this$props2.cache, _this$props2$columnIn = _this$props2.columnIndex, columnIndex = _this$props2$columnIn === void 0 ? 0 : _this$props2$columnIn, parent2 = _this$props2.parent, _this$props2$rowIndex = _this$props2.rowIndex, rowIndex = _this$props2$rowIndex === void 0 ? this.props.index || 0 : _this$props2$rowIndex;
      if (!cache.has(rowIndex, columnIndex)) {
        var _this$_getCellMeasure2 = this._getCellMeasurements(), height2 = _this$_getCellMeasure2.height, width2 = _this$_getCellMeasure2.width;
        cache.set(rowIndex, columnIndex, width2, height2);
        if (parent2 && typeof parent2.invalidateCellSizeAfterRender === "function") {
          parent2.invalidateCellSizeAfterRender({
            columnIndex,
            rowIndex
          });
        }
      }
    }
  }]);
  return CellMeasurer2;
}(React.PureComponent), _defineProperty$h(_class$3, "propTypes", null), _temp$3);
_defineProperty$h(CellMeasurer, "__internalCellMeasurerFlag", false);
function ownKeys$4(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$4(source, true).forEach(function(key) {
        _defineProperty$h(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$4(source).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var IS_SCROLLING_TIMEOUT$1 = 150;
var SCROLL_POSITION_CHANGE_REASONS = {
  OBSERVED: "observed",
  REQUESTED: "requested"
};
var CollectionView = /* @__PURE__ */ function(_React$PureComponent) {
  _inherits(CollectionView2, _React$PureComponent);
  function CollectionView2() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck(this, CollectionView2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CollectionView2)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _defineProperty$h(_assertThisInitialized(_this), "state", {
      isScrolling: false,
      scrollLeft: 0,
      scrollTop: 0
    });
    _defineProperty$h(_assertThisInitialized(_this), "_calculateSizeAndPositionDataOnNextUpdate", false);
    _defineProperty$h(_assertThisInitialized(_this), "_onSectionRenderedMemoizer", createCallbackMemoizer());
    _defineProperty$h(_assertThisInitialized(_this), "_onScrollMemoizer", createCallbackMemoizer(false));
    _defineProperty$h(_assertThisInitialized(_this), "_invokeOnSectionRenderedHelper", function() {
      var _this$props = _this.props, cellLayoutManager = _this$props.cellLayoutManager, onSectionRendered3 = _this$props.onSectionRendered;
      _this._onSectionRenderedMemoizer({
        callback: onSectionRendered3,
        indices: {
          indices: cellLayoutManager.getLastRenderedIndices()
        }
      });
    });
    _defineProperty$h(_assertThisInitialized(_this), "_setScrollingContainerRef", function(ref) {
      _this._scrollingContainer = ref;
    });
    _defineProperty$h(_assertThisInitialized(_this), "_updateScrollPositionForScrollToCell", function() {
      var _this$props2 = _this.props, cellLayoutManager = _this$props2.cellLayoutManager, height2 = _this$props2.height, scrollToAlignment = _this$props2.scrollToAlignment, scrollToCell = _this$props2.scrollToCell, width2 = _this$props2.width;
      var _this$state = _this.state, scrollLeft = _this$state.scrollLeft, scrollTop = _this$state.scrollTop;
      if (scrollToCell >= 0) {
        var scrollPosition = cellLayoutManager.getScrollPositionForCell({
          align: scrollToAlignment,
          cellIndex: scrollToCell,
          height: height2,
          scrollLeft,
          scrollTop,
          width: width2
        });
        if (scrollPosition.scrollLeft !== scrollLeft || scrollPosition.scrollTop !== scrollTop) {
          _this._setScrollPosition(scrollPosition);
        }
      }
    });
    _defineProperty$h(_assertThisInitialized(_this), "_onScroll", function(event) {
      if (event.target !== _this._scrollingContainer) {
        return;
      }
      _this._enablePointerEventsAfterDelay();
      var _this$props3 = _this.props, cellLayoutManager = _this$props3.cellLayoutManager, height2 = _this$props3.height, isScrollingChange = _this$props3.isScrollingChange, width2 = _this$props3.width;
      var scrollbarSize2 = _this._scrollbarSize;
      var _cellLayoutManager$ge = cellLayoutManager.getTotalSize(), totalHeight = _cellLayoutManager$ge.height, totalWidth = _cellLayoutManager$ge.width;
      var scrollLeft = Math.max(0, Math.min(totalWidth - width2 + scrollbarSize2, event.target.scrollLeft));
      var scrollTop = Math.max(0, Math.min(totalHeight - height2 + scrollbarSize2, event.target.scrollTop));
      if (_this.state.scrollLeft !== scrollLeft || _this.state.scrollTop !== scrollTop) {
        var scrollPositionChangeReason = event.cancelable ? SCROLL_POSITION_CHANGE_REASONS.OBSERVED : SCROLL_POSITION_CHANGE_REASONS.REQUESTED;
        if (!_this.state.isScrolling) {
          isScrollingChange(true);
        }
        _this.setState({
          isScrolling: true,
          scrollLeft,
          scrollPositionChangeReason,
          scrollTop
        });
      }
      _this._invokeOnScrollMemoizer({
        scrollLeft,
        scrollTop,
        totalWidth,
        totalHeight
      });
    });
    _this._scrollbarSize = scrollbarSize();
    if (_this._scrollbarSize === void 0) {
      _this._scrollbarSizeMeasured = false;
      _this._scrollbarSize = 0;
    } else {
      _this._scrollbarSizeMeasured = true;
    }
    return _this;
  }
  _createClass(CollectionView2, [{
    key: "recomputeCellSizesAndPositions",
    value: function recomputeCellSizesAndPositions() {
      this._calculateSizeAndPositionDataOnNextUpdate = true;
      this.forceUpdate();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props4 = this.props, cellLayoutManager = _this$props4.cellLayoutManager, scrollLeft = _this$props4.scrollLeft, scrollToCell = _this$props4.scrollToCell, scrollTop = _this$props4.scrollTop;
      if (!this._scrollbarSizeMeasured) {
        this._scrollbarSize = scrollbarSize();
        this._scrollbarSizeMeasured = true;
        this.setState({});
      }
      if (scrollToCell >= 0) {
        this._updateScrollPositionForScrollToCell();
      } else if (scrollLeft >= 0 || scrollTop >= 0) {
        this._setScrollPosition({
          scrollLeft,
          scrollTop
        });
      }
      this._invokeOnSectionRenderedHelper();
      var _cellLayoutManager$ge2 = cellLayoutManager.getTotalSize(), totalHeight = _cellLayoutManager$ge2.height, totalWidth = _cellLayoutManager$ge2.width;
      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft || 0,
        scrollTop: scrollTop || 0,
        totalHeight,
        totalWidth
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props5 = this.props, height2 = _this$props5.height, scrollToAlignment = _this$props5.scrollToAlignment, scrollToCell = _this$props5.scrollToCell, width2 = _this$props5.width;
      var _this$state2 = this.state, scrollLeft = _this$state2.scrollLeft, scrollPositionChangeReason = _this$state2.scrollPositionChangeReason, scrollTop = _this$state2.scrollTop;
      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
        if (scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft && scrollLeft !== this._scrollingContainer.scrollLeft) {
          this._scrollingContainer.scrollLeft = scrollLeft;
        }
        if (scrollTop >= 0 && scrollTop !== prevState.scrollTop && scrollTop !== this._scrollingContainer.scrollTop) {
          this._scrollingContainer.scrollTop = scrollTop;
        }
      }
      if (height2 !== prevProps.height || scrollToAlignment !== prevProps.scrollToAlignment || scrollToCell !== prevProps.scrollToCell || width2 !== prevProps.width) {
        this._updateScrollPositionForScrollToCell();
      }
      this._invokeOnSectionRenderedHelper();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props, autoHeight = _this$props6.autoHeight, cellCount = _this$props6.cellCount, cellLayoutManager = _this$props6.cellLayoutManager, className = _this$props6.className, height2 = _this$props6.height, horizontalOverscanSize = _this$props6.horizontalOverscanSize, id2 = _this$props6.id, noContentRenderer2 = _this$props6.noContentRenderer, style = _this$props6.style, verticalOverscanSize = _this$props6.verticalOverscanSize, width2 = _this$props6.width;
      var _this$state3 = this.state, isScrolling = _this$state3.isScrolling, scrollLeft = _this$state3.scrollLeft, scrollTop = _this$state3.scrollTop;
      if (this._lastRenderedCellCount !== cellCount || this._lastRenderedCellLayoutManager !== cellLayoutManager || this._calculateSizeAndPositionDataOnNextUpdate) {
        this._lastRenderedCellCount = cellCount;
        this._lastRenderedCellLayoutManager = cellLayoutManager;
        this._calculateSizeAndPositionDataOnNextUpdate = false;
        cellLayoutManager.calculateSizeAndPositionData();
      }
      var _cellLayoutManager$ge3 = cellLayoutManager.getTotalSize(), totalHeight = _cellLayoutManager$ge3.height, totalWidth = _cellLayoutManager$ge3.width;
      var left = Math.max(0, scrollLeft - horizontalOverscanSize);
      var top = Math.max(0, scrollTop - verticalOverscanSize);
      var right = Math.min(totalWidth, scrollLeft + width2 + horizontalOverscanSize);
      var bottom = Math.min(totalHeight, scrollTop + height2 + verticalOverscanSize);
      var childrenToDisplay = height2 > 0 && width2 > 0 ? cellLayoutManager.cellRenderers({
        height: bottom - top,
        isScrolling,
        width: right - left,
        x: left,
        y: top
      }) : [];
      var collectionStyle = {
        boxSizing: "border-box",
        direction: "ltr",
        height: autoHeight ? "auto" : height2,
        position: "relative",
        WebkitOverflowScrolling: "touch",
        width: width2,
        willChange: "transform"
      };
      var verticalScrollBarSize = totalHeight > height2 ? this._scrollbarSize : 0;
      var horizontalScrollBarSize = totalWidth > width2 ? this._scrollbarSize : 0;
      collectionStyle.overflowX = totalWidth + verticalScrollBarSize <= width2 ? "hidden" : "auto";
      collectionStyle.overflowY = totalHeight + horizontalScrollBarSize <= height2 ? "hidden" : "auto";
      return React.createElement("div", {
        ref: this._setScrollingContainerRef,
        "aria-label": this.props["aria-label"],
        className: clsx("ReactVirtualized__Collection", className),
        id: id2,
        onScroll: this._onScroll,
        role: "grid",
        style: _objectSpread$4({}, collectionStyle, {}, style),
        tabIndex: 0
      }, cellCount > 0 && React.createElement("div", {
        className: "ReactVirtualized__Collection__innerScrollContainer",
        style: {
          height: totalHeight,
          maxHeight: totalHeight,
          maxWidth: totalWidth,
          overflow: "hidden",
          pointerEvents: isScrolling ? "none" : "",
          width: totalWidth
        }
      }, childrenToDisplay), cellCount === 0 && noContentRenderer2());
    }
  }, {
    key: "_enablePointerEventsAfterDelay",
    value: function _enablePointerEventsAfterDelay() {
      var _this2 = this;
      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }
      this._disablePointerEventsTimeoutId = setTimeout(function() {
        var isScrollingChange = _this2.props.isScrollingChange;
        isScrollingChange(false);
        _this2._disablePointerEventsTimeoutId = null;
        _this2.setState({
          isScrolling: false
        });
      }, IS_SCROLLING_TIMEOUT$1);
    }
  }, {
    key: "_invokeOnScrollMemoizer",
    value: function _invokeOnScrollMemoizer(_ref) {
      var _this3 = this;
      var scrollLeft = _ref.scrollLeft, scrollTop = _ref.scrollTop, totalHeight = _ref.totalHeight, totalWidth = _ref.totalWidth;
      this._onScrollMemoizer({
        callback: function callback(_ref2) {
          var scrollLeft2 = _ref2.scrollLeft, scrollTop2 = _ref2.scrollTop;
          var _this3$props = _this3.props, height2 = _this3$props.height, onScroll6 = _this3$props.onScroll, width2 = _this3$props.width;
          onScroll6({
            clientHeight: height2,
            clientWidth: width2,
            scrollHeight: totalHeight,
            scrollLeft: scrollLeft2,
            scrollTop: scrollTop2,
            scrollWidth: totalWidth
          });
        },
        indices: {
          scrollLeft,
          scrollTop
        }
      });
    }
  }, {
    key: "_setScrollPosition",
    value: function _setScrollPosition(_ref3) {
      var scrollLeft = _ref3.scrollLeft, scrollTop = _ref3.scrollTop;
      var newState = {
        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
      };
      if (scrollLeft >= 0) {
        newState.scrollLeft = scrollLeft;
      }
      if (scrollTop >= 0) {
        newState.scrollTop = scrollTop;
      }
      if (scrollLeft >= 0 && scrollLeft !== this.state.scrollLeft || scrollTop >= 0 && scrollTop !== this.state.scrollTop) {
        this.setState(newState);
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.cellCount === 0 && (prevState.scrollLeft !== 0 || prevState.scrollTop !== 0)) {
        return {
          scrollLeft: 0,
          scrollTop: 0,
          scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
        };
      } else if (nextProps.scrollLeft !== prevState.scrollLeft || nextProps.scrollTop !== prevState.scrollTop) {
        return {
          scrollLeft: nextProps.scrollLeft != null ? nextProps.scrollLeft : prevState.scrollLeft,
          scrollTop: nextProps.scrollTop != null ? nextProps.scrollTop : prevState.scrollTop,
          scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
        };
      }
      return null;
    }
  }]);
  return CollectionView2;
}(React.PureComponent);
_defineProperty$h(CollectionView, "defaultProps", {
  "aria-label": "grid",
  horizontalOverscanSize: 0,
  noContentRenderer: function noContentRenderer() {
    return null;
  },
  onScroll: function onScroll2() {
    return null;
  },
  onSectionRendered: function onSectionRendered2() {
    return null;
  },
  scrollToAlignment: "auto",
  scrollToCell: -1,
  style: {},
  verticalOverscanSize: 0
});
CollectionView.propTypes = {};
polyfill(CollectionView);
var Section = /* @__PURE__ */ function() {
  function Section2(_ref) {
    var height2 = _ref.height, width2 = _ref.width, x = _ref.x, y2 = _ref.y;
    _classCallCheck(this, Section2);
    this.height = height2;
    this.width = width2;
    this.x = x;
    this.y = y2;
    this._indexMap = {};
    this._indices = [];
  }
  _createClass(Section2, [{
    key: "addCellIndex",
    value: function addCellIndex(_ref2) {
      var index2 = _ref2.index;
      if (!this._indexMap[index2]) {
        this._indexMap[index2] = true;
        this._indices.push(index2);
      }
    }
  }, {
    key: "getCellIndices",
    value: function getCellIndices() {
      return this._indices;
    }
  }, {
    key: "toString",
    value: function toString2() {
      return "".concat(this.x, ",").concat(this.y, " ").concat(this.width, "x").concat(this.height);
    }
  }]);
  return Section2;
}();
var SECTION_SIZE = 100;
var SectionManager = /* @__PURE__ */ function() {
  function SectionManager2() {
    var sectionSize = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : SECTION_SIZE;
    _classCallCheck(this, SectionManager2);
    this._sectionSize = sectionSize;
    this._cellMetadata = [];
    this._sections = {};
  }
  _createClass(SectionManager2, [{
    key: "getCellIndices",
    value: function getCellIndices(_ref) {
      var height2 = _ref.height, width2 = _ref.width, x = _ref.x, y2 = _ref.y;
      var indices = {};
      this.getSections({
        height: height2,
        width: width2,
        x,
        y: y2
      }).forEach(function(section) {
        return section.getCellIndices().forEach(function(index2) {
          indices[index2] = index2;
        });
      });
      return Object.keys(indices).map(function(index2) {
        return indices[index2];
      });
    }
  }, {
    key: "getCellMetadata",
    value: function getCellMetadata(_ref2) {
      var index2 = _ref2.index;
      return this._cellMetadata[index2];
    }
  }, {
    key: "getSections",
    value: function getSections(_ref3) {
      var height2 = _ref3.height, width2 = _ref3.width, x = _ref3.x, y2 = _ref3.y;
      var sectionXStart = Math.floor(x / this._sectionSize);
      var sectionXStop = Math.floor((x + width2 - 1) / this._sectionSize);
      var sectionYStart = Math.floor(y2 / this._sectionSize);
      var sectionYStop = Math.floor((y2 + height2 - 1) / this._sectionSize);
      var sections = [];
      for (var sectionX = sectionXStart; sectionX <= sectionXStop; sectionX++) {
        for (var sectionY = sectionYStart; sectionY <= sectionYStop; sectionY++) {
          var key = "".concat(sectionX, ".").concat(sectionY);
          if (!this._sections[key]) {
            this._sections[key] = new Section({
              height: this._sectionSize,
              width: this._sectionSize,
              x: sectionX * this._sectionSize,
              y: sectionY * this._sectionSize
            });
          }
          sections.push(this._sections[key]);
        }
      }
      return sections;
    }
  }, {
    key: "getTotalSectionCount",
    value: function getTotalSectionCount() {
      return Object.keys(this._sections).length;
    }
  }, {
    key: "toString",
    value: function toString2() {
      var _this = this;
      return Object.keys(this._sections).map(function(index2) {
        return _this._sections[index2].toString();
      });
    }
  }, {
    key: "registerCell",
    value: function registerCell(_ref4) {
      var cellMetadatum = _ref4.cellMetadatum, index2 = _ref4.index;
      this._cellMetadata[index2] = cellMetadatum;
      this.getSections(cellMetadatum).forEach(function(section) {
        return section.addCellIndex({
          index: index2
        });
      });
    }
  }]);
  return SectionManager2;
}();
function calculateSizeAndPositionData(_ref) {
  var cellCount = _ref.cellCount, cellSizeAndPositionGetter = _ref.cellSizeAndPositionGetter, sectionSize = _ref.sectionSize;
  var cellMetadata = [];
  var sectionManager = new SectionManager(sectionSize);
  var height2 = 0;
  var width2 = 0;
  for (var index2 = 0; index2 < cellCount; index2++) {
    var cellMetadatum = cellSizeAndPositionGetter({
      index: index2
    });
    if (cellMetadatum.height == null || isNaN(cellMetadatum.height) || cellMetadatum.width == null || isNaN(cellMetadatum.width) || cellMetadatum.x == null || isNaN(cellMetadatum.x) || cellMetadatum.y == null || isNaN(cellMetadatum.y)) {
      throw Error("Invalid metadata returned for cell ".concat(index2, ":\n        x:").concat(cellMetadatum.x, ", y:").concat(cellMetadatum.y, ", width:").concat(cellMetadatum.width, ", height:").concat(cellMetadatum.height));
    }
    height2 = Math.max(height2, cellMetadatum.y + cellMetadatum.height);
    width2 = Math.max(width2, cellMetadatum.x + cellMetadatum.width);
    cellMetadata[index2] = cellMetadatum;
    sectionManager.registerCell({
      cellMetadatum,
      index: index2
    });
  }
  return {
    cellMetadata,
    height: height2,
    sectionManager,
    width: width2
  };
}
function getUpdatedOffsetForIndex(_ref) {
  var _ref$align = _ref.align, align = _ref$align === void 0 ? "auto" : _ref$align, cellOffset = _ref.cellOffset, cellSize = _ref.cellSize, containerSize = _ref.containerSize, currentOffset = _ref.currentOffset;
  var maxOffset = cellOffset;
  var minOffset = maxOffset - containerSize + cellSize;
  switch (align) {
    case "start":
      return maxOffset;
    case "end":
      return minOffset;
    case "center":
      return maxOffset - (containerSize - cellSize) / 2;
    default:
      return Math.max(minOffset, Math.min(maxOffset, currentOffset));
  }
}
var Collection = /* @__PURE__ */ function(_React$PureComponent) {
  _inherits(Collection2, _React$PureComponent);
  function Collection2(props, context) {
    var _this;
    _classCallCheck(this, Collection2);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Collection2).call(this, props, context));
    _this._cellMetadata = [];
    _this._lastRenderedCellIndices = [];
    _this._cellCache = [];
    _this._isScrollingChange = _this._isScrollingChange.bind(_assertThisInitialized(_this));
    _this._setCollectionViewRef = _this._setCollectionViewRef.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Collection2, [{
    key: "forceUpdate",
    value: function forceUpdate() {
      if (this._collectionView !== void 0) {
        this._collectionView.forceUpdate();
      }
    }
  }, {
    key: "recomputeCellSizesAndPositions",
    value: function recomputeCellSizesAndPositions() {
      this._cellCache = [];
      this._collectionView.recomputeCellSizesAndPositions();
    }
  }, {
    key: "render",
    value: function render() {
      var props = _extends({}, this.props);
      return React.createElement(CollectionView, _extends({
        cellLayoutManager: this,
        isScrollingChange: this._isScrollingChange,
        ref: this._setCollectionViewRef
      }, props));
    }
  }, {
    key: "calculateSizeAndPositionData",
    value: function calculateSizeAndPositionData$1() {
      var _this$props = this.props, cellCount = _this$props.cellCount, cellSizeAndPositionGetter = _this$props.cellSizeAndPositionGetter, sectionSize = _this$props.sectionSize;
      var data = calculateSizeAndPositionData({
        cellCount,
        cellSizeAndPositionGetter,
        sectionSize
      });
      this._cellMetadata = data.cellMetadata;
      this._sectionManager = data.sectionManager;
      this._height = data.height;
      this._width = data.width;
    }
  }, {
    key: "getLastRenderedIndices",
    value: function getLastRenderedIndices() {
      return this._lastRenderedCellIndices;
    }
  }, {
    key: "getScrollPositionForCell",
    value: function getScrollPositionForCell(_ref) {
      var align = _ref.align, cellIndex = _ref.cellIndex, height2 = _ref.height, scrollLeft = _ref.scrollLeft, scrollTop = _ref.scrollTop, width2 = _ref.width;
      var cellCount = this.props.cellCount;
      if (cellIndex >= 0 && cellIndex < cellCount) {
        var cellMetadata = this._cellMetadata[cellIndex];
        scrollLeft = getUpdatedOffsetForIndex({
          align,
          cellOffset: cellMetadata.x,
          cellSize: cellMetadata.width,
          containerSize: width2,
          currentOffset: scrollLeft,
          targetIndex: cellIndex
        });
        scrollTop = getUpdatedOffsetForIndex({
          align,
          cellOffset: cellMetadata.y,
          cellSize: cellMetadata.height,
          containerSize: height2,
          currentOffset: scrollTop,
          targetIndex: cellIndex
        });
      }
      return {
        scrollLeft,
        scrollTop
      };
    }
  }, {
    key: "getTotalSize",
    value: function getTotalSize() {
      return {
        height: this._height,
        width: this._width
      };
    }
  }, {
    key: "cellRenderers",
    value: function cellRenderers(_ref2) {
      var _this2 = this;
      var height2 = _ref2.height, isScrolling = _ref2.isScrolling, width2 = _ref2.width, x = _ref2.x, y2 = _ref2.y;
      var _this$props2 = this.props, cellGroupRenderer = _this$props2.cellGroupRenderer, cellRenderer = _this$props2.cellRenderer;
      this._lastRenderedCellIndices = this._sectionManager.getCellIndices({
        height: height2,
        width: width2,
        x,
        y: y2
      });
      return cellGroupRenderer({
        cellCache: this._cellCache,
        cellRenderer,
        cellSizeAndPositionGetter: function cellSizeAndPositionGetter(_ref3) {
          var index2 = _ref3.index;
          return _this2._sectionManager.getCellMetadata({
            index: index2
          });
        },
        indices: this._lastRenderedCellIndices,
        isScrolling
      });
    }
  }, {
    key: "_isScrollingChange",
    value: function _isScrollingChange(isScrolling) {
      if (!isScrolling) {
        this._cellCache = [];
      }
    }
  }, {
    key: "_setCollectionViewRef",
    value: function _setCollectionViewRef(ref) {
      this._collectionView = ref;
    }
  }]);
  return Collection2;
}(React.PureComponent);
_defineProperty$h(Collection, "defaultProps", {
  "aria-label": "grid",
  cellGroupRenderer: defaultCellGroupRenderer
});
Collection.propTypes = {};
function defaultCellGroupRenderer(_ref4) {
  var cellCache = _ref4.cellCache, cellRenderer = _ref4.cellRenderer, cellSizeAndPositionGetter = _ref4.cellSizeAndPositionGetter, indices = _ref4.indices, isScrolling = _ref4.isScrolling;
  return indices.map(function(index2) {
    var cellMetadata = cellSizeAndPositionGetter({
      index: index2
    });
    var cellRendererProps = {
      index: index2,
      isScrolling,
      key: index2,
      style: {
        height: cellMetadata.height,
        left: cellMetadata.x,
        position: "absolute",
        top: cellMetadata.y,
        width: cellMetadata.width
      }
    };
    if (isScrolling) {
      if (!(index2 in cellCache)) {
        cellCache[index2] = cellRenderer(cellRendererProps);
      }
      return cellCache[index2];
    } else {
      return cellRenderer(cellRendererProps);
    }
  }).filter(function(renderedCell) {
    return !!renderedCell;
  });
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o, minLen);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var InfiniteLoader = /* @__PURE__ */ function(_React$PureComponent) {
  _inherits(InfiniteLoader2, _React$PureComponent);
  function InfiniteLoader2(props, context) {
    var _this;
    _classCallCheck(this, InfiniteLoader2);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(InfiniteLoader2).call(this, props, context));
    _this._loadMoreRowsMemoizer = createCallbackMemoizer();
    _this._onRowsRendered = _this._onRowsRendered.bind(_assertThisInitialized(_this));
    _this._registerChild = _this._registerChild.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(InfiniteLoader2, [{
    key: "resetLoadMoreRowsCache",
    value: function resetLoadMoreRowsCache(autoReload) {
      this._loadMoreRowsMemoizer = createCallbackMemoizer();
      if (autoReload) {
        this._doStuff(this._lastRenderedStartIndex, this._lastRenderedStopIndex);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children({
        onRowsRendered: this._onRowsRendered,
        registerChild: this._registerChild
      });
    }
  }, {
    key: "_loadUnloadedRanges",
    value: function _loadUnloadedRanges(unloadedRanges) {
      var _this2 = this;
      var loadMoreRows = this.props.loadMoreRows;
      unloadedRanges.forEach(function(unloadedRange) {
        var promise = loadMoreRows(unloadedRange);
        if (promise) {
          promise.then(function() {
            if (isRangeVisible({
              lastRenderedStartIndex: _this2._lastRenderedStartIndex,
              lastRenderedStopIndex: _this2._lastRenderedStopIndex,
              startIndex: unloadedRange.startIndex,
              stopIndex: unloadedRange.stopIndex
            })) {
              if (_this2._registeredChild) {
                forceUpdateReactVirtualizedComponent(_this2._registeredChild, _this2._lastRenderedStartIndex);
              }
            }
          });
        }
      });
    }
  }, {
    key: "_onRowsRendered",
    value: function _onRowsRendered(_ref) {
      var startIndex = _ref.startIndex, stopIndex = _ref.stopIndex;
      this._lastRenderedStartIndex = startIndex;
      this._lastRenderedStopIndex = stopIndex;
      this._doStuff(startIndex, stopIndex);
    }
  }, {
    key: "_doStuff",
    value: function _doStuff(startIndex, stopIndex) {
      var _ref2, _this3 = this;
      var _this$props = this.props, isRowLoaded = _this$props.isRowLoaded, minimumBatchSize = _this$props.minimumBatchSize, rowCount = _this$props.rowCount, threshold = _this$props.threshold;
      var unloadedRanges = scanForUnloadedRanges({
        isRowLoaded,
        minimumBatchSize,
        rowCount,
        startIndex: Math.max(0, startIndex - threshold),
        stopIndex: Math.min(rowCount - 1, stopIndex + threshold)
      });
      var squashedUnloadedRanges = (_ref2 = []).concat.apply(_ref2, _toConsumableArray(unloadedRanges.map(function(_ref3) {
        var startIndex2 = _ref3.startIndex, stopIndex2 = _ref3.stopIndex;
        return [startIndex2, stopIndex2];
      })));
      this._loadMoreRowsMemoizer({
        callback: function callback() {
          _this3._loadUnloadedRanges(unloadedRanges);
        },
        indices: {
          squashedUnloadedRanges
        }
      });
    }
  }, {
    key: "_registerChild",
    value: function _registerChild(registeredChild) {
      this._registeredChild = registeredChild;
    }
  }]);
  return InfiniteLoader2;
}(React.PureComponent);
_defineProperty$h(InfiniteLoader, "defaultProps", {
  minimumBatchSize: 10,
  rowCount: 0,
  threshold: 15
});
InfiniteLoader.propTypes = {};
function isRangeVisible(_ref4) {
  var lastRenderedStartIndex = _ref4.lastRenderedStartIndex, lastRenderedStopIndex = _ref4.lastRenderedStopIndex, startIndex = _ref4.startIndex, stopIndex = _ref4.stopIndex;
  return !(startIndex > lastRenderedStopIndex || stopIndex < lastRenderedStartIndex);
}
function scanForUnloadedRanges(_ref5) {
  var isRowLoaded = _ref5.isRowLoaded, minimumBatchSize = _ref5.minimumBatchSize, rowCount = _ref5.rowCount, startIndex = _ref5.startIndex, stopIndex = _ref5.stopIndex;
  var unloadedRanges = [];
  var rangeStartIndex = null;
  var rangeStopIndex = null;
  for (var index2 = startIndex; index2 <= stopIndex; index2++) {
    var loaded = isRowLoaded({
      index: index2
    });
    if (!loaded) {
      rangeStopIndex = index2;
      if (rangeStartIndex === null) {
        rangeStartIndex = index2;
      }
    } else if (rangeStopIndex !== null) {
      unloadedRanges.push({
        startIndex: rangeStartIndex,
        stopIndex: rangeStopIndex
      });
      rangeStartIndex = rangeStopIndex = null;
    }
  }
  if (rangeStopIndex !== null) {
    var potentialStopIndex = Math.min(Math.max(rangeStopIndex, rangeStartIndex + minimumBatchSize - 1), rowCount - 1);
    for (var _index = rangeStopIndex + 1; _index <= potentialStopIndex; _index++) {
      if (!isRowLoaded({
        index: _index
      })) {
        rangeStopIndex = _index;
      } else {
        break;
      }
    }
    unloadedRanges.push({
      startIndex: rangeStartIndex,
      stopIndex: rangeStopIndex
    });
  }
  if (unloadedRanges.length) {
    var firstUnloadedRange = unloadedRanges[0];
    while (firstUnloadedRange.stopIndex - firstUnloadedRange.startIndex + 1 < minimumBatchSize && firstUnloadedRange.startIndex > 0) {
      var _index2 = firstUnloadedRange.startIndex - 1;
      if (!isRowLoaded({
        index: _index2
      })) {
        firstUnloadedRange.startIndex = _index2;
      } else {
        break;
      }
    }
  }
  return unloadedRanges;
}
function forceUpdateReactVirtualizedComponent(component) {
  var currentIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var recomputeSize = typeof component.recomputeGridSize === "function" ? component.recomputeGridSize : component.recomputeRowHeights;
  if (recomputeSize) {
    recomputeSize.call(component, currentIndex);
  } else {
    component.forceUpdate();
  }
}
var _class$2, _temp$2;
var List = (_temp$2 = _class$2 = /* @__PURE__ */ function(_React$PureComponent) {
  _inherits(List2, _React$PureComponent);
  function List2() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck(this, List2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(List2)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _defineProperty$h(_assertThisInitialized(_this), "Grid", void 0);
    _defineProperty$h(_assertThisInitialized(_this), "_cellRenderer", function(_ref) {
      var parent2 = _ref.parent, rowIndex = _ref.rowIndex, style = _ref.style, isScrolling = _ref.isScrolling, isVisible = _ref.isVisible, key = _ref.key;
      var rowRenderer = _this.props.rowRenderer;
      var widthDescriptor = Object.getOwnPropertyDescriptor(style, "width");
      if (widthDescriptor && widthDescriptor.writable) {
        style.width = "100%";
      }
      return rowRenderer({
        index: rowIndex,
        style,
        isScrolling,
        isVisible,
        key,
        parent: parent2
      });
    });
    _defineProperty$h(_assertThisInitialized(_this), "_setRef", function(ref) {
      _this.Grid = ref;
    });
    _defineProperty$h(_assertThisInitialized(_this), "_onScroll", function(_ref2) {
      var clientHeight = _ref2.clientHeight, scrollHeight = _ref2.scrollHeight, scrollTop = _ref2.scrollTop;
      var onScroll6 = _this.props.onScroll;
      onScroll6({
        clientHeight,
        scrollHeight,
        scrollTop
      });
    });
    _defineProperty$h(_assertThisInitialized(_this), "_onSectionRendered", function(_ref3) {
      var rowOverscanStartIndex = _ref3.rowOverscanStartIndex, rowOverscanStopIndex = _ref3.rowOverscanStopIndex, rowStartIndex = _ref3.rowStartIndex, rowStopIndex = _ref3.rowStopIndex;
      var onRowsRendered3 = _this.props.onRowsRendered;
      onRowsRendered3({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    });
    return _this;
  }
  _createClass(List2, [{
    key: "forceUpdateGrid",
    value: function forceUpdateGrid() {
      if (this.Grid) {
        this.Grid.forceUpdate();
      }
    }
  }, {
    key: "getOffsetForRow",
    value: function getOffsetForRow(_ref4) {
      var alignment = _ref4.alignment, index2 = _ref4.index;
      if (this.Grid) {
        var _this$Grid$getOffsetF = this.Grid.getOffsetForCell({
          alignment,
          rowIndex: index2,
          columnIndex: 0
        }), scrollTop = _this$Grid$getOffsetF.scrollTop;
        return scrollTop;
      }
      return 0;
    }
  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender(_ref5) {
      var columnIndex = _ref5.columnIndex, rowIndex = _ref5.rowIndex;
      if (this.Grid) {
        this.Grid.invalidateCellSizeAfterRender({
          rowIndex,
          columnIndex
        });
      }
    }
  }, {
    key: "measureAllRows",
    value: function measureAllRows() {
      if (this.Grid) {
        this.Grid.measureAllCells();
      }
    }
  }, {
    key: "recomputeGridSize",
    value: function recomputeGridSize() {
      var _ref6 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref6$columnIndex = _ref6.columnIndex, columnIndex = _ref6$columnIndex === void 0 ? 0 : _ref6$columnIndex, _ref6$rowIndex = _ref6.rowIndex, rowIndex = _ref6$rowIndex === void 0 ? 0 : _ref6$rowIndex;
      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex,
          columnIndex
        });
      }
    }
  }, {
    key: "recomputeRowHeights",
    value: function recomputeRowHeights() {
      var index2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: index2,
          columnIndex: 0
        });
      }
    }
  }, {
    key: "scrollToPosition",
    value: function scrollToPosition() {
      var scrollTop = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      if (this.Grid) {
        this.Grid.scrollToPosition({
          scrollTop
        });
      }
    }
  }, {
    key: "scrollToRow",
    value: function scrollToRow() {
      var index2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      if (this.Grid) {
        this.Grid.scrollToCell({
          columnIndex: 0,
          rowIndex: index2
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props, className = _this$props.className, noRowsRenderer3 = _this$props.noRowsRenderer, scrollToIndex = _this$props.scrollToIndex, width2 = _this$props.width;
      var classNames = clsx("ReactVirtualized__List", className);
      return React.createElement(Grid, _extends({}, this.props, {
        autoContainerWidth: true,
        cellRenderer: this._cellRenderer,
        className: classNames,
        columnWidth: width2,
        columnCount: 1,
        noContentRenderer: noRowsRenderer3,
        onScroll: this._onScroll,
        onSectionRendered: this._onSectionRendered,
        ref: this._setRef,
        scrollToRow: scrollToIndex
      }));
    }
  }]);
  return List2;
}(React.PureComponent), _defineProperty$h(_class$2, "propTypes", null), _temp$2);
_defineProperty$h(List, "defaultProps", {
  autoHeight: false,
  estimatedRowSize: 30,
  onScroll: function onScroll3() {
  },
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {
  },
  overscanIndicesGetter: defaultOverscanIndicesGetter,
  overscanRowCount: 10,
  scrollToAlignment: "auto",
  scrollToIndex: -1,
  style: {}
});
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _GEA(a, l, h, y2) {
  var i = h + 1;
  while (l <= h) {
    var m2 = l + h >>> 1, x = a[m2];
    if (x >= y2) {
      i = m2;
      h = m2 - 1;
    } else {
      l = m2 + 1;
    }
  }
  return i;
}
function _GEP(a, l, h, y2, c) {
  var i = h + 1;
  while (l <= h) {
    var m2 = l + h >>> 1, x = a[m2];
    if (c(x, y2) >= 0) {
      i = m2;
      h = m2 - 1;
    } else {
      l = m2 + 1;
    }
  }
  return i;
}
function dispatchBsearchGE(a, y2, c, l, h) {
  if (typeof c === "function") {
    return _GEP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y2, c);
  } else {
    return _GEA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y2);
  }
}
function _GTA(a, l, h, y2) {
  var i = h + 1;
  while (l <= h) {
    var m2 = l + h >>> 1, x = a[m2];
    if (x > y2) {
      i = m2;
      h = m2 - 1;
    } else {
      l = m2 + 1;
    }
  }
  return i;
}
function _GTP(a, l, h, y2, c) {
  var i = h + 1;
  while (l <= h) {
    var m2 = l + h >>> 1, x = a[m2];
    if (c(x, y2) > 0) {
      i = m2;
      h = m2 - 1;
    } else {
      l = m2 + 1;
    }
  }
  return i;
}
function dispatchBsearchGT(a, y2, c, l, h) {
  if (typeof c === "function") {
    return _GTP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y2, c);
  } else {
    return _GTA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y2);
  }
}
function _LTA(a, l, h, y2) {
  var i = l - 1;
  while (l <= h) {
    var m2 = l + h >>> 1, x = a[m2];
    if (x < y2) {
      i = m2;
      l = m2 + 1;
    } else {
      h = m2 - 1;
    }
  }
  return i;
}
function _LTP(a, l, h, y2, c) {
  var i = l - 1;
  while (l <= h) {
    var m2 = l + h >>> 1, x = a[m2];
    if (c(x, y2) < 0) {
      i = m2;
      l = m2 + 1;
    } else {
      h = m2 - 1;
    }
  }
  return i;
}
function dispatchBsearchLT(a, y2, c, l, h) {
  if (typeof c === "function") {
    return _LTP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y2, c);
  } else {
    return _LTA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y2);
  }
}
function _LEA(a, l, h, y2) {
  var i = l - 1;
  while (l <= h) {
    var m2 = l + h >>> 1, x = a[m2];
    if (x <= y2) {
      i = m2;
      l = m2 + 1;
    } else {
      h = m2 - 1;
    }
  }
  return i;
}
function _LEP(a, l, h, y2, c) {
  var i = l - 1;
  while (l <= h) {
    var m2 = l + h >>> 1, x = a[m2];
    if (c(x, y2) <= 0) {
      i = m2;
      l = m2 + 1;
    } else {
      h = m2 - 1;
    }
  }
  return i;
}
function dispatchBsearchLE(a, y2, c, l, h) {
  if (typeof c === "function") {
    return _LEP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y2, c);
  } else {
    return _LEA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y2);
  }
}
function _EQA(a, l, h, y2) {
  while (l <= h) {
    var m2 = l + h >>> 1, x = a[m2];
    if (x === y2) {
      return m2;
    } else if (x <= y2) {
      l = m2 + 1;
    } else {
      h = m2 - 1;
    }
  }
  return -1;
}
function _EQP(a, l, h, y2, c) {
  while (l <= h) {
    var m2 = l + h >>> 1, x = a[m2];
    var p2 = c(x, y2);
    if (p2 === 0) {
      return m2;
    } else if (p2 <= 0) {
      l = m2 + 1;
    } else {
      h = m2 - 1;
    }
  }
  return -1;
}
function dispatchBsearchEQ(a, y2, c, l, h) {
  if (typeof c === "function") {
    return _EQP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y2, c);
  } else {
    return _EQA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y2);
  }
}
var bounds = {
  ge: dispatchBsearchGE,
  gt: dispatchBsearchGT,
  lt: dispatchBsearchLT,
  le: dispatchBsearchLE,
  eq: dispatchBsearchEQ
};
var NOT_FOUND = 0;
var SUCCESS = 1;
var EMPTY = 2;
function IntervalTreeNode(mid, left, right, leftPoints, rightPoints) {
  this.mid = mid;
  this.left = left;
  this.right = right;
  this.leftPoints = leftPoints;
  this.rightPoints = rightPoints;
  this.count = (left ? left.count : 0) + (right ? right.count : 0) + leftPoints.length;
}
var proto = IntervalTreeNode.prototype;
function copy(a, b) {
  a.mid = b.mid;
  a.left = b.left;
  a.right = b.right;
  a.leftPoints = b.leftPoints;
  a.rightPoints = b.rightPoints;
  a.count = b.count;
}
function rebuild(node, intervals) {
  var ntree = createIntervalTree(intervals);
  node.mid = ntree.mid;
  node.left = ntree.left;
  node.right = ntree.right;
  node.leftPoints = ntree.leftPoints;
  node.rightPoints = ntree.rightPoints;
  node.count = ntree.count;
}
function rebuildWithInterval(node, interval) {
  var intervals = node.intervals([]);
  intervals.push(interval);
  rebuild(node, intervals);
}
function rebuildWithoutInterval(node, interval) {
  var intervals = node.intervals([]);
  var idx = intervals.indexOf(interval);
  if (idx < 0) {
    return NOT_FOUND;
  }
  intervals.splice(idx, 1);
  rebuild(node, intervals);
  return SUCCESS;
}
proto.intervals = function(result) {
  result.push.apply(result, this.leftPoints);
  if (this.left) {
    this.left.intervals(result);
  }
  if (this.right) {
    this.right.intervals(result);
  }
  return result;
};
proto.insert = function(interval) {
  var weight = this.count - this.leftPoints.length;
  this.count += 1;
  if (interval[1] < this.mid) {
    if (this.left) {
      if (4 * (this.left.count + 1) > 3 * (weight + 1)) {
        rebuildWithInterval(this, interval);
      } else {
        this.left.insert(interval);
      }
    } else {
      this.left = createIntervalTree([interval]);
    }
  } else if (interval[0] > this.mid) {
    if (this.right) {
      if (4 * (this.right.count + 1) > 3 * (weight + 1)) {
        rebuildWithInterval(this, interval);
      } else {
        this.right.insert(interval);
      }
    } else {
      this.right = createIntervalTree([interval]);
    }
  } else {
    var l = bounds.ge(this.leftPoints, interval, compareBegin);
    var r2 = bounds.ge(this.rightPoints, interval, compareEnd);
    this.leftPoints.splice(l, 0, interval);
    this.rightPoints.splice(r2, 0, interval);
  }
};
proto.remove = function(interval) {
  var weight = this.count - this.leftPoints;
  if (interval[1] < this.mid) {
    if (!this.left) {
      return NOT_FOUND;
    }
    var rw = this.right ? this.right.count : 0;
    if (4 * rw > 3 * (weight - 1)) {
      return rebuildWithoutInterval(this, interval);
    }
    var r2 = this.left.remove(interval);
    if (r2 === EMPTY) {
      this.left = null;
      this.count -= 1;
      return SUCCESS;
    } else if (r2 === SUCCESS) {
      this.count -= 1;
    }
    return r2;
  } else if (interval[0] > this.mid) {
    if (!this.right) {
      return NOT_FOUND;
    }
    var lw = this.left ? this.left.count : 0;
    if (4 * lw > 3 * (weight - 1)) {
      return rebuildWithoutInterval(this, interval);
    }
    var r2 = this.right.remove(interval);
    if (r2 === EMPTY) {
      this.right = null;
      this.count -= 1;
      return SUCCESS;
    } else if (r2 === SUCCESS) {
      this.count -= 1;
    }
    return r2;
  } else {
    if (this.count === 1) {
      if (this.leftPoints[0] === interval) {
        return EMPTY;
      } else {
        return NOT_FOUND;
      }
    }
    if (this.leftPoints.length === 1 && this.leftPoints[0] === interval) {
      if (this.left && this.right) {
        var p2 = this;
        var n2 = this.left;
        while (n2.right) {
          p2 = n2;
          n2 = n2.right;
        }
        if (p2 === this) {
          n2.right = this.right;
        } else {
          var l = this.left;
          var r2 = this.right;
          p2.count -= n2.count;
          p2.right = n2.left;
          n2.left = l;
          n2.right = r2;
        }
        copy(this, n2);
        this.count = (this.left ? this.left.count : 0) + (this.right ? this.right.count : 0) + this.leftPoints.length;
      } else if (this.left) {
        copy(this, this.left);
      } else {
        copy(this, this.right);
      }
      return SUCCESS;
    }
    for (var l = bounds.ge(this.leftPoints, interval, compareBegin); l < this.leftPoints.length; ++l) {
      if (this.leftPoints[l][0] !== interval[0]) {
        break;
      }
      if (this.leftPoints[l] === interval) {
        this.count -= 1;
        this.leftPoints.splice(l, 1);
        for (var r2 = bounds.ge(this.rightPoints, interval, compareEnd); r2 < this.rightPoints.length; ++r2) {
          if (this.rightPoints[r2][1] !== interval[1]) {
            break;
          } else if (this.rightPoints[r2] === interval) {
            this.rightPoints.splice(r2, 1);
            return SUCCESS;
          }
        }
      }
    }
    return NOT_FOUND;
  }
};
function reportLeftRange(arr, hi2, cb2) {
  for (var i = 0; i < arr.length && arr[i][0] <= hi2; ++i) {
    var r2 = cb2(arr[i]);
    if (r2) {
      return r2;
    }
  }
}
function reportRightRange(arr, lo, cb2) {
  for (var i = arr.length - 1; i >= 0 && arr[i][1] >= lo; --i) {
    var r2 = cb2(arr[i]);
    if (r2) {
      return r2;
    }
  }
}
function reportRange(arr, cb2) {
  for (var i = 0; i < arr.length; ++i) {
    var r2 = cb2(arr[i]);
    if (r2) {
      return r2;
    }
  }
}
proto.queryPoint = function(x, cb2) {
  if (x < this.mid) {
    if (this.left) {
      var r2 = this.left.queryPoint(x, cb2);
      if (r2) {
        return r2;
      }
    }
    return reportLeftRange(this.leftPoints, x, cb2);
  } else if (x > this.mid) {
    if (this.right) {
      var r2 = this.right.queryPoint(x, cb2);
      if (r2) {
        return r2;
      }
    }
    return reportRightRange(this.rightPoints, x, cb2);
  } else {
    return reportRange(this.leftPoints, cb2);
  }
};
proto.queryInterval = function(lo, hi2, cb2) {
  if (lo < this.mid && this.left) {
    var r2 = this.left.queryInterval(lo, hi2, cb2);
    if (r2) {
      return r2;
    }
  }
  if (hi2 > this.mid && this.right) {
    var r2 = this.right.queryInterval(lo, hi2, cb2);
    if (r2) {
      return r2;
    }
  }
  if (hi2 < this.mid) {
    return reportLeftRange(this.leftPoints, hi2, cb2);
  } else if (lo > this.mid) {
    return reportRightRange(this.rightPoints, lo, cb2);
  } else {
    return reportRange(this.leftPoints, cb2);
  }
};
function compareNumbers(a, b) {
  return a - b;
}
function compareBegin(a, b) {
  var d = a[0] - b[0];
  if (d) {
    return d;
  }
  return a[1] - b[1];
}
function compareEnd(a, b) {
  var d = a[1] - b[1];
  if (d) {
    return d;
  }
  return a[0] - b[0];
}
function createIntervalTree(intervals) {
  if (intervals.length === 0) {
    return null;
  }
  var pts = [];
  for (var i = 0; i < intervals.length; ++i) {
    pts.push(intervals[i][0], intervals[i][1]);
  }
  pts.sort(compareNumbers);
  var mid = pts[pts.length >> 1];
  var leftIntervals = [];
  var rightIntervals = [];
  var centerIntervals = [];
  for (var i = 0; i < intervals.length; ++i) {
    var s = intervals[i];
    if (s[1] < mid) {
      leftIntervals.push(s);
    } else if (mid < s[0]) {
      rightIntervals.push(s);
    } else {
      centerIntervals.push(s);
    }
  }
  var leftPoints = centerIntervals;
  var rightPoints = centerIntervals.slice();
  leftPoints.sort(compareBegin);
  rightPoints.sort(compareEnd);
  return new IntervalTreeNode(mid, createIntervalTree(leftIntervals), createIntervalTree(rightIntervals), leftPoints, rightPoints);
}
function IntervalTree(root2) {
  this.root = root2;
}
var tproto = IntervalTree.prototype;
tproto.insert = function(interval) {
  if (this.root) {
    this.root.insert(interval);
  } else {
    this.root = new IntervalTreeNode(interval[0], null, null, [interval], [interval]);
  }
};
tproto.remove = function(interval) {
  if (this.root) {
    var r2 = this.root.remove(interval);
    if (r2 === EMPTY) {
      this.root = null;
    }
    return r2 !== NOT_FOUND;
  }
  return false;
};
tproto.queryPoint = function(p2, cb2) {
  if (this.root) {
    return this.root.queryPoint(p2, cb2);
  }
};
tproto.queryInterval = function(lo, hi2, cb2) {
  if (lo <= hi2 && this.root) {
    return this.root.queryInterval(lo, hi2, cb2);
  }
};
Object.defineProperty(tproto, "count", {
  get: function get() {
    if (this.root) {
      return this.root.count;
    }
    return 0;
  }
});
Object.defineProperty(tproto, "intervals", {
  get: function get2() {
    if (this.root) {
      return this.root.intervals([]);
    }
    return [];
  }
});
function createWrapper(intervals) {
  if (!intervals || intervals.length === 0) {
    return new IntervalTree(null);
  }
  return new IntervalTree(createIntervalTree(intervals));
}
var PositionCache = /* @__PURE__ */ function() {
  function PositionCache2() {
    _classCallCheck(this, PositionCache2);
    _defineProperty$h(this, "_columnSizeMap", {});
    _defineProperty$h(this, "_intervalTree", createWrapper());
    _defineProperty$h(this, "_leftMap", {});
  }
  _createClass(PositionCache2, [{
    key: "estimateTotalHeight",
    value: function estimateTotalHeight(cellCount, columnCount, defaultCellHeight) {
      var unmeasuredCellCount = cellCount - this.count;
      return this.tallestColumnSize + Math.ceil(unmeasuredCellCount / columnCount) * defaultCellHeight;
    }
  }, {
    key: "range",
    value: function range(scrollTop, clientHeight, renderCallback) {
      var _this = this;
      this._intervalTree.queryInterval(scrollTop, scrollTop + clientHeight, function(_ref) {
        var _ref2 = _slicedToArray(_ref, 3), top = _ref2[0];
        _ref2[1];
        var index2 = _ref2[2];
        return renderCallback(index2, _this._leftMap[index2], top);
      });
    }
  }, {
    key: "setPosition",
    value: function setPosition(index2, left, top, height2) {
      this._intervalTree.insert([top, top + height2, index2]);
      this._leftMap[index2] = left;
      var columnSizeMap = this._columnSizeMap;
      var columnHeight = columnSizeMap[left];
      if (columnHeight === void 0) {
        columnSizeMap[left] = top + height2;
      } else {
        columnSizeMap[left] = Math.max(columnHeight, top + height2);
      }
    }
  }, {
    key: "count",
    get: function get4() {
      return this._intervalTree.count;
    }
  }, {
    key: "shortestColumnSize",
    get: function get4() {
      var columnSizeMap = this._columnSizeMap;
      var size2 = 0;
      for (var i in columnSizeMap) {
        var height2 = columnSizeMap[i];
        size2 = size2 === 0 ? height2 : Math.min(size2, height2);
      }
      return size2;
    }
  }, {
    key: "tallestColumnSize",
    get: function get4() {
      var columnSizeMap = this._columnSizeMap;
      var size2 = 0;
      for (var i in columnSizeMap) {
        var height2 = columnSizeMap[i];
        size2 = Math.max(size2, height2);
      }
      return size2;
    }
  }]);
  return PositionCache2;
}();
var _class$1, _temp$1;
function ownKeys$3(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$3(source, true).forEach(function(key) {
        _defineProperty$h(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$3(source).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var emptyObject = {};
var DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;
var Masonry = (_temp$1 = _class$1 = /* @__PURE__ */ function(_React$PureComponent) {
  _inherits(Masonry2, _React$PureComponent);
  function Masonry2() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck(this, Masonry2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Masonry2)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _defineProperty$h(_assertThisInitialized(_this), "state", {
      isScrolling: false,
      scrollTop: 0
    });
    _defineProperty$h(_assertThisInitialized(_this), "_debounceResetIsScrollingId", void 0);
    _defineProperty$h(_assertThisInitialized(_this), "_invalidateOnUpdateStartIndex", null);
    _defineProperty$h(_assertThisInitialized(_this), "_invalidateOnUpdateStopIndex", null);
    _defineProperty$h(_assertThisInitialized(_this), "_positionCache", new PositionCache());
    _defineProperty$h(_assertThisInitialized(_this), "_startIndex", null);
    _defineProperty$h(_assertThisInitialized(_this), "_startIndexMemoized", null);
    _defineProperty$h(_assertThisInitialized(_this), "_stopIndex", null);
    _defineProperty$h(_assertThisInitialized(_this), "_stopIndexMemoized", null);
    _defineProperty$h(_assertThisInitialized(_this), "_debounceResetIsScrollingCallback", function() {
      _this.setState({
        isScrolling: false
      });
    });
    _defineProperty$h(_assertThisInitialized(_this), "_setScrollingContainerRef", function(ref) {
      _this._scrollingContainer = ref;
    });
    _defineProperty$h(_assertThisInitialized(_this), "_onScroll", function(event) {
      var height2 = _this.props.height;
      var eventScrollTop = event.currentTarget.scrollTop;
      var scrollTop = Math.min(Math.max(0, _this._getEstimatedTotalHeight() - height2), eventScrollTop);
      if (eventScrollTop !== scrollTop) {
        return;
      }
      _this._debounceResetIsScrolling();
      if (_this.state.scrollTop !== scrollTop) {
        _this.setState({
          isScrolling: true,
          scrollTop
        });
      }
    });
    return _this;
  }
  _createClass(Masonry2, [{
    key: "clearCellPositions",
    value: function clearCellPositions() {
      this._positionCache = new PositionCache();
      this.forceUpdate();
    }
  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender(_ref) {
      var index2 = _ref.rowIndex;
      if (this._invalidateOnUpdateStartIndex === null) {
        this._invalidateOnUpdateStartIndex = index2;
        this._invalidateOnUpdateStopIndex = index2;
      } else {
        this._invalidateOnUpdateStartIndex = Math.min(this._invalidateOnUpdateStartIndex, index2);
        this._invalidateOnUpdateStopIndex = Math.max(this._invalidateOnUpdateStopIndex, index2);
      }
    }
  }, {
    key: "recomputeCellPositions",
    value: function recomputeCellPositions() {
      var stopIndex = this._positionCache.count - 1;
      this._positionCache = new PositionCache();
      this._populatePositionCache(0, stopIndex);
      this.forceUpdate();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._checkInvalidateOnUpdate();
      this._invokeOnScrollCallback();
      this._invokeOnCellsRenderedCallback();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      this._checkInvalidateOnUpdate();
      this._invokeOnScrollCallback();
      this._invokeOnCellsRenderedCallback();
      if (this.props.scrollTop !== prevProps.scrollTop) {
        this._debounceResetIsScrolling();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._debounceResetIsScrollingId) {
        cancelAnimationTimeout(this._debounceResetIsScrollingId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props, autoHeight = _this$props.autoHeight, cellCount = _this$props.cellCount, cellMeasurerCache = _this$props.cellMeasurerCache, cellRenderer = _this$props.cellRenderer, className = _this$props.className, height2 = _this$props.height, id2 = _this$props.id, keyMapper = _this$props.keyMapper, overscanByPixels = _this$props.overscanByPixels, role = _this$props.role, style = _this$props.style, tabIndex = _this$props.tabIndex, width2 = _this$props.width, rowDirection = _this$props.rowDirection;
      var _this$state = this.state, isScrolling = _this$state.isScrolling, scrollTop = _this$state.scrollTop;
      var children = [];
      var estimateTotalHeight = this._getEstimatedTotalHeight();
      var shortestColumnSize = this._positionCache.shortestColumnSize;
      var measuredCellCount = this._positionCache.count;
      var startIndex = 0;
      var stopIndex;
      this._positionCache.range(Math.max(0, scrollTop - overscanByPixels), height2 + overscanByPixels * 2, function(index2, left, top) {
        var _style;
        if (typeof stopIndex === "undefined") {
          startIndex = index2;
          stopIndex = index2;
        } else {
          startIndex = Math.min(startIndex, index2);
          stopIndex = Math.max(stopIndex, index2);
        }
        children.push(cellRenderer({
          index: index2,
          isScrolling,
          key: keyMapper(index2),
          parent: _this2,
          style: (_style = {
            height: cellMeasurerCache.getHeight(index2)
          }, _defineProperty$h(_style, rowDirection === "ltr" ? "left" : "right", left), _defineProperty$h(_style, "position", "absolute"), _defineProperty$h(_style, "top", top), _defineProperty$h(_style, "width", cellMeasurerCache.getWidth(index2)), _style)
        }));
      });
      if (shortestColumnSize < scrollTop + height2 + overscanByPixels && measuredCellCount < cellCount) {
        var batchSize = Math.min(cellCount - measuredCellCount, Math.ceil((scrollTop + height2 + overscanByPixels - shortestColumnSize) / cellMeasurerCache.defaultHeight * width2 / cellMeasurerCache.defaultWidth));
        for (var _index = measuredCellCount; _index < measuredCellCount + batchSize; _index++) {
          stopIndex = _index;
          children.push(cellRenderer({
            index: _index,
            isScrolling,
            key: keyMapper(_index),
            parent: this,
            style: {
              width: cellMeasurerCache.getWidth(_index)
            }
          }));
        }
      }
      this._startIndex = startIndex;
      this._stopIndex = stopIndex;
      return React.createElement("div", {
        ref: this._setScrollingContainerRef,
        "aria-label": this.props["aria-label"],
        className: clsx("ReactVirtualized__Masonry", className),
        id: id2,
        onScroll: this._onScroll,
        role,
        style: _objectSpread$3({
          boxSizing: "border-box",
          direction: "ltr",
          height: autoHeight ? "auto" : height2,
          overflowX: "hidden",
          overflowY: estimateTotalHeight < height2 ? "hidden" : "auto",
          position: "relative",
          width: width2,
          WebkitOverflowScrolling: "touch",
          willChange: "transform"
        }, style),
        tabIndex
      }, React.createElement("div", {
        className: "ReactVirtualized__Masonry__innerScrollContainer",
        style: {
          width: "100%",
          height: estimateTotalHeight,
          maxWidth: "100%",
          maxHeight: estimateTotalHeight,
          overflow: "hidden",
          pointerEvents: isScrolling ? "none" : "",
          position: "relative"
        }
      }, children));
    }
  }, {
    key: "_checkInvalidateOnUpdate",
    value: function _checkInvalidateOnUpdate() {
      if (typeof this._invalidateOnUpdateStartIndex === "number") {
        var startIndex = this._invalidateOnUpdateStartIndex;
        var stopIndex = this._invalidateOnUpdateStopIndex;
        this._invalidateOnUpdateStartIndex = null;
        this._invalidateOnUpdateStopIndex = null;
        this._populatePositionCache(startIndex, stopIndex);
        this.forceUpdate();
      }
    }
  }, {
    key: "_debounceResetIsScrolling",
    value: function _debounceResetIsScrolling() {
      var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;
      if (this._debounceResetIsScrollingId) {
        cancelAnimationTimeout(this._debounceResetIsScrollingId);
      }
      this._debounceResetIsScrollingId = requestAnimationTimeout(this._debounceResetIsScrollingCallback, scrollingResetTimeInterval);
    }
  }, {
    key: "_getEstimatedTotalHeight",
    value: function _getEstimatedTotalHeight() {
      var _this$props2 = this.props, cellCount = _this$props2.cellCount, cellMeasurerCache = _this$props2.cellMeasurerCache, width2 = _this$props2.width;
      var estimatedColumnCount = Math.max(1, Math.floor(width2 / cellMeasurerCache.defaultWidth));
      return this._positionCache.estimateTotalHeight(cellCount, estimatedColumnCount, cellMeasurerCache.defaultHeight);
    }
  }, {
    key: "_invokeOnScrollCallback",
    value: function _invokeOnScrollCallback() {
      var _this$props3 = this.props, height2 = _this$props3.height, onScroll6 = _this$props3.onScroll;
      var scrollTop = this.state.scrollTop;
      if (this._onScrollMemoized !== scrollTop) {
        onScroll6({
          clientHeight: height2,
          scrollHeight: this._getEstimatedTotalHeight(),
          scrollTop
        });
        this._onScrollMemoized = scrollTop;
      }
    }
  }, {
    key: "_invokeOnCellsRenderedCallback",
    value: function _invokeOnCellsRenderedCallback() {
      if (this._startIndexMemoized !== this._startIndex || this._stopIndexMemoized !== this._stopIndex) {
        var onCellsRendered = this.props.onCellsRendered;
        onCellsRendered({
          startIndex: this._startIndex,
          stopIndex: this._stopIndex
        });
        this._startIndexMemoized = this._startIndex;
        this._stopIndexMemoized = this._stopIndex;
      }
    }
  }, {
    key: "_populatePositionCache",
    value: function _populatePositionCache(startIndex, stopIndex) {
      var _this$props4 = this.props, cellMeasurerCache = _this$props4.cellMeasurerCache, cellPositioner = _this$props4.cellPositioner;
      for (var _index2 = startIndex; _index2 <= stopIndex; _index2++) {
        var _cellPositioner = cellPositioner(_index2), left = _cellPositioner.left, top = _cellPositioner.top;
        this._positionCache.setPosition(_index2, left, top, cellMeasurerCache.getHeight(_index2));
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.scrollTop !== void 0 && prevState.scrollTop !== nextProps.scrollTop) {
        return {
          isScrolling: true,
          scrollTop: nextProps.scrollTop
        };
      }
      return null;
    }
  }]);
  return Masonry2;
}(React.PureComponent), _defineProperty$h(_class$1, "propTypes", null), _temp$1);
_defineProperty$h(Masonry, "defaultProps", {
  autoHeight: false,
  keyMapper: identity$1,
  onCellsRendered: noop,
  onScroll: noop,
  overscanByPixels: 20,
  role: "grid",
  scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
  style: emptyObject,
  tabIndex: 0,
  rowDirection: "ltr"
});
function identity$1(value) {
  return value;
}
function noop() {
}
polyfill(Masonry);
var CellMeasurerCacheDecorator = /* @__PURE__ */ function() {
  function CellMeasurerCacheDecorator2() {
    var _this = this;
    var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _classCallCheck(this, CellMeasurerCacheDecorator2);
    _defineProperty$h(this, "_cellMeasurerCache", void 0);
    _defineProperty$h(this, "_columnIndexOffset", void 0);
    _defineProperty$h(this, "_rowIndexOffset", void 0);
    _defineProperty$h(this, "columnWidth", function(_ref) {
      var index2 = _ref.index;
      _this._cellMeasurerCache.columnWidth({
        index: index2 + _this._columnIndexOffset
      });
    });
    _defineProperty$h(this, "rowHeight", function(_ref2) {
      var index2 = _ref2.index;
      _this._cellMeasurerCache.rowHeight({
        index: index2 + _this._rowIndexOffset
      });
    });
    var cellMeasurerCache = params.cellMeasurerCache, _params$columnIndexOf = params.columnIndexOffset, columnIndexOffset = _params$columnIndexOf === void 0 ? 0 : _params$columnIndexOf, _params$rowIndexOffse = params.rowIndexOffset, rowIndexOffset = _params$rowIndexOffse === void 0 ? 0 : _params$rowIndexOffse;
    this._cellMeasurerCache = cellMeasurerCache;
    this._columnIndexOffset = columnIndexOffset;
    this._rowIndexOffset = rowIndexOffset;
  }
  _createClass(CellMeasurerCacheDecorator2, [{
    key: "clear",
    value: function clear(rowIndex, columnIndex) {
      this._cellMeasurerCache.clear(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      this._cellMeasurerCache.clearAll();
    }
  }, {
    key: "hasFixedHeight",
    value: function hasFixedHeight() {
      return this._cellMeasurerCache.hasFixedHeight();
    }
  }, {
    key: "hasFixedWidth",
    value: function hasFixedWidth() {
      return this._cellMeasurerCache.hasFixedWidth();
    }
  }, {
    key: "getHeight",
    value: function getHeight(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return this._cellMeasurerCache.getHeight(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: "getWidth",
    value: function getWidth(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return this._cellMeasurerCache.getWidth(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: "has",
    value: function has(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return this._cellMeasurerCache.has(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: "set",
    value: function set(rowIndex, columnIndex, width2, height2) {
      this._cellMeasurerCache.set(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset, width2, height2);
    }
  }, {
    key: "defaultHeight",
    get: function get4() {
      return this._cellMeasurerCache.defaultHeight;
    }
  }, {
    key: "defaultWidth",
    get: function get4() {
      return this._cellMeasurerCache.defaultWidth;
    }
  }]);
  return CellMeasurerCacheDecorator2;
}();
function ownKeys$2(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$2(source, true).forEach(function(key) {
        _defineProperty$h(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$2(source).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var SCROLLBAR_SIZE_BUFFER = 20;
var MultiGrid = /* @__PURE__ */ function(_React$PureComponent) {
  _inherits(MultiGrid2, _React$PureComponent);
  function MultiGrid2(props, context) {
    var _this;
    _classCallCheck(this, MultiGrid2);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(MultiGrid2).call(this, props, context));
    _defineProperty$h(_assertThisInitialized(_this), "state", {
      scrollLeft: 0,
      scrollTop: 0,
      scrollbarSize: 0,
      showHorizontalScrollbar: false,
      showVerticalScrollbar: false
    });
    _defineProperty$h(_assertThisInitialized(_this), "_deferredInvalidateColumnIndex", null);
    _defineProperty$h(_assertThisInitialized(_this), "_deferredInvalidateRowIndex", null);
    _defineProperty$h(_assertThisInitialized(_this), "_bottomLeftGridRef", function(ref) {
      _this._bottomLeftGrid = ref;
    });
    _defineProperty$h(_assertThisInitialized(_this), "_bottomRightGridRef", function(ref) {
      _this._bottomRightGrid = ref;
    });
    _defineProperty$h(_assertThisInitialized(_this), "_cellRendererBottomLeftGrid", function(_ref) {
      var rowIndex = _ref.rowIndex, rest = _objectWithoutProperties(_ref, ["rowIndex"]);
      var _this$props = _this.props, cellRenderer = _this$props.cellRenderer, fixedRowCount = _this$props.fixedRowCount, rowCount = _this$props.rowCount;
      if (rowIndex === rowCount - fixedRowCount) {
        return React.createElement("div", {
          key: rest.key,
          style: _objectSpread$2({}, rest.style, {
            height: SCROLLBAR_SIZE_BUFFER
          })
        });
      } else {
        return cellRenderer(_objectSpread$2({}, rest, {
          parent: _assertThisInitialized(_this),
          rowIndex: rowIndex + fixedRowCount
        }));
      }
    });
    _defineProperty$h(_assertThisInitialized(_this), "_cellRendererBottomRightGrid", function(_ref2) {
      var columnIndex = _ref2.columnIndex, rowIndex = _ref2.rowIndex, rest = _objectWithoutProperties(_ref2, ["columnIndex", "rowIndex"]);
      var _this$props2 = _this.props, cellRenderer = _this$props2.cellRenderer, fixedColumnCount = _this$props2.fixedColumnCount, fixedRowCount = _this$props2.fixedRowCount;
      return cellRenderer(_objectSpread$2({}, rest, {
        columnIndex: columnIndex + fixedColumnCount,
        parent: _assertThisInitialized(_this),
        rowIndex: rowIndex + fixedRowCount
      }));
    });
    _defineProperty$h(_assertThisInitialized(_this), "_cellRendererTopRightGrid", function(_ref3) {
      var columnIndex = _ref3.columnIndex, rest = _objectWithoutProperties(_ref3, ["columnIndex"]);
      var _this$props3 = _this.props, cellRenderer = _this$props3.cellRenderer, columnCount = _this$props3.columnCount, fixedColumnCount = _this$props3.fixedColumnCount;
      if (columnIndex === columnCount - fixedColumnCount) {
        return React.createElement("div", {
          key: rest.key,
          style: _objectSpread$2({}, rest.style, {
            width: SCROLLBAR_SIZE_BUFFER
          })
        });
      } else {
        return cellRenderer(_objectSpread$2({}, rest, {
          columnIndex: columnIndex + fixedColumnCount,
          parent: _assertThisInitialized(_this)
        }));
      }
    });
    _defineProperty$h(_assertThisInitialized(_this), "_columnWidthRightGrid", function(_ref4) {
      var index2 = _ref4.index;
      var _this$props4 = _this.props, columnCount = _this$props4.columnCount, fixedColumnCount = _this$props4.fixedColumnCount, columnWidth = _this$props4.columnWidth;
      var _this$state = _this.state, scrollbarSize2 = _this$state.scrollbarSize, showHorizontalScrollbar = _this$state.showHorizontalScrollbar;
      if (showHorizontalScrollbar && index2 === columnCount - fixedColumnCount) {
        return scrollbarSize2;
      }
      return typeof columnWidth === "function" ? columnWidth({
        index: index2 + fixedColumnCount
      }) : columnWidth;
    });
    _defineProperty$h(_assertThisInitialized(_this), "_onScroll", function(scrollInfo) {
      var scrollLeft = scrollInfo.scrollLeft, scrollTop = scrollInfo.scrollTop;
      _this.setState({
        scrollLeft,
        scrollTop
      });
      var onScroll6 = _this.props.onScroll;
      if (onScroll6) {
        onScroll6(scrollInfo);
      }
    });
    _defineProperty$h(_assertThisInitialized(_this), "_onScrollbarPresenceChange", function(_ref5) {
      var horizontal = _ref5.horizontal, size2 = _ref5.size, vertical = _ref5.vertical;
      var _this$state2 = _this.state, showHorizontalScrollbar = _this$state2.showHorizontalScrollbar, showVerticalScrollbar = _this$state2.showVerticalScrollbar;
      if (horizontal !== showHorizontalScrollbar || vertical !== showVerticalScrollbar) {
        _this.setState({
          scrollbarSize: size2,
          showHorizontalScrollbar: horizontal,
          showVerticalScrollbar: vertical
        });
        var onScrollbarPresenceChange2 = _this.props.onScrollbarPresenceChange;
        if (typeof onScrollbarPresenceChange2 === "function") {
          onScrollbarPresenceChange2({
            horizontal,
            size: size2,
            vertical
          });
        }
      }
    });
    _defineProperty$h(_assertThisInitialized(_this), "_onScrollLeft", function(scrollInfo) {
      var scrollLeft = scrollInfo.scrollLeft;
      _this._onScroll({
        scrollLeft,
        scrollTop: _this.state.scrollTop
      });
    });
    _defineProperty$h(_assertThisInitialized(_this), "_onScrollTop", function(scrollInfo) {
      var scrollTop = scrollInfo.scrollTop;
      _this._onScroll({
        scrollTop,
        scrollLeft: _this.state.scrollLeft
      });
    });
    _defineProperty$h(_assertThisInitialized(_this), "_rowHeightBottomGrid", function(_ref6) {
      var index2 = _ref6.index;
      var _this$props5 = _this.props, fixedRowCount = _this$props5.fixedRowCount, rowCount = _this$props5.rowCount, rowHeight = _this$props5.rowHeight;
      var _this$state3 = _this.state, scrollbarSize2 = _this$state3.scrollbarSize, showVerticalScrollbar = _this$state3.showVerticalScrollbar;
      if (showVerticalScrollbar && index2 === rowCount - fixedRowCount) {
        return scrollbarSize2;
      }
      return typeof rowHeight === "function" ? rowHeight({
        index: index2 + fixedRowCount
      }) : rowHeight;
    });
    _defineProperty$h(_assertThisInitialized(_this), "_topLeftGridRef", function(ref) {
      _this._topLeftGrid = ref;
    });
    _defineProperty$h(_assertThisInitialized(_this), "_topRightGridRef", function(ref) {
      _this._topRightGrid = ref;
    });
    var deferredMeasurementCache = props.deferredMeasurementCache, _fixedColumnCount = props.fixedColumnCount, _fixedRowCount = props.fixedRowCount;
    _this._maybeCalculateCachedStyles(true);
    if (deferredMeasurementCache) {
      _this._deferredMeasurementCacheBottomLeftGrid = _fixedRowCount > 0 ? new CellMeasurerCacheDecorator({
        cellMeasurerCache: deferredMeasurementCache,
        columnIndexOffset: 0,
        rowIndexOffset: _fixedRowCount
      }) : deferredMeasurementCache;
      _this._deferredMeasurementCacheBottomRightGrid = _fixedColumnCount > 0 || _fixedRowCount > 0 ? new CellMeasurerCacheDecorator({
        cellMeasurerCache: deferredMeasurementCache,
        columnIndexOffset: _fixedColumnCount,
        rowIndexOffset: _fixedRowCount
      }) : deferredMeasurementCache;
      _this._deferredMeasurementCacheTopRightGrid = _fixedColumnCount > 0 ? new CellMeasurerCacheDecorator({
        cellMeasurerCache: deferredMeasurementCache,
        columnIndexOffset: _fixedColumnCount,
        rowIndexOffset: 0
      }) : deferredMeasurementCache;
    }
    return _this;
  }
  _createClass(MultiGrid2, [{
    key: "forceUpdateGrids",
    value: function forceUpdateGrids() {
      this._bottomLeftGrid && this._bottomLeftGrid.forceUpdate();
      this._bottomRightGrid && this._bottomRightGrid.forceUpdate();
      this._topLeftGrid && this._topLeftGrid.forceUpdate();
      this._topRightGrid && this._topRightGrid.forceUpdate();
    }
  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender() {
      var _ref7 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref7$columnIndex = _ref7.columnIndex, columnIndex = _ref7$columnIndex === void 0 ? 0 : _ref7$columnIndex, _ref7$rowIndex = _ref7.rowIndex, rowIndex = _ref7$rowIndex === void 0 ? 0 : _ref7$rowIndex;
      this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === "number" ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
      this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === "number" ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
    }
  }, {
    key: "measureAllCells",
    value: function measureAllCells() {
      this._bottomLeftGrid && this._bottomLeftGrid.measureAllCells();
      this._bottomRightGrid && this._bottomRightGrid.measureAllCells();
      this._topLeftGrid && this._topLeftGrid.measureAllCells();
      this._topRightGrid && this._topRightGrid.measureAllCells();
    }
  }, {
    key: "recomputeGridSize",
    value: function recomputeGridSize() {
      var _ref8 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref8$columnIndex = _ref8.columnIndex, columnIndex = _ref8$columnIndex === void 0 ? 0 : _ref8$columnIndex, _ref8$rowIndex = _ref8.rowIndex, rowIndex = _ref8$rowIndex === void 0 ? 0 : _ref8$rowIndex;
      var _this$props6 = this.props, fixedColumnCount = _this$props6.fixedColumnCount, fixedRowCount = _this$props6.fixedRowCount;
      var adjustedColumnIndex = Math.max(0, columnIndex - fixedColumnCount);
      var adjustedRowIndex = Math.max(0, rowIndex - fixedRowCount);
      this._bottomLeftGrid && this._bottomLeftGrid.recomputeGridSize({
        columnIndex,
        rowIndex: adjustedRowIndex
      });
      this._bottomRightGrid && this._bottomRightGrid.recomputeGridSize({
        columnIndex: adjustedColumnIndex,
        rowIndex: adjustedRowIndex
      });
      this._topLeftGrid && this._topLeftGrid.recomputeGridSize({
        columnIndex,
        rowIndex
      });
      this._topRightGrid && this._topRightGrid.recomputeGridSize({
        columnIndex: adjustedColumnIndex,
        rowIndex
      });
      this._leftGridWidth = null;
      this._topGridHeight = null;
      this._maybeCalculateCachedStyles(true);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props7 = this.props, scrollLeft = _this$props7.scrollLeft, scrollTop = _this$props7.scrollTop;
      if (scrollLeft > 0 || scrollTop > 0) {
        var newState = {};
        if (scrollLeft > 0) {
          newState.scrollLeft = scrollLeft;
        }
        if (scrollTop > 0) {
          newState.scrollTop = scrollTop;
        }
        this.setState(newState);
      }
      this._handleInvalidatedGridSize();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._handleInvalidatedGridSize();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props8 = this.props, onScroll6 = _this$props8.onScroll, onSectionRendered3 = _this$props8.onSectionRendered;
      _this$props8.onScrollbarPresenceChange;
      _this$props8.scrollLeft;
      var scrollToColumn = _this$props8.scrollToColumn;
      _this$props8.scrollTop;
      var scrollToRow = _this$props8.scrollToRow, rest = _objectWithoutProperties(_this$props8, ["onScroll", "onSectionRendered", "onScrollbarPresenceChange", "scrollLeft", "scrollToColumn", "scrollTop", "scrollToRow"]);
      this._prepareForRender();
      if (this.props.width === 0 || this.props.height === 0) {
        return null;
      }
      var _this$state4 = this.state, scrollLeft = _this$state4.scrollLeft, scrollTop = _this$state4.scrollTop;
      return React.createElement("div", {
        style: this._containerOuterStyle
      }, React.createElement("div", {
        style: this._containerTopStyle
      }, this._renderTopLeftGrid(rest), this._renderTopRightGrid(_objectSpread$2({}, rest, {
        onScroll: onScroll6,
        scrollLeft
      }))), React.createElement("div", {
        style: this._containerBottomStyle
      }, this._renderBottomLeftGrid(_objectSpread$2({}, rest, {
        onScroll: onScroll6,
        scrollTop
      })), this._renderBottomRightGrid(_objectSpread$2({}, rest, {
        onScroll: onScroll6,
        onSectionRendered: onSectionRendered3,
        scrollLeft,
        scrollToColumn,
        scrollToRow,
        scrollTop
      }))));
    }
  }, {
    key: "_getBottomGridHeight",
    value: function _getBottomGridHeight(props) {
      var height2 = props.height;
      var topGridHeight = this._getTopGridHeight(props);
      return height2 - topGridHeight;
    }
  }, {
    key: "_getLeftGridWidth",
    value: function _getLeftGridWidth(props) {
      var fixedColumnCount = props.fixedColumnCount, columnWidth = props.columnWidth;
      if (this._leftGridWidth == null) {
        if (typeof columnWidth === "function") {
          var leftGridWidth = 0;
          for (var index2 = 0; index2 < fixedColumnCount; index2++) {
            leftGridWidth += columnWidth({
              index: index2
            });
          }
          this._leftGridWidth = leftGridWidth;
        } else {
          this._leftGridWidth = columnWidth * fixedColumnCount;
        }
      }
      return this._leftGridWidth;
    }
  }, {
    key: "_getRightGridWidth",
    value: function _getRightGridWidth(props) {
      var width2 = props.width;
      var leftGridWidth = this._getLeftGridWidth(props);
      return width2 - leftGridWidth;
    }
  }, {
    key: "_getTopGridHeight",
    value: function _getTopGridHeight(props) {
      var fixedRowCount = props.fixedRowCount, rowHeight = props.rowHeight;
      if (this._topGridHeight == null) {
        if (typeof rowHeight === "function") {
          var topGridHeight = 0;
          for (var index2 = 0; index2 < fixedRowCount; index2++) {
            topGridHeight += rowHeight({
              index: index2
            });
          }
          this._topGridHeight = topGridHeight;
        } else {
          this._topGridHeight = rowHeight * fixedRowCount;
        }
      }
      return this._topGridHeight;
    }
  }, {
    key: "_handleInvalidatedGridSize",
    value: function _handleInvalidatedGridSize() {
      if (typeof this._deferredInvalidateColumnIndex === "number") {
        var columnIndex = this._deferredInvalidateColumnIndex;
        var rowIndex = this._deferredInvalidateRowIndex;
        this._deferredInvalidateColumnIndex = null;
        this._deferredInvalidateRowIndex = null;
        this.recomputeGridSize({
          columnIndex,
          rowIndex
        });
        this.forceUpdate();
      }
    }
  }, {
    key: "_maybeCalculateCachedStyles",
    value: function _maybeCalculateCachedStyles(resetAll) {
      var _this$props9 = this.props, columnWidth = _this$props9.columnWidth, enableFixedColumnScroll = _this$props9.enableFixedColumnScroll, enableFixedRowScroll = _this$props9.enableFixedRowScroll, height2 = _this$props9.height, fixedColumnCount = _this$props9.fixedColumnCount, fixedRowCount = _this$props9.fixedRowCount, rowHeight = _this$props9.rowHeight, style = _this$props9.style, styleBottomLeftGrid = _this$props9.styleBottomLeftGrid, styleBottomRightGrid = _this$props9.styleBottomRightGrid, styleTopLeftGrid = _this$props9.styleTopLeftGrid, styleTopRightGrid = _this$props9.styleTopRightGrid, width2 = _this$props9.width;
      var sizeChange = resetAll || height2 !== this._lastRenderedHeight || width2 !== this._lastRenderedWidth;
      var leftSizeChange = resetAll || columnWidth !== this._lastRenderedColumnWidth || fixedColumnCount !== this._lastRenderedFixedColumnCount;
      var topSizeChange = resetAll || fixedRowCount !== this._lastRenderedFixedRowCount || rowHeight !== this._lastRenderedRowHeight;
      if (resetAll || sizeChange || style !== this._lastRenderedStyle) {
        this._containerOuterStyle = _objectSpread$2({
          height: height2,
          overflow: "visible",
          width: width2
        }, style);
      }
      if (resetAll || sizeChange || topSizeChange) {
        this._containerTopStyle = {
          height: this._getTopGridHeight(this.props),
          position: "relative",
          width: width2
        };
        this._containerBottomStyle = {
          height: height2 - this._getTopGridHeight(this.props),
          overflow: "visible",
          position: "relative",
          width: width2
        };
      }
      if (resetAll || styleBottomLeftGrid !== this._lastRenderedStyleBottomLeftGrid) {
        this._bottomLeftGridStyle = _objectSpread$2({
          left: 0,
          overflowX: "hidden",
          overflowY: enableFixedColumnScroll ? "auto" : "hidden",
          position: "absolute"
        }, styleBottomLeftGrid);
      }
      if (resetAll || leftSizeChange || styleBottomRightGrid !== this._lastRenderedStyleBottomRightGrid) {
        this._bottomRightGridStyle = _objectSpread$2({
          left: this._getLeftGridWidth(this.props),
          position: "absolute"
        }, styleBottomRightGrid);
      }
      if (resetAll || styleTopLeftGrid !== this._lastRenderedStyleTopLeftGrid) {
        this._topLeftGridStyle = _objectSpread$2({
          left: 0,
          overflowX: "hidden",
          overflowY: "hidden",
          position: "absolute",
          top: 0
        }, styleTopLeftGrid);
      }
      if (resetAll || leftSizeChange || styleTopRightGrid !== this._lastRenderedStyleTopRightGrid) {
        this._topRightGridStyle = _objectSpread$2({
          left: this._getLeftGridWidth(this.props),
          overflowX: enableFixedRowScroll ? "auto" : "hidden",
          overflowY: "hidden",
          position: "absolute",
          top: 0
        }, styleTopRightGrid);
      }
      this._lastRenderedColumnWidth = columnWidth;
      this._lastRenderedFixedColumnCount = fixedColumnCount;
      this._lastRenderedFixedRowCount = fixedRowCount;
      this._lastRenderedHeight = height2;
      this._lastRenderedRowHeight = rowHeight;
      this._lastRenderedStyle = style;
      this._lastRenderedStyleBottomLeftGrid = styleBottomLeftGrid;
      this._lastRenderedStyleBottomRightGrid = styleBottomRightGrid;
      this._lastRenderedStyleTopLeftGrid = styleTopLeftGrid;
      this._lastRenderedStyleTopRightGrid = styleTopRightGrid;
      this._lastRenderedWidth = width2;
    }
  }, {
    key: "_prepareForRender",
    value: function _prepareForRender() {
      if (this._lastRenderedColumnWidth !== this.props.columnWidth || this._lastRenderedFixedColumnCount !== this.props.fixedColumnCount) {
        this._leftGridWidth = null;
      }
      if (this._lastRenderedFixedRowCount !== this.props.fixedRowCount || this._lastRenderedRowHeight !== this.props.rowHeight) {
        this._topGridHeight = null;
      }
      this._maybeCalculateCachedStyles();
      this._lastRenderedColumnWidth = this.props.columnWidth;
      this._lastRenderedFixedColumnCount = this.props.fixedColumnCount;
      this._lastRenderedFixedRowCount = this.props.fixedRowCount;
      this._lastRenderedRowHeight = this.props.rowHeight;
    }
  }, {
    key: "_renderBottomLeftGrid",
    value: function _renderBottomLeftGrid(props) {
      var enableFixedColumnScroll = props.enableFixedColumnScroll, fixedColumnCount = props.fixedColumnCount, fixedRowCount = props.fixedRowCount, rowCount = props.rowCount, hideBottomLeftGridScrollbar = props.hideBottomLeftGridScrollbar;
      var showVerticalScrollbar = this.state.showVerticalScrollbar;
      if (!fixedColumnCount) {
        return null;
      }
      var additionalRowCount = showVerticalScrollbar ? 1 : 0, height2 = this._getBottomGridHeight(props), width2 = this._getLeftGridWidth(props), scrollbarSize2 = this.state.showVerticalScrollbar ? this.state.scrollbarSize : 0, gridWidth = hideBottomLeftGridScrollbar ? width2 + scrollbarSize2 : width2;
      var bottomLeftGrid = React.createElement(Grid, _extends({}, props, {
        cellRenderer: this._cellRendererBottomLeftGrid,
        className: this.props.classNameBottomLeftGrid,
        columnCount: fixedColumnCount,
        deferredMeasurementCache: this._deferredMeasurementCacheBottomLeftGrid,
        height: height2,
        onScroll: enableFixedColumnScroll ? this._onScrollTop : void 0,
        ref: this._bottomLeftGridRef,
        rowCount: Math.max(0, rowCount - fixedRowCount) + additionalRowCount,
        rowHeight: this._rowHeightBottomGrid,
        style: this._bottomLeftGridStyle,
        tabIndex: null,
        width: gridWidth
      }));
      if (hideBottomLeftGridScrollbar) {
        return React.createElement("div", {
          className: "BottomLeftGrid_ScrollWrapper",
          style: _objectSpread$2({}, this._bottomLeftGridStyle, {
            height: height2,
            width: width2,
            overflowY: "hidden"
          })
        }, bottomLeftGrid);
      }
      return bottomLeftGrid;
    }
  }, {
    key: "_renderBottomRightGrid",
    value: function _renderBottomRightGrid(props) {
      var columnCount = props.columnCount, fixedColumnCount = props.fixedColumnCount, fixedRowCount = props.fixedRowCount, rowCount = props.rowCount, scrollToColumn = props.scrollToColumn, scrollToRow = props.scrollToRow;
      return React.createElement(Grid, _extends({}, props, {
        cellRenderer: this._cellRendererBottomRightGrid,
        className: this.props.classNameBottomRightGrid,
        columnCount: Math.max(0, columnCount - fixedColumnCount),
        columnWidth: this._columnWidthRightGrid,
        deferredMeasurementCache: this._deferredMeasurementCacheBottomRightGrid,
        height: this._getBottomGridHeight(props),
        onScroll: this._onScroll,
        onScrollbarPresenceChange: this._onScrollbarPresenceChange,
        ref: this._bottomRightGridRef,
        rowCount: Math.max(0, rowCount - fixedRowCount),
        rowHeight: this._rowHeightBottomGrid,
        scrollToColumn: scrollToColumn - fixedColumnCount,
        scrollToRow: scrollToRow - fixedRowCount,
        style: this._bottomRightGridStyle,
        width: this._getRightGridWidth(props)
      }));
    }
  }, {
    key: "_renderTopLeftGrid",
    value: function _renderTopLeftGrid(props) {
      var fixedColumnCount = props.fixedColumnCount, fixedRowCount = props.fixedRowCount;
      if (!fixedColumnCount || !fixedRowCount) {
        return null;
      }
      return React.createElement(Grid, _extends({}, props, {
        className: this.props.classNameTopLeftGrid,
        columnCount: fixedColumnCount,
        height: this._getTopGridHeight(props),
        ref: this._topLeftGridRef,
        rowCount: fixedRowCount,
        style: this._topLeftGridStyle,
        tabIndex: null,
        width: this._getLeftGridWidth(props)
      }));
    }
  }, {
    key: "_renderTopRightGrid",
    value: function _renderTopRightGrid(props) {
      var columnCount = props.columnCount, enableFixedRowScroll = props.enableFixedRowScroll, fixedColumnCount = props.fixedColumnCount, fixedRowCount = props.fixedRowCount, scrollLeft = props.scrollLeft, hideTopRightGridScrollbar = props.hideTopRightGridScrollbar;
      var _this$state5 = this.state, showHorizontalScrollbar = _this$state5.showHorizontalScrollbar, scrollbarSize2 = _this$state5.scrollbarSize;
      if (!fixedRowCount) {
        return null;
      }
      var additionalColumnCount = showHorizontalScrollbar ? 1 : 0, height2 = this._getTopGridHeight(props), width2 = this._getRightGridWidth(props), additionalHeight = showHorizontalScrollbar ? scrollbarSize2 : 0;
      var gridHeight = height2, style = this._topRightGridStyle;
      if (hideTopRightGridScrollbar) {
        gridHeight = height2 + additionalHeight;
        style = _objectSpread$2({}, this._topRightGridStyle, {
          left: 0
        });
      }
      var topRightGrid = React.createElement(Grid, _extends({}, props, {
        cellRenderer: this._cellRendererTopRightGrid,
        className: this.props.classNameTopRightGrid,
        columnCount: Math.max(0, columnCount - fixedColumnCount) + additionalColumnCount,
        columnWidth: this._columnWidthRightGrid,
        deferredMeasurementCache: this._deferredMeasurementCacheTopRightGrid,
        height: gridHeight,
        onScroll: enableFixedRowScroll ? this._onScrollLeft : void 0,
        ref: this._topRightGridRef,
        rowCount: fixedRowCount,
        scrollLeft,
        style,
        tabIndex: null,
        width: width2
      }));
      if (hideTopRightGridScrollbar) {
        return React.createElement("div", {
          className: "TopRightGrid_ScrollWrapper",
          style: _objectSpread$2({}, this._topRightGridStyle, {
            height: height2,
            width: width2,
            overflowX: "hidden"
          })
        }, topRightGrid);
      }
      return topRightGrid;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.scrollLeft !== prevState.scrollLeft || nextProps.scrollTop !== prevState.scrollTop) {
        return {
          scrollLeft: nextProps.scrollLeft != null && nextProps.scrollLeft >= 0 ? nextProps.scrollLeft : prevState.scrollLeft,
          scrollTop: nextProps.scrollTop != null && nextProps.scrollTop >= 0 ? nextProps.scrollTop : prevState.scrollTop
        };
      }
      return null;
    }
  }]);
  return MultiGrid2;
}(React.PureComponent);
_defineProperty$h(MultiGrid, "defaultProps", {
  classNameBottomLeftGrid: "",
  classNameBottomRightGrid: "",
  classNameTopLeftGrid: "",
  classNameTopRightGrid: "",
  enableFixedColumnScroll: false,
  enableFixedRowScroll: false,
  fixedColumnCount: 0,
  fixedRowCount: 0,
  scrollToColumn: -1,
  scrollToRow: -1,
  style: {},
  styleBottomLeftGrid: {},
  styleBottomRightGrid: {},
  styleTopLeftGrid: {},
  styleTopRightGrid: {},
  hideTopRightGridScrollbar: false,
  hideBottomLeftGridScrollbar: false
});
MultiGrid.propTypes = {};
polyfill(MultiGrid);
function defaultCellDataGetter(_ref) {
  var dataKey = _ref.dataKey, rowData = _ref.rowData;
  if (typeof rowData.get === "function") {
    return rowData.get(dataKey);
  } else {
    return rowData[dataKey];
  }
}
function defaultCellRenderer(_ref) {
  var cellData = _ref.cellData;
  if (cellData == null) {
    return "";
  } else {
    return String(cellData);
  }
}
function defaultHeaderRowRenderer(_ref) {
  var className = _ref.className, columns = _ref.columns, style = _ref.style;
  return React.createElement("div", {
    className,
    role: "row",
    style
  }, columns);
}
defaultHeaderRowRenderer.propTypes = null;
var SortDirection = {
  ASC: "ASC",
  DESC: "DESC"
};
function SortIndicator(_ref) {
  var sortDirection = _ref.sortDirection;
  var classNames = clsx("ReactVirtualized__Table__sortableHeaderIcon", {
    "ReactVirtualized__Table__sortableHeaderIcon--ASC": sortDirection === SortDirection.ASC,
    "ReactVirtualized__Table__sortableHeaderIcon--DESC": sortDirection === SortDirection.DESC
  });
  return React.createElement("svg", {
    className: classNames,
    width: 18,
    height: 18,
    viewBox: "0 0 24 24"
  }, sortDirection === SortDirection.ASC ? React.createElement("path", {
    d: "M7 14l5-5 5 5z"
  }) : React.createElement("path", {
    d: "M7 10l5 5 5-5z"
  }), React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
}
SortIndicator.propTypes = {};
function defaultHeaderRenderer(_ref) {
  var dataKey = _ref.dataKey, label = _ref.label, sortBy = _ref.sortBy, sortDirection = _ref.sortDirection;
  var showSortIndicator = sortBy === dataKey;
  var children = [React.createElement("span", {
    className: "ReactVirtualized__Table__headerTruncatedText",
    key: "label",
    title: typeof label === "string" ? label : null
  }, label)];
  if (showSortIndicator) {
    children.push(React.createElement(SortIndicator, {
      key: "SortIndicator",
      sortDirection
    }));
  }
  return children;
}
defaultHeaderRenderer.propTypes = null;
function defaultRowRenderer(_ref) {
  var className = _ref.className, columns = _ref.columns, index2 = _ref.index, key = _ref.key, onRowClick = _ref.onRowClick, onRowDoubleClick = _ref.onRowDoubleClick, onRowMouseOut = _ref.onRowMouseOut, onRowMouseOver = _ref.onRowMouseOver, onRowRightClick = _ref.onRowRightClick, rowData = _ref.rowData, style = _ref.style;
  var a11yProps = {
    "aria-rowindex": index2 + 1
  };
  if (onRowClick || onRowDoubleClick || onRowMouseOut || onRowMouseOver || onRowRightClick) {
    a11yProps["aria-label"] = "row";
    a11yProps.tabIndex = 0;
    if (onRowClick) {
      a11yProps.onClick = function(event) {
        return onRowClick({
          event,
          index: index2,
          rowData
        });
      };
    }
    if (onRowDoubleClick) {
      a11yProps.onDoubleClick = function(event) {
        return onRowDoubleClick({
          event,
          index: index2,
          rowData
        });
      };
    }
    if (onRowMouseOut) {
      a11yProps.onMouseOut = function(event) {
        return onRowMouseOut({
          event,
          index: index2,
          rowData
        });
      };
    }
    if (onRowMouseOver) {
      a11yProps.onMouseOver = function(event) {
        return onRowMouseOver({
          event,
          index: index2,
          rowData
        });
      };
    }
    if (onRowRightClick) {
      a11yProps.onContextMenu = function(event) {
        return onRowRightClick({
          event,
          index: index2,
          rowData
        });
      };
    }
  }
  return React.createElement("div", _extends({}, a11yProps, {
    className,
    key,
    role: "row",
    style
  }), columns);
}
defaultRowRenderer.propTypes = null;
var Column = /* @__PURE__ */ function(_React$Component) {
  _inherits(Column2, _React$Component);
  function Column2() {
    _classCallCheck(this, Column2);
    return _possibleConstructorReturn(this, _getPrototypeOf(Column2).apply(this, arguments));
  }
  return Column2;
}(React.Component);
_defineProperty$h(Column, "defaultProps", {
  cellDataGetter: defaultCellDataGetter,
  cellRenderer: defaultCellRenderer,
  defaultSortDirection: SortDirection.ASC,
  flexGrow: 0,
  flexShrink: 1,
  headerRenderer: defaultHeaderRenderer,
  style: {}
});
Column.propTypes = {};
function ownKeys$1(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$1(source, true).forEach(function(key) {
        _defineProperty$h(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(source).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var Table = /* @__PURE__ */ function(_React$PureComponent) {
  _inherits(Table2, _React$PureComponent);
  function Table2(props) {
    var _this;
    _classCallCheck(this, Table2);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Table2).call(this, props));
    _this.state = {
      scrollbarWidth: 0
    };
    _this._createColumn = _this._createColumn.bind(_assertThisInitialized(_this));
    _this._createRow = _this._createRow.bind(_assertThisInitialized(_this));
    _this._onScroll = _this._onScroll.bind(_assertThisInitialized(_this));
    _this._onSectionRendered = _this._onSectionRendered.bind(_assertThisInitialized(_this));
    _this._setRef = _this._setRef.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Table2, [{
    key: "forceUpdateGrid",
    value: function forceUpdateGrid() {
      if (this.Grid) {
        this.Grid.forceUpdate();
      }
    }
  }, {
    key: "getOffsetForRow",
    value: function getOffsetForRow(_ref) {
      var alignment = _ref.alignment, index2 = _ref.index;
      if (this.Grid) {
        var _this$Grid$getOffsetF = this.Grid.getOffsetForCell({
          alignment,
          rowIndex: index2
        }), scrollTop = _this$Grid$getOffsetF.scrollTop;
        return scrollTop;
      }
      return 0;
    }
  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender(_ref2) {
      var columnIndex = _ref2.columnIndex, rowIndex = _ref2.rowIndex;
      if (this.Grid) {
        this.Grid.invalidateCellSizeAfterRender({
          rowIndex,
          columnIndex
        });
      }
    }
  }, {
    key: "measureAllRows",
    value: function measureAllRows() {
      if (this.Grid) {
        this.Grid.measureAllCells();
      }
    }
  }, {
    key: "recomputeGridSize",
    value: function recomputeGridSize() {
      var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref3$columnIndex = _ref3.columnIndex, columnIndex = _ref3$columnIndex === void 0 ? 0 : _ref3$columnIndex, _ref3$rowIndex = _ref3.rowIndex, rowIndex = _ref3$rowIndex === void 0 ? 0 : _ref3$rowIndex;
      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex,
          columnIndex
        });
      }
    }
  }, {
    key: "recomputeRowHeights",
    value: function recomputeRowHeights() {
      var index2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: index2
        });
      }
    }
  }, {
    key: "scrollToPosition",
    value: function scrollToPosition() {
      var scrollTop = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      if (this.Grid) {
        this.Grid.scrollToPosition({
          scrollTop
        });
      }
    }
  }, {
    key: "scrollToRow",
    value: function scrollToRow() {
      var index2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      if (this.Grid) {
        this.Grid.scrollToCell({
          columnIndex: 0,
          rowIndex: index2
        });
      }
    }
  }, {
    key: "getScrollbarWidth",
    value: function getScrollbarWidth() {
      if (this.Grid) {
        var _Grid = reactDom.exports.findDOMNode(this.Grid);
        var clientWidth = _Grid.clientWidth || 0;
        var offsetWidth = _Grid.offsetWidth || 0;
        return offsetWidth - clientWidth;
      }
      return 0;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._setScrollbarWidth();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._setScrollbarWidth();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props, children = _this$props.children, className = _this$props.className, disableHeader = _this$props.disableHeader, gridClassName = _this$props.gridClassName, gridStyle = _this$props.gridStyle, headerHeight = _this$props.headerHeight, headerRowRenderer = _this$props.headerRowRenderer, height2 = _this$props.height, id2 = _this$props.id, noRowsRenderer3 = _this$props.noRowsRenderer, rowClassName = _this$props.rowClassName, rowStyle = _this$props.rowStyle, scrollToIndex = _this$props.scrollToIndex, style = _this$props.style, width2 = _this$props.width;
      var scrollbarWidth = this.state.scrollbarWidth;
      var availableRowsHeight = disableHeader ? height2 : height2 - headerHeight;
      var rowClass = typeof rowClassName === "function" ? rowClassName({
        index: -1
      }) : rowClassName;
      var rowStyleObject = typeof rowStyle === "function" ? rowStyle({
        index: -1
      }) : rowStyle;
      this._cachedColumnStyles = [];
      React.Children.toArray(children).forEach(function(column, index2) {
        var flexStyles = _this2._getFlexStyleForColumn(column, column.props.style);
        _this2._cachedColumnStyles[index2] = _objectSpread$1({
          overflow: "hidden"
        }, flexStyles);
      });
      return React.createElement("div", {
        "aria-label": this.props["aria-label"],
        "aria-labelledby": this.props["aria-labelledby"],
        "aria-colcount": React.Children.toArray(children).length,
        "aria-rowcount": this.props.rowCount,
        className: clsx("ReactVirtualized__Table", className),
        id: id2,
        role: "grid",
        style
      }, !disableHeader && headerRowRenderer({
        className: clsx("ReactVirtualized__Table__headerRow", rowClass),
        columns: this._getHeaderColumns(),
        style: _objectSpread$1({
          height: headerHeight,
          overflow: "hidden",
          paddingRight: scrollbarWidth,
          width: width2
        }, rowStyleObject)
      }), React.createElement(Grid, _extends({}, this.props, {
        "aria-readonly": null,
        autoContainerWidth: true,
        className: clsx("ReactVirtualized__Table__Grid", gridClassName),
        cellRenderer: this._createRow,
        columnWidth: width2,
        columnCount: 1,
        height: availableRowsHeight,
        id: void 0,
        noContentRenderer: noRowsRenderer3,
        onScroll: this._onScroll,
        onSectionRendered: this._onSectionRendered,
        ref: this._setRef,
        role: "rowgroup",
        scrollbarWidth,
        scrollToRow: scrollToIndex,
        style: _objectSpread$1({}, gridStyle, {
          overflowX: "hidden"
        })
      })));
    }
  }, {
    key: "_createColumn",
    value: function _createColumn(_ref4) {
      var column = _ref4.column, columnIndex = _ref4.columnIndex, isScrolling = _ref4.isScrolling, parent2 = _ref4.parent, rowData = _ref4.rowData, rowIndex = _ref4.rowIndex;
      var onColumnClick = this.props.onColumnClick;
      var _column$props = column.props, cellDataGetter = _column$props.cellDataGetter, cellRenderer = _column$props.cellRenderer, className = _column$props.className, columnData = _column$props.columnData, dataKey = _column$props.dataKey, id2 = _column$props.id;
      var cellData = cellDataGetter({
        columnData,
        dataKey,
        rowData
      });
      var renderedCell = cellRenderer({
        cellData,
        columnData,
        columnIndex,
        dataKey,
        isScrolling,
        parent: parent2,
        rowData,
        rowIndex
      });
      var onClick = function onClick2(event) {
        onColumnClick && onColumnClick({
          columnData,
          dataKey,
          event
        });
      };
      var style = this._cachedColumnStyles[columnIndex];
      var title = typeof renderedCell === "string" ? renderedCell : null;
      return React.createElement("div", {
        "aria-colindex": columnIndex + 1,
        "aria-describedby": id2,
        className: clsx("ReactVirtualized__Table__rowColumn", className),
        key: "Row" + rowIndex + "-Col" + columnIndex,
        onClick,
        role: "gridcell",
        style,
        title
      }, renderedCell);
    }
  }, {
    key: "_createHeader",
    value: function _createHeader(_ref5) {
      var column = _ref5.column, index2 = _ref5.index;
      var _this$props2 = this.props, headerClassName = _this$props2.headerClassName, headerStyle = _this$props2.headerStyle, onHeaderClick = _this$props2.onHeaderClick, sort = _this$props2.sort, sortBy = _this$props2.sortBy, sortDirection = _this$props2.sortDirection;
      var _column$props2 = column.props, columnData = _column$props2.columnData, dataKey = _column$props2.dataKey, defaultSortDirection = _column$props2.defaultSortDirection, disableSort = _column$props2.disableSort, headerRenderer = _column$props2.headerRenderer, id2 = _column$props2.id, label = _column$props2.label;
      var sortEnabled = !disableSort && sort;
      var classNames = clsx("ReactVirtualized__Table__headerColumn", headerClassName, column.props.headerClassName, {
        ReactVirtualized__Table__sortableHeaderColumn: sortEnabled
      });
      var style = this._getFlexStyleForColumn(column, _objectSpread$1({}, headerStyle, {}, column.props.headerStyle));
      var renderedHeader = headerRenderer({
        columnData,
        dataKey,
        disableSort,
        label,
        sortBy,
        sortDirection
      });
      var headerOnClick, headerOnKeyDown, headerTabIndex, headerAriaSort, headerAriaLabel;
      if (sortEnabled || onHeaderClick) {
        var isFirstTimeSort = sortBy !== dataKey;
        var newSortDirection = isFirstTimeSort ? defaultSortDirection : sortDirection === SortDirection.DESC ? SortDirection.ASC : SortDirection.DESC;
        var onClick = function onClick2(event) {
          sortEnabled && sort({
            defaultSortDirection,
            event,
            sortBy: dataKey,
            sortDirection: newSortDirection
          });
          onHeaderClick && onHeaderClick({
            columnData,
            dataKey,
            event
          });
        };
        var onKeyDown = function onKeyDown2(event) {
          if (event.key === "Enter" || event.key === " ") {
            onClick(event);
          }
        };
        headerAriaLabel = column.props["aria-label"] || label || dataKey;
        headerAriaSort = "none";
        headerTabIndex = 0;
        headerOnClick = onClick;
        headerOnKeyDown = onKeyDown;
      }
      if (sortBy === dataKey) {
        headerAriaSort = sortDirection === SortDirection.ASC ? "ascending" : "descending";
      }
      return React.createElement("div", {
        "aria-label": headerAriaLabel,
        "aria-sort": headerAriaSort,
        className: classNames,
        id: id2,
        key: "Header-Col" + index2,
        onClick: headerOnClick,
        onKeyDown: headerOnKeyDown,
        role: "columnheader",
        style,
        tabIndex: headerTabIndex
      }, renderedHeader);
    }
  }, {
    key: "_createRow",
    value: function _createRow(_ref6) {
      var _this3 = this;
      var index2 = _ref6.rowIndex, isScrolling = _ref6.isScrolling, key = _ref6.key, parent2 = _ref6.parent, style = _ref6.style;
      var _this$props3 = this.props, children = _this$props3.children, onRowClick = _this$props3.onRowClick, onRowDoubleClick = _this$props3.onRowDoubleClick, onRowRightClick = _this$props3.onRowRightClick, onRowMouseOver = _this$props3.onRowMouseOver, onRowMouseOut = _this$props3.onRowMouseOut, rowClassName = _this$props3.rowClassName, rowGetter = _this$props3.rowGetter, rowRenderer = _this$props3.rowRenderer, rowStyle = _this$props3.rowStyle;
      var scrollbarWidth = this.state.scrollbarWidth;
      var rowClass = typeof rowClassName === "function" ? rowClassName({
        index: index2
      }) : rowClassName;
      var rowStyleObject = typeof rowStyle === "function" ? rowStyle({
        index: index2
      }) : rowStyle;
      var rowData = rowGetter({
        index: index2
      });
      var columns = React.Children.toArray(children).map(function(column, columnIndex) {
        return _this3._createColumn({
          column,
          columnIndex,
          isScrolling,
          parent: parent2,
          rowData,
          rowIndex: index2,
          scrollbarWidth
        });
      });
      var className = clsx("ReactVirtualized__Table__row", rowClass);
      var flattenedStyle = _objectSpread$1({}, style, {
        height: this._getRowHeight(index2),
        overflow: "hidden",
        paddingRight: scrollbarWidth
      }, rowStyleObject);
      return rowRenderer({
        className,
        columns,
        index: index2,
        isScrolling,
        key,
        onRowClick,
        onRowDoubleClick,
        onRowRightClick,
        onRowMouseOver,
        onRowMouseOut,
        rowData,
        style: flattenedStyle
      });
    }
  }, {
    key: "_getFlexStyleForColumn",
    value: function _getFlexStyleForColumn(column) {
      var customStyle = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var flexValue = "".concat(column.props.flexGrow, " ").concat(column.props.flexShrink, " ").concat(column.props.width, "px");
      var style = _objectSpread$1({}, customStyle, {
        flex: flexValue,
        msFlex: flexValue,
        WebkitFlex: flexValue
      });
      if (column.props.maxWidth) {
        style.maxWidth = column.props.maxWidth;
      }
      if (column.props.minWidth) {
        style.minWidth = column.props.minWidth;
      }
      return style;
    }
  }, {
    key: "_getHeaderColumns",
    value: function _getHeaderColumns() {
      var _this4 = this;
      var _this$props4 = this.props, children = _this$props4.children, disableHeader = _this$props4.disableHeader;
      var items2 = disableHeader ? [] : React.Children.toArray(children);
      return items2.map(function(column, index2) {
        return _this4._createHeader({
          column,
          index: index2
        });
      });
    }
  }, {
    key: "_getRowHeight",
    value: function _getRowHeight(rowIndex) {
      var rowHeight = this.props.rowHeight;
      return typeof rowHeight === "function" ? rowHeight({
        index: rowIndex
      }) : rowHeight;
    }
  }, {
    key: "_onScroll",
    value: function _onScroll(_ref7) {
      var clientHeight = _ref7.clientHeight, scrollHeight = _ref7.scrollHeight, scrollTop = _ref7.scrollTop;
      var onScroll6 = this.props.onScroll;
      onScroll6({
        clientHeight,
        scrollHeight,
        scrollTop
      });
    }
  }, {
    key: "_onSectionRendered",
    value: function _onSectionRendered(_ref8) {
      var rowOverscanStartIndex = _ref8.rowOverscanStartIndex, rowOverscanStopIndex = _ref8.rowOverscanStopIndex, rowStartIndex = _ref8.rowStartIndex, rowStopIndex = _ref8.rowStopIndex;
      var onRowsRendered3 = this.props.onRowsRendered;
      onRowsRendered3({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    }
  }, {
    key: "_setRef",
    value: function _setRef(ref) {
      this.Grid = ref;
    }
  }, {
    key: "_setScrollbarWidth",
    value: function _setScrollbarWidth() {
      var scrollbarWidth = this.getScrollbarWidth();
      this.setState({
        scrollbarWidth
      });
    }
  }]);
  return Table2;
}(React.PureComponent);
_defineProperty$h(Table, "defaultProps", {
  disableHeader: false,
  estimatedRowSize: 30,
  headerHeight: 0,
  headerStyle: {},
  noRowsRenderer: function noRowsRenderer2() {
    return null;
  },
  onRowsRendered: function onRowsRendered2() {
    return null;
  },
  onScroll: function onScroll4() {
    return null;
  },
  overscanIndicesGetter: defaultOverscanIndicesGetter,
  overscanRowCount: 10,
  rowRenderer: defaultRowRenderer,
  headerRowRenderer: defaultHeaderRowRenderer,
  rowStyle: {},
  scrollToAlignment: "auto",
  scrollToIndex: -1,
  style: {}
});
Table.propTypes = {};
var mountedInstances = [];
var originalBodyPointerEvents = null;
var disablePointerEventsTimeoutId = null;
function enablePointerEventsIfDisabled() {
  if (disablePointerEventsTimeoutId) {
    disablePointerEventsTimeoutId = null;
    if (document.body && originalBodyPointerEvents != null) {
      document.body.style.pointerEvents = originalBodyPointerEvents;
    }
    originalBodyPointerEvents = null;
  }
}
function enablePointerEventsAfterDelayCallback() {
  enablePointerEventsIfDisabled();
  mountedInstances.forEach(function(instance) {
    return instance.__resetIsScrolling();
  });
}
function enablePointerEventsAfterDelay() {
  if (disablePointerEventsTimeoutId) {
    cancelAnimationTimeout(disablePointerEventsTimeoutId);
  }
  var maximumTimeout = 0;
  mountedInstances.forEach(function(instance) {
    maximumTimeout = Math.max(maximumTimeout, instance.props.scrollingResetTimeInterval);
  });
  disablePointerEventsTimeoutId = requestAnimationTimeout(enablePointerEventsAfterDelayCallback, maximumTimeout);
}
function onScrollWindow(event) {
  if (event.currentTarget === window && originalBodyPointerEvents == null && document.body) {
    originalBodyPointerEvents = document.body.style.pointerEvents;
    document.body.style.pointerEvents = "none";
  }
  enablePointerEventsAfterDelay();
  mountedInstances.forEach(function(instance) {
    if (instance.props.scrollElement === event.currentTarget) {
      instance.__handleWindowScrollEvent();
    }
  });
}
function registerScrollListener(component, element) {
  if (!mountedInstances.some(function(instance) {
    return instance.props.scrollElement === element;
  })) {
    element.addEventListener("scroll", onScrollWindow);
  }
  mountedInstances.push(component);
}
function unregisterScrollListener(component, element) {
  mountedInstances = mountedInstances.filter(function(instance) {
    return instance !== component;
  });
  if (!mountedInstances.length) {
    element.removeEventListener("scroll", onScrollWindow);
    if (disablePointerEventsTimeoutId) {
      cancelAnimationTimeout(disablePointerEventsTimeoutId);
      enablePointerEventsIfDisabled();
    }
  }
}
var isWindow = function isWindow2(element) {
  return element === window;
};
var getBoundingBox = function getBoundingBox2(element) {
  return element.getBoundingClientRect();
};
function getDimensions(scrollElement, props) {
  if (!scrollElement) {
    return {
      height: props.serverHeight,
      width: props.serverWidth
    };
  } else if (isWindow(scrollElement)) {
    var _window = window, innerHeight = _window.innerHeight, innerWidth = _window.innerWidth;
    return {
      height: typeof innerHeight === "number" ? innerHeight : 0,
      width: typeof innerWidth === "number" ? innerWidth : 0
    };
  } else {
    return getBoundingBox(scrollElement);
  }
}
function getPositionOffset(element, container) {
  if (isWindow(container) && document.documentElement) {
    var containerElement = document.documentElement;
    var elementRect = getBoundingBox(element);
    var containerRect = getBoundingBox(containerElement);
    return {
      top: elementRect.top - containerRect.top,
      left: elementRect.left - containerRect.left
    };
  } else {
    var scrollOffset = getScrollOffset(container);
    var _elementRect = getBoundingBox(element);
    var _containerRect = getBoundingBox(container);
    return {
      top: _elementRect.top + scrollOffset.top - _containerRect.top,
      left: _elementRect.left + scrollOffset.left - _containerRect.left
    };
  }
}
function getScrollOffset(element) {
  if (isWindow(element) && document.documentElement) {
    return {
      top: "scrollY" in window ? window.scrollY : document.documentElement.scrollTop,
      left: "scrollX" in window ? window.scrollX : document.documentElement.scrollLeft
    };
  } else {
    return {
      top: element.scrollTop,
      left: element.scrollLeft
    };
  }
}
var _class, _temp;
function ownKeys(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        _defineProperty$h(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var IS_SCROLLING_TIMEOUT = 150;
var getWindow = function getWindow2() {
  return typeof window !== "undefined" ? window : void 0;
};
var WindowScroller = (_temp = _class = /* @__PURE__ */ function(_React$PureComponent) {
  _inherits(WindowScroller2, _React$PureComponent);
  function WindowScroller2() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck(this, WindowScroller2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WindowScroller2)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _defineProperty$h(_assertThisInitialized(_this), "_window", getWindow());
    _defineProperty$h(_assertThisInitialized(_this), "_isMounted", false);
    _defineProperty$h(_assertThisInitialized(_this), "_positionFromTop", 0);
    _defineProperty$h(_assertThisInitialized(_this), "_positionFromLeft", 0);
    _defineProperty$h(_assertThisInitialized(_this), "_detectElementResize", void 0);
    _defineProperty$h(_assertThisInitialized(_this), "_child", void 0);
    _defineProperty$h(_assertThisInitialized(_this), "state", _objectSpread({}, getDimensions(_this.props.scrollElement, _this.props), {
      isScrolling: false,
      scrollLeft: 0,
      scrollTop: 0
    }));
    _defineProperty$h(_assertThisInitialized(_this), "_registerChild", function(element) {
      if (element && !(element instanceof Element)) {
        console.warn("WindowScroller registerChild expects to be passed Element or null");
      }
      _this._child = element;
      _this.updatePosition();
    });
    _defineProperty$h(_assertThisInitialized(_this), "_onChildScroll", function(_ref) {
      var scrollTop = _ref.scrollTop;
      if (_this.state.scrollTop === scrollTop) {
        return;
      }
      var scrollElement = _this.props.scrollElement;
      if (scrollElement) {
        if (typeof scrollElement.scrollTo === "function") {
          scrollElement.scrollTo(0, scrollTop + _this._positionFromTop);
        } else {
          scrollElement.scrollTop = scrollTop + _this._positionFromTop;
        }
      }
    });
    _defineProperty$h(_assertThisInitialized(_this), "_registerResizeListener", function(element) {
      if (element === window) {
        window.addEventListener("resize", _this._onResize, false);
      } else {
        _this._detectElementResize.addResizeListener(element, _this._onResize);
      }
    });
    _defineProperty$h(_assertThisInitialized(_this), "_unregisterResizeListener", function(element) {
      if (element === window) {
        window.removeEventListener("resize", _this._onResize, false);
      } else if (element) {
        _this._detectElementResize.removeResizeListener(element, _this._onResize);
      }
    });
    _defineProperty$h(_assertThisInitialized(_this), "_onResize", function() {
      _this.updatePosition();
    });
    _defineProperty$h(_assertThisInitialized(_this), "__handleWindowScrollEvent", function() {
      if (!_this._isMounted) {
        return;
      }
      var onScroll6 = _this.props.onScroll;
      var scrollElement = _this.props.scrollElement;
      if (scrollElement) {
        var scrollOffset = getScrollOffset(scrollElement);
        var scrollLeft = Math.max(0, scrollOffset.left - _this._positionFromLeft);
        var scrollTop = Math.max(0, scrollOffset.top - _this._positionFromTop);
        _this.setState({
          isScrolling: true,
          scrollLeft,
          scrollTop
        });
        onScroll6({
          scrollLeft,
          scrollTop
        });
      }
    });
    _defineProperty$h(_assertThisInitialized(_this), "__resetIsScrolling", function() {
      _this.setState({
        isScrolling: false
      });
    });
    return _this;
  }
  _createClass(WindowScroller2, [{
    key: "updatePosition",
    value: function updatePosition() {
      var scrollElement = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props.scrollElement;
      var onResize3 = this.props.onResize;
      var _this$state = this.state, height2 = _this$state.height, width2 = _this$state.width;
      var thisNode = this._child || reactDom.exports.findDOMNode(this);
      if (thisNode instanceof Element && scrollElement) {
        var offset = getPositionOffset(thisNode, scrollElement);
        this._positionFromTop = offset.top;
        this._positionFromLeft = offset.left;
      }
      var dimensions = getDimensions(scrollElement, this.props);
      if (height2 !== dimensions.height || width2 !== dimensions.width) {
        this.setState({
          height: dimensions.height,
          width: dimensions.width
        });
        onResize3({
          height: dimensions.height,
          width: dimensions.width
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var scrollElement = this.props.scrollElement;
      this._detectElementResize = createDetectElementResize();
      this.updatePosition(scrollElement);
      if (scrollElement) {
        registerScrollListener(this, scrollElement);
        this._registerResizeListener(scrollElement);
      }
      this._isMounted = true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var scrollElement = this.props.scrollElement;
      var prevScrollElement = prevProps.scrollElement;
      if (prevScrollElement !== scrollElement && prevScrollElement != null && scrollElement != null) {
        this.updatePosition(scrollElement);
        unregisterScrollListener(this, prevScrollElement);
        registerScrollListener(this, scrollElement);
        this._unregisterResizeListener(prevScrollElement);
        this._registerResizeListener(scrollElement);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var scrollElement = this.props.scrollElement;
      if (scrollElement) {
        unregisterScrollListener(this, scrollElement);
        this._unregisterResizeListener(scrollElement);
      }
      this._isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var _this$state2 = this.state, isScrolling = _this$state2.isScrolling, scrollTop = _this$state2.scrollTop, scrollLeft = _this$state2.scrollLeft, height2 = _this$state2.height, width2 = _this$state2.width;
      return children({
        onChildScroll: this._onChildScroll,
        registerChild: this._registerChild,
        height: height2,
        isScrolling,
        scrollLeft,
        scrollTop,
        width: width2
      });
    }
  }]);
  return WindowScroller2;
}(React.PureComponent), _defineProperty$h(_class, "propTypes", null), _temp);
_defineProperty$h(WindowScroller, "defaultProps", {
  onResize: function onResize2() {
  },
  onScroll: function onScroll5() {
  },
  scrollingResetTimeInterval: IS_SCROLLING_TIMEOUT,
  scrollElement: getWindow(),
  serverHeight: 0,
  serverWidth: 0
});
const TreeContext = createContext({});
const Indent = (props) => {
  const {
    nodeKey,
    perfixCls: perfixCls2,
    nodeIndex,
    level,
    isLeaf
  } = props;
  const {
    handleExpandItem,
    showLine
  } = useContext(TreeContext);
  const handleToggleExpand = (ev) => {
    handleExpandItem(nodeKey, nodeIndex);
    ev.stopPropagation();
  };
  const renderIndents = () => {
    const list = [];
    for (let i = 0; i <= level; i++) {
      if (!showLine && i < level) {
        list.push(/* @__PURE__ */ jsx("div", {
          className: `${perfixCls2}-indent ${perfixCls2}-indent-unit`
        }, i));
      }
      if (showLine) {
        if (i < level) {
          list.push(/* @__PURE__ */ jsx("span", {
            className: `${perfixCls2}-line`
          }, i));
        }
      }
      if (!isLeaf && i === level) {
        list.push(/* @__PURE__ */ jsx("div", {
          className: `${perfixCls2}-notleaf`,
          children: /* @__PURE__ */ jsx("span", {
            className: "foldbtn",
            onClick: handleToggleExpand,
            children: props.isExpand === true ? /* @__PURE__ */ jsx(SvgArrowDown, {}) : /* @__PURE__ */ jsx(SvgArrowDown, {
              style: {
                transform: "rotate(-90deg)"
              }
            })
          })
        }, `${i}expand`));
      }
    }
    return list;
  };
  return /* @__PURE__ */ jsx("div", {
    className: `${perfixCls2}-indent`,
    children: renderIndents()
  });
};
const TreeNode = (props) => {
  const _a = props, {
    perfixCls: perfixCls2,
    data,
    disabled,
    children,
    parent: parent2
  } = _a, restNodeProps = __objRest(_a, [
    "perfixCls",
    "data",
    "disabled",
    "children",
    "parent"
  ]);
  const {
    enableCheck,
    checkboxReadOnly,
    handleCheckNode,
    checkedKeys,
    halfCheckedKeys,
    selectedKeys,
    render,
    onRightClick = () => void 0,
    onNodeClick = () => void 0,
    onMultiSelect = () => void 0
  } = useContext(TreeContext);
  const nodePerfixCls = `${perfixCls2}-node`;
  const getCheckStatus = () => {
    if (halfCheckedKeys.includes(props.nodeKey)) {
      return CheckStatus$1.HALFCHECK;
    }
    if (checkedKeys.includes(props.nodeKey)) {
      return CheckStatus$1.CHECKED;
    }
    return CheckStatus$1.UNCHECK;
  };
  const handleNodeClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.metaKey || e.ctrlKey) {
      onMultiSelect(props == null ? void 0 : props.data);
      return;
    }
    onNodeClick(props == null ? void 0 : props.data);
  };
  const handleContextMenu = (e) => {
    onRightClick(e, props == null ? void 0 : props.data);
    e.preventDefault();
    e.stopPropagation();
    return false;
  };
  const indent = /* @__PURE__ */ jsx(Indent, __spreadValues({
    perfixCls: nodePerfixCls
  }, restNodeProps));
  const checkbox = /* @__PURE__ */ jsx(Fragment, {
    children: enableCheck && /* @__PURE__ */ jsx(CheckBox, {
      className: "tree-node-checkbox",
      checked: getCheckStatus(),
      disabled,
      readOnly: checkboxReadOnly,
      onChange: (checked) => {
        handleCheckNode({
          key: props.nodeKey,
          checked
        });
      }
    })
  });
  const nodeTitle = /* @__PURE__ */ jsx("div", {
    className: `${nodePerfixCls}-title`,
    children: props.title
  });
  return /* @__PURE__ */ jsx("div", {
    className: cn({
      [nodePerfixCls]: true,
      "tree-node-selected": selectedKeys.includes(props.nodeKey)
    }),
    onClick: handleNodeClick,
    onContextMenu: handleContextMenu,
    children: typeof render !== "function" ? /* @__PURE__ */ jsxs(Fragment, {
      children: [indent, nodeTitle, checkbox]
    }) : render(props, {
      indent,
      checkbox,
      nodeTitle
    })
  });
};
var debounce = debounce_1, isObject$1 = isObject_1;
var FUNC_ERROR_TEXT = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject$1(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
var throttle_1 = throttle;
var index$1 = "";
var CheckStatus = /* @__PURE__ */ ((CheckStatus2) => {
  CheckStatus2["UNCHECK"] = "uncheck";
  CheckStatus2["CHECKED"] = "checked";
  CheckStatus2["HALFCHECK"] = "halfcheck";
  return CheckStatus2;
})(CheckStatus || {});
var DragHover = /* @__PURE__ */ ((DragHover2) => {
  DragHover2["TOP"] = "top";
  DragHover2["INSIDE"] = "inside";
  DragHover2["BOTTOM"] = "bottom";
  return DragHover2;
})(DragHover || {});
const Card = (props) => {
  const {
    children,
    index: index2,
    beginMove = () => void 0,
    moving = () => void 0,
    moved = () => void 0
  } = props;
  const [dragHover, setDragHover] = useState(null);
  const ref = useRef(null);
  const [{
    isDragging
  }, drag, preview] = useDrag$1({
    type: "card",
    item: () => {
      beginMove(index2);
      return {
        index: index2
      };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });
  const handleHover = useCallback(throttle_1((item, monitor) => {
    var _a;
    if (!ref.current) {
      return;
    }
    const hoverBoundingRect = (_a = ref.current) == null ? void 0 : _a.getBoundingClientRect();
    const hoverHeight = hoverBoundingRect.bottom - hoverBoundingRect.top;
    const clientOffset = monitor.getClientOffset();
    let mode = null;
    if (clientOffset === null || hoverBoundingRect === null) {
      return;
    }
    if (clientOffset.y < hoverBoundingRect.y + hoverHeight / 3) {
      mode = DragHover.TOP;
    } else if (clientOffset.y >= hoverBoundingRect.y + hoverHeight / 3 && clientOffset.y < hoverBoundingRect.y + hoverHeight * (2 / 3)) {
      mode = DragHover.INSIDE;
    } else {
      mode = DragHover.BOTTOM;
    }
    setDragHover(mode);
    moving(item.index, index2, mode);
  }, 50), []);
  const [{
    canDrop,
    isOver
  }, drop] = useDrop({
    accept: "card",
    collect: (monitor) => ({
      isOver: monitor.isOver({
        shallow: true
      }),
      canDrop: monitor.canDrop()
    }),
    hover: handleHover,
    drop(item) {
      moved(item.index, index2, dragHover);
    }
  });
  const opacity = isDragging ? 0.15 : 1;
  const background = isOver && canDrop && dragHover === DragHover.INSIDE ? "#409eff" : "none";
  drag(drop(ref));
  return /* @__PURE__ */ jsxs("div", {
    ref,
    style: {
      opacity,
      background
    },
    className: cn({
      "drag-node": true
    }),
    children: [/* @__PURE__ */ jsx("div", {
      className: "drag-line"
    }), children]
  });
};
let preNodeExpandStatus = false;
const NodeList = (props, ref) => {
  const {
    perfixCls: perfixCls2,
    data,
    dataList
  } = props;
  const {
    handleExpandItem,
    handleNodeDragEnd,
    draggable,
    handleCheckAll,
    checkStatus,
    fieldNames,
    expandedKeys,
    enableVirtualList,
    scrollToIndex,
    setScrollToIndex
  } = useContext(TreeContext);
  const [listRef, setListRef] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(-1);
  const handleNodeMoveBegin = (dragIndex) => {
    const dragedItem = data[dragIndex];
    preNodeExpandStatus = dragedItem.isExpand;
    if (dragedItem.isLeaf !== true && preNodeExpandStatus) {
      handleExpandItem(dragedItem);
    }
  };
  const handleNodeMoving = (s, hIndex) => {
    if (hoverIndex !== hIndex) {
      setHoverIndex(hIndex);
    }
  };
  const handleNodeMoveEnd = (sIndex, toIndex, mode) => {
    setHoverIndex(-1);
    handleNodeDragEnd(sIndex, toIndex, mode);
  };
  const renderNodeItem = (item, nodeIndex) => /* @__PURE__ */ jsx(React__default.Fragment, {
    children: draggable ? /* @__PURE__ */ jsx(Card, {
      index: nodeIndex,
      beginMove: handleNodeMoveBegin,
      moved: handleNodeMoveEnd,
      moving: handleNodeMoving,
      children: item.show.reduce((a, b) => a && b, true) && /* @__PURE__ */ jsx(TreeNode, __spreadProps(__spreadValues({
        perfixCls: perfixCls2
      }, item), {
        nodeKey: item.key,
        nodeIndex
      }))
    }, item.key) : item.show.reduce((a, b) => a && b, true) && /* @__PURE__ */ jsx(TreeNode, __spreadProps(__spreadValues({
      perfixCls: perfixCls2
    }, item), {
      nodeKey: item.key,
      nodeIndex
    }))
  }, item.key);
  const [scrollKey, setScrollKey] = useState(null);
  useEffect(() => {
    if (scrollKey !== null) {
      const nodeIndex = data.findIndex((d) => d.key === scrollKey);
      if (nodeIndex !== -1) {
        setScrollToIndex(nodeIndex);
      }
    }
  }, [expandedKeys]);
  const handleScrollTo = (key, checkedKey = true) => {
    const treeDatas = {};
    if (dataList.length === 0) {
      return;
    }
    dataList.forEach((item) => {
      treeDatas[item[fieldNames.key]] = item;
    });
    const ckdList = [key];
    let parentNode = treeDatas[treeDatas[key][fieldNames.parent]];
    while (parentNode !== void 0) {
      ckdList.push(parentNode[fieldNames.key]);
      parentNode = treeDatas[parentNode[fieldNames.parent]];
    }
    setScrollKey(key);
    if (checkedKey === true) {
      handleExpandItem(ckdList);
    }
  };
  useImperativeHandle(ref, () => ({
    scrollTo: handleScrollTo,
    handleExpandItem,
    handleCheckAll,
    checkStatus
  }));
  const virtualRender = ({
    key,
    index: index2,
    style
  }) => /* @__PURE__ */ jsx("div", {
    style,
    children: renderNodeItem(data[index2], index2)
  }, key);
  return /* @__PURE__ */ jsx("div", {
    ref: (ref1) => {
      setListRef(ref1);
    },
    children: /* @__PURE__ */ jsx(DndProvider, {
      backend: HTML5Backend,
      children: enableVirtualList ? /* @__PURE__ */ jsx(List, {
        width,
        height,
        rowCount: data.length,
        rowHeight: 30,
        rowRenderer: virtualRender,
        overscanRowCount: 10,
        scrollToIndex
      }) : /* @__PURE__ */ jsx(Fragment, {
        children: data.map(renderNodeItem)
      })
    })
  });
};
var NodeList$1 = React__default.forwardRef(NodeList);
const useCheck = (props) => {
  const {
    onCheck,
    onCheckAll,
    dataList,
    fieldNames,
    checkboxReadOnly,
    defaultCheckedKeys = [],
    checkedKeys
  } = props;
  const [checkedNodes, setCheckedNodes] = useState(defaultCheckedKeys);
  const [halfCheckedKeys, setHalfCheckedKeys] = useState([]);
  const [checkedDatas, setCheckedDatas] = useState({});
  const mergeCheckedKeys = checkedKeys !== void 0 ? checkedKeys : checkedNodes;
  const getNodeStatus = (nodeChild) => {
    let status = CheckStatus.UNCHECK;
    let checkedCount = 0;
    let halfCount = 0;
    let nodeCount = 0;
    Object.values(nodeChild).forEach((item) => {
      nodeCount += 1;
      if (item.checked === CheckStatus.CHECKED) {
        checkedCount += 1;
      } else if (item.checked === CheckStatus.HALFCHECK) {
        halfCount += 1;
      }
    });
    if (nodeCount > 0 && nodeCount === checkedCount) {
      status = CheckStatus.CHECKED;
    } else if (nodeCount > 0 && (checkedCount > 0 && checkedCount < nodeCount || halfCount > 0)) {
      status = CheckStatus.HALFCHECK;
    } else if (nodeCount > 0 && checkedCount === 0) {
      status = CheckStatus.UNCHECK;
    }
    return status;
  };
  useEffect(() => {
    const treeDatas = dataList == null ? void 0 : dataList.reduce((a, b) => {
      const node = {};
      if (halfCheckedKeys.includes(b[fieldNames.key])) {
        node.checked = CheckStatus.HALFCHECK;
      } else if (mergeCheckedKeys.includes(b[fieldNames.key])) {
        node.checked = CheckStatus.CHECKED;
      } else {
        node.checked = CheckStatus.UNCHECK;
      }
      return __spreadProps(__spreadValues({}, a), { [b[fieldNames.key]]: node });
    }, {});
    dataList == null ? void 0 : dataList.forEach((d) => {
      const parent2 = treeDatas[d[fieldNames.parent]];
      if (parent2) {
        (parent2.children || (parent2.children = {}))[d[fieldNames.key]] = treeDatas[d[fieldNames.key]];
        treeDatas[d[fieldNames.key]].parent = parent2;
      }
    });
    const rootStatus = getNodeStatus(treeDatas);
    setCheckedDatas(treeDatas);
    onCheckAll(rootStatus);
  }, [dataList]);
  const updateChildStatus = (node, status) => {
    node.checked = status;
    const nodeChild = node.children;
    if (nodeChild !== void 0) {
      Object.values(nodeChild).forEach((item) => {
        updateChildStatus(item, status);
      });
    }
  };
  const updateParentStatus = (node) => {
    const nodeChild = node == null ? void 0 : node.children;
    if (nodeChild !== void 0) {
      node.checked = getNodeStatus(nodeChild);
    }
    (node == null ? void 0 : node.parent) !== void 0 && updateParentStatus(node.parent);
  };
  const getCheckSummary = (newDatas) => {
    const ckdList = [];
    const halfList = [];
    Object.entries(newDatas).forEach(([nodeKey, item]) => {
      if (item.checked === CheckStatus.CHECKED) {
        ckdList.push(nodeKey);
      }
      if (item.checked === CheckStatus.HALFCHECK) {
        halfList.push(nodeKey);
      }
    });
    return {
      ckdList,
      halfList
    };
  };
  const handleCheckNode = ({ key, checked }) => {
    if (checkboxReadOnly) {
      return;
    }
    const newDatas = _$1.cloneDeep(checkedDatas);
    if (checked === CheckStatus.CHECKED) {
      updateChildStatus(newDatas[key], CheckStatus.CHECKED);
    }
    if (checked === CheckStatus.UNCHECK) {
      updateChildStatus(newDatas[key], CheckStatus.UNCHECK);
    }
    updateParentStatus(newDatas[key].parent);
    const { ckdList, halfList } = getCheckSummary(newDatas);
    const rootStatus = getNodeStatus(newDatas);
    setCheckedDatas(newDatas);
    setCheckedNodes(ckdList);
    setHalfCheckedKeys(halfList);
    onCheck(ckdList);
    onCheckAll(rootStatus);
  };
  const handleCheckAll = (checkAll) => {
    if (checkboxReadOnly) {
      return;
    }
    const newDatas = _$1.cloneDeep(checkedDatas);
    if (checkAll) {
      const ckdList = [];
      Object.entries(newDatas).forEach(([nodeKey, item]) => {
        item.checked = CheckStatus.CHECKED;
        ckdList.push(nodeKey);
      });
      setCheckedDatas(newDatas);
      setCheckedNodes(ckdList);
      setHalfCheckedKeys([]);
      onCheck(ckdList);
      onCheckAll(CheckStatus.CHECKED);
    } else {
      Object.values(newDatas).forEach((item) => {
        item.checked = CheckStatus.UNCHECK;
      });
      setCheckedDatas(newDatas);
      setCheckedNodes([]);
      setHalfCheckedKeys([]);
      onCheck([]);
      onCheckAll(CheckStatus.UNCHECK);
    }
  };
  return {
    mergeCheckedKeys,
    halfCheckedKeys,
    handleCheckNode,
    handleCheckAll
  };
};
const useDrag = (props) => {
  const { flattenNodes, fieldNames, onNodeDragEnd, cachedTree } = props;
  const getTreeItem = (treeItem, keys2) => {
    const [key, ...restKeys] = keys2;
    const item = treeItem.find((d) => d[fieldNames.key] === key);
    if (item.children === void 0 || restKeys.length === 0) {
      return [treeItem, item];
    }
    return getTreeItem(item.children, restKeys);
  };
  const getParentKeys = (nodeItem) => {
    const result = [];
    const digAll = (node) => {
      if (node.parent !== null) {
        digAll(node.parent);
      }
      result.push(node.key);
    };
    digAll(nodeItem);
    return result;
  };
  const handleNodeDragEnd = (sourceIndex, targetIndex, mode) => {
    const sourceNode = flattenNodes[sourceIndex];
    const targetNode = flattenNodes[targetIndex];
    const clonedTree = _.cloneDeep(cachedTree);
    const sourceKeys = getParentKeys(sourceNode);
    const targetKeys = getParentKeys(targetNode);
    if (targetKeys.includes(sourceNode.key)) {
      return;
    }
    if (mode === "inside" && (targetNode == null ? void 0 : targetNode.target_type) !== "folder") {
      return;
    }
    const [sourceList, sourceData] = getTreeItem(clonedTree, sourceKeys);
    let [targetList, targetData] = getTreeItem(clonedTree, targetKeys);
    sourceList.forEach((item, index2) => {
      if (item[fieldNames.key] === sourceData[fieldNames.key]) {
        sourceList.splice(index2, 1);
      }
    });
    const sortIndex = targetList.reduce((a, b, index2) => b[fieldNames.key] === targetData[fieldNames.key] ? index2 : a, -1);
    if (mode === "top") {
      targetList.splice(sortIndex, 0, sourceData);
    } else if (mode === "bottom") {
      targetList.splice(sortIndex + 1, 0, sourceData);
    } else if (mode === "inside") {
      const tlist = targetData.children || [];
      const targetKey = targetData[fieldNames.key];
      const tData = _.cloneDeep(sourceData);
      tData.parent_id = targetKey;
      tlist.splice(0, 0, tData);
      targetList = tlist;
      targetData = tData;
    }
    onNodeDragEnd(sourceData, targetData, targetList);
  };
  return {
    handleNodeDragEnd
  };
};
const {
  Provider
} = TreeContext;
const perfixCls = "apipost-tree";
const Tree = (props, ref) => {
  const {
    dataList,
    showLine = false,
    draggable = false,
    enableCheck = false,
    checkboxReadOnly = false,
    isExpandAllKeys = true,
    defaultExpandKeys = void 0,
    onExpandKeysChange = () => void 0,
    defaultCheckedKeys,
    checkedKeys,
    fieldNames = {
      key: "key",
      title: "title",
      parent: "parent",
      children: "children"
    },
    onCheck = () => void 0,
    render = void 0,
    showIcon = true,
    onNodeClick = () => void 0,
    onNodeDragEnd = () => void 0,
    onRightClick = () => void 0,
    onMultiSelect = () => void 0,
    onCheckAll = () => void 0,
    onOutSideClick = () => void 0,
    selectedKeys = [],
    style,
    className,
    enableVirtualList = false,
    nodeSort = void 0
  } = props;
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [flattenNodes, setFlattenNodes] = useState([]);
  const [cachedTree, setCachedTree] = useState({});
  const [scrollToIndex, setScrollToIndex] = useState(0);
  const {
    mergeCheckedKeys,
    halfCheckedKeys,
    handleCheckNode,
    handleCheckAll
  } = useCheck({
    onCheck,
    onCheckAll,
    dataList,
    fieldNames,
    checkboxReadOnly,
    defaultCheckedKeys,
    checkedKeys
  });
  useEffect(() => {
    if (defaultExpandKeys !== void 0 && _$1.isEqual(defaultExpandKeys, expandedKeys) === false) {
      setExpandedKeys(defaultExpandKeys);
    }
  }, [defaultExpandKeys, dataList]);
  const {
    handleNodeDragEnd
  } = useDrag({
    flattenNodes,
    fieldNames,
    onNodeDragEnd,
    cachedTree
  });
  const prepareExpandKeys = (expand, datalist) => {
    const expandKeys = {};
    if (expand === true) {
      const rootNode = {};
      datalist.forEach((item) => {
        rootNode[item[fieldNames.key]] = {};
      });
      datalist.forEach((item) => {
        const parent2 = rootNode[item[fieldNames.parent]];
        if (parent2 !== void 0) {
          parent2.notLeaf = true;
        }
      });
      Object.entries(rootNode).forEach(([key, item]) => {
        if (item.notLeaf === true) {
          expandKeys[key] = true;
        }
      });
    }
    return expandKeys;
  };
  useEffect(() => {
    if (expandedKeys !== null || (dataList == null ? void 0 : dataList.length) === 0) {
      return;
    }
    const keysObj = prepareExpandKeys(isExpandAllKeys, dataList);
    setExpandedKeys(Object.keys(keysObj));
  }, [isExpandAllKeys, dataList]);
  useEffect(() => {
    if (Array.isArray(expandedKeys) === false) {
      return;
    }
    const treeData = arrayToTreeObject(dataList, fieldNames);
    const node = flattenTreeData(treeData, expandedKeys, fieldNames, nodeSort);
    setCachedTree(treeData);
    setFlattenNodes(node);
  }, [dataList]);
  const handleExpandItem = (nodeKeys, nodeIndex) => {
    let expandKeyData = {};
    if (typeof nodeKeys === "boolean") {
      expandKeyData = prepareExpandKeys(nodeKeys, dataList);
    } else {
      expandKeyData = expandedKeys.reduce((a, b) => __spreadProps(__spreadValues({}, a), {
        [b]: true
      }), {});
    }
    if (Array.isArray(nodeKeys)) {
      nodeKeys.forEach((nodeKey) => {
        expandKeyData[nodeKey] = true;
      });
    } else if (expandKeyData[nodeKeys] === void 0) {
      expandKeyData[nodeKeys] = true;
    } else {
      expandKeyData = _$1.omit(expandKeyData, nodeKeys);
    }
    const expandKeyArr = Object.keys(expandKeyData);
    setExpandedKeys(expandKeyArr);
    const nodes = flattenTreeData(cachedTree, expandKeyArr, fieldNames, nodeSort);
    setFlattenNodes(nodes);
    onExpandKeysChange(expandKeyArr);
    setScrollToIndex(nodeIndex);
  };
  const handleRightClick = (e, nodeData) => {
    const data = flattenNodes.filter((node) => selectedKeys.includes(node.key));
    if (data.length > 1) {
      onRightClick(e, data);
    } else {
      onRightClick(e, nodeData);
    }
    e.preventDefault();
    e.stopPropagation();
    return false;
  };
  const TreeNodeList = useMemo(() => /* @__PURE__ */ jsx(NodeList$1, {
    dataList,
    perfixCls,
    data: flattenNodes,
    ref
  }), [flattenNodes, dataList]);
  return /* @__PURE__ */ jsx("div", {
    style,
    className: cn({
      [perfixCls]: true,
      [className]: className !== void 0
    }),
    onClick: onOutSideClick,
    onContextMenu: handleRightClick,
    children: /* @__PURE__ */ jsx(Provider, {
      value: {
        fieldNames,
        dataList,
        showLine,
        draggable,
        handleCheckNode,
        expandedKeys,
        handleExpandItem,
        handleNodeDragEnd,
        enableCheck,
        checkboxReadOnly,
        checkedKeys: mergeCheckedKeys,
        halfCheckedKeys,
        render,
        showIcon,
        onNodeClick,
        onRightClick: handleRightClick,
        selectedKeys,
        onMultiSelect,
        handleCheckAll,
        enableVirtualList,
        scrollToIndex,
        setScrollToIndex
      },
      children: TreeNodeList
    })
  });
};
var Tree$1 = React__default.forwardRef(Tree);
function baseFindIndex$1(array, predicate, fromIndex, fromRight) {
  var length = array.length, index2 = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index2-- : ++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return index2;
    }
  }
  return -1;
}
var _baseFindIndex = baseFindIndex$1;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
var _setCacheAdd = setCacheAdd$1;
function setCacheHas$1(value) {
  return this.__data__.has(value);
}
var _setCacheHas = setCacheHas$1;
var MapCache = _MapCache, setCacheAdd = _setCacheAdd, setCacheHas = _setCacheHas;
function SetCache$1(values) {
  var index2 = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index2 < length) {
    this.add(values[index2]);
  }
}
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;
var _SetCache = SetCache$1;
function arraySome$1(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return true;
    }
  }
  return false;
}
var _arraySome = arraySome$1;
function cacheHas$1(cache, key) {
  return cache.has(key);
}
var _cacheHas = cacheHas$1;
var SetCache = _SetCache, arraySome = _arraySome, cacheHas = _cacheHas;
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index2 < arrLength) {
    var arrValue = array[index2], othValue = other[index2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
var _equalArrays = equalArrays$2;
function mapToArray$1(map) {
  var index2 = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index2] = [key, value];
  });
  return result;
}
var _mapToArray = mapToArray$1;
function setToArray$1(set) {
  var index2 = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index2] = value;
  });
  return result;
}
var _setToArray = setToArray$1;
var Symbol$1 = _Symbol, Uint8Array$1 = _Uint8Array, eq = eq_1, equalArrays$1 = _equalArrays, mapToArray = _mapToArray, setToArray = _setToArray;
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == other + "";
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object, other);
      var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var _equalByTag = equalByTag$1;
var getAllKeys = _getAllKeys;
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index2 = objLength;
  while (index2--) {
    var key = objProps[index2];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index2 < objLength) {
    key = objProps[index2];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var _equalObjects = equalObjects$1;
var Stack$1 = _Stack, equalArrays = _equalArrays, equalByTag = _equalByTag, equalObjects = _equalObjects, getTag = _getTag, isArray$1 = isArray_1, isBuffer = isBuffer$3.exports, isTypedArray = isTypedArray_1;
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$1(object), othIsArr = isArray$1(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$1());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack$1());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$1());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
var _baseIsEqualDeep = baseIsEqualDeep$1;
var baseIsEqualDeep = _baseIsEqualDeep, isObjectLike = isObjectLike_1;
function baseIsEqual$2(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$2, stack);
}
var _baseIsEqual = baseIsEqual$2;
var Stack = _Stack, baseIsEqual$1 = _baseIsEqual;
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch$1(object, source, matchData, customizer) {
  var index2 = matchData.length, length = index2, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index2--) {
    var data = matchData[index2];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index2 < length) {
    data = matchData[index2];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var _baseIsMatch = baseIsMatch$1;
var isObject = isObject_1;
function isStrictComparable$2(value) {
  return value === value && !isObject(value);
}
var _isStrictComparable = isStrictComparable$2;
var isStrictComparable$1 = _isStrictComparable, keys = keys_1;
function getMatchData$1(object) {
  var result = keys(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable$1(value)];
  }
  return result;
}
var _getMatchData = getMatchData$1;
function matchesStrictComparable$2(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
var _matchesStrictComparable = matchesStrictComparable$2;
var baseIsMatch = _baseIsMatch, getMatchData = _getMatchData, matchesStrictComparable$1 = _matchesStrictComparable;
function baseMatches$1(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}
var _baseMatches = baseMatches$1;
var baseGet$1 = _baseGet;
function get$1(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet$1(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_1 = get$1;
var baseIsEqual = _baseIsEqual, get3 = get_1, hasIn = hasIn_1, isKey$1 = _isKey, isStrictComparable = _isStrictComparable, matchesStrictComparable = _matchesStrictComparable, toKey$1 = _toKey;
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty$1(path, srcValue) {
  if (isKey$1(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey$1(path), srcValue);
  }
  return function(object) {
    var objValue = get3(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
var _baseMatchesProperty = baseMatchesProperty$1;
function baseProperty$1(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
var _baseProperty = baseProperty$1;
var baseGet = _baseGet;
function basePropertyDeep$1(path) {
  return function(object) {
    return baseGet(object, path);
  };
}
var _basePropertyDeep = basePropertyDeep$1;
var baseProperty = _baseProperty, basePropertyDeep = _basePropertyDeep, isKey = _isKey, toKey = _toKey;
function property$1(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
var property_1 = property$1;
var baseMatches = _baseMatches, baseMatchesProperty = _baseMatchesProperty, identity = identity_1, isArray = isArray_1, property = property_1;
function baseIteratee$1(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == "object") {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
var _baseIteratee = baseIteratee$1;
var toNumber = toNumber_1;
var INFINITY = 1 / 0, MAX_INTEGER = 17976931348623157e292;
function toFinite$1(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
var toFinite_1 = toFinite$1;
var toFinite = toFinite_1;
function toInteger$1(value) {
  var result = toFinite(value), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
var toInteger_1 = toInteger$1;
var baseFindIndex = _baseFindIndex, baseIteratee = _baseIteratee, toInteger = toInteger_1;
var nativeMax = Math.max;
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index2 = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index2 < 0) {
    index2 = nativeMax(length + index2, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate), index2);
}
var findIndex_1 = findIndex;
function getBody(xhr) {
  const text2 = xhr.responseText || xhr.response;
  if (!text2) {
    return text2;
  }
  try {
    return JSON.parse(text2);
  } catch (e) {
    return text2;
  }
}
const uploadRequest = function(options) {
  const {
    onError = () => void 0,
    onSuccess = () => void 0,
    action,
    headers = {},
    name: originName,
    file,
    data: originData = {},
    withCookies = false
  } = options;
  function getValue2(value) {
    if (typeof value === "function") {
      return value(file);
    }
    return value;
  }
  const name = getValue2(originName);
  const data = getValue2(originData);
  const xhr = new XMLHttpRequest();
  xhr.onerror = function error(e) {
    onError(e);
  };
  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status >= 300) {
      return onError(getBody(xhr));
    }
    onSuccess(getBody(xhr));
  };
  const formData = new FormData();
  formData.append(name || "file", file);
  if (data) {
    Object.keys(data).map((key) => formData.append(key, data[key]));
  }
  xhr.open("post", action, true);
  if (withCookies && "withCredentials" in xhr) {
    xhr.withCredentials = true;
  }
  for (const h in headers) {
    if (headers.hasOwnProperty(h) && headers[h] !== null) {
      xhr.setRequestHeader(h, headers[h]);
    }
  }
  xhr.send(formData);
  return {
    abort() {
      xhr.abort();
    }
  };
};
class Uploader extends Component {
  constructor(props) {
    super(props);
    this.inputRef = null;
    this.handleUpload = async (file) => {
      const {
        action,
        headers,
        name,
        data,
        withCookies,
        customRequest
      } = this.props;
      const onSuccess = (response) => {
        console.log(response);
      };
      const onError = (response) => {
        console.log(response);
      };
      const options = {
        onSuccess,
        onError,
        headers,
        name,
        file: file.originFile,
        data,
        withCookies
      };
      let request2;
      if (action) {
        request2 = uploadRequest(__spreadProps(__spreadValues({}, options), {
          action
        }));
      } else if (customRequest) {
        request2 = await customRequest(options);
      }
      console.log(request2);
    };
    this.hanldeFileChange = (files2) => {
      const {
        limit,
        fileList = [],
        onExceedLimit,
        autoUpload = false,
        onChange
      } = this.props;
      const {
        uploadList
      } = this.state;
      const changeFilesList = [];
      if (isNumber_1(limit) && limit < fileList.length + files2.length) {
        return onExceedLimit && onExceedLimit(files2, fileList);
      }
      files2.forEach((file, index2) => {
        const uploadItem = {
          onlyKey: v4(),
          originFile: file,
          name: file.name,
          key: v4()
        };
        if (autoUpload) {
          this.handleUpload(uploadItem);
        }
        changeFilesList.push(uploadItem);
      });
      const currentFilesList = fileList.concat(changeFilesList, uploadList);
      onChange && onChange(currentFilesList, fileList);
      this.setState({
        uploadList: currentFilesList
      });
    };
    this.delFile = (key) => {
      const {
        uploadList
      } = this.state;
      const delIndex = findIndex_1(uploadList, {
        key
      });
      console.log(delIndex);
    };
    this.state = {
      uploadRequests: {},
      uploadList: []
    };
  }
  delFileReq(uid) {
    const newValue = __spreadValues({}, this.state.uploadRequests);
    delete newValue[uid];
    this.setState({
      uploadRequests: newValue
    });
  }
  render() {
    const {
      accept,
      multiple,
      children,
      disabled,
      showFilesList = true
    } = this.props;
    const {
      uploadList
    } = this.state;
    return /* @__PURE__ */ jsxs("div", {
      className: "apipost-upload",
      children: [children ? /* @__PURE__ */ jsx("div", {
        onClick: () => {
          !disabled && this.inputRef && this.inputRef.click();
        },
        children
      }) : /* @__PURE__ */ jsx(Button, {
        type: "primary",
        className: "",
        onClick: () => {
          !disabled && this.inputRef && this.inputRef.click();
        },
        children: "\u9009\u62E9\u6587\u4EF6"
      }), /* @__PURE__ */ jsx("input", {
        style: {
          display: "none"
        },
        ref: (node) => this.inputRef = node,
        type: "file",
        accept,
        multiple,
        onChange: (e) => {
          const files2 = e.target.files;
          if (files2) {
            this.hanldeFileChange([].slice.call(files2));
            if (this.inputRef)
              this.inputRef.value = "";
          }
        }
      }), showFilesList && /* @__PURE__ */ jsxs("div", {
        children: [uploadList.map((item) => {
          return /* @__PURE__ */ jsx("div", {
            children: item.name
          }, item.key);
        }), /* @__PURE__ */ jsx("div", {})]
      })]
    });
  }
}
var index = {
  Button,
  CheckBox,
  Drawer,
  Dropdown: DropDown,
  Input: InputComponent,
  InputNumber,
  Message: message,
  Modal: ExportedModalComponent,
  Radio,
  Scale,
  Select: SelectComponent,
  Spin: SpinComponent,
  Switch,
  Table: Table$1,
  Tabs,
  Tooltip,
  Tree: Tree$1,
  Trigger,
  Upload: Uploader
};
export { index as default };
