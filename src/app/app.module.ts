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
<<<<<<< Updated upstream
=======
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

>>>>>>> Stashed changes

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
    CrearAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< Updated upstream
    FormsModule
=======
    AngularFireModule.initializeApp(environment.firebaseConfig)
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
