const _ = require("lodash");

function Student(nama, kelas, nilaiUjian) {
  // PROPERTI
  this.nama = nama;
  this.kelas = kelas;
  this.nilaiUjian = nilaiUjian;
  this.nilaiRataUjian = 0;
  this.naikKelas = false;
  this.ranking = 0;

  // METHOD

  // SOAL 1
  this.hitungNilaiRataUjian = function () {
    let total = 0;
    let mapel = 0;
    for (let nilai in this.nilaiUjian) {
      if (this.nilaiUjian.hasOwnProperty(nilai)) {
        total += this.nilaiUjian[nilai];
        mapel++;
      }
    }
    this.nilaiRataUjian = total / mapel;
  };

  // SOAL 2
  this.hitungNaikKelas = function () {
    this.hitungNilaiRataUjian();
    this.naikKelas = this.nilaiRataUjian > 50;
  };
}

const siswa = [
  new Student("John", "10A", {
    matematika: 90,
    ipa: 87,
    ips: 80,
    bahasa: 100,
    komputer: 90,
  }),
  new Student("Mamat", "10A", {
    matematika: 30,
    ipa: 40,
    ips: 20,
    bahasa: 90,
    komputer: 30,
  }),
  new Student("Alief", "10A", {
    matematika: 50,
    ipa: 40,
    ips: 30,
    bahasa: 15,
    komputer: 30,
  }),
  new Student("Fikri", "10A", {
    matematika: 55,
    ipa: 35,
    ips: 20,
    bahasa: 20,
    komputer: 10,
  }),
  new Student("Marchel", "10A", {
    matematika: 80,
    ipa: 55,
    ips: 50,
    bahasa: 95,
    komputer: 50,
  }),
  new Student("Pandji", "10A", {
    matematika: 45,
    ipa: 55,
    ips: 40,
    bahasa: 30,
    komputer: 20,
  }),
  new Student("Deddy", "10A", {
    matematika: 35,
    ipa: 70,
    ips: 95,
    bahasa: 55,
    komputer: 65,
  }),
  new Student("Windah", "10A", {
    matematika: 10,
    ipa: 25,
    ips: 35,
    bahasa: 20,
    komputer: 15,
  }),
  new Student("Radit", "10A", {
    matematika: 50,
    ipa: 70,
    ips: 90,
    bahasa: 85,
    komputer: 60,
  }),
  new Student("Praz", "10A", {
    matematika: 60,
    ipa: 75,
    ips: 90,
    bahasa: 95,
    komputer: 90,
  }),
  new Student("Marlo", "10A", {
    matematika: 50,
    ipa: 75,
    ips: 70,
    bahasa: 75,
    komputer: 80,
  }),
  new Student("Marco", "10A", {
    matematika: 40,
    ipa: 55,
    ips: 50,
    bahasa: 65,
    komputer: 70,
  }),
];

// SOAL 3
function hitungRanking(siswa) {
  siswa.forEach((siswa) => {
    siswa.hitungNilaiRataUjian();
    siswa.hitungNaikKelas();
  });

  let urutanSiswa = _.orderBy(siswa, ["nilaiRataUjian"], ["desc"]);

  urutanSiswa.forEach((siswa, index) => {
    siswa.ranking = index + 1;
  });

  return urutanSiswa;
}

const urutanSiswa = hitungRanking(siswa);

// LOOPING LODASH
const loopSiswa = _.take(urutanSiswa, 10);

loopSiswa.forEach((siswa) => {
  console.log(
    `
    Rapor Sekolah: ${siswa.nama}
    Kelas: ${siswa.kelas}
    
    NILAI UJIAN
    matematika: ${siswa.nilaiUjian.matematika}
    ipa: ${siswa.nilaiUjian.ipa}
    ips: ${siswa.nilaiUjian.ips}
    bahasa: ${siswa.nilaiUjian.bahasa}
    komputer: ${siswa.nilaiUjian.komputer}

    NILAI RATA-RATA: ${siswa.nilaiRataUjian}

    NAIK KELAS: ${siswa.naikKelas ? "Ya" : "Tidak"}

    RANKING: ${siswa.ranking}
    `
  );
});
