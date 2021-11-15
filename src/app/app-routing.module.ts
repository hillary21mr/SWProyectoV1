
import { PrincipalMenuComponent } from './Components/MainPages/Principal-menu/principal-menu/principal-menu.component';
import { LogInComponent } from './Components/MainPages/Login/log-in/log-in.component';
import { SignUpComponent } from './Components/MainPages/SignUp/sign-up/sign-up.component';
import{CrearRolComponent } from './Components/Roles/crear-rol/crear-rol.component';
import { PrincipalInicioComponent } from './Components/MainPages/Principal-inicio/principal-inicio/principal-inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'home', component: PrincipalInicioComponent},

  {path:'registro', component: SignUpComponent},

  {path:'login', component: LogInComponent},
  
  {path:'menu', component: PrincipalMenuComponent},

  {path:'CrearRoles', component: CrearRolComponent},
  
 // { path: '**', redirectTo: 'menuprincipal' }

 {path: '', redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
