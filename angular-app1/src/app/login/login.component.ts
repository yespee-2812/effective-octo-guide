import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <form (ngSubmit) = "login()">
    enter your name : <input type ="text" name ="t1"[(ngModel)] = "username"/><br/>
    enter your password: <input type ="text" name ="t2"[(ngModel)] = "password"/><br/>
    <button type = "submit">submit botton </button>
    
    <div *ngIf = "message">{{message}}</div>
    
    </form>
    
  `,
  styles: [
  ]
})
export class LoginComponent {

  username:string;
  password:string;
  message:string;
  login(){
    if(this.username =="subhiksha" && this.password == "123"){
      this.message = "login successfull ";
    }
    else{
      this.message = " login not successfull";
    }


  }
 
}
