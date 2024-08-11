/**
 * Bubble sort (asc / desc)
 */

// let arr = [1,7,  5,2  ,9];
// let temp = arr[2];
// arr[2] = arr[3];
// arr[3] = temp;

function bubbleSortAsc(arr) {
  // tulis code di sini

  while (true) {
    let tukeran = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] < arr[i]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        tukeran = true;
      }
    }
    if (tukeran === false) {
      break;
    }
  }
  return arr;
}

function bubbleSortDesc(arr) {
  // tulis code di sini
  while (true) {
    let tukeran = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] > arr[i]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        tukeran = true;
      }
    }
    if (tukeran === false) {
      break;
    }
  }
  return arr;
}

let angka = [1, 5, 23, 3, 5, 6, 3, 3, 45, 6, 53, 2, 6, 34, 523, 912];

console.log("dari kecil ke besar :", bubbleSortAsc(angka));

console.log("dari besar ke kecil :", bubbleSortDesc(angka));
