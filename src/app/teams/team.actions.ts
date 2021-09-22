import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { Team } from "src/app/teams/team.model";

export const loadAllTeams = createAction('[Teams Resolver] Load All Teams');

export const allTeamsLoaded = createAction('[Load Teams Effect] All Teams Loaded', props<{ teams: Team[] }>());

export const teamUpdated = createAction('[Edit Team Dialog] Team Updated', props<{ update: Update<Team> }>());

export const teamDeleted = createAction('[Team List] Delete Team', props<{ id: string }>());

export const addTeam = createAction('[Edit Team Dialog] Add Team', props<{ team: Team }>());

export const postAdd = createAction('[Team Effects] Add Team', props<{ team: Team }>());
