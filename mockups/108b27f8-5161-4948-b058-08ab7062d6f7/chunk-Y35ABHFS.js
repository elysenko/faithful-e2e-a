import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IS4ZVKQ7.js";

// src/app/core/api.service.ts
var ApiService = class _ApiService {
  constructor(http) {
    this.http = http;
    this.base = environment.apiUrl;
  }
  // ---- Users ----
  me() {
    return this.http.get(`${this.base}/users/me`);
  }
  // ---- Products (public reads, admin writes) ----
  listProducts(q) {
    let params = new HttpParams();
    if (q)
      params = params.set("q", q);
    return this.http.get(`${this.base}/products`, { params });
  }
  getProduct(id) {
    return this.http.get(`${this.base}/products/${id}`);
  }
  createProduct(body) {
    return this.http.post(`${this.base}/products`, body);
  }
  updateProduct(id, body) {
    return this.http.patch(`${this.base}/products/${id}`, body);
  }
  deleteProduct(id) {
    return this.http.delete(`${this.base}/products/${id}`);
  }
  // ---- Cart (any logged-in user) ----
  getCart() {
    return this.http.get(`${this.base}/cart`);
  }
  addToCart(productId, qty) {
    return this.http.post(`${this.base}/cart/items`, { productId, qty });
  }
  updateCartItem(productId, qty) {
    return this.http.patch(`${this.base}/cart/items/${productId}`, { qty });
  }
  removeCartItem(productId) {
    return this.http.delete(`${this.base}/cart/items/${productId}`);
  }
  // ---- Orders (checkout + history) ----
  placeOrder(body) {
    return this.http.post(`${this.base}/orders`, body);
  }
  myOrders() {
    return this.http.get(`${this.base}/orders/mine`);
  }
  getOrder(id) {
    return this.http.get(`${this.base}/orders/${id}`);
  }
  allOrders() {
    return this.http.get(`${this.base}/orders`);
  }
  setOrderStatus(id, status) {
    return this.http.patch(`${this.base}/orders/${id}/status`, { status });
  }
  // ---- Admin settings (provisioned service credentials) ----
  getSettings() {
    return this.http.get(`${this.base}/admin/settings`);
  }
  updateSettings(pairs) {
    return this.http.patch(`${this.base}/admin/settings`, pairs);
  }
  static {
    this.\u0275fac = function ApiService_Factory(t) {
      return new (t || _ApiService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
  }
};

export {
  ApiService
};
//# sourceMappingURL=chunk-Y35ABHFS.js.map
