import {
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-4ZKGBDGO.js";

// src/app/shared/avatar/avatar.component.ts
var AvatarComponent = class _AvatarComponent {
  constructor() {
    this._name = signal("");
    this.size = 48;
    this.ring = false;
    this.initials = computed(() => {
      const parts = this._name().trim().split(/\s+/).filter(Boolean);
      if (parts.length === 0)
        return "?";
      if (parts.length === 1)
        return parts[0].slice(0, 2).toUpperCase();
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    });
    this.gradient = computed(() => {
      const name = this._name();
      let hash = 0;
      for (let i = 0; i < name.length; i++) {
        hash = hash * 31 + name.charCodeAt(i) >>> 0;
      }
      const index = hash % 6 + 1;
      return `var(--grad-${index})`;
    });
  }
  set name(value) {
    this._name.set(value ?? "");
  }
  static {
    this.\u0275fac = function AvatarComponent_Factory(t) {
      return new (t || _AvatarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AvatarComponent, selectors: [["app-avatar"]], inputs: { name: "name", size: "size", ring: "ring" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 12, consts: [[1, "avatar"]], template: function AvatarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275text(1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("width", ctx.size, "px")("height", ctx.size, "px")("font-size", ctx.size * 0.38, "px")("background", ctx.gradient());
        \u0275\u0275classProp("ring", ctx.ring);
        \u0275\u0275attribute("aria-label", ctx.initials());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.initials());
      }
    }, styles: ["\n\n.avatar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex: none;\n  border-radius: var(--radius-full);\n  color: #fff;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  -webkit-user-select: none;\n  user-select: none;\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.14);\n}\n.avatar.ring[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 3px var(--color-surface), 0 0 0 5px var(--color-primary-soft);\n}\n/*# sourceMappingURL=avatar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AvatarComponent, { className: "AvatarComponent", filePath: "src/app/shared/avatar/avatar.component.ts", lineNumber: 12 });
})();

export {
  AvatarComponent
};
//# sourceMappingURL=chunk-2YFTR47U.js.map
