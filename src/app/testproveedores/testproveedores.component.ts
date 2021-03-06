import { Component, OnInit } from '@angular/core';

import {ProveedoresService} from '../servicios/proveedores.service';

@Component({
  selector: 'app-testproveedores',
  templateUrl: './testproveedores.component.html',
  styleUrls: ['./testproveedores.component.css'],
  providers: [ProveedoresService]
})

export class TestproveedoresComponent implements OnInit {
  mensaje : string;
  proveedores : any;

  constructor( private proveedoresService : ProveedoresService) { }

  ngOnInit() {
      this.mensaje = this.proveedoresService.getVersion();
      this.proveedores = this.proveedoresService.getProviders();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {

  }
}
