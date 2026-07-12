import {
  RouterLink
} from "./chunk-GFN35O44.js";
import {
  CommonModule,
  DatePipe,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-KFEQ7DOY.js";

// src/app/pages/conditions/conditions.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ConditionsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2, "\u{1F30A}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 7);
    \u0275\u0275text(4, "No conditions logged yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 8);
    \u0275\u0275text(6, "Log the first entry");
    \u0275\u0275elementEnd()();
  }
}
function ConditionsComponent_Conditional_10_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1.note);
  }
}
function ConditionsComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 13)(8, "span", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 14);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, ConditionsComponent_Conditional_10_For_2_Conditional_12_Template, 2, 1, "p", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 5, c_r1.loggedOn, "EEEE, MMM d \xB7 h:mm a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("by ", c_r1.user == null ? null : c_r1.user.name, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F321}\uFE0F ", c_r1.waterTempC, "\xB0C");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4A8} ", c_r1.windKts, " kts");
    \u0275\u0275advance();
    \u0275\u0275conditional(12, c_r1.note ? 12 : -1);
  }
}
function ConditionsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, ConditionsComponent_Conditional_10_For_2_Template, 13, 8, "div", 10, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.conditions());
  }
}
var ConditionsComponent = class _ConditionsComponent {
  constructor() {
    this.conditions = signal([
      { id: "c1", loggedOn: "2026-07-12T05:30:00Z", waterTempC: 19.5, windKts: 8, note: "Calm with light chop near the north bank.", user: { id: "u1", name: "Coach Dana", email: "coach@demo" } },
      { id: "c2", loggedOn: "2026-07-10T05:45:00Z", waterTempC: 18.2, windKts: 14, note: "Windy \u2014 whitecaps on the far side. Novices ashore.", user: { id: "u2", name: "Alex Rivers", email: "alex@demo" } },
      { id: "c3", loggedOn: "2026-07-08T06:00:00Z", waterTempC: 20.1, windKts: 5, note: "Glassy water, ideal conditions.", user: { id: "u1", name: "Coach Dana", email: "coach@demo" } }
    ]);
  }
  static {
    this.\u0275fac = function ConditionsComponent_Factory(t) {
      return new (t || _ConditionsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConditionsComponent, selectors: [["app-conditions"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 1, consts: [[1, "container", "stack"], [1, "row-between", "section-title"], [1, "stack", 2, "gap", "var(--sp-1)"], [1, "eyebrow"], ["routerLink", "/conditions/new", 1, "btn", "btn-primary"], [1, "state"], [1, "state-icon"], [1, "muted"], ["routerLink", "/conditions/new", 1, "btn", "btn-primary", "btn-sm"], [1, "stack"], [1, "card", "card-pad", "stack", 2, "gap", "var(--sp-3)"], [1, "row-between"], [1, "muted", "small"], [1, "row", 2, "gap", "var(--sp-4)"], [1, "tag", 2, "font-size", "var(--fs-sm)"], [1, "muted", 2, "margin", "0"]], template: function ConditionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "Water & weather");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2");
        \u0275\u0275text(6, "Conditions log");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 4);
        \u0275\u0275text(8, "Log conditions");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, ConditionsComponent_Conditional_9_Template, 7, 0, "div", 5)(10, ConditionsComponent_Conditional_10_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275conditional(9, ctx.conditions().length === 0 ? 9 : 10);
      }
    }, dependencies: [CommonModule, DatePipe, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConditionsComponent, { className: "ConditionsComponent", filePath: "src/app/pages/conditions/conditions.component.ts", lineNumber: 12 });
})();
export {
  ConditionsComponent
};
//# sourceMappingURL=conditions.component-INLSBBMI.js.map
