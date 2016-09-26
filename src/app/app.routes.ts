import { RouterModule, Routes } from '@angular/router';

import { EmploeesListComponent } from './emploees/emploees-list/emploees-list.component';

const app_routes: Routes = [
  { path: '', redirectTo: '/emploees', pathMatch: 'full' },
  { path: 'emploees', component: EmploeesListComponent }
];

export const app_routing = RouterModule.forRoot(app_routes);
