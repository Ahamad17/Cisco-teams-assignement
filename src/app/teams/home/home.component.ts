import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/teams/modal.service';
import { TeamFacadeService } from 'src/app/teams/team-facade.service';
import { Team } from 'src/app/teams/team.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allTeams$ = this.teamFacadeService.allTeams$;

  constructor(private modalService: ModalService, private teamFacadeService: TeamFacadeService) { }

  ngOnInit(): void {
  }

  addTeam() {
    this.modalService.show({
      header: 'Add Team',
      teamName: null,
      save: (teamName: string) => {
        const team: Team = {
          id: '',
          name: teamName,
          creatorId: '',
          created: ''
        }
        this.teamFacadeService.add(team)
      },
      cancel: (teamName: string) => {
        console.log(teamName)
      }
    });
  }

  updateTeam(team: any) {
    this.modalService.show({
      header: 'Edit Team',
      teamName: team.name,
      save: (teamName: string) => {
        this.teamFacadeService.update({...team, name: teamName});
      },
      cancel: (teamName: string) => {
        console.log(teamName)
      }
    });
  }

  deleteTeam(team: any) {
    this.teamFacadeService.delete(team);
  }

}
