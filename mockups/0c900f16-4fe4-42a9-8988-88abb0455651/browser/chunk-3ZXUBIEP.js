import {
  RouterLink
} from "./chunk-H4FLBSDN.js";
import "./chunk-B3EMQL3E.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryAdvance,
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
  ɵɵviewQuerySignal
} from "./chunk-FGCV4IXY.js";

// src/app/heatmap-canvas/heatmap-canvas.component.ts
var _c0 = ["canvas"];
var LOW_CONFIDENCE = 0.45;
var MIN_ALPHA = 0.28;
var HeatmapCanvasComponent = class _HeatmapCanvasComponent {
  constructor() {
    this.frame = input(null);
    this.mode = input("absolute");
    this.canvasRef = viewChild("canvas");
    this.absoluteDomain = { min: -10, max: 110 };
    this.deviationDomain = { min: -20, max: 20 };
    effect(() => {
      const frame = this.frame();
      const mode = this.mode();
      const canvas = this.canvasRef()?.nativeElement;
      if (canvas) {
        this.draw(canvas, frame, mode);
      }
    });
  }
  /** Resolve the design-token color ramp from CSS custom properties. */
  rampFor(mode) {
    const css = getComputedStyle(document.documentElement);
    const names = mode === "absolute" ? ["--temp-c0", "--temp-c1", "--temp-c2", "--temp-c3", "--temp-c4", "--temp-c5", "--temp-c6"] : ["--dev-cold", "--dev-cool", "--dev-mid", "--dev-warm", "--dev-hot"];
    return names.map((n) => css.getPropertyValue(n).trim() || "#888888");
  }
  draw(canvas, frame, mode) {
    const ctx = canvas.getContext("2d");
    if (!ctx)
      return;
    const dpr = window.devicePixelRatio || 1;
    const cssW = canvas.clientWidth || 640;
    const cssH = canvas.clientHeight || 400;
    canvas.width = Math.floor(cssW * dpr);
    canvas.height = Math.floor(cssH * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const bg = getComputedStyle(document.documentElement).getPropertyValue("--color-canvas-bg").trim() || "#0d1b2a";
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, cssW, cssH);
    if (!frame || frame.grid.length === 0)
      return;
    const { rows, cols, grid, confidence } = frame;
    const ramp = this.rampFor(mode);
    const domain = mode === "absolute" ? this.absoluteDomain : this.deviationDomain;
    const cw = cssW / cols;
    const ch = cssH / rows;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const idx = r * cols + c;
        const value = grid[idx];
        if (value === null || value === void 0)
          continue;
        const t = this.clamp01((value - domain.min) / (domain.max - domain.min));
        const color = this.sampleRamp(ramp, t);
        const conf = confidence[idx] ?? 1;
        const alpha = conf < LOW_CONFIDENCE ? MIN_ALPHA : 1;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = color;
        ctx.fillRect(c * cw, r * ch, cw + 0.6, ch + 0.6);
      }
    }
    ctx.globalAlpha = 1;
  }
  sampleRamp(ramp, t) {
    if (ramp.length === 1)
      return ramp[0];
    const scaled = t * (ramp.length - 1);
    const i = Math.min(ramp.length - 2, Math.floor(scaled));
    const f = scaled - i;
    return this.lerpColor(ramp[i], ramp[i + 1], f);
  }
  lerpColor(a, b, t) {
    const ca = this.parseHex(a);
    const cb = this.parseHex(b);
    if (!ca || !cb)
      return a;
    const r = Math.round(ca[0] + (cb[0] - ca[0]) * t);
    const g = Math.round(ca[1] + (cb[1] - ca[1]) * t);
    const bl = Math.round(ca[2] + (cb[2] - ca[2]) * t);
    return `rgb(${r}, ${g}, ${bl})`;
  }
  parseHex(hex) {
    const m = hex.replace("#", "");
    if (m.length !== 6)
      return null;
    return [
      parseInt(m.slice(0, 2), 16),
      parseInt(m.slice(2, 4), 16),
      parseInt(m.slice(4, 6), 16)
    ];
  }
  clamp01(v) {
    return v < 0 ? 0 : v > 1 ? 1 : v;
  }
  static {
    this.\u0275fac = function HeatmapCanvasComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeatmapCanvasComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeatmapCanvasComponent, selectors: [["app-heatmap-canvas"]], viewQuery: function HeatmapCanvasComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.canvasRef, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { frame: [1, "frame"], mode: [1, "mode"] }, decls: 3, vars: 0, consts: [["canvas", ""], ["data-testid", "heatmap-canvas", 1, "canvas-wrap"], [1, "heatmap"]], template: function HeatmapCanvasComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275element(1, "canvas", 2, 0);
        \u0275\u0275elementEnd();
      }
    }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.canvas-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 16 / 10;\n  background: var(--color-canvas-bg);\n  border-radius: var(--radius);\n  overflow: hidden;\n}\n.heatmap[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=heatmap-canvas.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeatmapCanvasComponent, [{
    type: Component,
    args: [{ selector: "app-heatmap-canvas", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="canvas-wrap" data-testid="heatmap-canvas">\n  <canvas #canvas class="heatmap"></canvas>\n</div>\n', styles: ["/* src/app/heatmap-canvas/heatmap-canvas.component.css */\n:host {\n  display: block;\n  width: 100%;\n}\n.canvas-wrap {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 16 / 10;\n  background: var(--color-canvas-bg);\n  border-radius: var(--radius);\n  overflow: hidden;\n}\n.heatmap {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=heatmap-canvas.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeatmapCanvasComponent, { className: "HeatmapCanvasComponent", filePath: "src/app/heatmap-canvas/heatmap-canvas.component.ts", lineNumber: 22 });
})();

// src/app/legend/legend.component.ts
var _forTrack0 = ($index, $item) => $item.label;
function LegendComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Daily mean temperature ");
  }
}
function LegendComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Departure from 1991\u20132020 normal ");
  }
}
function LegendComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stop_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(stop_r1.label);
  }
}
function LegendComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span");
    \u0275\u0275text(2, "Below normal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Above normal");
    \u0275\u0275elementEnd()();
  }
}
var LegendComponent = class _LegendComponent {
  constructor() {
    this.mode = input("absolute");
    this.absoluteStops = [];
    this.deviationStops = [];
    this.absoluteGradient = "linear-gradient(to right, var(--temp-c0), var(--temp-c1), var(--temp-c2), var(--temp-c3), var(--temp-c4), var(--temp-c5), var(--temp-c6))";
    this.deviationGradient = "linear-gradient(to right, var(--dev-cold), var(--dev-cool), var(--dev-mid), var(--dev-warm), var(--dev-hot))";
  }
  static {
    this.\u0275fac = function LegendComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LegendComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LegendComponent, selectors: [["app-legend"]], inputs: { mode: [1, "mode"] }, decls: 15, vars: 4, consts: [["data-testid", "legend", 1, "legend"], [1, "legend-head"], [1, "legend-title"], [1, "legend-unit"], ["aria-hidden", "true", 1, "legend-bar"], [1, "legend-scale"], [1, "legend-tick"], [1, "legend-poles"], [1, "legend-note"], ["aria-hidden", "true", 1, "swatch-faded"]], template: function LegendComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275template(3, LegendComponent_Conditional_3_Template, 1, 0)(4, LegendComponent_Conditional_4_Template, 1, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 3);
        \u0275\u0275text(6, "\xB0F");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(7, "div", 4);
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275repeaterCreate(9, LegendComponent_For_10_Template, 2, 1, "span", 6, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, LegendComponent_Conditional_11_Template, 5, 0, "div", 7);
        \u0275\u0275elementStart(12, "div", 8);
        \u0275\u0275element(13, "span", 9);
        \u0275\u0275text(14, " Faded cells = low station coverage ");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.mode() === "absolute" ? 3 : 4);
        \u0275\u0275advance(4);
        \u0275\u0275styleProp("background", ctx.mode() === "absolute" ? ctx.absoluteGradient : ctx.deviationGradient);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.mode() === "absolute" ? ctx.absoluteStops : ctx.deviationStops);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.mode() === "deviation" ? 11 : -1);
      }
    }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.legend[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  padding: var(--space-3) var(--space-4);\n  box-shadow: var(--shadow-sm);\n}\n.legend-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: var(--space-3);\n  margin-bottom: var(--space-2);\n}\n.legend-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.legend-unit[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--color-text-muted);\n  font-family: var(--font-mono);\n}\n.legend-bar[_ngcontent-%COMP%] {\n  height: 12px;\n  border-radius: var(--radius-pill);\n  border: 1px solid var(--color-border);\n}\n.legend-scale[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: var(--space-1);\n  font-family: var(--font-mono);\n  font-size: 0.68rem;\n  color: var(--color-text-muted);\n}\n.legend-poles[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: var(--space-1);\n  font-size: 0.68rem;\n  color: var(--color-text-faint);\n}\n.legend-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  margin-top: var(--space-3);\n  padding-top: var(--space-2);\n  border-top: 1px dashed var(--color-border);\n  font-size: 0.68rem;\n  color: var(--color-text-faint);\n}\n.swatch-faded[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 12px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border);\n  background: var(--temp-c3);\n  opacity: 0.32;\n  flex: none;\n}\n/*# sourceMappingURL=legend.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LegendComponent, [{
    type: Component,
    args: [{ selector: "app-legend", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="legend" data-testid="legend">
  <div class="legend-head">
    <span class="legend-title">
      @if (mode() === 'absolute') {
        Daily mean temperature
      } @else {
        Departure from 1991\u20132020 normal
      }
    </span>
    <span class="legend-unit">\xB0F</span>
  </div>

  <div
    class="legend-bar"
    [style.background]="mode() === 'absolute' ? absoluteGradient : deviationGradient"
    aria-hidden="true"
  ></div>

  <div class="legend-scale">
    @for (stop of (mode() === 'absolute' ? absoluteStops : deviationStops); track stop.label) {
      <span class="legend-tick">{{ stop.label }}</span>
    }
  </div>

  @if (mode() === 'deviation') {
    <div class="legend-poles">
      <span>Below normal</span>
      <span>Above normal</span>
    </div>
  }

  <div class="legend-note">
    <span class="swatch-faded" aria-hidden="true"></span>
    Faded cells = low station coverage
  </div>
</div>
`, styles: ["/* src/app/legend/legend.component.css */\n:host {\n  display: block;\n}\n.legend {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  padding: var(--space-3) var(--space-4);\n  box-shadow: var(--shadow-sm);\n}\n.legend-head {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: var(--space-3);\n  margin-bottom: var(--space-2);\n}\n.legend-title {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.legend-unit {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--color-text-muted);\n  font-family: var(--font-mono);\n}\n.legend-bar {\n  height: 12px;\n  border-radius: var(--radius-pill);\n  border: 1px solid var(--color-border);\n}\n.legend-scale {\n  display: flex;\n  justify-content: space-between;\n  margin-top: var(--space-1);\n  font-family: var(--font-mono);\n  font-size: 0.68rem;\n  color: var(--color-text-muted);\n}\n.legend-poles {\n  display: flex;\n  justify-content: space-between;\n  margin-top: var(--space-1);\n  font-size: 0.68rem;\n  color: var(--color-text-faint);\n}\n.legend-note {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  margin-top: var(--space-3);\n  padding-top: var(--space-2);\n  border-top: 1px dashed var(--color-border);\n  font-size: 0.68rem;\n  color: var(--color-text-faint);\n}\n.swatch-faded {\n  width: 16px;\n  height: 12px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border);\n  background: var(--temp-c3);\n  opacity: 0.32;\n  flex: none;\n}\n/*# sourceMappingURL=legend.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LegendComponent, { className: "LegendComponent", filePath: "src/app/legend/legend.component.ts", lineNumber: 16 });
})();

// src/app/mode-toggle/mode-toggle.component.ts
var ModeToggleComponent = class _ModeToggleComponent {
  constructor() {
    this.mode = input("absolute");
    this.modeChange = output();
  }
  select(mode) {
    if (mode !== this.mode()) {
      this.modeChange.emit(mode);
    }
  }
  static {
    this.\u0275fac = function ModeToggleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ModeToggleComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModeToggleComponent, selectors: [["app-mode-toggle"]], inputs: { mode: [1, "mode"] }, outputs: { modeChange: "modeChange" }, decls: 5, vars: 6, consts: [["role", "group", "aria-label", "Visualization mode", "data-testid", "mode-toggle", 1, "mode-toggle"], ["type", "button", "data-testid", "mode-absolute", 1, "seg", 3, "click"], ["type", "button", "data-testid", "mode-deviation", 1, "seg", 3, "click"]], template: function ModeToggleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275listener("click", function ModeToggleComponent_Template_button_click_1_listener() {
          return ctx.select("absolute");
        });
        \u0275\u0275text(2, " Absolute ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 2);
        \u0275\u0275listener("click", function ModeToggleComponent_Template_button_click_3_listener() {
          return ctx.select("deviation");
        });
        \u0275\u0275text(4, " Deviation ");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.mode() === "absolute");
        \u0275\u0275attribute("aria-pressed", ctx.mode() === "absolute");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.mode() === "deviation");
        \u0275\u0275attribute("aria-pressed", ctx.mode() === "deviation");
      }
    }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n}\n.mode-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 3px;\n  gap: 2px;\n  background: var(--color-surface-3);\n  border-radius: var(--radius-pill);\n  border: 1px solid var(--color-border);\n}\n.seg[_ngcontent-%COMP%] {\n  appearance: none;\n  border: none;\n  background: transparent;\n  color: var(--color-text-muted);\n  font-size: 0.82rem;\n  font-weight: 600;\n  padding: 8px 18px;\n  min-height: 44px;\n  border-radius: var(--radius-pill);\n  cursor: pointer;\n  transition: background 0.15s ease, color 0.15s ease;\n}\n.seg[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.seg.active[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  color: var(--color-primary);\n  box-shadow: var(--shadow-sm);\n}\n/*# sourceMappingURL=mode-toggle.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModeToggleComponent, [{
    type: Component,
    args: [{ selector: "app-mode-toggle", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="mode-toggle" role="group" aria-label="Visualization mode" data-testid="mode-toggle">
  <button
    type="button"
    class="seg"
    [class.active]="mode() === 'absolute'"
    [attr.aria-pressed]="mode() === 'absolute'"
    (click)="select('absolute')"
    data-testid="mode-absolute"
  >
    Absolute
  </button>
  <button
    type="button"
    class="seg"
    [class.active]="mode() === 'deviation'"
    [attr.aria-pressed]="mode() === 'deviation'"
    (click)="select('deviation')"
    data-testid="mode-deviation"
  >
    Deviation
  </button>
</div>
`, styles: ["/* src/app/mode-toggle/mode-toggle.component.css */\n:host {\n  display: inline-block;\n}\n.mode-toggle {\n  display: inline-flex;\n  padding: 3px;\n  gap: 2px;\n  background: var(--color-surface-3);\n  border-radius: var(--radius-pill);\n  border: 1px solid var(--color-border);\n}\n.seg {\n  appearance: none;\n  border: none;\n  background: transparent;\n  color: var(--color-text-muted);\n  font-size: 0.82rem;\n  font-weight: 600;\n  padding: 8px 18px;\n  min-height: 44px;\n  border-radius: var(--radius-pill);\n  cursor: pointer;\n  transition: background 0.15s ease, color 0.15s ease;\n}\n.seg:active {\n  transform: scale(0.97);\n}\n.seg.active {\n  background: var(--color-surface);\n  color: var(--color-primary);\n  box-shadow: var(--shadow-sm);\n}\n/*# sourceMappingURL=mode-toggle.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModeToggleComponent, { className: "ModeToggleComponent", filePath: "src/app/mode-toggle/mode-toggle.component.ts", lineNumber: 16 });
})();

// src/app/playback-controls/playback-controls.component.ts
function PlaybackControlsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 10);
    \u0275\u0275element(1, "path", 17);
    \u0275\u0275elementEnd();
  }
}
function PlaybackControlsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 10);
    \u0275\u0275element(1, "path", 18);
    \u0275\u0275elementEnd();
  }
}
function PlaybackControlsComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275property("value", s_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", s_r1, " fps");
  }
}
var PlaybackControlsComponent = class _PlaybackControlsComponent {
  constructor() {
    this.isPlaying = input(false);
    this.currentIndex = input(0);
    this.totalFrames = input(0);
    this.speed = input(2);
    this.disabled = input(false);
    this.playToggle = output();
    this.stepForward = output();
    this.stepBackward = output();
    this.scrub = output();
    this.speedChange = output();
    this.speeds = [1, 2, 5, 10];
    this.maxIndex = computed(() => Math.max(0, this.totalFrames() - 1));
    this.atStart = computed(() => this.currentIndex() <= 0);
    this.atEnd = computed(() => this.currentIndex() >= this.maxIndex());
  }
  onScrub(event) {
    const value = Number(event.target.value);
    this.scrub.emit(value);
  }
  onSpeed(event) {
    const value = Number(event.target.value);
    this.speedChange.emit(value);
  }
  static {
    this.\u0275fac = function PlaybackControlsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaybackControlsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaybackControlsComponent, selectors: [["app-playback-controls"]], inputs: { isPlaying: [1, "isPlaying"], currentIndex: [1, "currentIndex"], totalFrames: [1, "totalFrames"], speed: [1, "speed"], disabled: [1, "disabled"] }, outputs: { playToggle: "playToggle", stepForward: "stepForward", stepBackward: "stepBackward", scrub: "scrub", speedChange: "speedChange" }, decls: 22, vars: 14, consts: [["data-testid", "playback-controls", 1, "playback"], [1, "track-row"], ["data-testid", "frame-counter", 1, "frame-counter"], ["type", "range", "min", "0", "step", "1", "aria-label", "Scrub to frame", "data-testid", "timeline-slider", 1, "scrubber", 3, "input", "max", "value", "disabled"], [1, "button-row"], [1, "transport"], ["type", "button", "aria-label", "Step backward one frame", "data-testid", "step-back", 1, "ctrl", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "width", "18", "height", "18", "aria-hidden", "true"], ["d", "M6 5h2v14H6zM20 5v14l-11-7z", "fill", "currentColor"], ["type", "button", "data-testid", "play-pause", 1, "ctrl", "primary", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "width", "22", "height", "22", "aria-hidden", "true"], ["type", "button", "aria-label", "Step forward one frame", "data-testid", "step-forward", 1, "ctrl", 3, "click", "disabled"], ["d", "M16 5h2v14h-2zM4 5l11 7-11 7z", "fill", "currentColor"], [1, "speed"], [1, "speed-label"], ["aria-label", "Playback speed", "data-testid", "speed-select", 3, "change", "value", "disabled"], [3, "value"], ["d", "M7 5h4v14H7zM13 5h4v14h-4z", "fill", "currentColor"], ["d", "M7 5v14l12-7z", "fill", "currentColor"]], template: function PlaybackControlsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "input", 3);
        \u0275\u0275listener("input", function PlaybackControlsComponent_Template_input_input_4_listener($event) {
          return ctx.onScrub($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "button", 6);
        \u0275\u0275listener("click", function PlaybackControlsComponent_Template_button_click_7_listener() {
          return ctx.stepBackward.emit();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 7);
        \u0275\u0275element(9, "path", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(10, "button", 9);
        \u0275\u0275listener("click", function PlaybackControlsComponent_Template_button_click_10_listener() {
          return ctx.playToggle.emit();
        });
        \u0275\u0275template(11, PlaybackControlsComponent_Conditional_11_Template, 2, 0, ":svg:svg", 10)(12, PlaybackControlsComponent_Conditional_12_Template, 2, 0, ":svg:svg", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 11);
        \u0275\u0275listener("click", function PlaybackControlsComponent_Template_button_click_13_listener() {
          return ctx.stepForward.emit();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(14, "svg", 7);
        \u0275\u0275element(15, "path", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(16, "label", 13)(17, "span", 14);
        \u0275\u0275text(18, "Speed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "select", 15);
        \u0275\u0275listener("change", function PlaybackControlsComponent_Template_select_change_19_listener($event) {
          return ctx.onSpeed($event);
        });
        \u0275\u0275repeaterCreate(20, PlaybackControlsComponent_For_21_Template, 2, 2, "option", 16, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("disabled", ctx.disabled());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" ", ctx.totalFrames() ? ctx.currentIndex() + 1 : 0, " / ", ctx.totalFrames(), " ");
        \u0275\u0275advance();
        \u0275\u0275property("max", ctx.maxIndex())("value", ctx.currentIndex())("disabled", ctx.disabled() || ctx.totalFrames() === 0);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.disabled() || ctx.atStart());
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.disabled());
        \u0275\u0275attribute("aria-label", ctx.isPlaying() ? "Pause" : "Play");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isPlaying() ? 11 : 12);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.disabled() || ctx.atEnd());
        \u0275\u0275advance(6);
        \u0275\u0275property("value", ctx.speed())("disabled", ctx.disabled());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.speeds);
      }
    }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.playback[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  padding: var(--space-3) var(--space-4);\n  box-shadow: var(--shadow-sm);\n}\n.playback.disabled[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.track-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.frame-counter[_ngcontent-%COMP%] {\n  font-family: var(--font-mono);\n  font-size: 0.72rem;\n  color: var(--color-text-muted);\n  white-space: nowrap;\n  min-width: 56px;\n}\n.scrubber[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  accent-color: var(--color-primary);\n  cursor: pointer;\n}\n.button-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-3);\n  margin-top: var(--space-3);\n}\n.transport[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n}\n.ctrl[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  border-radius: var(--radius-pill);\n  border: 1px solid var(--color-border);\n  background: var(--color-surface-2);\n  color: var(--color-text);\n  cursor: pointer;\n  transition: background 0.15s ease, transform 0.1s ease;\n}\n.ctrl[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-surface-3);\n}\n.ctrl[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.92);\n}\n.ctrl.primary[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  background: var(--color-primary);\n  border-color: var(--color-primary);\n  color: var(--color-on-primary);\n}\n.ctrl.primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-primary-hover);\n}\n.ctrl[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.speed[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n}\n.speed-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.speed[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  appearance: none;\n  border: 1px solid var(--color-border);\n  background: var(--color-surface-2);\n  color: var(--color-text);\n  border-radius: var(--radius-sm);\n  padding: 8px 10px;\n  min-height: 44px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=playback-controls.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaybackControlsComponent, [{
    type: Component,
    args: [{ selector: "app-playback-controls", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="playback" data-testid="playback-controls" [class.disabled]="disabled()">
  <div class="track-row">
    <span class="frame-counter" data-testid="frame-counter">
      {{ totalFrames() ? currentIndex() + 1 : 0 }} / {{ totalFrames() }}
    </span>
    <input
      class="scrubber"
      type="range"
      min="0"
      [max]="maxIndex()"
      step="1"
      [value]="currentIndex()"
      [disabled]="disabled() || totalFrames() === 0"
      (input)="onScrub($event)"
      aria-label="Scrub to frame"
      data-testid="timeline-slider"
    />
  </div>

  <div class="button-row">
    <div class="transport">
      <button
        type="button"
        class="ctrl"
        (click)="stepBackward.emit()"
        [disabled]="disabled() || atStart()"
        aria-label="Step backward one frame"
        data-testid="step-back"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path d="M6 5h2v14H6zM20 5v14l-11-7z" fill="currentColor" />
        </svg>
      </button>

      <button
        type="button"
        class="ctrl primary"
        (click)="playToggle.emit()"
        [disabled]="disabled()"
        [attr.aria-label]="isPlaying() ? 'Pause' : 'Play'"
        data-testid="play-pause"
      >
        @if (isPlaying()) {
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path d="M7 5h4v14H7zM13 5h4v14h-4z" fill="currentColor" />
          </svg>
        } @else {
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path d="M7 5v14l12-7z" fill="currentColor" />
          </svg>
        }
      </button>

      <button
        type="button"
        class="ctrl"
        (click)="stepForward.emit()"
        [disabled]="disabled() || atEnd()"
        aria-label="Step forward one frame"
        data-testid="step-forward"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path d="M16 5h2v14h-2zM4 5l11 7-11 7z" fill="currentColor" />
        </svg>
      </button>
    </div>

    <label class="speed">
      <span class="speed-label">Speed</span>
      <select
        [value]="speed()"
        [disabled]="disabled()"
        (change)="onSpeed($event)"
        aria-label="Playback speed"
        data-testid="speed-select"
      >
        @for (s of speeds; track s) {
          <option [value]="s">{{ s }} fps</option>
        }
      </select>
    </label>
  </div>
</div>
`, styles: ["/* src/app/playback-controls/playback-controls.component.css */\n:host {\n  display: block;\n}\n.playback {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  padding: var(--space-3) var(--space-4);\n  box-shadow: var(--shadow-sm);\n}\n.playback.disabled {\n  opacity: 0.55;\n}\n.track-row {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.frame-counter {\n  font-family: var(--font-mono);\n  font-size: 0.72rem;\n  color: var(--color-text-muted);\n  white-space: nowrap;\n  min-width: 56px;\n}\n.scrubber {\n  flex: 1;\n  height: 6px;\n  accent-color: var(--color-primary);\n  cursor: pointer;\n}\n.button-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-3);\n  margin-top: var(--space-3);\n}\n.transport {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n}\n.ctrl {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  border-radius: var(--radius-pill);\n  border: 1px solid var(--color-border);\n  background: var(--color-surface-2);\n  color: var(--color-text);\n  cursor: pointer;\n  transition: background 0.15s ease, transform 0.1s ease;\n}\n.ctrl:hover:not(:disabled) {\n  background: var(--color-surface-3);\n}\n.ctrl:active:not(:disabled) {\n  transform: scale(0.92);\n}\n.ctrl.primary {\n  width: 52px;\n  height: 52px;\n  background: var(--color-primary);\n  border-color: var(--color-primary);\n  color: var(--color-on-primary);\n}\n.ctrl.primary:hover:not(:disabled) {\n  background: var(--color-primary-hover);\n}\n.ctrl:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.speed {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n}\n.speed-label {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.speed select {\n  appearance: none;\n  border: 1px solid var(--color-border);\n  background: var(--color-surface-2);\n  color: var(--color-text);\n  border-radius: var(--radius-sm);\n  padding: 8px 10px;\n  min-height: 44px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=playback-controls.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaybackControlsComponent, { className: "PlaybackControlsComponent", filePath: "src/app/playback-controls/playback-controls.component.ts", lineNumber: 16 });
})();

