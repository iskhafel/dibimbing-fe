function soal5(arr1, arr2) {
  let hasil = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        hasil.push(arr1[i]);
      }
    }
  }

  return hasil;
}
