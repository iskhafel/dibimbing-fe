/**
 * Menampilkan komponen "nilai tempat" dari suatu bilangan, contoh:
 * input: 123 (dalam bentuk number/string)
 * akan memunculkan ( console.log() ) :
 * 100
 * 20
 * 3
 */

function nilaiTempat(number) {
  // tulis code di sini

  if (number.length === 1) {
    console.log(number);
    return;
  }

  let angkaPertamaSisanyaNol = "";
  let angkaKeduaSampaiUjung = "";
  for (let i = 0; i < number.length; i++) {
    if (i === 0) {
      angkaPertamaSisanyaNol += number[i];
    } else {
      angkaPertamaSisanyaNol += "0";
      angkaKeduaSampaiUjung += number[i];
    }
  }
  console.log(angkaPertamaSisanyaNol);
  nilaiTempat(angkaKeduaSampaiUjung);
}

// expected output:
// 100
// 20
// 3
// -------------------------
// 10000
// 3000
// 400
// 50
// 2

nilaiTempat("123");
// console.log('-------------------------');
nilaiTempat("13452");
