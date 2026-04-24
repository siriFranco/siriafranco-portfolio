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
  RESUME_SKILLS,
  SkillCategory,
  SkillItem
} from '../../config/skills.config';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  mode: AppMode = 'home';
  base: BaseMode = 'home';
  extension: ModeExtension | null = null;

  skillsConfig = RESUME_SKILLS;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const modeParam = this.route.snapshot.paramMap.get('mode');

    this.mode = getModeFromPath(modeParam);
    this.base = getBaseMode(this.mode);
    this.extension = getModeExtension(this.mode);
  }

  get currentKey(): AppMode {
    return this.extension
      ? `${this.base}-${this.extension}` as AppMode
      : this.base;
  }

  get filteredCategories(): SkillCategory[] {
    return RESUME_SKILLS.filter(cat => {
      if (!cat.visibleIn) return true;

      return cat.visibleIn.includes(this.currentKey)
        || cat.visibleIn.includes(this.base);
    });
  }

  filterSkills(skills: any[]) {
    return skills.filter(skill => {
      if (!skill.visibleIn) return true;

      return skill.visibleIn.includes(this.currentKey)
        || skill.visibleIn.includes(this.base);
    });
  }
}