import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-principal-menu',
  templateUrl: './principal-menu.component.html',
  styleUrls: ['./principal-menu.component.scss']
})
export class PrincipalMenuComponent implements OnInit {

  constructor(private router:Router) { }


  AsignarRoles(){
    this.router.navigateByUrl("['asignaarrol']");
 
  }


CrearRoles(){
  this.router.navigateByUrl("['CrearRoles']");
}

Registro(){
  this.router.navigateByUrl("['registro']");
}

  Login(){
this.router.navigateByUrl("login");
  }
  ngOnInit(): void {
  }

}
