import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteService} from 'src/app/shared/services/route.service';
import { PortfolioType } from 'src/app/shared/constants/app.constants';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit {

  viewType: PortfolioType | 'all' = 'all';

  constructor(
    private route: ActivatedRoute,
    private routeService: RouteService
  ) {}

  ngOnInit() {
    this.routeService.getPortfolioType(this.route)
      .subscribe(type => {
        this.viewType = type;
        console.log('Portfolio view:', type);
      });
  }
}