import { RouterModule, Routes } from '@angular/router';

import { EmploeesListComponent } from './emploees/emploees-list/emploees-list.component';
import { EmploeesAddFormComponent } from './emploees/emploees-add-form/emploees-add-form.component';
import { EmploeeGridComponent } from './emploees/emploee-grid/emploee-grid.component';

const app_routes: Routes = [
  { path: '', redirectTo: '/emploees', pathMatch: 'full' },
  { path: 'emploees', component: EmploeesListComponent },
  { path: 'emploees/:id', component: EmploeeGridComponent },
  { path: 'emploees/create', component: EmploeesAddFormComponent },
];

export const app_routing = RouterModule.forRoot(app_routes);
