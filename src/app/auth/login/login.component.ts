import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/auth/auth.actions';
import { AppState } from 'src/app/reducers';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  template: `
  <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Build the future of
        <br class="hidden lg:inline-block">hybrid work
      </h1>
      <p class="mb-8 leading-relaxed">Champion hybrid work with video conferencing that’s engaging, intelligent, and inclusive.</p>
      <div class="flex justify-center">
        <button (click)="login()" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="../../../assets/webex-logo.png">
    </div>
  </div>
</section>
  `,
  styleUrls: []
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(logout())
  }

  login() {
    window.location.href = `https://webexapis.com/v1/authorize?client_id=${environment.CLIENT_ID}&response_type=code&redirect_uri=${environment.REDIRECT_URI}&scope=spark%3Aall%20spark%3Akms&state=set_state_here`;
  }

}
