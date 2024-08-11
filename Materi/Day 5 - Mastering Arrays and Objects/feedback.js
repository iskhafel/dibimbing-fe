let arr1 = ["string", false, 12345, { key1: "1234", key2: 123 }, [1, 2, 3]];

// console.log(arr1[3].key2)
// console.log(arr1[4][0])

//push = menambahkan data di index terakhir
//pop = menghapus data di index terakhir

//unshift = menambahkan data di index pertama
//shift = menghapus data di index pertama

arr1.push("Rudi");
// console.log(arr1)

arr1.pop();
// console.log(arr1)

arr1.unshift("Ilham");
// console.log(arr1)

arr1.shift();
// console.log(arr1)

// manipulasi array dari index nya
const siswa = ["Ali", "Indra", "Cecep"];
siswa[0] = "Mamat";
// console.log(siswa)

const array = [1, "Dibimbing", 3, true];
[[1, 2, 3, 4, 5], 1, "Dibimbing", 5, true];
// console.log(array)

array.unshift([1, 2, 3, 4, 5]);
array[3] = 5;
// console.log(array)

siswa.splice(1, 0, "Cika", "Budi");
// console.log(siswa)

const array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// console.log(array2D[1][1] + "" + array2D[2][1])

const person = {
  name: "Windah",
  age: 30,
  city: "Ciputat",
};
// console.log(person.name);
// person.age = 31;
// person.alias = "bocil kematian";
// delete person.city
// console.log(person)

//property dan method

//object sendiri
// const car = {
//   //property
//   name: "flat",
//   model: "500",
//   weight: "100kg",
//   color: "white",

//   //method
//   start: function () {
//     console.log("1");
//   },
//   drive: function () {
//     console.log("2");
//   },
//   brake: function () {
//     console.log("3");
//   },
//   stop: function () {
//     console.log("4");
//   },
// };

//class object
function Car(name, model, weight, color, person) {
  //property
  this.name = name;
  this.model = model;
  this.weight = weight;
  this.color = color;
  this.person = person;
  // method
  this.start = function () {
    console.log("1");
  };
  this.drive = function () {
    console.log("2");
  };
  this.stop = function () {
    console.log("3");
  };
  this.drive = function () {
    console.log("4");
  };
  this.weightTotal = function () {
    console.log(
      `total berat saat dikendarai ${this.person} orang adalah ${
        this.weight * this.person
      }`
    );
  };
}

//object -> property dan method
//property -> variabel yang berisi nilai/value tapi didalam object
//method -> variabel yang berisi function

//function itu biasanya terdapat argument dan parameter . argument adalah inputan ketika function dipanggil . parameter berisi nilai yg harus dimasukan

const flat = new Car("flat", "1", 100, "white", 1);
const avanza = new Car("avanza", "2", 50, "black", 2);

avanza.weightTotal();

const student = {
    nama: "Ronaldo",
    nilaiUjian: [80, 90, 100, 70],
    rataNilaiUjian: 0,
    hitungRataNilaiUjian: function () {
      let totalNilai = 0;
      for (let i = 0; i < this.nilaiUjian.length; i++) {
        totalNilai += this.nilaiUjian[i];
      }
      this.rataNilaiUjian = totalNilai / this.nilaiUjian.length;
      console.log(`rata-rata nilai ${this.rataNilaiUjian}`);
    },
  };
  
  student.hitungRataNilaiUjian();
  
