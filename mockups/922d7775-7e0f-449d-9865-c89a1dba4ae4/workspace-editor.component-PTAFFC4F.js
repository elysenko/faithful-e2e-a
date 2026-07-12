import {
  ActivatedRoute,
  Router,
  RouterLink
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
  EventEmitter,
  __spreadProps,
  __spreadValues,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpipe,
  ɵɵpipeBind2,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HP7M3I25.js";

// src/app/pages/workspace-editor/code-editor.component.ts
function CodeEditorComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r1);
  }
}
var CodeEditorComponent = class _CodeEditorComponent {
  constructor() {
    this.fileId = null;
    this.content = "";
    this.filename = "";
    this.contentChange = new EventEmitter();
    this.save = new EventEmitter();
    this.text = "";
  }
  ngOnChanges(changes) {
    if (changes["fileId"] || changes["content"] && this.text === "") {
      this.text = this.content;
    }
  }
  get language() {
    const ext = (this.filename.split(".").pop() || "").toLowerCase();
    const map = {
      js: "JavaScript",
      mjs: "JavaScript",
      ts: "TypeScript",
      jsx: "JavaScript",
      tsx: "TypeScript",
      html: "HTML",
      css: "CSS",
      scss: "SCSS",
      json: "JSON",
      md: "Markdown",
      py: "Python",
      txt: "Plain text"
    };
    return map[ext] || "Plain text";
  }
  get lineCount() {
    return this.text ? this.text.split("\n").length : 1;
  }
  get lines() {
    return Array.from({ length: this.lineCount }, (_, i) => i + 1);
  }
  onInput(value) {
    this.text = value;
    this.contentChange.emit(value);
  }
  onSave(event) {
    event.preventDefault();
    this.save.emit();
  }
  static {
    this.\u0275fac = function CodeEditorComponent_Factory(t) {
      return new (t || _CodeEditorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CodeEditorComponent, selectors: [["app-code-editor"]], inputs: { fileId: "fileId", content: "content", filename: "filename" }, outputs: { contentChange: "contentChange", save: "save" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 12, vars: 3, consts: [["data-testid", "code-editor-host", 1, "editor-wrap"], [1, "editor-status"], [1, "lang-badge"], [1, "status-spacer"], [1, "status-meta"], [1, "editor-scroll"], ["aria-hidden", "true", 1, "gutter"], [1, "gutter-line"], ["spellcheck", "false", "autocapitalize", "off", "autocomplete", "off", "autocorrect", "off", "wrap", "off", 1, "code-area", "mono", 3, "ngModelChange", "keydown.control.s", "keydown.meta.s", "ngModel"]], template: function CodeEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "span", 3);
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6);
        \u0275\u0275repeaterCreate(9, CodeEditorComponent_For_10_Template, 2, 1, "span", 7, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "textarea", 8);
        \u0275\u0275listener("ngModelChange", function CodeEditorComponent_Template_textarea_ngModelChange_11_listener($event) {
          return ctx.onInput($event);
        })("keydown.control.s", function CodeEditorComponent_Template_textarea_keydown_control_s_11_listener($event) {
          return ctx.onSave($event);
        })("keydown.meta.s", function CodeEditorComponent_Template_textarea_keydown_meta_s_11_listener($event) {
          return ctx.onSave($event);
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.language);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", ctx.lineCount, " lines \xB7 Ctrl/\u2318+S to save");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.lines);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.text);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n  min-height: 0;\n}\n.editor-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-height: 0;\n  background: var(--color-ink);\n  border-radius: var(--radius);\n  overflow: hidden;\n}\n.editor-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-2) var(--space-3);\n  background: var(--color-ink-soft);\n  border-bottom: 1px solid var(--color-ink-soft);\n}\n.lang-badge[_ngcontent-%COMP%] {\n  padding: 2px var(--space-2);\n  border-radius: var(--radius-pill);\n  background: var(--color-brand);\n  color: var(--color-text-inverse);\n  font-size: var(--fs-xs);\n  font-weight: 700;\n}\n.status-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.status-meta[_ngcontent-%COMP%] {\n  color: var(--color-faint);\n  font-size: var(--fs-xs);\n}\n.editor-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  min-height: 0;\n  overflow: auto;\n  overscroll-behavior: contain;\n}\n.gutter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: var(--space-3) var(--space-2);\n  text-align: right;\n  color: var(--color-faint);\n  font-family: var(--font-mono);\n  font-size: var(--fs-sm);\n  line-height: 1.6;\n  -webkit-user-select: none;\n  user-select: none;\n  background: var(--color-ink);\n}\n.gutter-line[_ngcontent-%COMP%] {\n  display: block;\n}\n.code-area[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 320px;\n  padding: var(--space-3);\n  border: none;\n  outline: none;\n  resize: none;\n  background: var(--color-ink);\n  color: var(--color-surface-alt);\n  font-size: 16px;\n  line-height: 1.6;\n  tab-size: 2;\n  white-space: pre;\n}\n.code-area[_ngcontent-%COMP%]::selection {\n  background: var(--color-brand);\n  color: var(--color-text-inverse);\n}\n/*# sourceMappingURL=code-editor.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CodeEditorComponent, { className: "CodeEditorComponent", filePath: "src/app/pages/workspace-editor/code-editor.component.ts", lineNumber: 28 });
})();

// src/app/pages/workspace-editor/file-tree.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function FileTreeComponent_For_2_Conditional_1_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-file-tree", 12);
    \u0275\u0275listener("select", function FileTreeComponent_For_2_Conditional_1_Conditional_16_Template_app_file_tree_select_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.select.emit($event));
    })("createNode", function FileTreeComponent_For_2_Conditional_1_Conditional_16_Template_app_file_tree_createNode_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.createNode.emit($event));
    })("renameNode", function FileTreeComponent_For_2_Conditional_1_Conditional_16_Template_app_file_tree_renameNode_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.renameNode.emit($event));
    })("removeNode", function FileTreeComponent_For_2_Conditional_1_Conditional_16_Template_app_file_tree_removeNode_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeNode.emit($event));
    })("moveNode", function FileTreeComponent_For_2_Conditional_1_Conditional_16_Template_app_file_tree_moveNode_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.moveNode.emit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nodes", node_r2.children)("activeId", ctx_r2.activeId)("depth", ctx_r2.depth + 1);
  }
}
function FileTreeComponent_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("dragstart", function FileTreeComponent_For_2_Conditional_1_Template_div_dragstart_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const node_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragStart($event, node_r2));
    })("dragover", function FileTreeComponent_For_2_Conditional_1_Template_div_dragover_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const node_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragOver($event, node_r2));
    })("dragleave", function FileTreeComponent_For_2_Conditional_1_Template_div_dragleave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const node_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragLeave(node_r2));
    })("drop", function FileTreeComponent_For_2_Conditional_1_Template_div_drop_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const node_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDrop($event, node_r2));
    });
    \u0275\u0275elementStart(1, "button", 3);
    \u0275\u0275listener("click", function FileTreeComponent_For_2_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const node_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle(node_r2));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 4);
    \u0275\u0275text(4, "\u{1F4C1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 5);
    \u0275\u0275listener("click", function FileTreeComponent_For_2_Conditional_1_Template_span_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const node_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle(node_r2));
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 6)(8, "button", 7);
    \u0275\u0275listener("click", function FileTreeComponent_For_2_Conditional_1_Template_button_click_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const node_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.createNode.emit({ parentId: node_r2.id, type: "file" });
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(9, "\uFF0B\u{1F4C4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 8);
    \u0275\u0275listener("click", function FileTreeComponent_For_2_Conditional_1_Template_button_click_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const node_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.createNode.emit({ parentId: node_r2.id, type: "folder" });
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(11, "\uFF0B\u{1F4C1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 9);
    \u0275\u0275listener("click", function FileTreeComponent_For_2_Conditional_1_Template_button_click_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const node_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.renameNode.emit(node_r2.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(13, "\u270E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 10);
    \u0275\u0275listener("click", function FileTreeComponent_For_2_Conditional_1_Template_button_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const node_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.removeNode.emit(node_r2.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(15, "\u{1F5D1}");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(16, FileTreeComponent_For_2_Conditional_1_Conditional_16_Template, 1, 3, "app-file-tree", 11);
  }
  if (rf & 2) {
    const node_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("padding-left", 8 + ctx_r2.depth * 14, "px");
    \u0275\u0275classProp("drag-over", ctx_r2.dragOverId === node_r2.id);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", (ctx_r2.isExpanded(node_r2) ? "Collapse " : "Expand ") + node_r2.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isExpanded(node_r2) ? "\u25BE" : "\u25B8", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(node_r2.name);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(16, ctx_r2.isExpanded(node_r2) && node_r2.children && node_r2.children.length ? 16 : -1);
  }
}
function FileTreeComponent_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275listener("dragstart", function FileTreeComponent_For_2_Conditional_2_Template_div_dragstart_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const node_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragStart($event, node_r2));
    })("click", function FileTreeComponent_For_2_Conditional_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const node_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.select.emit(node_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 6)(6, "button", 9);
    \u0275\u0275listener("click", function FileTreeComponent_For_2_Conditional_2_Template_button_click_6_listener($event) {
      \u0275\u0275restoreView(_r5);
      const node_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.renameNode.emit(node_r2.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(7, "\u270E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 10);
    \u0275\u0275listener("click", function FileTreeComponent_For_2_Conditional_2_Template_button_click_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      const node_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.removeNode.emit(node_r2.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(9, "\u{1F5D1}");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const node_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("padding-left", 26 + ctx_r2.depth * 14, "px");
    \u0275\u0275classProp("active", ctx_r2.activeId === node_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.iconFor(node_r2.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(node_r2.name);
  }
}
function FileTreeComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 1);
    \u0275\u0275template(1, FileTreeComponent_For_2_Conditional_1_Template, 17, 8)(2, FileTreeComponent_For_2_Conditional_2_Template, 10, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(1, node_r2.type === "folder" ? 1 : 2);
  }
}
var FileTreeComponent = class _FileTreeComponent {
  constructor() {
    this.nodes = [];
    this.activeId = null;
    this.depth = 0;
    this.select = new EventEmitter();
    this.createNode = new EventEmitter();
    this.renameNode = new EventEmitter();
    this.removeNode = new EventEmitter();
    this.moveNode = new EventEmitter();
    this.collapsed = /* @__PURE__ */ new Set();
    this.dragOverId = null;
  }
  isExpanded(node) {
    return !this.collapsed.has(node.id);
  }
  toggle(node) {
    if (this.collapsed.has(node.id))
      this.collapsed.delete(node.id);
    else
      this.collapsed.add(node.id);
  }
  iconFor(name) {
    const ext = (name.split(".").pop() || "").toLowerCase();
    const map = {
      js: "\u{1F7E8}",
      ts: "\u{1F7E6}",
      json: "\u{1F7E2}",
      html: "\u{1F7E7}",
      css: "\u{1F3A8}",
      md: "\u{1F4DD}",
      py: "\u{1F40D}"
    };
    return map[ext] || "\u{1F4C4}";
  }
  // ---- Drag & drop (native HTML5) ----
  onDragStart(event, node) {
    event.dataTransfer?.setData("text/nodeid", node.id);
    if (event.dataTransfer)
      event.dataTransfer.effectAllowed = "move";
  }
  onDragOver(event, node) {
    if (node.type !== "folder")
      return;
    event.preventDefault();
    this.dragOverId = node.id;
    if (event.dataTransfer)
      event.dataTransfer.dropEffect = "move";
  }
  onDragLeave(node) {
    if (this.dragOverId === node.id)
      this.dragOverId = null;
  }
  onDrop(event, node) {
    if (node.type !== "folder")
      return;
    event.preventDefault();
    const id = event.dataTransfer?.getData("text/nodeid");
    this.dragOverId = null;
    if (id && id !== node.id) {
      this.moveNode.emit({ nodeId: id, parentId: node.id });
    }
  }
  static {
    this.\u0275fac = function FileTreeComponent_Factory(t) {
      return new (t || _FileTreeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileTreeComponent, selectors: [["app-file-tree"]], inputs: { nodes: "nodes", activeId: "activeId", depth: "depth" }, outputs: { select: "select", createNode: "createNode", renameNode: "renameNode", removeNode: "removeNode", moveNode: "moveNode" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 3, consts: [[1, "tree"], ["data-testid", "file-tree-node", 1, "tree-item"], ["draggable", "true", 1, "node", "folder", 3, "dragstart", "dragover", "dragleave", "drop"], ["type", "button", 1, "twisty", 3, "click"], ["aria-hidden", "true", 1, "node-icon"], [1, "node-name", 3, "click"], [1, "node-actions"], ["type", "button", "data-testid", "file-tree-create-btn", "title", "New file", "aria-label", "New file", 3, "click"], ["type", "button", "title", "New folder", "aria-label", "New folder", 3, "click"], ["type", "button", "title", "Rename", "aria-label", "Rename", 3, "click"], ["type", "button", "title", "Delete", "aria-label", "Delete", 3, "click"], [3, "nodes", "activeId", "depth"], [3, "select", "createNode", "renameNode", "removeNode", "moveNode", "nodes", "activeId", "depth"], ["draggable", "true", 1, "node", "file", 3, "dragstart", "click"], [1, "node-name"]], template: function FileTreeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ul", 0);
        \u0275\u0275repeaterCreate(1, FileTreeComponent_For_2_Template, 3, 1, "li", 1, _forTrack0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("tree-root", ctx.depth === 0);
        \u0275\u0275attribute("data-testid", ctx.depth === 0 ? "file-tree-root" : null);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.nodes);
      }
    }, dependencies: [_FileTreeComponent, CommonModule], styles: ["\n\n.tree[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.tree-root[_ngcontent-%COMP%] {\n  padding: var(--space-1) 0;\n}\n.tree-item[_ngcontent-%COMP%] {\n  position: relative;\n}\n.node[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-1);\n  min-height: 36px;\n  padding-right: var(--space-2);\n  border-radius: var(--radius-sm);\n  color: var(--color-ink-soft);\n  font-size: var(--fs-sm);\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.node[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-alt);\n}\n.node[_ngcontent-%COMP%]:active {\n  background: var(--color-surface-inset);\n}\n.node.active[_ngcontent-%COMP%] {\n  background: var(--color-brand-light);\n  color: var(--color-brand-dark);\n}\n.node.folder.drag-over[_ngcontent-%COMP%] {\n  background: var(--color-brand-tint);\n  outline: 2px dashed var(--color-brand);\n  outline-offset: -2px;\n}\n.twisty[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 24px;\n  border: none;\n  background: transparent;\n  color: var(--color-muted);\n  font-size: var(--fs-sm);\n  cursor: pointer;\n  flex: none;\n}\n.node-icon[_ngcontent-%COMP%] {\n  flex: none;\n  font-size: 0.95rem;\n}\n.node-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-family: var(--font-mono);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.node-actions[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  gap: 2px;\n  flex: none;\n}\n.node[_ngcontent-%COMP%]:hover   .node-actions[_ngcontent-%COMP%], .node[_ngcontent-%COMP%]:focus-within   .node-actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.node-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 28px;\n  height: 28px;\n  padding: 0 2px;\n  border: none;\n  border-radius: var(--radius-sm);\n  background: transparent;\n  color: var(--color-muted);\n  font-size: var(--fs-xs);\n  cursor: pointer;\n}\n.node-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-inset);\n  color: var(--color-ink);\n}\n@media (hover: none) {\n  .node-actions[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n  .node[_ngcontent-%COMP%] {\n    min-height: 44px;\n  }\n  .node-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: 36px;\n    height: 36px;\n  }\n}\n/*# sourceMappingURL=file-tree.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileTreeComponent, { className: "FileTreeComponent", filePath: "src/app/pages/workspace-editor/file-tree.component.ts", lineNumber: 27 });
})();

// src/app/pages/workspace-editor/search-panel.component.ts
var _forTrack02 = ($index, $item) => $item.nodeId + "-" + $item.firstMatchLine;
function SearchPanelComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 8);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("No matches for \u201C", ctx_r0.term, "\u201D.");
  }
}
function SearchPanelComponent_Conditional_12_For_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const hit_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("L", hit_r3.firstMatchLine, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", hit_r3.snippet, " ");
  }
}
function SearchPanelComponent_Conditional_12_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 11)(1, "button", 12);
    \u0275\u0275listener("click", function SearchPanelComponent_Conditional_12_For_4_Template_button_click_1_listener() {
      const hit_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openHit.emit(hit_r3));
    });
    \u0275\u0275elementStart(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SearchPanelComponent_Conditional_12_For_4_Conditional_6_Template, 4, 2, "span", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const hit_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(hit_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(hit_r3.path);
    \u0275\u0275advance();
    \u0275\u0275conditional(6, hit_r3.snippet ? 6 : -1);
  }
}
function SearchPanelComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ul", 10);
    \u0275\u0275repeaterCreate(3, SearchPanelComponent_Conditional_12_For_4_Template, 7, 3, "li", 11, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.results.length, " match", ctx_r0.results.length === 1 ? "" : "es", "");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.results);
  }
}
function SearchPanelComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "p");
    \u0275\u0275text(2, "Type a term and press Go to search file names and contents.");
    \u0275\u0275elementEnd()();
  }
}
var SearchPanelComponent = class _SearchPanelComponent {
  constructor() {
    this.term = "";
    this.results = [];
    this.searched = false;
    this.search = new EventEmitter();
    this.openHit = new EventEmitter();
    this.closePanel = new EventEmitter();
  }
  submit() {
    this.search.emit(this.term.trim());
  }
  static {
    this.\u0275fac = function SearchPanelComponent_Factory(t) {
      return new (t || _SearchPanelComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchPanelComponent, selectors: [["app-search-panel"]], inputs: { term: "term", results: "results", searched: "searched" }, outputs: { search: "search", openHit: "openHit", closePanel: "closePanel" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 2, consts: [["data-testid", "search-panel-main", 1, "panel"], [1, "panel-head"], [1, "spacer"], ["type", "button", "aria-label", "Close search", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "search-form", 3, "ngSubmit"], ["type", "search", "name", "q", "placeholder", "Search names & contents\u2026", "aria-label", "Search query", "data-testid", "search-panel-input", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm"], [1, "panel-empty", "muted"], ["aria-hidden", "true"], [1, "result-count", "muted"], ["data-testid", "search-panel-results", 1, "hits"], ["data-testid", "search-panel-result-item"], ["type", "button", 1, "hit", 3, "click"], [1, "hit-name", "mono"], [1, "hit-path", "mono", "muted"], [1, "hit-snippet", "mono"], [1, "hit-line"]], template: function SearchPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h3");
        \u0275\u0275text(3, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "span", 2);
        \u0275\u0275elementStart(5, "button", 3);
        \u0275\u0275listener("click", function SearchPanelComponent_Template_button_click_5_listener() {
          return ctx.closePanel.emit();
        });
        \u0275\u0275text(6, "\u2715");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "form", 4);
        \u0275\u0275listener("ngSubmit", function SearchPanelComponent_Template_form_ngSubmit_7_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(8, "input", 5);
        \u0275\u0275twoWayListener("ngModelChange", function SearchPanelComponent_Template_input_ngModelChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.term, $event) || (ctx.term = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 6);
        \u0275\u0275text(10, "Go");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, SearchPanelComponent_Conditional_11_Template, 5, 1, "div", 7)(12, SearchPanelComponent_Conditional_12_Template, 5, 2)(13, SearchPanelComponent_Conditional_13_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.term);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(11, ctx.searched && ctx.results.length === 0 ? 11 : ctx.results.length ? 12 : 13);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ["\n\n.panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n  height: 100%;\n}\n.panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n}\n.panel-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.search-form[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n}\n.search-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 44px;\n  padding: 0 var(--space-3);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius);\n  background: var(--color-surface);\n  color: var(--color-ink);\n  font-size: 16px;\n  font-family: inherit;\n}\n.search-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-brand);\n  box-shadow: 0 0 0 3px var(--color-brand-light);\n}\n.result-count[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  margin: 0;\n}\n.panel-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-6) var(--space-3);\n  text-align: center;\n  font-size: var(--fs-sm);\n}\n.hits[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n  overflow-y: auto;\n}\n.hit[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  width: 100%;\n  min-height: 44px;\n  padding: var(--space-2) var(--space-3);\n  border: 1px solid transparent;\n  border-radius: var(--radius);\n  background: var(--color-surface-alt);\n  text-align: left;\n  cursor: pointer;\n}\n.hit[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-border-strong);\n  background: var(--color-surface);\n}\n.hit-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  font-weight: 700;\n  color: var(--color-ink);\n}\n.hit-path[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n}\n.hit-snippet[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  color: var(--color-ink-soft);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.hit-line[_ngcontent-%COMP%] {\n  padding: 0 4px;\n  border-radius: var(--radius-sm);\n  background: var(--color-warning-bg);\n  color: var(--color-warning);\n  font-weight: 700;\n}\n/*# sourceMappingURL=search-panel.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchPanelComponent, { className: "SearchPanelComponent", filePath: "src/app/pages/workspace-editor/search-panel.component.ts", lineNumber: 19 });
})();

// src/app/pages/workspace-editor/revision-history.component.ts
var _forTrack03 = ($index, $item) => $item.id;
function RevisionHistoryComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fileName);
  }
}
function RevisionHistoryComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 6);
    \u0275\u0275text(2, "\u{1F553}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No saved revisions yet. Save the file (Ctrl/\u2318+S) to start its history.");
    \u0275\u0275elementEnd()();
  }
}
function RevisionHistoryComponent_Conditional_9_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 10)(1, "div", 11);
    \u0275\u0275listener("click", function RevisionHistoryComponent_Conditional_9_For_4_Template_div_click_1_listener() {
      const rev_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.preview.emit(rev_r3));
    });
    \u0275\u0275element(2, "span", 12);
    \u0275\u0275elementStart(3, "div", 13)(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 15);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "button", 16);
    \u0275\u0275listener("click", function RevisionHistoryComponent_Conditional_9_For_4_Template_button_click_9_listener() {
      const rev_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.restore.emit(rev_r3));
    });
    \u0275\u0275text(10, "Restore");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rev_r3 = ctx.$implicit;
    const i_r4 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("current", ctx_r0.activeRevId === rev_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("head", i_r4 === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", i_r4 === 0 ? "Latest" : "Revision " + (ctx_r0.revisions.length - i_r4), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 6, rev_r3.savedAt, "MMM d, y \xB7 HH:mm"));
  }
}
function RevisionHistoryComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "Newest first \xB7 up to 10 kept");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ul", 8);
    \u0275\u0275repeaterCreate(3, RevisionHistoryComponent_Conditional_9_For_4_Template, 11, 9, "li", 9, _forTrack03);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.revisions);
  }
}
var RevisionHistoryComponent = class _RevisionHistoryComponent {
  constructor() {
    this.revisions = [];
    this.fileName = null;
    this.activeRevId = null;
    this.restore = new EventEmitter();
    this.preview = new EventEmitter();
    this.closePanel = new EventEmitter();
  }
  static {
    this.\u0275fac = function RevisionHistoryComponent_Factory(t) {
      return new (t || _RevisionHistoryComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RevisionHistoryComponent, selectors: [["app-revision-history"]], inputs: { revisions: "revisions", fileName: "fileName", activeRevId: "activeRevId" }, outputs: { restore: "restore", preview: "preview", closePanel: "closePanel" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 2, consts: [["data-testid", "revision-history-main", 1, "panel"], [1, "panel-head"], [1, "spacer"], ["type", "button", "aria-label", "Close history", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "panel-sub", "muted", "mono"], [1, "panel-empty", "muted"], ["aria-hidden", "true"], [1, "cap-note", "muted"], ["data-testid", "revision-history-list", 1, "revs"], ["data-testid", "revision-history-item", 1, "rev", 3, "current"], ["data-testid", "revision-history-item", 1, "rev"], [1, "rev-main", 3, "click"], [1, "rev-dot"], [1, "rev-text"], [1, "rev-title"], [1, "rev-time", "muted"], ["type", "button", "data-testid", "revision-restore-btn", 1, "btn", "btn-outline", "btn-sm", 3, "click"]], template: function RevisionHistoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h3");
        \u0275\u0275text(3, "History");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "span", 2);
        \u0275\u0275elementStart(5, "button", 3);
        \u0275\u0275listener("click", function RevisionHistoryComponent_Template_button_click_5_listener() {
          return ctx.closePanel.emit();
        });
        \u0275\u0275text(6, "\u2715");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, RevisionHistoryComponent_Conditional_7_Template, 2, 1, "p", 4)(8, RevisionHistoryComponent_Conditional_8_Template, 5, 0, "div", 5)(9, RevisionHistoryComponent_Conditional_9_Template, 5, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(7, ctx.fileName ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(8, ctx.revisions.length === 0 ? 8 : 9);
      }
    }, dependencies: [CommonModule, DatePipe], styles: ["\n\n.panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n  height: 100%;\n}\n.panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n}\n.panel-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.panel-sub[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  margin: 0;\n}\n.cap-note[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  margin: 0;\n}\n.panel-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-6) var(--space-3);\n  text-align: center;\n  font-size: var(--fs-sm);\n}\n.revs[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n  overflow-y: auto;\n}\n.rev[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  min-height: 48px;\n  padding: var(--space-2);\n  border: 1px solid transparent;\n  border-radius: var(--radius);\n}\n.rev[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-alt);\n}\n.rev.current[_ngcontent-%COMP%] {\n  border-color: var(--color-brand-light);\n  background: var(--color-brand-tint);\n}\n.rev-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  flex: 1;\n  cursor: pointer;\n  min-width: 0;\n}\n.rev-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border: 2px solid var(--color-border-strong);\n  background: var(--color-surface);\n  flex: none;\n}\n.rev-dot.head[_ngcontent-%COMP%] {\n  border-color: var(--color-brand);\n  background: var(--color-brand);\n}\n.rev-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.rev-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  font-weight: 700;\n  color: var(--color-ink);\n}\n.rev-time[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n}\n/*# sourceMappingURL=revision-history.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RevisionHistoryComponent, { className: "RevisionHistoryComponent", filePath: "src/app/pages/workspace-editor/revision-history.component.ts", lineNumber: 17 });
})();

// src/app/pages/workspace-editor/workspace-editor.component.ts
var _forTrack04 = ($index, $item) => $item.id;
function WorkspaceEditorComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function WorkspaceEditorComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function WorkspaceEditorComponent_Conditional_32_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.treeOpen.set(false));
    });
    \u0275\u0275elementEnd();
  }
}
function WorkspaceEditorComponent_For_36_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 31);
  }
}
function WorkspaceEditorComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275listener("click", function WorkspaceEditorComponent_For_36_Template_div_click_0_listener() {
      const tab_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectTab(tab_r4.id));
    });
    \u0275\u0275elementStart(1, "span", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, WorkspaceEditorComponent_For_36_Conditional_3_Template, 1, 0, "span", 31);
    \u0275\u0275elementStart(4, "button", 32);
    \u0275\u0275listener("click", function WorkspaceEditorComponent_For_36_Template_button_click_4_listener($event) {
      const tab_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeTab(tab_r4.id, $event));
    });
    \u0275\u0275text(5, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.activeId() === tab_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r4.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(3, ctx_r0.isDirty(tab_r4.id) ? 3 : -1);
  }
}
function WorkspaceEditorComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "Open a file from the explorer to start editing");
    \u0275\u0275elementEnd();
  }
}
function WorkspaceEditorComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-code-editor", 33);
    \u0275\u0275listener("contentChange", function WorkspaceEditorComponent_Conditional_39_Template_app_code_editor_contentChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onContentChange($event));
    })("save", function WorkspaceEditorComponent_Conditional_39_Template_app_code_editor_save_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveActive());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("fileId", ctx_r0.activeId())("content", ctx_r0.activeContent())("filename", ctx_r0.activeNode().name);
  }
}
function WorkspaceEditorComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 35);
    \u0275\u0275text(2, "\u{1F4C4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No file open.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 36);
    \u0275\u0275text(6, "Pick a file from the explorer, or create a new one.");
    \u0275\u0275elementEnd()();
  }
}
function WorkspaceEditorComponent_Conditional_41_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-search-panel", 38);
    \u0275\u0275listener("search", function WorkspaceEditorComponent_Conditional_41_Conditional_1_Template_app_search_panel_search_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.runSearch($event));
    })("openHit", function WorkspaceEditorComponent_Conditional_41_Conditional_1_Template_app_search_panel_openHit_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openHit($event));
    })("closePanel", function WorkspaceEditorComponent_Conditional_41_Conditional_1_Template_app_search_panel_closePanel_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.closePanel());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("term", ctx_r0.searchTerm())("results", ctx_r0.searchResults())("searched", ctx_r0.searched());
  }
}
function WorkspaceEditorComponent_Conditional_41_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-revision-history", 39);
    \u0275\u0275listener("restore", function WorkspaceEditorComponent_Conditional_41_Conditional_2_Template_app_revision_history_restore_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.restoreRevision($event));
    })("preview", function WorkspaceEditorComponent_Conditional_41_Conditional_2_Template_app_revision_history_preview_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.previewRevision($event));
    })("closePanel", function WorkspaceEditorComponent_Conditional_41_Conditional_2_Template_app_revision_history_closePanel_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.closePanel());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("revisions", ctx_r0.activeRevisions())("fileName", ((tmp_3_0 = ctx_r0.activeNode()) == null ? null : tmp_3_0.name) || null)("activeRevId", ctx_r0.activeRevId());
  }
}
function WorkspaceEditorComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "aside", 27);
    \u0275\u0275template(1, WorkspaceEditorComponent_Conditional_41_Conditional_1_Template, 1, 3, "app-search-panel", 37)(2, WorkspaceEditorComponent_Conditional_41_Conditional_2_Template, 1, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r0.panel() === "search" ? 1 : ctx_r0.panel() === "history" ? 2 : -1);
  }
}
var AUTOSAVE_KEY = "codedeck.autosave";
var WorkspaceEditorComponent = class _WorkspaceEditorComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.workspaceId = signal("");
    this.workspaceName = signal("Sample Project");
    this.loading = signal(false);
    this.error = signal(null);
    this.tree = signal([
      { id: "n-readme", workspaceId: "ws-1", parentId: null, type: "file", name: "README.md" },
      {
        id: "n-src",
        workspaceId: "ws-1",
        parentId: null,
        type: "folder",
        name: "src",
        children: [
          { id: "n-index", workspaceId: "ws-1", parentId: "n-src", type: "file", name: "index.js" },
          { id: "n-style", workspaceId: "ws-1", parentId: "n-src", type: "file", name: "style.css" }
        ]
      },
      { id: "n-pkg", workspaceId: "ws-1", parentId: null, type: "file", name: "package.json" }
    ]);
    this.fileContents = signal([
      {
        nodeId: "n-readme",
        content: "# Sample Project\n\nA CodeDeck demo workspace.\n\n- Edit files in the tabbed editor\n- Save with Ctrl/Cmd+S\n- Browse revision history\n"
      },
      {
        nodeId: "n-index",
        content: "function greet(name) {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet('CodeDeck'));\n"
      },
      {
        nodeId: "n-style",
        content: "body {\n  margin: 0;\n  font-family: system-ui, sans-serif;\n  color: #1a1730;\n}\n"
      },
      {
        nodeId: "n-pkg",
        content: '{\n  "name": "sample-project",\n  "version": "1.0.0",\n  "type": "module"\n}\n'
      }
    ]);
    this.revisions = signal([
      { id: "r-3", nodeId: "n-index", content: "function greet(name) {\n  return `Hello, ${name}!`;\n}\n", savedAt: "2026-07-11T14:20:00.000Z" },
      { id: "r-2", nodeId: "n-index", content: "function greet(n) {\n  return 'Hello ' + n;\n}\n", savedAt: "2026-07-11T11:02:00.000Z" },
      { id: "r-1", nodeId: "n-index", content: "function greet() {\n  return 'Hello';\n}\n", savedAt: "2026-07-10T16:45:00.000Z" }
    ]);
    this.openTabs = signal([]);
    this.activeId = signal(null);
    this.dirtyIds = signal([]);
    this.panel = signal(null);
    this.autosave = signal(false);
    this.searchTerm = signal("");
    this.searchResults = signal([]);
    this.searched = signal(false);
    this.activeRevId = signal(null);
    this.treeOpen = signal(false);
    this.autosaveTimer = null;
    this.activeNode = computed(() => this.activeId() ? this.findNode(this.tree(), this.activeId()) : null);
    this.activeContent = computed(() => {
      const id = this.activeId();
      if (!id)
        return "";
      return this.fileContents().find((f) => f.nodeId === id)?.content ?? "";
    });
    this.activeRevisions = computed(() => {
      const id = this.activeId();
      return id ? this.revisions().filter((r) => r.nodeId === id) : [];
    });
  }
  ngOnInit() {
    this.workspaceId.set(this.route.snapshot.paramMap.get("id") || "ws-1");
    this.autosave.set(localStorage.getItem(AUTOSAVE_KEY) === "true");
    const qp = this.route.snapshot.queryParamMap;
    const file = qp.get("file");
    const panel = qp.get("panel");
    const q = qp.get("q");
    const rev = qp.get("rev");
    if (file && this.findNode(this.tree(), file)) {
      this.openFile(file, false);
    }
    if (panel === "search" || panel === "history") {
      this.panel.set(panel);
    }
    if (q) {
      this.searchTerm.set(q);
      this.runSearch(q, false);
    }
    if (rev) {
      this.activeRevId.set(rev);
    }
  }
  // ---- Tabs ----
  isDirty(id) {
    return this.dirtyIds().includes(id);
  }
  openFile(id, sync = true) {
    const node = this.findNode(this.tree(), id);
    if (!node || node.type !== "file")
      return;
    if (!this.openTabs().some((t) => t.id === id)) {
      this.openTabs.update((tabs) => [...tabs, { id, name: node.name }]);
    }
    this.activeId.set(id);
    this.treeOpen.set(false);
    if (sync)
      this.syncUrl();
  }
  closeTab(id, event) {
    event?.stopPropagation();
    const tabs = this.openTabs().filter((t) => t.id !== id);
    this.openTabs.set(tabs);
    this.dirtyIds.update((d) => d.filter((x) => x !== id));
    if (this.activeId() === id) {
      this.activeId.set(tabs.length ? tabs[tabs.length - 1].id : null);
    }
    this.syncUrl();
  }
  selectTab(id) {
    this.activeId.set(id);
    this.syncUrl();
  }
  // ---- Editing / saving ----
  onContentChange(text) {
    const id = this.activeId();
    if (!id)
      return;
    this.setContent(id, text);
    if (!this.isDirty(id))
      this.dirtyIds.update((d) => [...d, id]);
    if (this.autosave()) {
      if (this.autosaveTimer)
        clearTimeout(this.autosaveTimer);
      this.autosaveTimer = setTimeout(() => this.saveActive(), 800);
    }
  }
  saveActive() {
    const id = this.activeId();
    if (!id || !this.isDirty(id))
      return;
    const content = this.activeContent();
    const newRev = {
      id: `r-${Math.round(performance.now())}`,
      nodeId: id,
      content,
      savedAt: new Date(2026, 6, 12, 12, 0, 0).toISOString()
    };
    const others = this.revisions().filter((r) => r.nodeId !== id);
    const mine = [newRev, ...this.revisions().filter((r) => r.nodeId === id)].slice(0, 10);
    this.revisions.set([...mine, ...others]);
    this.dirtyIds.update((d) => d.filter((x) => x !== id));
  }
  toggleAutosave() {
    const next = !this.autosave();
    this.autosave.set(next);
    localStorage.setItem(AUTOSAVE_KEY, String(next));
    if (next)
      this.saveActive();
  }
  // ---- Panels ----
  togglePanel(p) {
    this.panel.set(this.panel() === p ? null : p);
    this.syncUrl();
  }
  closePanel() {
    this.panel.set(null);
    this.syncUrl();
  }
  runSearch(term, sync = true) {
    this.searchTerm.set(term);
    this.searched.set(true);
    if (!term) {
      this.searchResults.set([]);
      if (sync)
        this.syncUrl();
      return;
    }
    const lower = term.toLowerCase();
    const hits = [];
    const paths = this.buildPaths();
    for (const node of this.flatten(this.tree())) {
      if (node.type !== "file")
        continue;
      const path = paths.get(node.id) || "/" + node.name;
      const nameMatch = node.name.toLowerCase().includes(lower);
      const content = this.fileContents().find((f) => f.nodeId === node.id)?.content ?? "";
      const lines = content.split("\n");
      let firstLine = 0;
      let snippet = null;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].toLowerCase().includes(lower)) {
          firstLine = i + 1;
          snippet = lines[i].trim().slice(0, 80);
          break;
        }
      }
      if (nameMatch || firstLine > 0) {
        hits.push({ nodeId: node.id, name: node.name, path, firstMatchLine: firstLine, snippet });
      }
    }
    this.searchResults.set(hits);
    if (sync)
      this.syncUrl();
  }
  openHit(hit) {
    this.openFile(hit.nodeId);
    this.panel.set(null);
    this.syncUrl();
  }
  restoreRevision(rev) {
    this.openFile(rev.nodeId);
    this.setContent(rev.nodeId, rev.content);
    this.dirtyIds.update((d) => d.includes(rev.nodeId) ? d : [...d, rev.nodeId]);
    this.activeRevId.set(rev.id);
    this.saveActive();
  }
  previewRevision(rev) {
    this.activeRevId.set(rev.id);
    this.syncUrl();
  }
  // ---- Tree operations ----
  createNode(payload) {
    const label = payload.type === "folder" ? "folder" : "file";
    const name = prompt(`New ${label} name`, payload.type === "folder" ? "new-folder" : "untitled.js");
    if (!name)
      return;
    const node = {
      id: `n-${Math.round(performance.now())}`,
      workspaceId: this.workspaceId(),
      parentId: payload.parentId,
      type: payload.type,
      name: name.trim(),
      children: payload.type === "folder" ? [] : void 0
    };
    this.tree.set(this.insertChild(this.tree(), payload.parentId, node));
    if (payload.type === "file") {
      this.fileContents.update((f) => [...f, { nodeId: node.id, content: "" }]);
      this.openFile(node.id);
    }
  }
  renameNode(id) {
    const node = this.findNode(this.tree(), id);
    if (!node)
      return;
    const name = prompt("Rename to", node.name);
    if (!name)
      return;
    this.tree.set(this.patchNode(this.tree(), id, { name: name.trim() }));
    this.openTabs.update((tabs) => tabs.map((t) => t.id === id ? __spreadProps(__spreadValues({}, t), { name: name.trim() }) : t));
  }
  removeNode(id) {
    const node = this.findNode(this.tree(), id);
    if (!node)
      return;
    if (!confirm(`Delete \u201C${node.name}\u201D${node.type === "folder" ? " and everything inside it" : ""}?`)) {
      return;
    }
    const removedIds = this.collectIds(node);
    this.tree.set(this.removeFromTree(this.tree(), id));
    this.fileContents.update((f) => f.filter((c) => !removedIds.has(c.nodeId)));
    this.openTabs.update((tabs) => tabs.filter((t) => !removedIds.has(t.id)));
    if (this.activeId() && removedIds.has(this.activeId())) {
      const rest = this.openTabs();
      this.activeId.set(rest.length ? rest[rest.length - 1].id : null);
    }
    this.syncUrl();
  }
  moveNode(payload) {
    const { nodeId, parentId } = payload;
    if (nodeId === parentId)
      return;
    const moving = this.findNode(this.tree(), nodeId);
    if (!moving)
      return;
    if (parentId && this.collectIds(moving).has(parentId)) {
      this.error.set("Cannot move a folder into itself.");
      setTimeout(() => this.error.set(null), 2500);
      return;
    }
    const detached = this.removeFromTree(this.tree(), nodeId);
    const updatedNode = __spreadProps(__spreadValues({}, moving), { parentId });
    this.tree.set(this.insertChild(detached, parentId, updatedNode));
  }
  // ---- URL sync (deep-linkable state) ----
  syncUrl() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        file: this.activeId() || null,
        panel: this.panel() || null,
        q: this.panel() === "search" && this.searchTerm() ? this.searchTerm() : null,
        rev: this.panel() === "history" && this.activeRevId() ? this.activeRevId() : null
      },
      queryParamsHandling: "merge",
      replaceUrl: true
    });
  }
  // ---- Tree helpers (pure, immutable) ----
  findNode(nodes, id) {
    for (const n of nodes) {
      if (n.id === id)
        return n;
      if (n.children) {
        const found = this.findNode(n.children, id);
        if (found)
          return found;
      }
    }
    return null;
  }
  flatten(nodes) {
    const out = [];
    for (const n of nodes) {
      out.push(n);
      if (n.children)
        out.push(...this.flatten(n.children));
    }
    return out;
  }
  collectIds(node) {
    const ids = /* @__PURE__ */ new Set([node.id]);
    for (const c of node.children || []) {
      for (const id of this.collectIds(c))
        ids.add(id);
    }
    return ids;
  }
  removeFromTree(nodes, id) {
    return nodes.filter((n) => n.id !== id).map((n) => n.children ? __spreadProps(__spreadValues({}, n), { children: this.removeFromTree(n.children, id) }) : n);
  }
  insertChild(nodes, parentId, child) {
    if (parentId === null) {
      return [...nodes, child];
    }
    return nodes.map((n) => {
      if (n.id === parentId) {
        return __spreadProps(__spreadValues({}, n), { children: [...n.children || [], child] });
      }
      return n.children ? __spreadProps(__spreadValues({}, n), { children: this.insertChild(n.children, parentId, child) }) : n;
    });
  }
  patchNode(nodes, id, patch) {
    return nodes.map((n) => {
      if (n.id === id)
        return __spreadValues(__spreadValues({}, n), patch);
      return n.children ? __spreadProps(__spreadValues({}, n), { children: this.patchNode(n.children, id, patch) }) : n;
    });
  }
  setContent(id, content) {
    const exists = this.fileContents().some((f) => f.nodeId === id);
    if (exists) {
      this.fileContents.update((f) => f.map((c) => c.nodeId === id ? __spreadProps(__spreadValues({}, c), { content }) : c));
    } else {
      this.fileContents.update((f) => [...f, { nodeId: id, content }]);
    }
  }
  buildPaths() {
    const map = /* @__PURE__ */ new Map();
    const walk = (nodes, prefix) => {
      for (const n of nodes) {
        const path = `${prefix}/${n.name}`;
        map.set(n.id, path);
        if (n.children)
          walk(n.children, path);
      }
    };
    walk(this.tree(), "");
    return map;
  }
  static {
    this.\u0275fac = function WorkspaceEditorComponent_Factory(t) {
      return new (t || _WorkspaceEditorComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkspaceEditorComponent, selectors: [["app-workspace-editor"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 18, consts: [["data-testid", "editor-main", 1, "editor-shell"], [1, "editor-topbar"], ["routerLink", "/", "aria-label", "Back to workspaces", 1, "btn", "btn-ghost", "btn-sm", "back-btn"], ["type", "button", "aria-label", "Toggle file tree", 1, "btn", "btn-ghost", "btn-sm", "files-toggle", 3, "click"], [1, "ws-title", "mono"], [1, "spacer"], ["data-testid", "editor-autosave-toggle", 1, "autosave"], ["type", "checkbox", 3, "change", "checked"], ["type", "button", "data-testid", "editor-panel-search-btn", 1, "btn", "btn-outline", "btn-sm", 3, "click"], ["type", "button", "data-testid", "editor-panel-history-btn", 1, "btn", "btn-outline", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], [1, "editor-error"], [1, "editor-body"], ["data-testid", "editor-file-tree", 1, "file-panel"], [1, "file-panel-head"], [1, "fp-title"], ["type", "button", "title", "New file at root", "aria-label", "New file at root", 1, "icon-mini", 3, "click"], ["type", "button", "title", "New folder at root", "aria-label", "New folder at root", 1, "icon-mini", 3, "click"], [1, "file-panel-scroll"], [3, "select", "createNode", "renameNode", "removeNode", "moveNode", "nodes", "activeId"], [1, "tree-backdrop"], [1, "main-panel"], ["role", "tablist", "data-testid", "editor-tab-bar", 1, "tab-bar"], [1, "tab", 3, "active"], [1, "tab-hint", "muted"], ["data-testid", "editor-code-area", 1, "editor-region"], [3, "fileId", "content", "filename"], [1, "side-panel"], [1, "tree-backdrop", 3, "click"], [1, "tab", 3, "click"], [1, "tab-name", "mono"], ["title", "Unsaved changes", "aria-label", "Unsaved changes", 1, "dirty-dot"], ["type", "button", "aria-label", "Close tab", 1, "tab-close", 3, "click"], [3, "contentChange", "save", "fileId", "content", "filename"], [1, "editor-empty", "state"], [1, "state-icon"], [1, "muted"], [3, "term", "results", "searched"], [3, "search", "openHit", "closePanel", "term", "results", "searched"], [3, "restore", "preview", "closePanel", "revisions", "fileName", "activeRevId"]], template: function WorkspaceEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "main", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275text(3, "\u2190");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function WorkspaceEditorComponent_Template_button_click_4_listener() {
          return ctx.treeOpen.set(!ctx.treeOpen());
        });
        \u0275\u0275text(5, "\u{1F5C2}\uFE0F Files");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h1", 4);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "span", 5);
        \u0275\u0275elementStart(9, "label", 6)(10, "input", 7);
        \u0275\u0275listener("change", function WorkspaceEditorComponent_Template_input_change_10_listener() {
          return ctx.toggleAutosave();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span");
        \u0275\u0275text(12, "Autosave");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "button", 8);
        \u0275\u0275listener("click", function WorkspaceEditorComponent_Template_button_click_13_listener() {
          return ctx.togglePanel("search");
        });
        \u0275\u0275text(14, "\u{1F50D} Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 9);
        \u0275\u0275listener("click", function WorkspaceEditorComponent_Template_button_click_15_listener() {
          return ctx.togglePanel("history");
        });
        \u0275\u0275text(16, "\u{1F553} History");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 10);
        \u0275\u0275listener("click", function WorkspaceEditorComponent_Template_button_click_17_listener() {
          return ctx.saveActive();
        });
        \u0275\u0275text(18, " \u{1F4BE} Save ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(19, WorkspaceEditorComponent_Conditional_19_Template, 2, 1, "p", 11);
        \u0275\u0275elementStart(20, "div", 12)(21, "aside", 13)(22, "div", 14)(23, "span", 15);
        \u0275\u0275text(24, "Explorer");
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "span", 5);
        \u0275\u0275elementStart(26, "button", 16);
        \u0275\u0275listener("click", function WorkspaceEditorComponent_Template_button_click_26_listener() {
          return ctx.createNode({ parentId: null, type: "file" });
        });
        \u0275\u0275text(27, "\uFF0B\u{1F4C4}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 17);
        \u0275\u0275listener("click", function WorkspaceEditorComponent_Template_button_click_28_listener() {
          return ctx.createNode({ parentId: null, type: "folder" });
        });
        \u0275\u0275text(29, "\uFF0B\u{1F4C1}");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 18)(31, "app-file-tree", 19);
        \u0275\u0275listener("select", function WorkspaceEditorComponent_Template_app_file_tree_select_31_listener($event) {
          return ctx.openFile($event);
        })("createNode", function WorkspaceEditorComponent_Template_app_file_tree_createNode_31_listener($event) {
          return ctx.createNode($event);
        })("renameNode", function WorkspaceEditorComponent_Template_app_file_tree_renameNode_31_listener($event) {
          return ctx.renameNode($event);
        })("removeNode", function WorkspaceEditorComponent_Template_app_file_tree_removeNode_31_listener($event) {
          return ctx.removeNode($event);
        })("moveNode", function WorkspaceEditorComponent_Template_app_file_tree_moveNode_31_listener($event) {
          return ctx.moveNode($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(32, WorkspaceEditorComponent_Conditional_32_Template, 1, 0, "div", 20);
        \u0275\u0275elementStart(33, "div", 21)(34, "nav", 22);
        \u0275\u0275repeaterCreate(35, WorkspaceEditorComponent_For_36_Template, 6, 4, "div", 23, _forTrack04);
        \u0275\u0275template(37, WorkspaceEditorComponent_Conditional_37_Template, 2, 0, "span", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "section", 25);
        \u0275\u0275template(39, WorkspaceEditorComponent_Conditional_39_Template, 1, 3, "app-code-editor", 26)(40, WorkspaceEditorComponent_Conditional_40_Template, 7, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(41, WorkspaceEditorComponent_Conditional_41_Template, 3, 1, "aside", 27);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.workspaceName());
        \u0275\u0275advance(2);
        \u0275\u0275classProp("on", ctx.autosave());
        \u0275\u0275advance();
        \u0275\u0275property("checked", ctx.autosave());
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.panel() === "search");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.panel() === "history");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.activeId() || !ctx.isDirty(ctx.activeId()));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(19, ctx.error() ? 19 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("open", ctx.treeOpen());
        \u0275\u0275advance(10);
        \u0275\u0275property("nodes", ctx.tree())("activeId", ctx.activeId());
        \u0275\u0275advance();
        \u0275\u0275conditional(32, ctx.treeOpen() ? 32 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.openTabs());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(37, ctx.openTabs().length === 0 ? 37 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(39, ctx.activeNode() ? 39 : 40);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(41, ctx.panel() ? 41 : -1);
      }
    }, dependencies: [
      CommonModule,
      RouterLink,
      CodeEditorComponent,
      FileTreeComponent,
      SearchPanelComponent,
      RevisionHistoryComponent
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n.editor-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: calc(100svh - var(--header-h));\n  height: calc(100vh - var(--header-h));\n}\n.editor-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-2) var(--space-4);\n  background: var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n  flex-wrap: wrap;\n}\n.ws-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  font-weight: 700;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 40vw;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.files-toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n.back-btn[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n}\n.autosave[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-1);\n  min-height: 36px;\n  padding: 0 var(--space-2);\n  border-radius: var(--radius);\n  font-size: var(--fs-sm);\n  color: var(--color-muted);\n  cursor: pointer;\n}\n.autosave.on[_ngcontent-%COMP%] {\n  color: var(--color-success);\n  font-weight: 600;\n}\n.autosave[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.btn.active[_ngcontent-%COMP%] {\n  background: var(--color-brand-light);\n  border-color: var(--color-brand-light);\n  color: var(--color-brand-dark);\n}\n.editor-error[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: var(--space-2) var(--space-4);\n  background: var(--color-danger-bg);\n  color: var(--color-danger);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n}\n.editor-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  min-height: 0;\n  position: relative;\n}\n.file-panel[_ngcontent-%COMP%] {\n  width: 260px;\n  flex: none;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  background: var(--color-surface);\n  border-right: 1px solid var(--color-border);\n}\n.file-panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-1);\n  padding: var(--space-2) var(--space-3);\n  border-bottom: 1px solid var(--color-border);\n}\n.fp-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n  color: var(--color-muted);\n}\n.icon-mini[_ngcontent-%COMP%] {\n  min-width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: var(--radius-sm);\n  background: transparent;\n  color: var(--color-muted);\n  font-size: var(--fs-xs);\n  cursor: pointer;\n}\n.icon-mini[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-inset);\n  color: var(--color-ink);\n}\n.file-panel-scroll[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  overscroll-behavior-y: contain;\n  padding: var(--space-2);\n}\n.tree-backdrop[_ngcontent-%COMP%] {\n  display: none;\n}\n.main-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  background: var(--color-surface-inset);\n}\n.tab-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  gap: var(--space-1);\n  padding: var(--space-2) var(--space-2) 0;\n  overflow-x: auto;\n  overscroll-behavior-x: contain;\n  background: var(--color-surface-alt);\n  border-bottom: 1px solid var(--color-border);\n}\n.tab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n  min-height: 40px;\n  padding: 0 var(--space-2) 0 var(--space-3);\n  border: 1px solid var(--color-border);\n  border-bottom: none;\n  border-radius: var(--radius) var(--radius) 0 0;\n  background: var(--color-surface-inset);\n  color: var(--color-ink-soft);\n  font-size: var(--fs-sm);\n  cursor: pointer;\n  white-space: nowrap;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  color: var(--color-ink);\n  font-weight: 600;\n}\n.tab-name[_ngcontent-%COMP%] {\n  max-width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dirty-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--color-accent);\n  flex: none;\n}\n.tab-close[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border: none;\n  border-radius: var(--radius-sm);\n  background: transparent;\n  color: var(--color-muted);\n  font-size: var(--fs-xs);\n  cursor: pointer;\n  flex: none;\n}\n.tab-close[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-inset);\n  color: var(--color-ink);\n}\n.tab-hint[_ngcontent-%COMP%] {\n  padding: var(--space-2) var(--space-3);\n  font-size: var(--fs-sm);\n}\n.editor-region[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  display: flex;\n  padding: var(--space-3);\n}\n.editor-empty[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.side-panel[_ngcontent-%COMP%] {\n  width: 320px;\n  flex: none;\n  padding: var(--space-3);\n  background: var(--color-surface);\n  border-left: 1px solid var(--color-border);\n  overflow-y: auto;\n  overscroll-behavior-y: contain;\n}\n@media (max-width: 900px) {\n  .side-panel[_ngcontent-%COMP%] {\n    width: 280px;\n  }\n}\n@media (max-width: 768px) {\n  .files-toggle[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n  .ws-title[_ngcontent-%COMP%] {\n    max-width: 30vw;\n  }\n  .file-panel[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    z-index: 25;\n    width: 82%;\n    max-width: 300px;\n    transform: translateX(-100%);\n    transition: transform .2s ease;\n    box-shadow: var(--shadow-lg);\n  }\n  .file-panel.open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .tree-backdrop[_ngcontent-%COMP%] {\n    display: block;\n    position: absolute;\n    inset: 0;\n    z-index: 24;\n    background: rgba(26, 23, 48, 0.4);\n  }\n  .side-panel[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 26;\n    width: auto;\n    max-height: 70%;\n    border-left: none;\n    border-top: 1px solid var(--color-border);\n    border-radius: var(--radius-lg) var(--radius-lg) 0 0;\n    box-shadow: var(--shadow-lg);\n    padding-bottom: calc(var(--space-3) + var(--safe-bottom));\n  }\n}\n/*# sourceMappingURL=workspace-editor.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkspaceEditorComponent, { className: "WorkspaceEditorComponent", filePath: "src/app/pages/workspace-editor/workspace-editor.component.ts", lineNumber: 43 });
})();
export {
  WorkspaceEditorComponent
};
//# sourceMappingURL=workspace-editor.component-PTAFFC4F.js.map
