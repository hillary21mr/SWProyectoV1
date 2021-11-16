import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal-inicio',
  templateUrl: './principal-inicio.component.html',
  styleUrls: ['./principal-inicio.component.scss']
})
export class PrincipalInicioComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  Login(){
    this.router.navigateByUrl("login");
      }

}
