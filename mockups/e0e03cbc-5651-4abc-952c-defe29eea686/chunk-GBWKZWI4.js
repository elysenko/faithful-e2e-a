import {
  ɵɵdefinePipe
} from "./chunk-5S2USPPB.js";

// src/app/shared/cents.pipe.ts
var CentsPipe = class _CentsPipe {
  transform(cents) {
    const v = (cents ?? 0) / 100;
    return v.toLocaleString("en-US", { style: "currency", currency: "USD" });
  }
  static {
    this.\u0275fac = function CentsPipe_Factory(t) {
      return new (t || _CentsPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "cents", type: _CentsPipe, pure: true, standalone: true });
  }
};

export {
  CentsPipe
};
//# sourceMappingURL=chunk-GBWKZWI4.js.map
