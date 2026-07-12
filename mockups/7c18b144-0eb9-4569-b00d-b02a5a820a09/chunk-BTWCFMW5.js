import {
  signal,
  ɵɵdefineInjectable
} from "./chunk-UGB4PC52.js";

// src/app/core/services/toast.service.ts
var ToastService = class _ToastService {
  constructor() {
    this.seq = 1;
    this.toasts = signal([]);
  }
  push(kind, title, body) {
    const toast = { id: this.seq++, kind, title, body };
    this.toasts.update((list) => [...list, toast]);
  }
  dismiss(id) {
    this.toasts.update((list) => list.filter((t) => t.id !== id));
  }
  static {
    this.\u0275fac = function ToastService_Factory(t) {
      return new (t || _ToastService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
  }
};

export {
  ToastService
};
//# sourceMappingURL=chunk-BTWCFMW5.js.map
