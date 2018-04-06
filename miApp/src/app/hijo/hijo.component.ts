import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  public title: String;
  @Input() propUno: String;
  @Input() propDos: String;
  @Input() propDePadre1: String;
  @Input() propDePadre2: String;
  @Input('texto') propTres: String;
  @Output() datosDelHijo = new EventEmitter();
  //@Output() datosDelHijo : EventEmitter<JSON>; //CON DECORADOR OUTPUT, TIENE QUE SER UN OBJ DEL TIPO EVENEMITTER
  
  constructor() {
    this.title = "COMPONENTE HIJO - INPUT";
    //this.datosDelHijo = new EventEmitter();
  }

  ngOnInit() {
    console.log(this.propDePadre1);
    console.log(this.propDePadre2);
  }

  EnviarDatosAlPadre() {
    this.datosDelHijo.emit({id: 2, alias: 'Walter Junior'});
  }

}
