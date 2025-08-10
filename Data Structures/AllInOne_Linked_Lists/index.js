class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const pushedItem = new Node(value);

    if (!this.head.data) {
      this.head = pushedItem;
      this.tail = pushedItem;
    } else {
      this.tail.next = pushedItem;
      this.tail = pushedItem;
      this.length++;
    }
  }

  pop() {
    const temp = this.head;
    const prev = this.head;

    console.log(temp);
  }
}

const myLinkedList = new LinkedList();
myLinkedList.push(10);
myLinkedList.push(20);
myLinkedList.push(30);
myLinkedList.push(40);

myLinkedList.pop();

// console.log(myLinkedList);
