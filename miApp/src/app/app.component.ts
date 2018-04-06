import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private items: MenuItem[];
  public title:string;

  ngOnInit() {
      this.items = [{
          label: 'Menu',
          items: [
              {label: 'New', icon: 'fa-plus', url: 'http://www.primefaces.org/primeng'},
              {label: 'Home', icon: 'fa-home', routerLink: ['/home']},
              {label: 'Fruta', icon: 'fa-apple', routerLink: ['/fruta']},
              {label: 'Empleados', icon: 'fa-download', routerLink: ['/empleado']},
              {label: 'Contacto', icon: 'fa-address-book', routerLink: ['/contacto']},
              {label: 'Coches', icon: 'fa-car', routerLink: ['/coches']},
              {label: 'Padre', icon: 'fa-car', routerLink: ['/padre']},
              {label: 'Recent Files', icon: 'fa-download', routerLink: ['/pagename'], queryParams: {'recent': 'true'}}
          ]
      }]
  }

  
}

// <a [routerLink]="['/home']" [routerLinkActive]="['activado']">Home -</a>

// <a [routerLink]="['/fruta']" [routerLinkActive]="['activado']">Fruta -</a>

// <a [routerLink]="['/empleado']" [routerLinkActive]="['activado']">Empleado -</a>

// <a [routerLink]="['/contacto']" [routerLinkActive]="['activado']">Contacto -</a>

// <a [routerLink]="['/coches']" [routerLinkActive]="['activado']">Coches </a>