import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {
  private _nombre_prenda: String;
  private _coleccion_ropa : Array<String>;

  constructor() { 
    this._coleccion_ropa = [];
  }

  prueba(nombre_prenda) {
    return nombre_prenda;
  }

  getRopa():Array<String> {
    return this._coleccion_ropa;
  }

  addRopa(nombre_prenda) {
    this._coleccion_ropa.push(nombre_prenda);
  }

  deleteRopa(index:number) {
    this._coleccion_ropa.splice(index, 1);
    alert(index);
  }

}
