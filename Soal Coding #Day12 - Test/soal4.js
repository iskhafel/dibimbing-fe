function soal4(value, measurement) {
  if (measurement == "1") {
    console.log(`${value * 10000}`);
  } else if (measurement == "2") {
    console.log(`${value * 100000}`);
  } else if (measurement == "3") {
    console.log(`${value * 39370}`);
  } else {
    console.log(`Measurement not valid, value is ${value} km`);
  }
}
