var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.getInstance = function (name, age) {
        if (!this.instance) {
            this.instance = new Student(name, age);
        }
        return this.instance;
    };
    return Student;
}());
var student1 = Student.getInstance('John Doe', 20);
student1.age = 21;
console.log(student1.age); // 21
