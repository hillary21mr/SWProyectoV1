import { Component } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/AngularFirestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularSW';

  constructor(/*private firestore: AngularFirestore*/) {

  }
/* 
  altaUsuario() {
    console.log("Entra alta usuario")
    this.firestore.collection("usuarios").add({"nombre": "Jonathan", "password": "123456"}).then(()=>{
       alert("se dio de alto");
       console.log("Entra alta usuario 1")
     }).catch(err => {
       console.log(err);
       console.log("Entra alta usuario 2")
     })
  }
  */
}

