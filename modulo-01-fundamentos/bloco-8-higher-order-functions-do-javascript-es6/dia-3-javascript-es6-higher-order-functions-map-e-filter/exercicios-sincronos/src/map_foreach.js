const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
];

// mandar email para pessoas que dirigem, eu uso map ou forEach?

// const sendEmail = (arr) => {
//   arr.forEach((user) => {
//     if (user.isDriver) {
//       console.log(`${user.firstName} vc pode dirigir`);
//     }
//   });
// };

// sendEmail(users);

const users2 = [
  { user: { firstName: 'Homer', lastName: 'Simpson' }, isDriver: true },
  { user: { firstName: 'Marge', lastName: 'Simpson' }, isDriver: true },
  { user: { firstName: 'Bart', lastName: 'Simpson' }, isDriver: false },
  { user: { firstName: 'Lisa', lastName: 'Simpson' }, isDriver: false },
  { user: { firstName: 'Maggie', lastName: 'Simpson' }, isDriver: false },
];

const sendEmail = (arr) => {
  const listaFiltrada = arr.filter((user) => {
    console.log('user filter', user);
    return user.isDriver;
  });

  const listaMapeada = listaFiltrada.map((userMap) => {
    console.log('userMap', userMap);
    return userMap.user.firstName;
  });

  return listaMapeada.forEach((userForEach) => console.log(`${userForEach} vc pode dirigir`));

};

console.log(' send email', sendEmail(users2));
