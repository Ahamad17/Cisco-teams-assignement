import { createFeatureSelector, createSelector } from "@ngrx/store";
import { adapter, TeamState } from "src/app/teams/team.reducers";

export const selectAll = adapter.getSelectors().selectAll;

export const selectTeamState = createFeatureSelector<TeamState>('teams-entity');

export const selectAllTeams = createSelector(selectTeamState, selectAll);

export const areTeamsLoaded = createSelector(selectTeamState, state => state.allTeamsLoaded);
