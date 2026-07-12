import {
  HttpClient,
  environment,
  inject,
  ɵɵdefineInjectable
} from "./chunk-ODOZMLE5.js";

// src/app/core/services/admin-api.service.ts
var AdminApiService = class _AdminApiService {
  constructor() {
    this.http = inject(HttpClient);
    this.apiUrl = environment.apiUrl;
  }
  /** GET /api/admin/users — every member with report counts. */
  users() {
    return this.http.get(`${this.apiUrl}/admin/users`);
  }
  /** POST /api/admin/users/:id/ban — ban + invalidate live session. */
  ban(id) {
    return this.http.post(`${this.apiUrl}/admin/users/${id}/ban`, {});
  }
  /** POST /api/admin/users/:id/unban. */
  unban(id) {
    return this.http.post(`${this.apiUrl}/admin/users/${id}/unban`, {});
  }
  /** GET /api/admin/reports — pending report queue. */
  reports() {
    return this.http.get(`${this.apiUrl}/admin/reports`);
  }
  /** POST /api/admin/reports/:id/reviewed — mark a report resolved. */
  review(id) {
    return this.http.post(`${this.apiUrl}/admin/reports/${id}/reviewed`, {});
  }
  static {
    this.\u0275fac = function AdminApiService_Factory(t) {
      return new (t || _AdminApiService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminApiService, factory: _AdminApiService.\u0275fac, providedIn: "root" });
  }
};

export {
  AdminApiService
};
//# sourceMappingURL=chunk-NNAVLRYJ.js.map
