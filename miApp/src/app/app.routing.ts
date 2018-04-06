import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';

import { HijoComponent } from './hijo/hijo.component';
import { PadreComponent } from './padre/padre.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'empleado', component: EmpleadoComponent},
    { path: 'frutas', component: FrutaComponent},
    { path: 'home', component: HomeComponent},
    { path: 'contacto', component: ContactoComponent},
    { path: 'coches', component: CochesComponent},
    { path: 'contacto/:valor', component: ContactoComponent},
    { path: 'padre', component: PadreComponent},
    { path: '**', component: HomeComponent}
];
// el path comodin (/sarasa) debe ir al final, si se pone al principio pisa los otros path y siempre ira al comodin

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

