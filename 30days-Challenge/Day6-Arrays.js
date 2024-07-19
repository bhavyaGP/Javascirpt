const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const array = [1, 2, 3, 5, 6, 8, 0, 10];
console.log(array);
console.log(array[0], array[array.length - 1]);

array.push(randomNumber(1, 10));
console.log("After Push operation:", array);
array.pop();
console.log("After Pop operation:", array);
array.unshift(0);
console.log("After Unshift operation:", array);
array.shift();
console.log("After shift operation:", array);

const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));
console.log(numbers, "->After Map function->", roots);
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]

function iseven(num) {
  return num % 2 == 0 ? true : false;
}

const newArr = array.filter(iseven);
console.log(newArr);

const array1 = [1, 2, 9, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial);

for (let index = 0; index < newArr.length; index++) {
  console.log(newArr[index]);
}
console.log("*****************");
newArr.forEach((ele) => {
  console.log(ele);
});

const matrix = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 0, 0],
];

console.table(matrix);
console.log(matrix[1][2]);
