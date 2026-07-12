import {
  Router
} from "./chunk-ZM34OTSI.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-C7DKJWEU.js";
import {
  CommonModule,
  DatePipe,
  __spreadProps,
  __spreadValues,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HP7M3I25.js";

// src/app/pages/workspaces-list/workspaces-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function WorkspacesListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading workspaces\u2026");
    \u0275\u0275elementEnd()();
  }
}
function WorkspacesListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 10);
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
function WorkspacesListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 10);
    \u0275\u0275text(2, "\u{1F5C2}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No workspaces yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 11);
    \u0275\u0275listener("click", function WorkspacesListComponent_Conditional_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.newWorkspace());
    });
    \u0275\u0275text(6, "Create your first workspace");
    \u0275\u0275elementEnd()();
  }
}
function WorkspacesListComponent_Conditional_14_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ws_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 edited ", \u0275\u0275pipeBind2(1, 1, ws_r4.updatedAt, "MMM d"), " ");
  }
}
function WorkspacesListComponent_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 14);
    \u0275\u0275listener("click", function WorkspacesListComponent_Conditional_14_For_2_Template_li_click_0_listener() {
      const ws_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.open(ws_r4));
    })("keydown.enter", function WorkspacesListComponent_Conditional_14_For_2_Template_li_keydown_enter_0_listener() {
      const ws_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.open(ws_r4));
    });
    \u0275\u0275elementStart(1, "div", 15)(2, "span", 16);
    \u0275\u0275text(3, "\u{1F5C2}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 18);
    \u0275\u0275text(7);
    \u0275\u0275template(8, WorkspacesListComponent_Conditional_14_For_2_Conditional_8_Template, 2, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 19)(10, "button", 20);
    \u0275\u0275listener("click", function WorkspacesListComponent_Conditional_14_For_2_Template_button_click_10_listener($event) {
      const ws_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.rename(ws_r4, $event));
    });
    \u0275\u0275text(11, "Rename");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 21);
    \u0275\u0275listener("click", function WorkspacesListComponent_Conditional_14_For_2_Template_button_click_12_listener($event) {
      const ws_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.remove(ws_r4, $event));
    });
    \u0275\u0275text(13, "Delete");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "span", 3);
    \u0275\u0275elementStart(15, "button", 22);
    \u0275\u0275listener("click", function WorkspacesListComponent_Conditional_14_For_2_Template_button_click_15_listener($event) {
      const ws_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.open(ws_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(16, "Open \u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const ws_r4 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ws_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", (tmp_12_0 = ws_r4.fileCount) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : 0, " file", ((tmp_12_0 = ws_r4.fileCount) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : 0) === 1 ? "" : "s", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(8, ws_r4.updatedAt ? 8 : -1);
  }
}
function WorkspacesListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 12);
    \u0275\u0275repeaterCreate(1, WorkspacesListComponent_Conditional_14_For_2_Template, 17, 4, "li", 13, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.workspaces());
  }
}
function WorkspacesListComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function WorkspacesListComponent_Conditional_15_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 24);
    \u0275\u0275listener("click", function WorkspacesListComponent_Conditional_15_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 25)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "span", 3);
    \u0275\u0275elementStart(6, "button", 26);
    \u0275\u0275listener("click", function WorkspacesListComponent_Conditional_15_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(7, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "form", 27);
    \u0275\u0275listener("ngSubmit", function WorkspacesListComponent_Conditional_15_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveModal());
    });
    \u0275\u0275elementStart(9, "div", 28)(10, "label", 29);
    \u0275\u0275text(11, "Workspace name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function WorkspacesListComponent_Conditional_15_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.draftName, $event) || (ctx_r0.draftName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 31)(14, "button", 32);
    \u0275\u0275listener("click", function WorkspacesListComponent_Conditional_15_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(15, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 33);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.editingId() ? "Rename workspace" : "New workspace");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.draftName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.editingId() ? "Save" : "Create", " ");
  }
}
var WorkspacesListComponent = class _WorkspacesListComponent {
  constructor(router) {
    this.router = router;
    this.loading = signal(false);
    this.error = signal(null);
    this.workspaces = signal([
      {
        id: "ws-1",
        ownerId: "u-dev",
        name: "Sample Project",
        fileCount: 4,
        updatedAt: "2026-07-11T14:22:00.000Z"
      },
      {
        id: "ws-2",
        ownerId: "u-dev",
        name: "landing-page",
        fileCount: 12,
        updatedAt: "2026-07-10T09:05:00.000Z"
      },
      {
        id: "ws-3",
        ownerId: "u-dev",
        name: "api-scripts",
        fileCount: 7,
        updatedAt: "2026-07-08T18:40:00.000Z"
      }
    ]);
    this.modalOpen = signal(false);
    this.editingId = signal(null);
    this.draftName = "";
  }
  open(ws) {
    this.router.navigate(["/workspaces", ws.id]);
  }
  newWorkspace() {
    this.editingId.set(null);
    this.draftName = "";
    this.modalOpen.set(true);
  }
  rename(ws, event) {
    event.stopPropagation();
    this.editingId.set(ws.id);
    this.draftName = ws.name;
    this.modalOpen.set(true);
  }
  closeModal() {
    this.modalOpen.set(false);
    this.editingId.set(null);
    this.draftName = "";
  }
  saveModal() {
    const name = this.draftName.trim();
    if (!name)
      return;
    const id = this.editingId();
    if (id) {
      this.workspaces.update((list) => list.map((w) => w.id === id ? __spreadProps(__spreadValues({}, w), { name }) : w));
    } else {
      const newWs = {
        id: `ws-${Math.round(performance.now())}`,
        ownerId: "u-dev",
        name,
        fileCount: 0,
        updatedAt: new Date(2026, 6, 12).toISOString()
      };
      this.workspaces.update((list) => [newWs, ...list]);
    }
    this.closeModal();
  }
  remove(ws, event) {
    event.stopPropagation();
    if (!confirm(`Delete workspace \u201C${ws.name}\u201D and all its files? This cannot be undone.`)) {
      return;
    }
    this.workspaces.update((list) => list.filter((w) => w.id !== ws.id));
  }
  static {
    this.\u0275fac = function WorkspacesListComponent_Factory(t) {
      return new (t || _WorkspacesListComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkspacesListComponent, selectors: [["app-workspaces-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 2, consts: [["data-testid", "workspaces-main", 1, "page"], [1, "page-head"], [1, "sub"], [1, "spacer"], ["type", "button", "data-testid", "workspaces-new-btn", 1, "btn", "btn-primary", 3, "click"], ["aria-hidden", "true"], [1, "state"], [1, "modal-backdrop"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["data-testid", "workspaces-list", 1, "grid", "ws-grid"], ["data-testid", "workspaces-item", "tabindex", "0", 1, "card", "ws-card"], ["data-testid", "workspaces-item", "tabindex", "0", 1, "card", "ws-card", 3, "click", "keydown.enter"], [1, "ws-top"], ["aria-hidden", "true", 1, "ws-icon"], [1, "ws-name"], [1, "ws-meta", "muted"], [1, "ws-actions"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "modal", "card", 3, "click"], [1, "modal-head"], ["type", "button", "aria-label", "Close", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["data-testid", "workspaces-new-form", 3, "ngSubmit"], [1, "field"], ["for", "ws-name"], ["id", "ws-name", "name", "ws-name", "type", "text", "placeholder", "my-project", "data-testid", "workspaces-new-name", "autofocus", "", 3, "ngModelChange", "ngModel"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", "data-testid", "workspaces-new-submit", 1, "btn", "btn-primary"]], template: function WorkspacesListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "main", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Workspaces");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "Each workspace is an isolated file tree you can edit in the browser.");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "span", 3);
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function WorkspacesListComponent_Template_button_click_7_listener() {
          return ctx.newWorkspace();
        });
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "\uFF0B");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " New workspace ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, WorkspacesListComponent_Conditional_11_Template, 4, 0, "div", 6)(12, WorkspacesListComponent_Conditional_12_Template, 5, 1)(13, WorkspacesListComponent_Conditional_13_Template, 7, 0)(14, WorkspacesListComponent_Conditional_14_Template, 3, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, WorkspacesListComponent_Conditional_15_Template, 18, 3, "div", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275conditional(11, ctx.loading() ? 11 : ctx.error() ? 12 : ctx.workspaces().length === 0 ? 13 : 14);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(15, ctx.modalOpen() ? 15 : -1);
      }
    }, dependencies: [CommonModule, DatePipe, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ["\n\n.ws-grid[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.ws-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n  padding: var(--space-5);\n  cursor: pointer;\n  transition:\n    border-color .15s,\n    box-shadow .15s,\n    transform .05s;\n}\n.ws-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-border-strong);\n  box-shadow: var(--shadow);\n}\n.ws-card[_ngcontent-%COMP%]:active {\n  transform: scale(.995);\n}\n.ws-card[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  border-color: var(--color-brand);\n  box-shadow: 0 0 0 3px var(--color-brand-light);\n}\n.ws-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.ws-icon[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 40px;\n  height: 40px;\n  border-radius: var(--radius);\n  background: var(--color-brand-tint);\n  font-size: var(--fs-lg);\n}\n.ws-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  font-family: var(--font-mono);\n  word-break: break-word;\n}\n.ws-meta[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  margin: 0;\n}\n.ws-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  margin-top: auto;\n  padding-top: var(--space-2);\n  border-top: 1px solid var(--color-border);\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=workspaces-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkspacesListComponent, { className: "WorkspacesListComponent", filePath: "src/app/pages/workspaces-list/workspaces-list.component.ts", lineNumber: 22 });
})();
export {
  WorkspacesListComponent
};
//# sourceMappingURL=workspaces-list.component-QTOS5XPP.js.map
