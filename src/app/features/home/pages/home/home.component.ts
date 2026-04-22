import { Component, OnInit } from '@angular/core';
import { getModeFromPath } from 'src/app/shared/constants/app.constants';
import { AppMode, resolveMode, getBaseMode, getModeExtension } from 'src/app/shared/constants/app.constants';
import { ActivatedRoute } from '@angular/router';
import { HOME_CONFIG } from '../../config/home.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  mode: AppMode = 'home';

  isHome = false;
  isDev = false;
  isArch = false;

  isEstimator = false;
  isPM = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const modeParam = this.route.snapshot.paramMap.get('mode');

    this.mode = getModeFromPath(modeParam);

    const base = getBaseMode(this.mode);
    const ext = getModeExtension(this.mode);

    this.isHome = this.mode === 'home';
    this.isDev = base === 'dev';
    this.isArch = base === 'arch';

    // 🔥 CORREGIDO: usar "ext"
    this.isEstimator = ext === 'est';
    this.isPM = ext === 'pm';

    console.log('🟢 HOME');
    console.log('Mode:', this.mode);
    console.log({
      isHome: this.isHome,
      isDev: this.isDev,
      isArch: this.isArch,
      isEstimator: this.isEstimator,
      isPM: this.isPM
    });
  }

    get homeConfig() {
    return HOME_CONFIG[this.mode] ?? HOME_CONFIG.home!;
  }
}