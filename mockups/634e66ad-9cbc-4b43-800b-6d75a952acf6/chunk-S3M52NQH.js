import {
  __spreadProps,
  __spreadValues,
  signal,
  ɵɵdefineInjectable
} from "./chunk-VZ6O3Y2G.js";

// src/app/core/services/siteview.service.ts
var SiteviewService = class _SiteviewService {
  constructor() {
    this.projects = signal([
      {
        id: "proj-riverside",
        name: "Riverside Tower",
        createdAt: "2026-02-01T09:00:00.000Z",
        updatedAt: "2026-07-01T09:00:00.000Z"
      },
      {
        id: "proj-harbor",
        name: "Harbor Point Logistics Hub",
        createdAt: "2026-05-10T09:00:00.000Z",
        updatedAt: "2026-06-20T09:00:00.000Z"
      }
    ]);
    this.phases = signal([
      { id: "ph-1", projectId: "proj-riverside", name: "Foundation & Sitework", order: 1 },
      { id: "ph-2", projectId: "proj-riverside", name: "Structure & Envelope", order: 2 },
      { id: "ph-3", projectId: "proj-riverside", name: "Interiors & Fit-out", order: 3 },
      { id: "ph-h1", projectId: "proj-harbor", name: "Groundworks", order: 1 }
    ]);
    this.tasks = signal([
      { id: "t1", phaseId: "ph-1", name: "Site clearing & survey", startsOn: "2026-03-01", endsOn: "2026-03-20", progressPct: 100, dependsOnTaskId: null },
      { id: "t2", phaseId: "ph-1", name: "Excavation", startsOn: "2026-03-18", endsOn: "2026-04-15", progressPct: 100, dependsOnTaskId: "t1" },
      { id: "t3", phaseId: "ph-1", name: "Foundation pour", startsOn: "2026-04-10", endsOn: "2026-05-12", progressPct: 78, dependsOnTaskId: "t2" },
      { id: "t4", phaseId: "ph-2", name: "Steel frame erection", startsOn: "2026-05-08", endsOn: "2026-07-05", progressPct: 55, dependsOnTaskId: "t3" },
      { id: "t5", phaseId: "ph-2", name: "Facade & envelope", startsOn: "2026-06-25", endsOn: "2026-08-25", progressPct: 20, dependsOnTaskId: "t4" },
      { id: "t6", phaseId: "ph-3", name: "MEP rough-in", startsOn: "2026-08-15", endsOn: "2026-09-30", progressPct: 5, dependsOnTaskId: "t5" },
      { id: "t7", phaseId: "ph-3", name: "Interior finishes", startsOn: "2026-09-25", endsOn: "2026-11-18", progressPct: 0, dependsOnTaskId: "t6" }
    ]);
    this.milestones = signal([
      { id: "ms-1", projectId: "proj-riverside", name: "Building permits approved", dueOn: "2026-02-28", status: "done" },
      { id: "ms-2", projectId: "proj-riverside", name: "Foundation complete", dueOn: "2026-05-15", status: "in_progress" },
      { id: "ms-3", projectId: "proj-riverside", name: "Structural topping out", dueOn: "2026-08-01", status: "at_risk" },
      { id: "ms-4", projectId: "proj-riverside", name: "Substantial completion", dueOn: "2026-11-30", status: "pending" }
    ]);
    this.budgetLines = signal([
      { id: "bl-1", phaseId: "ph-1", plannedCents: 12e7, actualCents: 1315e5 },
      { id: "bl-2", phaseId: "ph-2", plannedCents: 24e7, actualCents: 189e6 },
      { id: "bl-3", phaseId: "ph-3", plannedCents: 18e7, actualCents: 42e6 }
    ]);
    this.sitePlans = signal([
      {
        id: "sp-1",
        projectId: "proj-riverside",
        imageUrl: "https://picsum.photos/seed/riverside-siteplan/1000/700"
      }
    ]);
    this.markers = signal([
      { id: "mk-1", planId: "sp-1", x: 0.32, y: 0.28, type: "equipment", note: "Tower crane TC-1" },
      { id: "mk-2", planId: "sp-1", x: 0.62, y: 0.55, type: "hazard", note: "Open excavation \u2014 fall risk" },
      { id: "mk-3", planId: "sp-1", x: 0.78, y: 0.4, type: "equipment", note: "Material hoist" },
      { id: "mk-4", planId: "sp-1", x: 0.45, y: 0.73, type: "hazard", note: "Overhead load / crane swing zone" }
    ]);
    this.serviceSettings = signal([
      {
        service: "postgresql",
        label: "PostgreSQL Database",
        configured: true,
        fields: [
          { key: "POSTGRES_HOST", label: "Host", value: "db.internal", masked: false },
          { key: "POSTGRES_PASSWORD", label: "Password", value: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", masked: true }
        ]
      },
      {
        service: "minio",
        label: "MinIO Object Storage",
        configured: false,
        fields: [
          { key: "MINIO_ENDPOINT", label: "Endpoint", value: "", masked: false },
          { key: "MINIO_ACCESS_KEY", label: "Access Key", value: "", masked: false },
          { key: "MINIO_SECRET_KEY", label: "Secret Key", value: "", masked: true }
        ]
      }
    ]);
    this.idSeq = 100;
  }
  nextId(prefix) {
    return `${prefix}-${++this.idSeq}`;
  }
  // ---------- Reads ----------
  getProject(id) {
    return this.projects().find((p) => p.id === id);
  }
  phasesForProject(projectId) {
    return this.phases().filter((p) => p.projectId === projectId).sort((a, b) => a.order - b.order);
  }
  tasksForProject(projectId) {
    const phaseIds = new Set(this.phasesForProject(projectId).map((p) => p.id));
    return this.tasks().filter((t) => phaseIds.has(t.phaseId));
  }
  milestonesForProject(projectId) {
    return this.milestones().filter((m) => m.projectId === projectId).sort((a, b) => a.dueOn.localeCompare(b.dueOn));
  }
  budgetLinesForProject(projectId) {
    const phaseIds = new Set(this.phasesForProject(projectId).map((p) => p.id));
    return this.budgetLines().filter((b) => phaseIds.has(b.phaseId));
  }
  sitePlanForProject(projectId) {
    return this.sitePlans().find((s) => s.projectId === projectId);
  }
  markersForPlan(planId) {
    return this.markers().filter((m) => m.planId === planId);
  }
  getFull(projectId) {
    const project = this.getProject(projectId);
    if (!project)
      return null;
    const sitePlan = this.sitePlanForProject(projectId);
    return __spreadProps(__spreadValues({}, project), {
      phases: this.phasesForProject(projectId).map((ph) => __spreadProps(__spreadValues({}, ph), {
        tasks: this.tasks().filter((t) => t.phaseId === ph.id),
        budgetLines: this.budgetLines().filter((b) => b.phaseId === ph.id)
      })),
      milestones: this.milestonesForProject(projectId),
      sitePlan: sitePlan ? __spreadProps(__spreadValues({}, sitePlan), { markers: this.markersForPlan(sitePlan.id) }) : null
    });
  }
  /** Client-side stand-in for GET /projects/:id/dashboard. */
  getDashboard(projectId) {
    const tasks = this.tasksForProject(projectId);
    const now = /* @__PURE__ */ new Date();
    let onTrack = 0;
    let behind = 0;
    for (const t of tasks) {
      const start = new Date(t.startsOn).getTime();
      const end = new Date(t.endsOn).getTime();
      const elapsed = Math.min(1, Math.max(0, (now.getTime() - start) / (end - start)));
      const expectedPct = elapsed * 100;
      if (t.progressPct + 10 >= expectedPct)
        onTrack++;
      else
        behind++;
    }
    const total = tasks.length;
    const scheduleHealthPct = total ? Math.round(onTrack / total * 100) : 100;
    const phaseVariances = this.phasesForProject(projectId).map((ph) => {
      const lines = this.budgetLines().filter((b) => b.phaseId === ph.id);
      const plannedCents = lines.reduce((s, l) => s + l.plannedCents, 0);
      const actualCents = lines.reduce((s, l) => s + l.actualCents, 0);
      return {
        phaseId: ph.id,
        phaseName: ph.name,
        plannedCents,
        actualCents,
        over: actualCents > plannedCents
      };
    });
    const plan = this.sitePlanForProject(projectId);
    const openHazards = plan ? this.markersForPlan(plan.id).filter((m) => m.type === "hazard").length : 0;
    return {
      projectId,
      scheduleHealthPct,
      onTrackCount: onTrack,
      behindCount: behind,
      totalTasks: total,
      phaseVariances,
      openHazards
    };
  }
  // ---------- Mutations (planner) ----------
  createProject(name) {
    const p = {
      id: this.nextId("proj"),
      name,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.projects.update((list) => [...list, p]);
    return p;
  }
  updateProject(id, name) {
    this.projects.update((list) => list.map((p) => p.id === id ? __spreadProps(__spreadValues({}, p), { name, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }) : p));
  }
  deleteProject(id) {
    this.projects.update((list) => list.filter((p) => p.id !== id));
  }
  updateTaskProgress(taskId, progressPct) {
    const clamped = Math.min(100, Math.max(0, Math.round(progressPct)));
    this.tasks.update((list) => list.map((t) => t.id === taskId ? __spreadProps(__spreadValues({}, t), { progressPct: clamped }) : t));
  }
  createTask(dto) {
    this.tasks.update((list) => [...list, __spreadValues({ id: this.nextId("t") }, dto)]);
  }
  setMilestoneStatus(id, status) {
    this.milestones.update((list) => list.map((m) => m.id === id ? __spreadProps(__spreadValues({}, m), { status }) : m));
  }
  createMilestone(dto) {
    this.milestones.update((list) => [...list, __spreadValues({ id: this.nextId("ms") }, dto)]);
  }
  moveMarker(id, x, y) {
    const cx = Math.min(1, Math.max(0, x));
    const cy = Math.min(1, Math.max(0, y));
    this.markers.update((list) => list.map((m) => m.id === id ? __spreadProps(__spreadValues({}, m), { x: cx, y: cy }) : m));
  }
  createMarker(dto) {
    const marker = __spreadValues({ id: this.nextId("mk") }, dto);
    this.markers.update((list) => [...list, marker]);
    return marker;
  }
  updateServiceSetting(service, key, value) {
    this.serviceSettings.update((list) => list.map((s) => s.service === service ? __spreadProps(__spreadValues({}, s), {
      configured: true,
      fields: s.fields.map((f) => f.key === key ? __spreadProps(__spreadValues({}, f), { value }) : f)
    }) : s));
  }
  static {
    this.\u0275fac = function SiteviewService_Factory(t) {
      return new (t || _SiteviewService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SiteviewService, factory: _SiteviewService.\u0275fac, providedIn: "root" });
  }
};

export {
  SiteviewService
};
//# sourceMappingURL=chunk-S3M52NQH.js.map
