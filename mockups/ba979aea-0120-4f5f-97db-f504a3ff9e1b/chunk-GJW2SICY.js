import {
  ɵɵdefinePipe
} from "./chunk-RUEYC2SA.js";

// src/app/core/pipes/money.pipe.ts
var MoneyPipe = class _MoneyPipe {
  transform(cents) {
    const value = (cents ?? 0) / 100;
    return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
  }
  static {
    this.\u0275fac = function MoneyPipe_Factory(t) {
      return new (t || _MoneyPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "money", type: _MoneyPipe, pure: true, standalone: true });
  }
};

export {
  MoneyPipe
};
//# sourceMappingURL=chunk-GJW2SICY.js.map
