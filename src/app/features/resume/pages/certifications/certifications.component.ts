import { Component } from '@angular/core';
import { CERTIFICATIONS, Certification, CertificationType } from '../../config/certifications.config';
@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})

export class CertificationsComponent {

  groupedCertifications: Record<string, Certification[]> = {};
  selectedCert: Certification | null = null;

  openCert(cert: Certification) {
    // Solo abrir modal en pantallas pequeñas
    if (window.innerWidth < 768) {
      this.selectedCert = cert;
    }
  }

  closeCert() {
    this.selectedCert = null;
  }
  ngOnInit() {
    CERTIFICATIONS.forEach(cert => {
      if (!this.groupedCertifications[cert.type]) {
        this.groupedCertifications[cert.type] = [];
      }
      this.groupedCertifications[cert.type].push(cert);
    });
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
}