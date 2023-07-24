class Hamster {
  constructor(name) {
    this.owner = ``;
    this.name = name;
    this.price = 15;
  }
  wheelRun() {
    console.log(`squeak squeak`);
  }
  eatFood() {
    console.log(`nibble nibble`);
  }
  getPrice() {
    return this.price;
  }
}

class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = new Array();
    this.bankAccount = 0;
  }
  getName() {
    return this.name;
  }
  getAge(age) {
    return (this.age = age);
  }
  getWeight(weight) {
    return (this.weight = weight);
  }
  greet(person) {
    console.log`Howdy, ${person.name}!`;
  }
  eat() {
    this.weight += 1.5;
    this.mood += 20;
  }
  exercise() {
    this.weight -= 1.5;
  }
  ageUp() {
    this.age = this.age + 1;
    this.height = this.height + 0.5;
    this.weight = this.weight + 5;
    this.mood = this.mood - 1;
    this.bankAccount = this.bankAccount + 10;
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood = this.mood + 10;
    this.bankAccount = this.bankAccount - hamster.getPrice();
  }
}
