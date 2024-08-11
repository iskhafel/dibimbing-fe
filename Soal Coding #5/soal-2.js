/**
 * selection sort (asc / desc)
 */

function selectionSortAsc(arr) {
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

function selectionSortDesc(arr) {
  // tulis code di sini
}

let angka = [1, 5, 23, 3, 5, 6, 3, 3, 45, 6, 53, 2, 6, 34, 523, 912];

console.log("dari kecil ke besar :", selectionSortAsc(angka));

console.log("dari besar ke kecil :", selectionSortDesc(angka));
