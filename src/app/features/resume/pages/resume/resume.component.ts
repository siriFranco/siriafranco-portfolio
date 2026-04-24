import { Component, OnInit } from '@angular/core';
import { ResumeMeta, RESUME_META } from '../../config/resume.config';
import { AppMode } from 'src/app/shared/constants/app.constants';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit{

  meta!: ResumeMeta;
  mode: AppMode = 'home';

  ngOnInit(): void {
    
    this.meta = RESUME_META[this.mode] ?? RESUME_META['home']!;
  }

}
