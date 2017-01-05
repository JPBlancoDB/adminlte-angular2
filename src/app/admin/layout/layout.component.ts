import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  private bodyClasses:string = "hold-transition skin-blue fixed sidebar-mini";

  constructor() {}

  ngOnInit() {
    this.loadScript();
    $('body').addClass(this.bodyClasses);
  }

  private loadScript() {
    this.cargarJs('assets/bootstrap/js/bootstrap.min.js');
    this.cargarJs('assets/js/app.min.js');
    this.cargarJs('assets/plugins/slimScroll/jquery.slimscroll.min.js');
    this.cargarJs('assets/plugins/fastclick/fastclick.js');
  }

  private cargarJs(js) {
    let node = document.createElement('script');
    node.src = js;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('body')[0].appendChild(node);
  }

  /*
   <!-- SlimScroll -->
   <script src="../../plugins/slimScroll/jquery.slimscroll.min.js"></script>
   <!-- FastClick -->
   <script src="../../plugins/fastclick/fastclick.js"></script>
   */

}
