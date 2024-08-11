/**
 * Rotate array 2 Dimensi
 *
 * NOTE : BEBAS MENGGUNAKAN JS FUNCTION APAPUN
 */

const rotate = (arr, num) => {
    // tulis code di sini
  
    let arr1d = [];
    for (let i = 0; i < arr.length; i++) {
      arr1d.push(...arr[i]);
    }
  
    for (let i = 0; i < num; i++) {
      let lastValue = arr1d.pop();
      arr1d.unshift(lastValue);
    }
  
    let clonedArr2d = [];
    for (let i = 0; i < arr.length; i++) {
      clonedArr2d.push([...arr[i]])
    }
  
    let idxArr1d = 0
    for (let i = 0; i < clonedArr2d.length; i++) {
      for(let j =0; j < clonedArr2d[i].length; j++) {
        clonedArr2d[i][j] = arr1d[idxArr1d]
        idxArr1d++
      } 
    }
    return clonedArr2d
  };
  
  let array2d = [
    [1, 2, 3],
    [4, 5, 6, 7], // jumlah tiap row bebas, minimal 1
    [8, 9, 10],
  ];
  
  console.log("array : ", array2d); // [ [ 1, 2, 3 ], [ 4, 5, 6, 7 ], [ 8, 9, 10 ] ]
  console.log("rotasi ke-1 : ", rotate(array2d, 1)); // output: [ [ 10, 1, 2 ], [ 3, 4, 5, 6 ], [ 7, 8, 9 ] ]
  console.log("rotasi ke-2 : ", rotate(array2d, 2)); // output: [ [ 9, 10, 1 ], [ 2, 3, 4, 5 ], [ 6, 7, 8 ] ]
  console.log("rotasi ke-12 : ", rotate(array2d, 12)); // output:  [ [ 9, 10, 1 ], [ 2, 3, 4, 5 ], [ 6, 7, 8 ] ]
  