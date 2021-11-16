import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  username : string = "";
  contra : string = "";
  constructor(private router:Router) { }

  submit(){
    console.log(this.username);
    console.log(this.contra);
  }

  ngOnInit(): void {
  }

  Menu(){
    this.router.navigateByUrl("menuprincipal");
      }


}
