/**
 * Factorial:
 * - input 4, akan memiliki output 4*3*2*1 = 24  (4 * 3 factorial)
 * - input 3, akan memiliki output 3*2*1 = 6 (3 * 2 factorial)
 * - input 2, akan memiliki output 2*1 = 2 (2 * 1 faktorial)
 * - input 1, akan output 1 = 1
 * - pengecualian: 0 faktorial = 1
 */

function factorial(num) {
  // tulis code di sini

  //CARA NORMAL
  if (num === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i; // *1  *2 *3
  }
  return result;

  //CARA REKURSIF
  // if (num === 0) {
  //   return 1
  // }
  // else if (num === 1){
  //   return 1
  // }
  // else{

  // }
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(6)); // 720
console.log(factorial(10)); // 3628800
