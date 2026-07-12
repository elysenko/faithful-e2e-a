import {
  environment
} from "./chunk-YUSCFUEV.js";
import {
  HttpClient,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-RUEYC2SA.js";

// src/app/core/services/cart.service.ts
var CartService = class _CartService {
  constructor(http) {
    this.http = http;
    this.base = `${environment.apiUrl}/cart`;
    this.count = signal(2);
  }
  getCart() {
    return this.http.get(this.base);
  }
  upsertItem(productId, qty) {
    return this.http.post(`${this.base}/items`, { productId, qty });
  }
  updateItem(productId, qty) {
    return this.http.patch(`${this.base}/items/${productId}`, { qty });
  }
  removeItem(productId) {
    return this.http.delete(`${this.base}/items/${productId}`);
  }
  static {
    this.\u0275fac = function CartService_Factory(t) {
      return new (t || _CartService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CartService, factory: _CartService.\u0275fac, providedIn: "root" });
  }
};

export {
  CartService
};
//# sourceMappingURL=chunk-VWLYAYX2.js.map
