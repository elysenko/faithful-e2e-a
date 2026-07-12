import {
  AuthService
} from "./chunk-IBNCHXSA.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-GFN35O44.js";
import {
  CommonModule,
  DatePipe,
  __spreadProps,
  __spreadValues,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-KFEQ7DOY.js";

// src/app/pages/member-detail/member-detail.component.ts
var _forTrack0 = ($index, $item) => $item.practiceId;
var _c0 = (a0) => ["/practices", a0];
function MemberDetailComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.member().level);
  }
}
function MemberDetailComponent_Conditional_21_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r3 = ctx.$implicit;
    \u0275\u0275property("value", l_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r3);
  }
}
function MemberDetailComponent_Conditional_21_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    \u0275\u0275property("value", r_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r4);
  }
}
function MemberDetailComponent_Conditional_21_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1, "Member updated.");
    \u0275\u0275elementEnd();
  }
}
function MemberDetailComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "h3", 8);
    \u0275\u0275text(2, "Manage member");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16)(4, "div", 17)(5, "label", 18);
    \u0275\u0275text(6, "Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 19);
    \u0275\u0275listener("change", function MemberDetailComponent_Conditional_21_Template_select_change_7_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.editLevel.set($event.target.value));
    });
    \u0275\u0275repeaterCreate(8, MemberDetailComponent_Conditional_21_For_9_Template, 2, 2, "option", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 17)(11, "label", 21);
    \u0275\u0275text(12, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 22);
    \u0275\u0275listener("change", function MemberDetailComponent_Conditional_21_Template_select_change_13_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.editRole.set($event.target.value));
    });
    \u0275\u0275repeaterCreate(14, MemberDetailComponent_Conditional_21_For_15_Template, 2, 2, "option", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(16, MemberDetailComponent_Conditional_21_Conditional_16_Template, 2, 0, "div", 23);
    \u0275\u0275elementStart(17, "button", 24);
    \u0275\u0275listener("click", function MemberDetailComponent_Conditional_21_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275text(18, "Save changes");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r0.editLevel());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.levels);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r0.editRole());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.roles);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(16, ctx_r0.saved() ? 16 : -1);
  }
}
function MemberDetailComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 25);
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 9);
    \u0275\u0275text(4, "No past practices attended.");
    \u0275\u0275elementEnd()();
  }
}
function MemberDetailComponent_Conditional_26_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 28)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "span", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r5 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, a_r5.practiceId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 3, a_r5.startsAt, "EEE, MMM d, y \xB7 h:mm a"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(a_r5.status);
  }
}
function MemberDetailComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "table", 27)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Practice date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "tbody");
    \u0275\u0275repeaterCreate(9, MemberDetailComponent_Conditional_26_For_10_Template, 7, 8, "tr", 28, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r0.attendance());
  }
}
var MemberDetailComponent = class _MemberDetailComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.id = inject(ActivatedRoute).snapshot.paramMap.get("id") ?? "u2";
    this.isCoach = this.auth.isCoach;
    this.levels = ["novice", "intermediate", "competitive"];
    this.roles = ["member", "coach"];
    this.member = signal({
      id: "u2",
      name: "Alex Rivers",
      email: "alex@demo",
      role: "member",
      level: "intermediate"
    });
    this.attendance = signal([
      { practiceId: "p10", startsAt: "2026-07-08T06:00:00Z", status: "confirmed" },
      { practiceId: "p11", startsAt: "2026-07-05T06:30:00Z", status: "confirmed" },
      { practiceId: "p12", startsAt: "2026-07-01T06:00:00Z", status: "confirmed" }
    ]);
    this.editLevel = signal("intermediate");
    this.editRole = signal("member");
    this.saved = signal(false);
  }
  save() {
    this.member.update((m) => __spreadProps(__spreadValues({}, m), { level: this.editLevel(), role: this.editRole() }));
    this.saved.set(true);
  }
  static {
    this.\u0275fac = function MemberDetailComponent_Factory(t) {
      return new (t || _MemberDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MemberDetailComponent, selectors: [["app-member-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 10, consts: [[1, "container", "stack"], [1, "breadcrumb"], ["routerLink", "/members"], [1, "faint"], [1, "row-between", "section-title"], [1, "row", 2, "gap", "var(--sp-3)"], [1, "erp-avatar", 2, "width", "48px", "height", "48px", "font-size", "var(--fs-md)"], [1, "stack", 2, "gap", "var(--sp-1)"], [2, "margin", "0"], [1, "muted"], [1, "wrap-gap"], [1, "badge"], [1, "badge", "badge-success"], [1, "card", "card-pad", "stack"], [1, "stack"], [1, "state"], [1, "grid-two"], [1, "field", 2, "margin", "0"], ["for", "level"], ["id", "level", 1, "select", 3, "change", "value"], [3, "value"], ["for", "role"], ["id", "role", 1, "select", 3, "change", "value"], [1, "alert", "alert-success"], [1, "btn", "btn-primary", 3, "click"], [1, "state-icon"], [1, "table-wrap"], [1, "data"], [1, "clickable", 3, "routerLink"]], template: function MemberDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "a", 2);
        \u0275\u0275text(3, "Members");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "/");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span");
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "span", 6);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 7)(13, "h2", 8);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span", 9);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 10)(18, "span", 11);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, MemberDetailComponent_Conditional_20_Template, 2, 1, "span", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(21, MemberDetailComponent_Conditional_21_Template, 19, 3, "div", 13);
        \u0275\u0275elementStart(22, "div", 14)(23, "h3", 8);
        \u0275\u0275text(24, "Attendance history");
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, MemberDetailComponent_Conditional_25_Template, 5, 0, "div", 15)(26, MemberDetailComponent_Conditional_26_Template, 11, 0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.member().name);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", (ctx.member().name || "M").slice(0, 2).toUpperCase(), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.member().name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.member().email);
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.member().role === "coach" ? "badge-info" : "badge-neutral");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.member().role);
        \u0275\u0275advance();
        \u0275\u0275conditional(20, ctx.member().level ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(21, ctx.isCoach() ? 21 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(25, ctx.attendance().length === 0 ? 25 : 26);
      }
    }, dependencies: [CommonModule, DatePipe, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MemberDetailComponent, { className: "MemberDetailComponent", filePath: "src/app/pages/member-detail/member-detail.component.ts", lineNumber: 13 });
})();
export {
  MemberDetailComponent
};
//# sourceMappingURL=member-detail.component-47XU5GFE.js.map
