/**
 * Membuat object baru, dengan perubahan & penambahan property
 */

let siswa = {
  nama: "Arkan",
  umur: 22,
};

// tulis kode di sini
let newSiswa = { ...siswa, umur: 23, pekerjaan: "programmer" };
// soal A : buat variabel newSiswa, ubah umur jadi 23 dan tambahkan pekerjaan programmer

console.log(newSiswa); // output: { nama: 'Arkan', umur: 23, pekerjaan: 'programmer' }
console.log(siswa); // output: { nama: 'Arkan', umur: 22 } (note : tetap)

// soal B : extrak ke pekerjaan & sisanya (dari variable newSiswa)

let { pekerjaan, ...sisanya } = newSiswa;

console.log(pekerjaan); // programmer
console.log(sisanya); // { nama: 'Arkan', umur: 23 }

let propertyToExtract = "pekerjaan";
let { [propertyToExtract]: extracted, ...rest } = newSiswa;

console.log(extracted);
console.log(rest);

let obj = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
  prop4: "value4",
  prop5: "value5",
};

let { prop2, prop4, ...rest2 } = obj;

console.log(prop2);
console.log(prop4);
console.log(rest2);

let newObj = {
  prop2: prop2, // jika properti & value (dari variabel), namanya sama, ga perlu ditulis ulang
  prop4,
};

console.log(newObj);
console.log({prop2: prop2, prop4: prop4, rest2: rest2}) = obj
