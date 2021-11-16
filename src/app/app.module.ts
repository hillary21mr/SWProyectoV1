import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel } from '@angular/forms';  //  para trabajar con formularios
import { HttpClientModule } from '@angular/common/http';  // para realizar peticiones HTTP 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './Components/MainPages/Login/log-in/log-in.component';
import { PrincipalInicioComponent } from './Components/MainPages/Principal-inicio/principal-inicio/principal-inicio.component';
import { PrincipalMenuComponent } from './Components/MainPages/Principal-menu/principal-menu/principal-menu.component';
import { SignUpComponent } from './Components/MainPages/SignUp/sign-up/sign-up.component';
import { AsignarPeriodoComponent } from './Components/Periodos/AsignarPeriodo/asignar-periodo/asignar-periodo.component';
import { CEEPeriodoComponent } from './Components/Periodos/CEEPeriodo/ceeperiodo/ceeperiodo.component';
import { NuevoPeriodoComponent } from './Components/Periodos/NuevoPeriodo/nuevo-periodo/nuevo-periodo.component';
import { CrearAreaComponent } from './Components/Areas/CrearArea/crear-area/crear-area.component';
import { CrearRolComponent } from './Components/Roles/crear-rol/crear-rol.component';
import { AsignarRolComponent } from './Components/Roles/asignar-rol/asignar-rol.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    PrincipalInicioComponent,
    PrincipalMenuComponent,
    SignUpComponent,
    AsignarPeriodoComponent,
    CEEPeriodoComponent,
    NuevoPeriodoComponent,

    CrearAreaComponent,
      CrearRolComponent,
      AsignarRolComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
