var Person = function (name, age) {
  this.age = age;
  this.name = name;
};

Person.prototype.sayHello = function () {
  console.log(
    "Hello my name is " + this.name + " and I am " + this.age + " years old."
  );
};

// var alice = new Person("Alice", 15);
var alice = {};
Object.setPrototypeOf(alice, Person.prototype);
Person.bind(alice)("Alice", 15);
alice.sayHello();

var Employee = function (name, age, salary) {
  Person.bind(this)(name, age);
  this.salary = salary;
};

Employee.prototype.congrats = function () {
  this.salary *= 1.1;
  console.log("Yeah! my salary is now " + this.salary);
};

Object.setPrototypeOf(Employee.prototype, Person.prototype);

var bob = new Employee("Bob", 34, 2300);
bob.sayHello();
bob.congrats();
