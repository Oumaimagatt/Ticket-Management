
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MatIconModule } from '@angular/material/icon'; 
import { SidebarService } from '../../shared/services/sidebar.service'; 
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router, NavigationEnd, RouterModule } from '@angular/router';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  standalone: true,                    
  imports: [CommonModule, MatIconModule, RouterModule],             
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(300, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class SidebarComponent implements OnInit {
  isSidebarVisible = true;
  isSubmenuOpen = false;

  constructor(private sidebarService: SidebarService, private router: Router) {}

  ngOnInit() { 
   this.sidebarService.sidebarVisibility$.subscribe((isVisible: boolean) => {
  this.isSidebarVisible = isVisible;
});
;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isSubmenuOpen = event.url.startsWith('/dashboard');
      }
    });
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  toggleSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }
}
