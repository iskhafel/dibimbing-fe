let listAngka = [14, 3, 2, 5, 6, 7, 4, 9];

let excluded = [2, 5, 7, 14];

for (let i = 0; i < listAngka.length; i++) {

  let isAngkaI_InList = false;
  for (let j = 0; j < excluded.length; j++) {
    // console.log(`angka_i = ${listAngka[i]} | exclude_i = ${excluded[j]}`);
    if (listAngka[i] === excluded[j]) {
      isAngkaI_InList = true;
    }
  }

  if (isAngkaI_InList) {
    continue
  } else {
    console.log(listAngka[i]);
  }
}
