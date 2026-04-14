import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RESUME_ROLES, ResumeRole } from 'src/app/shared/constants/app.constants';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  // ✅ Default dinámico desde constantes
  role: ResumeRole = RESUME_ROLES[0];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const type = params.get('type');

      // ✅ Validación contra constantes
      if (this.isResumeRole(type)) {
        this.role = type;
      } else {
        this.role = RESUME_ROLES[0]; // fallback dinámico
      }

      console.log('Current role:', this.role);
    });
  }

  // ✅ Type guard limpio (sin repetir lógica)
  private isResumeRole(type: string | null): type is ResumeRole {
    return RESUME_ROLES.includes(type as ResumeRole);
  }
}