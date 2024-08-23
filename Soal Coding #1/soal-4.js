/**
 * Penjumlahan
 *
 * Ketentuan:
 * - jika input adalah angka, maka jumlahkan dengan angka-angka sebelumnya
 * - jika input bukan angka, misal "=" atau apapun itu, outputkan hasil penjumlahannya
 *
 * tips: dapat menggunakan regular expression (regex) untuk mengecek apakah input adalah angka
 * input.match(/^\d+$/)
 */

const prompt = require("prompt-sync")();

let x = 0;
const inputs = [];

while (true) {
  const input = prompt("input ? ");

  if (input.match(/^\d+$/)) {
    const number = Number(input);
    x += number;
    inputs.push(number);
  } else {
    break;
  }
}

console.log(`jumlah = ${inputs.join(" + ")} = ${x}`); // ini diganti dengan jumlah seluruh inputnya
