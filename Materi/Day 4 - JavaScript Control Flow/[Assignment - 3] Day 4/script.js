let wordCount = 0;
let countUserInputPassword = 1;

const user = {
  name: "",
  password: "12345",
  khodam: "",
};

alert("SELAMAT DATANG DI WEB KHODAM CEKK!!");

// Kamu bisa mengerjakan soal no 1 dibawah sini
user.name = prompt("Masukkan nama kamu:");

while (true) {
  let userInputPassword = prompt("Masukkan Password:");

  if (userInputPassword === user.password) {
    break;
  } else {
    alert("Password salah! coba lagi!");
    countUserInputPassword++;
  }
}

// Kamu bisa mengerjakan soal no 2 dibawah sini
wordCount = user.name.trim().split(/\s+/).length;

// Kamu bisa mengerjakan soal no 3 dibawah sini
let userInputBirthMonth = prompt("Masukkan hari apa kamu lahir!");

switch (userInputBirthMonth) {
  case "Senin":
    user.khodam = "DEDE INOEN";
    break;
  case "Selasa":
    user.khodam = "WIBU PEMALAS";
    break;
  case "Rabu":
    user.khodam = "UDANG KEJU GACOAN";
    break;
  case "Kamis":
    user.khodam = "PENCURI SENDAL";
    break;
  case "Jumat":
    user.khodam = "SALAD HOKBEN";
    break;
  case "Sabtu":
    user.khodam = "BOCIL KEMATIAN";
    break;
  case "Minggu":
    user.khodam = "GOBLIN HIJAU";
    break;
  default:
    user.khodam = "KOSONG";
    break;
}

document.write(`<h2>SELAMAT DATANG ${user.name.toUpperCase()}!!</h2>`);
document.write(
  `<h3>Kamu telah mencoba memasukkan password sebanyak ${countUserInputPassword} kali</h3>`
);
document.write(`<h3>Jumlah kata pada nama kamu adalah ${wordCount}</h3>`);
document.write(`<h1>KHODAM KAMU ADALAH ${user.khodam.toUpperCase()}!!</h1>`);
