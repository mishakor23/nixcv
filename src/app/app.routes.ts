import { RouterModule, Routes } from '@angular/router';

const app_routes: Routes = [
  { path: '', redirectTo: '/emploees', pathMatch: 'full' },
  { path: 'emploees', component: EmploeesComponent }
];

export const app_routing = RouterModule.forRoot(app_routes);
