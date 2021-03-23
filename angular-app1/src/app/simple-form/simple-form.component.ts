import { SelectorMatcher } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <form (ngSubmit) ="dosomething()">
    enter your name : <input type ="text" name ="t1"[(ngModel)] = "name"/><br/>
    enter your dataofbirth: <input type ="date" name ="t2"[(ngModel)] = "dob"/><br/>
    <button type = "submit">submit botton </button>
    </form>

    Hello{{name}} and my age is {{dob}}
  `,
  styles: [
  ]
})
export class SimpleFormComponent {

  name : string; // we want whatever the user enters above to be stored here 
  dob:Date;

  dosomething() {
    this.name = this.name.toUpperCase();
    

 }
}
