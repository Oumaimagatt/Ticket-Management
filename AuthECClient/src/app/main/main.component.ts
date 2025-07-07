
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { SidebarService } from '../shared/services/sidebar.service';
import { HeaderComponent } from '../layout/header/header.component'; 
import { SidebarComponent } from '../layout/sidenav/sidenav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent, RouterOutlet] // <-- add CommonModule here
})
export class MainComponent {
  isSidebarVisible = true;
  constructor(private sidebarService: SidebarService) {}
  
  ngOnInit() {
    this.sidebarService.sidebarVisibility$.subscribe(isVisible => {
      this.isSidebarVisible = isVisible;
    });
  }
}
