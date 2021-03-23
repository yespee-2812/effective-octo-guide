
import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';


@Component({
  selector: 'app-register1',
  template: `
    <form #regform = "ngForm" (ngSubmit) = "register(regform)">
    enter name : <input type = "text" name  = "name" #name = "ngModel" [(ngModel)]=user.name /><br/>
    enter email : <input type = "email" name = "email" #email = "ngModel"[(ngModel)]=user.email/><br/>
    enter password : <input type = "password" name ="password" #password = "ngModel"[(ngModel)]=user.password/><br/>
    enter city : <input type = "text" name = "city" #city = "ngModel" [(ngModel)]=user.addresss.city/><br/>
    enter pincode: <input type = "number" name = "pincode" #pincode = "ngModel"[(ngModel)]=user.addresss.pincode/><br/>
    <button type  = "submit"> submit</button>
    </form>
  `,
  styles: [
  ]
})
export class Register1Component  {
  user : user = new user();
  register(f:NgForm){
    if(f.valid)
    console.log(this.user);
    
    else
    alert("submit again") 
  }
}

  
  export class user {
  
  name:string;
  email:string;
  password:string;
  addresss:Adds1 = new Adds1();     // e : Emp = new Emp(); 


  }
  
  
export class Adds1 {
  city:string;
  pincode:number;
}
