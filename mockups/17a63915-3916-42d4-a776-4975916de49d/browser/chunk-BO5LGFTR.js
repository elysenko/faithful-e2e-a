import {
  STAGES
} from "./chunk-KI2LTX35.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-YMZROMRV.js";
import {
  ApiService
} from "./chunk-NVB2XA36.js";
import {
  ChangeDetectionStrategy,
  Component,
  __async,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
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
  ɵɵtextInterpolate1
} from "./chunk-C4FZZUVO.js";

// src/app/pipeline/pipeline.component.ts
var _forTrack0 = ($index, $item) => $item.stage;
var _forTrack1 = ($index, $item) => $item.id;
function PipelineComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "Loading pipeline\u2026");
    \u0275\u0275elementEnd();
  }
}
function PipelineComponent_Conditional_7_For_2_For_11_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    \u0275\u0275property("value", s_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r6);
  }
}
function PipelineComponent_Conditional_7_For_2_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 13);
    \u0275\u0275listener("dragstart", function PipelineComponent_Conditional_7_For_2_For_11_Template_article_dragstart_0_listener() {
      const o_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onDragStart(o_r5.id));
    });
    \u0275\u0275elementStart(1, "strong", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small", 1);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label", 16)(8, "span", 17);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "select", 18);
    \u0275\u0275listener("ngModelChange", function PipelineComponent_Conditional_7_For_2_For_11_Template_select_ngModelChange_10_listener($event) {
      const o_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.moveTo(o_r5.id, $event));
    });
    \u0275\u0275repeaterCreate(11, PipelineComponent_Conditional_7_For_2_For_11_For_12_Template, 2, 2, "option", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("data-testid", "deal-" + o_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r5.accountName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\\$", o_r5.amount.toLocaleString(), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Move ", o_r5.name, " to stage");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", o_r5.stage);
    \u0275\u0275attribute("data-testid", "move-" + o_r5.id);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.stages);
  }
}
function PipelineComponent_Conditional_7_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "Drop deals here");
    \u0275\u0275elementEnd();
  }
}
function PipelineComponent_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 5);
    \u0275\u0275listener("dragover", function PipelineComponent_Conditional_7_For_2_Template_section_dragover_0_listener($event) {
      const col_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onDragOver($event, col_r2.stage));
    })("drop", function PipelineComponent_Conditional_7_For_2_Template_section_drop_0_listener() {
      const col_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onDrop(col_r2.stage));
    });
    \u0275\u0275elementStart(1, "header", 6);
    \u0275\u0275element(2, "span", 7);
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 9);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 10);
    \u0275\u0275repeaterCreate(10, PipelineComponent_Conditional_7_For_2_For_11_Template, 13, 7, "article", 11, _forTrack1);
    \u0275\u0275template(12, PipelineComponent_Conditional_7_For_2_Conditional_12_Template, 2, 0, "p", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const col_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("drop-active", ctx_r2.dragOverStage() === col_r2.stage);
    \u0275\u0275attribute("data-testid", "column-" + col_r2.stage);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(col_r2.cls);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(col_r2.stage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(col_r2.items.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\\$", col_r2.total.toLocaleString(), "");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(col_r2.items);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(col_r2.items.length === 0 ? 12 : -1);
  }
}
function PipelineComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, PipelineComponent_Conditional_7_For_2_Template, 13, 9, "section", 4, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.columns());
  }
}
var PipelineComponent = class _PipelineComponent {
  constructor() {
    this.api = inject(ApiService);
    this.stages = STAGES;
    this.loading = signal(true);
    this.dragId = signal(null);
    this.dragOverStage = signal(null);
    this.opportunities = signal([]);
    this.columns = computed(() => this.stages.map((stage) => {
      const items = this.opportunities().filter((o) => o.stage === stage);
      return {
        stage,
        items,
        total: items.reduce((sum, o) => sum + o.amount, 0),
        cls: "stage-" + stage.toLowerCase()
      };
    }));
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.loading.set(true);
      try {
        this.opportunities.set(yield this.api.listOpportunities());
      } catch {
      } finally {
        this.loading.set(false);
      }
    });
  }
  onDragStart(id) {
    this.dragId.set(id);
  }
  onDragOver(event, stage) {
    event.preventDefault();
    this.dragOverStage.set(stage);
  }
  onDrop(stage) {
    void this.moveTo(this.dragId(), stage);
    this.dragId.set(null);
    this.dragOverStage.set(null);
  }
  /** Optimistically move a card to a new stage, then persist it. */
  moveTo(id, stage) {
    return __async(this, null, function* () {
      if (!id)
        return;
      const previous = this.opportunities().find((o) => o.id === id)?.stage;
      if (!previous || previous === stage)
        return;
      this.apply(id, stage);
      try {
        yield this.api.updateOpportunityStage(id, stage);
      } catch {
        this.apply(id, previous);
      }
    });
  }
  apply(id, stage) {
    this.opportunities.update((list) => list.map((o) => o.id === id ? __spreadProps(__spreadValues({}, o), { stage }) : o));
  }
  static {
    this.\u0275fac = function PipelineComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PipelineComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PipelineComponent, selectors: [["app-pipeline"]], decls: 8, vars: 1, consts: [[1, "page-header"], [1, "muted"], ["data-testid", "pipeline-loading", 1, "muted"], ["data-testid", "pipeline-board", 1, "board"], [1, "column", 3, "drop-active"], [1, "column", 3, "dragover", "drop"], [1, "column-head"], [1, "dot"], [1, "count"], [1, "column-total", "muted"], [1, "cards"], ["draggable", "true", 1, "deal-card"], [1, "col-empty", "muted"], ["draggable", "true", 1, "deal-card", 3, "dragstart"], [1, "deal-name"], [1, "amount"], [1, "move-label"], [1, "visually-hidden"], [1, "input", "move-select", 3, "ngModelChange", "ngModel"], [3, "value"]], template: function PipelineComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1");
        \u0275\u0275text(3, "Pipeline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 1);
        \u0275\u0275text(5, "Drag deals between stages \u2014 or use the move menu on mobile.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(6, PipelineComponent_Conditional_6_Template, 2, 0, "p", 2)(7, PipelineComponent_Conditional_7_Template, 3, 0, "div", 3);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.loading() ? 6 : 7);
      }
    }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.board[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-4);\n  overflow-x: auto;\n  overscroll-behavior-x: contain;\n  padding-bottom: var(--space-3);\n}\n.column[_ngcontent-%COMP%] {\n  flex: 0 0 260px;\n  display: flex;\n  flex-direction: column;\n  background: var(--color-surface-alt);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  padding: var(--space-3);\n  min-height: 200px;\n  transition: background 0.15s, border-color 0.15s;\n}\n.column.drop-active[_ngcontent-%COMP%] {\n  background: var(--color-primary-light);\n  border-color: var(--color-primary);\n}\n.column-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n}\n.dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 999px;\n  background: var(--color-text-muted);\n}\n.dot.stage-prospecting[_ngcontent-%COMP%] {\n  background: var(--stage-prospecting);\n}\n.dot.stage-qualification[_ngcontent-%COMP%] {\n  background: var(--stage-qualification);\n}\n.dot.stage-proposal[_ngcontent-%COMP%] {\n  background: var(--stage-proposal);\n}\n.dot.stage-negotiation[_ngcontent-%COMP%] {\n  background: var(--stage-negotiation);\n}\n.dot.stage-closedwon[_ngcontent-%COMP%] {\n  background: var(--stage-won);\n}\n.dot.stage-closedlost[_ngcontent-%COMP%] {\n  background: var(--stage-lost);\n}\n.count[_ngcontent-%COMP%] {\n  margin-left: auto;\n  min-width: 22px;\n  height: 22px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 999px;\n  background: var(--color-border);\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.column-total[_ngcontent-%COMP%] {\n  margin: var(--space-1) 0 var(--space-3);\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n  flex: 1;\n}\n.deal-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: var(--space-3);\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  box-shadow: var(--shadow-sm);\n  cursor: grab;\n}\n.deal-card[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n  background: var(--color-surface-alt);\n}\n.deal-name[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.deal-card[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  margin-top: var(--space-1);\n  color: var(--color-primary-dark);\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n.move-label[_ngcontent-%COMP%] {\n  margin-top: var(--space-2);\n}\n.move-select[_ngcontent-%COMP%] {\n  min-height: 40px;\n  font-size: 16px;\n}\n.col-empty[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  text-align: center;\n  padding: var(--space-4) 0;\n}\n.visually-hidden[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n}\n/*# sourceMappingURL=pipeline.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PipelineComponent, [{
    type: Component,
    args: [{ selector: "app-pipeline", standalone: true, imports: [FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="page-header">
  <div>
    <h1>Pipeline</h1>
    <p class="muted">Drag deals between stages \u2014 or use the move menu on mobile.</p>
  </div>
</div>

@if (loading()) {
  <p class="muted" data-testid="pipeline-loading">Loading pipeline\u2026</p>
} @else {
  <div class="board" data-testid="pipeline-board">
    @for (col of columns(); track col.stage) {
      <section
        class="column"
        [class.drop-active]="dragOverStage() === col.stage"
        (dragover)="onDragOver($event, col.stage)"
        (drop)="onDrop(col.stage)"
        [attr.data-testid]="'column-' + col.stage"
      >
        <header class="column-head">
          <span class="dot" [class]="col.cls"></span>
          <strong>{{ col.stage }}</strong>
          <span class="count">{{ col.items.length }}</span>
        </header>
        <p class="column-total muted">\\\${{ col.total.toLocaleString() }}</p>

        <div class="cards">
          @for (o of col.items; track o.id) {
            <article
              class="deal-card"
              draggable="true"
              (dragstart)="onDragStart(o.id)"
              [attr.data-testid]="'deal-' + o.id"
            >
              <strong class="deal-name">{{ o.name }}</strong>
              <small class="muted">{{ o.accountName }}</small>
              <span class="amount">\\\${{ o.amount.toLocaleString() }}</span>
              <label class="move-label">
                <span class="visually-hidden">Move {{ o.name }} to stage</span>
                <select
                  class="input move-select"
                  [ngModel]="o.stage"
                  (ngModelChange)="moveTo(o.id, $event)"
                  [attr.data-testid]="'move-' + o.id"
                >
                  @for (s of stages; track s) {
                    <option [value]="s">{{ s }}</option>
                  }
                </select>
              </label>
            </article>
          }
          @if (col.items.length === 0) {
            <p class="col-empty muted">Drop deals here</p>
          }
        </div>
      </section>
    }
  </div>
}
`, styles: ["/* src/app/pipeline/pipeline.component.css */\n.board {\n  display: flex;\n  gap: var(--space-4);\n  overflow-x: auto;\n  overscroll-behavior-x: contain;\n  padding-bottom: var(--space-3);\n}\n.column {\n  flex: 0 0 260px;\n  display: flex;\n  flex-direction: column;\n  background: var(--color-surface-alt);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  padding: var(--space-3);\n  min-height: 200px;\n  transition: background 0.15s, border-color 0.15s;\n}\n.column.drop-active {\n  background: var(--color-primary-light);\n  border-color: var(--color-primary);\n}\n.column-head {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n}\n.dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 999px;\n  background: var(--color-text-muted);\n}\n.dot.stage-prospecting {\n  background: var(--stage-prospecting);\n}\n.dot.stage-qualification {\n  background: var(--stage-qualification);\n}\n.dot.stage-proposal {\n  background: var(--stage-proposal);\n}\n.dot.stage-negotiation {\n  background: var(--stage-negotiation);\n}\n.dot.stage-closedwon {\n  background: var(--stage-won);\n}\n.dot.stage-closedlost {\n  background: var(--stage-lost);\n}\n.count {\n  margin-left: auto;\n  min-width: 22px;\n  height: 22px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 999px;\n  background: var(--color-border);\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.column-total {\n  margin: var(--space-1) 0 var(--space-3);\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.cards {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n  flex: 1;\n}\n.deal-card {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: var(--space-3);\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  box-shadow: var(--shadow-sm);\n  cursor: grab;\n}\n.deal-card:active {\n  cursor: grabbing;\n  background: var(--color-surface-alt);\n}\n.deal-name {\n  font-size: 0.9rem;\n}\n.deal-card .amount {\n  margin-top: var(--space-1);\n  color: var(--color-primary-dark);\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n.move-label {\n  margin-top: var(--space-2);\n}\n.move-select {\n  min-height: 40px;\n  font-size: 16px;\n}\n.col-empty {\n  font-size: 0.85rem;\n  text-align: center;\n  padding: var(--space-4) 0;\n}\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n}\n/*# sourceMappingURL=pipeline.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PipelineComponent, { className: "PipelineComponent", filePath: "src/app/pipeline/pipeline.component.ts", lineNumber: 21 });
})();
export {
  PipelineComponent
};
//# sourceMappingURL=chunk-BO5LGFTR.js.map
