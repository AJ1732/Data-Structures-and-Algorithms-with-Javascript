export class PriorityQueue {
  constructor(comparator = (a, b) => a - b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this._heap[0];
  }

  push(value) {
    this._heap.push(value);
    this._siftUp();
  }

  pop() {
    const poppedValue = this._heap[0];
    const bottom = this._heap.pop();
    if (this.size() > 0) {
      this._heap[0] = bottom;
      this._siftDown();
    }
    return poppedValue;
  }

  _parent(i) { return Math.floor((i - 1) / 2); }
  _left(i) { return i * 2 + 1; }
  _right(i) { return i * 2 + 2; }

  _siftUp() {
    let node = this.size() - 1;
    while (node > 0 && this._comparator(this._heap[node], this._heap[this._parent(node)]) < 0) {
      [this._heap[node], this._heap[this._parent(node)]] =
      [this._heap[this._parent(node)], this._heap[node]];
      node = this._parent(node);
    }
  }

  _siftDown() {
    let node = 0;
    while (
      (this._left(node) < this.size() && this._comparator(this._heap[this._left(node)], this._heap[node]) < 0) ||
      (this._right(node) < this.size() && this._comparator(this._heap[this._right(node)], this._heap[node]) < 0)
    ) {
      let smallestChild =
        this._right(node) < this.size() &&
        this._comparator(this._heap[this._right(node)], this._heap[this._left(node)]) < 0
          ? this._right(node)
          : this._left(node);
      [this._heap[node], this._heap[smallestChild]] =
      [this._heap[smallestChild], this._heap[node]];
      node = smallestChild;
    }
  }
}
