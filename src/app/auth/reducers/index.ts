import {
  createReducer,
  on
} from '@ngrx/store';
import { AuthActions } from 'src/app/auth/action-types';

export const authFeatureKey = 'auth';

export interface AuthState {
  access_token: string;
}

export const initialState: AuthState = {
  access_token: ''
};

export const authReducer = createReducer(initialState,
  on(AuthActions.login, (state, action) => {
    return { access_token: action.access_token };
  }),

  on(AuthActions.logout, (state, action) => {
    return { access_token: '' };
  })
);
