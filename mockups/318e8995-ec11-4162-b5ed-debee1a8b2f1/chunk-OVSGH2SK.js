import {
  __spreadProps,
  __spreadValues,
  signal,
  ɵɵdefineInjectable
} from "./chunk-POJ4OZZ3.js";

// src/app/core/services/orders.service.ts
var OrdersService = class _OrdersService {
  // Backend-provided data — declared as a signal per the mockup data contract
  // (GET /api/orders for shoppers, GET /api/admin/orders for admins).
  orders = signal([
    {
      id: "o-1001",
      reference: "NW-1001",
      status: "shipped",
      createdAt: "2026-07-02T14:20:00Z",
      shipName: "Demo Shopper",
      shipAddress: "221B Baker Street, London",
      customerEmail: "shopper@demo",
      items: [
        { id: "oi-1", productId: "p-2", name: "Nimbus Mechanical Keyboard", unitPriceCents: 8900, quantity: 1 },
        { id: "oi-2", productId: "p-6", name: "Vertex Laptop Backpack", unitPriceCents: 6400, quantity: 1 }
      ],
      totalCents: 15300
    },
    {
      id: "o-1002",
      reference: "NW-1002",
      status: "placed",
      createdAt: "2026-07-08T09:05:00Z",
      shipName: "Demo Shopper",
      shipAddress: "742 Evergreen Terrace, Springfield",
      customerEmail: "shopper@demo",
      items: [
        { id: "oi-3", productId: "p-3", name: "Terra Insulated Bottle 1L", unitPriceCents: 3200, quantity: 3 }
      ],
      totalCents: 9600
    },
    {
      id: "o-1003",
      reference: "NW-1003",
      status: "placed",
      createdAt: "2026-07-10T17:42:00Z",
      shipName: "Ada Lovelace",
      shipAddress: "12 Analytical Ave, Cambridge",
      customerEmail: "ada@example.com",
      items: [
        { id: "oi-4", productId: "p-1", name: "Aurora Wireless Headphones", unitPriceCents: 12999, quantity: 1 }
      ],
      totalCents: 12999
    }
  ]);
  getById(id) {
    return this.orders().find((o) => o.id === id);
  }
  placeOrder(items, shipName, shipAddress, email) {
    const orderItems = items.map((i, idx) => ({
      id: "oi-new-" + idx,
      productId: i.productId,
      name: i.name,
      unitPriceCents: i.unitPriceCents,
      quantity: i.quantity
    }));
    const totalCents = orderItems.reduce((sum, i) => sum + i.unitPriceCents * i.quantity, 0);
    const seq = 1e3 + this.orders().length + 1;
    const order = {
      id: "o-" + Date.now(),
      reference: "NW-" + seq,
      status: "placed",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      shipName,
      shipAddress,
      customerEmail: email,
      items: orderItems,
      totalCents
    };
    this.orders.update((list) => [order, ...list]);
    return order;
  }
  advanceStatus(id) {
    this.orders.update((list) => list.map((o) => o.id === id && o.status === "placed" ? __spreadProps(__spreadValues({}, o), { status: "shipped" }) : o));
  }
  static \u0275fac = function OrdersService_Factory(t) {
    return new (t || _OrdersService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrdersService, factory: _OrdersService.\u0275fac, providedIn: "root" });
};

export {
  OrdersService
};
//# sourceMappingURL=chunk-OVSGH2SK.js.map
