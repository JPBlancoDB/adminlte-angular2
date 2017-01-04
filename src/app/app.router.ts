import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'inicio', loadChildren: 'app/admin/inicio/inicio.module#InicioModule'}
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
