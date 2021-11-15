import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  username : string = "";
  contra : string = "";

  constructor(private router:Router) { }

 

  ngOnInit(): void {
  }

  Menu(){
    this.router.navigate(['/menu']);
      }

}
