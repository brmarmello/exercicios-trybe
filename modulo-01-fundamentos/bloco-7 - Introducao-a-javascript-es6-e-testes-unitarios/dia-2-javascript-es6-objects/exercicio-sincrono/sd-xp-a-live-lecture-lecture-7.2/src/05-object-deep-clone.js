// https://flaviocopes.com/how-to-clone-javascript-object/

const originalPerson = {
  name: 'Hugo',
  lastName: 'Ferreira',
  address: {
    line1: 'Rua dos Bobos',
    line2: '0',
  },
  skills: ['dormir', 'beber café', 'assistir série', 'dormir'],
};

const copiedPerson = Object.assign({}, originalPerson);
