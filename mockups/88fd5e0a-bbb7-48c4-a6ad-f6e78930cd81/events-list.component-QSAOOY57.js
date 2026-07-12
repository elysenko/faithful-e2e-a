import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-BPEXCG3O.js";
import {
  ApiService
} from "./chunk-F5YUZCKE.js";
import {
  ActivatedRoute,
  CommonModule,
  Router,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-HZTH2ON3.js";

// src/app/pages/events-list/events-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/events", a0];
function EventsListComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275property("value", c_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1);
  }
}
function EventsListComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 13);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading events\u2026");
    \u0275\u0275elementEnd()();
  }
}
function EventsListComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function EventsListComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 15);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No events match your filters.");
    \u0275\u0275elementEnd()();
  }
}
function EventsListComponent_Conditional_22_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ev_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.spotsLeft(ev_r3), " spots");
  }
}
function EventsListComponent_Conditional_22_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, "Waitlist");
    \u0275\u0275elementEnd();
  }
}
function EventsListComponent_Conditional_22_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 17)(1, "div", 18)(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h3", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 23)(11, "span", 24);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, EventsListComponent_Conditional_22_For_2_Conditional_13_Template, 2, 1, "span", 25)(14, EventsListComponent_Conditional_22_For_2_Conditional_14_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ev_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, ev_r3.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ev_r3.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dateLabel(ev_r3.startsAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ev_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ev_r3.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", ev_r3.venue == null ? null : ev_r3.venue.name, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(13, ctx_r1.spotsLeft(ev_r3) > 0 ? 13 : 14);
  }
}
function EventsListComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275repeaterCreate(1, EventsListComponent_Conditional_22_For_2_Template, 15, 9, "a", 17, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filtered());
  }
}
var EventsListComponent = class _EventsListComponent {
  constructor(route, router, api) {
    this.route = route;
    this.router = router;
    this.api = api;
    this.loading = signal(false);
    this.error = signal(null);
    this.q = signal("");
    this.category = signal("");
    this.allEvents = signal([]);
    this.categories = computed(() => [...new Set(this.allEvents().map((e) => e.category))].sort());
    this.filtered = computed(() => {
      const q = this.q().trim().toLowerCase();
      const cat = this.category();
      return this.allEvents().filter((e) => {
        const matchesQ = !q || e.title.toLowerCase().includes(q) || e.description.toLowerCase().includes(q);
        const matchesCat = !cat || e.category === cat;
        return matchesQ && matchesCat;
      });
    });
  }
  ngOnInit() {
    const params = this.route.snapshot.queryParamMap;
    this.q.set(params.get("q") ?? "");
    this.category.set(params.get("category") ?? "");
    this.loading.set(true);
    this.error.set(null);
    this.api.listEvents().subscribe({
      next: (events) => {
        this.allEvents.set(events);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Could not load events. Please try again.");
        this.loading.set(false);
      }
    });
  }
  onSearch(value) {
    this.q.set(value);
    this.syncUrl();
  }
  onCategory(value) {
    this.category.set(value);
    this.syncUrl();
  }
  syncUrl() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        q: this.q() || null,
        category: this.category() || null
      },
      queryParamsHandling: "merge"
    });
  }
  spotsLeft(ev) {
    return Math.max(0, ev.capacity - (ev.confirmedCount ?? 0));
  }
  dateLabel(iso) {
    return new Date(iso).toLocaleDateString(void 0, {
      weekday: "short",
      month: "short",
      day: "numeric"
    });
  }
  static {
    this.\u0275fac = function EventsListComponent_Factory(t) {
      return new (t || _EventsListComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventsListComponent, selectors: [["app-events-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 3, consts: [[1, "page"], [1, "page-head"], [1, "sub"], [1, "filters", "card"], [1, "field", "search"], ["for", "q"], ["id", "q", "type", "search", "name", "q", "placeholder", "Search events\u2026", 3, "ngModelChange", "ngModel"], [1, "field", "cat"], ["for", "category"], ["id", "category", "name", "category", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "state"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], [1, "grid"], [1, "card", "event-card", 3, "routerLink"], [1, "ev-top"], [1, "badge", "badge-muted"], [1, "ev-date"], [1, "ev-title"], [1, "ev-desc"], [1, "ev-foot"], [1, "ev-venue"], [1, "badge", "badge-ok"], [1, "badge", "badge-warn"]], template: function EventsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Events");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "Browse what's coming up and RSVP for the ones you love.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "label", 5);
        \u0275\u0275text(9, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275listener("ngModelChange", function EventsListComponent_Template_input_ngModelChange_10_listener($event) {
          return ctx.onSearch($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 7)(12, "label", 8);
        \u0275\u0275text(13, "Category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "select", 9);
        \u0275\u0275listener("ngModelChange", function EventsListComponent_Template_select_ngModelChange_14_listener($event) {
          return ctx.onCategory($event);
        });
        \u0275\u0275elementStart(15, "option", 10);
        \u0275\u0275text(16, "All categories");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(17, EventsListComponent_For_18_Template, 2, 2, "option", 11, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(19, EventsListComponent_Conditional_19_Template, 4, 0, "div", 12)(20, EventsListComponent_Conditional_20_Template, 5, 1)(21, EventsListComponent_Conditional_21_Template, 5, 0)(22, EventsListComponent_Conditional_22_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("ngModel", ctx.q());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.category());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.categories());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(19, ctx.loading() ? 19 : ctx.error() ? 20 : ctx.filtered().length === 0 ? 21 : 22);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ["\n\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-4);\n  padding: var(--space-4);\n  margin-bottom: var(--space-5);\n  flex-wrap: wrap;\n}\n.filters[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.filters[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  flex: 2;\n  min-width: 200px;\n}\n.filters[_ngcontent-%COMP%]   .cat[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.event-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  padding: var(--space-4);\n  color: inherit;\n  transition:\n    box-shadow .15s,\n    transform .05s,\n    border-color .15s;\n}\n.event-card[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  box-shadow: var(--shadow);\n  border-color: var(--color-border-strong);\n}\n.event-card[_ngcontent-%COMP%]:active {\n  transform: scale(.99);\n}\n.ev-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.ev-date[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  color: var(--color-muted);\n  font-weight: 600;\n}\n.ev-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.ev-desc[_ngcontent-%COMP%] {\n  color: var(--color-muted);\n  font-size: var(--fs-sm);\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.ev-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-2);\n  margin-top: auto;\n}\n.ev-venue[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  color: var(--color-ink-soft);\n}\n/*# sourceMappingURL=events-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventsListComponent, { className: "EventsListComponent", filePath: "src/app/pages/events-list/events-list.component.ts", lineNumber: 21 });
})();
export {
  EventsListComponent
};
//# sourceMappingURL=events-list.component-QSAOOY57.js.map
