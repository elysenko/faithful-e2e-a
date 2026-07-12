import {
  AuthService,
  Injectable,
  Router,
  TRPC_CLIENT,
  __async,
  __spreadProps,
  __spreadValues,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-UEP77ZUH.js";

// src/app/core/api.service.ts
var ApiService = class _ApiService {
  constructor() {
    this.trpc = inject(TRPC_CLIENT);
    this.router = inject(Router);
    this.auth = inject(AuthService);
  }
  // ---- Accounts -----------------------------------------------------------
  listAccounts() {
    return __async(this, null, function* () {
      const rows = yield this.call(() => this.trpc.account.list.query());
      return rows.map(mapAccount);
    });
  }
  accountDetail(id) {
    return __async(this, null, function* () {
      const row = yield this.call(() => this.trpc.account.byId.query({ id }));
      return {
        account: mapAccount(row),
        contacts: (row.contacts ?? []).map((c) => mapContact(__spreadProps(__spreadValues({}, c), { account: { name: row.name } }))),
        opportunities: (row.opportunities ?? []).map((o) => mapOpportunity(__spreadProps(__spreadValues({}, o), { account: { name: row.name } })))
      };
    });
  }
  createAccount(input) {
    return __async(this, null, function* () {
      const row = yield this.call(() => this.trpc.account.create.mutate(input));
      return mapAccount(row);
    });
  }
  updateAccount(input) {
    return __async(this, null, function* () {
      const row = yield this.call(() => this.trpc.account.update.mutate(input));
      return mapAccount(row);
    });
  }
  // ---- Contacts -----------------------------------------------------------
  listContacts() {
    return __async(this, null, function* () {
      const rows = yield this.call(() => this.trpc.contact.list.query());
      return rows.map(mapContact);
    });
  }
  createContact(input) {
    return __async(this, null, function* () {
      const row = yield this.call(() => this.trpc.contact.create.mutate(input));
      return mapContact(row);
    });
  }
  // ---- Opportunities ------------------------------------------------------
  listOpportunities() {
    return __async(this, null, function* () {
      const rows = yield this.call(() => this.trpc.opportunity.list.query());
      return rows.map(mapOpportunity);
    });
  }
  createOpportunity(input) {
    return __async(this, null, function* () {
      const row = yield this.call(() => this.trpc.opportunity.create.mutate(input));
      return mapOpportunity(row);
    });
  }
  updateOpportunityStage(id, stage) {
    return __async(this, null, function* () {
      const row = yield this.call(() => this.trpc.opportunity.updateStage.mutate({ id, stage }));
      return mapOpportunity(row);
    });
  }
  // ---- Leads --------------------------------------------------------------
  listLeads() {
    return __async(this, null, function* () {
      const rows = yield this.call(() => this.trpc.lead.list.query());
      return rows.map(mapLead);
    });
  }
  createLead(input) {
    return __async(this, null, function* () {
      const row = yield this.call(() => this.trpc.lead.create.mutate(input));
      return mapLead(row);
    });
  }
  // ---- Tasks --------------------------------------------------------------
  listTasks() {
    return __async(this, null, function* () {
      const rows = yield this.call(() => this.trpc.task.list.query());
      return rows.map(mapTask);
    });
  }
  upcomingTasks() {
    return __async(this, null, function* () {
      const rows = yield this.call(() => this.trpc.task.upcoming.query());
      return rows.map(mapTask);
    });
  }
  createTask(input) {
    return __async(this, null, function* () {
      const row = yield this.call(() => this.trpc.task.create.mutate(input));
      return mapTask(row);
    });
  }
  // ---- Users (admin) ------------------------------------------------------
  listUsers() {
    return __async(this, null, function* () {
      const rows = yield this.call(() => this.trpc.users.findAll.query());
      return rows.map(mapUser);
    });
  }
  // ---- Dashboard ----------------------------------------------------------
  dashboardSummary() {
    return __async(this, null, function* () {
      return this.call(() => this.trpc.dashboard.summary.query());
    });
  }
  // ---- Internals ----------------------------------------------------------
  /**
   * Runs a tRPC call and, on an authentication failure (401 / UNAUTHORIZED),
   * clears the session and redirects to /login — the app-wide auth interceptor.
   */
  call(fn) {
    return __async(this, null, function* () {
      try {
        return yield fn();
      } catch (err) {
        if (isUnauthorized(err)) {
          this.auth.clearSession();
          void this.router.navigate(["/login"]);
        }
        throw err;
      }
    });
  }
  static {
    this.\u0275fac = function ApiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ApiService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
function mapAccount(row) {
  return {
    id: row.id,
    name: row.name,
    industry: row.industry ?? ""
  };
}
function mapContact(row) {
  return {
    id: row.id,
    name: row.name,
    email: row.email ?? "",
    phone: row.phone ?? "",
    accountId: row.accountId,
    accountName: row.account?.name ?? "Unassigned"
  };
}
function mapOpportunity(row) {
  return {
    id: row.id,
    name: row.name,
    amount: row.amount,
    stage: row.stage,
    accountId: row.accountId,
    accountName: row.account?.name ?? "Unassigned"
  };
}
function mapLead(row) {
  return {
    id: row.id,
    name: row.name,
    company: "",
    email: row.email ?? "",
    status: row.status
  };
}
function mapTask(row) {
  return {
    id: row.id,
    title: row.title,
    dueDate: String(row.dueDate).slice(0, 10),
    status: row.done ? "Completed" : "Open",
    relatedTo: ""
  };
}
function mapUser(row) {
  return {
    id: row.id,
    name: row.name?.trim() || row.email.split("@")[0],
    email: row.email,
    role: row.role
  };
}
function isUnauthorized(err) {
  const e = err;
  const code = e?.data?.code ?? e?.shape?.data?.code;
  const status = e?.data?.httpStatus ?? e?.shape?.data?.httpStatus;
  return code === "UNAUTHORIZED" || status === 401;
}
function errorMessage(err, fallback = "Something went wrong.") {
  const e = err;
  return e?.message || fallback;
}

export {
  ApiService,
  errorMessage
};
//# sourceMappingURL=chunk-YJSS5FSF.js.map
