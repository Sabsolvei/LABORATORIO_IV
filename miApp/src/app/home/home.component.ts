import { Component, OnInit } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RopaService]
})
export class HomeComponent implements OnInit {
  public titulo = "Pagina principal";
  public prenda_seleccionada: String;
  public lista_prendas: Array<String>;

  //fechas pipe
  public fecha: Date;

  constructor(public _ropaService: RopaService) {
    this.fecha = new Date(1986, 3, 14);
  }

  ngOnInit() {
    console.log(this._ropaService.prueba('camiseta Nike'));
    this.lista_prendas = this._ropaService.getRopa();
  }

  guardarPrenda() {
    this._ropaService.addRopa(this.prenda_seleccionada);
    this.prenda_seleccionada = null;
  }

  eliminarPrenda(index: number) {
    this._ropaService.deleteRopa(index);
  }


}
