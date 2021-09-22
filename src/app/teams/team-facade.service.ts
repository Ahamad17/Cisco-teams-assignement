import { Injectable } from '@angular/core';
import { Team } from 'src/app/teams/team.model';
import { TeamEntityService } from 'src/app/teams/team.service';

@Injectable()
export class TeamFacadeService {
  allTeams$ = this.teamEntityService.allTeams$;

  constructor(private teamEntityService: TeamEntityService) { }

  getAll() {
    return this.teamEntityService.getAll();
  }

  find(id: string) {
    return this.teamEntityService.find(id);
  }

  add(team: Team) {
    return this.teamEntityService.add(team);
  }

  update(team: Team) {
    return this.teamEntityService.update(team);
  }

  delete(team: Team) {
    return this.teamEntityService.delete(team);
  }
}
