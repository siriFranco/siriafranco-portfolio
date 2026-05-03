import { Component } from '@angular/core';
import { CERTIFICATIONS, Certification, CertificationType } from '../../config/certifications.config';
import { AppMode, getModeFromPath, getBaseMode } from 'src/app/shared/constants/app.constants';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})

export class CertificationsComponent {

  groupedCertifications: Record<string, Certification[]> = {};
  selectedCert: Certification | null = null;

  
  mode: AppMode = 'home';

  openCert(cert: Certification) {
    // Solo abrir modal en pantallas pequeñas
    if (window.innerWidth < 768) {
      this.selectedCert = cert;
    }
  }

  closeCert() {
    this.selectedCert = null;
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const modeParam = this.route.snapshot.paramMap.get('mode');
    this.mode = getModeFromPath(modeParam);

    this.buildCertifications();
  }

  get types(): string[] {
    return Object.keys(this.groupedCertifications);
  }

  isMobile(): boolean {
    return window.matchMedia('(max-width: 768px)').matches;
  }

  handleIconClick(event: Event, cert: any) {
    if (this.isMobile()) {
      // ❌ Bloquea navegación en mobile
      event.preventDefault();
      event.stopPropagation();

      // Opcional: abrir modal también
      this.openCert(cert);
    }
  }

  handleCardClick(cert: any) {
    if (this.isMobile()) {
      this.openCert(cert);
    } else {
      if (cert.link) {
        window.open(cert.link, '_blank');
      }
    }
  }

  buildCertifications() {
    const base = getBaseMode(this.mode);
    this.groupedCertifications = {};

    const filtered = CERTIFICATIONS.filter(cert => {

      // 🏠 home y 💻 dev → todo
      if (base === 'home' || base === 'dev') {
        return true;
      }

      // 🏗 arch → solo los marcados como arch
      if (base === 'arch') {
        return cert.visibleIn?.includes('arch');
      }

      return true;
    });

    filtered.forEach(cert => {
      if (!this.groupedCertifications[cert.type]) {
        this.groupedCertifications[cert.type] = [];
      }
      this.groupedCertifications[cert.type].push(cert);
    });
  }
}