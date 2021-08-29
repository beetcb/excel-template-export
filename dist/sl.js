(() => {
  var __defProp = Object.defineProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/@shoelace-style/shoelace/dist/components/alert/alert.js
  var alert_exports = {};
  __export(alert_exports, {
    default: () => alert_default
  });

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.IHGPZX35.js
  var __defProp2 = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a4, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a4, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a4, prop, b2[prop]);
      }
    return a4;
  };
  var __spreadProps = (a4, b2) => __defProps(a4, __getOwnPropDescs(b2));
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i5 = decorators.length - 1, decorator; i5 >= 0; i5--)
      if (decorator = decorators[i5])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp2(target, key, result);
    return result;
  };

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NVGT36PI.js
  function animateTo(el, keyframes, options) {
    return new Promise(async (resolve) => {
      if ((options == null ? void 0 : options.duration) === Infinity) {
        throw new Error("Promise-based animations must be finite.");
      }
      const animation = el.animate(keyframes, __spreadProps(__spreadValues({}, options), {
        duration: prefersReducedMotion() ? 0 : options.duration
      }));
      animation.addEventListener("cancel", resolve, { once: true });
      animation.addEventListener("finish", resolve, { once: true });
    });
  }
  function prefersReducedMotion() {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    return query == null ? void 0 : query.matches;
  }
  function stopAnimations(el) {
    return Promise.all(el.getAnimations().map((animation) => {
      return new Promise((resolve) => {
        const handleAnimationEvent = requestAnimationFrame(resolve);
        animation.addEventListener("cancel", () => handleAnimationEvent, { once: true });
        animation.addEventListener("finish", () => handleAnimationEvent, { once: true });
        animation.cancel();
      });
    }));
  }

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.EVK2ASE6.js
  var defaultAnimationRegistry = new Map();
  var customAnimationRegistry = new WeakMap();
  function ensureAnimation(animation) {
    return animation != null ? animation : { keyframes: [], options: { duration: 0 } };
  }
  function setDefaultAnimation(animationName, animation) {
    defaultAnimationRegistry.set(animationName, ensureAnimation(animation));
  }
  function getAnimation(el, animationName) {
    const customAnimation = customAnimationRegistry.get(el);
    if (customAnimation && customAnimation[animationName]) {
      return customAnimation[animationName];
    }
    const defaultAnimation = defaultAnimationRegistry.get(animationName);
    if (defaultAnimation) {
      return defaultAnimation;
    }
    return {
      keyframes: [],
      options: { duration: 0 }
    };
  }

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BD26TKS4.js
  function watch(propName, options) {
    return (protoOrDescriptor, name) => {
      const { update } = protoOrDescriptor;
      options = Object.assign({ waitUntilFirstUpdate: false }, options);
      protoOrDescriptor.update = function(changedProps) {
        if (changedProps.has(propName)) {
          const oldValue = changedProps.get(propName);
          const newValue = this[propName];
          if (oldValue !== newValue) {
            if (!(options == null ? void 0 : options.waitUntilFirstUpdate) || this.hasUpdated) {
              this[name].call(this, oldValue, newValue);
            }
          }
        }
        update.call(this, changedProps);
      };
    };
  }

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.I4TE3TJV.js
  function emit(el, name, options) {
    const event = new CustomEvent(name, Object.assign({
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: {}
    }, options));
    el.dispatchEvent(event);
    return event;
  }
  function waitForEvent(el, eventName) {
    return new Promise((resolve) => {
      function done(event) {
        if (event.target === el) {
          el.removeEventListener(eventName, done);
          resolve();
        }
      }
      el.addEventListener(eventName, done);
    });
  }

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2JQPDYNA.js
  var t = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
  var e = (t24) => (...e24) => ({ _$litDirective$: t24, values: e24 });
  var i = class {
    constructor(t24) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t24, e24, i23) {
      this._$Ct = t24, this._$AM = e24, this._$Ci = i23;
    }
    _$AS(t24, e24) {
      return this.update(t24, e24);
    }
    update(t24, e24) {
      return this.render(...e24);
    }
  };

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4HZWYGDJ.js
  var t2 = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var e2 = Symbol();
  var s = class {
    constructor(t32, s5) {
      if (s5 !== e2)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t32;
    }
    get styleSheet() {
      return t2 && this.t === void 0 && (this.t = new CSSStyleSheet(), this.t.replaceSync(this.cssText)), this.t;
    }
    toString() {
      return this.cssText;
    }
  };
  var n = new Map();
  var o = (t32) => {
    let o52 = n.get(t32);
    return o52 === void 0 && n.set(t32, o52 = new s(t32, e2)), o52;
  };
  var r = (t32) => o(typeof t32 == "string" ? t32 : t32 + "");
  var i2 = (t32, ...e42) => {
    const n52 = t32.length === 1 ? t32[0] : e42.reduce((e5, n6, o52) => e5 + ((t4) => {
      if (t4 instanceof s)
        return t4.cssText;
      if (typeof t4 == "number")
        return t4;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(n6) + t32[o52 + 1], t32[0]);
    return o(n52);
  };
  var S = (e42, s5) => {
    t2 ? e42.adoptedStyleSheets = s5.map((t32) => t32 instanceof CSSStyleSheet ? t32 : t32.styleSheet) : s5.forEach((t32) => {
      const s6 = document.createElement("style");
      s6.textContent = t32.cssText, e42.appendChild(s6);
    });
  };
  var u = t2 ? (t32) => t32 : (t32) => t32 instanceof CSSStyleSheet ? ((t4) => {
    let e42 = "";
    for (const s5 of t4.cssRules)
      e42 += s5.cssText;
    return r(e42);
  })(t32) : t32;
  var s2;
  var e22;
  var h;
  var r2;
  var o2 = { toAttribute(t32, i42) {
    switch (i42) {
      case Boolean:
        t32 = t32 ? "" : null;
        break;
      case Object:
      case Array:
        t32 = t32 == null ? t32 : JSON.stringify(t32);
    }
    return t32;
  }, fromAttribute(t32, i42) {
    let s5 = t32;
    switch (i42) {
      case Boolean:
        s5 = t32 !== null;
        break;
      case Number:
        s5 = t32 === null ? null : Number(t32);
        break;
      case Object:
      case Array:
        try {
          s5 = JSON.parse(t32);
        } catch (t4) {
          s5 = null;
        }
    }
    return s5;
  } };
  var n2 = (t32, i42) => i42 !== t32 && (i42 == i42 || t32 == t32);
  var l = { attribute: true, type: String, converter: o2, reflect: false, hasChanged: n2 };
  var a = class extends HTMLElement {
    constructor() {
      super(), this.\u03A0i = new Map(), this.\u03A0o = void 0, this.\u03A0l = void 0, this.isUpdatePending = false, this.hasUpdated = false, this.\u03A0h = null, this.u();
    }
    static addInitializer(t32) {
      var i42;
      (i42 = this.v) !== null && i42 !== void 0 || (this.v = []), this.v.push(t32);
    }
    static get observedAttributes() {
      this.finalize();
      const t32 = [];
      return this.elementProperties.forEach((i42, s5) => {
        const e42 = this.\u03A0p(s5, i42);
        e42 !== void 0 && (this.\u03A0m.set(e42, s5), t32.push(e42));
      }), t32;
    }
    static createProperty(t32, i42 = l) {
      if (i42.state && (i42.attribute = false), this.finalize(), this.elementProperties.set(t32, i42), !i42.noAccessor && !this.prototype.hasOwnProperty(t32)) {
        const s5 = typeof t32 == "symbol" ? Symbol() : "__" + t32, e42 = this.getPropertyDescriptor(t32, s5, i42);
        e42 !== void 0 && Object.defineProperty(this.prototype, t32, e42);
      }
    }
    static getPropertyDescriptor(t32, i42, s5) {
      return { get() {
        return this[i42];
      }, set(e42) {
        const h4 = this[t32];
        this[i42] = e42, this.requestUpdate(t32, h4, s5);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t32) {
      return this.elementProperties.get(t32) || l;
    }
    static finalize() {
      if (this.hasOwnProperty("finalized"))
        return false;
      this.finalized = true;
      const t32 = Object.getPrototypeOf(this);
      if (t32.finalize(), this.elementProperties = new Map(t32.elementProperties), this.\u03A0m = new Map(), this.hasOwnProperty("properties")) {
        const t4 = this.properties, i42 = [...Object.getOwnPropertyNames(t4), ...Object.getOwnPropertySymbols(t4)];
        for (const s5 of i42)
          this.createProperty(s5, t4[s5]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i42) {
      const s5 = [];
      if (Array.isArray(i42)) {
        const e42 = new Set(i42.flat(1 / 0).reverse());
        for (const i5 of e42)
          s5.unshift(u(i5));
      } else
        i42 !== void 0 && s5.push(u(i42));
      return s5;
    }
    static \u03A0p(t32, i42) {
      const s5 = i42.attribute;
      return s5 === false ? void 0 : typeof s5 == "string" ? s5 : typeof t32 == "string" ? t32.toLowerCase() : void 0;
    }
    u() {
      var t32;
      this.\u03A0g = new Promise((t4) => this.enableUpdating = t4), this.L = new Map(), this.\u03A0_(), this.requestUpdate(), (t32 = this.constructor.v) === null || t32 === void 0 || t32.forEach((t4) => t4(this));
    }
    addController(t32) {
      var i42, s5;
      ((i42 = this.\u03A0U) !== null && i42 !== void 0 ? i42 : this.\u03A0U = []).push(t32), this.renderRoot !== void 0 && this.isConnected && ((s5 = t32.hostConnected) === null || s5 === void 0 || s5.call(t32));
    }
    removeController(t32) {
      var i42;
      (i42 = this.\u03A0U) === null || i42 === void 0 || i42.splice(this.\u03A0U.indexOf(t32) >>> 0, 1);
    }
    \u03A0_() {
      this.constructor.elementProperties.forEach((t32, i42) => {
        this.hasOwnProperty(i42) && (this.\u03A0i.set(i42, this[i42]), delete this[i42]);
      });
    }
    createRenderRoot() {
      var t32;
      const s5 = (t32 = this.shadowRoot) !== null && t32 !== void 0 ? t32 : this.attachShadow(this.constructor.shadowRootOptions);
      return S(s5, this.constructor.elementStyles), s5;
    }
    connectedCallback() {
      var t32;
      this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t32 = this.\u03A0U) === null || t32 === void 0 || t32.forEach((t4) => {
        var i42;
        return (i42 = t4.hostConnected) === null || i42 === void 0 ? void 0 : i42.call(t4);
      }), this.\u03A0l && (this.\u03A0l(), this.\u03A0o = this.\u03A0l = void 0);
    }
    enableUpdating(t32) {
    }
    disconnectedCallback() {
      var t32;
      (t32 = this.\u03A0U) === null || t32 === void 0 || t32.forEach((t4) => {
        var i42;
        return (i42 = t4.hostDisconnected) === null || i42 === void 0 ? void 0 : i42.call(t4);
      }), this.\u03A0o = new Promise((t4) => this.\u03A0l = t4);
    }
    attributeChangedCallback(t32, i42, s5) {
      this.K(t32, s5);
    }
    \u03A0j(t32, i42, s5 = l) {
      var e42, h4;
      const r42 = this.constructor.\u03A0p(t32, s5);
      if (r42 !== void 0 && s5.reflect === true) {
        const n52 = ((h4 = (e42 = s5.converter) === null || e42 === void 0 ? void 0 : e42.toAttribute) !== null && h4 !== void 0 ? h4 : o2.toAttribute)(i42, s5.type);
        this.\u03A0h = t32, n52 == null ? this.removeAttribute(r42) : this.setAttribute(r42, n52), this.\u03A0h = null;
      }
    }
    K(t32, i42) {
      var s5, e42, h4;
      const r42 = this.constructor, n52 = r42.\u03A0m.get(t32);
      if (n52 !== void 0 && this.\u03A0h !== n52) {
        const t4 = r42.getPropertyOptions(n52), l42 = t4.converter, a4 = (h4 = (e42 = (s5 = l42) === null || s5 === void 0 ? void 0 : s5.fromAttribute) !== null && e42 !== void 0 ? e42 : typeof l42 == "function" ? l42 : null) !== null && h4 !== void 0 ? h4 : o2.fromAttribute;
        this.\u03A0h = n52, this[n52] = a4(i42, t4.type), this.\u03A0h = null;
      }
    }
    requestUpdate(t32, i42, s5) {
      let e42 = true;
      t32 !== void 0 && (((s5 = s5 || this.constructor.getPropertyOptions(t32)).hasChanged || n2)(this[t32], i42) ? (this.L.has(t32) || this.L.set(t32, i42), s5.reflect === true && this.\u03A0h !== t32 && (this.\u03A0k === void 0 && (this.\u03A0k = new Map()), this.\u03A0k.set(t32, s5))) : e42 = false), !this.isUpdatePending && e42 && (this.\u03A0g = this.\u03A0q());
    }
    async \u03A0q() {
      this.isUpdatePending = true;
      try {
        for (await this.\u03A0g; this.\u03A0o; )
          await this.\u03A0o;
      } catch (t4) {
        Promise.reject(t4);
      }
      const t32 = this.performUpdate();
      return t32 != null && await t32, !this.isUpdatePending;
    }
    performUpdate() {
      var t32;
      if (!this.isUpdatePending)
        return;
      this.hasUpdated, this.\u03A0i && (this.\u03A0i.forEach((t4, i5) => this[i5] = t4), this.\u03A0i = void 0);
      let i42 = false;
      const s5 = this.L;
      try {
        i42 = this.shouldUpdate(s5), i42 ? (this.willUpdate(s5), (t32 = this.\u03A0U) === null || t32 === void 0 || t32.forEach((t4) => {
          var i5;
          return (i5 = t4.hostUpdate) === null || i5 === void 0 ? void 0 : i5.call(t4);
        }), this.update(s5)) : this.\u03A0$();
      } catch (t4) {
        throw i42 = false, this.\u03A0$(), t4;
      }
      i42 && this.E(s5);
    }
    willUpdate(t32) {
    }
    E(t32) {
      var i42;
      (i42 = this.\u03A0U) === null || i42 === void 0 || i42.forEach((t4) => {
        var i5;
        return (i5 = t4.hostUpdated) === null || i5 === void 0 ? void 0 : i5.call(t4);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t32)), this.updated(t32);
    }
    \u03A0$() {
      this.L = new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this.\u03A0g;
    }
    shouldUpdate(t32) {
      return true;
    }
    update(t32) {
      this.\u03A0k !== void 0 && (this.\u03A0k.forEach((t4, i42) => this.\u03A0j(i42, this[i42], t4)), this.\u03A0k = void 0), this.\u03A0$();
    }
    updated(t32) {
    }
    firstUpdated(t32) {
    }
  };
  a.finalized = true, a.elementProperties = new Map(), a.elementStyles = [], a.shadowRootOptions = { mode: "open" }, (e22 = (s2 = globalThis).reactiveElementPlatformSupport) === null || e22 === void 0 || e22.call(s2, { ReactiveElement: a }), ((h = (r2 = globalThis).reactiveElementVersions) !== null && h !== void 0 ? h : r2.reactiveElementVersions = []).push("1.0.0-rc.2");
  var t22;
  var i22;
  var s3;
  var e3;
  var o3 = globalThis.trustedTypes;
  var n3 = o3 ? o3.createPolicy("lit-html", { createHTML: (t32) => t32 }) : void 0;
  var l2 = `lit$${(Math.random() + "").slice(9)}$`;
  var h2 = "?" + l2;
  var r3 = `<${h2}>`;
  var u2 = document;
  var c = (t32 = "") => u2.createComment(t32);
  var d = (t32) => t32 === null || typeof t32 != "object" && typeof t32 != "function";
  var v = Array.isArray;
  var a2 = (t32) => {
    var i42;
    return v(t32) || typeof ((i42 = t32) === null || i42 === void 0 ? void 0 : i42[Symbol.iterator]) == "function";
  };
  var f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var _ = /-->/g;
  var m = />/g;
  var $ = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g;
  var g = /'/g;
  var p = /"/g;
  var y = /^(?:script|style|textarea)$/i;
  var b = (t32) => (i42, ...s5) => ({ _$litType$: t32, strings: i42, values: s5 });
  var T = b(1);
  var x = b(2);
  var w = Symbol.for("lit-noChange");
  var A = Symbol.for("lit-nothing");
  var C = new WeakMap();
  var P = (t32, i42, s5) => {
    var e42, o52;
    const n52 = (e42 = s5 == null ? void 0 : s5.renderBefore) !== null && e42 !== void 0 ? e42 : i42;
    let l42 = n52._$litPart$;
    if (l42 === void 0) {
      const t4 = (o52 = s5 == null ? void 0 : s5.renderBefore) !== null && o52 !== void 0 ? o52 : null;
      n52._$litPart$ = l42 = new k(i42.insertBefore(c(), t4), t4, void 0, s5 != null ? s5 : {});
    }
    return l42._$AI(t32), l42;
  };
  var V = u2.createTreeWalker(u2, 129, null, false);
  var E = (t32, i42) => {
    const s5 = t32.length - 1, e42 = [];
    let o52, h4 = i42 === 2 ? "<svg>" : "", u3 = f;
    for (let i5 = 0; i5 < s5; i5++) {
      const s6 = t32[i5];
      let n52, c3, d2 = -1, v2 = 0;
      for (; v2 < s6.length && (u3.lastIndex = v2, c3 = u3.exec(s6), c3 !== null); )
        v2 = u3.lastIndex, u3 === f ? c3[1] === "!--" ? u3 = _ : c3[1] !== void 0 ? u3 = m : c3[2] !== void 0 ? (y.test(c3[2]) && (o52 = RegExp("</" + c3[2], "g")), u3 = $) : c3[3] !== void 0 && (u3 = $) : u3 === $ ? c3[0] === ">" ? (u3 = o52 != null ? o52 : f, d2 = -1) : c3[1] === void 0 ? d2 = -2 : (d2 = u3.lastIndex - c3[2].length, n52 = c3[1], u3 = c3[3] === void 0 ? $ : c3[3] === '"' ? p : g) : u3 === p || u3 === g ? u3 = $ : u3 === _ || u3 === m ? u3 = f : (u3 = $, o52 = void 0);
      const a4 = u3 === $ && t32[i5 + 1].startsWith("/>") ? " " : "";
      h4 += u3 === f ? s6 + r3 : d2 >= 0 ? (e42.push(n52), s6.slice(0, d2) + "$lit$" + s6.slice(d2) + l2 + a4) : s6 + l2 + (d2 === -2 ? (e42.push(void 0), i5) : a4);
    }
    const c2 = h4 + (t32[s5] || "<?>") + (i42 === 2 ? "</svg>" : "");
    return [n3 !== void 0 ? n3.createHTML(c2) : c2, e42];
  };
  var M = class {
    constructor({ strings: t32, _$litType$: i42 }, s5) {
      let e42;
      this.parts = [];
      let n52 = 0, r42 = 0;
      const u3 = t32.length - 1, d2 = this.parts, [v2, a4] = E(t32, i42);
      if (this.el = M.createElement(v2, s5), V.currentNode = this.el.content, i42 === 2) {
        const t4 = this.el.content, i5 = t4.firstChild;
        i5.remove(), t4.append(...i5.childNodes);
      }
      for (; (e42 = V.nextNode()) !== null && d2.length < u3; ) {
        if (e42.nodeType === 1) {
          if (e42.hasAttributes()) {
            const t4 = [];
            for (const i5 of e42.getAttributeNames())
              if (i5.endsWith("$lit$") || i5.startsWith(l2)) {
                const s6 = a4[r42++];
                if (t4.push(i5), s6 !== void 0) {
                  const t5 = e42.getAttribute(s6.toLowerCase() + "$lit$").split(l2), i6 = /([.?@])?(.*)/.exec(s6);
                  d2.push({ type: 1, index: n52, name: i6[2], strings: t5, ctor: i6[1] === "." ? I : i6[1] === "?" ? L : i6[1] === "@" ? R : H });
                } else
                  d2.push({ type: 6, index: n52 });
              }
            for (const i5 of t4)
              e42.removeAttribute(i5);
          }
          if (y.test(e42.tagName)) {
            const t4 = e42.textContent.split(l2), i5 = t4.length - 1;
            if (i5 > 0) {
              e42.textContent = o3 ? o3.emptyScript : "";
              for (let s6 = 0; s6 < i5; s6++)
                e42.append(t4[s6], c()), V.nextNode(), d2.push({ type: 2, index: ++n52 });
              e42.append(t4[i5], c());
            }
          }
        } else if (e42.nodeType === 8)
          if (e42.data === h2)
            d2.push({ type: 2, index: n52 });
          else {
            let t4 = -1;
            for (; (t4 = e42.data.indexOf(l2, t4 + 1)) !== -1; )
              d2.push({ type: 7, index: n52 }), t4 += l2.length - 1;
          }
        n52++;
      }
    }
    static createElement(t32, i42) {
      const s5 = u2.createElement("template");
      return s5.innerHTML = t32, s5;
    }
  };
  function N(t32, i42, s5 = t32, e42) {
    var o52, n52, l42, h4;
    if (i42 === w)
      return i42;
    let r42 = e42 !== void 0 ? (o52 = s5._$Cl) === null || o52 === void 0 ? void 0 : o52[e42] : s5._$Cu;
    const u3 = d(i42) ? void 0 : i42._$litDirective$;
    return (r42 == null ? void 0 : r42.constructor) !== u3 && ((n52 = r42 == null ? void 0 : r42._$AO) === null || n52 === void 0 || n52.call(r42, false), u3 === void 0 ? r42 = void 0 : (r42 = new u3(t32), r42._$AT(t32, s5, e42)), e42 !== void 0 ? ((l42 = (h4 = s5)._$Cl) !== null && l42 !== void 0 ? l42 : h4._$Cl = [])[e42] = r42 : s5._$Cu = r42), r42 !== void 0 && (i42 = N(t32, r42._$AS(t32, i42.values), r42, e42)), i42;
  }
  var S2 = class {
    constructor(t32, i42) {
      this.v = [], this._$AN = void 0, this._$AD = t32, this._$AM = i42;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    p(t32) {
      var i42;
      const { el: { content: s5 }, parts: e42 } = this._$AD, o52 = ((i42 = t32 == null ? void 0 : t32.creationScope) !== null && i42 !== void 0 ? i42 : u2).importNode(s5, true);
      V.currentNode = o52;
      let n52 = V.nextNode(), l42 = 0, h4 = 0, r42 = e42[0];
      for (; r42 !== void 0; ) {
        if (l42 === r42.index) {
          let i5;
          r42.type === 2 ? i5 = new k(n52, n52.nextSibling, this, t32) : r42.type === 1 ? i5 = new r42.ctor(n52, r42.name, r42.strings, this, t32) : r42.type === 6 && (i5 = new z(n52, this, t32)), this.v.push(i5), r42 = e42[++h4];
        }
        l42 !== (r42 == null ? void 0 : r42.index) && (n52 = V.nextNode(), l42++);
      }
      return o52;
    }
    m(t32) {
      let i42 = 0;
      for (const s5 of this.v)
        s5 !== void 0 && (s5.strings !== void 0 ? (s5._$AI(t32, s5, i42), i42 += s5.strings.length - 2) : s5._$AI(t32[i42])), i42++;
    }
  };
  var k = class {
    constructor(t32, i42, s5, e42) {
      this.type = 2, this._$C_ = true, this._$AN = void 0, this._$AA = t32, this._$AB = i42, this._$AM = s5, this.options = e42;
    }
    get _$AU() {
      var t32, i42;
      return (i42 = (t32 = this._$AM) === null || t32 === void 0 ? void 0 : t32._$AU) !== null && i42 !== void 0 ? i42 : this._$C_;
    }
    get parentNode() {
      return this._$AA.parentNode;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t32, i42 = this) {
      t32 = N(this, t32, i42), d(t32) ? t32 === A || t32 == null || t32 === "" ? (this._$AH !== A && this._$AR(), this._$AH = A) : t32 !== this._$AH && t32 !== w && this.$(t32) : t32._$litType$ !== void 0 ? this.T(t32) : t32.nodeType !== void 0 ? this.A(t32) : a2(t32) ? this.M(t32) : this.$(t32);
    }
    C(t32, i42 = this._$AB) {
      return this._$AA.parentNode.insertBefore(t32, i42);
    }
    A(t32) {
      this._$AH !== t32 && (this._$AR(), this._$AH = this.C(t32));
    }
    $(t32) {
      const i42 = this._$AA.nextSibling;
      i42 !== null && i42.nodeType === 3 && (this._$AB === null ? i42.nextSibling === null : i42 === this._$AB.previousSibling) ? i42.data = t32 : this.A(u2.createTextNode(t32)), this._$AH = t32;
    }
    T(t32) {
      var i42;
      const { values: s5, _$litType$: e42 } = t32, o52 = typeof e42 == "number" ? this._$AC(t32) : (e42.el === void 0 && (e42.el = M.createElement(e42.h, this.options)), e42);
      if (((i42 = this._$AH) === null || i42 === void 0 ? void 0 : i42._$AD) === o52)
        this._$AH.m(s5);
      else {
        const t4 = new S2(o52, this), i5 = t4.p(this.options);
        t4.m(s5), this.A(i5), this._$AH = t4;
      }
    }
    _$AC(t32) {
      let i42 = C.get(t32.strings);
      return i42 === void 0 && C.set(t32.strings, i42 = new M(t32)), i42;
    }
    M(t32) {
      v(this._$AH) || (this._$AH = [], this._$AR());
      const i42 = this._$AH;
      let s5, e42 = 0;
      for (const o52 of t32)
        e42 === i42.length ? i42.push(s5 = new k(this.C(c()), this.C(c()), this, this.options)) : s5 = i42[e42], s5._$AI(o52), e42++;
      e42 < i42.length && (this._$AR(s5 && s5._$AB.nextSibling, e42), i42.length = e42);
    }
    _$AR(t32 = this._$AA.nextSibling, i42) {
      var s5;
      for ((s5 = this._$AP) === null || s5 === void 0 || s5.call(this, false, true, i42); t32 && t32 !== this._$AB; ) {
        const i5 = t32.nextSibling;
        t32.remove(), t32 = i5;
      }
    }
    setConnected(t32) {
      var i42;
      this._$AM === void 0 && (this._$C_ = t32, (i42 = this._$AP) === null || i42 === void 0 || i42.call(this, t32));
    }
  };
  var H = class {
    constructor(t32, i42, s5, e42, o52) {
      this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t32, this.name = i42, this._$AM = e42, this.options = o52, s5.length > 2 || s5[0] !== "" || s5[1] !== "" ? (this._$AH = Array(s5.length - 1).fill(A), this.strings = s5) : this._$AH = A;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t32, i42 = this, s5, e42) {
      const o52 = this.strings;
      let n52 = false;
      if (o52 === void 0)
        t32 = N(this, t32, i42, 0), n52 = !d(t32) || t32 !== this._$AH && t32 !== w, n52 && (this._$AH = t32);
      else {
        const e5 = t32;
        let l42, h4;
        for (t32 = o52[0], l42 = 0; l42 < o52.length - 1; l42++)
          h4 = N(this, e5[s5 + l42], i42, l42), h4 === w && (h4 = this._$AH[l42]), n52 || (n52 = !d(h4) || h4 !== this._$AH[l42]), h4 === A ? t32 = A : t32 !== A && (t32 += (h4 != null ? h4 : "") + o52[l42 + 1]), this._$AH[l42] = h4;
      }
      n52 && !e42 && this.P(t32);
    }
    P(t32) {
      t32 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t32 != null ? t32 : "");
    }
  };
  var I = class extends H {
    constructor() {
      super(...arguments), this.type = 3;
    }
    P(t32) {
      this.element[this.name] = t32 === A ? void 0 : t32;
    }
  };
  var L = class extends H {
    constructor() {
      super(...arguments), this.type = 4;
    }
    P(t32) {
      t32 && t32 !== A ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name);
    }
  };
  var R = class extends H {
    constructor() {
      super(...arguments), this.type = 5;
    }
    _$AI(t32, i42 = this) {
      var s5;
      if ((t32 = (s5 = N(this, t32, i42, 0)) !== null && s5 !== void 0 ? s5 : A) === w)
        return;
      const e42 = this._$AH, o52 = t32 === A && e42 !== A || t32.capture !== e42.capture || t32.once !== e42.once || t32.passive !== e42.passive, n52 = t32 !== A && (e42 === A || o52);
      o52 && this.element.removeEventListener(this.name, this, e42), n52 && this.element.addEventListener(this.name, this, t32), this._$AH = t32;
    }
    handleEvent(t32) {
      var i42, s5;
      typeof this._$AH == "function" ? this._$AH.call((s5 = (i42 = this.options) === null || i42 === void 0 ? void 0 : i42.host) !== null && s5 !== void 0 ? s5 : this.element, t32) : this._$AH.handleEvent(t32);
    }
  };
  var z = class {
    constructor(t32, i42, s5) {
      this.element = t32, this.type = 6, this._$AN = void 0, this._$AM = i42, this.options = s5;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t32) {
      N(this, t32);
    }
  };
  (i22 = (t22 = globalThis).litHtmlPlatformSupport) === null || i22 === void 0 || i22.call(t22, M, k), ((s3 = (e3 = globalThis).litHtmlVersions) !== null && s3 !== void 0 ? s3 : e3.litHtmlVersions = []).push("2.0.0-rc.4");
  var i3;
  var l3;
  var o4;
  var s4;
  var n4;
  var a3;
  ((i3 = (a3 = globalThis).litElementVersions) !== null && i3 !== void 0 ? i3 : a3.litElementVersions = []).push("3.0.0-rc.2");
  var h3 = class extends a {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this.\u03A6t = void 0;
    }
    createRenderRoot() {
      var t32, e42;
      const r42 = super.createRenderRoot();
      return (t32 = (e42 = this.renderOptions).renderBefore) !== null && t32 !== void 0 || (e42.renderBefore = r42.firstChild), r42;
    }
    update(t32) {
      const r42 = this.render();
      super.update(t32), this.\u03A6t = P(r42, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var t32;
      super.connectedCallback(), (t32 = this.\u03A6t) === null || t32 === void 0 || t32.setConnected(true);
    }
    disconnectedCallback() {
      var t32;
      super.disconnectedCallback(), (t32 = this.\u03A6t) === null || t32 === void 0 || t32.setConnected(false);
    }
    render() {
      return w;
    }
  };
  h3.finalized = true, h3._$litElement$ = true, (o4 = (l3 = globalThis).litElementHydrateSupport) === null || o4 === void 0 || o4.call(l3, { LitElement: h3 }), (n4 = (s4 = globalThis).litElementPlatformSupport) === null || n4 === void 0 || n4.call(s4, { LitElement: h3 });

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.EU2ZI6CX.js
  var e23 = e(class extends i {
    constructor(t24) {
      var s5;
      if (super(t24), t24.type !== t.ATTRIBUTE || t24.name !== "class" || ((s5 = t24.strings) === null || s5 === void 0 ? void 0 : s5.length) > 2)
        throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t24) {
      return Object.keys(t24).filter((s5) => t24[s5]).join(" ");
    }
    update(s5, [r5]) {
      if (this.st === void 0) {
        this.st = new Set();
        for (const t24 in r5)
          r5[t24] && this.st.add(t24);
        return this.render(r5);
      }
      const i23 = s5.element.classList;
      this.st.forEach((t24) => {
        t24 in r5 || (i23.remove(t24), this.st.delete(t24));
      });
      for (const t24 in r5) {
        const s22 = !!r5[t24];
        s22 !== this.st.has(t24) && (s22 ? (i23.add(t24), this.st.add(t24)) : (i23.remove(t24), this.st.delete(t24)));
      }
      return w;
    }
  });

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.K7SDWLJS.js
  var utility_styles_default = i2`
  .sl-scroll-lock {
    overflow: hidden !important;
  }

  .sl-toast-stack {
    position: fixed;
    top: 0;
    right: 0;
    z-index: var(--sl-z-index-toast);
    width: 28rem;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
  }

  .sl-toast-stack sl-alert {
    --box-shadow: var(--sl-shadow-large);
    margin: var(--sl-spacing-medium);
  }
`;
  var component_styles_default = i2`
  :host {
    position: relative;
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;
  var style = document.createElement("style");
  style.textContent = utility_styles_default.toString();
  document.head.append(style);

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.VRIBQCTO.js
  var n5 = (n32) => (e32) => typeof e32 == "function" ? ((n42, e42) => (window.customElements.define(n42, e42), e42))(n32, e32) : ((n42, e42) => {
    const { kind: t24, elements: i23 } = e42;
    return { kind: t24, elements: i23, finisher(e5) {
      window.customElements.define(n42, e5);
    } };
  })(n32, e32);
  var i4 = (i23, e32) => e32.kind === "method" && e32.descriptor && !("value" in e32.descriptor) ? __spreadProps(__spreadValues({}, e32), { finisher(n32) {
    n32.createProperty(e32.key, i23);
  } }) : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e32.key, initializer() {
    typeof e32.initializer == "function" && (this[e32.key] = e32.initializer.call(this));
  }, finisher(n32) {
    n32.createProperty(e32.key, i23);
  } };
  function e4(e32) {
    return (n32, t24) => t24 !== void 0 ? ((i23, e42, n42) => {
      e42.constructor.createProperty(n42, i23);
    })(e32, n32, t24) : i4(e32, n32);
  }
  function r4(r22) {
    return e4(__spreadProps(__spreadValues({}, r22), { state: true, attribute: false }));
  }
  var o5 = ({ finisher: e32, descriptor: t24 }) => (o32, n32) => {
    var r22;
    if (n32 === void 0) {
      const n42 = (r22 = o32.originalKey) !== null && r22 !== void 0 ? r22 : o32.key, i23 = t24 != null ? { kind: "method", placement: "prototype", key: n42, descriptor: t24(o32.key) } : __spreadProps(__spreadValues({}, o32), { key: n42 });
      return e32 != null && (i23.finisher = function(t32) {
        e32(t32, n42);
      }), i23;
    }
    {
      const r32 = o32.constructor;
      t24 !== void 0 && Object.defineProperty(o32, n32, t24(n32)), e32 == null || e32(r32, n32);
    }
  };
  function o22(o32, r22) {
    return o5({ descriptor: (t24) => {
      const i23 = { get() {
        var t32;
        return (t32 = this.renderRoot) === null || t32 === void 0 ? void 0 : t32.querySelector(o32);
      }, enumerable: true, configurable: true };
      if (r22) {
        const r32 = typeof t24 == "symbol" ? Symbol() : "__" + t24;
        i23.get = function() {
          var t32;
          return this[r32] === void 0 && (this[r32] = (t32 = this.renderRoot) === null || t32 === void 0 ? void 0 : t32.querySelector(o32)), this[r32];
        };
      }
      return i23;
    } });
  }
  var t3 = Element.prototype;
  var n22 = t3.msMatchesSelector || t3.webkitMatchesSelector;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.LOFN5CG3.js
  var alert_styles_default = i2`
  ${component_styles_default}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: rgb(var(--sl-color-neutral-0));
    border: solid 1px rgb(var(--sl-color-neutral-200));
    border-top-width: 3px;
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--box-shadow);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: rgb(var(--sl-color-neutral-700));
    margin: inherit;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
  }

  .alert__icon ::slotted(*) {
    margin-left: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: rgb(var(--sl-color-primary-600));
  }

  .alert--primary .alert__icon {
    color: rgb(var(--sl-color-primary-600));
  }

  .alert--success {
    border-top-color: rgb(var(--sl-color-success-600));
  }

  .alert--success .alert__icon {
    color: rgb(var(--sl-color-success-600));
  }

  .alert--neutral {
    border-top-color: rgb(var(--sl-color-neutral-600));
  }

  .alert--neutral .alert__icon {
    color: rgb(var(--sl-color-neutral-600));
  }

  .alert--warning {
    border-top-color: rgb(var(--sl-color-warning-600));
  }

  .alert--warning .alert__icon {
    color: rgb(var(--sl-color-warning-600));
  }

  .alert--danger {
    border-top-color: rgb(var(--sl-color-danger-600));
  }

  .alert--danger .alert__icon {
    color: rgb(var(--sl-color-danger-600));
  }

  .alert__message {
    flex: 1 1 auto;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-right: var(--sl-spacing-medium);
  }
`;
  var toastStack = Object.assign(document.createElement("div"), { className: "sl-toast-stack" });
  var SlAlert = class extends h3 {
    constructor() {
      super(...arguments);
      this.open = false;
      this.closable = false;
      this.type = "primary";
      this.duration = Infinity;
    }
    firstUpdated() {
      this.base.hidden = !this.open;
    }
    async show() {
      if (this.open) {
        return;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    async hide() {
      if (!this.open) {
        return;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    async toast() {
      return new Promise((resolve) => {
        if (!toastStack.parentElement) {
          document.body.append(toastStack);
        }
        toastStack.appendChild(this);
        requestAnimationFrame(() => {
          this.clientWidth;
          this.show();
        });
        this.addEventListener("sl-after-hide", () => {
          toastStack.removeChild(this);
          resolve();
          if (!toastStack.querySelector("sl-alert")) {
            toastStack.remove();
          }
        }, { once: true });
      });
    }
    restartAutoHide() {
      clearTimeout(this.autoHideTimeout);
      if (this.open && this.duration < Infinity) {
        this.autoHideTimeout = setTimeout(() => this.hide(), this.duration);
      }
    }
    handleCloseClick() {
      this.hide();
    }
    handleMouseMove() {
      this.restartAutoHide();
    }
    async handleOpenChange() {
      if (this.open) {
        emit(this, "sl-show");
        if (this.duration < Infinity) {
          this.restartAutoHide();
        }
        await stopAnimations(this.base);
        this.base.hidden = false;
        const { keyframes, options } = getAnimation(this, "alert.show");
        await animateTo(this.base, keyframes, options);
        emit(this, "sl-after-show");
      } else {
        emit(this, "sl-hide");
        clearTimeout(this.autoHideTimeout);
        await stopAnimations(this.base);
        const { keyframes, options } = getAnimation(this, "alert.hide");
        await animateTo(this.base, keyframes, options);
        this.base.hidden = true;
        emit(this, "sl-after-hide");
      }
    }
    handleDurationChange() {
      this.restartAutoHide();
    }
    render() {
      return T`
      <div
        part="base"
        class=${e23({
        alert: true,
        "alert--open": this.open,
        "alert--closable": this.closable,
        "alert--primary": this.type === "primary",
        "alert--success": this.type === "success",
        "alert--neutral": this.type === "neutral",
        "alert--warning": this.type === "warning",
        "alert--danger": this.type === "danger"
      })}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden=${this.open ? "false" : "true"}
        @mousemove=${this.handleMouseMove}
      >
        <span part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </span>

        <span part="message" class="alert__message">
          <slot></slot>
        </span>

        ${this.closable ? T`
              <span class="alert__close">
                <sl-icon-button
                  exportparts="base:close-button"
                  name="x"
                  library="system"
                  @click=${this.handleCloseClick}
                ></sl-icon-button>
              </span>
            ` : ""}
      </div>
    `;
    }
  };
  SlAlert.styles = alert_styles_default;
  __decorateClass([
    o22('[part="base"]')
  ], SlAlert.prototype, "base", 2);
  __decorateClass([
    e4({ type: Boolean, reflect: true })
  ], SlAlert.prototype, "open", 2);
  __decorateClass([
    e4({ type: Boolean, reflect: true })
  ], SlAlert.prototype, "closable", 2);
  __decorateClass([
    e4({ reflect: true })
  ], SlAlert.prototype, "type", 2);
  __decorateClass([
    e4({ type: Number })
  ], SlAlert.prototype, "duration", 2);
  __decorateClass([
    watch("open", { waitUntilFirstUpdate: true })
  ], SlAlert.prototype, "handleOpenChange", 1);
  __decorateClass([
    watch("duration")
  ], SlAlert.prototype, "handleDurationChange", 1);
  SlAlert = __decorateClass([
    n5("sl-alert")
  ], SlAlert);
  var alert_default = SlAlert;
  setDefaultAnimation("alert.show", {
    keyframes: [
      { opacity: 0, transform: "scale(0.8)" },
      { opacity: 1, transform: "scale(1)" }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("alert.hide", {
    keyframes: [
      { opacity: 1, transform: "scale(1)" },
      { opacity: 0, transform: "scale(0.8)" }
    ],
    options: { duration: 250, easing: "ease" }
  });

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.SSOOZAWV.js
  var l4 = (l22) => l22 != null ? l22 : A;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NEDSBZ5B.js
  var hasFocusVisible = (() => {
    const style2 = document.createElement("style");
    let isSupported;
    try {
      document.head.appendChild(style2);
      style2.sheet.insertRule(":focus-visible { color: inherit }");
      isSupported = true;
    } catch (e5) {
      isSupported = false;
    } finally {
      style2.remove();
    }
    return isSupported;
  })();
  var focusVisibleSelector = r(hasFocusVisible ? ":focus-visible" : ":focus");

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.L66N6Z3T.js
  var icon_button_styles_default = i2`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: rgb(var(--sl-color-neutral-600));
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus:not(.icon-button--disabled) {
    color: rgb(var(--sl-color-primary-600));
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: rgb(var(--sl-color-primary-700));
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button${focusVisibleSelector} {
    box-shadow: var(--sl-focus-ring);
  }
`;
  var SlIconButton = class extends h3 {
    constructor() {
      super(...arguments);
      this.label = "";
      this.disabled = false;
    }
    render() {
      const isLink = this.href ? true : false;
      const interior = T`
      <sl-icon
        name=${l4(this.name)}
        library=${l4(this.library)}
        src=${l4(this.src)}
        aria-hidden="true"
      ></sl-icon>
    `;
      return isLink ? T`
          <a
            part="base"
            class="icon-button"
            href=${l4(this.href)}
            target=${l4(this.target)}
            download=${l4(this.download)}
            rel=${l4(this.target ? "noreferrer noopener" : void 0)}
            role="button"
            aria-disabled=${this.disabled ? "true" : "false"}
            aria-label="${this.label}"
            tabindex=${this.disabled ? "-1" : "0"}
          >
            ${interior}
          </a>
        ` : T`
          <button
            part="base"
            class=${e23({
        "icon-button": true,
        "icon-button--disabled": this.disabled
      })}
            ?disabled=${this.disabled}
            type="button"
            aria-label=${this.label}
          >
            ${interior}
          </button>
        `;
    }
  };
  SlIconButton.styles = icon_button_styles_default;
  __decorateClass([
    o22("button")
  ], SlIconButton.prototype, "button", 2);
  __decorateClass([
    e4()
  ], SlIconButton.prototype, "name", 2);
  __decorateClass([
    e4()
  ], SlIconButton.prototype, "library", 2);
  __decorateClass([
    e4()
  ], SlIconButton.prototype, "src", 2);
  __decorateClass([
    e4()
  ], SlIconButton.prototype, "href", 2);
  __decorateClass([
    e4()
  ], SlIconButton.prototype, "target", 2);
  __decorateClass([
    e4()
  ], SlIconButton.prototype, "download", 2);
  __decorateClass([
    e4()
  ], SlIconButton.prototype, "label", 2);
  __decorateClass([
    e4({ type: Boolean, reflect: true })
  ], SlIconButton.prototype, "disabled", 2);
  SlIconButton = __decorateClass([
    n5("sl-icon-button")
  ], SlIconButton);

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.S6TJZ6NJ.js
  var basePath = "";
  function setBasePath(path) {
    basePath = path;
  }
  function getBasePath() {
    return basePath.replace(/\/$/, "");
  }
  var scripts = [...document.getElementsByTagName("script")];
  var configScript = scripts.find((script) => script.hasAttribute("data-shoelace"));
  if (configScript) {
    setBasePath(configScript.getAttribute("data-shoelace"));
  } else {
    const fallbackScript = scripts.find((s5) => /shoelace(\.min)?\.js$/.test(s5.src));
    let path = "";
    if (fallbackScript) {
      path = fallbackScript.getAttribute("src");
    }
    setBasePath(path.split("/").slice(0, -1).join("/"));
  }

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.FGIYSBZ6.js
  var library = {
    name: "default",
    resolver: (name) => `${getBasePath()}/assets/icons/${name}.svg`
  };
  var library_default_default = library;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.73PEGQ4K.js
  var icons = {
    check: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
    </svg>
  `,
    "chevron-down": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    "chevron-left": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
    "chevron-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
    "eye-slash": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
    "grip-vertical": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
    </svg>
  `,
    "person-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
    "star-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
    x: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    "x-circle": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `
  };
  var systemLibrary = {
    name: "system",
    resolver: (name) => {
      if (icons[name]) {
        return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
      } else {
        return "";
      }
    }
  };
  var library_system_default = systemLibrary;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.L23EKU34.js
  var registry = [library_default_default, library_system_default];
  var watchedIcons = [];
  function watchIcon(icon) {
    watchedIcons.push(icon);
  }
  function unwatchIcon(icon) {
    watchedIcons = watchedIcons.filter((el) => el !== icon);
  }
  function getIconLibrary(name) {
    return registry.filter((lib) => lib.name === name)[0];
  }

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ARRH633M.js
  var iconFiles = new Map();
  var requestIcon = (url) => {
    if (iconFiles.has(url)) {
      return iconFiles.get(url);
    } else {
      const request = fetch(url).then(async (response) => {
        if (response.ok) {
          const div = document.createElement("div");
          div.innerHTML = await response.text();
          const svg = div.firstElementChild;
          return {
            ok: response.ok,
            status: response.status,
            svg: svg && svg.tagName.toLowerCase() === "svg" ? svg.outerHTML : ""
          };
        } else {
          return {
            ok: response.ok,
            status: response.status,
            svg: null
          };
        }
      });
      iconFiles.set(url, request);
      return request;
    }
  };

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.RNAEAUQW.js
  var n23 = class extends i {
    constructor(i32) {
      if (super(i32), this.it = A, i32.type !== t.CHILD)
        throw Error(this.constructor.directiveName + "() can only be used in child bindings");
    }
    render(r22) {
      if (r22 === A)
        return this.vt = void 0, this.it = r22;
      if (r22 === w)
        return r22;
      if (typeof r22 != "string")
        throw Error(this.constructor.directiveName + "() called with a non-string value");
      if (r22 === this.it)
        return this.vt;
      this.it = r22;
      const s5 = [r22];
      return s5.raw = s5, this.vt = { _$litType$: this.constructor.resultType, strings: s5, values: [] };
    }
  };
  n23.directiveName = "unsafeHTML", n23.resultType = 1;
  var o6 = e(n23);
  var t23 = class extends n23 {
  };
  t23.directiveName = "unsafeSVG", t23.resultType = 2;
  var o23 = e(t23);
  var icon_styles_default = i2`
  ${component_styles_default}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  .icon,
  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;
  var parser = new DOMParser();
  var SlIcon = class extends h3 {
    constructor() {
      super(...arguments);
      this.svg = "";
      this.library = "default";
    }
    connectedCallback() {
      super.connectedCallback();
      watchIcon(this);
    }
    firstUpdated() {
      this.setIcon();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      unwatchIcon(this);
    }
    getLabel() {
      let label = "";
      if (this.label) {
        label = this.label;
      } else if (this.name) {
        label = this.name.replace(/-/g, " ");
      } else if (this.src) {
        label = this.src.replace(/.*\//, "").replace(/-/g, " ").replace(/\.svg/i, "");
      }
      return label;
    }
    getUrl() {
      const library2 = getIconLibrary(this.library);
      if (this.name && library2) {
        return library2.resolver(this.name);
      } else {
        return this.src;
      }
    }
    redraw() {
      this.setIcon();
    }
    async setIcon() {
      const library2 = getIconLibrary(this.library);
      const url = this.getUrl();
      if (url) {
        try {
          const file = await requestIcon(url);
          if (url !== this.getUrl()) {
            return;
          } else if (file.ok) {
            const doc = parser.parseFromString(file.svg, "text/html");
            const svgEl = doc.body.querySelector("svg");
            if (svgEl) {
              if (library2 && library2.mutator) {
                library2.mutator(svgEl);
              }
              this.svg = svgEl.outerHTML;
              emit(this, "sl-load");
            } else {
              this.svg = "";
              emit(this, "sl-error", { detail: { status: file.status } });
            }
          } else {
            this.svg = "";
            emit(this, "sl-error", { detail: { status: file.status } });
          }
        } catch (e32) {
          emit(this, "sl-error", { detail: { status: -1 } });
        }
      } else if (this.svg) {
        this.svg = "";
      }
    }
    handleChange() {
      this.setIcon();
    }
    render() {
      return T` <div part="base" class="icon" role="img" aria-label=${this.getLabel()}>${o23(this.svg)}</div>`;
    }
  };
  SlIcon.styles = icon_styles_default;
  __decorateClass([
    r4()
  ], SlIcon.prototype, "svg", 2);
  __decorateClass([
    e4()
  ], SlIcon.prototype, "name", 2);
  __decorateClass([
    e4()
  ], SlIcon.prototype, "src", 2);
  __decorateClass([
    e4()
  ], SlIcon.prototype, "label", 2);
  __decorateClass([
    e4()
  ], SlIcon.prototype, "library", 2);
  __decorateClass([
    watch("name"),
    watch("src"),
    watch("library")
  ], SlIcon.prototype, "setIcon", 1);
  SlIcon = __decorateClass([
    n5("sl-icon")
  ], SlIcon);
  var icon_default = SlIcon;

  // node_modules/@shoelace-style/shoelace/dist/components/button/button.js
  var button_exports = {};
  __export(button_exports, {
    default: () => button_default
  });

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.IBDZI3K2.js
  function getTextContent(slot) {
    const nodes = slot ? slot.assignedNodes({ flatten: true }) : [];
    let text = "";
    [...nodes].map((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        text += node.textContent;
      }
    });
    return text;
  }
  function hasSlot(el, name) {
    if (name) {
      return el.querySelector(`:scope > [slot="${name}"]`) !== null;
    }
    return [...el.childNodes].some((node) => {
      if (node.nodeType === node.TEXT_NODE && node.textContent.trim() !== "") {
        return true;
      }
      if (node.nodeType === node.ELEMENT_NODE) {
        const el2 = node;
        if (!el2.hasAttribute("slot")) {
          return true;
        }
      }
      return false;
    });
  }

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.S3OMNE4R.js
  var button_styles_default = i2`
  ${component_styles_default}

  :host {
    display: inline-block;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-fast) background-color, var(--sl-transition-fast) color,
      var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button.button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button.button--disabled * {
    pointer-events: none;
  }

  /* Clicks on icons shouldn't prevent the button from gaining focus */
  .button::slotted(sl-icon) {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .button__label ::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button.button--default {
    background-color: rgb(var(--sl-color-neutral-0));
    border-color: rgb(var(--sl-color-neutral-300));
    color: rgb(var(--sl-color-neutral-700));
  }

  .button.button--default:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-primary-50));
    border-color: rgb(var(--sl-color-primary-300));
    color: rgb(var(--sl-color-primary-700));
  }

  .button.button--default${focusVisibleSelector}:not(.button--disabled) {
    background-color: rgb(var(--sl-color-primary-50));
    border-color: rgb(var(--sl-color-primary-400));
    color: rgb(var(--sl-color-primary-700));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
  }

  .button.button--default:active:not(.button--disabled) {
    background-color: rgb(var(--sl-color-primary-100));
    border-color: rgb(var(--sl-color-primary-400));
    color: rgb(var(--sl-color-primary-700));
  }

  /* Primary */
  .button.button--primary {
    background-color: rgb(var(--sl-color-primary-600));
    border-color: rgb(var(--sl-color-primary-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button.button--primary:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-primary-500));
    border-color: rgb(var(--sl-color-primary-500));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button.button--primary${focusVisibleSelector}:not(.button--disabled) {
    background-color: rgb(var(--sl-color-primary-500));
    border-color: rgb(var(--sl-color-primary-500));
    color: rgb(var(--sl-color-neutral-0));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
  }

  .button.button--primary:active:not(.button--disabled) {
    background-color: rgb(var(--sl-color-primary-600));
    border-color: rgb(var(--sl-color-primary-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  /* Success */
  .button.button--success {
    background-color: rgb(var(--sl-color-success-600));
    border-color: rgb(var(--sl-color-success-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button.button--success:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-success-500));
    border-color: rgb(var(--sl-color-success-500));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button.button--success${focusVisibleSelector}:not(.button--disabled) {
    background-color: rgb(var(--sl-color-success-600));
    border-color: rgb(var(--sl-color-success-600));
    color: rgb(var(--sl-color-neutral-0));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-success-500) / var(--sl-focus-ring-alpha));
  }

  .button.button--success:active:not(.button--disabled) {
    background-color: rgb(var(--sl-color-success-600));
    border-color: rgb(var(--sl-color-success-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  /* Neutral */
  .button.button--neutral {
    background-color: rgb(var(--sl-color-neutral-600));
    border-color: rgb(var(--sl-color-neutral-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button.button--neutral:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-neutral-500));
    border-color: rgb(var(--sl-color-neutral-500));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button.button--neutral${focusVisibleSelector}:not(.button--disabled) {
    background-color: rgb(var(--sl-color-neutral-500));
    border-color: rgb(var(--sl-color-neutral-500));
    color: rgb(var(--sl-color-neutral-0));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-neutral-500) / var(--sl-focus-ring-alpha));
  }

  .button.button--neutral:active:not(.button--disabled) {
    background-color: rgb(var(--sl-color-neutral-600));
    border-color: rgb(var(--sl-color-neutral-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  /* Warning */
  .button.button--warning {
    background-color: rgb(var(--sl-color-warning-600));
    border-color: rgb(var(--sl-color-warning-600));
    color: rgb(var(--sl-color-neutral-0));
  }
  .button.button--warning:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-warning-500));
    border-color: rgb(var(--sl-color-warning-500));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button.button--warning${focusVisibleSelector}:not(.button--disabled) {
    background-color: rgb(var(--sl-color-warning-500));
    border-color: rgb(var(--sl-color-warning-500));
    color: rgb(var(--sl-color-neutral-0));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-warning-500) / var(--sl-focus-ring-alpha));
  }

  .button.button--warning:active:not(.button--disabled) {
    background-color: rgb(var(--sl-color-warning-600));
    border-color: rgb(var(--sl-color-warning-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  /* Danger */
  .button.button--danger {
    background-color: rgb(var(--sl-color-danger-600));
    border-color: rgb(var(--sl-color-danger-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button.button--danger:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-danger-500));
    border-color: rgb(var(--sl-color-danger-500));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button.button--danger${focusVisibleSelector}:not(.button--disabled) {
    background-color: rgb(var(--sl-color-danger-500));
    border-color: rgb(var(--sl-color-danger-500));
    color: rgb(var(--sl-color-neutral-0));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-danger-500) / var(--sl-focus-ring-alpha));
  }

  .button.button--danger:active:not(.button--disabled) {
    background-color: rgb(var(--sl-color-danger-600));
    border-color: rgb(var(--sl-color-danger-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: rgb(var(--sl-color-primary-600));
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: rgb(var(--sl-color-primary-500));
  }

  .button--text${focusVisibleSelector}:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: rgb(var(--sl-color-primary-500));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: rgb(var(--sl-color-primary-700));
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    display: flex;
    align-items: center;
  }

  .button--caret .button__caret svg {
    width: 1em;
    height: 1em;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-left: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-left: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-right: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-right: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-right: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first) .button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last) .button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-left: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--focus, .sl-button-group__button--first, [type='default']):not(:hover, :active, :focus))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    border-left: solid 1px rgb(var(--sl-color-neutral-0) / 20%);
  }

  /* Bump focused buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  :host(.sl-button-group__button--focus) {
    z-index: 2;
  }
`;
  var SlButton = class extends h3 {
    constructor() {
      super(...arguments);
      this.hasFocus = false;
      this.hasLabel = false;
      this.hasPrefix = false;
      this.hasSuffix = false;
      this.type = "default";
      this.size = "medium";
      this.caret = false;
      this.disabled = false;
      this.loading = false;
      this.pill = false;
      this.circle = false;
      this.submit = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.handleSlotChange();
    }
    click() {
      this.button.click();
    }
    focus(options) {
      this.button.focus(options);
    }
    blur() {
      this.button.blur();
    }
    handleSlotChange() {
      this.hasLabel = hasSlot(this);
      this.hasPrefix = hasSlot(this, "prefix");
      this.hasSuffix = hasSlot(this, "suffix");
    }
    handleBlur() {
      this.hasFocus = false;
      emit(this, "sl-blur");
    }
    handleFocus() {
      this.hasFocus = true;
      emit(this, "sl-focus");
    }
    handleClick(event) {
      if (this.disabled || this.loading) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
    render() {
      const isLink = this.href ? true : false;
      const interior = T`
      <span part="prefix" class="button__prefix">
        <slot @slotchange=${this.handleSlotChange} name="prefix"></slot>
      </span>
      <span part="label" class="button__label">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </span>
      <span part="suffix" class="button__suffix">
        <slot @slotchange=${this.handleSlotChange} name="suffix"></slot>
      </span>
      ${this.caret ? T`
            <span part="caret" class="button__caret">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          ` : ""}
      ${this.loading ? T`<sl-spinner></sl-spinner>` : ""}
    `;
      return isLink ? T`
          <a
            part="base"
            class=${e23({
        button: true,
        "button--default": this.type === "default",
        "button--primary": this.type === "primary",
        "button--success": this.type === "success",
        "button--neutral": this.type === "neutral",
        "button--warning": this.type === "warning",
        "button--danger": this.type === "danger",
        "button--text": this.type === "text",
        "button--small": this.size === "small",
        "button--medium": this.size === "medium",
        "button--large": this.size === "large",
        "button--caret": this.caret,
        "button--circle": this.circle,
        "button--disabled": this.disabled,
        "button--focused": this.hasFocus,
        "button--loading": this.loading,
        "button--pill": this.pill,
        "button--has-label": this.hasLabel,
        "button--has-prefix": this.hasPrefix,
        "button--has-suffix": this.hasSuffix
      })}
            href=${l4(this.href)}
            target=${l4(this.target)}
            download=${l4(this.download)}
            rel=${l4(this.target ? "noreferrer noopener" : void 0)}
            role="button"
            aria-disabled=${this.disabled ? "true" : "false"}
            tabindex=${this.disabled ? "-1" : "0"}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @click=${this.handleClick}
          >
            ${interior}
          </a>
        ` : T`
          <button
            part="base"
            class=${e23({
        button: true,
        "button--default": this.type === "default",
        "button--primary": this.type === "primary",
        "button--success": this.type === "success",
        "button--neutral": this.type === "neutral",
        "button--warning": this.type === "warning",
        "button--danger": this.type === "danger",
        "button--text": this.type === "text",
        "button--small": this.size === "small",
        "button--medium": this.size === "medium",
        "button--large": this.size === "large",
        "button--caret": this.caret,
        "button--circle": this.circle,
        "button--disabled": this.disabled,
        "button--focused": this.hasFocus,
        "button--loading": this.loading,
        "button--pill": this.pill,
        "button--has-label": this.hasLabel,
        "button--has-prefix": this.hasPrefix,
        "button--has-suffix": this.hasSuffix
      })}
            ?disabled=${this.disabled}
            type=${this.submit ? "submit" : "button"}
            name=${l4(this.name)}
            value=${l4(this.value)}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @click=${this.handleClick}
          >
            ${interior}
          </button>
        `;
    }
  };
  SlButton.styles = button_styles_default;
  __decorateClass([
    o22(".button")
  ], SlButton.prototype, "button", 2);
  __decorateClass([
    r4()
  ], SlButton.prototype, "hasFocus", 2);
  __decorateClass([
    r4()
  ], SlButton.prototype, "hasLabel", 2);
  __decorateClass([
    r4()
  ], SlButton.prototype, "hasPrefix", 2);
  __decorateClass([
    r4()
  ], SlButton.prototype, "hasSuffix", 2);
  __decorateClass([
    e4({ reflect: true })
  ], SlButton.prototype, "type", 2);
  __decorateClass([
    e4({ reflect: true })
  ], SlButton.prototype, "size", 2);
  __decorateClass([
    e4({ type: Boolean, reflect: true })
  ], SlButton.prototype, "caret", 2);
  __decorateClass([
    e4({ type: Boolean, reflect: true })
  ], SlButton.prototype, "disabled", 2);
  __decorateClass([
    e4({ type: Boolean, reflect: true })
  ], SlButton.prototype, "loading", 2);
  __decorateClass([
    e4({ type: Boolean, reflect: true })
  ], SlButton.prototype, "pill", 2);
  __decorateClass([
    e4({ type: Boolean, reflect: true })
  ], SlButton.prototype, "circle", 2);
  __decorateClass([
    e4({ type: Boolean, reflect: true })
  ], SlButton.prototype, "submit", 2);
  __decorateClass([
    e4()
  ], SlButton.prototype, "name", 2);
  __decorateClass([
    e4()
  ], SlButton.prototype, "value", 2);
  __decorateClass([
    e4()
  ], SlButton.prototype, "href", 2);
  __decorateClass([
    e4()
  ], SlButton.prototype, "target", 2);
  __decorateClass([
    e4()
  ], SlButton.prototype, "download", 2);
  SlButton = __decorateClass([
    n5("sl-button")
  ], SlButton);
  var button_default = SlButton;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.Z2K22P7T.js
  var spinner_styles_default = i2`
  ${component_styles_default}

  :host {
    --track-color: rgb(var(--sl-color-neutral-500) / 20%);
    --indicator-color: rgb(var(--sl-color-primary-600));
    --stroke-width: 2px;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    border-radius: 50%;
    border: solid var(--stroke-width) var(--track-color);
    border-top-color: var(--indicator-color);
    border-right-color: var(--indicator-color);
    animation: 1s linear infinite spin;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
  var SlSpinner = class extends h3 {
    render() {
      return T` <span part="base" class="spinner" aria-busy="true" aria-live="polite"></span> `;
    }
  };
  SlSpinner.styles = spinner_styles_default;
  SlSpinner = __decorateClass([
    n5("sl-spinner")
  ], SlSpinner);

  // node_modules/@shoelace-style/shoelace/dist/components/dialog/dialog.js
  var dialog_exports = {};
  __export(dialog_exports, {
    default: () => dialog_default
  });

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.DTSUHNT6.js
  function isTabbable(el) {
    const tag = el.tagName.toLowerCase();
    if (el.getAttribute("tabindex") === "-1") {
      return false;
    }
    if (el.hasAttribute("disabled")) {
      return false;
    }
    if (el.hasAttribute("aria-disabled") && el.getAttribute("aria-disabled") !== "false") {
      return false;
    }
    if (tag === "input" && el.getAttribute("type") === "radio" && !el.hasAttribute("checked")) {
      return false;
    }
    if (!el.offsetParent) {
      return false;
    }
    if (window.getComputedStyle(el).visibility === "hidden") {
      return false;
    }
    if ((tag === "audio" || tag === "video") && el.hasAttribute("controls")) {
      return true;
    }
    if (el.hasAttribute("tabindex")) {
      return true;
    }
    if (el.hasAttribute("contenteditable") && el.getAttribute("contenteditable") !== "false") {
      return true;
    }
    return ["button", "input", "select", "textarea", "a", "audio", "video", "summary"].includes(tag);
  }
  function getTabbableBoundary(root) {
    const allElements = [];
    function walk(el) {
      if (el instanceof HTMLElement) {
        allElements.push(el);
        if (el.shadowRoot && el.shadowRoot.mode === "open") {
          walk(el.shadowRoot);
        }
      }
      [...el.querySelectorAll("*")].map((e5) => walk(e5));
    }
    walk(root);
    const start2 = allElements.find((el) => isTabbable(el)) || null;
    const end2 = allElements.reverse().find((el) => isTabbable(el)) || null;
    return { start: start2, end: end2 };
  }

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P4ITZG26.js
  function isPreventScrollSupported() {
    let supported = false;
    document.createElement("div").focus({
      get preventScroll() {
        supported = true;
        return false;
      }
    });
    return supported;
  }
  var activeModals = [];
  var Modal = class {
    constructor(element) {
      this.tabDirection = "forward";
      this.element = element;
      this.handleFocusIn = this.handleFocusIn.bind(this);
      this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    activate() {
      activeModals.push(this.element);
      document.addEventListener("focusin", this.handleFocusIn);
      document.addEventListener("keydown", this.handleKeyDown);
    }
    deactivate() {
      activeModals = activeModals.filter((modal) => modal !== this.element);
      document.removeEventListener("focusin", this.handleFocusIn);
      document.removeEventListener("keydown", this.handleKeyDown);
    }
    isActive() {
      return activeModals[activeModals.length - 1] === this.element;
    }
    handleFocusIn(event) {
      const path = event.composedPath();
      if (this.isActive() && !path.includes(this.element)) {
        const { start: start2, end: end2 } = getTabbableBoundary(this.element);
        const target = this.tabDirection === "forward" ? start2 : end2;
        if (typeof (target == null ? void 0 : target.focus) === "function") {
          target.focus({ preventScroll: true });
        }
      }
    }
    handleKeyDown(event) {
      if (event.key === "Tab" && event.shiftKey) {
        this.tabDirection = "backward";
        setTimeout(() => this.tabDirection = "forward");
      }
    }
  };
  var modal_default = Modal;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.XAZN5AQ5.js
  function getOffset(element, parent) {
    return {
      top: Math.round(element.getBoundingClientRect().top - parent.getBoundingClientRect().top),
      left: Math.round(element.getBoundingClientRect().left - parent.getBoundingClientRect().left)
    };
  }
  var locks = new Set();
  function lockBodyScrolling(lockingEl) {
    locks.add(lockingEl);
    document.body.classList.add("sl-scroll-lock");
  }
  function unlockBodyScrolling(lockingEl) {
    locks.delete(lockingEl);
    if (locks.size === 0) {
      document.body.classList.remove("sl-scroll-lock");
    }
  }
  function scrollIntoView(element, container, direction = "vertical", behavior = "smooth") {
    const offset2 = getOffset(element, container);
    const offsetTop = offset2.top + container.scrollTop;
    const offsetLeft = offset2.left + container.scrollLeft;
    const minX = container.scrollLeft;
    const maxX = container.scrollLeft + container.offsetWidth;
    const minY = container.scrollTop;
    const maxY = container.scrollTop + container.offsetHeight;
    if (direction === "horizontal" || direction === "both") {
      if (offsetLeft < minX) {
        container.scrollTo({ left: offsetLeft, behavior });
      } else if (offsetLeft + element.clientWidth > maxX) {
        container.scrollTo({ left: offsetLeft - container.offsetWidth + element.clientWidth, behavior });
      }
    }
    if (direction === "vertical" || direction === "both") {
      if (offsetTop < minY) {
        container.scrollTo({ top: offsetTop, behavior });
      } else if (offsetTop + element.clientHeight > maxY) {
        container.scrollTo({ top: offsetTop - container.offsetHeight + element.clientHeight, behavior });
      }
    }
  }

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TPOKZYD5.js
  var dialog_styles_default = i2`
  ${component_styles_default}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-xx-large));
    max-height: calc(100% - var(--sl-spacing-xx-large));
    background-color: rgb(var(--sl-panel-background-color));
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
    transform: none;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
  }

  .dialog__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-x-large);
    padding: 0 var(--header-spacing);
  }

  .dialog__body {
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-left: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgb(var(--sl-overlay-background-color) / var(--sl-overlay-opacity));
  }
`;
  var hasPreventScroll = isPreventScrollSupported();
  var id = 0;
  var SlDialog = class extends h3 {
    constructor() {
      super(...arguments);
      this.componentId = `dialog-${++id}`;
      this.hasFooter = false;
      this.open = false;
      this.label = "";
      this.noHeader = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.modal = new modal_default(this);
      this.handleSlotChange();
    }
    firstUpdated() {
      this.dialog.hidden = !this.open;
      if (this.open) {
        this.modal.activate();
        lockBodyScrolling(this);
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      unlockBodyScrolling(this);
    }
    async show() {
      if (this.open) {
        return;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    async hide() {
      if (!this.open) {
        return;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    requestClose() {
      const slRequestClose = emit(this, "sl-request-close", { cancelable: true });
      if (slRequestClose.defaultPrevented) {
        const animation = getAnimation(this, "dialog.denyClose");
        animateTo(this.panel, animation.keyframes, animation.options);
        return;
      }
      this.hide();
    }
    handleKeyDown(event) {
      if (event.key === "Escape") {
        event.stopPropagation();
        this.requestClose();
      }
    }
    async handleOpenChange() {
      if (this.open) {
        emit(this, "sl-show");
        this.originalTrigger = document.activeElement;
        this.modal.activate();
        lockBodyScrolling(this);
        await Promise.all([stopAnimations(this.dialog), stopAnimations(this.overlay)]);
        this.dialog.hidden = false;
        if (hasPreventScroll) {
          const slInitialFocus = emit(this, "sl-initial-focus", { cancelable: true });
          if (!slInitialFocus.defaultPrevented) {
            this.panel.focus({ preventScroll: true });
          }
        }
        const panelAnimation = getAnimation(this, "dialog.show");
        const overlayAnimation = getAnimation(this, "dialog.overlay.show");
        await Promise.all([
          animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
          animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
        ]);
        if (!hasPreventScroll) {
          const slInitialFocus = emit(this, "sl-initial-focus", { cancelable: true });
          if (!slInitialFocus.defaultPrevented) {
            this.panel.focus({ preventScroll: true });
          }
        }
        emit(this, "sl-after-show");
      } else {
        emit(this, "sl-hide");
        this.modal.deactivate();
        await Promise.all([stopAnimations(this.dialog), stopAnimations(this.overlay)]);
        const panelAnimation = getAnimation(this, "dialog.hide");
        const overlayAnimation = getAnimation(this, "dialog.overlay.hide");
        await Promise.all([
          animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
          animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
        ]);
        this.dialog.hidden = true;
        unlockBodyScrolling(this);
        const trigger = this.originalTrigger;
        if (trigger && typeof trigger.focus === "function") {
          setTimeout(() => trigger.focus());
        }
        emit(this, "sl-after-hide");
      }
    }
    handleSlotChange() {
      this.hasFooter = hasSlot(this, "footer");
    }
    render() {
      return T`
      <div
        part="base"
        class=${e23({
        dialog: true,
        "dialog--open": this.open,
        "dialog--has-footer": this.hasFooter
      })}
        @keydown=${this.handleKeyDown}
      >
        <div part="overlay" class="dialog__overlay" @click=${this.requestClose} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${l4(this.noHeader ? this.label : void 0)}
          aria-labelledby=${l4(!this.noHeader ? `${this.componentId}-title` : void 0)}
          tabindex="0"
        >
          ${!this.noHeader ? T`
                <header part="header" class="dialog__header">
                  <span part="title" class="dialog__title" id=${`${this.componentId}-title`}>
                    <slot name="label"> ${this.label || String.fromCharCode(65279)} </slot>
                  </span>
                  <sl-icon-button
                    exportparts="base:close-button"
                    class="dialog__close"
                    name="x"
                    library="system"
                    @click="${this.requestClose}"
                  ></sl-icon-button>
                </header>
              ` : ""}

          <div part="body" class="dialog__body">
            <slot></slot>
          </div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer" @slotchange=${this.handleSlotChange}></slot>
          </footer>
        </div>
      </div>
    `;
    }
  };
  SlDialog.styles = dialog_styles_default;
  __decorateClass([
    o22(".dialog")
  ], SlDialog.prototype, "dialog", 2);
  __decorateClass([
    o22(".dialog__panel")
  ], SlDialog.prototype, "panel", 2);
  __decorateClass([
    o22(".dialog__overlay")
  ], SlDialog.prototype, "overlay", 2);
  __decorateClass([
    r4()
  ], SlDialog.prototype, "hasFooter", 2);
  __decorateClass([
    e4({ type: Boolean, reflect: true })
  ], SlDialog.prototype, "open", 2);
  __decorateClass([
    e4({ reflect: true })
  ], SlDialog.prototype, "label", 2);
  __decorateClass([
    e4({ attribute: "no-header", type: Boolean, reflect: true })
  ], SlDialog.prototype, "noHeader", 2);
  __decorateClass([
    watch("open", { waitUntilFirstUpdate: true })
  ], SlDialog.prototype, "handleOpenChange", 1);
  SlDialog = __decorateClass([
    n5("sl-dialog")
  ], SlDialog);
  var dialog_default = SlDialog;
  setDefaultAnimation("dialog.show", {
    keyframes: [
      { opacity: 0, transform: "scale(0.8)" },
      { opacity: 1, transform: "scale(1)" }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("dialog.hide", {
    keyframes: [
      { opacity: 1, transform: "scale(1)" },
      { opacity: 0, transform: "scale(0.8)" }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("dialog.denyClose", {
    keyframes: [{ transform: "scale(1)" }, { transform: "scale(1.02)" }, { transform: "scale(1)" }],
    options: { duration: 250 }
  });
  setDefaultAnimation("dialog.overlay.show", {
    keyframes: [{ opacity: 0 }, { opacity: 1 }],
    options: { duration: 250 }
  });
  setDefaultAnimation("dialog.overlay.hide", {
    keyframes: [{ opacity: 1 }, { opacity: 0 }],
    options: { duration: 250 }
  });

  // node_modules/@shoelace-style/shoelace/dist/components/icon/icon.js
  var icon_exports = {};
  __export(icon_exports, {
    default: () => icon_default
  });

  // node_modules/@shoelace-style/shoelace/dist/components/menu-item/menu-item.js
  var menu_item_exports = {};
  __export(menu_item_exports, {
    default: () => menu_item_default
  });

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMXMMBVI.js
  var menu_item_styles_default = i2`
  ${component_styles_default}

  :host {
    display: block;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    text-align: left;
    color: rgb(var(--sl-color-neutral-700));
    padding: var(--sl-spacing-xx-small) var(--sl-spacing-x-large);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    color: rgb(var(--sl-color-neutral-400));
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix ::slotted(*) {
    margin-right: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix ::slotted(*) {
    margin-left: var(--sl-spacing-x-small);
  }

  :host(:focus) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'])) .menu-item,
  :host(${focusVisibleSelector}:not(.sl-focus-invisible):not([aria-disabled='true'])) .menu-item {
    outline: none;
    background-color: rgb(var(--sl-color-primary-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  .menu-item .menu-item__check {
    display: flex;
    position: absolute;
    left: 0.5em;
    top: calc(50% - 0.5em);
    visibility: hidden;
    align-items: center;
    font-size: inherit;
  }

  .menu-item--checked .menu-item__check {
    visibility: visible;
  }
`;
  var SlMenuItem = class extends h3 {
    constructor() {
      super(...arguments);
      this.checked = false;
      this.value = "";
      this.disabled = false;
    }
    firstUpdated() {
      this.setAttribute("role", "menuitem");
    }
    handleCheckedChange() {
      this.setAttribute("aria-checked", String(this.checked));
    }
    handleDisabledChange() {
      this.setAttribute("aria-disabled", String(this.disabled));
    }
    render() {
      return T`
      <div
        part="base"
        class=${e23({
        "menu-item": true,
        "menu-item--checked": this.checked,
        "menu-item--disabled": this.disabled
      })}
      >
        <sl-icon
          part="checked-icon"
          class="menu-item__check"
          name="check"
          library="system"
          aria-hidden="true"
        ></sl-icon>

        <span part="prefix" class="menu-item__prefix">
          <slot name="prefix"></slot>
        </span>

        <span part="label" class="menu-item__label">
          <slot></slot>
        </span>

        <span part="suffix" class="menu-item__suffix">
          <slot name="suffix"></slot>
        </span>
      </div>
    `;
    }
  };
  SlMenuItem.styles = menu_item_styles_default;
  __decorateClass([
    o22(".menu-item")
  ], SlMenuItem.prototype, "menuItem", 2);
  __decorateClass([
    e4({ type: Boolean, reflect: true })
  ], SlMenuItem.prototype, "checked", 2);
  __decorateClass([
    e4()
  ], SlMenuItem.prototype, "value", 2);
  __decorateClass([
    e4({ type: Boolean, reflect: true })
  ], SlMenuItem.prototype, "disabled", 2);
  __decorateClass([
    watch("checked")
  ], SlMenuItem.prototype, "handleCheckedChange", 1);
  __decorateClass([
    watch("disabled")
  ], SlMenuItem.prototype, "handleDisabledChange", 1);
  SlMenuItem = __decorateClass([
    n5("sl-menu-item")
  ], SlMenuItem);
  var menu_item_default = SlMenuItem;

  // node_modules/@shoelace-style/shoelace/dist/components/select/select.js
  var select_exports = {};
  __export(select_exports, {
    default: () => select_default
  });

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ITPQKBCZ.js
  var renderFormControl = (props, input) => {
    const hasLabel = props.label ? true : !!props.hasLabelSlot;
    const hasHelpText = props.helpText ? true : !!props.hasHelpTextSlot;
    return T`
    <div
      part="form-control"
      class=${e23({
      "form-control": true,
      "form-control--small": props.size === "small",
      "form-control--medium": props.size === "medium",
      "form-control--large": props.size === "large",
      "form-control--has-label": hasLabel,
      "form-control--has-help-text": hasHelpText
    })}
    >
      <label
        part="label"
        id=${l4(props.labelId)}
        class="form-control__label"
        for=${props.inputId}
        aria-hidden=${hasLabel ? "false" : "true"}
        @click=${(event) => props.onLabelClick ? props.onLabelClick(event) : null}
      >
        <slot name="label">${props.label}</slot>
      </label>

      <div class="form-control__input">${T`${input}`}</div>

      <div
        part="help-text"
        id=${l4(props.helpTextId)}
        class="form-control__help-text"
        aria-hidden=${hasHelpText ? "false" : "true"}
      >
        <slot name="help-text">${props.helpText}</slot>
      </div>
    </div>
  `;
  };
  function getLabelledBy(props) {
    const labelledBy = [
      props.label || props.hasLabelSlot ? props.labelId : "",
      props.helpText || props.hasHelpTextSlot ? props.helpTextId : ""
    ].filter((val) => val);
    return labelledBy.join(" ") || void 0;
  }
  var form_control_styles_default = i2`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-xxx-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control_label {
    font-size: var(--sl-input-label-font-size-large);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: rgb(var(--sl-input-help-text-color));
  }

  .form-control--has-help-text .form-control__help-text ::slotted(*) {
    margin-top: var(--sl-spacing-xxx-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.DGIRBXTB.js
  var select_styles_default = i2`
  ${component_styles_default}
  ${form_control_styles_default}

  :host {
    display: block;
  }

  .select {
    display: block;
  }

  .select__box {
    display: inline-flex;
    align-items: center;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    background-color: rgb(var(--sl-input-background-color));
    border: solid var(--sl-input-border-width) rgb(var(--sl-input-border-color));
    vertical-align: middle;
    overflow: hidden;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .select:not(.select--disabled) .select__box:hover {
    background-color: rgb(var(--sl-input-background-color-hover));
    border-color: rgb(var(--sl-input-border-color-hover));
    color: rgb(var(--sl-input-color-hover));
  }

  .select.select--focused:not(.select--disabled) .select__box {
    background-color: rgb(var(--sl-input-background-color-focus));
    border-color: rgb(var(--sl-input-border-color-focus));
    box-shadow: var(--sl-focus-ring);
    outline: none;
    color: rgb(var(--sl-input-color-focus));
  }

  .select--disabled .select__box {
    background-color: rgb(var(--sl-input-background-color-disabled));
    border-color: rgb(var(--sl-input-border-color-disabled));
    color: rgb(var(--sl-input-color-disabled));
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--disabled .select__tags,
  .select--disabled .select__clear {
    pointer-events: none;
  }

  .select__prefix {
    display: inline-flex;
    align-items: center;
    color: rgb(var(--sl-input-placeholder-color));
  }

  .select__label {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    user-select: none;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .select__label::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .select__clear {
    flex: 0 0 auto;
    width: 1.25em;
  }

  .select__suffix {
    display: inline-flex;
    align-items: center;
    color: rgb(var(--sl-input-placeholder-color));
  }

  .select__icon {
    flex: 0 0 auto;
    display: inline-flex;
    transition: var(--sl-transition-medium) transform ease;
  }

  .select--open .select__icon {
    transform: rotate(-180deg);
  }

  /* Placeholder */
  .select--placeholder-visible .select__label {
    color: rgb(var(--sl-input-placeholder-color));
  }

  .select--disabled.select--placeholder-visible .select__label {
    color: rgb(var(--sl-input-placeholder-color-disabled));
  }

  /* Tags */
  .select__tags {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: left;
    margin-left: var(--sl-spacing-xx-small);
  }

  /* Hidden input (for form control validation to show) */
  .select__hidden-select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }

  /*
   * Size modifiers
   */

  /* Small */
  .select--small .select__box {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
  }

  .select--small .select__prefix ::slotted(*) {
    margin-left: var(--sl-input-spacing-small);
  }

  .select--small .select__label {
    margin: 0 var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-right: var(--sl-input-spacing-small);
  }

  .select--small .select__suffix ::slotted(*) {
    margin-right: var(--sl-input-spacing-small);
  }

  .select--small .select__icon {
    margin-right: var(--sl-input-spacing-small);
  }

  .select--small .select__tags {
    padding-bottom: 2px;
  }

  .select--small .select__tags sl-tag {
    padding-top: 2px;
  }

  .select--small .select__tags sl-tag:not(:last-of-type) {
    margin-right: var(--sl-spacing-xx-small);
  }

  .select--small.select--has-tags .select__label {
    margin-left: 0;
  }

  /* Medium */
  .select--medium .select__box {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
  }

  .select--medium .select__prefix ::slotted(*) {
    margin-left: var(--sl-input-spacing-medium);
  }

  .select--medium .select__label {
    margin: 0 var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-right: var(--sl-input-spacing-medium);
  }

  .select--medium .select__suffix ::slotted(*) {
    margin-right: var(--sl-input-spacing-medium);
  }

  .select--medium .select__icon {
    margin-right: var(--sl-input-spacing-medium);
  }

  .select--medium .select__tags {
    padding-bottom: 3px;
  }

  .select--medium .select__tags sl-tag {
    padding-top: 3px;
  }

  .select--medium .select__tags sl-tag:not(:last-of-type) {
    margin-right: var(--sl-spacing-xx-small);
  }

  .select--medium.select--has-tags .select__label {
    margin-left: 0;
  }

  /* Large */
  .select--large .select__box {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
  }

  .select--large .select__prefix ::slotted(*) {
    margin-left: var(--sl-input-spacing-large);
  }

  .select--large .select__label {
    margin: 0 var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-right: var(--sl-input-spacing-large);
  }

  .select--large .select__suffix ::slotted(*) {
    margin-right: var(--sl-input-spacing-large);
  }

  .select--large .select__icon {
    margin-right: var(--sl-input-spacing-large);
  }

  .select--large .select__tags {
    padding-bottom: 4px;
  }
  .select--large .select__tags sl-tag {
    padding-top: 4px;
  }

  .select--large .select__tags sl-tag:not(:last-of-type) {
    margin-right: var(--sl-spacing-xx-small);
  }

  .select--large.select--has-tags .select__label {
    margin-left: 0;
  }

  /*
   * Pill modifier
   */
  .select--pill.select--small .select__box {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__box {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__box {
    border-radius: var(--sl-input-height-large);
  }
`;
  var id2 = 0;
  var SlSelect = class extends h3 {
    constructor() {
      super(...arguments);
      this.inputId = `select-${++id2}`;
      this.helpTextId = `select-help-text-${id2}`;
      this.labelId = `select-label-${id2}`;
      this.hasFocus = false;
      this.hasHelpTextSlot = false;
      this.hasLabelSlot = false;
      this.isOpen = false;
      this.displayLabel = "";
      this.displayTags = [];
      this.multiple = false;
      this.maxTagsVisible = 3;
      this.disabled = false;
      this.name = "";
      this.placeholder = "";
      this.size = "medium";
      this.hoist = false;
      this.value = "";
      this.pill = false;
      this.required = false;
      this.clearable = false;
      this.invalid = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.handleSlotChange = this.handleSlotChange.bind(this);
      this.resizeObserver = new ResizeObserver(() => this.resizeMenu());
      this.updateComplete.then(() => {
        this.resizeObserver.observe(this);
        this.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
        this.syncItemsFromValue();
      });
    }
    firstUpdated() {
      this.invalid = !this.input.checkValidity();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.resizeObserver.unobserve(this);
      this.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
    }
    reportValidity() {
      return this.input.reportValidity();
    }
    setCustomValidity(message) {
      this.input.setCustomValidity(message);
      this.invalid = !this.input.checkValidity();
    }
    getItemLabel(item) {
      const slot = item.shadowRoot.querySelector("slot:not([name])");
      return getTextContent(slot);
    }
    getItems() {
      return [...this.querySelectorAll("sl-menu-item")];
    }
    getValueAsArray() {
      if (this.multiple && this.value === "") {
        return [];
      }
      return Array.isArray(this.value) ? this.value : [this.value];
    }
    handleBlur() {
      if (!this.isOpen) {
        this.hasFocus = false;
        emit(this, "sl-blur");
      }
    }
    handleClearClick(event) {
      event.stopPropagation();
      this.value = this.multiple ? [] : "";
      emit(this, "sl-clear");
      this.syncItemsFromValue();
    }
    handleDisabledChange() {
      if (this.disabled && this.isOpen) {
        this.dropdown.hide();
      }
      if (this.input) {
        this.input.disabled = this.disabled;
        this.invalid = !this.input.checkValidity();
      }
    }
    handleFocus() {
      if (!this.hasFocus) {
        this.hasFocus = true;
        emit(this, "sl-focus");
      }
    }
    handleKeyDown(event) {
      const target = event.target;
      const items = this.getItems();
      const firstItem = items[0];
      const lastItem = items[items.length - 1];
      if (target.tagName.toLowerCase() === "sl-tag") {
        return;
      }
      if (event.key === "Tab") {
        if (this.isOpen) {
          this.dropdown.hide();
        }
        return;
      }
      if (["ArrowDown", "ArrowUp"].includes(event.key)) {
        event.preventDefault();
        if (!this.isOpen) {
          this.dropdown.show();
        }
        if (event.key === "ArrowDown" && firstItem) {
          this.menu.setCurrentItem(firstItem);
          firstItem.focus();
          return;
        }
        if (event.key === "ArrowUp" && lastItem) {
          this.menu.setCurrentItem(lastItem);
          lastItem.focus();
          return;
        }
      }
      if (event.ctrlKey || event.metaKey) {
        return;
      }
      if (!this.isOpen && event.key.length === 1) {
        event.stopPropagation();
        event.preventDefault();
        this.dropdown.show();
        this.menu.typeToSelect(event.key);
      }
    }
    handleLabelClick() {
      var _a;
      const box = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(".select__box");
      box.focus();
    }
    handleMenuSelect(event) {
      const item = event.detail.item;
      if (this.multiple) {
        this.value = this.value.includes(item.value) ? this.value.filter((v2) => v2 !== item.value) : [...this.value, item.value];
      } else {
        this.value = item.value;
      }
      this.syncItemsFromValue();
    }
    handleMenuShow() {
      this.resizeMenu();
      this.isOpen = true;
    }
    handleMenuHide() {
      this.isOpen = false;
      this.box.focus();
    }
    handleMultipleChange() {
      const value = this.getValueAsArray();
      this.value = this.multiple ? value : value[0] || "";
      this.syncItemsFromValue();
    }
    async handleSlotChange() {
      this.hasHelpTextSlot = hasSlot(this, "help-text");
      this.hasLabelSlot = hasSlot(this, "label");
      const items = this.getItems();
      const values = [];
      items.map((item) => {
        if (values.includes(item.value)) {
          console.error(`Duplicate value found in <sl-select> menu item: '${item.value}'`, item);
        }
        values.push(item.value);
      });
      await Promise.all(items.map((item) => item.render)).then(() => this.syncItemsFromValue());
    }
    handleTagInteraction(event) {
      const path = event.composedPath();
      const clearButton = path.find((el) => {
        if (el instanceof HTMLElement) {
          const element = el;
          return element.classList.contains("tag__clear");
        }
        return false;
      });
      if (clearButton) {
        event.stopPropagation();
      }
    }
    async handleValueChange() {
      this.syncItemsFromValue();
      await this.updateComplete;
      this.invalid = !this.input.checkValidity();
      emit(this, "sl-change");
    }
    resizeMenu() {
      var _a;
      const box = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(".select__box");
      this.menu.style.width = `${box.clientWidth}px`;
      if (this.dropdown) {
        this.dropdown.reposition();
      }
    }
    syncItemsFromValue() {
      const items = this.getItems();
      const value = this.getValueAsArray();
      items.map((item) => item.checked = value.includes(item.value));
      if (this.multiple) {
        const checkedItems = items.filter((item) => value.includes(item.value));
        this.displayLabel = checkedItems[0] ? this.getItemLabel(checkedItems[0]) : "";
        this.displayTags = checkedItems.map((item) => {
          return T`
          <sl-tag
            exportparts="base:tag"
            type="neutral"
            size=${this.size}
            ?pill=${this.pill}
            clearable
            @click=${this.handleTagInteraction}
            @keydown=${this.handleTagInteraction}
            @sl-clear=${(event) => {
            event.stopPropagation();
            if (!this.disabled) {
              item.checked = false;
              this.syncValueFromItems();
            }
          }}
          >
            ${this.getItemLabel(item)}
          </sl-tag>
        `;
        });
        if (this.maxTagsVisible > 0 && this.displayTags.length > this.maxTagsVisible) {
          const total = this.displayTags.length;
          this.displayLabel = "";
          this.displayTags = this.displayTags.slice(0, this.maxTagsVisible);
          this.displayTags.push(T`
          <sl-tag exportparts="base:tag" type="neutral" size=${this.size}> +${total - this.maxTagsVisible} </sl-tag>
        `);
        }
      } else {
        const checkedItem = items.filter((item) => item.value === value[0])[0];
        this.displayLabel = checkedItem ? this.getItemLabel(checkedItem) : "";
        this.displayTags = [];
      }
    }
    syncValueFromItems() {
      const items = this.getItems();
      const checkedItems = items.filter((item) => item.checked);
      const checkedValues = checkedItems.map((item) => item.value);
      if (this.multiple) {
        this.value = this.value.filter((val) => checkedValues.includes(val));
      } else {
        this.value = checkedValues.length > 0 ? checkedValues[0] : "";
      }
    }
    render() {
      var _a;
      const hasSelection = this.multiple ? this.value.length > 0 : this.value !== "";
      return renderFormControl({
        inputId: this.inputId,
        label: this.label,
        labelId: this.labelId,
        hasLabelSlot: this.hasLabelSlot,
        helpTextId: this.helpTextId,
        helpText: this.helpText,
        hasHelpTextSlot: this.hasHelpTextSlot,
        size: this.size,
        onLabelClick: () => this.handleLabelClick()
      }, T`
        <sl-dropdown
          part="base"
          .hoist=${this.hoist}
          .stayOpenOnSelect=${this.multiple}
          .containingElement=${this}
          ?disabled=${this.disabled}
          class=${e23({
        select: true,
        "select--open": this.isOpen,
        "select--empty": ((_a = this.value) == null ? void 0 : _a.length) === 0,
        "select--focused": this.hasFocus,
        "select--clearable": this.clearable,
        "select--disabled": this.disabled,
        "select--multiple": this.multiple,
        "select--has-tags": this.multiple && this.displayTags.length > 0,
        "select--placeholder-visible": this.displayLabel === "",
        "select--small": this.size === "small",
        "select--medium": this.size === "medium",
        "select--large": this.size === "large",
        "select--pill": this.pill,
        "select--invalid": this.invalid
      })}
          @sl-show=${this.handleMenuShow}
          @sl-hide=${this.handleMenuHide}
        >
          <div
            slot="trigger"
            id=${this.inputId}
            class="select__box"
            role="combobox"
            aria-labelledby=${l4(getLabelledBy({
        label: this.label,
        labelId: this.labelId,
        hasLabelSlot: this.hasLabelSlot,
        helpText: this.helpText,
        helpTextId: this.helpTextId,
        hasHelpTextSlot: this.hasHelpTextSlot
      }))}
            aria-haspopup="true"
            aria-expanded=${this.isOpen ? "true" : "false"}
            tabindex=${this.disabled ? "-1" : "0"}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          >
            <span part="prefix" class="select__prefix">
              <slot name="prefix"></slot>
            </span>

            <div class="select__label">
              ${this.displayTags.length ? T` <span part="tags" class="select__tags"> ${this.displayTags} </span> ` : this.displayLabel || this.placeholder}
            </div>

            ${this.clearable && hasSelection ? T`
                  <sl-icon-button
                    exportparts="base:clear-button"
                    class="select__clear"
                    name="x-circle"
                    library="system"
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  ></sl-icon-button>
                ` : ""}

            <span part="suffix" class="select__suffix">
              <slot name="suffix"></slot>
            </span>

            <span part="icon" class="select__icon" aria-hidden="true">
              <sl-icon name="chevron-down" library="system"></sl-icon>
            </span>

            <!-- The hidden input tricks the browser's built-in validation so it works as expected. We use an input
            instead of a select because, otherwise, iOS will show a list of options during validation. -->
            <input
              class="select__hidden-select"
              aria-hidden="true"
              ?required=${this.required}
              .value=${hasSelection ? "1" : ""}
              tabindex="-1"
            />
          </div>

          <sl-menu part="menu" class="select__menu" @sl-select=${this.handleMenuSelect}>
            <slot @slotchange=${this.handleSlotChange}></slot>
          </sl-menu>
        </sl-dropdown>
      `);
    }
  };
  SlSelect.styles = select_styles_default;
  __decorateClass([
    o22(".select")
  ], SlSelect.prototype, "dropdown", 2);
  __decorateClass([
    o22(".select__box")
  ], SlSelect.prototype, "box", 2);
  __decorateClass([
    o22(".select__hidden-select")
  ], SlSelect.prototype, "input", 2);
  __decorateClass([
    o22(".select__menu")
  ], SlSelect.prototype, "menu", 2);
  __decorateClass([
    r4()
  ], SlSelect.prototype, "hasFocus", 2);
  __decorateClass([
    r4()
  ], SlSelect.prototype, "hasHelpTextSlot", 2);
  __decorateClass([
    r4()
  ], SlSelect.prototype, "hasLabelSlot", 2);
  __decorateClass([
    r4()
  ], SlSelect.prototype, "isOpen", 2);
  __decorateClass([
    r4()
  ], SlSelect.prototype, "displayLabel", 2);
  __decorateClass([
    r4()
  ], SlSelect.prototype, "displayTags", 2);
  __decorateClass([
    e4({ type: Boolean, reflect: true })
  ], SlSelect.prototype, "multiple", 2);
  __decorateClass([
    e4({ attribute: "max-tags-visible", type: Number })
  ], SlSelect.prototype, "maxTagsVisible", 2);
  __decorateClass([
    e4({ type: Boolean, reflect: true })
  ], SlSelect.prototype, "disabled", 2);
  __decorateClass([
    e4()
  ], SlSelect.prototype, "name", 2);
  __decorateClass([
    e4()
  ], SlSelect.prototype, "placeholder", 2);
  __decorateClass([
    e4()
  ], SlSelect.prototype, "size", 2);
  __decorateClass([
    e4({ type: Boolean })
  ], SlSelect.prototype, "hoist", 2);
  __decorateClass([
    e4()
  ], SlSelect.prototype, "value", 2);
  __decorateClass([
    e4({ type: Boolean, reflect: true })
  ], SlSelect.prototype, "pill", 2);
  __decorateClass([
    e4()
  ], SlSelect.prototype, "label", 2);
  __decorateClass([
    e4({ attribute: "help-text" })
  ], SlSelect.prototype, "helpText", 2);
  __decorateClass([
    e4({ type: Boolean, reflect: true })
  ], SlSelect.prototype, "required", 2);
  __decorateClass([
    e4({ type: Boolean })
  ], SlSelect.prototype, "clearable", 2);
  __decorateClass([
    e4({ type: Boolean, reflect: true })
  ], SlSelect.prototype, "invalid", 2);
  __decorateClass([
    watch("disabled")
  ], SlSelect.prototype, "handleDisabledChange", 1);
  __decorateClass([
    watch("multiple")
  ], SlSelect.prototype, "handleMultipleChange", 1);
  __decorateClass([
    watch("helpText"),
    watch("label")
  ], SlSelect.prototype, "handleSlotChange", 1);
  __decorateClass([
    watch("value", { waitUntilFirstUpdate: true })
  ], SlSelect.prototype, "handleValueChange", 1);
  SlSelect = __decorateClass([
    n5("sl-select")
  ], SlSelect);
  var select_default = SlSelect;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TEQ2YUZY.js
  var tag_styles_default = i2`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    cursor: default;
  }

  .tag__clear::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Type modifiers
   */

  .tag--primary {
    background-color: rgb(var(--sl-color-primary-50));
    border-color: rgb(var(--sl-color-primary-200));
    color: rgb(var(--sl-color-primary-800));
  }

  .tag--success {
    background-color: rgb(var(--sl-color-success-50));
    border-color: rgb(var(--sl-color-success-200));
    color: rgb(var(--sl-color-success-800));
  }

  .tag--neutral {
    background-color: rgb(var(--sl-color-neutral-50));
    border-color: rgb(var(--sl-color-neutral-200));
    color: rgb(var(--sl-color-neutral-800));
  }

  .tag--warning {
    background-color: rgb(var(--sl-color-warning-50));
    border-color: rgb(var(--sl-color-warning-200));
    color: rgb(var(--sl-color-warning-800));
  }

  .tag--danger {
    background-color: rgb(var(--sl-color-danger-50));
    border-color: rgb(var(--sl-color-danger-200));
    color: rgb(var(--sl-color-danger-800));
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--small .tag__clear {
    margin-left: var(--sl-spacing-xx-small);
    margin-right: calc(-1 * var(--sl-spacing-xxx-small));
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag__clear {
    margin-left: var(--sl-spacing-xx-small);
    margin-right: calc(-1 * var(--sl-spacing-xx-small));
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__clear {
    margin-left: var(--sl-spacing-xx-small);
    margin-right: calc(-1 * var(--sl-spacing-x-small));
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`;
  var SlTag = class extends h3 {
    constructor() {
      super(...arguments);
      this.type = "primary";
      this.size = "medium";
      this.pill = false;
      this.clearable = false;
    }
    handleClearClick() {
      emit(this, "sl-clear");
    }
    render() {
      return T`
      <span
        part="base"
        class=${e23({
        tag: true,
        "tag--primary": this.type === "primary",
        "tag--success": this.type === "success",
        "tag--neutral": this.type === "neutral",
        "tag--warning": this.type === "warning",
        "tag--danger": this.type === "danger",
        "tag--text": this.type === "text",
        "tag--small": this.size === "small",
        "tag--medium": this.size === "medium",
        "tag--large": this.size === "large",
        "tag--pill": this.pill,
        "tag--clearable": this.clearable
      })}
      >
        <span part="content" class="tag__content">
          <slot></slot>
        </span>

        ${this.clearable ? T`
              <sl-icon-button
                exportparts="base:clear-button"
                name="x"
                library="system"
                class="tag__clear"
                @click=${this.handleClearClick}
              ></sl-icon-button>
            ` : ""}
      </span>
    `;
    }
  };
  SlTag.styles = tag_styles_default;
  __decorateClass([
    e4({ reflect: true })
  ], SlTag.prototype, "type", 2);
  __decorateClass([
    e4({ reflect: true })
  ], SlTag.prototype, "size", 2);
  __decorateClass([
    e4({ type: Boolean, reflect: true })
  ], SlTag.prototype, "pill", 2);
  __decorateClass([
    e4({ type: Boolean })
  ], SlTag.prototype, "clearable", 2);
  SlTag = __decorateClass([
    n5("sl-tag")
  ], SlTag);

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.O4FL7TWV.js
  var menu_styles_default = i2`
  ${component_styles_default}

  :host {
    display: block;
  }

  .menu {
    padding: var(--sl-spacing-x-small) 0;
  }
`;
  var SlMenu = class extends h3 {
    constructor() {
      super(...arguments);
      this.typeToSelectString = "";
    }
    getAllItems(options = { includeDisabled: true }) {
      return [...this.defaultSlot.assignedElements({ flatten: true })].filter((el) => {
        if (el.getAttribute("role") !== "menuitem") {
          return false;
        }
        if (!(options == null ? void 0 : options.includeDisabled) && el.disabled) {
          return false;
        }
        return true;
      });
    }
    getCurrentItem() {
      return this.getAllItems({ includeDisabled: false }).find((i23) => i23.getAttribute("tabindex") === "0");
    }
    setCurrentItem(item) {
      const items = this.getAllItems({ includeDisabled: false });
      let activeItem = item.disabled ? items[0] : item;
      items.map((i23) => i23.setAttribute("tabindex", i23 === activeItem ? "0" : "-1"));
    }
    typeToSelect(key) {
      const items = this.getAllItems({ includeDisabled: false });
      clearTimeout(this.typeToSelectTimeout);
      this.typeToSelectTimeout = setTimeout(() => this.typeToSelectString = "", 750);
      this.typeToSelectString += key.toLowerCase();
      if (!hasFocusVisible) {
        items.map((item) => item.classList.remove("sl-focus-invisible"));
      }
      for (const item of items) {
        const slot = item.shadowRoot.querySelector("slot:not([name])");
        const label = getTextContent(slot).toLowerCase().trim();
        if (label.substring(0, this.typeToSelectString.length) === this.typeToSelectString) {
          this.setCurrentItem(item);
          item.focus();
          break;
        }
      }
    }
    handleClick(event) {
      const target = event.target;
      const item = target.closest("sl-menu-item");
      if (item && !item.disabled) {
        emit(this, "sl-select", { detail: { item } });
      }
    }
    handleKeyUp() {
      if (!hasFocusVisible) {
        const items = this.getAllItems();
        items.map((item) => item.classList.remove("sl-focus-invisible"));
      }
    }
    handleKeyDown(event) {
      if (event.key === "Enter") {
        const item = this.getCurrentItem();
        event.preventDefault();
        if (item) {
          item.click();
        }
      }
      if (event.key === " ") {
        event.preventDefault();
      }
      if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
        const items = this.getAllItems({ includeDisabled: false });
        const activeItem = this.getCurrentItem();
        let index = activeItem ? items.indexOf(activeItem) : 0;
        if (items.length) {
          event.preventDefault();
          if (event.key === "ArrowDown") {
            index++;
          } else if (event.key === "ArrowUp") {
            index--;
          } else if (event.key === "Home") {
            index = 0;
          } else if (event.key === "End") {
            index = items.length - 1;
          }
          if (index < 0)
            index = 0;
          if (index > items.length - 1)
            index = items.length - 1;
          this.setCurrentItem(items[index]);
          items[index].focus();
          return;
        }
      }
      this.typeToSelect(event.key);
    }
    handleMouseDown(event) {
      const target = event.target;
      if (target.getAttribute("role") === "menuitem") {
        this.setCurrentItem(target);
        if (!hasFocusVisible) {
          target.classList.add("sl-focus-invisible");
        }
      }
    }
    handleSlotChange() {
      const items = this.getAllItems({ includeDisabled: false });
      if (items.length) {
        this.setCurrentItem(items[0]);
      }
    }
    render() {
      return T`
      <div
        part="base"
        class="menu"
        role="menu"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @keyup=${this.handleKeyUp}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
    }
  };
  SlMenu.styles = menu_styles_default;
  __decorateClass([
    o22(".menu")
  ], SlMenu.prototype, "menu", 2);
  __decorateClass([
    o22("slot")
  ], SlMenu.prototype, "defaultSlot", 2);
  SlMenu = __decorateClass([
    n5("sl-menu")
  ], SlMenu);

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GADG7AUG.js
  function getBoundingClientRect(element) {
    var rect = element.getBoundingClientRect();
    return {
      width: rect.width,
      height: rect.height,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      x: rect.left,
      y: rect.top
    };
  }
  function getWindow(node) {
    if (node.toString() !== "[object Window]") {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
  }
  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft,
      scrollTop
    };
  }
  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }
  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }
  function isShadowRoot(node) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }
  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }
  function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
  }
  function getDocumentElement(element) {
    return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
  }
  function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }
  function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function isScrollParent(element) {
    var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }
  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement);
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }
  function getLayoutRect(element) {
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }
  function getParentNode(element) {
    if (getNodeName(element) === "html") {
      return element;
    }
    return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
  }
  function getScrollParent(node) {
    if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
      return node.ownerDocument.body;
    }
    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }
    return getScrollParent(getParentNode(node));
  }
  function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) {
      list = [];
    }
    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
  }
  function isTableElement(element) {
    return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
  }
  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
      return null;
    }
    return element.offsetParent;
  }
  function getContainingBlock(element) {
    var isFirefox = navigator.userAgent.toLowerCase().includes("firefox");
    var currentNode = getParentNode(element);
    while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle(currentNode);
      if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].includes(css.willChange) || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }
    return null;
  }
  function getOffsetParent(element) {
    var window2 = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
      offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
      return window2;
    }
    return offsetParent || getContainingBlock(element) || window2;
  }
  var top = "top";
  var bottom = "bottom";
  var right = "right";
  var left = "left";
  var auto = "auto";
  var basePlacements = [top, bottom, right, left];
  var start = "start";
  var end = "end";
  var clippingParents = "clippingParents";
  var viewport = "viewport";
  var popper = "popper";
  var reference = "reference";
  var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []);
  var beforeRead = "beforeRead";
  var read = "read";
  var afterRead = "afterRead";
  var beforeMain = "beforeMain";
  var main = "main";
  var afterMain = "afterMain";
  var beforeWrite = "beforeWrite";
  var write = "write";
  var afterWrite = "afterWrite";
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
  function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
      map.set(modifier.name, modifier);
    });
    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function(dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);
          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
      if (!visited.has(modifier.name)) {
        sort(modifier);
      }
    });
    return result;
  }
  function orderModifiers(modifiers) {
    var orderedModifiers = order(modifiers);
    return modifierPhases.reduce(function(acc, phase) {
      return acc.concat(orderedModifiers.filter(function(modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }
  function debounce(fn2) {
    var pending;
    return function() {
      if (!pending) {
        pending = new Promise(function(resolve) {
          Promise.resolve().then(function() {
            pending = void 0;
            resolve(fn2());
          });
        });
      }
      return pending;
    };
  }
  function getBasePlacement(placement) {
    return placement.split("-")[0];
  }
  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged2, current) {
      var existing = merged2[current.name];
      merged2[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged2;
    }, {});
    return Object.keys(merged).map(function(key) {
      return merged[key];
    });
  }
  function getViewportRect(element) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x2 = 0;
    var y2 = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        x2 = visualViewport.offsetLeft;
        y2 = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x: x2 + getWindowScrollBarX(element),
      y: y2
    };
  }
  var max = Math.max;
  var min = Math.min;
  var round = Math.round;
  function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x2 = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y2 = -winScroll.scrollTop;
    if (getComputedStyle(body || html).direction === "rtl") {
      x2 += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }
    return {
      width,
      height,
      x: x2,
      y: y2
    };
  }
  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode();
    if (parent.contains(child)) {
      return true;
    } else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;
      do {
        if (next && parent.isSameNode(next)) {
          return true;
        }
        next = next.parentNode || next.host;
      } while (next);
    }
    return false;
  }
  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }
  function getInnerBoundingClientRect(element) {
    var rect = getBoundingClientRect(element);
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }
  function getClientRectFromMixedType(element, clippingParent) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  }
  function getClippingParents(element) {
    var clippingParents2 = listScrollParents(getParentNode(element));
    var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
    if (!isElement(clipperElement)) {
      return [];
    }
    return clippingParents2.filter(function(clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
    });
  }
  function getClippingRect(element, boundary, rootBoundary) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents2[0];
    var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }
  function getVariation(placement) {
    return placement.split("-")[1];
  }
  function getMainAxisFromPlacement(placement) {
    return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
  }
  function computeOffsets(_ref) {
    var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference2.x + reference2.width / 2 - element.width / 2;
    var commonY = reference2.y + reference2.height / 2 - element.height / 2;
    var offsets;
    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference2.y - element.height
        };
        break;
      case bottom:
        offsets = {
          x: commonX,
          y: reference2.y + reference2.height
        };
        break;
      case right:
        offsets = {
          x: reference2.x + reference2.width,
          y: commonY
        };
        break;
      case left:
        offsets = {
          x: reference2.x - element.width,
          y: commonY
        };
        break;
      default:
        offsets = {
          x: reference2.x,
          y: reference2.y
        };
    }
    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
      var len = mainAxis === "y" ? "height" : "width";
      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
          break;
        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
          break;
        default:
      }
    }
    return offsets;
  }
  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }
  function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }
  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var referenceElement = state.elements.reference;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
    var referenceClientRect = getBoundingClientRect(referenceElement);
    var popperOffsets2 = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: "absolute",
      placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset;
    if (elementContext === popper && offsetData) {
      var offset2 = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function(key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
        overflowOffsets[key] += offset2[axis] * multiply;
      });
    }
    return overflowOffsets;
  }
  var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return !args.some(function(element) {
      return !(element && typeof element.getBoundingClientRect === "function");
    });
  }
  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper2(reference2, popper2, options) {
      if (options === void 0) {
        options = defaultOptions;
      }
      var state = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference2,
          popper: popper2
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state,
        setOptions: function setOptions(options2) {
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options2);
          state.scrollParents = {
            reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
            popper: listScrollParents(popper2)
          };
          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
          state.orderedModifiers = orderedModifiers.filter(function(m2) {
            return m2.enabled;
          });
          if (false) {
            var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
              var name = _ref.name;
              return name;
            });
            validateModifiers(modifiers);
            if (getBasePlacement(state.options.placement) === auto) {
              var flipModifier = state.orderedModifiers.find(function(_ref2) {
                var name = _ref2.name;
                return name === "flip";
              });
              if (!flipModifier) {
                console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
              }
            }
            var _getComputedStyle = getComputedStyle(popper2), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
            if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
              return parseFloat(margin);
            })) {
              console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
            }
          }
          runModifierEffects();
          return instance.update();
        },
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }
          var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
          if (!areValidElements(reference3, popper3)) {
            if (false) {
              console.error(INVALID_ELEMENT_ERROR);
            }
            return;
          }
          state.rects = {
            reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
            popper: getLayoutRect(popper3)
          };
          state.reset = false;
          state.placement = state.options.placement;
          state.orderedModifiers.forEach(function(modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          var __debug_loops__ = 0;
          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (false) {
              __debug_loops__ += 1;
              if (__debug_loops__ > 100) {
                console.error(INFINITE_LOOP_ERROR);
                break;
              }
            }
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }
            var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
            if (typeof fn2 === "function") {
              state = fn2({
                state,
                options: _options,
                name,
                instance
              }) || state;
            }
          }
        },
        update: debounce(function() {
          return new Promise(function(resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };
      if (!areValidElements(reference2, popper2)) {
        if (false) {
          console.error(INVALID_ELEMENT_ERROR);
        }
        return instance;
      }
      instance.setOptions(options).then(function(state2) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state2);
        }
      });
      function runModifierEffects() {
        state.orderedModifiers.forEach(function(_ref3) {
          var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect4 = _ref3.effect;
          if (typeof effect4 === "function") {
            var cleanupFn = effect4({
              state,
              name,
              instance,
              options: options2
            });
            var noopFn = function noopFn2() {
            };
            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }
      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function(fn2) {
          return fn2();
        });
        effectCleanupFns = [];
      }
      return instance;
    };
  }
  var passive = {
    passive: true
  };
  function effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window2 = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.addEventListener("resize", instance.update, passive);
    }
    return function() {
      if (scroll) {
        scrollParents.forEach(function(scrollParent) {
          scrollParent.removeEventListener("scroll", instance.update, passive);
        });
      }
      if (resize) {
        window2.removeEventListener("resize", instance.update, passive);
      }
    };
  }
  var eventListeners_default = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {
    },
    effect,
    data: {}
  };
  function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: "absolute",
      placement: state.placement
    });
  }
  var popperOffsets_default = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
  };
  var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function roundOffsetsByDPR(_ref) {
    var x2 = _ref.x, y2 = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(round(x2 * dpr) / dpr) || 0,
      y: round(round(y2 * dpr) / dpr) || 0
    };
  }
  function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets;
    var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === "function" ? roundOffsets(offsets) : offsets, _ref3$x = _ref3.x, x2 = _ref3$x === void 0 ? 0 : _ref3$x, _ref3$y = _ref3.y, y2 = _ref3$y === void 0 ? 0 : _ref3$y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = left;
    var sideY = top;
    var win = window;
    if (adaptive) {
      var offsetParent = getOffsetParent(popper2);
      var heightProp = "clientHeight";
      var widthProp = "clientWidth";
      if (offsetParent === getWindow(popper2)) {
        offsetParent = getDocumentElement(popper2);
        if (getComputedStyle(offsetParent).position !== "static") {
          heightProp = "scrollHeight";
          widthProp = "scrollWidth";
        }
      }
      if (placement === top) {
        sideY = bottom;
        y2 -= offsetParent[heightProp] - popperRect.height;
        y2 *= gpuAcceleration ? 1 : -1;
      }
      if (placement === left) {
        sideX = right;
        x2 -= offsetParent[widthProp] - popperRect.width;
        x2 *= gpuAcceleration ? 1 : -1;
      }
    }
    var commonStyles = Object.assign({
      position
    }, adaptive && unsetSides);
    if (gpuAcceleration) {
      var _Object$assign;
      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x2 + "px, " + y2 + "px)" : "translate3d(" + x2 + "px, " + y2 + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y2 + "px" : "", _Object$assign2[sideX] = hasX ? x2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
  }
  function computeStyles(_ref4) {
    var state = _ref4.state, options = _ref4.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    if (false) {
      var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || "";
      if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
        return transitionProperty.indexOf(property) >= 0;
      })) {
        console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
      }
    }
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration
    };
    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive,
        roundOffsets
      })));
    }
    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets
      })));
    }
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-placement": state.placement
    });
  }
  var computeStyles_default = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
  };
  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
      var style2 = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name];
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style2);
      Object.keys(attributes).forEach(function(name2) {
        var value = attributes[name2];
        if (value === false) {
          element.removeAttribute(name2);
        } else {
          element.setAttribute(name2, value === true ? "" : value);
        }
      });
    });
  }
  function effect2(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
    return function() {
      Object.keys(state.elements).forEach(function(name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
        var style2 = styleProperties.reduce(function(style22, property) {
          style22[property] = "";
          return style22;
        }, {});
        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style2);
        Object.keys(attributes).forEach(function(attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  }
  var applyStyles_default = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect: effect2,
    requires: ["computeStyles"]
  };
  function distanceAndSkiddingToXY(placement, rects, offset2) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
      placement
    })) : offset2, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }
  function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function(acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement], x2 = _data$state$placement.x, y2 = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x2;
      state.modifiersData.popperOffsets.y += y2;
    }
    state.modifiersData[name] = data;
  }
  var offset_default = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: ["popperOffsets"],
    fn: offset
  };
  var hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
      return hash[matched];
    });
  }
  var hash2 = {
    start: "end",
    end: "start"
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
      return hash2[matched];
    });
  }
  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
      return getVariation(placement2) === variation;
    }) : basePlacements;
    var allowedPlacements = placements2.filter(function(placement2) {
      return allowedAutoPlacements.indexOf(placement2) >= 0;
    });
    if (allowedPlacements.length === 0) {
      allowedPlacements = placements2;
      if (false) {
        console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
      }
    }
    var overflows = allowedPlacements.reduce(function(acc, placement2) {
      acc[placement2] = detectOverflow(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding
      })[getBasePlacement(placement2)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function(a4, b2) {
      return overflows[a4] - overflows[b2];
    });
  }
  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }
    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }
  function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) {
      return;
    }
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
      return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding,
        flipVariations,
        allowedAutoPlacements
      }) : placement2);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements2[0];
    for (var i5 = 0; i5 < placements2.length; i5++) {
      var placement = placements2[i5];
      var _basePlacement = getBasePlacement(placement);
      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? "width" : "height";
      var overflow = detectOverflow(state, {
        placement,
        boundary,
        rootBoundary,
        altBoundary,
        padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }
      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];
      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }
      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }
      if (checks.every(function(check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
      var numberOfChecks = flipVariations ? 3 : 1;
      var _loop = function _loop2(_i2) {
        var fittingPlacement = placements2.find(function(placement2) {
          var checks2 = checksMap.get(placement2);
          if (checks2) {
            return checks2.slice(0, _i2).every(function(check) {
              return check;
            });
          }
        });
        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };
      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);
        if (_ret === "break")
          break;
      }
    }
    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  }
  var flip_default = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: ["offset"],
    data: {
      _skip: false
    }
  };
  function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
  }
  function within(min2, value, max2) {
    return max(min2, min(value, max2));
  }
  function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary,
      rootBoundary,
      padding,
      altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var data = {
      x: 0,
      y: 0
    };
    if (!popperOffsets2) {
      return;
    }
    if (checkMainAxis || checkAltAxis) {
      var mainSide = mainAxis === "y" ? top : left;
      var altSide = mainAxis === "y" ? bottom : right;
      var len = mainAxis === "y" ? "height" : "width";
      var offset2 = popperOffsets2[mainAxis];
      var min2 = popperOffsets2[mainAxis] + overflow[mainSide];
      var max2 = popperOffsets2[mainAxis] - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide];
      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
      var tetherMin = popperOffsets2[mainAxis] + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = popperOffsets2[mainAxis] + maxOffset - offsetModifierValue;
      if (checkMainAxis) {
        var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
        popperOffsets2[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset2;
      }
      if (checkAltAxis) {
        var _mainSide = mainAxis === "x" ? top : left;
        var _altSide = mainAxis === "x" ? bottom : right;
        var _offset = popperOffsets2[altAxis];
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);
        popperOffsets2[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
      }
    }
    state.modifiersData[name] = data;
  }
  var preventOverflow_default = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: ["offset"]
  };
  var toPaddingObject = function toPaddingObject2(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  };
  function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets2) {
      return;
    }
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === "y" ? top : left;
    var maxProp = axis === "y" ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
    var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2;
    var min2 = paddingObject[minProp];
    var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset2 = within(min2, center, max2);
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
  }
  function effect3(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) {
      return;
    }
    if (typeof arrowElement === "string") {
      arrowElement = state.elements.popper.querySelector(arrowElement);
      if (!arrowElement) {
        return;
      }
    }
    if (false) {
      if (!isHTMLElement(arrowElement)) {
        console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "));
      }
    }
    if (!contains(state.elements.popper, arrowElement)) {
      if (false) {
        console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      }
      return;
    }
    state.elements.arrow = arrowElement;
  }
  var arrow_default = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect3,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };
  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }
    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }
  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function(side) {
      return overflow[side] >= 0;
    });
  }
  function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: "reference"
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets,
      popperEscapeOffsets,
      isReferenceHidden,
      hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-reference-hidden": isReferenceHidden,
      "data-popper-escaped": hasPopperEscaped
    });
  }
  var hide_default = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: hide
  };
  var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
  var createPopper = /* @__PURE__ */ popperGenerator({
    defaultModifiers
  });

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.R2DGBMZV.js
  var dropdown_styles_default = i2`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .dropdown {
    position: relative;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__positioner {
    position: absolute;
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown__panel {
    max-height: 75vh;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: rgb(var(--sl-panel-background-color));
    border: solid 1px rgb(var(--sl-panel-border-color));
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-large);
    overflow: auto;
    overscroll-behavior: none;
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    pointer-events: all;
  }

  .dropdown__positioner[data-popper-placement^='top'] .dropdown__panel {
    transform-origin: bottom;
  }

  .dropdown__positioner[data-popper-placement^='bottom'] .dropdown__panel {
    transform-origin: top;
  }

  .dropdown__positioner[data-popper-placement^='left'] .dropdown__panel {
    transform-origin: right;
  }

  .dropdown__positioner[data-popper-placement^='right'] .dropdown__panel {
    transform-origin: left;
  }
`;
  var id3 = 0;
  var SlDropdown = class extends h3 {
    constructor() {
      super(...arguments);
      this.componentId = `dropdown-${++id3}`;
      this.open = false;
      this.placement = "bottom-start";
      this.disabled = false;
      this.stayOpenOnSelect = false;
      this.distance = 2;
      this.skidding = 0;
      this.hoist = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.handleMenuItemActivate = this.handleMenuItemActivate.bind(this);
      this.handlePanelSelect = this.handlePanelSelect.bind(this);
      this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
      this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);
      if (!this.containingElement) {
        this.containingElement = this;
      }
      this.updateComplete.then(() => {
        this.popover = createPopper(this.trigger, this.positioner, {
          placement: this.placement,
          strategy: this.hoist ? "fixed" : "absolute",
          modifiers: [
            {
              name: "flip",
              options: {
                boundary: "viewport"
              }
            },
            {
              name: "offset",
              options: {
                offset: [this.skidding, this.distance]
              }
            }
          ]
        });
      });
    }
    firstUpdated() {
      this.panel.hidden = !this.open;
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.hide();
      this.popover.destroy();
    }
    focusOnTrigger() {
      const slot = this.trigger.querySelector("slot");
      const trigger = slot.assignedElements({ flatten: true })[0];
      if (trigger && typeof trigger.focus === "function") {
        trigger.focus();
      }
    }
    getMenu() {
      const slot = this.panel.querySelector("slot");
      return slot.assignedElements({ flatten: true }).filter((el) => el.tagName.toLowerCase() === "sl-menu")[0];
    }
    handleDocumentKeyDown(event) {
      var _a;
      if (event.key === "Escape") {
        this.hide();
        this.focusOnTrigger();
        return;
      }
      if (event.key === "Tab") {
        if (this.open && ((_a = document.activeElement) == null ? void 0 : _a.tagName.toLowerCase()) === "sl-menu-item") {
          event.preventDefault();
          this.hide();
          this.focusOnTrigger();
          return;
        }
        setTimeout(() => {
          var _a2, _b;
          const activeElement = this.containingElement.getRootNode() instanceof ShadowRoot ? (_b = (_a2 = document.activeElement) == null ? void 0 : _a2.shadowRoot) == null ? void 0 : _b.activeElement : document.activeElement;
          if ((activeElement == null ? void 0 : activeElement.closest(this.containingElement.tagName.toLowerCase())) !== this.containingElement) {
            this.hide();
            return;
          }
        });
      }
    }
    handleDocumentMouseDown(event) {
      const path = event.composedPath();
      if (!path.includes(this.containingElement)) {
        this.hide();
        return;
      }
    }
    handleMenuItemActivate(event) {
      const item = event.target;
      scrollIntoView(item, this.panel);
    }
    handlePanelSelect(event) {
      const target = event.target;
      if (!this.stayOpenOnSelect && target.tagName.toLowerCase() === "sl-menu") {
        this.hide();
        this.focusOnTrigger();
      }
    }
    handlePopoverOptionsChange() {
      if (this.popover) {
        this.popover.setOptions({
          placement: this.placement,
          strategy: this.hoist ? "fixed" : "absolute",
          modifiers: [
            {
              name: "flip",
              options: {
                boundary: "viewport"
              }
            },
            {
              name: "offset",
              options: {
                offset: [this.skidding, this.distance]
              }
            }
          ]
        });
      }
    }
    handleTriggerClick() {
      this.open ? this.hide() : this.show();
    }
    handleTriggerKeyDown(event) {
      const menu = this.getMenu();
      const menuItems = menu ? [...menu.querySelectorAll("sl-menu-item")] : [];
      const firstMenuItem = menuItems[0];
      const lastMenuItem = menuItems[menuItems.length - 1];
      if (event.key === "Escape") {
        this.focusOnTrigger();
        this.hide();
        return;
      }
      if ([" ", "Enter"].includes(event.key)) {
        event.preventDefault();
        this.open ? this.hide() : this.show();
        return;
      }
      if (["ArrowDown", "ArrowUp"].includes(event.key)) {
        event.preventDefault();
        if (!this.open) {
          this.show();
        }
        if (event.key === "ArrowDown" && firstMenuItem) {
          const menu2 = this.getMenu();
          menu2.setCurrentItem(firstMenuItem);
          firstMenuItem.focus();
          return;
        }
        if (event.key === "ArrowUp" && lastMenuItem) {
          menu.setCurrentItem(lastMenuItem);
          lastMenuItem.focus();
          return;
        }
      }
      const ignoredKeys = ["Tab", "Shift", "Meta", "Ctrl", "Alt"];
      if (this.open && menu && !ignoredKeys.includes(event.key)) {
        menu.typeToSelect(event.key);
        return;
      }
    }
    handleTriggerKeyUp(event) {
      if (event.key === " ") {
        event.preventDefault();
      }
    }
    handleTriggerSlotChange() {
      this.updateAccessibleTrigger();
    }
    updateAccessibleTrigger() {
      if (this.trigger) {
        const slot = this.trigger.querySelector("slot");
        const assignedElements = slot.assignedElements({ flatten: true });
        const accessibleTrigger = assignedElements.find((el) => getTabbableBoundary(el).start);
        if (accessibleTrigger) {
          accessibleTrigger.setAttribute("aria-haspopup", "true");
          accessibleTrigger.setAttribute("aria-expanded", this.open ? "true" : "false");
        }
      }
    }
    async show() {
      if (this.open) {
        return;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    async hide() {
      if (!this.open) {
        return;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    reposition() {
      if (!this.open) {
        return;
      }
      this.popover.update();
    }
    async handleOpenChange() {
      if (this.disabled) {
        return;
      }
      this.updateAccessibleTrigger();
      if (this.open) {
        emit(this, "sl-show");
        this.panel.addEventListener("sl-activate", this.handleMenuItemActivate);
        this.panel.addEventListener("sl-select", this.handlePanelSelect);
        document.addEventListener("keydown", this.handleDocumentKeyDown);
        document.addEventListener("mousedown", this.handleDocumentMouseDown);
        await stopAnimations(this);
        this.popover.update();
        this.panel.hidden = false;
        const { keyframes, options } = getAnimation(this, "dropdown.show");
        await animateTo(this.panel, keyframes, options);
        emit(this, "sl-after-show");
      } else {
        emit(this, "sl-hide");
        this.panel.removeEventListener("sl-activate", this.handleMenuItemActivate);
        this.panel.removeEventListener("sl-select", this.handlePanelSelect);
        document.removeEventListener("keydown", this.handleDocumentKeyDown);
        document.removeEventListener("mousedown", this.handleDocumentMouseDown);
        await stopAnimations(this);
        const { keyframes, options } = getAnimation(this, "dropdown.hide");
        await animateTo(this.panel, keyframes, options);
        this.panel.hidden = true;
        emit(this, "sl-after-hide");
      }
    }
    render() {
      return T`
      <div
        part="base"
        id=${this.componentId}
        class=${e23({
        dropdown: true,
        "dropdown--open": this.open
      })}
      >
        <span
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        >
          <slot name="trigger" @slotchange=${this.handleTriggerSlotChange}></slot>
        </span>

        <!-- Position the panel with a wrapper since the popover makes use of translate. This let's us add animations
        on the panel without interfering with the position. -->
        <div class="dropdown__positioner">
          <div
            part="panel"
            class="dropdown__panel"
            role="menu"
            aria-hidden=${this.open ? "false" : "true"}
            aria-labelledby=${this.componentId}
          >
            <slot></slot>
          </div>
        </div>
      </div>
    `;
    }
  };
  SlDropdown.styles = dropdown_styles_default;
  __decorateClass([
    o22(".dropdown__trigger")
  ], SlDropdown.prototype, "trigger", 2);
  __decorateClass([
    o22(".dropdown__panel")
  ], SlDropdown.prototype, "panel", 2);
  __decorateClass([
    o22(".dropdown__positioner")
  ], SlDropdown.prototype, "positioner", 2);
  __decorateClass([
    e4({ type: Boolean, reflect: true })
  ], SlDropdown.prototype, "open", 2);
  __decorateClass([
    e4()
  ], SlDropdown.prototype, "placement", 2);
  __decorateClass([
    e4({ type: Boolean })
  ], SlDropdown.prototype, "disabled", 2);
  __decorateClass([
    e4({ attribute: "stay-open-on-select", type: Boolean, reflect: true })
  ], SlDropdown.prototype, "stayOpenOnSelect", 2);
  __decorateClass([
    e4({ attribute: false })
  ], SlDropdown.prototype, "containingElement", 2);
  __decorateClass([
    e4({ type: Number })
  ], SlDropdown.prototype, "distance", 2);
  __decorateClass([
    e4({ type: Number })
  ], SlDropdown.prototype, "skidding", 2);
  __decorateClass([
    e4({ type: Boolean })
  ], SlDropdown.prototype, "hoist", 2);
  __decorateClass([
    watch("distance"),
    watch("hoist"),
    watch("placement"),
    watch("skidding")
  ], SlDropdown.prototype, "handlePopoverOptionsChange", 1);
  __decorateClass([
    watch("open", { waitUntilFirstUpdate: true })
  ], SlDropdown.prototype, "handleOpenChange", 1);
  SlDropdown = __decorateClass([
    n5("sl-dropdown")
  ], SlDropdown);
  setDefaultAnimation("dropdown.show", {
    keyframes: [
      { opacity: 0, transform: "scale(0.9)" },
      { opacity: 1, transform: "scale(1)" }
    ],
    options: { duration: 150, easing: "ease" }
  });
  setDefaultAnimation("dropdown.hide", {
    keyframes: [
      { opacity: 1, transform: "scale(1)" },
      { opacity: 0, transform: "scale(0.9)" }
    ],
    options: { duration: 150, easing: "ease" }
  });

  // src/sl.ts
  setBasePath("./dist/shoelace");
})();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
