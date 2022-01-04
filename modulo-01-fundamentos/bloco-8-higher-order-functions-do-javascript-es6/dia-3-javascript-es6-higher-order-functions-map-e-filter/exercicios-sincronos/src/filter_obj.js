const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
];

const cantDrive = users.filter((user) => !user.isDriver);
// console.log('cant drive', cantDrive);

const firstLetter = users.filter((user) => user.firstName[0] === 'M');
// console.log('first letter', firstLetter);

const thirdLetter = users.filter((user) => user.firstName[2] === 'r');
// console.log('third letter', thirdLetter);

const takeOut = users.filter((user) => user.firstName !== 'Bart');
console.log('take out', takeOut);
console.log('users', users);
