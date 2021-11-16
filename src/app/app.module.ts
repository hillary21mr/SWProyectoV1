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
import { CrearDepartamentoComponent } from './Components/Departamentos/crear-departamento/crear-departamento.component';
import { ModificarDepartamentoComponent } from './Components/Departamentos/modificar-departamento/modificar-departamento.component';
import { CrearEvaluacionComponent } from './Components/Evaluaciones/crear-evaluacion/crear-evaluacion.component';
import { EvaluacionDependenciasComponent } from './Components/Evaluaciones/evaluacion-dependencias/evaluacion-dependencias.component';
import { CompletarEvaluacionXDependenciaComponent } from './Components/Evaluaciones/completar-evaluacion-xdependencia/completar-evaluacion-xdependencia.component';
import { ModificarEvaluacionXDependenciaComponent } from './Components/Evaluaciones/modificar-evaluacion-xdependencia/modificar-evaluacion-xdependencia.component';
import { ListarEvidenciasXdependenciaComponent } from './Components/Evaluaciones/listar-evidencias-xdependencia/listar-evidencias-xdependencia.component';
//import { CrearPeriodoComponent } from './Components/Periodos/crear-periodo/crear-periodo.component';


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
      AsignarRolComponent,
      CrearDepartamentoComponent,
      ModificarDepartamentoComponent,
      CrearEvaluacionComponent,
      EvaluacionDependenciasComponent,
      CompletarEvaluacionXDependenciaComponent,
      ModificarEvaluacionXDependenciaComponent,
      ListarEvidenciasXdependenciaComponent


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
