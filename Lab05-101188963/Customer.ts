export class Customer {
  private firstName: string;
  private lastName: string;
  private age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  public getAge() {
    console.log(`${this.firstName} ${this.lastName} is ${this.age} years old`);
  }
  public greeter() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  }
}