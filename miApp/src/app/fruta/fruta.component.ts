import { Component } from '@angular/core';
import { Fruta } from './fruta';

@Component({
  selector: 'fruta-tag',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})


export class FrutaComponent {
  public titulo = "COMPONENTE FRUTAS";
  public fruta:Fruta;
  public listaDeFrutas:Array<Fruta>;
  public trabajador_externo:Boolean;

  constructor()
  {
    this.fruta = new Fruta('Uva', 'Morada', true);
    this.listaDeFrutas = [ 
      new Fruta('Manzana', 'Roja', true),
      new Fruta('Banana', 'Amarilla', false),
      new Fruta('Kiwi', 'Verde', true)
    ];
    this.trabajador_externo = true;
  }

  cambiarExterno(valor:Boolean){
    this.trabajador_externo = valor;
  }

  
  
}