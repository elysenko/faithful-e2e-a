import {
  __spreadProps,
  __spreadValues,
  computed,
  signal,
  ɵɵdefineInjectable
} from "./chunk-LLQROSRE.js";

// src/app/core/services/cart.service.ts
var CartService = class _CartService {
  constructor() {
    this._cart = signal({
      id: "cart-1",
      userId: "demo-admin",
      items: [
        {
          id: "ci-1",
          productId: "p-1",
          qty: 2,
          product: {
            id: "p-1",
            name: "Class J Time-Delay Fuse 30A",
            description: "600V AC, current-limiting, UL listed.",
            priceCents: 1899,
            imageUrl: "https://placehold.co/300x300?text=Fuse+30A",
            stockQty: 48,
            manufacturer: "Bussmann"
          }
        },
        {
          id: "ci-2",
          productId: "p-3",
          qty: 1,
          product: {
            id: "p-3",
            name: "DIN-Rail Fuse Holder 1P",
            description: "Finger-safe, 32A, accepts 10x38mm fuses.",
            priceCents: 749,
            imageUrl: "https://placehold.co/300x300?text=Holder",
            stockQty: 120,
            manufacturer: "Mersen"
          }
        }
      ]
    });
    this.cart = this._cart.asReadonly();
    this.items = computed(() => this._cart()?.items ?? []);
    this.count = computed(() => this.items().reduce((n, i) => n + i.qty, 0));
    this.subtotalCents = computed(() => this.items().reduce((sum, i) => sum + i.qty * i.product.priceCents, 0));
  }
  addItem(product, qty = 1) {
    const cart = this._cart();
    if (!cart)
      return;
    const existing = cart.items.find((i) => i.productId === product.id);
    let items;
    if (existing) {
      items = cart.items.map((i) => i.id === existing.id ? __spreadProps(__spreadValues({}, i), { qty: Math.min(i.qty + qty, product.stockQty) }) : i);
    } else {
      items = [
        ...cart.items,
        { id: "ci-" + product.id + "-" + cart.items.length, productId: product.id, qty, product }
      ];
    }
    this._cart.set(__spreadProps(__spreadValues({}, cart), { items }));
  }
  setQty(itemId, qty) {
    const cart = this._cart();
    if (!cart)
      return;
    const items = cart.items.map((i) => i.id === itemId ? __spreadProps(__spreadValues({}, i), { qty: Math.max(0, qty) }) : i).filter((i) => i.qty > 0);
    this._cart.set(__spreadProps(__spreadValues({}, cart), { items }));
  }
  removeItem(itemId) {
    const cart = this._cart();
    if (!cart)
      return;
    this._cart.set(__spreadProps(__spreadValues({}, cart), { items: cart.items.filter((i) => i.id !== itemId) }));
  }
  clear() {
    const cart = this._cart();
    if (!cart)
      return;
    this._cart.set(__spreadProps(__spreadValues({}, cart), { items: [] }));
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
//# sourceMappingURL=chunk-5W3QQDJZ.js.map
