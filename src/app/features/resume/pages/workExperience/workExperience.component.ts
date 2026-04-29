import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  AppMode,
  BaseMode,
  ModeExtension,
  getModeFromPath,
  getBaseMode,
  getModeExtension
} from 'src/app/shared/constants/app.constants';

import {
  RESUME_JOBS,
  ResumeJob,
  RoleMode
} from '../../config/workExperience.config';
import { ABOUT_ME_CONFIG } from '../../config/aboutme.config';

@Component({
  selector: 'app-work-experience',
  templateUrl: './workExperience.component.html',
  styleUrls: ['./workExperience.component.scss']
})

export class WorkExperienceComponent implements OnInit {

  // MODE
  mode: AppMode = 'home';

  // derivados (tipados desde app.constants)
  base: BaseMode = 'home';
  extension: ModeExtension | null = null;

  // data
  jobs: ResumeJob[] = RESUME_JOBS;

  //imagen
  config = ABOUT_ME_CONFIG;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    const modeParam = this.route.snapshot.paramMap.get('mode');

    this.mode = getModeFromPath(modeParam);

    this.base = getBaseMode(this.mode);
    this.extension = getModeExtension(this.mode);

    console.log('🟡 RESUME INIT');
    console.log('URL param:', modeParam);
    console.log('Mode:', this.mode);
    console.log('Base:', this.base);
    console.log('Extension:', this.extension);
    console.log('CurrentKey:', this.currentKey);
  }

  // 🔥 DESCRIPCIÓN DINÁMICA (sin hardcode)
  getDescription(job: ResumeJob): string[] {

    const role = this.extension ?? this.base;

    // 🔥 1. MULTI-ROLE
    const multi = job.descriptions.roles?.find(r =>
      r.roles.includes(role as any)
    );

    if (multi) return multi.content;

    // 🔥 2. EXTENSION
    if (this.extension && job.descriptions[this.extension]) {
      return job.descriptions[this.extension]!;
    }

    // 🔥 3. BASE (solo si es dev o arch)
    if (this.base === 'dev' && job.descriptions.dev) {
      return job.descriptions.dev;
    }

    if (this.base === 'arch' && job.descriptions.arch) {
      return job.descriptions.arch;
    }

    // 🔥 4. DEFAULT
    return job.descriptions.default;
  }

  get currentKey(): AppMode {
    return this.extension
      ? `${this.base}-${this.extension}`
      : this.base;
  }

  get filteredJobs(): ResumeJob[] {

    console.log('🧪 FILTER DEBUG');
    console.log('Mode:', this.mode);
    console.log('Base:', this.base);
    console.log('Extension:', this.extension);
    console.log('CurrentKey:', this.currentKey);

    return this.jobs.filter(job => {

      const visible = job.visibleIn;

      console.log(`\n🔎 Job: ${job.role}`);
      console.log('visibleIn:', visible);

      if (!visible) {
        console.log('➡️ no visibleIn → SHOW');
        return true;
      }

      const matches = visible.includes(this.currentKey);

      console.log('checking:', this.currentKey);
      console.log('match:', matches);

      return matches;
    });
  }

}