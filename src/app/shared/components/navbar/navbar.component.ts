import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PORTFOLIO_TYPES, RESUME_ROLES } from 'src/app/shared/constants/app.constants';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isMenuOpen = false;

  currentType: string | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const url = this.router.url;

        const parts = url.split('/');
        this.currentType = parts.length > 2 ? parts[2] : null;

        // 🔥 cerrar menú automáticamente
        this.isMenuOpen = false;
      });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  get portfolioLink(): string {
    return this.currentType ? `/portfolio/${this.currentType}` : '/portfolio';
  }

  get resumeLink(): string {
    return this.currentType ? `/resume/${this.currentType}` : '/resume';
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  
}