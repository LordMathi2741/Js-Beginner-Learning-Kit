//DRY: Don't Repeat Yourself
class Animal {
    drink(arg){
        console.log(`${arg} is drinking`);
    }
    eat(arg){
        console.log(`${arg} is eating`);
    }
}

//Uses the asbtract class methods and reuse them
class Dog extends Animal{
}

class Cat extends Animal{

}

const dog = new Dog();
const cat = new Cat();
dog.eat("Teddy");
cat.eat("Whiskers");