import {
  AuthService
} from "./chunk-IBNCHXSA.js";
import {
  BOAT_TYPE_LABELS
} from "./chunk-TNBIIBTV.js";
import {
  ActivatedRoute,
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
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-KFEQ7DOY.js";

// src/app/pages/practice-detail/practice-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/practices", a0, "edit"];
function PracticeDetailComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, ctx_r0.practice().id));
  }
}
function PracticeDetailComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "p", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.practice().notes);
  }
}
function PracticeDetailComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1, "You're confirmed for this practice. \u{1F389}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 22);
    \u0275\u0275listener("click", function PracticeDetailComponent_Conditional_42_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancel());
    });
    \u0275\u0275text(3, "Cancel my spot");
    \u0275\u0275elementEnd();
  }
}
function PracticeDetailComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1, "You're on the waitlist. We'll promote you if a spot opens.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 22);
    \u0275\u0275listener("click", function PracticeDetailComponent_Conditional_43_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancel());
    });
    \u0275\u0275text(3, "Leave waitlist");
    \u0275\u0275elementEnd();
  }
}
function PracticeDetailComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, "You cancelled. Changed your mind?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 25);
    \u0275\u0275listener("click", function PracticeDetailComponent_Conditional_44_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.signup());
    });
    \u0275\u0275text(3, "Sign up again");
    \u0275\u0275elementEnd();
  }
}
function PracticeDetailComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function PracticeDetailComponent_Conditional_45_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.signup());
    });
    \u0275\u0275text(1, "Sign up");
    \u0275\u0275elementEnd();
  }
}
function PracticeDetailComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function PracticeDetailComponent_Conditional_46_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.signup());
    });
    \u0275\u0275text(1, "Join waitlist");
    \u0275\u0275elementEnd();
  }
}
function PracticeDetailComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, "No boats assigned yet.");
    \u0275\u0275elementEnd();
  }
}
function PracticeDetailComponent_Conditional_51_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", b_r7.name, " \xB7 ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.boatLabel(b_r7.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", b_r7.seats, " seats ");
  }
}
function PracticeDetailComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275repeaterCreate(1, PracticeDetailComponent_Conditional_51_For_2_Template, 5, 3, "span", 27, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.boats());
  }
}
function PracticeDetailComponent_For_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r8.user == null ? null : s_r8.user.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 2, s_r8.createdAt, "MMM d, h:mm a"));
  }
}
function PracticeDetailComponent_Conditional_66_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 7);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r9 = ctx.$implicit;
    const i_r10 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r10 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r9.user == null ? null : s_r9.user.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 3, s_r9.createdAt, "MMM d, h:mm a"));
  }
}
function PracticeDetailComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "h3", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18)(4, "table", 19)(5, "thead")(6, "tr")(7, "th");
    \u0275\u0275text(8, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Rower");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Joined");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, PracticeDetailComponent_Conditional_66_For_15_Template, 8, 6, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Waitlist (", ctx_r0.waitlist().length, ")");
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r0.waitlist());
  }
}
var PracticeDetailComponent = class _PracticeDetailComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.id = inject(ActivatedRoute).snapshot.paramMap.get("id") ?? "p1";
    this.isCoach = this.auth.isCoach;
    this.practice = signal({
      id: "p1",
      startsAt: "2026-07-15T06:00:00Z",
      capacity: 8,
      notes: "Steady-state endurance row. Meet at the boathouse 15 minutes early to rig.",
      confirmedCount: 6,
      waitlistCount: 1
    });
    this.boats = signal([
      { id: "b4", name: "The Octet", type: "EIGHT_PLUS", seats: 9, status: "active" }
    ]);
    this.signups = signal([
      { id: "s1", practiceId: "p1", userId: "u1", status: "confirmed", user: { id: "u1", name: "Coach Dana", email: "coach@demo", role: "coach" }, createdAt: "2026-07-10T09:00:00Z" },
      { id: "s2", practiceId: "p1", userId: "u2", status: "confirmed", user: { id: "u2", name: "Alex Rivers", email: "alex@demo", role: "member" }, createdAt: "2026-07-10T10:00:00Z" },
      { id: "s3", practiceId: "p1", userId: "u3", status: "confirmed", user: { id: "u3", name: "Sam Brooks", email: "sam@demo", role: "member" }, createdAt: "2026-07-10T11:00:00Z" },
      { id: "s4", practiceId: "p1", userId: "u4", status: "confirmed", user: { id: "u4", name: "Jordan Lake", email: "jordan@demo", role: "member" }, createdAt: "2026-07-11T08:00:00Z" },
      { id: "s5", practiceId: "p1", userId: "u5", status: "confirmed", user: { id: "u5", name: "Casey Waters", email: "casey@demo", role: "member" }, createdAt: "2026-07-11T09:00:00Z" },
      { id: "s6", practiceId: "p1", userId: "u6", status: "confirmed", user: { id: "u6", name: "Robin Shore", email: "robin@demo", role: "member" }, createdAt: "2026-07-11T10:00:00Z" },
      { id: "s7", practiceId: "p1", userId: "u7", status: "waitlist", user: { id: "u7", name: "Morgan Reed", email: "morgan@demo", role: "member" }, createdAt: "2026-07-12T07:00:00Z" }
    ]);
    this.myStatus = signal(null);
    this.confirmed = computed(() => this.signups().filter((s) => s.status === "confirmed"));
    this.waitlist = computed(() => this.signups().filter((s) => s.status === "waitlist"));
    this.spotsLeft = computed(() => Math.max(0, this.practice().capacity - this.confirmed().length));
  }
  boatLabel(t) {
    return BOAT_TYPE_LABELS[t];
  }
  // Optimistic local toggle so the mockup demonstrates the signup/cancel + waitlist flow.
  signup() {
    this.myStatus.set(this.spotsLeft() > 0 ? "confirmed" : "waitlist");
  }
  cancel() {
    this.myStatus.set("cancelled");
  }
  static {
    this.\u0275fac = function PracticeDetailComponent_Factory(t) {
      return new (t || _PracticeDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PracticeDetailComponent, selectors: [["app-practice-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 67, vars: 18, consts: [[1, "container", "stack"], [1, "breadcrumb"], ["routerLink", "/schedule"], [1, "faint"], [1, "row-between", "section-title"], [1, "stack", 2, "gap", "var(--sp-1)"], [1, "eyebrow"], [1, "muted"], [1, "btn", "btn-outline", 3, "routerLink"], [1, "card", "card-pad"], [1, "card", "card-pad", "stack"], [1, "kpi-grid"], [1, "kpi"], [1, "kpi-label"], [1, "kpi-value"], [1, "stack"], [2, "margin", "0"], [1, "muted", "small"], [1, "table-wrap"], [1, "data"], [1, "muted", 2, "margin", "0"], [1, "alert", "alert-success"], [1, "btn", "btn-danger", "btn-block", 3, "click"], [1, "alert", "alert-warning"], [1, "alert", "alert-info"], [1, "btn", "btn-primary", "btn-block", 3, "click"], [1, "wrap-gap"], [1, "tag", 2, "padding", "var(--sp-2) var(--sp-3)"]], template: function PracticeDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "a", 2);
        \u0275\u0275text(3, "Schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "/");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span");
        \u0275\u0275text(7, "Practice");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "span", 6);
        \u0275\u0275text(11, "Practice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "h2");
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span", 7);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(18, PracticeDetailComponent_Conditional_18_Template, 2, 3, "a", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, PracticeDetailComponent_Conditional_19_Template, 3, 1, "div", 9);
        \u0275\u0275elementStart(20, "div", 10)(21, "div", 11)(22, "div", 12)(23, "span", 13);
        \u0275\u0275text(24, "Capacity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 14);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 12)(28, "span", 13);
        \u0275\u0275text(29, "Confirmed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "span", 14);
        \u0275\u0275text(31);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 12)(33, "span", 13);
        \u0275\u0275text(34, "Waitlist");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "span", 14);
        \u0275\u0275text(36);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 12)(38, "span", 13);
        \u0275\u0275text(39, "Spots left");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "span", 14);
        \u0275\u0275text(41);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(42, PracticeDetailComponent_Conditional_42_Template, 4, 0)(43, PracticeDetailComponent_Conditional_43_Template, 4, 0)(44, PracticeDetailComponent_Conditional_44_Template, 4, 0)(45, PracticeDetailComponent_Conditional_45_Template, 2, 0)(46, PracticeDetailComponent_Conditional_46_Template, 2, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 15)(48, "h3", 16);
        \u0275\u0275text(49, "Assigned boats");
        \u0275\u0275elementEnd();
        \u0275\u0275template(50, PracticeDetailComponent_Conditional_50_Template, 2, 0, "p", 17)(51, PracticeDetailComponent_Conditional_51_Template, 3, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 15)(53, "h3", 16);
        \u0275\u0275text(54);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 18)(56, "table", 19)(57, "thead")(58, "tr")(59, "th");
        \u0275\u0275text(60, "Rower");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "th");
        \u0275\u0275text(62, "Signed up");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(63, "tbody");
        \u0275\u0275repeaterCreate(64, PracticeDetailComponent_For_65_Template, 6, 5, "tr", null, _forTrack0);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(66, PracticeDetailComponent_Conditional_66_Template, 16, 1, "div", 15);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 12, ctx.practice().startsAt, "EEEE, MMM d"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 15, ctx.practice().startsAt, "h:mm a"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(18, ctx.isCoach() ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(19, ctx.practice().notes ? 19 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.practice().capacity);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.confirmed().length);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.waitlist().length);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.spotsLeft());
        \u0275\u0275advance();
        \u0275\u0275conditional(42, ctx.myStatus() === "confirmed" ? 42 : ctx.myStatus() === "waitlist" ? 43 : ctx.myStatus() === "cancelled" ? 44 : ctx.spotsLeft() > 0 ? 45 : 46);
        \u0275\u0275advance(8);
        \u0275\u0275conditional(50, ctx.boats().length === 0 ? 50 : 51);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("Confirmed (", ctx.confirmed().length, ")");
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.confirmed());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(66, ctx.waitlist().length > 0 ? 66 : -1);
      }
    }, dependencies: [CommonModule, DatePipe, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PracticeDetailComponent, { className: "PracticeDetailComponent", filePath: "src/app/pages/practice-detail/practice-detail.component.ts", lineNumber: 13 });
})();
export {
  PracticeDetailComponent
};
//# sourceMappingURL=practice-detail.component-66IWTPSS.js.map
