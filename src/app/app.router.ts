import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'admin', loadChildren: 'app/admin/layout/layout.module#LayoutModule'}
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
