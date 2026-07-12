// src/app/models/models.ts
var STAGE_META = [
  { key: "PROSPECTING", label: "Prospecting", color: "var(--stage-prospecting)" },
  { key: "QUALIFICATION", label: "Qualification", color: "var(--stage-qualification)" },
  { key: "NEEDS_ANALYSIS", label: "Needs Analysis", color: "var(--stage-needs)" },
  { key: "PROPOSAL", label: "Proposal", color: "var(--stage-proposal)" },
  { key: "NEGOTIATION", label: "Negotiation", color: "var(--stage-negotiation)" },
  { key: "CLOSED_WON", label: "Closed Won", color: "var(--stage-won)" },
  { key: "CLOSED_LOST", label: "Closed Lost", color: "var(--stage-lost)" }
];
var LEAD_STATUSES = ["NEW", "CONTACTED", "QUALIFIED", "UNQUALIFIED", "CONVERTED"];
var TASK_STATUSES = ["OPEN", "IN_PROGRESS", "COMPLETED", "DEFERRED"];
var TASK_PRIORITIES = ["LOW", "NORMAL", "HIGH"];
var INDUSTRIES = ["Technology", "Finance", "Healthcare", "Manufacturing", "Retail", "Energy", "Media"];

export {
  STAGE_META,
  LEAD_STATUSES,
  TASK_STATUSES,
  TASK_PRIORITIES,
  INDUSTRIES
};
//# sourceMappingURL=chunk-PDA44FSW.js.map
