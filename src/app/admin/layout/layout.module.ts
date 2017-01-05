import {NgModule} from '@angular/core';

import {LayoutComponent}   from './layout.component';
import {Routing} from "./layout.router";
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    Routing
  ],
  exports: [],
  declarations: [
    LayoutComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent
  ],
  providers: [],
})
export class LayoutModule {
}
