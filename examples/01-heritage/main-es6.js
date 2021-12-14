(() => {
  class Person {
    constructor(name, age) {
      this.age = age;
      this.name = name;
    }

    sayHello() {
      console.log(
        "Hello my name is " +
          this.name +
          " and I am " +
          this.age +
          " years old."
      );
    }
  }

  const alice = new Person("Alice", 15);
  alice.sayHello();

  class Employee extends Person {
    constructor(name, age, salary) {
      super(name, age);
      this.salary = salary;
    }

    congrats() {
      this.salary *= 1.1;
      console.log("Yeah! my salary is now " + this.salary);
    }
  }

  const bob = new Employee("Bob", 34, 2300);
  bob.sayHello();
  bob.congrats();

  const result = bob instanceof Person;
  console.log("result: ", result);
})();
