import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usodirectivainputpadre',
  templateUrl: './usodirectivainputpadre.component.html',
  styleUrls: ['./usodirectivainputpadre.component.css']
})
export class UsodirectivainputpadreComponent implements OnInit {
  tituloImpuestoPorPadre: string = 'Avisos';
  avisos: string[] = ['Aviso 1', 'Aviso 2', 'Aviso 3'];

  constructor() { }

  ngOnInit() {
  }

}
