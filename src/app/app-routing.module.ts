import { CrearRolComponent } from './Components/Roles/crear-rol/crear-rol.component';
import { NuevoPeriodoComponent } from './Components/Periodos/NuevoPeriodo/nuevo-periodo/nuevo-periodo.component';
import { CEEPeriodoComponent } from './Components/Periodos/CEEPeriodo/ceeperiodo/ceeperiodo.component';
import { AsignarPeriodoComponent } from './Components/Periodos/AsignarPeriodo/asignar-periodo/asignar-periodo.component';
import { ModificarEvaluacionXDependenciaComponent } from './Components/Evaluaciones/modificar-evaluacion-xdependencia/modificar-evaluacion-xdependencia.component';
import { ListarEvidenciasXdependenciaComponent } from './Components/Evaluaciones/listar-evidencias-xdependencia/listar-evidencias-xdependencia.component';
import { EvaluacionDependenciasComponent } from './Components/Evaluaciones/evaluacion-dependencias/evaluacion-dependencias.component';
import { CompletarEvaluacionXDependenciaComponent } from './Components/Evaluaciones/completar-evaluacion-xdependencia/completar-evaluacion-xdependencia.component';
import { ModificarDepartamentoComponent } from './Components/Departamentos/modificar-departamento/modificar-departamento.component';
import { CrearEvaluacionComponent } from './Components/Evaluaciones/crear-evaluacion/crear-evaluacion.component';
import { CrearDepartamentoComponent } from './Components/Departamentos/crear-departamento/crear-departamento.component';
import { ModificarAreaComponent } from './Components/Areas/CrearArea/modificar-area/modificar-area.component';
import { CrearAreaComponent } from './Components/Areas/CrearArea/crear-area/crear-area.component';
import { AsignarRolComponent } from './Components/Roles/asignar-rol/asignar-rol.component';

import { PrincipalMenuComponent } from './Components/MainPages/Principal-menu/principal-menu/principal-menu.component';
import { LogInComponent } from './Components/MainPages/Login/log-in/log-in.component';
import { SignUpComponent } from './Components/MainPages/SignUp/sign-up/sign-up.component';
import { PrincipalInicioComponent } from './Components/MainPages/Principal-inicio/principal-inicio/principal-inicio.component';
import { NgModule, Component, ViewChildren } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';


const routes: Routes = [

    /*Areas*/
      {path:'crearArea', component: CrearAreaComponent},
      {path:'modificararea', component: ModificarAreaComponent},

    /*Departamentos*/ 
      {path:'creardepartamento', component: CrearDepartamentoComponent},
      {path:'modificardepartamento', component: ModificarDepartamentoComponent},

    /*Evaluaciones*/ 
      {path:'comEvaluacionXdepen', component:CompletarEvaluacionXDependenciaComponent},
      {path:'crearEvaluacion', component: CrearEvaluacionComponent},
      {path:'EvaluacionDependencias', component: EvaluacionDependenciasComponent},
      {path:'ListaEvidenciasXdepen', component: ListarEvidenciasXdependenciaComponent},
      {path:'modificarEvaluacionXdepen', component: ModificarEvaluacionXDependenciaComponent},


    /*Periodos*/

      {path:'AsignarPeriodos', component: AsignarPeriodoComponent},
      {path:'CEEPeriodo', component: CEEPeriodoComponent},
      {path:'crearPeriodo', component: NuevoPeriodoComponent},

    /*Roles*/ 
      {path:'CrearRol', component: CrearRolComponent},
      {path:'AsignarRol', component: AsignarRolComponent},
   

    /*MainPages*/ 

      /*Principal-Inicio*/
      {path:'home', component: PrincipalInicioComponent},
     /*SignUp*/
      {path:'registro', component: SignUpComponent},
     /*Login*/
      {path:'login', component: LogInComponent},

     /*Principal-Menu*/
      {path:'menu', component: PrincipalMenuComponent},


     /*  { path: '**', redirectTo: 'home' },*/

 /* {
    path: 'Roles', 
    component: Component,
    children: [
      { path: 'asignarrol', component: AsignarRolComponent }
    ]
  },*/

  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
