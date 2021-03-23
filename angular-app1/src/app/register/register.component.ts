import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  template: `
    <form #myform = "ngForm" (ngSubmit) = "register(myform)">
    <label> name </label>
    <input type ="text" name = "t1" required minlength = "3" #name="ngModel" ngModel/><br/>
    <!--<div *ngIf = "name.invalid && (name.dirty || name.touched)">; -->
    <div *ngIf="myform.submitted && name.invalid ">
    <div *ngIf = "name.errors.required">name is required</div>
    <div *ngIf = "name.errors.minlength">Name shuld contain atleast 3 characters </div>
    </div>

    <label> email </label>
    <input type ="email" name = "t2" #email ="ngModel" ngModel/><br/>
    <label> password</label>
    <input type ="text" name = "t3" required minlength = "3" #password ="ngModel" ngModel/><br/>
    <div *ngIf = "password.invalid && (password.dirty || password.touched)">;
    <div *ngIf = "password.errors.minlength">password should be of atleast 1 character </div>
    </div>
    <label> city </label>
    <input type ="text" name = "t4" #city="ngModel" ngModel/><br/>
    <label> pincode</label>
    <input type ="number" name = "t5" #pincode="ngModel" ngModel/><br/>
    <button type  ="submit">register</button>


  `,
  styles: [
  ]
})
export class RegisterComponent {

  register(myform: NgForm){  
    console.log(Object.prototype.toString.call(myform));                       // nay name can be passed here , it is not necessary to use the same name 
    console.log(myform);
    console.log(myform.value);

  }

  

}
