import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteService} from 'src/app/shared/services/route.service';
import { PortfolioType } from 'src/app/shared/constants/app.constants';
import { AppMode, resolveMode } from 'src/app/shared/constants/app.constants';
import { getModeFromPath } from 'src/app/shared/constants/app.constants';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit {

  mode: AppMode = 'home'; // ✅ AGREGAR ESTO
  hasChildRoute = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    // 🔥 obtener mode desde la URL
    const modeParam = this.route.snapshot.paramMap.get('mode');

    this.mode = getModeFromPath(modeParam);

    // 🔥 detectar si hay subruta
    this.hasChildRoute = this.route.firstChild !== null;

    // 🧪 logs
    console.log('🟣 PORTFOLIO COMPONENT');
    console.log('Mode:', this.mode);
    console.log('Has child route:', this.hasChildRoute);
  }
}