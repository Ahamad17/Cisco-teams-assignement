import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { login, logout } from 'src/app/auth/auth.actions';
import { isLoggedIn, isLoggedOut } from 'src/app/auth/auth.selectors';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cisco-teams';

  isLoggedIn$: Observable<boolean> = of(false);
  isLoggedOut$: Observable<boolean> = of(true);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {

    const access_token = localStorage.getItem('cisco_access_token');
      if (access_token) {
        this.store.dispatch(login({access_token: access_token}));
      }

    this.isLoggedIn$ = this.store.pipe(select(isLoggedIn));
    this.isLoggedOut$ = this.store.pipe(select(isLoggedOut));
  }

  logOut() {
    this.store.dispatch(logout())
  }
}
