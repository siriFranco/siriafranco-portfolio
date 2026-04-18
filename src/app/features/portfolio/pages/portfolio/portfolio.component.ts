import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteService} from 'src/app/shared/services/route.service';
import { PortfolioType } from 'src/app/shared/constants/app.constants';
import { AppMode, getBaseMode } from 'src/app/shared/constants/app.constants';
import { getModeFromPath } from 'src/app/shared/constants/app.constants';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit {

  mode!: AppMode;
  base!: string;

  showArchitecture = false;
  showSoftware = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.mode = this.route.snapshot.paramMap.get('mode') as AppMode;
    this.base = getBaseMode(this.mode);

    this.resolveView();
  }

  resolveView() {
    if (this.base === 'arch') {
      this.showArchitecture = true;
    }

    if (this.base === 'dev') {
      this.showSoftware = true;
    }

    if (this.base === 'home') {
      this.showArchitecture = true;
      this.showSoftware = true;
    }
  }


  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const el = document.getElementById(fragment);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}