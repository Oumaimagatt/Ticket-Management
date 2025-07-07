import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../../shared/services/sidebar.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,                    
  encapsulation: ViewEncapsulation.None,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule] 
})
export class HeaderComponent {
  constructor(
    private sidebarService: SidebarService,
    private router: Router
  ) {}

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  logout() {
    localStorage.removeItem('token'); // clear JWT
    this.router.navigate(['/signin']);
  }
}
