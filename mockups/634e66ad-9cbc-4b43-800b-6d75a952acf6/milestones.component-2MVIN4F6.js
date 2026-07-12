import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-7F3Y7YLT.js";
import {
  AuthService
} from "./chunk-CVPORU2Z.js";
import {
  SiteviewService
} from "./chunk-S3M52NQH.js";
import {
  ActivatedRoute
} from "./chunk-VMQX45X4.js";
import {
  CommonModule,
  NgClass,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VZ6O3Y2G.js";

// src/app/features/project/milestones/milestones.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function MilestonesComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function MilestonesComponent_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAdd = !ctx_r1.showAdd);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.showAdd ? "Cancel" : "+ Add milestone");
  }
}
function MilestonesComponent_Conditional_7_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", s_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(s_r4));
  }
}
function MilestonesComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 6)(2, "div", 7)(3, "label", 8);
    \u0275\u0275text(4, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function MilestonesComponent_Conditional_7_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.draft.name, $event) || (ctx_r1.draft.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 7)(7, "label", 10);
    \u0275\u0275text(8, "Due date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function MilestonesComponent_Conditional_7_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.draft.dueOn, $event) || (ctx_r1.draft.dueOn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 7)(11, "label", 12);
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function MilestonesComponent_Conditional_7_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.draft.status, $event) || (ctx_r1.draft.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(14, MilestonesComponent_Conditional_7_For_15_Template, 2, 2, "option", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "button", 15);
    \u0275\u0275listener("click", function MilestonesComponent_Conditional_7_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.add());
    });
    \u0275\u0275text(17, "Save milestone");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.draft.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.draft.dueOn);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.draft.status);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.statuses);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.draft.name.trim() || !ctx_r1.draft.dueOn);
  }
}
function MilestonesComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "No milestones defined yet.");
    \u0275\u0275elementEnd();
  }
}
function MilestonesComponent_Conditional_9_For_2_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("value", s_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(s_r7));
  }
}
function MilestonesComponent_Conditional_9_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 21);
    \u0275\u0275listener("change", function MilestonesComponent_Conditional_9_For_2_Conditional_9_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const m_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeStatus(m_r6.id, $event.target.value));
    });
    \u0275\u0275repeaterCreate(1, MilestonesComponent_Conditional_9_For_2_Conditional_9_For_2_Template, 2, 2, "option", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", m_r6.status);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.statuses);
  }
}
function MilestonesComponent_Conditional_9_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.statusBadge(m_r6.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(m_r6.status));
  }
}
function MilestonesComponent_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 17)(1, "div", 18);
    \u0275\u0275element(2, "span", 19);
    \u0275\u0275elementStart(3, "div")(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 1);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 20);
    \u0275\u0275template(9, MilestonesComponent_Conditional_9_For_2_Conditional_9_Template, 3, 1, "select", 14)(10, MilestonesComponent_Conditional_9_For_2_Conditional_10_Template, 2, 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.statusBadge(m_r6.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Due ", m_r6.dueOn, "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(9, ctx_r1.auth.isPlanner() ? 9 : 10);
  }
}
function MilestonesComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 16);
    \u0275\u0275repeaterCreate(1, MilestonesComponent_Conditional_9_For_2_Template, 11, 4, "li", 17, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.milestones());
  }
}
var MilestonesComponent = class _MilestonesComponent {
  constructor(auth, sv, route) {
    this.auth = auth;
    this.sv = sv;
    this.route = route;
    this.projectId = this.route.parent?.snapshot.paramMap.get("id") ?? "";
    this.refresh = signal(0);
    this.statuses = ["pending", "in_progress", "at_risk", "done"];
    this.milestones = computed(() => {
      this.refresh();
      return this.sv.milestonesForProject(this.projectId);
    });
    this.showAdd = false;
    this.draft = { name: "", dueOn: "", status: "pending" };
  }
  statusLabel(s) {
    return { pending: "Pending", in_progress: "In progress", at_risk: "At risk", done: "Done" }[s];
  }
  statusBadge(s) {
    return {
      pending: "badge-muted",
      in_progress: "badge-info",
      at_risk: "badge-danger",
      done: "badge-success"
    }[s];
  }
  changeStatus(id, status) {
    this.sv.setMilestoneStatus(id, status);
    this.refresh.update((n) => n + 1);
  }
  add() {
    if (!this.draft.name.trim() || !this.draft.dueOn)
      return;
    this.sv.createMilestone({
      projectId: this.projectId,
      name: this.draft.name.trim(),
      dueOn: this.draft.dueOn,
      status: this.draft.status
    });
    this.draft = { name: "", dueOn: "", status: "pending" };
    this.showAdd = false;
    this.refresh.update((n) => n + 1);
  }
  static {
    this.\u0275fac = function MilestonesComponent_Factory(t) {
      return new (t || _MilestonesComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SiteviewService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MilestonesComponent, selectors: [["app-milestones"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 3, consts: [[1, "ms-head"], [1, "muted"], [1, "btn", "btn-accent"], [1, "add-form", "card"], [1, "state", "card"], [1, "btn", "btn-accent", 3, "click"], [1, "add-grid"], [1, "field"], ["for", "ms-name"], ["id", "ms-name", "type", "text", "placeholder", "e.g. Topping out", 3, "ngModelChange", "ngModel"], ["for", "ms-due"], ["id", "ms-due", "type", "date", 3, "ngModelChange", "ngModel"], ["for", "ms-status"], ["id", "ms-status", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "ms-list"], [1, "card"], [1, "ms-main"], [1, "ms-marker", 3, "ngClass"], [1, "ms-status"], [3, "change", "value"], [1, "badge", 3, "ngClass"]], template: function MilestonesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h2");
        \u0275\u0275text(3, "Milestones");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 1);
        \u0275\u0275text(5, "Key delivery dates and their status");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, MilestonesComponent_Conditional_6_Template, 2, 1, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, MilestonesComponent_Conditional_7_Template, 18, 4, "div", 3)(8, MilestonesComponent_Conditional_8_Template, 2, 0, "div", 4)(9, MilestonesComponent_Conditional_9_Template, 3, 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.auth.isPlanner() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(7, ctx.showAdd && ctx.auth.isPlanner() ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(8, ctx.milestones().length === 0 ? 8 : 9);
      }
    }, dependencies: [CommonModule, NgClass, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.ms-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-3);\n  margin-bottom: var(--space-4);\n}\n.ms-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n}\n.add-form[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n  margin-bottom: var(--space-4);\n}\n.add-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr;\n  gap: var(--space-3);\n  margin-bottom: var(--space-3);\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-1);\n}\n.ms-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.ms-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-3);\n  padding: var(--space-4);\n}\n.ms-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.ms-marker[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex: none;\n}\n.ms-marker.badge-muted[_ngcontent-%COMP%] {\n  background: var(--color-text-muted);\n}\n.ms-marker.badge-info[_ngcontent-%COMP%] {\n  background: var(--color-info);\n}\n.ms-marker.badge-danger[_ngcontent-%COMP%] {\n  background: var(--color-danger);\n}\n.ms-marker.badge-success[_ngcontent-%COMP%] {\n  background: var(--color-success);\n}\n.ms-main[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.ms-status[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  min-width: 130px;\n}\n.state[_ngcontent-%COMP%] {\n  padding: var(--space-6);\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .add-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .ms-status[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    min-width: 110px;\n  }\n}\n/*# sourceMappingURL=milestones.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MilestonesComponent, { className: "MilestonesComponent", filePath: "src/app/features/project/milestones/milestones.component.ts", lineNumber: 16 });
})();
export {
  MilestonesComponent
};
//# sourceMappingURL=milestones.component-2MVIN4F6.js.map
