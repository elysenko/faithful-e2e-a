import {
  AuthService
} from "./chunk-HNF4QR22.js";
import {
  ActivatedRoute,
  CommonModule,
  NgClass,
  Router,
  RouterLink,
  __spreadProps,
  __spreadValues,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-2E7QKGDK.js";

// src/app/pages/event-detail/event-detail.component.ts
function EventDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading event\u2026");
    \u0275\u0275elementEnd()();
  }
}
function EventDetailComponent_Conditional_4_Template(rf, ctx) {
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
function EventDetailComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 5);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Event not found.");
    \u0275\u0275elementEnd()();
  }
}
function EventDetailComponent_Conditional_6_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1, "This event is full \u2014 RSVP joins the waitlist.");
    \u0275\u0275elementEnd();
  }
}
function EventDetailComponent_Conditional_6_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.spotsLeft(), " spots left.");
  }
}
function EventDetailComponent_Conditional_6_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sb_r2 = ctx;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", sb_r2.cls);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sb_r2.label);
  }
}
function EventDetailComponent_Conditional_6_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function EventDetailComponent_Conditional_6_Conditional_38_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onCancel());
    });
    \u0275\u0275text(1, " Cancel RSVP ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.acting());
  }
}
function EventDetailComponent_Conditional_6_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function EventDetailComponent_Conditional_6_Conditional_39_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onRsvp());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.acting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isFull() ? "Join waitlist" : "RSVP now", " ");
  }
}
function EventDetailComponent_Conditional_6_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function EventDetailComponent_Conditional_6_Conditional_40_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onRsvp());
    });
    \u0275\u0275text(1, " Log in to RSVP ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 26);
    \u0275\u0275text(3, "You'll be asked to log in first.");
    \u0275\u0275elementEnd();
  }
}
function EventDetailComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 6)(1, "header", 7)(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 10);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 11)(11, "div", 12)(12, "h2");
    \u0275\u0275text(13, "About this event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "aside", 13)(17, "h2");
    \u0275\u0275text(18, "RSVP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 14)(20, "div", 15)(21, "span", 16);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 17);
    \u0275\u0275text(24, "Confirmed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 15)(26, "span", 16);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 17);
    \u0275\u0275text(29, "Capacity");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 15)(31, "span", 16);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 17);
    \u0275\u0275text(34, "Waitlisted");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(35, EventDetailComponent_Conditional_6_Conditional_35_Template, 2, 0, "p", 18)(36, EventDetailComponent_Conditional_6_Conditional_36_Template, 2, 1)(37, EventDetailComponent_Conditional_6_Conditional_37_Template, 3, 2, "div", 19)(38, EventDetailComponent_Conditional_6_Conditional_38_Template, 2, 1, "button", 20)(39, EventDetailComponent_Conditional_6_Conditional_39_Template, 2, 2)(40, EventDetailComponent_Conditional_6_Conditional_40_Template, 4, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_6_0;
    let tmp_8_0;
    let tmp_10_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.event().category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.event().title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F5D3}\uFE0F ", ctx_r0.when(ctx_r0.event().startsAt), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("\u{1F4CD} ", (tmp_4_0 = ctx_r0.event().venue) == null ? null : tmp_4_0.name, " \xB7 ", (tmp_4_0 = ctx_r0.event().venue) == null ? null : tmp_4_0.address, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.event().description);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate((tmp_6_0 = ctx_r0.event().confirmedCount) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.event().capacity);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_8_0 = ctx_r0.event().waitlistCount) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : 0);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(35, ctx_r0.isFull() ? 35 : 36);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(37, (tmp_10_0 = ctx_r0.statusBadge(ctx_r0.event().myRsvpStatus)) ? 37 : -1, tmp_10_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(38, ctx_r0.event().myRsvpStatus === "confirmed" || ctx_r0.event().myRsvpStatus === "waitlist" || ctx_r0.event().myRsvpStatus === "checkedIn" ? 38 : ctx_r0.auth.isLoggedIn() ? 39 : 40);
  }
}
var EventDetailComponent = class _EventDetailComponent {
  constructor(auth, route, router) {
    this.auth = auth;
    this.route = route;
    this.router = router;
    this.loading = signal(false);
    this.error = signal(null);
    this.acting = signal(false);
    this.events = signal([
      {
        id: "e1",
        venueId: "v1",
        title: "Indie Synth Night",
        description: "A cozy evening of live synth-pop from three local acts. Doors at 8pm, first set at 8:30. Full bar on site, all ages until 10pm.",
        category: "Music",
        startsAt: "2026-07-18T20:00:00.000Z",
        endsAt: "2026-07-18T23:00:00.000Z",
        capacity: 120,
        confirmedCount: 87,
        waitlistCount: 0,
        myRsvpStatus: null,
        venue: { id: "v1", name: "The Warehouse", address: "12 Dock Road", defaultCapacity: 150 }
      },
      {
        id: "e3",
        venueId: "v1",
        title: "Intro to Watercolor",
        description: "Hands-on beginner workshop \u2014 materials provided. This session is full; RSVP to join the waitlist and we'll auto-promote you if a spot opens.",
        category: "Workshop",
        startsAt: "2026-07-22T18:30:00.000Z",
        endsAt: "2026-07-22T20:30:00.000Z",
        capacity: 1,
        confirmedCount: 1,
        waitlistCount: 2,
        myRsvpStatus: null,
        venue: { id: "v1", name: "The Warehouse", address: "12 Dock Road", defaultCapacity: 150 }
      }
    ]);
    this.eventId = signal("");
    this.event = computed(() => this.events().find((e) => e.id === this.eventId()) ?? this.events()[0]);
    this.spotsLeft = computed(() => {
      const e = this.event();
      return e ? Math.max(0, e.capacity - (e.confirmedCount ?? 0)) : 0;
    });
    this.isFull = computed(() => this.spotsLeft() === 0);
  }
  ngOnInit() {
    this.eventId.set(this.route.snapshot.paramMap.get("id") ?? "");
  }
  /** RSVP CTA. Anonymous users are redirected to login (login-gated). */
  onRsvp() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(["/login"]);
      return;
    }
    this.acting.set(true);
    this.mutate((e) => {
      if (this.isFull()) {
        return __spreadProps(__spreadValues({}, e), { myRsvpStatus: "waitlist", waitlistCount: (e.waitlistCount ?? 0) + 1 });
      }
      return __spreadProps(__spreadValues({}, e), { myRsvpStatus: "confirmed", confirmedCount: (e.confirmedCount ?? 0) + 1 });
    });
    this.acting.set(false);
  }
  onCancel() {
    this.acting.set(true);
    this.mutate((e) => {
      const wasConfirmed = e.myRsvpStatus === "confirmed" || e.myRsvpStatus === "checkedIn";
      return __spreadProps(__spreadValues({}, e), {
        myRsvpStatus: "cancelled",
        confirmedCount: wasConfirmed ? Math.max(0, (e.confirmedCount ?? 0) - 1) : e.confirmedCount
      });
    });
    this.acting.set(false);
  }
  mutate(fn) {
    const id = this.event()?.id;
    this.events.update((list) => list.map((e) => e.id === id ? fn(e) : e));
  }
  statusBadge(status) {
    switch (status) {
      case "confirmed":
        return { cls: "badge-ok", label: "You're going" };
      case "checkedIn":
        return { cls: "badge-info", label: "Checked in" };
      case "waitlist":
        return { cls: "badge-warn", label: "On the waitlist" };
      default:
        return null;
    }
  }
  when(iso) {
    return new Date(iso).toLocaleString(void 0, {
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });
  }
  static {
    this.\u0275fac = function EventDetailComponent_Factory(t) {
      return new (t || _EventDetailComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventDetailComponent, selectors: [["app-event-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 1, consts: [[1, "page"], ["routerLink", "/events", 1, "back-link"], [1, "state"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], [1, "detail"], [1, "detail-head"], [1, "badge", "badge-brand"], [1, "when"], [1, "venue"], [1, "detail-grid"], [1, "card", "card-pad", "description"], [1, "card", "card-pad", "rsvp-box"], [1, "counts"], [1, "count"], [1, "count-num"], [1, "count-lbl"], [1, "cap-note", "warn"], [1, "my-status"], [1, "btn", "btn-outline", "btn-block", 3, "disabled"], [1, "cap-note", "ok"], [1, "badge", 3, "ngClass"], [1, "btn", "btn-outline", "btn-block", 3, "click", "disabled"], [1, "btn", "btn-accent", "btn-block", 3, "click", "disabled"], [1, "btn", "btn-accent", "btn-block", 3, "click"], [1, "hint", "center"]], template: function EventDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to events");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, EventDetailComponent_Conditional_3_Template, 4, 0, "div", 2)(4, EventDetailComponent_Conditional_4_Template, 5, 1)(5, EventDetailComponent_Conditional_5_Template, 5, 0)(6, EventDetailComponent_Conditional_6_Template, 41, 12);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, ctx.loading() ? 3 : ctx.error() ? 4 : !ctx.event() ? 5 : 6);
      }
    }, dependencies: [CommonModule, NgClass, RouterLink], styles: ["\n\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-4);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n}\n.detail-head[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-5);\n}\n.detail-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  margin: var(--space-2) 0;\n}\n.detail-head[_ngcontent-%COMP%]   .when[_ngcontent-%COMP%] {\n  color: var(--color-ink-soft);\n  font-weight: 600;\n  margin: var(--space-1) 0;\n}\n.detail-head[_ngcontent-%COMP%]   .venue[_ngcontent-%COMP%] {\n  color: var(--color-muted);\n  font-size: var(--fs-sm);\n  margin: 0;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: var(--space-5);\n  align-items: start;\n}\n.description[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .rsvp-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: var(--space-3);\n}\n.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-ink-soft);\n  margin: 0;\n}\n.rsvp-box[_ngcontent-%COMP%] {\n  position: sticky;\n  top: calc(var(--header-h) + var(--space-4));\n}\n.counts[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-3);\n  margin-bottom: var(--space-3);\n}\n.count[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: var(--space-3) var(--space-2);\n  background: var(--color-surface-inset);\n  border-radius: var(--radius);\n}\n.count-num[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  font-weight: 800;\n  color: var(--color-ink);\n  font-variant-numeric: tabular-nums;\n}\n.count-lbl[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  color: var(--color-muted);\n}\n.cap-note[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  margin: 0 0 var(--space-3);\n}\n.cap-note.ok[_ngcontent-%COMP%] {\n  color: var(--color-success);\n}\n.cap-note.warn[_ngcontent-%COMP%] {\n  color: var(--color-warning);\n}\n.my-status[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-3);\n}\n@media (max-width: 768px) {\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .rsvp-box[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n/*# sourceMappingURL=event-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventDetailComponent, { className: "EventDetailComponent", filePath: "src/app/pages/event-detail/event-detail.component.ts", lineNumber: 20 });
})();
export {
  EventDetailComponent
};
//# sourceMappingURL=event-detail.component-H7NSPHY2.js.map
