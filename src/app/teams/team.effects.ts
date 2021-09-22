import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { concatMap, map } from "rxjs/operators";
import { AppState } from "src/app/reducers";
import { TeamHttpService } from "src/app/teams/team-http.service";
import { addTeam, allTeamsLoaded, loadAllTeams, postAdd, teamDeleted, teamUpdated } from "src/app/teams/team.actions";
import { Team } from "src/app/teams/team.model";

@Injectable()
export class TeamsEffects {
  loadTeams$ = createEffect(() => this.actions$.pipe(
    ofType(loadAllTeams),
    concatMap(action => this.teamHttpService.getAllTeams()),
    map((teams: Team[]) => allTeamsLoaded({ teams }))
  ));

  saveTeam$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(teamUpdated),
        concatMap(action => this.teamHttpService.saveTeam(
          action.update.id,
          action.update.changes
        ))
      ),
    { dispatch: false }
  );

  addTeam$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(addTeam),
        concatMap(action => this.teamHttpService.addTeam(
          action.team
        ).pipe(map((res) => {
          this.store.dispatch(postAdd({ team: res }))
        })))
      ),
    { dispatch: false }
  );

  deleteTeam$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(teamDeleted),
        concatMap(action => this.teamHttpService.deleteTeam(
          action.id
        ))
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private teamHttpService: TeamHttpService, private store: Store<AppState>) { }
}
