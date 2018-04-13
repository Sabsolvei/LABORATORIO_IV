import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel  } from '@angular/forms';
import { AppComponent } from './app.component';
import { MostrarDatossComponent } from './mostrar-datoss/mostrar-datoss.component';
import { EnviarDatoComponent } from './enviar-dato/enviar-dato.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarDatossComponent,
    EnviarDatoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
