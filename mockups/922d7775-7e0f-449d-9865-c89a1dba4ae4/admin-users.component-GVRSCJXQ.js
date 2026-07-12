import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-C7DKJWEU.js";
import {
  CommonModule,
  DatePipe,
  UpperCasePipe,
  __spreadProps,
  __spreadValues,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-HP7M3I25.js";

// src/app/pages/admin-users/admin-users.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminUsersComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading users\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 6);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function AdminUsersComponent_Conditional_8_For_15_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    \u0275\u0275property("value", r_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r4);
  }
}
function AdminUsersComponent_Conditional_8_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 9)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "select", 13);
    \u0275\u0275listener("ngModelChange", function AdminUsersComponent_Conditional_8_For_15_Template_select_ngModelChange_6_listener($event) {
      const u_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.changeRole(u_r3, $event));
    });
    \u0275\u0275repeaterCreate(7, AdminUsersComponent_Conditional_8_For_15_For_8_Template, 2, 2, "option", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 15)(13, "button", 16);
    \u0275\u0275listener("click", function AdminUsersComponent_Conditional_8_For_15_Template_button_click_13_listener() {
      const u_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.remove(u_r3));
    });
    \u0275\u0275text(14, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r3.name || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", u_r3.role);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.roles);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r3.createdAt ? \u0275\u0275pipeBind2(11, 4, u_r3.createdAt, "MMM d, y") : "\u2014");
  }
}
function AdminUsersComponent_Conditional_8_For_18_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    \u0275\u0275property("value", r_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r7);
  }
}
function AdminUsersComponent_Conditional_8_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 11)(1, "div", 17)(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 20);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "span", 21);
    \u0275\u0275elementStart(11, "span", 22);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 23)(14, "label");
    \u0275\u0275text(15, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 24);
    \u0275\u0275listener("ngModelChange", function AdminUsersComponent_Conditional_8_For_18_Template_select_ngModelChange_16_listener($event) {
      const u_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.changeRole(u_r6, $event));
    });
    \u0275\u0275repeaterCreate(17, AdminUsersComponent_Conditional_8_For_18_For_18_Template, 2, 2, "option", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 25);
    \u0275\u0275listener("click", function AdminUsersComponent_Conditional_8_For_18_Template_button_click_19_listener() {
      const u_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.remove(u_r6));
    });
    \u0275\u0275text(20, "Delete user");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 9, (u_r6.name || u_r6.email).charAt(0)));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(u_r6.name || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r6.email);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-brand", u_r6.role === "admin")("badge-muted", u_r6.role !== "admin");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r6.role);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", u_r6.role);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.roles);
  }
}
function AdminUsersComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "table", 8)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Joined");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, AdminUsersComponent_Conditional_8_For_15_Template, 15, 7, "tr", 9, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 10);
    \u0275\u0275repeaterCreate(17, AdminUsersComponent_Conditional_8_For_18_Template, 21, 11, "article", 11, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r0.users());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.users());
  }
}
var AdminUsersComponent = class _AdminUsersComponent {
  constructor() {
    this.loading = signal(false);
    this.error = signal(null);
    this.roles = ["developer", "admin"];
    this.users = signal([
      { id: "u-admin", name: "Demo Admin", email: "admin@demo", role: "admin", createdAt: "2026-07-01T09:00:00.000Z" },
      { id: "u-dev", name: "Demo Developer", email: "dev@demo", role: "developer", createdAt: "2026-07-02T11:30:00.000Z" },
      { id: "u-2", name: "Grace Hopper", email: "grace@demo", role: "developer", createdAt: "2026-07-05T14:10:00.000Z" },
      { id: "u-3", name: "Alan Turing", email: "alan@demo", role: "developer", createdAt: "2026-07-06T16:45:00.000Z" }
    ]);
  }
  changeRole(user, role) {
    this.users.update((list) => list.map((u) => u.id === user.id ? __spreadProps(__spreadValues({}, u), { role }) : u));
  }
  remove(user) {
    if (!confirm(`Delete ${user.name || user.email}? This removes their account and workspaces.`)) {
      return;
    }
    this.users.update((list) => list.filter((u) => u.id !== user.id));
  }
  static {
    this.\u0275fac = function AdminUsersComponent_Factory(t) {
      return new (t || _AdminUsersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminUsersComponent, selectors: [["app-admin-users"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 1, consts: [["data-testid", "admin-users-main", 1, "page"], [1, "page-head"], [1, "sub"], [1, "state"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], [1, "card", "table-wrap", "desktop-only"], ["data-testid", "admin-users-table", 1, "table"], ["data-testid", "admin-users-row"], [1, "mobile-only", "stack"], [1, "card", "card-pad", "user-card"], [1, "mono"], ["data-testid", "admin-users-role-select", "aria-label", "Role", 1, "role-select", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "num"], ["type", "button", "data-testid", "admin-users-delete-btn", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "uc-head"], ["aria-hidden", "true", 1, "uc-avatar"], [1, "uc-id"], [1, "mono", "muted"], [1, "spacer"], [1, "badge"], [1, "field"], ["aria-label", "Role", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-danger", "btn-block", 3, "click"]], template: function AdminUsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "main", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Users");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "Manage team accounts and roles. Admins can edit workspaces belonging to anyone.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, AdminUsersComponent_Conditional_6_Template, 4, 0, "div", 3)(7, AdminUsersComponent_Conditional_7_Template, 5, 1)(8, AdminUsersComponent_Conditional_8_Template, 19, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.loading() ? 6 : ctx.error() ? 7 : 8);
      }
    }, dependencies: [CommonModule, UpperCasePipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.role-select[_ngcontent-%COMP%] {\n  min-height: 40px;\n  padding: 0 var(--space-2);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius);\n  background: var(--color-surface);\n  color: var(--color-ink);\n  font-size: 16px;\n  font-family: inherit;\n  text-transform: capitalize;\n}\n.desktop-only[_ngcontent-%COMP%] {\n  display: block;\n}\n.mobile-only[_ngcontent-%COMP%] {\n  display: none;\n}\n.user-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.uc-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.uc-avatar[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--color-brand-light);\n  color: var(--color-brand-dark);\n  font-weight: 800;\n}\n.uc-id[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.uc-id[_ngcontent-%COMP%]   .mono[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.user-card[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n@media (max-width: 640px) {\n  .desktop-only[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-only[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=admin-users.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminUsersComponent, { className: "AdminUsersComponent", filePath: "src/app/pages/admin-users/admin-users.component.ts", lineNumber: 19 });
})();
export {
  AdminUsersComponent
};
//# sourceMappingURL=admin-users.component-GVRSCJXQ.js.map
