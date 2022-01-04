const numbers = [2, 3, 4, 5, 6, 7, 8];

const every = numbers.every((number) => number % 2 === 0);
console.log('every', every);

const some = numbers.some((number) => number % 2 === 0);
console.log('some', some);

const find = numbers.find((number) => number % 2 === 0);
console.log('find', find);

const filter = numbers.filter((number) => number % 2 === 0);
console.log('filter', filter);

const filterOdd = numbers.filter((number) => number % 2 !== 0);
console.log('filter odd', filterOdd);