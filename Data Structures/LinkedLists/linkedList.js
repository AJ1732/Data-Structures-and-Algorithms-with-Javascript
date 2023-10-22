class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node("head");
  }

  find(item) {
    let currNode = this.head;
    while (currNode.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }
  
  insert(newElement, item) {
    let newNode = new Node(newElement);
    let current = this.find(item);
    
    newNode.next = current.next;
    current.next = newNode;
  }

  // remove() {

  // }

  display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }

}

let cities = new LinkedList();

cities.display();

cities.insert("Nigeria", "head")
cities.insert("Edo State", "Nigeria")
cities.insert("Benin", "Edo State")
cities.insert("Ihama", "Benin")

cities.display();






const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);


let a = prompt("Enter the first number");
let b = prompt("Enter the second number");
let c = parseInt(a) + parseInt(b);

console.log(c);