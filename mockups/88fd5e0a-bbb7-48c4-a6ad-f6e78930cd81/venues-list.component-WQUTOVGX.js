import {
  ApiService
} from "./chunk-F5YUZCKE.js";
import {
  CommonModule,
  RouterLink,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-HZTH2ON3.js";

// src/app/pages/venues-list/venues-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/organizer/venues", a0];
function VenuesListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading venues\u2026");
    \u0275\u0275elementEnd()();
  }
}
function VenuesListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 8);
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
function VenuesListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 8);
    \u0275\u0275text(2, "\u{1F4CD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No venues yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 4);
    \u0275\u0275text(6, "Add a venue");
    \u0275\u0275elementEnd()();
  }
}
function VenuesListComponent_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 12)(6, "span", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 14)(9, "a", 15);
    \u0275\u0275text(10, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 16);
    \u0275\u0275listener("click", function VenuesListComponent_Conditional_12_For_2_Template_button_click_11_listener() {
      const v_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.remove(v_r3));
    });
    \u0275\u0275text(12, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const v_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", v_r3.address, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Default capacity ", v_r3.defaultCapacity, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, v_r3.id));
  }
}
function VenuesListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, VenuesListComponent_Conditional_12_For_2_Template, 13, 6, "div", 10, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.venues());
  }
}
var VenuesListComponent = class _VenuesListComponent {
  constructor(api) {
    this.api = api;
    this.loading = signal(false);
    this.error = signal(null);
    this.venues = signal([]);
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    this.api.listVenues().subscribe({
      next: (venues) => {
        this.venues.set(venues);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Could not load venues. Please try again.");
        this.loading.set(false);
      }
    });
  }
  remove(v) {
    this.venues.update((list) => list.filter((x) => x.id !== v.id));
    this.api.deleteVenue(v.id).subscribe({
      next: () => {
      },
      error: () => {
        this.error.set("Could not delete the venue. Refreshing the list.");
        this.load();
      }
    });
  }
  static {
    this.\u0275fac = function VenuesListComponent_Factory(t) {
      return new (t || _VenuesListComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VenuesListComponent, selectors: [["app-venues-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 1, consts: [[1, "page"], [1, "page-head"], ["routerLink", "/organizer", 1, "back-link"], [1, "spacer"], ["routerLink", "/organizer/venues/new", 1, "btn", "btn-primary", "btn-sm"], [1, "state"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], [1, "grid"], [1, "card", "venue-card"], [1, "addr"], [1, "cap"], [1, "badge", "badge-muted"], [1, "venue-actions"], [1, "btn", "btn-outline", "btn-sm", 3, "routerLink"], [1, "btn", "btn-danger", "btn-sm", 3, "click"]], template: function VenuesListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275text(3, "\u2190 Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1");
        \u0275\u0275text(5, "Venues");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "span", 3);
        \u0275\u0275elementStart(7, "a", 4);
        \u0275\u0275text(8, "+ New venue");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, VenuesListComponent_Conditional_9_Template, 4, 0, "div", 5)(10, VenuesListComponent_Conditional_10_Template, 5, 1)(11, VenuesListComponent_Conditional_11_Template, 7, 0)(12, VenuesListComponent_Conditional_12_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275conditional(9, ctx.loading() ? 9 : ctx.error() ? 10 : ctx.venues().length === 0 ? 11 : 12);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.back-link[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  width: 100%;\n}\n.venue-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  padding: var(--space-4);\n}\n.venue-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.venue-card[_ngcontent-%COMP%]   .addr[_ngcontent-%COMP%] {\n  color: var(--color-muted);\n  font-size: var(--fs-sm);\n  margin: 0;\n}\n.venue-card[_ngcontent-%COMP%]   .cap[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.venue-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n  margin-top: auto;\n  padding-top: var(--space-2);\n}\n.venue-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=venues-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VenuesListComponent, { className: "VenuesListComponent", filePath: "src/app/pages/venues-list/venues-list.component.ts", lineNumber: 18 });
})();
export {
  VenuesListComponent
};
//# sourceMappingURL=venues-list.component-WQUTOVGX.js.map
