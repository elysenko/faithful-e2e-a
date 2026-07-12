import {
  AuthService
} from "./chunk-HEI6KB7T.js";
import {
  SeedService
} from "./chunk-E63MY2RY.js";
import {
  CommonModule,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-A62IECG2.js";

// src/app/features/portal/portal-documents/portal-documents.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.version;
function PortalDocumentsComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 12);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 7)(11, "button", 13);
    \u0275\u0275listener("click", function PortalDocumentsComponent_For_23_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275text(12, "Download");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.typeBadge(d_r3.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r3.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r3.version);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r3.date);
  }
}
function PortalDocumentsComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 7)(8, "button", 15);
    \u0275\u0275listener("click", function PortalDocumentsComponent_For_41_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275text(9, "Download");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const v_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r5.version);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r5.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r5.note);
  }
}
var PortalDocumentsComponent = class _PortalDocumentsComponent {
  constructor(seed, auth) {
    this.seed = seed;
    this.auth = auth;
    this.docs = [
      { id: "d-1", name: "Volition Canyon \u2014 Submittal Package", type: "Submittal", version: "Rev 3", date: "2026-06-28" },
      { id: "d-2", name: "Data Hall B \u2014 Single-Line Drawing", type: "Drawing", version: "Rev 2", date: "2026-06-15" },
      { id: "d-3", name: "Emax 2 E6.2 \u2014 O&M Manual", type: "O&M Manual", version: "Rev 1", date: "2026-05-30" },
      { id: "d-4", name: "Budgetary Quote \u2014 4x E6.2 4000A", type: "Quote", version: "Rev 1", date: "2026-07-02" },
      { id: "d-5", name: "SafeGear MV \u2014 Layout Drawing", type: "Drawing", version: "Rev 4", date: "2026-07-05" }
    ];
    this.historyDoc = this.docs[0];
    this.history = [
      { version: "Rev 3", date: "2026-06-28", note: "Updated SafeGear feeder sections per RFI-014." },
      { version: "Rev 2", date: "2026-06-05", note: "Incorporated XT6 42X spacing correction." },
      { version: "Rev 1", date: "2026-05-18", note: "Initial submittal for review." }
    ];
  }
  typeBadge(type) {
    switch (type) {
      case "Submittal":
        return "badge-info";
      case "Drawing":
        return "badge-neutral";
      case "O&M Manual":
        return "badge-success";
      case "Quote":
        return "badge-warning";
      default:
        return "badge-neutral";
    }
  }
  download() {
  }
  static {
    this.\u0275fac = function PortalDocumentsComponent_Factory(t) {
      return new (t || _PortalDocumentsComponent)(\u0275\u0275directiveInject(SeedService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortalDocumentsComponent, selectors: [["app-portal-documents"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 44, vars: 1, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "card", "card-pad"], [1, "table-wrap"], [1, "table"], [1, "right"], [1, "card", "card-pad", "history-card"], [1, "section-title"], ["routerLink", "/portal", 1, "btn", "btn-ghost", "btn-sm", "back"], [1, "badge"], [1, "mono"], [1, "btn", "btn-sm", 3, "click"], [1, "muted"], [1, "btn", "btn-sm", "btn-ghost", 3, "click"]], template: function PortalDocumentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Document Library");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Submittals, drawings, O&M manuals, and quotes for QES. Documents are scoped to your account only.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "table", 6)(9, "thead")(10, "tr")(11, "th");
        \u0275\u0275text(12, "Document");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "th");
        \u0275\u0275text(14, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "th");
        \u0275\u0275text(16, "Version");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "th");
        \u0275\u0275text(18, "Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "th", 7);
        \u0275\u0275text(20, "Action");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "tbody");
        \u0275\u0275repeaterCreate(22, PortalDocumentsComponent_For_23_Template, 13, 6, "tr", null, _forTrack0);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(24, "div", 8)(25, "h2", 9);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 5)(28, "table", 6)(29, "thead")(30, "tr")(31, "th");
        \u0275\u0275text(32, "Version");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "th");
        \u0275\u0275text(34, "Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "th");
        \u0275\u0275text(36, "Notes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "th", 7);
        \u0275\u0275text(38, "Action");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "tbody");
        \u0275\u0275repeaterCreate(40, PortalDocumentsComponent_For_41_Template, 10, 3, "tr", null, _forTrack1);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(42, "a", 10);
        \u0275\u0275text(43, "\u2190 Back to portal home");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(22);
        \u0275\u0275repeater(ctx.docs);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("Version history \u2014 ", ctx.historyDoc.name, "");
        \u0275\u0275advance(14);
        \u0275\u0275repeater(ctx.history);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.history-card[_ngcontent-%COMP%] {\n  margin-top: var(--sp-5);\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: var(--sp-4);\n}\n.back[_ngcontent-%COMP%] {\n  margin-top: var(--sp-5);\n}\n/*# sourceMappingURL=portal-documents.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortalDocumentsComponent, { className: "PortalDocumentsComponent", filePath: "src/app/features/portal/portal-documents/portal-documents.component.ts", lineNumber: 30 });
})();
export {
  PortalDocumentsComponent
};
//# sourceMappingURL=portal-documents.component-57434YFD.js.map
