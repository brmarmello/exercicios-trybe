const person = {
  name: 'Hugo',
  lastName: 'Ferreira',
  address: {
    line1: 'Rua dos Bobos',
    line2: '0',
  },
  skills: ['dormir', 'beber café', 'assistir série', 'dormir'],
};

// console.log(person);

// Object.keys
// console.log('keys', Object.keys(person));
const chaves = Object.keys(person);
for (let index = 0; index < chaves.length; index += 1) {
  console.log(person[chaves[index]]);
}

// Object.values
const values = Object.values(person);
// console.log('values', values);

// Object.entries
const entries = Object.entries(person);
// console.log('entries', entries);

