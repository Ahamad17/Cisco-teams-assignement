import { Injectable } from "@angular/core";
import { Update } from "@ngrx/entity";
import { select, Store } from "@ngrx/store";
import { filter, finalize, first, tap } from "rxjs/operators";
import { AppState } from "src/app/reducers";
import { addTeam, loadAllTeams, teamDeleted, teamUpdated } from "src/app/teams/team.actions";
import { Team } from "src/app/teams/team.model";
import { areTeamsLoaded, selectAllTeams } from "src/app/teams/team.selectors";

@Injectable()
export class TeamEntityService {
  allTeams$ = this.store.pipe(select(selectAllTeams));

  loading = false;
  constructor(private store: Store<AppState>) { }

  getAll() {
    return this.store.pipe(
      select(areTeamsLoaded),
      tap(teamsLoaded => {
        if (!this.loading && !teamsLoaded) {
          this.loading = true;
          this.store.dispatch(loadAllTeams());
        }
      }),
      filter(teamsLoaded => teamsLoaded),
      first(),
      finalize(() => this.loading = false));
  }

  add(team: Team) {
    return this.store.dispatch(addTeam({team}));
  }

  find(teamId: string) {}

  update(team: Team) {
    const update: Update<Team> = {
      id: team.id,
      changes: team
    };
    return this.store.dispatch(teamUpdated({ update }));
  }

  delete(team: Team) {
    return this.store.dispatch(teamDeleted({id: team.id}));
  }
}
