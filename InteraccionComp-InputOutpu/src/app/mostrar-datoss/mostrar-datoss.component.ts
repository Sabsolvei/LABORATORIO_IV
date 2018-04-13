import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mostrar-datoss',
  templateUrl: './mostrar-datoss.component.html',
  styleUrls: ['./mostrar-datoss.component.css']
})

export class MostrarDatossComponent implements OnInit {
  @Input() dato: any;
  constructor() { }

  ngOnInit() {
  }

}
