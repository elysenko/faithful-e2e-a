import { Injectable, signal, computed } from '@angular/core';
import { Recipe } from '../models/models';

/**
 * Mockup RecipeService.
 * DATA CONTRACT: `recipes` MUST stay a `signal<Recipe[]>([...])` so the
 * mockup_cleaner can empty it and the service_agent can wire it to
 * `GET /api/recipes`. Do not convert to a plain array.
 */
@Injectable({ providedIn: 'root' })
export class RecipeService {
  readonly recipes = signal<Recipe[]>([
    {
      id: 'r-1',
      ownerId: 'u-current',
      title: 'Sun-Dried Tomato Pasta',
      ingredients: ['200g penne', '80g sun-dried tomatoes', '2 cloves garlic', '50ml cream', 'Fresh basil'],
      instructions:
        'Boil the penne until al dente. Sauté garlic and sliced sun-dried tomatoes, stir in cream, then fold through the drained pasta. Finish with torn basil.',
      isFavorite: true,
      createdAt: '2026-06-02T10:00:00Z',
      updatedAt: '2026-06-20T18:30:00Z',
    },
    {
      id: 'r-2',
      ownerId: 'u-current',
      title: 'Weekend Sourdough Loaf',
      ingredients: ['500g bread flour', '350g water', '100g active starter', '10g salt'],
      instructions:
        'Mix flour and water, rest 1 hour. Add starter and salt, stretch and fold every 30 min for 3 hours. Shape, cold-proof overnight, then bake at 240°C in a Dutch oven.',
      isFavorite: false,
      createdAt: '2026-05-14T08:00:00Z',
      updatedAt: '2026-05-14T08:00:00Z',
    },
    {
      id: 'r-3',
      ownerId: 'u-current',
      title: 'Spiced Chickpea Curry',
      ingredients: ['2 cans chickpeas', '1 onion', '400ml coconut milk', '2 tbsp curry paste', 'Spinach'],
      instructions:
        'Fry onion until soft, add curry paste and chickpeas. Pour in coconut milk and simmer 15 minutes. Wilt in spinach before serving with rice.',
      isFavorite: true,
      createdAt: '2026-06-25T12:00:00Z',
      updatedAt: '2026-06-25T12:00:00Z',
    },
    {
      id: 'r-4',
      ownerId: 'u-current',
      title: 'Lemon Blueberry Pancakes',
      ingredients: ['150g flour', '1 egg', '200ml milk', '1 lemon (zest)', '100g blueberries'],
      instructions:
        'Whisk flour, egg, milk and lemon zest into a smooth batter. Fold in blueberries. Cook spoonfuls on a hot griddle until bubbles form, then flip.',
      isFavorite: false,
      createdAt: '2026-06-30T07:30:00Z',
      updatedAt: '2026-06-30T07:30:00Z',
    },
    {
      id: 'r-5',
      ownerId: 'u-current',
      title: 'Charred Corn Tacos',
      ingredients: ['4 corn tortillas', '2 corn cobs', 'Feta', 'Lime', 'Chipotle mayo'],
      instructions:
        'Char corn over an open flame and slice off the kernels. Warm tortillas, spread chipotle mayo, pile on corn and crumbled feta, finish with lime.',
      isFavorite: false,
      createdAt: '2026-07-01T19:00:00Z',
      updatedAt: '2026-07-01T19:00:00Z',
    },
    {
      id: 'r-6',
      ownerId: 'u-current',
      title: 'Overnight Oats with Berries',
      ingredients: ['80g rolled oats', '150ml milk', '1 tbsp chia seeds', 'Mixed berries', 'Honey'],
      instructions:
        'Combine oats, milk and chia seeds in a jar. Refrigerate overnight. In the morning top with berries and a drizzle of honey.',
      isFavorite: true,
      createdAt: '2026-07-05T21:00:00Z',
      updatedAt: '2026-07-05T21:00:00Z',
    },
  ]);

  /** Case-insensitive title search, mirroring the backend ILIKE query. */
  search(q: string) {
    const term = q.trim().toLowerCase();
    return computed(() =>
      this.recipes().filter((r) => !term || r.title.toLowerCase().includes(term)),
    );
  }

  getById(id: string): Recipe | undefined {
    return this.recipes().find((r) => r.id === id);
  }

  toggleFavorite(id: string): void {
    this.recipes.update((list) =>
      list.map((r) => (r.id === id ? { ...r, isFavorite: !r.isFavorite } : r)),
    );
  }

  create(input: Omit<Recipe, 'id' | 'ownerId' | 'isFavorite' | 'createdAt' | 'updatedAt'>): Recipe {
    const now = '2026-07-13T00:00:00Z';
    const recipe: Recipe = {
      ...input,
      id: `r-${this.recipes().length + 1}-${input.title.length}`,
      ownerId: 'u-current',
      isFavorite: false,
      createdAt: now,
      updatedAt: now,
    };
    this.recipes.update((list) => [recipe, ...list]);
    return recipe;
  }

  update(id: string, patch: Partial<Recipe>): void {
    this.recipes.update((list) =>
      list.map((r) => (r.id === id ? { ...r, ...patch, updatedAt: '2026-07-13T00:00:00Z' } : r)),
    );
  }

  remove(id: string): void {
    this.recipes.update((list) => list.filter((r) => r.id !== id));
  }
}
