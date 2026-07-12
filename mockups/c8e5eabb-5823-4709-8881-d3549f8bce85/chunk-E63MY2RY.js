import {
  signal,
  ɵɵdefineInjectable
} from "./chunk-A62IECG2.js";

// src/app/data/seed.service.ts
var SeedService = class _SeedService {
  constructor() {
    this.accounts = signal([
      { id: "acc-qes", name: "QES \u2014 Quality Electrical Solutions", type: "end-customer", industry: "Data Center", region: "Mountain West", primaryContactId: "con-facemyer", backlogValue: 42e5, ytdRevenue: 785e4, openQuotes: 3, healthScore: 82, healthWhy: "Frequent two-way email, three active contacts, on-time payments; slight dip from open RMA.", connectionLevel: "strong", singleThreadRisk: false, channel: "ABB \u2192 Anixter \u2192 QES", logoColor: "#1d4266" },
      { id: "acc-ie", name: "IE \u2014 Industrial Enterprises", type: "end-customer", industry: "Utility / Substation", region: "Southwest", primaryContactId: "con-vasquez", backlogValue: 203e5, ytdRevenue: 124e5, openQuotes: 2, healthScore: 74, healthWhy: "12-PO bus stack backlog rolling steadily; single active thread creates continuity risk.", connectionLevel: "developing", singleThreadRisk: true, channel: "ABB \u2192 Anixter \u2192 IE", logoColor: "#2b8a6f" },
      { id: "acc-oshkosh", name: "Oshkosh Corporation", type: "end-customer", industry: "Manufacturing", region: "Midwest", primaryContactId: "con-ahern", backlogValue: 165e4, ytdRevenue: 332e4, openQuotes: 4, healthScore: 68, healthWhy: "Steady quoting cadence; response latency increased over last 30 days.", connectionLevel: "developing", singleThreadRisk: false, channel: "ABB \u2192 Anixter \u2192 Oshkosh", logoColor: "#b7791f" },
      { id: "acc-torus", name: "Torus Systems", type: "end-customer", industry: "Renewables / Storage", region: "West", primaryContactId: "con-collett", backlogValue: 89e4, ytdRevenue: 145e4, openQuotes: 1, healthScore: 55, healthWhy: "Sparse contact; last meaningful touch 41 days ago. Reconnect recommended.", connectionLevel: "at-risk", singleThreadRisk: true, channel: "ABB \u2192 Anixter \u2192 Torus", logoColor: "#6b46a8" },
      { id: "acc-novva", name: "NOVVA Data Centers", type: "end-customer", industry: "Data Center", region: "Mountain West", primaryContactId: "con-weber", backlogValue: 0, ytdRevenue: 21e5, openQuotes: 2, healthScore: 79, healthWhy: "ARES forecast active across five breaker families; strong specifier alignment.", connectionLevel: "strong", singleThreadRisk: false, channel: "ABB \u2192 Anixter \u2192 NOVVA", logoColor: "#c0392b" },
      { id: "acc-abb", name: "ABB (Manufacturer)", type: "manufacturer", industry: "OEM", region: "Global", primaryContactId: "con-weber", backlogValue: 0, ytdRevenue: 0, openQuotes: 0, healthScore: 90, healthWhy: "Manufacturer partner \u2014 warranty and lead-time channel.", connectionLevel: "strong", singleThreadRisk: false, channel: "Manufacturer", logoColor: "#d81f2a" },
      { id: "acc-anixter", name: "Anixter (Distributor)", type: "distributor", industry: "Distribution", region: "National", primaryContactId: "con-vasquez", backlogValue: 0, ytdRevenue: 0, openQuotes: 0, healthScore: 85, healthWhy: "Distribution channel partner for all end-customer flows.", connectionLevel: "strong", singleThreadRisk: false, channel: "Distributor", logoColor: "#16344f" }
    ]);
    this.contacts = signal([
      { id: "con-facemyer", accountId: "acc-qes", name: "Stephanie Facemyer", title: "Director of Facilities", email: "s.facemyer@qes.com", phone: "(801) 555-0142", role: "end-customer", relationshipStrength: "strong", lastTouch: "2026-07-06", isChampion: true, hospitalityNotes: ["Prefers early-morning calls", "Daughter starting at Utah State this fall", "Coffee, not lunch meetings"], occasions: [{ label: "Work anniversary (8 yrs)", date: "2026-09-01" }] },
      { id: "con-vasquez", accountId: "acc-ie", name: "Ricardo Vasquez", title: "Senior Project Manager", email: "r.vasquez@ie-corp.com", phone: "(602) 555-0188", role: "end-customer", relationshipStrength: "strong", lastTouch: "2026-07-08", isChampion: true, hospitalityNotes: ["Follows Diamondbacks", "Only decision contact on bus stack \u2014 build bench"], occasions: [{ label: "Birthday", date: "2026-08-14" }] },
      { id: "con-ahern", accountId: "acc-oshkosh", name: "Kartika Ahern", title: "Procurement Lead", email: "k.ahern@oshkosh.com", phone: "(920) 555-0176", role: "end-customer", relationshipStrength: "developing", lastTouch: "2026-06-28", isChampion: false, hospitalityNotes: ["New in role since Q1", "Detail-oriented, wants written summaries"], occasions: [] },
      { id: "con-collett", accountId: "acc-torus", name: "Carlton Collett", title: "VP Engineering", email: "c.collett@torus.io", phone: "(415) 555-0119", role: "end-customer", relationshipStrength: "new", lastTouch: "2026-05-30", isChampion: false, hospitalityNotes: ["Reconnect overdue \u2014 41 days", "Interested in storage switchgear roadmap"], occasions: [] },
      { id: "con-weber", accountId: "acc-novva", name: "Erich Weber", title: "Electrical Design Engineer", email: "e.weber@novva.com", phone: "(801) 555-0203", role: "specifier", relationshipStrength: "strong", lastTouch: "2026-07-07", isChampion: true, hospitalityNotes: ["Specifier \u2014 protect the design-in", "Enjoys technical deep-dives"], occasions: [{ label: "PE license renewal", date: "2026-10-15" }] }
    ]);
    this.projects = signal([
      { id: "prj-volition", name: "Volition Canyon", accountId: "acc-qes", stage: "awarded", value: 42e5, margin: 21, ownerName: "You", targetClose: "2026-08-15", documents: 14, scope: "Tmax XT & Emax 2 main-tie-main lineup for two data halls, SafeGear MV feeders." },
      { id: "prj-ie-bus", name: "IE Bus Stack (12 PO Program)", accountId: "acc-ie", stage: "negotiation", value: 203e5, margin: 18, ownerName: "You", targetClose: "2026-12-01", documents: 31, scope: "12 sequential POs, substation bus stack, VD4 vacuum breakers + ADVAC." },
      { id: "prj-novva-ares", name: "NOVVA ARES Expansion", accountId: "acc-novva", stage: "quoting", value: 68e5, margin: 23, ownerName: "You", targetClose: "2027-02-01", documents: 9, scope: "ARES forecast: E6.2 / XT7 / XT4 / E4.2 / XT6 across 2H 2026 delivery windows." },
      { id: "prj-oshkosh-plant", name: "Oshkosh Plant 4 Retrofit", accountId: "acc-oshkosh", stage: "submitted", value: 165e4, margin: 19, ownerName: "You", targetClose: "2026-09-20", documents: 6, scope: "SafeGear retrofit + Tmax XT distribution refresh." }
    ]);
    this.quotes = signal([
      { id: "q-1", number: "Q-2026-0412", projectId: "prj-novva-ares", accountName: "NOVVA Data Centers", status: "submitted", amount: 68e5, createdAt: "2026-07-01", validationIssues: 2 },
      { id: "q-2", number: "Q-2026-0398", projectId: "prj-volition", accountName: "QES", status: "won", amount: 42e5, createdAt: "2026-06-12", validationIssues: 0 },
      { id: "q-3", number: "Q-2026-0421", projectId: "prj-oshkosh-plant", accountName: "Oshkosh Corporation", status: "submitted", amount: 165e4, createdAt: "2026-07-05", validationIssues: 1 },
      { id: "q-4", number: "Q-2026-0355", projectId: "prj-ie-bus", accountName: "IE \u2014 Industrial Enterprises", status: "lost", amount: 19e5, createdAt: "2026-05-20", validationIssues: 0, reasonCode: "Price \u2014 competitor undercut 6%" }
    ]);
    this.lineItems = signal([
      { id: "li-1", quoteId: "q-1", partNumber: "XT6 N 800", description: "Tmax XT6 800A breaker w/ side-mount accessory", qty: 8, unitPrice: 6420, validationStatus: "error", validationNote: "Side-mount accessory X-spacing: 40X specified, requires 42X. Overage flagged." },
      { id: "li-2", quoteId: "q-1", partNumber: "E6.2 4000", description: "Emax 2 E6.2 4000A air circuit breaker", qty: 4, unitPrice: 41200, validationStatus: "ok" },
      { id: "li-3", quoteId: "q-1", partNumber: "ConVac MV", description: "ConVac MV contactor", qty: 6, unitPrice: 8850, validationStatus: "warning", validationNote: "UL listing clarification required for this MV contactor configuration." },
      { id: "li-4", quoteId: "q-3", partNumber: "SafeGear 15kV", description: "SafeGear arc-resistant MV switchgear, UL 891 Annex G", qty: 2, unitPrice: 78400, validationStatus: "warning", validationNote: "UL 891 Annex G listing must be confirmed on submittal." },
      { id: "li-5", quoteId: "q-2", partNumber: "XT4 250", description: "Tmax XT4 250A breaker", qty: 20, unitPrice: 2140, validationStatus: "ok" }
    ]);
    this.validationRules = signal([
      { id: "vr-1", name: "XT6 side-mount accessory X-spacing", family: "Tmax XT", description: "When a side-mount accessory is applied to XT6, spacing of 40X is invalid; minimum 42X required. Flags overage.", severity: "error", active: true, triggers: 3 },
      { id: "vr-2", name: "ConVac MV contactor UL clarification", family: "ConVac", description: "MV contactor configurations require UL listing clarification before submittal.", severity: "warning", active: true, triggers: 5 },
      { id: "vr-3", name: "UL 891 Annex G listing", family: "SafeGear", description: "Arc-resistant switchgear must carry a confirmed UL 891 Annex G listing.", severity: "warning", active: true, triggers: 2 }
    ]);
    this.designIns = signal([
      { id: "di-1", projectName: "NOVVA ARES Expansion", accountName: "NOVVA", specifier: "Erich Weber (NOVVA)", stage: "basis-of-design", competingBod: void 0, protectionAlert: false, value: 68e5, breakerFamily: "Emax 2 / Tmax XT" },
      { id: "di-2", projectName: "Cottonwood MOB", accountName: "HCA Healthcare", specifier: "Mercer Engineering", stage: "bidding", competingBod: "Square D specified as equal", protectionAlert: true, value: 245e4, breakerFamily: "Tmax XT" },
      { id: "di-3", projectName: "Point of the Mountain", accountName: "State of Utah", specifier: "VBFA", stage: "specified", competingBod: void 0, protectionAlert: false, value: 39e5, breakerFamily: "SafeGear MV" },
      { id: "di-4", projectName: "Torus Grid Storage Ph2", accountName: "Torus", specifier: "In-house", stage: "identified", competingBod: void 0, protectionAlert: false, value: 12e5, breakerFamily: "VD4 / ADVAC" }
    ]);
    this.orders = signal([
      { id: "o-1", poNumber: "PO-IE-0007", accountName: "IE \u2014 Industrial Enterprises", amount: 172e4, rdd: "2026-08-30", ssd: "2026-09-18", status: "in-production", slippage: true, slippageDays: 19, leadTimeWeeks: 22 },
      { id: "o-2", poNumber: "PO-QES-0031", accountName: "QES", amount: 98e4, rdd: "2026-09-15", ssd: "2026-09-10", status: "confirmed", slippage: false, slippageDays: 0, leadTimeWeeks: 16 },
      { id: "o-3", poNumber: "PO-IE-0008", accountName: "IE \u2014 Industrial Enterprises", amount: 21e5, rdd: "2026-10-01", ssd: "2026-10-01", status: "confirmed", slippage: false, slippageDays: 0, leadTimeWeeks: 24 },
      { id: "o-4", poNumber: "PO-OSH-0012", accountName: "Oshkosh", amount: 43e4, rdd: "2026-08-05", ssd: "2026-08-22", status: "in-production", slippage: true, slippageDays: 17, leadTimeWeeks: 14 },
      { id: "o-5", poNumber: "PO-QES-0028", accountName: "QES", amount: 124e4, rdd: "2026-07-01", ssd: "2026-06-27", status: "shipped", slippage: false, slippageDays: 0, leadTimeWeeks: 18 }
    ]);
    this.warrantyClaims = signal([
      { id: "w-1", claimNumber: "RMA-2026-041", accountName: "QES", product: "Tmax XT4 250A", status: "mfr-review", mfrClaimNumber: "ABB-CLM-88213", openedAt: "2026-06-10", ageDays: 30, slaBreached: false },
      { id: "w-2", claimNumber: "RMA-2026-039", accountName: "Oshkosh", product: "SafeGear feeder", status: "submitted", mfrClaimNumber: void 0, openedAt: "2026-05-22", ageDays: 49, slaBreached: true },
      { id: "w-3", claimNumber: "RMA-2026-044", accountName: "IE", product: "VD4 vacuum breaker", status: "open", mfrClaimNumber: void 0, openedAt: "2026-07-02", ageDays: 8, slaBreached: false }
    ]);
    this.commissions = signal([
      { id: "cm-1", poNumber: "PO-IE-0007", accountName: "IE", bookedAmount: 172e4, rate: 3.5, commissionDue: 60200, paid: 60200, status: "reconciled" },
      { id: "cm-2", poNumber: "PO-QES-0031", accountName: "QES", bookedAmount: 98e4, rate: 4, commissionDue: 39200, paid: 0, status: "pending" },
      { id: "cm-3", poNumber: "PO-IE-0008", accountName: "IE", bookedAmount: 21e5, rate: 3.5, commissionDue: 73500, paid: 4e4, status: "disputed", splitWith: "A. Reyes (30%)" },
      { id: "cm-4", poNumber: "PO-QES-0028", accountName: "QES", bookedAmount: 124e4, rate: 4, commissionDue: 49600, paid: 49600, status: "reconciled" }
    ]);
    this.forecasts = signal([
      { id: "f-1", account: "NOVVA", breakerFamily: "E6.2", window: "2H 2026", units: 12, value: 494400, confidence: 70, scenario: "committed" },
      { id: "f-2", account: "NOVVA", breakerFamily: "XT7", window: "2H 2026", units: 18, value: 288e3, confidence: 60, scenario: "committed" },
      { id: "f-3", account: "NOVVA", breakerFamily: "XT4", window: "2H 2026", units: 40, value: 85600, confidence: 80, scenario: "committed" },
      { id: "f-4", account: "NOVVA", breakerFamily: "E4.2", window: "2H 2026", units: 8, value: 21e4, confidence: 55, scenario: "best-case" },
      { id: "f-5", account: "NOVVA", breakerFamily: "XT6", window: "2H 2026", units: 16, value: 205e3, confidence: 65, scenario: "best-case" }
    ]);
    this.emails = signal([
      { id: "em-1", from: "Ricardo Vasquez", account: "IE", subject: "PO-IE-0007 ship date \u2014 need firm commit", preview: "Hi, leadership is asking about the bus stack timing. Can you confirm we are still tracking to end of August? We have a crane window we cannot lose...", receivedAt: "2026-07-09T14:12:00", tone: "concerned", unread: true, signals: ["Delivery pressure", "Executive visibility", "Schedule dependency"], extractedTasks: ["Confirm PO-IE-0007 ship date with production", "Send Ricardo written schedule commit"] },
      { id: "em-2", from: "Stephanie Facemyer", account: "QES", subject: "Thank you \u2014 Volition Canyon kickoff", preview: "Really appreciated the walkthrough yesterday. The team feels good about the lineup. One question on the SafeGear submittal timing...", receivedAt: "2026-07-08T09:40:00", tone: "positive", unread: true, signals: ["Champion engaged", "Submittal question"], extractedTasks: ["Send SafeGear submittal schedule to Stephanie"] },
      { id: "em-3", from: "Erich Weber", account: "NOVVA", subject: "ARES \u2014 XT6 accessory spacing question", preview: "Reviewing the XT6 layout, want to make sure the side-mount accessory spacing is right before we lock the BOD...", receivedAt: "2026-07-07T16:05:00", tone: "neutral", unread: false, signals: ["Technical validation", "Design-in protection opportunity"], extractedTasks: ["Confirm XT6 42X spacing to Erich", "Attach validation result to reply"] },
      { id: "em-4", from: "Carlton Collett", account: "Torus", subject: "Re: Storage switchgear roadmap", preview: "Been heads-down, sorry for the slow reply. Still interested but timing slipped to next quarter...", receivedAt: "2026-06-30T11:20:00", tone: "neutral", unread: false, signals: ["Reconnect needed", "Timeline slip"], extractedTasks: ["Schedule Q4 reconnect with Carlton"] }
    ]);
    this.documents = signal([
      { id: "doc-1", fileName: "IE_PO_0009_scan.pdf", type: "PO", status: "review", account: "IE", extracted: [
        { field: "PO Number", value: "PO-IE-0009", confidence: 0.98 },
        { field: "Part", value: "VD4 12kV 1250A", confidence: 0.91 },
        { field: "Qty", value: "6", confidence: 0.95 },
        { field: "Unit Price", value: "$18,400", confidence: 0.88 },
        { field: "RDD", value: "2026-11-15", confidence: 0.82 }
      ] },
      { id: "doc-2", fileName: "QES_spec_rev3.pdf", type: "Spec", status: "extracting", account: "QES", extracted: [] },
      { id: "doc-3", fileName: "Oshkosh_RMA_form.pdf", type: "RMA", status: "queued", account: "Oshkosh", extracted: [] }
    ]);
    this.tasks = signal([
      { id: "t-1", title: "Confirm PO-IE-0007 ship date with production", account: "IE", due: "2026-07-10", priority: "high", bucket: "today", source: "email", recurring: false },
      { id: "t-2", title: "Reconnect with Carlton Collett (41 days)", account: "Torus", due: "2026-07-08", priority: "medium", bucket: "overdue", source: "signal", recurring: false },
      { id: "t-3", title: "Send SafeGear submittal schedule to Stephanie", account: "QES", due: "2026-07-11", priority: "medium", bucket: "today", source: "email", recurring: false },
      { id: "t-4", title: "Weekly backlog aging review", account: "All", due: "2026-07-12", priority: "low", bucket: "week", source: "reminder", recurring: true },
      { id: "t-5", title: "Resolve PO-IE-0008 commission dispute", account: "IE", due: "2026-07-05", priority: "high", bucket: "overdue", source: "manual", recurring: false }
    ]);
    this.catalog = signal([
      { id: "cp-1", partNumber: "XT6 N 800", family: "Tmax XT", description: "XT6 800A moulded case breaker", crossRefs: ["Mersen HP15", "TCI KDR"], listPrice: 6420, lastQuoted: 6100 },
      { id: "cp-2", partNumber: "E6.2 4000", family: "Emax 2", description: "E6.2 4000A air circuit breaker", crossRefs: [], listPrice: 41200, lastQuoted: 39800 },
      { id: "cp-3", partNumber: "VD4 12kV", family: "VD4", description: "VD4 vacuum circuit breaker 12kV", crossRefs: ["Mersen A055"], listPrice: 18400, lastQuoted: 17900 },
      { id: "cp-4", partNumber: "ADVAC", family: "ADVAC", description: "ADVAC medium-voltage vacuum breaker", crossRefs: [], listPrice: 22600, lastQuoted: 21500 },
      { id: "cp-5", partNumber: "SafeGear 15kV", family: "SafeGear", description: "Arc-resistant MV switchgear", crossRefs: ["TCI HGA"], listPrice: 78400, lastQuoted: 74e3 }
    ]);
    this.portalRequests = signal([
      { id: "pr-1", kind: "pricing", title: "Budgetary pricing \u2014 4x E6.2 4000A", status: "quoted", createdAt: "2026-07-02", detail: "Requested budgetary for data hall B expansion." },
      { id: "pr-2", kind: "project", title: "New project \u2014 Hall C switchgear", status: "in-review", createdAt: "2026-07-06", detail: "Scope: MV lineup for third data hall, target energization Q2 2027." },
      { id: "pr-3", kind: "pricing", title: "Pricing refresh \u2014 SafeGear feeders", status: "submitted", createdAt: "2026-07-09", detail: "Refresh of Q1 pricing for 2 feeder sections." }
    ]);
    this.portalNotifications = signal([
      { id: "pn-1", title: "Order PO-QES-0031 confirmed", body: "Scheduled ship date 2026-09-10, ahead of your requested date.", date: "2026-07-08", read: false },
      { id: "pn-2", title: "Budgetary quote ready", body: "Your pricing request for 4x E6.2 4000A has been quoted.", date: "2026-07-03", read: false },
      { id: "pn-3", title: "New document available", body: "Submittal package rev 3 uploaded to your document library.", date: "2026-06-28", read: true }
    ]);
  }
  // ---- lookup helpers (pure, safe for empty signals) ----
  accountById(id) {
    return this.accounts().find((a) => a.id === id);
  }
  contactById(id) {
    return this.contacts().find((c) => c.id === id);
  }
  projectById(id) {
    return this.projects().find((p) => p.id === id);
  }
  contactsForAccount(id) {
    return this.contacts().filter((c) => c.accountId === id);
  }
  projectsForAccount(id) {
    return this.projects().filter((p) => p.accountId === id);
  }
  quoteById(id) {
    return this.quotes().find((q) => q.id === id);
  }
  lineItemsForQuote(id) {
    return this.lineItems().filter((l) => l.quoteId === id);
  }
  orderById(id) {
    return this.orders().find((o) => o.id === id);
  }
  emailById(id) {
    return this.emails().find((e) => e.id === id);
  }
  static {
    this.\u0275fac = function SeedService_Factory(t) {
      return new (t || _SeedService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SeedService, factory: _SeedService.\u0275fac, providedIn: "root" });
  }
};

export {
  SeedService
};
//# sourceMappingURL=chunk-E63MY2RY.js.map
