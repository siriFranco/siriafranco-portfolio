import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  AppMode,
  BaseMode,
  ModeExtension,
  getModeFromPath,
  getBaseMode,
  getModeExtension,
  getAllowedPortfolioTypes,
  PortfolioType
} from 'src/app/shared/constants/app.constants';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  mode: AppMode = 'home';
  base: BaseMode = 'home';
  extension: ModeExtension | null = null;

  allowedTypes: PortfolioType[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const modeParam = this.route.snapshot.paramMap.get('mode');

    this.mode = getModeFromPath(modeParam);
    this.base = getBaseMode(this.mode);
    this.extension = getModeExtension(this.mode);

    this.allowedTypes = getAllowedPortfolioTypes(this.mode);

    console.log('🟡 PORTFOLIO INIT');
    console.log('Mode:', this.mode);
    console.log('Base:', this.base);
    console.log('Extension:', this.extension);
    console.log('Allowed:', this.allowedTypes);
  }

  // 🔥 Igual que filteredJobs
  isVisible(type: PortfolioType): boolean {
    return this.allowedTypes.includes(type);
  }
}