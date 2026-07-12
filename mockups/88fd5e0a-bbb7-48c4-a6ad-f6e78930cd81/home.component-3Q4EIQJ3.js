import {
  ApiService
} from "./chunk-F5YUZCKE.js";
import {
  CommonModule,
  RouterLink,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-HZTH2ON3.js";

// src/app/pages/home/home.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/events", a0];
function HomeComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading events\u2026");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 11);
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
function HomeComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 11);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No upcoming events yet. Check back soon.");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_Conditional_20_For_1_For_5_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ev_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.spotsLeft(ev_r2), " spots");
  }
}
function HomeComponent_Conditional_20_For_1_For_5_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "Waitlist");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_Conditional_20_For_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15)(1, "div", 16)(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h3", 19);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 20);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 21)(11, "span", 22);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, HomeComponent_Conditional_20_For_1_For_5_Conditional_13_Template, 2, 1, "span", 23)(14, HomeComponent_Conditional_20_For_1_For_5_Conditional_14_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ev_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, ev_r2.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ev_r2.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.timeLabel(ev_r2.startsAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ev_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ev_r2.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", ev_r2.venue == null ? null : ev_r2.venue.name, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(13, ctx_r0.spotsLeft(ev_r2) > 0 ? 13 : 14);
  }
}
function HomeComponent_Conditional_20_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "h2", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275repeaterCreate(4, HomeComponent_Conditional_20_For_1_For_5_Template, 15, 9, "a", 15, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r3.events);
  }
}
function HomeComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, HomeComponent_Conditional_20_For_1_Template, 6, 1, "div", 12, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.groups());
  }
}
var HomeComponent = class _HomeComponent {
  constructor(api) {
    this.api = api;
    this.loading = signal(false);
    this.error = signal(null);
    this.events = signal([]);
    this.groups = computed(() => {
      const map = /* @__PURE__ */ new Map();
      for (const ev of [...this.events()].sort((a, b) => a.startsAt.localeCompare(b.startsAt))) {
        const d = new Date(ev.startsAt);
        const key = ev.startsAt.slice(0, 10);
        if (!map.has(key)) {
          map.set(key, {
            key,
            label: d.toLocaleDateString(void 0, {
              weekday: "long",
              month: "long",
              day: "numeric"
            }),
            events: []
          });
        }
        map.get(key).events.push(ev);
      }
      return [...map.values()];
    });
  }
  ngOnInit() {
    this.loading.set(true);
    this.error.set(null);
    this.api.listEvents(void 0, void 0, true).subscribe({
      next: (events) => {
        this.events.set(events);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Could not load events. Please try again.");
        this.loading.set(false);
      }
    });
  }
  spotsLeft(ev) {
    return Math.max(0, ev.capacity - (ev.confirmedCount ?? 0));
  }
  timeLabel(iso) {
    return new Date(iso).toLocaleTimeString(void 0, { hour: "numeric", minute: "2-digit" });
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(t) {
      return new (t || _HomeComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 1, consts: [[1, "hero"], [1, "hero-inner"], [1, "badge", "badge-brand"], ["routerLink", "/events", 1, "btn", "btn-primary"], [1, "page"], [1, "page-head"], [1, "spacer"], ["routerLink", "/events", 1, "btn", "btn-outline", "btn-sm"], [1, "state"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], [1, "date-group"], [1, "date-label"], [1, "grid"], [1, "card", "event-card", 3, "routerLink"], [1, "ev-top"], [1, "badge", "badge-muted"], [1, "ev-time"], [1, "ev-title"], [1, "ev-desc"], [1, "ev-foot"], [1, "ev-venue"], [1, "badge", "badge-ok"], [1, "badge", "badge-warn"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "GatherUp");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1");
        \u0275\u0275text(5, "Find your next gathering");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "Browse upcoming events, RSVP in a tap, and never miss the moment a spot opens up.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "a", 3);
        \u0275\u0275text(9, "Browse all events");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 4)(11, "div", 5)(12, "h1");
        \u0275\u0275text(13, "Upcoming");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "span", 6);
        \u0275\u0275elementStart(15, "a", 7);
        \u0275\u0275text(16, "See all");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(17, HomeComponent_Conditional_17_Template, 4, 0, "div", 8)(18, HomeComponent_Conditional_18_Template, 5, 1)(19, HomeComponent_Conditional_19_Template, 5, 0)(20, HomeComponent_Conditional_20_Template, 2, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275conditional(17, ctx.loading() ? 17 : ctx.error() ? 18 : ctx.groups().length === 0 ? 19 : 20);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at 15% 20%,\n      var(--color-brand-light),\n      transparent 45%),\n    radial-gradient(\n      circle at 90% 30%,\n      var(--color-accent-light),\n      transparent 40%),\n    var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n}\n.hero-inner[_ngcontent-%COMP%] {\n  max-width: var(--container);\n  margin: 0 auto;\n  padding: var(--space-8) var(--space-4);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--space-3);\n}\n.hero-inner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n}\n.hero-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-ink-soft);\n  max-width: 48ch;\n  font-size: var(--fs-md);\n  margin: 0;\n}\n.hero-inner[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-top: var(--space-2);\n}\n.date-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-6);\n}\n.date-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  color: var(--color-ink-soft);\n  margin-bottom: var(--space-3);\n  padding-bottom: var(--space-2);\n  border-bottom: 1px solid var(--color-border);\n}\n.event-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  padding: var(--space-4);\n  color: inherit;\n  transition:\n    box-shadow .15s,\n    transform .05s,\n    border-color .15s;\n}\n.event-card[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  box-shadow: var(--shadow);\n  border-color: var(--color-border-strong);\n}\n.event-card[_ngcontent-%COMP%]:active {\n  transform: scale(.99);\n}\n.ev-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.ev-time[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  color: var(--color-muted);\n  font-weight: 600;\n}\n.ev-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.ev-desc[_ngcontent-%COMP%] {\n  color: var(--color-muted);\n  font-size: var(--fs-sm);\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.ev-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-2);\n  margin-top: auto;\n}\n.ev-venue[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  color: var(--color-ink-soft);\n}\n@media (max-width: 768px) {\n  .hero-inner[_ngcontent-%COMP%] {\n    padding: var(--space-6) var(--space-4);\n    align-items: center;\n    text-align: center;\n  }\n  .hero-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/pages/home/home.component.ts", lineNumber: 24 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=home.component-3Q4EIQJ3.js.map
