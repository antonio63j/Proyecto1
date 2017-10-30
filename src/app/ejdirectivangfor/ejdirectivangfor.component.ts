import { Component, OnInit } from '@angular/core';

// import { PipeeuroPipe} from '../pipeeuro.pipe';

@Component({
  selector: 'app-ejdirectivangfor',
  templateUrl: './ejdirectivangfor.component.html',
  styleUrls: ['./ejdirectivangfor.component.css']
})
export class EjdirectivangforComponent implements OnInit {

  cursos:string[];
  precios:number[];
  constructor() {
    this.cursos = ['java', 'cobol', 'angular'];
    this.precios =[10.5, 11.6, 2.125];
  }
    ngOnInit() {
  }

}
