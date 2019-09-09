// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyC_e_m3FR_eXGVOwzkd28JhX393rorz4kg',
    authDomain: 'angular-auth-test-e5cd8.firebaseapp.com',
    databaseURL: 'https://angular-auth-test-e5cd8.firebaseio.com',
    projectId: 'angular-auth-test-e5cd8',
    storageBucket: 'angular-auth-test-e5cd8.appspot.com',
    messagingSenderId: '466014378721',
    appId: '1:466014378721:web:f423a2131343b6914ff5a0'
  },
  database: 'firebase',
  socialAuthEnabled: true
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
