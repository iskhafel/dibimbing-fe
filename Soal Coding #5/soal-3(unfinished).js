/**
 * counting sort (asc / desc)
 */

function countingSortAsc(arr){
    // tulis code di sini
    let resultCount = [];
    for (let i = 0; i < arr.length; i++){
        let angka = arr[i];
        if(resultCount[angka]){
            resultCount[angka]++
        }
        else {
            resultCount[angka] - 1
        }
    }

    let result = [];
    for (let i = 0; i < resultCount.length; i++)
        let angka = i;
        let banyaknya = resultCount[i];

        if(banyaknya) {
            for(let i = 1; i <= banyaknya; i++){
                result.push(angka)
            }
        }

}

function countingSortDesc(arr){
    // tulis code di sini

}

let angka = [1,5,23,3,5,6,3,3,45,6,53,2,6,34,523,912];

console.log('dari kecil ke besar :', countingSortAsc(angka));

console.log('dari besar ke kecil :', countingSortDesc(angka));

// resultCount[3] = 5; angka 3 muncul 5 kali
// resultCount[4] = 2;
// resultCount[6] = 1;