const names = ["Budi", "budi", "agus", "doni", "Doni"];
console.log(names.sort());

const numbers = [2, 5, 1, 9, 4, 6];
console.log(numbers.sort());

const number = [2, 10, 32, 1, 5];
console.log(number.sort());

//callback untuk sort supaya powerful

//ascending(a - b) -> small to large
//descending(b - a) -> large to small

const complexNumbers = [2, 10, 4, 6, 12];
const sortedNumbers = complexNumbers.sort((a, b) => a - b);
console.log(sortedNumbers);

const people = [
    {name:'John', age:21},
    {name:'Alices', age:12},
    {name:'Budi', age:91},
    {name:'Ari', age:30},
]
people.sort((a,b) => a.age - b.age)
console.log(people);
