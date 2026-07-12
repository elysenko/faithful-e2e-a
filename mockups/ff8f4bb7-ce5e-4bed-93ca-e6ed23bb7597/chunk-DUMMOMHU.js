import {
  API_BASE,
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-2VXAXVQ7.js";

// src/app/core/services/product.service.ts
var ProductService = class _ProductService {
  constructor() {
    this.http = inject(HttpClient);
  }
  list(q) {
    const query = q ? `?q=${encodeURIComponent(q)}` : "";
    return this.http.get(`${API_BASE}/products${query}`);
  }
  get(id) {
    return this.http.get(`${API_BASE}/products/${id}`);
  }
  create(input) {
    return this.http.post(`${API_BASE}/products`, input);
  }
  update(id, input) {
    return this.http.patch(`${API_BASE}/products/${id}`, input);
  }
  remove(id) {
    return this.http.delete(`${API_BASE}/products/${id}`);
  }
  static {
    this.\u0275fac = function ProductService_Factory(t) {
      return new (t || _ProductService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductService, factory: _ProductService.\u0275fac, providedIn: "root" });
  }
};

export {
  ProductService
};
//# sourceMappingURL=chunk-DUMMOMHU.js.map
