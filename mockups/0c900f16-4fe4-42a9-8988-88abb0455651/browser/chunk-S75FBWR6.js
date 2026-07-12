import {
  ChangeDetectionStrategy,
  Component,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-FGCV4IXY.js";

// src/app/admin-jobs/admin-jobs.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminJobsComponent_For_43_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 14)(1, "td", 15)(2, "span", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classProp("msg-danger", job_r1.status === "failed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", job_r1.message, " ");
  }
}
function AdminJobsComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 10)(1, "td", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 13);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 13);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 13);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, AdminJobsComponent_For_43_Conditional_16_Template, 4, 3, "tr", 14);
  }
  if (rf & 2) {
    const job_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r1.targetDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r1.source);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge-" + job_r1.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", job_r1.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatTime(job_r1.startedAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDuration(job_r1.durationMs));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r1.stationsIngested.toLocaleString());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r1.attempts);
    \u0275\u0275advance();
    \u0275\u0275conditional(job_r1.message ? 16 : -1);
  }
}
var AdminJobsComponent = class _AdminJobsComponent {
  constructor() {
    this.jobs = signal([]);
    this.successCount = computed(() => this.jobs().filter((j) => j.status === "success").length);
    this.failedCount = computed(() => this.jobs().filter((j) => j.status === "failed").length);
    this.activeCount = computed(() => this.jobs().filter((j) => j.status === "running" || j.status === "retrying").length);
  }
  formatDuration(ms) {
    if (ms === null)
      return "\u2014";
    const s = Math.round(ms / 1e3);
    const m = Math.floor(s / 60);
    return m > 0 ? `${m}m ${s % 60}s` : `${s}s`;
  }
  formatTime(iso) {
    return new Date(iso).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  static {
    this.\u0275fac = function AdminJobsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminJobsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminJobsComponent, selectors: [["app-admin-jobs"]], decls: 44, vars: 3, consts: [["data-testid", "admin-jobs-page", 1, "page"], [1, "page-head"], [1, "stats"], [1, "stat"], [1, "stat-num"], [1, "stat-label"], [1, "stat", "danger"], [1, "table-card"], [1, "jobs-table"], [1, "num"], ["data-testid", "job-row"], [1, "mono"], [1, "badge"], [1, "num", "mono"], [1, "msg-row"], ["colspan", "7"], [1, "msg"]], template: function AdminJobsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Ingestion jobs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Daily GHCN-Daily refresh & Climate Normals baseline status.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 2)(8, "div", 3)(9, "span", 4);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 5);
        \u0275\u0275text(12, "Active");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 3)(14, "span", 4);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span", 5);
        \u0275\u0275text(17, "Succeeded");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 6)(19, "span", 4);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 5);
        \u0275\u0275text(22, "Failed");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 7)(24, "table", 8)(25, "thead")(26, "tr")(27, "th");
        \u0275\u0275text(28, "Target date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "th");
        \u0275\u0275text(30, "Source");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "th");
        \u0275\u0275text(32, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "th");
        \u0275\u0275text(34, "Started");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "th", 9);
        \u0275\u0275text(36, "Duration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "th", 9);
        \u0275\u0275text(38, "Stations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "th", 9);
        \u0275\u0275text(40, "Attempts");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "tbody");
        \u0275\u0275repeaterCreate(42, AdminJobsComponent_For_43_Template, 17, 10, null, null, _forTrack0);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.activeCount());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.successCount());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.failedCount());
        \u0275\u0275advance(22);
        \u0275\u0275repeater(ctx.jobs());
      }
    }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n.page-head[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-5);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin: 0;\n}\n.page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: var(--space-1) 0 0;\n  color: var(--color-text-muted);\n  font-size: 0.9rem;\n}\n.stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: var(--space-3);\n  margin-bottom: var(--space-5);\n}\n.stat[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  padding: var(--space-4);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n}\n.stat-num[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n.stat.danger[_ngcontent-%COMP%]   .stat-num[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--color-text-muted);\n}\n.table-card[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  overflow-x: auto;\n  overscroll-behavior-x: contain;\n  box-shadow: var(--shadow-sm);\n}\n.jobs-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n  min-width: 720px;\n}\n.jobs-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.jobs-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  white-space: nowrap;\n}\n.jobs-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n  border-bottom: 1px solid var(--color-border);\n  background: var(--color-surface-2);\n}\n.jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(.msg-row):hover {\n  background: var(--color-surface-2);\n}\n.jobs-table[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: var(--font-mono);\n  font-size: 0.8rem;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: var(--radius-pill);\n  font-size: 0.72rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.badge-success[_ngcontent-%COMP%] {\n  background: var(--color-success-soft);\n  color: var(--color-success);\n}\n.badge-running[_ngcontent-%COMP%] {\n  background: var(--color-primary-soft);\n  color: var(--color-primary);\n}\n.badge-retrying[_ngcontent-%COMP%] {\n  background: var(--color-warning-soft);\n  color: var(--color-warning);\n}\n.badge-failed[_ngcontent-%COMP%] {\n  background: var(--color-danger-soft);\n  color: var(--color-danger);\n}\n.msg-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-top: 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.msg[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--color-text-muted);\n}\n.msg-danger[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n@media (max-width: 768px) {\n  .stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-jobs.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminJobsComponent, [{
    type: Component,
    args: [{ selector: "app-admin-jobs", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="page" data-testid="admin-jobs-page">
  <header class="page-head">
    <div>
      <h1>Ingestion jobs</h1>
      <p>Daily GHCN-Daily refresh &amp; Climate Normals baseline status.</p>
    </div>
  </header>

  <div class="stats">
    <div class="stat">
      <span class="stat-num">{{ activeCount() }}</span>
      <span class="stat-label">Active</span>
    </div>
    <div class="stat">
      <span class="stat-num">{{ successCount() }}</span>
      <span class="stat-label">Succeeded</span>
    </div>
    <div class="stat danger">
      <span class="stat-num">{{ failedCount() }}</span>
      <span class="stat-label">Failed</span>
    </div>
  </div>

  <div class="table-card">
    <table class="jobs-table">
      <thead>
        <tr>
          <th>Target date</th>
          <th>Source</th>
          <th>Status</th>
          <th>Started</th>
          <th class="num">Duration</th>
          <th class="num">Stations</th>
          <th class="num">Attempts</th>
        </tr>
      </thead>
      <tbody>
        @for (job of jobs(); track job.id) {
          <tr data-testid="job-row">
            <td class="mono">{{ job.targetDate }}</td>
            <td>{{ job.source }}</td>
            <td>
              <span class="badge" [class]="'badge-' + job.status">
                {{ job.status }}
              </span>
            </td>
            <td>{{ formatTime(job.startedAt) }}</td>
            <td class="num mono">{{ formatDuration(job.durationMs) }}</td>
            <td class="num mono">{{ job.stationsIngested.toLocaleString() }}</td>
            <td class="num mono">{{ job.attempts }}</td>
          </tr>
          @if (job.message) {
            <tr class="msg-row">
              <td colspan="7">
                <span class="msg" [class.msg-danger]="job.status === 'failed'">
                  {{ job.message }}
                </span>
              </td>
            </tr>
          }
        }
      </tbody>
    </table>
  </div>
</div>
`, styles: ["/* src/app/admin-jobs/admin-jobs.component.css */\n:host {\n  display: block;\n}\n.page {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n.page-head {\n  margin-bottom: var(--space-5);\n}\n.page-head h1 {\n  font-size: 1.5rem;\n  margin: 0;\n}\n.page-head p {\n  margin: var(--space-1) 0 0;\n  color: var(--color-text-muted);\n  font-size: 0.9rem;\n}\n.stats {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: var(--space-3);\n  margin-bottom: var(--space-5);\n}\n.stat {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  padding: var(--space-4);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n}\n.stat-num {\n  font-size: 1.7rem;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n.stat.danger .stat-num {\n  color: var(--color-danger);\n}\n.stat-label {\n  font-size: 0.74rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--color-text-muted);\n}\n.table-card {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  overflow-x: auto;\n  overscroll-behavior-x: contain;\n  box-shadow: var(--shadow-sm);\n}\n.jobs-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n  min-width: 720px;\n}\n.jobs-table th,\n.jobs-table td {\n  padding: 12px 16px;\n  text-align: left;\n  white-space: nowrap;\n}\n.jobs-table thead th {\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n  border-bottom: 1px solid var(--color-border);\n  background: var(--color-surface-2);\n}\n.jobs-table tbody tr:not(.msg-row):hover {\n  background: var(--color-surface-2);\n}\n.jobs-table .num {\n  text-align: right;\n}\n.mono {\n  font-family: var(--font-mono);\n  font-size: 0.8rem;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: var(--radius-pill);\n  font-size: 0.72rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.badge-success {\n  background: var(--color-success-soft);\n  color: var(--color-success);\n}\n.badge-running {\n  background: var(--color-primary-soft);\n  color: var(--color-primary);\n}\n.badge-retrying {\n  background: var(--color-warning-soft);\n  color: var(--color-warning);\n}\n.badge-failed {\n  background: var(--color-danger-soft);\n  color: var(--color-danger);\n}\n.msg-row td {\n  padding-top: 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.msg {\n  font-size: 0.78rem;\n  color: var(--color-text-muted);\n}\n.msg-danger {\n  color: var(--color-danger);\n}\n@media (max-width: 768px) {\n  .stats {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-jobs.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminJobsComponent, { className: "AdminJobsComponent", filePath: "src/app/admin-jobs/admin-jobs.component.ts", lineNumber: 16 });
})();
export {
  AdminJobsComponent
};
//# sourceMappingURL=chunk-S75FBWR6.js.map
