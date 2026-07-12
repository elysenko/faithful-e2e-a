import {
  Router
} from "./chunk-AWJ4GWCF.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-RWVAJSBE.js";
import {
  CommonModule,
  DatePipe,
  __spreadProps,
  __spreadValues,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-T5L7N4YZ.js";

// src/app/features/workspaces/workspace-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function WorkspaceListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "p");
    \u0275\u0275text(2, "No workspaces yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 7);
    \u0275\u0275listener("click", function WorkspaceListComponent_Conditional_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275text(4, "Create your first workspace");
    \u0275\u0275elementEnd()();
  }
}
function WorkspaceListComponent_Conditional_10_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function WorkspaceListComponent_Conditional_10_For_2_Conditional_4_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.renameValue, $event) || (ctx_r1.renameValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("click", function WorkspaceListComponent_Conditional_10_For_2_Conditional_4_Template_input_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.renameValue);
  }
}
function WorkspaceListComponent_Conditional_10_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ws_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ws_r4.name);
  }
}
function WorkspaceListComponent_Conditional_10_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function WorkspaceListComponent_Conditional_10_For_2_Conditional_10_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ws_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmRename(ws_r4, $event));
    });
    \u0275\u0275text(1, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 19);
    \u0275\u0275listener("click", function WorkspaceListComponent_Conditional_10_For_2_Conditional_10_Template_button_click_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelRename($event));
    });
    \u0275\u0275text(3, "Cancel");
    \u0275\u0275elementEnd();
  }
}
function WorkspaceListComponent_Conditional_10_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function WorkspaceListComponent_Conditional_10_For_2_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ws_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.open(ws_r4));
    });
    \u0275\u0275text(1, "Open");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 21);
    \u0275\u0275listener("click", function WorkspaceListComponent_Conditional_10_For_2_Conditional_11_Template_button_click_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ws_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startRename(ws_r4, $event));
    });
    \u0275\u0275text(3, "Rename");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 22);
    \u0275\u0275listener("click", function WorkspaceListComponent_Conditional_10_For_2_Conditional_11_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ws_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteWorkspace(ws_r4, $event));
    });
    \u0275\u0275text(5, "Delete");
    \u0275\u0275elementEnd();
  }
}
function WorkspaceListComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 10);
    \u0275\u0275listener("click", function WorkspaceListComponent_Conditional_10_For_2_Template_article_click_0_listener() {
      const ws_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.open(ws_r4));
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "span", 12);
    \u0275\u0275text(3, "\u{1F4C1}");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, WorkspaceListComponent_Conditional_10_For_2_Conditional_4_Template, 1, 1, "input", 13)(5, WorkspaceListComponent_Conditional_10_For_2_Conditional_5_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 14);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15);
    \u0275\u0275listener("click", function WorkspaceListComponent_Conditional_10_For_2_Template_div_click_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(10, WorkspaceListComponent_Conditional_10_For_2_Conditional_10_Template, 4, 0)(11, WorkspaceListComponent_Conditional_10_For_2_Conditional_11_Template, 6, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const ws_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-testid", "workspace-" + ws_r4.id);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(4, ctx_r1.renamingId() === ws_r4.id ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", (tmp_13_0 = ws_r4.fileCount) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : 0, " files \xB7 updated ", \u0275\u0275pipeBind2(8, 5, ws_r4.updatedAt, "mediumDate"), "");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(10, ctx_r1.renamingId() === ws_r4.id ? 10 : 11);
  }
}
function WorkspaceListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, WorkspaceListComponent_Conditional_10_For_2_Template, 12, 8, "article", 9, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.workspaces());
  }
}
function WorkspaceListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function WorkspaceListComponent_Conditional_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelCreate());
    });
    \u0275\u0275elementStart(1, "div", 24);
    \u0275\u0275listener("click", function WorkspaceListComponent_Conditional_11_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2", 25);
    \u0275\u0275text(3, "New workspace");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 26)(5, "label", 27);
    \u0275\u0275text(6, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function WorkspaceListComponent_Conditional_11_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newName, $event) || (ctx_r1.newName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function WorkspaceListComponent_Conditional_11_Template_input_keyup_enter_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createWorkspace());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 29)(9, "button", 30);
    \u0275\u0275listener("click", function WorkspaceListComponent_Conditional_11_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelCreate());
    });
    \u0275\u0275text(10, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 31);
    \u0275\u0275listener("click", function WorkspaceListComponent_Conditional_11_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createWorkspace());
    });
    \u0275\u0275text(12, "Create");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newName);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.newName.trim());
  }
}
var WorkspaceListComponent = class _WorkspaceListComponent {
  constructor(router) {
    this.router = router;
    this.workspaces = signal([
      { id: "ws-1", ownerId: "u1", name: "Sample Project", createdAt: "2026-06-01T10:00:00Z", updatedAt: "2026-07-10T14:22:00Z", fileCount: 3 },
      { id: "ws-2", ownerId: "u1", name: "API Playground", createdAt: "2026-06-14T09:12:00Z", updatedAt: "2026-07-08T18:05:00Z", fileCount: 12 },
      { id: "ws-3", ownerId: "u1", name: "Marketing Site", createdAt: "2026-05-20T11:40:00Z", updatedAt: "2026-06-30T08:30:00Z", fileCount: 7 }
    ]);
    this.showCreate = signal(false);
    this.newName = "";
    this.renamingId = signal(null);
    this.renameValue = "";
  }
  open(ws) {
    this.router.navigate(["/workspaces", ws.id]);
  }
  openCreate() {
    this.newName = "";
    this.showCreate.set(true);
  }
  cancelCreate() {
    this.showCreate.set(false);
  }
  createWorkspace() {
    const name = this.newName.trim();
    if (!name)
      return;
    const now = (/* @__PURE__ */ new Date(0)).toISOString();
    const ws = {
      id: "ws-new-" + (this.workspaces().length + 1),
      ownerId: "u1",
      name,
      createdAt: now,
      updatedAt: now,
      fileCount: 0
    };
    this.workspaces.update((list) => [ws, ...list]);
    this.showCreate.set(false);
  }
  startRename(ws, ev) {
    ev.stopPropagation();
    this.renameValue = ws.name;
    this.renamingId.set(ws.id);
  }
  confirmRename(ws, ev) {
    ev.stopPropagation();
    const name = this.renameValue.trim();
    if (name) {
      this.workspaces.update((list) => list.map((w) => w.id === ws.id ? __spreadProps(__spreadValues({}, w), { name }) : w));
    }
    this.renamingId.set(null);
  }
  cancelRename(ev) {
    ev.stopPropagation();
    this.renamingId.set(null);
  }
  deleteWorkspace(ws, ev) {
    ev.stopPropagation();
    this.workspaces.update((list) => list.filter((w) => w.id !== ws.id));
  }
  static {
    this.\u0275fac = function WorkspaceListComponent_Factory(t) {
      return new (t || _WorkspaceListComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkspaceListComponent, selectors: [["app-workspace-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 2, consts: [[1, "page"], [1, "page-head"], [1, "page-title"], [1, "muted"], ["type", "button", "data-testid", "new-workspace", 1, "btn", "btn-primary", 3, "click"], [1, "empty", "card"], [1, "modal-backdrop"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["data-testid", "workspace-grid", 1, "ws-grid"], [1, "ws-card", "card"], [1, "ws-card", "card", 3, "click"], [1, "ws-card-top"], [1, "ws-icon"], ["data-testid", "rename-input", "placeholder", "Workspace name", 1, "ws-rename-input", 3, "ngModel"], [1, "ws-meta"], [1, "ws-actions", 3, "click"], ["data-testid", "rename-input", "placeholder", "Workspace name", 1, "ws-rename-input", 3, "ngModelChange", "click", "ngModel"], [1, "ws-name"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-ghost", 3, "click"], ["type", "button", "data-testid", "open-workspace", 1, "btn", "btn-sm", "btn-outline", 3, "click"], ["type", "button", "data-testid", "rename-workspace", 1, "btn", "btn-sm", "btn-ghost", 3, "click"], ["type", "button", "data-testid", "delete-workspace", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "modal-backdrop", 3, "click"], ["data-testid", "create-modal", 1, "modal", "card", 3, "click"], [1, "modal-title"], [1, "field"], ["for", "ws-name"], ["id", "ws-name", "placeholder", "My project", "data-testid", "new-workspace-name", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["type", "button", "data-testid", "create-workspace-submit", 1, "btn", "btn-primary", 3, "click", "disabled"]], template: function WorkspaceListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Workspaces");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Your projects and virtual file trees.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function WorkspaceListComponent_Template_button_click_7_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275text(8, " + New workspace ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, WorkspaceListComponent_Conditional_9_Template, 5, 0, "div", 5)(10, WorkspaceListComponent_Conditional_10_Template, 3, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, WorkspaceListComponent_Conditional_11_Template, 13, 2, "div", 6);
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275conditional(9, ctx.workspaces().length === 0 ? 9 : 10);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(11, ctx.showCreate() ? 11 : -1);
      }
    }, dependencies: [CommonModule, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: var(--container);\n  margin: 0 auto;\n  padding: var(--space-6) var(--space-5);\n}\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: var(--space-4);\n  margin-bottom: var(--space-5);\n}\n.page-title[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-1);\n  font-size: var(--fs-xl);\n}\n.muted[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.ws-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: var(--space-4);\n}\n.ws-card[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n  cursor: pointer;\n  transition:\n    box-shadow .15s,\n    transform .05s,\n    border-color .15s;\n}\n.ws-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow);\n  border-color: var(--color-border-strong);\n}\n.ws-card[_ngcontent-%COMP%]:active {\n  transform: scale(.995);\n}\n.ws-card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n}\n.ws-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.ws-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fs-md);\n}\n.ws-rename-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 40px;\n  padding: 0 var(--space-2);\n  border: 1px solid var(--color-brand);\n  border-radius: var(--radius-sm);\n  font-size: 16px;\n}\n.ws-meta[_ngcontent-%COMP%] {\n  margin: var(--space-3) 0 var(--space-4);\n  color: var(--color-muted);\n  font-size: var(--fs-sm);\n}\n.ws-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-2);\n}\n.empty[_ngcontent-%COMP%] {\n  padding: var(--space-6);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-3);\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 60;\n  background: rgba(20, 24, 31, .45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-4);\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  padding: var(--space-5);\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-4);\n  font-size: var(--fs-lg);\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--space-2);\n}\n@media (max-width: 768px) {\n  .page[_ngcontent-%COMP%] {\n    padding: var(--space-4);\n  }\n  .page-head[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .page-head[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=workspace-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkspaceListComponent, { className: "WorkspaceListComponent", filePath: "src/app/features/workspaces/workspace-list.component.ts", lineNumber: 14 });
})();
export {
  WorkspaceListComponent
};
//# sourceMappingURL=workspace-list.component-VK3U7F62.js.map
