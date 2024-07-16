for (let index = 0; index < 10; index++) {
  console.log(index);
}
console.log("-------------");

let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(num + "X" + i + "=" + num * i);
}
console.log("-------------");

let sum = 0;
let i = 1;
while (i < 10) {
  sum += i;
  i++;
}
console.log(sum);
console.log("-------------");

while (i > 0) {
  console.log(i);
  i--;
}
console.log("-------------");
do {
  i++;
  console.log(i);
} while (i < 5);
console.log("-------------");

let fact = 5;
let result = 1;
do {
  result = result * fact;
  fact--;
} while (fact != 1);
console.log(result);
console.log("-------------");

let rows = 5;
let pattern = "";
for (let n = 1; n <= rows; n++) {
  for (let num = 1; num <= n; num++) {
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);
console.log("-------------");

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    console.log("5 skipped!!");
    continue;
  }
  console.log(i);
}

console.log("-------------");

for (let i = 0; i < 10; i++) {
  if (i == 7) {
    console.log("Breaking!!")
   break;
  }
  console.log(i);
}
