import { Component, OnInit } from '@angular/core';
import {PresupuestosService} from '../../servicios/presupuestos.service';

@Component({
  selector: 'app-listapres',
  templateUrl: './listapres.component.html',
  styleUrls: ['./listapres.component.css']
})
export class ListapresComponent implements OnInit {

  listaDePresupuestos: any[] = [];

  constructor(private presupuestosService: PresupuestosService) {
    this.presupuestosService.getPresupuestos()
        .subscribe(lpresupuestos => {
           for ( const id$ in lpresupuestos) {
             const p = lpresupuestos[id$];
             p.id$ = id$;
             this.listaDePresupuestos.push(lpresupuestos[id$]);
          }
        })
  }
  ngOnInit() {
  }

  eliminarPresupuesto(id$) {

  this.presupuestosService.delPresupuesto(id$)
    .subscribe( res => {
      this.listaDePresupuestos = [];
      this.presupuestosService.getPresupuestos()
      .subscribe(presupuestos => {
         for ( const id$ in presupuestos) {
           const p = presupuestos[id$];
           p.id$ = id$;
           this.listaDePresupuestos.push(presupuestos[id$]);
        }
      })
    });
  }

}
