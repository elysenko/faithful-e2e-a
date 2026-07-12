import {
  signal,
  ɵɵdefineInjectable
} from "./chunk-JG2HHNQL.js";

// src/app/core/services/order.service.ts
var OrderService = class _OrderService {
  constructor() {
    this.orders = signal([
      {
        id: "ord-1042",
        userId: "demo-shopper",
        status: "shipped",
        shipName: "Demo Shopper",
        shipAddress: "221B Baker Street, London",
        totalCents: 26800,
        createdAt: "2026-07-04T14:32:00.000Z",
        userEmail: "shopper@demo",
        items: [
          {
            id: "oi-1",
            productId: "p-aurora-headphones",
            qty: 1,
            unitPriceCents: 18900,
            product: {
              id: "p-aurora-headphones",
              name: "Aurora Wireless Headphones",
              description: "",
              priceCents: 18900,
              imageUrl: "https://picsum.photos/seed/aurora-headphones/120/120",
              stockQty: 24
            }
          },
          {
            id: "oi-2",
            productId: "p-nimbus-speaker",
            qty: 1,
            unitPriceCents: 7900,
            product: {
              id: "p-nimbus-speaker",
              name: "Nimbus Portable Speaker",
              description: "",
              priceCents: 7900,
              imageUrl: "https://picsum.photos/seed/nimbus-speaker/120/120",
              stockQty: 40
            }
          }
        ]
      }
    ]);
  }
  getById(id) {
    return this.orders().find((o) => o.id === id);
  }
  /** Simulates POST /orders — snapshots cart items into a new order. */
  placeOrder(items, shipName, shipAddress) {
    const totalCents = items.reduce((sum, i) => sum + i.qty * i.product.priceCents, 0);
    const order = {
      id: `ord-${1043 + this.orders().length}`,
      userId: "demo-shopper",
      status: "placed",
      shipName,
      shipAddress,
      totalCents,
      createdAt: "2026-07-11T00:00:00.000Z",
      userEmail: "shopper@demo",
      items: items.map((i, idx) => ({
        id: `oi-new-${idx}`,
        productId: i.productId,
        qty: i.qty,
        unitPriceCents: i.product.priceCents,
        product: i.product
      }))
    };
    this.orders.update((list) => [order, ...list]);
    return order;
  }
  static {
    this.\u0275fac = function OrderService_Factory(t) {
      return new (t || _OrderService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderService, factory: _OrderService.\u0275fac, providedIn: "root" });
  }
};

export {
  OrderService
};
//# sourceMappingURL=chunk-QKJLD3U2.js.map
