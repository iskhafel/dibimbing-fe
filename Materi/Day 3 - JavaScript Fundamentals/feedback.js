// VAR, LET, CONST
var title = "Belajar Pemrograman Javascript";
var firstName = "Faishal";
var lastName = "Kamali";
console.log(title, firstName, lastName);

var title = 1;
title = 2;
console.log(title);

middleName = 123;
console.log(typeof middleName);

let address = "Bekasi";
address = "Cibubur";
console.log(address);

const country = "Indonesia";
// country = "England"
console.log(country);

let a = 12;
let b = 28;

let hasil = a + b;
console.log(hasil);
hasil = a * b;
console.log(hasil);
hasil = a ** 2;
console.log(hasil);

// OPERATOR LOGIKA

hasil = a < 20 && b > 20; // AND
console.log(hasil);
hasil = a < 20 || b > 30; // OR
console.log(hasil);
hasil = !(a === 12); //NOT
console.log(hasil);

// OPERATOR PENUGASAN
let x = 10;
x += 3;
console.log(x);

let index = 0;
let total = 0;

do {
  total += 2;
  index++;
  console.log(`total = ${total}, index ${index}`);
} while (index < x);
