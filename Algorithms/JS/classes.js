class Rectangle {
  constructor(width, height, color) {
    // console.log(`The Rectangle is being created`);

    this.width = width;
    this.height = height;
    this.color  = color;
  }

  getArea() {
    return this.width * this.height
  }

  printDescription () {
    return `I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}`;
  }
}

const myRectangle = new Rectangle(5, 3, 'blue');

// console.log(myRectangle.printDescription());





//GETTERS and SETTERS
class Square {
  constructor(length) {
    this.length = length;
    this.noOfRequestsForArea = 0;
  }

  get area () {
    this.noOfRequestsForArea++;

    //why does this work here not in the constructor
    this.string = `The area was requested for ${this.noOfRequestsForArea} times`;

    return Math.pow(this.length, 2);
  }

  set area (area) {
    this.length = Math.sqrt(area);
  }
}

let mySquare = new Square(4);
// console.log(mySquare.length);

// To demonstrate the setter function
// mySquare.area = 25
// console.log(mySquare.length);

// console.log(mySquare.area);
// console.log(mySquare.area);
// console.log(mySquare.area);
// console.log(mySquare.area);

// console.log(mySquare.string);





//STATIC METHODS
class NewSquare {
  constructor(length) {
    this.length = length;
  }

  static equals (a, b) {
    return a.length === b.length;
  }
}

let mySquare1 = new NewSquare(4);
let mySquare2 = new NewSquare(5);


// console.log(NewSquare.equals(mySquare1, mySquare2));

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  static isSquare (a) {
    return a.width === a.height;
  }
}

const myShape = new Shape (8, 8);

// console.log(Shape.isSquare(myShape));



//INHERITANCE... Extends
class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  get describe () {
    console.log(`I am ${this.name} and I'm ${this.age} years old`);
  }
}

class Programmer extends Person {
  constructor (name, age, yearsOfExperience) {
    super(name, age); //This calls Person class (the parent class)

    //Custom behaviour
    this.yearsOfExperience = `${this.name} has ${yearsOfExperience} years of experience`
  }

  get code () {
    console.log(`${this.name} is coding`);
  }

}

let person1 = new Person('Jeff', 45);
let programmer1 = new Programmer('Sam', 56, 12);


const programmers = [
  new Programmer('Dom', 56, 15),
  new Programmer('Henry', 32, 4),
  new Programmer('Olivia', 40, 8),
]  

function developSoftware (devs) {
  // Develop Software
  for (let dev of devs) {
    dev.code;
    console.log(dev.yearsOfExperience)
  }

}

// developSoftware(programmers)






// Polymorphism
// The act of redefining a method inside a derived cahrred class of a parent

class Animal {
  constructor (name) {
    this.name = name;

  }

  get makeSound() {
    console.log(`Generic Animal Sound`);
  }
}

class Dog extends Animal {
  constructor (name) {
    super(name);
  }

  // This changing of the function is polymorphism
  get makeSound() {
    super.makeSound;
    console.log(`Woof! Woof!`);
  }
}

const a1 = new Animal(`species`);
const a2 = new Dog(`dog`);

// a2.makeSound








// IN PRACTICE IN HTML
const myList = document.getElementById('myList');

class ListBinding {
  constructor (element) {
    this.listElement = element;
    this.textList = [];
  }

  //Makes an li element Tag
  static createListItem (text) {
    const li = document.createElement('li');
    li.textContent = text;

    return li
  }

  update () {
    // Remove al the existing <li> elements/tags
    while (this.listElement.firstChild) {
      this.listElement.removeChild(this.listElement.firstChild)
    }


    // Fill ul tag with li
    for (const text of this.textList) {
      this.listElement.appendChild(ListBinding.createListItem(text))
    }
  }

  add (text) {
    this.textList.push(text);
    this.update();
  }

  remove (index) {
    this.textList.splice(index, 1);
    this.update();
  }
}


const listBinding = new ListBinding(myList)

console.log(listBinding);
listBinding.add('dcode');
listBinding.add('fog');
listBinding.add('book');
listBinding.add('Gooo');
listBinding.add('Pack');
listBinding.remove(1);
