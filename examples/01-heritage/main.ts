class Person {
  constructor(private name: string, private age: number) {}

  sayHello() {
    console.log(
      "Hello my name is " + this.name + " and I am " + this.age + " years old."
    );
  }
}

const alice = new Person("Alice", 15);
alice.sayHello();

class Employee extends Person {
  constructor(
    name: string,
    age: number,
    private salary: number,
    private schmilblick: unknown
  ) {
    super(name, age);
  }

  congrats() {
    this.salary *= 1.1;
    console.log("Yeah! my salary is now " + this.salary);
    if (
      this.schmilblick &&
      typeof this.schmilblick === "object" &&
      "toto" in (this.schmilblick as object)
    ) {
      console.log(
        "this.schmilblick: ",
        (this.schmilblick as { toto: unknown }).toto
      );
    } else {
      console.log("else");
    }
  }

  override sayHello(): void {
    super.sayHello();
  }
}

const bob = new Employee("Bob", 34, 2300, { toto: 123 });
bob.sayHello();
bob.congrats();
