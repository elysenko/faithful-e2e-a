import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-FO3CHQ4J.js";
import {
  AuthService
} from "./chunk-HEI6KB7T.js";
import {
  SeedService
} from "./chunk-E63MY2RY.js";
import {
  ActivatedRoute,
  CommonModule,
  Router,
  RouterLink,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-A62IECG2.js";

// src/app/features/portal/portal-pricing-requests/portal-pricing-requests.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function PortalPricingRequestsComponent_Conditional_13_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.statusBadge(r_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.createdAt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.detail);
  }
}
function PortalPricingRequestsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "table", 10)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Detail");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, PortalPricingRequestsComponent_Conditional_13_For_14_Template, 10, 6, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r1.requests());
  }
}
function PortalPricingRequestsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "No pricing requests yet.");
    \u0275\u0275elementEnd();
  }
}
function PortalPricingRequestsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function PortalPricingRequestsComponent_Conditional_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275listener("click", function PortalPricingRequestsComponent_Conditional_17_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 16)(3, "h2", 17);
    \u0275\u0275text(4, "New pricing request");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 18);
    \u0275\u0275listener("click", function PortalPricingRequestsComponent_Conditional_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 19)(8, "div", 20)(9, "label", 21);
    \u0275\u0275text(10, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function PortalPricingRequestsComponent_Conditional_17_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.title, $event) || (ctx_r1.form.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 20)(13, "label", 23);
    \u0275\u0275text(14, "Parts / quantities");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "textarea", 24);
    \u0275\u0275twoWayListener("ngModelChange", function PortalPricingRequestsComponent_Conditional_17_Template_textarea_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.parts, $event) || (ctx_r1.form.parts = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 20)(17, "label", 25);
    \u0275\u0275text(18, "Needed by");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function PortalPricingRequestsComponent_Conditional_17_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.neededBy, $event) || (ctx_r1.form.neededBy = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 20)(21, "label", 27);
    \u0275\u0275text(22, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "textarea", 28);
    \u0275\u0275twoWayListener("ngModelChange", function PortalPricingRequestsComponent_Conditional_17_Template_textarea_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.notes, $event) || (ctx_r1.form.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "p", 29);
    \u0275\u0275text(25, "This request becomes an RFQ for the sales team. No margin or internal pricing logic is exposed.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 30)(27, "button", 31);
    \u0275\u0275listener("click", function PortalPricingRequestsComponent_Conditional_17_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(28, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 4);
    \u0275\u0275listener("click", function PortalPricingRequestsComponent_Conditional_17_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275text(30, "Submit request");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.parts);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.neededBy);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.notes);
  }
}
var PortalPricingRequestsComponent = class _PortalPricingRequestsComponent {
  constructor(seed, auth) {
    this.seed = seed;
    this.auth = auth;
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.requests = computed(() => this.seed.portalRequests().filter((r) => r.kind === "pricing"));
    this.modalOpen = signal(this.route.snapshot.queryParamMap.get("modal") === "new");
    this.form = { title: "", parts: "", neededBy: "", notes: "" };
  }
  statusBadge(status) {
    switch (status) {
      case "submitted":
        return "badge-info";
      case "in-review":
        return "badge-warning";
      case "quoted":
        return "badge-success";
      case "accepted":
        return "badge-success";
      default:
        return "badge-neutral";
    }
  }
  openModal() {
    this.router.navigate([], { queryParams: { modal: "new" }, queryParamsHandling: "merge" });
    this.modalOpen.set(true);
  }
  closeModal() {
    this.router.navigate([], { queryParams: { modal: null }, queryParamsHandling: "merge" });
    this.modalOpen.set(false);
  }
  submit() {
    this.form = { title: "", parts: "", neededBy: "", notes: "" };
    this.closeModal();
  }
  static {
    this.\u0275fac = function PortalPricingRequestsComponent_Factory(t) {
      return new (t || _PortalPricingRequestsComponent)(\u0275\u0275directiveInject(SeedService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortalPricingRequestsComponent, selectors: [["app-portal-pricing-requests"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 2, consts: [[1, "page"], [1, "page-header", "header-row"], [1, "page-title"], [1, "page-sub"], [1, "btn", "btn-primary", 3, "click"], [1, "alert", "alert-info", "banner"], [1, "card", "card-pad"], [1, "table-wrap"], ["routerLink", "/portal", 1, "btn", "btn-ghost", "btn-sm", "back"], [1, "modal-backdrop"], [1, "table"], [1, "badge"], [1, "mono"], [1, "muted"], [1, "modal-backdrop", 3, "click"], [1, "modal", "card", 3, "click"], [1, "modal-head"], [1, "modal-title"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "modal-body"], [1, "field"], ["for", "pr-title"], ["id", "pr-title", "type", "text", "placeholder", "e.g. Budgetary \u2014 6x XT6 800A", 3, "ngModelChange", "ngModel"], ["for", "pr-parts"], ["id", "pr-parts", "rows", "3", "placeholder", "Part number, qty per line", 3, "ngModelChange", "ngModel"], ["for", "pr-needed"], ["id", "pr-needed", "type", "date", 3, "ngModelChange", "ngModel"], ["for", "pr-notes"], ["id", "pr-notes", "rows", "2", "placeholder", "Any additional context", 3, "ngModelChange", "ngModel"], [1, "muted", "note"], [1, "modal-foot"], [1, "btn", "btn-ghost", 3, "click"]], template: function PortalPricingRequestsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Pricing Requests");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Request budgetary or firm pricing from the Nexus Power sales team. QES account only.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function PortalPricingRequestsComponent_Template_button_click_7_listener() {
          return ctx.openModal();
        });
        \u0275\u0275text(8, "New pricing request");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "span");
        \u0275\u0275text(11, "Submitting a pricing request opens an RFQ in the Nexus Power sales quote pipeline. No pricing, margin, or internal cost logic is shown here \u2014 you receive a quote back when it is ready.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 6);
        \u0275\u0275template(13, PortalPricingRequestsComponent_Conditional_13_Template, 15, 0, "div", 7)(14, PortalPricingRequestsComponent_Conditional_14_Template, 2, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "a", 8);
        \u0275\u0275text(16, "\u2190 Back to portal home");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(17, PortalPricingRequestsComponent_Conditional_17_Template, 31, 4, "div", 9);
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275conditional(13, ctx.requests().length ? 13 : 14);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(17, ctx.modalOpen() ? 17 : -1);
      }
    }, dependencies: [CommonModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--sp-4);\n  flex-wrap: wrap;\n}\n.banner[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-5);\n}\n.back[_ngcontent-%COMP%] {\n  margin-top: var(--sp-5);\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(11, 28, 44, 0.5);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: var(--sp-6) var(--sp-4);\n  overflow-y: auto;\n  z-index: 50;\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n  background: var(--color-surface);\n}\n.modal-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--sp-4) var(--sp-5);\n  border-bottom: 1px solid var(--color-border);\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: var(--sp-5);\n}\n.modal-foot[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--sp-3);\n  padding: var(--sp-4) var(--sp-5);\n  border-top: 1px solid var(--color-border);\n}\n.field[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-4);\n}\n.note[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  font-style: italic;\n  margin-top: var(--sp-3);\n}\n/*# sourceMappingURL=portal-pricing-requests.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortalPricingRequestsComponent, { className: "PortalPricingRequestsComponent", filePath: "src/app/features/portal/portal-pricing-requests/portal-pricing-requests.component.ts", lineNumber: 16 });
})();
export {
  PortalPricingRequestsComponent
};
//# sourceMappingURL=portal-pricing-requests.component-GGDCQPZO.js.map
