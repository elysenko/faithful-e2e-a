import {
  SeedService
} from "./chunk-E63MY2RY.js";
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
  ɵɵclassMap,
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-A62IECG2.js";

// src/app/features/documents/documents.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.field;
function DocumentsComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function DocumentsComponent_For_30_Template_button_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setTab(t_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeTab() === t_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2);
  }
}
function DocumentsComponent_Conditional_31_For_17_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function DocumentsComponent_Conditional_31_For_17_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const d_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.review(d_r5.id));
    });
    \u0275\u0275text(1, "Review");
    \u0275\u0275elementEnd();
  }
}
function DocumentsComponent_Conditional_31_For_17_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function DocumentsComponent_Conditional_31_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 17);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 15);
    \u0275\u0275template(12, DocumentsComponent_Conditional_31_For_17_Conditional_12_Template, 2, 0, "button", 18)(13, DocumentsComponent_Conditional_31_For_17_Conditional_13_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r5.fileName);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.typeBadge(d_r5.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r5.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r5.account);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.statusBadge(d_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r5.status);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(12, d_r5.status === "review" ? 12 : 13);
  }
}
function DocumentsComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 13)(2, "table", 14)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "File");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 15);
    \u0275\u0275text(14, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, DocumentsComponent_Conditional_31_For_17_Template, 14, 9, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r2.seed.documents());
  }
}
function DocumentsComponent_Conditional_32_Conditional_0_Conditional_9_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275element(4, "input", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "div", 28)(7, "div", 29);
    \u0275\u0275element(8, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 17);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const f_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r7.field);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", f_r7.value);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r2.confidencePct(f_r7.confidence), "%");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.confidenceBadge(f_r7.confidence));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r2.confidencePct(f_r7.confidence), "%");
  }
}
function DocumentsComponent_Conditional_32_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "table", 14)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Field");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Extracted value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Confidence");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275repeaterCreate(11, DocumentsComponent_Conditional_32_Conditional_0_Conditional_9_For_12_Template, 11, 7, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 24)(14, "span");
    \u0275\u0275text(15, "On confirm, this creates or updates the matching order and feeds the commission engine automatically.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 25)(17, "button", 19);
    \u0275\u0275listener("click", function DocumentsComponent_Conditional_32_Conditional_0_Conditional_9_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.noop());
    });
    \u0275\u0275text(18, "Confirm & create order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 26);
    \u0275\u0275text(20, "View orders");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r8 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275repeater(d_r8.extracted);
  }
}
function DocumentsComponent_Conditional_32_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1, "No fields extracted yet for this document.");
    \u0275\u0275elementEnd();
  }
}
function DocumentsComponent_Conditional_32_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "div")(3, "h2", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(9, DocumentsComponent_Conditional_32_Conditional_0_Conditional_9_Template, 21, 0)(10, DocumentsComponent_Conditional_32_Conditional_0_Conditional_10_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r8 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(d_r8.fileName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", d_r8.type, " \xB7 ", d_r8.account, " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.statusBadge(d_r8.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r8.status);
    \u0275\u0275advance();
    \u0275\u0275conditional(9, d_r8.extracted.length > 0 ? 9 : 10);
  }
}
function DocumentsComponent_Conditional_32_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "p", 20);
    \u0275\u0275text(2, 'No documents are ready for review. Pick a "Review" item from the queue.');
    \u0275\u0275elementEnd()();
  }
}
function DocumentsComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DocumentsComponent_Conditional_32_Conditional_0_Template, 11, 7, "div", 21)(1, DocumentsComponent_Conditional_32_Conditional_1_Template, 3, 0);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, (tmp_1_0 = ctx_r2.selectedDoc()) ? 0 : 1, tmp_1_0);
  }
}
var DocumentsComponent = class _DocumentsComponent {
  statusBadge(status) {
    switch (status) {
      case "queued":
        return "badge-neutral";
      case "extracting":
        return "badge-info";
      case "review":
        return "badge-warning";
      case "confirmed":
        return "badge-success";
      default:
        return "badge-neutral";
    }
  }
  typeBadge(type) {
    switch (type) {
      case "PO":
        return "badge-info";
      case "Spec":
        return "badge-neutral";
      case "Drawing":
        return "badge-neutral";
      case "RMA":
        return "badge-warning";
      default:
        return "badge-neutral";
    }
  }
  confidencePct(conf) {
    return Math.round(conf * 100);
  }
  confidenceBadge(conf) {
    if (conf >= 0.9)
      return "badge-success";
    if (conf >= 0.8)
      return "badge-warning";
    return "badge-danger";
  }
  setTab(tab) {
    this.router.navigate([], { queryParams: { tab }, queryParamsHandling: "merge" });
  }
  review(id) {
    this.router.navigate([], { queryParams: { tab: "review", panel: id }, queryParamsHandling: "merge" });
  }
  noop() {
  }
  constructor(seed, route, router) {
    this.seed = seed;
    this.route = route;
    this.router = router;
    this.tabs = ["queue", "review"];
    this.activeTab = signal("queue");
    this.selectedId = signal(null);
    this.queuedCount = computed(() => this.seed.documents().filter((d) => d.status === "queued").length);
    this.reviewCount = computed(() => this.seed.documents().filter((d) => d.status === "review").length);
    this.confirmedCount = computed(() => this.seed.documents().filter((d) => d.status === "confirmed").length);
    this.selectedDoc = computed(() => {
      const id = this.selectedId();
      if (id)
        return this.seed.documents().find((d) => d.id === id);
      return this.seed.documents().find((d) => d.status === "review");
    });
    this.route.queryParamMap.subscribe((q) => {
      const t = q.get("tab");
      this.activeTab.set(t && this.tabs.includes(t) ? t : "queue");
      this.selectedId.set(q.get("panel"));
    });
  }
  static {
    this.\u0275fac = function DocumentsComponent_Factory(t) {
      return new (t || _DocumentsComponent)(\u0275\u0275directiveInject(SeedService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentsComponent, selectors: [["app-documents"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 5, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "grid", "stat-grid"], [1, "card", "card-pad", "stat"], [1, "stat-label"], [1, "stat-value"], [1, "muted", "stat-note"], [1, "tabs"], [1, "tab", 3, "active"], [1, "card"], [1, "tab", 3, "click"], [1, "table-wrap"], [1, "table"], [1, "right"], [1, "mono"], [1, "badge"], [1, "btn", "btn-primary", "btn-sm"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "muted"], [1, "card", "card-pad"], [1, "review-head"], [1, "review-title"], [1, "alert", "alert-info", "confirm-note"], [1, "row", "review-actions"], ["routerLink", "/orders", 1, "btn", "btn-sm"], ["type", "text", 3, "value"], [1, "conf-cell"], [1, "bar-track"], [1, "bar-fill"]], template: function DocumentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Document intake & OCR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Nexus Power CRM \xB7 POs, specs, drawings and RMAs captured and extracted automatically");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6);
        \u0275\u0275text(9, "Queued");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 8);
        \u0275\u0275text(13, "Awaiting extraction");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 5)(15, "div", 6);
        \u0275\u0275text(16, "In review");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 7);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 8);
        \u0275\u0275text(20, "Fields need confirmation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 5)(22, "div", 6);
        \u0275\u0275text(23, "Confirmed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 7);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 8);
        \u0275\u0275text(27, "Fed to orders & commission");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "div", 9);
        \u0275\u0275repeaterCreate(29, DocumentsComponent_For_30_Template, 2, 3, "button", 10, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275template(31, DocumentsComponent_Conditional_31_Template, 18, 0, "div", 11)(32, DocumentsComponent_Conditional_32_Template, 2, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.queuedCount());
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.reviewCount());
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.confirmedCount());
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.tabs);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(31, ctx.activeTab() === "queue" ? 31 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(32, ctx.activeTab() === "review" ? 32 : -1);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n  font-weight: 600;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  font-weight: 700;\n  color: var(--color-brand-700);\n}\n.stat-note[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n}\n.tabs[_ngcontent-%COMP%] {\n  margin-top: var(--sp-5);\n}\n.review-head[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-4);\n}\n.review-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  margin-bottom: 4px;\n}\n.conf-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n  min-width: 180px;\n}\n.bar-track[_ngcontent-%COMP%] {\n  height: 10px;\n  flex: 1;\n  background: var(--color-surface-2);\n  border-radius: 999px;\n  overflow: hidden;\n  border: 1px solid var(--color-border);\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--color-brand-600);\n  border-radius: 999px;\n}\n.confirm-note[_ngcontent-%COMP%] {\n  margin: var(--sp-4) 0;\n}\n.review-actions[_ngcontent-%COMP%] {\n  margin-top: var(--sp-2);\n}\n/*# sourceMappingURL=documents.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentsComponent, { className: "DocumentsComponent", filePath: "src/app/features/documents/documents.component.ts", lineNumber: 14 });
})();
export {
  DocumentsComponent
};
//# sourceMappingURL=documents.component-DDHQW7RD.js.map
