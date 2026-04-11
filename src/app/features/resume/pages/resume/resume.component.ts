import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from 'src/app/shared/services/route.service';
import { ResumeRole } from 'src/app/shared/constants/app.constants';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})

export class ResumeComponent implements OnInit {

  role: ResumeRole = 'software';

  constructor(
    private route: ActivatedRoute,
    private routeService: RouteService
  ) {}

  ngOnInit() {
    this.routeService.getResumeRole(this.route)
      .subscribe(role => {
        this.role = role;
        console.log('Resume role:', role);
      });
  }
}