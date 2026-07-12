import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-ZBJUN66K.js";
import {
  MoneyPipe
} from "./chunk-GJW2SICY.js";
import {
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RUEYC2SA.js";

// src/app/features/checkout/checkout.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CheckoutComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Name is required");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "A full address is required");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function CheckoutComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r2.qty, " \xD7 ", item_r2.product.name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, item_r2.product.priceCents * item_r2.qty));
  }
}
var CheckoutComponent = class _CheckoutComponent {
  constructor(fb, router) {
    this.fb = fb;
    this.router = router;
    this.placing = false;
    this.errorMessage = "";
    this.items = signal([
      {
        id: "ci1",
        productId: "p1",
        qty: 1,
        product: {
          id: "p1",
          name: "Aurora Wireless Headphones",
          description: "",
          priceCents: 14999,
          imageUrl: "https://picsum.photos/seed/headphones/80/80",
          stockQty: 12
        }
      },
      {
        id: "ci2",
        productId: "p2",
        qty: 2,
        product: {
          id: "p2",
          name: "Nimbus Mechanical Keyboard",
          description: "",
          priceCents: 9900,
          imageUrl: "https://picsum.photos/seed/keyboard/80/80",
          stockQty: 34
        }
      }
    ]);
    this.total = computed(() => this.items().reduce((sum, i) => sum + i.product.priceCents * i.qty, 0));
    this.form = this.fb.group({
      shipName: ["", [Validators.required, Validators.minLength(2)]],
      shipAddress: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  placeOrder() {
    if (this.form.invalid)
      return;
    this.placing = true;
    this.errorMessage = "";
    this.router.navigate(["/orders"], { queryParams: { placed: "1" } });
  }
  static {
    this.\u0275fac = function CheckoutComponent_Factory(t) {
      return new (t || _CheckoutComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 9, consts: [["data-testid", "checkout", 1, "page"], ["routerLink", "/cart", 1, "back-link"], [1, "page-header", "mt-2"], [1, "checkout-layout"], [1, "card", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "shipName"], ["id", "shipName", "type", "text", "formControlName", "shipName", "autocomplete", "name", "data-testid", "checkout-name", "placeholder", "Jane Doe"], [1, "error"], ["for", "shipAddress"], ["id", "shipAddress", "formControlName", "shipAddress", "data-testid", "checkout-address", "placeholder", "123 Market St, Springfield"], ["data-testid", "checkout-error", 1, "alert", "alert-error"], ["type", "submit", "data-testid", "checkout-place-order", 1, "btn", "btn-block", 3, "disabled"], [1, "card", "order-summary"], [1, "stack"], [1, "row", "between", "summary-line"], [1, "row", "between", "total-line", "mt-4"], [1, "price"]], template: function CheckoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to cart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "h1");
        \u0275\u0275text(5, "Checkout");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "form", 4);
        \u0275\u0275listener("ngSubmit", function CheckoutComponent_Template_form_ngSubmit_7_listener() {
          return ctx.placeOrder();
        });
        \u0275\u0275elementStart(8, "h3");
        \u0275\u0275text(9, "Shipping details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 5)(11, "label", 6);
        \u0275\u0275text(12, "Full name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "input", 7);
        \u0275\u0275template(14, CheckoutComponent_Conditional_14_Template, 2, 0, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 5)(16, "label", 9);
        \u0275\u0275text(17, "Shipping address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "textarea", 10);
        \u0275\u0275template(19, CheckoutComponent_Conditional_19_Template, 2, 0, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, CheckoutComponent_Conditional_20_Template, 2, 1, "div", 11);
        \u0275\u0275elementStart(21, "button", 12);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "aside", 13)(24, "h3");
        \u0275\u0275text(25, "Order summary");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 14);
        \u0275\u0275repeaterCreate(27, CheckoutComponent_For_28_Template, 6, 5, "div", 15, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 16)(30, "strong");
        \u0275\u0275text(31, "Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "strong", 17);
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "money");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        \u0275\u0275advance(7);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(14, ((tmp_1_0 = ctx.form.get("shipName")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.form.get("shipName")) == null ? null : tmp_1_0.touched) ? 14 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(19, ((tmp_2_0 = ctx.form.get("shipAddress")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.form.get("shipAddress")) == null ? null : tmp_2_0.touched) ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(20, ctx.errorMessage ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.form.invalid || ctx.placing);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.placing ? "Placing order\u2026" : "Place order", " ");
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.items());
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 7, ctx.total()));
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, MoneyPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src/app/features/checkout/checkout.component.ts", lineNumber: 14 });
})();
export {
  CheckoutComponent
};
//# sourceMappingURL=checkout.component-WGBSHZPR.js.map
