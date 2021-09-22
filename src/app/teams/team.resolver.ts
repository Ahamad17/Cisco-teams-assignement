import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TeamFacadeService } from 'src/app/teams/team-facade.service';

@Injectable()
export class TeamsResolver implements Resolve<any> {

  loading = false;
  constructor(private teamFacadeService: TeamFacadeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.teamFacadeService.getAll();
  }
}
