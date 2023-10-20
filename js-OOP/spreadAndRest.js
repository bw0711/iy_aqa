//task 1
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

const thirdArray = [...firstArray, ...secondArray];
console.log(thirdArray);

//task 2
const multiply = (miltiplier, ...arguments) =>
  arguments.map(argument => argument * miltiplier);
console.log(multiply(4, 9, 83, 8));

//task 3
class ProductClass {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.price * this.quantity;
  }

  purchase(quantityToBuy) {
    if (quantityToBuy <= this.quantity) {
      this.quantity -= quantityToBuy;
      console.log(
        `The purchase of ${quantityToBuy} units of ${this.name} has been completed`,
      );
    } else {
      console.log(
        `There is not enough product ${this.name} in stock to purchase.`,
      );
    }
  }
}

const tShirt = new ProductClass("T-Shirt", 20, 100);
const jeans = new ProductClass("Jeans", 30, 50);
const shoes = new ProductClass("Shoes", 50, 30);

console.log(`Total price of all T-Shirts: $${tShirt.getTotalPrice()}`);
console.log(`Total price of all jeans: $${jeans.getTotalPrice()}`);
console.log(`Total price of all shoes: $${shoes.getTotalPrice()}`);

tShirt.purchase(10);
jeans.purchase(60);
shoes.purchase(5);

console.log(`Remaining t-shirts in stock: ${tShirt.quantity}`);
console.log(`Remaining jeans in stock: ${jeans.quantity}`);
console.log(`Remaining shoes in stock: ${shoes.quantity}`);

//task 4
class CarClass {
  #speed;
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.#speed = 0;
  }

  getCarInfo() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  }

  accelerate(speed) {
    this.#speed += speed;
  }

  brake(speed) {
    this.#speed -= speed;
  }
}

class AudiClass extends CarClass {
  #color;
  constructor(make, model, year, color) {
    super(make, model, year);
    this.#color = color;
  }

  getCarInfo() {
    console.log(
      `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Color: ${
        this.#color
      }`,
    );
  }

  get myCurrentColor() {
    return this.#color;
  }

  set myCurrentColor(newColor) {
    this.#color = newColor;
  }
}

const myAudi = new AudiClass("Audi", "A3", 2022, "Red");

myAudi.getCarInfo();
myAudi.accelerate(50);
myAudi.getCarInfo();
myAudi.brake(20);
myAudi.getCarInfo();

myAudi.myCurrentColor = "Blue";
console.log(`Current car color is: ${myAudi.myCurrentColor}`);

//task 5
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

class PeopleRegistry extends Person {
  constructor() {
    super();
    this.people = [];
  }

  addPerson(person) {
    this.people.push(person);
  }

  removePerson(firstName, lastName) {
    this.people = this.people.filter(
      person =>
        !(person.firstName === firstName && person.lastName === lastName),
    );
  }

  findPerson(firstName, lastName) {
    return this.people.find(
      person => person.firstName === firstName && person.lastName === lastName,
    );
  }

  listPeople() {
    this.people.forEach(person => {
      console.log(
        `Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`,
      );
    });
  }
}

const registry = new PeopleRegistry();

const person1 = new Person("John", "Doe", 30);
const person2 = new Person("Jane", "Smith", 25);

registry.addPerson(person1);
registry.addPerson(person2);

registry.listPeople();

const foundPerson = registry.findPerson("John", "Doe");
console.log("Person found:", foundPerson);

registry.removePerson("John", "Doe");

console.log("After removal:");
registry.listPeople();
