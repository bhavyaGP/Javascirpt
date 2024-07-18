function check(num) {
  if (num & 1) {
    console.log("Number is Odd!");
  } else {
    console.log("Number is Even!");
  }
}
check(Math.random());

function squareof(num) {
  return num * num;
}

console.log(squareof(Math.random()));

function findmax(num1, num2) {
  return Math.max(num1, num2);
}

console.log(findmax(Math.random, Math.random()));

function concate(str1, str2) {
  return str1 + str2;
}
console.log(concate("Bhavya", "Prajapati"));

const sum = (num1, num2) => {
  return num1 + num2; //explicit "return" needed
};
console.log(sum(Math.random(), Math.random()));

function containChar(str, char) {
  return str.includes(char);
}
console.log(containChar("Hello, world!", "H"));

function product(num1, num2 = 1) {
  return num1 * num2;
}
console.log(product(Math.random(), Math.random()));

function greeting(name, age = 18) {
  return `Hello Dear, ${name},Are you ${age} year old??`;
}
greeting("Bhavya", 19);

console.log("Higher Order Function:");
function high(callback, num) {
  for (let i = 0; i < num; i++) {
    console.log(callback(num));
  }
}

high(squareof, 3);

const applyFunctions = (fn1, fn2, value) => fn2(fn1(value));
const add5 = (num) => num + 5;
const multiplyBy2 = (num) => num * 2;
console.log(applyFunctions(add5, multiplyBy2, 10));
