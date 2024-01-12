const numbers = [1, 7, 5, 8, 6, 4, 9, 2, 3, 0];
const length = numbers.length;
console.log("Before sorting the numbers array in descending order: ");
console.log(...numbers);

for (let i = 0; i < length - 1; i++) {
  for (let j = 0; j < length - 1 - i; j++) {
    if (numbers[j] < numbers[j + 1]) {
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

console.log("After sorting the numbers array in descending order: ");
console.log(...numbers);
