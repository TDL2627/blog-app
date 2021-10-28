// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverUrl: 'http://localhost:3400/',
  usersUrl: 'http://localhost:3400/users',
  firebaseConfig: {
    apiKey: "AIzaSyByCJlPEbNUL59zSGGNZaPbmFWVgd3LqBY",
    authDomain: "express-demo-a7c37.firebaseapp.com",
    projectId: "express-demo-a7c37",
    storageBucket: "express-demo-a7c37.appspot.com",
    messagingSenderId: "611395080919",
    appId: "1:611395080919:web:c85f4855bd0d03b3d51692"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
