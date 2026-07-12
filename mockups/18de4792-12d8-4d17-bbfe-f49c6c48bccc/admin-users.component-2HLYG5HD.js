import {
  CommonModule,
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
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YT626SJK.js";

// src/app/pages/admin-users/admin-users.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminUsersComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "Loading users\u2026");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function AdminUsersComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "No users yet.");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "span", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 12);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 13);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.initials(u_r2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r2.name || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r2.email);
    \u0275\u0275advance();
    \u0275\u0275classProp("badge-info", u_r2.role === "admin")("badge-off", u_r2.role === "filer");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r2.role, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r2.createdAt);
  }
}
function AdminUsersComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, AdminUsersComponent_Conditional_10_For_2_Template, 12, 9, "div", 7, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.users());
  }
}
var AdminUsersComponent = class _AdminUsersComponent {
  constructor() {
    this.loading = signal(false);
    this.error = signal("");
    this.users = signal([
      { id: "u1", email: "admin@easyfile.dev", name: "Admin", role: "admin", createdAt: "2026-01-04" },
      { id: "u2", email: "filer@demo", name: "Demo Filer", role: "filer", createdAt: "2026-02-11" },
      { id: "u3", email: "jordan@example.com", name: "Jordan Lee", role: "filer", createdAt: "2026-03-02" },
      { id: "u4", email: "sam@example.com", name: "Sam Ortiz", role: "filer", createdAt: "2026-03-19" }
    ]);
  }
  initials(u) {
    return (u.name || u.email).slice(0, 2).toUpperCase();
  }
  static {
    this.\u0275fac = function AdminUsersComponent_Factory(t) {
      return new (t || _AdminUsersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminUsersComponent, selectors: [["app-admin-users"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 2, consts: [[1, "page"], [1, "page-head"], [1, "spacer"], [1, "muted"], [1, "state"], [1, "state", "state-error"], [1, "card", "user-list"], [1, "user-row"], ["aria-hidden", "true", 1, "avatar"], [1, "user-main"], [1, "user-name"], [1, "user-email", "muted"], [1, "badge"], [1, "user-date", "muted"]], template: function AdminUsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Users");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "span", 2);
        \u0275\u0275elementStart(5, "span", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, AdminUsersComponent_Conditional_7_Template, 2, 0, "div", 4)(8, AdminUsersComponent_Conditional_8_Template, 2, 1)(9, AdminUsersComponent_Conditional_9_Template, 2, 0)(10, AdminUsersComponent_Conditional_10_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.users().length, " total");
        \u0275\u0275advance();
        \u0275\u0275conditional(7, ctx.loading() ? 7 : ctx.error() ? 8 : ctx.users().length === 0 ? 9 : 10);
      }
    }, dependencies: [CommonModule], styles: ["\n\n.user-list[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.user-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  min-height: 56px;\n  padding: var(--space-3) var(--space-4);\n  border-bottom: 1px solid var(--color-border);\n}\n.user-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.avatar[_ngcontent-%COMP%] {\n  flex: none;\n  display: inline-grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: var(--color-brand-light);\n  color: var(--color-brand-dark);\n  font-weight: 800;\n  font-size: var(--fs-sm);\n}\n.user-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.user-email[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-date[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: var(--fs-sm);\n}\n@media (max-width: 560px) {\n  .user-date[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=admin-users.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminUsersComponent, { className: "AdminUsersComponent", filePath: "src/app/pages/admin-users/admin-users.component.ts", lineNumber: 13 });
})();
export {
  AdminUsersComponent
};
//# sourceMappingURL=admin-users.component-2HLYG5HD.js.map
