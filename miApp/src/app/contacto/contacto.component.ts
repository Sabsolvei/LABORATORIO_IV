import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public titulo = "Pagina de CONTACTO";
  public parametro;
  public administrador = true;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.forEach((params: Params) => { //la funcion callback no t permite salir del ambito de la funcion a la clase y no reconoce el parametro 'parametro', por eso se usa la expresion lambda
      this.parametro = params['valor'];
      console.log(params);
    });
  }

  redirigir() {
    this._router.navigate(['/contacto', 'ParamSarasa']);
  }

  redirigirAHome() {
    this._router.navigate(['/home']);
  }

  cambiar(value)
  {
    this.administrador = value;
  }

}
