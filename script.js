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
    this.weight += .75;
    this.mood += 20;
  }
  exercise() {
    this.weight -= 1.5;
  }
  ageUp() {
    this.age = this.age + 1;
    this.height = this.height + 0.5;
    if(this.age<11){
        this.weight = this.weight + 15;
    }else{
        this.weight = this.weight + 1;
    }
    this.mood = this.mood - 1;
    this.bankAccount = this.bankAccount + 10;
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood = this.mood + 10;
    this.bankAccount = this.bankAccount - hamster.getPrice();
  }
}

/* Create a Story with your Person */
// 1.Instantiate a new Person named Timmy
const timmy = new Person('Timmy');
console.log(timmy);

// 2. Age Timmy five years
for(let i=0;i<5;i++){
    timmy.ageUp();
}
console.log(timmy);

// 3. At this point Timmy's a little bummed.
// As a precocious child, he feels he's "seen it all" already.
// Have him eat five times.
for(let i=0;i<5;i++){
    timmy.eat();
}
console.log(timmy)

// 4. Now Timmy's a little heavier than he wants to be.
// Kindergarten's coming up and he wants to look good.
// Have him exercise five times
for(let i=0;i<5;i++){
    timmy.exercise();
}
console.log(timmy);

// 5. Age Timmy 9 years
for(let i=0;i<9;i++){
    timmy.ageUp();
}
console.log(timmy);

// 6. Create a hamster named "Gus"
const gus = new Hamster('Gus');
console.log(gus);

// 7. Set Gus's owner to the string "Timmy"
gus.owner = `Timmy`;
console.log(gus);

// 8. Have Timmy "buy" Gus
timmy.buyHamster(gus);
console.log(timmy);

// 9. Age Timmy 15 years
for(let i=0;i<15;i++){
    timmy.ageUp();
}
console.log(timmy);

// 10. Have Timmy eat twice
for(let i=0;i<2;i++){
    timmy.eat();
}
console.log(timmy);

// 11. Have Timmy exercise twice
for(let i=0;i<2;i++){
    timmy.exercise();
}
console.log(timmy);

// Chef Make Dinners
// Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.
class Dinner {
    constructor(appetizer, entree, dessert){
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
}
// Chef should be a factory of Dinner
class Chef {
    constructor(name){
        this.name = name;
    }
// Add a method on chef that takes three arguments
// and returns a new Dinner based on those arguments.
    makeDinner(appetizer, entree, dessert){
        const dinDin = new Dinner(appetizer, entree, dessert);
        return `For dinner we have ${appetizer} as the appetizer, ${entree} as the entree, and ${dessert} for dessert.`
    }

}
const tanya = new Chef('Tanya')
// Have the Chef create 3 dinners, log the dinners
console.log(tanya.makeDinner('pasteles','arroz con gandules','tembleque'));
console.log(tanya.makeDinner('tuna tartare','twice baked potatoes','pecan brownies'));
console.log(tanya.makeDinner('nachos fries','cheesburgers','strawberry cheesecake'));