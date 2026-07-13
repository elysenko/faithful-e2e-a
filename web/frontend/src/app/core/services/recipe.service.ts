import { Injectable, signal, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Recipe } from '../models/models';

export type RecipeInput = Pick<Recipe, 'title' | 'ingredients' | 'instructions'>;

/**
 * RecipeService — wired to the NestJS `/api/v1/recipes` endpoints.
 * `recipes` remains a `signal<Recipe[]>` so components stay reactive; it is the
 * client-side cache populated by `load()` and kept in sync on mutations.
 */
@Injectable({ providedIn: 'root' })
export class RecipeService {
  private http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/recipes`;

  readonly recipes = signal<Recipe[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  /** GET /recipes — the authenticated user's recipes, optionally title-filtered. */
  load(q?: string): void {
    this.loading.set(true);
    this.error.set(null);
    let params = new HttpParams();
    if (q && q.trim()) params = params.set('q', q.trim());
    this.http.get<Recipe[]>(this.base, { params }).subscribe({
      next: (list) => {
        this.recipes.set(list);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(this.messageFrom(err));
        this.loading.set(false);
      },
    });
  }

  /** GET /recipes/:id — owner-scoped single recipe (404 on miss). */
  getById(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.base}/${id}`);
  }

  /** POST /recipes */
  create(input: RecipeInput): Observable<Recipe> {
    return this.http
      .post<Recipe>(this.base, input)
      .pipe(tap((created) => this.recipes.update((list) => [created, ...list])));
  }

  /** PATCH /recipes/:id */
  update(id: string, patch: Partial<RecipeInput>): Observable<Recipe> {
    return this.http
      .patch<Recipe>(`${this.base}/${id}`, patch)
      .pipe(tap((updated) => this.recipes.update((list) => list.map((r) => (r.id === id ? updated : r)))));
  }

  /** PATCH /recipes/:id/favorite */
  toggleFavorite(id: string): Observable<Recipe> {
    return this.http
      .patch<Recipe>(`${this.base}/${id}/favorite`, {})
      .pipe(tap((updated) => this.recipes.update((list) => list.map((r) => (r.id === id ? updated : r)))));
  }

  /** DELETE /recipes/:id */
  remove(id: string): Observable<void> {
    return this.http
      .delete<void>(`${this.base}/${id}`)
      .pipe(tap(() => this.recipes.update((list) => list.filter((r) => r.id !== id))));
  }

  private messageFrom(err: HttpErrorResponse): string {
    if (err.status === 503 || err.status === 0) {
      return 'RecipeRack can’t reach its database right now. Please try again in a moment.';
    }
    if (err.status === 404) return 'Recipe not found.';
    return err.error?.message || 'Something went wrong. Please try again.';
  }
}
