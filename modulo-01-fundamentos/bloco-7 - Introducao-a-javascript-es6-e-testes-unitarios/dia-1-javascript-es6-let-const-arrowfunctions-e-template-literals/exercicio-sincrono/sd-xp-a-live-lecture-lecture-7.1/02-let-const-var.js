function greetings(name) {
  let message;

  if (name.includes('XP')) {
    message = `Olá ${name}! Vamos pra cima, sempre 🚀`;
    // var message = `Olá ${name}! Vamos pra cima, sempre 🚀`;
    // console.log(message);
  } else {
    message = `Olá ${name}! :)`;
    // var message = `Olá ${name}! :)`;
    // console.log(message);
  }

  console.log(message);
}

greetings('Turma XP, Tribo A');

const person = {
  name: 'Hugo',
  age: 18,
};

// person = {
//   name: 'Joicy',
//   age: 12,
// }

person.beard = true;

console.log(person);
