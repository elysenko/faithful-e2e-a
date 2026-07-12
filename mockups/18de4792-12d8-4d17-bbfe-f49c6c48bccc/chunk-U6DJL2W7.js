// src/app/core/money.ts
function formatCents(cents) {
  const value = (cents ?? 0) / 100;
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function toCents(dollars) {
  const n = typeof dollars === "string" ? parseFloat(dollars) : dollars;
  return Math.round((isNaN(n) ? 0 : n) * 100);
}

export {
  formatCents,
  toCents
};
//# sourceMappingURL=chunk-U6DJL2W7.js.map
