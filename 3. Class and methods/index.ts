//Follow interface segregation principle
interface IActions{
    drink():void;
    eat():void;
}

//Resolve the contract for the interface, follow dependencies inversion principle
class Actions implements IActions{
    drink(){
        console.log('drink');
    }
    eat(){
        console.log('eat');
    }
}

//Inyect the interface in the constructor, follow dependency inversion principle
class Person{
    constructor(private actions:IActions){}
    doActions(){
        this.actions.drink();
        this.actions.eat();
    }
}

const actions = new Actions();
const person = new Person(actions);
person.doActions();