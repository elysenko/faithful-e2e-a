import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  ɵNgNoValidate
} from "./chunk-MVQ5GWD2.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-OCSIP44N.js";
import {
  CommonModule,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YT626SJK.js";

// src/app/pages/wizard/dependents/dependents.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DependentsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "No dependents added yet.");
    \u0275\u0275elementEnd();
  }
}
function DependentsComponent_Conditional_6_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xB7 ");
    \u0275\u0275elementStart(1, "span", 19);
    \u0275\u0275text(2, "CTC eligible");
    \u0275\u0275elementEnd();
  }
}
function DependentsComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 18);
    \u0275\u0275text(5);
    \u0275\u0275template(6, DependentsComponent_Conditional_6_For_2_Conditional_6_Template, 3, 0, "span", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 20);
    \u0275\u0275listener("click", function DependentsComponent_Conditional_6_For_2_Template_button_click_7_listener() {
      const d_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.remove(d_r2.id));
    });
    \u0275\u0275text(8, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Age ", d_r2.age, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(6, d_r2.age < 17 ? 6 : -1);
  }
}
function DependentsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275repeaterCreate(1, DependentsComponent_Conditional_6_For_2_Template, 9, 3, "div", 15, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.dependents());
  }
}
var DependentsComponent = class _DependentsComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.returnId = "";
    this.dependents = signal([
      { id: "d1", returnId: "r-2024", name: "Riley Filer", age: 9 }
    ]);
    this.newName = "";
    this.newAge = null;
    this.returnId = this.route.parent?.snapshot.paramMap.get("id") ?? "";
  }
  add() {
    if (!this.newName || this.newAge === null)
      return;
    this.dependents.update((list) => [
      ...list,
      {
        id: "d" + (list.length + 1) + "-" + this.newAge,
        returnId: this.returnId,
        name: this.newName,
        age: Number(this.newAge)
      }
    ]);
    this.newName = "";
    this.newAge = null;
  }
  remove(id) {
    this.dependents.update((list) => list.filter((d) => d.id !== id));
  }
  back() {
    this.router.navigate(["/returns", this.returnId, "wizard", "filing-status"]);
  }
  next() {
    this.router.navigate(["/returns", this.returnId, "wizard", "income"]);
  }
  static {
    this.\u0275fac = function DependentsComponent_Factory(t) {
      return new (t || _DependentsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DependentsComponent, selectors: [["app-dependents"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 3, consts: [[1, "wiz-step"], [1, "lead"], [1, "muted"], [1, "add-form", 3, "ngSubmit"], [1, "add-grid"], [1, "field"], ["for", "dep-name"], ["id", "dep-name", "name", "depName", "type", "text", "placeholder", "Dependent name", 3, "ngModelChange", "ngModel"], ["for", "dep-age"], ["id", "dep-age", "name", "depAge", "type", "number", "min", "0", "placeholder", "Age", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-outline"], [1, "wiz-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "item-list"], [1, "item-row"], [1, "item-main"], [1, "item-title"], [1, "item-sub"], [1, "ctc"], ["type", "button", "aria-label", "Remove dependent", 1, "item-remove", 3, "click"]], template: function DependentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "h2");
        \u0275\u0275text(2, "Any dependents?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 1);
        \u0275\u0275text(4, "Dependents under 17 qualify for the $2,000 Child Tax Credit.");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, DependentsComponent_Conditional_5_Template, 2, 0, "p", 2)(6, DependentsComponent_Conditional_6_Template, 3, 0);
        \u0275\u0275elementStart(7, "form", 3);
        \u0275\u0275listener("ngSubmit", function DependentsComponent_Template_form_ngSubmit_7_listener() {
          return ctx.add();
        });
        \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "label", 6);
        \u0275\u0275text(11, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function DependentsComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newName, $event) || (ctx.newName = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 5)(14, "label", 8);
        \u0275\u0275text(15, "Age");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function DependentsComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newAge, $event) || (ctx.newAge = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "button", 10);
        \u0275\u0275text(18, "+ Add dependent");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 11)(20, "button", 12);
        \u0275\u0275listener("click", function DependentsComponent_Template_button_click_20_listener() {
          return ctx.back();
        });
        \u0275\u0275text(21, "Back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "button", 13);
        \u0275\u0275listener("click", function DependentsComponent_Template_button_click_22_listener() {
          return ctx.next();
        });
        \u0275\u0275text(23, "Continue");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275conditional(5, ctx.dependents().length === 0 ? 5 : 6);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.newName);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.newAge);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, NgModel, NgForm], styles: ["\n\n.ctc[_ngcontent-%COMP%] {\n  color: var(--color-success);\n  font-weight: 700;\n}\n/*# sourceMappingURL=dependents.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DependentsComponent, { className: "DependentsComponent", filePath: "src/app/pages/wizard/dependents/dependents.component.ts", lineNumber: 15 });
})();
export {
  DependentsComponent
};
//# sourceMappingURL=dependents.component-DJNY4LYI.js.map
