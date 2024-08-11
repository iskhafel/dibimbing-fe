// soal no 1
//MajoritySweeper adalah function yang dibuat untuk mengeliminasi nilai array yang sering muncul (mayoritas) dari daftar nilai array
function MajoritySweeper(arr) {
  var arr1 = [];
  var count = 0;
  var majority;

  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    if (arr1[num]) {
      arr1[num]++;
    } else {
      arr1[num] = 1;
    }

    if (arr1[num] > count) {
      count = arr1[num];
      majority = num;
    }
  }

  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== majority) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(MajoritySweeper([9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5])); // [ 9, 3, 3, 4, 2, 5, 5, 5 ]
console.log(MajoritySweeper([22, 22, 100, 100, 100, 2000])); // [ 22, 22, 2000 ]
console.log(MajoritySweeper([2, 2])); // []
console.log(MajoritySweeper([4, 4, 4, 1, 1, 1, 2, 2])); // [ 1, 1, 1, 2, 2 ]

// soal 2
console.log("");
//PerkalianUnik adalah function yang dibuat untuk mengkalikan semua nilai array kecuali dirinya sendiri
function perkalianUnik(arr) {
  var result = [];
  var total = 1;

  for (var i = 0; i < arr.length; i++) {
    total = total * arr[i];
  }

  for (var i = 0; i < arr.length; i++) {
    result[i] = total / arr[i];
  }

  return result;
}

console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]

// soal 3
console.log("");
//AngkaPalindrome adalah function yang dibuat untuk mencetak angka yang memenuhi kriteria palindrome. Jika nilai yang diinputkan bukan palindrome maka akan mencetak angka baru yang sesuai dengan cara ditambahkan satu per satu
function angkaPalindrome(num) {
  function isPalindrome(n) {
    var str = "";
    while (n > 0) {
      str = (n % 10) + str;
      n = (n - (n % 10)) / 10;
    }

    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return str === reversed;
  }

  function nextPalindrome(n) {
    while (!isPalindrome(n)) {
      n++;
    }
    return n;
  }

  return nextPalindrome(num + 1);
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

// soal 4
console.log("");
//MengelompokkanAngka adalah function yang dibuat untuk mengelompokan angka menjadi 3 kelompok. kelompok-1 adalah angka yang bisa dibagi 2, kelompok ke-2 adalah bilangan prima dan kelompok ke-3 adalah bilangan yang bisa dibagi 3
function mengelompokkanAngka(arr) {
  // [ [angka yang bisa dibagi 2], [bilangan primer], [angka yang bisa dibagi 3] ]
  function isPrime(num) {
    if (num < 1) {
      return false;
    }
    if (num <= 3) {
      return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }
    for (var i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }

  var kelompok1 = []; //[angka yang bisa dibagi 2]
  var kelompok2 = []; //[bilangan primer]
  var kelompok3 = []; //[angka yang bisa dibagi 3]

  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    if (num % 2 === 0 && num % 3 !== 0) {
      kelompok1.push(num);
    }
    if (isPrime(num) && num % 2 !== 0 && num % 3 !== 0) {
      kelompok2.push(num);
    }
    if (num % 3 === 0) {
      kelompok3.push(num);
    }
  }

  return [kelompok1, kelompok2, kelompok3];
}
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

// soal 5
console.log("");
//PrintDataSiswa adalah function yang dibuat untuk menampilkan data siswa sesuai dengan output yang ditentukan
function PrintDataSiswa(data) {
  const list = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  function formatTgl(tanggal) {
    const elemen = tanggal.split("/");
    const dd = elemen[0];
    const mm = parseInt(elemen[1], 10) - 1;
    const yyyy = elemen[2];

    return `${dd} ${list[mm]} ${yyyy}`;
  }

  function formatArray(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
      result += ", " + arr[i];
    }
    return result;
  }

  data.students.forEach((student, Idx) => {
    const [no, nama, tempat, tanggalString, hobi] = student;
    const formattedDate = formatTgl(tanggalString);
    const formattedHobi =
      typeof hobi === "object" && hobi !== null ? formatArray(hobi) : hobi;

    console.log(`# Siswa ${Idx + 1}`);
    console.log(`- no: ${no}`);
    console.log(`- nama: ${nama}`);
    console.log(`- tempat, tanggal lahir: ${tempat}, ${formattedDate}`);
    console.log(`- hobi: ${formattedHobi}`);
    console.log("");
  });
}
const data = {
  students: [
    [
      "0001",
      "Ade Alamsyah ",
      "Jakarta",
      "21/05/2000",
      ["Membaca", "melukis", "menari"],
    ],
    ["0002", "Roman Alamsyah ", "Bandung", "15/01/1996", "Sepak bola"],
    [
      "0003",
      "Ira Alamsyah ",
      "Bandar Lampung",
      "01/08/1999",
      ["Memasak", "berkebun"],
    ],
  ],
  total: 3,
};

PrintDataSiswa(data);

// OUTPUT
// # Siswa 1
// - no: 0001
// - nama: Ade Alamsyah
// - tempat, tanggal lahir: Jakarta, 21 Mei 2000"
// - hobi: membaca, melukis, menari

// # Siswa 2
// - no: 0001
// - nama: Roman Alamsyah
// - tempat, tanggal lahir: Bandung, 15 Januari 2000"
// - hobi: Sepak bola

// # Siswa 3
// - no: 0001
// - nama: Ira Alamsyah
// - tempat, tanggal lahir: Bandar Lampung, 21 Agustus 2000"
// - hobi: Memasak, berkebun
