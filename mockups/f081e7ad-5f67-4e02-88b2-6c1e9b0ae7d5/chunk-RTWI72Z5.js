import {
  DestroyRef,
  RuntimeError,
  assertInInjectionContext,
  assertNotInReactiveContext,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-NK42F6RC.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function toSignal(source, options) {
  ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !options?.manualCleanup;
  requiresCleanup && !options?.injector && assertInInjectionContext(toSignal);
  const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
  let state;
  if (options?.requireSync) {
    state = signal({
      kind: 0
      /* StateKind.NoValue */
    });
  } else {
    state = signal({ kind: 1, value: options?.initialValue });
  }
  const sub = source.subscribe({
    next: (value) => state.set({ kind: 1, value }),
    error: (error) => {
      if (options?.rejectErrors) {
        throw error;
      }
      state.set({ kind: 2, error });
    }
    // Completion of the Observable is meaningless to the signal. Signals don't have a concept of
    // "complete".
  });
  if (ngDevMode && options?.requireSync && state().kind === 0) {
    throw new RuntimeError(601, "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
  }
  cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  return computed(() => {
    const current = state();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new RuntimeError(601, "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  });
}

// src/app/shared/empty-state/empty-state.component.ts
var _c0 = ["*"];
function EmptyStateComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.message);
  }
}
var EmptyStateComponent = class _EmptyStateComponent {
  constructor() {
    this.icon = "\u{1F4ED}";
    this.title = "";
    this.message = "";
  }
  static {
    this.\u0275fac = function EmptyStateComponent_Factory(t) {
      return new (t || _EmptyStateComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmptyStateComponent, selectors: [["app-empty-state"]], inputs: { icon: "icon", title: "title", message: "message" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c0, decls: 7, vars: 3, consts: [[1, "empty"], ["aria-hidden", "true", 1, "empty-icon"], [1, "empty-title"], [1, "empty-message"]], template: function EmptyStateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "h3", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, EmptyStateComponent_Conditional_5_Template, 2, 1, "p", 3);
        \u0275\u0275projection(6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.icon);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance();
        \u0275\u0275conditional(5, ctx.message ? 5 : -1);
      }
    }, styles: ["\n\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: var(--sp-3);\n  text-align: center;\n  padding: var(--sp-8) var(--sp-4);\n  color: var(--color-text-muted);\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 2.75rem;\n  line-height: 1;\n}\n.empty-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  font-weight: 700;\n  color: var(--color-text);\n}\n.empty-message[_ngcontent-%COMP%] {\n  max-width: 34ch;\n  font-size: var(--fs-sm);\n}\n/*# sourceMappingURL=empty-state.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmptyStateComponent, { className: "EmptyStateComponent", filePath: "src/app/shared/empty-state/empty-state.component.ts", lineNumber: 10 });
})();

export {
  toSignal,
  EmptyStateComponent
};
//# sourceMappingURL=chunk-RTWI72Z5.js.map
