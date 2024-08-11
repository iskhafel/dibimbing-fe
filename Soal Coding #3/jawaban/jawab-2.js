/**
 * Menggabungkan array
 */

let array2d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// tulis code di sini
// let newArr = [...array2d[0], ...array2d[1], ...array2d[2]]

let newArr = [];
for (let i = 0; i < array2d.length; i++) {
  //   console.log(`${i} = `, array2d[i]);
  
  // cara 1
  //   for (let j = 0; j < array2d[i].length; j++) {
  //     newArr.push(array2d[i][j]);
  //   }

  // cara 2
  newArr.push(...array2d[i])
}

console.log(newArr); // output: [1,2,3,4,5,6,7,8,9]
console.log(array2d); // output: [[1,2,3],[4,5,6],[7,8,9]] (tetap sama/tidak berubah)
