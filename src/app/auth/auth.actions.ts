import { createAction, props } from '@ngrx/store';

export const login = createAction('[AuthCallback Page] User Login', props<{access_token: string}>());

export const logout = createAction('[Login Page] Logout');
