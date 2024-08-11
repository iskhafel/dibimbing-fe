/**
 * groupBy
 */

// // info :

// // Object destructuring, assigning to different variable name

// const o = { p: 42, q: true, r: "halo" };

// const variable = 'r'; // coba ganti jadi p atau q, lalu lihat di console.log
// const { [variable]: extract, ...rest } = o;

// console.log(extract);
// console.log(rest);

function groupBy(arr, property) {
  // Note : asumsinya, "property" pasti ada di tiap item dari "arr"
  // tulis code di sini
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    let { [property]: extracted, ...rest } = arr[i];

    if (!result[extracted]) {
      // jika tidak ada propertynya di result
      result[extracted] = []; // initial group list
    }

    result[extracted].push(rest); // add to group list
  }

  return result;
}

const students = [
  { name: "Arkan", score: 85, age: 20 },
  { name: "Fauzan", score: 90, age: 25 },
  { name: "Ayyasyi", score: 85, age: 25 },
  { name: "Farhan", score: 85, age: 20 },
];

/*
  Expected output (scorenya hilang):
  {
    '85': [
      { name: 'Arkan', age: 20 },
      { name: 'Ayyasyi', age: 25 },
      { name: 'Farhan', age: 20 }
    ],
    '90': [ { name: 'Fauzan', age: 25 } ]
  }
  */
console.log(groupBy(students, "score"));

console.log(
  "------------------------------------------------------------------"
);

/*
  Expected output (age nya hilang):
  {
    '20': [ { name: 'Arkan', score: 85 }, { name: 'Farhan', score: 85 } ],
    '25': [ { name: 'Fauzan', score: 90 }, { name: 'Ayyasyi', score: 85 } ]
  }
  */
console.log(groupBy(students, "age"));
