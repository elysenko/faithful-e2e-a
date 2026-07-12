import {
  API_BASE,
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-2VXAXVQ7.js";

// src/app/core/services/order.service.ts
var OrderService = class _OrderService {
  constructor() {
    this.http = inject(HttpClient);
  }
  checkout(input) {
    return this.http.post(`${API_BASE}/orders`, input);
  }
  listMine() {
    return this.http.get(`${API_BASE}/orders`);
  }
  get(id) {
    return this.http.get(`${API_BASE}/orders/${id}`);
  }
  listAll() {
    return this.http.get(`${API_BASE}/orders/admin/all`);
  }
  advanceStatus(id, status) {
    return this.http.patch(`${API_BASE}/orders/${id}/status`, { status });
  }
  static {
    this.\u0275fac = function OrderService_Factory(t) {
      return new (t || _OrderService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderService, factory: _OrderService.\u0275fac, providedIn: "root" });
  }
};

export {
  OrderService
};
//# sourceMappingURL=chunk-27DN5E6I.js.map
