import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { RecipeService } from '../../core/services/recipe.service';

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css',
})
export class RecipeFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private recipeService = inject(RecipeService);

  editingId: string | null = null;
  notFound = false;
  submitted = false;

  form = this.fb.nonNullable.group({
    title: ['', [Validators.required]],
    ingredients: this.fb.array<FormControl<string>>([]),
    instructions: ['', [Validators.required]],
  });

  get ingredients(): FormArray<FormControl<string>> {
    return this.form.get('ingredients') as FormArray<FormControl<string>>;
  }

  get hasIngredient(): boolean {
    return this.ingredients.controls.some((c) => c.value.trim().length > 0);
  }

  get isEdit(): boolean {
    return this.editingId !== null;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const recipe = this.recipeService.getById(id);
      if (!recipe) {
        this.notFound = true;
        return;
      }
      this.editingId = id;
      this.form.patchValue({ title: recipe.title, instructions: recipe.instructions });
      recipe.ingredients.forEach((ing) => this.ingredients.push(this.fb.nonNullable.control(ing)));
    }
    if (this.ingredients.length === 0) {
      this.addIngredient();
    }
  }

  addIngredient(value = ''): void {
    this.ingredients.push(this.fb.nonNullable.control(value));
  }

  removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
    if (this.ingredients.length === 0) this.addIngredient();
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.get('title')!.invalid || this.form.get('instructions')!.invalid || !this.hasIngredient) {
      this.form.markAllAsTouched();
      return;
    }

    const cleaned = this.ingredients.controls
      .map((c) => c.value.trim())
      .filter((v) => v.length > 0);
    const { title, instructions } = this.form.getRawValue();

    if (this.editingId) {
      this.recipeService.update(this.editingId, { title, instructions, ingredients: cleaned });
      this.router.navigate(['/recipes', this.editingId]);
    } else {
      const created = this.recipeService.create({ title, instructions, ingredients: cleaned });
      this.router.navigate(['/recipes', created.id]);
    }
  }

  cancel(): void {
    if (this.editingId) {
      this.router.navigate(['/recipes', this.editingId]);
    } else {
      this.router.navigate(['/']);
    }
  }
}
