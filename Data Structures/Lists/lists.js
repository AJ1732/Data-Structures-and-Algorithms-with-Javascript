class List {
  constructor() {
    this.dataStore = [];
    this.pos = 0;
  }

  clear() {
    return this.dataStore = [];
  }

  length() {
    return this.dataStore.length;
  }

  toString() {
    // let string = ''
    // for (let i = 0; i < this.length(); ++i) {
    //   string += `${this.dataStore[i]}, `;
    // }

    return this.dataStore.join(", ");
  }

  contains(element) {
    // for (let i = 0; i < this.length(); ++i) {
    //   if (this.dataStore[i] == element) {
    //     return true;
    //   }
    // }
    // return false;

    return this.dataStore.includes(element)
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

    // for (let i = 0; i < this.length(); ++i) {
    //   if (this.dataStore[i] == element) {
    //     return i; // This returns the index of the element to be found
    //   }
    // }
    // return -1;
  }

  remove(element) {
    if (this.find(element) > -1) {
      this.dataStore.splice(index, 1);
    } else {
      console.log(`${element} is not in datastore`);
    }
  }

  insert(element, after) {
    const afterIndex = this.find(after);
    if (afterIndex > -1) {
      this.dataStore.splice(afterIndex + 1, 0, element)
    } else {
      console.log(`${after} is not in datastore`);
    }
  }

  // Transversing the List
  getElement(index) {
    return this.dataStore[index]
  }

  // front() {
  //   const frontIndex = this.pos = 0;
  //   return this.getElement(frontIndex);
  // }

  // end() {
  //   const endIndex = this.pos = this.dataStore.length - 1;
  //   return this.getElement(endIndex);
  // }

  front() {
    return this.pos = 0;
  }

  frontElement() {
    return this.getElement(this.front())
  }
  
  end() {
    return this.pos = this.length() - 1;
  }
  
  endElement() {
    return this.getElement(this.end())
  }


  // Stopped Here
  prev() {
    if (this.pos > 0) {
      return --this.pos;
    }
  }

  next() {
    if (this.pos < this.length() - 1) {
      return ++this.pos;
    }
  }

  currPos() {
    return this.pos;
  }

  moveTo(position) {
    return this.pos = position;
  }

  // getElement() {
  //   return this.dataStore[this.pos];
  // }
}

let names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
names.append("Bryan");
names.append("Danny");


console.log(names.endElement());
// console.log(names.toString());

// names.insert("Raymond", "Cynthia")
// console.log(names.toString());

// names.front()
// names.next();
// names.next();
// names.end();
// console.log(names.currPos());
// console.log(names.currPos() < names.length());
// console.log(names.getElement());


// for(names.front(); names.currPos() < names.length(); names.next()) {
//   console.log(names.getElement());
// }

// for(names.end(); names.currPos() >= 0; names.prev()) {
//   console.log(names.getElement());
// }

const displayList = (list) => {
  for(list.front(); list.currPos() < list.dataStore.length ; list.next()) {
      console.log(names.getElement());
    }
}

// displayList(names);

// Why does it keep iterating the last value