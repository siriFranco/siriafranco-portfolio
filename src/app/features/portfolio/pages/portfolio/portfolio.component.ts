import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit {

  viewType: 'architecture' | 'software' | 'all' = 'all';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const type = params.get('type');

      if (type === 'architecture') {
        this.viewType = 'architecture';
      } else if (type === 'software') {
        this.viewType = 'software';
      } else {
        this.viewType = 'all';
      }

      console.log('Current view:', this.viewType);
    });
  }
}