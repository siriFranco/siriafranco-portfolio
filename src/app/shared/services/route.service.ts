import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { RESUME_ROLES, PORTFOLIO_TYPES, ResumeRole, PortfolioType  } from '../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  // 🔹 Obtener tipo de portfolio
  getPortfolioType(route: ActivatedRoute): Observable<PortfolioType | 'all'> {
    return route.paramMap.pipe(
      map(params => {
        const type = params.get('type');

        if (PORTFOLIO_TYPES.includes(type as PortfolioType)) {
          return type as PortfolioType;
        }

        return 'all';
      })
    );
  }

  // 🔹 Obtener rol de resume
  getResumeRole(route: ActivatedRoute): Observable<ResumeRole> {
    return route.paramMap.pipe(
      map(params => {
        const type = params.get('type');

        if (RESUME_ROLES.includes(type as ResumeRole)) {
          return type as ResumeRole;
        }

        return 'software';
      })
    );
  }
}