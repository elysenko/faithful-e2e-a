import {
  API_BASE,
  HttpClient,
  computed,
  inject,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-2VXAXVQ7.js";

// src/app/core/services/cart.service.ts
var CartService = class _CartService {
  constructor() {
    this.http = inject(HttpClient);
    this._cart = signal(null);
    this.cart = this._cart.asReadonly();
    this.itemCount = computed(() => (this._cart()?.items ?? []).reduce((sum, i) => sum + i.quantity, 0));
  }
  load() {
    return this.http.get(`${API_BASE}/cart`).pipe(tap((cart) => this._cart.set(cart)));
  }
  addItem(productId, quantity) {
    return this.http.post(`${API_BASE}/cart/items`, { productId, quantity }).pipe(tap((cart) => this._cart.set(cart)));
  }
  updateItem(itemId, quantity) {
    return this.http.patch(`${API_BASE}/cart/items/${itemId}`, { quantity }).pipe(tap((cart) => this._cart.set(cart)));
  }
  removeItem(itemId) {
    return this.http.delete(`${API_BASE}/cart/items/${itemId}`).pipe(tap((cart) => this._cart.set(cart)));
  }
  clearLocal() {
    this._cart.set(null);
  }
  static {
    this.\u0275fac = function CartService_Factory(t) {
      return new (t || _CartService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CartService, factory: _CartService.\u0275fac, providedIn: "root" });
  }
};

export {
  CartService
};
//# sourceMappingURL=chunk-7KV6SYAR.js.map
