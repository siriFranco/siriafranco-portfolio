import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { 
  AppMode,
  PORTFOLIO_TYPES,
  RESUME_ROLES,
  getModeFromPath } from 'src/app/shared/constants/app.constants';
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

        // 🔥 SOLO actualizar modo si es válido
/*         if (APP_MODES.includes(firstSegment as AppMode)) {
          this.currentMode = firstSegment as AppMode;
        } */

        // 🔥 contexto (esto sí siempre se actualiza)
        this.currentContext = {
          section: segments[1] || null,
          type: segments[2] || null
        };

        this.isMenuOpen = false;
      });
  }

  // 🔥 LOGO LINK (dinámico por modo)
  get homeLink(): string {
    return `/${this.currentMode}`;
  }

  // 🔥 PORTFOLIO LINK
  get portfolioLink(): string {
    if (this.currentMode === 'arch') {
      return '/portfolio/architecture';
    }
    if (this.currentMode === 'dev') {
      return '/portfolio/software';
    }
    return '/portfolio';
  }

  // 🔥 RESUME LINK
  get resumeLink(): string {
    if (this.currentMode === 'arch') {
      return '/resume/architect';
    }
    if (this.currentMode === 'dev') {
      return '/resume/software';
    }
    return '/resume';
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