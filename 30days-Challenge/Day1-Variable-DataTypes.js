var number=123;
console.log(number);
let num=1234;
console.log(num);

const boolvalue=true
console.log(boolvalue);


let reassignableLet = 10;
console.log(reassignableLet); // Output: 10

reassignableLet = 20;
console.log(reassignableLet); // Output: 20

const immutableConst = "Initial Value";
console.log(immutableConst); // Output: Initial Value

// The following line will cause an error
// immutableConst = "New Value"; // TypeError: Assignment to constant variable.

let num1 = 10;
let str = "JavaScript";
let bool = true;
let obj = { key: "value" };
let arr = [1, 2, 3];

console.log(`Value: ${num1}, Type: ${typeof num1}`);
console.log(`Value: ${str}, Type: ${typeof str}`);
console.log(`Value: ${bool}, Type: ${typeof bool}`);
console.log(`Value: ${obj}, Type: ${typeof obj}`);
console.log(`Value: ${arr}, Type: ${typeof arr}`);


// Using let
let mutableLet = "Initial";
console.log(`let before reassignment: ${mutableLet}`); // Output: Initial
mutableLet = "Reassigned";
console.log(`let after reassignment: ${mutableLet}`); // Output: Reassigned

// Using const
const imutableConst = "Initial";
console.log(`const before reassignment: ${imutableConst}`); // Output: Initial

// The following line will cause an error
// imutableConst = "Reassigned"; // TypeError: Assignment to constant variable.
