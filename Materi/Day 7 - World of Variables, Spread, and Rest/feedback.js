// // // // // var a = 1;

// // // // // if (a % 1 == 0) {
// // // // //   var genap = true;
// // // // // }

// // // // // if (genap) {
// // // // //   console.log("genap");
// // // // // }

// // // // //global scope atau window scope
// // // // let a = 1;

// // // // //function scope
// // // // function tes() {
// // // //   let b = 2;
// // // //   //name conflict
// // // //   let a = 2;
// // // // //   console.log(a);
// // // // }

// // // // tes();
// // // // // console.log(b);//ERROR! itu yang dsb function scope
// // // // console.log(a);

// // // let a = 1

// // // function abc(param) {
// // //   let functionScope = 'value';

// // //   if(param){
// // //     let blockscope = 'value'
// // //     console.log(a)
// // //     console.log(functionScope)
// // //     console.log(blockscope)
// // //   }else {
// // //     let blockscope = 'value2'
// // //     console.log(a)
// // //     console.log(functionScope)
// // //     console.log(blockscope)
// // //   }
// // // }

// // // abc(false)

// // export const API = {
// //   BASE_URL: "https://api-example.com",
// //   AUTH: {
// //     LOGIN: "/api/login",
// //     REGISTER: "/api/register",
// //   },
// //   DETAIL: {
// //     PROFILE: "/api/profile",
// //     PROFILE_DETAIL: "/api/profile-detail",
// //   },
// // };

// // function login(username, login) {
// //   console.log(`${API.BASE_URL}${API.AUTH.LOGIN}`);
// // }

// // login('lala', 123);

// var value1 = 5;

// function penjumlahan(param1) {
//   value1 = param1;
//   console.log(value1);
// }

// console.log(value1);
// penjumlahan(12);
// console.log(value1);

const dataSiswa = [
  {
    nama: "reza",
    nilai: 90,
    status: "lulus",
  },
  {
    nama: "arip",
    nilai: 50,
    status: "tidak lulus",
  },
];

// for (let index = 0; index < dataSiswa.length; index++) {
//   if (dataSiswa[index].name == "reza") {
//     dataSiswa[index].nilai = 30;
//     dataSiswa[index].status = "tidak lulus";
//   }
// }

// console.log(dataSiswa)

//rest operator
function penjumlahan(...param) {
  // console.log(x, y);
  console.log(param);
}

penjumlahan(1, 2, 3, 4, 5);

//spread operator
const num = [1, 2, 3];
const newNum = [4, 5, 6];

console.log([...num, ...newNum]);
console.log([num, newNum])

let obj1 = {
  name: "ab",
  kelas: 12,
  nilai: 90,
  status: "lulus",
  alamat: "jakarta",
};

let obj2 = {
  name: "cd",
  kelas: 12,
  nilai: 10,
  status: "tidak lulus",
  alamat: "jakarta",
};

console.log({...obj1, ...obj2});
