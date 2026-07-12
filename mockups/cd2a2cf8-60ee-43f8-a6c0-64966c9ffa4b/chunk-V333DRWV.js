import {
  __spreadProps,
  __spreadValues,
  computed,
  signal,
  ɵɵdefineInjectable
} from "./chunk-JG2HHNQL.js";

// src/app/core/services/product.service.ts
var ProductService = class _ProductService {
  constructor() {
    this.products = signal([
      {
        id: "p-aurora-headphones",
        name: "Aurora Wireless Headphones",
        description: "Over-ear active-noise-cancelling headphones with 40h battery life and plush memory-foam cups.",
        priceCents: 18900,
        imageUrl: "https://picsum.photos/seed/aurora-headphones/600/600",
        stockQty: 24
      },
      {
        id: "p-meridian-watch",
        name: "Meridian Smartwatch",
        description: "A titanium smartwatch with always-on AMOLED display, GPS, and a 7-day battery.",
        priceCents: 24900,
        imageUrl: "https://picsum.photos/seed/meridian-watch/600/600",
        stockQty: 12
      },
      {
        id: "p-nimbus-speaker",
        name: "Nimbus Portable Speaker",
        description: "Pocket-sized 360\xB0 speaker with deep bass, IP67 waterproofing, and 16h of playtime.",
        priceCents: 7900,
        imageUrl: "https://picsum.photos/seed/nimbus-speaker/600/600",
        stockQty: 40
      },
      {
        id: "p-vertex-backpack",
        name: "Vertex Everyday Backpack",
        description: 'Water-resistant 22L backpack with a padded 16" laptop sleeve and hidden security pocket.',
        priceCents: 12900,
        imageUrl: "https://picsum.photos/seed/vertex-backpack/600/600",
        stockQty: 30
      },
      {
        id: "p-lumen-desk-lamp",
        name: "Lumen LED Desk Lamp",
        description: "Dimmable desk lamp with five color temperatures, USB-C charging, and a wireless charge base.",
        priceCents: 5400,
        imageUrl: "https://picsum.photos/seed/lumen-lamp/600/600",
        stockQty: 0
      },
      {
        id: "p-pulse-keyboard",
        name: "Pulse Mechanical Keyboard",
        description: "Hot-swappable 75% mechanical keyboard with gasket mount, PBT keycaps, and RGB backlight.",
        priceCents: 13900,
        imageUrl: "https://picsum.photos/seed/pulse-keyboard/600/600",
        stockQty: 18
      }
    ]);
  }
  /** Returns a computed filtered view for the catalog search box. */
  search(query) {
    const q = query.trim().toLowerCase();
    return computed(() => this.products().filter((p) => !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)));
  }
  getById(id) {
    return this.products().find((p) => p.id === id);
  }
  create(input) {
    const id = `p-${input.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
    this.products.update((list) => [__spreadProps(__spreadValues({}, input), { id }), ...list]);
  }
  update(id, input) {
    this.products.update((list) => list.map((p) => p.id === id ? __spreadValues(__spreadValues({}, p), input) : p));
  }
  remove(id) {
    this.products.update((list) => list.filter((p) => p.id !== id));
  }
  static {
    this.\u0275fac = function ProductService_Factory(t) {
      return new (t || _ProductService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductService, factory: _ProductService.\u0275fac, providedIn: "root" });
  }
};

export {
  ProductService
};
//# sourceMappingURL=chunk-V333DRWV.js.map
