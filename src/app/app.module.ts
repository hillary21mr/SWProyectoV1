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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { CrearRolComponent } from './Components/Roles/crear-rol/crear-rol.component';
import { AsignarRolComponent } from './Components/Roles/asignar-rol/asignar-rol.component';
<<<<<<< HEAD
import { ModificarAreaComponent } from './Components/Areas/modificar-area/modificar-area.component';
import { EliminarAreaComponent } from './Components/Areas/eliminar-area/eliminar-area.component';
import { CrearDepartamentoComponent } from './Components/Departamentos/crear-departamento/crear-departamento.component';
import { ModificarDeptartamentoComponent } from './Components/Departamentos/modificar-deptartamento/modificar-deptartamento.component';
import { ElimnarDepartamentoComponent } from './Components/Departamentos/elimnar-departamento/elimnar-departamento.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
=======
>>>>>>> parent of 0d3b843 (componentes)
=======

=======
<<<<<<< Updated upstream
=======
>>>>>>> parent of 38a142c (Comentario)
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
>>>>>>> parent of 36a50bb (Crear Roles)

>>>>>>> Stashed changes
=======
>>>>>>> parent of 0b0862f (Merge branch 'main' of https://github.com/Sebas1008/SWProyectoV1)

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
<<<<<<< HEAD
    CrearAreaComponent,
    CrearRolComponent,
    AsignarRolComponent
=======
    CrearAreaComponent
>>>>>>> parent of 36a50bb (Crear Roles)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
<<<<<<< HEAD
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
=======
<<<<<<< Updated upstream
    FormsModule
=======
    AngularFireModule.initializeApp(environment.firebaseConfig)
>>>>>>> Stashed changes
>>>>>>> parent of 38a142c (Comentario)
=======
    FormsModule
>>>>>>> parent of 0b0862f (Merge branch 'main' of https://github.com/Sebas1008/SWProyectoV1)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
