const person = {
  name: 'Hugo',
  lastName: 'Ferreira',
  age: 34,
  address: {
    line1: 'Rua dos Bobos',
    line2: '0',
  },
  skills: ['dormir', 'beber café', 'assistir série', 'dormir'],
  sayHello: () => {
    console.log('Olá! 🙂');
  },
};

console.log('O tipo de name é', typeof person.name);

console.log('O tipo de age é', typeof person.age);

console.log('O tipo de address é', typeof person.address);

console.log('O tipo de skills é', typeof person.skills);

console.log('O tipo de sayHello é', typeof person.sayHello);
