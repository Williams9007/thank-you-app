import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
// import your components here
// import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  // { path: '', component: ThankYouComponent }
];

export const appConfig = {
  providers: [
    provideRouter(routes),
  ],
};



