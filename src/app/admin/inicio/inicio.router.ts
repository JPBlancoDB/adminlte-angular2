import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {InicioComponent} from './inicio.component';

const routes: Routes = [
  {path: '', component: InicioComponent}
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);
