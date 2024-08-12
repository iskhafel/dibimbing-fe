const fruitOfObjects = [
  { name: "apple", price: 1000 },
  { name: "orange", price: 2000 },
  { name: "grape", price: 2500 },
  { name: "banana", price: 3000 },
];
//indexOf

const fruits = ["apple", "orange", "grape", "banana", "grape"];
// const targetSearch = "grape";
const foundIndex = fruits.indexOf("grape"); //targetSearch
// console.log(foundIndex);

const foundIndexOfMango = fruits.indexOf("mango");
// console.log(foundIndexOfMango);

//findIndex

let foundIndexOfGrape = fruitOfObjects.findIndex(
  (fruit) => fruit.name === "grape"
);
// console.log(foundIndexOfGrape);

const foundIndexOfPrice = fruitOfObjects.findIndex(
  (fruit) => fruit.price === 2000
);
// console.log(foundIndexOfPrice);

const indexOfArrayObjects = fruitOfObjects.indexOf({
  name: "grape",
  price: 2500,
});
// console.log(indexOfArrayObjects);

//find and filter
const numbers = [5, 12, 2, 10, 15, 22];

const foundData = numbers.find((number) => number > 10);
// console.log(foundData);

const filteredData = numbers.filter((number) => number > 10);
// console.log(filteredData);

const filteredFruits = fruitOfObjects.filter((fruit) => fruit.price < 2500);
// console.log(filteredFruits.map((fruit) => fruit.name));

//indexOf, findIndex -> nyari index
//find, filter -> nyari data

//-------------------
//includes (array sederhana)
//some(array of objects)

const names = ["Budi", "Agus", "Doni", "Arif"];
const isNamesIncluded = names.includes("Doni", 3);
// console.log(isNamesIncluded);

const isObjectsIncluded = fruitOfObjects.some(
  (fruit) => fruit.name === "banana"
);
// console.log(isObjectsIncluded);

