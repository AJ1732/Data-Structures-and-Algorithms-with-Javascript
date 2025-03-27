// This is a sequential colection of elements that follows

// the principle of First In First Out (FIFO)

// Inserting(enqueue), Removing(dequeue), peek, length, clear
// enqueue(element) - add an element to the queue
// dequeue() - remove the oldest element from the queue
// peek() - get the value of the element at the front of the queue without removing it
// isEmpty() - check if the queue is empty
// size() = get the number of elements in the queue
// print() - visualize the elements in the queue

class Queue {
  constructor() {
    this.dataStore = [];
  }

  enqueue(element) {
    return this.dataStore.push(element);
  }

  dequeue() {
    return this.dataStore.shift();
  }

  size() {
    return this.dataStore.length;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.dataStore[0];
    }
    return null;
  }

  front() {
    return this.dataStore[0];
  }

  back() {
    return this.dataStore[this.size() - 1];
  }

  print() {
    console.log(this.dataStore.toString());
  }

  toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
      retStr += this.dataStore[i] + "\n";
    }
    return retStr;
  }

  isEmpty() {
    return this.dataStore.length === 0;
  }

  clear() {
    this.dataStore = [];
  }
}

var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");

console.log(q.dataStore);
console.log(q.toString());
console.log(q.dequeue());
console.log(q.dataStore);





















const dancerBook = `F Allison McMillan, M Frank Opitz, M Mason McMillan, M Clayton Ruff, F Cheryl Ferenback, M Raymond Williams, F Jennifer Ingram, M Bryan Frazer, M David Durr, M Danny Martin, F Aurora Adney`;

let dancerNames = dancerBook.split(", ");
// This returns an array
// console.log(dancerNames);

class Dancer {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

// const femaleDancers = new Queue();
// const maleDancers = new Queue();

function getDancers(males, females) {
  for (let i = 0; i < dancerNames.length; i++) {
    // dancerNames[i] is a string
    let dancer = dancerNames[i].split(" ");

    const sex = dancer[0];
    const name = `${dancer[1]} ${dancer[2]}`;

    if (sex == "F") {
      females.enqueue(new Dancer(name, sex));
    } else {
      males.enqueue(new Dancer(name, sex));
    }
  }
}

function dance(males, females) {
  console.log("The dance partners are: \n");
  while (!females.isEmpty() && !males.isEmpty()) {
    // person = females.dequeue();
    // console.log("Female dancer is: " + person.name);
    // person = males.dequeue();
    // console.log(" and the male dancer is: " + person.name);

    console.log(`${females.dequeue().name} and ${males.dequeue().name}`);
  }
}

var maleDancers = new Queue();
var femaleDancers = new Queue();

// getDancers(maleDancers, femaleDancers);
// dance(maleDancers, femaleDancers);

// if (!femaleDancers.isEmpty()) {
//   console.log(femaleDancers.front().name + " is waiting to dance.");
// }
// if (!maleDancers.isEmpty()) {
//   console.log(maleDancers.front().name + " is waiting to dance.");
// }
