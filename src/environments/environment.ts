// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  CRUD_BASE_URL: 'https://webexapis.com/v1/teams',
  GRANT_TYPE: 'authorization_code',
  CLIENT_ID: 'C1296fe1f3045509674df650d4d14e884b4cd694c003c4d38f093fa2dfb45b5fa',
  CLIENT_SECRET: 'b760f488e32efaacaea57d5b41aef1dc54ea42fccdb3d2e6810755833eabce2d',
  REDIRECT_URI: 'http://localhost:4200/authcallback',
  ACESSTOKEN_URL: 'https://webexapis.com/v1/access_token',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
