import { Component, OnInit } from '@angular/core';
import { getModeFromPath } from 'src/app/shared/constants/app.constants';
import { AppMode } from 'src/app/shared/constants/app.constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
mode: AppMode = 'home';
constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe(segments => {
      const path = segments[0]?.path || null;
      this.mode = getModeFromPath(path);
    });
  }
}
