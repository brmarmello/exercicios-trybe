const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
];

const firstName = users.map((user) => user.firstName);
// console.log('first name', firstName);

// const canDrive = users.map((user) => {
//   if (user.isDriver) {
//     return user.firstName;
//   }
// });

// const canDrive = users.filter((user) => user.isDriver === true).map((user) => user.firstName);
const canDrive = users.filter((user) => user.isDriver === true);
const canDriveSeparado = canDrive.map((user) => ({ nome: user.firstName }));
console.log('can drive', canDriveSeparado);
