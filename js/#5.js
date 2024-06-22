const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

let twoMassives = array1.concat(array2);
console.log(twoMassives);

let totalSum = 0;
for (let i = 0; i < twoMassives.length; i++) {
  totalSum += twoMassives[i];
}
console.log(totalSum);
