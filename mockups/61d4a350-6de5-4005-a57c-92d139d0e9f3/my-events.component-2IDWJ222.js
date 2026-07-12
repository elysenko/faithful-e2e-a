import {
  CommonModule,
  NgClass,
  RouterLink,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
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
} from "./chunk-2E7QKGDK.js";

// src/app/pages/my-events/my-events.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/events", a0];
function MyEventsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading your RSVPs\u2026");
    \u0275\u0275elementEnd()();
  }
}
function MyEventsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 6);
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
function MyEventsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 6);
    \u0275\u0275text(2, "\u2B50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "You haven't RSVP'd to anything yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 7);
    \u0275\u0275text(6, "Browse events");
    \u0275\u0275elementEnd()();
  }
}
function MyEventsComponent_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9)(1, "div", 10)(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 12);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 13);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, r_r2.eventId));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r2.event == null ? null : r_r2.event.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.event == null ? null : r_r2.event.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F5D3}\uFE0F ", ctx_r0.when(r_r2.event == null ? null : r_r2.event.startsAt), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", r_r2.event == null ? null : r_r2.event.venue == null ? null : r_r2.event.venue.name, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.badge(r_r2.status).cls);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.badge(r_r2.status).label);
  }
}
function MyEventsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, MyEventsComponent_Conditional_9_For_2_Template, 12, 9, "a", 9, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.rsvps());
  }
}
var MyEventsComponent = class _MyEventsComponent {
  constructor() {
    this.loading = signal(false);
    this.error = signal(null);
    this.rsvps = signal([
      {
        id: "r1",
        eventId: "e1",
        userId: "me",
        status: "confirmed",
        event: {
          id: "e1",
          venueId: "v1",
          title: "Indie Synth Night",
          description: "",
          category: "Music",
          startsAt: "2026-07-18T20:00:00.000Z",
          endsAt: "2026-07-18T23:00:00.000Z",
          capacity: 120,
          venue: { id: "v1", name: "The Warehouse", address: "12 Dock Road", defaultCapacity: 150 }
        }
      },
      {
        id: "r2",
        eventId: "e3",
        userId: "me",
        status: "waitlist",
        event: {
          id: "e3",
          venueId: "v1",
          title: "Intro to Watercolor",
          description: "",
          category: "Workshop",
          startsAt: "2026-07-22T18:30:00.000Z",
          endsAt: "2026-07-22T20:30:00.000Z",
          capacity: 1,
          venue: { id: "v1", name: "The Warehouse", address: "12 Dock Road", defaultCapacity: 150 }
        }
      },
      {
        id: "r3",
        eventId: "e5",
        userId: "me",
        status: "checkedIn",
        event: {
          id: "e5",
          venueId: "v1",
          title: "Jazz & Wine Tasting",
          description: "",
          category: "Music",
          startsAt: "2026-07-30T19:00:00.000Z",
          endsAt: "2026-07-30T22:00:00.000Z",
          capacity: 60,
          venue: { id: "v1", name: "The Warehouse", address: "12 Dock Road", defaultCapacity: 150 }
        }
      }
    ]);
  }
  ngOnInit() {
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
  when(iso) {
    if (!iso)
      return "";
    return new Date(iso).toLocaleString(void 0, {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });
  }
  static {
    this.\u0275fac = function MyEventsComponent_Factory(t) {
      return new (t || _MyEventsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyEventsComponent, selectors: [["app-my-events"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 1, consts: [[1, "page"], [1, "page-head"], [1, "sub"], [1, "state"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], ["routerLink", "/events", 1, "btn", "btn-primary", "btn-sm"], [1, "stack"], [1, "card", "rsvp-row", 3, "routerLink"], [1, "rsvp-main"], [1, "badge", "badge-muted"], [1, "meta"], [1, "badge", 3, "ngClass"]], template: function MyEventsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "My Events");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "Everything you've RSVP'd to, with your current status.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, MyEventsComponent_Conditional_6_Template, 4, 0, "div", 3)(7, MyEventsComponent_Conditional_7_Template, 5, 1)(8, MyEventsComponent_Conditional_8_Template, 7, 0)(9, MyEventsComponent_Conditional_9_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.loading() ? 6 : ctx.error() ? 7 : ctx.rsvps().length === 0 ? 8 : 9);
      }
    }, dependencies: [CommonModule, NgClass, RouterLink], styles: ["\n\n.rsvp-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-4);\n  color: inherit;\n  transition: box-shadow .15s, border-color .15s;\n}\n.rsvp-row[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  box-shadow: var(--shadow);\n  border-color: var(--color-border-strong);\n}\n.rsvp-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.rsvp-main[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin: var(--space-1) 0 0;\n}\n.rsvp-main[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  color: var(--color-muted);\n  margin: 0;\n}\n/*# sourceMappingURL=my-events.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyEventsComponent, { className: "MyEventsComponent", filePath: "src/app/pages/my-events/my-events.component.ts", lineNumber: 17 });
})();
export {
  MyEventsComponent
};
//# sourceMappingURL=my-events.component-2IDWJ222.js.map
