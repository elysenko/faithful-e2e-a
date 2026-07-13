import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css',
})
export class AppHeaderComponent {
  private auth = inject(AuthService);
  readonly user = this.auth.user;
  readonly isAdmin = this.auth.isAdmin;

  logout(): void {
    this.auth.logout();
  }
}
