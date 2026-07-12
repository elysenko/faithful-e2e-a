import {
  AuthService
} from "./chunk-IBNCHXSA.js";
import {
  BOAT_TYPE_LABELS
} from "./chunk-TNBIIBTV.js";
import {
  RouterLink
} from "./chunk-GFN35O44.js";
import {
  CommonModule,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-KFEQ7DOY.js";

// src/app/pages/boats/boats.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/boats", a0];
function BoatsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275text(1, "New boat");
    \u0275\u0275elementEnd();
  }
}
function BoatsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2, "\u{1F6A3}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 7);
    \u0275\u0275text(4, "No boats in the fleet yet.");
    \u0275\u0275elementEnd()();
  }
}
function BoatsComponent_Conditional_9_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 14);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, b_r1.id));
  }
}
function BoatsComponent_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 12)(7, "span", 13);
    \u0275\u0275text(8, "Type ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 13);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, BoatsComponent_Conditional_9_For_2_Conditional_13_Template, 2, 3, "a", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r1.name);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.statusClass(b_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r1.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.boatLabel(b_r1.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", b_r1.seats, " seats");
    \u0275\u0275advance();
    \u0275\u0275conditional(13, ctx_r1.isCoach() ? 13 : -1);
  }
}
function BoatsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, BoatsComponent_Conditional_9_For_2_Template, 14, 7, "div", 9, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.boats());
  }
}
var BoatsComponent = class _BoatsComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.isCoach = this.auth.isCoach;
    this.boats = signal([
      { id: "b1", name: "Morning Star", type: "ONE_X", seats: 1, status: "active" },
      { id: "b2", name: "Twin Oars", type: "TWO_X", seats: 2, status: "active" },
      { id: "b3", name: "Quad Squad", type: "FOUR_PLUS", seats: 5, status: "maintenance" },
      { id: "b4", name: "The Octet", type: "EIGHT_PLUS", seats: 9, status: "active" },
      { id: "b5", name: "Old Timer", type: "ONE_X", seats: 1, status: "retired" }
    ]);
  }
  boatLabel(t) {
    return BOAT_TYPE_LABELS[t];
  }
  statusClass(s) {
    return s === "active" ? "badge-success" : s === "maintenance" ? "badge-warning" : "badge-neutral";
  }
  static {
    this.\u0275fac = function BoatsComponent_Factory(t) {
      return new (t || _BoatsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BoatsComponent, selectors: [["app-boats"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 2, consts: [[1, "container", "stack"], [1, "row-between", "section-title"], [1, "stack", 2, "gap", "var(--sp-1)"], [1, "eyebrow"], ["routerLink", "/boats/new", 1, "btn", "btn-primary"], [1, "state"], [1, "state-icon"], [1, "muted"], [1, "grid-two"], [1, "card", "card-pad", "stack", 2, "gap", "var(--sp-3)"], [1, "row-between"], [1, "badge"], [1, "row", 2, "gap", "var(--sp-3)"], [1, "tag", 2, "font-size", "var(--fs-sm)"], [1, "btn", "btn-outline", "btn-sm", 3, "routerLink"]], template: function BoatsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "Fleet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2");
        \u0275\u0275text(6, "Boats");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, BoatsComponent_Conditional_7_Template, 2, 0, "a", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, BoatsComponent_Conditional_8_Template, 5, 0, "div", 5)(9, BoatsComponent_Conditional_9_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(7, ctx.isCoach() ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(8, ctx.boats().length === 0 ? 8 : 9);
      }
    }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BoatsComponent, { className: "BoatsComponent", filePath: "src/app/pages/boats/boats.component.ts", lineNumber: 13 });
})();
export {
  BoatsComponent
};
//# sourceMappingURL=boats.component-XL5ZHXKC.js.map
