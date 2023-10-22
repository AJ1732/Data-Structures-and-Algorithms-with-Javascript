// Linear Search Algorithm
// This returns the position(i.e. the index) of the key in the array

const linearSearch = (array, key) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      return i
    }
  }
  return -1
}

const verify = (index) => {
  if (index !== -1) {
    console.log(`Target found at index ${index}`)
  } else {
    console.log(`Target not found`)
  }
}

const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

const result = linearSearch(month, "Nov")
verify(result)

//Reverse an Array


