function drawCircle() {
  console.log("Drawing a circle");
}

// function kelilingPersegiPanjang() {
//   return kelilingPersegiPanjang;
// }

function greet(name) {
  console.log("Hello " + name);
}

greet(1);

function sum(a, b) {
  return a + b;
}

// let total = sum(1, 2);
// console.log(total);

// let totalNilai = sum(100, 200)
// console.log(totalNilai);

let total = sum(1, 3);
let totalNilai = sum(1, 3);

console.log(total + totalNilai);

//function expression
let x = function (num) {
  return num * num;
};
console.log(x(5));

//arrow function

const tebakNama = (nama) => {
  let fullName;
  if (nama === "Windah") {
    fullName = "Windah Basudara";
  } else {
    fullName = "error";
  }
};

const kelilingPersegiPanjang = (a, b) => {
  let keliling = a * b;
  console.log(keliling);
};

const student = {
  nama: "Budi",
  panggilNama: () => {
    // console.log("a")
  },
};

const add = (a, b) => a + b;

//function
const totalPenjumlahan = (a, b, callback) => {
  let sum = add(a, b);
  callback(sum);
};

const tampilkanPenjumlahan = (jumlah) => {
  console.log("Tampilan penjumlahan " + jumlah);
};

totalPenjumlahan(2, 0, tampilkanPenjumlahan);
