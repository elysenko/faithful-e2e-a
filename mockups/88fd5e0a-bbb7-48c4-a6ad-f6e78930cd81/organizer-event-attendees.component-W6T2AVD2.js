import {
  ApiService
} from "./chunk-F5YUZCKE.js";
import {
  ActivatedRoute,
  CommonModule,
  NgClass,
  RouterLink,
  __spreadProps,
  __spreadValues,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate3
} from "./chunk-HZTH2ON3.js";

// src/app/pages/organizer-event-attendees/organizer-event-attendees.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function OrganizerEventAttendeesComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading attendees\u2026");
    \u0275\u0275elementEnd()();
  }
}
function OrganizerEventAttendeesComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 5);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function OrganizerEventAttendeesComponent_Conditional_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 5);
    \u0275\u0275text(2, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No confirmed attendees yet.");
    \u0275\u0275elementEnd()();
  }
}
function OrganizerEventAttendeesComponent_Conditional_5_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "div", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 16);
    \u0275\u0275listener("click", function OrganizerEventAttendeesComponent_Conditional_5_Conditional_8_For_2_Template_button_click_10_listener() {
      const a_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleCheckin(a_r3));
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((a_r3.user == null ? null : a_r3.user.name) || (a_r3.user == null ? null : a_r3.user.email) || "?").charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((a_r3.user == null ? null : a_r3.user.name) || (a_r3.user == null ? null : a_r3.user.email));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.user == null ? null : a_r3.user.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.badge(a_r3.status).cls);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.badge(a_r3.status).label);
    \u0275\u0275advance();
    \u0275\u0275classProp("btn-primary", a_r3.status !== "checkedIn")("btn-outline", a_r3.status === "checkedIn");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r3.status === "checkedIn" ? "Undo" : "Check in");
  }
}
function OrganizerEventAttendeesComponent_Conditional_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, OrganizerEventAttendeesComponent_Conditional_5_Conditional_8_For_2_Template, 12, 10, "div", 10, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.confirmed());
  }
}
function OrganizerEventAttendeesComponent_Conditional_5_Conditional_9_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "div", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((a_r4.user == null ? null : a_r4.user.name) || (a_r4.user == null ? null : a_r4.user.email) || "?").charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((a_r4.user == null ? null : a_r4.user.name) || (a_r4.user == null ? null : a_r4.user.email));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r4.user == null ? null : a_r4.user.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.badge(a_r4.status).cls);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.badge(a_r4.status).label);
  }
}
function OrganizerEventAttendeesComponent_Conditional_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 8);
    \u0275\u0275text(1, "Waitlist");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 9);
    \u0275\u0275repeaterCreate(3, OrganizerEventAttendeesComponent_Conditional_5_Conditional_9_For_4_Template, 10, 5, "div", 10, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.waitlist());
  }
}
function OrganizerEventAttendeesComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h1");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h2", 8);
    \u0275\u0275text(6, "Confirmed & checked in");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, OrganizerEventAttendeesComponent_Conditional_5_Conditional_7_Template, 5, 0, "div", 2)(8, OrganizerEventAttendeesComponent_Conditional_5_Conditional_8_Template, 3, 0)(9, OrganizerEventAttendeesComponent_Conditional_5_Conditional_9_Template, 5, 0);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_1_0 = (tmp_1_0 = ctx_r0.current()) == null ? null : tmp_1_0.title) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "Event attendees");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r0.checkedInCount(), " checked in \xB7 ", ctx_r0.confirmed().length, " confirmed \xB7 ", ctx_r0.waitlist().length, " waitlisted ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(7, ctx_r0.confirmed().length === 0 ? 7 : 8);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(9, ctx_r0.waitlist().length > 0 ? 9 : -1);
  }
}
var OrganizerEventAttendeesComponent = class _OrganizerEventAttendeesComponent {
  constructor(route, api) {
    this.route = route;
    this.api = api;
    this.loading = signal(false);
    this.error = signal(null);
    this.eventId = signal("");
    this.event = signal([]);
    this.attendees = signal([]);
    this.current = computed(() => this.event()[0]);
    this.confirmed = computed(() => this.attendees().filter((a) => a.status === "confirmed" || a.status === "checkedIn"));
    this.waitlist = computed(() => this.attendees().filter((a) => a.status === "waitlist"));
    this.checkedInCount = computed(() => this.attendees().filter((a) => a.status === "checkedIn").length);
  }
  ngOnInit() {
    this.eventId.set(this.route.snapshot.paramMap.get("id") ?? "");
    this.loading.set(true);
    this.error.set(null);
    this.api.getEvent(this.eventId()).subscribe({
      next: (event) => this.event.set([event]),
      error: () => {
      }
    });
    this.api.eventAttendees(this.eventId()).subscribe({
      next: (attendees) => {
        this.attendees.set(attendees);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Could not load attendees. Please try again.");
        this.loading.set(false);
      }
    });
  }
  toggleCheckin(r) {
    this.api.toggleCheckin(this.eventId(), r.userId).subscribe({
      next: (updated) => {
        this.attendees.update((list) => list.map((a) => a.id === r.id ? __spreadProps(__spreadValues({}, a), { status: updated.status }) : a));
      },
      error: () => this.error.set("Could not update check-in. Please try again.")
    });
  }
  badge(status) {
    switch (status) {
      case "confirmed":
        return { cls: "badge-ok", label: "Confirmed" };
      case "checkedIn":
        return { cls: "badge-info", label: "Checked in" };
      case "waitlist":
        return { cls: "badge-warn", label: "Waitlisted" };
      default:
        return { cls: "badge-muted", label: "Cancelled" };
    }
  }
  static {
    this.\u0275fac = function OrganizerEventAttendeesComponent_Factory(t) {
      return new (t || _OrganizerEventAttendeesComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrganizerEventAttendeesComponent, selectors: [["app-organizer-event-attendees"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [[1, "page"], ["routerLink", "/organizer", 1, "back-link"], [1, "state"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], [1, "page-head"], [1, "sub"], [1, "group-title"], [1, "card", "list"], [1, "att-row"], [1, "avatar"], [1, "att-main"], [1, "att-name"], [1, "att-email"], [1, "badge", 3, "ngClass"], [1, "btn", "btn-sm", 3, "click"], [1, "avatar", "muted-avatar"]], template: function OrganizerEventAttendeesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, OrganizerEventAttendeesComponent_Conditional_3_Template, 4, 0, "div", 2)(4, OrganizerEventAttendeesComponent_Conditional_4_Template, 5, 1)(5, OrganizerEventAttendeesComponent_Conditional_5_Template, 10, 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, ctx.loading() ? 3 : ctx.error() ? 4 : 5);
      }
    }, dependencies: [CommonModule, NgClass, RouterLink], styles: ["\n\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-4);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n}\n.group-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  color: var(--color-ink-soft);\n  margin: var(--space-5) 0 var(--space-3);\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.att-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-3) var(--space-4);\n  border-bottom: 1px solid var(--color-border);\n}\n.att-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.avatar[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: var(--color-brand-light);\n  color: var(--color-brand-dark);\n  font-weight: 800;\n  flex-shrink: 0;\n}\n.muted-avatar[_ngcontent-%COMP%] {\n  background: var(--color-surface-inset);\n  color: var(--color-muted);\n}\n.att-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.att-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.att-email[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  color: var(--color-muted);\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=organizer-event-attendees.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrganizerEventAttendeesComponent, { className: "OrganizerEventAttendeesComponent", filePath: "src/app/pages/organizer-event-attendees/organizer-event-attendees.component.ts", lineNumber: 19 });
})();
export {
  OrganizerEventAttendeesComponent
};
//# sourceMappingURL=organizer-event-attendees.component-W6T2AVD2.js.map
