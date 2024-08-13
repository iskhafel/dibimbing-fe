// 3. Buatlah Fungsi Untuk Mentrim Phonenumber Dari

// Input function merupakan sebuah string yang direpresentasikan oleh variable phone Phone adalah string yang berisi nomor telfon dengan format : xxxx-xxxxx-xxxxx dimana x merupakan sebuah angka trimPhoneNumber adalah sebuah function yang mengembalikan sebuah nilai input setelah melakukan trim untuk menghapus '-' dari input

// Contoh 1 :
// input : 0932-32323-32323
// output : 09323232332323

// Contoh 2 :
// input : 0815-14033-108889
// output : 081514033108889

// Contoh 3 :
// input : 743274832748234-843928492-392019309213
// output : 743274832748234843928492392019309213

// Lengkapilah function dibawah ini sesuai dengan deskripsi pada soal diatas!
// const trimPhonenumber = (phone) => {}

const trimPhoneNumber = (phone) => {
  let hasil = [];
  for (let i = 0; i < phone.length; i++) {
    if (phone[i] >= 0 && phone[i] <= 9) {
      hasil.push(phone[i]);
    }
  }
  return hasil.join("");
};

console.log(trimPhoneNumber("0932-32323-32323"));
console.log(trimPhoneNumber("0815-14033-108889"));
console.log(trimPhoneNumber("743274832748234-843928492-392019309213"));
