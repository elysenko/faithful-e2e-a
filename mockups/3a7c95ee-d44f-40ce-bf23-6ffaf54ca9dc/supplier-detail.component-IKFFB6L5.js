import {
  AuthService
} from "./chunk-Q2IOEOSU.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-CBFZCQFA.js";
import {
  CommonModule,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-I3S7QF5E.js";

// src/app/pages/supplier-detail/supplier-detail.component.ts
var _c0 = (a0) => ({ edit: a0 });
function SupplierDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading\u2026");
    \u0275\u0275elementEnd()();
  }
}
function SupplierDetailComponent_Conditional_5_Template(rf, ctx) {
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
function SupplierDetailComponent_Conditional_6_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(1, _c0, s_r2.id));
  }
}
function SupplierDetailComponent_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h1");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 7);
    \u0275\u0275template(4, SupplierDetailComponent_Conditional_6_Conditional_0_Conditional_4_Template, 2, 3, "a", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "div", 11)(8, "span", 12);
    \u0275\u0275text(9, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 13);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 11)(13, "span", 12);
    \u0275\u0275text(14, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 13);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 11)(18, "span", 12);
    \u0275\u0275text(19, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 13);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const s_r2 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(4, ctx_r0.canEdit() ? 4 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(s_r2.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(s_r2.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(s_r2.phone || "\u2014");
  }
}
function SupplierDetailComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 6);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Supplier not found.");
    \u0275\u0275elementEnd()();
  }
}
function SupplierDetailComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SupplierDetailComponent_Conditional_6_Conditional_0_Template, 22, 5)(1, SupplierDetailComponent_Conditional_6_Conditional_1_Template, 5, 0);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, (tmp_1_0 = ctx_r0.supplier()) ? 0 : 1, tmp_1_0);
  }
}
var SupplierDetailComponent = class _SupplierDetailComponent {
  constructor(auth, route) {
    this.auth = auth;
    this.route = route;
    this.loading = signal(false);
    this.error = signal(null);
    this.supplier = signal({
      id: "s1",
      name: "Globex Supply Co",
      email: "sales@globex.example",
      phone: "+1 312 555 0110"
    });
    this.canEdit = computed(() => this.auth.isPurchasing());
    this.id = "";
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id") ?? "";
  }
  static {
    this.\u0275fac = function SupplierDetailComponent_Factory(t) {
      return new (t || _SupplierDetailComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SupplierDetailComponent, selectors: [["app-supplier-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 1, consts: [[1, "page"], [1, "page-head"], ["routerLink", "/suppliers", 1, "btn", "btn-ghost", "btn-sm"], [1, "state"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], [1, "spacer"], ["routerLink", "/suppliers", 1, "btn", "btn-outline", 3, "queryParams"], [1, "card", "card-pad"], [1, "dl"], [1, "dl-row"], [1, "dl-key"], [1, "dl-val"]], template: function SupplierDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275text(3, "\u2190 Suppliers");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(4, SupplierDetailComponent_Conditional_4_Template, 4, 0, "div", 3)(5, SupplierDetailComponent_Conditional_5_Template, 5, 1)(6, SupplierDetailComponent_Conditional_6_Template, 2, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(4, ctx.loading() ? 4 : ctx.error() ? 5 : 6);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n/*# sourceMappingURL=supplier-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SupplierDetailComponent, { className: "SupplierDetailComponent", filePath: "src/app/pages/supplier-detail/supplier-detail.component.ts", lineNumber: 15 });
})();
export {
  SupplierDetailComponent
};
//# sourceMappingURL=supplier-detail.component-IKFFB6L5.js.map
