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

import { CONTACT_CONFIG, ContactItem } from '../../config/contact.config';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  mode: AppMode = 'home';
  base: BaseMode = 'home';
  extension: ModeExtension | null = null;

  config = CONTACT_CONFIG;
  meta = this.config.meta;
  contact: ContactItem[] = this.config.contact;

  copied: string | null = null;

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

  // 🔥 igual que workexperience pero simple
  getValue(item: ContactItem): string {
    if (!item.values) return item.value!;

    const match = item.values.find((v) =>
      v.modes.includes(this.currentKey) ||
      v.modes.includes(this.base)
    );

    return match?.value ?? item.values[0].value;
  }

  // 🔥 copy único
  copy(item: ContactItem) {
    const value = this.getValue(item);

    navigator.clipboard.writeText(value);
    this.copied = value;

    setTimeout(() => this.copied = null, 1500);
  }

  // 🔥 filtro (ya tipado correctamente)
  get filteredContact(): ContactItem[] {
    return this.contact.filter(item => {
      if (!item.visibleIn) return true;
      return item.visibleIn.includes(this.currentKey);
    });
  }
}