// src/app/date-range-picker/date-range-picker.component.ts
function DateRangePickerComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function DateRangePickerComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.dayCount(), " ", ctx_r0.dayCount() === 1 ? "day" : "days", " selected ");
  }
}
var MS_PER_DAY = 864e5;
var MAX_DAYS = 30;
var LOOKBACK_YEARS = 5;
var DateRangePickerComponent = class _DateRangePickerComponent {
  constructor() {
    this.start = input("");
    this.end = input("");
    this.rangeApply = output();
    this.draftStart = signal("");
    this.draftEnd = signal("");
    this.lookbackNote = `Data is available for the past ${LOOKBACK_YEARS} years only`;
    this.maxIso = this.toIso(/* @__PURE__ */ new Date());
    this.minIso = this.computeMinIso();
    this.dayCount = computed(() => {
      const s = this.draftStart();
      const e = this.draftEnd();
      if (!s || !e)
        return 0;
      const diff = (Date.parse(e) - Date.parse(s)) / MS_PER_DAY;
      return Number.isFinite(diff) ? Math.round(diff) + 1 : 0;
    });
    this.error = computed(() => {
      const s = this.draftStart();
      const e = this.draftEnd();
      if (!s || !e)
        return null;
      if (Date.parse(e) < Date.parse(s)) {
        return "End date must be on or after the start date";
      }
      if (this.dayCount() > MAX_DAYS) {
        return "Date range must be 30 days or fewer";
      }
      return null;
    });
    this.canApply = computed(() => !!this.draftStart() && !!this.draftEnd() && this.error() === null);
    effect(() => {
      this.draftStart.set(this.start());
      this.draftEnd.set(this.end());
    });
  }
  onStart(event) {
    this.draftStart.set(event.target.value);
  }
  onEnd(event) {
    this.draftEnd.set(event.target.value);
  }
  apply() {
    if (this.canApply()) {
      this.rangeApply.emit({ start: this.draftStart(), end: this.draftEnd() });
    }
  }
  computeMinIso() {
    const d = /* @__PURE__ */ new Date();
    d.setFullYear(d.getFullYear() - LOOKBACK_YEARS);
    return this.toIso(d);
  }
  toIso(d) {
    return d.toISOString().slice(0, 10);
  }
  static {
    this.\u0275fac = function DateRangePickerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DateRangePickerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateRangePickerComponent, selectors: [["app-date-range-picker"]], inputs: { start: [1, "start"], end: [1, "end"] }, outputs: { rangeApply: "rangeApply" }, decls: 18, vars: 9, consts: [["data-testid", "date-range-picker", 1, "picker", 3, "submit"], [1, "fields"], [1, "field"], [1, "field-label"], ["type", "date", "data-testid", "start-date", 3, "input", "value", "min", "max"], ["aria-hidden", "true", 1, "arrow"], ["type", "date", "data-testid", "end-date", 3, "input", "value", "min", "max"], ["data-testid", "lookback-note", 1, "lookback-note"], ["role", "alert", "data-testid", "range-error", 1, "error"], ["data-testid", "range-count", 1, "count"], ["type", "submit", "data-testid", "apply-range", 1, "apply-btn", 3, "disabled"]], template: function DateRangePickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form", 0);
        \u0275\u0275listener("submit", function DateRangePickerComponent_Template_form_submit_0_listener($event) {
          $event.preventDefault();
          return ctx.apply();
        });
        \u0275\u0275elementStart(1, "div", 1)(2, "label", 2)(3, "span", 3);
        \u0275\u0275text(4, "Start date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "input", 4);
        \u0275\u0275listener("input", function DateRangePickerComponent_Template_input_input_5_listener($event) {
          return ctx.onStart($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "span", 5);
        \u0275\u0275text(7, "\u2192");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "label", 2)(9, "span", 3);
        \u0275\u0275text(10, "End date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "input", 6);
        \u0275\u0275listener("input", function DateRangePickerComponent_Template_input_input_11_listener($event) {
          return ctx.onEnd($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "p", 7);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, DateRangePickerComponent_Conditional_14_Template, 2, 1, "p", 8)(15, DateRangePickerComponent_Conditional_15_Template, 2, 2, "p", 9);
        \u0275\u0275elementStart(16, "button", 10);
        \u0275\u0275text(17, " Load animation ");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("value", ctx.draftStart())("min", ctx.minIso)("max", ctx.maxIso);
        \u0275\u0275advance(6);
        \u0275\u0275property("value", ctx.draftEnd())("min", ctx.minIso)("max", ctx.maxIso);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.lookbackNote);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.error() ? 14 : ctx.dayCount() > 0 ? 15 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.canApply());
      }
    }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.picker[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.fields[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: var(--space-3);\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n  flex: 1;\n  min-width: 0;\n}\n.field-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--color-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  min-height: 44px;\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-sm);\n  background: var(--color-surface);\n  color: var(--color-text);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-primary);\n}\n.arrow[_ngcontent-%COMP%] {\n  padding-bottom: 12px;\n  color: var(--color-text-faint);\n}\n.lookback-note[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.72rem;\n  color: var(--color-text-faint);\n}\n.error[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--color-danger);\n  background: var(--color-danger-soft);\n  padding: var(--space-2) var(--space-3);\n  border-radius: var(--radius-sm);\n}\n.count[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.78rem;\n  color: var(--color-success);\n  font-weight: 600;\n}\n.apply-btn[_ngcontent-%COMP%] {\n  appearance: none;\n  border: none;\n  background: var(--color-primary);\n  color: var(--color-on-primary);\n  font-size: 0.9rem;\n  font-weight: 600;\n  padding: 12px 18px;\n  min-height: 44px;\n  border-radius: var(--radius);\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.apply-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-primary-hover);\n}\n.apply-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.apply-btn[_ngcontent-%COMP%]:disabled {\n  background: var(--color-border-strong);\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .fields[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .arrow[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=date-range-picker.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateRangePickerComponent, [{
    type: Component,
    args: [{ selector: "app-date-range-picker", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<form class="picker" (submit)="$event.preventDefault(); apply()" data-testid="date-range-picker">
  <div class="fields">
    <label class="field">
      <span class="field-label">Start date</span>
      <input
        type="date"
        [value]="draftStart()"
        [min]="minIso"
        [max]="maxIso"
        (input)="onStart($event)"
        data-testid="start-date"
      />
    </label>

    <span class="arrow" aria-hidden="true">\u2192</span>

    <label class="field">
      <span class="field-label">End date</span>
      <input
        type="date"
        [value]="draftEnd()"
        [min]="minIso"
        [max]="maxIso"
        (input)="onEnd($event)"
        data-testid="end-date"
      />
    </label>
  </div>

  <p class="lookback-note" data-testid="lookback-note">{{ lookbackNote }}</p>

  @if (error()) {
    <p class="error" role="alert" data-testid="range-error">{{ error() }}</p>
  } @else if (dayCount() > 0) {
    <p class="count" data-testid="range-count">
      {{ dayCount() }} {{ dayCount() === 1 ? 'day' : 'days' }} selected
    </p>
  }

  <button
    type="submit"
    class="apply-btn"
    [disabled]="!canApply()"
    data-testid="apply-range"
  >
    Load animation
  </button>
</form>
`, styles: ["/* src/app/date-range-picker/date-range-picker.component.css */\n:host {\n  display: block;\n}\n.picker {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.fields {\n  display: flex;\n  align-items: flex-end;\n  gap: var(--space-3);\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n  flex: 1;\n  min-width: 0;\n}\n.field-label {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--color-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.field input {\n  width: 100%;\n  padding: 10px 12px;\n  min-height: 44px;\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-sm);\n  background: var(--color-surface);\n  color: var(--color-text);\n}\n.field input:focus {\n  border-color: var(--color-primary);\n}\n.arrow {\n  padding-bottom: 12px;\n  color: var(--color-text-faint);\n}\n.lookback-note {\n  margin: 0;\n  font-size: 0.72rem;\n  color: var(--color-text-faint);\n}\n.error {\n  margin: 0;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--color-danger);\n  background: var(--color-danger-soft);\n  padding: var(--space-2) var(--space-3);\n  border-radius: var(--radius-sm);\n}\n.count {\n  margin: 0;\n  font-size: 0.78rem;\n  color: var(--color-success);\n  font-weight: 600;\n}\n.apply-btn {\n  appearance: none;\n  border: none;\n  background: var(--color-primary);\n  color: var(--color-on-primary);\n  font-size: 0.9rem;\n  font-weight: 600;\n  padding: 12px 18px;\n  min-height: 44px;\n  border-radius: var(--radius);\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.apply-btn:hover:not(:disabled) {\n  background: var(--color-primary-hover);\n}\n.apply-btn:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.apply-btn:disabled {\n  background: var(--color-border-strong);\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .fields {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .arrow {\n    display: none;\n  }\n}\n/*# sourceMappingURL=date-range-picker.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateRangePickerComponent, { className: "DateRangePickerComponent", filePath: "src/app/date-range-picker/date-range-picker.component.ts", lineNumber: 27 });
})();

// src/app/visualization/visualization.component.ts
function VisualizationComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-heatmap-canvas", 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("frame", ctx_r0.currentFrame())("mode", ctx_r0.mode());
  }
}
function VisualizationComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 22);
    \u0275\u0275text(2, "\u25F7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 23);
    \u0275\u0275text(4, "No data available for this date range yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 24);
    \u0275\u0275text(6, " Observations for these dates have not been ingested. Try an earlier range within the last 5 years. ");
    \u0275\u0275elementEnd()();
  }
}
function VisualizationComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "p", 23);
    \u0275\u0275text(2, "Something went wrong loading this animation.");
    \u0275\u0275elementEnd()();
  }
}
function VisualizationComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-playback-controls", 25);
    \u0275\u0275listener("playToggle", function VisualizationComponent_Conditional_23_Template_app_playback_controls_playToggle_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.togglePlay());
    })("stepForward", function VisualizationComponent_Conditional_23_Template_app_playback_controls_stepForward_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.stepForward());
    })("stepBackward", function VisualizationComponent_Conditional_23_Template_app_playback_controls_stepBackward_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.stepBackward());
    })("scrub", function VisualizationComponent_Conditional_23_Template_app_playback_controls_scrub_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onScrub($event));
    })("speedChange", function VisualizationComponent_Conditional_23_Template_app_playback_controls_speedChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSpeedChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("isPlaying", ctx_r0.isPlaying())("currentIndex", ctx_r0.currentIndex())("totalFrames", ctx_r0.totalFrames())("speed", ctx_r0.speed());
  }
}
var VisualizationComponent = class _VisualizationComponent {
  constructor() {
    this.frames = signal([]);
    this.mode = signal("absolute");
    this.currentIndex = signal(0);
    this.isPlaying = signal(false);
    this.speed = signal(2);
    this.state = signal("ready");
    this.degraded = signal(false);
    this.range = signal(this.defaultRange());
    this.timer = null;
    this.totalFrames = computed(() => this.frames().length);
    this.currentFrame = computed(() => this.frames()[this.currentIndex()] ?? null);
    this.currentDateLabel = computed(() => {
      const f = this.currentFrame();
      return f ? this.formatDate(f.date) : "\u2014";
    });
  }
  ngOnInit() {
    this.loadAnimation(this.range());
  }
  ngOnDestroy() {
    this.stopTimer();
  }
  // --- loading -------------------------------------------------------------
  onRangeApply(range) {
    this.range.set(range);
    this.currentIndex.set(0);
    this.loadAnimation(range);
  }
  onModeChange(mode) {
    const keepIndex = this.currentIndex();
    const wasPlaying = this.isPlaying();
    this.mode.set(mode);
    this.loadAnimation(this.range(), keepIndex);
    if (wasPlaying) {
      this.play();
    }
  }
  loadAnimation(range, resumeIndex = 0) {
    this.pause();
    const latest = /* @__PURE__ */ new Date();
    latest.setDate(latest.getDate() - 2);
    if (Date.parse(range.start) > latest.getTime()) {
      this.frames.set([]);
      this.state.set("no-data");
      return;
    }
    const built = this.buildMockFrames(range, this.mode());
    this.frames.set(built);
    this.state.set("ready");
    this.degraded.set(false);
    this.currentIndex.set(Math.min(resumeIndex, Math.max(0, built.length - 1)));
  }
  // --- playback ------------------------------------------------------------
  togglePlay() {
    this.isPlaying() ? this.pause() : this.play();
  }
  play() {
    if (this.totalFrames() === 0)
      return;
    this.isPlaying.set(true);
    this.restartTimer();
  }
  pause() {
    this.isPlaying.set(false);
    this.stopTimer();
  }
  stepForward() {
    this.pause();
    this.currentIndex.update((i) => Math.min(i + 1, this.totalFrames() - 1));
  }
  stepBackward() {
    this.pause();
    this.currentIndex.update((i) => Math.max(i - 1, 0));
  }
  onScrub(index) {
    this.currentIndex.set(index);
  }
  onSpeedChange(fps) {
    this.speed.set(fps);
    if (this.isPlaying()) {
      this.restartTimer();
    }
  }
  restartTimer() {
    this.stopTimer();
    const interval = 1e3 / this.speed();
    this.timer = setInterval(() => {
      const next = this.currentIndex() + 1;
      if (next >= this.totalFrames()) {
        this.currentIndex.set(0);
      } else {
        this.currentIndex.set(next);
      }
    }, interval);
  }
  stopTimer() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
  static {
    this.US_MASK = [
      "000000000000000000000000000000",
      "000001111111111111111111110000",
      "000111111111111111111111111100",
      "011111111111111111111111111110",
      "111111111111111111111111111111",
      "111111111111111111111111111110",
      "011111111111111111111111111110",
      "001111111111111111111111111100",
      "000111111111111111111111111000",
      "000011111111111111111111110000",
      "000001111111111111111110000000",
      "000000111111111111111100000000",
      "000000011111111100111110000000",
      "000000000111110000001110000000",
      "000000000011000000000110000000"
    ];
  }
  buildMockFrames(range, mode) {
    const days = this.daySpan(range);
    const mask = _VisualizationComponent.US_MASK;
    const rows = mask.length;
    const cols = mask[0].length;
    const frames = [];
    for (let d = 0; d < days; d++) {
      const grid = new Array(rows * cols).fill(null);
      const confidence = new Array(rows * cols).fill(0);
      const front = d / Math.max(1, days - 1) * cols;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const idx = r * cols + c;
          if (mask[r][c] !== "1")
            continue;
          const yNorm = r / rows;
          const xNorm = c / cols;
          const wave = Math.sin((xNorm * 3 + d * 0.4) * Math.PI) * 6 + Math.cos((yNorm * 2 + d * 0.25) * Math.PI) * 5;
          let value;
          if (mode === "absolute") {
            const base = 26 + yNorm * 52;
            const frontWarmth = Math.max(0, 10 - Math.abs(c - front)) * 1.4;
            value = base + wave + frontWarmth;
          } else {
            const band = (c - front) / cols;
            value = band * 26 + wave * 0.9;
          }
          const edge = this.edgeProximity(mask, r, c);
          const sparsePocket = r > 9 && r < 13 && c > 6 && c < 11 && d % 3 === 0;
          let conf = 0.55 + edge * 0.45;
          if (sparsePocket)
            conf = 0.3;
          confidence[idx] = Math.min(1, conf);
          grid[idx] = Math.round(value * 10) / 10;
        }
      }
      frames.push({
        date: this.addDaysIso(range.start, d),
        rows,
        cols,
        grid,
        confidence
      });
    }
    return frames;
  }
  /** 0 at the mask edge, →1 deep in the interior (4-neighbour land count). */
  edgeProximity(mask, r, c) {
    let land = 0;
    const offs = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1]
    ];
    for (const [dr, dc] of offs) {
      const rr = r + dr;
      const cc = c + dc;
      if (rr >= 0 && rr < mask.length && cc >= 0 && cc < mask[0].length && mask[rr][cc] === "1") {
        land++;
      }
    }
    return land / offs.length;
  }
  // --- date helpers --------------------------------------------------------
  defaultRange() {
    const end = /* @__PURE__ */ new Date();
    end.setDate(end.getDate() - 14);
    const start = new Date(end);
    start.setDate(start.getDate() - 13);
    return { start: this.toIso(start), end: this.toIso(end) };
  }
  daySpan(range) {
    const diff = (Date.parse(range.end) - Date.parse(range.start)) / 864e5;
    return Math.max(1, Math.round(diff) + 1);
  }
  addDaysIso(iso, days) {
    const d = /* @__PURE__ */ new Date(iso + "T00:00:00");
    d.setDate(d.getDate() + days);
    return this.toIso(d);
  }
  toIso(d) {
    return d.toISOString().slice(0, 10);
  }
  formatDate(iso) {
    const d = /* @__PURE__ */ new Date(iso + "T00:00:00");
    return d.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
  static {
    this.\u0275fac = function VisualizationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisualizationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisualizationComponent, selectors: [["app-visualization"]], decls: 33, vars: 7, consts: [[1, "topbar"], [1, "brand"], ["aria-hidden", "true", 1, "brand-mark"], [1, "brand-text"], ["routerLink", "/admin/login", "data-testid", "admin-link", 1, "admin-link"], ["data-testid", "visualization-page", 1, "viz"], [1, "stage"], [1, "stage-head"], ["data-testid", "frame-date", 1, "date-display"], [1, "date-kicker"], [1, "date-value"], [3, "modeChange", "mode"], [1, "canvas-area"], [3, "frame", "mode"], ["data-testid", "no-data-state", 1, "overlay"], ["data-testid", "error-state", 1, "overlay"], [3, "isPlaying", "currentIndex", "totalFrames", "speed"], [1, "sidebar"], [1, "panel"], [1, "panel-title"], [3, "rangeApply", "start", "end"], [3, "mode"], ["aria-hidden", "true", 1, "overlay-icon"], [1, "overlay-title"], [1, "overlay-sub"], [3, "playToggle", "stepForward", "stepBackward", "scrub", "speedChange", "isPlaying", "currentIndex", "totalFrames", "speed"]], template: function VisualizationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "div", 1);
        \u0275\u0275element(2, "span", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "strong");
        \u0275\u0275text(5, "US Temperature Anomaly");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span");
        \u0275\u0275text(7, "Daily GHCN observations \xB7 contiguous United States");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "a", 4);
        \u0275\u0275text(9, "Admin");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "main", 5)(11, "section", 6)(12, "div", 7)(13, "div", 8)(14, "span", 9);
        \u0275\u0275text(15, "Showing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span", 10);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "app-mode-toggle", 11);
        \u0275\u0275listener("modeChange", function VisualizationComponent_Template_app_mode_toggle_modeChange_18_listener($event) {
          return ctx.onModeChange($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 12);
        \u0275\u0275template(20, VisualizationComponent_Conditional_20_Template, 1, 2, "app-heatmap-canvas", 13)(21, VisualizationComponent_Conditional_21_Template, 7, 0, "div", 14)(22, VisualizationComponent_Conditional_22_Template, 3, 0, "div", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275template(23, VisualizationComponent_Conditional_23_Template, 1, 4, "app-playback-controls", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "aside", 17)(25, "div", 18)(26, "h2", 19);
        \u0275\u0275text(27, "Date range");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "app-date-range-picker", 20);
        \u0275\u0275listener("rangeApply", function VisualizationComponent_Template_app_date_range_picker_rangeApply_28_listener($event) {
          return ctx.onRangeApply($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 18)(30, "h2", 19);
        \u0275\u0275text(31, "Scale");
        \u0275\u0275elementEnd();
        \u0275\u0275element(32, "app-legend", 21);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275textInterpolate(ctx.currentDateLabel());
        \u0275\u0275advance();
        \u0275\u0275property("mode", ctx.mode());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.state() === "ready" ? 20 : ctx.state() === "no-data" ? 21 : 22);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.state() === "ready" ? 23 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("start", ctx.range().start)("end", ctx.range().end);
        \u0275\u0275advance(4);
        \u0275\u0275property("mode", ctx.mode());
      }
    }, dependencies: [
      RouterLink,
      HeatmapCanvasComponent,
      LegendComponent,
      ModeToggleComponent,
      PlaybackControlsComponent,
      DateRangePickerComponent
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100svh;\n  min-height: 100vh;\n}\n.topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  height: var(--header-h);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 var(--space-5);\n  background: var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: var(--radius-sm);\n  background:\n    linear-gradient(\n      135deg,\n      var(--temp-c1),\n      var(--temp-c4),\n      var(--temp-c6));\n  flex: none;\n}\n.brand-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.brand-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.brand-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--color-text-muted);\n}\n.admin-link[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--color-primary);\n  padding: 8px 14px;\n  min-height: 40px;\n  display: inline-flex;\n  align-items: center;\n  border-radius: var(--radius-sm);\n}\n.admin-link[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary-soft);\n}\n.viz[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 340px;\n  gap: var(--space-5);\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: var(--space-5);\n}\n.stage[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n  min-width: 0;\n}\n.stage-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-3);\n  flex-wrap: wrap;\n}\n.date-display[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.date-kicker[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--color-text-faint);\n}\n.date-value[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n.canvas-area[_ngcontent-%COMP%] {\n  position: relative;\n}\n.overlay[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 16 / 10;\n  background: var(--color-canvas-bg);\n  border-radius: var(--radius);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  gap: var(--space-2);\n  padding: var(--space-5);\n}\n.overlay-icon[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  color: var(--color-text-on-dark-muted);\n}\n.overlay-title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-text-on-dark);\n  font-size: 1.05rem;\n  font-weight: 600;\n}\n.overlay-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-text-on-dark-muted);\n  font-size: 0.85rem;\n  max-width: 38ch;\n}\n.sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n}\n.panel[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  padding: var(--space-4);\n  box-shadow: var(--shadow-sm);\n}\n.panel-title[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-3);\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--color-text-muted);\n}\n@media (max-width: 900px) {\n  .viz[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: var(--space-4);\n    gap: var(--space-4);\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    order: 2;\n  }\n  .topbar[_ngcontent-%COMP%] {\n    padding: 0 var(--space-4);\n  }\n}\n/*# sourceMappingURL=visualization.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisualizationComponent, [{
    type: Component,
    args: [{ selector: "app-visualization", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [
      RouterLink,
      HeatmapCanvasComponent,
      LegendComponent,
      ModeToggleComponent,
      PlaybackControlsComponent,
      DateRangePickerComponent
    ], template: `<header class="topbar">
  <div class="brand">
    <span class="brand-mark" aria-hidden="true"></span>
    <div class="brand-text">
      <strong>US Temperature Anomaly</strong>
      <span>Daily GHCN observations \xB7 contiguous United States</span>
    </div>
  </div>
  <a class="admin-link" routerLink="/admin/login" data-testid="admin-link">Admin</a>
</header>

<main class="viz" data-testid="visualization-page">
  <section class="stage">
    <div class="stage-head">
      <div class="date-display" data-testid="frame-date">
        <span class="date-kicker">Showing</span>
        <span class="date-value">{{ currentDateLabel() }}</span>
      </div>
      <app-mode-toggle [mode]="mode()" (modeChange)="onModeChange($event)" />
    </div>

    <div class="canvas-area">
      @if (state() === 'ready') {
        <app-heatmap-canvas [frame]="currentFrame()" [mode]="mode()" />
      } @else if (state() === 'no-data') {
        <div class="overlay" data-testid="no-data-state">
          <div class="overlay-icon" aria-hidden="true">\u25F7</div>
          <p class="overlay-title">No data available for this date range yet</p>
          <p class="overlay-sub">
            Observations for these dates have not been ingested. Try an earlier
            range within the last 5 years.
          </p>
        </div>
      } @else {
        <div class="overlay" data-testid="error-state">
          <p class="overlay-title">Something went wrong loading this animation.</p>
        </div>
      }
    </div>

    @if (state() === 'ready') {
      <app-playback-controls
        [isPlaying]="isPlaying()"
        [currentIndex]="currentIndex()"
        [totalFrames]="totalFrames()"
        [speed]="speed()"
        (playToggle)="togglePlay()"
        (stepForward)="stepForward()"
        (stepBackward)="stepBackward()"
        (scrub)="onScrub($event)"
        (speedChange)="onSpeedChange($event)"
      />
    }
  </section>

  <aside class="sidebar">
    <div class="panel">
      <h2 class="panel-title">Date range</h2>
      <app-date-range-picker
        [start]="range().start"
        [end]="range().end"
        (rangeApply)="onRangeApply($event)"
      />
    </div>

    <div class="panel">
      <h2 class="panel-title">Scale</h2>
      <app-legend [mode]="mode()" />
    </div>
  </aside>
</main>
`, styles: ["/* src/app/visualization/visualization.component.css */\n:host {\n  display: block;\n  min-height: 100svh;\n  min-height: 100vh;\n}\n.topbar {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  height: var(--header-h);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 var(--space-5);\n  background: var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.brand-mark {\n  width: 26px;\n  height: 26px;\n  border-radius: var(--radius-sm);\n  background:\n    linear-gradient(\n      135deg,\n      var(--temp-c1),\n      var(--temp-c4),\n      var(--temp-c6));\n  flex: none;\n}\n.brand-text {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.brand-text strong {\n  font-size: 0.95rem;\n}\n.brand-text span {\n  font-size: 0.72rem;\n  color: var(--color-text-muted);\n}\n.admin-link {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--color-primary);\n  padding: 8px 14px;\n  min-height: 40px;\n  display: inline-flex;\n  align-items: center;\n  border-radius: var(--radius-sm);\n}\n.admin-link:hover {\n  background: var(--color-primary-soft);\n}\n.viz {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 340px;\n  gap: var(--space-5);\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: var(--space-5);\n}\n.stage {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n  min-width: 0;\n}\n.stage-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-3);\n  flex-wrap: wrap;\n}\n.date-display {\n  display: flex;\n  flex-direction: column;\n}\n.date-kicker {\n  font-size: 0.68rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--color-text-faint);\n}\n.date-value {\n  font-size: 1.35rem;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n.canvas-area {\n  position: relative;\n}\n.overlay {\n  width: 100%;\n  aspect-ratio: 16 / 10;\n  background: var(--color-canvas-bg);\n  border-radius: var(--radius);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  gap: var(--space-2);\n  padding: var(--space-5);\n}\n.overlay-icon {\n  font-size: 2.4rem;\n  color: var(--color-text-on-dark-muted);\n}\n.overlay-title {\n  margin: 0;\n  color: var(--color-text-on-dark);\n  font-size: 1.05rem;\n  font-weight: 600;\n}\n.overlay-sub {\n  margin: 0;\n  color: var(--color-text-on-dark-muted);\n  font-size: 0.85rem;\n  max-width: 38ch;\n}\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n}\n.panel {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  padding: var(--space-4);\n  box-shadow: var(--shadow-sm);\n}\n.panel-title {\n  margin: 0 0 var(--space-3);\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--color-text-muted);\n}\n@media (max-width: 900px) {\n  .viz {\n    grid-template-columns: 1fr;\n    padding: var(--space-4);\n    gap: var(--space-4);\n  }\n  .sidebar {\n    order: 2;\n  }\n  .topbar {\n    padding: 0 var(--space-4);\n  }\n}\n/*# sourceMappingURL=visualization.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisualizationComponent, { className: "VisualizationComponent", filePath: "src/app/visualization/visualization.component.ts", lineNumber: 37 });
})();
export {
  VisualizationComponent
};
//# sourceMappingURL=chunk-3ZXUBIEP.js.map
