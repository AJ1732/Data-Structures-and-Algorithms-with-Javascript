class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return;
  }

  get(index) {
    if (index >= this.length || this.length === 0) {
      return -1;
    }
    return this.data[index];
  }

  pop() {
    if (this.length === 0) {
      return -1;
    }
    const index = this.length - 1;
    const poppedItem = this.data[index];

    delete this.data[index];
    this.length--;
    return poppedItem;
  }

  shift() {
    if (this.length === 0) {
      return -1;
    }
    const shiftedItem = this.data[0];
    delete this.data[0];
    this.length--;

    const keys = Object.keys(this.data);
    for (const key of keys) {
      this.data[key - 1] = this.data[key];
    }
    delete this.data[this.length]; // to delete the last key again, after shifting the key indices

    return shiftedItem;
  }

  delete(index) {
    if (index >= this.length || this.length === 0) {
      return -1;
    }
    const deletedItem = this.data[index];
    delete this.data[index];
    this.length--;

    for (let i = index + 1; i <= this.length; i++) {
      this.data[i - 1] = this.data[i];
    }
    delete this.data[this.length];

    return deletedItem;
  }
}

const newArr = new MyArray();

newArr.push("apple");
newArr.push("orange");
newArr.push("mango");
newArr.push("pineapple");
newArr.push("cucumber");

console.log(newArr.pop());
console.log(newArr.shift());
console.log(newArr.delete(2));
console.log(newArr);
