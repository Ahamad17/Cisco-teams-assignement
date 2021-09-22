import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { allTeamsLoaded, postAdd, teamDeleted, teamUpdated } from "src/app/teams/team.actions";
import { Team } from "src/app/teams/team.model";

export interface TeamState extends EntityState<Team> {
  allTeamsLoaded: boolean;
}

export const adapter = createEntityAdapter<Team>({
});

export const initialTeamState = adapter.getInitialState({ allTeamsLoaded: false });


export const teamReducer = createReducer(initialTeamState,
  on(allTeamsLoaded, (state, action) => adapter.setAll(action.teams, { ...state, allTeamsLoaded: true })),

  on(teamUpdated, (state, action) =>
    adapter.updateOne(action.update, state)),

  on(teamDeleted, (state, action) =>
    adapter.removeOne(action.id, state)),

  on(postAdd, (state, action) =>
    adapter.addOne(action.team, state))

);
