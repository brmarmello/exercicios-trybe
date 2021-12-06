const person = {
  name: 'Hugo',
  lastName: 'Ferreira',
};

// console.table(person);

console.log(`Olá querido ${person.name}`);

const getPropertiesToShow = () => {
  let a = 10;
  return ['name', 'lastName'];
};

const keys = getPropertiesToShow();

for (let index = 0; index < keys.length; index += 1) {
  const key = keys[index];
  console.log(person[key]);
}

person.age = 34;

console.table(person);

person['isBeautiful'] = true;

console.table(person);
