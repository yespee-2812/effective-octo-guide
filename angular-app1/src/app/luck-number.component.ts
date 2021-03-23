import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component ({
    selector: 'lucky-number',
    template: `
    <div class = "{{style}} " > welcome subi </div>
    <button (click)="gen()">clickhere</button> to get your lucky number
    <h1 *ngIf= "luckynumber">your lucky number is {{luckynumber}}</h1>

    `
    ,
    styles: [
        'h1 {color:red }',
        '.info {font-weight: bold , font-size : 30px; color:green;} ',
        '.info2 {text-shadow : 5px 5px 5px red ;}']
    
})
export class luckynumbercomponent{
    luckynumber: number;
    style: string  = "info";
    gen(){
        this.luckynumber = Math.ceil(Math.random() *10);
        this.style = "info info2";
    }
}