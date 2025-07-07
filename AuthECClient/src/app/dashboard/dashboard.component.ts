
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  showWelcomeMessage = true;
  private routerSubscription: any;

  constructor(private router: Router) {}

  ngOnInit() {
    // Vérifier la route actuelle au chargement
    this.checkCurrentRoute();
    
    // Écouter les changements de route
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkCurrentRoute();
      }
    });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private checkCurrentRoute() {
    const currentUrl = this.router.url;
    // Afficher le message seulement sur /dashboard exacte
    this.showWelcomeMessage = currentUrl === '/dashboard';
  }
}