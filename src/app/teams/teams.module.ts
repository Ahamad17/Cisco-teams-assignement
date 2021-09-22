import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { HomeComponent } from './home/home.component';
import { EditTeamsComponent } from './edit-teams/edit-teams.component';
import { ModalService } from "src/app/teams/modal.service";
import { TeamEntityService } from "src/app/teams/team.service";
import { TeamHttpService } from "src/app/teams/team-http.service";
import { TeamsResolver } from "src/app/teams/team.resolver";
import { teamReducer } from "src/app/teams/team.reducers";
import { TeamFacadeService } from "src/app/teams/team-facade.service";
import { TeamsEffects } from "src/app/teams/team.effects";

export const teamsRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {teams: TeamsResolver}
  },
  {
    path: '**', component: HomeComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(teamsRoutes),
    EffectsModule.forFeature([TeamsEffects]),
    StoreModule.forFeature('teams-entity', teamReducer)
  ],
  declarations: [
    HomeComponent,
    EditTeamsComponent
  ],
  exports: [
    HomeComponent
  ],
  entryComponents: [HomeComponent],
  providers: [
    ModalService,
    TeamEntityService,
    TeamHttpService,
    TeamsResolver,
    TeamFacadeService
  ]
})

export class TeamsModule { }
