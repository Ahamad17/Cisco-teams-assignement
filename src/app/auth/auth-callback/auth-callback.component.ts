import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthHttpService } from 'src/app/auth/auth-http.service';
import { login } from 'src/app/auth/auth.actions';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-auth-callback',
  template: '',
})
export class AuthCallbackComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private store: Store<AppState>, private router: Router, private authHttpService: AuthHttpService) { }

  ngOnInit(): void {
    let code: string;
    this._route.queryParams.subscribe(params => {
      code = params['code'];
      this.authHttpService.getAccessToken(code).subscribe((token: any) => {
        const access_token = <string>token.access_token;
        this.store.dispatch(login({ access_token }));
        this.router.navigateByUrl('/teams');
      })
    });
  }

}
