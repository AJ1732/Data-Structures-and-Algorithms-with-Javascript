function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex, arr.length);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let resulttArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      resulttArr.push(leftArr[leftIndex]);
      leftIndex += 1;
    } else {
      resulttArr.push(rightArr[rightIndex]);
      rightIndex += 1;
    }
  }

  return resulttArr
    .concat(leftArr.slice(leftIndex))
    .concat(rightArr.slice(rightIndex));
}

let arr = [12, 3, 16, 6, 5, 1];
console.log(mergeSort(arr));
