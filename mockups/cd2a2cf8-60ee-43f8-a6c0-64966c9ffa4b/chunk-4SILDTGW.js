import {
  __spreadProps,
  __spreadValues,
  computed,
  signal,
  ɵɵdefineInjectable
} from "./chunk-JG2HHNQL.js";

// src/app/core/services/cart.service.ts
var CartService = class _CartService {
  constructor() {
    this.items = signal([]);
    this.count = computed(() => this.items().reduce((sum, i) => sum + i.qty, 0));
    this.subtotalCents = computed(() => this.items().reduce((sum, i) => sum + i.qty * i.product.priceCents, 0));
  }
  addItem(product, qty = 1) {
    this.items.update((list) => {
      const existing = list.find((i) => i.productId === product.id);
      if (existing) {
        return list.map((i) => i.productId === product.id ? __spreadProps(__spreadValues({}, i), { qty: Math.min(i.qty + qty, product.stockQty) }) : i);
      }
      return [
        ...list,
        { id: `ci-${product.id}`, productId: product.id, qty, product }
      ];
    });
  }
  updateQty(itemId, qty) {
    if (qty <= 0) {
      this.removeItem(itemId);
      return;
    }
    this.items.update((list) => list.map((i) => i.id === itemId ? __spreadProps(__spreadValues({}, i), { qty: Math.min(qty, i.product.stockQty) }) : i));
  }
  removeItem(itemId) {
    this.items.update((list) => list.filter((i) => i.id !== itemId));
  }
  clear() {
    this.items.set([]);
  }
  static {
    this.\u0275fac = function CartService_Factory(t) {
      return new (t || _CartService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CartService, factory: _CartService.\u0275fac, providedIn: "root" });
  }
};

export {
  CartService
};
//# sourceMappingURL=chunk-4SILDTGW.js.map
