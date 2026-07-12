import {
  HttpClient,
  environment,
  inject,
  ɵɵdefineInjectable
} from "./chunk-ODOZMLE5.js";

// src/app/core/services/match.service.ts
var MatchService = class _MatchService {
  constructor() {
    this.http = inject(HttpClient);
    this.apiUrl = environment.apiUrl;
  }
  /** GET /api/matches — matches for the authenticated user. */
  list() {
    return this.http.get(`${this.apiUrl}/matches`);
  }
  /** GET /api/matches/:id/messages — full thread, oldest first. */
  messages(matchId) {
    return this.http.get(`${this.apiUrl}/matches/${matchId}/messages`);
  }
  /** POST /api/matches/:id/messages — persist a message; response has `mine: true`. */
  send(matchId, body) {
    return this.http.post(`${this.apiUrl}/matches/${matchId}/messages`, { body });
  }
  static {
    this.\u0275fac = function MatchService_Factory(t) {
      return new (t || _MatchService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MatchService, factory: _MatchService.\u0275fac, providedIn: "root" });
  }
};

export {
  MatchService
};
//# sourceMappingURL=chunk-BZQMVLES.js.map
