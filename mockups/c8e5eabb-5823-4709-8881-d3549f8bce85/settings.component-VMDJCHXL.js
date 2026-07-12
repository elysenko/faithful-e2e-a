import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-FO3CHQ4J.js";
import {
  SeedService
} from "./chunk-E63MY2RY.js";
import {
  ActivatedRoute,
  CommonModule,
  Router,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-A62IECG2.js";

// src/app/features/settings/settings.component.ts
var _forTrack0 = ($index, $item) => $item.email;
var _forTrack1 = ($index, $item) => $item.band;
var _forTrack2 = ($index, $item) => $item.key;
function SettingsComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function SettingsComponent_For_8_Template_button_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setTab(t_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeTab() === t_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2);
  }
}
function SettingsComponent_Conditional_9_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span", 16);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 14)(12, "button", 17);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_9_For_22_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.noop());
    });
    \u0275\u0275text(13, "Edit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r6.email);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.roleBadge(u_r6.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r6.role);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.statusBadge(u_r6.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r6.status);
  }
}
function SettingsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 9)(2, "h2", 10);
    \u0275\u0275text(3, "Team members");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 11);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.noop());
    });
    \u0275\u0275text(5, "Add user");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 12)(7, "table", 13)(8, "thead")(9, "tr")(10, "th");
    \u0275\u0275text(11, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 14);
    \u0275\u0275text(19, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, SettingsComponent_Conditional_9_For_22_Template, 14, 8, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r2.users);
  }
}
function SettingsComponent_Conditional_10_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r8.band);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r8.threshold);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r8.rate);
  }
}
function SettingsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 18)(2, "h2", 10);
    \u0275\u0275text(3, "Commission structure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19)(5, "label");
    \u0275\u0275text(6, "Default commission rate (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 20);
    \u0275\u0275listener("ngModelChange", function SettingsComponent_Conditional_10_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.defaultRate.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 19)(9, "label");
    \u0275\u0275text(10, "Enable split commissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 21);
    \u0275\u0275listener("ngModelChange", function SettingsComponent_Conditional_10_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.splitEnabled.set($event === "yes"));
    });
    \u0275\u0275elementStart(12, "option", 22);
    \u0275\u0275text(13, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 23);
    \u0275\u0275text(15, "No");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 19)(17, "label");
    \u0275\u0275text(18, "Default split share (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 24);
    \u0275\u0275listener("ngModelChange", function SettingsComponent_Conditional_10_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.defaultSplit.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 11);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_10_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.noop());
    });
    \u0275\u0275text(21, "Save structure");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 6)(23, "div", 25)(24, "h2", 10);
    \u0275\u0275text(25, "Rate tiers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 12)(27, "table", 13)(28, "thead")(29, "tr")(30, "th");
    \u0275\u0275text(31, "Band");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33, "Threshold");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th", 14);
    \u0275\u0275text(35, "Rate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "tbody");
    \u0275\u0275repeaterCreate(37, SettingsComponent_Conditional_10_For_38_Template, 7, 3, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r2.defaultRate());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r2.splitEnabled() ? "yes" : "no");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngModel", ctx_r2.defaultSplit())("disabled", !ctx_r2.splitEnabled());
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r2.tiers);
  }
}
function SettingsComponent_Conditional_11_For_11_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r9);
  }
}
function SettingsComponent_Conditional_11_For_11_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r10);
  }
}
function SettingsComponent_Conditional_11_For_11_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 32);
    \u0275\u0275repeaterCreate(1, SettingsComponent_Conditional_11_For_11_Conditional_13_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(r_r11.cannotSee);
  }
}
function SettingsComponent_Conditional_11_For_11_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1, "Full visibility.");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_Conditional_11_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 29)(2, "h3", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 30);
    \u0275\u0275text(7, "Can see");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ul", 31);
    \u0275\u0275repeaterCreate(9, SettingsComponent_Conditional_11_For_11_For_10_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 30);
    \u0275\u0275text(12, "Cannot see");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, SettingsComponent_Conditional_11_For_11_Conditional_13_Template, 3, 0, "ul", 32)(14, SettingsComponent_Conditional_11_For_11_Conditional_14_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r11.label);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.roleBadge(r_r11.key));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r11.key);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(r_r11.canSee);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(13, r_r11.cannotSee.length > 0 ? 13 : 14);
  }
}
function SettingsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span");
    \u0275\u0275text(2, "Margins, pricing and commissions are hidden from ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "customer");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " and ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7, "sales-support");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " roles, matching the app's RBAC.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 28);
    \u0275\u0275repeaterCreate(10, SettingsComponent_Conditional_11_For_11_Template, 15, 5, "div", 18, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r2.roles);
  }
}
var SettingsComponent = class _SettingsComponent {
  statusBadge(status) {
    switch (status) {
      case "active":
        return "badge-success";
      case "invited":
        return "badge-warning";
      case "disabled":
        return "badge-neutral";
      default:
        return "badge-neutral";
    }
  }
  roleBadge(role) {
    switch (role) {
      case "admin":
        return "badge-info";
      case "sales":
        return "badge-success";
      case "sales-support":
        return "badge-warning";
      case "customer":
        return "badge-neutral";
      default:
        return "badge-neutral";
    }
  }
  setTab(tab) {
    this.router.navigate([], { queryParams: { tab }, queryParamsHandling: "merge" });
  }
  noop() {
  }
  constructor(seed, route, router) {
    this.seed = seed;
    this.route = route;
    this.router = router;
    this.tabs = ["users", "commission", "roles"];
    this.activeTab = signal("users");
    this.defaultRate = signal("3.5");
    this.splitEnabled = signal(true);
    this.defaultSplit = signal("30");
    this.users = [
      { name: "You (Territory Manager)", email: "you@nexuspower.com", role: "admin", status: "active" },
      { name: "Alicia Reyes", email: "a.reyes@nexuspower.com", role: "sales", status: "active" },
      { name: "Dev Patel", email: "d.patel@nexuspower.com", role: "sales-support", status: "active" },
      { name: "Morgan Lee", email: "m.lee@nexuspower.com", role: "sales", status: "invited" },
      { name: "QES Portal (Facemyer)", email: "s.facemyer@qes.com", role: "customer", status: "active" }
    ];
    this.tiers = [
      { band: "Tier 1", threshold: "Up to $1M booked", rate: "3.0%" },
      { band: "Tier 2", threshold: "$1M \u2013 $5M booked", rate: "3.5%" },
      { band: "Tier 3", threshold: "$5M \u2013 $15M booked", rate: "4.0%" },
      { band: "Tier 4", threshold: "Over $15M booked", rate: "4.5%" }
    ];
    this.roles = [
      {
        key: "admin",
        label: "Admin",
        canSee: ["All accounts & contacts", "Margins & pricing", "Commissions & splits", "User & role management", "Reports & QBRs"],
        cannotSee: []
      },
      {
        key: "sales",
        label: "Sales",
        canSee: ["Own accounts & pipeline", "Margins & pricing", "Own commissions", "Quotes, orders, forecasts"],
        cannotSee: ["Other reps' commissions", "User & role management"]
      },
      {
        key: "sales-support",
        label: "Sales support",
        canSee: ["Accounts & contacts", "Quotes & orders (operational)", "Documents & tasks"],
        cannotSee: ["Margins", "Pricing detail", "Commissions"]
      },
      {
        key: "customer",
        label: "Customer (portal)",
        canSee: ["Own orders & ship dates", "Own documents", "Own pricing requests"],
        cannotSee: ["Margins", "Internal pricing", "Commissions", "Other accounts"]
      }
    ];
    this.route.queryParamMap.subscribe((q) => {
      const t = q.get("tab");
      this.activeTab.set(t && this.tabs.includes(t) ? t : "users");
    });
  }
  static {
    this.\u0275fac = function SettingsComponent_Factory(t) {
      return new (t || _SettingsComponent)(\u0275\u0275directiveInject(SeedService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 3, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "tabs"], [1, "tab", 3, "active"], [1, "card"], [1, "grid", "comm-grid"], [1, "tab", 3, "click"], [1, "card-pad", "head-row"], [1, "sec-title"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "table-wrap"], [1, "table"], [1, "right"], [1, "mono"], [1, "badge"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "card", "card-pad"], [1, "form-field"], ["type", "text", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", "yes"], ["value", "no"], ["type", "text", 3, "ngModelChange", "ngModel", "disabled"], [1, "card-pad"], [1, "right", "mono"], [1, "alert", "alert-info", "role-note"], [1, "grid", "role-grid"], [1, "head-row"], [1, "role-label"], [1, "role-list", "role-can"], [1, "role-list", "role-cannot"], [1, "muted"]], template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Settings & administration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Nexus Power CRM \xB7 team members, commission structure and role-based access");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275repeaterCreate(7, SettingsComponent_For_8_Template, 2, 3, "button", 5, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, SettingsComponent_Conditional_9_Template, 23, 0, "div", 6)(10, SettingsComponent_Conditional_10_Template, 39, 4, "div", 7)(11, SettingsComponent_Conditional_11_Template, 12, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.tabs);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(9, ctx.activeTab() === "users" ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(10, ctx.activeTab() === "commission" ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(11, ctx.activeTab() === "roles" ? 11 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.head-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--sp-3);\n}\n.sec-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.comm-grid[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n  align-items: start;\n}\n.form-field[_ngcontent-%COMP%] {\n  margin: var(--sp-4) 0;\n}\n.role-note[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-4);\n}\n.role-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n}\n.role-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n  font-weight: 600;\n  margin: var(--sp-4) 0 6px;\n}\n.role-list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: var(--sp-5);\n  font-size: var(--fs-sm);\n}\n.role-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.role-can[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: var(--color-success);\n}\n.role-cannot[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n@media (max-width: 768px) {\n  .comm-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=settings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/features/settings/settings.component.ts", lineNumber: 34 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=settings.component-VMDJCHXL.js.map
