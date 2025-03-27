import { isMainModule } from "../utils/is-main-module.js";

const capitalizeString = (string) => {
  if (typeof string !== "string") {
    return -1;
  }

  return string
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

if (isMainModule(import.meta.url)) {
  console.log(capitalizeString("hello worlD"));
}
