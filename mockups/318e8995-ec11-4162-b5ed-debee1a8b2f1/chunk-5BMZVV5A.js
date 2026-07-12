import {
  __spreadProps,
  __spreadValues,
  computed,
  signal,
  ɵɵdefineInjectable
} from "./chunk-POJ4OZZ3.js";

// src/app/core/services/cart.service.ts
var CartService = class _CartService {
  // Backend-provided data — declared as a signal per the mockup data contract.
  // The active server-side cart (GET /api/cart) will populate this.
  items = signal([
    {
      id: "ci-1",
      productId: "p-1",
      name: "Aurora Wireless Headphones",
      imageUrl: "https://picsum.photos/seed/aurora/400/300",
      unitPriceCents: 12999,
      quantity: 1,
      stockQty: 24
    },
    {
      id: "ci-2",
      productId: "p-3",
      name: "Terra Insulated Bottle 1L",
      imageUrl: "https://picsum.photos/seed/terra/400/300",
      unitPriceCents: 3200,
      quantity: 2,
      stockQty: 60
    }
  ]);
  count = computed(() => this.items().reduce((n, i) => n + i.quantity, 0));
  subtotalCents = computed(() => this.items().reduce((sum, i) => sum + i.unitPriceCents * i.quantity, 0));
  addProduct(product, quantity = 1) {
    const existing = this.items().find((i) => i.productId === product.id);
    if (existing) {
      this.updateQuantity(existing.id, existing.quantity + quantity);
      return;
    }
    const item = {
      id: "ci-" + product.id,
      productId: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      unitPriceCents: product.priceCents,
      quantity,
      stockQty: product.stockQty
    };
    this.items.update((list) => [...list, item]);
  }
  updateQuantity(itemId, quantity) {
    if (quantity < 1) {
      this.removeItem(itemId);
      return;
    }
    this.items.update((list) => list.map((i) => i.id === itemId ? __spreadProps(__spreadValues({}, i), { quantity: Math.min(quantity, i.stockQty) }) : i));
  }
  removeItem(itemId) {
    this.items.update((list) => list.filter((i) => i.id !== itemId));
  }
  clear() {
    this.items.set([]);
  }
  static \u0275fac = function CartService_Factory(t) {
    return new (t || _CartService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CartService, factory: _CartService.\u0275fac, providedIn: "root" });
};

export {
  CartService
};
//# sourceMappingURL=chunk-5BMZVV5A.js.map
