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
  DatePipe,
  inject,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-KFEQ7DOY.js";

// src/app/pages/home/home.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/practices", a0];
function HomeComponent_Conditional_16_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u201C", c_r1.note, "\u201D");
  }
}
function HomeComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "span", 15);
    \u0275\u0275text(3, "Water temp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 14)(7, "span", 15);
    \u0275\u0275text(8, "Wind");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 16);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 14)(12, "span", 15);
    \u0275\u0275text(13, "Logged");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 17);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(17, HomeComponent_Conditional_16_Conditional_17_Template, 2, 1, "p", 18);
  }
  if (rf & 2) {
    const c_r1 = ctx;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", c_r1.waterTempC, "\xB0C");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", c_r1.windKts, " kts");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 4, c_r1.loggedOn, "MMM d, h:mm a"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(17, c_r1.note ? 17 : -1);
  }
}
function HomeComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 19);
    \u0275\u0275text(2, "\u{1F30A}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 20);
    \u0275\u0275text(4, "No conditions logged yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 21);
    \u0275\u0275text(6, "Log conditions");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 19);
    \u0275\u0275text(2, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 20);
    \u0275\u0275text(4, "No upcoming practices scheduled.");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_Conditional_24_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r2.notes);
  }
}
function HomeComponent_Conditional_24_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", p_r2.waitlistCount, " waitlist");
  }
}
function HomeComponent_Conditional_24_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 23)(1, "div", 5)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 24);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, HomeComponent_Conditional_24_For_2_Conditional_8_Template, 2, 1, "p", 25);
    \u0275\u0275elementStart(9, "div", 26)(10, "span", 27);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, HomeComponent_Conditional_24_For_2_Conditional_12_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c0, p_r2.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 7, p_r2.startsAt, "EEE, MMM d"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 10, p_r2.startsAt, "h:mm a"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(8, p_r2.notes ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", p_r2.confirmedCount, "/", p_r2.capacity, " confirmed");
    \u0275\u0275advance();
    \u0275\u0275conditional(12, p_r2.waitlistCount ? 12 : -1);
  }
}
function HomeComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_24_For_2_Template, 13, 15, "a", 23, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.upcomingPractices());
  }
}
var HomeComponent = class _HomeComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.user = this.auth.user;
    this.latestCondition = signal({
      id: "c1",
      loggedOn: "2026-07-12T05:30:00Z",
      waterTempC: 19.5,
      windKts: 8,
      note: "Calm with light chop near the north bank. Good rowing window before 9am.",
      user: { id: "u1", name: "Coach Dana", email: "coach@demo" }
    });
    this.upcomingPractices = signal([
      {
        id: "p1",
        startsAt: "2026-07-15T06:00:00Z",
        capacity: 8,
        notes: "Steady-state endurance row",
        confirmedCount: 6,
        waitlistCount: 1
      },
      {
        id: "p2",
        startsAt: "2026-07-17T06:30:00Z",
        capacity: 4,
        notes: "Race-pace intervals",
        confirmedCount: 4,
        waitlistCount: 2
      }
    ]);
  }
  boatLabel(t) {
    return BOAT_TYPE_LABELS[t];
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(t) {
      return new (t || _HomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 3, consts: [[1, "container", "stack"], [1, "section-title"], [1, "stack", 2, "gap", "var(--sp-1)"], [1, "eyebrow"], [1, "card", "card-pad", "stack"], [1, "row-between"], [1, "row", 2, "gap", "var(--sp-2)"], [2, "font-size", "1.4rem"], [2, "margin", "0"], ["routerLink", "/conditions", 1, "btn", "btn-ghost", "btn-sm"], [1, "row-between", "section-title", 2, "margin-bottom", "0"], ["routerLink", "/schedule", 1, "btn", "btn-ghost", "btn-sm"], [1, "state"], [1, "kpi-grid"], [1, "kpi"], [1, "kpi-label"], [1, "kpi-value"], [1, "kpi-value", 2, "font-size", "var(--fs-lg)"], [1, "muted", 2, "margin", "0"], [1, "state-icon"], [1, "muted"], ["routerLink", "/conditions/new", 1, "btn", "btn-primary", "btn-sm"], [1, "grid-two"], [1, "card", "card-pad", "card-hover", "stack", 2, "gap", "var(--sp-3)", 3, "routerLink"], [1, "badge", "badge-info"], [1, "muted", "small", 2, "margin", "0"], [1, "row", 2, "gap", "var(--sp-3)"], [1, "badge", "badge-success"], [1, "badge", "badge-warning"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "Welcome back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2");
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "span", 7);
        \u0275\u0275text(11, "\u{1F30A}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "h3", 8);
        \u0275\u0275text(13, "Latest conditions");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "a", 9);
        \u0275\u0275text(15, "View log \u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(16, HomeComponent_Conditional_16_Template, 18, 7)(17, HomeComponent_Conditional_17_Template, 7, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 10)(19, "h3", 8);
        \u0275\u0275text(20, "Upcoming practices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "a", 11);
        \u0275\u0275text(22, "Full schedule \u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(23, HomeComponent_Conditional_23_Template, 5, 0, "div", 12)(24, HomeComponent_Conditional_24_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("Hello, ", ((tmp_0_0 = ctx.user()) == null ? null : tmp_0_0.name) || "Rower", " \u{1F44B}");
        \u0275\u0275advance(10);
        \u0275\u0275conditional(16, (tmp_1_0 = ctx.latestCondition()) ? 16 : 17, tmp_1_0);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(23, ctx.upcomingPractices().length === 0 ? 23 : 24);
      }
    }, dependencies: [CommonModule, DatePipe, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/pages/home/home.component.ts", lineNumber: 13 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=home.component-GNECP645.js.map
