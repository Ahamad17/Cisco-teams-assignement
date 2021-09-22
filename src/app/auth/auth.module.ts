import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "src/app/auth/login/login.component";
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './reducers';
import { AuthGaurd } from "src/app/auth/auth.guard";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "src/app/auth/auth.effects";
import { AuthHttpService } from "src/app/auth/auth-http.service";

@NgModule({
  imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule.forChild(
        [
          {path: 'login', component: LoginComponent},
          {path: 'authcallback', component: AuthCallbackComponent},
        ]
      ),
      StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.authReducer),
      EffectsModule.forFeature([AuthEffects])

  ],
  declarations: [LoginComponent, AuthCallbackComponent],
  exports: [LoginComponent]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
      return {
          ngModule: AuthModule,
          providers: [
            AuthGaurd,
            AuthHttpService
          ]
      }
  }
}
