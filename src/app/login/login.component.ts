import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';

declare var $;
const bootstrap = 'assets/bootstrap/js/bootstrap.min.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private bodyClasses:string = "hold-transition login-page";

  constructor() { }

  ngOnInit(): void {
    this.loadScript();
    $('body').addClass(this.bodyClasses);
  }

  public loadScript() {
    console.log('Cargando bootstrap...')
    let node = document.createElement('script');
    node.src = bootstrap;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('body')[0].appendChild(node);
  }

  ngOnDestroy() {
    $('body').removeClass(this.bodyClasses);
  }
}
