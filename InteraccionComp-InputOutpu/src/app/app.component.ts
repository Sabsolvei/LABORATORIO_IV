import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TitleHardcodeado';
  public arrayDatos;
  constructor() {
    this.arrayDatos = ['hola'];
   }
  cargarArrayEnApp(dato:string) {
    this.arrayDatos.push(dato);
  }


}
