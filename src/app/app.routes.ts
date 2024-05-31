import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./facebook-integration/facebook-integration.module').then(m => m.FacebookIntegrationModule)
  }
];
