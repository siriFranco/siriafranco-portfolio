import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { 
  AppMode,
  PORTFOLIO_TYPES,
  RESUME_ROLES,
  getModeFromPath } from 'src/app/shared/constants/app.constants';
import { getPortfolioLink, getResumeLink } from '../../utils/navigation.utils';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isMenuOpen = false;

  portfolioTypes = PORTFOLIO_TYPES;
  resumeRoles = RESUME_ROLES;

  currentMode: AppMode = 'home';

  currentContext = {
    section: null as string | null, // home, portfolio, resume
    type: null as string | null     // architecture, software, etc
  };

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {

        const url = this.router.url;
        const segments = url.split('/');

        const firstSegment = segments[1];

        // 🔥 MODE
        this.currentMode = getModeFromPath(firstSegment);

        // 🔥 CONTEXTO
        this.currentContext = {
          section: segments[2] || null,
          type: segments[3] || null
        };

        // 🧪 LOGS
        console.log('🔵 NAVBAR');
        console.log('URL:', url);
        console.log('Segments:', segments);
        console.log('Mode:', this.currentMode);
        console.log('Context:', this.currentContext);

        this.isMenuOpen = false;
      });
  }

  // 🔥 LOGO LINK (dinámico por modo)
  get homeLink(): string {
    return `/${this.currentMode}`;
  }

  // 🔥 PORTFOLIO LINK
  get portfolioLink(): string {
    return getPortfolioLink(this.currentMode);
  }

  get resumeLink(): string {
    return getResumeLink(this.currentMode);
  }

  // 🔥 CONTROL DE SUBMENÚ
  shouldShowSubmenu(): boolean {
    return this.currentMode === 'home';
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}