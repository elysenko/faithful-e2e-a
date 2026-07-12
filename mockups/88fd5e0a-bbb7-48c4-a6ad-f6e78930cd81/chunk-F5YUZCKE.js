import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-HZTH2ON3.js";

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
  // ---- Events (public reads) ----
  listEvents(q, category, upcoming) {
    let params = new HttpParams();
    if (q)
      params = params.set("q", q);
    if (category)
      params = params.set("category", category);
    if (upcoming)
      params = params.set("upcoming", "true");
    return this.http.get(`${this.base}/events`, { params });
  }
  getEvent(id) {
    return this.http.get(`${this.base}/events/${id}`);
  }
  createEvent(body) {
    return this.http.post(`${this.base}/events`, body);
  }
  updateEvent(id, body) {
    return this.http.patch(`${this.base}/events/${id}`, body);
  }
  deleteEvent(id) {
    return this.http.delete(`${this.base}/events/${id}`);
  }
  // ---- Venues (public reads, organizer writes) ----
  listVenues() {
    return this.http.get(`${this.base}/venues`);
  }
  getVenue(id) {
    return this.http.get(`${this.base}/venues/${id}`);
  }
  createVenue(body) {
    return this.http.post(`${this.base}/venues`, body);
  }
  updateVenue(id, body) {
    return this.http.patch(`${this.base}/venues/${id}`, body);
  }
  deleteVenue(id) {
    return this.http.delete(`${this.base}/venues/${id}`);
  }
  // ---- RSVP (any logged-in user) ----
  rsvp(eventId) {
    return this.http.post(`${this.base}/events/${eventId}/rsvp`, {});
  }
  cancelRsvp(eventId) {
    return this.http.delete(`${this.base}/events/${eventId}/rsvp`);
  }
  myEvents() {
    return this.http.get(`${this.base}/rsvp/mine`);
  }
  // ---- Organizer: attendees + check-in ----
  eventAttendees(eventId) {
    return this.http.get(`${this.base}/events/${eventId}/attendees`);
  }
  toggleCheckin(eventId, userId) {
    return this.http.patch(`${this.base}/events/${eventId}/attendees/${userId}/checkin`, {});
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
//# sourceMappingURL=chunk-F5YUZCKE.js.map
