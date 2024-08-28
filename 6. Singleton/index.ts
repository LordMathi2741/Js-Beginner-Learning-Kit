class Student {
     name: string;
     age: number;
     private static instance: Student;

    constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
     }

     static getInstance(name: string, age: number):Student {
         if (!this.instance) {
             this.instance = new Student(name, age);
         }
          return this.instance;
     }

}


let student1 = Student.getInstance('John Doe', 20);
let student2 = Student.getInstance('Jane Doe', 21);

console.log(student1 === student2); // true
console.log(student1.name); // John Doe
console.log(student1.age); // 20
