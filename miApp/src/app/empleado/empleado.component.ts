import { Component } from '@angular/core';
import { Empleado } from './empleado';
import { Persona } from './persona';

@Component({
  selector: 'emp-tag',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})


export class EmpleadoComponent {
  public titulo = "COMPONENTE EMPLEADOS";
  public empleado:Empleado;
  public trabajadores:Array<Empleado>;
  public trabajador_externo:boolean;
  public color:string;
  public color_seleccionado:string;
  
  public persona:Persona;

  constructor()
  {
    
    this.empleado = new Empleado('Juan Perez', 50, 'Cocinero', true);
    this.trabajadores = [ 
      new Empleado('Manolo Martinez', 53, 'Programador', true),
      new Empleado('Juana Garcia', 33, 'Administrativo', false),
      new Empleado('Laura Lopez', 43, 'Contador', true)
    ];
    this.trabajador_externo = true;
    this.color = 'green';
    this.color_seleccionado = '#CCC';

    this.persona = new Persona();
  }

  cambiarExterno(valor:boolean){
    this.trabajador_externo = valor;
  }

  saludar() {
    alert("Hola mundo ANGULAR 2");
  }

  Guardar() {
    this.persona.Guardar();
  }

  Traer() {
    this.persona.Traer();
  }

  logColorSeleccionado()
  {
    console.log(this.color_seleccionado);
  }
}