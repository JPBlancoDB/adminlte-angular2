import {NgModule} from '@angular/core';
import {Routing} from './inicio.router';
import {InicioComponent}   from './inicio.component';

@NgModule({
  imports: [
    Routing
  ],
  exports: [],
  declarations: [
    InicioComponent
  ],
  providers: [],
})
export class InicioModule {
}
