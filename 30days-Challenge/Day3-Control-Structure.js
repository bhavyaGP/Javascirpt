let number = Math.random();
if (number > 0) {
  console.log("Number is Positive!");
} else {
  console.log("Number is Negative!");
}

let age = Math.random();
if (age >= 18) {
  console.log("Person is Eligible For voting");
} else {
  console.log("Person isn't Eligible for voting");
}

let n1 = Math.random(),
  n2 = Math.random(),
  n3 = Math.random();
if (n1 >= n2) {
  if (n1 >= n3) console.log("the largest number.", n1);
  else console.log(" the largest number.", n3);
} else {
  if (n2 >= n3) console.log("%.2lf is the largest number.", n2);
  else console.log("the largest number.", n3);
}

// const key = prompt("Enter Key:");
const key=1
switch (key) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Input");
    break;
}

function assignGrade(score) {
  let grade;

  switch (true) {
    case score >= 90:
      grade = "A";
      break;
    case score >= 80:
      grade = "B";
      break;
    case score >= 70:
      grade = "C";
      break;
    case score >= 60:
      grade = "D";
      break;
    default:
      grade = "F";
  }

  console.log("Grade:", grade);
}

assignGrade(95);
assignGrade(78);
assignGrade(55);

let num = Math.random();
const result = num % 2 === 0 ? "Number is Even" : "Number is odd";
console.log(result);

// let year = prompt("Enter Year:");
let year=2024;
if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}

