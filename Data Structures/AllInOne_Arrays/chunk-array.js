import { isMainModule } from "../utils/is-main-module.js";

const chunkArrayPrototype = (arr, size) => {
  if (!Array.isArray(arr) || typeof size !== "number") {
    return -1;
  }

  const chunks = Math.ceil(arr.length / size);
  const chunkedArray = [];
  let unitArray = [];

  let pointer = 0;

  for (let j = 0; j < chunks; j++) {
    unitArray = arr.slice(pointer, pointer + size);
    chunkedArray.push(unitArray);

    pointer += size;
  }

  return chunkedArray;
};

const chunkArray = (arr, size) => {
  if (!Array.isArray(arr) || typeof size !== "number") {
    return -1;
  }

  const chunkedArray = [];
  let pointer = 0;

  while (pointer < arr.length) {
    const unitArray = arr.slice(pointer, pointer + size);
    chunkedArray.push(unitArray);
    pointer += size;
  }

  return chunkedArray;
};

if (isMainModule(import.meta.url)) {
  console.log(chunkArrayPrototype([7, 1, 5, 3, 6, 4, 6], 5));
  console.log(chunkArray([7, 1, 5, 3, 6, 4, 6], 4));
}
