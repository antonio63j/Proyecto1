import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { FechaactualComponent } from './fechaactual/fechaactual.component';
import { ViewmodeloComponent } from './viewmodelo/viewmodelo.component';
import { EjpropertybindingComponent } from './ejpropertybinding/ejpropertybinding.component';
import { EjeventbindingComponent } from './ejeventbinding/ejeventbinding.component';
import { Ej2waybindingComponent } from './ej2waybinding/ej2waybinding.component';
import { EjdirectivangifComponent } from './ejdirectivangif/ejdirectivangif.component';
import { EjdirectivangstyleComponent } from './ejdirectivangstyle/ejdirectivangstyle.component';
import { EjdirectivangclassComponent } from './ejdirectivangclass/ejdirectivangclass.component';
import { EjdirectivangforComponent } from './ejdirectivangfor/ejdirectivangfor.component';
import { DirectivamenuDirective } from './directivamenu.directive';
import { C1Component } from './c1/c1.component';
import { TestdirectivamenuComponent } from './testdirectivamenu/testdirectivamenu.component';
import { UsodirectivainputpadreComponent } from './usodirectivainputpadre/usodirectivainputpadre.component';
import { UsodirectivainputhijoComponent } from './usodirectivainputhijo/usodirectivainputhijo.component';
import { PipeeuroPipe } from './mispipes/pipeeuro.pipe';
import { Pipeeuro2Pipe } from './mispipes/pipeeuro2.pipe';
import { TestproveedoresComponent } from './testproveedores/testproveedores.component';
import { InicioComponent } from './inicio/inicio.component';

// Importacion de servicios
//import { ProveedoresService } from './servicios/proveedores.service';

import {Routes, RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './formproveedores/addprovee/addprovee.component';
import { AddpresComponent } from './formreactivopresupuesto/addpres/addpres.component';

import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path: 'testproveedores',component: TestproveedoresComponent},
  {path: 'directivainput',component: UsodirectivainputpadreComponent},
  {path: 'addprovee', component: AddproveeComponent},
  {path: 'addprovee', component: AddpresComponent},
  {path:'**', component: InicioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CopyrightComponent,
    FechaactualComponent,
    ViewmodeloComponent,
    EjpropertybindingComponent,
    EjeventbindingComponent,
    Ej2waybindingComponent,
    EjdirectivangifComponent,
    EjdirectivangstyleComponent,
    EjdirectivangclassComponent,
    EjdirectivangforComponent,
    DirectivamenuDirective,
    C1Component,
    TestdirectivamenuComponent,
    UsodirectivainputpadreComponent,
    UsodirectivainputhijoComponent,
    PipeeuroPipe,
    Pipeeuro2Pipe,
    TestproveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpresComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
