let Pname = "Bhavya";
let age = 19;
console.log(`This is ${Pname}, currently i am ${age} year old`);

let arr = [1, 2, 3, 4, 5];
let [a, b] = arr; //destucturing of Array
console.log(a, b);

const info = {
  name: "Bhavya",
  age: 15,
  rollno: "22CE103",
};
let { name: Nam, age: Ummar } = info; //Destructuring of Object with Alias
console.log(Nam, Ummar);

let newarr = [-2, -1, 0];
newarr = [...newarr, ...arr]; //spread operator with array
console.log(newarr);

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...arr));

function product(param1, param2 = 1) {
  return param1 * param2;
}
console.log(product(4, 5), product(4));

const book = {
  title: "what make you happy!",
  author: "Bhavya",
  year: 2024,
  info: function () {
    return `The ${this.title} is written by ${this.author}`;
  },
  updateyear: function (year) {
    this.year = year;
  },
};
console.log(book);

const key1 = "name";
const key2 = "age";
const key3 = "occupation";

const person = {
  [key1]: "John Doe",
  [key2]: 30,
  [key3]: "Software Developer",
};
console.log(person);
