export class person{
    name: string;
    age: number;
    
    constructor(name: string , age:number){
        this.name=name;
        this.age=age;
    }
    info() {
        console.log(this.name  +"," + this.age);

    }
    
}
