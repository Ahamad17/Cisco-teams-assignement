import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { AuthActions } from './action-types';


@Injectable()
export class AuthEffects {
  login$ = createEffect(() => this.actions$.pipe(ofType(AuthActions.login),
    tap(action => {
      localStorage.setItem('cisco_access_token', action.access_token);
    })
  ), {dispatch: false});

  logout$ = createEffect(() => this.actions$.pipe(ofType(AuthActions.logout),
    tap(action => {
        localStorage.removeItem('cisco_access_token');
        this.router.navigateByUrl('/login');
      })
  ), {dispatch: false});

  constructor(private actions$: Actions, private router: Router) {
  }
}
