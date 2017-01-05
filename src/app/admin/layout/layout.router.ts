import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from "./layout.component";

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
      children: [
        {path: '', loadChildren: 'app/admin/inicio/inicio.module#InicioModule'}
      ]
  },
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);
