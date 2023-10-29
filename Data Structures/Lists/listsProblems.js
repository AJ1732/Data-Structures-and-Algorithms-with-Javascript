/* Write a function that inserts an element into a list only if the element to be inserted
is larger than any of the elements currently in the list. Larger can mean either greater
than when working with numeric values, or further down in the alphabet, when
working with textual values. */

class List {
  constructor() {
    this.dataStore = [];
  }

  clear() {
    return this.dataStore = [];
  }

  length() {
    return this.dataStore.length;
  }

  append(element) {
    this.dataStore.push(element)
  }

  find(element) {
    if (this.dataStore.includes(element)) {
      return this.dataStore.indexOf(element)
    } else {
      return -1;
    }
  }

  remove(element) {
    if (this.find(element) > -1) {
      this.dataStore.splice(index, 1);
    } else {
      console.log(`${element} is not in datastore`);
    }
  }

  insert(element) {
    const afterIndex = this.find(after);
    if (typeof element === "string") {
      this.dataStore = this.dataStore.sort()
    } else if (typeof element === "number") {
      console.log(`${after} is not in datastore`);
    }
  }
}

let names = new List();
// names.append("Cynthia");
// names.append("Raymond");
// names.append("Barbara");
// names.append("Bryan");
// names.append("Danny");


console.log(names.dataStore);


function insertLargerElement(list, element) {
  // Check if the element to be inserted is larger than any of the elements in the list.
  if (list.every(listElement => element > listElement)) {
    // If it is, insert the element into the list.
    list.append(element);
  }
}
