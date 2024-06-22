const number = [23, 1, 45, 87, 4, 55, 6];
let largestNumber = number[0];

for (const numbers of number) {
  if (numbers > largestNumber) {
    largestNumber = numbers;
  }
}

console.log(largestNumber);
