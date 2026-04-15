import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppMode, resolveMode } from 'src/app/shared/constants/app.constants';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html'
})
export class ShellComponent implements OnInit {

  mode: AppMode = 'home';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    const modeParam =
      this.route.firstChild?.snapshot?.paramMap?.get('mode') ?? null;

    this.mode = resolveMode(modeParam);

    console.log('GLOBAL MODE:', this.mode);
  }
}