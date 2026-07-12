import {
  AuthService
} from "./chunk-IBNCHXSA.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-GFN35O44.js";
import {
  CommonModule,
  DatePipe,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
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

// src/app/pages/schedule/schedule.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/practices", a0];
function ScheduleComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275text(1, "New practice");
    \u0275\u0275elementEnd();
  }
}
function ScheduleComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275text(2, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("No ", ctx_r0.when(), " practices.");
  }
}
function ScheduleComponent_Conditional_14_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r2.notes);
  }
}
function ScheduleComponent_Conditional_14_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", p_r2.waitlistCount, " wait");
  }
}
function ScheduleComponent_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11)(1, "div", 2)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ScheduleComponent_Conditional_14_For_2_Conditional_6_Template, 2, 1, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 13)(8, "span", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ScheduleComponent_Conditional_14_For_2_Conditional_10_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c0, p_r2.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(4, 7, p_r2.startsAt, "EEEE, MMM d"), " \xB7 ", \u0275\u0275pipeBind2(5, 10, p_r2.startsAt, "h:mm a"), "");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(6, p_r2.notes ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", p_r2.confirmedCount, "/", p_r2.capacity, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(10, p_r2.waitlistCount ? 10 : -1);
  }
}
function ScheduleComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, ScheduleComponent_Conditional_14_For_2_Template, 11, 15, "a", 11, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.visible());
  }
}
var ScheduleComponent = class _ScheduleComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.auth = inject(AuthService);
    this.isCoach = this.auth.isCoach;
    this.when = signal("upcoming");
    this.practices = signal([
      { id: "p1", startsAt: "2026-07-15T06:00:00Z", capacity: 8, notes: "Steady-state endurance row", confirmedCount: 6, waitlistCount: 1 },
      { id: "p2", startsAt: "2026-07-17T06:30:00Z", capacity: 4, notes: "Race-pace intervals", confirmedCount: 4, waitlistCount: 2 },
      { id: "p3", startsAt: "2026-07-20T07:00:00Z", capacity: 8, notes: "Technique & drills", confirmedCount: 3, waitlistCount: 0 }
    ]);
    this.pastPractices = signal([
      { id: "p10", startsAt: "2026-07-08T06:00:00Z", capacity: 8, notes: "Long distance row", confirmedCount: 8, waitlistCount: 2 },
      { id: "p11", startsAt: "2026-07-05T06:30:00Z", capacity: 4, notes: "Sprint sets", confirmedCount: 4, waitlistCount: 0 }
    ]);
    this.visible = computed(() => this.when() === "past" ? this.pastPractices() : this.practices());
  }
  ngOnInit() {
    const w = this.route.snapshot.queryParamMap.get("when");
    if (w === "past" || w === "upcoming")
      this.when.set(w);
  }
  setWhen(w) {
    this.when.set(w);
    this.router.navigate([], { queryParams: { when: w }, queryParamsHandling: "merge" });
  }
  static {
    this.\u0275fac = function ScheduleComponent_Factory(t) {
      return new (t || _ScheduleComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleComponent, selectors: [["app-schedule"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 6, consts: [[1, "container", "stack"], [1, "row-between", "section-title"], [1, "stack", 2, "gap", "var(--sp-1)"], [1, "eyebrow"], ["routerLink", "/practices/new", 1, "btn", "btn-primary"], [1, "filter-bar"], [1, "pill", 3, "click"], [1, "state"], [1, "state-icon"], [1, "muted"], [1, "stack"], [1, "card", "card-pad", "card-hover", "row-between", 2, "gap", "var(--sp-4)", 3, "routerLink"], [1, "muted", "small"], [1, "wrap-gap", 2, "justify-content", "flex-end"], [1, "badge", "badge-success"], [1, "badge", "badge-warning"]], template: function ScheduleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "Practices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2");
        \u0275\u0275text(6, "Schedule");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, ScheduleComponent_Conditional_7_Template, 2, 0, "a", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
        \u0275\u0275listener("click", function ScheduleComponent_Template_button_click_9_listener() {
          return ctx.setWhen("upcoming");
        });
        \u0275\u0275text(10, "Upcoming");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 6);
        \u0275\u0275listener("click", function ScheduleComponent_Template_button_click_11_listener() {
          return ctx.setWhen("past");
        });
        \u0275\u0275text(12, "Past");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(13, ScheduleComponent_Conditional_13_Template, 5, 1, "div", 7)(14, ScheduleComponent_Conditional_14_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(7, ctx.isCoach() ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.when() === "upcoming");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.when() === "past");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(13, ctx.visible().length === 0 ? 13 : 14);
      }
    }, dependencies: [CommonModule, DatePipe, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleComponent, { className: "ScheduleComponent", filePath: "src/app/pages/schedule/schedule.component.ts", lineNumber: 13 });
})();
export {
  ScheduleComponent
};
//# sourceMappingURL=schedule.component-GUHPU7ER.js.map
