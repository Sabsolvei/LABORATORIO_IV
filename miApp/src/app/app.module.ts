import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';

//imports primeng
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import { HijoComponent } from './hijo/hijo.component';
import { PadreComponent } from './padre/padre.component';
import { BindingComponent } from './binding/binding.component';


@NgModule({
  declarations: [
    AppComponent, 
    EmpleadoComponent,
    FrutaComponent,
    HomeComponent,
    ContactoComponent,
    CochesComponent,
    HijoComponent,
    PadreComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    ButtonModule,
    MenuModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
