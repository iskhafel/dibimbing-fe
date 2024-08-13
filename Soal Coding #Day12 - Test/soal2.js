// 2. Buatlah Fungsi Untuk Menfilter Kumpulan Array Yang Memiliki Nilai Element Negatif

// Input yang diterima oleh function merupakan sebuah array yang berisi bilangan bulat dengan nilai positif ataupun negatif
// removeNegative merupakan sebuah function yang akan memfilter array yang menjadi input agar tidak ada nilai negatif didalamnya
// function removeNegative akan mengembalikan sebuah array baru yang tidak memiliki nilai negatif didalamnya

// Contoh 1 :
// input : removeNegative([1,2,3,4,5])
// output : [1,2,3,4,5]

// Contoh 2 :
// input : removeNegative([-90,-33,-44,1])
// output : [1]

// Contoh 3 :
// input : removeNegative([-1,-2,0,90,34])
// output : [0,90,34]

// Lanjutkan function dibawah ini untuk mengembalikan array seperti deskripsi pada soal diatas!
// const removeNegative = (array) => {}

const removeNegative = (array) => {
  let hasil = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      hasil.push(array[i]);
    }
  }
  return hasil;
};

console.log(removeNegative([1, 2, 3, 4, 5]));
console.log(removeNegative([-90, -33, -44, 1]));
console.log(removeNegative([-1, -2, 0, 90, 34]));
