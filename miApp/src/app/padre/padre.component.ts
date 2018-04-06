import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  public title: String;
  
  public dato_externo = "DATO EXTERNO";
  public datosExtJSON = { id: 1, nombre:'DatoExtJSON' }

  public datosDesdeHijo;

  constructor() { 
    this.title = "COMPONENTE PADRE";
  }

  ngOnInit() {
  }

  RecibirYUsarDatosDelHijo(event) {
    console.log(event);
    this.datosDesdeHijo = event;
  }

}
