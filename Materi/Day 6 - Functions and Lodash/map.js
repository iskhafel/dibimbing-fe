const _ = require("lodash");

const students = ["bayu", "aldy", "dhika"];

_.map(students, (item) => console.log(item));

const fruits = [
  {
    name: "Apple",
    color: "red",
    enak: true,
  },
  {
    name: "Grape",
    color: "green",
    enak: false,
  },
  {
    name: "Orange",
    color: "orange",
    enak: false,
  },
];

_.map(fruits, (item) => console.log(item));

//lodash map
const fruitName = _.map(fruits, "color");
console.log(fruitName);

//Filter

//ES6
console.log(fruits.filter((fruit) => fruit.enak));

//LODASH FILTER
console.log(_.filter(fruits, "enak"));
