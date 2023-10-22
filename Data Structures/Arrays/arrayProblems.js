// Exercise One
/* Create a grades object that stores a set of student grades in an object. 
Provide a function for adding a grade and a function for displaying the student’s grade average */

class Grades {
  constructor() {
    this.grades = {};
  }

  addGrade(studentName, grade) {
    if (!this.grades[studentName]) {
      this.grades[studentName] = [];
    }

    this.grades[studentName].push(grade);
  }

  calculateAverageGrade(studentName) {
    const grades = this.grades[studentName];
    if (!grades) {
      return null;
    }
    
    const sumOfGrades = grades.reduce((accumulator, grade) => {
      return accumulator + grade;
    }, 0);

    return sumOfGrades / grades.length;
  }

  displayGradeAverage(studentName) {
    const averageGrade = this.calculateAverageGrade(studentName);
    if (averageGrade === null) {
      console.log(`${studentName} has no grades.`);
    } else {
      console.log(`${studentName}'s grade average is ${averageGrade}.`);
    }
  }
}

const studentGrades = new Grades();

studentGrades.addGrade("Alice", 90);
studentGrades.addGrade("Alice", 80);
const aliceGrades = studentGrades.grades["Alice"];

// console.log(aliceGrades); // [90, 80]
// studentGrades.displayGradeAverage("Alice"); // Alice's grade average is 85

/* The code snippet 'if (!grades) { return null; }' is a guard clause. 
    A guard clause is a conditional statement that is used to check 
    if a condition is met before executing the rest of a function. 
    If the condition is not met, the function returns early. */




// Exercise Two
// Store a set of words in an array and display the contents both forward and backward.
const reversing = (words) => {
  let forwardIteration = [];
  let backwardIteration = [];

  for (let i = 0; i < words.length; i++) {
    forwardIteration.push(words[i]);
  }
  
  for (let j = words.length - 1; j >= 0; j--) {
    backwardIteration.push(words[j]);
  }

  console.log(forwardIteration);
  console.log(backwardIteration);
}

// reversing(["Welcome", "everyone"])


// Exercise Three
class WeekTemps {
  constructor() {
    this.dataStore = [];
  }

  add(temp) {
    this.dataStore.push(temp);
  }

  average() {
    var total = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
      total += this.dataStore[i];
    }
    return total / this.dataStore.length;
  }
}
  
let thisWeek = new WeekTemps();
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);

// console.log(thisWeek.average()); // displays 54.875


/* Modify the weeklyTemps object in the chapter so that it stores a month’s worth of
data using a two-dimensional array. Create functions to display the monthly average,
a specific week’s average, and all the weeks’ averages. */

class MonthTemp {
  constructor() {
    this.dataStore = [];
    for (let i = 0; i < 4; i++) {
      this.dataStore.push([]);
    }
  }

  add(temp, week) {
    this.dataStore[week - 1].push(temp);
  }

  weeklyAverage(week) {
    var total = 0;
    for (let i = 0; i < this.dataStore[week - 1].length; i++) {
      total += this.dataStore[week - 1][i];
    }
    return (total / this.dataStore[week - 1].length).toFixed(2);
  }

  monthlyAverage() {
    let total = 0;
    let length = 0;

    // Accessing by columns
    for (let i = 0; i < this.dataStore.length; i++) {
      for (let j = 0; j < this.dataStore[i].length; j++) {
        total += this.dataStore[i][j];
        length++
      }
    }
    return (total / length).toFixed(2);
  }

  
  allWeeksAverages() {
    const averages = [];
    for (let i = 0; i < this.dataStore.length; i++) {
      averages.push(this.weeklyAverage(i + 1));
    }
    return averages;
  }
}

/*  (let i = 0; i < 4; i++) {
      this.dataStore.push([]); 
    } 
This code for is used to initialize the dataStore property of the WeekTemps class to a two-dimensional array with four rows.

Without this code, the dataStore property would be an empty array. This would cause problems when we try to add temperatures to the array, because we would not be able to specify which week the temperature belongs to.

By initializing the dataStore property to a two-dimensional array with four rows, we can ensure that each week has its own row in the array. This makes it easy to add temperatures to the correct week and to calculate the weekly average temperature. */

const monthTemp = new MonthTemp();

monthTemp.add(70, 1);
monthTemp.add(75, 1);
monthTemp.add(80, 2);
monthTemp.add(82, 2);

monthTemp.add(82, 2);
monthTemp.add(85, 3);
monthTemp.add(84, 3);
monthTemp.add(73, 4);


// console.log(monthTemp);
// const week3 = monthTemp.weeklyAverage(3)
// console.log(week3); // 84.50

// const monthAverage = monthTemp.monthlyAverage()
// const weekAverage = monthTemp.allWeeksAverages()
// console.log(monthAverage); // 78.88
// console.log(weekAverage); // [ '72.50', '81.33', '84.50', '73.00' ]


// Exercise Four 
/* Create an object that stores individual letters in an array and has a function for
displaying the letters as a single word.*/

class createWords {
  constructor() {
    this.letters = [];
  }

  add(letter) {
    return this.letters.push(letter);
  }

  word() {
    return this.letters.join('');
  }
}

const newWord = new createWords()

newWord.add('a');
newWord.add(' ');
newWord.add('b');
newWord.add('a');
newWord.add('l');
newWord.add('l');

console.log(newWord.word());