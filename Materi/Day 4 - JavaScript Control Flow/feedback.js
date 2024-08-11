// switch (belanja) {
//   case 500000:
//     console.log("Selamat anda dapat piring cantik");
//     break;
//   case 100000:
//     console.log("Terimakasi sudah belanja");
//     break;
// }

// switch (true) {
//   case belanja > 100000:
//     console.log("Selamat anda dapat piring cantik");
//     break;
//   default:
//     console.log("Terimakasi sudah belanja");
//     break;
// }

// const cekTotal =
//   belanja > 100000
//     ? console.log("Selamat anda lala lulu")
//     : totalBelanja < 100000
//     ? console.log("Maaf belanjanya kurang")
//     : console.log("error");

// const user = undefined;
// let password = "12345";

// switch (user) {
//   case user:
//     if (password.length > 5) {
//       console.log("selamat datang");
//     } else {
//       console.log("periksa password anda");
//     }
//     break;
//   default:
//     console.log("periksa kembali paswordnya");
//     break;
// }

// FOR LOOP
// for (let index = 0; index < 7; index++) {
//   // deklarasi, kondisi, counter
//   console.log("index ke " + index);
// }

// WHILE LOOP
let i = 1;
while (i <= 5) {
  //   console.log("Perulangan ke-" + i)
  i++;
}

// DO WHILE LOOP
let index = 0;
do {
  //   console.log("Index ke " + index);
  index++;
} while (index < 7);

const user = {
  name: "",
  password: "12345",
  khodam: "",
};

console.log(user.password);

for (const properti in user) {
  console.log(properti + user[properti]);
}

console.log(user);

// const fruits = ["Apple", "Orange", "Mango"];
// for (let index of fruits) {
//   console.log("index ke " + index + " : " + fruits[index]);
// }

const fruits = ["Apple", "Orange", "Mango"];
for (let [index, fruit] of fruits.entries()) {
  console.log("index ke " + index + " : " + fruit);
}