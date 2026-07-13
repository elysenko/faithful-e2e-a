import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favorite-toggle',
  standalone: true,
  templateUrl: './favorite-toggle.component.html',
  styleUrl: './favorite-toggle.component.css',
})
export class FavoriteToggleComponent {
  @Input() active = false;
  @Input() size: 'sm' | 'lg' = 'sm';
  @Output() toggled = new EventEmitter<void>();

  onClick(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.toggled.emit();
  }
}
