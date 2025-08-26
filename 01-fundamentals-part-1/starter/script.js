// // // JavaScript Fundamentals - Part 1
// // // We'll write our code here!
// // let js = "amazing";
// // console.log(40 + 8 + 23 - 10);
// // console.log(js);

// // console.log("=== VARIABLES ===");
// // let firstName = "JunJun";
// // console.log(firstName);

// // let age = 30;
// // console.log(age);

// // age = 50;
// // console.log(age);

// // const birthYear = 1991;
// // console.log(birthYear);

// // const PI = 3.1415;
// // console.log(PI);

// // var job = "programmer";
// // job = "teacher";
// // console.log(job);

// // const country = "Philippines";
// // const language = "Filipino";

// // age = 25;
// // age = 26; // Changing

// // console.log("=== DATA TYPES ===");

// // // number
// // let id = 12345;
// // console.log(id);
// // console.log(typeof id);

// // // string
// // let lastName = "Barumbado";
// // console.log(lastName);
// // console.log(typeof lastName);

// // // boolean
// // let javaScriptIsFun = true;
// // console.log(javaScriptIsFun);
// // console.log(typeof javaScriptIsFun);

// // // undefined
// // let year;
// // console.log(year);
// // console.log(typeof year);

// // // dynamic type changes
// // let dynamicVariable = 13;
// // console.log(dynamicVariable, typeof dynamicVariable);

// // dynamicVariable = "I am now a String";
// // console.log(dynamicVariable, typeof dynamicVariable);

// // dynamicVariable = true;
// // console.log(dynamicVariable, typeof dynamicVariable);

// console.log("=== MATH OPERATORS ===");

// const now = 2037;
// const ageJunJun = now - 1991;
// const ageLakay = now - 2018;

// console.log(ageJunJun, ageLakay);
// console.log(ageJunJun * 2, ageLakay / 10, 2 * 3);

// console.log("Math Operations:");
// console.log("Addition:", 10 + 5);
// console.log("Subtraction:", 20 - 8);
// console.log("Multiplication:", 4 * 7);
// console.log("Division:", 15 / 3);
// console.log("Exponentiation:", 2 ** 3);

// // math with strings
// const firstName = "JunJun";
// const lastName = "Barumbado";

// console.log(firstName + " " + lastName);
// console.log("Hello " + "World" + "!");
// console.log("I am " + 25 + " years old");

// // assignment operators
// console.log("=== ASSIGNMENT OPERATORS ===");

// let x = 10 + 5;
// console.log("x starts as:", x);

// // assignment shortcuts
// x += 10;
// console.log("x after += 10:", x);

// x *= 4;
// console.log("x after *= 4:", x);

// x /= 2;
// console.log("x after /= 2:", x);

// x++;
// console.log("x after ++:", x);

// x--;
// console.log("x after --:", x);

// // comparison operators
// console.log("=== COMPARISON OPERATORS ===");

// console.log("age comparison");
// console.log(ageJunJun > ageLakay);
// console.log(ageJunJun >= 18);
// console.log(ageLakay < 30);

// console.log("number comparisons:");
// console.log(25 > 20);
// console.log(15 < 10);
// console.log(15 >= 18);
// console.log(16 <= 15);

// const isFullAge = ageJunJun >= 18;
// console.log("JunJun is adult:", isFullAge);

// console.log("Complex comparison:");
// console.log(now - 1991 > now - 2018);

// let z, y;
// z = y = 25 - 10 - 5;
// console.log(z, y);

// const averageAge = (ageJunJun + ageLakay) / 2;
// console.log(ageJunJun, ageLakay, averageAge);

// console.log("=== CODING CHALLENGE: BMI CALCULATOR ===");

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// // calculate BMI
// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// // markHigherBMI variable
// const markHigherBMI = BMIMark > BMIJohn;

// // log results
// console.log("Mark's BMI:", BMIMark);
// console.log("John's BMI:", BMIJohn);
// console.log("Is Mark's BMI higher than John's?", markHigherBMI);

console.log("=== STRING CONCATENATION & TEMPLATE LITERALS ===");

const firstName = "Junjun";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

// Using concatenation
const junjun = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(junjun);

// Using template literals
const junjunNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(junjunNew);

// Direct template literals in console.log
console.log(`I'm ${2037 - 1991} years old`);
console.log(`Math works here: ${2 + 3} equals five`);

console.log("\n=== IF ELSE STATEMENT ===");

const age = 15;
if (age >= 18) {
  console.log("Junjun can start driving license");
} else {
  const yearsLeft = 18 - age;
  console.log(`Junjun is too young. Wait another ${yearsLeft} years :)`);
}

console.log("\n=== TRUTHY AND FALSY VALUES ===");

console.log(Boolean(0));          // false
console.log(Boolean(undefined));  // false
console.log(Boolean("Lakay"));    // true
console.log(Boolean({}));         // true
console.log(Boolean(""));         // false

// CODING CHALLENGE BMI CALCULATOR

const massJunjun = 78;
const heightJunjun = 1.69;
const massLakay = 92;
const heightLakay = 1.95;

// calculate BMI
const BMIJunjun = massJunjun / heightJunjun ** 2;
const BMILakay = massLakay / (heightLakay * heightLakay);

// junjunHigherBMI variable
const junjunHigherBMI = BMIJunjun > BMILakay;

// log BMI results
console.log(BMIJunjun);
console.log(BMILakay);
console.log(junjunHigherBMI);
