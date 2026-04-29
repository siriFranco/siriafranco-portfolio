import { Component, OnInit } from '@angular/core';
import { ResumeMeta, RESUME_META } from '../../config/resume.config';
import { AppMode, resolveMode } from 'src/app/shared/constants/app.constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  meta!: ResumeMeta;
  mode!: AppMode;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const modeParam = params.get('mode');

      this.mode = resolveMode(modeParam);
      this.meta = RESUME_META[this.mode] ?? RESUME_META['home']!;
    });
  }
}