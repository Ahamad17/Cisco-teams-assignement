import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class AuthHttpService {

  Access_Token_Url = environment.ACESSTOKEN_URL;
  constructor(private http: HttpClient) {

  }

  getAccessToken(code: string) {
    const headers = new HttpHeaders({ 'content-type': 'application/x-www-form-urlencoded' });
    const body = `grant_type=${environment.GRANT_TYPE}&client_id=${environment.CLIENT_ID}&client_secret=${environment.CLIENT_SECRET}&code=${code}&redirect_uri=${environment.REDIRECT_URI}`
    return this.http.post(this.Access_Token_Url, body, { headers })
  }
}
