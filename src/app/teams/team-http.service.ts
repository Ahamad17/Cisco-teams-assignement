import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { Team } from "src/app/teams/team.model";
import { environment } from "src/environments/environment";

@Injectable()
export class TeamHttpService {

  Base_URL = environment.CRUD_BASE_URL;
  constructor(private http: HttpClient) {
  }

  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('cisco_access_token')}`
    });
  }


  getAllTeams() {
    return this.http.get<Team[]>(this.Base_URL, { headers: this.getHeaders() }).pipe(map((res: any) => res.items))
  }

  saveTeam(id: any, changes: any) {
    return this.http.put(this.Base_URL + `/${id}`, {name: changes.name}, {headers: this.getHeaders()})
  }

  addTeam(team: Team) {
    return this.http.post<Team>(this.Base_URL, {name: team.name}, { headers: this.getHeaders() })
  }

  deleteTeam(id: any) {
    return this.http.delete(this.Base_URL + `/${id}`, { headers: this.getHeaders() });
  }
}
