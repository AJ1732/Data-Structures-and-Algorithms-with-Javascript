// The size of the queue is fixed and a single block of memory is used
// as if the first element is connected to the last element

// Also reffered to as circular buffer or ring buffer and follows the FIFO principle
// A circular queue will reuse the empty block created during the dequeue operation

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.rear = -1;
    this.front = -1;
    this.currentLength = 0;
    this.capacity = capacity;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  size() {
    return this.currentLength;
  }

  enqueue(item) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = item;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    } else {
      console.log("queue is full");
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("queue is empty");
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      console.log(this.front);
      
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        console.log(i);
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const queue = new CircularQueue(5);

console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
// queue.enqueue(50);
// queue.enqueue(60);
console.log(queue.size());
queue.print();
// console.log(queue.isFull());

// console.log(queue.dequeue());
// console.log(queue.isFull());
// console.log(queue.peek());
// // queue.print();
// queue.enqueue(60);
// queue.print();
