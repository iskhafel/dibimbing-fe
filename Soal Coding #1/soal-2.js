/**
 * counter "yes"
 *
 * input terminal adalah "yes" / "no"
 *
 * output adalah angka dari berapa kali jumlah "yes"
 *
 * tips: ini menggunakan infinity looping & break
 */

const prompt = require("prompt-sync")();

let countYes = 0;

while (true) {
  const input = prompt("continue (yes) / berhenti (no) ? ");

  if (input === "no") {
    break;
  } else if (input === "yes") {
    countYes++;
  }
}

console.log(`Anda menginput "yes" sebanyak ${countYes} kali`);
